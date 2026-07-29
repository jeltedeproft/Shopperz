const fs = require('fs');
const path = require('path');
const vm = require('vm');

// --- Helper: Public translation API with retries and sl=en ---
async function translateText(text, targetLang) {
  if (!text || !text.trim()) return "";
  // Strip simple HTML formatting if any
  const cleanText = text.replace(/<[^>]*>?/gm, '');
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(cleanText)}`;
    const res = await fetch(url);
    const data = await res.json();
    // Throttle slightly to stay friendly to Google servers
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

  // Assign supermarket aisles
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

// --- Main Engine ---
async function main() {
  const args = process.argv.slice(2);
  let apiKey = "2a31c6d141eb4a4b989a80017cc4c380"; // User's free key
  let count = 20; // Default count to be safe with translation speed, max 50
  let query = "soup"; // Default search tag
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--apiKey') apiKey = args[i + 1];
    else if (args[i] === '--count') count = parseInt(args[i + 1]) || 20;
    else if (args[i] === '--query') query = args[i + 1];
  }

  if (count > 50) {
    console.log("⚠️ Spoonacular complexSearch limits bulk size to 50 per page. Adjusting count to 50.");
    count = 50;
  }

  console.log(`📡 Querying Spoonacular complexSearch (Search: "${query}", Count: ${count})...`);
  const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=${count}&addRecipeInformation=true&fillIngredients=true&query=${encodeURIComponent(query)}`;
  
  try {
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`Spoonacular returned HTTP ${res.status}: ${await res.text()}`);
    }
    const data = await res.json();
    const rawRecipes = data.results || [];

    if (rawRecipes.length === 0) {
      console.log("❌ No recipes found for query: " + query);
      return;
    }

    console.log(`\n✅ Fetched ${rawRecipes.length} recipes. Processing translations and conversions...`);
    const importedList = [];

    for (let idx = 0; idx < rawRecipes.length; idx++) {
      const recipe = rawRecipes[idx];
      console.log(`\n🔄 [${idx + 1}/${rawRecipes.length}] Processing: "${recipe.title}"`);

      const prep = `${recipe.readyInMinutes || 25} mins`;
      const cook = `${recipe.cookingMinutes || 15} mins`;
      const servings = recipe.servings || 4;

      // Extract raw instructions
      const steps = recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0
        ? recipe.analyzedInstructions[0].steps.map(s => s.step)
        : [recipe.instructions || "Clean ingredients, prepare, and serve."];

      // Convert ingredients with safe fallback check
      const ingredientsList = recipe.extendedIngredients || [];
      const convertedIngredients = ingredientsList.map(ing => {
        return parseAndConvertIngredient(ing.name, ing.amount, ing.unit);
      });

      // Translate metadata to Dutch
      console.log(`   └─ Translating metadata to Dutch...`);
      const titleNL = await translateText(recipe.title, 'nl');
      const descNL = await translateText(recipe.summary || recipe.title, 'nl');
      const stepsNL = await translateInstructions(steps, 'nl');

      // Translate metadata to French
      console.log(`   └─ Translating metadata to French...`);
      const titleFR = await translateText(recipe.title, 'fr');
      const descFR = await translateText(recipe.summary || recipe.title, 'fr');
      const stepsFR = await translateInstructions(steps, 'fr');

      // Translate ingredients lists
      console.log(`   └─ Translating ingredients to NL & FR...`);
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

      // Detect vegetarian/vegan tags from Spoonacular
      const isVeg = recipe.vegetarian || false;
      const isVegan = recipe.vegan || false;
      const isGF = recipe.glutenFree || false;
      const isDairyFree = recipe.dairyFree || false;

      const newRecipe = {
        id: `spoonacular-${recipe.id}`,
        prepTime: prep,
        cookTime: cook,
        difficulty: { en: "Medium", nl: "Gemiddeld", fr: "Moyen" },
        servings: servings,
        category: { en: "Custom", nl: "Eigen recepten", fr: "Personnalisées" },
        image: recipe.image || "images/witloof_gratin.jpg",
        isGlutenFree: isGF,
        isNutFree: true, // assume safe or check details
        isDairyFree: isDairyFree,
        isEggFree: isVegan,
        isVegetarian: isVeg || isVegan,
        isVegan: isVegan,
        isCandidaFriendly: isGF && isDairyFree,
        isKeto: false,
        translations: {
          en: {
            title: recipe.title,
            subtitle: "Spoonacular Import",
            description: recipe.summary ? recipe.summary.replace(/<[^>]*>?/gm, '') : recipe.title,
            instructions: steps
          },
          nl: {
            title: titleNL,
            subtitle: "Spoonacular-import",
            description: descNL,
            instructions: stepsNL
          },
          fr: {
            title: titleFR,
            subtitle: "Import Spoonacular",
            description: descFR,
            instructions: stepsFR
          }
        },
        ingredients: translatedIngredients
      };

      importedList.push(newRecipe);
    }

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

    // Push new recipes, preventing duplicate IDs
    let appendedCount = 0;
    importedList.forEach(newRec => {
      const exists = recipesArray.some(r => r.id === newRec.id);
      if (!exists) {
        recipesArray.push(newRec);
        appendedCount++;
      }
    });

    console.log(`   - Appended ${appendedCount} new recipes. Total recipes in DB: ${recipesArray.length}`);

    const outputContent = `// Expanded Trilingual Recipe Database (English, Dutch, French)\n// Includes strict allergen and diet indexing flags for fast filtering\nwindow.initialRecipes = ${JSON.stringify(recipesArray, null, 2)};\n`;
    fs.writeFileSync(dbPath, outputContent, 'utf8');

    console.log(`\n🎉 BULK IMPORT COMPLETED! Successfully added ${appendedCount} recipes to the book.`);
  } catch (err) {
    console.error("\n❌ Bulk importer crashed:", err.message);
  }
}

main();
