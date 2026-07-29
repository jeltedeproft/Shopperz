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
    recipeCategoryClassics: "Belgian Classics",
    recipeCategoryComfort: "Comfort Food",
    recipeCategorySeafood: "Seafood",
    recipeCategoryCustom: "Custom",
    createRecipeHeader: "Create Custom Recipe",
    checklistTitle: "Grocery List",
    checklistDesc: "Sorted by food categories for quick navigation",
    editListBtn: "✍️ Edit List",
    inStoreBtn: "🛒 In-Store",
    clearCheckedBtn: "Clear Checked",
    customItemPlaceholder: "E.g., 500g witloof or 2 bottles beer...",
    emptyListHeader: "Your checklist is empty",
    emptyListDesc: "Select recipes or add items manually!",
    prefTitle: "Preferences",
    prefDesc: "Configure language preferences",
    langGroupTitle: "Language Settings",
    langSelectLabel: "App Language",
    langSelectDesc: "Choose the interface language",
    dangerZoneTitle: "Danger Zone",
    resetDbLabel: "Reset Recipe Database",
    resetDbDesc: "Restores default classic Belgian recipes",
    resetBtnText: "Reset",
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
    // Filters UI
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
    scaleTestTitle: "Performance Scale Testing",
    scaleTestLabel: "Load 2,000 Demo Recipes",
    scaleTestDesc: "Simulate thousands of recipes to test search speed",
    generateBtnText: "Generate"
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
    recipeCategoryClassics: "Belgische Klassiekers",
    recipeCategoryComfort: "Comfort Food",
    recipeCategorySeafood: "Vis & Zeevruchten",
    recipeCategoryCustom: "Eigen recepten",
    createRecipeHeader: "Nieuw Recept Toevoegen",
    checklistTitle: "Boodschappenlijst",
    checklistDesc: "Gesorteerd per voedselcategorie voor snel winkelen",
    editListBtn: "✍️ Lijst bewerken",
    inStoreBtn: "🛒 In de winkel",
    clearCheckedBtn: "Wis afgevinkt",
    customItemPlaceholder: "Bv. 500g witloof of 2 flessen bier...",
    emptyListHeader: "Je boodschappenlijst is leeg",
    emptyListDesc: "Selecteer recepten of voeg zelf items toe!",
    prefTitle: "Instellingen",
    prefDesc: "Stel de taalvoorkeuren in",
    langGroupTitle: "Taalinstellingen",
    langSelectLabel: "App Taal",
    langSelectDesc: "Kies de interfacetaal van de app",
    dangerZoneTitle: "Gevarenzone",
    resetDbLabel: "Herstel Recepten",
    resetDbDesc: "Wist eigen recepten en herstelt de klassiekers",
    resetBtnText: "Herstellen",
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
    // Filters UI
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
    scaleTestTitle: "Prestatie Schaaltest",
    scaleTestLabel: "Laad 2.000 testrecepten",
    scaleTestDesc: "Simuleer duizenden recepten om de zoeksnelheid te testen",
    generateBtnText: "Genereren"
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
    recipeCategoryClassics: "Classiques Belges",
    recipeCategoryComfort: "Plats Réconfortants",
    recipeCategorySeafood: "Fruits de Mer",
    recipeCategoryCustom: "Personnalisées",
    createRecipeHeader: "Créer une Recette Custom",
    checklistTitle: "Liste de Courses",
    checklistDesc: "Triée par catégories pour une navigation rapide",
    editListBtn: "✍️ Modifier Liste",
    inStoreBtn: "🛒 En magasin",
    clearCheckedBtn: "Effacer cochés",
    customItemPlaceholder: "Ex. 500g chicons ou 2 bouteilles de bière...",
    emptyListHeader: "Votre liste est vide",
    emptyListDesc: "Sélectionnez des recettes ou ajoutez des articles manuellement !",
    prefTitle: "Préférences",
    prefDesc: "Configurez la langue de l'application",
    langGroupTitle: "Paramètres de Langue",
    langSelectLabel: "Langue de l'App",
    langSelectDesc: "Choisissez la langue de l'interface",
    dangerZoneTitle: "Zone de Danger",
    resetDbLabel: "Réinitialiser les Recettes",
    resetDbDesc: "Rétablit les 5 classiques et supprime vos ajouts",
    resetBtnText: "Restaurer",
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
    // Filters UI
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
    scaleTestTitle: "Test de Performance",
    scaleTestLabel: "Charger 2 000 recettes",
    scaleTestDesc: "Simuler des milliers de recettes pour tester la vitesse",
    generateBtnText: "Générer"
  }
};

// Generic food category sorting order for the grocery list
const foodCategoryOrder = [
  "Groenten & Fruit",       // Produce
  "Visafdeling",            // Seafood
  "Slagerij & Gevogelte",   // Meat/Poultry
  "Zuivel & Eieren",        // Dairy
  "Bakkerij",               // Bakery
  "Kruidenier",             // Pantry
  "Bieren & Dranken"        // Drinks
];

// --- State Management ---
let state = {
  recipes: [],
  groceryList: [],
  selectedRecipes: [], // For batch converting
  favorites: [], // Favorites bookmarking list
  settings: {
    language: 'en'
  },
  activeTab: 'home',
  selectedRecipe: null,
  recipeServings: 4,
  customRecipeIngredients: []
};

