// Clean Trilingual Recipe Database (English, Dutch, French)
window.initialRecipes = [
  {
    id: "carbonnade-flamande",
    prepTime: "25 mins",
    cookTime: "2 hrs 30 mins",
    difficulty: { en: "Medium", nl: "Gemiddeld", fr: "Moyen" },
    servings: 4,
    category: { en: "Belgian Classics", nl: "Belgische Klassiekers", fr: "Classiques Belges" },
    image: "images/carbonnade_flamande.jpg",
    translations: {
      en: {
        title: "Stoofvlees / Carbonnade Flamande",
        subtitle: "Classic Belgian Beer Stew",
        description: "A rich, slow-cooked beef stew made with Belgian dark abbey beer, mustard-spread bread, and a touch of Liège syrup.",
        instructions: [
          "Cut the beef into large bite-sized chunks. Season generously with salt and pepper.",
          "Melt the butter in a heavy-bottomed stewpot and brown the meat chunks in batches. Remove and set aside.",
          "In the same pot, add the chopped onions and cook on medium heat until soft and translucent.",
          "Add the browned beef back to the pot, pour in the Belgian beer, and add the beef stock cube.",
          "Spread the mustard generously on the slices of bread and place them face down on top of the stew.",
          "Add the bay leaves, thyme, and Liège syrup. Bring to a gentle simmer, cover, and let cook for about 2 to 2.5 hours on very low heat.",
          "Remove the bay leaves and thyme. Stir the dissolved bread into the sauce to thicken it. Serve with hot frites."
        ]
      },
      nl: {
        title: "Stoofvlees / Carbonnade Flamande",
        subtitle: "Klassieke Belgische Bierstoofpot",
        description: "Een rijke, traag gegaarde rundsstoofpot met Belgisch donker abdijbier, boterhammen met mosterd en een lepel Luikse siroop.",
        instructions: [
          "Snijd het rundvlees in grote hapklare stukken. Kruid royaal met peper en zout.",
          "Smelt de boter in een stoofpan en schroei het vlees in porties dicht tot het bruin is. Haal eruit en zet opzij.",
          "Voeg de gesnipperde uien toe in dezelfde pan en stoof ze glazig op middelhoog vuur.",
          "Doe het vlees terug in de pan, giet het bier erbij en voeg het bouillonblokje toe.",
          "Smeer de mosterd royaal op de boterhammen en leg ze met de mosterdkant naar beneden op het vlees.",
          "Voeg laurierblaadjes, tijm en Luikse siroop toe. Breng aan de kook, dek af en laat 2 tot 2,5 uur sudderen op een laag vuur.",
          "Verwijder de kruiden. Roer de opgeloste boterhammen door de saus om deze te binden. Serveer met warme frietjes."
        ]
      },
      fr: {
        title: "Stoofvlees / Carbonnade Flamande",
        subtitle: "Ragoût de Boeuf à la Bière Belge",
        description: "Un ragoût de boeuf riche mijoté à la bière d'abbaye brune belge, tartines de moutarde et une touche de sirop de Liège.",
        instructions: [
          "Coupez le bœuf en gros morceaux. Assaisonnez généreusement de sel et de poivre.",
          "Faites fondre le beurre dans une cocotte et faites dorer la viande par portions. Retirez et réservez.",
          "Dans la même cocotte, ajoutez les oignons émincés et faites-les cuire à feu moyen jusqu'à ce qu'ils soient translucides.",
          "Remettez le bœuf dans la cocotte, versez la bière belge et ajoutez le cube de bouillon de bœuf.",
          "Tartinez généreusement les tranches de pain de moutarde et posez-les face moutarde sur le ragoût.",
          "Ajoutez le laurier, le thym et le sirop de Liège. Laissez mijoter à feu très doux pendant 2h à 2h30.",
          "Retirez le laurier et le thym. Remuez pour incorporer le pain dissous afin d'épaissir la sauce. Servez chaud avec des frites."
        ]
      }
    },
    ingredients: [
      { name: { en: "Beef chuck (Stoofvlees / Carbonnades)", nl: "Rundstoofvlees (Stoofvlees / Carbonnades)", fr: "Carbonnades de boeuf (Stoofvlees / Carbonnades)" }, amount: 1000, unit: "g", category: "Slagerij & Gevogelte" },
      { name: { en: "Dark Abbey Beer (e.g., Rochefort, Chimay)", nl: "Donker abdijbier (bv. Rochefort, Chimay)", fr: "Bière brune d'abbaye (ex. Rochefort, Chimay)" }, amount: 660, unit: "ml", category: "Bieren & Dranken" },
      { name: { en: "Onions (Uien / Oignons)", nl: "Uien (Uien / Oignons)", fr: "Oignons (Uien / Oignons)" }, amount: 3, unit: "st.", category: "Groenten & Fruit" },
      { name: { en: "Belgian Mustard (Mosterd / Moutarde)", nl: "Belgische mosterd (Mosterd / Moutarde)", fr: "Moutarde belge (Mosterd / Moutarde)" }, amount: 2, unit: "el", category: "Kruidenier" },
      { name: { en: "Slices of bread (Boterham / Pain)", nl: "Boterhammen (Boterham / Pain)", fr: "Tranches de pain (Boterham / Pain)" }, amount: 2, unit: "st.", category: "Bakkerij" },
      { name: { en: "Liège Syrup (Luikse Siroop / Sirop de Liège)", nl: "Luikse siroop (Luikse Siroop / Sirop de Liège)", fr: "Sirop de Liège (Luikse Siroop / Sirop de Liège)" }, amount: 2, unit: "el", category: "Kruidenier" },
      { name: { en: "Butter (Boter / Beurre)", nl: "Roomboter (Boter / Beurre)", fr: "Beurre (Boter / Beurre)" }, amount: 50, unit: "g", category: "Zuivel & Eieren" },
      { name: { en: "Bay leaves & Fresh thyme", nl: "Laurierblaadjes & verse tijm", fr: "Laurier & thym frais" }, amount: 1, unit: "unit", category: "Groenten & Fruit" }
    ]
  },
  {
    id: "witloof-oven",
    prepTime: "20 mins",
    cookTime: "35 mins",
    difficulty: { en: "Easy", nl: "Gemakkelijk", fr: "Facile" },
    servings: 4,
    category: { en: "Belgian Classics", nl: "Belgische Klassiekers", fr: "Classiques Belges" },
    image: "images/witloof_gratin.jpg",
    translations: {
      en: {
        title: "Witloof in de Oven / Chicons au Gratin",
        subtitle: "Belgian Endives wrapped in Ham",
        description: "Tender Belgian endives wrapped in savory boiled ham, baked in a rich cheese sauce (mornay) and gratinéed to perfection.",
        instructions: [
          "Trim the endives and remove the bitter core. Cook them in salted boiling water with a squeeze of lemon juice for 15 minutes.",
          "Drain the endives very thoroughly. Press them gently to squeeze out excess water.",
          "Make cheese sauce: Melt butter, whisk in flour, cook for 1 minute. Gradually add milk while whisking until smooth and boiling. Stir in 100g of grated cheese.",
          "Wrap each drained endive in a slice of ham and place them in a baking dish.",
          "Pour the cheese sauce over the endives, then sprinkle the remaining grated cheese on top.",
          "Bake at 200°C for 20-25 minutes until golden brown."
        ]
      },
      nl: {
        title: "Witloof in de Oven / Chicons au Gratin",
        subtitle: "Gegratineerd Witloof met Hesp",
        description: "Heerlijk zacht gekookt witloof gerold in gekookte achterhesp, overgoten met een romige kaassaus en gegratineerd in de oven.",
        instructions: [
          "Snijd het harde uiteinde van de stronkjes witloof. Kook ze gedurende 15 minuten gaar in gezouten water met wat citroensap.",
          "Laat het witloof heel goed uitlekken. Druk het water er voorzichtig uit.",
          "Maak de kaassaus: Smelt boter, roer bloem erdoor en laat 1 minuut garen. Voeg geleidelijk melk toe onder voortdurend kloppen. Meng er 100g geraspte kaas onder.",
          "Rol elk stronkje witloof in een sneetje hesp en leg ze in een ingevette ovenschaal.",
          "Giet de kaassaus erover en strooi de rest van de geraspte kaas erover.",
          "Bak 20-25 minuten op 200°C tot er een mooi goudgeel korstje ontstaat."
        ]
      },
      fr: {
        title: "Witloof in de Oven / Chicons au Gratin",
        subtitle: "Chicons au Gratin Traditionnels",
        description: "De tendres chicons belges enroulés dans du jambon cuit, nappés d'une sauce au fromage (mornay) et gratinés au four.",
        instructions: [
          "Parez les chicons et retirez le cône amer. Faites-les cuire dans de l'eau bouillante salée avec du jus de citron pendant 15 minutes.",
          "Égouttez soigneusement les chicons. Pressez-les délicatement pour en extraire l'excès d'eau.",
          "Préparez la sauce: Faites fondre le beurre, ajoutez la farine, cuisez 1 minute. Ajoutez le lait progressivement en fouettant. Incorporez 100g de fromage râpé.",
          "Enroulez chaque chicon dans une tranche de jambon et disposez-les dans un plat à four.",
          "Nappez de sauce au fromage et dispersez le reste du fromage râpé sur le dessus.",
          "Faites cuire à 200°C pendant 20-25 minutes jusqu'à ce que le gratin soit bien doré."
        ]
      }
    },
    ingredients: [
      { name: { en: "Belgian Endives (Witloof / Chicons)", nl: "Witloof (Witloof / Chicons)", fr: "Chicons belges (Witloof / Chicons)" }, amount: 8, unit: "st.", category: "Groenten & Fruit" },
      { name: { en: "Cooked Ham (Gekookte Hesp / Jambon)", nl: "Gekookte achterham (Gekookte Hesp / Jambon)", fr: "Jambon cuit supérieur (Gekookte Hesp / Jambon)" }, amount: 8, unit: "slices", category: "Slagerij & Gevogelte" },
      { name: { en: "Grated Cheese (Gruyère / Emmental)", nl: "Geraspte kaas (Gruyère / Emmental)", fr: "Fromage râpé (Gruyère / Emmental)" }, amount: 200, unit: "g", category: "Zuivel & Eieren" },
      { name: { en: "Whole Milk (Volle Melk / Lait)", nl: "Volle melk (Volle Melk / Lait)", fr: "Lait entier (Volle Melk / Lait)" }, amount: 750, unit: "ml", category: "Zuivel & Eieren" },
      { name: { en: "Butter (Boter / Beurre)", nl: "Boter (Boter / Beurre)", fr: "Beurre (Boter / Beurre)" }, amount: 50, unit: "g", category: "Zuivel & Eieren" },
      { name: { en: "Flour (Bloem / Farine)", nl: "Bloem (Bloem / Farine)", fr: "Farine de blé (Bloem / Farine)" }, amount: 50, unit: "g", category: "Kruidenier" }
    ]
  },
  {
    id: "vol-au-vent",
    prepTime: "30 mins",
    cookTime: "1 hr 15 mins",
    difficulty: { en: "Medium", nl: "Gemiddeld", fr: "Moyen" },
    servings: 4,
    category: { en: "Belgian Classics", nl: "Belgische Klassiekers", fr: "Classiques Belges" },
    image: "images/vol_au_vent.jpg",
    translations: {
      en: {
        title: "Vol-au-Vent / Koninginnenhapje",
        subtitle: "Chicken & Mushroom Puff Pastry",
        description: "A comforting dish of tender shredded chicken, small meatballs, and fresh mushrooms in a creamy velouté sauce, served in puff pastry shells.",
        instructions: [
          "Boil the chicken with soup vegetables for 1 hour to make a rich broth. Shred the meat and set aside.",
          "Roll minced meat into small meatballs. Poach them in the chicken broth for 3 minutes.",
          "Clean and slice the mushrooms. Sauté in butter until golden.",
          "Make a velouté sauce with butter, flour, and 800ml of the chicken broth.",
          "Stir in shredded chicken, meatballs, and mushrooms. Simmer for 5 minutes.",
          "Off heat, stir in cream, egg yolk, and lemon juice. Serve in warmed puff pastry shells."
        ]
      },
      nl: {
        title: "Vol-au-Vent / Koninginnenhapje",
        subtitle: "Koninginnenhapje met Videekoppen",
        description: "Klassiek romige kipragout met malse stukjes getrokken kip, gehaktballetjes en champignons in bladerdeegbakjes.",
        instructions: [
          "Kook de kip gaar in water met soepgroenten (1 uur). Pluk het kippenvlees in stukjes, zeef de bouillon.",
          "Rol het gehakt in kleine balletjes. Pocheer ze 3 minuten in de kippenbouillon.",
          "Snijd de champignons in schijfjes en bak ze goudbruin in wat boter.",
          "Maak een veloutésaus met boter, bloem en 800ml van de kippenbouillon.",
          "Voeg de kip, balletjes en champignons toe aan de saus. Laat 5 minuten zacht koken.",
          "Meng room, eidooier en citroensap, en roer door de saus. Serveer in opgewarmde bladerdeegbakjes."
        ]
      },
      fr: {
        title: "Vol-au-Vent / Koninginnenhapje",
        subtitle: "Bouchée à la Reine Traditionnelle",
        description: "De la viande de poulet effilochée, des petites boulettes de viande et des champignons frais dans une sauce veloutée crémeuse, servie dans des croûtes feuilletées.",
        instructions: [
          "Faites pocher le poulet dans de l'eau avec les légumes à pot-au-feu pendant 1h. Effilochez la chair, réservez le bouillon.",
          "Formez de petites boulettes de hachis et pochez-les 3 minutes dans le bouillon chaud.",
          "Parez et émincez les champignons. Faites-les sauter au beurre.",
          "Préparez un velouté en mélangeant beurre, farine et 800ml de bouillon de poulet.",
          "Ajoutez le poulet, les boulettes et les champignons. Laissez mijoter 5 minutes.",
          "Hors du feu, liez avec la crème, le jaune d'œuf et un filet de citron. Servez dans les croûtes feuilletées chaudes."
        ]
      }
    },
    ingredients: [
      { name: { en: "Whole Chicken (Poulet / Kip)", nl: "Hele kip (Poulet / Kip)", fr: "Poulet entier (Poulet / Kip)" }, amount: 1, unit: "st.", category: "Slagerij & Gevogelte" },
      { name: { en: "Minced Meat (Gehakt / Haché)", nl: "Gemengd gehakt (Gehakt / Haché)", fr: "Hachis porc et boeuf (Gehakt / Haché)" }, amount: 250, unit: "g", category: "Slagerij & Gevogelte" },
      { name: { en: "Puff Pastry Shells (Bouchées / Videekoppen)", nl: "Bladerdeegpasteitjes (Bouchées / Videekoppen)", fr: "Croûtes feuilletées (Bouchées / Videekoppen)" }, amount: 4, unit: "st.", category: "Bakkerij" },
      { name: { en: "White Mushrooms (Champignons)", nl: "Witte champignons (Champignons)", fr: "Champignons de Paris (Champignons)" }, amount: 250, unit: "g", category: "Groenten & Fruit" },
      { name: { en: "Heavy Cream (Room / Crème)", nl: "Volle room (Room / Crème)", fr: "Crème fraîche liquide (Room / Crème)" }, amount: 150, unit: "ml", category: "Zuivel & Eieren" }
    ]
  },
  {
    id: "stoemp-worst",
    prepTime: "15 mins",
    cookTime: "25 mins",
    difficulty: { en: "Easy", nl: "Gemakkelijk", fr: "Facile" },
    servings: 4,
    category: { en: "Comfort Food", nl: "Dagelijkse Kost", fr: "Plats Réconfortants" },
    image: "images/stoemp_worst.jpg",
    translations: {
      en: {
        title: "Stoemp met Worst / Stoemp Saucisse",
        subtitle: "Mashed Potatoes with Carrots & Leek",
        description: "A hearty rustic mash of potatoes, leeks, and carrots, flavored with bacon bits and served with sizzling pork sausages and dark beer gravy.",
        instructions: [
          "Peel the potatoes and slice the carrots and leeks.",
          "Boil potatoes, carrots, and leeks together in salted water for 20 minutes.",
          "Meanwhile, fry the bacon bits until crispy, then fry the pork sausages in the same pan.",
          "Drain the vegetables, mash coarsely, and mix in butter, milk, and crispy bacon.",
          "Season with nutmeg, salt, and pepper. Serve with sausage and pan gravy."
        ]
      },
      nl: {
        title: "Stoemp met Worst / Stoemp Saucisse",
        subtitle: "Wortel- en Preistoemp met Worst",
        description: "Een heerlijke stevige stamppot van aardappelen, wortelen en prei met spekjes, geserveerd met varkensworsten.",
        instructions: [
          "Schil de aardappelen en snijd de prei en wortelen in stukken.",
          "Kook aardappelen, wortelen en prei samen gaar in gezouten water gedurende 20 minuten.",
          "Bak ondertussen de spekblokjes krokant in een pan, bak daarin daarna ook de worsten bruin.",
          "Giet de groenten af, stamp ze grof en meng er boter, melk en de krokante spekjes onder.",
          "Kruid met nootmuskaat, zout en peper. Serveer met de worst en jus."
        ]
      },
      fr: {
        title: "Stoemp met Worst / Stoemp Saucisse",
        subtitle: "Stoemp aux Carottes et Poireaux",
        description: "Une purée rustique de pommes de terre, poireaux et carottes, agrémentée de lardons croustillants et servie avec des saucisses de porc.",
        instructions: [
          "Pelez les pommes de terre, coupez les carottes et les poireaux en morceaux.",
          "Faites bouillir le tout dans de l'eau salée pendant 20 minutes.",
          "Pendant ce temps, faites griller les lardons, puis cuisez les saucisses dans la même poêle.",
          "Égouttez les légumes, écrasez-les grossièrement et incorporez le beurre, le lait et les lardons.",
          "Salez, poivrez et ajoutez de la noix de muscade. Servez chaud avec les saucisses."
        ]
      }
    },
    ingredients: [
      { name: { en: "Potatoes (Bintje / Aardappelen)", nl: "Bintje aardappelen (Bintje / Aardappelen)", fr: "Pommes de terre Bintje (Bintje / Aardappelen)" }, amount: 1000, unit: "g", category: "Groenten & Fruit" },
      { name: { en: "Carrots (Wortelen / Carottes)", nl: "Wortelen (Wortelen / Carottes)", fr: "Carottes (Wortelen / Carottes)" }, amount: 3, unit: "st.", category: "Groenten & Fruit" },
      { name: { en: "Leeks (Prei / Poireaux)", nl: "Prei (Prei / Poireaux)", fr: "Poireaux (Prei / Poireaux)" }, amount: 2, unit: "st.", category: "Groenten & Fruit" },
      { name: { en: "Pork Sausages (Worsten / Saucisses)", nl: "Varkensworsten (Worsten / Saucisses)", fr: "Saucisses de porc (Worsten / Saucisses)" }, amount: 4, unit: "st.", category: "Slagerij & Gevogelte" },
      { name: { en: "Bacon bits (Spekjes / Lardons)", nl: "Spekblokjes (Spekjes / Lardons)", fr: "Lardons fumés (Spekjes / Lardons)" }, amount: 125, unit: "g", category: "Slagerij & Gevogelte" }
    ]
  },
  {
    id: "moules-frites",
    prepTime: "20 mins",
    cookTime: "10 mins",
    difficulty: { en: "Easy", nl: "Gemakkelijk", fr: "Facile" },
    servings: 2,
    category: { en: "Seafood", nl: "Vis & Zeevruchten", fr: "Fruits de Mer" },
    image: "images/mussels_fries.jpg",
    translations: {
      en: {
        title: "Mosselen-Friet / Moules-Frites",
        subtitle: "Classic Mussels & Fries",
        description: "Fresh North Sea mussels steamed with celery, onions, leeks, and butter, served with crispy, double-fried Belgian fries.",
        instructions: [
          "Clean the mussels in cold running water. Discard any that are open and do not close when tapped.",
          "Chop celery stalks, onions, and leek.",
          "Melt butter in a large pot, sauté the vegetables for 3 minutes.",
          "Add the mussels and parsley, cover with a lid, and cook on high heat.",
          "After 3-4 minutes, shake the pot to toss. Steam for another 3 minutes until all mussels open.",
          "Serve immediately in the pot with fries and mayonnaise."
        ]
      },
      nl: {
        title: "Mosselen-Friet / Moules-Frites",
        subtitle: "Zeeuwse Mosselen met Belgische Frietjes",
        description: "Verse Noordzeemosselen gestoomd in de mosselpot met selder, ui, prei en roomboter, geserveerd met knapperige frieten.",
        instructions: [
          "Spoel de mosselen in koud water. Gooi open mosselen weg die niet sluiten na een tik.",
          "Snijd de bladselder, uien en prei fijn.",
          "Smelt boter in een grote mosselpan, stoof de groenten 3 minuten aan.",
          "Voeg de mosselen en peterselie toe, zet het deksel op de pan en kook op hoog vuur.",
          "Schud de pot na 3-4 minuten op. Laat nog 3 minuten stomen tot alle schelpen openstaan.",
          "Serveer direct in de mosselpan met verse frietjes en mayonaise."
        ]
      },
      fr: {
        title: "Mosselen-Friet / Moules-Frites",
        subtitle: "Moules-Frites Traditionnelles",
        description: "Moules fraîches de la mer du Nord cuites à la vapeur avec céleri, oignons, poireaux et beurre, servies avec des frites croustillantes.",
        instructions: [
          "Lavez les moules à l'eau froide. Éliminez celles qui restent ouvertes.",
          "Hachez le céleri branche, les oignons et le blanc de poireau.",
          "Faites fondre le beurre dans une grande casserole de cuisson et faites revenir les légumes 3 minutes.",
          "Ajoutez les moules et le persil, couvrez et faites cuire à feu vif.",
          "Secouez la casserole après 3-4 minutes. Laissez cuire encore 3 minutes pour ouvrir toutes les coquilles.",
          "Servez chaud directement dans la marmite de cuisson avec des frites."
        ]
      }
    },
    ingredients: [
      { name: { en: "Mussels (Mosselen / Moules)", nl: "Mosselen (Mosselen / Moules)", fr: "Moules fraîches (Mosselen / Moules)" }, amount: 2000, unit: "g", category: "Visafdeling" },
      { name: { en: "Celery stalks (Bladselder / Céleri)", nl: "Stronken bladselder (Bladselder / Céleri)", fr: "Céleri branche (Bladselder / Céleri)" }, amount: 4, unit: "st.", category: "Groenten & Fruit" },
      { name: { en: "Onions (Uien / Oignons)", nl: "Uien (Uien / Oignons)", fr: "Oignons (Uien / Oignons)" }, amount: 2, unit: "st.", category: "Groenten & Fruit" },
      { name: { en: "Potatoes (for fries)", nl: "Bintje aardappelen (voor frieten)", fr: "Pommes de terre (pour frites)" }, amount: 1000, unit: "g", category: "Groenten & Fruit" }
    ]
  }
];
