// --- Translation Dictionaries ---
const uiTranslations = {
  en: {
    appTitle: "Mijn Kookpot",
    appSubtitle: "Belgian Recipe & Grocery Companion",
    discover: "Discover",
    recipes: "Recipes",
    checklist: "Checklist",
    settings: "Settings",
    searchPlaceholder: "Search recipes or ingredients...",
    suggestedTitle: "Suggested Belgian Classic",
    exploreTitle: "Explore Recipes",
    seeAll: "See all",
    recipeBookTitle: "Recipe Book",
    recipeBookDesc: "Your collection of premium Belgian dishes",
    recipeCategoryAll: "All",
    recipeCategoryBreakfast: "Breakfast",
    recipeCategoryMain: "Hoofdgerecht",
    recipeCategorySoup: "Soup",
    recipeCategorySnack: "Snack",
    recipeCategoryDessert: "Dessert",
    createRecipeHeader: "Create Custom Recipe",
    editRecipeHeader: "Edit Recipe",
    checklistTitle: "Grocery List",
    checklistDesc: "Sorted by supermarket aisles for quick navigation",
    clearCheckedBtn: "Clear Checked",
    customItemPlaceholder: "E.g., witloof...",
    emptyListHeader: "Your checklist is empty",
    emptyListDesc: "Select recipes or add items manually!",
    prefTitle: "Preferences",
    prefDesc: "Configure language and shopping preferences",
    langGroupTitle: "Language Settings",
    langSelectLabel: "App Language",
    langSelectDesc: "Choose the interface language",
    dangerZoneTitle: "Danger Zone",
    resetDbLabel: "Delete My Recipes",
    resetDbDesc: "Removes recipes you created yourself",
    resetBtnText: "Delete",
    resetListLabel: "Empty Grocery List",
    resetListDesc: "Deletes all items in grocery checklist",
    resetListBtnText: "Wipe List",
    prepTimeLabel: "Prep Time",
    cookTimeLabel: "Cook Time",
    diffLabel: "Difficulty",
    servingsLabel: "Servings Size",
    servingsDesc: "Ingredients scale instantly",
    addIngredientsBtn: "Add to Grocery List",
    instructionsTitle: "Cooking Instructions",
    ingredientsTitle: "Ingredients (Metric)",
    toastDeselected: "Deselected recipe",
    toastSelected: "Selected recipe",
    toastAddedSingle: "Ingredients added to grocery list!",
    toastAddedBatch: "Generated grocery list for planned recipes!",
    batchSelectedText: "Selected: {count} recipes",
    batchGenerateBtn: "Generate List",
    difficultyEasy: "Easy",
    difficultyMedium: "Medium",
    difficultyHard: "Hard",
    aisleProduce: "🥕 Vegetables & Fruit",
    aisleMeat: "🥩 Meat & Poultry",
    aisleDairy: "🧀 Dairy & Eggs",
    aisleBakery: "🍞 Bakery",
    aisleDrinks: "🍺 Beverages / Belgian Beers",
    aislePantry: "🥫 Pantry / Grocery",
    aisleSeafood: "🐟 Seafood",
    aisleFrozen: "🧊 Frozen",
    aisleSpices: "🧂 Herbs & Spices",
    dietFilterLabel: "Diets",
    intoleranceFilterLabel: "Allergens & Intolerances",
    dietVegetarian: "Vegetarian",
    dietVegan: "Vegan",
    dietCandida: "Candida Diet",
    dietKeto: "Keto",
    intolGluten: "Gluten-Free",
    intolNuts: "Nut-Free",
    intolDairy: "Dairy-Free",
    intolEggs: "Egg-Free",
    allergenDisclaimer: "Worked out from the ingredient list — always check the recipe yourself if an allergy is serious.",
    scaleTestTitle: "Performance Scale Testing",
    scaleTestLabel: "Load 2,000 Demo Recipes",
    scaleTestDesc: "Simulate thousands of recipes to test search speed",
    generateBtnText: "Generate",
    // Shopping preferences
    shoppingGroupTitle: "Shopping",
    skipStaplesLabel: "Skip pantry staples",
    skipStaplesDesc: "Leave out salt, pepper, oil and spices you already have",
    // Grocery list
    allItems: "All Items",
    itemsChecked: "items checked",
    exportBtn: "Share list",
    exportCopied: "List copied to clipboard!",
    staplesSkipped: "{count} pantry staples skipped",
    staplesHint: "Tap one to add it anyway",
    fromRecipes: "from",
    qtyPlaceholder: "Qty (e.g. 500g, 2)",
    // Recipe editing
    editRecipeBtn: "Edit",
    deleteRecipeBtn: "Delete",
    confirmDeleteRecipe: "Delete this recipe permanently?",
    toastRecipeCreated: "Recipe created: {name}",
    toastRecipeUpdated: "Recipe updated: {name}",
    toastRecipeDeleted: "Recipe deleted",
    customBadge: "Own recipe",
    dietFlagsLabel: "Dietary tags",
    saveRecipeBtn: "Save Recipe",
    cancelBtn: "Cancel",
    // Empty / feedback states
    noResults: "No matching recipes found",
    noResultsFor: 'No recipes match "{query}"',
    noInstructions: "No instructions",
    noIngredientsAdded: "No ingredients added.",
    needIngredients: "Please add at least one ingredient.",
    needInstructions: "Please add at least one instruction.",
    toastItemAdded: "Added: {name}",
    showingCount: "Showing {shown} of {total}",
    confirmResetRecipes: "Delete all recipes you created yourself?",
    confirmWipeList: "Wipe entire grocery list?",
    toastRecipesReset: "Own recipes deleted",
    toastListWiped: "Grocery list wiped!",
    toastClearedChecked: "Cleared checked items!",
    toastFavAdded: "Added to favorites!",
    toastFavRemoved: "Removed from favorites",
    toastBulkLoaded: "⚡ Successfully loaded 2,000 test recipes!",
    cookModeStep: "Step {current} of {total}",
    cookModeNext: "Next →",
    cookModeFinish: "Finish!",
    cookModeBack: "← Back",
    cookModeDone: "Happy dining! Enjoy your meal!"
  },
  nl: {
    appTitle: "Mijn Kookpot",
    appSubtitle: "Belgische Boodschappen & Recepten",
    discover: "Ontdek",
    recipes: "Recepten",
    checklist: "Checklist",
    settings: "Instellingen",
    searchPlaceholder: "Zoek recepten of ingrediënten...",
    suggestedTitle: "Geselecteerde Belgische Klassieker",
    exploreTitle: "Ontdek Recepten",
    seeAll: "Bekijk alles",
    recipeBookTitle: "Kookboek",
    recipeBookDesc: "Jouw collectie van Belgische gerechten",
    recipeCategoryAll: "Alle",
    recipeCategoryBreakfast: "Ontbijt",
    recipeCategoryMain: "Hoofdgerecht",
    recipeCategorySoup: "Soep",
    recipeCategorySnack: "Snack",
    recipeCategoryDessert: "Dessert",
    createRecipeHeader: "Nieuw Recept Toevoegen",
    editRecipeHeader: "Recept Bewerken",
    checklistTitle: "Boodschappenlijst",
    checklistDesc: "Gesorteerd per winkelafdeling voor snel winkelen",
    clearCheckedBtn: "Wis afgevinkt",
    customItemPlaceholder: "Bv. witloof...",
    emptyListHeader: "Je boodschappenlijst is leeg",
    emptyListDesc: "Selecteer recepten of voeg zelf items toe!",
    prefTitle: "Instellingen",
    prefDesc: "Stel je taal- en winkelvoorkeuren in",
    langGroupTitle: "Taalinstellingen",
    langSelectLabel: "App Taal",
    langSelectDesc: "Kies de interfacetaal van de app",
    dangerZoneTitle: "Gevarenzone",
    resetDbLabel: "Verwijder Mijn Recepten",
    resetDbDesc: "Wist de recepten die je zelf hebt gemaakt",
    resetBtnText: "Verwijderen",
    resetListLabel: "Wis Boodschappenlijst",
    resetListDesc: "Verwijdert alle items van de lijst",
    resetListBtnText: "Wissen",
    prepTimeLabel: "Voorbereiding",
    cookTimeLabel: "Kooktijd",
    diffLabel: "Moeilijkheid",
    servingsLabel: "Aantal Porties",
    servingsDesc: "Ingrediënten schalen mee",
    addIngredientsBtn: "Voeg toe aan boodschappenlijst",
    instructionsTitle: "Bereidingswijze",
    ingredientsTitle: "Ingrediënten (Metrisch)",
    toastDeselected: "Recept gedeselecteerd",
    toastSelected: "Recept geselecteerd",
    toastAddedSingle: "Ingrediënten toegevoegd aan boodschappenlijst!",
    toastAddedBatch: "Boodschappenlijst gegenereerd voor geselecteerde recepten!",
    batchSelectedText: "Geselecteerd: {count} recepten",
    batchGenerateBtn: "Lijst Maken",
    difficultyEasy: "Gemakkelijk",
    difficultyMedium: "Gemiddeld",
    difficultyHard: "Moeilijk",
    aisleProduce: "🥕 Groenten & Fruit",
    aisleMeat: "🥩 Slagerij & Gevogelte",
    aisleDairy: "🧀 Zuivel & Eieren",
    aisleBakery: "🍞 Bakkerij",
    aisleDrinks: "🍺 Bieren & Dranken",
    aislePantry: "🥫 Kruidenier",
    aisleSeafood: "🐟 Visafdeling",
    aisleFrozen: "🧊 Diepvries",
    aisleSpices: "🧂 Kruiden & Specerijen",
    dietFilterLabel: "Diëten",
    intoleranceFilterLabel: "Allergenen & Intoleranties",
    dietVegetarian: "Vegetarisch",
    dietVegan: "Vegan",
    dietCandida: "Candida Dieet",
    dietKeto: "Keto",
    intolGluten: "Glutenvrij",
    intolNuts: "Notenvrij",
    intolDairy: "Lactosevrij",
    intolEggs: "Eivrij",
    allergenDisclaimer: "Afgeleid uit de ingrediëntenlijst — controleer het recept zelf bij een ernstige allergie.",
    scaleTestTitle: "Prestatie Schaaltest",
    scaleTestLabel: "Laad 2.000 testrecepten",
    scaleTestDesc: "Simuleer duizenden recepten om de zoeksnelheid te testen",
    generateBtnText: "Genereren",
    shoppingGroupTitle: "Winkelen",
    skipStaplesLabel: "Sla voorraadkast-basics over",
    skipStaplesDesc: "Laat zout, peper, olie en kruiden weg die je al hebt",
    allItems: "Alle Items",
    itemsChecked: "items afgevinkt",
    exportBtn: "Lijst delen",
    exportCopied: "Lijst gekopieerd naar klembord!",
    staplesSkipped: "{count} basisproducten overgeslagen",
    staplesHint: "Tik erop om ze toch toe te voegen",
    fromRecipes: "van",
    qtyPlaceholder: "Hoeveelheid (bv. 500g, 2)",
    editRecipeBtn: "Bewerken",
    deleteRecipeBtn: "Verwijderen",
    confirmDeleteRecipe: "Dit recept definitief verwijderen?",
    toastRecipeCreated: "Recept aangemaakt: {name}",
    toastRecipeUpdated: "Recept bijgewerkt: {name}",
    toastRecipeDeleted: "Recept verwijderd",
    customBadge: "Eigen recept",
    dietFlagsLabel: "Dieetlabels",
    saveRecipeBtn: "Recept Opslaan",
    cancelBtn: "Annuleren",
    noResults: "Geen recepten gevonden",
    noResultsFor: 'Geen recepten voor "{query}"',
    noInstructions: "Geen bereidingswijze",
    noIngredientsAdded: "Nog geen ingrediënten toegevoegd.",
    needIngredients: "Voeg minstens één ingrediënt toe.",
    needInstructions: "Voeg minstens één stap toe.",
    toastItemAdded: "Toegevoegd: {name}",
    showingCount: "{shown} van {total} getoond",
    confirmResetRecipes: "Alle zelfgemaakte recepten verwijderen?",
    confirmWipeList: "Boodschappenlijst volledig wissen?",
    toastRecipesReset: "Eigen recepten verwijderd",
    toastListWiped: "Boodschappenlijst leeg!",
    toastClearedChecked: "Afgevinkte items gewist!",
    toastFavAdded: "Toegevoegd aan favorieten!",
    toastFavRemoved: "Verwijderd uit favorieten",
    toastBulkLoaded: "⚡ Succesvol 2.000 testrecepten ingeladen!",
    cookModeStep: "Stap {current} van {total}",
    cookModeNext: "Volgende →",
    cookModeFinish: "Klaar!",
    cookModeBack: "← Terug",
    cookModeDone: "Heerlijk gekookt! Smakelijk!"
  },
  fr: {
    appTitle: "Mijn Kookpot",
    appSubtitle: "Recettes & Liste de Courses Belges",
    discover: "Découvrir",
    recipes: "Recettes",
    checklist: "Courses",
    settings: "Paramètres",
    searchPlaceholder: "Rechercher des recettes...",
    suggestedTitle: "Suggestion Classique Belge",
    exploreTitle: "Explorer les Recettes",
    seeAll: "Voir tout",
    recipeBookTitle: "Livre de Recettes",
    recipeBookDesc: "Votre collection de plats belges",
    recipeCategoryAll: "Tout",
    recipeCategoryBreakfast: "Petit-déjeuner",
    recipeCategoryMain: "Plat principal",
    recipeCategorySoup: "Soupe",
    recipeCategorySnack: "Snack",
    recipeCategoryDessert: "Dessert",
    createRecipeHeader: "Créer une Recette",
    editRecipeHeader: "Modifier la Recette",
    checklistTitle: "Liste de Courses",
    checklistDesc: "Triée par rayons pour une navigation rapide",
    clearCheckedBtn: "Effacer cochés",
    customItemPlaceholder: "Ex. chicons...",
    emptyListHeader: "Votre liste est vide",
    emptyListDesc: "Sélectionnez des recettes ou ajoutez des articles manuellement !",
    prefTitle: "Préférences",
    prefDesc: "Configurez la langue et vos préférences de courses",
    langGroupTitle: "Paramètres de Langue",
    langSelectLabel: "Langue de l'App",
    langSelectDesc: "Choisissez la langue de l'interface",
    dangerZoneTitle: "Zone de Danger",
    resetDbLabel: "Supprimer Mes Recettes",
    resetDbDesc: "Supprime les recettes que vous avez créées",
    resetBtnText: "Supprimer",
    resetListLabel: "Vider la Liste",
    resetListDesc: "Supprime tous les articles de la liste",
    resetListBtnText: "Vider",
    prepTimeLabel: "Préparation",
    cookTimeLabel: "Cuisson",
    diffLabel: "Difficulté",
    servingsLabel: "Taille des Portions",
    servingsDesc: "Ingrédients mis à l'échelle",
    addIngredientsBtn: "Ajouter à la liste de courses",
    instructionsTitle: "Instructions de Préparation",
    ingredientsTitle: "Ingrédients (Métrique)",
    toastDeselected: "Recette désélectionnée",
    toastSelected: "Recette sélectionnée",
    toastAddedSingle: "Ingrédients ajoutés à la liste !",
    toastAddedBatch: "Liste de courses générée pour les recettes planifiées !",
    batchSelectedText: "Sélection : {count} recettes",
    batchGenerateBtn: "Générer la Liste",
    difficultyEasy: "Facile",
    difficultyMedium: "Moyen",
    difficultyHard: "Difficile",
    aisleProduce: "🥕 Fruits & Légumes",
    aisleMeat: "🥩 Boucherie & Volaille",
    aisleDairy: "🧀 Crèmerie & Oeufs",
    aisleBakery: "🍞 Boulangerie",
    aisleDrinks: "🍺 Bières & Boissons",
    aislePantry: "🥫 Épicerie",
    aisleSeafood: "🐟 Poissonnerie",
    aisleFrozen: "🧊 Surgelés",
    aisleSpices: "🧂 Herbes & Épices",
    dietFilterLabel: "Régimes",
    intoleranceFilterLabel: "Allergènes & Intolérances",
    dietVegetarian: "Végétarien",
    dietVegan: "Végétalien",
    dietCandida: "Régime Candida",
    dietKeto: "Cétogène (Keto)",
    intolGluten: "Sans Gluten",
    intolNuts: "Sans Noix",
    intolDairy: "Sans Lactose",
    intolEggs: "Sans Œufs",
    allergenDisclaimer: "Déduit de la liste d'ingrédients — vérifiez toujours la recette en cas d'allergie grave.",
    scaleTestTitle: "Test de Performance",
    scaleTestLabel: "Charger 2 000 recettes",
    scaleTestDesc: "Simuler des milliers de recettes pour tester la vitesse",
    generateBtnText: "Générer",
    shoppingGroupTitle: "Courses",
    skipStaplesLabel: "Ignorer les basiques",
    skipStaplesDesc: "Omet le sel, poivre, huile et épices que vous avez déjà",
    allItems: "Tous les Articles",
    itemsChecked: "articles cochés",
    exportBtn: "Partager la liste",
    exportCopied: "Liste copiée dans le presse-papiers !",
    staplesSkipped: "{count} basiques ignorés",
    staplesHint: "Touchez pour les ajouter quand même",
    fromRecipes: "de",
    qtyPlaceholder: "Qté (ex. 500g, 2)",
    editRecipeBtn: "Modifier",
    deleteRecipeBtn: "Supprimer",
    confirmDeleteRecipe: "Supprimer définitivement cette recette ?",
    toastRecipeCreated: "Recette créée : {name}",
    toastRecipeUpdated: "Recette mise à jour : {name}",
    toastRecipeDeleted: "Recette supprimée",
    customBadge: "Recette perso",
    dietFlagsLabel: "Étiquettes diététiques",
    saveRecipeBtn: "Enregistrer",
    cancelBtn: "Annuler",
    noResults: "Aucune recette trouvée",
    noResultsFor: 'Aucune recette pour "{query}"',
    noInstructions: "Pas d'instructions",
    noIngredientsAdded: "Aucun ingrédient ajouté.",
    needIngredients: "Ajoutez au moins un ingrédient.",
    needInstructions: "Ajoutez au moins une étape.",
    toastItemAdded: "Ajouté : {name}",
    showingCount: "{shown} sur {total} affichés",
    confirmResetRecipes: "Supprimer toutes vos recettes personnelles ?",
    confirmWipeList: "Vider complètement la liste de courses ?",
    toastRecipesReset: "Recettes personnelles supprimées",
    toastListWiped: "Liste vidée !",
    toastClearedChecked: "Articles cochés effacés !",
    toastFavAdded: "Ajouté aux favoris !",
    toastFavRemoved: "Retiré des favoris",
    toastBulkLoaded: "⚡ 2 000 recettes de test chargées !",
    cookModeStep: "Étape {current} sur {total}",
    cookModeNext: "Suivant →",
    cookModeFinish: "Terminé !",
    cookModeBack: "← Retour",
    cookModeDone: "Bon appétit !"
  }
};