// --- Initialization ---
function initApp() {
  // Version-controlled database migration to push new images/recipes to cached local storage
  const CURRENT_DB_VERSION = "v6";
  const storedDbVersion = localStorage.getItem('belgian_db_version');
  if (storedDbVersion !== CURRENT_DB_VERSION) {
    localStorage.removeItem('belgian_recipes');
    localStorage.setItem('belgian_db_version', CURRENT_DB_VERSION);
  }

  // Load settings first to establish correct language
  const storedSettings = localStorage.getItem('belgian_app_settings');
  if (storedSettings) {
    state.settings = JSON.parse(storedSettings);
  } else {
    // Detect browser language default or fallback to en
    const sysLang = navigator.language.substring(0, 2);
    state.settings.language = ['en', 'nl', 'fr'].includes(sysLang) ? sysLang : 'en';
    saveSettings();
  }

  // Load recipes
  const storedRecipes = localStorage.getItem('belgian_recipes');
  let loaded = null;
  if (storedRecipes) {
    try {
      loaded = JSON.parse(storedRecipes);
      // Force database structure upgrade if local storage data is in the old format
      if (Array.isArray(loaded) && (loaded.length === 0 || !loaded[0].translations)) {
        loaded = null;
      }
    } catch(e) {
      loaded = null;
    }
  }

  if (loaded) {
    state.recipes = loaded;
  } else {
    state.recipes = [...window.initialRecipes];
    localStorage.setItem('belgian_recipes', JSON.stringify(state.recipes));
  }

  // Load favorites list
  const storedFavs = localStorage.getItem('belgian_favorites');
  state.favorites = storedFavs ? JSON.parse(storedFavs) : [];

  // Load grocery list
  const storedList = localStorage.getItem('belgian_grocery_list');
  state.groceryList = storedList ? JSON.parse(storedList) : [];

  setupEventListeners();
  applyLanguage(state.settings.language);
  renderApp();
}

function saveSettings() {
  localStorage.setItem('belgian_app_settings', JSON.stringify(state.settings));
}

// --- Language Switching Engine ---
function applyLanguage(lang) {
  state.settings.language = lang;
  saveSettings();

  const dict = uiTranslations[lang];

  // Set selected dropdown value
  const langSelect = document.getElementById('language-select');
  if (langSelect) langSelect.value = lang;

  // Render text translations
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.dataset.translate;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Render placeholder translations
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.dataset.translatePlaceholder;
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Dynamic document title update
  document.title = `${dict.appTitle} - ${dict.appSubtitle}`;

  // Update Custom Form dropdown options to match current language
  populateCustomFormAisles(lang);
  populateGroceryFormAisles(lang);

  // Rerender active components
  renderApp();
}

function populateCustomFormAisles(lang) {
  const select = document.getElementById('form-ing-cat-visible');
  if (!select) return;
  const dict = uiTranslations[lang];
  select.innerHTML = `
    <option value="Groenten & Fruit">${dict.aisleProduce}</option>
    <option value="Slagerij & Gevogelte">${dict.aisleMeat}</option>
    <option value="Zuivel & Eieren">${dict.aisleDairy}</option>
    <option value="Bakkerij">${dict.aisleBakery}</option>
    <option value="Bieren & Dranken">${dict.aisleDrinks}</option>
    <option value="Kruidenier">${dict.aislePantry}</option>
    <option value="Visafdeling">${dict.aisleSeafood}</option>
  `;
}

function populateGroceryFormAisles(lang) {
  const select = document.getElementById('new-grocery-item-cat');
  if (!select) return;
  const dict = uiTranslations[lang];
  select.innerHTML = `
    <option value="Groenten & Fruit">${dict.aisleProduce}</option>
    <option value="Slagerij & Gevogelte">${dict.aisleMeat}</option>
    <option value="Zuivel & Eieren">${dict.aisleDairy}</option>
    <option value="Bakkerij">${dict.aisleBakery}</option>
    <option value="Bieren & Dranken">${dict.aisleDrinks}</option>
    <option value="Kruidenier" selected>${dict.aislePantry}</option>
    <option value="Visafdeling">${dict.aisleSeafood}</option>
  `;
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

  if (tabId === 'grocery') {
    renderGroceryList();
  } else if (tabId === 'recipes') {
    renderRecipesList();
  } else if (tabId === 'home') {
    renderHomeTab();
  } else if (tabId === 'settings') {
    renderSettingsTab();
  }
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Tab click
  document.querySelectorAll('.tab-item').forEach(item => {
    item.addEventListener('click', (e) => {
      switchTab(e.currentTarget.dataset.tab);
    });
  });

  // Language Dropdown change
  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }

  // Home search
  const homeSearch = document.getElementById('home-search');
  if (homeSearch) {
    homeSearch.addEventListener('input', (e) => {
      renderHomeTab(e.target.value.toLowerCase());
    });
  }

  // Recipe search
  const recipeSearch = document.getElementById('recipe-search');
  if (recipeSearch) {
    recipeSearch.addEventListener('input', (e) => {
      renderRecipesList(e.target.value.toLowerCase());
    });
  }

  // Drawer actions
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

  // Batch action bar sync click
  document.getElementById('batch-convert-btn').addEventListener('click', convertSelectedRecipesToGroceryList);

  // FAB modal actions
  document.getElementById('add-recipe-fab').addEventListener('click', openRecipeModal);
  document.getElementById('modal-close-btn').addEventListener('click', closeRecipeModal);
  document.getElementById('recipe-cancel-btn').addEventListener('click', closeRecipeModal);
  document.getElementById('custom-recipe-form').addEventListener('submit', handleCustomRecipeSubmit);
  document.getElementById('add-custom-ing-btn').addEventListener('click', addCustomIngredientToBuffer);

  // Grocery item actions
  document.getElementById('add-grocery-item-form').addEventListener('submit', handleAddCustomGroceryItem);
  document.getElementById('mode-list-btn').addEventListener('click', () => toggleShoppingMode(false));
  document.getElementById('mode-store-btn').addEventListener('click', () => toggleShoppingMode(true));
  document.getElementById('clear-grocery-btn').addEventListener('click', clearCompletedGroceryItems);

  // (Store selection listener removed)

  // Reset actions
  document.getElementById('reset-data-btn').addEventListener('click', () => {
    const lang = state.settings.language;
    const msg = lang === 'nl' 
      ? 'Herstel alle recepten en wis handmatige toevoegingen?' 
      : lang === 'fr' 
      ? 'Réinitialiser toutes les recettes et effacer vos ajouts ?' 
      : 'Are you sure you want to restore default classic recipes and clear custom entries?';
    if (confirm(msg)) {
      localStorage.removeItem('belgian_recipes');
      state.recipes = [...window.initialRecipes];
      state.favorites = [];
      state.selectedRecipes = [];
      localStorage.setItem('belgian_recipes', JSON.stringify(state.recipes));
      localStorage.setItem('belgian_favorites', JSON.stringify([]));
      showToast(lang === 'nl' ? 'Database hersteld!' : lang === 'fr' ? 'Base restaurée !' : 'Database reset successfully!', 'success');
      renderApp();
    }
  });

  document.getElementById('reset-list-btn').addEventListener('click', () => {
    const lang = state.settings.language;
    const msg = lang === 'nl' 
      ? 'Boodschappenlijst volledig wissen?' 
      : lang === 'fr' 
      ? 'Vider complètement la liste de courses ?' 
      : 'Wipe entire grocery list?';
    if (confirm(msg)) {
      state.groceryList = [];
      saveGroceryList();
      renderGroceryList();
      showToast(lang === 'nl' ? 'Boodschappenlijst leeg!' : lang === 'fr' ? 'Liste vidée !' : 'Grocery list wiped!', 'info');
    }
  });

  // Filter tray toggle
  const filterToggle = document.getElementById('recipe-filter-toggle-btn');
  if (filterToggle) {
    filterToggle.addEventListener('click', () => {
      const tray = document.getElementById('recipe-filter-tray');
      const isHidden = tray.style.display === 'none';
      tray.style.display = isHidden ? 'block' : 'none';
      filterToggle.style.borderColor = isHidden ? 'var(--accent-gold)' : 'var(--border-color)';
      filterToggle.style.background = isHidden ? 'var(--accent-gold-dim)' : 'var(--bg-secondary)';
    });
  }

  // Filter checkboxes change triggers re-filtration
  document.querySelectorAll('.diet-filter-cb, .intol-filter-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      const searchVal = document.getElementById('recipe-search').value.toLowerCase();
      const activePill = document.querySelector('#recipe-categories-row .cat-pill.active');
      const category = activePill ? activePill.dataset.category : 'All';
      filterRecipes(category, searchVal);
    });
  });

  // Bulk generation of 2,000 recipes for performance testing
  const bulkGenBtn = document.getElementById('generate-bulk-btn');
  if (bulkGenBtn) {
    bulkGenBtn.addEventListener('click', generateBulkRecipes);
  }
}

