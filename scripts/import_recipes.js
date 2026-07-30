const fs = require('fs');
const path = require('path');
const vm = require('vm');

const Ingredients = require('../ingredients.js');

// --- Helper: Public translation API ---
async function translateText(text, targetLang) {
  if (!text || !text.trim()) return "";
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const res = await fetch(url);
    const data = await res.json();
    return data[0].map(s => s[0]).join('');
  } catch (e) {
    console.error(`   ⚠️  Translation failed to ${targetLang}:`, e.message);
    return text; // fallback
  }
}

// --- Helper: Translate an array of steps ---
async function translateInstructions(steps, targetLang) {
  const results = [];
  for (const step of steps) {
    results.push(await translateText(step, targetLang));
  }
  return results;
}

// --- Helper: Convert to canonical ingredients (metric units + aisles + staples) ---
// Delegates to the shared dictionary in ingredients.js.
// Returns an array: junk rows resolve to [], compound rows ("salt and pepper") to several.
function parseAndConvertIngredient(rawName, amount, unit) {
  return Ingredients.resolve({ name: rawName, amount: amount, unit: unit });
}


// --- Scraper: Method 2 (Schema.org JSON-LD parser) ---
async function scrapeUrl(url) {
  console.log(`📡 Fetching webpage: ${url}...`);
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" }
  });
  const html = await res.text();

  console.log("🔍 Scraping Schema.org JSON-LD blocks...");
  const regex = /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let recipeData = null;

  while ((match = regex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1].trim());
      const schemas = Array.isArray(parsed) ? parsed : [parsed];
      for (const obj of schemas) {
        if (obj["@type"] === "Recipe") {
          recipeData = obj;
          break;
        }
        if (obj["@graph"] && Array.isArray(obj["@graph"])) {
          const found = obj["@graph"].find(g => g["@type"] === "Recipe");
          if (found) {
            recipeData = found;
            break;
          }
        }
      }
      if (recipeData) break;
    } catch (e) {
      // ignore parser errors
    }
  }

  if (!recipeData) {
    throw new Error("Could not find any Schema.org 'Recipe' JSON-LD object on the page.");
  }

  // Parse details
  const title = recipeData.name;
  const desc = recipeData.description || "";
  const prep = recipeData.prepTime ? recipeData.prepTime.replace("PT", "").toLowerCase() : "15m";
  const cook = recipeData.cookTime ? recipeData.cookTime.replace("PT", "").toLowerCase() : "20m";
  const servings = recipeData.recipeYield ? parseInt(recipeData.recipeYield) || 4 : 4;
  
  // Extract ingredients
  const rawIngredients = recipeData.recipeIngredient || [];
  const ingredients = Ingredients.dedupe(rawIngredients.reduce((acc, ing) => {
    // Parse name, amount, unit from raw string line (E.g. "2 cups of flour" or "250g butter")
    const cleaned = ing.trim();
    const match = cleaned.match(/^(\d+(?:\.\d+)?)\s*([a-zA-Z\.]+)?\s+(.+)$/);
    if (match) {
      return acc.concat(parseAndConvertIngredient(match[3], parseFloat(match[1]), match[2]));
    }
    return acc.concat(parseAndConvertIngredient(cleaned, null, ""));
  }, []));

  // Extract instructions
  let steps = [];
  if (Array.isArray(recipeData.recipeInstructions)) {
    steps = recipeData.recipeInstructions.map(step => {
      if (typeof step === 'string') return step;
      return step.text || step.name || "";
    }).filter(t => t.length > 0);
  } else if (typeof recipeData.recipeInstructions === 'string') {
    steps = recipeData.recipeInstructions.split("\n").filter(t => t.trim().length > 0);
  }

  return { title, desc, prep, cook, servings, ingredients, steps };
}

// --- Importer: Method 1 (Free TheMealDB Endpoint API) ---
async function fetchMealDb(mealId) {
  console.log(`📡 Fetching from TheMealDB (Meal ID: ${mealId})...`);
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const data = await res.json();
  if (!data.meals || data.meals.length === 0) {
    throw new Error(`Meal ID ${mealId} not found in TheMealDB.`);
  }

  const meal = data.meals[0];
  const title = meal.strMeal;
  const desc = `Traditional ${meal.strArea || "Global"} ${meal.strCategory || "Dish"} compiled from TheMealDB.`;
  const prep = "15 mins";
  const cook = "30 mins";
  const servings = 4;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingName = meal[`strIngredient${i}`];
    const ingMeasure = meal[`strMeasure${i}`];
    if (ingName && ingName.trim()) {
      // Split measure into amount and unit
      const cleanMeasure = ingMeasure ? ingMeasure.trim() : "";
      const match = cleanMeasure.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
      if (match) {
        parseAndConvertIngredient(ingName, parseFloat(match[1]), match[2]).forEach(i => ingredients.push(i));
      } else {
        parseAndConvertIngredient(ingName, null, cleanMeasure).forEach(i => ingredients.push(i));
      }
    }
  }

  const steps = meal.strInstructions
    .split("\r\n")
    .map(s => s.trim())
    .filter(s => s.length > 2 && !s.startsWith("STEP"));

  return { title, desc, prep, cook, servings, ingredients, steps };
}