// --- Storage keys ---
// User recipes live in their own key so shipping new built-in recipes can never
// destroy the ones you created yourself.
const STORAGE = {
  settings: 'belgian_app_settings',
  userRecipes: 'belgian_user_recipes',
  favorites: 'belgian_favorites',
  groceryList: 'belgian_grocery_list',
  skippedStaples: 'belgian_skipped_staples',
  legacyRecipes: 'belgian_recipes',
  legacyDbVersion: 'belgian_db_version'
};

// Aisle -> translation key. Aisle order comes from ingredients.js.
const AISLE_LABEL_KEYS = {
  'Groenten & Fruit': 'aisleProduce',
  'Visafdeling': 'aisleSeafood',
  'Slagerij & Gevogelte': 'aisleMeat',
  'Zuivel & Eieren': 'aisleDairy',
  'Bakkerij': 'aisleBakery',
  'Diepvries': 'aisleFrozen',
  'Kruiden & Specerijen': 'aisleSpices',
  'Kruidenier': 'aislePantry',
  'Bieren & Dranken': 'aisleDrinks'
};

const RECIPE_CATEGORIES = ['all', 'breakfast', 'main', 'soup', 'snack', 'dessert'];
const RECIPE_CATEGORY_KEYS = {
  all: 'recipeCategoryAll',
  breakfast: 'recipeCategoryBreakfast',
  main: 'recipeCategoryMain',
  soup: 'recipeCategorySoup',
  snack: 'recipeCategorySnack',
  dessert: 'recipeCategoryDessert'
};