// --- Render Controllers ---
function renderApp() {
  renderHomeTab();
  renderRecipesList();
  renderGroceryList();
  renderSettingsTab();
}

function renderHomeTab(filterQuery = '') {
  const lang = state.settings.language;
  const dict = uiTranslations[lang];

  // 1. Suggestion Recipe Card
  const featuredContainer = document.getElementById('featured-recipe-container');
  const featuredRecipe = state.recipes.find(r => r.id === 'carbonnade-flamande') || state.recipes[0];
  
  if (featuredContainer && featuredRecipe) {
    const isSelected = state.selectedRecipes.includes(featuredRecipe.id);
    const selectedClass = isSelected ? 'selected-for-list' : '';
    const name = featuredRecipe.translations[lang]?.title || featuredRecipe.translations['en'].title;
    const desc = featuredRecipe.translations[lang]?.description || featuredRecipe.translations['en'].description;
    
    featuredContainer.innerHTML = `
      <div class="featured-card ${selectedClass}" data-id="${featuredRecipe.id}">
        <!-- Select Toggle Button -->
        <div class="recipe-card-select-btn" data-id="${featuredRecipe.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <img class="featured-img" src="${featuredRecipe.image}" alt="${name}">
        <div class="featured-overlay">
          <span class="featured-tag">${dict.suggestedTitle}</span>
          <h3 class="featured-title">${name}</h3>
          <p class="featured-desc">${desc}</p>
        </div>
      </div>
    `;

    // Click handler for select button
    featuredContainer.querySelector('.recipe-card-select-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleRecipeSelection(featuredRecipe.id);
    });

    // Click handler to open recipe detail drawer
    featuredContainer.querySelector('.featured-card').addEventListener('click', () => {
      openRecipeDrawer(featuredRecipe.id);
    });
  }

  // 3. Recommended Grid
  const homeGrid = document.getElementById('home-recipe-grid');
  if (homeGrid) {
    let filteredList = state.recipes;
    if (filterQuery) {
      filteredList = state.recipes.filter(r => {
        const tr = r.translations[lang] || r.translations['en'];
        return tr.title.toLowerCase().includes(filterQuery) || 
               tr.subtitle.toLowerCase().includes(filterQuery) ||
               r.ingredients.some(i => (i.name[lang] || i.name['en']).toLowerCase().includes(filterQuery));
      });
    }

    // Cap Home grid display at 6 recipes for visual layout comfort
    filteredList = filteredList.slice(0, 6);

    if (filteredList.length === 0) {
      homeGrid.innerHTML = `<div style="grid-column: span 2; text-align: center; color: var(--text-secondary); padding: 20px;">No recipes match "${filterQuery}"</div>`;
      return;
    }

    homeGrid.innerHTML = filteredList.map(recipe => {
      const isFav = state.favorites.includes(recipe.id);
      const isSelected = state.selectedRecipes.includes(recipe.id);
      const selectedClass = isSelected ? 'selected-for-list' : '';
      const name = recipe.translations[lang]?.title || recipe.translations['en'].title;
      const diffText = recipe.difficulty[lang] || recipe.difficulty['en'];
      
      return `
        <div class="recipe-card ${selectedClass}" data-id="${recipe.id}">
          <div class="recipe-card-select-btn" data-id="${recipe.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div class="recipe-card-img-wrapper">
            <img class="recipe-card-img" src="${recipe.image}" alt="${name}">
            <span class="recipe-badge">${diffText}</span>
            ${isFav ? `<span class="recipe-fav-badge" style="position: absolute; top: 8px; left: 8px; font-size: 12px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">❤️</span>` : ''}
          </div>
          <div class="recipe-card-content">
            <h4 class="recipe-card-title">${name}</h4>
            <div class="recipe-card-meta">
              <span>⏱️ ${recipe.prepTime}</span>
              <span>🍽️ ${recipe.servings}p</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click events
    homeGrid.querySelectorAll('.recipe-card').forEach(card => {
      card.querySelector('.recipe-card-select-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleRecipeSelection(card.dataset.id);
      });
      card.addEventListener('click', () => {
        openRecipeDrawer(card.dataset.id);
      });
    });
  }
}

function renderRecipesList(filterQuery = '') {
  const container = document.getElementById('recipes-tab-grid');
  if (!container) return;

  const lang = state.settings.language;
  const dict = uiTranslations[lang];

  // Render category filters NL/FR/EN dynamically
  const categories = ['All', 'Belgian Classics', 'Comfort Food', 'Seafood', 'Custom'];
  const catKeys = ['recipeCategoryAll', 'recipeCategoryClassics', 'recipeCategoryComfort', 'recipeCategorySeafood', 'recipeCategoryCustom'];
  const catRow = document.getElementById('recipe-categories-row');
  
  if (catRow) {
    const activeCategory = catRow.querySelector('.cat-pill.active')?.dataset.category || 'All';
    
    catRow.innerHTML = categories.map((cat, idx) => `
      <div class="cat-pill ${cat === activeCategory ? 'active' : ''}" data-category="${cat}">
        ${dict[catKeys[idx]]}
      </div>
    `).join('');

    catRow.querySelectorAll('.cat-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        catRow.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const selectedCat = e.currentTarget.dataset.category;
        filterRecipes(selectedCat, document.getElementById('recipe-search').value.toLowerCase());
      });
    });
  }

  // Active category filter state
  const activeCat = catRow ? catRow.querySelector('.cat-pill.active')?.dataset.category || 'All' : 'All';
  filterRecipes(activeCat, filterQuery);
}

function filterRecipes(category, query) {
  const container = document.getElementById('recipes-tab-grid');
  if (!container) return;

  const lang = state.settings.language;
  const dict = uiTranslations[lang];

  let filtered = state.recipes;

  // Category filter
  if (category !== 'All') {
    if (category === 'Custom') {
      filtered = state.recipes.filter(r => r.id.startsWith('custom-'));
    } else {
      filtered = state.recipes.filter(r => {
        const catEN = r.category['en'];
        return catEN === category || (category === 'Belgian Classics' && catEN === 'Belgian Classics') || (category === 'Comfort Food' && catEN === 'Comfort Food') || (category === 'Seafood' && catEN === 'Seafood');
      });
    }
  }

  // Search query filter
  if (query) {
    filtered = filtered.filter(r => {
      const tr = r.translations[lang] || r.translations['en'];
      return tr.title.toLowerCase().includes(query) || 
             tr.subtitle.toLowerCase().includes(query) ||
             r.ingredients.some(i => (i.name[lang] || i.name['en']).toLowerCase().includes(query));
    });
  }

  // Diet filter checkboxes
  const selectedDiets = Array.from(document.querySelectorAll('.diet-filter-cb:checked')).map(cb => cb.value);
  if (selectedDiets.length > 0) {
    filtered = filtered.filter(r => {
      if (selectedDiets.includes('vegetarian') && !r.isVegetarian) return false;
      if (selectedDiets.includes('vegan') && !r.isVegan) return false;
      if (selectedDiets.includes('candida') && !r.isCandidaFriendly) return false;
      if (selectedDiets.includes('keto') && !r.isKeto) return false;
      return true;
    });
  }

  // Allergen/Intolerance filter checkboxes
  const selectedIntols = Array.from(document.querySelectorAll('.intol-filter-cb:checked')).map(cb => cb.value);
  if (selectedIntols.length > 0) {
    filtered = filtered.filter(r => {
      if (selectedIntols.includes('gluten') && !r.isGlutenFree) return false;
      if (selectedIntols.includes('nuts') && !r.isNutFree) return false;
      if (selectedIntols.includes('dairy') && !r.isDairyFree) return false;
      if (selectedIntols.includes('eggs') && !r.isEggFree) return false;
      return true;
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: span 2; text-align: center; color: var(--text-secondary); padding: 40px 0;">No matching recipes found</div>`;
    return;
  }

  container.innerHTML = filtered.map(recipe => {
    const isFav = state.favorites.includes(recipe.id);
    const isSelected = state.selectedRecipes.includes(recipe.id);
    const selectedClass = isSelected ? 'selected-for-list' : '';
    const name = recipe.translations[lang]?.title || recipe.translations['en'].title;
    const sub = recipe.translations[lang]?.subtitle || recipe.translations['en'].subtitle;
    const diffText = recipe.difficulty[lang] || recipe.difficulty['en'];

    return `
      <div class="recipe-card ${selectedClass}" data-id="${recipe.id}">
        <div class="recipe-card-select-btn" data-id="${recipe.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div class="recipe-card-img-wrapper">
          <img class="recipe-card-img" src="${recipe.image}" alt="${name}">
          <span class="recipe-badge">${diffText}</span>
          ${isFav ? `<span class="recipe-fav-badge" style="position: absolute; top: 8px; left: 8px; font-size: 12px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">❤️</span>` : ''}
        </div>
        <div class="recipe-card-content">
          <h4 class="recipe-card-title">${name}</h4>
          <p style="font-size: 10px; color: var(--text-secondary); margin-bottom: 6px;">${sub}</p>
          <div class="recipe-card-meta">
            <span>⏱️ ${recipe.prepTime}</span>
            <span>🍽️ ${recipe.servings}p</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Event handlers
  container.querySelectorAll('.recipe-card').forEach(card => {
    card.querySelector('.recipe-card-select-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleRecipeSelection(card.dataset.id);
    });
    card.addEventListener('click', () => {
      openRecipeDrawer(card.dataset.id);
    });
  });

  updateBatchActionBar();
}

function renderSettingsTab() {
  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    langSelect.value = state.settings.language;
  }
}

// --- Batch Selection System ---
function toggleRecipeSelection(recipeId) {
  const idx = state.selectedRecipes.indexOf(recipeId);
  const lang = state.settings.language;
  const dict = uiTranslations[lang];

  if (idx > -1) {
    state.selectedRecipes.splice(idx, 1);
    showToast(`${dict.toastDeselected}`, 'info');
  } else {
    state.selectedRecipes.push(recipeId);
    showToast(`${dict.toastSelected}`, 'success');
  }

  // Toggle selection layout classes on all grids immediately
  document.querySelectorAll(`.recipe-card[data-id="${recipeId}"], .featured-card[data-id="${recipeId}"]`).forEach(card => {
    card.classList.toggle('selected-for-list', idx === -1);
  });

  updateBatchActionBar();
}

function updateBatchActionBar() {
  const bar = document.getElementById('recipe-batch-bar');
  if (!bar) return;

  const count = state.selectedRecipes.length;
  const lang = state.settings.language;
  const dict = uiTranslations[lang];

  if (count > 0) {
    bar.style.display = 'flex';
    const rawText = dict.batchSelectedText || 'Selected: {count} recipes';
    document.getElementById('batch-bar-text').textContent = rawText.replace('{count}', count);
    document.getElementById('batch-convert-btn').textContent = dict.batchGenerateBtn || 'Generate List';
  } else {
    bar.style.display = 'none';
  }
}

function convertSelectedRecipesToGroceryList() {
  if (state.selectedRecipes.length === 0) return;

  const lang = state.settings.language;
  const dict = uiTranslations[lang];
  const aggregatedIngredients = [];

  state.selectedRecipes.forEach(recipeId => {
    const recipe = state.recipes.find(r => r.id === recipeId);
    if (recipe) {
      recipe.ingredients.forEach(ing => {
        aggregatedIngredients.push({
          name: ing.name, // translations block or string
          amount: ing.amount,
          unit: ing.unit,
          category: ing.category || 'Kruidenier'
        });
      });
    }
  });

  // Aggregate duplicate names
  const finalAggregated = [];
  aggregatedIngredients.forEach(ing => {
    const ingName = typeof ing.name === 'object' ? (ing.name[lang] || ing.name['en']) : ing.name;

    const existing = finalAggregated.find(item => {
      const matchName = typeof item.name === 'object' ? (item.name[lang] || item.name['en']) : item.name;
      return matchName.toLowerCase() === ingName.toLowerCase();
    });

    if (existing) {
      if (existing.unit === ing.unit && typeof existing.amount === 'number' && typeof ing.amount === 'number') {
        existing.amount = Math.round((existing.amount + ing.amount) * 10) / 10;
      }
    } else {
      finalAggregated.push({ ...ing });
    }
  });

  // Push to main list
  finalAggregated.forEach(aggItem => {
    const nameStr = typeof aggItem.name === 'object' ? (aggItem.name[lang] || aggItem.name['en']) : aggItem.name;
    
    const existingIndex = state.groceryList.findIndex(item => 
      item.name.toLowerCase() === nameStr.toLowerCase()
    );

    if (existingIndex > -1) {
      const existing = state.groceryList[existingIndex];
      if (existing.unit === aggItem.unit && typeof existing.amount === 'number' && typeof aggItem.amount === 'number') {
        state.groceryList[existingIndex].amount = Math.round((existing.amount + aggItem.amount) * 10) / 10;
      }
    } else {
      state.groceryList.push({
        id: 'item-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
        name: nameStr,
        amount: aggItem.amount,
        unit: aggItem.unit,
        category: aggItem.category,
        checked: false
      });
    }
  });

  saveGroceryList();

  // Clear selections
  state.selectedRecipes = [];
  document.querySelectorAll('.recipe-card, .featured-card').forEach(card => {
    card.classList.remove('selected-for-list');
  });
  updateBatchActionBar();

  showToast(dict.toastAddedBatch || 'Grocery list generated!', 'success');
  switchTab('grocery');
}

// --- Recipe Detail Drawer (Bottom sheet) ---
function openRecipeDrawer(recipeId) {
  const recipe = state.recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  const lang = state.settings.language;
  const dict = uiTranslations[lang];

  state.selectedRecipe = recipe;
  state.recipeServings = recipe.servings;

  const recTranslation = recipe.translations[lang] || recipe.translations['en'];

  document.getElementById('drawer-hero-img').src = recipe.image;
  document.getElementById('drawer-subtitle').textContent = recipe.category[lang] || recipe.category['en'];
  document.getElementById('drawer-title').textContent = recTranslation.title;
  document.getElementById('drawer-description').innerHTML = recTranslation.description;
  
  document.getElementById('val-prep-time').textContent = recipe.prepTime;
  document.getElementById('val-cook-time').textContent = recipe.cookTime || 'N/A';
  
  const difficultyText = recipe.difficulty[lang] || recipe.difficulty['en'];
  document.getElementById('val-difficulty').textContent = difficultyText;

  document.getElementById('servings-count').textContent = state.recipeServings;

  // Favorite icon visual state
  const isFav = state.favorites.includes(recipeId);
  document.getElementById('recipe-fav-btn').classList.toggle('favorited', isFav);

  updateScaledIngredients();
  renderRecipeInstructions(recTranslation.instructions);

  document.getElementById('drawer-backdrop').classList.add('active');
  document.getElementById('recipe-drawer').classList.add('active');
}

// Standard close drawer
function closeRecipeDrawer() {
  document.getElementById('drawer-backdrop').classList.remove('active');
  document.getElementById('recipe-drawer').classList.remove('active');
  state.selectedRecipe = null;
}

function updateScaledIngredients() {
  if (!state.selectedRecipe) return;
  const lang = state.settings.language;
  const originalServings = state.selectedRecipe.servings;
  const targetServings = state.recipeServings;
  const ratio = targetServings / originalServings;

  const container = document.getElementById('drawer-ingredients-list');
  document.getElementById('servings-count').textContent = targetServings;

  container.innerHTML = state.selectedRecipe.ingredients.map(ing => {
    let quantityDisplay = '';
    if (typeof ing.amount === 'number' && ing.amount > 1) {
      const scaledAmount = Math.round(ing.amount * ratio * 10) / 10;
      quantityDisplay = `${scaledAmount} ${ing.unit}`;
    } else {
      quantityDisplay = ing.unit;
    }

    const nameStr = typeof ing.name === 'object' ? (ing.name[lang] || ing.name['en']) : ing.name;

    return `
      <div class="ingredient-row">
        <span class="ingredient-name">${nameStr}</span>
        <span class="ingredient-qty">${quantityDisplay}</span>
      </div>
    `;
  }).join('');
}

function renderRecipeInstructions(steps) {
  const container = document.getElementById('drawer-instructions-list');
  
  if (!steps || steps.length === 0) {
    container.innerHTML = `<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No instructions</p>`;
    return;
  }

  container.innerHTML = steps.map((step, idx) => `
    <div class="step-card" data-step="${idx}">
      <div class="step-num">${idx + 1}</div>
      <div class="step-text">${step}</div>
    </div>
  `).join('');

  // Toggles complete visual markers on instructions list
  container.querySelectorAll('.step-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('completed');
    });
  });
}

function addRecipeIngredientsToGroceryList(recipe, servings) {
  const originalServings = recipe.servings;
  const ratio = servings / originalServings;
  const lang = state.settings.language;
  const dict = uiTranslations[lang];

  recipe.ingredients.forEach(ing => {
    let finalAmount = ing.amount;
    if (typeof ing.amount === 'number') {
      finalAmount = Math.round(ing.amount * ratio * 10) / 10;
    }

    const nameStr = typeof ing.name === 'object' ? (ing.name[lang] || ing.name['en']) : ing.name;

    const existingIndex = state.groceryList.findIndex(item => 
      item.name.toLowerCase() === nameStr.toLowerCase()
    );

    if (existingIndex > -1) {
      if (state.groceryList[existingIndex].unit === ing.unit && typeof finalAmount === 'number' && typeof state.groceryList[existingIndex].amount === 'number') {
        state.groceryList[existingIndex].amount = Math.round((state.groceryList[existingIndex].amount + finalAmount) * 10) / 10;
      }
    } else {
      state.groceryList.push({
        id: 'item-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
        name: nameStr,
        amount: finalAmount,
        unit: ing.unit,
        category: ing.category || 'Kruidenier',
        checked: false
      });
    }
  });

  saveGroceryList();
  showToast(dict.toastAddedSingle || 'Ingredients added to list!', 'success');
  closeRecipeDrawer();
}

// --- Favorites Toggle ---
function toggleRecipeFavorite() {
  if (!state.selectedRecipe) return;
  const recipeId = state.selectedRecipe.id;
  const idx = state.favorites.indexOf(recipeId);
  const favBtn = document.getElementById('recipe-fav-btn');
  const lang = state.settings.language;

  if (idx > -1) {
    state.favorites.splice(idx, 1);
    favBtn.classList.remove('favorited');
    showToast(lang === 'nl' ? 'Verwijderd uit favorieten' : lang === 'fr' ? 'Retiré des favoris' : 'Removed from favorites', 'info');
  } else {
    state.favorites.push(recipeId);
    favBtn.classList.add('favorited');
    showToast(lang === 'nl' ? 'Toegevoegd aan favorieten!' : lang === 'fr' ? 'Ajouté aux favoris !' : 'Added to favorites!', 'success');
  }

  localStorage.setItem('belgian_favorites', JSON.stringify(state.favorites));
  renderRecipesList();
  renderHomeTab();
}

// --- Grocery List Checklist ---
function renderGroceryList() {
  const container = document.getElementById('grocery-list-container');
  if (!container) return;

  const lang = state.settings.language;
  const dict = uiTranslations[lang];

  if (state.groceryList.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--text-secondary); padding: 60px 20px;">
        <span style="font-size: 40px; display: block; margin-bottom: 12px;">📋</span>
        <h4 style="font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;" data-translate="emptyListHeader">${dict.emptyListHeader}</h4>
        <p style="font-size: 12px; max-width: 250px; margin: 0 auto;" data-translate="emptyListDesc">${dict.emptyListDesc}</p>
      </div>
    `;
    updateProgressHeader();
    return;
  }

  // Group items by category
  const groups = {};
  state.groceryList.forEach(item => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
  });

  // Sort groups by generic food category order
  const sortedCategories = Object.keys(groups).sort((a, b) => {
    let idxA = foodCategoryOrder.indexOf(a);
    let idxB = foodCategoryOrder.indexOf(b);
    if (idxA === -1) idxA = 999;
    if (idxB === -1) idxB = 999;
    return idxA - idxB;
  });

  let html = '';
  sortedCategories.forEach(cat => {
    const items = groups[cat];
    
    // Find translated header name
    let translatedCatName = cat;
    if (cat === "Groenten & Fruit") translatedCatName = dict.aisleProduce;
    else if (cat === "Slagerij & Gevogelte") translatedCatName = dict.aisleMeat;
    else if (cat === "Zuivel & Eieren") translatedCatName = dict.aisleDairy;
    else if (cat === "Bakkerij") translatedCatName = dict.aisleBakery;
    else if (cat === "Bieren & Dranken") translatedCatName = dict.aisleDrinks;
    else if (cat === "Kruidenier") translatedCatName = dict.aislePantry;
    else if (cat === "Visafdeling") translatedCatName = dict.aisleSeafood;

    html += `
      <div class="grocery-category-block">
        <h4 class="category-header" data-category="${cat}">
          <span class="category-dot"></span>
          <span>${translatedCatName}</span>
        </h4>
        <div class="grocery-list-items">
          ${items.map(item => {
            const qtyDisplay = typeof item.amount === 'number' ? `${item.amount} ${item.unit}` : item.unit;
            return `
              <div class="grocery-item" data-id="${item.id}">
                <div class="checkbox-wrapper ${item.checked ? 'checked' : ''}">
                  <input type="checkbox" ${item.checked ? 'checked' : ''} data-id="${item.id}">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div class="item-details ${item.checked ? 'checked' : ''}">
                  <span class="item-name">${item.name}</span>
                  ${item.amount ? `<span class="item-qty">${qtyDisplay}</span>` : ''}
                </div>
                <button class="item-delete-btn" data-id="${item.id}">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Event handlers
  container.querySelectorAll('.checkbox-wrapper input').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      toggleGroceryItemCheck(e.target.dataset.id);
    });
  });

  container.querySelectorAll('.item-details').forEach(label => {
    label.addEventListener('click', (e) => {
      const parent = e.currentTarget.closest('.grocery-item');
      const input = parent.querySelector('input');
      input.checked = !input.checked;
      toggleGroceryItemCheck(input.dataset.id);
    });
  });

  container.querySelectorAll('.item-delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      deleteGroceryItem(e.currentTarget.dataset.id);
    });
  });

  updateProgressHeader();
}

