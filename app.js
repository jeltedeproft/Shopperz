// --- Translation Dictionaries ---
// The interface talks the way the recipes do: like someone who has cooked
// this before and is glad you asked. Second person, no system vocabulary —
// nothing here says "configure", "generate" or "invalid". The French uses
// "tu" throughout for the same reason.
const uiTranslations = {
  en: {
    appTitle: "Mijn Kookpot",
    recipes: "Recipes",
    checklist: "Shopping",
    settings: "Settings",
    dishesTab: "My dishes",
    dishesEmpty: "No dishes yet",
    dishesEmptyDesc: "Tap + on a dish to add it",
    browseBtn: "Browse recipes",
    makeListBtn: "🛒 Make shopping list",
    updateListBtn: "🛒 Update shopping list",
    clearDishesBtn: "Remove all",
    confirmClearDishes: "Remove all dishes?",
    addDish: "Add {name}",
    removeDish: "Remove {name}",
    toastDishAdded: "{name} added",
    toastDishAddedCareful: "{name} added. Careful: it has {list}",
    toastDishRemoved: "{name} removed",
    drawerAddBtn: "+ Add to my dishes",
    drawerAddedBtn: "✓ In my dishes",
    toastListMade: "List ready: {count} to buy",
    clearListBtn: "Clear all",
    searchPlaceholder: "What do you feel like cooking?",
    // The week
    mealServings: "Plates",
    // The household
    tableGroupTitle: "At your table",
    householdLabel: "How many of you eat?",
    avoidLabel: "Keep off the plate",
    profilePromptTitle: "Before we start: does anyone at your table avoid something?",
    profilePromptDesc: "Tap what to keep off the plate. I'll leave those dishes out everywhere — you can change it later in Settings.",
    profilePromptDone: "That's everyone",
    allergenGluten: "Gluten",
    allergenNuts: "Nuts",
    allergenDairy: "Milk",
    allergenEggs: "Eggs",
    allergenFish: "Fish & shellfish",
    allergenSoy: "Soy",
    allergenSesame: "Sesame",
    allergenCelery: "Celery",
    allergenMustard: "Mustard",
    safetyHidden: "{count} dishes left out for your table ({list})",
    safetyShowAnyway: "Show them anyway",
    safetyHideAgain: "Hide them again",
    containsLabel: "Contains {list}",
    containsNone: "None of the common allergens, as far as I can tell",
    allergyWarning: "Careful — this has {list}, and someone at your table avoids that.",
    recipeBookTitle: "The Recipe Book",
    recipeCategoryAll: "Everything",
    favoritesFilter: "Favourites",
    noFavorites: "No favourites yet — tap the little heart on a dish you love",
    recipeCategoryBreakfast: "Breakfast",
    recipeCategoryMain: "Main dish",
    recipeCategorySoup: "Soup",
    recipeCategorySnack: "Something small",
    recipeCategoryDessert: "Dessert",
    recipeCategoryDrink: "Drinks",
    createRecipeHeader: "Write down a recipe",
    editRecipeHeader: "Tidy up this recipe",
    checklistTitle: "The shopping list",
    clearCheckedBtn: "Clear ticked",
    customItemPlaceholder: "Something else? 2 witloof, say…",
    emptyListHeader: "Nothing on the list yet",
    emptyListDesc: "Add some dishes, then make your list",
    cupboardGroup: "🏠 Probably at home already",
    cupboardHint: "Only buy these if you've run out",
    progressText: "{checked} of {total} in the basket",
    removeItem: "Take {name} off the list",
    prefTitle: "Settings",
    langGroupTitle: "Language",
    langSelectLabel: "Talk to me in",
    dangerZoneTitle: "Careful now",
    resetDbLabel: "Throw away my recipes",
    resetBtnText: "Throw away",
    prepTimeLabel: "Getting ready",
    cookTimeLabel: "On the stove",
    diffLabel: "How tricky",
    servingsLabel: "How many at the table?",
    instructionsTitle: "How it's done",
    ingredientsTitle: "What you'll need",
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
    dietPaleo: "Paleo",
    dietPescatarian: "Pescatarian",
    dietRowLabel: "Diets",
    dietChipLabel: "{diet}: {count} dishes",
    dietsFit: "Fits: {list}",
    sourceCredit: "After a recipe from {site}",
    intolGluten: "No gluten",
    intolNuts: "No nuts",
    intolDairy: "No dairy",
    intolEggs: "No eggs",
    allergenDisclaimer: "Worked out from the ingredients — check the recipe yourself for serious allergies.",
    dataGroupTitle: "Your own things",
    updateAvailable: "There's a fresher version waiting",
    updateReloadBtn: "Fetch it",
    backupLabel: "Keep a copy somewhere safe",
    backupBtn: "Save a copy",
    restoreLabel: "Bring a copy back",
    restoreBtn: "Bring it back",
    toastBackupSaved: "Saved as {name} — keep it somewhere safe",
    toastBackupFailed: "That didn't work, sorry. Shall we try again?",
    confirmRestore: "Bring this copy back? There are {recipes} of your own recipes and {items} things on the list in it, and it replaces everything in the app right now.",
    toastRestored: "All back where it was",
    toastRestoreFailed: "That's not a Mijn Kookpot copy, I'm afraid",
    seeMyLifeLabel: "Send to SeeMyLife",
    seeMyLifeDesc: "Fill in its address and every change goes there by itself",
    seeMyLifeBtn: "Send now",
    toastSeeMyLifeSent: "Sent to SeeMyLife",
    toastSeeMyLifeFailed: "SeeMyLife didn't answer. Is it running?",
    // Shopping preferences
    shoppingGroupTitle: "At the shop",
    skipStaplesLabel: "Leave out the cupboard basics",
    skipStaplesDesc: "You've salt, pepper and oil at home — no sense writing them down",
    // Appearance
    appearanceGroupTitle: "How it looks",
    themeLabel: "Light or dark",
    themeSystem: "My phone decides",
    themeLight: "Always light",
    themeDark: "Always dark",
    // Grocery list
    allItems: "Everything",
    itemsChecked: "in the basket",
    exportBtn: "Send the list",
    exportCopied: "Copied — paste it wherever you like",
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
    cookModeStep: "Step {current} of {total}",
    cookModeNext: "Next →",
    cookModeFinish: "That's it!",
    cookModeBack: "← Back",
    cookModeDone: "And that's dinner. Smakelijk!"
  },
  nl: {
    appTitle: "Mijn Kookpot",
    recipes: "Recepten",
    checklist: "Boodschappen",
    settings: "Instellingen",
    dishesTab: "Mijn gerechten",
    dishesEmpty: "Nog geen gerechten",
    dishesEmptyDesc: "Tik op + bij een gerecht om het toe te voegen",
    browseBtn: "Recepten bekijken",
    makeListBtn: "🛒 Maak boodschappenlijst",
    updateListBtn: "🛒 Boodschappenlijst bijwerken",
    clearDishesBtn: "Alles weghalen",
    confirmClearDishes: "Alle gerechten weghalen?",
    addDish: "{name} toevoegen",
    removeDish: "{name} weghalen",
    toastDishAdded: "{name} toegevoegd",
    toastDishAddedCareful: "{name} toegevoegd. Let op: er zit {list} in",
    toastDishRemoved: "{name} weggehaald",
    drawerAddBtn: "+ Bij mijn gerechten",
    drawerAddedBtn: "✓ In mijn gerechten",
    toastListMade: "Lijst klaar: {count} te kopen",
    clearListBtn: "Alles wissen",
    searchPlaceholder: "Waar heb je zin in?",
    // De week
    mealServings: "Borden",
    // Het gezin
    tableGroupTitle: "Aan jouw tafel",
    householdLabel: "Met hoeveel eten jullie?",
    avoidLabel: "Niet op het bord",
    profilePromptTitle: "Eerst even: moet iemand aan je tafel iets vermijden?",
    profilePromptDesc: "Tik aan wat niet op het bord mag. Ik laat die gerechten overal weg — je kan het later nog aanpassen bij Instellingen.",
    profilePromptDone: "Dat is iedereen",
    allergenGluten: "Gluten",
    allergenNuts: "Noten",
    allergenDairy: "Melk",
    allergenEggs: "Eieren",
    allergenFish: "Vis & schaaldieren",
    allergenSoy: "Soja",
    allergenSesame: "Sesam",
    allergenCelery: "Selder",
    allergenMustard: "Mosterd",
    safetyHidden: "{count} gerechten weggelaten voor je tafel ({list})",
    safetyShowAnyway: "Toch tonen",
    safetyHideAgain: "Weer verbergen",
    containsLabel: "Bevat {list}",
    containsNone: "Geen van de gekende allergenen, voor zover ik zie",
    allergyWarning: "Opgelet — hier zit {list} in, en iemand aan je tafel vermijdt dat.",
    recipeBookTitle: "Het kookboek",
    recipeCategoryAll: "Alles",
    favoritesFilter: "Favorieten",
    noFavorites: "Nog geen favorieten — tik op het hartje bij een gerecht dat je graag lust",
    recipeCategoryBreakfast: "Ontbijt",
    recipeCategoryMain: "Hoofdgerecht",
    recipeCategorySoup: "Soep",
    recipeCategorySnack: "Iets kleins",
    recipeCategoryDessert: "Dessert",
    recipeCategoryDrink: "Drankjes",
    createRecipeHeader: "Een recept opschrijven",
    editRecipeHeader: "Dit recept bijwerken",
    checklistTitle: "Het boodschappenlijstje",
    clearCheckedBtn: "Afgevinkte wissen",
    customItemPlaceholder: "Nog iets? 2 witloof bijvoorbeeld…",
    emptyListHeader: "Nog niets op het lijstje",
    emptyListDesc: "Kies een paar gerechten en maak dan je lijst",
    cupboardGroup: "🏠 Heb je waarschijnlijk al",
    cupboardHint: "Koop deze alleen als ze op zijn",
    progressText: "{checked} van {total} in de kar",
    removeItem: "{name} van het lijstje halen",
    prefTitle: "Instellingen",
    langGroupTitle: "Taal",
    langSelectLabel: "Spreek me aan in",
    dangerZoneTitle: "Even opletten",
    resetDbLabel: "Mijn eigen recepten weggooien",
    resetBtnText: "Weggooien",
    prepTimeLabel: "Voorbereiden",
    cookTimeLabel: "Op het vuur",
    diffLabel: "Hoe lastig",
    servingsLabel: "Met hoeveel aan tafel?",
    instructionsTitle: "Zo doe je het",
    ingredientsTitle: "Wat je nodig hebt",
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
    dietPaleo: "Paleo",
    dietPescatarian: "Pescotariër",
    dietRowLabel: "Diëten",
    dietChipLabel: "{diet}: {count} gerechten",
    dietsFit: "Past bij: {list}",
    sourceCredit: "Naar een recept van {site}",
    intolGluten: "Zonder gluten",
    intolNuts: "Zonder noten",
    intolDairy: "Zonder lactose",
    intolEggs: "Zonder ei",
    allergenDisclaimer: "Afgeleid uit de ingrediënten — controleer het recept zelf bij ernstige allergieën.",
    dataGroupTitle: "Jouw eigen spullen",
    updateAvailable: "Er staat een verse versie klaar",
    updateReloadBtn: "Ophalen",
    backupLabel: "Bewaar een kopie op een veilige plek",
    backupBtn: "Kopie bewaren",
    restoreLabel: "Een kopie terugzetten",
    restoreBtn: "Terugzetten",
    toastBackupSaved: "Bewaard als {name} — hou het goed bij",
    toastBackupFailed: "Dat lukte niet, sorry. Nog eens proberen?",
    confirmRestore: "Deze kopie terugzetten? Er zitten {recipes} eigen recepten en {items} boodschappen in, en ze vervangt alles wat er nu in de app staat.",
    toastRestored: "Alles staat weer waar het hoorde",
    toastRestoreFailed: "Dat is geen Mijn Kookpot-kopie, vrees ik",
    seeMyLifeLabel: "Naar SeeMyLife sturen",
    seeMyLifeDesc: "Vul het adres in en elke wijziging gaat er vanzelf naartoe",
    seeMyLifeBtn: "Nu sturen",
    toastSeeMyLifeSent: "Naar SeeMyLife gestuurd",
    toastSeeMyLifeFailed: "SeeMyLife antwoordt niet. Draait het wel?",
    // Winkelvoorkeuren
    shoppingGroupTitle: "In de winkel",
    skipStaplesLabel: "Laat de kastbasics weg",
    skipStaplesDesc: "Zout, peper en olie heb je thuis — die hoef je niet op te schrijven",
    // Uitzicht
    appearanceGroupTitle: "Hoe het eruitziet",
    themeLabel: "Licht of donker",
    themeSystem: "Mijn gsm kiest",
    themeLight: "Altijd licht",
    themeDark: "Altijd donker",
    // Boodschappenlijst
    allItems: "Alles",
    itemsChecked: "in de kar",
    exportBtn: "Lijstje doorsturen",
    exportCopied: "Gekopieerd — plak het waar je wil",
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
    cookModeStep: "Stap {current} van {total}",
    cookModeNext: "Verder →",
    cookModeFinish: "Klaar!",
    cookModeBack: "← Terug",
    cookModeDone: "En dat is het eten. Smakelijk!"
  },
  fr: {
    appTitle: "Mijn Kookpot",
    recipes: "Recettes",
    checklist: "Courses",
    settings: "Réglages",
    dishesTab: "Mes plats",
    dishesEmpty: "Pas encore de plats",
    dishesEmptyDesc: "Touche + sur un plat pour l'ajouter",
    browseBtn: "Voir les recettes",
    makeListBtn: "🛒 Faire la liste de courses",
    updateListBtn: "🛒 Mettre la liste à jour",
    clearDishesBtn: "Tout retirer",
    confirmClearDishes: "Retirer tous les plats ?",
    addDish: "Ajouter {name}",
    removeDish: "Retirer {name}",
    toastDishAdded: "{name} ajouté",
    toastDishAddedCareful: "{name} ajouté. Attention : contient {list}",
    toastDishRemoved: "{name} retiré",
    drawerAddBtn: "+ Ajouter à mes plats",
    drawerAddedBtn: "✓ Dans mes plats",
    toastListMade: "Liste prête : {count} à acheter",
    clearListBtn: "Tout effacer",
    searchPlaceholder: "Tu as envie de quoi ?",
    // La semaine
    mealServings: "Assiettes",
    // La maisonnée
    tableGroupTitle: "À ta table",
    householdLabel: "Vous êtes combien à manger ?",
    avoidLabel: "Pas dans l'assiette",
    profilePromptTitle: "Avant de commencer : quelqu'un à ta table doit-il éviter quelque chose ?",
    profilePromptDesc: "Touche ce qui ne doit pas finir dans l'assiette. Je laisse ces plats de côté partout — tu pourras changer ça plus tard dans les Réglages.",
    profilePromptDone: "C'est tout le monde",
    allergenGluten: "Gluten",
    allergenNuts: "Fruits à coque",
    allergenDairy: "Lait",
    allergenEggs: "Œufs",
    allergenFish: "Poisson & crustacés",
    allergenSoy: "Soja",
    allergenSesame: "Sésame",
    allergenCelery: "Céleri",
    allergenMustard: "Moutarde",
    safetyHidden: "{count} plats laissés de côté pour ta table ({list})",
    safetyShowAnyway: "Les montrer quand même",
    safetyHideAgain: "Les cacher à nouveau",
    containsLabel: "Contient : {list}",
    containsNone: "Aucun des allergènes courants, pour autant que je sache",
    allergyWarning: "Attention — il y a {list}, et quelqu'un à ta table l'évite.",
    recipeBookTitle: "Le livre de recettes",
    recipeCategoryAll: "Tout",
    favoritesFilter: "Favoris",
    noFavorites: "Pas encore de favoris — touche le petit cœur d'un plat que tu aimes",
    recipeCategoryBreakfast: "Petit-déjeuner",
    recipeCategoryMain: "Plat principal",
    recipeCategorySoup: "Soupe",
    recipeCategorySnack: "Quelque chose de petit",
    recipeCategoryDessert: "Dessert",
    recipeCategoryDrink: "Boissons",
    createRecipeHeader: "Noter une recette",
    editRecipeHeader: "Retoucher cette recette",
    checklistTitle: "La liste de courses",
    clearCheckedBtn: "Effacer les cochés",
    customItemPlaceholder: "Autre chose ? 2 chicons, tiens…",
    emptyListHeader: "Rien sur la liste pour l'instant",
    emptyListDesc: "Choisis quelques plats, puis fais ta liste",
    cupboardGroup: "🏠 Sans doute déjà à la maison",
    cupboardHint: "À n'acheter que s'il n'y en a plus",
    progressText: "{checked} sur {total} dans le panier",
    removeItem: "Retirer {name} de la liste",
    prefTitle: "Réglages",
    langGroupTitle: "Langue",
    langSelectLabel: "Parle-moi en",
    dangerZoneTitle: "Attention",
    resetDbLabel: "Jeter mes recettes",
    resetBtnText: "Jeter",
    prepTimeLabel: "Préparation",
    cookTimeLabel: "Sur le feu",
    diffLabel: "Difficulté",
    servingsLabel: "Vous êtes combien à table ?",
    instructionsTitle: "Comment on fait",
    ingredientsTitle: "Ce qu'il te faut",
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
    dietPaleo: "Paléo",
    dietPescatarian: "Pescétarien",
    dietRowLabel: "Régimes",
    dietChipLabel: "{diet} : {count} plats",
    dietsFit: "Convient : {list}",
    sourceCredit: "D'après une recette de {site}",
    intolGluten: "Sans gluten",
    intolNuts: "Sans noix",
    intolDairy: "Sans lactose",
    intolEggs: "Sans œufs",
    allergenDisclaimer: "Déduit des ingrédients — vérifie la recette toi-même en cas d'allergie sérieuse.",
    dataGroupTitle: "Tes affaires à toi",
    updateAvailable: "Une version plus fraîche t'attend",
    updateReloadBtn: "La chercher",
    backupLabel: "Garde une copie au chaud",
    backupBtn: "Garder une copie",
    restoreLabel: "Remettre une copie",
    restoreBtn: "Remettre",
    toastBackupSaved: "Gardé sous {name} — range-le bien",
    toastBackupFailed: "Ça n'a pas marché, désolée. On réessaie ?",
    confirmRestore: "Remettre cette copie ? Elle contient {recipes} de tes propres recettes et {items} articles, et elle remplace tout ce qu'il y a dans l'app en ce moment.",
    toastRestored: "Tout est revenu à sa place",
    toastRestoreFailed: "Ce n'est pas une copie Mijn Kookpot, j'en ai peur",
    seeMyLifeLabel: "Envoyer à SeeMyLife",
    seeMyLifeDesc: "Indique son adresse et chaque changement y part tout seul",
    seeMyLifeBtn: "Envoyer",
    toastSeeMyLifeSent: "Envoyé à SeeMyLife",
    toastSeeMyLifeFailed: "SeeMyLife ne répond pas. Il tourne bien ?",
    // Préférences de courses
    shoppingGroupTitle: "Au magasin",
    skipStaplesLabel: "Laisse de côté les basiques",
    skipStaplesDesc: "Le sel, le poivre et l'huile, tu les as déjà — pas la peine de les noter",
    // Allure
    appearanceGroupTitle: "L'allure",
    themeLabel: "Clair ou sombre",
    themeSystem: "Mon téléphone choisit",
    themeLight: "Toujours clair",
    themeDark: "Toujours sombre",
    // Liste de courses
    allItems: "Tout",
    itemsChecked: "dans le panier",
    exportBtn: "Envoyer la liste",
    exportCopied: "Copié — colle-le où tu veux",
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
  dishes: 'belgian_dishes',
  // Superseded by my dishes; read once to migrate, then removed.
  legacyWeekPlan: 'belgian_week_plan',
  legacyCheckedLines: 'belgian_checked_lines',
  legacySelection: 'belgian_selected_recipes',
  legacySavedRecipes: 'belgian_saved_recipes',
  legacySkippedStaples: 'belgian_skipped_staples',
  legacyRecipes: 'belgian_recipes',
  legacyDbVersion: 'belgian_db_version'
};

/*
 * The allergens a household can keep off the plate. Ids are the group names
 * ingredients.js detects; the list follows the EU's fourteen declared
 * allergens, minus the ones this book's ingredient names cannot tell apart
 * (sulphites, lupin, molluscs — the last is folded into fish).
 */
const ALLERGENS = [
  { id: 'gluten', key: 'allergenGluten' },
  { id: 'nuts', key: 'allergenNuts' },
  { id: 'dairy', key: 'allergenDairy' },
  { id: 'eggs', key: 'allergenEggs' },
  { id: 'fish', key: 'allergenFish' },
  { id: 'soy', key: 'allergenSoy' },
  { id: 'sesame', key: 'allergenSesame' },
  { id: 'celery', key: 'allergenCelery' },
  { id: 'mustard', key: 'allergenMustard' }
];

// In the order the chips stand on the recipe book: the medical and low-carb
// diets first, then the ones about what you will not eat.
const DIETS = [
  { id: 'candida', key: 'dietCandida', flag: 'isCandidaFriendly', icon: '🍋' },
  { id: 'keto', key: 'dietKeto', flag: 'isKeto', icon: '🥑' },
  { id: 'paleo', key: 'dietPaleo', flag: 'isPaleo', icon: '🍖' },
  { id: 'vegetarian', key: 'dietVegetarian', flag: 'isVegetarian', icon: '🥕' },
  { id: 'vegan', key: 'dietVegan', flag: 'isVegan', icon: '🌱' },
  { id: 'pescatarian', key: 'dietPescatarian', flag: 'isPescatarian', icon: '🐟' }
];

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

const RECIPE_CATEGORIES = ['all', 'breakfast', 'main', 'soup', 'snack', 'dessert', 'drink'];
const CATEGORY_ICONS = { all: '🍽️', breakfast: '🥐', main: '🍲', soup: '🥣', snack: '🥨', dessert: '🍰', drink: '🥤' };
const RECIPE_CATEGORY_KEYS = {
  all: 'recipeCategoryAll',
  breakfast: 'recipeCategoryBreakfast',
  main: 'recipeCategoryMain',
  soup: 'recipeCategorySoup',
  snack: 'recipeCategorySnack',
  dessert: 'recipeCategoryDessert',
  drink: 'recipeCategoryDrink'
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
  groceryList: [],      // the shopping list: lines made from my dishes, plus anything typed in
  dishes: [],           // what you mean to cook: { recipeId, servings }
  favorites: [],
  settings: {
    language: 'en',
    theme: 'system',
    householdSize: 4,
    avoid: [],          // allergen ids nobody at the table may eat
    diets: [],          // diet ids every dish must fit
    profileAsked: false,
    seeMyLifeUrl: ''    // e.g. http://localhost:4321; empty = don't send anything
  },
  filters: {
    query: '',
    category: 'all',
    favoritesOnly: false,
    showUnsafe: false   // deliberately not saved: hiding is the safe default
  },
  activeTab: 'recipes',
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
  loadDishes();

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
  if (THEME_CHOICES.indexOf(state.settings.theme) === -1) state.settings.theme = 'system';
  if (typeof state.settings.seeMyLifeUrl !== 'string') state.settings.seeMyLifeUrl = '';
  delete state.settings.skipStaples; // staples now sit in their own group instead
  sanitizeProfile();
  saveSettings();
}

/** Keep the household profile to known ids and a sane head count. */
function sanitizeProfile() {
  const s = state.settings;
  const allergenIds = ALLERGENS.map(a => a.id);
  const dietIds = DIETS.map(d => d.id);
  s.avoid = Array.isArray(s.avoid) ? s.avoid.filter(id => allergenIds.includes(id)) : [];
  s.diets = Array.isArray(s.diets) ? s.diets.filter(id => dietIds.includes(id)) : [];
  s.householdSize = Math.min(20, Math.max(1, parseInt(s.householdSize, 10) || 4));
  s.profileAsked = s.profileAsked === true || s.avoid.length > 0 || s.diets.length > 0;
}

// --- Appearance ---

const THEME_CHOICES = ['system', 'light', 'dark'];

/** The colour the phone paints its status bar with — must track the theme. */
// Must match --bg in each palette in style.css, and the inline pre-paint
// script in index.html, which sets the same thing before this file loads.
const THEME_META = { light: '#F2E9D8', dark: '#101A15' };

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
  scheduleSeeMyLifePush();
}