// Rendering more cards than this at once makes scrolling janky on a phone.
const MAX_RENDERED_CARDS = 60;

// --- Helper: Localize ingredient units ---
function getTranslatedUnit(unit, lang) {
  if (!unit) return "";
  const unitLower = String(unit).toLowerCase().trim();

  const translations = {
    kl: { en: "tsp", nl: "koffielepel", fr: "c. à café" },
    el: { en: "tbsp", nl: "eetlepel", fr: "c. à soupe" },
    "st.": { en: "pcs", nl: "stuks", fr: "pcs" },
    "to taste": { en: "to taste", nl: "naar smaak", fr: "au goût" },
    can: { en: "can", nl: "blik", fr: "boîte" },
    bottle: { en: "bottle", nl: "fles", fr: "bouteille" },
    package: { en: "pack", nl: "pak", fr: "paquet" },
    pinch: { en: "pinch", nl: "snuifje", fr: "pincée" },
    dash: { en: "dash", nl: "scheutje", fr: "trait" },
    drop: { en: "drops", nl: "druppels", fr: "gouttes" },
    stalk: { en: "stalks", nl: "stengels", fr: "branches" },
    sprig: { en: "sprigs", nl: "takjes", fr: "brins" },
    bunch: { en: "bunch", nl: "bosje", fr: "botte" },
    head: { en: "head", nl: "stronk", fr: "tête" },
    handful: { en: "handful", nl: "handvol", fr: "poignée" },
    loaf: { en: "loaf", nl: "brood", fr: "pain" },
    leaf: { en: "leaves", nl: "blaadjes", fr: "feuilles" },
    slices: { en: "slices", nl: "sneetjes", fr: "tranches" }
  };

  const match = translations[unitLower];
  return match ? (match[lang] || match.en) : unit;
}

// --- State Management ---
let state = {
  builtInRecipes: [],
  userRecipes: [],
  recipes: [],
  groceryList: [],
  skippedStaples: [],
  selectedRecipes: [],
  favorites: [],
  settings: {
    language: 'en',
    skipStaples: true
  },
  filters: {
    homeQuery: '',
    query: '',
    category: 'all',
    diets: [],
    intolerances: []
  },
  activeTab: 'home',
  selectedRecipe: null,
  recipeServings: 4,
  customRecipeIngredients: [],
  editingRecipeId: null
};

// --- Small helpers ---
function t(key, vars) {
  const dict = uiTranslations[state.settings.language] || uiTranslations.en;
  let text = dict[key] || uiTranslations.en[key] || key;
  if (vars) {
    Object.keys(vars).forEach(k => {
      text = text.replace('{' + k + '}', vars[k]);
    });
  }
  return text;
}

/** Recipe titles and ingredient names are user-editable, so never trust them in HTML. */
function escapeHtml(value) {
  return String(value === null || value === undefined ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function debounce(fn, wait) {
  let timer = null;
  return function () {
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(null, args), wait);
  };
}

function aisleLabel(aisle) {
  const key = AISLE_LABEL_KEYS[aisle];
  return key ? t(key) : aisle;
}

function recipeText(recipe) {
  const lang = state.settings.language;
  return recipe.translations[lang] || recipe.translations.en;
}

function ingredientName(ing) {
  const lang = state.settings.language;
  if (typeof ing.name === 'object' && ing.name) return ing.name[lang] || ing.name.en;
  return ing.name;
}

function recipeCategories(recipe) {
  if (Array.isArray(recipe.category)) return recipe.category;
  if (typeof recipe.category === 'string') return [recipe.category];
  // Legacy demo shape: { en, nl, fr }
  if (recipe.category && typeof recipe.category === 'object') return ['main'];
  return [];
}

/** Human readable category line for the drawer, e.g. "Soup · Hoofdgerecht". */
function recipeCategoryLabel(recipe) {
  const cats = recipeCategories(recipe);
  const labels = cats
    .map(c => (RECIPE_CATEGORY_KEYS[c] ? t(RECIPE_CATEGORY_KEYS[c]) : null))
    .filter(Boolean);
  if (labels.length) return labels.join(' · ');
  // Legacy object category kept its own translations.
  if (recipe.category && !Array.isArray(recipe.category) && typeof recipe.category === 'object') {
    return recipe.category[state.settings.language] || recipe.category.en || '';
  }
  return t('recipeCategoryMain');
}

function isUserRecipe(recipe) {
  return !!recipe && state.userRecipes.some(r => r.id === recipe.id);
}

function formatQuantity(amount, unit) {
  const lang = state.settings.language;
  const unitText = getTranslatedUnit(unit, lang);
  if (typeof amount === 'number' && !isNaN(amount)) {
    return `${amount} ${unitText}`.trim();
  }
  return unitText;
}

// --- Initialization ---
function initApp() {
  loadSettings();
  migrateLegacyStorage();

  state.builtInRecipes = Array.isArray(window.initialRecipes) ? window.initialRecipes : [];
  state.userRecipes = readJson(STORAGE.userRecipes, []);
  rebuildRecipeIndex();

  state.favorites = readJson(STORAGE.favorites, []);
  state.groceryList = readJson(STORAGE.groceryList, []);
  state.skippedStaples = readJson(STORAGE.skippedStaples, []);

  setupEventListeners();
  applyLanguage(state.settings.language);
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed === null || parsed === undefined ? fallback : parsed;
  } catch (e) {
    console.warn('Could not read', key, e);
    return fallback;
  }
}

function loadSettings() {
  const stored = readJson(STORAGE.settings, null);
  if (stored && typeof stored === 'object') {
    state.settings = Object.assign({}, state.settings, stored);
  } else {
    const sysLang = (navigator.language || 'en').substring(0, 2);
    state.settings.language = ['en', 'nl', 'fr'].includes(sysLang) ? sysLang : 'en';
  }
  if (!uiTranslations[state.settings.language]) state.settings.language = 'en';
  if (typeof state.settings.skipStaples !== 'boolean') state.settings.skipStaples = true;
  saveSettings();
}

/**
 * The old build kept built-in and custom recipes in one localStorage blob and
 * wiped it on every database version bump — taking your own recipes with it.
 * Rescue anything custom, then drop the legacy keys for good.
 */
function migrateLegacyStorage() {
  const legacy = readJson(STORAGE.legacyRecipes, null);
  if (Array.isArray(legacy)) {
    const rescued = legacy.filter(r => r && typeof r.id === 'string' && r.id.indexOf('custom-') === 0);
    if (rescued.length) {
      const existing = readJson(STORAGE.userRecipes, []);
      const known = existing.map(r => r.id);
      const merged = existing.concat(rescued.filter(r => known.indexOf(r.id) === -1));
      localStorage.setItem(STORAGE.userRecipes, JSON.stringify(merged));
      console.info(`Rescued ${rescued.length} custom recipe(s) from legacy storage.`);
    }
  }
  localStorage.removeItem(STORAGE.legacyRecipes);
  localStorage.removeItem(STORAGE.legacyDbVersion);
}

function rebuildRecipeIndex() {
  state.recipes = state.builtInRecipes.concat(state.userRecipes);
}

function saveSettings() {
  localStorage.setItem(STORAGE.settings, JSON.stringify(state.settings));
}

function saveUserRecipes() {
  localStorage.setItem(STORAGE.userRecipes, JSON.stringify(state.userRecipes));
  rebuildRecipeIndex();
}