// --- Helper: Robust parser to extract clean list of steps from raw HTML instructions ---
function extractStepsFromInstructions(instructionsHtml, analyzedInstructions) {
  let steps = [];

  // 1. Try to extract from analyzedInstructions
  if (analyzedInstructions && analyzedInstructions.length > 0) {
    for (const block of analyzedInstructions) {
      if (block.steps && block.steps.length > 0) {
        steps.push(...block.steps.map(s => s.step));
      }
    }
  }

  // 2. If no steps found, parse the instructionsHtml string
  if (steps.length === 0 && instructionsHtml) {
    // If it contains <li> tags, extract each <li> text
    const liRegex = /<li\b[^>]*>([\s\S]*?)<\/li>/gi;
    let match;
    while ((match = liRegex.exec(instructionsHtml)) !== null) {
      const stepText = match[1].replace(/<[^>]*>?/gm, '').trim();
      if (stepText) steps.push(stepText);
    }

    // If still no steps (e.g., plain text or paragraphs)
    if (steps.length === 0) {
      const cleanText = instructionsHtml.replace(/<[^>]*>?/gm, '\n');
      steps = cleanText
        .split(/\n+/)
        .map(s => s.trim())
        .filter(s => s.length > 10);
    }
  }

  // 3. Fallback
  if (steps.length === 0) {
    steps = ["Prepare ingredients according to list.", "Cook and bake to desired doneness.", "Serve hot and enjoy!"];
  }

  return steps;
}

// --- Helper: Categorize recipes into Breakfast, Main, Soup, Snack, Dessert arrays ---
function autoCategorize(title, desc) {
  const tLower = (title || "").toLowerCase();
  const dLower = (desc || "").toLowerCase();
  const categories = [];

  const hasBreakfast = /\bwaffle\b|\bpancake\b|\btoast\b|\boatmeal\b|\begg\b|\bfrittata\b|\bbreakfast\b/i.test(tLower + " " + dLower);
  const hasSoup = /\bsoup\b|\bbouillon\b|\bpotage\b|\bsoep\b|\bstew\b/i.test(tLower + " " + dLower);
  const hasDessert = /\bdessert\b|\bcake\b|\bpie\b|\btiramisu\b|\bpudding\b|\bsweet\b|\bcookie\b|\btaart\b|\bwaffle\b|\bice cream\b/i.test(tLower + " " + dLower);
  const hasSnack = /\bsnack\b|\btaco\b|\bdip\b|\bsamosa\b|\bnacho\b|\bwonton\b|\bbite\b|\bsalad\b|\bhummus\b|\bflatbread\b|\btapenade\b/i.test(tLower + " " + dLower);

  if (hasBreakfast) categories.push("breakfast");
  if (hasSoup) categories.push("soup");
  if (hasDessert) categories.push("dessert");
  if (hasSnack) categories.push("snack");

  const isMain = /\bchicken\b|\bbeef\b|\bmeat\b|\bpork\b|\bsalmon\b|\bfish\b|\btuna\b|\bpasta\b|\blasagna\b|\bcurry\b|\bcasserole\b|\bwaterzooi\b|\bstoemp\b|\bmoules\b|\bcarbonnade\b|\bvol-au-vent\b|\bsteak\b|\blamb\b|\bcod\b|\bshrimp\b/i.test(tLower + " " + dLower);

  if (isMain || categories.length === 0) {
    categories.push("main");
  }

  return [...new Set(categories)];
}