function saveGroceryList() {
  localStorage.setItem(STORAGE.groceryList, JSON.stringify(state.groceryList));
  scheduleSeeMyLifePush();
}

function saveFavorites() {
  localStorage.setItem(STORAGE.favorites, JSON.stringify(state.favorites));
  scheduleSeeMyLifePush();
}

function saveDishes() {
  localStorage.setItem(STORAGE.dishes, JSON.stringify(state.dishes));
  scheduleSeeMyLifePush();
}

/**
 * Read my dishes, dropping any whose recipe has since been deleted.
 *
 * Before this the app planned a week, and before that it kept a loose
 * selection. Either one still in storage becomes my dishes. The week's list
 * was read live off the week, so it is made into a real list here, with the
 * ticks it had.
 */
function loadDishes() {
  const stored = readJson(STORAGE.dishes, null);
  if (stored) {
    state.dishes = normalizeDishes(stored);
  } else {
    const week = readJson(STORAGE.legacyWeekPlan, null);
    const selection = readJson(STORAGE.legacySelection, null);
    state.dishes = normalizeDishes(week && Array.isArray(week.meals) ? week.meals : selectionToDishes(selection));
    if (week && state.dishes.length) {
      const ticks = readJson(STORAGE.legacyCheckedLines, []);
      buildShoppingList(Array.isArray(ticks) ? ticks.map(id => String(id).replace(/^w:/, 'd:')) : []);
    }
    saveDishes();
  }
  [STORAGE.legacyWeekPlan, STORAGE.legacyCheckedLines, STORAGE.legacySelection,
    STORAGE.legacySavedRecipes, STORAGE.legacySkippedStaples]
    .forEach(key => localStorage.removeItem(key));
}