function saveGroceryList() {
  localStorage.setItem(STORAGE.groceryList, JSON.stringify(state.groceryList));
  localStorage.setItem(STORAGE.skippedStaples, JSON.stringify(state.skippedStaples));
}

function saveFavorites() {
  localStorage.setItem(STORAGE.favorites, JSON.stringify(state.favorites));
}

// --- Language Switching Engine ---
function applyLanguage(lang) {
  state.settings.language = lang;
  saveSettings();

  const dict = uiTranslations[lang];

  const langSelect = document.getElementById('language-select');
  if (langSelect) langSelect.value = lang;

  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.dataset.translate;
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.dataset.translatePlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });

  document.documentElement.lang = lang;
  document.title = `${dict.appTitle} - ${dict.appSubtitle}`;

  populateAisleSelect(document.getElementById('form-ing-cat-visible'));
  populateAisleSelect(document.getElementById('new-grocery-item-cat'), 'Kruidenier');
  populateRecipeCategorySelect();

  renderApp();
}

function populateAisleSelect(select, selectedAisle) {
  if (!select) return;
  const previous = select.value;
  select.innerHTML = window.Ingredients.AISLES
    .map(aisle => `<option value="${escapeHtml(aisle)}">${escapeHtml(aisleLabel(aisle))}</option>`)
    .join('');
  select.value = previous || selectedAisle || window.Ingredients.DEFAULT_AISLE;
}

function populateRecipeCategorySelect() {
  const select = document.getElementById('recipe-cat-select');
  if (!select) return;
  const previous = select.value;
  select.innerHTML = RECIPE_CATEGORIES
    .filter(c => c !== 'all')
    .map(c => `<option value="${c}">${escapeHtml(t(RECIPE_CATEGORY_KEYS[c]))}</option>`)
    .join('');
  select.value = previous || 'main';
}

// --- Navigation ---
function switchTab(tabId) {
  state.activeTab = tabId;

  document.querySelectorAll('.tab-item').forEach(item => {
    item.classList.toggle('active', item.dataset.tab === tabId);
  });

  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active-panel', panel.id === `${tabId}-panel`);
  });

  if (tabId === 'grocery') renderGroceryList();
  else if (tabId === 'recipes') renderRecipesList();
  else if (tabId === 'home') renderHomeTab();
  else if (tabId === 'settings') renderSettingsTab();
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  document.querySelectorAll('.tab-item').forEach(item => {
    item.addEventListener('click', e => switchTab(e.currentTarget.dataset.tab));
  });

  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    langSelect.addEventListener('change', e => applyLanguage(e.target.value));
  }

  const skipStaplesToggle = document.getElementById('skip-staples-toggle');
  if (skipStaplesToggle) {
    skipStaplesToggle.addEventListener('change', e => {
      state.settings.skipStaples = e.target.checked;
      saveSettings();
    });
  }

  // Searching re-renders a whole grid, so wait for a pause in typing.
  const homeSearch = document.getElementById('home-search');
  if (homeSearch) {
    homeSearch.addEventListener('input', debounce(e => {
      state.filters.homeQuery = e.target.value.toLowerCase().trim();
      renderHomeTab();
    }, 150));
  }

  const recipeSearch = document.getElementById('recipe-search');
  if (recipeSearch) {
    recipeSearch.addEventListener('input', debounce(e => {
      state.filters.query = e.target.value.toLowerCase().trim();
      renderRecipeGrid();
    }, 150));
  }

  document.getElementById('recipe-drawer-close').addEventListener('click', closeRecipeDrawer);
  document.getElementById('drawer-backdrop').addEventListener('click', closeRecipeDrawer);

  document.getElementById('servings-minus').addEventListener('click', () => {
    if (state.recipeServings > 1) {
      state.recipeServings--;
      updateScaledIngredients();
    }
  });
  document.getElementById('servings-plus').addEventListener('click', () => {
    state.recipeServings++;
    updateScaledIngredients();
  });

  document.getElementById('add-ing-to-list-btn').addEventListener('click', () => {
    if (state.selectedRecipe) {
      addRecipeIngredientsToGroceryList(state.selectedRecipe, state.recipeServings);
    }
  });

  document.getElementById('recipe-fav-btn').addEventListener('click', toggleRecipeFavorite);
  document.getElementById('recipe-edit-btn').addEventListener('click', startEditingSelectedRecipe);
  document.getElementById('recipe-delete-btn').addEventListener('click', deleteSelectedRecipe);

  document.getElementById('batch-convert-btn').addEventListener('click', convertSelectedRecipesToGroceryList);

  document.getElementById('add-recipe-fab').addEventListener('click', () => openRecipeModal(null));
  document.getElementById('modal-close-btn').addEventListener('click', closeRecipeModal);
  document.getElementById('recipe-cancel-btn').addEventListener('click', closeRecipeModal);
  document.getElementById('custom-recipe-form').addEventListener('submit', handleCustomRecipeSubmit);
  document.getElementById('add-custom-ing-btn').addEventListener('click', addCustomIngredientToBuffer);

  document.getElementById('add-grocery-item-form').addEventListener('submit', handleAddCustomGroceryItem);
  document.getElementById('clear-grocery-btn').addEventListener('click', clearCompletedGroceryItems);
  document.getElementById('export-grocery-btn').addEventListener('click', exportGroceryList);

  document.getElementById('reset-data-btn').addEventListener('click', () => {
    if (state.userRecipes.length === 0) return;
    if (confirm(t('confirmResetRecipes'))) {
      state.userRecipes = [];
      saveUserRecipes();
      state.selectedRecipes = [];
      showToast(t('toastRecipesReset'), 'info');
      renderApp();
    }
  });

  document.getElementById('reset-list-btn').addEventListener('click', () => {
    if (confirm(t('confirmWipeList'))) {
      state.groceryList = [];
      state.skippedStaples = [];
      saveGroceryList();
      renderGroceryList();
      showToast(t('toastListWiped'), 'info');
    }
  });

  const filterToggle = document.getElementById('recipe-filter-toggle-btn');
  if (filterToggle) {
    filterToggle.addEventListener('click', () => {
      const tray = document.getElementById('recipe-filter-tray');
      const isHidden = tray.style.display === 'none' || !tray.style.display;
      tray.style.display = isHidden ? 'block' : 'none';
      filterToggle.classList.toggle('active', isHidden);
    });
  }

  document.querySelectorAll('.diet-filter-cb, .intol-filter-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      state.filters.diets = Array.from(document.querySelectorAll('.diet-filter-cb:checked')).map(c => c.value);
      state.filters.intolerances = Array.from(document.querySelectorAll('.intol-filter-cb:checked')).map(c => c.value);
      renderRecipeGrid();
    });
  });

  const bulkGenBtn = document.getElementById('generate-bulk-btn');
  if (bulkGenBtn) bulkGenBtn.addEventListener('click', generateBulkRecipes);

  initCookMode();
}

// --- Cook Mode Screen Controller ---
let cookModeState = { active: false, steps: [], currentStepIndex: 0 };

function initCookMode() {
  const triggerBtn = document.getElementById('cook-mode-trigger-btn');
  const overlay = document.getElementById('cook-mode-overlay');
  const exitBtn = document.getElementById('cook-mode-exit-btn');
  const prevBtn = document.getElementById('cook-mode-prev-btn');
  const nextBtn = document.getElementById('cook-mode-next-btn');

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      if (!state.selectedRecipe) return;
      const trans = recipeText(state.selectedRecipe);
      cookModeState.steps = trans.instructions || [];
      if (cookModeState.steps.length === 0) return;

      cookModeState.currentStepIndex = 0;
      document.getElementById('cook-mode-recipe-title').textContent = trans.title;
      updateCookModeStep();
      overlay.style.display = 'flex';
      cookModeState.active = true;
    });
  }

  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
      cookModeState.active = false;
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (cookModeState.currentStepIndex > 0) {
        cookModeState.currentStepIndex--;
        updateCookModeStep();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (cookModeState.currentStepIndex < cookModeState.steps.length - 1) {
        cookModeState.currentStepIndex++;
        updateCookModeStep();
      } else {
        overlay.style.display = 'none';
        cookModeState.active = false;
        showToast(t('cookModeDone'), 'success');
      }
    });
  }
}

function updateCookModeStep() {
  const stepText = document.getElementById('cook-mode-step-text');
  const stepNumber = document.querySelector('.cook-mode-step-number');
  const nextBtn = document.getElementById('cook-mode-next-btn');
  const prevBtn = document.getElementById('cook-mode-prev-btn');
  const progressDots = document.getElementById('cook-mode-progress-dots');

  const stepsCount = cookModeState.steps.length;
  const currentIdx = cookModeState.currentStepIndex;

  stepText.textContent = cookModeState.steps[currentIdx];
  stepNumber.textContent = t('cookModeStep', { current: currentIdx + 1, total: stepsCount });

  prevBtn.disabled = currentIdx === 0;
  prevBtn.textContent = t('cookModeBack');
  nextBtn.textContent = currentIdx === stepsCount - 1 ? t('cookModeFinish') : t('cookModeNext');

  progressDots.innerHTML = Array.from({ length: stepsCount })
    .map((_, i) => `<span class="dot ${i === currentIdx ? 'active' : ''}"></span>`)
    .join('');
}

// --- Render Controllers ---
function renderApp() {
  renderHomeTab();
  renderRecipesList();
  renderGroceryList();
  renderSettingsTab();
}