// --- Helper: Scrub Spoonacular/Foodista clinical boilerplate from descriptions ---
function sanitizeDescription(desc, lang) {
  if (!desc) return "";
  const sentences = desc.split(/(?<=[.!?])\s+/);
  const cleanSentences = sentences.filter(s => {
    const sLower = s.toLowerCase();
    if (lang === 'en') {
      if (sLower.includes('spoonacular')) return false;
      if (sLower.includes('foodista')) return false;
      if (sLower.includes('similar recipes')) return false;
      if (sLower.includes('per serving')) return false;
      if (sLower.includes('daily requirements')) return false;
      if (sLower.includes('calories') && sLower.includes('protein')) return false;
      if (sLower.includes('score of')) return false;
      if (sLower.includes('very similar to')) return false;
      if (sLower.includes('would make it again')) return false;
    } else if (lang === 'nl') {
      if (sLower.includes('spoonacular')) return false;
      if (sLower.includes('foodista')) return false;
      if (sLower.includes('vergelijkbare recepten')) return false;
      if (sLower.includes('soortgelijke recepten')) return false;
      if (sLower.includes('per portie')) return false;
      if (sLower.includes('dagelijkse behoefte')) return false;
      if (sLower.includes('calorieën') && sLower.includes('eiwit')) return false;
      if (sLower.includes('lepelscore')) return false;
      if (sLower.includes('lijken erg op dit recept')) return false;
      if (sLower.includes('zouden het nog een keer maken')) return false;
    } else if (lang === 'fr') {
      if (sLower.includes('spoonacular')) return false;
      if (sLower.includes('foodista')) return false;
      if (sLower.includes('recettes similaires')) return false;
      if (sLower.includes('par portion')) return false;
      if (sLower.includes('besoins quotidiens')) return false;
      if (sLower.includes('calories') && sLower.includes('protéine')) return false;
      if (sLower.includes('score cuillère')) return false;
      if (sLower.includes('sont très similaires')) return false;
      if (sLower.includes('le referaient')) return false;
    }
    return true;
  });
  return cleanSentences.join(' ').trim();
}

// --- Helper: Extract first sentence from text for appetizing recipe card subtitles ---
function getFirstSentence(text) {
  if (!text) return "";
  const clean = text.replace(/<[^>]*>?/gm, '').trim();
  const match = clean.match(/^[^.!?]+[.!?]/);
  let sentence = match ? match[0].trim() : clean;
  if (sentence.length > 70) {
    sentence = sentence.substring(0, 67).trim() + "...";
  }
  return sentence;
}

// --- Importer: Method 1 (Spoonacular API with Key) ---
async function fetchSpoonacular(recipeId, apiKey) {
  console.log(`📡 Fetching from Spoonacular (Recipe ID: ${recipeId})...`);
  const res = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}&includeNutrition=false`);
  if (!res.ok) {
    throw new Error(`Spoonacular request failed with status: ${res.status}`);
  }
  const recipe = await res.json();

  const title = recipe.title;
  const desc = recipe.summary ? recipe.summary.replace(/<[^>]*>?/gm, '') : "";
  const prep = `${recipe.preparationMinutes || 15} mins`;
  const cook = `${recipe.cookingMinutes || 20} mins`;
  const servings = recipe.servings || 4;

  const ingredients = Ingredients.dedupe(recipe.extendedIngredients.reduce((acc, ing) => {
    return acc.concat(parseAndConvertIngredient(ing.name, ing.amount, ing.unit));
  }, []));

  const steps = extractStepsFromInstructions(recipe.instructions, recipe.analyzedInstructions);

  return { title, desc, prep, cook, servings, ingredients, steps };
}

// --- Main Engine: Build, Translate & Write to database ---
async function main() {
  const args = process.argv.slice(2);
  let recipeSource = null;
  let sourceVal = null;
  let apiKey = process.env.SPOONACULAR_API_KEY || null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--url') {
      recipeSource = 'url';
      sourceVal = args[i + 1];
    } else if (args[i] === '--mealdb') {
      recipeSource = 'mealdb';
      sourceVal = args[i + 1];
    } else if (args[i] === '--spoonacular') {
      recipeSource = 'spoonacular';
      sourceVal = args[i + 1];
    } else if (args[i] === '--apikey') {
      apiKey = args[i + 1];
    }
  }

  if (!recipeSource || !sourceVal) {
    console.log(`