/** The oldest format: { ids: [...], servings: { id: n } }, or a bare id list. */
function selectionToDishes(legacy) {
  if (!legacy) return [];
  const ids = Array.isArray(legacy) ? legacy : (Array.isArray(legacy.ids) ? legacy.ids : []);
  const servings = (!Array.isArray(legacy) && legacy.servings) || {};
  return ids.map(id => ({ recipeId: id, servings: servings[id] }));
}

/** One entry per recipe that still exists, with a sane plate count. */
function normalizeDishes(raw) {
  const out = [];
  (Array.isArray(raw) ? raw : []).forEach(d => {
    if (!d || typeof d.recipeId !== 'string' || !findRecipe(d.recipeId)) return;
    if (out.some(o => o.recipeId === d.recipeId)) return;
    out.push({
      recipeId: d.recipeId,
      servings: Math.max(1, parseInt(d.servings, 10) || state.settings.householdSize)
    });
  });
  return out;
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
  document.title = dict.appTitle;

  populateAisleSelect(document.getElementById('form-ing-cat-visible'));
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

  const content = document.querySelector('.app-content');
  if (content) content.scrollTop = 0;

  if (tabId === 'grocery') renderGroceryList();
  else if (tabId === 'recipes') renderRecipesList();
  else if (tabId === 'dishes') renderDishesTab();
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

  // First run, and my dishes
  document.getElementById('profile-prompt-done').addEventListener('click', () => {
    state.settings.profileAsked = true;
    saveSettings();
    renderRecipesList();
  });
  document.getElementById('dishes-browse-btn').addEventListener('click', () => switchTab('recipes'));
  document.getElementById('dishes-to-list-btn').addEventListener('click', makeShoppingList);
  document.getElementById('dishes-clear-btn').addEventListener('click', clearDishes);
  document.getElementById('drawer-dish-btn').addEventListener('click', () => {
    if (state.selectedRecipe) toggleDish(state.selectedRecipe.id, state.recipeServings);
  });

  // The household
  document.getElementById('household-minus').addEventListener('click', () => setHouseholdSize(state.settings.householdSize - 1));
  document.getElementById('household-plus').addEventListener('click', () => setHouseholdSize(state.settings.householdSize + 1));

  // The recipe book
  document.getElementById('safety-toggle-btn').addEventListener('click', () => {
    state.filters.showUnsafe = !state.filters.showUnsafe;
    renderRecipeGrid();
  });

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
    if (state.recipeServings > 1) setDrawerServings(state.recipeServings - 1);
  });
  document.getElementById('servings-plus').addEventListener('click', () => {
    setDrawerServings(state.recipeServings + 1);
  });

  document.getElementById('recipe-fav-btn').addEventListener('click', toggleRecipeFavorite);
  document.getElementById('recipe-edit-btn').addEventListener('click', startEditingSelectedRecipe);
  document.getElementById('recipe-delete-btn').addEventListener('click', deleteSelectedRecipe);

  document.getElementById('add-recipe-fab').addEventListener('click', () => openRecipeModal(null));
  document.getElementById('modal-close-btn').addEventListener('click', closeRecipeModal);
  document.getElementById('recipe-cancel-btn').addEventListener('click', closeRecipeModal);
  document.getElementById('custom-recipe-form').addEventListener('submit', handleCustomRecipeSubmit);
  document.getElementById('add-custom-ing-btn').addEventListener('click', addCustomIngredientToBuffer);

  document.getElementById('add-grocery-item-form').addEventListener('submit', handleAddCustomGroceryItem);
  document.getElementById('export-grocery-btn').addEventListener('click', exportGroceryList);

  document.getElementById('reset-data-btn').addEventListener('click', () => {
    if (state.userRecipes.length === 0) return;
    if (confirm(t('confirmResetRecipes'))) {
      const own = state.userRecipes.map(r => r.id);
      state.userRecipes = [];
      saveUserRecipes();
      state.dishes = state.dishes.filter(d => own.indexOf(d.recipeId) === -1);
      saveDishes();
      showToast(t('toastRecipesReset'), 'info');
      renderApp();
    }
  });

  document.getElementById('clear-checked-btn').addEventListener('click', clearCheckedItems);
  document.getElementById('clear-list-btn').addEventListener('click', () => {
    if (state.groceryList.length === 0 || !confirm(t('confirmWipeList'))) return;
    state.groceryList = [];
    saveGroceryList();
    renderGroceryList();
    showToast(t('toastListWiped'), 'info');
  });

  const filterToggle = document.getElementById('recipe-filter-toggle-btn');
  if (filterToggle) {
    filterToggle.addEventListener('click', () => {
      const tray = document.getElementById('recipe-filter-tray');
      const open = tray.hidden;
      tray.hidden = !open;
      filterToggle.classList.toggle('active', open);
      filterToggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.getElementById('backup-btn').addEventListener('click', downloadBackup);

  const seeMyLifeInput = document.getElementById('seemylife-url-input');
  seeMyLifeInput.value = state.settings.seeMyLifeUrl;
  seeMyLifeInput.addEventListener('change', () => {
    state.settings.seeMyLifeUrl = seeMyLifeInput.value.trim().replace(/\/+$/, '');
    seeMyLifeInput.value = state.settings.seeMyLifeUrl;
    saveSettings();
  });
  document.getElementById('seemylife-send-btn').addEventListener('click', () => pushToSeeMyLife(true));

  const restoreInput = document.getElementById('restore-file-input');
  document.getElementById('restore-btn').addEventListener('click', () => restoreInput.click());
  restoreInput.addEventListener('change', e => {
    handleRestoreFile(e.target.files && e.target.files[0]);
    e.target.value = ''; // let the same file be picked twice
  });

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
  renderDishesTab();
  renderRecipesList();
  renderGroceryList();
  renderSettingsTab();
}

// --- Allergies & diets ---
//
// The household profile lives in settings, and everything that shows a dish
// reads it: the book hides what someone cannot eat, suggestions never offer
// it, and the drawer says so in so many words if you open one anyway.

// Keyed by the recipe object, so an edited recipe (a new object) is re-read.
const allergenCache = new WeakMap();

/** Allergen ids found in a recipe's ingredients, in ALLERGENS order. */
function recipeAllergens(recipe) {
  let found = allergenCache.get(recipe);
  if (!found) {
    const groups = window.Ingredients.detectGroups(recipe.ingredients);
    found = ALLERGENS.map(a => a.id).filter(id => groups[id]);
    allergenCache.set(recipe, found);
  }
  return found;
}

/** The allergens in this dish that someone at the table avoids. */
function clashingAllergens(recipe) {
  return recipeAllergens(recipe).filter(id => state.settings.avoid.includes(id));
}

function fitsDiets(recipe) {
  return fitsDietIds(recipe, state.settings.diets);
}

function fitsDietIds(recipe, ids) {
  return ids.every(id => {
    const diet = DIETS.find(d => d.id === id);
    return !diet || recipe[diet.flag] === true;
  });
}

/** The diets a dish fits, as "🍋 Candida · 🥑 Keto". */
function dietsOf(recipe) {
  return DIETS.filter(d => recipe[d.flag] === true);
}

/** Safe for everyone at the table, as far as the ingredient list can tell. */
function suitsTable(recipe) {
  return clashingAllergens(recipe).length === 0 && fitsDiets(recipe);
}

function allergenLabel(id) {
  const a = ALLERGENS.find(x => x.id === id);
  return a ? t(a.key) : id;
}

function allergenList(ids) {
  return ids.map(allergenLabel).join(', ').toLowerCase();
}

/** "gluten, nuts · vegetarian" — what the profile is filtering on. */
function profileSummary() {
  const parts = state.settings.avoid.map(allergenLabel)
    .concat(state.settings.diets.map(id => t(DIETS.find(d => d.id === id).key)));
  return parts.join(', ').toLowerCase();
}

function toggleProfileValue(kind, value) {
  const list = kind === 'diets' ? state.settings.diets : state.settings.avoid;
  const at = list.indexOf(value);
  if (at > -1) list.splice(at, 1);
  else list.push(value);
  saveSettings();
  onProfileChanged();
}

function setHouseholdSize(n) {
  state.settings.householdSize = Math.min(20, Math.max(1, n));
  saveSettings();
  const el = document.getElementById('household-count');
  if (el) el.textContent = state.settings.householdSize;
}

function onProfileChanged() {
  renderProfilePills();
  renderRecipesList(); // redraws the diet chips too
  renderDishesTab();
  if (state.selectedRecipe) renderDrawerAllergens(state.selectedRecipe);
}

/**
 * The allergy pills appear in three places and the diet pills in Settings;
 * they and the diet chips on the recipe book all edit one profile.
 */
function renderProfilePills() {
  document.querySelectorAll('.allergen-pills').forEach(box => {
    const kind = box.dataset.profilePills;
    const options = kind === 'diets' ? DIETS : ALLERGENS;
    const chosen = kind === 'diets' ? state.settings.diets : state.settings.avoid;
    box.innerHTML = options.map(o => {
      const on = chosen.includes(o.id);
      return `<button type="button" class="allergen-pill ${on ? 'active' : ''}" data-kind="${kind}"
                data-value="${o.id}" aria-pressed="${on}">${escapeHtml(t(o.key))}</button>`;
    }).join('');
    box.querySelectorAll('.allergen-pill').forEach(pill => {
      pill.addEventListener('click', () => toggleProfileValue(pill.dataset.kind, pill.dataset.value));
    });
  });

  // The funnel only holds the allergies; the diets have their own row.
  const count = state.settings.avoid.length;
  const badge = document.getElementById('filter-count');
  if (badge) {
    badge.hidden = count === 0;
    badge.textContent = String(count);
  }
}

// --- My dishes ---
//
// What you mean to cook, each with how many plates. Nothing is tied to a day:
// add from the book, take off when cooked, and make the shopping list from
// whatever is here.

function findRecipe(id) {
  return state.recipes.find(r => r.id === id) || null;
}

function dishFor(recipeId) {
  return state.dishes.find(d => d.recipeId === recipeId) || null;
}

function addDish(recipeId, servings) {
  const recipe = findRecipe(recipeId);
  if (!recipe || dishFor(recipeId)) return null;
  const dish = { recipeId: recipeId, servings: Math.max(1, parseInt(servings, 10) || state.settings.householdSize) };
  state.dishes.push(dish);
  saveDishes();

  const name = recipeText(recipe).title;
  const clash = clashingAllergens(recipe);
  if (clash.length) showToast(t('toastDishAddedCareful', { name: name, list: allergenList(clash) }), 'info');
  else showToast(t('toastDishAdded', { name: name }), 'success');
  onDishesChanged();
  return dish;
}

function removeDish(recipeId) {
  const recipe = findRecipe(recipeId);
  if (!dishFor(recipeId)) return;
  state.dishes = state.dishes.filter(d => d.recipeId !== recipeId);
  saveDishes();
  if (recipe) showToast(t('toastDishRemoved', { name: recipeText(recipe).title }), 'info');
  onDishesChanged();
}

function toggleDish(recipeId, servings) {
  if (dishFor(recipeId)) removeDish(recipeId);
  else addDish(recipeId, servings);
}

function setDishServings(recipeId, servings) {
  const dish = dishFor(recipeId);
  if (!dish) return;
  dish.servings = Math.max(1, servings);
  saveDishes();
  onDishesChanged();
}

function clearDishes() {
  if (state.dishes.length === 0 || !confirm(t('confirmClearDishes'))) return;
  state.dishes = [];
  saveDishes();
  onDishesChanged();
}

function onDishesChanged() {
  if (state.activeTab === 'dishes') renderDishesTab();
  if (state.activeTab === 'recipes') renderRecipeGrid();
  if (state.selectedRecipe) renderDrawerDishButton();
  updateTabBadges();
}

function updateTabBadges() {
  const set = (id, n) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.hidden = n === 0;
    el.textContent = String(n);
  };
  set('tab-badge-dishes', state.dishes.length);
  set('tab-badge-grocery', itemsToBuy().length);
}

function renderDishesTab() {
  const list = document.getElementById('dish-list');
  if (!list) return;

  const empty = state.dishes.length === 0;
  document.getElementById('dishes-empty').hidden = !empty;
  document.getElementById('dishes-footer').hidden = empty;
  list.hidden = empty;
  list.innerHTML = state.dishes.map(dishRowHtml).join('');

  list.querySelectorAll('.dish-open').forEach(el => {
    onActivate(el, () => openRecipeDrawer(el.dataset.recipeId));
  });
  list.querySelectorAll('.dish-remove').forEach(btn => {
    btn.addEventListener('click', () => removeDish(btn.dataset.recipeId));
  });
  list.querySelectorAll('.dish-servings button').forEach(btn => {
    btn.addEventListener('click', () => {
      const dish = dishFor(btn.dataset.recipeId);
      if (dish) setDishServings(dish.recipeId, dish.servings + parseInt(btn.dataset.step, 10));
    });
  });

  // Once a list exists, the same button brings it up to date.
  const hasList = state.groceryList.some(i => isDishLine(i.id));
  document.getElementById('dishes-to-list-btn').textContent = hasList ? t('updateListBtn') : t('makeListBtn');
  updateTabBadges();
}

function dishRowHtml(dish) {
  const recipe = findRecipe(dish.recipeId);
  if (!recipe) return '';
  const name = recipeText(recipe).title;
  const clash = clashingAllergens(recipe);
  const id = escapeHtml(recipe.id);
  return `
    <li class="dish-row ${clash.length ? 'has-clash' : ''}">
      <div class="dish-open" data-recipe-id="${id}" role="button" tabindex="0">
        ${photoMarkup(recipe, name, 'dish-img', true)}
        <div class="dish-text">
          <span class="dish-title">${escapeHtml(name)}</span>
          ${clash.length ? `<span class="dish-warn">⚠ ${escapeHtml(allergenList(clash))}</span>` : ''}
        </div>
      </div>
      <div class="dish-servings" aria-label="${escapeHtml(t('mealServings'))}">
        <button type="button" class="servings-btn servings-btn-sm" data-recipe-id="${id}" data-step="-1" aria-label="${escapeHtml(t('mealServings'))} -">-</button>
        <span class="dish-count">${dish.servings}</span>
        <button type="button" class="servings-btn servings-btn-sm" data-recipe-id="${id}" data-step="1" aria-label="${escapeHtml(t('mealServings'))} +">+</button>
      </div>
      <button type="button" class="dish-remove" data-recipe-id="${id}"
              aria-label="${escapeHtml(t('removeDish', { name: name }))}">&times;</button>
    </li>
  `;
}

// --- Recipe book ---

/** One card template for the book: the photo, its name, and a + to add it. */
function recipeCardHtml(recipe) {
  const isFav = state.favorites.includes(recipe.id);
  const added = !!dishFor(recipe.id);
  const name = recipeText(recipe).title;
  const clash = clashingAllergens(recipe);
  const label = added ? t('removeDish', { name: name }) : t('addDish', { name: name });

  return `
    <div class="recipe-card ${added ? 'is-added' : ''}" data-id="${escapeHtml(recipe.id)}"
         role="button" tabindex="0" aria-label="${escapeHtml(name)}">
      <div class="card-plan-btn ${added ? 'added' : ''}" data-id="${escapeHtml(recipe.id)}"
           role="button" tabindex="0" aria-label="${escapeHtml(label)}" aria-pressed="${added}">${added ? '✓' : '+'}</div>
      <div class="recipe-card-img-wrapper">
        ${photoMarkup(recipe, name, 'recipe-card-img', true)}
        ${isFav ? '<span class="recipe-fav-badge">❤️</span>' : ''}
        ${clash.length ? `<span class="recipe-warn-badge">⚠ ${escapeHtml(allergenList(clash))}</span>` : ''}
        <h4 class="recipe-card-title">${escapeHtml(name)}</h4>
      </div>
    </div>
  `;
}

function bindRecipeCards(container) {
  container.querySelectorAll('.recipe-card').forEach(card => {
    const planBtn = card.querySelector('.card-plan-btn');
    if (planBtn) {
      onActivate(planBtn, e => {
        e.stopPropagation();
        toggleDish(card.dataset.id);
      });
    }
    onActivate(card, e => {
      // Enter on the + must not also open the drawer.
      if (e.target && e.target.closest && e.target.closest('.card-plan-btn')) return;
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
        ${CATEGORY_ICONS[cat]} ${escapeHtml(t(RECIPE_CATEGORY_KEYS[cat]))}
      </div>
    `).join('');

    catRow.querySelectorAll('.cat-pill').forEach(pill => {
      onActivate(pill, e => {
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

  // First run: ask about allergies before showing a single dish.
  const prompt = document.getElementById('profile-prompt');
  if (prompt) prompt.hidden = state.settings.profileAsked;
  renderRecipeGrid();
}

/** Recipes matching search, category and favourites — before the profile. */
function browsableRecipes() {
  const f = state.filters;
  return state.recipes.filter(recipe => {
    if (f.favoritesOnly && !state.favorites.includes(recipe.id)) return false;
    if (f.category !== 'all' && !recipeCategories(recipe).includes(f.category)) return false;
    return matchesQuery(recipe, f.query);
  });
}

function filteredRecipes() {
  const browsable = browsableRecipes();
  return state.filters.showUnsafe ? browsable : browsable.filter(suitsTable);
}

function renderSafetyNote(browsable) {
  const note = document.getElementById('safety-note');
  if (!note) return;
  const hidden = browsable.filter(r => !suitsTable(r)).length;
  note.hidden = hidden === 0;
  if (hidden === 0) return;
  document.getElementById('safety-note-text').textContent =
    `🛡 ${t('safetyHidden', { count: hidden, list: profileSummary() })}`;
  document.getElementById('safety-toggle-btn').textContent =
    state.filters.showUnsafe ? t('safetyHideAgain') : t('safetyShowAnyway');
}

/**
 * The diets sit in plain sight above the categories. Each chip says how many
 * dishes you would see with it on, given the search, the category and the
 * allergies — so a tap never lands you on an empty book by surprise.
 */
function renderDietRow(browsable) {
  const row = document.getElementById('diet-row');
  if (!row) return;
  const allergySafe = browsable.filter(r => clashingAllergens(r).length === 0);
  const chosen = state.settings.diets;
  row.setAttribute('aria-label', t('dietRowLabel'));

  row.innerHTML = DIETS.map(d => {
    const on = chosen.includes(d.id);
    const count = allergySafe.filter(r => fitsDietIds(r, on ? chosen : chosen.concat(d.id))).length;
    const name = t(d.key);
    return `<button type="button" class="diet-chip ${on ? 'active' : ''}" data-diet="${d.id}" aria-pressed="${on}"
              aria-label="${escapeHtml(t('dietChipLabel', { diet: name, count: count }))}">
              <span aria-hidden="true">${d.icon}</span> ${escapeHtml(name)}
              <span class="diet-chip-count" aria-hidden="true">${count}</span>
            </button>`;
  }).join('');

  row.querySelectorAll('.diet-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const id = chip.dataset.diet;
      toggleProfileValue('diets', id);
      // The row has just been redrawn: keyboard users keep their place.
      const again = row.querySelector(`[data-diet="${id}"]`);
      if (again) again.focus();
    });
  });
}

function renderRecipeGrid() {
  const container = document.getElementById('recipes-tab-grid');
  if (!container) return;

  const browsable = browsableRecipes();
  renderDietRow(browsable);
  const matches = state.filters.showUnsafe ? browsable : browsable.filter(suitsTable);
  renderSafetyNote(browsable);

  if (matches.length === 0) {
    const message = state.filters.favoritesOnly && state.favorites.length === 0
      ? t('noFavorites')
      : t('noResults');
    container.innerHTML = `<div class="grid-empty">${escapeHtml(message)}</div>`;
    return;
  }

  const shown = matches.slice(0, MAX_RENDERED_CARDS);
  let html = shown.map(r => recipeCardHtml(r)).join('');
  if (matches.length > shown.length) {
    html += `<div class="grid-empty">${escapeHtml(t('showingCount', { shown: shown.length, total: matches.length }))}</div>`;
  }

  container.innerHTML = html;
  bindRecipeCards(container);
}

function renderSettingsTab() {
  const langSelect = document.getElementById('language-select');
  if (langSelect) langSelect.value = state.settings.language;
  const household = document.getElementById('household-count');
  if (household) household.textContent = state.settings.householdSize;

  renderProfilePills();
  applyTheme();
}

// --- Grocery list building ---

function newItemId() {
  return 'item-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
}

/** A line made from my dishes is known by what it is, so its tick survives a remake. */
function dishLineId(key, unit) {
  return `d:${key}|${unit || ''}`;
}

function isDishLine(id) {
  return String(id).indexOf('d:') === 0;
}

/**
 * Merge a batch of scaled ingredients into a list of lines.
 *
 * Matching is by canonical ingredient key, not by display name, so "garlic"
 * and "garlic cloves" land on one line. An ingredient that already exists in a
 * different unit is added as its own row instead of being silently dropped.
 */
function mergeIngredients(lines, ingredients, sourceTitle) {
  const Ing = window.Ingredients;

  ingredients.forEach(ing => {
    const key = ing.key || Ing.keyOf(ingredientName(ing));
    const staple = typeof ing.staple === 'boolean' ? ing.staple : Ing.isStaple(ingredientName(ing), ing.category);
    const existing = lines.find(item => item.key === key && item.unit === ing.unit);

    if (existing) {
      if (typeof existing.amount === 'number' && typeof ing.amount === 'number') {
        existing.amount = Ing.roundAmount(existing.amount + ing.amount, existing.unit);
      } else if (existing.amount === null && typeof ing.amount === 'number') {
        existing.amount = ing.amount;
      }
      if (sourceTitle && existing.sources.indexOf(sourceTitle) === -1) existing.sources.push(sourceTitle);
    } else {
      lines.push({
        id: dishLineId(key, ing.unit),
        key: key,
        name: ingredientName(ing),
        amount: typeof ing.amount === 'number' ? ing.amount : null,
        unit: ing.unit,
        category: ing.category || Ing.DEFAULT_AISLE,
        staple: staple,
        sources: sourceTitle ? [sourceTitle] : [],
        checked: false
      });
    }
  });

  return lines;
}

/**
 * Make the list from my dishes: everything they need, merged and scaled.
 * Lines already ticked stay ticked, and anything typed in by hand stays put.
 */
function buildShoppingList(ticked) {
  const keepTicked = ticked || state.groceryList.filter(i => i.checked).map(i => i.id);
  const lines = [];
  state.dishes.forEach(dish => {
    const recipe = findRecipe(dish.recipeId);
    if (!recipe) return;
    mergeIngredients(lines, scaledIngredients(recipe, dish.servings), recipeText(recipe).title);
  });
  lines.forEach(line => { line.checked = keepTicked.indexOf(line.id) > -1; });
  state.groceryList = lines.concat(state.groceryList.filter(i => !isDishLine(i.id)));
  saveGroceryList();
}

function makeShoppingList() {
  if (state.dishes.length === 0) return;
  buildShoppingList();
  showToast(t('toastListMade', { count: itemsToBuy().length }), 'success');
  switchTab('grocery');
}

function clearCheckedItems() {
  if (!state.groceryList.some(i => i.checked)) return;
  state.groceryList = state.groceryList.filter(i => !i.checked);
  saveGroceryList();
  renderGroceryList();
  showToast(t('toastClearedChecked'), 'info');
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

// --- Recipe Detail Drawer (Bottom sheet) ---
function openRecipeDrawer(recipeId) {
  const recipe = findRecipe(recipeId);
  if (!recipe) return;

  state.selectedRecipe = recipe;
  // A dish already in my dishes opens at its plates; anything else at the
  // size of the household.
  const dish = dishFor(recipeId);
  state.recipeServings = dish ? dish.servings : state.settings.householdSize;

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
  renderSourceCredit(recipe);
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

  renderDrawerAllergens(recipe);
  renderDrawerDishButton();
  updateScaledIngredients();
  renderRecipeInstructions(trans.instructions);

  document.getElementById('drawer-backdrop').classList.add('active');
  const drawer = document.getElementById('recipe-drawer');
  drawer.classList.add('active');
  trapFocus(drawer);
}

/** The warning for the table, then the plain facts for anyone else. */
function renderDrawerAllergens(recipe) {
  const warning = document.getElementById('drawer-allergy-warning');
  const contains = document.getElementById('drawer-contains');
  const clash = clashingAllergens(recipe);
  const all = recipeAllergens(recipe);

  warning.hidden = clash.length === 0;
  warning.textContent = clash.length ? `⚠ ${t('allergyWarning', { list: allergenList(clash) })}` : '';
  contains.textContent = all.length ? t('containsLabel', { list: allergenList(all) }) : t('containsNone');

  const diets = document.getElementById('drawer-diets');
  if (diets) {
    const fits = dietsOf(recipe);
    diets.hidden = fits.length === 0;
    diets.textContent = fits.length ? t('dietsFit', { list: fits.map(d => `${d.icon} ${t(d.key)}`).join(' · ') }) : '';
  }

  if (state.selectedRecipe === recipe) updateScaledIngredients();
}

/** The drawer's one button: add this dish, or show that it is already in. */
function renderDrawerDishButton() {
  const btn = document.getElementById('drawer-dish-btn');
  const recipe = state.selectedRecipe;
  if (!btn || !recipe) return;
  const added = !!dishFor(recipe.id);
  btn.textContent = added ? t('drawerAddedBtn') : t('drawerAddBtn');
  btn.classList.toggle('added', added);
  btn.setAttribute('aria-pressed', String(added));
}

/** The drawer's servings stepper also resizes the dish if it is in my dishes. */
function setDrawerServings(n) {
  state.recipeServings = Math.max(1, n);
  updateScaledIngredients();
  const recipe = state.selectedRecipe;
  const dish = recipe && dishFor(recipe.id);
  if (dish && dish.servings !== state.recipeServings) setDishServings(recipe.id, state.recipeServings);
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

/** Where a recipe came from, linked: the candida dishes are written after thecandidadiet.com's. */
function renderSourceCredit(recipe) {
  const el = document.getElementById('drawer-source');
  if (!el) return;
  const match = /^https?:\/\/(?:www\.)?([^/?#]+)/i.exec(recipe.sourceUrl || '');
  const site = match ? match[1] : '';
  el.hidden = !site;
  if (!site) {
    el.innerHTML = '';
    return;
  }
  // The site name sits wherever the translation puts {site}, as a link.
  const [before, after] = t('sourceCredit', { site: '|' }).split('|');
  el.innerHTML = `${escapeHtml(before)}<a href="${escapeHtml(recipe.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(site)}</a>${escapeHtml(after || '')}`;
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

  const avoid = state.settings.avoid;
  const items = scaledIngredients(state.selectedRecipe, state.recipeServings);

  // Point at the exact line that someone at the table cannot eat.
  container.innerHTML = items.map(ing => {
    const groups = avoid.length ? window.Ingredients.detectGroups([ing]) : {};
    const clash = avoid.filter(id => groups[id]);
    return `
      <div class="ingredient-row ${ing.staple ? 'is-staple' : ''} ${clash.length ? 'is-allergen' : ''}">
        <span class="ingredient-name">${clash.length ? '⚠ ' : ''}${escapeHtml(ingredientName(ing))}</span>
        <span class="ingredient-qty">${escapeHtml(formatQuantity(ing.amount, ing.unit))}</span>
      </div>
    `;
  }).join('');
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
}

// --- Grocery List Checklist ---
//
// The list is made from my dishes with one button, then it is yours: tick
// lines off, delete them, clear what is in the basket. Making it again picks
// up changed dishes and keeps the ticks and anything you typed in.

function shoppingItems() {
  return state.groceryList;
}

/** Lines still worth walking to: unticked, and not a cupboard basic. */
function itemsToBuy(items) {
  return (items || shoppingItems()).filter(i => !i.checked && !i.staple);
}

function renderGroceryList() {
  const container = document.getElementById('grocery-list-container');
  if (!container) return;

  const items = shoppingItems();
  const footer = document.getElementById('grocery-list-footer');
  if (footer) footer.hidden = items.length === 0;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="list-empty">
        <span class="list-empty-icon">📋</span>
        <h4>${escapeHtml(t('emptyListHeader'))}</h4>
        <p>${escapeHtml(t('emptyListDesc'))}</p>
        <button type="button" class="btn-small btn-primary list-empty-btn" data-goto="dishes">${escapeHtml(t('dishesTab'))}</button>
      </div>
    `;
    container.querySelectorAll('[data-goto]').forEach(btn => {
      btn.addEventListener('click', () => switchTab('dishes'));
    });
    updateProgressHeader(items);
    updateTabBadges();
    return;
  }

  // Cupboard basics get their own group at the very end, so salt and oil
  // never sit between you and the onions.
  const CUPBOARD = '__cupboard';
  const groups = {};
  items.forEach(item => {
    const cat = item.staple ? CUPBOARD : (item.category || window.Ingredients.DEFAULT_AISLE);
    (groups[cat] = groups[cat] || []).push(item);
  });

  const order = window.Ingredients.AISLES.concat([CUPBOARD]);
  const rank = cat => (order.indexOf(cat) === -1 ? order.length - 1.5 : order.indexOf(cat));
  const sortedCategories = Object.keys(groups).sort((a, b) => rank(a) - rank(b));

  container.innerHTML = sortedCategories.map(cat => {
    const isCupboard = cat === CUPBOARD;
    // What is already in the basket sinks to the bottom of its aisle.
    const rows = groups[cat].slice().sort((a, b) => Number(a.checked) - Number(b.checked));
    return `
      <div class="grocery-category-block ${isCupboard ? 'grocery-cupboard' : ''}">
        <h4 class="category-header" data-category="${escapeHtml(cat)}">
          <span class="category-dot"></span>
          <span>${escapeHtml(isCupboard ? t('cupboardGroup') : aisleLabel(cat))}</span>
        </h4>
        <div class="grocery-list-items">
          ${rows.map(groceryItemHtml).join('')}
        </div>
      </div>
    `;
  }).join('');

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
    btn.addEventListener('click', () => deleteGroceryItem(btn.dataset.id));
  });

  updateProgressHeader(items);
  updateTabBadges();
}

function groceryItemHtml(item) {
  const qty = formatQuantity(item.amount, item.unit);
  const sources = (item.sources || []).join(', ');
  return `
    <div class="grocery-item" data-id="${escapeHtml(item.id)}">
      <div class="checkbox-wrapper ${item.checked ? 'checked' : ''}">
        <input type="checkbox" ${item.checked ? 'checked' : ''} data-id="${escapeHtml(item.id)}"
               aria-label="${escapeHtml(item.name)}">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <div class="item-details ${item.checked ? 'checked' : ''}">
        <span class="item-name">${escapeHtml(item.name)}</span>
        ${qty ? `<span class="item-qty">${escapeHtml(qty)}</span>` : ''}
        ${sources ? `<span class="item-source">${escapeHtml(t('fromRecipes'))} ${escapeHtml(sources)}</span>` : ''}
      </div>
      <button type="button" class="item-delete-btn" data-id="${escapeHtml(item.id)}"
              aria-label="${escapeHtml(t('removeItem', { name: item.name }))}">&times;</button>
    </div>
  `;
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
  const checked = item.checked;
  saveGroceryList();

  // Updated in place rather than re-rendered, so the line does not jump out
  // from under your thumb in the middle of the shop.
  const itemEl = document.querySelector(`.grocery-item[data-id="${id}"]`);
  if (itemEl) {
    itemEl.querySelector('.checkbox-wrapper').classList.toggle('checked', checked);
    itemEl.querySelector('.item-details').classList.toggle('checked', checked);
  }
  updateProgressHeader();
  updateTabBadges();
}

function deleteGroceryItem(id) {
  state.groceryList = state.groceryList.filter(i => i.id !== id);
  saveGroceryList();
  renderGroceryList();
}

// Units you might type in front of a name: "500g bloem", "2 kg aardappelen".
// Anything else in that position is part of the name — "2 rode uien" is two
// red onions, not two of a unit called "rode".
const TYPED_UNIT_RE = /^(\d+(?:[.,]\d+)?)\s*(kg|g|ml|cl|dl|l|st\.?|stuks?|pcs|x)?\s+(.+)$/i;

function handleAddCustomGroceryItem(e) {
  e.preventDefault();
  const input = document.getElementById('new-grocery-item-input');

  if (!input.value.trim()) return;

  let name = input.value.trim();
  let amount = null;
  let unit = '';
  const match = name.match(TYPED_UNIT_RE);
  if (match) {
    amount = parseFloat(match[1].replace(',', '.'));
    unit = match[2] && !/^(st\.?|stuks?|pcs|x)$/i.test(match[2]) ? match[2].toLowerCase() : 'st.';
    name = match[3];
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
    category: window.Ingredients.aisleFor(name),
    staple: false,
    sources: [],
    checked: false
  });

  saveGroceryList();
  renderGroceryList();

  input.value = '';
  showToast(t('toastItemAdded', { name: name }), 'success');
}

/** Plain-text list for the share sheet / clipboard. */
function groceryListAsText() {
  const order = window.Ingredients.AISLES;
  const groups = {};
  const cupboard = [];
  shoppingItems().forEach(item => {
    if (item.staple) { cupboard.push(item); return; }
    const cat = item.category || window.Ingredients.DEFAULT_AISLE;
    (groups[cat] = groups[cat] || []).push(item);
  });

  const line = item => {
    const qty = formatQuantity(item.amount, item.unit);
    return `${item.checked ? '[x]' : '[ ]'} ${item.name}${qty ? ' — ' + qty : ''}`;
  };

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
      groups[cat].forEach(item => lines.push(line(item)));
    });

  if (cupboard.length) {
    lines.push('');
    lines.push(`${t('cupboardGroup')} (${t('cupboardHint')})`);
    cupboard.forEach(item => lines.push(line(item)));
  }

  return lines.join('\n');
}

async function exportGroceryList() {
  if (shoppingItems().length === 0) return;
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

function updateProgressHeader(items) {
  const all = items || shoppingItems();
  const total = all.length;
  const checked = all.filter(i => i.checked).length;
  const textEl = document.getElementById('grocery-progress-text');
  const barEl = document.getElementById('grocery-progress-fill');
  const bar = document.getElementById('grocery-progress-bar');

  const percentage = total === 0 ? 0 : Math.round((checked / total) * 100);
  if (textEl) textEl.textContent = total === 0 ? '' : t('progressText', { checked: checked, total: total });
  if (barEl) barEl.style.width = `${percentage}%`;
  if (bar) {
    bar.hidden = total === 0;
    bar.setAttribute('aria-valuenow', String(percentage));
    bar.setAttribute('aria-valuetext', `${checked} / ${total}`);
  }
}

// --- Backup & restore ---
//
// Everything you own lives in this browser's localStorage. Clearing site data,
// switching phones or an OS storage eviction would take it all with no copy
// anywhere, so it has to be exportable.

// Format 3 carries my dishes and the whole list. Older files still restore:
// a format 2 week or a format 1 selection becomes my dishes.
const BACKUP_FORMAT = 3;

function buildBackup() {
  return {
    format: BACKUP_FORMAT,
    app: 'mijn-kookpot',
    exportedAt: new Date().toISOString(),
    settings: state.settings,
    userRecipes: state.userRecipes,
    groceryList: state.groceryList,
    favorites: state.favorites,
    dishes: state.dishes
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

// --- SeeMyLife ---
//
// SeeMyLife (a dashboard on the PC) shows the list and my dishes. With its
// address filled in, every change is posted there a moment later; nothing is
// sent while the field is empty, so the family's phones never send anything.

let seeMyLifeTimer = null;

function scheduleSeeMyLifePush() {
  if (!state.settings.seeMyLifeUrl) return;
  clearTimeout(seeMyLifeTimer);
  seeMyLifeTimer = setTimeout(() => pushToSeeMyLife(false), 2000);
}

/** Loud when tapped by hand; quiet in the background, where the PC may simply be off. */
async function pushToSeeMyLife(loud) {
  const base = state.settings.seeMyLifeUrl;
  if (!base) {
    if (loud) document.getElementById('seemylife-url-input').focus();
    return;
  }
  try {
    const response = await fetch(`${base}/api/push/shopperz`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(buildBackup())
    });
    if (!response.ok) throw new Error(`SeeMyLife answered ${response.status}`);
    if (loud) showToast(t('toastSeeMyLifeSent'), 'success');
  } catch (err) {
    console.warn('Sending to SeeMyLife failed', err);
    if (loud) showToast(t('toastSeeMyLifeFailed'), 'info');
  }
}

/** Accepts a parsed backup object, returns true when it was applied. */
function applyBackup(data) {
  if (!data || typeof data !== 'object' || data.app !== 'mijn-kookpot' || !Array.isArray(data.userRecipes)) {
    return false;
  }

  state.userRecipes = data.userRecipes;
  rebuildRecipeIndex(); // my dishes below may point at restored recipes
  state.groceryList = Array.isArray(data.groceryList) ? data.groceryList : [];
  state.favorites = Array.isArray(data.favorites) ? data.favorites : [];
  if (data.settings && typeof data.settings === 'object') {
    state.settings = Object.assign({}, state.settings, data.settings);
    sanitizeProfile();
  }

  if (Array.isArray(data.dishes)) {
    state.dishes = normalizeDishes(data.dishes);
  } else if (data.weekPlan && Array.isArray(data.weekPlan.meals)) {
    // A format 2 list held only typed-in items; the rest was read off the week.
    state.dishes = normalizeDishes(data.weekPlan.meals);
    const ticks = Array.isArray(data.checkedLines) ? data.checkedLines : [];
    buildShoppingList(ticks.map(id => String(id).replace(/^w:/, 'd:')));
  } else {
    state.dishes = normalizeDishes(selectionToDishes({ ids: data.selectedRecipes, servings: data.selectedServings }));
  }

  saveUserRecipes();
  saveGroceryList();
  saveFavorites();
  saveDishes();
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
  state.dishes = state.dishes.filter(d => d.recipeId !== id);
  saveUserRecipes();
  saveFavorites();
  saveDishes();

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
  renderDishesTab(); // an edited dish may already be in my dishes
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