function toggleGroceryItemCheck(id) {
  const itemIndex = state.groceryList.findIndex(i => i.id === id);
  if (itemIndex > -1) {
    state.groceryList[itemIndex].checked = !state.groceryList[itemIndex].checked;
    saveGroceryList();
    
    const itemEl = document.querySelector(`.grocery-item[data-id="${id}"]`);
    if (itemEl) {
      const checkboxWrapper = itemEl.querySelector('.checkbox-wrapper');
      const itemDetails = itemEl.querySelector('.item-details');
      checkboxWrapper.classList.toggle('checked', state.groceryList[itemIndex].checked);
      itemDetails.classList.toggle('checked', state.groceryList[itemIndex].checked);
    }
    updateProgressHeader();
  }
}

function deleteGroceryItem(id) {
  state.groceryList = state.groceryList.filter(i => i.id !== id);
  saveGroceryList();
  renderGroceryList();
}

function handleAddCustomGroceryItem(e) {
  e.preventDefault();
  const input = document.getElementById('new-grocery-item-input');
  const catSelect = document.getElementById('new-grocery-item-cat');
  
  if (!input.value.trim()) return;

  const text = input.value.trim();
  let amount = null;
  let unit = '';
  let name = text;

  const match = text.match(/^(\d+(?:\.\d+)?)\s*(g|kg|ml|l|cl|st|slices|bottles|cups|tbsp|tsp|el|kl|can|blik)?\s+(.+)$/i);
  if (match) {
    amount = parseFloat(match[1]);
    unit = match[2] || '';
    name = match[3];
  }

  const newItem = {
    id: 'item-' + Date.now(),
    name: name,
    amount: amount,
    unit: unit,
    category: catSelect.value,
    checked: false
  };

  state.groceryList.push(newItem);
  saveGroceryList();
  renderGroceryList();

  input.value = '';
  showToast(`Added: ${newItem.name}`, 'success');
}