/** One card template, used by both grids. */
function recipeCardHtml(recipe, options) {
  const opts = options || {};
  const isFav = state.favorites.includes(recipe.id);
  const isSelected = state.selectedRecipes.includes(recipe.id);
  const name = recipeText(recipe).title;
  const sub = recipeText(recipe).subtitle;
  const diffText = recipe.difficulty[state.settings.language] || recipe.difficulty.en;

  return `
    <div class="recipe-card ${isSelected ? 'selected-for-list' : ''}" data-id="${escapeHtml(recipe.id)}">
      <div class="recipe-card-select-btn" data-id="${escapeHtml(recipe.id)}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div class="recipe-card-img-wrapper">
        <img class="recipe-card-img" src="${escapeHtml(recipe.image)}" alt="${escapeHtml(name)}" loading="lazy">
        <span class="recipe-badge">${escapeHtml(diffText)}</span>
        ${isFav ? '<span class="recipe-fav-badge">❤️</span>' : ''}
      </div>
      <div class="recipe-card-content">
        <h4 class="recipe-card-title">${escapeHtml(name)}</h4>
        ${opts.showSubtitle ? `<p class="recipe-card-sub">${escapeHtml(sub)}</p>` : ''}
        <div class="recipe-card-meta">
          <span>⏱️ ${escapeHtml(recipe.prepTime)}</span>
          <span>🍽️ ${escapeHtml(recipe.servings)}p</span>
        </div>
      </div>
    </div>
  `;
}

function bindRecipeCards(container) {
  container.querySelectorAll('.recipe-card').forEach(card => {
    const selectBtn = card.querySelector('.recipe-card-select-btn');
    if (selectBtn) {
      selectBtn.addEventListener('click', e => {
        e.stopPropagation();
        toggleRecipeSelection(card.dataset.id);
      });
    }
    card.addEventListener('click', () => openRecipeDrawer(card.dataset.id));
  });
}

function matchesQuery(recipe, query) {
  if (!query) return true;
  const tr = recipeText(recipe);
  if (tr.title.toLowerCase().includes(query)) return true;
  if (tr.subtitle && tr.subtitle.toLowerCase().includes(query)) return true;
  return recipe.ingredients.some(i => String(ingredientName(i)).toLowerCase().includes(query));
}

function renderHomeTab() {
  const featuredContainer = document.getElementById('featured-recipe-container');
  const featuredRecipe = state.recipes.find(r => r.id === 'carbonnade-flamande') || state.recipes[0];

  if (featuredContainer && featuredRecipe) {
    const isSelected = state.selectedRecipes.includes(featuredRecipe.id);
    const trans = recipeText(featuredRecipe);

    featuredContainer.innerHTML = `
      <div class="featured-card ${isSelected ? 'selected-for-list' : ''}" data-id="${escapeHtml(featuredRecipe.id)}">
        <div class="recipe-card-select-btn" data-id="${escapeHtml(featuredRecipe.id)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <img class="featured-img" src="${escapeHtml(featuredRecipe.image)}" alt="${escapeHtml(trans.title)}">
        <div class="featured-overlay">
          <span class="featured-tag">${escapeHtml(t('suggestedTitle'))}</span>
          <h3 class="featured-title">${escapeHtml(trans.title)}</h3>
          <p class="featured-desc">${escapeHtml(trans.description)}</p>
        </div>
      </div>
    `;

    featuredContainer.querySelector('.recipe-card-select-btn').addEventListener('click', e => {
      e.stopPropagation();
      toggleRecipeSelection(featuredRecipe.id);
    });
    featuredContainer.querySelector('.featured-card').addEventListener('click', () => {
      openRecipeDrawer(featuredRecipe.id);
    });
  }

  const homeGrid = document.getElementById('home-recipe-grid');
  if (!homeGrid) return;

  const query = state.filters.homeQuery;
  const filtered = state.recipes.filter(r => matchesQuery(r, query)).slice(0, 6);

  if (filtered.length === 0) {
    homeGrid.innerHTML = `<div class="grid-empty">${escapeHtml(t('noResultsFor', { query: query }))}</div>`;
    return;
  }

  homeGrid.innerHTML = filtered.map(r => recipeCardHtml(r)).join('');
  bindRecipeCards(homeGrid);
}

function renderRecipesList() {
  const catRow = document.getElementById('recipe-categories-row');
  if (catRow) {
    catRow.innerHTML = RECIPE_CATEGORIES.map(cat => `
      <div class="cat-pill ${cat === state.filters.category ? 'active' : ''}" data-category="${cat}">
        ${escapeHtml(t(RECIPE_CATEGORY_KEYS[cat]))}
      </div>
    `).join('');

    catRow.querySelectorAll('.cat-pill').forEach(pill => {
      pill.addEventListener('click', e => {
        state.filters.category = e.currentTarget.dataset.category;
        catRow.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        renderRecipeGrid();
      });
    });
  }

  renderRecipeGrid();
}

function filteredRecipes() {
  const f = state.filters;
  return state.recipes.filter(recipe => {
    if (f.category !== 'all' && !recipeCategories(recipe).includes(f.category)) return false;
    if (!matchesQuery(recipe, f.query)) return false;

    if (f.diets.includes('vegetarian') && !recipe.isVegetarian) return false;
    if (f.diets.includes('vegan') && !recipe.isVegan) return false;
    if (f.diets.includes('candida') && !recipe.isCandidaFriendly) return false;
    if (f.diets.includes('keto') && !recipe.isKeto) return false;

    if (f.intolerances.includes('gluten') && !recipe.isGlutenFree) return false;
    if (f.intolerances.includes('nuts') && !recipe.isNutFree) return false;
    if (f.intolerances.includes('dairy') && !recipe.isDairyFree) return false;
    if (f.intolerances.includes('eggs') && !recipe.isEggFree) return false;

    return true;
  });
}

function renderRecipeGrid() {
  const container = document.getElementById('recipes-tab-grid');
  if (!container) return;

  const matches = filteredRecipes();

  if (matches.length === 0) {
    container.innerHTML = `<div class="grid-empty">${escapeHtml(t('noResults'))}</div>`;
    updateBatchActionBar();
    return;
  }

  const shown = matches.slice(0, MAX_RENDERED_CARDS);
  let html = shown.map(r => recipeCardHtml(r, { showSubtitle: true })).join('');
  if (matches.length > shown.length) {
    html += `<div class="grid-empty">${escapeHtml(t('showingCount', { shown: shown.length, total: matches.length }))}</div>`;
  }

  container.innerHTML = html;
  bindRecipeCards(container);
  updateBatchActionBar();
}

function renderSettingsTab() {
  const langSelect = document.getElementById('language-select');
  if (langSelect) langSelect.value = state.settings.language;

  const skipStaples = document.getElementById('skip-staples-toggle');
  if (skipStaples) skipStaples.checked = state.settings.skipStaples;
}

// --- Batch Selection System ---
function toggleRecipeSelection(recipeId) {
  const idx = state.selectedRecipes.indexOf(recipeId);

  if (idx > -1) {
    state.selectedRecipes.splice(idx, 1);
    showToast(t('toastDeselected'), 'info');
  } else {
    state.selectedRecipes.push(recipeId);
    showToast(t('toastSelected'), 'success');
  }

  document.querySelectorAll(`.recipe-card[data-id="${recipeId}"], .featured-card[data-id="${recipeId}"]`)
    .forEach(card => card.classList.toggle('selected-for-list', idx === -1));

  updateBatchActionBar();
}

function updateBatchActionBar() {
  const bar = document.getElementById('recipe-batch-bar');
  if (!bar) return;

  const count = state.selectedRecipes.length;
  // The bar animates in via the .visible class — toggling display alone leaves
  // it translated off-screen at opacity 0.
  bar.classList.toggle('visible', count > 0);
  if (count > 0) {
    document.getElementById('batch-bar-text').textContent = t('batchSelectedText', { count: count });
    document.getElementById('batch-convert-btn').textContent = t('batchGenerateBtn');
  }
}

// --- Grocery list building ---

/**
 * Merge a batch of scaled ingredients into the grocery list.
 *
 * Matching is by canonical ingredient key, not by display name, so "garlic"
 * and "garlic cloves" land on one line. An ingredient that already exists in a
 * different unit is added as its own row instead of being silently dropped.
 */
function addItemsToGroceryList(ingredients, sourceTitle) {
  const Ing = window.Ingredients;
  let addedCount = 0;
  let skippedStaples = 0;

  ingredients.forEach(ing => {
    const key = ing.key || Ing.keyOf(ingredientName(ing));
    const staple = typeof ing.staple === 'boolean' ? ing.staple : Ing.isStaple(ingredientName(ing), ing.category);

    if (staple && state.settings.skipStaples) {
      registerSkippedStaple(ing, key, sourceTitle);
      skippedStaples++;
      return;
    }

    const existing = state.groceryList.find(item => item.key === key && item.unit === ing.unit);

    if (existing) {
      if (typeof existing.amount === 'number' && typeof ing.amount === 'number') {
        existing.amount = Ing.roundAmount(existing.amount + ing.amount, existing.unit);
      } else if (existing.amount === null && typeof ing.amount === 'number') {
        existing.amount = ing.amount;
      }
      if (sourceTitle && existing.sources.indexOf(sourceTitle) === -1) existing.sources.push(sourceTitle);
    } else {
      state.groceryList.push({
        id: newItemId(),
        key: key,
        name: ingredientName(ing),
        amount: typeof ing.amount === 'number' ? ing.amount : null,
        unit: ing.unit,
        category: ing.category || Ing.DEFAULT_AISLE,
        staple: staple,
        sources: sourceTitle ? [sourceTitle] : [],
        checked: false
      });
      addedCount++;
    }
  });

  saveGroceryList();
  return { added: addedCount, skippedStaples: skippedStaples };
}

