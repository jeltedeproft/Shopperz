// --- Translation Dictionaries ---
// The interface talks the way the recipes do: like someone who has cooked
// this before and is glad you asked. Second person, no system vocabulary —
// nothing here says "configure", "generate" or "invalid". The French uses
// "tu" throughout for the same reason.
const uiTranslations = {
  en: {
    appTitle: "Mijn Kookpot",
    appSubtitle: "Belgian home cooking, and the shopping to go with it",
    discover: "Today",
    recipes: "Recipes",
    checklist: "Shopping",
    settings: "Settings",
    searchPlaceholder: "What do you feel like cooking?",
    suggestedTitle: "Tonight, may I suggest…",
    exploreTitle: "Have a look through",
    seeAll: "See all",
    recipeBookTitle: "The Recipe Book",
    recipeBookDesc: "Everything in here is worth cooking twice",
    recipeCategoryAll: "Everything",
    favoritesFilter: "Favourites",
    noFavorites: "No favourites yet — tap the little heart on a dish you love",
    recipeCategoryBreakfast: "Breakfast",
    recipeCategoryMain: "Main dish",
    recipeCategorySoup: "Soup",
    recipeCategorySnack: "Something small",
    recipeCategoryDessert: "Dessert",
    createRecipeHeader: "Write down a recipe",
    editRecipeHeader: "Tidy up this recipe",
    checklistTitle: "The shopping list",
    checklistDesc: "In the order you walk the shop, so you never double back",
    clearCheckedBtn: "Clear the ticked",
    customItemPlaceholder: "Something else? Witloof, say…",
    emptyListHeader: "Nothing on the list yet",
    emptyListDesc: "Pick a few dishes, or just jot something down yourself",
    prefTitle: "Settings",
    prefDesc: "Set things up the way you like them",
    langGroupTitle: "Language",
    langSelectLabel: "Talk to me in",
    langSelectDesc: "The recipes change over too, not just the buttons",
    dangerZoneTitle: "Careful now",
    resetDbLabel: "Throw away my recipes",
    resetDbDesc: "Only the ones you wrote yourself — the Belgian classics stay",
    resetBtnText: "Throw away",
    resetListLabel: "Empty the shopping list",
    resetListDesc: "Wipes everything on it right now",
    resetListBtnText: "Empty it",
    prepTimeLabel: "Getting ready",
    cookTimeLabel: "On the stove",
    diffLabel: "How tricky",
    servingsLabel: "How many at the table?",
    servingsDesc: "Everything below adjusts itself",
    addIngredientsBtn: "Put this on my shopping list",
    instructionsTitle: "How it's done",
    ingredientsTitle: "What you'll need",
    toastDeselected: "Taken off the plan",
    toastSelected: "Added to the plan",
    toastAddedSingle: "On your list — happy shopping!",
    toastAddedBatch: "There you go, one list for the lot",
    batchSelectedText: "{count} dishes planned",
    batchGenerateBtn: "Make my list",
    selectForList: "Plan this one for the shopping list",
    batchServingsTitle: "How many are you feeding?",
    difficultyEasy: "Easy",
    difficultyMedium: "A bit of work",
    difficultyHard: "Takes patience",
    aisleProduce: "🥕 Vegetables & fruit",
    aisleMeat: "🥩 At the butcher",
    aisleDairy: "🧀 Cheese, milk & eggs",
    aisleBakery: "🍞 At the bakery",
    aisleDrinks: "🍺 Beers & drinks",
    aislePantry: "🥫 The cupboard shelf",
    aisleSeafood: "🐟 At the fishmonger",
    aisleFrozen: "🧊 The freezer",
    aisleSpices: "🧂 Herbs & spices",
    dietFilterLabel: "Eating habits",
    intoleranceFilterLabel: "Things to leave out",
    dietVegetarian: "Vegetarian",
    dietVegan: "Vegan",
    dietCandida: "Candida",
    dietKeto: "Keto",
    intolGluten: "No gluten",
    intolNuts: "No nuts",
    intolDairy: "No dairy",
    intolEggs: "No eggs",
    allergenDisclaimer: "I work this out from the ingredient list, so do read the recipe over yourself if an allergy is a serious one. Better to have looked twice.",
    scaleTestTitle: "A little stress test",
    scaleTestLabel: "Load 2,000 pretend recipes",
    scaleTestDesc: "Only useful for checking the search stays quick",
    generateBtnText: "Load them",
    dataGroupTitle: "Your own things",
    updateAvailable: "There's a fresher version waiting",
    updateReloadBtn: "Fetch it",
    backupLabel: "Keep a copy somewhere safe",
    backupDesc: "Your recipes, list, favourites and settings, all in one file",
    backupBtn: "Save a copy",
    restoreLabel: "Bring a copy back",
    restoreDesc: "Careful — this replaces everything in the app right now",
    restoreBtn: "Bring it back",
    toastBackupSaved: "Saved as {name} — keep it somewhere safe",
    toastBackupFailed: "That didn't work, sorry. Shall we try again?",
    confirmRestore: "Bring this copy back? There are {recipes} of your own recipes and {items} things on the list in it, and it replaces everything in the app right now.",
    toastRestored: "All back where it was",
    toastRestoreFailed: "That's not a Mijn Kookpot copy, I'm afraid",
    // Shopping preferences
    shoppingGroupTitle: "At the shop",
    skipStaplesLabel: "Leave out the cupboard basics",
    skipStaplesDesc: "You've salt, pepper and oil at home — no sense writing them down",
    // Appearance
    appearanceGroupTitle: "How it looks",
    themeLabel: "Light or dark",
    themeDesc: "Dark is kinder on the eyes when you're baking late",
    themeSystem: "My phone decides",
    themeLight: "Always light",
    themeDark: "Always dark",
    // Grocery list
    allItems: "Everything",
    itemsChecked: "in the basket",
    exportBtn: "Send the list",
    exportCopied: "Copied — paste it wherever you like",
    staplesSkipped: "{count} cupboard basics left off",
    staplesHint: "Run out of one? Tap it and it goes on anyway",
    fromRecipes: "for",
    qtyPlaceholder: "How much? (500g, 2…)",
    editQuantityHint: "Tap to change the amount",
    addQuantity: "+ amount",
    // Recipe editing
    editRecipeBtn: "Tidy up",
    deleteRecipeBtn: "Throw away",
    confirmDeleteRecipe: "Throw this recipe away for good?",
    toastRecipeCreated: "{name} — written down",
    toastRecipeUpdated: "{name} — tidied up",
    toastRecipeDeleted: "That one's gone",
    customBadge: "Yours",
    dietFlagsLabel: "Good to know",
    saveRecipeBtn: "Write it down",
    cancelBtn: "Never mind",
    // Empty / feedback states
    noResults: "Nothing here, I'm afraid",
    noResultsFor: 'Nothing matches "{query}" — try a shorter word?',
    noInstructions: "No steps written down yet",
    noIngredientsAdded: "Nothing here yet.",
    needIngredients: "Pop in at least one ingredient first.",
    needInstructions: "Tell me at least one step first.",
    toastItemAdded: "{name} — on the list",
    showingCount: "Showing {shown} of {total}",
    confirmResetRecipes: "Throw away every recipe you wrote yourself?",
    confirmWipeList: "Empty the whole shopping list?",
    toastRecipesReset: "Your own recipes are gone",
    toastListWiped: "List emptied",
    toastClearedChecked: "Cleared what was already in the basket",
    toastFavAdded: "One of your favourites now",
    toastFavRemoved: "Off the favourites",
    toastBulkLoaded: "⚡ 2,000 pretend recipes loaded",
    cookModeStep: "Step {current} of {total}",
    cookModeNext: "Next →",
    cookModeFinish: "That's it!",
    cookModeBack: "← Back",
    cookModeDone: "And that's dinner. Smakelijk!"
  },
  nl: {
    appTitle: "Mijn Kookpot",
    appSubtitle: "Belgisch thuiskoken, met de boodschappen erbij",
    discover: "Vandaag",
    recipes: "Recepten",
    checklist: "Boodschappen",
    settings: "Instellingen",
    searchPlaceholder: "Waar heb je zin in?",
    suggestedTitle: "Vanavond, mag ik voorstellen…",
    exploreTitle: "Blader er eens door",
    seeAll: "Alles bekijken",
    recipeBookTitle: "Het kookboek",
    recipeBookDesc: "Alles hierin is een tweede keer waard",
    recipeCategoryAll: "Alles",
    favoritesFilter: "Favorieten",
    noFavorites: "Nog geen favorieten — tik op het hartje bij een gerecht dat je graag lust",
    recipeCategoryBreakfast: "Ontbijt",
    recipeCategoryMain: "Hoofdgerecht",
    recipeCategorySoup: "Soep",
    recipeCategorySnack: "Iets kleins",
    recipeCategoryDessert: "Dessert",
    createRecipeHeader: "Een recept opschrijven",
    editRecipeHeader: "Dit recept bijwerken",
    checklistTitle: "Het boodschappenlijstje",
    checklistDesc: "In de volgorde dat je door de winkel loopt, zo moet je nooit terug",
    clearCheckedBtn: "Wis het afgevinkte",
    customItemPlaceholder: "Nog iets? Witloof bijvoorbeeld…",
    emptyListHeader: "Nog niets op het lijstje",
    emptyListDesc: "Kies een paar gerechten, of schrijf gewoon zelf iets op",
    prefTitle: "Instellingen",
    prefDesc: "Zet alles zoals jij het graag hebt",
    langGroupTitle: "Taal",
    langSelectLabel: "Spreek me aan in",
    langSelectDesc: "De recepten gaan mee over, niet alleen de knopjes",
    dangerZoneTitle: "Even opletten",
    resetDbLabel: "Mijn eigen recepten weggooien",
    resetDbDesc: "Alleen die je zelf schreef — de Belgische klassiekers blijven",
    resetBtnText: "Weggooien",
    resetListLabel: "Het lijstje leegmaken",
    resetListDesc: "Veegt alles weg wat er nu op staat",
    resetListBtnText: "Leegmaken",
    prepTimeLabel: "Voorbereiden",
    cookTimeLabel: "Op het vuur",
    diffLabel: "Hoe lastig",
    servingsLabel: "Met hoeveel aan tafel?",
    servingsDesc: "Alles hieronder past zich vanzelf aan",
    addIngredientsBtn: "Zet dit op mijn lijstje",
    instructionsTitle: "Zo doe je het",
    ingredientsTitle: "Wat je nodig hebt",
    toastDeselected: "Van het plan gehaald",
    toastSelected: "Bij het plan gezet",
    toastAddedSingle: "Staat op je lijstje — veel plezier in de winkel!",
    toastAddedBatch: "Alsjeblieft, één lijstje voor alles samen",
    batchSelectedText: "{count} gerechten gepland",
    batchGenerateBtn: "Maak mijn lijstje",
    selectForList: "Dit gerecht mee op het lijstje",
    batchServingsTitle: "Voor hoeveel man kook je?",
    difficultyEasy: "Makkelijk",
    difficultyMedium: "Iets van werk",
    difficultyHard: "Wat geduld",
    aisleProduce: "🥕 Groenten & fruit",
    aisleMeat: "🥩 Bij de slager",
    aisleDairy: "🧀 Kaas, melk & eieren",
    aisleBakery: "🍞 Bij de bakker",
    aisleDrinks: "🍺 Bieren & dranken",
    aislePantry: "🥫 De voorraadkast",
    aisleSeafood: "🐟 Bij de visboer",
    aisleFrozen: "🧊 De diepvries",
    aisleSpices: "🧂 Kruiden & specerijen",
    dietFilterLabel: "Eetgewoontes",
    intoleranceFilterLabel: "Wat je liever weglaat",
    dietVegetarian: "Vegetarisch",
    dietVegan: "Vegan",
    dietCandida: "Candida",
    dietKeto: "Keto",
    intolGluten: "Zonder gluten",
    intolNuts: "Zonder noten",
    intolDairy: "Zonder lactose",
    intolEggs: "Zonder ei",
    allergenDisclaimer: "Ik leid dit af uit de ingrediëntenlijst, dus lees het recept zelf nog eens na als een allergie ernstig is. Liever tweemaal gekeken.",
    scaleTestTitle: "Een kleine stresstest",
    scaleTestLabel: "Laad 2.000 nep-recepten",
    scaleTestDesc: "Alleen handig om te zien of het zoeken vlot blijft",
    generateBtnText: "Laden maar",
    dataGroupTitle: "Jouw eigen spullen",
    updateAvailable: "Er staat een verse versie klaar",
    updateReloadBtn: "Ophalen",
    backupLabel: "Bewaar een kopie op een veilige plek",
    backupDesc: "Je recepten, lijstje, favorieten en instellingen, in één bestand",
    backupBtn: "Kopie bewaren",
    restoreLabel: "Een kopie terugzetten",
    restoreDesc: "Opgelet — dit vervangt alles wat er nu in de app staat",
    restoreBtn: "Terugzetten",
    toastBackupSaved: "Bewaard als {name} — hou het goed bij",
    toastBackupFailed: "Dat lukte niet, sorry. Nog eens proberen?",
    confirmRestore: "Deze kopie terugzetten? Er zitten {recipes} eigen recepten en {items} boodschappen in, en ze vervangt alles wat er nu in de app staat.",
    toastRestored: "Alles staat weer waar het hoorde",
    toastRestoreFailed: "Dat is geen Mijn Kookpot-kopie, vrees ik",
    // Winkelvoorkeuren
    shoppingGroupTitle: "In de winkel",
    skipStaplesLabel: "Laat de kastbasics weg",
    skipStaplesDesc: "Zout, peper en olie heb je thuis — die hoef je niet op te schrijven",
    // Uitzicht
    appearanceGroupTitle: "Hoe het eruitziet",
    themeLabel: "Licht of donker",
    themeDesc: "Donker is zachter voor de ogen als je 's avonds laat nog staat te bakken",
    themeSystem: "Mijn gsm kiest",
    themeLight: "Altijd licht",
    themeDark: "Altijd donker",
    // Boodschappenlijst
    allItems: "Alles",
    itemsChecked: "in de kar",
    exportBtn: "Lijstje doorsturen",
    exportCopied: "Gekopieerd — plak het waar je wil",
    staplesSkipped: "{count} kastbasics weggelaten",
    staplesHint: "Toch iets op? Tik erop en het gaat er alsnog bij",
    fromRecipes: "voor",
    qtyPlaceholder: "Hoeveel? (500g, 2…)",
    editQuantityHint: "Tik om de hoeveelheid aan te passen",
    addQuantity: "+ hoeveelheid",
    // Recepten bewerken
    editRecipeBtn: "Bijwerken",
    deleteRecipeBtn: "Weggooien",
    confirmDeleteRecipe: "Dit recept voorgoed weggooien?",
    toastRecipeCreated: "{name} — opgeschreven",
    toastRecipeUpdated: "{name} — bijgewerkt",
    toastRecipeDeleted: "Die is weg",
    customBadge: "Van jou",
    dietFlagsLabel: "Goed om te weten",
    saveRecipeBtn: "Schrijf het op",
    cancelBtn: "Laat maar",
    // Lege toestanden
    noResults: "Niets gevonden, vrees ik",
    noResultsFor: 'Niets voor "{query}" — probeer eens een korter woord?',
    noInstructions: "Nog geen stappen opgeschreven",
    noIngredientsAdded: "Hier staat nog niets.",
    needIngredients: "Zet er eerst minstens één ingrediënt bij.",
    needInstructions: "Vertel me eerst minstens één stap.",
    toastItemAdded: "{name} — staat op het lijstje",
    showingCount: "{shown} van {total} getoond",
    confirmResetRecipes: "Alle recepten die je zelf schreef weggooien?",
    confirmWipeList: "Het hele lijstje leegmaken?",
    toastRecipesReset: "Je eigen recepten zijn weg",
    toastListWiped: "Lijstje leeg",
    toastClearedChecked: "Gewist wat al in de kar zat",
    toastFavAdded: "Vanaf nu een favoriet",
    toastFavRemoved: "Van de favorieten af",
    toastBulkLoaded: "⚡ 2.000 nep-recepten ingeladen",
    cookModeStep: "Stap {current} van {total}",
    cookModeNext: "Verder →",
    cookModeFinish: "Klaar!",
    cookModeBack: "← Terug",
    cookModeDone: "En dat is het eten. Smakelijk!"
  },
  fr: {
    appTitle: "Mijn Kookpot",
    appSubtitle: "La cuisine belge de la maison, et les courses qui vont avec",
    discover: "Aujourd'hui",
    recipes: "Recettes",
    checklist: "Courses",
    settings: "Réglages",
    searchPlaceholder: "Tu as envie de quoi ?",
    suggestedTitle: "Ce soir, je te propose…",
    exploreTitle: "Feuillette un peu",
    seeAll: "Tout voir",
    recipeBookTitle: "Le livre de recettes",
    recipeBookDesc: "Tout ici mérite d'être refait une deuxième fois",
    recipeCategoryAll: "Tout",
    favoritesFilter: "Favoris",
    noFavorites: "Pas encore de favoris — touche le petit cœur d'un plat que tu aimes",
    recipeCategoryBreakfast: "Petit-déjeuner",
    recipeCategoryMain: "Plat principal",
    recipeCategorySoup: "Soupe",
    recipeCategorySnack: "Quelque chose de petit",
    recipeCategoryDessert: "Dessert",
    createRecipeHeader: "Noter une recette",
    editRecipeHeader: "Retoucher cette recette",
    checklistTitle: "La liste de courses",
    checklistDesc: "Dans l'ordre où tu traverses le magasin, tu ne reviens jamais sur tes pas",
    clearCheckedBtn: "Effacer les cochés",
    customItemPlaceholder: "Autre chose ? Des chicons, tiens…",
    emptyListHeader: "Rien sur la liste pour l'instant",
    emptyListDesc: "Choisis quelques plats, ou note simplement quelque chose toi-même",
    prefTitle: "Réglages",
    prefDesc: "Arrange tout comme tu l'aimes",
    langGroupTitle: "Langue",
    langSelectLabel: "Parle-moi en",
    langSelectDesc: "Les recettes changent aussi, pas seulement les boutons",
    dangerZoneTitle: "Attention",
    resetDbLabel: "Jeter mes recettes",
    resetDbDesc: "Seulement celles que tu as écrites — les classiques belges restent",
    resetBtnText: "Jeter",
    resetListLabel: "Vider la liste de courses",
    resetListDesc: "Efface tout ce qui s'y trouve maintenant",
    resetListBtnText: "Vider",
    prepTimeLabel: "Préparation",
    cookTimeLabel: "Sur le feu",
    diffLabel: "Difficulté",
    servingsLabel: "Vous êtes combien à table ?",
    servingsDesc: "Tout se recalcule en dessous",
    addIngredientsBtn: "Mets ça sur ma liste",
    instructionsTitle: "Comment on fait",
    ingredientsTitle: "Ce qu'il te faut",
    toastDeselected: "Retiré du menu",
    toastSelected: "Ajouté au menu",
    toastAddedSingle: "C'est sur ta liste — bonnes courses !",
    toastAddedBatch: "Voilà, une seule liste pour le tout",
    batchSelectedText: "{count} plats au menu",
    batchGenerateBtn: "Fais ma liste",
    selectForList: "Mettre ce plat au menu",
    batchServingsTitle: "Tu nourris combien de personnes ?",
    difficultyEasy: "Facile",
    difficultyMedium: "Un peu de travail",
    difficultyHard: "De la patience",
    aisleProduce: "🥕 Fruits & légumes",
    aisleMeat: "🥩 Chez le boucher",
    aisleDairy: "🧀 Crèmerie & œufs",
    aisleBakery: "🍞 Chez le boulanger",
    aisleDrinks: "🍺 Bières & boissons",
    aislePantry: "🥫 Le placard",
    aisleSeafood: "🐟 Chez le poissonnier",
    aisleFrozen: "🧊 Le surgelé",
    aisleSpices: "🧂 Herbes & épices",
    dietFilterLabel: "Habitudes",
    intoleranceFilterLabel: "Ce que tu laisses de côté",
    dietVegetarian: "Végétarien",
    dietVegan: "Végétalien",
    dietCandida: "Candida",
    dietKeto: "Cétogène",
    intolGluten: "Sans gluten",
    intolNuts: "Sans noix",
    intolDairy: "Sans lactose",
    intolEggs: "Sans œufs",
    allergenDisclaimer: "Je le déduis de la liste d'ingrédients, alors relis la recette toi-même si une allergie est sérieuse. Mieux vaut avoir regardé deux fois.",
    scaleTestTitle: "Un petit test de charge",
    scaleTestLabel: "Charger 2 000 fausses recettes",
    scaleTestDesc: "Utile seulement pour voir si la recherche reste rapide",
    generateBtnText: "Charger",
    dataGroupTitle: "Tes affaires à toi",
    updateAvailable: "Une version plus fraîche t'attend",
    updateReloadBtn: "La chercher",
    backupLabel: "Garde une copie au chaud",
    backupDesc: "Tes recettes, ta liste, tes favoris et tes réglages, dans un seul fichier",
    backupBtn: "Garder une copie",
    restoreLabel: "Remettre une copie",
    restoreDesc: "Attention — ça remplace tout ce qu'il y a dans l'app en ce moment",
    restoreBtn: "Remettre",
    toastBackupSaved: "Gardé sous {name} — range-le bien",
    toastBackupFailed: "Ça n'a pas marché, désolée. On réessaie ?",
    confirmRestore: "Remettre cette copie ? Elle contient {recipes} de tes propres recettes et {items} articles, et elle remplace tout ce qu'il y a dans l'app en ce moment.",
    toastRestored: "Tout est revenu à sa place",
    toastRestoreFailed: "Ce n'est pas une copie Mijn Kookpot, j'en ai peur",
    // Préférences de courses
    shoppingGroupTitle: "Au magasin",
    skipStaplesLabel: "Laisse de côté les basiques",
    skipStaplesDesc: "Le sel, le poivre et l'huile, tu les as déjà — pas la peine de les noter",
    // Allure
    appearanceGroupTitle: "L'allure",
    themeLabel: "Clair ou sombre",
    themeDesc: "Le sombre repose les yeux quand tu pâtisses tard le soir",
    themeSystem: "Mon téléphone choisit",
    themeLight: "Toujours clair",
    themeDark: "Toujours sombre",
    // Liste de courses
    allItems: "Tout",
    itemsChecked: "dans le panier",
    exportBtn: "Envoyer la liste",
    exportCopied: "Copié — colle-le où tu veux",
    staplesSkipped: "{count} basiques laissés de côté",
    staplesHint: "Tu n'en as plus ? Touche et il y va quand même",
    fromRecipes: "pour",
    qtyPlaceholder: "Combien ? (500g, 2…)",
    editQuantityHint: "Touche pour changer la quantité",
    addQuantity: "+ quantité",
    // Modifier une recette
    editRecipeBtn: "Retoucher",
    deleteRecipeBtn: "Jeter",
    confirmDeleteRecipe: "Jeter cette recette pour de bon ?",
    toastRecipeCreated: "{name} — c'est noté",
    toastRecipeUpdated: "{name} — retouchée",
    toastRecipeDeleted: "Celle-là est partie",
    customBadge: "À toi",
    dietFlagsLabel: "Bon à savoir",
    saveRecipeBtn: "Noter",
    cancelBtn: "Laisse tomber",
    // États vides
    noResults: "Rien trouvé, j'en ai peur",
    noResultsFor: 'Rien pour "{query}" — essaie un mot plus court ?',
    noInstructions: "Aucune étape notée pour l'instant",
    noIngredientsAdded: "Rien ici pour l'instant.",
    needIngredients: "Mets-y d'abord au moins un ingrédient.",
    needInstructions: "Dis-moi d'abord au moins une étape.",
    toastItemAdded: "{name} — sur la liste",
    showingCount: "{shown} sur {total} affichés",
    confirmResetRecipes: "Jeter toutes les recettes que tu as écrites toi-même ?",
    confirmWipeList: "Vider toute la liste de courses ?",
    toastRecipesReset: "Tes recettes à toi sont parties",
    toastListWiped: "Liste vidée",
    toastClearedChecked: "Effacé ce qui était déjà dans le panier",
    toastFavAdded: "Un favori, désormais",
    toastFavRemoved: "Retiré des favoris",
    toastBulkLoaded: "⚡ 2 000 fausses recettes chargées",
    cookModeStep: "Étape {current} sur {total}",
    cookModeNext: "Ensuite →",
    cookModeFinish: "Voilà !",
    cookModeBack: "← Retour",
    cookModeDone: "Et voilà le dîner. Smakelijk !"
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
  selection: 'belgian_selected_recipes',
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
  selectedServings: {},
  batchPanelOpen: false,
  favorites: [],
  settings: {
    language: 'en',
    skipStaples: true,
    theme: 'system'
  },
  filters: {
    homeQuery: '',
    query: '',
    category: 'all',
    favoritesOnly: false,
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

/**
 * Not every recipe has a photograph we are allowed to reuse, and standing in a
 * picture of a different dish is worse than showing none. Those recipes get a
 * drawn placeholder instead: it is CSS rather than an image file, so it follows
 * the theme and costs the offline cache nothing however many recipes use it.
 */
function hasPhoto(recipe) {
  return Boolean(recipe && recipe.image);
}

function photoMarkup(recipe, alt, className, lazy) {
  if (hasPhoto(recipe)) {
    return `<img class="${className}" src="${escapeHtml(recipe.image)}" alt="${escapeHtml(alt)}"${lazy ? ' loading="lazy"' : ''}>`;
  }
  return `<div class="${className} photo-placeholder" role="img" aria-label="${escapeHtml(alt)}">` +
    '<span aria-hidden="true">🍲</span></div>';
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

/**
 * Lower-case and strip diacritics, so typing "gaufres de liege" finds
 * "Gaufres de Liège". 79 of the 115 recipes have an accent in the title, and
 * nobody reaches for é on a phone keyboard mid-search.
 */
function fold(text) {
  return String(text === null || text === undefined ? '' : text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')   // combining accents left behind by NFD
    .replace(/œ/g, 'oe')          // œufs -> oeufs
    .replace(/æ/g, 'ae')
    .replace(/ß/g, 'ss')
    .replace(/ø/g, 'o')
    .replace(/[‘’`]/g, "'"); // curly quotes in "crème d’avoine"
}

function debounce(fn, wait) {
  let timer = null;
  return function () {
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(null, args), wait);
  };
}

// --- Keyboard & focus helpers ---

/** Make a non-button element behave like one for keyboard users. */
function onActivate(el, handler) {
  el.addEventListener('click', handler);
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      handler(e);
    }
  });
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

let focusReturnTo = null;

/** Keep Tab inside an open dialog and remember where focus came from. */
function trapFocus(container) {
  focusReturnTo = document.activeElement;

  const focusable = Array.from(container.querySelectorAll(FOCUSABLE))
    .filter(el => el.offsetParent !== null || el === container);
  (focusable[0] || container).focus();

  container._trapHandler = e => {
    if (e.key !== 'Tab') return;
    const items = Array.from(container.querySelectorAll(FOCUSABLE)).filter(el => el.offsetParent !== null);
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };
  container.addEventListener('keydown', container._trapHandler);
}

function releaseFocus(container) {
  if (container && container._trapHandler) {
    container.removeEventListener('keydown', container._trapHandler);
    container._trapHandler = null;
  }
  if (focusReturnTo && typeof focusReturnTo.focus === 'function') {
    focusReturnTo.focus();
  }
  focusReturnTo = null;
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
  applyTheme();       // the inline script in index.html already guessed; confirm it
  watchSystemTheme();
  migrateLegacyStorage();

  state.builtInRecipes = Array.isArray(window.initialRecipes) ? window.initialRecipes : [];
  state.userRecipes = readJson(STORAGE.userRecipes, []);
  rebuildRecipeIndex();

  state.favorites = readJson(STORAGE.favorites, []);
  state.groceryList = readJson(STORAGE.groceryList, []);
  state.skippedStaples = readJson(STORAGE.skippedStaples, []);
  loadSelection();

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
  if (THEME_CHOICES.indexOf(state.settings.theme) === -1) state.settings.theme = 'system';
  saveSettings();
}

// --- Appearance ---

const THEME_CHOICES = ['system', 'light', 'dark'];

/** The colour the phone paints its status bar with — must track the theme. */
// Must match --bg in each palette in style.css, and the inline pre-paint
// script in index.html, which sets the same thing before this file loads.
const THEME_META = { light: '#FAF6EE', dark: '#16110C' };

function prefersDark() {
  return typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Resolve 'system' down to a concrete theme and stamp it on <html>.
 *
 * The stylesheet only knows [data-theme="light"] and [data-theme="dark"] —
 * resolving here rather than with a second @media copy of the palette means
 * the two token blocks can never drift apart.
 */
function applyTheme() {
  const choice = state.settings.theme;
  const resolved = choice === 'system' ? (prefersDark() ? 'dark' : 'light') : choice;

  document.documentElement.setAttribute('data-theme', resolved);

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_META[resolved]);

  document.querySelectorAll('[data-theme-choice]').forEach(btn => {
    const active = btn.dataset.themeChoice === choice;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-checked', active ? 'true' : 'false');
    // Roving tabindex: one stop for the whole group, arrows move within it.
    btn.tabIndex = active ? 0 : -1;
  });
}

function setTheme(choice) {
  if (THEME_CHOICES.indexOf(choice) === -1) return;
  state.settings.theme = choice;
  saveSettings();
  applyTheme();
}

/** On "My phone decides", follow the OS if it changes while the app is open. */
function watchSystemTheme() {
  if (typeof window.matchMedia !== 'function') return;
  const query = window.matchMedia('(prefers-color-scheme: dark)');
  const onChange = () => { if (state.settings.theme === 'system') applyTheme(); };
  if (typeof query.addEventListener === 'function') query.addEventListener('change', onChange);
  else if (typeof query.addListener === 'function') query.addListener(onChange); // older Safari
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

// Ticking six recipes and then locking your phone used to lose the lot.
function saveSelection() {
  localStorage.setItem(STORAGE.selection, JSON.stringify({
    ids: state.selectedRecipes,
    servings: state.selectedServings
  }));
}

function loadSelection() {
  const stored = readJson(STORAGE.selection, null);
  // v1 stored a bare array of ids; v2 adds the per-recipe servings.
  const ids = Array.isArray(stored) ? stored : (stored && Array.isArray(stored.ids) ? stored.ids : []);
  const servings = (stored && !Array.isArray(stored) && stored.servings) || {};

  state.selectedRecipes = ids.filter(id => state.recipes.some(r => r.id === id));
  state.selectedServings = {};
  state.selectedRecipes.forEach(id => {
    if (typeof servings[id] === 'number') state.selectedServings[id] = servings[id];
  });
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
    const current = item.dataset.tab === tabId;
    item.classList.toggle('active', current);
    if (current) item.setAttribute('aria-current', 'page');
    else item.removeAttribute('aria-current');
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

  const themeOptions = Array.from(document.querySelectorAll('[data-theme-choice]'));
  themeOptions.forEach((btn, i) => {
    btn.addEventListener('click', () => setTheme(btn.dataset.themeChoice));
    // A radiogroup is arrow-driven, not Tab-driven.
    btn.addEventListener('keydown', e => {
      const step = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1
        : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
      if (!step) return;
      e.preventDefault();
      const next = themeOptions[(i + step + themeOptions.length) % themeOptions.length];
      setTheme(next.dataset.themeChoice);
      next.focus();
    });
  });

  // Searching re-renders a whole grid, so wait for a pause in typing.
  const homeSearch = document.getElementById('home-search');
  if (homeSearch) {
    homeSearch.addEventListener('input', debounce(e => {
      state.filters.homeQuery = fold(e.target.value).trim();
      renderHomeTab();
    }, 150));
  }

  const recipeSearch = document.getElementById('recipe-search');
  if (recipeSearch) {
    recipeSearch.addEventListener('input', debounce(e => {
      state.filters.query = fold(e.target.value).trim();
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
  document.getElementById('batch-bar-toggle').addEventListener('click', () => {
    state.batchPanelOpen = !state.batchPanelOpen;
    renderBatchServingsPanel();
  });

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
      state.selectedServings = {};
      saveSelection();
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
      filterToggle.setAttribute('aria-expanded', String(isHidden));
    });
  }

  document.querySelectorAll('.diet-filter-cb, .intol-filter-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      state.filters.diets = Array.from(document.querySelectorAll('.diet-filter-cb:checked')).map(c => c.value);
      state.filters.intolerances = Array.from(document.querySelectorAll('.intol-filter-cb:checked')).map(c => c.value);
      renderRecipeGrid();
    });
  });

  document.getElementById('backup-btn').addEventListener('click', downloadBackup);

  const restoreInput = document.getElementById('restore-file-input');
  document.getElementById('restore-btn').addEventListener('click', () => restoreInput.click());
  restoreInput.addEventListener('change', e => {
    handleRestoreFile(e.target.files && e.target.files[0]);
    e.target.value = ''; // let the same file be picked twice
  });

  const bulkGenBtn = document.getElementById('generate-bulk-btn');
  if (bulkGenBtn) bulkGenBtn.addEventListener('click', generateBulkRecipes);

  // Escape closes whatever is on top; arrow keys page through cook mode.
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (cookModeState.active) exitCookMode();
      else if (document.getElementById('custom-recipe-modal').classList.contains('active')) closeRecipeModal();
      else if (document.getElementById('recipe-drawer').classList.contains('active')) closeRecipeDrawer();
      return;
    }
    if (cookModeState.active) {
      if (e.key === 'ArrowRight') document.getElementById('cook-mode-next-btn').click();
      else if (e.key === 'ArrowLeft') document.getElementById('cook-mode-prev-btn').click();
    }
  });

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
      trapFocus(overlay);
    });
  }

  if (exitBtn) exitBtn.addEventListener('click', exitCookMode);

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
        exitCookMode();
        showToast(t('cookModeDone'), 'success');
      }
    });
  }
}

function exitCookMode() {
  const overlay = document.getElementById('cook-mode-overlay');
  if (!cookModeState.active) return;
  overlay.style.display = 'none';
  cookModeState.active = false;
  releaseFocus(overlay);
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
    <div class="recipe-card ${isSelected ? 'selected-for-list' : ''}" data-id="${escapeHtml(recipe.id)}"
         role="button" tabindex="0" aria-label="${escapeHtml(name)}">
      <div class="recipe-card-select-btn" data-id="${escapeHtml(recipe.id)}"
           role="checkbox" tabindex="0" aria-checked="${isSelected}"
           aria-label="${escapeHtml(t('selectForList'))}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div class="recipe-card-img-wrapper">
        ${photoMarkup(recipe, name, 'recipe-card-img', true)}
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
      onActivate(selectBtn, e => {
        e.stopPropagation();
        toggleRecipeSelection(card.dataset.id);
      });
    }
    onActivate(card, e => {
      // Enter on the select checkbox must not also open the drawer.
      if (e.target && e.target.closest && e.target.closest('.recipe-card-select-btn')) return;
      openRecipeDrawer(card.dataset.id);
    });
  });
}

function matchesQuery(recipe, query) {
  if (!query) return true;
  const tr = recipeText(recipe);
  if (fold(tr.title).includes(query)) return true;
  if (tr.subtitle && fold(tr.subtitle).includes(query)) return true;
  return recipe.ingredients.some(i => fold(ingredientName(i)).includes(query));
}

function renderHomeTab() {
  const featuredContainer = document.getElementById('featured-recipe-container');
  const featuredRecipe = state.recipes.find(r => r.id === 'carbonnade-flamande') || state.recipes[0];

  if (featuredContainer && featuredRecipe) {
    const isSelected = state.selectedRecipes.includes(featuredRecipe.id);
    const trans = recipeText(featuredRecipe);

    featuredContainer.innerHTML = `
      <div class="featured-card ${isSelected ? 'selected-for-list' : ''}" data-id="${escapeHtml(featuredRecipe.id)}"
           role="button" tabindex="0" aria-label="${escapeHtml(trans.title)}">
        <div class="recipe-card-select-btn" data-id="${escapeHtml(featuredRecipe.id)}"
             role="checkbox" tabindex="0" aria-checked="${isSelected}"
             aria-label="${escapeHtml(t('selectForList'))}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        ${photoMarkup(featuredRecipe, trans.title, 'featured-img', false)}
        <div class="featured-overlay">
          <span class="featured-tag">${escapeHtml(t('suggestedTitle'))}</span>
          <h3 class="featured-title">${escapeHtml(trans.title)}</h3>
          <p class="featured-desc">${escapeHtml(trans.description)}</p>
        </div>
      </div>
    `;

    onActivate(featuredContainer.querySelector('.recipe-card-select-btn'), e => {
      e.stopPropagation();
      toggleRecipeSelection(featuredRecipe.id);
    });
    onActivate(featuredContainer.querySelector('.featured-card'), e => {
      if (e.target && e.target.closest && e.target.closest('.recipe-card-select-btn')) return;
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
    // Favourites is a toggle that stacks with the category pills, so you can
    // ask for "my favourite desserts".
    const favPill = `
      <div class="cat-pill cat-pill-fav ${state.filters.favoritesOnly ? 'active' : ''}" data-favorites="1"
           role="button" tabindex="0" aria-pressed="${state.filters.favoritesOnly}">
        ❤️ ${escapeHtml(t('favoritesFilter'))}
      </div>
    `;

    catRow.innerHTML = favPill + RECIPE_CATEGORIES.map(cat => `
      <div class="cat-pill ${cat === state.filters.category ? 'active' : ''}" data-category="${cat}"
           role="button" tabindex="0" aria-pressed="${cat === state.filters.category}">
        ${escapeHtml(t(RECIPE_CATEGORY_KEYS[cat]))}
      </div>
    `).join('');

    catRow.querySelectorAll('.cat-pill').forEach(pill => {
      pill.addEventListener('click', e => {
        const el = e.currentTarget;
        if (el.dataset.favorites) {
          state.filters.favoritesOnly = !state.filters.favoritesOnly;
        } else {
          state.filters.category = el.dataset.category;
        }
        renderRecipesList();
      });
    });
  }

  renderRecipeGrid();
}

function filteredRecipes() {
  const f = state.filters;
  return state.recipes.filter(recipe => {
    if (f.favoritesOnly && !state.favorites.includes(recipe.id)) return false;
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
    const message = state.filters.favoritesOnly && state.favorites.length === 0
      ? t('noFavorites')
      : t('noResults');
    container.innerHTML = `<div class="grid-empty">${escapeHtml(message)}</div>`;
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

  applyTheme();
}

// --- Batch Selection System ---
function toggleRecipeSelection(recipeId) {
  const idx = state.selectedRecipes.indexOf(recipeId);

  if (idx > -1) {
    state.selectedRecipes.splice(idx, 1);
    delete state.selectedServings[recipeId];
    showToast(t('toastDeselected'), 'info');
  } else {
    state.selectedRecipes.push(recipeId);
    // Selecting from an open drawer keeps the servings you just dialled in.
    if (state.selectedRecipe && state.selectedRecipe.id === recipeId) {
      state.selectedServings[recipeId] = state.recipeServings;
    }
    showToast(t('toastSelected'), 'success');
  }
  saveSelection();

  document.querySelectorAll(`.recipe-card[data-id="${recipeId}"], .featured-card[data-id="${recipeId}"]`)
    .forEach(card => {
      card.classList.toggle('selected-for-list', idx === -1);
      const box = card.querySelector('.recipe-card-select-btn');
      if (box) box.setAttribute('aria-checked', String(idx === -1));
    });

  updateBatchActionBar();
}

/** How many servings to cook a selected recipe for. Defaults to its own. */
function servingsFor(recipeId) {
  const stored = state.selectedServings[recipeId];
  if (typeof stored === 'number' && stored > 0) return stored;
  const recipe = state.recipes.find(r => r.id === recipeId);
  return recipe ? recipe.servings : 4;
}

function setServingsFor(recipeId, servings) {
  state.selectedServings[recipeId] = Math.max(1, servings);
  saveSelection();
  renderBatchServingsPanel();
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
  } else {
    state.batchPanelOpen = false;
  }
  renderBatchServingsPanel();
}

/**
 * The list of selected recipes with a servings stepper each. Without this the
 * batch flow always cooked every recipe for its default number of people,
 * quietly ignoring the servings you set in the drawer.
 */
function renderBatchServingsPanel() {
  const panel = document.getElementById('batch-servings-panel');
  if (!panel) return;

  const open = state.batchPanelOpen && state.selectedRecipes.length > 0;
  panel.classList.toggle('visible', open);

  const caret = document.querySelector('.batch-bar-caret');
  if (caret) caret.textContent = open ? '▼' : '▲';

  if (!open) {
    panel.innerHTML = '';
    return;
  }

  panel.innerHTML = `
    <div class="batch-panel-title">${escapeHtml(t('batchServingsTitle'))}</div>
    ${state.selectedRecipes.map(id => {
      const recipe = state.recipes.find(r => r.id === id);
      if (!recipe) return '';
      return `
        <div class="batch-panel-row" data-id="${escapeHtml(id)}">
          <span class="batch-panel-name">${escapeHtml(recipeText(recipe).title)}</span>
          <span class="batch-panel-controls">
            <button type="button" class="servings-btn" data-step="-1" aria-label="-">-</button>
            <span class="batch-panel-count">${servingsFor(id)}</span>
            <button type="button" class="servings-btn" data-step="1" aria-label="+">+</button>
          </span>
        </div>
      `;
    }).join('')}
  `;

  panel.querySelectorAll('.batch-panel-row').forEach(row => {
    row.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = row.dataset.id;
        setServingsFor(id, servingsFor(id) + parseInt(btn.dataset.step, 10));
      });
    });
  });
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
    addItemsToGroceryList(scaledIngredients(recipe, servingsFor(recipeId)), recipeText(recipe).title);
  });

  state.selectedRecipes = [];
  state.selectedServings = {};
  state.batchPanelOpen = false;
  saveSelection();
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

  // The hero is a real <img> in the markup, so swap the whole element's mode
  // rather than pointing src at a file that does not exist.
  const hero = document.getElementById('drawer-hero-img');
  const heroWrap = hero && hero.parentElement;
  if (hero) {
    hero.alt = trans.title;
    if (hasPhoto(recipe)) hero.src = recipe.image;
    else hero.removeAttribute('src');
  }
  if (heroWrap) heroWrap.classList.toggle('drawer-hero-empty', !hasPhoto(recipe));
  renderImageCredit(recipe);
  document.getElementById('drawer-subtitle').textContent =
    own ? `${recipeCategoryLabel(recipe)} · ${t('customBadge')}` : recipeCategoryLabel(recipe);
  document.getElementById('drawer-title').textContent = trans.title;
  document.getElementById('drawer-description').textContent = trans.description;

  document.getElementById('val-prep-time').textContent = recipe.prepTime;
  document.getElementById('val-cook-time').textContent = recipe.cookTime || '-';
  document.getElementById('val-difficulty').textContent =
    recipe.difficulty[state.settings.language] || recipe.difficulty.en;

  document.getElementById('servings-count').textContent = state.recipeServings;

  const favBtn = document.getElementById('recipe-fav-btn');
  const isFavourite = state.favorites.includes(recipeId);
  favBtn.classList.toggle('favorited', isFavourite);
  favBtn.setAttribute('aria-pressed', String(isFavourite));

  // Editing and deleting only make sense for recipes you created.
  document.getElementById('recipe-edit-btn').style.display = own ? 'flex' : 'none';
  document.getElementById('recipe-delete-btn').style.display = own ? 'flex' : 'none';

  updateScaledIngredients();
  renderRecipeInstructions(trans.instructions);

  document.getElementById('drawer-backdrop').classList.add('active');
  const drawer = document.getElementById('recipe-drawer');
  drawer.classList.add('active');
  trapFocus(drawer);
}

/**
 * Photos taken from Wikimedia Commons come under CC licences that require the
 * photographer to be named, so the credit rides along with the recipe.
 */
function renderImageCredit(recipe) {
  const el = document.getElementById('drawer-image-credit');
  if (!el) return;

  const credit = recipe.imageCredit;
  if (!credit) {
    el.textContent = '';
    el.style.display = 'none';
    return;
  }

  el.style.display = 'block';
  el.innerHTML = `📷 ${escapeHtml(credit.author)} · <a href="${escapeHtml(credit.licenceUrl || credit.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(credit.licence)}</a>`;
}

function closeRecipeDrawer() {
  const drawer = document.getElementById('recipe-drawer');
  if (!drawer.classList.contains('active')) return;
  document.getElementById('drawer-backdrop').classList.remove('active');
  drawer.classList.remove('active');
  state.selectedRecipe = null;
  releaseFocus(drawer);
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
    <div class="step-card" data-step="${idx}" role="checkbox" tabindex="0" aria-checked="false">
      <div class="step-num" aria-hidden="true">${idx + 1}</div>
      <div class="step-text">${escapeHtml(step)}</div>
    </div>
  `).join('');

  container.querySelectorAll('.step-card').forEach(card => {
    onActivate(card, e => {
      const done = e.currentTarget.classList.toggle('completed');
      e.currentTarget.setAttribute('aria-checked', String(done));
    });
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
    favBtn.setAttribute('aria-pressed', 'false');
    showToast(t('toastFavRemoved'), 'info');
  } else {
    state.favorites.push(recipeId);
    favBtn.classList.add('favorited');
    favBtn.setAttribute('aria-pressed', 'true');
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

  container.querySelectorAll('.item-qty.editable').forEach(el => {
    // Sits inside .item-details, which ticks the item — don't do both.
    el.addEventListener('click', e => {
      e.stopPropagation();
      beginQuantityEdit(e.currentTarget.dataset.id);
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        beginQuantityEdit(e.currentTarget.dataset.id);
      }
    });
  });

  updateProgressHeader();
}

function groceryItemHtml(item) {
  const qty = formatQuantity(item.amount, item.unit);
  const sources = (item.sources || []).filter(Boolean);
  return `
    <div class="grocery-item" data-id="${escapeHtml(item.id)}">
      <div class="checkbox-wrapper ${item.checked ? 'checked' : ''}">
        <input type="checkbox" ${item.checked ? 'checked' : ''} data-id="${escapeHtml(item.id)}"
               aria-label="${escapeHtml(item.name)}">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <div class="item-details ${item.checked ? 'checked' : ''}">
        <span class="item-name">${escapeHtml(item.name)}</span>
        <span class="item-qty editable" data-id="${escapeHtml(item.id)}" role="button" tabindex="0"
              title="${escapeHtml(t('editQuantityHint'))}">${escapeHtml(qty || t('addQuantity'))}</span>
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

/**
 * Swap the quantity label for an input. You could delete a line and re-add it,
 * but "actually make that 3" is the commonest edit there is.
 */
function beginQuantityEdit(id) {
  const item = state.groceryList.find(i => i.id === id);
  const label = document.querySelector(`.grocery-item[data-id="${id}"] .item-qty`);
  if (!item || !label || label.dataset.editing) return;

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'item-qty-input';
  input.value = typeof item.amount === 'number' ? `${item.amount} ${item.unit}`.trim() : (item.unit || '');
  input.setAttribute('aria-label', t('editQuantityHint'));

  label.dataset.editing = '1';
  label.replaceWith(input);
  input.focus();
  input.select();

  let settled = false;
  const finish = commit => {
    if (settled) return;
    settled = true;
    if (commit) commitQuantityEdit(id, input.value);
    renderGroceryList();
  };

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); finish(true); }
    else if (e.key === 'Escape') { e.preventDefault(); finish(false); }
  });
  input.addEventListener('blur', () => finish(true));
}

function commitQuantityEdit(id, raw) {
  const item = state.groceryList.find(i => i.id === id);
  if (!item) return;

  const text = String(raw || '').trim();
  if (!text) {
    item.amount = null;
    item.unit = '';
  } else {
    const match = text.match(/^(\d+(?:[.,]\d+)?)\s*(.*)$/);
    if (match) {
      const normalized = window.Ingredients.normalizeUnit(
        parseFloat(match[1].replace(',', '.')),
        match[2] || item.unit || 'st.',
        item.name
      );
      item.amount = normalized.amount;
      item.unit = normalized.unit;
    } else {
      // Pure text like "a handful" — keep it as the unit.
      item.amount = null;
      item.unit = text;
    }
  }

  saveGroceryList();
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

  const bar = document.getElementById('grocery-progress-bar');
  if (bar) {
    bar.setAttribute('aria-valuenow', String(percentage));
    bar.setAttribute('aria-valuetext', `${checked} / ${total}`);
  }
}

// --- Backup & restore ---
//
// Everything you own lives in this browser's localStorage. Clearing site data,
// switching phones or an OS storage eviction would take it all with no copy
// anywhere, so it has to be exportable.

const BACKUP_FORMAT = 1;

function buildBackup() {
  return {
    format: BACKUP_FORMAT,
    app: 'mijn-kookpot',
    exportedAt: new Date().toISOString(),
    settings: state.settings,
    userRecipes: state.userRecipes,
    groceryList: state.groceryList,
    skippedStaples: state.skippedStaples,
    favorites: state.favorites,
    selectedRecipes: state.selectedRecipes,
    selectedServings: state.selectedServings
  };
}

function downloadBackup() {
  const json = JSON.stringify(buildBackup(), null, 2);
  const stamp = new Date().toISOString().slice(0, 10);
  const fileName = `mijn-kookpot-backup-${stamp}.json`;

  try {
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast(t('toastBackupSaved', { name: fileName }), 'success');
  } catch (err) {
    console.error('Backup failed', err);
    showToast(t('toastBackupFailed'), 'info');
  }
}

/** Accepts a parsed backup object, returns true when it was applied. */
function applyBackup(data) {
  if (!data || typeof data !== 'object' || data.app !== 'mijn-kookpot' || !Array.isArray(data.userRecipes)) {
    return false;
  }

  state.userRecipes = data.userRecipes;
  state.groceryList = Array.isArray(data.groceryList) ? data.groceryList : [];
  state.skippedStaples = Array.isArray(data.skippedStaples) ? data.skippedStaples : [];
  state.favorites = Array.isArray(data.favorites) ? data.favorites : [];
  state.selectedRecipes = Array.isArray(data.selectedRecipes) ? data.selectedRecipes : [];
  state.selectedServings = (data.selectedServings && typeof data.selectedServings === 'object') ? data.selectedServings : {};
  if (data.settings && typeof data.settings === 'object') {
    state.settings = Object.assign({}, state.settings, data.settings);
  }

  saveUserRecipes();
  saveGroceryList();
  saveFavorites();
  saveSelection();
  saveSettings();
  return true;
}

function handleRestoreFile(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    let data = null;
    try {
      data = JSON.parse(reader.result);
    } catch (err) {
      showToast(t('toastRestoreFailed'), 'info');
      return;
    }

    const summary = t('confirmRestore', {
      recipes: Array.isArray(data.userRecipes) ? data.userRecipes.length : 0,
      items: Array.isArray(data.groceryList) ? data.groceryList.length : 0
    });
    if (!confirm(summary)) return;

    if (applyBackup(data)) {
      applyLanguage(state.settings.language);
      showToast(t('toastRestored'), 'success');
    } else {
      showToast(t('toastRestoreFailed'), 'info');
    }
  };
  reader.onerror = () => showToast(t('toastRestoreFailed'), 'info');
  reader.readAsText(file);
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
  const modal = document.getElementById('custom-recipe-modal');
  modal.classList.add('active');
  trapFocus(modal);
}

function closeRecipeModal() {
  const modal = document.getElementById('custom-recipe-modal');
  if (!modal.classList.contains('active')) return;
  modal.classList.remove('active');
  document.getElementById('custom-recipe-form').reset();
  state.editingRecipeId = null;
  state.customRecipeIngredients = [];
  releaseFocus(modal);
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
  delete state.selectedServings[id];
  saveUserRecipes();
  saveFavorites();
  saveSelection();

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

/**
 * Called by the service worker registration when a newer version has finished
 * installing and is waiting to take over.
 */
window.showUpdateBanner = function (onAccept) {
  const banner = document.getElementById('update-banner');
  const button = document.getElementById('update-reload-btn');
  if (!banner || !button) return;

  button.onclick = () => {
    button.disabled = true;
    onAccept();
  };
  banner.classList.add('visible');
};

// Fire up
window.addEventListener('DOMContentLoaded', initApp);
