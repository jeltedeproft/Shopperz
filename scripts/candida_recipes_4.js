// Candida-diet dishes, batch 4. See candida_recipes.js for how these were made.

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });
const diff = {
  easy: { en: 'Easy', nl: 'Makkelijk', fr: 'Facile' },
  medium: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' }
};

module.exports = [
  {
    slug: 'buffalo-turkey-meatballs',
    prepTime: '15 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main', 'snack'],
    translations: {
      en: {
        title: 'Buffalo Turkey Meatballs',
        subtitle: 'Smoky-hot sauce and a kefir ranch dip',
        description: 'Turkey meatballs tossed in a sugar-free buffalo sauce made from smoked paprika and vinegar, with a cool ranch dip of kefir, yogurt and herbs.',
        instructions: [
          'Heat the oven to 200 °C and line a baking tray with baking paper.',
          'Mix the turkey with the egg yolk, onion, coconut flour, ½ teaspoon paprika, salt, pepper and a pinch of cayenne. Shape into 18 balls and bake for 15 minutes.',
          'Meanwhile, whisk the vinegar, 2 tablespoons paprika, salt, onion powder, garlic powder and a pinch of cayenne with 3 tablespoons of hot water, adding a little more water if it\'s too thick.',
          'For the ranch, whisk the kefir, yogurt, a splash of vinegar, chives and parsley, and season.',
          'Toss the hot meatballs in the sauce, scatter over spring onion and serve with the ranch. The dip keeps 2–3 days in the fridge.'
        ]
      },
      nl: {
        title: 'Buffalo-kalkoenballetjes',
        subtitle: 'Rokerige pikante saus en een ranchdip van kefir',
        description: 'Kalkoenballetjes in een buffalosaus zonder suiker van gerookte paprika en azijn, met een frisse ranchdip van kefir, yoghurt en kruiden.',
        instructions: [
          'Verwarm de oven voor op 200 °C en bekleed een bakplaat met bakpapier.',
          'Meng het kalkoengehakt met de eidooier, ui, het kokosmeel, ½ theelepel paprikapoeder, zout, peper en een snuifje cayenne. Vorm er 18 balletjes van en bak 15 minuten.',
          'Klop ondertussen de azijn, 2 eetlepels paprikapoeder, zout, uienpoeder, lookpoeder en een snuifje cayenne los met 3 eetlepels heet water, en doe er wat meer water bij als het te dik is.',
          'Voor de ranch klop je de kefir, yoghurt, een scheutje azijn, bieslook en peterselie, en kruid je.',
          'Meng de hete balletjes door de saus, strooi er lente-ui over en dien op met de ranch. De dip blijft 2–3 dagen goed in de koelkast.'
        ]
      },
      fr: {
        title: 'Boulettes de dinde façon buffalo',
        subtitle: 'Une sauce fumée et piquante, et une sauce ranch au kéfir',
        description: 'Des boulettes de dinde enrobées d\'une sauce buffalo sans sucre au paprika fumé et au vinaigre, avec une sauce ranch fraîche au kéfir, au yaourt et aux herbes.',
        instructions: [
          'Préchauffe le four à 200 °C et garnis une plaque de papier cuisson.',
          'Mélange la dinde avec le jaune d\'œuf, l\'oignon, la farine de coco, ½ cuillère à café de paprika, le sel, le poivre et une pincée de cayenne. Forme 18 boulettes et enfourne 15 minutes.',
          'Pendant ce temps, fouette le vinaigre, 2 cuillères à soupe de paprika, le sel, la poudre d\'oignon, l\'ail en poudre et une pincée de cayenne avec 3 cuillères à soupe d\'eau chaude, et allonge un peu si c\'est trop épais.',
          'Pour la ranch, fouette le kéfir, le yaourt, un trait de vinaigre, la ciboulette et le persil, et assaisonne.',
          'Enrobe les boulettes chaudes de sauce, parsème d\'oignon nouveau et sers avec la ranch. La sauce se garde 2–3 jours au frigo.'
        ]
      }
    },
    ingredients: [
      ing('Ground turkey', 'Kalkoengehakt', 'Dinde hachée', 450, 'g'),
      ing('Egg yolk', 'Eidooier', 'Jaune d\'oeuf', 1, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 1, 'el'),
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 1, 'el'),
      ing('Smoked paprika', 'Gerookte paprikapoeder', 'Paprika fumé', 2.5, 'el'),
      ing('Salt', 'Zout', 'Sel', 2, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.5, 'kl'),
      ing('Cayenne pepper', 'Cayennepeper', 'Piment de Cayenne', 2, 'pinch'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 3, 'el'),
      ing('Onion powder', 'Uienpoeder', 'Poudre d\'oignon', 1.5, 'kl'),
      ing('Garlic powder', 'Lookpoeder', 'Ail en poudre', 1.25, 'kl'),
      ing('Kefir', 'Kefir', 'Kéfir', 60, 'ml'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 60, 'ml'),
      ing('Chives', 'Bieslook', 'Ciboulette', 2, 'kl'),
      ing('Parsley', 'Peterselie', 'Persil', 2, 'kl'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 2, 'st.')
    ]
  },

  {
    slug: 'cauliflower-tortillas',
    prepTime: '20 mins',
    cookTime: '15 mins',
    difficulty: diff.medium,
    servings: 6,
    category: ['snack', 'main'],
    translations: {
      en: {
        title: 'Cauliflower Tortillas',
        subtitle: 'Soft wraps from two ingredients',
        description: 'Finely chopped cauliflower and egg, baked into thin rounds that bend like a tortilla. Fill them with anything you would put in a wrap.',
        instructions: [
          'Heat the oven to 190 °C and line two baking trays with baking paper.',
          'Pulse the cauliflower in a food processor until it is finer than rice. Steam it in a fine sieve over boiling water for 5 minutes.',
          'Tip it into a clean tea towel and squeeze out every drop of water you can — this is what makes them hold together.',
          'Put it back in the processor with the eggs, salt and coriander and pulse for about 30 seconds.',
          'Spread into six rounds of 12–15 cm, three per tray. Bake for 10 minutes, flip, and bake 5 more. Serve warm with lime and a pinch of chilli salt.'
        ]
      },
      nl: {
        title: 'Bloemkooltortilla\'s',
        subtitle: 'Zachte wraps van twee ingrediënten',
        description: 'Fijngehakte bloemkool en ei, gebakken tot dunne rondjes die plooien als een tortilla. Vul ze met alles wat je in een wrap zou steken.',
        instructions: [
          'Verwarm de oven voor op 190 °C en bekleed twee bakplaten met bakpapier.',
          'Hak de bloemkool in de keukenrobot fijner dan rijst. Stoom hem 5 minuten in een fijne zeef boven kokend water.',
          'Doe hem in een schone keukenhanddoek en knijp er zoveel mogelijk water uit — daardoor blijven ze samenhangen.',
          'Doe hem terug in de keukenrobot met de eieren, het zout en de koriander en mix zo\'n 30 seconden.',
          'Strijk uit tot zes rondjes van 12–15 cm, drie per plaat. Bak 10 minuten, draai om en bak nog 5 minuten. Warm opdienen met limoen en een snuifje chilizout.'
        ]
      },
      fr: {
        title: 'Tortillas de chou-fleur',
        subtitle: 'Des wraps souples avec deux ingrédients',
        description: 'Du chou-fleur finement haché et des œufs, cuits en fines galettes qui se plient comme une tortilla. Garnis-les de tout ce que tu mettrais dans un wrap.',
        instructions: [
          'Préchauffe le four à 190 °C et garnis deux plaques de papier cuisson.',
          'Mixe le chou-fleur par à-coups jusqu\'à ce qu\'il soit plus fin que du riz. Cuis-le 5 minutes à la vapeur dans une passoire fine au-dessus d\'eau bouillante.',
          'Verse-le dans un torchon propre et presse pour en retirer toute l\'eau possible — c\'est ce qui les fait tenir.',
          'Remets-le dans le robot avec les œufs, le sel et la coriandre et mixe une trentaine de secondes.',
          'Étale en six disques de 12–15 cm, trois par plaque. Enfourne 10 minutes, retourne et poursuis 5 minutes. Sers chaud avec du citron vert et une pincée de sel pimenté.'
        ]
      }
    },
    ingredients: [
      ing('Cauliflower', 'Bloemkool', 'Chou-fleur', 680, 'g'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Salt', 'Zout', 'Sel', 1, 'pinch'),
      ing('Coriander', 'Koriander', 'Coriandre', 1, 'el'),
      ing('Lime', 'Limoen', 'Citron vert', 1, 'st.'),
      ing('Chili powder', 'Chilipoeder', 'Piment en poudre', 1, 'pinch')
    ]
  },

  {
    slug: 'vegan-low-carb-eggplant-curry',
    prepTime: '15 mins',
    cookTime: '25 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Aubergine Curry',
        subtitle: 'Vegan, spicy and ready in forty minutes',
        description: 'Aubergine simmered with tomato, ginger, garlic and a handful of warm spices until it turns soft and silky. Serve it over quinoa or millet.',
        instructions: [
          'Heat the oil in a large pan over medium-high heat and fry the onion for about 6 minutes.',
          'Add the curry powder, turmeric, coriander, cumin, salt, garlic and ginger and stir for 2 minutes.',
          'Add the tomatoes, aubergine and jalapeño and stir well.',
          'Pour in the stock, bring to the boil, then cover and simmer on medium-low for 12–15 minutes, until the aubergine is tender.',
          'Finish with chilli flakes and basil.'
        ]
      },
      nl: {
        title: 'Auberginecurry',
        subtitle: 'Vegan, pittig en klaar in veertig minuten',
        description: 'Aubergine gesudderd met tomaat, gember, look en een handvol warme specerijen tot ze zacht en zijdeachtig wordt. Lekker op quinoa of gierst.',
        instructions: [
          'Verhit de olie in een grote pan op middelhoog tot hoog vuur en bak de ui zo\'n 6 minuten.',
          'Voeg de currypoeder, kurkuma, koriander, komijn, zout, look en gember toe en roer 2 minuten.',
          'Voeg de tomaten, aubergine en jalapeño toe en roer goed.',
          'Giet de bouillon erbij, breng aan de kook en laat dan met deksel 12–15 minuten sudderen op middellaag vuur, tot de aubergine zacht is.',
          'Werk af met chilivlokken en basilicum.'
        ]
      },
      fr: {
        title: 'Curry d\'aubergine',
        subtitle: 'Vegan, épicé et prêt en quarante minutes',
        description: 'De l\'aubergine mijotée avec de la tomate, du gingembre, de l\'ail et une poignée d\'épices chaudes jusqu\'à devenir fondante et soyeuse. À servir sur du quinoa ou du millet.',
        instructions: [
          'Chauffe l\'huile dans une grande sauteuse à feu moyen-vif et fais revenir l\'oignon environ 6 minutes.',
          'Ajoute le curry, le curcuma, la coriandre, le cumin, le sel, l\'ail et le gingembre et remue 2 minutes.',
          'Ajoute les tomates, l\'aubergine et le jalapeño et mélange bien.',
          'Verse le bouillon, porte à ébullition, puis couvre et laisse mijoter à feu moyen-doux 12–15 minutes, jusqu\'à ce que l\'aubergine soit tendre.',
          'Termine avec du piment en flocons et du basilic.'
        ]
      }
    },
    ingredients: [
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 2, 'el'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Curry powder', 'Currypoeder', 'Curry en poudre', 1, 'kl'),
      ing('Turmeric', 'Kurkuma', 'Curcuma', 1, 'kl'),
      ing('Ground coriander', 'Korianderpoeder', 'Coriandre moulue', 1, 'kl'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Garlic', 'Look', 'Ail', 3, 'st.'),
      ing('Fresh ginger', 'Verse gember', 'Gingembre frais', 2, 'cm'),
      ing('Tomatoes', 'Tomaten', 'Tomates', 2, 'st.'),
      ing('Eggplant', 'Aubergine', 'Aubergine', 680, 'g'),
      ing('Jalapeño', 'Jalapeño', 'Jalapeño', 1, 'st.'),
      ing('Vegetable broth', 'Groentebouillon', 'Bouillon de légumes', 240, 'ml'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 1, 'pinch'),
      ing('Basil', 'Basilicum', 'Basilic', 1, 'el')
    ]
  },

  {
    slug: 'millet-grilled-vegetable-salad',
    prepTime: '15 mins',
    cookTime: '35 mins',
    difficulty: diff.easy,
    servings: 6,
    category: ['main'],
    translations: {
      en: {
        title: 'Millet & Grilled Vegetable Salad',
        subtitle: 'Charred summer vegetables with a basil dressing',
        description: 'Fluffy millet tossed with grilled courgette, squash, peppers and onion and a bright basil dressing, with seeds scattered on top. Good warm or cold, and better the next day.',
        instructions: [
          'Bring the millet, water and a pinch of salt to the boil, then cover and cook on medium-low for about 15 minutes. Leave it covered for 10 minutes, fluff it with a fork and let it cool.',
          'Blend the basil, lemon juice, vinegar, salt and olive oil into a smooth dressing and season with pepper.',
          'Heat a grill or griddle pan to medium. Brush the vegetables with oil and season with dried herbs, salt and pepper.',
          'Grill for 6–8 minutes, turning once, until charred and just tender, then cut into bite-sized pieces.',
          'Toss the millet with the vegetables and the dressing and scatter the seeds on top.'
        ]
      },
      nl: {
        title: 'Gierstsalade met gegrilde groenten',
        subtitle: 'Geblakerde zomergroenten met een basilicumdressing',
        description: 'Luchtige gierst met gegrilde courgette, pompoen, paprika en ui en een frisse basilicumdressing, met zaadjes erover. Lekker warm of koud, en nog beter de dag erna.',
        instructions: [
          'Breng de gierst met het water en een snuifje zout aan de kook en laat dan met deksel zo\'n 15 minuten garen op middellaag vuur. Laat 10 minuten afgedekt staan, maak los met een vork en laat afkoelen.',
          'Mix het basilicum, citroensap, de azijn, het zout en de olijfolie tot een gladde dressing en kruid met peper.',
          'Verwarm een grill of grillpan op middelhoog vuur. Bestrijk de groenten met olie en kruid met gedroogde kruiden, peper en zout.',
          'Grill 6–8 minuten, één keer omdraaien, tot ze geblakerd en net gaar zijn, en snijd ze in hapklare stukken.',
          'Meng de gierst met de groenten en de dressing en strooi de zaadjes erover.'
        ]
      },
      fr: {
        title: 'Salade de millet et légumes grillés',
        subtitle: 'Des légumes d\'été grillés et une sauce au basilic',
        description: 'Du millet aérien mêlé à de la courgette, de la courge, des poivrons et de l\'oignon grillés et à une sauce vive au basilic, avec des graines par-dessus. Bon tiède ou froid, et encore meilleur le lendemain.',
        instructions: [
          'Porte le millet, l\'eau et une pincée de sel à ébullition, puis couvre et cuis à feu moyen-doux environ 15 minutes. Laisse 10 minutes à couvert, égrène à la fourchette et laisse refroidir.',
          'Mixe le basilic, le jus de citron, le vinaigre, le sel et l\'huile d\'olive en une sauce lisse et poivre.',
          'Chauffe un gril ou une poêle-gril à feu moyen. Badigeonne les légumes d\'huile et assaisonne d\'herbes séchées, de sel et de poivre.',
          'Grille 6–8 minutes en retournant une fois, jusqu\'à ce qu\'ils soient marqués et juste tendres, puis coupe-les en bouchées.',
          'Mélange le millet avec les légumes et la sauce et parsème de graines.'
        ]
      }
    },
    ingredients: [
      ing('Millet', 'Gierst', 'Millet', 200, 'g'),
      ing('Water', 'Water', 'Eau', 480, 'ml'),
      ing('Zucchini', 'Courgette', 'Courgette', 1, 'st.'),
      ing('Yellow squash', 'Gele courgette', 'Courgette jaune', 1, 'st.'),
      ing('Red bell pepper', 'Rode paprika', 'Poivron rouge', 0.5, 'st.'),
      ing('Yellow bell pepper', 'Gele paprika', 'Poivron jaune', 0.5, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 90, 'ml'),
      ing('Dried oregano', 'Gedroogde oregano', 'Origan séché', 1, 'kl'),
      ing('Pumpkin seeds', 'Pompoenpitten', 'Graines de courge', 3, 'el'),
      ing('Basil', 'Basilicum', 'Basilic', 25, 'g'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'asian-chicken-and-cabbage-salad',
    prepTime: '20 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Asian Chicken & Cabbage Salad',
        subtitle: 'Crunchy cabbage, sesame dressing and crispy shallots',
        description: 'Two kinds of cabbage, broccoli and shredded chicken in a sesame and coconut-aminos dressing, finished with shallots fried until golden. A good way to use leftover chicken.',
        instructions: [
          'Whisk the olive and sesame oils, vinegar, coconut aminos, garlic powder, onion powder, ginger and stevia, and season. Set aside.',
          'Slice the shallot into thin rings. Fry them in about 2 cm of oil over high heat until they bubble, then turn the heat to medium and fry for 8–10 minutes until golden. Drain on kitchen paper and let them cool.',
          'Toss the chicken with both cabbages, the broccoli, spring onions, coriander and sesame seeds.',
          'Add the dressing, toss lightly and pile the crispy shallots on top. Serve straight away.'
        ]
      },
      nl: {
        title: 'Aziatische salade met kip en kool',
        subtitle: 'Knapperige kool, sesamdressing en krokante sjalotjes',
        description: 'Twee soorten kool, broccoli en geplukte kip in een dressing van sesam en kokosaminos, afgewerkt met goudbruin gebakken sjalotjes. Een goede manier om restjes kip op te maken.',
        instructions: [
          'Klop de olijf- en sesamolie, azijn, kokosaminos, lookpoeder, uienpoeder, gember en stevia los en kruid. Zet opzij.',
          'Snijd de sjalot in dunne ringen. Bak ze in zo\'n 2 cm olie op hoog vuur tot ze borrelen, zet dan het vuur middelhoog en bak 8–10 minuten tot ze goudbruin zijn. Laat uitlekken op keukenpapier en afkoelen.',
          'Meng de kip met beide koolsoorten, de broccoli, lente-ui, koriander en sesamzaad.',
          'Voeg de dressing toe, meng losjes en leg de krokante sjalotjes erop. Meteen opdienen.'
        ]
      },
      fr: {
        title: 'Salade asiatique au poulet et au chou',
        subtitle: 'Chou croquant, sauce au sésame et échalotes croustillantes',
        description: 'Deux sortes de chou, du brocoli et du poulet effiloché dans une sauce au sésame et aux aminos de coco, finis d\'échalotes frites bien dorées. Une bonne façon d\'utiliser un reste de poulet.',
        instructions: [
          'Fouette les huiles d\'olive et de sésame, le vinaigre, les aminos de coco, l\'ail et l\'oignon en poudre, le gingembre et la stévia, et assaisonne. Réserve.',
          'Émince l\'échalote en fines rondelles. Fais-les frire dans environ 2 cm d\'huile à feu vif jusqu\'à ce qu\'elles grésillent, puis baisse à feu moyen et poursuis 8–10 minutes jusqu\'à ce qu\'elles soient dorées. Égoutte sur du papier absorbant et laisse refroidir.',
          'Mélange le poulet avec les deux choux, le brocoli, les oignons nouveaux, la coriandre et le sésame.',
          'Ajoute la sauce, mélange légèrement et dépose les échalotes croustillantes par-dessus. Sers tout de suite.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Sesame oil', 'Sesamolie', 'Huile de sésame', 2, 'el'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 2, 'el'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 2, 'el'),
      ing('Garlic powder', 'Lookpoeder', 'Ail en poudre', 0.25, 'kl'),
      ing('Onion powder', 'Uienpoeder', 'Poudre d\'oignon', 0.25, 'kl'),
      ing('Ground ginger', 'Gemberpoeder', 'Gingembre moulu', 0.25, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', 0.25, 'kl'),
      ing('Shallot', 'Sjalot', 'Échalote', 1, 'st.'),
      ing('Avocado oil', 'Avocado-olie', 'Huile d\'avocat', 250, 'ml'),
      ing('Cooked chicken', 'Gebakken kip', 'Poulet cuit', 280, 'g'),
      ing('Green cabbage', 'Groene kool', 'Chou vert', 300, 'g'),
      ing('Red cabbage', 'Rode kool', 'Chou rouge', 90, 'g'),
      ing('Broccoli', 'Broccoli', 'Brocoli', 90, 'g'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 3, 'st.'),
      ing('Coriander', 'Koriander', 'Coriandre', 10, 'g'),
      ing('Sesame seeds', 'Sesamzaad', 'Graines de sésame', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'mediterranean-buddha-bowl',
    prepTime: '15 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['main'],
    translations: {
      en: {
        title: 'Mediterranean Buddha Bowl',
        subtitle: 'Quinoa, soft courgette and a spiced tahini dressing',
        description: 'A bowl in three parts — quinoa, oregano courgette and a crunchy salad of pepper, cucumber, olives and tomato — with a lemony tahini dressing over the top.',
        instructions: [
          'Heat the oil in a frying pan over medium-low heat and cook the courgette with the oregano for about 15 minutes, until tender. Season and set aside.',
          'Toss the greens with the red pepper, cucumber, olives and tomatoes.',
          'Whisk the tahini, water and lemon juice, then whisk in a good pinch each of cumin, coriander, paprika, chilli powder and garlic powder. Season.',
          'Arrange the quinoa, courgette and salad side by side in a bowl, scatter over parsley and chilli flakes, and serve the dressing alongside.'
        ]
      },
      nl: {
        title: 'Mediterrane buddha bowl',
        subtitle: 'Quinoa, zachte courgette en een gekruide tahindressing',
        description: 'Een bowl in drie delen — quinoa, courgette met oregano en een knapperige salade van paprika, komkommer, olijven en tomaat — met een frisse tahindressing erover.',
        instructions: [
          'Verhit de olie in een pan op middellaag vuur en bak de courgette met de oregano zo\'n 15 minuten, tot ze zacht is. Kruid en zet opzij.',
          'Meng het groen met de rode paprika, komkommer, olijven en tomaatjes.',
          'Klop de tahin, het water en citroensap los en klop er een flinke snuif komijn, koriander, paprikapoeder, chilipoeder en lookpoeder door. Kruid.',
          'Schik de quinoa, courgette en salade naast elkaar in een kom, strooi er peterselie en chilivlokken over en zet de dressing erbij.'
        ]
      },
      fr: {
        title: 'Bowl méditerranéen',
        subtitle: 'Quinoa, courgette fondante et sauce tahini épicée',
        description: 'Un bol en trois parties — quinoa, courgette à l\'origan et une salade croquante de poivron, concombre, olives et tomate — avec une sauce tahini citronnée par-dessus.',
        instructions: [
          'Chauffe l\'huile dans une poêle à feu moyen-doux et cuis la courgette avec l\'origan une quinzaine de minutes, jusqu\'à ce qu\'elle soit tendre. Assaisonne et réserve.',
          'Mélange la verdure avec le poivron rouge, le concombre, les olives et les tomates.',
          'Fouette le tahini, l\'eau et le jus de citron, puis ajoute une bonne pincée de cumin, de coriandre, de paprika, de piment et d\'ail en poudre. Assaisonne.',
          'Dispose le quinoa, la courgette et la salade côte à côte dans un bol, parsème de persil et de piment, et sers la sauce à côté.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Zucchini', 'Courgette', 'Courgette', 1, 'st.'),
      ing('Dried oregano', 'Gedroogde oregano', 'Origan séché', 0.25, 'kl'),
      ing('Cooked quinoa', 'Gekookte quinoa', 'Quinoa cuit', 185, 'g'),
      ing('Spinach', 'Spinazie', 'Épinards', 60, 'g'),
      ing('Red bell pepper', 'Rode paprika', 'Poivron rouge', 0.25, 'st.'),
      ing('Cucumber', 'Komkommer', 'Concombre', 0.25, 'st.'),
      ing('Black olives', 'Zwarte olijven', 'Olives noires', 35, 'g'),
      ing('Cherry tomatoes', 'Kerstomaatjes', 'Tomates cerises', 6, 'st.'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'el'),
      ing('Tahini', 'Tahin', 'Tahini', 60, 'g'),
      ing('Water', 'Water', 'Eau', 60, 'ml'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 2, 'el'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 1, 'pinch'),
      ing('Ground coriander', 'Korianderpoeder', 'Coriandre moulue', 1, 'pinch'),
      ing('Paprika', 'Paprikapoeder', 'Paprika', 1, 'pinch'),
      ing('Chili powder', 'Chilipoeder', 'Piment en poudre', 1, 'pinch'),
      ing('Garlic powder', 'Lookpoeder', 'Ail en poudre', 1, 'pinch'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 1, 'pinch')
    ]
  },

  {
    slug: 'parchment-baked-lemon-salmon-and-vegetables',
    prepTime: '15 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['main'],
    translations: {
      en: {
        title: 'Salmon en Papillote',
        subtitle: 'Lemon salmon steamed in a paper parcel',
        description: 'Salmon on a bed of courgette and spring onion, sealed in baking paper with lemon zest and olive oil, so it steams in its own juices. Open it at the table.',
        instructions: [
          'Heat the oven to 200 °C. Fold a 30 × 38 cm sheet of baking paper in half and open it out again.',
          'Pile the courgette and spring onion on one side of the fold, season, and add half the lemon zest and oil.',
          'Lay the salmon on top and season it with the rest of the zest and oil.',
          'Fold the paper over and crimp the edges tightly into a sealed half-moon.',
          'Bake on a tray for 12–15 minutes, until the parcel puffs up. Open it, add lemon slices and dill, and eat straight away.'
        ]
      },
      nl: {
        title: 'Zalm in papillot',
        subtitle: 'Citroenzalm gestoomd in een pakketje papier',
        description: 'Zalm op een bedje van courgette en lente-ui, met citroenzeste en olijfolie dichtgevouwen in bakpapier, zodat hij in zijn eigen sap stoomt. Open het aan tafel.',
        instructions: [
          'Verwarm de oven voor op 200 °C. Vouw een vel bakpapier van 30 × 38 cm dubbel en vouw het weer open.',
          'Leg de courgette en lente-ui aan één kant van de vouw, kruid en voeg de helft van de citroenzeste en olie toe.',
          'Leg de zalm erop en kruid met de rest van de zeste en olie.',
          'Vouw het papier dicht en plooi de randen stevig tot een gesloten halve maan.',
          'Bak 12–15 minuten op een bakplaat, tot het pakketje opbolt. Open het, leg er schijfjes citroen en dille op en eet meteen.'
        ]
      },
      fr: {
        title: 'Saumon en papillote',
        subtitle: 'Un saumon au citron cuit dans un paquet de papier',
        description: 'Du saumon sur un lit de courgette et d\'oignon nouveau, enfermé dans du papier cuisson avec du zeste de citron et de l\'huile d\'olive, pour qu\'il cuise dans son propre jus. À ouvrir à table.',
        instructions: [
          'Préchauffe le four à 200 °C. Plie en deux une feuille de papier cuisson de 30 × 38 cm et rouvre-la.',
          'Dépose la courgette et l\'oignon nouveau d\'un côté du pli, assaisonne et ajoute la moitié du zeste et de l\'huile.',
          'Pose le saumon dessus et assaisonne avec le reste du zeste et de l\'huile.',
          'Replie le papier et pince bien les bords pour fermer une demi-lune.',
          'Enfourne sur une plaque 12–15 minutes, jusqu\'à ce que la papillote gonfle. Ouvre-la, ajoute des rondelles de citron et de l\'aneth, et mange aussitôt.'
        ]
      }
    },
    ingredients: [
      ing('Zucchini', 'Courgette', 'Courgette', 1, 'st.'),
      ing('Spring onion', 'Lente-ui', 'Oignon nouveau', 1, 'st.'),
      ing('Salmon fillet', 'Zalmfilet', 'Filet de saumon', 115, 'g'),
      ing('Lemon zest', 'Citroenzeste', 'Zeste de citron', 1, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'kl'),
      ing('Lemon', 'Citroen', 'Citron', 0.5, 'st.'),
      ing('Dill', 'Dille', 'Aneth', 1, 'sprig'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'vegan-cauliflower-curry',
    prepTime: '10 mins',
    cookTime: '35 mins',
    difficulty: diff.easy,
    servings: 6,
    category: ['main'],
    translations: {
      en: {
        title: 'Cauliflower & Spinach Curry',
        subtitle: 'A big vegan pot for the week',
        description: 'Cauliflower, courgette and tomato simmered with ginger, cumin and turmeric, with spinach stirred in at the end and toasted almonds on top. Makes enough for six.',
        instructions: [
          'Heat the oil over medium heat and soften the onion and celery for about 5 minutes. Add the garlic and cook 5 minutes more.',
          'Stir in the coriander, cumin, ginger, turmeric and chilli flakes for a minute.',
          'Add the cauliflower, courgette, tomatoes, salt and stock. Bring to the boil, then cover and simmer on medium-low for about 20 minutes.',
          'Take the lid off, stir in the spinach and let it wilt for 3–4 minutes.',
          'Serve with toasted almonds, coriander, lemon wedges and a spoon of yogurt if you like.'
        ]
      },
      nl: {
        title: 'Curry met bloemkool en spinazie',
        subtitle: 'Een grote vegan pot voor de hele week',
        description: 'Bloemkool, courgette en tomaat gesudderd met gember, komijn en kurkuma, met spinazie die er op het einde door gaat en geroosterde amandelen erop. Genoeg voor zes.',
        instructions: [
          'Verhit de olie op middelhoog vuur en stoof de ui en selder zo\'n 5 minuten zacht. Voeg de look toe en bak nog 5 minuten.',
          'Roer de koriander, komijn, gember, kurkuma en chilivlokken er een minuutje door.',
          'Voeg de bloemkool, courgette, tomaten, het zout en de bouillon toe. Breng aan de kook en laat dan met deksel zo\'n 20 minuten sudderen op middellaag vuur.',
          'Haal het deksel eraf, roer de spinazie erdoor en laat ze 3–4 minuten slinken.',
          'Dien op met geroosterde amandelen, koriander, partjes citroen en eventueel een lepel yoghurt.'
        ]
      },
      fr: {
        title: 'Curry de chou-fleur aux épinards',
        subtitle: 'Une grande marmite vegan pour la semaine',
        description: 'Chou-fleur, courgette et tomate mijotés avec du gingembre, du cumin et du curcuma, des épinards ajoutés à la fin et des amandes grillées par-dessus. De quoi nourrir six personnes.',
        instructions: [
          'Chauffe l\'huile à feu moyen et fais fondre l\'oignon et le céleri environ 5 minutes. Ajoute l\'ail et poursuis 5 minutes.',
          'Ajoute la coriandre, le cumin, le gingembre, le curcuma et le piment et remue une minute.',
          'Ajoute le chou-fleur, la courgette, les tomates, le sel et le bouillon. Porte à ébullition, puis couvre et laisse mijoter à feu moyen-doux une vingtaine de minutes.',
          'Retire le couvercle, ajoute les épinards et laisse-les tomber 3–4 minutes.',
          'Sers avec des amandes grillées, de la coriandre, des quartiers de citron et une cuillère de yaourt si tu veux.'
        ]
      }
    },
    ingredients: [
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 2, 'el'),
      ing('Onion', 'Ui', 'Oignon', 0.5, 'st.'),
      ing('Celery stalks', 'Bladselder', 'Céleri branche', 2, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Ground coriander', 'Korianderpoeder', 'Coriandre moulue', 0.5, 'kl'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 0.5, 'kl'),
      ing('Ground ginger', 'Gemberpoeder', 'Gingembre moulu', 0.5, 'kl'),
      ing('Turmeric', 'Kurkuma', 'Curcuma', 0.5, 'kl'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 0.25, 'kl'),
      ing('Cauliflower', 'Bloemkool', 'Chou-fleur', 680, 'g'),
      ing('Zucchini', 'Courgette', 'Courgette', 1, 'st.'),
      ing('Tomatoes', 'Tomaten', 'Tomates', 3, 'st.'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Vegetable broth', 'Groentebouillon', 'Bouillon de légumes', 480, 'ml'),
      ing('Baby spinach', 'Jonge spinazie', 'Pousses d\'épinards', 60, 'g'),
      ing('Flaked almonds', 'Amandelschilfers', 'Amandes effilées', 2, 'el'),
      ing('Coriander', 'Koriander', 'Coriandre', 2, 'el'),
      ing('Lemon', 'Citroen', 'Citron', 1, 'st.')
    ]
  },

  {
    slug: 'chicken-and-zucchini-noodle-salad',
    prepTime: '20 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Lemon Chicken with Courgette Noodles',
        subtitle: 'Raw courgetti, cherry tomatoes and pine nuts',
        description: 'Pan-fried lemon and oregano chicken sliced over raw courgette noodles with cherry tomatoes, basil and pine nuts. Light, quick and no pasta in sight.',
        instructions: [
          'Flatten the chicken to about 1 cm and season it with half the lemon juice, salt, pepper and the oregano.',
          'Heat the oil over medium-high heat and fry the chicken 3–4 minutes a side, until cooked through. Keep it warm on a plate.',
          'Spiralise the courgette into a large bowl and toss with the tomatoes, pine nuts and basil.',
          'Slice the chicken into strips, add it with the rest of the lemon juice, season, toss and serve.'
        ]
      },
      nl: {
        title: 'Citroenkip met courgettinoedels',
        subtitle: 'Rauwe courgetti, kerstomaatjes en pijnboompitten',
        description: 'Gebakken kip met citroen en oregano in reepjes op rauwe courgettinoedels met kerstomaatjes, basilicum en pijnboompitten. Licht, snel en geen pasta te bekennen.',
        instructions: [
          'Plet de kip tot zo\'n 1 cm dik en kruid met de helft van het citroensap, zout, peper en de oregano.',
          'Verhit de olie op middelhoog tot hoog vuur en bak de kip 3–4 minuten per kant, tot ze gaar is. Hou warm op een bord.',
          'Spiraliseer de courgette in een grote kom en meng met de tomaatjes, pijnboompitten en basilicum.',
          'Snijd de kip in reepjes, voeg toe met de rest van het citroensap, kruid, meng en dien op.'
        ]
      },
      fr: {
        title: 'Poulet au citron et spaghettis de courgette',
        subtitle: 'Courgette crue, tomates cerises et pignons',
        description: 'Du poulet poêlé au citron et à l\'origan, tranché sur des spaghettis de courgette crue avec des tomates cerises, du basilic et des pignons. Léger, rapide, et pas de pâtes en vue.',
        instructions: [
          'Aplatis le poulet à environ 1 cm et assaisonne-le avec la moitié du jus de citron, du sel, du poivre et l\'origan.',
          'Chauffe l\'huile à feu moyen-vif et cuis le poulet 3–4 minutes par face, jusqu\'à ce qu\'il soit cuit. Garde-le au chaud sur une assiette.',
          'Taille la courgette en spirales dans un grand saladier et mélange avec les tomates, les pignons et le basilic.',
          'Tranche le poulet en lanières, ajoute-le avec le reste du jus de citron, assaisonne, mélange et sers.'
        ]
      }
    },
    ingredients: [
      ing('Chicken breast', 'Kipfilet', 'Blanc de poulet', 1, 'st.'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 3, 'el'),
      ing('Dried oregano', 'Gedroogde oregano', 'Origan séché', 1, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Zucchini', 'Courgette', 'Courgette', 1, 'st.'),
      ing('Cherry tomatoes', 'Kerstomaatjes', 'Tomates cerises', 75, 'g'),
      ing('Pine nuts', 'Pijnboompitten', 'Pignons de pin', 2, 'el'),
      ing('Basil', 'Basilicum', 'Basilic', 2, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'fish-tacos',
    prepTime: '10 mins',
    cookTime: '35 mins',
    difficulty: diff.medium,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Fish Tacos with Lime Crema',
        subtitle: 'Grain-free tortillas, crispy fish, crunchy cabbage',
        description: 'Oven-crisped white fish in soft coconut-and-arrowroot tortillas, piled with cabbage, avocado and coriander and a tangy lime yogurt. Taco night without the corn.',
        instructions: [
          'Heat the oven to 200 °C and oil a baking tray with a tablespoon of oil. Mix the 2 tablespoons each of coconut flour and arrowroot with salt, pepper and paprika, coat the fish in it and lay it on the tray. Drizzle with the rest of the oil and bake for about 20 minutes, turning halfway.',
          'For the tortillas, whisk the remaining coconut flour and arrowroot with the flaxseed and salt, then whisk in the milk and eggs. Let the batter rest for a few minutes.',
          'Heat half a teaspoon of oil in a frying pan over medium heat, pour in about 4 tablespoons of batter and spread it to 15 cm. Cook for about 2 minutes a side. Repeat to make about eight.',
          'Whisk the yogurt with the lime juice, salt, cumin and paprika.',
          'Fill the tortillas with fish, cabbage, avocado, spring onion and coriander, spoon over the crema and serve with lime wedges.'
        ]
      },
      nl: {
        title: 'Vistaco\'s met limoencrème',
        subtitle: 'Graanvrije tortilla\'s, krokante vis, knapperige kool',
        description: 'Krokant gebakken witte vis in zachte tortilla\'s van kokos en pijlwortel, met kool, avocado en koriander en een frisse limoenyoghurt. Tacoavond zonder mais.',
        instructions: [
          'Verwarm de oven voor op 200 °C en vet een bakplaat in met een eetlepel olie. Meng de 2 eetlepels kokosmeel en pijlwortel met zout, peper en paprikapoeder, wentel de vis erin en leg hem op de plaat. Sprenkel de rest van de olie erover en bak zo\'n 20 minuten, halverwege omdraaien.',
          'Voor de tortilla\'s klop je de rest van het kokosmeel en de pijlwortel met het lijnzaad en zout, en dan de melk en eieren erdoor. Laat het beslag een paar minuten rusten.',
          'Verhit een halve theelepel olie in een pan op middelhoog vuur, giet er zo\'n 4 eetlepels beslag in en strijk uit tot 15 cm. Bak zo\'n 2 minuten per kant. Herhaal tot je er een stuk of acht hebt.',
          'Klop de yoghurt met het limoensap, zout, komijn en paprikapoeder.',
          'Vul de tortilla\'s met vis, kool, avocado, lente-ui en koriander, schep er de crème over en dien op met partjes limoen.'
        ]
      },
      fr: {
        title: 'Tacos de poisson, crème au citron vert',
        subtitle: 'Tortillas sans céréales, poisson croustillant, chou croquant',
        description: 'Du poisson blanc croustillant au four dans des tortillas souples à la coco et à l\'arrow-root, garni de chou, d\'avocat et de coriandre et d\'un yaourt acidulé au citron vert. Une soirée tacos sans maïs.',
        instructions: [
          'Préchauffe le four à 200 °C et huile une plaque avec une cuillère à soupe d\'huile. Mélange les 2 cuillères à soupe de farine de coco et d\'arrow-root avec le sel, le poivre et le paprika, enrobe le poisson et pose-le sur la plaque. Arrose du reste de l\'huile et enfourne une vingtaine de minutes en retournant à mi-cuisson.',
          'Pour les tortillas, fouette le reste de la farine de coco et de l\'arrow-root avec le lin et le sel, puis ajoute le lait et les œufs. Laisse reposer la pâte quelques minutes.',
          'Chauffe une demi-cuillère à café d\'huile dans une poêle à feu moyen, verse environ 4 cuillères à soupe de pâte et étale sur 15 cm. Cuis environ 2 minutes par face. Recommence pour en faire environ huit.',
          'Fouette le yaourt avec le jus de citron vert, le sel, le cumin et le paprika.',
          'Garnis les tortillas de poisson, de chou, d\'avocat, d\'oignon nouveau et de coriandre, nappe de crème et sers avec des quartiers de citron vert.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 5, 'el'),
      ing('White fish fillets', 'Witte visfilets', 'Filets de poisson blanc', 225, 'g'),
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 45, 'g'),
      ing('Arrowroot powder', 'Pijlwortelpoeder', 'Arrow-root', 150, 'g'),
      ing('Paprika', 'Paprikapoeder', 'Paprika', 1, 'pinch'),
      ing('Flaxseed meal', 'Gemalen lijnzaad', 'Graines de lin moulues', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Almond milk', 'Amandelmelk', 'Lait d\'amande', 300, 'ml'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Red cabbage', 'Rode kool', 'Chou rouge', 100, 'g'),
      ing('Avocado', 'Avocado', 'Avocat', 1, 'st.'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 2, 'st.'),
      ing('Coriander', 'Koriander', 'Coriandre', 2, 'el'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 240, 'ml'),
      ing('Lime', 'Limoen', 'Citron vert', 1, 'st.'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 1, 'pinch'),
      ing('Pepper', 'Peper', 'Poivre', 1, 'pinch')
    ]
  },

  {
    slug: 'curried-chicken-bowl',
    prepTime: '20 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Curried Chicken Salad Bowl',
        subtitle: 'A turmeric coconut dressing over quinoa and spinach',
        description: 'Leftover chicken turned into a crunchy curried salad with celery, apple, red onion and almonds, served on spinach and quinoa. Keeps 3–4 days for lunches.',
        instructions: [
          'Whisk the olive oil, coconut milk, lemon juice, garlic, turmeric, ginger and stevia, and season.',
          'Mix the chicken with the celery, apple, red onion and almonds.',
          'Pour the dressing over and toss.',
          'Make a bed of spinach and quinoa, pile the chicken salad on top and finish with coriander.'
        ]
      },
      nl: {
        title: 'Kipcurrysalade in een bowl',
        subtitle: 'Een kokosdressing met kurkuma op quinoa en spinazie',
        description: 'Restjes kip omgetoverd tot een knapperige currysalade met selder, appel, rode ui en amandelen, op spinazie en quinoa. Blijft 3–4 dagen goed voor de lunch.',
        instructions: [
          'Klop de olijfolie, kokosmelk, het citroensap, de look, kurkuma, gember en stevia los en kruid.',
          'Meng de kip met de selder, appel, rode ui en amandelen.',
          'Giet de dressing erover en meng.',
          'Maak een bedje van spinazie en quinoa, schep de kipsalade erop en werk af met koriander.'
        ]
      },
      fr: {
        title: 'Bol de salade de poulet au curry',
        subtitle: 'Une sauce coco au curcuma sur quinoa et épinards',
        description: 'Un reste de poulet transformé en salade croquante au curry avec céleri, pomme, oignon rouge et amandes, servie sur des épinards et du quinoa. Se garde 3–4 jours pour les lunchs.',
        instructions: [
          'Fouette l\'huile d\'olive, le lait de coco, le jus de citron, l\'ail, le curcuma, le gingembre et la stévia, et assaisonne.',
          'Mélange le poulet avec le céleri, la pomme, l\'oignon rouge et les amandes.',
          'Verse la sauce et mélange.',
          'Fais un lit d\'épinards et de quinoa, pose la salade de poulet dessus et termine avec de la coriandre.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 2, 'el'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Turmeric', 'Kurkuma', 'Curcuma', 0.5, 'kl'),
      ing('Ground ginger', 'Gemberpoeder', 'Gingembre moulu', 0.5, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', 0.25, 'kl'),
      ing('Cooked chicken', 'Gebakken kip', 'Poulet cuit', 210, 'g'),
      ing('Celery stalks', 'Bladselder', 'Céleri branche', 1, 'st.'),
      ing('Granny Smith apple', 'Granny Smith-appel', 'Pomme Granny Smith', 0.5, 'st.'),
      ing('Red onion', 'Rode ui', 'Oignon rouge', 2, 'el'),
      ing('Flaked almonds', 'Amandelschilfers', 'Amandes effilées', 2, 'el'),
      ing('Spinach', 'Spinazie', 'Épinards', 30, 'g'),
      ing('Cooked quinoa', 'Gekookte quinoa', 'Quinoa cuit', 185, 'g'),
      ing('Coriander', 'Koriander', 'Coriandre', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'mashed-cauliflower-with-rosemary',
    prepTime: '10 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 3,
    category: ['main'],
    translations: {
      en: {
        title: 'Rosemary Cauliflower Mash',
        subtitle: 'The side dish that replaces puree',
        description: 'Cauliflower simmered in stock until soft and blended with rosemary and garlic. Put it next to a stoofvlees or a piece of fish wherever you would serve mash.',
        instructions: [
          'Put the cauliflower in a pan with the stock, cover and boil for about 15 minutes, until soft.',
          'Tip it into a blender with the rosemary, garlic, salt and pepper.',
          'Blend on full power, scraping down the sides, until completely smooth.'
        ]
      },
      nl: {
        title: 'Bloemkoolpuree met rozemarijn',
        subtitle: 'Het bijgerecht dat puree vervangt',
        description: 'Bloemkool zacht gekookt in bouillon en gemixt met rozemarijn en look. Zet het naast een stoofvlees of een stuk vis, overal waar je puree zou geven.',
        instructions: [
          'Doe de bloemkool met de bouillon in een pan, leg er een deksel op en kook zo\'n 15 minuten, tot hij zacht is.',
          'Doe alles in een blender met de rozemarijn, look, peper en zout.',
          'Mix op volle kracht en schraap de wanden af, tot het helemaal glad is.'
        ]
      },
      fr: {
        title: 'Purée de chou-fleur au romarin',
        subtitle: 'L\'accompagnement qui remplace la purée',
        description: 'Du chou-fleur cuit dans du bouillon jusqu\'à être tendre, mixé avec du romarin et de l\'ail. À servir à côté d\'une carbonade ou d\'un poisson, partout où tu mettrais de la purée.',
        instructions: [
          'Mets le chou-fleur dans une casserole avec le bouillon, couvre et fais bouillir une quinzaine de minutes, jusqu\'à ce qu\'il soit tendre.',
          'Verse le tout dans un mixeur avec le romarin, l\'ail, le sel et le poivre.',
          'Mixe à pleine puissance en raclant les parois, jusqu\'à ce que ce soit parfaitement lisse.'
        ]
      }
    },
    ingredients: [
      ing('Cauliflower', 'Bloemkool', 'Chou-fleur', 1, 'head'),
      ing('Rosemary', 'Rozemarijn', 'Romarin', 1, 'el'),
      ing('Chicken broth', 'Kippenbouillon', 'Bouillon de volaille', 360, 'ml'),
      ing('Garlic', 'Look', 'Ail', 3, 'st.'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  }
];
