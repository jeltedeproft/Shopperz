// --- Translation Dictionaries ---
// The interface talks the way the recipes do: like someone who has cooked
// this before and is glad you asked. Second person, no system vocabulary —
// nothing here says "configure", "generate" or "invalid". The French uses
// "tu" throughout for the same reason.
const uiTranslations = {
  en: {
    appTitle: "Mijn Kookpot",
    appSubtitle: "Belgian home cooking, and the shopping to go with it",
    weekTab: "Week",
    recipes: "Recipes",
    checklist: "Shopping",
    settings: "Settings",
    searchPlaceholder: "What do you feel like cooking?",
    // The week
    weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    weekdaysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    weekTitle: "This week",
    todayLabel: "Today",
    weekSummary: "{planned} of 7 days planned",
    weekSummaryNone: "Nothing planned yet — start with any day",
    fillWeekBtn: "🎲 Fill the empty days",
    toastWeekFilled: "{count} days filled — swap any you don't fancy",
    toastWeekFull: "Every day from today on already has a dish",
    toastNothingFits: "Nothing in the book fits your table's allergies and diet, I'm afraid",
    clearWeekBtn: "Clear the week",
    confirmClearWeek: "Take every dish off this week?",
    toastWeekCleared: "A clean week",
    staleWeekText: "This is still last week's menu.",
    staleWeekFresh: "Start a fresh week",
    staleWeekKeep: "Keep these dishes",
    pickDishBtn: "+ Choose a dish",
    surpriseDayBtn: "Surprise me",
    addAnotherBtn: "+ Another dish",
    removeMeal: "Take {name} off {day}",
    mealServings: "Plates",
    pickingFor: "Choosing a dish for {day} — tap + on the one you want",
    toastPlanned: "{name} — on {day}",
    toastUnplanned: "Taken off {day}",
    toastPlannedCareful: "{name} — on {day}. Careful: it has {list}",
    planOnLabel: "Cook it on…",
    planStatusOn: "On {days}",
    planStatusNone: "Not on the week yet — tap a day",
    addToWeek: "Put {name} on the week",
    plannedFor: "On {day} — tap to see it",
    toListBtn: "Shopping list · {count} to buy",
    toListEmpty: "Shopping list",
    // The household
    tableGroupTitle: "At your table",
    householdLabel: "How many of you eat?",
    householdDesc: "Every dish you plan starts at this many plates",
    avoidLabel: "Keep off the plate",
    avoidDesc: "Dishes with these are left out of the book and the suggestions, and flagged if you look anyway",
    dietDesc: "Only show dishes that fit",
    profilePromptTitle: "Before we start: does anyone at your table avoid something?",
    profilePromptDesc: "Tap what to keep off the plate. I'll leave those dishes out everywhere — you can change it later in Settings.",
    profilePromptDone: "That's everyone",
    profileStrip: "Leaving out: {list}",
    profileStripNone: "No allergies set — tap to add some",
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
    groceryFromWeek: "For {count} dishes this week, in the order you walk the shop",
    customItemPlaceholder: "Something else? 2 witloof, say…",
    emptyListHeader: "Nothing on the list yet",
    emptyListDesc: "Put a few dinners on the week and everything they need lands here",
    planWeekBtn: "Plan my week",
    cupboardGroup: "🏠 Probably at home already",
    cupboardHint: "Only buy these if you've run out",
    progressText: "{checked} of {total} in the basket",
    removeItem: "Take {name} off the list",
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
    weekTab: "Week",
    recipes: "Recepten",
    checklist: "Boodschappen",
    settings: "Instellingen",
    searchPlaceholder: "Waar heb je zin in?",
    // De week
    weekdays: ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"],
    weekdaysShort: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
    weekTitle: "Deze week",
    todayLabel: "Vandaag",
    weekSummary: "{planned} van de 7 dagen gepland",
    weekSummaryNone: "Nog niets gepland — begin met eender welke dag",
    fillWeekBtn: "🎲 Vul de lege dagen",
    toastWeekFilled: "{count} dagen gevuld — wissel gerust wat je niet ziet zitten",
    toastWeekFull: "Elke dag vanaf vandaag heeft al een gerecht",
    toastNothingFits: "Niets in het boek past bij de allergieën en het dieet van je tafel, vrees ik",
    clearWeekBtn: "Week leegmaken",
    confirmClearWeek: "Alle gerechten van deze week halen?",
    toastWeekCleared: "Een propere week",
    staleWeekText: "Dit is nog het menu van vorige week.",
    staleWeekFresh: "Begin een nieuwe week",
    staleWeekKeep: "Deze gerechten houden",
    pickDishBtn: "+ Kies een gerecht",
    surpriseDayBtn: "Verras me",
    addAnotherBtn: "+ Nog een gerecht",
    removeMeal: "{name} van {day} halen",
    mealServings: "Borden",
    pickingFor: "Je kiest een gerecht voor {day} — tik op + bij het gerecht dat je wil",
    toastPlanned: "{name} — op {day}",
    toastUnplanned: "Van {day} gehaald",
    toastPlannedCareful: "{name} — op {day}. Opgelet: er zit {list} in",
    planOnLabel: "Klaarmaken op…",
    planStatusOn: "Op {days}",
    planStatusNone: "Nog niet ingepland — tik op een dag",
    addToWeek: "{name} op de week zetten",
    plannedFor: "Op {day} — tik om te bekijken",
    toListBtn: "Boodschappenlijstje · {count} te kopen",
    toListEmpty: "Boodschappenlijstje",
    // Het gezin
    tableGroupTitle: "Aan jouw tafel",
    householdLabel: "Met hoeveel eten jullie?",
    householdDesc: "Elk gerecht dat je plant begint met zoveel borden",
    avoidLabel: "Niet op het bord",
    avoidDesc: "Gerechten hiermee blijven uit het boek en de suggesties, en krijgen een waarschuwing als je toch kijkt",
    dietDesc: "Toon alleen gerechten die passen",
    profilePromptTitle: "Eerst even: moet iemand aan je tafel iets vermijden?",
    profilePromptDesc: "Tik aan wat niet op het bord mag. Ik laat die gerechten overal weg — je kan het later nog aanpassen bij Instellingen.",
    profilePromptDone: "Dat is iedereen",
    profileStrip: "Weggelaten: {list}",
    profileStripNone: "Geen allergieën ingesteld — tik om toe te voegen",
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
    groceryFromWeek: "Voor {count} gerechten deze week, in de volgorde van de winkel",
    customItemPlaceholder: "Nog iets? 2 witloof bijvoorbeeld…",
    emptyListHeader: "Nog niets op het lijstje",
    emptyListDesc: "Zet een paar avondmalen op de week en alles wat ze nodig hebben komt hier",
    planWeekBtn: "Plan mijn week",
    cupboardGroup: "🏠 Heb je waarschijnlijk al",
    cupboardHint: "Koop deze alleen als ze op zijn",
    progressText: "{checked} van {total} in de kar",
    removeItem: "{name} van het lijstje halen",
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
    weekTab: "Semaine",
    recipes: "Recettes",
    checklist: "Courses",
    settings: "Réglages",
    searchPlaceholder: "Tu as envie de quoi ?",
    // La semaine
    weekdays: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    weekdaysShort: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    weekTitle: "Cette semaine",
    todayLabel: "Aujourd'hui",
    weekSummary: "{planned} jours sur 7 au menu",
    weekSummaryNone: "Rien au menu pour l'instant — commence par n'importe quel jour",
    fillWeekBtn: "🎲 Remplir les jours vides",
    toastWeekFilled: "{count} jours remplis — change ceux qui ne te disent rien",
    toastWeekFull: "Chaque jour à partir d'aujourd'hui a déjà un plat",
    toastNothingFits: "Rien dans le livre ne convient aux allergies et au régime de ta table, j'en ai peur",
    clearWeekBtn: "Vider la semaine",
    confirmClearWeek: "Retirer tous les plats de cette semaine ?",
    toastWeekCleared: "Une semaine toute propre",
    staleWeekText: "C'est encore le menu de la semaine passée.",
    staleWeekFresh: "Commencer une nouvelle semaine",
    staleWeekKeep: "Garder ces plats",
    pickDishBtn: "+ Choisir un plat",
    surpriseDayBtn: "Surprends-moi",
    addAnotherBtn: "+ Un autre plat",
    removeMeal: "Retirer {name} du {day}",
    mealServings: "Assiettes",
    pickingFor: "Tu choisis un plat pour {day} — touche le + de celui que tu veux",
    toastPlanned: "{name} — le {day}",
    toastUnplanned: "Retiré du {day}",
    toastPlannedCareful: "{name} — le {day}. Attention : il y a {list}",
    planOnLabel: "À cuisiner le…",
    planStatusOn: "Le {days}",
    planStatusNone: "Pas encore au menu — touche un jour",
    addToWeek: "Mettre {name} au menu",
    plannedFor: "Le {day} — touche pour voir",
    toListBtn: "Liste de courses · {count} à acheter",
    toListEmpty: "Liste de courses",
    // La maisonnée
    tableGroupTitle: "À ta table",
    householdLabel: "Vous êtes combien à manger ?",
    householdDesc: "Chaque plat que tu prévois commence avec autant d'assiettes",
    avoidLabel: "Pas dans l'assiette",
    avoidDesc: "Les plats qui en contiennent restent hors du livre et des suggestions, et sont signalés si tu regardes quand même",
    dietDesc: "Ne montrer que les plats qui conviennent",
    profilePromptTitle: "Avant de commencer : quelqu'un à ta table doit-il éviter quelque chose ?",
    profilePromptDesc: "Touche ce qui ne doit pas finir dans l'assiette. Je laisse ces plats de côté partout — tu pourras changer ça plus tard dans les Réglages.",
    profilePromptDone: "C'est tout le monde",
    profileStrip: "Laissé de côté : {list}",
    profileStripNone: "Aucune allergie indiquée — touche pour en ajouter",
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
    groceryFromWeek: "Pour {count} plats cette semaine, dans l'ordre du magasin",
    customItemPlaceholder: "Autre chose ? 2 chicons, tiens…",
    emptyListHeader: "Rien sur la liste pour l'instant",
    emptyListDesc: "Mets quelques dîners au menu de la semaine et tout ce qu'il leur faut arrive ici",
    planWeekBtn: "Planifier ma semaine",
    cupboardGroup: "🏠 Sans doute déjà à la maison",
    cupboardHint: "À n'acheter que s'il n'y en a plus",
    progressText: "{checked} sur {total} dans le panier",
    removeItem: "Retirer {name} de la liste",
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
  weekPlan: 'belgian_week_plan',
  checkedLines: 'belgian_checked_lines',
  // Superseded by the week plan; read once to migrate, then removed.
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

const DIETS = [
  { id: 'vegetarian', key: 'dietVegetarian', flag: 'isVegetarian' },
  { id: 'vegan', key: 'dietVegan', flag: 'isVegan' },
  { id: 'keto', key: 'dietKeto', flag: 'isKeto' },
  { id: 'candida', key: 'dietCandida', flag: 'isCandidaFriendly' }
];

const DAYS_IN_WEEK = 7;

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
  groceryList: [],      // things you added by hand; the rest comes from the week
  checkedLines: [],     // ticked lines that come from the week, by line id
  weekPlan: { weekStart: '', meals: [] },
  pickingDay: null,     // set while choosing a dish for one day of the week
  favorites: [],
  settings: {
    language: 'en',
    theme: 'system',
    householdSize: 4,
    avoid: [],          // allergen ids nobody at the table may eat
    diets: [],          // diet ids every dish must fit
    profileAsked: false
  },
  filters: {
    query: '',
    category: 'all',
    favoritesOnly: false,
    showUnsafe: false   // deliberately not saved: hiding is the safe default
  },
  activeTab: 'week',
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
  state.checkedLines = readJson(STORAGE.checkedLines, []);
  loadWeekPlan();
  state.pickingDay = null;

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
}

function saveGroceryList() {
  localStorage.setItem(STORAGE.groceryList, JSON.stringify(state.groceryList));
  localStorage.setItem(STORAGE.checkedLines, JSON.stringify(state.checkedLines));
}

function saveFavorites() {
  localStorage.setItem(STORAGE.favorites, JSON.stringify(state.favorites));
}

function saveWeekPlan() {
  localStorage.setItem(STORAGE.weekPlan, JSON.stringify(state.weekPlan));
}

/**
 * Read the week, dropping any dish whose recipe has since been deleted.
 *
 * Before the week existed, "plan these" was a loose selection of recipes with
 * a servings count each. A selection still sitting in storage is laid out
 * over the coming days rather than thrown away.
 */
function loadWeekPlan() {
  const stored = readJson(STORAGE.weekPlan, null);
  state.weekPlan = normalizeWeekPlan(stored);

  const legacy = readJson(STORAGE.legacySelection, null);
  if (!stored && legacy) {
    const ids = Array.isArray(legacy) ? legacy : (Array.isArray(legacy.ids) ? legacy.ids : []);
    const servings = (!Array.isArray(legacy) && legacy.servings) || {};
    ids.filter(id => findRecipe(id)).forEach(id => {
      state.weekPlan.meals.push(newMeal(id, nextFreeDay(), servings[id]));
    });
    saveWeekPlan();
  }
  [STORAGE.legacySelection, STORAGE.legacySavedRecipes, STORAGE.legacySkippedStaples]
    .forEach(key => localStorage.removeItem(key));

  // An empty plan simply follows the calendar; a full one waits to be asked.
  if (state.weekPlan.meals.length === 0) state.weekPlan.weekStart = currentWeekStart();
}

function normalizeWeekPlan(raw) {
  const plan = { weekStart: currentWeekStart(), meals: [] };
  if (!raw || typeof raw !== 'object') return plan;
  if (typeof raw.weekStart === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(raw.weekStart)) {
    plan.weekStart = raw.weekStart;
  }
  if (Array.isArray(raw.meals)) {
    plan.meals = raw.meals.filter(m =>
      m && typeof m.recipeId === 'string' && findRecipe(m.recipeId) &&
      Number.isInteger(m.day) && m.day >= 0 && m.day < DAYS_IN_WEEK
    ).map(m => ({
      id: typeof m.id === 'string' ? m.id : newItemId(),
      recipeId: m.recipeId,
      day: m.day,
      servings: Math.max(1, parseInt(m.servings, 10) || state.settings.householdSize)
    }));
  }
  return plan;
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
  // Choosing a dish for one day ends the moment you go somewhere else.
  if (tabId !== 'recipes') state.pickingDay = null;

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
  else if (tabId === 'week') renderWeekTab();
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

  // The week
  document.getElementById('profile-prompt-done').addEventListener('click', () => {
    state.settings.profileAsked = true;
    saveSettings();
    renderWeekTab();
  });
  document.getElementById('week-profile-strip').addEventListener('click', () => switchTab('settings'));
  document.getElementById('week-start-fresh').addEventListener('click', startFreshWeek);
  document.getElementById('week-keep').addEventListener('click', keepLastWeek);
  document.getElementById('week-fill-btn').addEventListener('click', fillEmptyDays);
  document.getElementById('week-to-list-btn').addEventListener('click', () => switchTab('grocery'));
  document.getElementById('week-clear-btn').addEventListener('click', clearWeek);

  // The household
  document.getElementById('household-minus').addEventListener('click', () => setHouseholdSize(state.settings.householdSize - 1));
  document.getElementById('household-plus').addEventListener('click', () => setHouseholdSize(state.settings.householdSize + 1));

  // The recipe book
  document.getElementById('picking-cancel-btn').addEventListener('click', () => {
    stopPicking();
    switchTab('week');
  });
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
      state.weekPlan.meals = state.weekPlan.meals.filter(m => own.indexOf(m.recipeId) === -1);
      saveWeekPlan();
      showToast(t('toastRecipesReset'), 'info');
      renderApp();
    }
  });

  document.getElementById('reset-list-btn').addEventListener('click', () => {
    if (confirm(t('confirmWipeList'))) {
      state.groceryList = [];
      state.checkedLines = [];
      saveGroceryList();
      renderGroceryList();
      showToast(t('toastListWiped'), 'info');
    }
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
  renderWeekTab();
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
  return state.settings.diets.every(id => {
    const diet = DIETS.find(d => d.id === id);
    return !diet || recipe[diet.flag] === true;
  });
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
  renderRecipesList();
  renderWeekTab();
  if (state.selectedRecipe) renderDrawerAllergens(state.selectedRecipe);
}

/** The allergy and diet pills appear in three places; all edit one profile. */
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

  const count = state.settings.avoid.length + state.settings.diets.length;
  const badge = document.getElementById('filter-count');
  if (badge) {
    badge.hidden = count === 0;
    badge.textContent = String(count);
  }
}

