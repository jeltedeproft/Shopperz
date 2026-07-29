// Expanded Trilingual Recipe Database (English, Dutch, French)
// Includes strict allergen and diet indexing flags for fast filtering
window.initialRecipes = [
  {
    "id": "carbonnade-flamande",
    "prepTime": "25 mins",
    "cookTime": "2 hrs 30 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 4,
    "category": {
      "en": "Belgian Classics",
      "nl": "Belgische Klassiekers",
      "fr": "Classiques Belges"
    },
    "image": "images/carbonnade_flamande.jpg",
    "isGlutenFree": false,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": true,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Stoofvlees / Carbonnade Flamande",
        "subtitle": "Classic Belgian Beer Stew",
        "description": "A rich, slow-cooked beef stew made with Belgian dark abbey beer, mustard-spread bread, and a touch of Liège syrup.",
        "instructions": [
          "Cut the beef into large bite-sized chunks. Season with salt and pepper.",
          "Melt butter in a pot and brown the meat chunks in batches. Set aside.",
          "Sauté chopped onions on medium heat until soft and translucent.",
          "Add beef back to the pot, pour in the beer, and add the stock cube.",
          "Spread mustard on slices of bread and place them face down on the stew.",
          "Add bay leaves, thyme, and Liège syrup. Simmer for 2 to 2.5 hours on low heat.",
          "Remove herbs. Stir the dissolved bread into the sauce to thicken it."
        ]
      },
      "nl": {
        "title": "Stoofvlees / Carbonnade Flamande",
        "subtitle": "Klassieke Belgische Bierstoofpot",
        "description": "Een rijke, traag gegaarde rundsstoofpot met Belgisch donker abdijbier, boterhammen met mosterd en een lepel Luikse siroop.",
        "instructions": [
          "Snijd het rundvlees in grote stukken. Kruid met peper en zout.",
          "Smelt boter en schroei het vlees in porties dicht. Zet opzij.",
          "Stoof de uien glazig in dezelfde pan op middelhoog vuur.",
          "Doe het vlees terug, giet het bier erbij en voeg het bouillonblokje toe.",
          "Smeer mosterd op de boterhammen en leg ze met de mosterdkant naar beneden op het vlees.",
          "Voeg laurier, tijm en Luikse siroop toe. Laat 2 tot 2,5 uur sudderen op een laag vuur.",
          "Verwijder de kruiden. Roer de boterhammen door de saus om deze te binden."
        ]
      },
      "fr": {
        "title": "Stoofvlees / Carbonnade Flamande",
        "subtitle": "Ragoût de Boeuf à la Bière Belge",
        "description": "Un ragoût de boeuf riche mijoté à la bière d'abbaye brune belge, tartines de moutarde et une touche de sirop de Liège.",
        "instructions": [
          "Coupez le bœuf en morceaux. Assaisonnez de sel et de poivre.",
          "Faites chauffer le beurre et dorer la viande par portions. Réservez.",
          "Faites cuire les oignons émincés jusqu'à ce qu'ils soient translucides.",
          "Remettez le bœuf, versez la bière et ajoutez le cube de bouillon.",
          "Tartinez le pain de moutarde et posez-le face moutarde sur le ragoût.",
          "Ajoutez le laurier, le thym et le sirop de Liège. Laissez mijoter 2h à 2h30.",
          "Retirez les herbes et mélangez pour lier la sauce avec le pain dissous."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "Beef chuck (Stoofvlees / Carbonnades)",
          "nl": "Rundstoofvlees (Stoofvlees / Carbonnades)",
          "fr": "Carbonnades de boeuf (Stoofvlees / Carbonnades)"
        },
        "amount": 1000,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "Dark Abbey Beer (e.g., Rochefort, Chimay)",
          "nl": "Donker abdijbier (bv. Rochefort, Chimay)",
          "fr": "Bière brune d'abbaye (ex. Rochefort, Chimay)"
        },
        "amount": 660,
        "unit": "ml",
        "category": "Bieren & Dranken"
      },
      {
        "name": {
          "en": "Onions (Uien / Oignons)",
          "nl": "Uien (Uien / Oignons)",
          "fr": "Oignons (Uien / Oignons)"
        },
        "amount": 3,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Belgian Mustard (Mosterd / Moutarde)",
          "nl": "Belgische mosterd (Mosterd / Moutarde)",
          "fr": "Moutarde belge (Mosterd / Moutarde)"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "Slices of bread (Boterham / Pain)",
          "nl": "Boterhammen (Boterham / Pain)",
          "fr": "Tranches de pain (Boterham / Pain)"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "Liège Syrup (Luikse Siroop / Sirop de Liège)",
          "nl": "Luikse siroop (Luikse Siroop / Sirop de Liège)",
          "fr": "Sirop de Liège (Luikse Siroop / Sirop de Liège)"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "Butter (Boter / Beurre)",
          "nl": "Roomboter (Boter / Beurre)",
          "fr": "Beurre (Boter / Beurre)"
        },
        "amount": 50,
        "unit": "g",
        "category": "Zuivel & Eieren"
      }
    ]
  },
  {
    "id": "witloof-oven",
    "prepTime": "20 mins",
    "cookTime": "35 mins",
    "difficulty": {
      "en": "Easy",
      "nl": "Gemakkelijk",
      "fr": "Facile"
    },
    "servings": 4,
    "category": {
      "en": "Belgian Classics",
      "nl": "Belgische Klassiekers",
      "fr": "Classiques Belges"
    },
    "image": "images/witloof_gratin.jpg",
    "isGlutenFree": false,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": true,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Witloof in de Oven / Chicons au Gratin",
        "subtitle": "Belgian Endives wrapped in Ham",
        "description": "Tender Belgian endives wrapped in savory boiled ham, baked in a rich cheese sauce (mornay) and gratinéed to perfection.",
        "instructions": [
          "Trim the endives and cook in salted boiling water for 15 minutes. Drain thoroughly.",
          "Melt butter in a pan, stir in flour. Whisk in milk and simmer until thick.",
          "Stir in 100g of grated cheese to finish the Mornay sauce.",
          "Wrap each endive in a slice of ham and place in a baking dish.",
          "Nappe Mornay sauce over endives, sprinkle cheese on top.",
          "Bake at 200°C for 20-25 minutes until bubbly and golden."
        ]
      },
      "nl": {
        "title": "Witloof in de Oven / Chicons au Gratin",
        "subtitle": "Gegratineerd Witloof met Hesp",
        "description": "Heerlijk zacht gekookt witloof gerold in gekookte achterhesp, overgoten met een romige kaassaus en gegratineerd in de oven.",
        "instructions": [
          "Trim het witloof en kook 15 minuten in gezouten water. Laat goed uitlekken.",
          "Smelt boter, voeg bloem toe. Giet melk erbij en klop tot een gladde saus.",
          "Meng er 100g geraspte kaas door om de saus af te maken.",
          "Rol elk stronkje witloof in een sneetje hesp en leg in een ovenschaal.",
          "Overgiet met saus en bestrooi met de rest van de kaas.",
          "Bak 20-25 minuten op 200°C tot een goudgeel korstje ontstaat."
        ]
      },
      "fr": {
        "title": "Witloof in de Oven / Chicons au Gratin",
        "subtitle": "Chicons au Gratin Traditionnels",
        "description": "De tendres chicons belges enroulés dans du jambon cuit, nappés d'une sauce au fromage (mornay) et gratinés au four.",
        "instructions": [
          "Parez les chicons et cuisez-les à l'eau 15 minutes. Égouttez soigneusement.",
          "Faites fondre le beurre, ajoutez la farine. Versez le lait en fouettant.",
          "Incorporez 100g de fromage râpé pour lier la sauce Mornay.",
          "Enroulez chaque chicon dans une tranche de jambon et disposez dans un plat.",
          "Nappez de sauce, parsemez de fromage restant.",
          "Cuisez à 200°C pendant 20-25 minutes."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "Belgian Endives (Witloof / Chicons)",
          "nl": "Witloof (Witloof / Chicons)",
          "fr": "Chicons belges (Witloof / Chicons)"
        },
        "amount": 8,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Cooked Ham (Gekookte Hesp / Jambon)",
          "nl": "Gekookte achterham (Gekookte Hesp / Jambon)",
          "fr": "Jambon cuit (Gekookte Hesp / Jambon)"
        },
        "amount": 8,
        "unit": "slices",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "Grated Cheese (Gruyère / Emmental)",
          "nl": "Geraspte kaas (Gruyère / Emmental)",
          "fr": "Fromage râpé (Gruyère / Emmental)"
        },
        "amount": 200,
        "unit": "g",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "Whole Milk (Volle Melk / Lait)",
          "nl": "Volle melk (Volle Melk / Lait)",
          "fr": "Lait entier (Volle Melk / Lait)"
        },
        "amount": 750,
        "unit": "ml",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "Butter (Boter / Beurre)",
          "nl": "Boter (Boter / Beurre)",
          "fr": "Beurre (Boter / Beurre)"
        },
        "amount": 50,
        "unit": "g",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "Flour (Bloem / Farine)",
          "nl": "Bloem (Bloem / Farine)",
          "fr": "Farine de blé (Bloem / Farine)"
        },
        "amount": 50,
        "unit": "g",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "vol-au-vent",
    "prepTime": "30 mins",
    "cookTime": "1 hr 15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 4,
    "category": {
      "en": "Belgian Classics",
      "nl": "Belgische Klassiekers",
      "fr": "Classiques Belges"
    },
    "image": "images/vol_au_vent.jpg",
    "isGlutenFree": false,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Vol-au-Vent / Koninginnenhapje",
        "subtitle": "Chicken & Mushroom Puff Pastry",
        "description": "A comforting dish of tender shredded chicken, small meatballs, and fresh mushrooms in a creamy velouté sauce, served in puff pastry shells.",
        "instructions": [
          "Boil chicken with soup vegetables for 1 hour. Shred meat and keep the broth.",
          "Roll minced meat into small meatballs. Poach in broth for 3 minutes.",
          "Sauté sliced mushrooms in butter until golden.",
          "Make a velouté sauce using butter, flour, and 800ml chicken broth.",
          "Add chicken, meatballs, and mushrooms. Simmer for 5 minutes.",
          "Stir in cream, egg yolk, and lemon juice. Serve in warmed pastry shells."
        ]
      },
      "nl": {
        "title": "Vol-au-Vent / Koninginnenhapje",
        "subtitle": "Koninginnenhapje met Videekoppen",
        "description": "Klassiek romige kipragout met malse stukjes getrokken kip, gehaktballetjes en champignons in bladerdeegbakjes.",
        "instructions": [
          "Kook de kip gaar met soepgroenten (1 uur). Pluk het vlees, zeef de bouillon.",
          "Rol gehaktballetjes. Pocheer ze 3 minuten in de kippenbouillon.",
          "Sautéer de champignons goudbruin in boter.",
          "Maak een veloutésaus met boter, bloem en 800ml bouillon.",
          "Voeg kip, balletjes en champignons toe en laat 5 minuten koken.",
          "Meng room, eidooier en citroensap erdoor. Serveer in bladerdeegbakjes."
        ]
      },
      "fr": {
        "title": "Vol-au-Vent / Koninginnenhapje",
        "subtitle": "Bouchée à la Reine Traditionnelle",
        "description": "De la viande de poulet effilochée, des petites boulettes de viande et des champignons frais dans une sauce veloutée crémeuse, servie dans des croûtes feuilletées.",
        "instructions": [
          "Faites bouillir le poulet 1h. Effilochez la chair et réservez le bouillon.",
          "Pochez de petites boulettes de viande 3 minutes dans le bouillon chaud.",
          "Faites revenir les champignons au beurre.",
          "Préparez un velouté avec du beurre, de la farine et 800ml de bouillon.",
          "Ajoutez poulet, boulettes et champignons. Mijotez 5 minutes.",
          "Liez avec crème, jaune d'œuf et citron. Servez dans les croûtes chaudes."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "Whole Chicken (Poulet / Kip)",
          "nl": "Hele kip (Poulet / Kip)",
          "fr": "Poulet entier (Poulet / Kip)"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "Minced Meat (Gehakt / Haché)",
          "nl": "Gemengd gehakt (Gehakt / Haché)",
          "fr": "Hachis (Gehakt / Haché)"
        },
        "amount": 250,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "Puff Pastry Shells (Videekoppen)",
          "nl": "Videekoppen (Videekoppen)",
          "fr": "Croûtes feuilletées (Videekoppen)"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "Mushrooms (Champignons)",
          "nl": "Witte champignons (Champignons)",
          "fr": "Champignons de Paris (Champignons)"
        },
        "amount": 250,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Heavy Cream (Room / Crème)",
          "nl": "Volle room (Room / Crème)",
          "fr": "Crème liquide (Room / Crème)"
        },
        "amount": 150,
        "unit": "ml",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "Egg yolk (Eidooier / Jaune d'oeuf)",
          "nl": "Eidooier (Eidooier / Jaune d'oeuf)",
          "fr": "Jaune d'œuf (Eidooier / Jaune d'oeuf)"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Zuivel & Eieren"
      }
    ]
  },
  {
    "id": "stoemp-worst",
    "prepTime": "15 mins",
    "cookTime": "25 mins",
    "difficulty": {
      "en": "Easy",
      "nl": "Gemakkelijk",
      "fr": "Facile"
    },
    "servings": 4,
    "category": {
      "en": "Comfort Food",
      "nl": "Dagelijkse Kost",
      "fr": "Plats Réconfortants"
    },
    "image": "images/stoemp_worst.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": true,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Stoemp met Worst / Stoemp Saucisse",
        "subtitle": "Mashed Potatoes with Carrots & Leek",
        "description": "A hearty rustic mash of potatoes, leeks, and carrots, flavored with bacon bits and served with sizzling pork sausages and dark beer gravy.",
        "instructions": [
          "Peel potatoes and cut carrots and leeks.",
          "Boil vegetables together in salted water for 20 minutes.",
          "Fry bacon bits until crispy. Fry pork sausages in the same pan.",
          "Drain vegetables, mash coarsely with butter and milk.",
          "Mix in crispy bacon bits. Serve with sausages and gravy."
        ]
      },
      "nl": {
        "title": "Stoemp met Worst / Stoemp Saucisse",
        "subtitle": "Wortel- en Preistoemp met Worst",
        "description": "Een heerlijke stevige stamppot van aardappelen, wortelen en prei met spekjes, geserveerd met varkensworsten.",
        "instructions": [
          "Schil aardappelen en snijd prei en wortelen.",
          "Kook alles samen gaar in gezouten water (20 minuten).",
          "Bak spekjes krokant. Bak de worsten in hetzelfde vet.",
          "Giet groenten af, stamp grof en meng met boter en melk.",
          "Roer krokante spekjes erdoor. Serveer met de worst."
        ]
      },
      "fr": {
        "title": "Stoemp met Worst / Stoemp Saucisse",
        "subtitle": "Stoemp aux Carottes et Poireaux",
        "description": "Une purée rustique de pommes de terre, poireaux et carottes, agrémentée de lardons croustillants et servie avec des saucisses de porc.",
        "instructions": [
          "Pelez les pommes de terre, coupez les carottes et poireaux.",
          "Faites bouillir les légumes dans l'eau salée pendant 20 minutes.",
          "Grillez les lardons, puis cuisez les saucisses.",
          "Égouttez, écrasez grossièrement avec du beurre et du lait.",
          "Incorporez les lardons. Servez chaud avec les saucisses."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "Potatoes (Aardappelen / Pommes de terre)",
          "nl": "Bintje aardappelen (Aardappelen / Pommes de terre)",
          "fr": "Pommes de terre Bintje (Aardappelen / Pommes de terre)"
        },
        "amount": 1000,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Carrots (Wortelen / Carottes)",
          "nl": "Wortelen (Wortelen / Carottes)",
          "fr": "Carottes (Wortelen / Carottes)"
        },
        "amount": 3,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Leeks (Prei / Poireaux)",
          "nl": "Prei (Prei / Poireaux)",
          "fr": "Poireaux (Prei / Poireaux)"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Pork Sausages (Worsten / Saucisses)",
          "nl": "Varkensworsten (Worsten / Saucisses)",
          "fr": "Saucisses de porc (Worsten / Saucisses)"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "Bacon bits (Spekjes / Lardons)",
          "nl": "Spekblokjes (Spekjes / Lardons)",
          "fr": "Lardons fumés (Spekjes / Lardons)"
        },
        "amount": 125,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "Butter (Boter / Beurre)",
          "nl": "Boter (Boter / Beurre)",
          "fr": "Beurre (Boter / Beurre)"
        },
        "amount": 30,
        "unit": "g",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "Milk (Melk / Lait)",
          "nl": "Volle melk (Melk / Lait)",
          "fr": "Lait (Melk / Lait)"
        },
        "amount": 100,
        "unit": "ml",
        "category": "Zuivel & Eieren"
      }
    ]
  },
  {
    "id": "moules-frites",
    "prepTime": "20 mins",
    "cookTime": "10 mins",
    "difficulty": {
      "en": "Easy",
      "nl": "Gemakkelijk",
      "fr": "Facile"
    },
    "servings": 2,
    "category": {
      "en": "Seafood",
      "nl": "Vis & Zeevruchten",
      "fr": "Fruits de Mer"
    },
    "image": "images/mussels_fries.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": true,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Mosselen-Friet / Moules-Frites",
        "subtitle": "Classic Mussels & Fries",
        "description": "Fresh North Sea mussels steamed with celery, onions, leeks, and butter, served with crispy, double-fried Belgian fries.",
        "instructions": [
          "Wash mussels. Discard open shells that do not close when tapped.",
          "Chop celery stalks, onions, and white of leek.",
          "Melt butter in a large pot, sauté vegetables for 3 minutes.",
          "Add mussels and parsley, cover and steam on high heat.",
          "Shake pot after 3 minutes. Steam 3 more minutes until all shells open.",
          "Serve in the pot with hot frites and mayonnaise."
        ]
      },
      "nl": {
        "title": "Mosselen-Friet / Moules-Frites",
        "subtitle": "Zeeuwse Mosselen met Belgische Frietjes",
        "description": "Verse Noordzeemosselen gestoomd in de mosselpot met selder, ui, prei en roomboter, geserveerd met knapperige frieten.",
        "instructions": [
          "Spoel mosselen. Gooi open schelpen die niet sluiten weg.",
          "Snijd bladselder, uien en preiwit fijn.",
          "Smelt boter in een mosselpan, stoof groenten 3 minuten aan.",
          "Voeg mosselen en peterselie toe, kook afgedekt op hoog vuur.",
          "Schud de pan na 3 minuten. Stoom nog 3 minuten tot alle schelpen openstaan.",
          "Serveer direct met frietjes en mayonaise."
        ]
      },
      "fr": {
        "title": "Mosselen-Friet / Moules-Frites",
        "subtitle": "Moules-Frites Traditionnelles",
        "description": "Moules fraîches de la mer du Nord cuites à la vapeur avec céleri, oignons, poireaux et beurre, servies avec des frites croustillantes.",
        "instructions": [
          "Lavez les moules. Éliminez celles qui restent ouvertes.",
          "Hachez le céleri, les oignons et le poireau.",
          "Faites revenir les légumes dans le beurre 3 minutes.",
          "Ajoutez les moules, couvrez et cuisez à feu vif.",
          "Secouez la casserole après 3 minutes. Cuisez 3 minutes supplémentaires.",
          "Servez dans la marmite avec des frites et de la mayonnaise."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "Mussels (Mosselen / Moules)",
          "nl": "Mosselen (Mosselen / Moules)",
          "fr": "Moules fraîches (Mosselen / Moules)"
        },
        "amount": 2000,
        "unit": "g",
        "category": "Visafdeling"
      },
      {
        "name": {
          "en": "Celery stalks (Bladselder / Céleri)",
          "nl": "Bladselder (Bladselder / Céleri)",
          "fr": "Céleri branche (Bladselder / Céleri)"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Onions (Uien / Oignons)",
          "nl": "Uien (Uien / Oignons)",
          "fr": "Oignons (Uien / Oignons)"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Potatoes (Aardappelen / Pommes de terre)",
          "nl": "Bintje aardappelen (voor frieten)",
          "fr": "Pommes de terre (pour frites)"
        },
        "amount": 1000,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Butter (Boter / Beurre)",
          "nl": "Roomboter (Boter / Beurre)",
          "fr": "Beurre (Boter / Beurre)"
        },
        "amount": 30,
        "unit": "g",
        "category": "Zuivel & Eieren"
      }
    ]
  },
  {
    "id": "asperges-flamande",
    "prepTime": "15 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Easy",
      "nl": "Gemakkelijk",
      "fr": "Facile"
    },
    "servings": 4,
    "category": {
      "en": "Belgian Classics",
      "nl": "Belgische Klassiekers",
      "fr": "Classiques Belges"
    },
    "image": "images/asperges_flamande.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": true,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": true,
    "translations": {
      "en": {
        "title": "Asperges op z'n Vlaams / Asperges à la Flamande",
        "subtitle": "Flemish White Asparagus",
        "description": "Tender Belgian white asparagus served with a rich topping of hard-boiled eggs, melted butter, and fresh parsley.",
        "instructions": [
          "Peel white asparagus from head to bottom. Snap off tough woody ends.",
          "Boil asparagus in salted water for 8-10 minutes until tender. Drain.",
          "Hard-boil the eggs for 9 minutes, cool, peel, and chop finely.",
          "Melt butter in a pan over low heat (do not brown). Season with salt and pepper.",
          "Arrange warm asparagus on plates. Spoon chopped eggs in the center.",
          "Pour warm melted butter over eggs, garnish with fresh parsley."
        ]
      },
      "nl": {
        "title": "Asperges op z'n Vlaams / Asperges à la Flamande",
        "subtitle": "Vlaamse Witte Asperges",
        "description": "Klassiek meesterwerk van witte asperges geserveerd met hardgekookt ei, geklaarde boter en verse peterselie.",
        "instructions": [
          "Schil de witte asperges grondig vanaf de kop naar beneden. Snijd het houtachtige uiteinde eraf.",
          "Kook asperges 8-10 minuten gaar in gezouten water. Giet af.",
          "Kook eieren hard (9 minuten), schrik ze onder koud water en prak ze fijn.",
          "Smelt de boter zachtjes zonder te kleuren. Kruid met peper en zout.",
          "Schik warme asperges op borden. Strooi het geprakte ei erover.",
          "Schenk de gesmolten boter erover en garneer met verse peterselie."
        ]
      },
      "fr": {
        "title": "Asperges op z'n Vlaams / Asperges à la Flamande",
        "subtitle": "Asperges Blanches à la Flamande",
        "description": "Asperges blanches tendres servies avec des œufs durs écrasés, du beurre fondu clarifié et du persil plat.",
        "instructions": [
          "Pelez les asperges blanches de haut en bas. Coupez l'extrémité ligneuse.",
          "Faites cuire les asperges dans l'eau salée 8 à 10 minutes. Égouttez.",
          "Cuisez les œufs durs (9 minutes), refroidissez-les et écrasez-les finement.",
          "Faites fondre le beurre à feu doux sans coloration. Salez et poivrez.",
          "Dressez les asperges sur assiette, parsemez d'œufs écrasés.",
          "Nappez de beurre chaud clarifié et garnissez de persil frais."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "White Asparagus (Witte Asperges)",
          "nl": "Witte asperges (Witte Asperges)",
          "fr": "Asperges blanches (Witte Asperges)"
        },
        "amount": 1000,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Eggs (Eieren / Oeufs)",
          "nl": "Eieren (Eieren / Oeufs)",
          "fr": "Œufs (Eieren / Oeufs)"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "Butter (Boter / Beurre)",
          "nl": "Roomboter (Boter / Beurre)",
          "fr": "Beurre de ferme (Boter / Beurre)"
        },
        "amount": 150,
        "unit": "g",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "Fresh Parsley (Peterselie / Persil)",
          "nl": "Verse peterselie (Peterselie / Persil)",
          "fr": "Persil frais (Peterselie / Persil)"
        },
        "amount": 1,
        "unit": "bunch",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "tomate-crevettes",
    "prepTime": "15 mins",
    "cookTime": "0 mins",
    "difficulty": {
      "en": "Easy",
      "nl": "Gemakkelijk",
      "fr": "Facile"
    },
    "servings": 2,
    "category": {
      "en": "Seafood",
      "nl": "Vis & Zeevruchten",
      "fr": "Fruits de Mer"
    },
    "image": "images/tomate_crevettes.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": true,
    "translations": {
      "en": {
        "title": "Tomaat-Garnaal / Tomates aux Crevettes",
        "subtitle": "Belgian Shrimp Stuffed Tomatoes",
        "description": "Fresh cold tomatoes hollowed out and stuffed with grey North Sea shrimps folded in creamy Belgian mayonnaise. Fresh and low-carb.",
        "instructions": [
          "Slice the tops off the tomatoes and scoop out the seeds and ribs. Turn them upside down to drain.",
          "In a bowl, mix the grey shrimps with mayonnaise, lemon juice, salt, pepper, and finely chopped parsley.",
          "Lightly salt the inside of the hollowed tomatoes.",
          "Stuff each tomato generously with the shrimp mayo mixture.",
          "Put the tomato lids back on. Serve cold with a side salad."
        ]
      },
      "nl": {
        "title": "Tomaat-Garnaal / Tomates aux Crevettes",
        "subtitle": "Tomaat Gevuld met Grijze Garnalen",
        "description": "Klassiek voorgerecht van uitgeholde tomaten gevuld met verse Noordzeegarnalen gemengd met mayonaise. Koolhydraatarm en fris.",
        "instructions": [
          "Snijd de kapjes van de tomaten en hol ze uit. Laat ze omgekeerd uitlekken.",
          "Meng de grijze garnalen met mayonaise, citroensap, peper, zout en fijngehakte peterselie.",
          "Bestrooi de binnenkant van de tomaten met een klein beetje zout.",
          "Vul de tomaten rijkelijk met de garnalensla.",
          "Zet de kapjes terug op de tomaten. Serveer koud met kropsla."
        ]
      },
      "fr": {
        "title": "Tomaat-Garnaal / Tomates aux Crevettes",
        "subtitle": "Tomates farcies aux Crevettes Grises",
        "description": "Tomates évidées farcies de crevettes grises de la mer du Nord liées à la mayonnaise belge. Un classique rafraîchissant.",
        "instructions": [
          "Coupez le chapeau des tomates et évidez-les. Laissez-les égoutter.",
          "Mélangez les crevettes grises avec la mayonnaise, le citron, le persil haché, sel et poivre.",
          "Salez légèrement l'intérieur des tomates évidées.",
          "Remplissez généreusement les tomates avec la préparation aux crevettes.",
          "Reposez les chapeaux sur les tomates. Servez frais."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "Beefsteak Tomatoes (Vleestomaten)",
          "nl": "Vleestomaten (Vleestomaten)",
          "fr": "Tomates charnues (Vleestomaten)"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Grey North Sea Shrimps (Grijze Garnalen)",
          "nl": "Grijze Noordzeegarnalen (Grijze Garnalen)",
          "fr": "Crevettes grises (Grijze Garnalen)"
        },
        "amount": 300,
        "unit": "g",
        "category": "Visafdeling"
      },
      {
        "name": {
          "en": "Mayonnaise (Belgian style)",
          "nl": "Belgische mayonaise (Mayonaise)",
          "fr": "Mayonnaise belge (Mayonaise)"
        },
        "amount": 3,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "Lemon juice & Parsley",
          "nl": "Citroensap en peterselie",
          "fr": "Jus de citron et persil"
        },
        "amount": 1,
        "unit": "to taste",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "vegan-waterzooi",
    "prepTime": "20 mins",
    "cookTime": "30 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 4,
    "category": {
      "en": "Comfort Food",
      "nl": "Dagelijkse Kost",
      "fr": "Plats Réconfortants"
    },
    "image": "images/gentse_waterzooi.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": true,
    "isVegetarian": true,
    "isVegan": true,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Vegan Waterzooi",
        "subtitle": "Ghent Creamy Vegetable Stew",
        "description": "A cruelty-free, plant-based take on the famous Ghent Waterzooi, using tofu blocks and oat cream with root vegetables.",
        "instructions": [
          "Cut carrots, leeks, celery, and potatoes into small sticks.",
          "Cut firm tofu into bite-sized cubes. Pat dry and sauté in olive oil until golden.",
          "In a large pot, sauté the vegetables in oil for 5 minutes.",
          "Add vegetable broth and simmer for 15-20 minutes until vegetables are tender.",
          "Add oat cream (vegan) and the sautéed tofu cubes. Heat through.",
          "Stir in lemon juice and chopped parsley. Season with nutmeg, salt, and pepper."
        ]
      },
      "nl": {
        "title": "Vegan Waterzooi",
        "subtitle": "Gentse Waterzooi met Tofu",
        "description": "Een heerlijke veganistische variant op de traditionele Gentse Waterzooi, bereid met stevige tofu, haverroom en veel knolgroenten.",
        "instructions": [
          "Snijd wortelen, prei, selderij en aardappelen in staafjes.",
          "Snijd tofu in blokjes, dep droog en bak ze goudbruin in olijfol.",
          "Stoof de groenten aan in een grote kookpot met olijfol (5 minuten).",
          "Voeg groentenbouillon toe en laat 15-20 minuten garen tot groenten zacht zijn.",
          "Schenk de haverroom erbij en voeg de gebakken tofublokjes toe.",
          "Kruid af met citroensap, peterselie, nootmuskaat, peper en zout."
        ]
      },
      "fr": {
        "title": "Vegan Waterzooi",
        "subtitle": "Waterzooi Gantois Végétalien",
        "description": "Une version végétale du célèbre Waterzooi de Gand, avec du tofu doré, de la crème d'avoine et de savoureux légumes racines.",
        "instructions": [
          "Coupez les carottes, poireaux, céleri et pommes de terre en julienne.",
          "Coupez le tofu en cubes et faites-le dorer dans l'huile d'olive.",
          "Faites revenir les légumes dans une cocotte pendant 5 minutes.",
          "Versez le bouillon de légumes et laissez frémir 15-20 minutes.",
          "Incorporez la crème d'avoine et les cubes de tofu chaud.",
          "Assaisonnez de citron, persil, noix de muscade, sel et poivre."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "Firm Tofu (Natuurtofu)",
          "nl": "Stevige natuurtofu (Tofu)",
          "fr": "Tofu ferme (Tofu)"
        },
        "amount": 400,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "Carrots & Leeks & Celery",
          "nl": "Wortelen, prei en bladselder",
          "fr": "Carottes, poireaux et céleri"
        },
        "amount": 1,
        "unit": "bundle",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Potatoes (Aardappelen / Pommes de terre)",
          "nl": "Vastkokende aardappelen",
          "fr": "Pommes de terre"
        },
        "amount": 400,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Vegetable Broth (Groentenbouillon)",
          "nl": "Groentenbouillon",
          "fr": "Bouillon de légumes"
        },
        "amount": 750,
        "unit": "ml",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "Oat Cream (Haverroom / Crème d'avoine)",
          "nl": "Haverroom (Haverroom / Crème d'avoine)",
          "fr": "Crème d'avoine (Haverroom / Crème d'avoine)"
        },
        "amount": 200,
        "unit": "ml",
        "category": "Zuivel & Eieren"
      }
    ]
  },
  {
    "id": "chicoree-salade",
    "prepTime": "10 mins",
    "cookTime": "0 mins",
    "difficulty": {
      "en": "Easy",
      "nl": "Gemakkelijk",
      "fr": "Facile"
    },
    "servings": 2,
    "category": {
      "en": "Comfort Food",
      "nl": "Ontdek",
      "fr": "Plats Réconfortants"
    },
    "image": "images/witloof_gratin.jpg",
    "isGlutenFree": true,
    "isNutFree": false,
    "isDairyFree": true,
    "isEggFree": true,
    "isVegetarian": true,
    "isVegan": true,
    "isCandidaFriendly": true,
    "isKeto": true,
    "translations": {
      "en": {
        "title": "Candida-Friendly Witloof Salad",
        "subtitle": "Crispy Endives & Walnut Salad",
        "description": "A super clean, Candida-diet friendly raw endive salad tossed with healthy walnuts, extra virgin olive oil, and freshly squeezed lemon juice.",
        "instructions": [
          "Wash the Belgian endives, trim the root end, and slice them crosswise into thin rings.",
          "Chop walnuts coarsely.",
          "In a salad bowl, whisk together extra virgin olive oil, freshly squeezed lemon juice, salt, and freshly cracked black pepper.",
          "Add the sliced endives and walnuts to the bowl.",
          "Toss everything together gently until well coated. Serve immediately as a clean side dish."
        ]
      },
      "nl": {
        "title": "Candida-vriendelijke Witloofsla",
        "subtitle": "Knapperige Witloofsalade met Walnoten",
        "description": "Een supergezonde, Candida-dieet vriendelijke rauwe witloofsalade met walnoten, extra vierge olijfolie en vers citroensap.",
        "instructions": [
          "Was de stronkjes witloof, verwijder het bittere hart en snijd ze in fijne ringen.",
          "Hak de walnoten grof.",
          "Klop olijfolie, citroensap, zout en versgemalen zwarte peper tot een vinaigrette.",
          "Voeg het witloof en de walnoten toe aan de kom.",
          "Meng alles voorzichtig tot de dressing goed verdeeld is. Serveer direct."
        ]
      },
      "fr": {
        "title": "Salade de Chicons Anti-Candida",
        "subtitle": "Salade Croquante de Chicons et Noix",
        "description": "Une salade crue de chicons super saine, approuvée pour le régime Candida, garnie de noix, d'huile d'olive vierge et de citron.",
        "instructions": [
          "Lavez les chicons, enlevez le pied amer et coupez-les en fines rondelles.",
          "Hachez grossièrement les noix.",
          "Mélangez l'huile d'olive, le jus de citron, le sel et le poivre noir.",
          "Ajoutez les chicons émincés et les noix dans le saladier.",
          "Mélangez délicatement pour napper la salade. Servez aussitôt."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "Belgian Endives (Witloof / Chicons)",
          "nl": "Witloof (Witloof / Chicons)",
          "fr": "Chicons (Witloof / Chicons)"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Walnuts (Walnoten / Noix)",
          "nl": "Walnoten (Walnoten / Noix)",
          "fr": "Noix (Walnoten / Noix)"
        },
        "amount": 75,
        "unit": "g",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "Extra Virgin Olive Oil (Olijfolie)",
          "nl": "Extra vierge olijfolie (Olijfolie)",
          "fr": "Huile d'olive extra vierge (Olijfolie)"
        },
        "amount": 3,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "Lemon juice (Citroensap / Jus de citron)",
          "nl": "Citroensap (Citroensap / Jus de citron)",
          "fr": "Jus de citron frais (Citroensap / Jus de citron)"
        },
        "amount": 1,
        "unit": "el",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "keto-stoofvlees",
    "prepTime": "25 mins",
    "cookTime": "2 hrs 15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 4,
    "category": {
      "en": "Belgian Classics",
      "nl": "Belgische Klassiekers",
      "fr": "Classiques Belges"
    },
    "image": "images/carbonnade_flamande.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": true,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": true,
    "translations": {
      "en": {
        "title": "Keto & Candida Stoofvlees",
        "subtitle": "Sugar & Gluten-Free Beef Stew",
        "description": "A modified low-carb Belgian beef stew. We cook with unsweetened bone broth, apple cider vinegar, and thickeners instead of bread or sweet abbey beers.",
        "instructions": [
          "Dice the beef chuck. Season with salt, pepper, and nutmeg.",
          "Heat olive oil in a pan and sear beef batches. Transfer to a stewpot.",
          "Sauté diced onions and garlic until translucent. Add to stewpot.",
          "Pour bone broth and apple cider vinegar over the beef until covered.",
          "Add bay leaves, sprigs of thyme, and cloves.",
          "Cover and simmer on low heat for 2 hours until beef is tender.",
          "Thicken the sauce using a tiny pinch of xanthan gum if desired. Serve with keto vegetables."
        ]
      },
      "nl": {
        "title": "Keto & Candida Stoofvlees",
        "subtitle": "Suiker- en Glutenvrij Stoofvlees",
        "description": "Belgisch stoofvlees aangepast voor keto en candida diëten. Gekookt met bottenbouillon, appelazijn en specerijen zonder bier of brood.",
        "instructions": [
          "Snijd het rundvlees in blokjes. Kruid met zout, peper en nootmuskaat.",
          "Bak het vlees bruin in olijfolie en doe in een stoofpot.",
          "Fruit de uien en knoflook in dezelfde pan en voeg toe aan de pot.",
          "Giet bottenbouillon en appelciderazijn bij de vleespot tot alles onder staat.",
          "Voeg laurierblaadjes, tijm en kruidnagels toe.",
          "Laat 2 uur sudderen onder deksel tot het vlees botermals is.",
          "Bind de saus met een snufje xanthaangom. Serveer met keto groenten."
        ]
      },
      "fr": {
        "title": "Carbonnade Keto & Anti-Candida",
        "subtitle": "Ragoût de Boeuf sans Sucre ni Gluten",
        "description": "Une version pauvre en glucides de la carbonnade. Cuisinée au bouillon d'os, vinaigre de cidre et épices sans bière ni pain.",
        "instructions": [
          "Coupez la viande en cubes. Assaisonnez de sel, poivre et muscade.",
          "Saisissez la viande à l'huile d'olive et transférez dans une cocotte.",
          "Faites revenir les oignons et l'ail. Ajoutez à la cocotte.",
          "Versez le bouillon d'os et le vinaigre de cidre pour couvrir la viande.",
          "Ajoutez le laurier, le thym et les clous de girofle.",
          "Mijotez 2 heures à feu doux sous couvercle.",
          "Épaississez la sauce avec une pincée de gomme xanthane."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "Beef chuck (Stoofvlees / Carbonnades)",
          "nl": "Rundstoofvlees (Stoofvlees / Carbonnades)",
          "fr": "Carbonnades de boeuf (Stoofvlees / Carbonnades)"
        },
        "amount": 1000,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "Beef Bone Broth (Bottenbouillon)",
          "nl": "Runderbottenbouillon (Bouillon)",
          "fr": "Bouillon d'os de boeuf (Bouillon)"
        },
        "amount": 500,
        "unit": "ml",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "Onions & Garlic (Uien / Oignons)",
          "nl": "Uien en knoflook",
          "fr": "Oignons et ail"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Apple Cider Vinegar (Appelazijn)",
          "nl": "Appelciderazijn (Azijn)",
          "fr": "Vinaigre de cidre (Vinaigre)"
        },
        "amount": 3,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "Extra Virgin Olive Oil (Olijfolie)",
          "nl": "Olijfolie (Olijfolie)",
          "fr": "Huile d'olive (Olijfolie)"
        },
        "amount": 3,
        "unit": "el",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "gaufre-liege",
    "prepTime": "20 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Hard",
      "nl": "Moeilijk",
      "fr": "Difficile"
    },
    "servings": 6,
    "category": {
      "en": "Comfort Food",
      "nl": "Dagelijkse Kost",
      "fr": "Desserts"
    },
    "image": "images/gaufre_liege.jpg",
    "isGlutenFree": false,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": true,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Luikse Wafels / Gaufres de Liège",
        "subtitle": "Belgian Pearl Sugar Waffles",
        "description": "Classic sweet, thick, and chewy Belgian waffles made with yeast dough and embedded pearl sugar that caramelises on the waffle iron.",
        "instructions": [
          "Dissolve yeast in warm milk with a pinch of sugar. Let sit for 5 minutes.",
          "Mix flour and salt in a bowl. Add the yeast milk and eggs, kneading into a sticky dough.",
          "Gradually incorporate softened butter, kneading until smooth. Cover and rise for 30 minutes.",
          "Gently fold the Belgian pearl sugar (parelsuiker) into the dough.",
          "Divide dough into small equal balls and let rest for 10 minutes.",
          "Bake in a hot waffle iron until caramelized and golden brown (about 3-4 minutes)."
        ]
      },
      "nl": {
        "title": "Luikse Wafels / Gaufres de Liège",
        "subtitle": "Suikerwafels met Parelsuiker",
        "description": "Klassieke zoete en zachte Belgische suikerwafels met gistdeeg en gekarameliseerde parelsuiker.",
        "instructions": [
          "Los de gist op in lauwe melk met suiker. Laat 5 minuten staan.",
          "Meng bloem en zout. Voeg gistmelk en eieren toe en kneed tot een plakkerig deeg.",
          "Voeg boter toe en kneed tot een glad deeg. Laat 30 minuten rijzen onder een doek.",
          "Kneed de parelsuiker voorzichtig door het gerezen deeg.",
          "Verdeel het deeg in bolletjes en laat 10 minuten rusten.",
          "Bak de wafels goudbruin in een heet wafelijzer tot de suiker karamelliseert."
        ]
      },
      "fr": {
        "title": "Luikse Wafels / Gaufres de Liège",
        "subtitle": "Gaufres de Liège au Sucre Perlé",
        "description": "Gaufres belges épaisses et caramélisées, préparées avec une pâte levée et du gros sucre perlé.",
        "instructions": [
          "Diluez la levure dans le lait tiède et laissez reposer 5 minutes.",
          "Mélangez farine et sel. Ajoutez la levure et les œufs, puis pétrissez.",
          "Incorporez le beurre mou et pétrissez. Laissez lever 30 minutes sous un linge.",
          "Incorporez délicatement le sucre perlé à la pâte.",
          "Divisez en petites boules de pâte et laissez reposer 10 minutes.",
          "Cuisez dans un gaufrier chaud jusqu'à caramélisation."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "Flour (Bloem / Farine)",
          "nl": "Tarwebloem (Bloem / Farine)",
          "fr": "Farine de blé (Bloem / Farine)"
        },
        "amount": 375,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "Belgian Pearl Sugar (Parelsuiker / Sucre perlé)",
          "nl": "Parelsuiker (Parelsuiker / Sucre perlé)",
          "fr": "Sucre perlé belge (Parelsuiker / Sucre perlé)"
        },
        "amount": 150,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "Butter (Boter / Beurre)",
          "nl": "Boter (Boter / Beurre)",
          "fr": "Beurre (Boter / Beurre)"
        },
        "amount": 140,
        "unit": "g",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "Whole Milk (Melk / Lait)",
          "nl": "Lauwe melk (Melk / Lait)",
          "fr": "Lait tiède (Melk / Lait)"
        },
        "amount": 100,
        "unit": "ml",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "Dry Yeast (Gist / Levure)",
          "nl": "Droge gist (Gist / Levure)",
          "fr": "Levure de boulanger (Gist / Levure)"
        },
        "amount": 7,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "Eggs (Eieren / Oeufs)",
          "nl": "Eieren (Eieren / Oeufs)",
          "fr": "Œufs (Eieren / Oeufs)"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Zuivel & Eieren"
      }
    ]
  },
  {
    "id": "vegan-stoemp",
    "prepTime": "15 mins",
    "cookTime": "25 mins",
    "difficulty": {
      "en": "Easy",
      "nl": "Gemakkelijk",
      "fr": "Facile"
    },
    "servings": 4,
    "category": {
      "en": "Comfort Food",
      "nl": "Dagelijkse Kost",
      "fr": "Plats Réconfortants"
    },
    "image": "images/stoemp_worst.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": true,
    "isVegetarian": true,
    "isVegan": true,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Vegan & Allergen-Free Stoemp",
        "subtitle": "Potato & Leek Mash with Olive Oil",
        "description": "A comforting dairy-free and vegan mash of potatoes and green leeks, seasoned with nutmeg, sea salt, and enriched with premium extra virgin olive oil.",
        "instructions": [
          "Peel potatoes and chop leeks into rings.",
          "Boil potatoes and leeks in salted water for 20 minutes until tender.",
          "Drain vegetables, keeping a small splash of cooking water.",
          "Mash the mixture coarsely with a potato masher.",
          "Drizzle in olive oil, stir in nutmeg, sea salt, and black pepper. Serve warm."
        ]
      },
      "nl": {
        "title": "Vegan & Allergeenvrije Stoemp",
        "subtitle": "Aardappel- en Preistoemp met Olijfolie",
        "description": "Een heerlijke veganistische en lactosevrije stamppot van aardappelen en prei, op smaak gebracht met nootmuskaat en extra vierge olijfolie.",
        "instructions": [
          "Schil de aardappelen en snijd de prei in ringen.",
          "Kook alles 20 minuten gaar in gezouten water.",
          "Giet af, bewaar een klein beetje kookvocht.",
          "Stamp de groenten grof met een aardappelstamper.",
          "Voeg olijfolie, nootmuskaat, zout en peper toe en roer goed door."
        ]
      },
      "fr": {
        "title": "Stoemp Végan et Sans Allergènes",
        "subtitle": "Purée Rustique Poireaux à l'Huile d'Olive",
        "description": "Un stoemp réconfortant sans produits laitiers et 100% végétalien à base de poireaux, pommes de terre, muscade et huile d'olive.",
        "instructions": [
          "Pelez les pommes de terre et émincez les poireaux.",
          "Faites bouillir le tout dans de l'eau salée pendant 20 minutes.",
          "Égouttez en réservant un filet d'eau de cuisson.",
          "Écrasez grossièrement au presse-purée.",
          "Incorporez l'huile d'olive, la noix de muscade, le sel et le poivre."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "Potatoes (Bintje / Aardappelen)",
          "nl": "Aardappelen (Bintje / Aardappelen)",
          "fr": "Pommes de terre Bintje"
        },
        "amount": 1000,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Leeks (Prei / Poireaux)",
          "nl": "Prei (Prei / Poireaux)",
          "fr": "Poireaux (Prei / Poireaux)"
        },
        "amount": 3,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "Extra Virgin Olive Oil (Olijfolie)",
          "nl": "Extra vierge olijfolie (Olijfolie)",
          "fr": "Huile d'olive extra vierge"
        },
        "amount": 4,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "Nutmeg & Sea Salt",
          "nl": "Nootmuskaat en zeezout",
          "fr": "Noix de muscade et sel marin"
        },
        "amount": 1,
        "unit": "to taste",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "imported-1785325890322",
    "prepTime": "15 mins",
    "cookTime": "30 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 4,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "images/witloof_gratin.jpg",
    "isGlutenFree": false,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Teriyaki Chicken Casserole",
        "subtitle": "Imported Recipe",
        "description": "Traditional Japanese Chicken compiled from TheMealDB.",
        "instructions": [
          "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.",
          "Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.",
          "Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.",
          "Place the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.",
          "*Meanwhile, steam or cook the vegetables according to package directions.",
          "Add the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!"
        ]
      },
      "nl": {
        "title": "Teriyaki kipschotel",
        "subtitle": "Geïmporteerd recept",
        "description": "Traditionele Japanse Kip samengesteld uit TheMealDB.",
        "instructions": [
          "Verwarm de oven voor op 350 ° F. Spuit een 9x13-inch bakvorm in met antiaanbakspray.",
          "Combineer sojasaus, ½ kopje water, bruine suiker, gember en knoflook in een kleine pan en dek af. Breng op middelhoog vuur aan de kook. Verwijder het deksel en kook gedurende één minuut zodra het kookt.",
          "Roer ondertussen in een aparte schaal het maïszetmeel en 2 eetlepels water tot een gladde massa. Zodra de saus kookt, voeg je het mengsel toe aan de pan en roer om te combineren. Kook tot de saus begint in te dikken en haal dan van het vuur.",
          "Plaats de kipfilets in de voorbereide pan. Giet een kopje saus over de kip. Plaats de kip in de oven en bak 35 minuten of tot hij gaar is. Haal het uit de oven en trek de kip in de schaal met twee vorken uit elkaar.",
          "* Stoom of kook ondertussen de groenten volgens de aanwijzingen op de verpakking.",
          "Voeg de gekookte groenten en rijst toe aan de ovenschotel met de kip. Voeg het grootste deel van de resterende saus toe en bewaar een beetje om over de bovenkant te sprenkelen bij het serveren. Meng alles voorzichtig in de ovenschaal tot het gemengd is. Zet terug in de oven en kook 15 minuten. Haal uit de oven en laat 5 minuten staan ​​voordat je het serveert. Besprenkel elke portie met de resterende saus. Genieten!"
        ]
      },
      "fr": {
        "title": "Casserole de poulet teriyaki",
        "subtitle": "Recette importée",
        "description": "Poulet japonais traditionnel compilé à partir de TheMealDB.",
        "instructions": [
          "Préchauffer le four à 350° F. Vaporiser un plat allant au four de 9 x 13 pouces avec un spray antiadhésif.",
          "Mélanger la sauce soja, ½ tasse d'eau, la cassonade, le gingembre et l'ail dans une petite casserole et couvrir. Porter à ébullition à feu moyen. Retirez le couvercle et laissez cuire une minute après ébullition.",
          "Pendant ce temps, mélangez la fécule de maïs et 2 cuillères à soupe d'eau dans un plat séparé jusqu'à consistance lisse. Une fois la sauce bouillante, ajoutez le mélange dans la casserole et mélangez. Cuire jusqu'à ce que la sauce commence à épaissir puis retirer du feu.",
          "Placer les poitrines de poulet dans le moule préparé. Versez une tasse de sauce sur le poulet. Placer le poulet au four et cuire au four 35 minutes ou jusqu'à ce qu'il soit bien cuit. Retirer du four et émincer le poulet dans le plat à l'aide de deux fourchettes.",
          "*Pendant ce temps, faites cuire les légumes à la vapeur ou à la vapeur selon les instructions sur l'emballage.",
          "Ajouter les légumes cuits et le riz dans la cocotte avec le poulet. Ajouter la majeure partie de la sauce restante, en réservant un peu pour arroser le dessus au moment de servir. Mélangez délicatement le tout dans la cocotte jusqu'à ce que le tout soit bien mélangé. Remettre au four et cuire 15 minutes. Retirer du four et laisser reposer 5 minutes avant de servir. Arroser chaque portion du reste de la sauce. Apprécier!"
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 3,
        "unit": "/4 cup",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "water",
          "nl": "water",
          "fr": "eau"
        },
        "amount": 1,
        "unit": "/2 cup",
        "category": "Bieren & Dranken"
      },
      {
        "name": {
          "en": "brown sugar",
          "nl": "bruine suiker",
          "fr": "cassonade"
        },
        "amount": 1,
        "unit": "/4 cup",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "ground ginger",
          "nl": "gemalen gember",
          "fr": "gingembre moulu"
        },
        "amount": 1,
        "unit": "/2 teaspoon",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "minced garlic",
          "nl": "gehakte knoflook",
          "fr": "ail émincé"
        },
        "amount": 1,
        "unit": "/2 teaspoon",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "cornstarch",
          "nl": "maïszetmeel",
          "fr": "maïzena"
        },
        "amount": 4,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken breasts",
          "nl": "kippenborsten",
          "fr": "poitrines de poulet"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "stir-fry vegetables",
          "nl": "roerbak groenten",
          "fr": "légumes sautés"
        },
        "amount": 1,
        "unit": "(12 oz.)",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "brown rice",
          "nl": "bruine rijst",
          "fr": "riz brun"
        },
        "amount": 375,
        "unit": "g",
        "category": "Kruidenier"
      }
    ]
  }
];
