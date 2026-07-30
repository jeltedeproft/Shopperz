const fs = require('fs');
const path = require('path');
const vm = require('vm');

const Ingredients = require('../ingredients.js');
const RecipeDb = require('./recipe_db.js');

// --- Helper: Public translation API with retries and sl=en ---
async function translateText(text, targetLang) {
  if (!text || !text.trim()) return "";
  const cleanText = text.replace(/<[^>]*>?/gm, '');
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(cleanText)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    // 80ms throttle to prevent Google Translate rate limits
    await new Promise(resolve => setTimeout(resolve, 80));
    return data[0].map(s => s[0]).join('');
  } catch (e) {
    return cleanText; // fallback to English
  }
}

async function translateInstructions(steps, targetLang) {
  const results = [];
  for (const step of steps) {
    results.push(await translateText(step, targetLang));
  }
  return results;
}

// --- Helper: Convert to canonical ingredients (metric units + aisles + staples) ---
// Delegates to the shared dictionary so imports match hand-written recipes.
// Returns an array: junk rows resolve to [], compound rows ("salt and pepper") to several.
function parseAndConvertIngredient(rawName, amount, unit) {
  return Ingredients.resolve({ name: rawName, amount: amount, unit: unit });
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

// --- Main Engine ---
async function main() {
  const args = process.argv.slice(2);
  let apiKey = process.env.SPOONACULAR_API_KEY || null;
  let number = 100; // default to 100

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--apiKey') apiKey = args[i + 1];
    else if (args[i] === '--count') number = parseInt(args[i + 1]) || 100;
  }

  if (!apiKey) {
    console.error("❌ No Spoonacular API key. Set SPOONACULAR_API_KEY or pass --apiKey <key>.");
    process.exit(1);
  }

  console.log(`📡 Fetching ${number} Random Recipes from Spoonacular API...`);
  const endpoint = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${number}&instructionsRequired=true`;

  try {
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`Spoonacular returned HTTP ${res.status}: ${await res.text()}`);
    }
    const data = await res.json();
    const rawRecipes = data.recipes || [];

    if (rawRecipes.length === 0) {
      console.log("❌ No recipes returned from random endpoint.");
      return;
    }

    console.log(`\n✅ Fetched ${rawRecipes.length} recipes. Starting incremental translations and database writing...`);
    const dbPath = path.join(__dirname, '..', 'recipes.js');

    for (let idx = 0; idx < rawRecipes.length; idx++) {
      const recipe = rawRecipes[idx];
      const uniqueId = `spoonacular-${recipe.id}`;

      // Check before translating — a duplicate costs API calls and minutes.
      const recipesArray = RecipeDb.load();
      const duplicate = RecipeDb.findDuplicate(recipesArray, { id: uniqueId, title: recipe.title });
      if (duplicate) {
        console.log(`⏭️  [${idx + 1}/${rawRecipes.length}] Already have "${duplicate.translations.en.title}", skipping "${recipe.title}"`);
        continue;
      }

      console.log(`\n🔄 [${idx + 1}/${rawRecipes.length}] Importing: "${recipe.title}"`);
      try {
        const prep = `${recipe.readyInMinutes || 25} mins`;
        const cook = `${recipe.cookingMinutes || 15} mins`;
        const servings = recipe.servings || 4;

        // Parse instructions
        const steps = extractStepsFromInstructions(recipe.instructions, recipe.analyzedInstructions);

        // Convert ingredients
        const ingredientsList = recipe.extendedIngredients || [];
        const convertedIngredients = Ingredients.dedupe(
          ingredientsList.reduce((acc, ing) => {
            return acc.concat(parseAndConvertIngredient(ing.name, ing.amount, ing.unit));
          }, [])
        );

        // Translate metadata to Dutch
        const titleNL = await translateText(recipe.title, 'nl');
        const descNL = await translateText(recipe.summary || recipe.title, 'nl');
        const stepsNL = await translateInstructions(steps, 'nl');

        // Translate metadata to French
        const titleFR = await translateText(recipe.title, 'fr');
        const descFR = await translateText(recipe.summary || recipe.title, 'fr');
        const stepsFR = await translateInstructions(steps, 'fr');

        // Translate ingredients list
        const translatedIngredients = [];
        for (const ing of convertedIngredients) {
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

        // Diet tags
        const isVeg = recipe.vegetarian || false;
        const isVegan = recipe.vegan || false;
        const isGF = recipe.glutenFree || false;
        const isDairyFree = recipe.dairyFree || false;

        // Scrub boilerplate descriptions
        const cleanDescEN = sanitizeDescription(recipe.summary || recipe.title, 'en');
        const cleanDescNL = sanitizeDescription(descNL || titleNL, 'nl');
        const cleanDescFR = sanitizeDescription(descFR || titleFR, 'fr');

        const newRecipe = {
          id: uniqueId,
          prepTime: prep,
          cookTime: cook,
          difficulty: { en: "Medium", nl: "Gemiddeld", fr: "Moyen" },
          servings: servings,
          category: autoCategorize(recipe.title, recipe.summary || ""),
          image: recipe.image || "images/witloof_gratin.jpg",
          // Diet flags come from the ingredients; the source flags only ever
          // make a claim stricter. Never assert an allergen-free claim blind.
          ...Ingredients.deriveDietFlags(translatedIngredients, {
            isVegetarian: isVeg || isVegan,
            isVegan: isVegan,
            isGlutenFree: isGF,
            isDairyFree: isDairyFree
          }),
          translations: {
            en: {
              title: recipe.title,
              subtitle: getFirstSentence(cleanDescEN || recipe.title),
              description: cleanDescEN,
              instructions: steps
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

        // Reload fresh array state, push, and save
        const activeRecipes = RecipeDb.load();
        const lateDuplicate = RecipeDb.findDuplicate(activeRecipes, newRecipe);
        if (lateDuplicate) {
          console.log(`   └─ Turned out to be "${lateDuplicate.translations.en.title}" after translating, skipped.`);
          continue;
        }

        activeRecipes.push(newRecipe);
        RecipeDb.save(activeRecipes);

        console.log(`   └─ Successfully imported. Total in DB: ${activeRecipes.length}`);
      } catch (err) {
        console.error(`   ❌ Failed importing "${recipe.title}":`, err.message);
      }
    }

    console.log(`\n🎉 RANDOM BULK IMPORT COMPLETED!`);
  } catch (err) {
    console.error("\n❌ Importer crashed:", err.message);
  }
}

main();