❌ Missing Arguments. Usage:
  Method 1 (MealDB):    node scripts/import_recipes.js --mealdb 52772
  Method 1 (Spoonacular): node scripts/import_recipes.js --spoonacular 644387 --apikey YOUR_API_KEY
  Method 2 (Web Scrape):  node scripts/import_recipes.js --url https://www.simplyrecipes.com/recipes/easy_shepherds_pie/
    `);
    process.exit(1);
  }

  try {
    let extracted = null;
    if (recipeSource === 'url') {
      extracted = await scrapeUrl(sourceVal);
    } else if (recipeSource === 'mealdb') {
      extracted = await fetchMealDb(sourceVal);
    } else if (recipeSource === 'spoonacular') {
      if (!apiKey) throw new Error("Spoonacular requires SPOONACULAR_API_KEY in the environment or an --apikey parameter");
      extracted = await fetchSpoonacular(sourceVal, apiKey);
    }

    console.log(`\n✅ Raw recipe fetched: "${extracted.title}"`);
    console.log(`   - Ingredients extracted: ${extracted.ingredients.length}`);
    console.log(`   - Instructions steps: ${extracted.steps.length}`);

    console.log("\n🌐 Translating to English, Dutch, and French (via Google Translate)...");
    
    console.log("   --> Translating metadata to Dutch...");
    const titleNL = await translateText(extracted.title, 'nl');
    const descNL = await translateText(extracted.desc, 'nl');
    const stepsNL = await translateInstructions(extracted.steps, 'nl');

    console.log("   --> Translating metadata to French...");
    const titleFR = await translateText(extracted.title, 'fr');
    const descFR = await translateText(extracted.desc, 'fr');
    const stepsFR = await translateInstructions(extracted.steps, 'fr');

    console.log("   --> Translating ingredients list...");
    const translatedIngredients = [];
    for (const ing of extracted.ingredients) {
      const nameEN = ing.name.en;
      // The dictionary already knows the common ones — only translate the rest.
      const known = ing.name.nl !== nameEN;
      const nameNL = known ? ing.name.nl : await translateText(nameEN, 'nl');
      const nameFR = known ? ing.name.fr : await translateText(nameEN, 'fr');

      translatedIngredients.push({
        key: ing.key,
        name: { en: nameEN, nl: nameNL, fr: nameFR },
        amount: ing.amount,
        unit: ing.unit,
        category: ing.category,
        staple: ing.staple
      });
    }

      // Scrub boilerplate descriptions
      const cleanDescEN = sanitizeDescription(extracted.desc || extracted.title, 'en');
      const cleanDescNL = sanitizeDescription(descNL || titleNL, 'nl');
      const cleanDescFR = sanitizeDescription(descFR || titleFR, 'fr');

      const newRecipe = {
        id: uniqueId,
        prepTime: extracted.prep,
        cookTime: extracted.cook,
        difficulty: { en: "Medium", nl: "Gemiddeld", fr: "Moyen" },
        servings: extracted.servings,
        category: autoCategorize(extracted.title, extracted.desc || ""),
        image: "images/witloof_gratin.jpg", // default cover placeholder
        // Scraped and MealDB sources carry no diet metadata at all, so the
        // flags are worked out from the ingredient list.
        ...Ingredients.deriveDietFlags(translatedIngredients, {}),
        translations: {
          en: {
            title: extracted.title,
            subtitle: getFirstSentence(cleanDescEN || extracted.title),
            description: cleanDescEN,
            instructions: extracted.steps
          },
          nl: {
            title: titleNL,
            subtitle: getFirstSentence(cleanDescNL || titleNL),
            description: cleanDescNL,
            instructions: stepsNL
          },
          fr: {
            title: titleFR,
            subtitle: getFirstSentence(cleanDescFR || titleFR),
            description: cleanDescFR,
            instructions: stepsFR
          }
        },
      ingredients: translatedIngredients
    };

    // --- Write back to recipes.js ---
    const dbPath = path.join(__dirname, '..', 'recipes.js');
    console.log(`\n💾 Reading local database: ${dbPath}`);
    const fileContent = fs.readFileSync(dbPath, 'utf8');

    // Safe execution sandbox to parse current JS array
    const sandbox = { window: {} };
    vm.createContext(sandbox);
    vm.runInNewContext(fileContent, sandbox);

    const recipesArray = sandbox.initialRecipes || sandbox.window.initialRecipes;
    if (!recipesArray) {
      throw new Error("Unable to parse initialRecipes array from recipes.js");
    }

    // Push & save
    recipesArray.push(newRecipe);
    console.log(`   - Appending recipe to database. Total recipes: ${recipesArray.length}`);

    const outputContent = `// Expanded Trilingual Recipe Database (English, Dutch, French)\n// Includes strict allergen and diet indexing flags for fast filtering\nwindow.initialRecipes = ${JSON.stringify(recipesArray, null, 2)};\n`;
    fs.writeFileSync(dbPath, outputContent, 'utf8');

    console.log("\n🎉 IMPORTER COMPLETED! Your new recipe is loaded and ready.");
  } catch (err) {
    console.error("\n❌ Importer crashed:", err.message);
  }
}

main();
