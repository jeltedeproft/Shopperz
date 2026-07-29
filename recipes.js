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
  },
  {
    "id": "spoonacular-659135",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 2,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/659135-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Salmon with roasted vegetables",
        "subtitle": "Spoonacular Import",
        "description": "Salmon with roasted vegetables takes approximately 45 minutes from beginning to end. For $5.2 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. This recipe serves 2. One serving contains 496 calories, 39g of protein, and 18g of fat. Head to the store and pick up lemon juice, salt, carrot, and a few other things to make it today. Not a lot of people made this recipe, and 7 would say it hit the spot. It works well as a main course. It is a good option if you're following a gluten free, dairy free, whole 30, and pescatarian diet. It is brought to you by Foodista. Overall, this recipe earns a great spoonacular score of 94%. If you like this recipe, take a look at these similar recipes: Roasted Salmon & Vegetables, Roasted Salmon & Vegetables, and Salmon with roasted vegetables.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Zalm met geroosterde groenten",
        "subtitle": "Spoonacular-import",
        "description": "Zalm met geroosterde groenten duurt van begin tot eind ongeveer 45 minuten. Voor $ 5,2 per portie dekt dit recept 45% van uw dagelijkse behoefte aan vitamines en mineralen. Dit recept is voor 2 personen. Eén portie bevat 496 calorieën, 39 g eiwit en 18 g vet. Ga naar de winkel en koop citroensap, zout, wortel en nog een paar andere dingen om het vandaag te maken. Niet veel mensen hebben dit recept gemaakt, en 7 zouden zeggen dat het een schot in de roos was. Het werkt goed als hoofdgerecht. Het is een goede optie als u een glutenvrij, zuivelvrij, geheel 30- en pescatarisch dieet volgt. Het wordt u aangeboden door Foodista. Over het geheel genomen verdient dit recept een geweldige lepelscore van 94%. Als je dit recept lekker vindt, kijk dan eens naar deze vergelijkbare recepten: Geroosterde zalm en groenten, Geroosterde zalm en groenten en Zalm met geroosterde groenten.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Saumon aux légumes rôtis",
        "subtitle": "Import Spoonacular",
        "description": "Le saumon aux légumes rôtis prend environ 45 minutes du début à la fin. Pour 5,2 $ par portion, cette recette couvre 45 % de vos besoins quotidiens en vitamines et minéraux. Cette recette en sert 2. Une portion contient 496 calories, 39 g de protéines et 18 g de matières grasses. Rendez-vous au magasin et procurez-vous du jus de citron, du sel, des carottes et quelques autres éléments pour le préparer aujourd'hui. Peu de gens ont fait cette recette, et 7 diraient qu’elle a fait mouche. Cela fonctionne bien comme plat principal. C'est une bonne option si vous suivez un régime sans gluten, sans produits laitiers, entier 30 et pescatarien. Il vous est présenté par Foodista. Dans l'ensemble, cette recette obtient un excellent score cuillère de 94 %. Si vous aimez cette recette, jetez un œil à ces recettes similaires : Saumon rôti et légumes, Saumon rôti et légumes et Saumon aux légumes rôtis.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "potato",
          "nl": "aardappel",
          "fr": "pomme de terre"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "parsnip",
          "nl": "pastinaak",
          "fr": "panais"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "carrot",
          "nl": "wortel",
          "fr": "carotte"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "cherry tomatoes",
          "nl": "kerstomaatjes",
          "fr": "tomates cerises"
        },
        "amount": 150,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "salmon",
          "nl": "zalm",
          "fr": "saumon"
        },
        "amount": 2,
        "unit": "fillet",
        "category": "Visafdeling"
      },
      {
        "name": {
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "lemon juice",
          "nl": "citroensap",
          "fr": "jus de citron"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 2,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "rosemary and thyme",
          "nl": "rozemarijn en tijm",
          "fr": "romarin et thym"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-642619",
    "prepTime": "25 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/642619-312x231.jpg",
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
        "title": "Feta Encrusted Salmon",
        "subtitle": "Spoonacular Import",
        "description": "Fetan Encrusted Salmon takes about 25 minutes from beginning to end. For $5.06 per serving, this recipe covers 36% of your daily requirements of vitamins and minerals. One serving contains 388 calories, 44g of protein, and 15g of fat. This recipe serves 4. This recipe from Foodista requires dill, salmon fillets, sea salt, and olive oil. 1 person found this recipe to be yummy and satisfying. It works well as a main course. It is a good option if you're following a pescatarian diet. With a spoonacular score of 92%, this dish is excellent. If you like this recipe, you might also like recipes such as Almond Encrusted Salmon, Thyme Encrusted Salmon with Blackberry Gastrique, and Sweet and Spicy Dijon Encrusted Salmon.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Met feta ingelegde zalm",
        "subtitle": "Spoonacular-import",
        "description": "Fetan Encrusted Salmon duurt ongeveer 25 minuten van begin tot eind. Voor $ 5,06 per portie dekt dit recept 36% van uw dagelijkse behoefte aan vitamines en mineralen. Eén portie bevat 388 calorieën, 44 g eiwit en 15 g vet. Dit recept is voor 4 personen. Voor dit recept van Foodista zijn dille, zalmfilets, zeezout en olijfolie nodig. 1 persoon vond dit recept lekker en bevredigend. Het werkt goed als hoofdgerecht. Het is een goede optie als je een pescatarisch dieet volgt. Met een lepelscore van 92% is dit gerecht uitstekend. Als je dit recept lekker vindt, vind je misschien ook wel recepten leuk zoals met amandel ingelegde zalm, met tijm ingelegde zalm met Blackberry Gastrique en zoete en pittige uit Dijon ingelegde zalm.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Saumon incrusté de feta",
        "subtitle": "Import Spoonacular",
        "description": "Le saumon incrusté de fetan prend environ 25 minutes du début à la fin. Pour 5,06 $ par portion, cette recette couvre 36 % de vos besoins quotidiens en vitamines et minéraux. Une portion contient 388 calories, 44 g de protéines et 15 g de matières grasses. Cette recette en sert 4. Cette recette de Foodista nécessite de l'aneth, des filets de saumon, du sel marin et de l'huile d'olive. 1 personne a trouvé cette recette délicieuse et satisfaisante. Cela fonctionne bien comme plat principal. C'est une bonne option si vous suivez un régime pescatarien. Avec un score cuillère de 92%, ce plat est excellent. Si vous aimez cette recette, vous aimerez peut-être aussi des recettes telles que Saumon incrusté d'amandes, Saumon incrusté de thym et gastrique de mûres et Saumon incrusté de Dijon sucré et épicé.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "dill",
          "nl": "dille",
          "fr": "aneth"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "feta",
          "nl": "feta",
          "fr": "feta"
        },
        "amount": 113,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "juice of lemon",
          "nl": "sap van citroen",
          "fr": "jus de citron"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "panko",
          "nl": "panko",
          "fr": "panko"
        },
        "amount": 125,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "bell pepper",
          "nl": "paprika",
          "fr": "poivron"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salmon fillets",
          "nl": "zalmfilets",
          "fr": "filets de saumon"
        },
        "amount": 680,
        "unit": "g",
        "category": "Visafdeling"
      },
      {
        "name": {
          "en": "sea salt",
          "nl": "zeezout",
          "fr": "sel de mer"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-654435",
    "prepTime": "25 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 2,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/654435-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Pan Seared Salmon",
        "subtitle": "Spoonacular Import",
        "description": "You can never have too many main course recipes, so give Pan Seared Salmon a try. This recipe serves 2. One portion of this dish contains about 34g of protein, 38g of fat, and a total of 485 calories. For $4.2 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. 2 people were glad they tried this recipe. From preparation to the plate, this recipe takes around 25 minutes. It is brought to you by Foodista. It is a good option if you're following a gluten free, dairy free, paleolithic, and primal diet. If you have pepper, dill, salmon fillets, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 90%. This score is spectacular. If you like this recipe, you might also like recipes such as Pan Seared Honey Glazed Salmon with Browned Butter Lime Sauce – The Best Salmon I’ve Ever Eaten, Pan Seared Honey Glazed Salmon with Browned Butter Lime Sauce – The Best Salmon I’ve Ever Eaten, and Pan-seared Salmon.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "In de pan geschroeide zalm",
        "subtitle": "Spoonacular-import",
        "description": "Je kunt nooit genoeg hoofdgerechtrecepten hebben, dus probeer Pan Seared Salmon eens. Dit recept is voor 2 personen. Eén portie van dit gerecht bevat ongeveer 34 g eiwit, 38 g vet en in totaal 485 calorieën. Voor $ 4,2 per portie dekt dit recept 26% van uw dagelijkse behoefte aan vitamines en mineralen. 2 mensen waren blij dat ze dit recept probeerden. Van bereiding tot op het bord duurt dit recept ongeveer 25 minuten. Het wordt u aangeboden door Foodista. Het is een goede optie als je een glutenvrij, zuivelvrij, paleolithisch en oerdieet volgt. Als je peper, dille, zalmfilets en nog wat andere ingrediënten bij de hand hebt, kun je het maken. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 90% verdient. Deze score is spectaculair. Als je dit recept lekker vindt, vind je misschien ook wel recepten leuk zoals in de pan aangebraden honinggeglazuurde zalm met gebruinde boter-limoensaus – de beste zalm die ik ooit heb gegeten, in de pan geschroeide honinggeglazuurde zalm met gebruinde boter-limoensaus – de beste zalm die ik ooit heb gegeten, en in de pan geschroeide zalm.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Saumon poêlé",
        "subtitle": "Import Spoonacular",
        "description": "Vous ne pouvez jamais avoir trop de recettes de plats principaux, alors essayez le saumon poêlé. Cette recette en sert 2. Une portion de ce plat contient environ 34 g de protéines, 38 g de matières grasses et un total de 485 calories. Pour 4,2 $ par portion, cette recette couvre 26 % de vos besoins quotidiens en vitamines et minéraux. 2 personnes étaient contentes d'avoir essayé cette recette. De la préparation à l'assiette, cette recette prend environ 25 minutes. Il vous est présenté par Foodista. C'est une bonne option si vous suivez un régime sans gluten, sans produits laitiers, paléolithique et primal. Si vous avez du poivre, de l'aneth, des filets de saumon et quelques autres ingrédients sous la main, vous pouvez le préparer. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 90 %. Ce score est spectaculaire. Si vous aimez cette recette, vous aimerez peut-être aussi des recettes telles que Saumon glacé au miel poêlé avec sauce au beurre et au citron vert doré – Le meilleur saumon que j'ai jamais mangé, Saumon glacé au miel poêlé avec sauce au beurre et au citron vert doré – Le meilleur saumon que j'ai jamais mangé et Saumon poêlé.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "pepper",
          "nl": "peper",
          "fr": "poivre"
        },
        "amount": 0.3,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "dill",
          "nl": "dille",
          "fr": "aneth"
        },
        "amount": 1,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "garlic clove",
          "nl": "teentje knoflook",
          "fr": "gousse d'ail"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "lemon juice",
          "nl": "citroensap",
          "fr": "jus de citron"
        },
        "amount": 1,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "lemon wedges",
          "nl": "partjes citroen",
          "fr": "quartiers de citron"
        },
        "amount": 2,
        "unit": "servings",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 60,
        "unit": "ml",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salmon fillets",
          "nl": "zalmfilets",
          "fr": "filets de saumon"
        },
        "amount": 340,
        "unit": "g",
        "category": "Visafdeling"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 0.1,
        "unit": "kl",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-634476",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/634476-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Bbq Chicken",
        "subtitle": "Spoonacular Import",
        "description": "The recipe Bbq Chicken can be made in approximately 45 minutes. For 93 cents per serving, you get a main course that serves 4. One portion of this dish contains about 37g of protein, 29g of fat, and a total of 478 calories. Head to the store and pick up soy sauce, worcestershire sauce, mustard, and a few other things to make it today. It is brought to you by Foodista. 2 people have made this recipe and would make it again. It is a good option if you're following a gluten free, dairy free, and fodmap friendly diet. All things considered, we decided this recipe deserves a spoonacular score of 44%. This score is solid. Try BBQ Chicken Pizza: A Satisfying Supper & Stubb's BBQ Sauce Giveaway, BBQ Chicken Salad with Creamy BBQ Cilantro Lime Dressing, and Grilled BBQ Chicken Pizza, with Cherry Chipotle BBQ Sauce for similar recipes.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "BBQ-kip",
        "subtitle": "Spoonacular-import",
        "description": "Het recept Bbq Kip maak je in ongeveer 45 minuten. Voor 93 cent per portie krijg je een hoofdgerecht voor 4 personen. Eén portie van dit gerecht bevat ongeveer 37 gram eiwit, 29 gram vet en in totaal 478 calorieën. Ga naar de winkel en koop sojasaus, worcestershiresaus, mosterd en nog een paar andere dingen om het vandaag te maken. Het wordt u aangeboden door Foodista. 2 mensen hebben dit recept gemaakt en zouden het nog een keer maken. Het is een goede optie als je een glutenvrij, zuivelvrij en fodmapvriendelijk dieet volgt. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 44% verdient. Deze score is solide. Probeer BBQ Chicken Pizza: een bevredigend avondmaal en Stubb's BBQ-saus weggeefactie, BBQ Chicken Salad met romige BBQ-koriander-limoendressing en gegrilde BBQ Chicken Pizza, met Cherry Chipotle BBQ-saus voor soortgelijke recepten.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet BBQ",
        "subtitle": "Import Spoonacular",
        "description": "La recette Poulet Bbq peut être réalisée en 45 minutes environ. Pour 93 cents par portion, vous obtenez un plat principal pour 4 personnes. Une portion de ce plat contient environ 37 g de protéines, 29 g de matières grasses et un total de 478 calories. Rendez-vous au magasin et procurez-vous de la sauce soja, de la sauce Worcestershire, de la moutarde et quelques autres choses à préparer aujourd'hui. Il vous est présenté par Foodista. 2 personnes ont réalisé cette recette et la referaient. C'est une bonne option si vous suivez un régime sans gluten, sans produits laitiers et sans fodmap. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 44 %. Ce score est solide. Essayez la pizza au poulet barbecue : un souper satisfaisant et la sauce barbecue Stubb's, la salade de poulet barbecue avec vinaigrette crémeuse à la coriandre et au citron vert et la pizza au poulet barbecue grillé, avec sauce barbecue aux cerises chipotle pour des recettes similaires.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "brown sugar",
          "nl": "bruine suiker",
          "fr": "cassonade"
        },
        "amount": 3,
        "unit": "el",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "catsup",
          "nl": "ketchup",
          "fr": "ketchup"
        },
        "amount": 31,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken pieces",
          "nl": "stukjes kip",
          "fr": "morceaux de poulet"
        },
        "amount": 1134,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "mustard",
          "nl": "mosterd",
          "fr": "moutarde"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "worcestershire sauce",
          "nl": "worcestershiresaus",
          "fr": "sauce Worcestershire"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-663971",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 5,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/663971-312x231.jpg",
    "isGlutenFree": false,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Turbo Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Need a dairy free main course? Turbo Chicken could be a great recipe to try. This recipe makes 5 servings with 726 calories, 57g of protein, and 43g of fat each. For $2.38 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 4 people found this recipe to be flavorful and satisfying. From preparation to the plate, this recipe takes around 45 minutes. Head to the store and pick up gravy, salt, chicken, and a few other things to make it today. Taking all factors into account, this recipe earns a spoonacular score of 82%, which is tremendous. Similar recipes include Turbo Chicken, Turbo Chicken, and Turbo Painkiller Martini.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Turbo-kip",
        "subtitle": "Spoonacular-import",
        "description": "Een zuivelvrij hoofdgerecht nodig? Turbo Chicken kan een geweldig recept zijn om te proberen. Dit recept maakt 5 porties met elk 726 calorieën, 57 g eiwit en 43 g vet. Voor $ 2,38 per portie dekt dit recept 33% van uw dagelijkse behoefte aan vitamines en mineralen. Het wordt u aangeboden door Foodista. 4 mensen vonden dit recept smaakvol en bevredigend. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Ga naar de winkel en haal jus, zout, kip en nog een paar andere dingen om het vandaag te maken. Als we alle factoren in aanmerking nemen, krijgt dit recept een lepelscore van 82%, wat enorm is. Soortgelijke recepten zijn onder meer Turbo Chicken, Turbo Chicken en Turbo Painkiller Martini.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Turbo Poulet",
        "subtitle": "Import Spoonacular",
        "description": "Besoin d'un plat principal sans produits laitiers ? Le poulet turbo pourrait être une excellente recette à essayer. Cette recette donne 5 portions avec 726 calories, 57 g de protéines et 43 g de matières grasses chacune. Pour 2,38 $ par portion, cette recette couvre 33 % de vos besoins quotidiens en vitamines et minéraux. Il vous est présenté par Foodista. 4 personnes ont trouvé cette recette savoureuse et satisfaisante. De la préparation à l'assiette, cette recette prend environ 45 minutes. Rendez-vous au magasin et procurez-vous de la sauce, du sel, du poulet et quelques autres choses pour le préparer aujourd'hui. En tenant compte de tous les facteurs, cette recette obtient un score cuillère de 82 %, ce qui est formidable. Des recettes similaires incluent le Turbo Chicken, le Turbo Chicken et le Turbo Painkiller Martini.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "all purpose flour dissolve in 1 of water",
          "nl": "bloem voor alle doeleinden oplossen in 1 deel water",
          "fr": "farine tout usage dissoudre dans 1 d'eau"
        },
        "amount": 240,
        "unit": "ml",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "sauce of the chicken from the turbo broiler",
          "nl": "saus van de kip van de turbogrill",
          "fr": "sauce du poulet du turbo-gril"
        },
        "amount": 5,
        "unit": "servings",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 1361,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "gravy",
          "nl": "saus",
          "fr": "sauce"
        },
        "amount": 5,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "bell pepper",
          "nl": "paprika",
          "fr": "poivron"
        },
        "amount": 5,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 5,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 31,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "calamansi",
          "nl": "calamansi",
          "fr": "calamansi"
        },
        "amount": 9,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "calamansi",
          "nl": "calamansi",
          "fr": "calamansi"
        },
        "amount": 9,
        "unit": "st.",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-633959",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 5,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/633959-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Balti Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Balti Chicken requires around 45 minutes from start to finish. One serving contains 520 calories, 25g of protein, and 17g of fat. This recipe serves 5 and costs $1.57 per serving. It works well as a main course. 1 person were glad they tried this recipe. If you have boned and skinned chicken breast halves, rice, bell pepper, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It is a good option if you're following a gluten free and dairy free diet. With a spoonacular score of 59%, this dish is solid. If you like this recipe, you might also like recipes such as Balti Butter Chicken, Healthier chicken balti, and Balti Chicken Pasanda.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Balti-kip",
        "subtitle": "Spoonacular-import",
        "description": "Balti Chicken heeft van begin tot eind ongeveer 45 minuten nodig. Eén portie bevat 520 calorieën, 25 g eiwit en 17 g vet. Dit recept serveert 5 personen en kost $ 1,57 per portie. Het werkt goed als hoofdgerecht. 1 persoon was blij dat ze dit recept probeerden. Als je kippenborsthelften, rijst, paprika en een paar andere ingrediënten bij de hand hebt, kun je het maken. Het wordt u aangeboden door Foodista. Het is een goede optie als u een glutenvrij en zuivelvrij dieet volgt. Met een lepelscore van 59% is dit gerecht stevig. Als je dit recept lekker vindt, hou je misschien ook wel van recepten als Balti Butter Chicken, Healthier Chicken Balti en Balti Chicken Pasanda.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Balti",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet Balti nécessite environ 45 minutes du début à la fin. Une portion contient 520 calories, 25 g de protéines et 17 g de matières grasses. Cette recette sert 5 personnes et coûte 1,57 $ par portion. Cela fonctionne bien comme plat principal. 1 personne était heureuse d'avoir essayé cette recette. Si vous avez des moitiés de poitrine de poulet désossées et décortiquées, du riz, du poivron et quelques autres ingrédients sous la main, vous pouvez le préparer. Il vous est présenté par Foodista. C'est une bonne option si vous suivez un régime sans gluten et sans produits laitiers. Avec un score cuillère de 59%, ce plat est solide. Si vous aimez cette recette, vous aimerez peut-être également des recettes telles que Poulet au beurre Balti, Poulet balti plus sain et Poulet Balti Pasanda.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "boned and skinned chicken breast halves",
          "nl": "uitgebeende en ontvelde kipfilethelften",
          "fr": "moitiés de poitrine de poulet désossées et décortiquées"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "rice",
          "nl": "rijst",
          "fr": "riz"
        },
        "amount": 250,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cilantro",
          "nl": "koriander",
          "fr": "coriandre"
        },
        "amount": 5,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "bell pepper",
          "nl": "paprika",
          "fr": "poivron"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "oil",
          "nl": "olie",
          "fr": "huile"
        },
        "amount": 5,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 1,
        "unit": "large",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "bell pepper",
          "nl": "paprika",
          "fr": "poivron"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-632810",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/632810-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Asian Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Asian Chicken could be just the gluten free and dairy free recipe you've been looking for. This recipe makes 4 servings with 320 calories, 26g of protein, and 7g of fat each. For $1.66 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. 1 person were impressed by this recipe. Only a few people really liked this main course. A mixture of onion rings, strips, oil, and a handful of other ingredients are all it takes to make this recipe so scrumptious. This recipe is typical of Asian cuisine. From preparation to the plate, this recipe takes approximately 45 minutes. It is brought to you by Foodista. Overall, this recipe earns a good spoonacular score of 47%. Try Asian Chicken Burger with Spicy Lemongrass Mayo and Pickled Asian Slaw, Asian Chicken, and E.z. Asian Chicken for similar recipes.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Aziatische Kip",
        "subtitle": "Spoonacular-import",
        "description": "Asian Chicken zou wel eens precies het glutenvrije en zuivelvrije recept kunnen zijn waar u naar op zoek was. Dit recept maakt 4 porties met elk 320 calorieën, 26 g eiwit en 7 g vet. Voor $ 1,66 per portie dekt dit recept 18% van uw dagelijkse behoefte aan vitamines en mineralen. 1 persoon was onder de indruk van dit recept. Slechts een paar mensen vonden dit hoofdgerecht erg lekker. Een mengsel van uienringen, reepjes, olie en een handvol andere ingrediënten is voldoende om dit recept zo heerlijk te maken. Dit recept is typisch voor de Aziatische keuken. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Het wordt u aangeboden door Foodista. Over het geheel genomen verdient dit recept een goede lepelscore van 47%. Probeer de Aziatische kipburger met pittige citroengras-mayo en ingelegde Aziatische slaw, Aziatische kip en E.z. Aziatische kip voor soortgelijke recepten.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Asiatique",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet asiatique pourrait bien être la recette sans gluten et sans produits laitiers que vous recherchiez. Cette recette donne 4 portions de 320 calories, 26 g de protéines et 7 g de matières grasses chacune. Pour 1,66 $ par portion, cette recette couvre 18 % de vos besoins quotidiens en vitamines et minéraux. 1 personne a été impressionnée par cette recette. Seules quelques personnes ont vraiment aimé ce plat principal. Un mélange de rondelles d'oignon, de lanières, d'huile et d'une poignée d'autres ingrédients suffit pour rendre cette recette si délicieuse. Cette recette est typique de la cuisine asiatique. De la préparation à l'assiette, cette recette prend environ 45 minutes. Il vous est présenté par Foodista. Dans l'ensemble, cette recette obtient un bon score cuillère de 47 %. Essayez le hamburger au poulet asiatique avec mayonnaise épicée à la citronnelle et salade de chou asiatique marinée, poulet asiatique et E.z. Poulet asiatique pour des recettes similaires.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "firmly brown sugar",
          "nl": "stevig bruine suiker",
          "fr": "cassonade fermement"
        },
        "amount": 31,
        "unit": "g",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "cornstarch",
          "nl": "maïszetmeel",
          "fr": "maïzena"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "vinegar",
          "nl": "azijn",
          "fr": "vinaigre"
        },
        "amount": 60,
        "unit": "ml",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "pineapple chunks",
          "nl": "stukjes ananas",
          "fr": "morceaux d'ananas"
        },
        "amount": 425,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "strips",
          "nl": "stroken",
          "fr": "bandes"
        },
        "amount": 125,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "onion rings",
          "nl": "uienringen",
          "fr": "rondelles d'oignon"
        },
        "amount": 125,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "oil",
          "nl": "olie",
          "fr": "huile"
        },
        "amount": 1,
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
      }
    ]
  },
  {
    "id": "spoonacular-648746",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 1,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/648746-312x231.jpg",
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
        "title": "Karahi Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Karahi Chicken requires roughly 45 minutes from start to finish. This recipe makes 1 servings with 883 calories, 53g of protein, and 55g of fat each. For $5.12 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 1 would say it hit the spot. A mixture of bay leaf, onion, chicken stock, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 56%. This score is solid. If you like this recipe, take a look at these similar recipes: Karahi Chicken, Karahi Chicken, and Easy Chicken Karahi.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Karahi-kip",
        "subtitle": "Spoonacular-import",
        "description": "Karahi Chicken heeft van begin tot eind ongeveer 45 minuten nodig. Dit recept maakt 1 portie met elk 883 calorieën, 53 g eiwit en 55 g vet. Voor $ 5,12 per portie dekt dit recept 26% van uw dagelijkse behoefte aan vitamines en mineralen. Niet veel mensen hebben dit recept gemaakt, en ik zou zeggen dat het een schot in de roos was. Een mengsel van laurier, ui, kippenbouillon en een handvol andere ingrediënten is voldoende om dit recept zo heerlijk te maken. Het werkt goed als hoofdgerecht. Het wordt u aangeboden door Foodista. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 56% verdient. Deze score is solide. Als je dit recept lekker vindt, kijk dan eens naar deze soortgelijke recepten: Karahi Chicken, Karahi Chicken en Easy Chicken Karahi.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Karahi",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet Karahi nécessite environ 45 minutes du début à la fin. Cette recette donne 1 portion avec 883 calories, 53 g de protéines et 55 g de matières grasses chacune. Pour 5,12 $ par portion, cette recette couvre 26 % de vos besoins quotidiens en vitamines et minéraux. Peu de gens ont fait cette recette, et je dirais qu’elle a fait mouche. Un mélange de feuille de laurier, d'oignon, de bouillon de poulet et d'une poignée d'autres ingrédients suffit pour rendre cette recette si délicieuse. Cela fonctionne bien comme plat principal. Il vous est présenté par Foodista. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 56 %. Ce score est solide. Si vous aimez cette recette, jetez un œil à ces recettes similaires : Poulet Karahi, Poulet Karahi et Poulet Karahi facile.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "bay leaf",
          "nl": "laurierblad",
          "fr": "feuille de laurier"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 454,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "chicken stock",
          "nl": "kippenbouillon",
          "fr": "bouillon de poulet"
        },
        "amount": 125,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "coriander",
          "nl": "koriander",
          "fr": "coriandre"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garam masala",
          "nl": "garam masala",
          "fr": "garam masala"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic cloves",
          "nl": "knoflookteentjes",
          "fr": "gousses d'ail"
        },
        "amount": 3,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "ghee",
          "nl": "ghee",
          "fr": "ghee"
        },
        "amount": 3,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ground coriander seeds",
          "nl": "gemalen korianderzaad",
          "fr": "graines de coriandre moulues"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "mint",
          "nl": "munt",
          "fr": "menthe"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "naan bread/chapatis to serve",
          "nl": "naanbrood/chapati's om te serveren",
          "fr": "pain naan/chapatis pour servir"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 1,
        "unit": "medium",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-636488",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/636488-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Butter Chicken",
        "subtitle": "Spoonacular Import",
        "description": "The recipe Butter Chicken can be made in about 45 minutes. This recipe serves 4 and costs $2.26 per serving. One portion of this dish contains roughly 12g of protein, 57g of fat, and a total of 653 calories. It is brought to you by Foodista. If you have canned tomatoes, ground coriander, tomato sauce, and a few other ingredients on hand, you can make it. 4 people found this recipe to be scrumptious and satisfying. It works well as a budget friendly hor d'oeuvre. It is a good option if you're following a gluten free diet. This recipe is typical of Indian cuisine. Overall, this recipe earns a pretty good spoonacular score of 47%. Users who liked this recipe also liked No-Butter Butter Chicken, Chicken Makhani (Indian Butter Chicken), and Chicken Makhani (Indian Butter Chicken).",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Boter Kip",
        "subtitle": "Spoonacular-import",
        "description": "Het recept Boterkip maak je in ongeveer 45 minuten. Dit recept is voor 4 personen en kost $ 2,26 per portie. Eén portie van dit gerecht bevat ongeveer 12 gram eiwit, 57 gram vet en in totaal 653 calorieën. Het wordt u aangeboden door Foodista. Als je tomaten uit blik, gemalen koriander, tomatensaus en een paar andere ingrediënten bij de hand hebt, kun je het maken. 4 personen vonden dit recept heerlijk en bevredigend. Het werkt goed als budgetvriendelijk hor d'oeuvre. Het is een goede optie als je een glutenvrij dieet volgt. Dit recept is typisch voor de Indiase keuken. Over het geheel genomen verdient dit recept een redelijk goede lepelscore van 47%. Gebruikers die dit recept lekker vonden, hielden ook van No-Butter Butter Chicken, Chicken Makhani (Indian Butter Chicken) en Chicken Makhani (Indian Butter Chicken).",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet au beurre",
        "subtitle": "Import Spoonacular",
        "description": "La recette Poulet au beurre peut être préparée en 45 minutes environ. Cette recette sert 4 personnes et coûte 2,26 $ par portion. Une portion de ce plat contient environ 12 g de protéines, 57 g de matières grasses et un total de 653 calories. Il vous est présenté par Foodista. Si vous avez des tomates en conserve, de la coriandre moulue, de la sauce tomate et quelques autres ingrédients sous la main, vous pouvez le préparer. 4 personnes ont trouvé cette recette délicieuse et satisfaisante. Cela fonctionne bien comme hors-d'œuvre économique. C'est une bonne option si vous suivez un régime sans gluten. Cette recette est typique de la cuisine indienne. Dans l’ensemble, cette recette obtient un assez bon score cuillère de 47 %. Les utilisateurs qui ont aimé cette recette ont également aimé le poulet au beurre sans beurre, le poulet Makhani (poulet au beurre indien) et le poulet Makhani (poulet au beurre indien).",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken thighs",
          "nl": "kippendijen",
          "fr": "cuisses de poulet"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "buttermilk",
          "nl": "karnemelk",
          "fr": "babeurre"
        },
        "amount": 480,
        "unit": "ml",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "garlic",
          "nl": "knoflook",
          "fr": "ail"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "pepper",
          "nl": "peper",
          "fr": "poivre"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cayenne pepper",
          "nl": "cayennepeper",
          "fr": "poivre de Cayenne"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ground coriander",
          "nl": "gemalen koriander",
          "fr": "coriandre moulue"
        },
        "amount": 0.3,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cumin",
          "nl": "komijn",
          "fr": "cumin"
        },
        "amount": 0.3,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cardamom",
          "nl": "kardemom",
          "fr": "cardamome"
        },
        "amount": 0.3,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "oil",
          "nl": "olie",
          "fr": "huile"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 1,
        "unit": "small",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "butter",
          "nl": "boter",
          "fr": "beurre"
        },
        "amount": 2,
        "unit": "el",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "lemon juice",
          "nl": "citroensap",
          "fr": "jus de citron"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "ginger",
          "nl": "gember",
          "fr": "gingembre"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "garlic cloves",
          "nl": "knoflookteentjes",
          "fr": "gousses d'ail"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "garam masala",
          "nl": "garam masala",
          "fr": "garam masala"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "bay leaf",
          "nl": "laurierblad",
          "fr": "feuille de laurier"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "tomato sauce",
          "nl": "tomatensaus",
          "fr": "sauce tomate"
        },
        "amount": 1,
        "unit": "can",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "canned tomatoes",
          "nl": "ingeblikte tomaten",
          "fr": "tomates en conserve"
        },
        "amount": 1,
        "unit": "can",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "whipping cream",
          "nl": "slagroom",
          "fr": "crème fouettée"
        },
        "amount": 1,
        "unit": "pint",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "cilantro",
          "nl": "koriander",
          "fr": "coriandre"
        },
        "amount": 1,
        "unit": "bunch",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-648771",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 20,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/648771-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Kashmiri Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Kashmiri Chicken could be just the gluten free and ketogenic recipe you've been looking for. One serving contains 289 calories, 14g of protein, and 23g of fat. For $1.23 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. This recipe serves 20. 1 person were impressed by this recipe. Head to the store and pick up almonds, chilli paste, tikka curry paste, and a few other things to make it today. It is brought to you by Foodista. It works well as a hor d'oeuvre. From preparation to the plate, this recipe takes about 45 minutes. Overall, this recipe earns a good spoonacular score of 48%. Users who liked this recipe also liked kashmiri biryani , how to make kashmiri veg biryani, Kashmiri Chicken Recipe, and Cook the Book: Kashmiri Chicken.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kashmiri-kip",
        "subtitle": "Spoonacular-import",
        "description": "Kashmiri Chicken zou wel eens precies het glutenvrije en ketogene recept kunnen zijn waar je naar op zoek was. Eén portie bevat 289 calorieën, 14 g eiwit en 23 g vet. Voor $ 1,23 per portie dekt dit recept 15% van uw dagelijkse behoefte aan vitamines en mineralen. Dit recept serveert 20 personen. 1 persoon was onder de indruk van dit recept. Ga naar de winkel en koop amandelen, chilipasta, tikka-currypasta en nog een paar andere dingen om het vandaag te maken. Het wordt u aangeboden door Foodista. Het werkt goed als hor d'oeuvre. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Over het geheel genomen verdient dit recept een goede lepelscore van 48%. Gebruikers die dit recept lekker vonden, hielden ook van kashmiri biryani, hoe je kashmiri veg biryani maakt, Kashmiri Chicken Recept en Cook the Book: Kashmiri Chicken.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet du Cachemire",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet du Cachemire pourrait être la recette sans gluten et cétogène que vous recherchiez. Une portion contient 289 calories, 14 g de protéines et 23 g de matières grasses. Pour 1,23 $ par portion, cette recette couvre 15 % de vos besoins quotidiens en vitamines et minéraux. Cette recette en sert 20. 1 personne a été impressionnée par cette recette. Rendez-vous au magasin et procurez-vous des amandes, de la pâte de piment, de la pâte de curry tikka et quelques autres choses à préparer aujourd'hui. Il vous est présenté par Foodista. Cela fonctionne bien comme un hor d'œuvre. De la préparation à l'assiette, cette recette prend environ 45 minutes. Dans l'ensemble, cette recette obtient un bon score cuillère de 48 %. Les utilisateurs qui ont aimé cette recette ont également aimé le biryani du Cachemire, comment faire du biryani aux légumes du Cachemire, la recette de poulet du Cachemire et Cook the Book : Poulet du Cachemire.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "almonds",
          "nl": "amandelen",
          "fr": "amandes"
        },
        "amount": 20,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken drumsticks",
          "nl": "kippendrumsticks",
          "fr": "pilons de poulet"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "chicken stock",
          "nl": "kippenbouillon",
          "fr": "bouillon de poulet"
        },
        "amount": 4,
        "unit": "el",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "chicken thighs",
          "nl": "kippendijen",
          "fr": "cuisses de poulet"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "chilli paste",
          "nl": "chili pasta",
          "fr": "pâte de piment"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "tikka curry paste",
          "nl": "tikka-currypasta",
          "fr": "pâte de curry tikka"
        },
        "amount": 4,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "flat parsley",
          "nl": "platte peterselie",
          "fr": "persil plat"
        },
        "amount": 1,
        "unit": "leaf",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "ginger",
          "nl": "gember",
          "fr": "gingembre"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "garlic",
          "nl": "knoflook",
          "fr": "ail"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "ground almonds",
          "nl": "gemalen amandelen",
          "fr": "amandes moulues"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ground cumin",
          "nl": "gemalen komijn",
          "fr": "cumin moulu"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "natural yogurt",
          "nl": "natuurlijke yoghurt",
          "fr": "yaourt nature"
        },
        "amount": 142,
        "unit": "g",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "pickles",
          "nl": "augurken",
          "fr": "cornichons"
        },
        "amount": 20,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "pilau rice",
          "nl": "pilau-rijst",
          "fr": "riz pilaf"
        },
        "amount": 20,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 2.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "sunflower oil",
          "nl": "zonnebloemolie",
          "fr": "huile de tournesol"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "poppadoms",
          "nl": "poppadoms",
          "fr": "poppadoms"
        },
        "amount": 20,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "poppadoms",
          "nl": "poppadoms",
          "fr": "poppadoms"
        },
        "amount": 20,
        "unit": "servings",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-642390",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/642390-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Enchilada Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Enchilada Chicken might be a good recipe to expand your main course recipe box. Watching your figure? This gluten free recipe has 368 calories, 39g of protein, and 12g of fat per serving. This recipe serves 4. For $2.09 per serving, this recipe covers 22% of your daily requirements of vitamins and minerals. This recipe is liked by 1 foodies and cooks. Head to the store and pick up cilantro, mrs. dash southwest chipotle seasoning, enchilada sauce, and a few other things to make it today. Not a lot of people really liked this Mexican dish. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 58%, which is solid. Enchilada Pie with 2 Minute Enchilada Sauce, Chicken Enchilada Casserole (a.k.a. \"Stacked\" Chicken Enchiladas), and Chicken Enchilada Casserole (a.k.a. \"Stacked\" Chicken Enchiladas) are very similar to this recipe.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Enchilada-kip",
        "subtitle": "Spoonacular-import",
        "description": "Enchilada Kip is misschien een goed recept om je hoofdgerechtreceptendoos uit te breiden. Op je figuur letten? Dit glutenvrije recept bevat 368 calorieën, 39 g eiwit en 12 g vet per portie. Dit recept is voor 4 personen. Voor $ 2,09 per portie dekt dit recept 22% van uw dagelijkse behoefte aan vitamines en mineralen. Dit recept is geliefd bij 1 foodies en koks. Ga naar de winkel en haal koriander, mevrouw. scheutje chipotle-kruiden uit het zuidwesten, enchiladasaus en een paar andere dingen om het vandaag te maken. Niet veel mensen hielden echt van dit Mexicaanse gerecht. Het wordt u aangeboden door Foodista. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Als we alle factoren in aanmerking nemen, krijgt dit recept een lepelscore van 58%, wat solide is. Enchiladataart met enchiladasaus van 2 minuten, kip-enchilada-ovenschotel (ook wel \"gestapelde\" kip-enchiladas genoemd) en kip-enchilada-schotel (ook bekend als \"gestapelde\" kip-enchiladas) lijken erg op dit recept.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Enchiladas au poulet",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet enchilada pourrait être une bonne recette pour élargir votre boîte de recettes de plat principal. Vous surveillez votre silhouette ? Cette recette sans gluten contient 368 calories, 39 g de protéines et 12 g de matières grasses par portion. Cette recette en sert 4. Pour 2,09 $ par portion, cette recette couvre 22 % de vos besoins quotidiens en vitamines et minéraux. Cette recette est appréciée des 1 gourmets et des cuisiniers. Allez au magasin et récupérez de la coriandre, madame. un peu d'assaisonnement chipotle du sud-ouest, de sauce enchilada et quelques autres choses pour le préparer aujourd'hui. Peu de gens ont vraiment aimé ce plat mexicain. Il vous est présenté par Foodista. De la préparation à l'assiette, cette recette prend environ 45 minutes. En tenant compte de tous les facteurs, cette recette obtient un score cuillère de 58 %, ce qui est solide. La tarte aux enchiladas avec sauce enchilada de 2 minutes, la cocotte d'enchiladas au poulet (alias enchiladas au poulet « empilées ») et la cocotte d'enchiladas au poulet (alias enchiladas au poulet « empilées ») sont très similaires à cette recette.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "black beans",
          "nl": "zwarte bonen",
          "fr": "haricots noirs"
        },
        "amount": 1,
        "unit": "can",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "mrs. dash southwest chipotle seasoning",
          "nl": "mevrouw. scheutje zuidwesten chipotle-kruiden",
          "fr": "Mme. un peu d'assaisonnement chipotle du sud-ouest"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "enchilada sauce",
          "nl": "enchiladasaus",
          "fr": "sauce enchilada"
        },
        "amount": 284,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cilantro",
          "nl": "koriander",
          "fr": "coriandre"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "monterey jack cheese",
          "nl": "Monterey Jack-kaas",
          "fr": "fromage monterey jack"
        },
        "amount": 125,
        "unit": "g",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "chicken breasts",
          "nl": "kippenborsten",
          "fr": "poitrines de poulet"
        },
        "amount": 454,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      }
    ]
  },
  {
    "id": "spoonacular-654353",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 8,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/654353-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Pakistani Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Pakistani Chicken could be just the gluten free and ketogenic recipe you've been looking for. One serving contains 473 calories, 35g of protein, and 34g of fat. For $1.7 per serving, you get a main course that serves 8. 1 person has made this recipe and would make it again. From preparation to the plate, this recipe takes approximately 45 minutes. A mixture of ginger, yogurt, salt, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. Overall, this recipe earns a rather bad spoonacular score of 14%. Users who liked this recipe also liked Pakistani Rice, Pakistani Mixed Sabzi, and Pakistani Kima (Hamburger Curry).",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Pakistaanse kip",
        "subtitle": "Spoonacular-import",
        "description": "Pakistaanse Kip zou wel eens precies het glutenvrije en ketogene recept kunnen zijn waar je naar op zoek was. Eén portie bevat 473 calorieën, 35 g eiwit en 34 g vet. Voor $ 1,7 per portie krijg je een hoofdgerecht voor 8 personen. 1 persoon heeft dit recept gemaakt en zou het opnieuw maken. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Een mengsel van gember, yoghurt, zout en een handvol andere ingrediënten is voldoende om dit recept zo smaakvol te maken. Het wordt u aangeboden door Foodista. Over het geheel genomen verdient dit recept een nogal slechte lepelscore van 14%. Gebruikers die dit recept lekker vonden, hielden ook van Pakistaanse rijst, Pakistaanse gemengde Sabzi en Pakistaanse Kima (Hamburgercurry).",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet pakistanais",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet pakistanais pourrait bien être la recette sans gluten et cétogène que vous recherchiez. Une portion contient 473 calories, 35 g de protéines et 34 g de matières grasses. Pour 1,7 $ par portion, vous obtenez un plat principal pour 8 personnes. 1 personne a fait cette recette et la referait. De la préparation à l'assiette, cette recette prend environ 45 minutes. Un mélange de gingembre, de yaourt, de sel et d’une poignée d’autres ingrédients suffit pour rendre cette recette si savoureuse. Il vous est présenté par Foodista. Dans l'ensemble, cette recette obtient un score cuillère plutôt mauvais de 14 %. Les utilisateurs qui ont aimé cette recette ont également aimé le riz pakistanais, le sabzi mixte pakistanais et le kima pakistanais (curry hamburger).",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chickens",
          "nl": "kippen",
          "fr": "poulets"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "yogurt",
          "nl": "yoghurt",
          "fr": "yaourt"
        },
        "amount": 454,
        "unit": "g",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "lemon juice",
          "nl": "citroensap",
          "fr": "jus de citron"
        },
        "amount": 60,
        "unit": "ml",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "garlic cloves",
          "nl": "knoflookteentjes",
          "fr": "gousses d'ail"
        },
        "amount": 3,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cumin",
          "nl": "komijn",
          "fr": "cumin"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ginger",
          "nl": "gember",
          "fr": "gingembre"
        },
        "amount": 1.5,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "paprika",
          "nl": "paprika",
          "fr": "paprika"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cayenne",
          "nl": "cayenne",
          "fr": "cayenne"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salad oil",
          "nl": "slaolie",
          "fr": "huile à salade"
        },
        "amount": 120,
        "unit": "ml",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "spoonacular-715415",
    "prepTime": "55 mins",
    "cookTime": "45 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 8,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/715415-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Red Lentil Soup with Chicken and Turnips",
        "subtitle": "Spoonacular Import",
        "description": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains 477 calories, 27g of protein, and 20g of fat. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for Autumn. From preparation to the plate, this recipe takes approximately 55 minutes. It is a good option if you're following a gluten free and dairy free diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a spectacular spoonacular score of 99%. If you like this recipe, you might also like recipes such as Red Lentil and Chicken Soup, Red Lentil and Chicken Soup, and Red-Lentil Soup.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Rode Linzensoep Met Kip En Rapen",
        "subtitle": "Spoonacular-import",
        "description": "Rode Linzensoep met Kip en Rapen is wellicht een goed recept om je hoofdgerechtrepertoire uit te breiden. Dit recept serveert 8 personen en kost $ 3,0 per portie. Eén portie bevat 477 calorieën, 27 g eiwit en 20 g vet. Het wordt u aangeboden door Pink When. 1866 mensen hebben dit recept uitgeprobeerd en vonden het lekker. Je kunt er op elk moment van genieten, maar het is vooral goed voor de herfst. Van bereiding tot op het bord duurt dit recept ongeveer 55 minuten. Het is een goede optie als u een glutenvrij en zuivelvrij dieet volgt. Ga naar de winkel en koop zout en peper, tomaten uit blik, platte peterselie en nog een paar andere dingen om het vandaag te maken. Over het geheel genomen verdient dit recept een spectaculaire lepelscore van 99%. Als je dit recept lekker vindt, hou je misschien ook wel van recepten als Rode Linzen- en Kippensoep, Rode Linzen- en Kippensoep en Rode Linzensoep.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Soupe de lentilles rouges au poulet et navets",
        "subtitle": "Import Spoonacular",
        "description": "La soupe de lentilles rouges au poulet et aux navets pourrait être une bonne recette pour élargir votre répertoire de plats principaux. Cette recette sert 8 personnes et coûte 3,0 $ par portion. Une portion contient 477 calories, 27 g de protéines et 20 g de matières grasses. Il vous est présenté par Pink When. 1866 personnes ont essayé et apprécié cette recette. Il peut être dégusté à tout moment, mais il est particulièrement bon en automne. De la préparation à l'assiette, cette recette prend environ 55 minutes. C'est une bonne option si vous suivez un régime sans gluten et sans produits laitiers. Rendez-vous au magasin et procurez-vous du sel et du poivre, des tomates en conserve, du persil plat et quelques autres éléments à préparer aujourd'hui. Dans l’ensemble, cette recette obtient un score cuillère spectaculaire de 99 %. Si vous aimez cette recette, vous aimerez peut-être aussi des recettes telles que Soupe aux lentilles rouges et au poulet, Soupe aux lentilles rouges et au poulet et Soupe aux lentilles rouges.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "additional toppings: avocado",
          "nl": "extra toppings: avocado",
          "fr": "garnitures supplémentaires : avocat"
        },
        "amount": 8,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "carrots",
          "nl": "wortelen",
          "fr": "carottes"
        },
        "amount": 3,
        "unit": "medium",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "celery stalks",
          "nl": "stengels bleekselderij",
          "fr": "branches de céleri"
        },
        "amount": 3,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "chicken breast",
          "nl": "kipfilet",
          "fr": "blanc de poulet"
        },
        "amount": 250,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "flat leaf parsley",
          "nl": "platte peterselie",
          "fr": "persil plat"
        },
        "amount": 63,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "garlic",
          "nl": "knoflook",
          "fr": "ail"
        },
        "amount": 6,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "canned tomatoes",
          "nl": "ingeblikte tomaten",
          "fr": "tomates en conserve"
        },
        "amount": 794,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "lentils",
          "nl": "linzen",
          "fr": "lentilles"
        },
        "amount": 250,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt and pepper",
          "nl": "zout en peper",
          "fr": "sel et poivre"
        },
        "amount": 8,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "turnip",
          "nl": "raap",
          "fr": "navet"
        },
        "amount": 1,
        "unit": "large",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "vegetable stock",
          "nl": "groentebouillon",
          "fr": "bouillon de légumes"
        },
        "amount": 1000,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 1,
        "unit": "medium",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "spoonacular-649733",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/649733-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Lemon Pilaf Chicken",
        "subtitle": "Spoonacular Import",
        "description": "If you want to add more gluten free and dairy free recipes to your recipe box, Lemon Pilaf Chicken might be a recipe you should try. For 52 cents per serving, you get a main course that serves 4. One portion of this dish contains around 14g of protein, 7g of fat, and a total of 138 calories. If you have pkt near east rice pilaf see note, chicken, lemon juice, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. 2 people found this recipe to be yummy and satisfying. From preparation to the plate, this recipe takes about 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 83%, which is awesome. Users who liked this recipe also liked Lemon Pilaf Chicken, Chicken pilaf with pistachios & lemon, and Pan Seared Chicken with Tender Leek, Lemon Rice Pilaf, and Whatever Your Garden Grows Salad.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Citroen Pilaf Kip",
        "subtitle": "Spoonacular-import",
        "description": "Als je meer glutenvrije en zuivelvrije recepten aan je receptendoos wilt toevoegen, is Lemon Pilaf Chicken misschien een recept dat je moet proberen. Voor 52 cent per portie krijg je een hoofdgerecht voor 4 personen. Eén portie van dit gerecht bevat ongeveer 14 gram eiwit, 7 gram vet en in totaal 138 calorieën. Als je pkt near east rijstpilaf (zie opmerking), kip, citroensap en een paar andere ingrediënten bij de hand hebt, kun je het maken. Het wordt u aangeboden door Foodista. 2 mensen vonden dit recept lekker en bevredigend. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Als we alle factoren in aanmerking nemen, krijgt dit recept een lepelscore van 83%, wat geweldig is. Gebruikers die dit recept lekker vonden, hielden ook van Citroenpilafkip, Kippilaf met pistachenoten en citroen, en Aangebraden Kip met Malse Prei, Citroenrijstpilaf en Wat er ook in uw tuin groeit Salade.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet pilaf au citron",
        "subtitle": "Import Spoonacular",
        "description": "Si vous souhaitez ajouter plus de recettes sans gluten et sans produits laitiers à votre boîte de recettes, le poulet pilaf au citron pourrait être une recette que vous devriez essayer. Pour 52 cents par portion, vous obtenez un plat principal pour 4 personnes. Une portion de ce plat contient environ 14 g de protéines, 7 g de matières grasses et un total de 138 calories. Si vous avez du riz pilaf du Proche-Orient (voir note), du poulet, du jus de citron et quelques autres ingrédients sous la main, vous pouvez le préparer. Il vous est présenté par Foodista. 2 personnes ont trouvé cette recette délicieuse et satisfaisante. De la préparation à l'assiette, cette recette prend environ 45 minutes. En tenant compte de tous les facteurs, cette recette obtient un score cuillère de 83 %, ce qui est génial. Les utilisateurs qui ont aimé cette recette ont également aimé le poulet pilaf au citron, le poulet pilaf aux pistaches et au citron, le poulet poêlé aux poireaux tendres, le riz pilaf au citron et la salade What Your Garden Grows.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "broccoli flowerets",
          "nl": "broccoli bloemetjes",
          "fr": "fleurons de brocoli"
        },
        "amount": 250,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 188,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "lemon juice",
          "nl": "citroensap",
          "fr": "jus de citron"
        },
        "amount": 3,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "lemon peel",
          "nl": "citroenschil",
          "fr": "zeste de citron"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "pkt near east rice pilaf see note",
          "nl": "pkt rijstpilaf uit het nabije oosten, zie opmerking",
          "fr": "pkt riz pilaf du Proche-Orient voir note"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-649131",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/649131-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Kung Po Chicken",
        "subtitle": "Spoonacular Import",
        "description": "If you have roughly 45 minutes to spend in the kitchen, Kung Po Chicken might be a spectacular gluten free, dairy free, and ketogenic recipe to try. For $2.17 per serving, you get a main course that serves 4. One serving contains 478 calories, 33g of protein, and 34g of fat. 2 people were impressed by this recipe. Head to the store and pick up water, cornstarch, salt, and a few other things to make it today. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 73%. This score is solid. Similar recipes include Kung Pao Popeye (Kung Pao Chicken Made with Popeye's Nuggets), Kung Pao Popeye (Kung Pao Chicken Made with Popeye's Nuggets), and Kung Po Chicken.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kung Po-kip",
        "subtitle": "Spoonacular-import",
        "description": "Als je ongeveer 45 minuten de tijd hebt om in de keuken door te brengen, is Kung Po Chicken misschien een spectaculair glutenvrij, zuivelvrij en ketogeen recept om te proberen. Voor $ 2,17 per portie krijg je een hoofdgerecht voor 4 personen. Eén portie bevat 478 calorieën, 33 g eiwit en 34 g vet. 2 mensen waren onder de indruk van dit recept. Ga naar de winkel en haal water, maizena, zout en nog een paar andere dingen om het vandaag te maken. Het wordt u aangeboden door Foodista. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 73% verdient. Deze score is solide. Soortgelijke recepten zijn onder meer Kung Pao Popeye (Kung Pao Chicken gemaakt met Popeye's Nuggets), Kung Pao Popeye (Kung Pao Chicken gemaakt met Popeye's Nuggets) en Kung Po Chicken.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Kung Po",
        "subtitle": "Import Spoonacular",
        "description": "Si vous avez environ 45 minutes à passer en cuisine, le poulet Kung Po pourrait être une recette spectaculaire sans gluten, sans produits laitiers et cétogène à essayer. Pour 2,17 $ par portion, vous obtenez un plat principal pour 4 personnes. Une portion contient 478 calories, 33 g de protéines et 34 g de matières grasses. 2 personnes ont été impressionnées par cette recette. Rendez-vous au magasin et récupérez de l'eau, de la fécule de maïs, du sel et quelques autres éléments pour le préparer aujourd'hui. Il vous est présenté par Foodista. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 73 %. Ce score est solide. Des recettes similaires incluent le Kung Pao Popeye (poulet Kung Pao à base de pépites de Popeye), le Kung Pao Popeye (poulet Kung Pao à base de pépites de Popeye) et le poulet Kung Po.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "whl chicken breasts",
          "nl": "whl kipfilets",
          "fr": "whl poitrines de poulet"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "whl chili pepper",
          "nl": "whl chilipeper",
          "fr": "whl piment"
        },
        "amount": 8,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "corn oil",
          "nl": "maïs olie",
          "fr": "huile de maïs"
        },
        "amount": 6,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cornstarch",
          "nl": "maïszetmeel",
          "fr": "maïzena"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "egg white",
          "nl": "eiwit",
          "fr": "blanc d'oeuf"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "roasted peanuts",
          "nl": "geroosterde pinda's",
          "fr": "cacahuètes grillées"
        },
        "amount": 63,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "scallions",
          "nl": "lente-uitjes",
          "fr": "oignons verts"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "sesame oil",
          "nl": "sesamolie",
          "fr": "huile de sésame"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "water",
          "nl": "water",
          "fr": "eau"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Bieren & Dranken"
      },
      {
        "name": {
          "en": "distilled vinegar",
          "nl": "gedistilleerde azijn",
          "fr": "vinaigre distillé"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-637260",
    "prepTime": "20 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 6,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/637260-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Cashew Nut Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Cashew Nut Chicken takes roughly 20 minutes from beginning to end. This recipe serves 6. Watching your figure? This gluten free and dairy free recipe has 390 calories, 25g of protein, and 15g of fat per serving. For $1.94 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. 1 person has made this recipe and would make it again. If you have vegetable oil, rice, mushroom, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It works well as an affordable main course. All things considered, we decided this recipe deserves a spoonacular score of 78%. This score is solid. Similar recipes are Cashew Nut Chicken, Chicken and Cashew Nut Curry, and Chicken in a Cashew Nut Sauce.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Cashewnoot Kip",
        "subtitle": "Spoonacular-import",
        "description": "Cashewnootkip duurt van begin tot eind ongeveer 20 minuten. Dit recept is voor 6 personen. Let je op je figuur? Dit glutenvrije en zuivelvrije recept bevat 390 calorieën, 25 g eiwit en 15 g vet per portie. Voor $ 1,94 per portie dekt dit recept 29% van uw dagelijkse behoefte aan vitamines en mineralen. 1 persoon heeft dit recept gemaakt en zou het zo nog een keer maken. Als je plantaardige olie, rijst, champignons en een paar andere ingrediënten bij de hand hebt, kun je het maken. Het wordt u aangeboden door Foodista. Het werkt goed als betaalbaar hoofdgerecht. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 78% verdient. Deze score is solide. Soortgelijke recepten zijn kip met cashewnoten, curry met kip en cashewnoten en kip in cashewnotensaus.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet aux noix de cajou",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet aux noix de cajou prend environ 20 minutes du début à la fin. Cette recette est pour 6 personnes. Vous surveillez votre silhouette ? Cette recette sans gluten et sans produits laitiers contient 390 calories, 25 g de protéines et 15 g de matières grasses par portion. Pour 1,94 $ par portion, cette recette couvre 29 % de vos besoins quotidiens en vitamines et minéraux. 1 personne a fait cette recette et la referait. Si vous avez de l’huile végétale, du riz, des champignons et quelques autres ingrédients sous la main, vous pouvez le préparer. Il vous est présenté par Foodista. Cela fonctionne bien comme plat principal abordable. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 78 %. Ce score est solide. Des recettes similaires sont le poulet aux noix de cajou, le curry de poulet et de noix de cajou et le poulet dans une sauce aux noix de cajou.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "carrots",
          "nl": "wortelen",
          "fr": "carottes"
        },
        "amount": 250,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "cashew nuts",
          "nl": "cashewnoten",
          "fr": "noix de cajou"
        },
        "amount": 125,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "heart celery",
          "nl": "hart selderij",
          "fr": "céleri coeur"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
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
          "en": "chili flakes",
          "nl": "chilivlokken",
          "fr": "flocons de piment"
        },
        "amount": 6,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chili paste",
          "nl": "chili pasta",
          "fr": "pâte de piment"
        },
        "amount": 1.5,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "rice",
          "nl": "rijst",
          "fr": "riz"
        },
        "amount": 6,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic",
          "nl": "knoflook",
          "fr": "ail"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "mushroom",
          "nl": "paddestoel",
          "fr": "champignon"
        },
        "amount": 227,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 0.5,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "oyster sauce",
          "nl": "oestersaus",
          "fr": "sauce aux huîtres"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "peppers",
          "nl": "paprika's",
          "fr": "poivrons"
        },
        "amount": 6,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "sugar",
          "nl": "suiker",
          "fr": "sucre"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "vegetable oil",
          "nl": "plantaardige olie",
          "fr": "huile végétale"
        },
        "amount": 1,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "vinegar",
          "nl": "azijn",
          "fr": "vinaigre"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-649764",
    "prepTime": "120 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/649764-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Lemon Roasted Chicken",
        "subtitle": "Spoonacular Import",
        "description": "If you want to add more gluten free, dairy free, and whole 30 recipes to your recipe box, Lemon Roasted Chicken might be a recipe you should try. This recipe makes 4 servings with 681 calories, 37g of protein, and 44g of fat each. For $2.17 per serving, this recipe covers 28% of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes approximately 2 hours. This recipe is liked by 1 foodies and cooks. It works well as a main course. This recipe from Foodista requires paprika, rosemary, salt and pepper, and roasting chicken. With a spoonacular score of 83%, this dish is outstanding. If you like this recipe, take a look at these similar recipes: Roasted Lemon Pepper Herb Chicken Thighs with Lemon Wine Pan Sauce, Lemon Roasted Chicken, and Roasted Lemon Chicken.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Citroen Geroosterde Kip",
        "subtitle": "Spoonacular-import",
        "description": "Als je meer glutenvrije, zuivelvrije en hele 30 recepten aan je receptendoos wilt toevoegen, is Citroengeroosterde Kip misschien een recept dat je zou moeten proberen. Dit recept maakt 4 porties met elk 681 calorieën, 37 g eiwit en 44 g vet. Voor $ 2,17 per portie dekt dit recept 28% van uw dagelijkse behoefte aan vitamines en mineralen. Van bereiding tot op het bord duurt dit recept ongeveer 2 uur. Dit recept is geliefd bij 1 foodies en koks. Het werkt goed als hoofdgerecht. Dit recept van Foodista vereist paprika, rozemarijn, zout en peper en gebraden kip. Met een lepelscore van 83% is dit gerecht uitmuntend. Als je dit recept lekker vindt, kijk dan eens naar deze soortgelijke recepten: Geroosterde citroenpeper, kruidenkippendijen met citroenwijnpansaus, citroengeroosterde kip en geroosterde citroenkip.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet rôti au citron",
        "subtitle": "Import Spoonacular",
        "description": "Si vous souhaitez ajouter plus de 30 recettes sans gluten, sans produits laitiers et entières à votre boîte de recettes, le poulet rôti au citron pourrait être une recette que vous devriez essayer. Cette recette donne 4 portions avec 681 calories, 37 g de protéines et 44 g de matières grasses chacune. Pour 2,17 $ par portion, cette recette couvre 28 % de vos besoins quotidiens en vitamines et minéraux. De la préparation à l'assiette, cette recette prend environ 2 heures. Cette recette est appréciée des 1 gourmets et des cuisiniers. Cela fonctionne bien comme plat principal. Cette recette de Foodista nécessite du paprika, du romarin, du sel et du poivre et du poulet rôti. Avec un score cuillère de 83%, ce plat est exceptionnel. Si vous aimez cette recette, jetez un œil à ces recettes similaires : Cuisses de poulet rôties au citron, au poivre et aux herbes avec sauce au vin et au citron, Poulet rôti au citron et Poulet rôti au citron.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken broth",
          "nl": "kippenbouillon",
          "fr": "bouillon de poulet"
        },
        "amount": 180,
        "unit": "ml",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "rosemary",
          "nl": "rozemarijn",
          "fr": "romarin"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "thyme",
          "nl": "tijm",
          "fr": "thym"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic cloves",
          "nl": "knoflookteentjes",
          "fr": "gousses d'ail"
        },
        "amount": 6,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "lemon",
          "nl": "citroen",
          "fr": "citron"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 4,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "paprika",
          "nl": "paprika",
          "fr": "paprika"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "roasting chicken",
          "nl": "gebraden kip",
          "fr": "poulet rôti"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "salt and pepper",
          "nl": "zout en peper",
          "fr": "sel et poivre"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "yukon gold potatoes",
          "nl": "Yukon gouden aardappelen",
          "fr": "pommes de terre d'or du Yukon"
        },
        "amount": 4,
        "unit": "large",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "spoonacular-660133",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/660133-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Simple Roast Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Simple Roast Chicken is a gluten free recipe with 4 servings. For $2.76 per serving, this recipe covers 37% of your daily requirements of vitamins and minerals. One portion of this dish contains about 47g of protein, 64g of fat, and a total of 990 calories. It works well as a rather cheap main course. 2 people were glad they tried this recipe. From preparation to the plate, this recipe takes about 45 minutes. It is brought to you by Foodista. Head to the store and pick up chicken, butter, lemon, and a few other things to make it today. Overall, this recipe earns a solid spoonacular score of 69%. Try Simple Roast Chicken, The Best Simple Roast Chicken, and Simple Roast Chicken for similar recipes.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Eenvoudige gebraden kip",
        "subtitle": "Spoonacular-import",
        "description": "Simple Roast Chicken is een glutenvrij recept met 4 porties. Voor $ 2,76 per portie dekt dit recept 37% van uw dagelijkse behoefte aan vitamines en mineralen. Eén portie van dit gerecht bevat ongeveer 47 gram eiwit, 64 gram vet en in totaal 990 calorieën. Het werkt goed als een vrij goedkoop hoofdgerecht. 2 mensen waren blij dat ze dit recept probeerden. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Het wordt u aangeboden door Foodista. Ga naar de winkel en koop kip, boter, citroen en nog een paar andere dingen om het vandaag te maken. Over het geheel genomen verdient dit recept een solide lepelscore van 69%. Probeer Simple Roast Chicken, The Best Simple Roast Chicken en Simple Roast Chicken voor vergelijkbare recepten.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet rôti simple",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet rôti simple est une recette sans gluten de 4 portions. Pour 2,76 $ par portion, cette recette couvre 37 % de vos besoins quotidiens en vitamines et minéraux. Une portion de ce plat contient environ 47 g de protéines, 64 g de matières grasses et un total de 990 calories. Cela fonctionne bien comme plat principal plutôt bon marché. 2 personnes étaient contentes d'avoir essayé cette recette. De la préparation à l'assiette, cette recette prend environ 45 minutes. Il vous est présenté par Foodista. Rendez-vous au magasin et procurez-vous du poulet, du beurre, du citron et quelques autres choses à préparer aujourd'hui. Dans l’ensemble, cette recette obtient un solide score cuillère de 69 %. Essayez le poulet rôti simple, le meilleur poulet rôti simple et le poulet rôti simple pour des recettes similaires.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 1.2,
        "unit": "kg",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "butter",
          "nl": "boter",
          "fr": "beurre"
        },
        "amount": 0.5,
        "unit": "stick",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "garlic",
          "nl": "knoflook",
          "fr": "ail"
        },
        "amount": 5,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "rind of two lemons",
          "nl": "schil van twee citroenen",
          "fr": "le zeste de deux citrons"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "chilli flakes",
          "nl": "chilivlokken",
          "fr": "flocons de piment"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt and pepper",
          "nl": "zout en peper",
          "fr": "sel et poivre"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "lemon",
          "nl": "citroen",
          "fr": "citron"
        },
        "amount": 0.5,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "yukon gold potatoes",
          "nl": "Yukon gouden aardappelen",
          "fr": "pommes de terre d'or du Yukon"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "sweet potatoes",
          "nl": "zoete aardappelen",
          "fr": "patates douces"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "chilli flakes",
          "nl": "chilivlokken",
          "fr": "flocons de piment"
        },
        "amount": 1,
        "unit": "pinch",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-710766",
    "prepTime": "660 mins",
    "cookTime": "180 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 6,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/710766-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Easy Baked Chicken",
        "subtitle": "Spoonacular Import",
        "description": "The recipe Easy Baked Chicken can be made in about 11 hour. Watching your figure? This gluten free, dairy free, paleolithic, and primal recipe has 389 calories, 34g of protein, and 24g of fat per serving. This recipe serves 6. For $1.86 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. 1 person were impressed by this recipe. It works well as a reasonably priced main course. Head to the store and pick up salt, rosemary flakes, paprika, and a few other things to make it today. It is brought to you by Pink When. All things considered, we decided this recipe deserves a spoonacular score of 59%. This score is solid. Try Easy Baked Chicken, Easy Baked Chicken, and Easy Baked Chicken for similar recipes.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Makkelijk gebakken kip",
        "subtitle": "Spoonacular-import",
        "description": "Het recept Easy Baked Chicken maak je in ongeveer 11 uur. Op je figuur letten? Dit glutenvrije, zuivelvrije, paleolithische en oerrecept bevat 389 calorieën, 34 g eiwit en 24 g vet per portie. Dit recept is voor 6 personen. Voor $ 1,86 per portie dekt dit recept 23% van uw dagelijkse behoefte aan vitamines en mineralen. 1 persoon was onder de indruk van dit recept. Het werkt goed als een redelijk geprijsd hoofdgerecht. Ga naar de winkel en koop zout, rozemarijnvlokken, paprika en nog een paar andere dingen om het vandaag te maken. Het wordt u aangeboden door Pink When. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 59% verdient. Deze score is solide. Probeer Easy Baked Chicken, Easy Baked Chicken en Easy Baked Chicken voor soortgelijke recepten.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet au four facile",
        "subtitle": "Import Spoonacular",
        "description": "La recette Poulet au four facile peut être préparée en 11 heures environ. Vous surveillez votre silhouette ? Cette recette sans gluten, sans produits laitiers, paléolithique et primale contient 389 calories, 34 g de protéines et 24 g de matières grasses par portion. Cette recette en sert 6. Pour 1,86 $ par portion, cette recette couvre 23 % de vos besoins quotidiens en vitamines et minéraux. 1 personne a été impressionnée par cette recette. Cela fonctionne bien comme plat principal à un prix raisonnable. Rendez-vous au magasin et récupérez du sel, des flocons de romarin, du paprika et quelques autres choses pour le préparer aujourd'hui. Il vous est présenté par Pink When. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 59 %. Ce score est solide. Essayez le poulet au four facile, le poulet au four facile et le poulet au four facile pour des recettes similaires.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken broth",
          "nl": "kippenbouillon",
          "fr": "bouillon de poulet"
        },
        "amount": 1,
        "unit": "can",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "lemon",
          "nl": "citroen",
          "fr": "citron"
        },
        "amount": 1,
        "unit": "large",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "paprika",
          "nl": "paprika",
          "fr": "paprika"
        },
        "amount": 6,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "bell pepper",
          "nl": "paprika",
          "fr": "poivron"
        },
        "amount": 6,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "rosemary flakes",
          "nl": "rozemarijnvlokken",
          "fr": "flocons de romarin"
        },
        "amount": 6,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 6,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 1814,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      }
    ]
  },
  {
    "id": "spoonacular-649036",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 6,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/649036-312x231.jpg",
    "isGlutenFree": false,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Korean Candy Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Korean Candy Chicken is a main course that serves 6. One serving contains 671 calories, 57g of protein, and 9g of fat. For $2.36 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. A mixture of soy sauce, eggs, sesame seeds, and a handful of other ingredients are all it takes to make this recipe so delicious. 1 person found this recipe to be flavorful and satisfying. From preparation to the plate, this recipe takes around 45 minutes. This recipe is typical of Korean cuisine. It is brought to you by Foodista. It is a good option if you're following a dairy free diet. Taking all factors into account, this recipe earns a spoonacular score of 70%, which is solid. Char-grilled Korean Style BBQ Pork Chops and Artisan Korean Meat Giveaway, Grilled Korean BBQ Short Rib Dogs with Sweet Peach Relish + Spicy Korean Slaw, and Cajeta Candy (Chewy Cinnamon Milk Candy) are very similar to this recipe.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Koreaanse snoepkip",
        "subtitle": "Spoonacular-import",
        "description": "Korean Candy Chicken is een hoofdgerecht voor 6 personen. Eén portie bevat 671 calorieën, 57 g eiwit en 9 g vet. Voor $ 2,36 per portie dekt dit recept 30% van uw dagelijkse behoefte aan vitamines en mineralen. Een mengsel van sojasaus, eieren, sesamzaadjes en een handvol andere ingrediënten is voldoende om dit recept zo heerlijk te maken. 1 persoon vond dit recept smaakvol en bevredigend. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Dit recept is typisch voor de Koreaanse keuken. Het wordt u aangeboden door Foodista. Het is een goede optie als u een zuivelvrij dieet volgt. Als we alle factoren in aanmerking nemen, krijgt dit recept een lepelscore van 70%, wat solide is. Op houtskool gegrilde Koreaanse BBQ-karbonades en ambachtelijke Koreaanse vlees weggeefactie, gegrilde Koreaanse BBQ Short Rib Dogs met zoete perziksaus + pittige Koreaanse slaw en Cajeta Candy (taaie kaneelmelksnoepjes) lijken erg op dit recept.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet aux bonbons coréens",
        "subtitle": "Import Spoonacular",
        "description": "Korean Candy Chicken est un plat principal pour 6 personnes. Une portion contient 671 calories, 57 g de protéines et 9 g de matières grasses. Pour 2,36 $ par portion, cette recette couvre 30 % de vos besoins quotidiens en vitamines et minéraux. Un mélange de sauce soja, d'œufs, de graines de sésame et d'une poignée d'autres ingrédients suffisent pour rendre cette recette si délicieuse. 1 personne a trouvé cette recette savoureuse et satisfaisante. De la préparation à l'assiette, cette recette prend environ 45 minutes. Cette recette est typique de la cuisine coréenne. Il vous est présenté par Foodista. C'est une bonne option si vous suivez un régime sans produits laitiers. En tenant compte de tous les facteurs, cette recette obtient un score cuillère de 70 %, ce qui est solide. Les côtelettes de porc grillées au barbecue à la coréenne et la viande coréenne artisanale, les chiens de côtes levées grillées au barbecue coréen avec relish aux pêches sucrées + salade de chou coréenne épicée et les bonbons Cajeta (bonbons au lait à la cannelle) sont très similaires à cette recette.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "rice",
          "nl": "rijst",
          "fr": "riz"
        },
        "amount": 6,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "eggs",
          "nl": "eieren",
          "fr": "œufs"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "flour",
          "nl": "meel",
          "fr": "farine"
        },
        "amount": 250,
        "unit": "g",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "sesame seeds",
          "nl": "sesamzaadjes",
          "fr": "graines de sésame"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken breasts",
          "nl": "kippenborsten",
          "fr": "poitrines de poulet"
        },
        "amount": 3,
        "unit": "lbs",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "sugar",
          "nl": "suiker",
          "fr": "sucre"
        },
        "amount": 125,
        "unit": "g",
        "category": "Bakkerij"
      }
    ]
  },
  {
    "id": "spoonacular-663392",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 6,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/663392-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Three-Cup Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Need a gluten free and dairy free main course? Three-Cup Chicken could be a tremendous recipe to try. This recipe makes 6 servings with 435 calories, 28g of protein, and 26g of fat each. For $2.73 per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. A couple people made this recipe, and 44 would say it hit the spot. A mixture of soy sauce, bulb garlic, chicken, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 45%. This score is pretty good. If you like this recipe, you might also like recipes such as 7 Cup Burfi – 7 Cup Cake | Easy Diwali Sweet s, Three Cup Chicken, and Three-Cup Chicken.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kip met drie kopjes",
        "subtitle": "Spoonacular-import",
        "description": "Een glutenvrij en zuivelvrij hoofdgerecht nodig? Three-Cup Chicken kan een geweldig recept zijn om te proberen. Dit recept maakt 6 porties met elk 435 calorieën, 28 g eiwit en 26 g vet. Voor $ 2,73 per portie dekt dit recept 14% van uw dagelijkse behoefte aan vitamines en mineralen. Een paar mensen hebben dit recept gemaakt, en 44 zouden zeggen dat het een succes was. Een mengsel van sojasaus, bolknoflook, kip en een handvol andere ingrediënten is voldoende om dit recept zo smaakvol te maken. Het wordt u aangeboden door Foodista. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 45% verdient. Deze score is behoorlijk goed. Als je dit recept lekker vindt, vind je misschien ook recepten zoals 7 Cup Burfi – 7 Cup Cake | Gemakkelijke Diwali-snoepjes, kip met drie kopjes en kip met drie kopjes.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet trois tasses",
        "subtitle": "Import Spoonacular",
        "description": "Besoin d’un plat principal sans gluten et sans produits laitiers ? Le poulet à trois tasses pourrait être une formidable recette à essayer. Cette recette donne 6 portions avec 435 calories, 28 g de protéines et 26 g de matières grasses chacune. Pour 2,73 $ par portion, cette recette couvre 14 % de vos besoins quotidiens en vitamines et minéraux. Quelques personnes ont préparé cette recette, et 44 diraient qu’elle a fait mouche. Un mélange de sauce soja, de bulbe d'ail, de poulet et d'une poignée d'autres ingrédients suffit pour rendre cette recette si savoureuse. Il vous est présenté par Foodista. De la préparation à l'assiette, cette recette prend environ 45 minutes. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 45 %. Ce score est plutôt bon. Si vous aimez cette recette, vous aimerez peut-être aussi des recettes telles que 7 Cup Burfi – 7 Cup Cake | Easy Diwali Sweet s, trois tasses de poulet et trois tasses de poulet.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "basil",
          "nl": "basilicum",
          "fr": "basilic"
        },
        "amount": 2,
        "unit": "leaves",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "bulb garlic",
          "nl": "bol knoflook",
          "fr": "bulbe d'ail"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "old ginger",
          "nl": "oude gember",
          "fr": "vieux gingembre"
        },
        "amount": 3,
        "unit": "slices",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "rice wine",
          "nl": "rijst wijn",
          "fr": "vin de riz"
        },
        "amount": 240,
        "unit": "ml",
        "category": "Bieren & Dranken"
      },
      {
        "name": {
          "en": "sesame oil",
          "nl": "sesamolie",
          "fr": "huile de sésame"
        },
        "amount": 240,
        "unit": "ml",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 125,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "spring onions",
          "nl": "lente-uitjes",
          "fr": "oignons nouveaux"
        },
        "amount": 3,
        "unit": "large bunches",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "sugar",
          "nl": "suiker",
          "fr": "sucre"
        },
        "amount": 2,
        "unit": "el",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      }
    ]
  },
  {
    "id": "spoonacular-647615",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 6,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/647615-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Huli-Huli Chicken",
        "subtitle": "Spoonacular Import",
        "description": "The recipe Huli-Huli Chicken can be made in approximately 45 minutes. Watching your figure? This gluten free, dairy free, paleolithic, and primal recipe has 150 calories, 14g of protein, and 7g of fat per serving. For 52 cents per serving, this recipe covers 7% of your daily requirements of vitamins and minerals. This recipe serves 6. 2 people were glad they tried this recipe. This recipe from Foodista requires chicken drumsticks and 4 thighs, cloves garlic -smashed, ginger root-smashed, and pineapple. Only a few people really liked this side dish. All things considered, we decided this recipe deserves a spoonacular score of 34%. This score is rather bad. Huli Huli Chicken Rice Bowls, Hawaiian Barbecue Huli Huli Chicken, and Hawaiian Barbequed \"Huli-Huli\" Chicken are very similar to this recipe.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Huli-Huli-kip",
        "subtitle": "Spoonacular-import",
        "description": "Het recept Huli-Huli Kip maak je in ongeveer 45 minuten. Op je figuur letten? Dit glutenvrije, zuivelvrije, paleolithische en oerrecept bevat 150 calorieën, 14 g eiwit en 7 g vet per portie. Voor 52 cent per portie dekt dit recept 7% van je dagelijkse behoefte aan vitamines en mineralen. Dit recept is voor 6 personen. 2 mensen waren blij dat ze dit recept hebben geprobeerd. Voor dit recept van Foodista zijn kippendrumsticks en 4 dijen, teentjes knoflook, gebroken gemberwortel en ananas nodig. Slechts een paar mensen vonden dit bijgerecht erg lekker. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 34% verdient. Deze score is nogal slecht. Huli Huli Chicken Rice Bowls, Hawaiian Barbecue Huli Huli Chicken en Hawaiian Barbecue \"Huli-Huli\" Chicken lijken erg op dit recept.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Huli-Huli",
        "subtitle": "Import Spoonacular",
        "description": "La recette Poulet Huli-Huli peut être préparée en 45 minutes environ. Vous surveillez votre silhouette ? Cette recette sans gluten, sans produits laitiers, paléolithique et primale contient 150 calories, 14 g de protéines et 7 g de matières grasses par portion. Pour 52 cents par portion, cette recette couvre 7 % de vos besoins quotidiens en vitamines et minéraux. Cette recette en sert 6. 2 personnes étaient heureuses d'avoir essayé cette recette. Cette recette de Foodista nécessite des pilons de poulet et 4 cuisses, des gousses d'ail écrasées, de la racine de gingembre écrasée et de l'ananas. Seules quelques personnes ont vraiment aimé ce plat d'accompagnement. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 34 %. Ce score est plutôt mauvais. Les bols de riz au poulet Huli Huli, le poulet Huli Huli au barbecue hawaïen et le poulet « Huli-Huli » au barbecue hawaïen sont très similaires à cette recette.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken drumsticks and 4 thighs",
          "nl": "kippendrumsticks en 4 dijen",
          "fr": "pilons de poulet et 4 cuisses"
        },
        "amount": 6,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "cloves garlic -smashed",
          "nl": "teentjes knoflook -geplet",
          "fr": "gousses d'ail écrasées"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "ginger root-smashed",
          "nl": "gemberwortel gebroken",
          "fr": "racine de gingembre écrasée"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "kosher salt",
          "nl": "koosjer zout",
          "fr": "sel casher"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "pineapple",
          "nl": "ananas",
          "fr": "ananas"
        },
        "amount": 227,
        "unit": "g",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "spoonacular-1697665",
    "prepTime": "30 mins",
    "cookTime": "20 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 2,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/1697665-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Garlic Lemon Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Garlic Lemon Chicken is a gluten free and primal recipe with 2 servings. For $2.69 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. This main course has 395 calories, 38g of protein, and 25g of fat per serving. It is brought to you by spoonacular user maplewoodroad. From preparation to the plate, this recipe takes around 30 minutes. If you have anchovy, garlic - 2, olive oil, and a few other ingredients on hand, you can make it. If you like this recipe, you might also like recipes such as Lemon Chicken Scallopini with Lemon Garlic Cream Sauce, Lemon Garlic Chicken, and Lemon - Garlic Chicken.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Knoflook Citroen Kip",
        "subtitle": "Spoonacular-import",
        "description": "Knoflook Citroen Kip is een glutenvrij en oerrecept met 2 porties. Voor $ 2,69 per portie dekt dit recept 27% van uw dagelijkse behoefte aan vitamines en mineralen. Dit hoofdgerecht bevat 395 calorieën, 38 g eiwit en 25 g vet per portie. Het wordt u aangeboden door lepelaculaire gebruiker maplewoodroad. Van bereiding tot op het bord duurt dit recept ongeveer 30 minuten. Als je ansjovis, knoflook - 2, olijfolie en een paar andere ingrediënten bij de hand hebt, kun je het maken. Als je dit recept lekker vindt, vind je misschien ook recepten leuk zoals Citroenkip-scallopini met citroen-knoflookroomsaus, Citroen-knoflookkip en Citroen-knoflookkip.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet à l'ail et au citron",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet à l'ail et au citron est une recette sans gluten et primale avec 2 portions. Pour 2,69 $ par portion, cette recette couvre 27 % de vos besoins quotidiens en vitamines et minéraux. Ce plat principal contient 395 calories, 38 g de protéines et 25 g de matières grasses par portion. Il vous est présenté par l'utilisateur Spoonacular Maplewoodroad. De la préparation à l'assiette, cette recette prend environ 30 minutes. Si vous avez de l'anchois, de l'ail - 2, de l'huile d'olive et quelques autres ingrédients sous la main, vous pouvez le préparer. Si vous aimez cette recette, vous aimerez peut-être aussi des recettes telles que Escalopes de poulet au citron avec sauce crémeuse au citron et à l'ail, Poulet au citron et à l'ail et Poulet au citron et à l'ail.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "thinly cut chicken breast",
          "nl": "dun gesneden kipfilet",
          "fr": "poitrine de poulet coupée finement"
        },
        "amount": 340,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "kosher salt",
          "nl": "koosjer zout",
          "fr": "sel casher"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "freshly cracked pepper",
          "nl": "vers gemalen peper",
          "fr": "poivre fraîchement concassé"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic - 2",
          "nl": "knoflook - 2",
          "fr": "ail - 2"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "capers",
          "nl": "kappertjes",
          "fr": "câpres"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "anchovy",
          "nl": "ansjovis",
          "fr": "anchois"
        },
        "amount": 3,
        "unit": "fillet",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "pepper flakes",
          "nl": "pepervlokken",
          "fr": "flocons de piment"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "butter",
          "nl": "boter",
          "fr": "beurre"
        },
        "amount": 1,
        "unit": "el",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "lemon juice",
          "nl": "citroensap",
          "fr": "jus de citron"
        },
        "amount": 2,
        "unit": "servings",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "flat leaf parsley",
          "nl": "platte peterselie",
          "fr": "persil plat"
        },
        "amount": 0.3,
        "unit": "c",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "spoonacular-637264",
    "prepTime": "30 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/637264-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Cashew Butter Chicken",
        "subtitle": "Spoonacular Import",
        "description": "You can never have too many main course recipes, so give Cashew Butter Chicken a try. One serving contains 431 calories, 46g of protein, and 24g of fat. This recipe serves 4. For $2.5 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. It is a budget friendly recipe for fans of Indian food. 1 person has made this recipe and would make it again. A mixture of garlic, oil, plum tomatoes, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 30 minutes. It is a good option if you're following a gluten free diet. Overall, this recipe earns a solid spoonacular score of 65%. Asian Salad with Cashew Dressing and Cashew Butter Cookies, Cashew Butter Chicken, and Almond Crusted Chicken with Cashew Butter and Roasted Cranberries are very similar to this recipe.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Cashewboter Kip",
        "subtitle": "Spoonacular-import",
        "description": "Je kunt nooit genoeg hoofdgerechtrecepten hebben, dus probeer Cashew Butter Chicken eens. Eén portie bevat 431 calorieën, 46 g eiwit en 24 g vet. Dit recept is voor 4 personen. Voor $ 2,5 per portie dekt dit recept 25% van uw dagelijkse behoefte aan vitamines en mineralen. Het is een budgetvriendelijk recept voor liefhebbers van Indiaas eten. 1 persoon heeft dit recept gemaakt en zou het zo nog een keer maken. Een mengsel van knoflook, olie, pruimtomaten en een handvol andere ingrediënten is voldoende om dit recept zo lekker te maken. Het wordt u aangeboden door Foodista. Van bereiding tot op het bord duurt dit recept ongeveer 30 minuten. Het is een goede optie als je een glutenvrij dieet volgt. Over het geheel genomen verdient dit recept een solide lepelscore van 65%. Aziatische salade met cashewdressing en cashewboterkoekjes, kip met cashewboter en kip met amandelkorst met cashewboter en geroosterde veenbessen lijken erg op dit recept.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet au beurre de cajou",
        "subtitle": "Import Spoonacular",
        "description": "Vous ne pouvez jamais avoir trop de recettes de plats principaux, alors essayez le poulet au beurre de cajou. Une portion contient 431 calories, 46 g de protéines et 24 g de matières grasses. Cette recette en sert 4. Pour 2,5 $ par portion, cette recette couvre 25 % de vos besoins quotidiens en vitamines et minéraux. C'est une recette économique pour les amateurs de cuisine indienne. 1 personne a fait cette recette et la referait. Un mélange d’ail, d’huile, de tomates italiennes et une poignée d’autres ingrédients suffisent pour rendre cette recette si savoureuse. Il vous est présenté par Foodista. De la préparation à l'assiette, cette recette prend environ 30 minutes. C'est une bonne option si vous suivez un régime sans gluten. Dans l’ensemble, cette recette obtient un solide score cuillère de 65 %. La salade asiatique avec vinaigrette aux noix de cajou et biscuits au beurre de cajou, le poulet au beurre de cajou et le poulet en croûte d'amandes avec beurre de cajou et canneberges rôties sont très similaires à cette recette.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "cayenne pepper",
          "nl": "cayennepeper",
          "fr": "poivre de Cayenne"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cumin seeds",
          "nl": "komijnzaad",
          "fr": "graines de cumin"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "fenugreek leaves",
          "nl": "fenegriek bladeren",
          "fr": "feuilles de fenugrec"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "coriander",
          "nl": "koriander",
          "fr": "coriandre"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garam masala",
          "nl": "garam masala",
          "fr": "garam masala"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic",
          "nl": "knoflook",
          "fr": "ail"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "ginger",
          "nl": "gember",
          "fr": "gingembre"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "ground coriander",
          "nl": "gemalen koriander",
          "fr": "coriandre moulue"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ground cumin",
          "nl": "gemalen komijn",
          "fr": "cumin moulu"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "oil",
          "nl": "olie",
          "fr": "huile"
        },
        "amount": 4,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cooking onion",
          "nl": "ui koken",
          "fr": "cuisson de l'oignon"
        },
        "amount": 1,
        "unit": "medium",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "yogurt",
          "nl": "yoghurt",
          "fr": "yaourt"
        },
        "amount": 2,
        "unit": "el",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "plum tomatoes",
          "nl": "pruim tomaten",
          "fr": "tomates italiennes"
        },
        "amount": 4,
        "unit": "large",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken thighs",
          "nl": "kippendijen",
          "fr": "cuisses de poulet"
        },
        "amount": 8,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "turmeric",
          "nl": "kurkuma",
          "fr": "curcuma"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-1096259",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 2,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/1096259-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Lemon Thyme Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Lemon Thyme Chicken takes about 45 minutes from beginning to end. This main course has 767 calories, 44g of protein, and 63g of fat per serving. This recipe serves 2 and costs $1.66 per serving. It is a good option if you're following a gluten free, dairy free, paleolithic, and primal diet. Only a few people made this recipe, and 1 would say it hit the spot. If you have salt, chicken pieces, lemon, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 56%, which is good. Users who liked this recipe also liked Lemon Thyme Chicken, Lemon Thyme Chicken, and Lemon Thyme Chicken.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Citroentijm Kip",
        "subtitle": "Spoonacular-import",
        "description": "Citroentijmkip duurt ongeveer 45 minuten van begin tot eind. Dit hoofdgerecht bevat 767 calorieën, 44 g eiwit en 63 g vet per portie. Dit recept serveert 2 personen en kost $ 1,66 per portie. Het is een goede optie als je een glutenvrij, zuivelvrij, paleolithisch en oerdieet volgt. Slechts een paar mensen hebben dit recept gemaakt, en ik zou zeggen dat het een schot in de roos was. Als je zout, stukjes kip, citroen en een paar andere ingrediënten bij de hand hebt, kun je het maken. Het wordt u aangeboden door Foodista. Als we alle factoren in aanmerking nemen, krijgt dit recept een lepelscore van 56%, wat goed is. Gebruikers die dit recept lekker vonden, hielden ook van Citroentijmkip, Citroentijmkip en Citroentijmkip.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Citron Thym",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet au citron et au thym prend environ 45 minutes du début à la fin. Ce plat principal contient 767 calories, 44 g de protéines et 63 g de matières grasses par portion. Cette recette sert 2 personnes et coûte 1,66 $ par portion. C'est une bonne option si vous suivez un régime sans gluten, sans produits laitiers, paléolithique et primal. Seules quelques personnes ont fait cette recette, et je dirais qu’elle a fait mouche. Si vous avez du sel, des morceaux de poulet, du citron et quelques autres ingrédients sous la main, vous pouvez le préparer. Il vous est présenté par Foodista. En tenant compte de tous les facteurs, cette recette obtient un score cuillère de 56 %, ce qui est bien. Les utilisateurs qui ont aimé cette recette ont également aimé Poulet au thym citronné, Poulet au thym citronné et Poulet au thym citronné.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 4,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken pieces",
          "nl": "stukjes kip",
          "fr": "morceaux de poulet"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "thyme sprigs",
          "nl": "takjes tijm",
          "fr": "brins de thym"
        },
        "amount": 1,
        "unit": "handful",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "lemon juice",
          "nl": "citroensap",
          "fr": "jus de citron"
        },
        "amount": 1,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "lemon zest",
          "nl": "citroenschil",
          "fr": "zeste de citron"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 2,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic",
          "nl": "knoflook",
          "fr": "ail"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "lemon",
          "nl": "citroen",
          "fr": "citron"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "spoonacular-654443",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 5,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/654443-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Pan-Browned Chicken",
        "subtitle": "Spoonacular Import",
        "description": "If you want to add more gluten free, dairy free, fodmap friendly, and whole 30 recipes to your recipe box, Pan-Browned Chicken might be a recipe you should try. One serving contains 230 calories, 15g of protein, and 17g of fat. For 74 cents per serving, you get a side dish that serves 5. If you have chicken, chilli powder, vegetable oil, and a few other ingredients on hand, you can make it. 1 person were glad they tried this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes around 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 30%. This score is rather bad. If you like this recipe, you might also like recipes such as Pan-Browned Chicken, Pan-browned Brussel Sprouts, and Pan-browned Brussel Sprouts.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Pan-bruine kip",
        "subtitle": "Spoonacular-import",
        "description": "Als je meer glutenvrije, zuivelvrije, fodmapvriendelijke en hele 30 recepten aan je receptendoos wilt toevoegen, is Pan-Browned Chicken misschien een recept dat je zou moeten proberen. Eén portie bevat 230 calorieën, 15 g eiwit en 17 g vet. Voor 74 cent per portie krijg je een bijgerecht voor 5 personen. Als je kip, chilipoeder, plantaardige olie en een paar andere ingrediënten bij de hand hebt, kun je het maken. 1 persoon was blij dat ze dit recept probeerden. Het wordt u aangeboden door Foodista. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 30% verdient. Deze score is nogal slecht. Als je dit recept lekker vindt, hou je misschien ook van recepten zoals in de pan gebakken kip, in de pan gebakken spruitjes en in de pan gebakken spruitjes.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet poêlé",
        "subtitle": "Import Spoonacular",
        "description": "Si vous souhaitez ajouter plus de 30 recettes sans gluten, sans produits laitiers, compatibles fodmap et entières à votre boîte de recettes, le poulet poêlé pourrait être une recette que vous devriez essayer. Une portion contient 230 calories, 15 g de protéines et 17 g de matières grasses. Pour 74 cents par portion, vous obtenez un plat d'accompagnement pour 5 personnes. Si vous avez du poulet, de la poudre de piment, de l'huile végétale et quelques autres ingrédients sous la main, vous pouvez le préparer. 1 personne était heureuse d'avoir essayé cette recette. Il vous est présenté par Foodista. De la préparation à l'assiette, cette recette prend environ 45 minutes. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 30 %. Ce score est plutôt mauvais. Si vous aimez cette recette, vous aimerez peut-être aussi des recettes telles que Poulet poêlé, Choux de Bruxelles poêlés et Choux de Bruxelles poêlés.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 750,
        "unit": "grams",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "chilli powder",
          "nl": "chili poeder",
          "fr": "poudre de piment"
        },
        "amount": 0.3,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cinnamon powder",
          "nl": "kaneel poeder",
          "fr": "cannelle en poudre"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "lemon juice",
          "nl": "citroensap",
          "fr": "jus de citron"
        },
        "amount": 1,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "powder",
          "nl": "poeder",
          "fr": "poudre"
        },
        "amount": 0.3,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "vegetables",
          "nl": "groenten",
          "fr": "légumes"
        },
        "amount": 125,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "turmeric powder",
          "nl": "kurkuma poeder",
          "fr": "poudre de curcuma"
        },
        "amount": 0.3,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "vegetable oil",
          "nl": "plantaardige olie",
          "fr": "huile végétale"
        },
        "amount": 2,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "bell peppers",
          "nl": "paprika",
          "fr": "poivrons"
        },
        "amount": 31,
        "unit": "g",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-1095968",
    "prepTime": "90 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/1095968-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Easy Herbed Chicken",
        "subtitle": "Spoonacular Import",
        "description": "If you have roughly 1 hour and 30 minutes to spend in the kitchen, Easy Herbed Chicken might be an amazing gluten free, primal, and ketogenic recipe to try. One serving contains 393 calories, 22g of protein, and 32g of fat. For 86 cents per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. This recipe serves 4. 1 person has tried and liked this recipe. Head to the store and pick up chicken legs, parsley, basil, and a few other things to make it today. It works well as a very reasonably priced main course. It is brought to you by Foodista. With a spoonacular score of 38%, this dish is rather bad. If you like this recipe, you might also like recipes such as Easy Meals – Herbed Chicken, Orzo and Asparagus, Easy Meals – Herbed Chicken, Orzo and Asparagus, and Easy Herbed Salmon.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Gemakkelijk gekruide kip",
        "subtitle": "Spoonacular-import",
        "description": "Als je ongeveer 1 uur en 30 minuten de tijd hebt om in de keuken te staan, is Easy Herbed Chicken wellicht een geweldig glutenvrij, primair en ketogeen recept om uit te proberen. Eén portie bevat 393 calorieën, 22 g eiwit en 32 g vet. Voor 86 cent per portie dekt dit recept 14% van je dagelijkse behoefte aan vitamines en mineralen. Dit recept is voor 4 personen. 1 persoon heeft dit recept uitgeprobeerd en vond het leuk. Ga naar de winkel en koop kippenpoten, peterselie, basilicum en nog een paar andere dingen om het vandaag te maken. Het werkt goed als een zeer redelijk geprijsd hoofdgerecht. Het wordt u aangeboden door Foodista. Met een lepelscore van 38% is dit gerecht behoorlijk slecht. Als je dit recept lekker vindt, vind je misschien ook recepten leuk zoals Easy Meals – Gekruide Kip, Orzo en Asperges, Easy Meals – Gekruide Kip, Orzo en Asperges, en Easy Gekruide Zalm.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet aux herbes facile",
        "subtitle": "Import Spoonacular",
        "description": "Si vous avez environ 1 heure et 30 minutes à passer en cuisine, le poulet aux herbes facile pourrait être une incroyable recette sans gluten, primale et cétogène à essayer. Une portion contient 393 calories, 22 g de protéines et 32 ​​g de matières grasses. Pour 86 cents par portion, cette recette couvre 14 % de vos besoins quotidiens en vitamines et minéraux. Cette recette est pour 4 personnes. 1 personne a essayé et aimé cette recette. Rendez-vous au magasin et procurez-vous des cuisses de poulet, du persil, du basilic et quelques autres choses à préparer aujourd'hui. Cela fonctionne bien comme plat principal à un prix très raisonnable. Il vous est présenté par Foodista. Avec un score cuillère de 38%, ce plat est plutôt mauvais. Si vous aimez cette recette, vous aimerez peut-être également des recettes telles que Repas faciles – Poulet aux herbes, orzo et asperges, Repas faciles – Poulet aux herbes, orzo et asperges et Saumon facile aux herbes.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken legs",
          "nl": "kippenpoten",
          "fr": "cuisses de poulet"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "cauliflower",
          "nl": "bloemkool",
          "fr": "chou-fleur"
        },
        "amount": 0.3,
        "unit": "head",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "butter",
          "nl": "boter",
          "fr": "beurre"
        },
        "amount": 4,
        "unit": "el",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "garlic cloves",
          "nl": "knoflookteentjes",
          "fr": "gousses d'ail"
        },
        "amount": 5,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "basil",
          "nl": "basilicum",
          "fr": "basilic"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "parsley",
          "nl": "peterselie",
          "fr": "persil"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "sage",
          "nl": "verstandig",
          "fr": "sage"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "thyme",
          "nl": "tijm",
          "fr": "thym"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "kosher salt",
          "nl": "koosjer zout",
          "fr": "sel casher"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ground pepper",
          "nl": "gemalen peper",
          "fr": "poivre moulu"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-651184",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 3,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/651184-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Masala Raisin Chicken",
        "subtitle": "Spoonacular Import",
        "description": "If you have roughly 45 minutes to spend in the kitchen, Masala Raisin Chicken might be an awesome gluten free, dairy free, and whole 30 recipe to try. For $1.1 per serving, you get a side dish that serves 3. One serving contains 319 calories, 13g of protein, and 25g of fat. 1 person found this recipe to be yummy and satisfying. A mixture of onion paste, oil, curry leaves, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. Not a lot of people really liked this Indian dish. With a spoonacular score of 57%, this dish is solid. Users who liked this recipe also liked chicken tikka masala , how to make chicken tikka masala, chicken tikka masala , how to make chicken tikka masala, and chicken tikka masala , how to make chicken tikka masala.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Masala Rozijnen Kip",
        "subtitle": "Spoonacular-import",
        "description": "Als je ongeveer 45 minuten de tijd hebt om in de keuken door te brengen, is Masala Raisin Chicken misschien een geweldig glutenvrij, zuivelvrij en geheel 30 recept om te proberen. Voor $ 1,1 per portie krijg je een bijgerecht voor 3 personen. Eén portie bevat 319 calorieën, 13 g eiwit en 25 g vet. 1 persoon vond dit recept lekker en bevredigend. Een mengsel van uienpasta, olie, kerrieblaadjes en een handvol andere ingrediënten is voldoende om dit recept zo smaakvol te maken. Het wordt u aangeboden door Foodista. Niet veel mensen hielden echt van dit Indiase gerecht. Met een lepelscore van 57% is dit gerecht stevig. Gebruikers die dit recept leuk vonden, hielden ook van kip tikka masala, hoe je kip tikka masala maakt, kip tikka masala, hoe je kip tikka masala maakt, en kip tikka masala, hoe je kip tikka masala maakt.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet aux raisins masala",
        "subtitle": "Import Spoonacular",
        "description": "Si vous avez environ 45 minutes à consacrer à la cuisine, le poulet aux raisins masala pourrait être une superbe recette sans gluten, sans produits laitiers et à essayer. Pour 1,1 $ par portion, vous obtenez un plat d'accompagnement pour 3 personnes. Une portion contient 319 calories, 13 g de protéines et 25 g de matières grasses. 1 personne a trouvé cette recette délicieuse et satisfaisante. Un mélange de pâte d’oignon, d’huile, de feuilles de curry et une poignée d’autres ingrédients suffisent pour rendre cette recette si savoureuse. Il vous est présenté par Foodista. Peu de gens ont vraiment aimé ce plat indien. Avec un score cuillère de 57%, ce plat est solide. Les utilisateurs qui ont aimé cette recette ont également aimé poulet tikka masala, comment faire du poulet tikka masala, poulet tikka masala, comment faire du poulet tikka masala, et poulet tikka masala, comment faire du poulet tikka masala.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 400,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "chili powder",
          "nl": "chili poeder",
          "fr": "poudre de chili"
        },
        "amount": 1.5,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "raisins",
          "nl": "rozijnen",
          "fr": "raisins secs"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ginger paste",
          "nl": "gemberpasta",
          "fr": "pâte de gingembre"
        },
        "amount": 0.5,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "garlic paste",
          "nl": "knoflookpasta",
          "fr": "pâte d'ail"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "onion paste",
          "nl": "uienpasta",
          "fr": "pâte d'oignon"
        },
        "amount": 0.5,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "tomato",
          "nl": "tomaat",
          "fr": "tomate"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "spices - 1 cinnamon",
          "nl": "kruiden - 1 kaneel",
          "fr": "épices - 1 cannelle"
        },
        "amount": 3,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "curry leaves",
          "nl": "kerrie bladeren",
          "fr": "feuilles de curry"
        },
        "amount": 2,
        "unit": "sprigs",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "oil",
          "nl": "olie",
          "fr": "huile"
        },
        "amount": 3,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 3,
        "unit": "servings",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-633569",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 6,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/633569-312x231.jpg",
    "isGlutenFree": false,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Baked Crusty Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Baked Crusty Chicken is a dairy free recipe with 6 servings. This main course has 367 calories, 26g of protein, and 24g of fat per serving. For $1.0 per serving, this recipe covers 13% of your daily requirements of vitamins and minerals. This recipe is liked by 2 foodies and cooks. It is brought to you by Foodista. From preparation to the plate, this recipe takes about 45 minutes. If you have parsley, ground pepper, flour, and a few other ingredients on hand, you can make it. Taking all factors into account, this recipe earns a spoonacular score of 40%, which is not so tremendous. If you like this recipe, you might also like recipes such as Crusty Baked Chicken, Baked Crusty Chicken, and Baked Crusty Chicken.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Gebakken knapperige kip",
        "subtitle": "Spoonacular-import",
        "description": "Baked Crusty Chicken is een zuivelvrij recept met 6 porties. Dit hoofdgerecht bevat 367 calorieën, 26 g eiwit en 24 g vet per portie. Voor $ 1,0 per portie dekt dit recept 13% van uw dagelijkse behoefte aan vitamines en mineralen. Dit recept is geliefd bij 2 foodies en koks. Het wordt u aangeboden door Foodista. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Als je peterselie, gemalen peper, bloem en een paar andere ingrediënten bij de hand hebt, kun je het maken. Als we alle factoren in aanmerking nemen, krijgt dit recept een lepelscore van 40%, wat niet zo geweldig is. Als je dit recept lekker vindt, hou je misschien ook van recepten als Krokant gebakken kip, Baked Crusty Chicken en Baked Crusty Chicken.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet croustillant au four",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet croustillant au four est une recette sans produits laitiers contenant 6 portions. Ce plat principal contient 367 calories, 26 g de protéines et 24 g de matières grasses par portion. Pour 1,0 $ par portion, cette recette couvre 13 % de vos besoins quotidiens en vitamines et minéraux. Cette recette est appréciée par 2 gourmands et cuisiniers. Il vous est présenté par Foodista. De la préparation à l'assiette, cette recette prend environ 45 minutes. Si vous avez du persil, du poivre moulu, de la farine et quelques autres ingrédients sous la main, vous pouvez le préparer. En tenant compte de tous les facteurs, cette recette obtient un score cuillère de 40 %, ce qui n'est pas si énorme. Si vous aimez cette recette, vous aimerez peut-être aussi des recettes telles que Poulet croustillant au four, Poulet croustillant au four et Poulet croustillant au four.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "bread crumbs",
          "nl": "broodkruimels",
          "fr": "chapelure"
        },
        "amount": 63,
        "unit": "g",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "butter",
          "nl": "boter",
          "fr": "beurre"
        },
        "amount": 2,
        "unit": "el",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "basil",
          "nl": "basilicum",
          "fr": "basilic"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "flour",
          "nl": "meel",
          "fr": "farine"
        },
        "amount": 31,
        "unit": "g",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "parsley",
          "nl": "peterselie",
          "fr": "persil"
        },
        "amount": 1,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "ground pepper",
          "nl": "gemalen peper",
          "fr": "poivre moulu"
        },
        "amount": 0.3,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "juice of lemon",
          "nl": "sap van citroen",
          "fr": "jus de citron"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "paprika",
          "nl": "paprika",
          "fr": "paprika"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "vegetable oil",
          "nl": "plantaardige olie",
          "fr": "huile végétale"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "spoonacular-646673",
    "prepTime": "240 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 6,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/646673-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Herb Roasted Chicken",
        "subtitle": "Spoonacular Import",
        "description": "If you have around 4 hours to spend in the kitchen, Herb Roasted Chicken might be an amazing gluten free and fodmap friendly recipe to try. For $1.23 per serving, this recipe covers 11% of your daily requirements of vitamins and minerals. This recipe serves 6. One portion of this dish contains roughly 21g of protein, 32g of fat, and a total of 425 calories. If you have basil, brown sugar, kosher salt, and a few other ingredients on hand, you can make it. It works well as a main course. This recipe from Foodista has 32 fans. All things considered, we decided this recipe deserves a spoonacular score of 39%. This score is not so awesome. Herb Roasted Chicken, Herb Roasted Whole Chicken, and Herb Roasted Chicken are very similar to this recipe.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kruiden Geroosterde Kip",
        "subtitle": "Spoonacular-import",
        "description": "Als je ongeveer 4 uur de tijd hebt om in de keuken door te brengen, is Herb Roasted Chicken wellicht een geweldig glutenvrij en fodmap-vriendelijk recept om te proberen. Voor $ 1,23 per portie dekt dit recept 11% van uw dagelijkse behoefte aan vitamines en mineralen. Dit recept serveert 6 personen. Eén portie van dit gerecht bevat ongeveer 21 g eiwit, 32 g vet en in totaal 425 calorieën. Als je basilicum, bruine suiker, koosjer zout en een paar andere ingrediënten bij de hand hebt, kun je het maken. Het werkt goed als hoofdgerecht. Dit recept van Foodista heeft 32 fans. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 39% verdient. Deze score is niet zo geweldig. Kruidengeroosterde kip, Kruidengeroosterde hele kip en Kruidengeroosterde kip lijken erg op dit recept.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Rôti Aux Herbes",
        "subtitle": "Import Spoonacular",
        "description": "Si vous avez environ 4 heures à passer en cuisine, le poulet rôti aux herbes pourrait être une incroyable recette sans gluten et adaptée aux fodmaps à essayer. Pour 1,23 $ par portion, cette recette couvre 11 % de vos besoins quotidiens en vitamines et minéraux. Cette recette en sert 6. Une portion de ce plat contient environ 21 g de protéines, 32 g de matières grasses et un total de 425 calories. Si vous avez du basilic, de la cassonade, du sel casher et quelques autres ingrédients sous la main, vous pouvez le préparer. Cela fonctionne bien comme plat principal. Cette recette de Foodista compte 32 fans. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 39 %. Ce score n'est pas si génial. Le poulet rôti aux herbes, le poulet entier rôti aux herbes et le poulet rôti aux herbes sont très similaires à cette recette.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "bay leaves",
          "nl": "laurierblaadjes",
          "fr": "feuilles de laurier"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "brown sugar",
          "nl": "bruine suiker",
          "fr": "cassonade"
        },
        "amount": 42,
        "unit": "g",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "butter",
          "nl": "boter",
          "fr": "beurre"
        },
        "amount": 1,
        "unit": "stick",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "basil",
          "nl": "basilicum",
          "fr": "basilic"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "rosemary",
          "nl": "rozemarijn",
          "fr": "romarin"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "thyme",
          "nl": "tijm",
          "fr": "thym"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "fennel seeds",
          "nl": "venkel zaden",
          "fr": "graines de fenouil"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ice water",
          "nl": "ijswater",
          "fr": "eau glacée"
        },
        "amount": 1440,
        "unit": "ml",
        "category": "Bieren & Dranken"
      },
      {
        "name": {
          "en": "kosher salt",
          "nl": "koosjer zout",
          "fr": "sel casher"
        },
        "amount": 6,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "coarse pepper",
          "nl": "grove peper",
          "fr": "gros poivre"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "water",
          "nl": "water",
          "fr": "eau"
        },
        "amount": 960,
        "unit": "ml",
        "category": "Bieren & Dranken"
      },
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 1361,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      }
    ]
  },
  {
    "id": "spoonacular-647201",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 8,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/647201-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Honey Citrus Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Honey Citrus Chicken takes roughly 45 minutes from beginning to end. One portion of this dish contains about 6g of protein, 9g of fat, and a total of 174 calories. This recipe serves 8 and costs 74 cents per serving. 1 person has tried and liked this recipe. It is a good option if you're following a gluten free diet. It is brought to you by Foodista. Not a lot of people really liked this side dish. A mixture of honey, chicken breast halves, pineapple, and a handful of other ingredients are all it takes to make this recipe so flavorful. Taking all factors into account, this recipe earns a spoonacular score of 46%, which is solid. If you like this recipe, you might also like recipes such as Honey-Citrus Chicken Sandwiches, Honey-Citrus Chicken Kabobs, and Pinot Grigio Chicken with Honey Citrus Glaze.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Honing Citrus Kip",
        "subtitle": "Spoonacular-import",
        "description": "Honey Citrus Chicken duurt van begin tot eind ongeveer 45 minuten. Eén portie van dit gerecht bevat ongeveer 6 gram eiwit, 9 gram vet en in totaal 174 calorieën. Dit recept serveert 8 personen en kost 74 cent per portie. 1 persoon heeft dit recept geprobeerd en vond het leuk. Het is een goede optie als je een glutenvrij dieet volgt. Het wordt u aangeboden door Foodista. Niet veel mensen hielden echt van dit bijgerecht. Een mengsel van honing, kipfilethelften, ananas en een handvol andere ingrediënten is voldoende om dit recept zo smaakvol te maken. Als we alle factoren in aanmerking nemen, krijgt dit recept een lepelscore van 46%, wat solide is. Als je dit recept lekker vindt, vind je misschien ook recepten leuk zoals sandwiches met honing-citruskip, honing-citruskip-kebabs en pinot grigio-kip met honing-citrusglazuur.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet au miel et aux agrumes",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet au miel et aux agrumes prend environ 45 minutes du début à la fin. Une portion de ce plat contient environ 6 g de protéines, 9 g de matières grasses et un total de 174 calories. Cette recette sert 8 personnes et coûte 74 cents par portion. 1 personne a essayé et aimé cette recette. C'est une bonne option si vous suivez un régime sans gluten. Il vous est présenté par Foodista. Peu de gens ont vraiment aimé ce plat d’accompagnement. Un mélange de miel, de moitiés de poitrine de poulet, d'ananas et d'une poignée d'autres ingrédients suffisent pour rendre cette recette si savoureuse. En tenant compte de tous les facteurs, cette recette obtient un score cuillère de 46 %, ce qui est solide. Si vous aimez cette recette, vous aimerez peut-être également des recettes telles que Sandwichs au poulet au miel et aux agrumes, Brochettes de poulet au miel et aux agrumes et Poulet au pinot grigio avec glaçage au miel et aux agrumes.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "pepper",
          "nl": "peper",
          "fr": "poivre"
        },
        "amount": 8,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "butter",
          "nl": "boter",
          "fr": "beurre"
        },
        "amount": 2,
        "unit": "el",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "basil",
          "nl": "basilicum",
          "fr": "basilic"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cilantro",
          "nl": "koriander",
          "fr": "coriandre"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic",
          "nl": "knoflook",
          "fr": "ail"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "honey",
          "nl": "Honing",
          "fr": "Miel"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "jalapeno pepper",
          "nl": "jalapenopeper",
          "fr": "piment jalapeno"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "kosher salt",
          "nl": "koosjer zout",
          "fr": "sel casher"
        },
        "amount": 8,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "limes",
          "nl": "limoenen",
          "fr": "citrons verts"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "oranges",
          "nl": "sinaasappelen",
          "fr": "oranges"
        },
        "amount": 3,
        "unit": "large",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "pineapple",
          "nl": "ananas",
          "fr": "ananas"
        },
        "amount": 250,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "chicken breast halves",
          "nl": "halve kipfilet",
          "fr": "moitiés de poitrine de poulet"
        },
        "amount": 170,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 3,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "vegetable oil",
          "nl": "plantaardige olie",
          "fr": "huile végétale"
        },
        "amount": 3,
        "unit": "el",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "spoonacular-636961",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 2,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/636961-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Caprese Stuffed Chicken",
        "subtitle": "Spoonacular Import",
        "description": "If you want to add more gluten free and primal recipes to your collection, Caprese Stuffed Chicken might be a recipe you should try. This side dish has 315 calories, 32g of protein, and 17g of fat per serving. For $2.27 per serving, this recipe covers 21% of your daily requirements of vitamins and minerals. This recipe serves 2. This recipe is typical of Mediterranean cuisine. 1 person were glad they tried this recipe. From preparation to the plate, this recipe takes around 45 minutes. A mixture of garlic clove, olive oil, mozzarella, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. With a spoonacular score of 60%, this dish is good. If you like this recipe, you might also like recipes such as Stuffed Caprese Chicken, Caprese Stuffed Balsamic Chicken, and Caprese Stuffed Balsamic Chicken.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Caprese Gevulde Kip",
        "subtitle": "Spoonacular-import",
        "description": "Als je meer glutenvrije en oerrecepten aan je verzameling wilt toevoegen, is Caprese Gevulde Kip wellicht een recept dat je moet proberen. Dit bijgerecht bevat 315 calorieën, 32 g eiwit en 17 g vet per portie. Voor $ 2,27 per portie dekt dit recept 21% van uw dagelijkse behoefte aan vitamines en mineralen. Dit recept voor 2 personen. Dit recept is typisch voor de mediterrane keuken. 1 persoon was blij dat ze dit recept probeerden. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Een mengsel van teentje knoflook, olijfolie, mozzarella en een handvol andere ingrediënten is voldoende om dit recept zo lekker te maken. Het wordt u aangeboden door Foodista. Met een lepelscore van 60% is dit gerecht goed. Als je dit recept lekker vindt, vind je misschien ook recepten leuk zoals Gevulde Caprese Kip, Caprese Gevulde Balsamico Kip en Caprese Gevulde Balsamico Kip.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet farci Caprese",
        "subtitle": "Import Spoonacular",
        "description": "Si vous souhaitez ajouter d'autres recettes sans gluten et primaires à votre collection, le poulet farci Caprese pourrait être une recette que vous devriez essayer. Ce plat d'accompagnement contient 315 calories, 32 g de protéines et 17 g de matières grasses par portion. Pour 2,27 $ par portion, cette recette couvre 21 % de vos besoins quotidiens en vitamines et minéraux. Cette recette est pour 2 personnes. Cette recette est typique de la cuisine méditerranéenne. 1 personne était heureuse d'avoir essayé cette recette. De la préparation à l'assiette, cette recette prend environ 45 minutes. Un mélange de gousse d'ail, d'huile d'olive, de mozzarella et une poignée d'autres ingrédients suffit pour rendre cette recette si délicieuse. Il vous est présenté par Foodista. Avec un score cuillère de 60%, ce plat est bon. Si vous aimez cette recette, vous aimerez peut-être aussi des recettes telles que Poulet caprese farci, Poulet farci au balsamique caprese et Poulet balsamique farci caprese.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
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
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt and pepper",
          "nl": "zout en peper",
          "fr": "sel et poivre"
        },
        "amount": 2,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic clove",
          "nl": "teentje knoflook",
          "fr": "gousse d'ail"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "mozzarella",
          "nl": "Mozzarella",
          "fr": "Mozzarella"
        },
        "amount": 57,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "vine-ripe tomatoes",
          "nl": "trosrijpe tomaten",
          "fr": "tomates mûres en vigne"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "basil leaves",
          "nl": "basilicum blaadjes",
          "fr": "feuilles de basilic"
        },
        "amount": 31,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "balsamic vinegar",
          "nl": "balsamico azijn",
          "fr": "vinaigre balsamique"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-647799",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 48,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/647799-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Indian Butter Chicken",
        "subtitle": "Spoonacular Import",
        "description": "You can never have too many Indian recipes, so give Indian Butter Chicken a try. This gluten free recipe serves 48 and costs 17 cents per serving. One portion of this dish contains about 2g of protein, 1g of fat, and a total of 24 calories. This recipe from Foodista has 7 fans. If you have salt and pepper, garam masala, tomatoes, and a few other ingredients on hand, you can make it. Only a few people really liked this hor d'oeuvre. From preparation to the plate, this recipe takes around 45 minutes. Overall, this recipe earns a not so great spoonacular score of 10%. If you like this recipe, you might also like recipes such as Indian Butter Chicken, Indian Butter Chicken, and Indian Butter Chicken.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Indiase Boterkip",
        "subtitle": "Spoonacular-import",
        "description": "Je kunt nooit genoeg Indiase recepten hebben, dus probeer Indian Butter Chicken eens. Dit glutenvrije recept is geschikt voor 48 personen en kost 17 cent per portie. Eén portie van dit gerecht bevat ongeveer 2 gram eiwit, 1 gram vet en in totaal 24 calorieën. Dit recept van Foodista heeft 7 fans. Als je zout en peper, garam masala, tomaten en een paar andere ingrediënten bij de hand hebt, kun je het maken. Slechts een paar mensen hielden echt van dit hor d'oeuvre. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Over het geheel genomen verdient dit recept een niet zo goede lepelscore van 10%. Als je dit recept lekker vindt, hou je misschien ook van recepten zoals Indian Butter Chicken, Indian Butter Chicken en Indian Butter Chicken.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet au beurre indien",
        "subtitle": "Import Spoonacular",
        "description": "Vous ne pouvez jamais avoir trop de recettes indiennes, alors essayez le poulet au beurre indien. Cette recette sans gluten sert 48 personnes et coûte 17 cents par portion. Une portion de ce plat contient environ 2 g de protéines, 1 g de matières grasses et un total de 24 calories. Cette recette de Foodista a 7 fans. Si vous avez du sel et du poivre, du garam masala, des tomates et quelques autres ingrédients sous la main, vous pouvez le préparer. Seules quelques personnes ont vraiment aimé cet hor-d'œuvre. De la préparation à l'assiette, cette recette prend environ 45 minutes. Dans l’ensemble, cette recette obtient un score cuillère pas si bon de 10 %. Si vous aimez cette recette, vous aimerez peut-être également des recettes telles que Poulet au beurre indien, Poulet au beurre indien et Poulet au beurre indien.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "butter",
          "nl": "boter",
          "fr": "beurre"
        },
        "amount": 14,
        "unit": "g",
        "category": "Zuivel & Eieren"
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
          "en": "chicken broth",
          "nl": "kippenbouillon",
          "fr": "bouillon de poulet"
        },
        "amount": 120,
        "unit": "ml",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "garam masala",
          "nl": "garam masala",
          "fr": "garam masala"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic",
          "nl": "knoflook",
          "fr": "ail"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "ginger",
          "nl": "gember",
          "fr": "gingembre"
        },
        "amount": 3,
        "unit": "cm",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "lemon",
          "nl": "citroen",
          "fr": "citron"
        },
        "amount": 1,
        "unit": "large",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "oil",
          "nl": "olie",
          "fr": "huile"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "yogurt",
          "nl": "yoghurt",
          "fr": "yaourt"
        },
        "amount": 63,
        "unit": "g",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "salt and pepper",
          "nl": "zout en peper",
          "fr": "sel et poivre"
        },
        "amount": 48,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cream",
          "nl": "room",
          "fr": "crème"
        },
        "amount": 120,
        "unit": "ml",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "tomatoes",
          "nl": "tomaten",
          "fr": "tomates"
        },
        "amount": 411,
        "unit": "g",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "spoonacular-645879",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 1,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/645879-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Grilled Sesame Chicken",
        "subtitle": "Spoonacular Import",
        "description": "You can never have too many main course recipes, so give Grilled Sesame Chicken a try. For $2.61 per serving, this recipe covers 13% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free and dairy free recipe has 751 calories, 23g of protein, and 39g of fat per serving. This recipe serves 1. 1 person has made this recipe and would make it again. From preparation to the plate, this recipe takes about 45 minutes. A mixture of soy sauce, honey, sesame oil, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It can be enjoyed any time, but it is especially good for The Fourth Of July. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 70%. This score is solid. If you like this recipe, take a look at these similar recipes: Grilled Sesame Chicken, Grilled Sesame-Ginger Chicken, and Sesame Noodles with Grilled Chicken.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Gegrilde Sesam Kip",
        "subtitle": "Spoonacular-import",
        "description": "Je kunt nooit genoeg hoofdgerechtrecepten hebben, dus probeer Gegrilde Sesamkip eens. Voor $ 2,61 per portie dekt dit recept 13% van uw dagelijkse behoefte aan vitamines en mineralen. Op je figuur letten? Dit glutenvrije en zuivelvrije recept bevat 751 calorieën, 23 g eiwit en 39 g vet per portie. Dit recept is voor 1 persoon. 1 persoon heeft dit recept gemaakt en zou het zo nog een keer maken. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Een mengsel van sojasaus, honing, sesamolie en een handvol andere ingrediënten is voldoende om dit recept zo heerlijk te maken. Je kunt er op elk moment van genieten, maar het is vooral goed voor The Fourth Of July. Het wordt u aangeboden door Foodista. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 70% verdient. Deze score is solide. Als je dit recept lekker vindt, kijk dan eens naar deze soortgelijke recepten: Gegrilde Sesamkip, Gegrilde Sesam-Gemberkip en Sesamnoedels met Gegrilde Kip.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet grillé au sésame",
        "subtitle": "Import Spoonacular",
        "description": "Vous ne pouvez jamais avoir trop de recettes de plats principaux, alors essayez le poulet grillé au sésame. Pour 2,61 $ par portion, cette recette couvre 13 % de vos besoins quotidiens en vitamines et minéraux. Vous surveillez votre silhouette ? Cette recette sans gluten et sans produits laitiers contient 751 calories, 23 g de protéines et 39 g de matières grasses par portion. Cette recette sert 1 personne. 1 personne a fait cette recette et la referait. De la préparation à l'assiette, cette recette prend environ 45 minutes. Un mélange de sauce soja, de miel, d'huile de sésame et une poignée d'autres ingrédients suffisent pour rendre cette recette si délicieuse. Il peut être dégusté à tout moment, mais il est particulièrement bon pour le 4 juillet. Il vous est présenté par Foodista. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 70 %. Ce score est solide. Si vous aimez cette recette, jetez un œil à ces recettes similaires : Poulet grillé au sésame, Poulet grillé au sésame et au gingembre et Nouilles au sésame et au poulet grillé.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "half a spring chicken",
          "nl": "een halve lentekip",
          "fr": "un demi poulet printanier"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "honey",
          "nl": "Honing",
          "fr": "Miel"
        },
        "amount": 31,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "honey",
          "nl": "Honing",
          "fr": "Miel"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt & pepper",
          "nl": "zout en peper",
          "fr": "sel et poivre"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "sesame oil",
          "nl": "sesamolie",
          "fr": "huile de sésame"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "sesame oil",
          "nl": "sesamolie",
          "fr": "huile de sésame"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "sesame seeds",
          "nl": "sesamzaadjes",
          "fr": "graines de sésame"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-655793",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/655793-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Peruvian Roast Chicken",
        "subtitle": "Spoonacular Import",
        "description": "If you have about 45 minutes to spend in the kitchen, Peruvian Roast Chicken might be an outstanding gluten free, dairy free, and ketogenic recipe to try. This main course has 472 calories, 32g of protein, and 36g of fat per serving. This recipe serves 4 and costs $1.7 per serving. This recipe from Foodista requires olive oil, garlic cloves, juice of lemon, and red wine vinegar. 2 people were impressed by this recipe. All things considered, we decided this recipe deserves a spoonacular score of 54%. This score is solid. If you like this recipe, take a look at these similar recipes: Peruvian Roast Chicken, Peruvian Roast Chicken, and Peruvian Roast Chicken.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Peruaanse gebraden kip",
        "subtitle": "Spoonacular-import",
        "description": "Als je ongeveer 45 minuten de tijd hebt om in de keuken door te brengen, is Peruaanse gebraden kip misschien een uitstekend glutenvrij, zuivelvrij en ketogeen recept om te proberen. Dit hoofdgerecht bevat 472 calorieën, 32 g eiwit en 36 g vet per portie. Dit recept is voor 4 personen en kost $ 1,7 per portie. Voor dit recept van Foodista heb je olijfolie, knoflookteentjes, citroensap en rode wijnazijn nodig. 2 mensen waren onder de indruk van dit recept. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 54% verdient. Deze score is solide. Als je dit recept lekker vindt, kijk dan eens naar deze vergelijkbare recepten: Peruaanse gebraden kip, Peruaanse gebraden kip en Peruaanse gebraden kip.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet rôti péruvien",
        "subtitle": "Import Spoonacular",
        "description": "Si vous avez environ 45 minutes à consacrer à la cuisine, le poulet rôti péruvien pourrait être une recette exceptionnelle sans gluten, sans produits laitiers et cétogène à essayer. Ce plat principal contient 472 calories, 32 g de protéines et 36 g de matières grasses par portion. Cette recette sert 4 personnes et coûte 1,7 $ par portion. Cette recette de Foodista nécessite de l'huile d'olive, des gousses d'ail, du jus de citron et du vinaigre de vin rouge. 2 personnes ont été impressionnées par cette recette. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 54 %. Ce score est solide. Si vous aimez cette recette, jetez un œil à ces recettes similaires : Poulet rôti péruvien, Poulet rôti péruvien et Poulet rôti péruvien.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 1361,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "garlic cloves",
          "nl": "knoflookteentjes",
          "fr": "gousses d'ail"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "juice of lemon",
          "nl": "sap van citroen",
          "fr": "jus de citron"
        },
        "amount": 0.5,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "red wine vinegar",
          "nl": "rode wijnazijn",
          "fr": "vinaigre de vin rouge"
        },
        "amount": 3,
        "unit": "el",
        "category": "Bieren & Dranken"
      },
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 3,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "paprika",
          "nl": "paprika",
          "fr": "paprika"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cumin",
          "nl": "komijn",
          "fr": "cumin"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "turmeric",
          "nl": "kurkuma",
          "fr": "curcuma"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "pepper",
          "nl": "peper",
          "fr": "poivre"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "kitchen twine",
          "nl": "keukentouw",
          "fr": "ficelle de cuisine"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Bieren & Dranken"
      },
      {
        "name": {
          "en": "kitchen twine",
          "nl": "keukentouw",
          "fr": "ficelle de cuisine"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Bieren & Dranken"
      }
    ]
  },
  {
    "id": "spoonacular-653973",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 6,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/653973-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Orange Teriyaki Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Forget going out to eat or ordering takeout every time you crave Japanese food. Try making Orange Teriyaki Chicken at home. This recipe serves 6. For $2.29 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free and dairy free recipe has 441 calories, 46g of protein, and 12g of fat per serving. 1 person were glad they tried this recipe. If you have sesame oil, cornstarch, pepper, and a few other ingredients on hand, you can make it. It works well as a main course. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 49%. This score is good. Users who liked this recipe also liked Orange Teriyaki Chicken Drumettes, Grilled Orange Teriyaki Chicken, and Grilled Orange Teriyaki Chicken.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Oranje Teriyaki Kip",
        "subtitle": "Spoonacular-import",
        "description": "Vergeet uit eten te gaan of afhaalmaaltijden te bestellen elke keer dat je zin hebt in Japans eten. Probeer thuis Orange Teriyaki Chicken te maken. Dit recept is voor 6 personen. Voor $ 2,29 per portie dekt dit recept 23% van uw dagelijkse behoefte aan vitamines en mineralen. Op je figuur letten? Dit glutenvrije en zuivelvrije recept bevat 441 calorieën, 46 g eiwit en 12 g vet per portie. 1 persoon was blij dat ze dit recept probeerden. Als je sesamolie, maizena, peper en een paar andere ingrediënten bij de hand hebt, kun je het maken. Het werkt goed als hoofdgerecht. Het wordt u aangeboden door Foodista. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 49% verdient. Dit cijfer is goed. Gebruikers die dit recept lekker vonden, hielden ook van Orange Teriyaki Chicken Drumettes, Grilled Orange Teriyaki Chicken en Grilled Orange Teriyaki Chicken.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Teriyaki à l'Orange",
        "subtitle": "Import Spoonacular",
        "description": "Oubliez d'aller manger au restaurant ou de commander des plats à emporter chaque fois que vous avez envie de cuisine japonaise. Essayez de préparer du poulet teriyaki à l'orange à la maison. Cette recette en sert 6. Pour 2,29 $ par portion, cette recette couvre 23 % de vos besoins quotidiens en vitamines et minéraux. Vous surveillez votre silhouette ? Cette recette sans gluten et sans produits laitiers contient 441 calories, 46 g de protéines et 12 g de matières grasses par portion. 1 personne était heureuse d'avoir essayé cette recette. Si vous avez de l’huile de sésame, de la fécule de maïs, du poivre et quelques autres ingrédients sous la main, vous pouvez le préparer. Cela fonctionne bien comme plat principal. Il vous est présenté par Foodista. De la préparation à l'assiette, cette recette prend environ 45 minutes. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 49 %. Ce score est bon. Les utilisateurs qui ont aimé cette recette ont également aimé les pilons de poulet teriyaki à l'orange, le poulet teriyaki à l'orange grillé et le poulet teriyaki à l'orange grillé.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken thighs",
          "nl": "kippendijen",
          "fr": "cuisses de poulet"
        },
        "amount": 12,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "kosher salt",
          "nl": "koosjer zout",
          "fr": "sel casher"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "pepper",
          "nl": "peper",
          "fr": "poivre"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic",
          "nl": "knoflook",
          "fr": "ail"
        },
        "amount": 3,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "grapeseed oil",
          "nl": "druivenpitolie",
          "fr": "huile de pépins de raisin"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "sesame oil",
          "nl": "sesamolie",
          "fr": "huile de sésame"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ginger",
          "nl": "gember",
          "fr": "gingembre"
        },
        "amount": 0.5,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 16,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "brown sugar",
          "nl": "bruine suiker",
          "fr": "cassonade"
        },
        "amount": 63,
        "unit": "g",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 63,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "honey",
          "nl": "Honing",
          "fr": "Miel"
        },
        "amount": 31,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "apple cider vinegar",
          "nl": "appelazijn",
          "fr": "vinaigre de cidre de pomme"
        },
        "amount": 1,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "juice of orange",
          "nl": "sap van sinaasappel",
          "fr": "jus d'orange"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "sriracha",
          "nl": "sriracha",
          "fr": "Sriracha"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cornstarch",
          "nl": "maïszetmeel",
          "fr": "maïzena"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "water",
          "nl": "water",
          "fr": "eau"
        },
        "amount": 2,
        "unit": "el",
        "category": "Bieren & Dranken"
      }
    ]
  },
  {
    "id": "spoonacular-635263",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/635263-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Blackened Cajun Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Forget going out to eat or ordering takeout every time you crave Cajun food. Try making Blackened Cajun Chicken at home. This gluten free and dairy free recipe serves 4 and costs $1.64 per serving. One serving contains 444 calories, 37g of protein, and 30g of fat. 5 people found this recipe to be scrumptious and satisfying. This recipe from Foodista requires thyme, rosemary, chicken, and salt. It works well as a main course. From preparation to the plate, this recipe takes roughly 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 52%, which is solid. Similar recipes are Blackened Chicken Breasts With Cajun Corn Relish (Ww), Cajun Blackened Tilapia, and Cajun Blackened Salmon.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Zwartgeblakerde Cajun-kip",
        "subtitle": "Spoonacular-import",
        "description": "Vergeet uit eten te gaan of afhaalmaaltijden te bestellen elke keer dat u hunkert naar Cajun-eten. Probeer thuis zwartgeblakerde Cajun-kip te maken. Dit glutenvrije en zuivelvrije recept is geschikt voor 4 personen en kost $ 1,64 per portie. Eén portie bevat 444 calorieën, 37 g eiwit en 30 g vet. 5 mensen vonden dit recept heerlijk en bevredigend. Voor dit recept van Foodista zijn tijm, rozemarijn, kip en zout nodig. Het werkt goed als hoofdgerecht. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Als we alle factoren in aanmerking nemen, krijgt dit recept een lepelscore van 52%, wat solide is. Soortgelijke recepten zijn zwartgeblakerde kippenborsten met Cajun-maïssaus (Ww), Cajun zwartgeblakerde tilapia en Cajun zwartgeblakerde zalm.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet cajun noirci",
        "subtitle": "Import Spoonacular",
        "description": "Oubliez d'aller manger au restaurant ou de commander des plats à emporter chaque fois que vous avez envie de nourriture cajun. Essayez de préparer du poulet cajun noirci à la maison. Cette recette sans gluten et sans produits laitiers sert 4 personnes et coûte 1,64 $ par portion. Une portion contient 444 calories, 37 g de protéines et 30 g de matières grasses. 5 personnes ont trouvé cette recette délicieuse et satisfaisante. Cette recette de Foodista nécessite du thym, du romarin, du poulet et du sel. Cela fonctionne bien comme plat principal. De la préparation à l'assiette, cette recette prend environ 45 minutes. En tenant compte de tous les facteurs, cette recette obtient un score cuillère de 52 %, ce qui est solide. Des recettes similaires sont les poitrines de poulet noircies avec relish de maïs cajun (Ww), le tilapia noirci cajun et le saumon noirci cajun.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "bay leaves",
          "nl": "laurierblaadjes",
          "fr": "feuilles de laurier"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "pepper",
          "nl": "peper",
          "fr": "poivre"
        },
        "amount": 0.8,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "brown sugar",
          "nl": "bruine suiker",
          "fr": "cassonade"
        },
        "amount": 1,
        "unit": "el",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "cayenne pepper",
          "nl": "cayennepeper",
          "fr": "poivre de Cayenne"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "rosemary",
          "nl": "rozemarijn",
          "fr": "romarin"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "thyme",
          "nl": "tijm",
          "fr": "thym"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "mustard",
          "nl": "mosterd",
          "fr": "moutarde"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic powder",
          "nl": "knoflook poeder",
          "fr": "poudre d'ail"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "ground cumin",
          "nl": "gemalen komijn",
          "fr": "cumin moulu"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "onion powder",
          "nl": "uienpoeder",
          "fr": "poudre d'oignon"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "paprika",
          "nl": "paprika",
          "fr": "paprika"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 2.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 3.5,
        "unit": "lbs",
        "category": "Slagerij & Gevogelte"
      }
    ]
  },
  {
    "id": "spoonacular-647867",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 3,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/647867-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Indian Tandoori Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Indian Tandoori Chicken is a gluten free recipe with 3 servings. One serving contains 257 calories, 28g of protein, and 14g of fat. For $1.44 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. This recipe from Foodista has 1 fans. This recipe is typical of Indian cuisine. It works best as a main course, and is done in about 45 minutes. Head to the store and pick up garlic paste, oil, ground cumin powder, and a few other things to make it today. Taking all factors into account, this recipe earns a spoonacular score of 17%, which is not so outstanding. Similar recipes are Indian Tandoori BBQ Chicken, Tandoori Cauliflower with Indian-Spiced Quinoa, and Tandoori Chicken.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Indiase Tandoori-kip",
        "subtitle": "Spoonacular-import",
        "description": "Indiase Tandoori Kip is een glutenvrij recept met 3 porties. Eén portie bevat 257 calorieën, 28 g eiwit en 14 g vet. Voor $ 1,44 per portie dekt dit recept 15% van uw dagelijkse behoefte aan vitamines en mineralen. Dit recept van Foodista heeft 1 fan. Dit recept is typisch voor de Indiase keuken. Het werkt het beste als hoofdgerecht en is in ongeveer 45 minuten klaar. Ga naar de winkel en koop knoflookpasta, olie, gemalen komijnpoeder en nog een paar andere dingen om het vandaag te maken. Als we alle factoren in aanmerking nemen, krijgt dit recept een lepelscore van 17%, wat niet zo uitstekend is. Soortgelijke recepten zijn Indiase Tandoori BBQ-kip, Tandoori-bloemkool met Indiaas gekruide quinoa en Tandoori-kip.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Tandoori Indien",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet tandoori indien est une recette sans gluten de 3 portions. Une portion contient 257 calories, 28 g de protéines et 14 g de matières grasses. Pour 1,44 $ par portion, cette recette couvre 15 % de vos besoins quotidiens en vitamines et minéraux. Cette recette de Foodista a 1 fans. Cette recette est typique de la cuisine indienne. Cela fonctionne mieux comme plat principal et se prépare en 45 minutes environ. Rendez-vous au magasin et récupérez de la pâte d'ail, de l'huile, de la poudre de cumin moulu et quelques autres éléments pour le préparer aujourd'hui. En tenant compte de tous les facteurs, cette recette obtient un score cuillère de 17 %, ce qui n'est pas si exceptionnel. Des recettes similaires sont le poulet barbecue tandoori indien, le chou-fleur tandoori avec quinoa aux épices indiennes et le poulet tandoori.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken drumsticks [bone in works best]",
          "nl": "kippendrumsticks [met bot werkt het beste]",
          "fr": "pilons de poulet [l'os fonctionne mieux]"
        },
        "amount": 680,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "canola oil",
          "nl": "canola-olie",
          "fr": "huile de canola"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "yogurt",
          "nl": "yoghurt",
          "fr": "yaourt"
        },
        "amount": 94,
        "unit": "g",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "lemon juice [preferably freshly squeezed]",
          "nl": "citroensap [bij voorkeur vers geperst]",
          "fr": "jus de citron [de préférence fraîchement pressé]"
        },
        "amount": 1,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "chili powder [or cayenne powder]",
          "nl": "chilipoeder [of cayennepeper]",
          "fr": "poudre de chili [ou poudre de Cayenne]"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "oil",
          "nl": "olie",
          "fr": "huile"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "coriander powder",
          "nl": "koriander poeder",
          "fr": "poudre de coriandre"
        },
        "amount": 1.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic paste",
          "nl": "knoflookpasta",
          "fr": "pâte d'ail"
        },
        "amount": 1.5,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "ginger paste",
          "nl": "gemberpasta",
          "fr": "pâte de gingembre"
        },
        "amount": 1.5,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "turmeric powder",
          "nl": "kurkuma poeder",
          "fr": "poudre de curcuma"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "fenugreek leaves [kasuri methi",
          "nl": "fenegriekbladeren [kasuri methi",
          "fr": "feuilles de fenugrec [kasuri methi"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ground cumin powder",
          "nl": "gemalen komijnpoeder",
          "fr": "poudre de cumin moulu"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ground cinnamon",
          "nl": "gemalen kaneel",
          "fr": "cannelle moulue"
        },
        "amount": 0.3,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 3,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "orange food color [optional]",
          "nl": "oranje voedselkleurstof [optioneel]",
          "fr": "colorant alimentaire orange [facultatif]"
        },
        "amount": 3,
        "unit": "drops",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "spoonacular-716342",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 1,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/716342-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Chicken Suya",
        "subtitle": "Spoonacular Import",
        "description": "The recipe Chicken Suya can be made in roughly 45 minutes. This recipe serves 1 and costs $1.67 per serving. One serving contains 564 calories, 44g of protein, and 35g of fat. This recipe from Afrolems requires suya spice, chicken, chilli powder, and seasoning cubes. It works well as a main course. 56 people have made this recipe and would make it again. It is a good option if you're following a gluten free, dairy free, whole 30, and ketogenic diet. Overall, this recipe earns a solid spoonacular score of 79%. If you like this recipe, you might also like recipes such as Suya (Nigerian Chicken Skewers), Suya Swordfish, and I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kip Suya",
        "subtitle": "Spoonacular-import",
        "description": "Het recept Kip Suya maak je in ongeveer 45 minuten. Dit recept serveert 1 persoon en kost $ 1,67 per portie. Eén portie bevat 564 calorieën, 44 g eiwit en 35 g vet. Voor dit recept van Afrolems zijn suyakruiden, kip, chilipoeder en kruidenblokjes nodig. Het werkt goed als hoofdgerecht. 56 mensen hebben dit recept gemaakt en zouden het opnieuw maken. Het is een goede optie als je een glutenvrij, zuivelvrij, heel 30- en ketogeen dieet volgt. Over het geheel genomen verdient dit recept een solide lepelscore van 79%. Als je dit recept lekker vindt, vind je misschien ook recepten leuk zoals Suya (Nigeriaanse kipspiesjes), Suya Swordfish en I Ain't Chicken Chicken: knapperige geroosterde kippenborsten met sinaasappel en kardemom.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Suya",
        "subtitle": "Import Spoonacular",
        "description": "La recette Poulet Suya peut être préparée en 45 minutes environ. Cette recette sert 1 personne et coûte 1,67 $ par portion. Une portion contient 564 calories, 44 g de protéines et 35 g de matières grasses. Cette recette d'Afrolems nécessite des épices suya, du poulet, de la poudre de piment et des cubes d'assaisonnement. Cela fonctionne bien comme plat principal. 56 personnes ont réalisé cette recette et la referaient. C'est une bonne option si vous suivez un régime sans gluten, sans produits laitiers, entier 30 et cétogène. Dans l’ensemble, cette recette obtient un solide score cuillère de 79 %. Si vous aimez cette recette, vous aimerez peut-être aussi des recettes telles que Suya (brochettes de poulet nigérianes), Suya Swordfish et I Ain't Chicken Chicken : poitrines de poulet rôties croustillantes à l'orange et à la cardamome.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "suya spice",
          "nl": "suya-kruiden",
          "fr": "épice suya"
        },
        "amount": 1.5,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 454,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "chilli powder",
          "nl": "chili poeder",
          "fr": "poudre de piment"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cooking spoon groundnut oil",
          "nl": "kooklepel arachideolie",
          "fr": "cuillère à soupe d'huile d'arachide"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "seasoning cubes",
          "nl": "kruidenblokjes",
          "fr": "cubes d'assaisonnement"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "onions and tomatoes",
          "nl": "uien en tomaten",
          "fr": "oignons et tomates"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-638125",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/638125-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Chicken In A Pot",
        "subtitle": "Spoonacular Import",
        "description": "Chicken In A Pot might be just the main course you are searching for. Watching your figure? This gluten free, dairy free, paleolithic, and primal recipe has 595 calories, 47g of protein, and 41g of fat per serving. This recipe serves 4. For $2.09 per serving, this recipe covers 22% of your daily requirements of vitamins and minerals. This recipe is liked by 1 foodies and cooks. Head to the store and pick up chicken, lemon juice, ground pepper, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 45 minutes. It is brought to you by Foodista. With a spoonacular score of 51%, this dish is good. Try Healthy Chicken Pot Pie Soup in the crock pot (whole 30, dairy free), One Pot Teriyaki Rice with Chicken & Vegetables + Video (+Instant Pot), and One Pot Teriyaki Rice with Chicken & Vegetables + Video (+Instant Pot) for similar recipes.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kip In Een Pot",
        "subtitle": "Spoonacular-import",
        "description": "Chicken In A Pot is misschien wel het hoofdgerecht waar u naar op zoek bent. Op je figuur letten? Dit glutenvrije, zuivelvrije, paleolithische en oerrecept bevat 595 calorieën, 47 g eiwit en 41 g vet per portie. Dit recept is voor 4 personen. Voor $ 2,09 per portie dekt dit recept 22% van uw dagelijkse behoefte aan vitamines en mineralen. Dit recept is geliefd bij 1 foodies en koks. Ga naar de winkel en koop kip, citroensap, gemalen peper en nog een paar andere dingen om het vandaag te maken. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Het wordt u aangeboden door Foodista. Met een lepelscore van 51% is dit gerecht goed. Probeer Gezonde Kippasteisoep in de crockpot (hele 30, zuivelvrij), Eén Pot Teriyaki Rijst met Kip & Groenten + Video (+Instant Pot), en Eén Pot Teriyaki Rijst met Kip & Groenten + Video (+Instant Pot) voor soortgelijke recepten.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet dans une casserole",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet en pot pourrait bien être le plat principal que vous recherchez. Vous surveillez votre silhouette ? Cette recette sans gluten, sans produits laitiers, paléolithique et primale contient 595 calories, 47 g de protéines et 41 g de matières grasses par portion. Cette recette en sert 4. Pour 2,09 $ par portion, cette recette couvre 22 % de vos besoins quotidiens en vitamines et minéraux. Cette recette est appréciée des 1 gourmets et des cuisiniers. Rendez-vous au magasin et procurez-vous du poulet, du jus de citron, du poivre moulu et quelques autres choses pour le préparer aujourd'hui. De la préparation à l'assiette, cette recette prend environ 45 minutes. Il vous est présenté par Foodista. Avec un score cuillère de 51%, ce plat est bon. Essayez la soupe saine au pâté au poulet dans la mijoteuse (30 entières, sans produits laitiers), le riz teriyaki One Pot avec poulet et légumes + vidéo (+ pot instantané) et le riz teriyaki One Pot avec poulet et légumes + vidéo (+ pot instantané) pour des recettes similaires.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken",
          "nl": "kip",
          "fr": "poulet"
        },
        "amount": 2041,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "kosher salt",
          "nl": "koosjer zout",
          "fr": "sel casher"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ground pepper",
          "nl": "gemalen peper",
          "fr": "poivre moulu"
        },
        "amount": 0.3,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 188,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "celery",
          "nl": "selderij",
          "fr": "céleri"
        },
        "amount": 156,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "garlic cloves",
          "nl": "knoflookteentjes",
          "fr": "gousses d'ail"
        },
        "amount": 6,
        "unit": "medium",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "bay leaves",
          "nl": "laurierblaadjes",
          "fr": "feuilles de laurier"
        },
        "amount": 5,
        "unit": "small",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "thyme",
          "nl": "tijm",
          "fr": "thym"
        },
        "amount": 4,
        "unit": "sprigs",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "lemon juice",
          "nl": "citroensap",
          "fr": "jus de citron"
        },
        "amount": 0.5,
        "unit": "st.",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "spoonacular-638257",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/638257-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Chicken Porridge",
        "subtitle": "Spoonacular Import",
        "description": "Chicken Porridge is a gluten free and dairy free recipe with 4 servings. This breakfast has 393 calories, 28g of protein, and 7g of fat per serving. For $2.2 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. This recipe from Foodista has 19 fans. If you have parsley, spring onion, julienne young ginger, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 84%. This score is tremendous. Chicken Porridge, Chicken and Leek Porridge, and Chicken Congee (Rice Porridge) are very similar to this recipe.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kippenpap",
        "subtitle": "Spoonacular-import",
        "description": "Kippenpap is een glutenvrij en zuivelvrij recept met 4 porties. Dit ontbijt bevat 393 calorieën, 28 g eiwit en 7 g vet per portie. Voor $ 2,2 per portie dekt dit recept 25% van uw dagelijkse behoefte aan vitamines en mineralen. Dit recept van Foodista heeft 19 fans. Als je peterselie, lente-ui, julienne jonge gember en nog wat andere ingrediënten bij de hand hebt, kun je het maken. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 84% verdient. Deze score is enorm. Kippap, Kip- en Prei-pap en Kipcongee (Rijstepap) lijken erg op dit recept.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Bouillie De Poulet",
        "subtitle": "Import Spoonacular",
        "description": "Le porridge au poulet est une recette sans gluten et sans produits laitiers contenant 4 portions. Ce petit-déjeuner contient 393 calories, 28 g de protéines et 7 g de matières grasses par portion. Pour 2,2 $ par portion, cette recette couvre 25 % de vos besoins quotidiens en vitamines et minéraux. Cette recette de Foodista compte 19 fans. Si vous avez du persil, de la ciboule, de la julienne de jeune gingembre et quelques autres ingrédients sous la main, vous pouvez le préparer. De la préparation à l'assiette, cette recette prend environ 45 minutes. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 84 %. Ce score est formidable. La bouillie de poulet, la bouillie de poulet et de poireaux et la bouillie de poulet (bouillie de riz) sont très similaires à cette recette.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "carrot",
          "nl": "wortel",
          "fr": "carotte"
        },
        "amount": 63,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "chicken breast",
          "nl": "kipfilet",
          "fr": "blanc de poulet"
        },
        "amount": 300,
        "unit": "grams",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "chicken stock",
          "nl": "kippenbouillon",
          "fr": "bouillon de poulet"
        },
        "amount": 625,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "julienne young ginger",
          "nl": "julienne jonge gember",
          "fr": "julienne jeune gingembre"
        },
        "amount": 0.3,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "ground pepper",
          "nl": "gemalen peper",
          "fr": "poivre moulu"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "parsley",
          "nl": "peterselie",
          "fr": "persil"
        },
        "amount": 42,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "rice",
          "nl": "rijst",
          "fr": "riz"
        },
        "amount": 125,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "shallots",
          "nl": "sjalotten",
          "fr": "échalotes"
        },
        "amount": 3,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "spring onion",
          "nl": "lente-ui",
          "fr": "oignon nouveau"
        },
        "amount": 42,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "vegetable oil",
          "nl": "plantaardige olie",
          "fr": "huile végétale"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "spoonacular-638086",
    "prepTime": "30 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 2,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/638086-312x231.jpg",
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
        "title": "Chicken Fingers",
        "subtitle": "Spoonacular Import",
        "description": "Chicken Fingers might be just the main course you are searching for. One serving contains 347 calories, 52g of protein, and 6g of fat. This recipe serves 2. For $2.3 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes approximately 30 minutes. Only a few people made this recipe, and 1 would say it hit the spot. A mixture of cayenne pepper, water, cornflakes, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is brought to you by Foodista. With a spoonacular score of 77%, this dish is solid. If you like this recipe, take a look at these similar recipes: Chicken Fingers, Chicken Fingers, and Chicken Fingers.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kippenvingers",
        "subtitle": "Spoonacular-import",
        "description": "Chicken Fingers is misschien wel het hoofdgerecht waar u naar op zoek bent. Eén portie bevat 347 calorieën, 52 g eiwit en 6 g vet. Dit recept is voor 2 personen. Voor $ 2,3 per portie dekt dit recept 30% van uw dagelijkse behoefte aan vitamines en mineralen. Van bereiding tot op het bord duurt dit recept ongeveer 30 minuten. Slechts een paar mensen hebben dit recept gemaakt, en ik zou zeggen dat het een schot in de roos was. Een mengsel van cayennepeper, water, cornflakes en een handvol andere ingrediënten is voldoende om dit recept zo heerlijk te maken. Het wordt u aangeboden door Foodista. Met een lepelscore van 77% is dit gerecht stevig. Als je dit recept lekker vindt, kijk dan eens naar deze vergelijkbare recepten: Chicken Fingers, Chicken Fingers en Chicken Fingers.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Doigts de poulet",
        "subtitle": "Import Spoonacular",
        "description": "Les doigts de poulet pourraient bien être le plat principal que vous recherchez. Une portion contient 347 calories, 52 g de protéines et 6 g de matières grasses. Cette recette en sert 2. Pour 2,3 $ par portion, cette recette couvre 30 % de vos besoins quotidiens en vitamines et minéraux. De la préparation à l'assiette, cette recette prend environ 30 minutes. Seules quelques personnes ont fait cette recette, et je dirais qu’elle a fait mouche. Un mélange de poivre de Cayenne, d'eau, de cornflakes et une poignée d'autres ingrédients suffisent pour rendre cette recette si délicieuse. Il vous est présenté par Foodista. Avec un score cuillère de 77%, ce plat est solide. Si vous aimez cette recette, jetez un œil à ces recettes similaires : Doigts de poulet, Doigts de poulet et Doigts de poulet.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "cayenne pepper",
          "nl": "cayennepeper",
          "fr": "poivre de Cayenne"
        },
        "amount": 1,
        "unit": "dash",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken breasts",
          "nl": "kippenborsten",
          "fr": "poitrines de poulet"
        },
        "amount": 454,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "cornflakes",
          "nl": "cornflakes",
          "fr": "corn flakes"
        },
        "amount": 188,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "egg white",
          "nl": "eiwit",
          "fr": "blanc d'oeuf"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "seasoning",
          "nl": "kruiden",
          "fr": "assaisonnement"
        },
        "amount": 0.3,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "paprika",
          "nl": "paprika",
          "fr": "paprika"
        },
        "amount": 0.3,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "parmesan cheese",
          "nl": "Parmezaanse kaas",
          "fr": "fromage parmesan"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "water",
          "nl": "water",
          "fr": "eau"
        },
        "amount": 1,
        "unit": "el",
        "category": "Bieren & Dranken"
      }
    ]
  },
  {
    "id": "spoonacular-637999",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/637999-312x231.jpg",
    "isGlutenFree": false,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Chicken Burritos",
        "subtitle": "Spoonacular Import",
        "description": "If you have approximately 45 minutes to spend in the kitchen, Chicken Burritos might be a tremendous dairy free recipe to try. This main course has 713 calories, 32g of protein, and 50g of fat per serving. For $2.77 per serving, this recipe covers 35% of your daily requirements of vitamins and minerals. This recipe serves 4. 2 people were glad they tried this recipe. If you have avocadoes, onion, cilantro, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. This recipe is typical of Mexican cuisine. With a spoonacular score of 77%, this dish is solid. Try Chicken Burritos, Chicken Burritos, and Chicken Burritos for similar recipes.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kip Burrito's",
        "subtitle": "Spoonacular-import",
        "description": "Als je ongeveer 45 minuten de tijd hebt om in de keuken te staan, is Kipburrito’s wellicht een geweldig zuivelvrij recept om te proberen. Dit hoofdgerecht bevat 713 calorieën, 32 g eiwit en 50 g vet per portie. Voor $ 2,77 per portie dekt dit recept 35% van uw dagelijkse behoefte aan vitamines en mineralen. Dit recept is voor 4 personen. 2 mensen waren blij dat ze dit recept hebben geprobeerd. Als je avocado's, ui, koriander en een paar andere ingrediënten bij de hand hebt, kun je het maken. Het wordt u aangeboden door Foodista. Dit recept is typisch voor de Mexicaanse keuken. Met een lepelscore van 77% is dit gerecht stevig. Probeer Kipburrito's, Kipburrito's en Kipburrito's voor vergelijkbare recepten.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Burritos au poulet",
        "subtitle": "Import Spoonacular",
        "description": "Si vous avez environ 45 minutes à consacrer à la cuisine, les burritos au poulet pourraient être une excellente recette sans produits laitiers à essayer. Ce plat principal contient 713 calories, 32 g de protéines et 50 g de matières grasses par portion. Pour 2,77 $ par portion, cette recette couvre 35 % de vos besoins quotidiens en vitamines et minéraux. Cette recette en sert 4. 2 personnes étaient heureuses d'avoir essayé cette recette. Si vous avez des avocats, de l’oignon, de la coriandre et quelques autres ingrédients sous la main, vous pouvez le préparer. Il vous est présenté par Foodista. Cette recette est typique de la cuisine mexicaine. Avec un score cuillère de 77%, ce plat est solide. Essayez les burritos au poulet, les burritos au poulet et les burritos au poulet pour des recettes similaires.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "avocadoes",
          "nl": "avocado's",
          "fr": "avocats"
        },
        "amount": 3,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken thigh meat",
          "nl": "kippendijvlees",
          "fr": "viande de cuisse de poulet"
        },
        "amount": 600,
        "unit": "grams",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "cilantro",
          "nl": "koriander",
          "fr": "coriandre"
        },
        "amount": 1,
        "unit": "bunch",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "flour tortillas",
          "nl": "bloemtortilla's",
          "fr": "tortillas à la farine"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "juice from lemon",
          "nl": "sap van citroen",
          "fr": "jus de citron"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 1,
        "unit": "large",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "pepper",
          "nl": "peper",
          "fr": "poivre"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "tomatoes",
          "nl": "tomaten",
          "fr": "tomates"
        },
        "amount": 4,
        "unit": "large",
        "category": "Groenten & Fruit"
      }
    ]
  },
  {
    "id": "spoonacular-637876",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 6,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/637876-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Chicken 65",
        "subtitle": "Spoonacular Import",
        "description": "Chicken 65 could be just the gluten free recipe you've been looking for. This hor d'oeuvre has 121 calories, 19g of protein, and 3g of fat per serving. For $1.15 per serving, this recipe covers 11% of your daily requirements of vitamins and minerals. This recipe serves 6. Head to the store and pick up salt, chili powder, yogurt, and a few other things to make it today. 6 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately 45 minutes. Overall, this recipe earns a not so spectacular spoonacular score of 39%. Similar recipes are I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom, I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom, and I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kip 65",
        "subtitle": "Spoonacular-import",
        "description": "Kip 65 zou wel eens precies het glutenvrije recept kunnen zijn waar u naar op zoek was. Dit hor d'oeuvre bevat 121 calorieën, 19 g eiwit en 3 g vet per portie. Voor $ 1,15 per portie dekt dit recept 11% van uw dagelijkse behoefte aan vitamines en mineralen. Dit recept is voor 6 personen. Ga naar de winkel en koop zout, chilipoeder, yoghurt en nog een paar andere dingen om het vandaag te maken. 6 mensen hebben dit recept gemaakt en zouden het nog een keer maken. Het wordt u aangeboden door Foodista. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Over het geheel genomen verdient dit recept een niet zo spectaculaire lepelscore van 39%. Soortgelijke recepten zijn I Ain't Chicken Chicken: knapperige geroosterde kippenborsten met sinaasappel en kardemom, I Ain't Chicken Chicken: knapperige geroosterde kippenborsten met sinaasappel en kardemom, en I Ain't Chicken Chicken: knapperige geroosterde kippenborsten met sinaasappel en kardemom.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet 65",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet 65 pourrait être la recette sans gluten que vous recherchiez. Ce hors-d'œuvre contient 121 calories, 19 g de protéines et 3 g de matières grasses par portion. Pour 1,15 $ par portion, cette recette couvre 11 % de vos besoins quotidiens en vitamines et minéraux. Cette recette en sert 6. Rendez-vous au magasin et procurez-vous du sel, de la poudre de chili, du yaourt et quelques autres éléments pour la préparer aujourd'hui. 6 personnes ont réalisé cette recette et la referaient. Il vous est présenté par Foodista. De la préparation à l'assiette, cette recette prend environ 45 minutes. Dans l'ensemble, cette recette obtient un score cuillère pas si spectaculaire de 39 %. Des recettes similaires sont I Ain't Chicken Chicken : poitrines de poulet rôties croustillantes à l'orange et à la cardamome, I Ain't Chicken Chicken : poitrines de poulet rôties croustillantes à l'orange et à la cardamome, et I Ain't Chicken Chicken : poitrines de poulet rôties croustillantes à l'orange et à la cardamome.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken breast",
          "nl": "kipfilet",
          "fr": "blanc de poulet"
        },
        "amount": 500,
        "unit": "grams",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "chili powder",
          "nl": "chili poeder",
          "fr": "poudre de chili"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ginger and garlic paste",
          "nl": "gember- en knoflookpasta",
          "fr": "pâte de gingembre et d'ail"
        },
        "amount": 4,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 0.5,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "turmeric powder",
          "nl": "kurkuma poeder",
          "fr": "poudre de curcuma"
        },
        "amount": 0.3,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "yogurt",
          "nl": "yoghurt",
          "fr": "yaourt"
        },
        "amount": 4,
        "unit": "el",
        "category": "Zuivel & Eieren"
      }
    ]
  },
  {
    "id": "spoonacular-638002",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 6,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/638002-312x231.jpg",
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
        "title": "Chicken Cacciatore",
        "subtitle": "Spoonacular Import",
        "description": "Chicken Cacciatore is a Mediterranean recipe that serves 6. For $2.76 per serving, this recipe covers 35% of your daily requirements of vitamins and minerals. This main course has 584 calories, 48g of protein, and 31g of fat per serving. 1 person found this recipe to be delicious and satisfying. This recipe from Foodista requires chicken breasts, olive oil, garlic, and flour. From preparation to the plate, this recipe takes approximately 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 67%, which is good. Users who liked this recipe also liked Chicken Cacciatore, Chicken Cacciatore, and Chicken Cacciatore.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kip Cacciatore",
        "subtitle": "Spoonacular-import",
        "description": "Chicken Cacciatore is een mediterraan recept voor 6 personen. Voor $ 2,76 per portie dekt dit recept 35% van uw dagelijkse behoefte aan vitamines en mineralen. Dit hoofdgerecht bevat 584 calorieën, 48 g eiwit en 31 g vet per portie. 1 persoon vond dit recept heerlijk en bevredigend. Voor dit recept van Foodista heb je kipfilets, olijfolie, knoflook en bloem nodig. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Als we alle factoren in aanmerking nemen, krijgt dit recept een lepelscore van 67%, wat goed is. Gebruikers die dit recept lekker vonden, hielden ook van Chicken Cacciatore, Chicken Cacciatore en Chicken Cacciatore.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Cacciatore",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet Cacciatore est une recette méditerranéenne pour 6 personnes. Pour 2,76 $ par portion, cette recette couvre 35 % de vos besoins quotidiens en vitamines et minéraux. Ce plat principal contient 584 calories, 48 ​​g de protéines et 31 g de matières grasses par portion. 1 personne a trouvé cette recette délicieuse et satisfaisante. Cette recette de Foodista nécessite des poitrines de poulet, de l'huile d'olive, de l'ail et de la farine. De la préparation à l'assiette, cette recette prend environ 45 minutes. En tenant compte de tous les facteurs, cette recette obtient un score cuillère de 67 %, ce qui est bien. Les utilisateurs qui ont aimé cette recette ont aussi aimé Poulet Cacciatore, Poulet Cacciatore et Poulet Cacciatore.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
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
          "en": "chicken thighs",
          "nl": "kippendijen",
          "fr": "cuisses de poulet"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "pepper",
          "nl": "peper",
          "fr": "poivre"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "flour",
          "nl": "meel",
          "fr": "farine"
        },
        "amount": 63,
        "unit": "g",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 1,
        "unit": "large",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "bell pepper",
          "nl": "paprika",
          "fr": "poivron"
        },
        "amount": 1,
        "unit": "large",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic",
          "nl": "knoflook",
          "fr": "ail"
        },
        "amount": 6,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "mushrooms",
          "nl": "paddestoelen",
          "fr": "champignons"
        },
        "amount": 10,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "canned tomatoes",
          "nl": "ingeblikte tomaten",
          "fr": "tomates en conserve"
        },
        "amount": 794,
        "unit": "g",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "wine",
          "nl": "wijn",
          "fr": "vin"
        },
        "amount": 120,
        "unit": "ml",
        "category": "Bieren & Dranken"
      },
      {
        "name": {
          "en": "oregano",
          "nl": "oregano",
          "fr": "origan"
        },
        "amount": 1.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "parmesan cheese",
          "nl": "Parmezaanse kaas",
          "fr": "fromage parmesan"
        },
        "amount": 6,
        "unit": "servings",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "basil leaves",
          "nl": "basilicum blaadjes",
          "fr": "feuilles de basilic"
        },
        "amount": 31,
        "unit": "g",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-638308",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/638308-312x231.jpg",
    "isGlutenFree": false,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Chicken Satay",
        "subtitle": "Spoonacular Import",
        "description": "Chicken Satay could be just the dairy free recipe you've been looking for. One serving contains 834 calories, 31g of protein, and 73g of fat. This recipe serves 4 and costs $2.42 per serving. This recipe from Foodista has 1 fans. If you have turmeric powder, ground coriander, ready made satay sauce, and a few other ingredients on hand, you can make it. It works well as a rather inexpensive main course. From preparation to the plate, this recipe takes roughly 45 minutes. With a spoonacular score of 53%, this dish is good. Similar recipes are Chicken Satay, Chicken satay, and Chicken Satay.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kip saté",
        "subtitle": "Spoonacular-import",
        "description": "Kipsate is misschien wel het zuivelvrije recept waar u naar op zoek was. Eén portie bevat 834 calorieën, 31 g eiwit en 73 g vet. Dit recept is voor 4 personen en kost $ 2,42 per portie. Dit recept van Foodista heeft 1 fan. Als je kurkumapoeder, gemalen koriander, kant-en-klare satésaus en nog wat andere ingrediënten bij de hand hebt, kun je het maken. Het werkt goed als een vrij goedkoop hoofdgerecht. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Met een lepelscore van 53% is dit gerecht goed. Soortgelijke recepten zijn Kipsaté, Kipsaté en Kipsaté.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Satay",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet satay pourrait bien être la recette sans produits laitiers que vous recherchiez. Une portion contient 834 calories, 31 g de protéines et 73 g de matières grasses. Cette recette sert 4 personnes et coûte 2,42 $ par portion. Cette recette de Foodista a 1 fans. Si vous avez de la poudre de curcuma, de la coriandre moulue, de la sauce satay prête à l'emploi et quelques autres ingrédients sous la main, vous pouvez le préparer. Cela fonctionne bien comme plat principal plutôt bon marché. De la préparation à l'assiette, cette recette prend environ 45 minutes. Avec un score cuillère de 53%, ce plat est bon. Des recettes similaires sont le poulet satay, le poulet satay et le poulet satay.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken thigh meat",
          "nl": "kippendijvlees",
          "fr": "viande de cuisse de poulet"
        },
        "amount": 500,
        "unit": "grams",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "chilli powder",
          "nl": "chili poeder",
          "fr": "poudre de piment"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "coconut cream",
          "nl": "kokos crème",
          "fr": "crème de coco"
        },
        "amount": 180,
        "unit": "ml",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "coconut cream",
          "nl": "kokos crème",
          "fr": "crème de coco"
        },
        "amount": 6,
        "unit": "el",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "crunchy peanut butter",
          "nl": "knapperige pindakaas",
          "fr": "beurre de cacahuète croquant"
        },
        "amount": 1,
        "unit": "el",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "ground coriander",
          "nl": "gemalen koriander",
          "fr": "coriandre moulue"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ground cumin",
          "nl": "gemalen komijn",
          "fr": "cumin moulu"
        },
        "amount": 1.5,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ground peanuts",
          "nl": "gemalen pinda's",
          "fr": "cacahuètes moulues"
        },
        "amount": 63,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "ready made satay sauce",
          "nl": "kant en klare satésaus",
          "fr": "sauce satay prête à l'emploi"
        },
        "amount": 6,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "soy sauce",
          "nl": "sojasaus",
          "fr": "sauce de soja"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "sugar",
          "nl": "suiker",
          "fr": "sucre"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "sugar",
          "nl": "suiker",
          "fr": "sucre"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "turmeric powder",
          "nl": "kurkuma poeder",
          "fr": "poudre de curcuma"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "vegetable oil",
          "nl": "plantaardige olie",
          "fr": "huile végétale"
        },
        "amount": 60,
        "unit": "ml",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "water",
          "nl": "water",
          "fr": "eau"
        },
        "amount": 60,
        "unit": "ml",
        "category": "Bieren & Dranken"
      }
    ]
  },
  {
    "id": "spoonacular-638420",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 30,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/638420-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Chicken Wings",
        "subtitle": "Spoonacular Import",
        "description": "Chicken Wings might be just the hor d'oeuvre you are searching for. This gluten free recipe serves 30 and costs 22 cents per serving. One serving contains 91 calories, 5g of protein, and 5g of fat. 2 people found this recipe to be tasty and satisfying. From preparation to the plate, this recipe takes roughly 45 minutes. A mixture of brown sugar, taco seasoning), coconut yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. It is an inexpensive recipe for fans of American food. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 10%, which is not so super. Similar recipes include Spicy Thai Peanut Chicken Wings with Raspberry Habanero Sauce (PB&J Wings), Brown Butter Old Bay Wings (aka The Best Chicken Wings Ever!), and Brown Butter Old Bay Wings (aka The Best Chicken Wings Ever!).",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kippenvleugels",
        "subtitle": "Spoonacular-import",
        "description": "Chicken Wings is misschien wel het hor d'oeuvre waar u naar op zoek bent. Dit glutenvrije recept is geschikt voor 30 personen en kost 22 cent per portie. Eén portie bevat 91 calorieën, 5 g eiwit en 5 g vet. 2 mensen vonden dit recept lekker en bevredigend. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Een mengsel van bruine suiker, tacokruiden), kokosyoghurt en een handvol andere ingrediënten zijn voldoende om dit recept zo lekker te maken. Het is een goedkoop recept voor fans van Amerikaans eten. Het wordt u aangeboden door Foodista. Als we alle factoren in aanmerking nemen, krijgt dit recept een lepelscore van 10%, wat niet zo super is. Soortgelijke recepten zijn onder meer pittige Thaise pinda-kippenvleugels met frambozen-habanerosaus (PB&J Wings), Brown Butter Old Bay Wings (ook bekend als de beste kippenvleugels ooit!), en Brown Butter Old Bay Wings (ook bekend als de beste kippenvleugels ooit!).",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Ailes de poulet",
        "subtitle": "Import Spoonacular",
        "description": "Les ailes de poulet pourraient être exactement l'hord'œuvre que vous recherchez. Cette recette sans gluten sert 30 personnes et coûte 22 cents par portion. Une portion contient 91 calories, 5 g de protéines et 5 g de matières grasses. 2 personnes ont trouvé cette recette savoureuse et satisfaisante. De la préparation à l'assiette, cette recette prend environ 45 minutes. Un mélange de cassonade, d'assaisonnement pour tacos), de yaourt à la noix de coco et d'une poignée d'autres ingrédients suffisent pour rendre cette recette si délicieuse. C'est une recette peu coûteuse pour les amateurs de cuisine américaine. Il vous est présenté par Foodista. En tenant compte de tous les facteurs, cette recette obtient un score cuillère de 10 %, ce qui n'est pas si super. Des recettes similaires incluent les ailes de poulet thaïlandaises épicées aux arachides avec sauce habanero aux framboises (ailes PB&J), les ailes Old Bay au beurre brun (alias les meilleures ailes de poulet de tous les temps !) et les ailes Old Bay au beurre brun (alias les meilleures ailes de poulet de tous les temps !).",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "brown sugar",
          "nl": "bruine suiker",
          "fr": "cassonade"
        },
        "amount": 2,
        "unit": "el",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "chicken drummettes",
          "nl": "kippentrommeltjes",
          "fr": "pilons de poulet"
        },
        "amount": 1512,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "garlic powder",
          "nl": "knoflook poeder",
          "fr": "poudre d'ail"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "ground cumin",
          "nl": "gemalen komijn",
          "fr": "cumin moulu"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "honey",
          "nl": "Honing",
          "fr": "Miel"
        },
        "amount": 30,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "kosher salt",
          "nl": "koosjer zout",
          "fr": "sel casher"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "tabasco sauce",
          "nl": "tabasco-saus",
          "fr": "sauce tabasco"
        },
        "amount": 30,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "taco seasoning)",
          "nl": "tacokruiden)",
          "fr": "assaisonnement pour tacos)"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "vegan cream cheese",
          "nl": "veganistische roomkaas",
          "fr": "fromage à la crème végétalien"
        },
        "amount": 3,
        "unit": "el",
        "category": "Zuivel & Eieren"
      },
      {
        "name": {
          "en": "coconut yogurt",
          "nl": "kokosyoghurt",
          "fr": "yaourt à la noix de coco"
        },
        "amount": 2,
        "unit": "el",
        "category": "Zuivel & Eieren"
      }
    ]
  },
  {
    "id": "spoonacular-638231",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 6,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/638231-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": false,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": false,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Chicken Parmayonnaise",
        "subtitle": "Spoonacular Import",
        "description": "Chicken Parmayonnaise is a main course that serves 6. One portion of this dish contains approximately 27g of protein, 19g of fat, and a total of 289 calories. For $1.29 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 2 would say it hit the spot. From preparation to the plate, this recipe takes about 45 minutes. It is brought to you by Foodista. If you have kosher salt and coarse pepper, herbs, mayonnaise, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free diet. Taking all factors into account, this recipe earns a spoonacular score of 48%, which is solid. Chicken Parmayonnaise, I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom, and I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom are very similar to this recipe.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Kip Parmayonaise",
        "subtitle": "Spoonacular-import",
        "description": "Kip-parmayonaise is een hoofdgerecht voor 6 personen. Eén portie van dit gerecht bevat ongeveer 27 g eiwit, 19 g vet en in totaal 289 calorieën. Voor $ 1,29 per portie dekt dit recept 15% van uw dagelijkse behoefte aan vitamines en mineralen. Niet veel mensen hebben dit recept gemaakt, en 2 zouden zeggen dat het een schot in de roos was. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Het wordt u aangeboden door Foodista. Als je koosjer zout en grove peper, kruiden, mayonaise en een paar andere ingrediënten bij de hand hebt, kun je het maken. Het is een goede optie als je een glutenvrij dieet volgt. Als we alle factoren in aanmerking nemen, krijgt dit recept een lepelscore van 48%, wat solide is. Kip Parmayonaise, I Ain't Chicken Kip: Krokant geroosterde kippenborsten met sinaasappel en kardemom, en I Ain't Chicken Kip: Krokant geroosterde kippenborsten met sinaasappel en kardemom lijken erg op dit recept.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Parmayonnaise",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet parmayonnaise est un plat principal pour 6 personnes. Une portion de ce plat contient environ 27 g de protéines, 19 g de matières grasses et un total de 289 calories. Pour 1,29 $ par portion, cette recette couvre 15 % de vos besoins quotidiens en vitamines et minéraux. Peu de gens ont fait cette recette, et 2 diraient qu’elle a fait mouche. De la préparation à l'assiette, cette recette prend environ 45 minutes. Il vous est présenté par Foodista. Si vous avez du sel casher et du gros poivre, des herbes, de la mayonnaise et quelques autres ingrédients sous la main, vous pouvez le préparer. C'est une bonne option si vous suivez un régime sans gluten. En tenant compte de tous les facteurs, cette recette obtient un score cuillère de 48 %, ce qui est solide. Poulet à la parmayonnaise, I Ain't Chicken Chicken : poitrines de poulet rôties croustillantes à l'orange et à la cardamome, et I Ain't Chicken Chicken : poitrines de poulet rôties croustillantes à l'orange et à la cardamome sont très similaires à cette recette.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "kosher salt and coarse pepper",
          "nl": "koosjer zout en grove peper",
          "fr": "sel casher et gros poivre"
        },
        "amount": 6,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "herbs",
          "nl": "kruiden",
          "fr": "herbes"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "mayonnaise",
          "nl": "mayonaise",
          "fr": "mayonnaise"
        },
        "amount": 63,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "parmesan",
          "nl": "Parmezaanse kaas",
          "fr": "Parmesan"
        },
        "amount": 63,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken breasts",
          "nl": "kippenborsten",
          "fr": "poitrines de poulet"
        },
        "amount": 6,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      }
    ]
  },
  {
    "id": "spoonacular-648097",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/648097-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Italian Chicken With Pepper",
        "subtitle": "Spoonacular Import",
        "description": "The recipe Italian Chicken With Pepper could satisfy your Mediterranean craving in around 45 minutes. For $1.66 per serving, you get a main course that serves 4. Watching your figure? This gluten free, dairy free, paleolithic, and primal recipe has 468 calories, 36g of protein, and 33g of fat per serving. 1 person has tried and liked this recipe. Head to the store and pick up pepper, basil, pepper flakes, and a few other things to make it today. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 67%. This score is pretty good. Try Italian Pepper Steak, Italian Sausage and Pepper Stew, and Italian Red Pepper Bruschetta for similar recipes.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Italiaanse Kip Met Peper",
        "subtitle": "Spoonacular-import",
        "description": "Het recept Italiaanse kip met peper kan uw mediterrane trek in ongeveer 45 minuten stillen. Voor $ 1,66 per portie krijg je een hoofdgerecht voor 4 personen. Let je op je figuur? Dit glutenvrije, zuivelvrije, paleolithische en oerrecept bevat 468 calorieën, 36 g eiwit en 33 g vet per portie. 1 persoon heeft dit recept geprobeerd en vond het leuk. Ga naar de winkel en koop peper, basilicum, pepervlokken en nog een paar andere dingen om het vandaag te maken. Het wordt u aangeboden door Foodista. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 67% verdient. Deze score is behoorlijk goed. Probeer Italiaanse pepersteak, Italiaanse worst en peperstoofpot en Italiaanse rode peperbruschetta voor soortgelijke recepten.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Italien Au Poivre",
        "subtitle": "Import Spoonacular",
        "description": "La recette Poulet italien au poivre pourrait satisfaire votre envie méditerranéenne en 45 minutes environ. Pour 1,66 $ par portion, vous obtenez un plat principal pour 4 personnes. Vous surveillez votre silhouette ? Cette recette sans gluten, sans produits laitiers, paléolithique et primale contient 468 calories, 36 g de protéines et 33 g de matières grasses par portion. 1 personne a essayé et aimé cette recette. Rendez-vous au magasin et procurez-vous du poivre, du basilic, des flocons de piment et quelques autres choses à préparer aujourd'hui. Il vous est présenté par Foodista. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 67 %. Ce score est plutôt bon. Essayez le steak au poivre italien, le ragoût de saucisses et de poivrons italiens et la bruschetta italienne aux poivrons rouges pour des recettes similaires.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "pepper",
          "nl": "peper",
          "fr": "poivre"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "canned tomatoes",
          "nl": "ingeblikte tomaten",
          "fr": "tomates en conserve"
        },
        "amount": 2,
        "unit": "medium",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "frying chicken",
          "nl": "frituren kip",
          "fr": "faire frire du poulet"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "basil",
          "nl": "basilicum",
          "fr": "basilic"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic cloves",
          "nl": "knoflookteentjes",
          "fr": "gousses d'ail"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "bell pepper",
          "nl": "paprika",
          "fr": "poivron"
        },
        "amount": 1,
        "unit": "medium",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "olive oil",
          "nl": "olijfolie",
          "fr": "huile d'olive"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "pepper flakes",
          "nl": "pepervlokken",
          "fr": "flocons de piment"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "red wine vinegar",
          "nl": "rode wijnazijn",
          "fr": "vinaigre de vin rouge"
        },
        "amount": 2,
        "unit": "el",
        "category": "Bieren & Dranken"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-649557",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 1,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/649557-312x231.jpg",
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
        "title": "Lemon Chicken With Noodles",
        "subtitle": "Spoonacular Import",
        "description": "The recipe Lemon Chicken With Noodles can be made in about 45 minutes. For $5.37 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. This recipe makes 1 servings with 888 calories, 33g of protein, and 35g of fat each. Only a few people really liked this main course. It is brought to you by Foodista. 1 person has tried and liked this recipe. If you have chicken stock, juice of lemon, centimeters piece ginger, and a few other ingredients on hand, you can make it. With a spoonacular score of 72%, this dish is solid. If you like this recipe, take a look at these similar recipes: Lemon Italian Chicken with Noodles, Sticky lemon and chilli chicken noodles, and Lemon chicken with spring veg noodles.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Citroenkip Met Noedels",
        "subtitle": "Spoonacular-import",
        "description": "Het recept Citroenkip Met Noedels maak je in ongeveer 45 minuten. Voor $ 5,37 per portie dekt dit recept 29% van uw dagelijkse behoefte aan vitamines en mineralen. Dit recept maakt 1 portie met elk 888 calorieën, 33 g eiwit en 35 g vet. Slechts een paar mensen vonden dit hoofdgerecht erg lekker. Het wordt u aangeboden door Foodista. 1 persoon heeft dit recept geprobeerd en vond het leuk. Als je kippenbouillon, citroensap, centimeter gemberstukje en nog wat andere ingrediënten bij de hand hebt, kun je het maken. Met een lepelscore van 72% is dit gerecht stevig. Als je dit recept lekker vindt, kijk dan eens naar deze soortgelijke recepten: Italiaanse citroenkip met noedels, Kleverige kipnoedels met citroen en chili en Citroenkip met lente-vegetarische noedels.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet Au Citron Avec Nouilles",
        "subtitle": "Import Spoonacular",
        "description": "La recette Poulet au citron et nouilles peut être préparée en 45 minutes environ. Pour 5,37 $ par portion, cette recette couvre 29 % de vos besoins quotidiens en vitamines et minéraux. Cette recette donne 1 portion avec 888 calories, 33 g de protéines et 35 g de matières grasses chacune. Seules quelques personnes ont vraiment aimé ce plat principal. Il vous est présenté par Foodista. 1 personne a essayé et aimé cette recette. Si vous avez du bouillon de poulet, du jus de citron, des morceaux de gingembre de quelques centimètres et quelques autres ingrédients sous la main, vous pouvez le préparer. Avec un score cuillère de 72%, ce plat est solide. Si vous aimez cette recette, jetez un œil à ces recettes similaires : Poulet italien au citron avec nouilles, Nouilles gluantes au poulet au citron et au piment et Poulet au citron avec nouilles aux légumes printaniers.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "cornflour",
          "nl": "maïzena",
          "fr": "maïzena"
        },
        "amount": 2,
        "unit": "el",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "ground pepper",
          "nl": "gemalen peper",
          "fr": "poivre moulu"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken breast fillets",
          "nl": "kippenborstfilets",
          "fr": "filets de poitrine de poulet"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "juice of lemon",
          "nl": "sap van citroen",
          "fr": "jus de citron"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "chicken stock",
          "nl": "kippenbouillon",
          "fr": "bouillon de poulet"
        },
        "amount": 125,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "honey",
          "nl": "Honing",
          "fr": "Miel"
        },
        "amount": 2,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cooking oil",
          "nl": "bakolie",
          "fr": "huile de cuisson"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 1,
        "unit": "large",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "noodles",
          "nl": "noedels",
          "fr": "nouilles"
        },
        "amount": 3,
        "unit": "packets",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "spring onions/ scallions",
          "nl": "lente-uitjes/sjalotjes",
          "fr": "oignons nouveaux/oignons verts"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "white wine vinegar",
          "nl": "witte wijnazijn",
          "fr": "vinaigre de vin blanc"
        },
        "amount": 1,
        "unit": "el",
        "category": "Bieren & Dranken"
      },
      {
        "name": {
          "en": "centimeters piece ginger",
          "nl": "centimeter stukje gember",
          "fr": "morceau de gingembre en centimètres"
        },
        "amount": 3,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "season cornflour",
          "nl": "seizoen maizena",
          "fr": "farine de maïs de saison"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Bakkerij"
      },
      {
        "name": {
          "en": "to make sauce",
          "nl": "saus maken",
          "fr": "faire de la sauce"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "heat work/ skillet over hight heat. add oil",
          "nl": "hittewerk / koekepan op hoog vuur. olie toevoegen",
          "fr": "chauffer le travail/la poêle à feu vif. ajouter de l'huile"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "return to wok/ skillet on high heat",
          "nl": "doe terug in de wok/koekenpan op hoog vuur",
          "fr": "remettre dans le wok/poêle à feu vif"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "serve",
          "nl": "dienen",
          "fr": "servir"
        },
        "amount": 1,
        "unit": "serving",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "note: serves",
          "nl": "Let op: serveert",
          "fr": "remarque : sert"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "note: serves",
          "nl": "Let op: serveert",
          "fr": "remarque : sert"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-633088",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/633088-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Authentic Jamaican Curry Chicken",
        "subtitle": "Spoonacular Import",
        "description": "If you want to add more gluten free, dairy free, paleolithic, and primal recipes to your recipe box, Authentic Jamaican Curry Chicken might be a recipe you should try. This recipe serves 4. For $4.02 per serving, this recipe covers 46% of your daily requirements of vitamins and minerals. This main course has 587 calories, 70g of protein, and 19g of fat per serving. 4 people have made this recipe and would make it again. Not a lot of people really liked this Indian dish. This recipe from Foodista requires thyme, scallions, scotch bonnet pepper, and sweet potatoes. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 87%. This score is great. Try Authentic Jamaican Curry Chicken, Authentic Jamaican Curry Chicken, and Authentic Jamaican Brown Stew Chicken for similar recipes.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Authentieke Jamaicaanse currykip",
        "subtitle": "Spoonacular-import",
        "description": "Als je meer glutenvrije, zuivelvrije, paleolithische en oerrecepten aan je receptendoos wilt toevoegen, is Authentic Jamaican Curry Chicken misschien een recept dat je zou moeten proberen. Dit recept is voor 4 personen. Voor $ 4,02 per portie dekt dit recept 46% van uw dagelijkse behoefte aan vitamines en mineralen. Dit hoofdgerecht bevat 587 calorieën, 70 g eiwit en 19 g vet per portie. 4 mensen hebben dit recept gemaakt en zouden het nog een keer maken. Niet veel mensen hielden echt van dit Indiase gerecht. Voor dit recept van Foodista zijn tijm, lente-uitjes, Schotse peper en zoete aardappelen nodig. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Alles bij elkaar genomen hebben we besloten dat dit recept een lepelscore van 87% verdient. Dit cijfer is geweldig. Probeer Authentic Jamaican Curry Chicken, Authentic Jamaican Curry Chicken en Authentic Jamaican Brown Stew Chicken voor vergelijkbare recepten.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet au curry jamaïcain authentique",
        "subtitle": "Import Spoonacular",
        "description": "Si vous souhaitez ajouter plus de recettes sans gluten, sans produits laitiers, paléolithiques et primitives à votre boîte de recettes, l'authentique poulet au curry jamaïcain pourrait être une recette que vous devriez essayer. Cette recette en sert 4. Pour 4,02 $ par portion, cette recette couvre 46 % de vos besoins quotidiens en vitamines et minéraux. Ce plat principal contient 587 calories, 70 g de protéines et 19 g de matières grasses par portion. 4 personnes ont réalisé cette recette et la referaient. Peu de gens ont vraiment aimé ce plat indien. Cette recette de Foodista nécessite du thym, des oignons verts, du piment Scotch Bonnet et des patates douces. De la préparation à l'assiette, cette recette prend environ 45 minutes. Tout bien considéré, nous avons décidé que cette recette méritait un score cuillère de 87 %. Ce score est génial. Essayez le poulet au curry jamaïcain authentique, le poulet au curry jamaïcain authentique et le poulet ragoût brun jamaïcain authentique pour des recettes similaires.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "allspice",
          "nl": "piment",
          "fr": "piment de la Jamaïque"
        },
        "amount": 1,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "coconut oil",
          "nl": "kokosolie",
          "fr": "huile de coco"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "curry powder",
          "nl": "kerrie poeder",
          "fr": "poudre de curry"
        },
        "amount": 6,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "garlic",
          "nl": "knoflook",
          "fr": "ail"
        },
        "amount": 1,
        "unit": "el",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "bell pepper",
          "nl": "paprika",
          "fr": "poivron"
        },
        "amount": 1,
        "unit": "large",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "onion",
          "nl": "ui",
          "fr": "oignon"
        },
        "amount": 0.5,
        "unit": "medium",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "pepper pepper",
          "nl": "peper peper",
          "fr": "poivre poivre"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 1.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "scallions",
          "nl": "lente-uitjes",
          "fr": "oignons verts"
        },
        "amount": 3,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "scotch bonnet pepper",
          "nl": "Schotse bonnetpeper",
          "fr": "piment Scotch Bonnet"
        },
        "amount": 1,
        "unit": "st.",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken thighs",
          "nl": "kippendijen",
          "fr": "cuisses de poulet"
        },
        "amount": 1361,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "sweet potatoes",
          "nl": "zoete aardappelen",
          "fr": "patates douces"
        },
        "amount": 2,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "thyme",
          "nl": "tijm",
          "fr": "thym"
        },
        "amount": 1,
        "unit": "el",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "water",
          "nl": "water",
          "fr": "eau"
        },
        "amount": 480,
        "unit": "ml",
        "category": "Bieren & Dranken"
      }
    ]
  },
  {
    "id": "spoonacular-645753",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
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
    "image": "https://img.spoonacular.com/recipes/645753-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Grilled Lemon Garlic Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Grilled Lemon Garlic Chicken could be just the gluten free, dairy free, paleolithic, and primal recipe you've been looking for. For $2.59 per serving, this recipe covers 28% of your daily requirements of vitamins and minerals. This recipe serves 4. One portion of this dish contains around 48g of protein, 20g of fat, and a total of 390 calories. It is brought to you by Foodista. It will be a hit at your The Fourth Of July event. If you have tumeric, cilantro, lemon juice, and a few other ingredients on hand, you can make it. 7 people have made this recipe and would make it again. It works well as an affordable main course. From preparation to the plate, this recipe takes roughly 45 minutes. Overall, this recipe earns a good spoonacular score of 78%. Similar recipes include Grilled Lemon Garlic Chicken, Grilled Chicken with Lemon, Garlic, and Oregano, and Grilled Lemon Chicken With Garlic Bread.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Gegrilde Citroen Knoflook Kip",
        "subtitle": "Spoonacular-import",
        "description": "Gegrilde kip met citroenknoflook zou precies het glutenvrije, zuivelvrije, paleolithische en oorspronkelijke recept kunnen zijn waar u naar op zoek was. Voor $ 2,59 per portie dekt dit recept 28% van uw dagelijkse behoefte aan vitamines en mineralen. Dit recept is voor 4 personen. Eén portie van dit gerecht bevat ongeveer 48 gram eiwit, 20 gram vet en in totaal 390 calorieën. Het wordt u aangeboden door Foodista. Het zal een hit zijn tijdens je The Fourth Of July-evenement. Als je kurkuma, koriander, citroensap en een paar andere ingrediënten bij de hand hebt, kun je het maken. 7 mensen hebben dit recept gemaakt en zouden het nog een keer maken. Het werkt goed als betaalbaar hoofdgerecht. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Over het geheel genomen verdient dit recept een goede lepelscore van 78%. Soortgelijke recepten zijn onder meer gegrilde citroen-knoflookkip, gegrilde kip met citroen, knoflook en oregano, en gegrilde citroenkip met knoflookbrood.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet grillé au citron et à l'ail",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet grillé au citron et à l'ail pourrait être la recette sans gluten, sans produits laitiers, paléolithique et primale que vous recherchiez. Pour 2,59 $ par portion, cette recette couvre 28 % de vos besoins quotidiens en vitamines et minéraux. Cette recette en sert 4. Une portion de ce plat contient environ 48 g de protéines, 20 g de matières grasses et un total de 390 calories. Il vous est présenté par Foodista. Ce sera un succès lors de votre événement du 4 juillet. Si vous avez du curcuma, de la coriandre, du jus de citron et quelques autres ingrédients sous la main, vous pouvez le préparer. 7 personnes ont réalisé cette recette et la referaient. Cela fonctionne bien comme plat principal abordable. De la préparation à l'assiette, cette recette prend environ 45 minutes. Dans l'ensemble, cette recette obtient un bon score cuillère de 78 %. Des recettes similaires incluent le poulet grillé au citron et à l'ail, le poulet grillé au citron, à l'ail et à l'origan et le poulet grillé au citron avec du pain à l'ail.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "chicken breast",
          "nl": "kipfilet",
          "fr": "blanc de poulet"
        },
        "amount": 907,
        "unit": "g",
        "category": "Slagerij & Gevogelte"
      },
      {
        "name": {
          "en": "garlic olive oil",
          "nl": "knoflook olijfolie",
          "fr": "huile d'olive à l'ail"
        },
        "amount": 60,
        "unit": "ml",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "lemon juice",
          "nl": "citroensap",
          "fr": "jus de citron"
        },
        "amount": 120,
        "unit": "ml",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "tumeric",
          "nl": "kurkuma",
          "fr": "curcuma"
        },
        "amount": 2,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt and pepper",
          "nl": "zout en peper",
          "fr": "sel et poivre"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "cilantro",
          "nl": "koriander",
          "fr": "coriandre"
        },
        "amount": 4,
        "unit": "servings",
        "category": "Kruidenier"
      }
    ]
  },
  {
    "id": "spoonacular-634434",
    "prepTime": "45 mins",
    "cookTime": "15 mins",
    "difficulty": {
      "en": "Medium",
      "nl": "Gemiddeld",
      "fr": "Moyen"
    },
    "servings": 8,
    "category": {
      "en": "Custom",
      "nl": "Eigen recepten",
      "fr": "Personnalisées"
    },
    "image": "https://img.spoonacular.com/recipes/634434-312x231.jpg",
    "isGlutenFree": true,
    "isNutFree": true,
    "isDairyFree": true,
    "isEggFree": false,
    "isVegetarian": false,
    "isVegan": false,
    "isCandidaFriendly": true,
    "isKeto": false,
    "translations": {
      "en": {
        "title": "Basil Marinated Grilled Chicken",
        "subtitle": "Spoonacular Import",
        "description": "Basil Marinated Grilled Chicken is a gluten free, dairy free, paleolithic, and primal recipe with 8 servings. One serving contains 309 calories, 48g of protein, and 11g of fat. For $2.59 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. Head to the store and pick up garlic, chicken breasts, salt, and a few other things to make it today. 11 person have tried and liked this recipe. It will be a hit at your The Fourth Of July event. It works well as a rather cheap main course. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 45 minutes. Taking all factors into account, this recipe earns a spoonacular score of 80%, which is excellent. Try Basil Marinated Grilled Chicken, Basil Marinated Grilled Chicken, and All Purpose Lemon Basil Marinated Chicken for similar recipes.",
        "instructions": [
          "Clean ingredients, prepare, and serve."
        ]
      },
      "nl": {
        "title": "Basilicum gemarineerde gegrilde kip",
        "subtitle": "Spoonacular-import",
        "description": "Met basilicum gemarineerde gegrilde kip is een glutenvrij, zuivelvrij, paleolithisch en oerrecept met 8 porties. Eén portie bevat 309 calorieën, 48 g eiwit en 11 g vet. Voor $ 2,59 per portie dekt dit recept 25% van uw dagelijkse behoefte aan vitamines en mineralen. Ga naar de winkel en koop knoflook, kipfilets, zout en nog een paar andere dingen om het vandaag te maken. 11 personen hebben dit recept geprobeerd en vonden het leuk. Het zal een hit zijn tijdens je The Fourth Of July-evenement. Het werkt goed als een vrij goedkoop hoofdgerecht. Het wordt u aangeboden door Foodista. Van bereiding tot op het bord duurt dit recept ongeveer 45 minuten. Als we alle factoren in aanmerking nemen, krijgt dit recept een lepelscore van 80%, wat uitstekend is. Probeer met basilicum gemarineerde gegrilde kip, met basilicum gemarineerde gegrilde kip en met citroen en basilicum gemarineerde kip voor alle doeleinden voor soortgelijke recepten.",
        "instructions": [
          "Reinig de ingrediënten, bereid ze voor en serveer."
        ]
      },
      "fr": {
        "title": "Poulet grillé mariné au basilic",
        "subtitle": "Import Spoonacular",
        "description": "Le poulet grillé mariné au basilic est une recette sans gluten, sans produits laitiers, paléolithique et primale avec 8 portions. Une portion contient 309 calories, 48 ​​g de protéines et 11 g de matières grasses. Pour 2,59 $ par portion, cette recette couvre 25 % de vos besoins quotidiens en vitamines et minéraux. Rendez-vous au magasin et procurez-vous de l'ail, des poitrines de poulet, du sel et quelques autres éléments pour le préparer aujourd'hui. 11 personnes ont essayé et aimé cette recette. Ce sera un succès lors de votre événement du 4 juillet. Cela fonctionne bien comme plat principal plutôt bon marché. Il vous est présenté par Foodista. De la préparation à l'assiette, cette recette prend environ 45 minutes. En tenant compte de tous les facteurs, cette recette obtient un score cuillère de 80 %, ce qui est excellent. Essayez le poulet grillé mariné au basilic, le poulet grillé mariné au basilic et le poulet mariné tout usage au citron et au basilic pour des recettes similaires.",
        "instructions": [
          "Nettoyer les ingrédients, préparer et servir."
        ]
      }
    },
    "ingredients": [
      {
        "name": {
          "en": "garlic",
          "nl": "knoflook",
          "fr": "ail"
        },
        "amount": 4,
        "unit": "st.",
        "category": "Groenten & Fruit"
      },
      {
        "name": {
          "en": "lightly basil leaves",
          "nl": "licht basilicumblaadjes",
          "fr": "feuilles de basilic légèrement"
        },
        "amount": 250,
        "unit": "g",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "extra virgin olive oil",
          "nl": "extra vergine olijfolie",
          "fr": "Huile d'olive vierge extra"
        },
        "amount": 240,
        "unit": "ml",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "salt",
          "nl": "zout",
          "fr": "sel"
        },
        "amount": 0.5,
        "unit": "kl",
        "category": "Kruidenier"
      },
      {
        "name": {
          "en": "chicken breasts",
          "nl": "kippenborsten",
          "fr": "poitrines de poulet"
        },
        "amount": 8,
        "unit": "st.",
        "category": "Slagerij & Gevogelte"
      }
    ]
  }
];