function newItemId() {
  return 'item-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
}

function registerSkippedStaple(ing, key, sourceTitle) {
  const existing = state.skippedStaples.find(s => s.key === key);
  if (existing) {
    if (sourceTitle && existing.sources.indexOf(sourceTitle) === -1) existing.sources.push(sourceTitle);
    return;
  }
  state.skippedStaples.push({
    key: key,
    name: ingredientName(ing),
    amount: typeof ing.amount === 'number' ? ing.amount : null,
    unit: ing.unit,
    category: ing.category || window.Ingredients.DEFAULT_AISLE,
    sources: sourceTitle ? [sourceTitle] : []
  });
}

/** Ingredients of one recipe, scaled to the requested servings. */
function scaledIngredients(recipe, servings) {
  const Ing = window.Ingredients;
  const ratio = servings / (recipe.servings || servings || 1);

  return recipe.ingredients.map(ing => ({
    key: ing.key || Ing.keyOf(ingredientName(ing)),
    name: ing.name,
    amount: Ing.scaleAmount(ing.amount, ing.unit, ratio),
    unit: ing.unit,
    category: ing.category,
    staple: ing.staple
  }));
}

function addRecipeIngredientsToGroceryList(recipe, servings) {
  const result = addItemsToGroceryList(scaledIngredients(recipe, servings), recipeText(recipe).title);
  showToast(t('toastAddedSingle'), 'success');
  closeRecipeDrawer();
  if (state.activeTab === 'grocery') renderGroceryList();
  return result;
}

function convertSelectedRecipesToGroceryList() {
  if (state.selectedRecipes.length === 0) return;

  state.selectedRecipes.forEach(recipeId => {
    const recipe = state.recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    addItemsToGroceryList(scaledIngredients(recipe, recipe.servings), recipeText(recipe).title);
  });

  state.selectedRecipes = [];
  document.querySelectorAll('.recipe-card, .featured-card')
    .forEach(card => card.classList.remove('selected-for-list'));
  updateBatchActionBar();

  showToast(t('toastAddedBatch'), 'success');
  switchTab('grocery');
}

// --- Recipe Detail Drawer (Bottom sheet) ---
function openRecipeDrawer(recipeId) {
  const recipe = state.recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  state.selectedRecipe = recipe;
  state.recipeServings = recipe.servings;

  const trans = recipeText(recipe);
  const own = isUserRecipe(recipe);

  document.getElementById('drawer-hero-img').src = recipe.image;
  document.getElementById('drawer-hero-img').alt = trans.title;
  document.getElementById('drawer-subtitle').textContent =
    own ? `${recipeCategoryLabel(recipe)} · ${t('customBadge')}` : recipeCategoryLabel(recipe);
  document.getElementById('drawer-title').textContent = trans.title;
  document.getElementById('drawer-description').textContent = trans.description;

  document.getElementById('val-prep-time').textContent = recipe.prepTime;
  document.getElementById('val-cook-time').textContent = recipe.cookTime || '-';
  document.getElementById('val-difficulty').textContent =
    recipe.difficulty[state.settings.language] || recipe.difficulty.en;

  document.getElementById('servings-count').textContent = state.recipeServings;

  document.getElementById('recipe-fav-btn').classList.toggle('favorited', state.favorites.includes(recipeId));

  // Editing and deleting only make sense for recipes you created.
  document.getElementById('recipe-edit-btn').style.display = own ? 'flex' : 'none';
  document.getElementById('recipe-delete-btn').style.display = own ? 'flex' : 'none';

  updateScaledIngredients();
  renderRecipeInstructions(trans.instructions);

  document.getElementById('drawer-backdrop').classList.add('active');
  document.getElementById('recipe-drawer').classList.add('active');
}

function closeRecipeDrawer() {
  document.getElementById('drawer-backdrop').classList.remove('active');
  document.getElementById('recipe-drawer').classList.remove('active');
  state.selectedRecipe = null;
}

function updateScaledIngredients() {
  if (!state.selectedRecipe) return;

  const container = document.getElementById('drawer-ingredients-list');
  document.getElementById('servings-count').textContent = state.recipeServings;

  const items = scaledIngredients(state.selectedRecipe, state.recipeServings);

  container.innerHTML = items.map(ing => `
    <div class="ingredient-row ${ing.staple ? 'is-staple' : ''}">
      <span class="ingredient-name">${escapeHtml(ingredientName(ing))}</span>
      <span class="ingredient-qty">${escapeHtml(formatQuantity(ing.amount, ing.unit))}</span>
    </div>
  `).join('');
}

function renderRecipeInstructions(steps) {
  const container = document.getElementById('drawer-instructions-list');

  if (!steps || steps.length === 0) {
    container.innerHTML = `<p class="drawer-empty">${escapeHtml(t('noInstructions'))}</p>`;
    return;
  }

  container.innerHTML = steps.map((step, idx) => `
    <div class="step-card" data-step="${idx}">
      <div class="step-num">${idx + 1}</div>
      <div class="step-text">${escapeHtml(step)}</div>
    </div>
  `).join('');

  container.querySelectorAll('.step-card').forEach(card => {
    card.addEventListener('click', e => e.currentTarget.classList.toggle('completed'));
  });
}

// --- Favorites ---
function toggleRecipeFavorite() {
  if (!state.selectedRecipe) return;
  const recipeId = state.selectedRecipe.id;
  const idx = state.favorites.indexOf(recipeId);
  const favBtn = document.getElementById('recipe-fav-btn');

  if (idx > -1) {
    state.favorites.splice(idx, 1);
    favBtn.classList.remove('favorited');
    showToast(t('toastFavRemoved'), 'info');
  } else {
    state.favorites.push(recipeId);
    favBtn.classList.add('favorited');
    showToast(t('toastFavAdded'), 'success');
  }

  saveFavorites();
  renderRecipeGrid();
  renderHomeTab();
}