function toggleShoppingMode(isStoreMode) {
  const panel = document.getElementById('grocery-panel-wrapper');
  const addForm = document.getElementById('add-grocery-item-form');
  
  if (isStoreMode) {
    panel.classList.add('shopping-mode');
    addForm.style.display = 'none';
    document.getElementById('mode-store-btn').classList.add('active');
    document.getElementById('mode-list-btn').classList.remove('active');
  } else {
    panel.classList.remove('shopping-mode');
    addForm.style.display = 'flex';
    document.getElementById('mode-list-btn').classList.add('active');
    document.getElementById('mode-store-btn').classList.remove('active');
  }
}

function clearCompletedGroceryItems() {
  const completedCount = state.groceryList.filter(i => i.checked).length;
  if (completedCount === 0) return;
  
  state.groceryList = state.groceryList.filter(i => !i.checked);
  saveGroceryList();
  renderGroceryList();
  
  const lang = state.settings.language;
  showToast(lang === 'nl' ? `Afgevinkte items gewist!` : lang === 'fr' ? `Articles cochés effacés !` : `Cleared checked items!`, 'success');
}

function updateProgressHeader() {
  const total = state.groceryList.length;
  const checked = state.groceryList.filter(i => i.checked).length;
  const textEl = document.getElementById('grocery-progress-text');
  const barEl = document.getElementById('grocery-progress-fill');
  const progressBox = document.getElementById('grocery-progress-box');
  const lang = state.settings.language;
  const dict = uiTranslations[lang];

  if (total === 0) {
    if (progressBox) progressBox.style.display = 'none';
    return;
  }

  if (progressBox) progressBox.style.display = 'block';

  const percentage = Math.round((checked / total) * 100);
  if (textEl) {
    textEl.textContent = `${checked} / ${total} ${dict.allChecked || 'items checked'} (${percentage}%)`;
  }
  if (barEl) barEl.style.width = `${percentage}%`;
}

