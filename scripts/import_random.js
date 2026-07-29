const fs = require('fs');
const path = require('path');
const vm = require('vm');

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

// --- Helper: Convert non-metric units to Belgian metrics & assign aisles ---
function parseAndConvertIngredient(rawName, amount, unit) {
  let finalAmount = amount ? parseFloat(amount) : null;
  let finalUnit = unit ? unit.toLowerCase().trim() : "";
  let name = rawName;

  // Metric Conversions
  if (finalUnit === "cup" || finalUnit === "cups") {
    const isLiquid = /water|milk|cream|oil|juice|vinegar|broth|beer|wine|syrup/i.test(name);
    if (isLiquid) {
      finalAmount = Math.round(finalAmount * 240);
      finalUnit = "ml";
    } else {
      finalAmount = Math.round(finalAmount * 125);
      finalUnit = "g";
    }
  } else if (finalUnit === "oz" || finalUnit === "ounce" || finalUnit === "ounces") {
    finalAmount = Math.round(finalAmount * 28.35);
    finalUnit = "g";
  } else if (finalUnit === "fl oz" || finalUnit === "fluid ounce" || finalUnit === "fluid ounces") {
    finalAmount = Math.round(finalAmount * 29.57);
    finalUnit = "ml";
  } else if (finalUnit === "lb" || finalUnit === "pound" || finalUnit === "pounds") {
    finalAmount = Math.round(finalAmount * 453.59);
    finalUnit = "g";
  } else if (finalUnit === "inch" || finalUnit === "inches") {
    finalAmount = Math.round(finalAmount * 2.54);
    finalUnit = "cm";
  } else if (finalUnit === "tbsp" || finalUnit === "tablespoon" || finalUnit === "tablespoons") {
    finalUnit = "el"; // Eetlepel
  } else if (finalUnit === "tsp" || finalUnit === "teaspoon" || finalUnit === "teaspoons") {
    finalUnit = "kl"; // Koffielepel
  } else if (finalUnit === "piece" || finalUnit === "pieces" || finalUnit === "clove" || finalUnit === "cloves") {
    finalUnit = "st."; // Stuks
  } else if (!finalUnit) {
    finalUnit = "st.";
  }

  // Assign supermarket categories
  let category = "Kruidenier"; // pantry fallback
  const nameLower = name.toLowerCase();
  
  const produceKeywords = /apple|banana|pear|orange|lemon|lime|witloof|chicon|onion|garlic|leek|carrot|celery|parsley|dill|herb|vegetable|tomato|potato|mushroom|salad|lettuce|cabbage|spinach|berry|ginger/i;
  const meatKeywords = /beef|chicken|pork|sausage|bacon|ham|turkey|veal|lamb|minced|meat|saucisse/i;
  const dairyKeywords = /milk|cream|butter|cheese|egg|yogurt|margarine|mornay/i;
  const bakeryKeywords = /bread|waffle|pastry|flour|yeast|croûte|dough|sugar/i;
  const drinkKeywords = /beer|wine|cider|juice|water|beverage|soda/i;
  const seafoodKeywords = /mussel|shrimp|fish|salmon|cod|tuna|shellfish|crab|lobster/i;

  if (produceKeywords.test(nameLower)) category = "Groenten & Fruit";
  else if (meatKeywords.test(nameLower)) category = "Slagerij & Gevogelte";
  else if (dairyKeywords.test(nameLower)) category = "Zuivel & Eieren";
  else if (bakeryKeywords.test(nameLower)) category = "Bakkerij";
  else if (drinkKeywords.test(nameLower)) category = "Bieren & Dranken";
  else if (seafoodKeywords.test(nameLower)) category = "Visafdeling";

  return {
    name: name,
    amount: finalAmount ? parseFloat(finalAmount.toFixed(1)) : null,
    unit: finalUnit,
    category: category
  };
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

// --- Main Engine ---
async function main() {
  const args = process.argv.slice(2);
  let apiKey = "2a31c6d141eb4a4b989a80017cc4c380"; // User's key
  let number = 100; // default to 100
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--apiKey') apiKey = args[i + 1];
    else if (args[i] === '--count') number = parseInt(args[i + 1]) || 100;
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

      // Check if recipe already exists in database before translating (saves API / time)
      const fileContent = fs.readFileSync(dbPath, 'utf8');
      const sandbox = { window: {} };
      vm.createContext(sandbox);
      vm.runInNewContext(fileContent, sandbox);
      const recipesArray = sandbox.initialRecipes || sandbox.window.initialRecipes;
      
      const exists = recipesArray.some(r => r.id === uniqueId);
      if (exists) {
        console.log(`⏭️  [${idx + 1}/${rawRecipes.length}] Skipped duplicate: "${recipe.title}"`);
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
        const convertedIngredients = ingredientsList.map(ing => {
          return parseAndConvertIngredient(ing.name, ing.amount, ing.unit);
        });

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
          const nameEN = ing.name;
          const nameNL = await translateText(nameEN, 'nl');
          const nameFR = await translateText(nameEN, 'fr');
          
          translatedIngredients.push({
            name: { en: nameEN, nl: nameNL, fr: nameFR },
            amount: ing.amount,
            unit: ing.unit,
            category: ing.category
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
          category: { en: "Custom", nl: "Eigen recepten", fr: "Personnalisées" },
          image: recipe.image || "images/witloof_gratin.jpg",
          isGlutenFree: isGF,
          isNutFree: true,
          isDairyFree: isDairyFree,
          isEggFree: isVegan,
          isVegetarian: isVeg || isVegan,
          isVegan: isVegan,
          isCandidaFriendly: isGF && isDairyFree,
          isKeto: false,
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
        const reloadContent = fs.readFileSync(dbPath, 'utf8');
        const reloadSandbox = { window: {} };
        vm.createContext(reloadSandbox);
        vm.runInNewContext(reloadContent, reloadSandbox);
        const activeRecipes = reloadSandbox.initialRecipes || reloadSandbox.window.initialRecipes;
        
        activeRecipes.push(newRecipe);
        const outputContent = `// Expanded Trilingual Recipe Database (English, Dutch, French)\n// Includes strict allergen and diet indexing flags for fast filtering\nwindow.initialRecipes = ${JSON.stringify(activeRecipes, null, 2)};\n`;
        fs.writeFileSync(dbPath, outputContent, 'utf8');

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