// --- Grocery List Checklist ---
function renderGroceryList() {
  const container = document.getElementById('grocery-list-container');
  if (!container) return;

  renderSkippedStaples();

  if (state.groceryList.length === 0) {
    container.innerHTML = `
      <div class="list-empty">
        <span class="list-empty-icon">📋</span>
        <h4>${escapeHtml(t('emptyListHeader'))}</h4>
        <p>${escapeHtml(t('emptyListDesc'))}</p>
      </div>
    `;
    updateProgressHeader();
    return;
  }

  const groups = {};
  state.groceryList.forEach(item => {
    const cat = item.category || window.Ingredients.DEFAULT_AISLE;
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(item);
  });

  const order = window.Ingredients.AISLES;
  const sortedCategories = Object.keys(groups).sort((a, b) => {
    const idxA = order.indexOf(a) === -1 ? 999 : order.indexOf(a);
    const idxB = order.indexOf(b) === -1 ? 999 : order.indexOf(b);
    return idxA - idxB;
  });

  container.innerHTML = sortedCategories.map(cat => `
    <div class="grocery-category-block">
      <h4 class="category-header" data-category="${escapeHtml(cat)}">
        <span class="category-dot"></span>
        <span>${escapeHtml(aisleLabel(cat))}</span>
      </h4>
      <div class="grocery-list-items">
        ${groups[cat].map(groceryItemHtml).join('')}
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.checkbox-wrapper input').forEach(checkbox => {
    checkbox.addEventListener('change', e => toggleGroceryItemCheck(e.target.dataset.id));
  });

  container.querySelectorAll('.item-details').forEach(label => {
    label.addEventListener('click', e => {
      const parent = e.currentTarget.closest('.grocery-item');
      const input = parent.querySelector('input');
      input.checked = !input.checked;
      toggleGroceryItemCheck(input.dataset.id);
    });
  });

  container.querySelectorAll('.item-delete-btn').forEach(btn => {
    btn.addEventListener('click', e => deleteGroceryItem(e.currentTarget.dataset.id));
  });

  updateProgressHeader();
}

function groceryItemHtml(item) {
  const qty = formatQuantity(item.amount, item.unit);
  const sources = (item.sources || []).filter(Boolean);
  return `
    <div class="grocery-item" data-id="${escapeHtml(item.id)}">
      <div class="checkbox-wrapper ${item.checked ? 'checked' : ''}">
        <input type="checkbox" ${item.checked ? 'checked' : ''} data-id="${escapeHtml(item.id)}">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <div class="item-details ${item.checked ? 'checked' : ''}">
        <span class="item-name">${escapeHtml(item.name)}</span>
        ${qty ? `<span class="item-qty">${escapeHtml(qty)}</span>` : ''}
        ${sources.length ? `<span class="item-source">${escapeHtml(t('fromRecipes'))} ${escapeHtml(sources.join(', '))}</span>` : ''}
      </div>
      <button class="item-delete-btn" data-id="${escapeHtml(item.id)}" aria-label="delete">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    </div>
  `;
}

/** Staples left out of the list, offered as one-tap additions. */
function renderSkippedStaples() {
  const box = document.getElementById('skipped-staples-box');
  if (!box) return;

  const pending = state.skippedStaples.filter(s => !state.groceryList.some(i => i.key === s.key));

  if (pending.length === 0) {
    box.style.display = 'none';
    box.innerHTML = '';
    return;
  }

  box.style.display = 'block';
  box.innerHTML = `
    <div class="staples-header">
      <span>${escapeHtml(t('staplesSkipped', { count: pending.length }))}</span>
      <span class="staples-hint">${escapeHtml(t('staplesHint'))}</span>
    </div>
    <div class="staples-chips">
      ${pending.map(s => `
        <button type="button" class="staple-chip" data-key="${escapeHtml(s.key)}">
          + ${escapeHtml(s.name)}
        </button>
      `).join('')}
    </div>
  `;

  box.querySelectorAll('.staple-chip').forEach(chip => {
    chip.addEventListener('click', () => addSkippedStaple(chip.dataset.key));
  });
}

function addSkippedStaple(key) {
  const staple = state.skippedStaples.find(s => s.key === key);
  if (!staple) return;

  state.groceryList.push({
    id: newItemId(),
    key: staple.key,
    name: staple.name,
    amount: staple.amount,
    unit: staple.unit,
    category: staple.category,
    staple: true,
    sources: staple.sources || [],
    checked: false
  });

  state.skippedStaples = state.skippedStaples.filter(s => s.key !== key);
  saveGroceryList();
  renderGroceryList();
}

function toggleGroceryItemCheck(id) {
  const item = state.groceryList.find(i => i.id === id);
  if (!item) return;

  item.checked = !item.checked;
  saveGroceryList();

  const itemEl = document.querySelector(`.grocery-item[data-id="${id}"]`);
  if (itemEl) {
    itemEl.querySelector('.checkbox-wrapper').classList.toggle('checked', item.checked);
    itemEl.querySelector('.item-details').classList.toggle('checked', item.checked);
  }
  updateProgressHeader();
}

function deleteGroceryItem(id) {
  state.groceryList = state.groceryList.filter(i => i.id !== id);
  saveGroceryList();
  renderGroceryList();
}

function handleAddCustomGroceryItem(e) {
  e.preventDefault();
  const input = document.getElementById('new-grocery-item-input');
  const qtyInput = document.getElementById('new-grocery-item-qty');
  const catSelect = document.getElementById('new-grocery-item-cat');

  if (!input.value.trim()) return;

  let name = input.value.trim();
  const qtyText = qtyInput ? qtyInput.value.trim() : '';
  let amount = null;
  let unit = '';

  if (qtyText) {
    const match = qtyText.match(/^(\d+(?:[.,]\d+)?)\s*(.*)$/);
    if (match) {
      amount = parseFloat(match[1].replace(',', '.'));
      unit = match[2] || 'st.';
    } else {
      unit = qtyText;
    }
  } else {
    // Fall back to parsing an amount out of the name itself ("500g witloof").
    const match = name.match(/^(\d+(?:[.,]\d+)?)\s*([a-z.]+)?\s+(.+)$/i);
    if (match) {
      amount = parseFloat(match[1].replace(',', '.'));
      unit = match[2] || 'st.';
      name = match[3];
    }
  }

  // No quantity given at all: leave it blank rather than inventing "to taste".
  const normalized = (amount === null && !unit)
    ? { amount: null, unit: '' }
    : window.Ingredients.normalizeUnit(amount, unit, name);

  state.groceryList.push({
    id: newItemId(),
    key: window.Ingredients.keyOf(name),
    name: name,
    amount: normalized.amount,
    unit: normalized.unit,
    category: catSelect.value,
    staple: false,
    sources: [],
    checked: false
  });

  saveGroceryList();
  renderGroceryList();

  input.value = '';
  if (qtyInput) qtyInput.value = '';
  showToast(t('toastItemAdded', { name: name }), 'success');
}

function clearCompletedGroceryItems() {
  if (state.groceryList.filter(i => i.checked).length === 0) return;

  state.groceryList = state.groceryList.filter(i => !i.checked);
  saveGroceryList();
  renderGroceryList();
  showToast(t('toastClearedChecked'), 'success');
}

/** Plain-text list for the share sheet / clipboard. */
function groceryListAsText() {
  const order = window.Ingredients.AISLES;
  const groups = {};
  state.groceryList.forEach(item => {
    const cat = item.category || window.Ingredients.DEFAULT_AISLE;
    (groups[cat] = groups[cat] || []).push(item);
  });

  const lines = [t('checklistTitle')];
  Object.keys(groups)
    .sort((a, b) => {
      const ia = order.indexOf(a) === -1 ? 999 : order.indexOf(a);
      const ib = order.indexOf(b) === -1 ? 999 : order.indexOf(b);
      return ia - ib;
    })
    .forEach(cat => {
      lines.push('');
      lines.push(aisleLabel(cat));
      groups[cat].forEach(item => {
        const qty = formatQuantity(item.amount, item.unit);
        lines.push(`${item.checked ? '[x]' : '[ ]'} ${item.name}${qty ? ' — ' + qty : ''}`);
      });
    });

  return lines.join('\n');
}

async function exportGroceryList() {
  if (state.groceryList.length === 0) return;
  const text = groceryListAsText();

  try {
    if (navigator.share) {
      await navigator.share({ title: t('checklistTitle'), text: text });
      return;
    }
  } catch (err) {
    if (err && err.name === 'AbortError') return; // user dismissed the share sheet
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast(t('exportCopied'), 'success');
  } catch (err) {
    // Clipboard needs a secure context; fall back to a selectable prompt.
    window.prompt(t('exportBtn'), text);
  }
}

function updateProgressHeader() {
  const total = state.groceryList.length;
  const checked = state.groceryList.filter(i => i.checked).length;
  const textEl = document.getElementById('grocery-progress-text');
  const barEl = document.getElementById('grocery-progress-fill');
  const progressBox = document.getElementById('grocery-progress-box');

  if (total === 0) {
    if (progressBox) progressBox.style.display = 'none';
    return;
  }

  if (progressBox) progressBox.style.display = 'block';

  const percentage = Math.round((checked / total) * 100);
  if (textEl) textEl.textContent = `${checked} / ${total} ${t('itemsChecked')} (${percentage}%)`;
  if (barEl) barEl.style.width = `${percentage}%`;
}

// --- Custom Recipe Form ---
function openRecipeModal(recipe) {
  const form = document.getElementById('custom-recipe-form');
  form.reset();
  state.editingRecipeId = recipe ? recipe.id : null;
  state.customRecipeIngredients = [];

  document.getElementById('custom-recipe-modal-title').textContent =
    recipe ? t('editRecipeHeader') : t('createRecipeHeader');

  if (recipe) {
    const trans = recipeText(recipe);
    document.getElementById('recipe-title-input').value = trans.title;
    document.getElementById('recipe-subtitle-input').value = trans.subtitle || '';
    document.getElementById('recipe-desc-input').value = trans.description || '';
    document.getElementById('recipe-cat-select').value = recipeCategories(recipe)[0] || 'main';
    document.getElementById('recipe-diff-select').value = recipe.difficulty.en || 'Easy';
    document.getElementById('recipe-prep-input').value = recipe.prepTime || '';
    document.getElementById('recipe-cook-input').value = recipe.cookTime || '';
    document.getElementById('recipe-servings-input').value = recipe.servings || 4;
    document.getElementById('recipe-steps-input').value = (trans.instructions || []).join('\n');

    document.querySelectorAll('.recipe-diet-cb').forEach(cb => {
      cb.checked = !!recipe[cb.dataset.flag];
    });

    state.customRecipeIngredients = recipe.ingredients.map(ing => ({
      key: ing.key,
      name: ingredientName(ing),
      amount: ing.amount,
      unit: ing.unit,
      category: ing.category,
      staple: ing.staple
    }));
  }

  renderFormIngredientsPreview();
  if (!recipe) syncDerivedDietFlags();
  document.getElementById('custom-recipe-modal').classList.add('active');
}

function closeRecipeModal() {
  document.getElementById('custom-recipe-modal').classList.remove('active');
  document.getElementById('custom-recipe-form').reset();
  state.editingRecipeId = null;
  state.customRecipeIngredients = [];
}

function startEditingSelectedRecipe() {
  if (!state.selectedRecipe || !isUserRecipe(state.selectedRecipe)) return;
  const recipe = state.selectedRecipe;
  closeRecipeDrawer();
  openRecipeModal(recipe);
}

function deleteSelectedRecipe() {
  if (!state.selectedRecipe || !isUserRecipe(state.selectedRecipe)) return;
  if (!confirm(t('confirmDeleteRecipe'))) return;

  const id = state.selectedRecipe.id;
  state.userRecipes = state.userRecipes.filter(r => r.id !== id);
  state.favorites = state.favorites.filter(f => f !== id);
  state.selectedRecipes = state.selectedRecipes.filter(s => s !== id);
  saveUserRecipes();
  saveFavorites();

  closeRecipeDrawer();
  showToast(t('toastRecipeDeleted'), 'info');
  renderApp();
}

function addCustomIngredientToBuffer() {
  const nameInput = document.getElementById('form-ing-name');
  const amtInput = document.getElementById('form-ing-amount');
  const unitInput = document.getElementById('form-ing-unit');
  const catSelect = document.getElementById('form-ing-cat-visible');

  if (!nameInput.value.trim()) return;

  const name = nameInput.value.trim();
  const normalized = window.Ingredients.normalizeUnit(
    amtInput.value ? parseFloat(amtInput.value) : null,
    unitInput.value,
    name
  );

  state.customRecipeIngredients.push({
    key: window.Ingredients.keyOf(name),
    name: name,
    amount: normalized.amount,
    unit: normalized.unit,
    category: catSelect.value,
    staple: window.Ingredients.isStaple(name, catSelect.value)
  });

  renderFormIngredientsPreview();
  syncDerivedDietFlags();

  nameInput.value = '';
  amtInput.value = '';
  unitInput.value = 'g';
  nameInput.focus();
}

function renderFormIngredientsPreview() {
  const container = document.getElementById('form-ingredients-preview');
  if (state.customRecipeIngredients.length === 0) {
    container.innerHTML = `<span class="preview-empty">${escapeHtml(t('noIngredientsAdded'))}</span>`;
    return;
  }

  container.innerHTML = state.customRecipeIngredients.map((ing, index) => `
    <span class="preview-ing-tag">
      <span>${escapeHtml(ing.name)}</span>
      <span class="qty">${escapeHtml(formatQuantity(ing.amount, ing.unit))}</span>
      <button type="button" data-index="${index}">&times;</button>
    </span>
  `).join('');

  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', e => {
      state.customRecipeIngredients.splice(parseInt(e.currentTarget.dataset.index, 10), 1);
      renderFormIngredientsPreview();
      syncDerivedDietFlags();
    });
  });
}

/**
 * Tick the dietary boxes based on what is actually in the ingredient list.
 * You can still untick one, but you cannot tick "nut-free" over a bag of
 * almonds — the allergen boxes are re-checked against the ingredients on save.
 */
function syncDerivedDietFlags() {
  const derived = window.Ingredients.deriveDietFlags(state.customRecipeIngredients, {});
  document.querySelectorAll('.recipe-diet-cb').forEach(cb => {
    cb.checked = !!derived[cb.dataset.flag];
  });
}

function handleCustomRecipeSubmit(e) {
  e.preventDefault();

  const title = document.getElementById('recipe-title-input').value.trim();
  const subtitle = document.getElementById('recipe-subtitle-input').value.trim() || t('customBadge');
  const description = document.getElementById('recipe-desc-input').value.trim();
  const category = document.getElementById('recipe-cat-select').value;
  const prepTime = document.getElementById('recipe-prep-input').value || '15 mins';
  const cookTime = document.getElementById('recipe-cook-input').value || '0 mins';
  const difficulty = document.getElementById('recipe-diff-select').value;
  const servings = parseInt(document.getElementById('recipe-servings-input').value, 10) || 2;
  const instructionsText = document.getElementById('recipe-steps-input').value;

  if (state.customRecipeIngredients.length === 0) {
    showToast(t('needIngredients'), 'info');
    return;
  }

  const instructions = instructionsText.split('\n').map(s => s.trim()).filter(Boolean);
  if (instructions.length === 0) {
    showToast(t('needInstructions'), 'info');
    return;
  }

  const existing = state.editingRecipeId
    ? state.userRecipes.find(r => r.id === state.editingRecipeId)
    : null;

  // What you ticked, but an allergen-free claim never survives an ingredient
  // that contradicts it.
  const derived = window.Ingredients.deriveDietFlags(state.customRecipeIngredients, {});
  const dietFlags = {};
  document.querySelectorAll('.recipe-diet-cb').forEach(cb => {
    const flag = cb.dataset.flag;
    dietFlags[flag] = cb.checked && derived[flag] !== false;
  });

  const recipe = Object.assign({
    id: existing ? existing.id : 'custom-' + Date.now(),
    image: existing ? existing.image : 'images/witloof_gratin.jpg'
  }, dietFlags, {
    prepTime: prepTime,
    cookTime: cookTime,
    difficulty: { en: difficulty, nl: difficulty, fr: difficulty },
    servings: servings,
    category: [category],
    translations: {
      en: { title, subtitle, description, instructions },
      nl: { title, subtitle, description, instructions },
      fr: { title, subtitle, description, instructions }
    },
    ingredients: state.customRecipeIngredients.map(ing => ({
      key: ing.key,
      name: { en: ing.name, nl: ing.name, fr: ing.name },
      amount: ing.amount,
      unit: ing.unit,
      category: ing.category,
      staple: ing.staple
    }))
  });

  if (existing) {
    state.userRecipes = state.userRecipes.map(r => (r.id === existing.id ? recipe : r));
    showToast(t('toastRecipeUpdated', { name: title }), 'success');
  } else {
    state.userRecipes.push(recipe);
    showToast(t('toastRecipeCreated', { name: title }), 'success');
  }

  saveUserRecipes();
  closeRecipeModal();
  renderRecipesList();
  renderHomeTab();
}

// --- Developer Tool: Bulk Recipe Simulator (Scale Testing) ---
function generateBulkRecipes() {
  const diffs = [
    { en: "Easy", nl: "Gemakkelijk", fr: "Facile" },
    { en: "Medium", nl: "Gemiddeld", fr: "Moyen" },
    { en: "Hard", nl: "Moeilijk", fr: "Difficile" }
  ];
  const names = [
    { en: "Stoemp with", nl: "Stoemp met", fr: "Stoemp aux" },
    { en: "Flemish", nl: "Vlaamse", fr: "Marmite" },
    { en: "Ghent Style", nl: "Gentse", fr: "Gantoise" },
    { en: "Brussels Special", nl: "Brusselse", fr: "Spécialité Bruxelloise" }
  ];
  const foods = [
    { en: "Leeks", nl: "prei", fr: "poireaux" },
    { en: "Apples", nl: "appels", fr: "pommes" },
    { en: "Endives", nl: "witloof", fr: "chicons" },
    { en: "Mushrooms", nl: "champignons", fr: "champignons" },
    { en: "Beer sauce", nl: "biersaus", fr: "sauce à la bière" },
    { en: "Cheese gratin", nl: "kaasgratin", fr: "gratin au fromage" }
  ];
  const cats = ['main', 'soup', 'snack', 'dessert', 'breakfast'];

  const rawRecipes = [];
  for (let i = 1; i <= 2000; i++) {
    const nameTemplate = names[Math.floor(Math.random() * names.length)];
    const foodTemplate = foods[Math.floor(Math.random() * foods.length)];
    const isGF = Math.random() > 0.5;
    const isDF = Math.random() > 0.5;
    const isVeg = Math.random() > 0.4;

    rawRecipes.push({
      id: `bulk-${i}`,
      prepTime: (10 + Math.floor(Math.random() * 40)) + " mins",
      cookTime: (15 + Math.floor(Math.random() * 90)) + " mins",
      difficulty: diffs[Math.floor(Math.random() * diffs.length)],
      servings: 2 + Math.floor(Math.random() * 6),
      category: [cats[Math.floor(Math.random() * cats.length)]],
      image: "images/witloof_gratin.jpg",
      isGlutenFree: isGF,
      isNutFree: Math.random() > 0.3,
      isDairyFree: isDF,
      isEggFree: Math.random() > 0.3,
      isVegetarian: isVeg,
      isVegan: isVeg && Math.random() > 0.5,
      isCandidaFriendly: isGF && isDF && Math.random() > 0.5,
      isKeto: Math.random() > 0.6,
      translations: {
        en: {
          title: `${nameTemplate.en} ${foodTemplate.en} #${i}`,
          subtitle: "Simulated Scale Test Recipe",
          description: "A simulated Belgian recipe for performance testing.",
          instructions: ["Clean ingredients.", "Heat through.", "Serve hot."]
        },
        nl: {
          title: `${nameTemplate.nl} ${foodTemplate.nl} #${i}`,
          subtitle: "Gesimuleerd testrecept",
          description: "Een gesimuleerd Belgisch recept om laadsnelheden te testen.",
          instructions: ["Maak ingrediënten schoon.", "Warm alles goed door.", "Serveer warm."]
        },
        fr: {
          title: `${nameTemplate.fr} ${foodTemplate.fr} #${i}`,
          subtitle: "Recette de test simulée",
          description: "Une recette belge simulée pour tester les performances.",
          instructions: ["Nettoyer les ingrédients.", "Faire chauffer le tout.", "Servir chaud."]
        }
      },
      ingredients: [{
        key: 'simulated ingredient',
        name: { en: "Simulated Ingredient", nl: "Gesimuleerd ingrediënt", fr: "Ingrédient simulé" },
        amount: 200,
        unit: "g",
        category: "Kruidenier",
        staple: false
      }]
    });
  }

  // In memory only — never written to localStorage.
  state.builtInRecipes = state.builtInRecipes.filter(r => r.id.indexOf('bulk-') !== 0).concat(rawRecipes);
  rebuildRecipeIndex();

  showToast(t('toastBulkLoaded'), 'success');
  renderRecipeGrid();
  renderHomeTab();
}

// --- Notification Banner ---
let toastTimer = null;
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  clearTimeout(toastTimer);
  toast.querySelector('.toast-text').textContent = message;
  toast.className = 'toast-msg';

  if (type === 'info') {
    toast.classList.add('info');
    toast.querySelector('.toast-icon').textContent = 'ℹ️';
  } else {
    toast.querySelector('.toast-icon').textContent = '✅';
  }

  toast.classList.add('visible');
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2500);
}

// Fire up
window.addEventListener('DOMContentLoaded', initApp);