function saveGroceryList() {
  localStorage.setItem('belgian_grocery_list', JSON.stringify(state.groceryList));
}


// --- Add Custom Recipe Form Handler ---
function openRecipeModal() {
  state.customRecipeIngredients = [];
  renderFormIngredientsPreview();
  document.getElementById('custom-recipe-modal').classList.add('active');
}

function closeRecipeModal() {
  document.getElementById('custom-recipe-modal').classList.remove('active');
  document.getElementById('custom-recipe-form').reset();
}

function addCustomIngredientToBuffer() {
  const nameInput = document.getElementById('form-ing-name');
  const amtInput = document.getElementById('form-ing-amount');
  const unitInput = document.getElementById('form-ing-unit');
  const catSelect = document.getElementById('form-ing-cat');

  if (!nameInput.value.trim()) return;

  const ingredient = {
    name: nameInput.value.trim(),
    amount: amtInput.value ? parseFloat(amtInput.value) : 1,
    unit: unitInput.value.trim(),
    category: catSelect.value
  };

  state.customRecipeIngredients.push(ingredient);
  renderFormIngredientsPreview();

  nameInput.value = '';
  amtInput.value = '';
  unitInput.value = 'g';
  nameInput.focus();
}

function renderFormIngredientsPreview() {
  const container = document.getElementById('form-ingredients-preview');
  if (state.customRecipeIngredients.length === 0) {
    container.innerHTML = '<span style="font-size: 11px; color: var(--text-muted);">No ingredients added.</span>';
    return;
  }

  container.innerHTML = state.customRecipeIngredients.map((ing, index) => `
    <span class="preview-ing-tag">
      <span>${ing.name}</span>
      <span class="qty">${ing.amount ? ing.amount : ''} ${ing.unit}</span>
      <button type="button" data-index="${index}">&times;</button>
    </span>
  `).join('');

  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.dataset.index);
      state.customRecipeIngredients.splice(idx, 1);
      renderFormIngredientsPreview();
    });
  });
}