// --- The week ---
//
// A week runs Monday to Sunday, the way a Belgian calendar prints it. Each
// planned dish is a meal: a recipe, a day, and how many plates. A day can
// hold more than one dish — soup and a main, say.

function pad2(n) {
  return String(n).padStart(2, '0');
}

function isoDate(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function parseIsoDate(s) {
  const parts = String(s).split('-').map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function mondayOf(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  d.setDate(d.getDate() - (d.getDay() + 6) % 7);
  return d;
}

function currentWeekStart() {
  return isoDate(mondayOf(new Date()));
}

/** The plan is for a week that has already ended. */
function isStaleWeek() {
  return state.weekPlan.meals.length > 0 && state.weekPlan.weekStart < currentWeekStart();
}

/** Index of today within the planned week, or -1 if it is another week. */
function todayIndex() {
  if (state.weekPlan.weekStart !== currentWeekStart()) return -1;
  return (new Date().getDay() + 6) % 7;
}

function dayDate(day) {
  const d = parseIsoDate(state.weekPlan.weekStart);
  d.setDate(d.getDate() + day);
  return d;
}

const DATE_LOCALES = { en: 'en-GB', nl: 'nl-BE', fr: 'fr-BE' };

function shortDate(date) {
  try {
    return date.toLocaleDateString(DATE_LOCALES[state.settings.language] || 'en-GB',
      { day: 'numeric', month: 'short' });
  } catch (e) {
    return `${date.getDate()}/${date.getMonth() + 1}`;
  }
}

/** "Wednesday" as a heading, or "woensdag" inside a Dutch or French sentence. */
function dayName(day, options) {
  const dict = uiTranslations[state.settings.language] || uiTranslations.en;
  const name = ((options && options.short) ? dict.weekdaysShort : dict.weekdays)[day];
  return options && options.inSentence && state.settings.language !== 'en' ? name.toLowerCase() : name;
}

function findRecipe(id) {
  return state.recipes.find(r => r.id === id) || null;
}

function newMeal(recipeId, day, servings) {
  return {
    id: newItemId(),
    recipeId: recipeId,
    day: day,
    servings: Math.max(1, parseInt(servings, 10) || state.settings.householdSize)
  };
}

function mealsOn(day) {
  return state.weekPlan.meals.filter(m => m.day === day);
}

function plannedDays(recipeId) {
  return state.weekPlan.meals.filter(m => m.recipeId === recipeId).map(m => m.day)
    .sort((a, b) => a - b);
}

/** The first empty day from today on; failing that, today. */
function nextFreeDay() {
  const start = Math.max(0, todayIndex());
  for (let d = start; d < DAYS_IN_WEEK; d++) {
    if (mealsOn(d).length === 0) return d;
  }
  for (let d = 0; d < start; d++) {
    if (mealsOn(d).length === 0) return d;
  }
  return start;
}

function planMeal(recipeId, day, servings) {
  const recipe = findRecipe(recipeId);
  if (!recipe) return null;
  const meal = newMeal(recipeId, day, servings);
  state.weekPlan.meals.push(meal);
  saveWeekPlan();

  const name = recipeText(recipe).title;
  const clash = clashingAllergens(recipe);
  if (clash.length) {
    showToast(t('toastPlannedCareful', { name: name, day: dayName(day, { inSentence: true }), list: allergenList(clash) }), 'info');
  } else {
    showToast(t('toastPlanned', { name: name, day: dayName(day, { inSentence: true }) }), 'success');
  }
  onWeekChanged();
  return meal;
}

function unplanMeal(mealId) {
  const meal = state.weekPlan.meals.find(m => m.id === mealId);
  if (!meal) return;
  state.weekPlan.meals = state.weekPlan.meals.filter(m => m.id !== mealId);
  saveWeekPlan();
  showToast(t('toastUnplanned', { day: dayName(meal.day, { inSentence: true }) }), 'info');
  onWeekChanged();
}

function setMealServings(mealId, servings) {
  const meal = state.weekPlan.meals.find(m => m.id === mealId);
  if (!meal) return;
  meal.servings = Math.max(1, servings);
  saveWeekPlan();
  onWeekChanged();
}

/** Something for the table: safe, a main course, and not on the week yet. */
function suggestRecipe(excludeIds) {
  const exclude = excludeIds || [];
  const candidates = state.recipes.filter(r =>
    suitsTable(r) && recipeCategories(r).includes('main') &&
    exclude.indexOf(r.id) === -1 && r.id.indexOf('bulk-') !== 0);
  // A dish with a photograph makes a better first impression on the week.
  const photographed = candidates.filter(hasPhoto);
  const pool = photographed.length ? photographed : candidates;
  const index = randomIndex(pool.length);
  return index >= 0 ? pool[index] : null;
}

function surpriseDay(day) {
  const recipe = suggestRecipe(state.weekPlan.meals.map(m => m.recipeId));
  if (!recipe) {
    showToast(t('toastNothingFits'), 'info');
    return;
  }
  planMeal(recipe.id, day);
}

/** One random dish on every empty day from today to Sunday. */
function fillEmptyDays() {
  const start = Math.max(0, todayIndex());
  let filled = 0;
  for (let d = start; d < DAYS_IN_WEEK; d++) {
    if (mealsOn(d).length > 0) continue;
    const recipe = suggestRecipe(state.weekPlan.meals.map(m => m.recipeId));
    if (!recipe) break;
    state.weekPlan.meals.push(newMeal(recipe.id, d));
    filled++;
  }
  saveWeekPlan();

  if (filled > 0) showToast(t('toastWeekFilled', { count: filled }), 'success');
  else if (suggestRecipe([])) showToast(t('toastWeekFull'), 'info');
  else showToast(t('toastNothingFits'), 'info');
  onWeekChanged();
}

function clearWeek() {
  if (state.weekPlan.meals.length === 0 || !confirm(t('confirmClearWeek'))) return;
  state.weekPlan.meals = [];
  state.checkedLines = [];
  saveWeekPlan();
  saveGroceryList();
  showToast(t('toastWeekCleared'), 'info');
  onWeekChanged();
}

/**
 * Last week's menu is still on screen. Starting fresh empties the week and
 * the basket, but keeps anything you wrote on the list by hand and had not
 * bought yet.
 */
function startFreshWeek() {
  state.weekPlan = { weekStart: currentWeekStart(), meals: [] };
  state.checkedLines = [];
  state.groceryList = state.groceryList.filter(i => !i.checked);
  saveWeekPlan();
  saveGroceryList();
  onWeekChanged();
}

function keepLastWeek() {
  state.weekPlan.weekStart = currentWeekStart();
  saveWeekPlan();
  onWeekChanged();
}

/** Go and choose a dish for one day; the recipe book says which. */
function startPicking(day) {
  state.pickingDay = day;
  switchTab('recipes');
}

function stopPicking() {
  state.pickingDay = null;
  renderPickingBanner();
}

function onWeekChanged() {
  if (state.activeTab === 'week') renderWeekTab();
  if (state.activeTab === 'grocery') renderGroceryList();
  if (state.activeTab === 'recipes') renderRecipeGrid();
  if (state.selectedRecipe) renderDrawerPlan();
  updateTabBadges();
}

function updateTabBadges() {
  const set = (id, n) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.hidden = n === 0;
    el.textContent = String(n);
  };
  set('tab-badge-week', state.weekPlan.meals.length);
  set('tab-badge-grocery', itemsToBuy().length);
}

function renderWeekTab() {
  const list = document.getElementById('week-days');
  if (!list) return;

  const start = parseIsoDate(state.weekPlan.weekStart);
  const end = dayDate(DAYS_IN_WEEK - 1);
  document.getElementById('week-range').textContent = `${shortDate(start)} – ${shortDate(end)}`;

  // Profile: ask once, then keep a one-line reminder of what is filtered.
  const prompt = document.getElementById('profile-prompt');
  const strip = document.getElementById('week-profile-strip');
  prompt.hidden = state.settings.profileAsked;
  strip.hidden = !state.settings.profileAsked;
  const summary = profileSummary();
  strip.textContent = summary ? `🛡 ${t('profileStrip', { list: summary })}` : t('profileStripNone');

  document.getElementById('week-stale-banner').hidden = !isStaleWeek();

  const plannedDayCount = new Set(state.weekPlan.meals.map(m => m.day)).size;
  document.getElementById('week-summary-text').textContent = plannedDayCount === 0
    ? t('weekSummaryNone')
    : t('weekSummary', { planned: plannedDayCount });

  const today = todayIndex();
  let html = '';
  for (let day = 0; day < DAYS_IN_WEEK; day++) {
    const meals = mealsOn(day);
    const past = today > -1 && day < today;

    html += `
      <li class="week-day ${day === today ? 'is-today' : ''} ${past ? 'is-past' : ''} ${meals.length === 0 ? 'is-empty' : ''}" data-day="${day}">
        <div class="week-day-head">
          <span class="week-day-name">${escapeHtml(dayName(day))}</span>
          <span class="week-day-date">${escapeHtml(shortDate(dayDate(day)))}</span>
          ${day === today ? `<span class="week-day-today">${escapeHtml(t('todayLabel'))}</span>` : ''}
        </div>
        ${meals.map(weekMealHtml).join('')}
        ${meals.length === 0 && past ? '' : meals.length === 0 ? `
          <div class="week-day-actions">
            <button type="button" class="day-pick-btn" data-day="${day}">${escapeHtml(t('pickDishBtn'))}</button>
            <button type="button" class="day-dice-btn" data-day="${day}" aria-label="${escapeHtml(t('surpriseDayBtn'))}" title="${escapeHtml(t('surpriseDayBtn'))}">🎲</button>
          </div>
        ` : `
          <button type="button" class="day-add-more" data-day="${day}">${escapeHtml(t('addAnotherBtn'))}</button>
        `}
      </li>
    `;
  }
  list.innerHTML = html;

  list.querySelectorAll('.day-pick-btn, .day-add-more').forEach(btn => {
    btn.addEventListener('click', () => startPicking(parseInt(btn.dataset.day, 10)));
  });
  list.querySelectorAll('.day-dice-btn').forEach(btn => {
    btn.addEventListener('click', () => surpriseDay(parseInt(btn.dataset.day, 10)));
  });
  list.querySelectorAll('.week-meal-open').forEach(el => {
    onActivate(el, () => openRecipeDrawer(el.dataset.recipeId));
  });
  list.querySelectorAll('.week-meal-remove').forEach(btn => {
    btn.addEventListener('click', () => unplanMeal(btn.dataset.mealId));
  });
  list.querySelectorAll('.week-meal-servings button').forEach(btn => {
    btn.addEventListener('click', () => {
      const meal = state.weekPlan.meals.find(m => m.id === btn.dataset.mealId);
      if (meal) setMealServings(meal.id, meal.servings + parseInt(btn.dataset.step, 10));
    });
  });

  const toBuy = itemsToBuy().length;
  const toList = document.getElementById('week-to-list-btn');
  toList.textContent = toBuy > 0 ? t('toListBtn', { count: toBuy }) : t('toListEmpty');
  document.getElementById('week-clear-btn').hidden = state.weekPlan.meals.length === 0;
  updateTabBadges();
}

function weekMealHtml(meal) {
  const recipe = findRecipe(meal.recipeId);
  if (!recipe) return '';
  const name = recipeText(recipe).title;
  const clash = clashingAllergens(recipe);
  const dayText = dayName(meal.day, { inSentence: true });
  return `
    <div class="week-meal ${clash.length ? 'has-clash' : ''}" data-meal-id="${escapeHtml(meal.id)}">
      <div class="week-meal-open" data-recipe-id="${escapeHtml(recipe.id)}" role="button" tabindex="0">
        ${photoMarkup(recipe, name, 'week-meal-img', true)}
        <div class="week-meal-text">
          <span class="week-meal-title">${escapeHtml(name)}</span>
          ${clash.length ? `<span class="week-meal-warn">⚠ ${escapeHtml(allergenList(clash))}</span>` : ''}
        </div>
      </div>
      <div class="week-meal-servings" aria-label="${escapeHtml(t('mealServings'))}">
        <button type="button" class="servings-btn servings-btn-sm" data-meal-id="${escapeHtml(meal.id)}" data-step="-1" aria-label="${escapeHtml(t('mealServings'))} -">-</button>
        <span class="week-meal-count">${meal.servings}</span>
        <button type="button" class="servings-btn servings-btn-sm" data-meal-id="${escapeHtml(meal.id)}" data-step="1" aria-label="${escapeHtml(t('mealServings'))} +">+</button>
      </div>
      <button type="button" class="week-meal-remove" data-meal-id="${escapeHtml(meal.id)}"
              aria-label="${escapeHtml(t('removeMeal', { name: name, day: dayText }))}">&times;</button>
    </div>
  `;
}

// --- Recipe book ---

/** One card template for the book. */
function recipeCardHtml(recipe) {
  const isFav = state.favorites.includes(recipe.id);
  const days = plannedDays(recipe.id);
  const planned = days.length > 0;
  const name = recipeText(recipe).title;
  const sub = recipeText(recipe).subtitle;
  const diffText = recipe.difficulty[state.settings.language] || recipe.difficulty.en;
  const clash = clashingAllergens(recipe);
  const picking = state.pickingDay !== null;

  // "+" puts the dish on the week. Once it is there, the button shows the
  // day instead — unless you are choosing for a particular day, when it is
  // always a "+" for that day.
  const planLabel = planned && !picking
    ? t('plannedFor', { day: dayName(days[0], { inSentence: true }) })
    : t('addToWeek', { name: name });
  const planText = planned && !picking ? escapeHtml(dayName(days[0], { short: true })) : '+';

  return `
    <div class="recipe-card ${planned ? 'is-planned' : ''}" data-id="${escapeHtml(recipe.id)}"
         role="button" tabindex="0" aria-label="${escapeHtml(name)}">
      <div class="card-plan-btn ${planned && !picking ? 'planned' : ''}" data-id="${escapeHtml(recipe.id)}"
           role="button" tabindex="0" aria-label="${escapeHtml(planLabel)}">${planText}</div>
      <div class="recipe-card-img-wrapper">
        ${photoMarkup(recipe, name, 'recipe-card-img', true)}
        <span class="recipe-badge">${escapeHtml(diffText)}</span>
        ${isFav ? '<span class="recipe-fav-badge">❤️</span>' : ''}
        ${clash.length ? `<span class="recipe-warn-badge">⚠ ${escapeHtml(allergenList(clash))}</span>` : ''}
      </div>
      <div class="recipe-card-content">
        <h4 class="recipe-card-title">${escapeHtml(name)}</h4>
        <p class="recipe-card-sub">${escapeHtml(sub)}</p>
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
    const planBtn = card.querySelector('.card-plan-btn');
    if (planBtn) {
      onActivate(planBtn, e => {
        e.stopPropagation();
        onCardPlanButton(card.dataset.id);
      });
    }
    onActivate(card, e => {
      // Enter on the plan button must not also open the drawer.
      if (e.target && e.target.closest && e.target.closest('.card-plan-btn')) return;
      openRecipeDrawer(card.dataset.id);
    });
  });
}

function onCardPlanButton(recipeId) {
  if (state.pickingDay !== null) {
    const day = state.pickingDay;
    stopPicking();
    planMeal(recipeId, day);
    switchTab('week');
    return;
  }
  // Already on the week: show it, where the days can be changed.
  if (plannedDays(recipeId).length > 0) {
    openRecipeDrawer(recipeId);
    return;
  }
  planMeal(recipeId, nextFreeDay());
}

function matchesQuery(recipe, query) {
  if (!query) return true;
  const tr = recipeText(recipe);
  if (fold(tr.title).includes(query)) return true;
  if (tr.subtitle && fold(tr.subtitle).includes(query)) return true;
  return recipe.ingredients.some(i => fold(ingredientName(i)).includes(query));
}

function randomIndex(length) {
  if (length < 1) return -1;
  if (window.crypto && window.crypto.getRandomValues) {
    const max = Math.floor(0x100000000 / length) * length;
    const value = new Uint32Array(1);
    do { window.crypto.getRandomValues(value); } while (value[0] >= max);
    return value[0] % length;
  }
  return Math.floor(Math.random() * length);
}

function renderPickingBanner() {
  const banner = document.getElementById('picking-banner');
  if (!banner) return;
  const picking = state.pickingDay !== null;
  banner.hidden = !picking;
  if (picking) {
    document.getElementById('picking-banner-text').textContent =
      t('pickingFor', { day: dayName(state.pickingDay, { inSentence: true }) });
  }
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

  renderPickingBanner();
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

function renderRecipeGrid() {
  const container = document.getElementById('recipes-tab-grid');
  if (!container) return;

  const browsable = browsableRecipes();
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

/** A week line is known by what it is, so its tick survives a re-merge. */
function weekLineId(key, unit) {
  return `w:${key}|${unit || ''}`;
}

function isWeekLine(id) {
  return String(id).indexOf('w:') === 0;
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
        id: weekLineId(key, ing.unit),
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

/** Everything the week's dishes need, merged, scaled and ticked. */
function weekShoppingLines() {
  const lines = [];
  state.weekPlan.meals.forEach(meal => {
    const recipe = findRecipe(meal.recipeId);
    if (!recipe) return;
    mergeIngredients(lines, scaledIngredients(recipe, meal.servings), recipeText(recipe).title);
  });
  lines.forEach(line => { line.checked = state.checkedLines.indexOf(line.id) > -1; });
  return lines;
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
  // A planned dish opens at the plates it is planned for; anything else at
  // the size of the household.
  const planned = state.weekPlan.meals.find(m => m.recipeId === recipeId);
  state.recipeServings = planned ? planned.servings : state.settings.householdSize;

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

  renderDrawerAllergens(recipe);
  renderDrawerPlan();
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

  if (state.selectedRecipe === recipe) updateScaledIngredients();
}

/** The seven day chips: which days this dish is on, and which are taken. */
function renderDrawerPlan() {
  const recipe = state.selectedRecipe;
  const picker = document.getElementById('drawer-day-picker');
  if (!recipe || !picker) return;

  const days = plannedDays(recipe.id);
  const today = todayIndex();

  let html = '';
  for (let day = 0; day < DAYS_IN_WEEK; day++) {
    const on = days.includes(day);
    const busy = !on && mealsOn(day).length > 0;
    const picking = state.pickingDay === day;
    html += `
      <button type="button" class="day-chip ${on ? 'active' : ''} ${busy ? 'busy' : ''} ${day === today ? 'today' : ''} ${picking ? 'picking' : ''}" data-day="${day}" aria-pressed="${on}"
              aria-label="${escapeHtml(dayName(day))}">
        <span class="day-chip-name">${escapeHtml(dayName(day, { short: true }))}</span>
        <span class="day-chip-date">${dayDate(day).getDate()}</span>
      </button>
    `;
  }
  picker.innerHTML = html;
  picker.querySelectorAll('.day-chip').forEach(chip => {
    chip.addEventListener('click', () => toggleDrawerDay(parseInt(chip.dataset.day, 10)));
  });

  document.getElementById('drawer-plan-status').textContent = days.length
    ? t('planStatusOn', { days: days.map(d => dayName(d, { inSentence: true })).join(', ') })
    : t('planStatusNone');
}

function toggleDrawerDay(day) {
  const recipe = state.selectedRecipe;
  if (!recipe) return;

  const existing = state.weekPlan.meals.find(m => m.recipeId === recipe.id && m.day === day);
  if (existing) {
    unplanMeal(existing.id);
    return;
  }

  planMeal(recipe.id, day, state.recipeServings);
  // Came here to fill one day: that is done, so go back and look at it.
  if (state.pickingDay !== null) {
    stopPicking();
    closeRecipeDrawer();
    switchTab('week');
  }
}

/** The drawer's servings stepper also resizes the dish wherever it is planned. */
function setDrawerServings(n) {
  state.recipeServings = Math.max(1, n);
  updateScaledIngredients();
  const recipe = state.selectedRecipe;
  if (!recipe) return;
  let changed = false;
  state.weekPlan.meals.forEach(m => {
    if (m.recipeId === recipe.id && m.servings !== state.recipeServings) {
      m.servings = state.recipeServings;
      changed = true;
    }
  });
  if (changed) {
    saveWeekPlan();
    onWeekChanged();
  }
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
// The list is not a copy of the week, it is read off it. Plan a dish and its
// ingredients are on the list; take it off the week and they are gone again.
// Only two things are stored: what you typed in yourself (state.groceryList)
// and which of the week's lines you have ticked (state.checkedLines). A line
// is known by its ingredient and unit, so a tick survives the week changing
// around it — adding a second dish with onions does not untick the onions.

/** Every line on the list: the week's, merged, then your own. */
function shoppingItems() {
  return weekShoppingLines().concat(state.groceryList);
}

/** Lines still worth walking to: unticked, and not a cupboard basic. */
function itemsToBuy(items) {
  return (items || shoppingItems()).filter(i => !i.checked && !i.staple);
}

function renderGroceryList() {
  const container = document.getElementById('grocery-list-container');
  if (!container) return;

  const items = shoppingItems();
  const dishes = state.weekPlan.meals.length;
  const subtitle = document.getElementById('grocery-subtitle');
  if (subtitle) {
    subtitle.textContent = dishes > 0 ? t('groceryFromWeek', { count: dishes }) : t('checklistDesc');
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div class="list-empty">
        <span class="list-empty-icon">📋</span>
        <h4>${escapeHtml(t('emptyListHeader'))}</h4>
        <p>${escapeHtml(t('emptyListDesc'))}</p>
        <button type="button" class="btn-small btn-primary list-empty-btn" data-goto="week">${escapeHtml(t('planWeekBtn'))}</button>
      </div>
    `;
    container.querySelectorAll('[data-goto]').forEach(btn => {
      btn.addEventListener('click', () => switchTab('week'));
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
        ${isCupboard ? `<p class="cupboard-hint">${escapeHtml(t('cupboardHint'))}</p>` : ''}
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
  const fromWeek = isWeekLine(item.id);
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
      ${fromWeek ? '' : `
        <button type="button" class="item-delete-btn" data-id="${escapeHtml(item.id)}"
                aria-label="${escapeHtml(t('removeItem', { name: item.name }))}">&times;</button>`}
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
  let checked;
  if (isWeekLine(id)) {
    const at = state.checkedLines.indexOf(id);
    if (at > -1) state.checkedLines.splice(at, 1);
    else state.checkedLines.push(id);
    checked = at === -1;
  } else {
    const item = state.groceryList.find(i => i.id === id);
    if (!item) return;
    item.checked = !item.checked;
    checked = item.checked;
  }
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

// Format 2 carries the week instead of a loose selection; a format 1 file
// still restores, its selection laid out over the week.
const BACKUP_FORMAT = 2;

function buildBackup() {
  return {
    format: BACKUP_FORMAT,
    app: 'mijn-kookpot',
    exportedAt: new Date().toISOString(),
    settings: state.settings,
    userRecipes: state.userRecipes,
    groceryList: state.groceryList,
    checkedLines: state.checkedLines,
    favorites: state.favorites,
    weekPlan: state.weekPlan
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
  rebuildRecipeIndex(); // the week below may point at restored recipes
  state.groceryList = Array.isArray(data.groceryList) ? data.groceryList : [];
  state.checkedLines = Array.isArray(data.checkedLines) ? data.checkedLines : [];
  state.favorites = Array.isArray(data.favorites) ? data.favorites : [];
  if (data.settings && typeof data.settings === 'object') {
    state.settings = Object.assign({}, state.settings, data.settings);
    sanitizeProfile();
  }

  state.weekPlan = normalizeWeekPlan(data.weekPlan);
  if (!data.weekPlan && Array.isArray(data.selectedRecipes)) {
    data.selectedRecipes.filter(id => findRecipe(id)).forEach(id => {
      const servings = data.selectedServings && data.selectedServings[id];
      state.weekPlan.meals.push(newMeal(id, nextFreeDay(), servings));
    });
  }

  saveUserRecipes();
  saveGroceryList();
  saveFavorites();
  saveWeekPlan();
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
  state.weekPlan.meals = state.weekPlan.meals.filter(m => m.recipeId !== id);
  saveUserRecipes();
  saveFavorites();
  saveWeekPlan();

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
  renderWeekTab(); // an edited dish may already be on the week
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