function handleCustomRecipeSubmit(e) {
  e.preventDefault();
  const lang = state.settings.language;

  const title = document.getElementById('recipe-title-input').value.trim();
  const subtitle = document.getElementById('recipe-subtitle-input').value.trim() || 'Custom Recipe';
  const description = document.getElementById('recipe-desc-input').value.trim();
  const category = document.getElementById('recipe-cat-select').value;
  const prepTime = document.getElementById('recipe-prep-input').value || '15 mins';
  const cookTime = document.getElementById('recipe-cook-input').value || '0 mins';
  const difficulty = document.getElementById('recipe-diff-select').value;
  const servings = parseInt(document.getElementById('recipe-servings-input').value) || 2;
  const instructionsText = document.getElementById('recipe-steps-input').value;

  if (state.customRecipeIngredients.length === 0) {
    alert("Please add ingredients.");
    return;
  }

  const instructions = instructionsText
    .split('\n')
    .map(step => step.trim())
    .filter(step => step.length > 0);

  if (instructions.length === 0) {
    alert("Please add instructions.");
    return;
  }

  // Determine standard dietary flags for custom recipe (Default true for simplicity, editable by code)
  const newRecipe = {
    id: 'custom-' + Date.now(),
    prepTime: prepTime,
    cookTime: cookTime,
    difficulty: { en: difficulty, nl: difficulty, fr: difficulty },
    servings: servings,
    category: { en: category, nl: category, fr: category },
    image: 'images/witloof_gratin.jpg', // fallback gratin
    isGlutenFree: true,
    isNutFree: true,
    isDairyFree: true,
    isEggFree: true,
    isVegetarian: true,
    isVegan: true,
    isCandidaFriendly: true,
    isKeto: false,
    translations: {
      en: { title, subtitle, description, instructions },
      nl: { title, subtitle, description, instructions },
      fr: { title, subtitle, description, instructions }
    },
    ingredients: state.customRecipeIngredients.map(ing => ({
      name: { en: ing.name, nl: ing.name, fr: ing.name },
      amount: ing.amount,
      unit: ing.unit,
      category: ing.category
    }))
  };

  state.recipes.push(newRecipe);
  localStorage.setItem('belgian_recipes', JSON.stringify(state.recipes));

  renderRecipesList();
  renderHomeTab();
  closeRecipeModal();
  showToast(`Created: ${newRecipe.translations[lang].title}`, 'success');
}

// --- Developer Tool: Bulk Recipe Simulator (Scale Testing) ---
function generateBulkRecipes() {
  const rawRecipes = [];
  const diffs = [
    { en: "Easy", nl: "Gemakkelijk", fr: "Facile" },
    { en: "Medium", nl: "Gemiddeld", fr: "Moyen" },
    { en: "Hard", nl: "Moeilijk", fr: "Difficile" }
  ];
  const categories = [
    { en: "Belgian Classics", nl: "Belgische Klassiekers", fr: "Classiques Belges" },
    { en: "Comfort Food", nl: "Dagelijkse Kost", fr: "Plats Réconfortants" },
    { en: "Seafood", nl: "Vis & Zeevruchten", fr: "Fruits de Mer" }
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

  for (let i = 1; i <= 2000; i++) {
    const nameTemplate = names[Math.floor(Math.random() * names.length)];
    const foodTemplate = foods[Math.floor(Math.random() * foods.length)];
    const prep = (10 + Math.floor(Math.random() * 40)) + " mins";
    const cook = (15 + Math.floor(Math.random() * 90)) + " mins";
    const diff = diffs[Math.floor(Math.random() * diffs.length)];
    const cat = categories[Math.floor(Math.random() * categories.length)];
    const servings = 2 + Math.floor(Math.random() * 6);
    
    // Random allergen/diet configurations
    const isGF = Math.random() > 0.5;
    const isNF = Math.random() > 0.3;
    const isDF = Math.random() > 0.5;
    const isEF = Math.random() > 0.3;
    const isVeg = Math.random() > 0.4;
    const isVegan = isVeg && Math.random() > 0.5;
    const isCandida = isGF && isDF && Math.random() > 0.5;
    const isKeto = Math.random() > 0.6;

    rawRecipes.push({
      id: `bulk-${i}`,
      prepTime: prep,
      cookTime: cook,
      difficulty: diff,
      servings: servings,
      category: cat,
      image: "images/witloof_gratin.jpg",
      isGlutenFree: isGF,
      isNutFree: isNF,
      isDairyFree: isDF,
      isEggFree: isEF,
      isVegetarian: isVeg,
      isVegan: isVegan,
      isCandidaFriendly: isCandida,
      isKeto: isKeto,
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
          description: "Une recette belge simulée pour tester les performances de recherche.",
          instructions: ["Nettoyer les ingrédients.", "Faire chauffer le tout.", "Servir chaud."]
        }
      },
      ingredients: [
        { name: { en: "Simulated Ingredient", nl: "Gesimuleerd ingrediënt", fr: "Ingrédient simulé" }, amount: 200, unit: "g", category: "Kruidenier" }
      ]
    });
  }

  // Merge bulk recipes in memory (omit saving to localStorage to prevent quota exhaustion)
  state.recipes = [...state.recipes.filter(r => !r.id.startsWith('bulk-')), ...rawRecipes];
  
  const lang = state.settings.language;
  const msg = lang === 'nl' 
    ? "⚡ Succesvol 2.000 testrecepten ingeladen!" 
    : lang === 'fr' 
    ? "⚡ 2 000 recettes de test chargées !" 
    : "⚡ Successfully loaded 2,000 test recipes!";
  
  showToast(msg, "success");
  renderRecipesList();
  renderHomeTab();
}

// --- Notification Banner ---
let toastTimer = null;
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  clearTimeout(toastTimer);
  toast.querySelector('.toast-text').innerHTML = message;
  toast.className = 'toast-msg';
  
  if (type === 'info') {
    toast.classList.add('info');
    toast.querySelector('.toast-icon').innerHTML = 'ℹ️';
  } else {
    toast.querySelector('.toast-icon').innerHTML = '✅';
  }

  toast.classList.add('show');
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Fire up
window.addEventListener('DOMContentLoaded', initApp);
