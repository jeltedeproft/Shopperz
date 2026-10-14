// Candida-diet dishes, batch 3. See candida_recipes.js for how these were made.

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });
const diff = {
  easy: { en: 'Easy', nl: 'Makkelijk', fr: 'Facile' },
  medium: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' }
};

module.exports = [
  {
    slug: 'curried-cauliflower-soup',
    prepTime: '10 mins',
    cookTime: '40 mins',
    difficulty: diff.easy,
    servings: 3,
    category: ['soup'],
    translations: {
      en: {
        title: 'Curried Cauliflower Soup',
        subtitle: 'Roasted cauliflower, turmeric and coconut',
        description: 'Roasting the cauliflower first gives this soup its depth; cumin, ginger and turmeric give it warmth, and coconut milk makes it velvety.',
        instructions: [
          'Heat the oven to 200 °C. Toss the cauliflower with half the oil, salt and pepper, and roast for about 20 minutes until tender and browned. Keep a few pieces back for the top.',
          'Soften the onion in the rest of the oil over medium heat for about 5 minutes. Add the garlic, cumin, ginger and turmeric and stir for a minute.',
          'Add the stock, coconut milk and roasted cauliflower. Bring to the boil, then cover and simmer gently for 20 minutes.',
          'Blend until smooth and season.',
          'Serve with the saved cauliflower, a little diced tomato, basil or coriander, chilli flakes and a squeeze of lime.'
        ]
      },
      nl: {
        title: 'Bloemkoolsoep met curry',
        subtitle: 'Geroosterde bloemkool, kurkuma en kokos',
        description: 'Door de bloemkool eerst te roosteren krijgt deze soep diepgang; komijn, gember en kurkuma maken hem warm, en kokosmelk maakt hem fluweelzacht.',
        instructions: [
          'Verwarm de oven voor op 200 °C. Meng de bloemkool met de helft van de olie, peper en zout en rooster zo\'n 20 minuten tot hij zacht en gekleurd is. Hou een paar stukjes opzij voor bovenop.',
          'Stoof de ui zo\'n 5 minuten zacht in de rest van de olie op middelhoog vuur. Voeg de look, komijn, gember en kurkuma toe en roer een minuutje.',
          'Voeg de bouillon, kokosmelk en geroosterde bloemkool toe. Breng aan de kook, leg er een deksel op en laat 20 minuten zachtjes pruttelen.',
          'Mix glad en breng op smaak.',
          'Dien op met de bewaarde bloemkool, wat blokjes tomaat, basilicum of koriander, chilivlokken en een scheutje limoen.'
        ]
      },
      fr: {
        title: 'Velouté de chou-fleur au curry',
        subtitle: 'Chou-fleur rôti, curcuma et coco',
        description: 'Rôtir d\'abord le chou-fleur donne de la profondeur à cette soupe ; le cumin, le gingembre et le curcuma la réchauffent, et le lait de coco la rend veloutée.',
        instructions: [
          'Préchauffe le four à 200 °C. Enrobe le chou-fleur de la moitié de l\'huile, de sel et de poivre, et rôtis une vingtaine de minutes jusqu\'à ce qu\'il soit tendre et doré. Garde quelques morceaux pour le dessus.',
          'Fais fondre l\'oignon dans le reste de l\'huile à feu moyen environ 5 minutes. Ajoute l\'ail, le cumin, le gingembre et le curcuma et remue une minute.',
          'Ajoute le bouillon, le lait de coco et le chou-fleur rôti. Porte à ébullition, couvre et laisse mijoter doucement 20 minutes.',
          'Mixe jusqu\'à ce que ce soit lisse et rectifie l\'assaisonnement.',
          'Sers avec le chou-fleur gardé, quelques dés de tomate, du basilic ou de la coriandre, du piment en flocons et un filet de citron vert.'
        ]
      }
    },
    ingredients: [
      ing('Cauliflower', 'Bloemkool', 'Chou-fleur', 450, 'g'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 4, 'el'),
      ing('Onion', 'Ui', 'Oignon', 0.5, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 0.5, 'kl'),
      ing('Ground ginger', 'Gemberpoeder', 'Gingembre moulu', 0.5, 'kl'),
      ing('Turmeric', 'Kurkuma', 'Curcuma', 0.5, 'kl'),
      ing('Vegetable broth', 'Groentebouillon', 'Bouillon de légumes', 480, 'ml'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 120, 'ml'),
      ing('Tomato', 'Tomaat', 'Tomate', 1, 'st.'),
      ing('Coriander', 'Koriander', 'Coriandre', 1, 'el'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 1, 'pinch'),
      ing('Lime', 'Limoen', 'Citron vert', 1, 'st.'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'toasted-coconut-and-lime-salmon',
    prepTime: '40 mins',
    cookTime: '8 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Coconut & Lime Salmon',
        subtitle: 'Marinated, roasted hot and topped with toasted coconut',
        description: 'Salmon soaked for half an hour in lime and coconut aminos, roasted fast at high heat and finished with a crust of golden coconut.',
        instructions: [
          'Whisk the lime juice, coconut aminos, chilli powder and salt in a shallow dish. Lay the salmon in it, skin side up, and leave for 30 minutes.',
          'Heat the oven to 220 °C and brush a baking tray with the coconut oil.',
          'Roast the salmon skin side up for 5 minutes.',
          'Turn the fillets, sprinkle the coconut over them and roast for another 2–3 minutes, until the coconut is golden.',
          'Serve with coriander and lime slices.'
        ]
      },
      nl: {
        title: 'Zalm met kokos en limoen',
        subtitle: 'Gemarineerd, heet geroosterd en met geroosterde kokos erop',
        description: 'Zalm een half uur gemarineerd in limoen en kokosaminos, snel geroosterd op hoge temperatuur en afgewerkt met een korstje goudbruine kokos.',
        instructions: [
          'Klop het limoensap, de kokosaminos, het chilipoeder en zout los in een ondiepe schaal. Leg de zalm erin met het vel naar boven en laat 30 minuten staan.',
          'Verwarm de oven voor op 220 °C en bestrijk een bakplaat met de kokosolie.',
          'Rooster de zalm 5 minuten met het vel naar boven.',
          'Draai de filets om, strooi de kokos erover en rooster nog 2–3 minuten, tot de kokos goudbruin is.',
          'Dien op met koriander en schijfjes limoen.'
        ]
      },
      fr: {
        title: 'Saumon coco et citron vert',
        subtitle: 'Mariné, rôti à four chaud et couvert de coco grillée',
        description: 'Du saumon mariné une demi-heure dans le citron vert et les aminos de coco, rôti vite à haute température et fini d\'une croûte de coco dorée.',
        instructions: [
          'Fouette le jus de citron vert, les aminos de coco, le piment en poudre et le sel dans un plat creux. Pose le saumon dedans, peau vers le haut, et laisse 30 minutes.',
          'Préchauffe le four à 220 °C et badigeonne une plaque d\'huile de coco.',
          'Rôtis le saumon 5 minutes, peau vers le haut.',
          'Retourne les pavés, parsème de coco et enfourne encore 2–3 minutes, jusqu\'à ce que la coco soit dorée.',
          'Sers avec de la coriandre et des rondelles de citron vert.'
        ]
      }
    },
    ingredients: [
      ing('Lime juice', 'Limoensap', 'Jus de citron vert', 2, 'el'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 2, 'el'),
      ing('Chili powder', 'Chilipoeder', 'Piment en poudre', 0.25, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 1, 'el'),
      ing('Salmon fillets', 'Zalmfilets', 'Pavés de saumon', 2, 'st.'),
      ing('Desiccated coconut', 'Geraspte kokos', 'Noix de coco râpée', 2, 'el'),
      ing('Coriander', 'Koriander', 'Coriandre', 1, 'el'),
      ing('Lime', 'Limoen', 'Citron vert', 1, 'st.')
    ]
  },

  {
    slug: 'arugula-and-tomato-vinaigrette',
    prepTime: '20 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Rocket Salad with Tomato Vinaigrette',
        subtitle: 'A dressing blended from the tomatoes themselves',
        description: 'Rocket, cucumber and cherry tomatoes with avocado on top, dressed with a vinaigrette that gets its body from blended tomato. The dressing keeps for five days.',
        instructions: [
          'Blend the chopped cherry tomatoes, oil, apple cider vinegar, coconut aminos, garlic and oregano until smooth. Season with salt and pepper.',
          'Toss the rocket with the cucumber and the halved tomatoes.',
          'Drizzle over some vinaigrette and lay the avocado on top. Serve straight away.',
          'Keep the rest of the dressing in the fridge for up to five days and shake it before using.'
        ]
      },
      nl: {
        title: 'Rucolasalade met tomatenvinaigrette',
        subtitle: 'Een dressing gemixt van de tomaten zelf',
        description: 'Rucola, komkommer en kerstomaatjes met avocado erop, met een vinaigrette die zijn body haalt uit gemixte tomaat. De dressing blijft vijf dagen goed.',
        instructions: [
          'Mix de gehakte kerstomaatjes, olie, appelciderazijn, kokosaminos, look en oregano glad. Breng op smaak met peper en zout.',
          'Meng de rucola met de komkommer en de gehalveerde tomaatjes.',
          'Sprenkel er wat vinaigrette over en leg de avocado erop. Meteen opdienen.',
          'Bewaar de rest van de dressing tot vijf dagen in de koelkast en schud voor gebruik.'
        ]
      },
      fr: {
        title: 'Salade de roquette, vinaigrette à la tomate',
        subtitle: 'Une vinaigrette mixée avec les tomates elles-mêmes',
        description: 'Roquette, concombre et tomates cerises avec de l\'avocat par-dessus, assaisonnés d\'une vinaigrette qui tire sa texture de la tomate mixée. La vinaigrette se garde cinq jours.',
        instructions: [
          'Mixe les tomates cerises hachées, l\'huile, le vinaigre de cidre, les aminos de coco, l\'ail et l\'origan jusqu\'à ce que ce soit lisse. Sale et poivre.',
          'Mélange la roquette avec le concombre et les tomates coupées en deux.',
          'Arrose d\'un peu de vinaigrette et dépose l\'avocat par-dessus. Sers tout de suite.',
          'Garde le reste de la vinaigrette jusqu\'à cinq jours au frigo et secoue avant usage.'
        ]
      }
    },
    ingredients: [
      ing('Cherry tomatoes', 'Kerstomaatjes', 'Tomates cerises', 230, 'g'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 120, 'ml'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 60, 'ml'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 2, 'el'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Dried oregano', 'Gedroogde oregano', 'Origan séché', 1, 'kl'),
      ing('Arugula', 'Rucola', 'Roquette', 80, 'g'),
      ing('Cucumber', 'Komkommer', 'Concombre', 1, 'st.'),
      ing('Avocado', 'Avocado', 'Avocat', 1, 'st.'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'almond-crusted-chicken-fingers',
    prepTime: '15 mins',
    cookTime: '25 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Almond-Crusted Chicken Fingers',
        subtitle: 'Crisp from the oven, with a yogurt and chive dip',
        description: 'Chicken strips in a crumb of ground almond, coconut, flax and paprika, baked until golden. The breadcrumb-free version that children happily eat too.',
        instructions: [
          'Heat the oven to 190 °C and line a baking tray with baking paper.',
          'Mix the ground almonds, cayenne, coconut, garlic powder, flaxseed and paprika, and season.',
          'Dip each strip of chicken in the beaten egg, then roll it in the almond mix and shake off the excess. Lay them on the tray.',
          'Bake for about 25 minutes, turning once, until golden and crisp.',
          'Stir the yogurt with the garlic powder, chives, lime zest and juice, season, and serve alongside.'
        ]
      },
      nl: {
        title: 'Kipreepjes in amandelkorst',
        subtitle: 'Krokant uit de oven, met een dip van yoghurt en bieslook',
        description: 'Reepjes kip in een korst van gemalen amandel, kokos, lijnzaad en paprika, goudbruin gebakken. De versie zonder paneermeel die kinderen ook graag eten.',
        instructions: [
          'Verwarm de oven voor op 190 °C en bekleed een bakplaat met bakpapier.',
          'Meng de gemalen amandelen, cayennepeper, kokos, lookpoeder, lijnzaad en paprikapoeder, en kruid.',
          'Haal elk reepje kip door het losgeklopte ei, rol het dan door het amandelmengsel en schud het teveel eraf. Leg ze op de plaat.',
          'Bak zo\'n 25 minuten, één keer omdraaien, tot ze goudbruin en krokant zijn.',
          'Roer de yoghurt met het lookpoeder, de bieslook, limoenzeste en -sap, kruid en dien erbij op.'
        ]
      },
      fr: {
        title: 'Aiguillettes de poulet en croûte d\'amande',
        subtitle: 'Croustillantes au four, avec une sauce yaourt-ciboulette',
        description: 'Des lanières de poulet dans une chapelure d\'amande, de coco, de lin et de paprika, cuites jusqu\'à être dorées. La version sans chapelure que les enfants mangent volontiers aussi.',
        instructions: [
          'Préchauffe le four à 190 °C et garnis une plaque de papier cuisson.',
          'Mélange la poudre d\'amande, le cayenne, la coco, l\'ail en poudre, le lin et le paprika, et assaisonne.',
          'Trempe chaque lanière de poulet dans l\'œuf battu, roule-la dans le mélange aux amandes et secoue l\'excédent. Dispose-les sur la plaque.',
          'Enfourne environ 25 minutes en les retournant une fois, jusqu\'à ce qu\'elles soient dorées et croustillantes.',
          'Mélange le yaourt avec l\'ail en poudre, la ciboulette, le zeste et le jus de citron vert, assaisonne et sers à côté.'
        ]
      }
    },
    ingredients: [
      ing('Chicken breasts', 'Kipfilets', 'Blancs de poulet', 680, 'g'),
      ing('Ground almonds', 'Gemalen amandelen', 'Poudre d\'amande', 100, 'g'),
      ing('Cayenne pepper', 'Cayennepeper', 'Piment de Cayenne', 0.5, 'kl'),
      ing('Desiccated coconut', 'Geraspte kokos', 'Noix de coco râpée', 20, 'g'),
      ing('Garlic powder', 'Lookpoeder', 'Ail en poudre', 1.5, 'kl'),
      ing('Flaxseed meal', 'Gemalen lijnzaad', 'Graines de lin moulues', 2, 'el'),
      ing('Paprika', 'Paprikapoeder', 'Paprika', 1, 'el'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 240, 'ml'),
      ing('Chives', 'Bieslook', 'Ciboulette', 2, 'el'),
      ing('Lime', 'Limoen', 'Citron vert', 1, 'st.'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'rutabaga-and-rosemary-bread',
    prepTime: '45 mins',
    cookTime: '45 mins',
    difficulty: diff.medium,
    servings: 10,
    category: ['snack', 'breakfast'],
    translations: {
      en: {
        title: 'Swede & Rosemary Bread',
        subtitle: 'A moist almond loaf with a secret vegetable',
        description: 'Puréed swede keeps this almond-flour loaf soft for days, and fresh rosemary makes it smell like a bakery. Make the purée ahead and it comes together in minutes.',
        instructions: [
          'For the purée, simmer the swede cubes in salted water for about 30 minutes, until a fork slides in. Drain, mash or blend until smooth and let it cool. You need about 240 g; the rest keeps in the fridge for a few days.',
          'Heat the oven to 160 °C. Oil a loaf tin and line it with baking paper.',
          'Whisk the almond flour, sifted coconut flour, baking soda, salt, pepper and rosemary.',
          'Mix the swede purée with the oil, eggs and vinegar, then stir in the dry ingredients. Spread it in the tin.',
          'Bake for 40–45 minutes, until a skewer comes out clean. Leave it 10 minutes in the tin, then cool completely on a rack before slicing.'
        ]
      },
      nl: {
        title: 'Koolraap-rozemarijnbrood',
        subtitle: 'Een smeuïg amandelbrood met een geheime groente',
        description: 'Koolraappuree houdt dit brood van amandelmeel dagenlang zacht, en verse rozemarijn laat het ruiken als bij de bakker. Maak de puree op voorhand en het staat in een paar minuten klaar.',
        instructions: [
          'Voor de puree laat je de blokjes koolraap zo\'n 30 minuten zachtjes koken in gezouten water, tot een vork er makkelijk in gaat. Giet af, stamp of mix glad en laat afkoelen. Je hebt er zo\'n 240 g van nodig; de rest blijft een paar dagen goed in de koelkast.',
          'Verwarm de oven voor op 160 °C. Vet een cakevorm in en bekleed met bakpapier.',
          'Klop het amandelmeel, het gezeefde kokosmeel, zuiveringszout, zout, peper en rozemarijn door elkaar.',
          'Meng de koolraappuree met de olie, eieren en azijn en roer dan het droge erdoor. Strijk uit in de vorm.',
          'Bak 40–45 minuten, tot een prikker er droog uitkomt. Laat 10 minuten in de vorm staan en dan helemaal afkoelen op een rooster voor je snijdt.'
        ]
      },
      fr: {
        title: 'Pain au rutabaga et au romarin',
        subtitle: 'Un pain moelleux aux amandes, avec un légume secret',
        description: 'La purée de rutabaga garde ce pain à la farine d\'amande moelleux pendant des jours, et le romarin frais lui donne une odeur de boulangerie. Prépare la purée à l\'avance et il se monte en quelques minutes.',
        instructions: [
          'Pour la purée, fais frémir les dés de rutabaga dans de l\'eau salée environ 30 minutes, jusqu\'à ce qu\'une fourchette s\'y enfonce. Égoutte, écrase ou mixe et laisse refroidir. Il t\'en faut environ 240 g ; le reste se garde quelques jours au frigo.',
          'Préchauffe le four à 160 °C. Huile un moule à cake et chemise-le de papier cuisson.',
          'Fouette la farine d\'amande, la farine de coco tamisée, le bicarbonate, le sel, le poivre et le romarin.',
          'Mélange la purée de rutabaga avec l\'huile, les œufs et le vinaigre, puis incorpore le sec. Étale dans le moule.',
          'Enfourne 40–45 minutes, jusqu\'à ce qu\'une pique ressorte sèche. Laisse 10 minutes dans le moule, puis refroidir complètement sur une grille avant de trancher.'
        ]
      }
    },
    ingredients: [
      ing('Rutabaga', 'Koolraap', 'Rutabaga', 680, 'g'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 0.5, 'el'),
      ing('Eggs', 'Eieren', 'Oeufs', 4, 'st.'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 1, 'kl'),
      ing('Almond flour', 'Amandelmeel', 'Farine d\'amande', 300, 'g'),
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 60, 'g'),
      ing('Baking soda', 'Zuiveringszout', 'Bicarbonate de soude', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Rosemary', 'Rozemarijn', 'Romarin', 1, 'el'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'rutabaga-onion-gratin',
    prepTime: '15 mins',
    cookTime: '1 hr 30 mins',
    difficulty: diff.easy,
    servings: 6,
    category: ['main'],
    translations: {
      en: {
        title: 'Swede & Onion Gratin',
        subtitle: 'Thin layers baked soft in coconut milk',
        description: 'A gratin without potatoes or cheese: thin slices of swede and onion with thyme, baked slowly in coconut milk until tender and browned on top.',
        instructions: [
          'Heat the oven to 180 °C and oil a 23 cm baking dish.',
          'Halve the swede and the onion and slice both into thin half-moons.',
          'Layer onion, then swede, seasoning each layer with salt, pepper and some of the thyme. Repeat until everything is used, then press it down.',
          'Pour the coconut milk over, cover tightly with foil and bake for 1 hour.',
          'Take the foil off and bake for 30 minutes more, until tender and browned.'
        ]
      },
      nl: {
        title: 'Gratin van koolraap en ui',
        subtitle: 'Dunne laagjes zacht gebakken in kokosmelk',
        description: 'Een gratin zonder aardappel of kaas: dunne plakjes koolraap en ui met tijm, langzaam gebakken in kokosmelk tot ze zacht zijn en bovenaan gekleurd.',
        instructions: [
          'Verwarm de oven voor op 180 °C en vet een ovenschaal van 23 cm in.',
          'Halveer de koolraap en de ui en snijd beide in dunne halve maantjes.',
          'Leg om beurten een laag ui en een laag koolraap en kruid elke laag met zout, peper en wat tijm. Herhaal tot alles op is en druk aan.',
          'Giet de kokosmelk erover, dek goed af met aluminiumfolie en bak 1 uur.',
          'Haal de folie eraf en bak nog 30 minuten, tot alles zacht en gekleurd is.'
        ]
      },
      fr: {
        title: 'Gratin de rutabaga et d\'oignon',
        subtitle: 'De fines couches fondantes au lait de coco',
        description: 'Un gratin sans pommes de terre ni fromage : de fines tranches de rutabaga et d\'oignon au thym, cuites lentement dans le lait de coco jusqu\'à être tendres et dorées.',
        instructions: [
          'Préchauffe le four à 180 °C et huile un plat de 23 cm.',
          'Coupe le rutabaga et l\'oignon en deux et émince-les en fines demi-lunes.',
          'Alterne une couche d\'oignon et une de rutabaga, en assaisonnant chacune de sel, de poivre et d\'un peu de thym. Recommence jusqu\'à épuisement et tasse.',
          'Verse le lait de coco, couvre hermétiquement d\'aluminium et enfourne 1 heure.',
          'Retire l\'aluminium et poursuis 30 minutes, jusqu\'à ce que ce soit tendre et doré.'
        ]
      }
    },
    ingredients: [
      ing('Rutabaga', 'Koolraap', 'Rutabaga', 450, 'g'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 240, 'ml'),
      ing('Thyme', 'Tijm', 'Thym', 2, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'salmon-stew',
    prepTime: '10 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['soup', 'main'],
    translations: {
      en: {
        title: 'Coconut Salmon Stew',
        subtitle: 'Peppers and salmon poached in spiced coconut milk',
        description: 'Onion and sweet peppers softened with paprika and coriander, then salmon gently poached in coconut milk and finished with lime. Ready in under half an hour.',
        instructions: [
          'Heat the oil in a pan with a lid over medium heat and soften the onion with a pinch of salt for about 5 minutes.',
          'Add the peppers and garlic and cook for 3 minutes, then stir in the paprika, coriander and chilli flakes for a minute.',
          'Pour in the coconut milk and bring it to the boil.',
          'Add the salmon, turn the heat to medium-low, cover and simmer for 6–8 minutes, until the fish is cooked.',
          'Stir in the lime juice, season, and serve with tomato wedges, fresh coriander and lime.'
        ]
      },
      nl: {
        title: 'Zalmstoofpotje met kokos',
        subtitle: 'Paprika en zalm gepocheerd in gekruide kokosmelk',
        description: 'Ui en zoete paprika zacht gestoofd met paprikapoeder en koriander, en dan zalm zachtjes gepocheerd in kokosmelk en afgewerkt met limoen. Klaar in minder dan een half uur.',
        instructions: [
          'Verhit de olie in een pan met deksel op middelhoog vuur en stoof de ui zo\'n 5 minuten zacht met een snuifje zout.',
          'Voeg de paprika en de look toe en bak 3 minuten, en roer dan het paprikapoeder, de koriander en de chilivlokken er een minuutje door.',
          'Giet de kokosmelk erbij en breng aan de kook.',
          'Leg de zalm erin, zet het vuur middellaag, leg het deksel erop en laat 6–8 minuten sudderen tot de vis gaar is.',
          'Roer het limoensap erdoor, breng op smaak en dien op met partjes tomaat, verse koriander en limoen.'
        ]
      },
      fr: {
        title: 'Mijoté de saumon à la coco',
        subtitle: 'Poivrons et saumon pochés dans un lait de coco épicé',
        description: 'Oignon et poivrons fondus avec du paprika et de la coriandre, puis du saumon poché doucement dans le lait de coco et fini au citron vert. Prêt en moins d\'une demi-heure.',
        instructions: [
          'Chauffe l\'huile dans une sauteuse avec couvercle à feu moyen et fais fondre l\'oignon avec une pincée de sel environ 5 minutes.',
          'Ajoute les poivrons et l\'ail et cuis 3 minutes, puis le paprika, la coriandre et le piment une minute.',
          'Verse le lait de coco et porte à ébullition.',
          'Ajoute le saumon, baisse à feu moyen-doux, couvre et laisse mijoter 6–8 minutes, jusqu\'à ce que le poisson soit cuit.',
          'Ajoute le jus de citron vert, rectifie l\'assaisonnement et sers avec des quartiers de tomate, de la coriandre fraîche et du citron vert.'
        ]
      }
    },
    ingredients: [
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 1, 'el'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Red bell pepper', 'Rode paprika', 'Poivron rouge', 0.5, 'st.'),
      ing('Yellow bell pepper', 'Gele paprika', 'Poivron jaune', 0.5, 'st.'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Paprika', 'Paprikapoeder', 'Paprika', 1, 'kl'),
      ing('Ground coriander', 'Korianderpoeder', 'Coriandre moulue', 1, 'kl'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 0.25, 'kl'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 400, 'ml'),
      ing('Salmon fillet', 'Zalmfilet', 'Filet de saumon', 225, 'g'),
      ing('Lime juice', 'Limoensap', 'Jus de citron vert', 1, 'el'),
      ing('Tomato', 'Tomaat', 'Tomate', 1, 'st.'),
      ing('Coriander', 'Koriander', 'Coriandre', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'tandoori-chicken',
    prepTime: '10 mins',
    cookTime: '40 mins',
    difficulty: diff.medium,
    servings: 2,
    category: ['main'],
    wiki: ['en:Tandoori chicken'],
    translations: {
      en: {
        title: 'Tandoori Chicken with Raita',
        subtitle: 'Yogurt-marinated thighs and a cool cucumber dip',
        description: 'Chicken thighs marinated overnight in spiced yogurt, baked and then charred under the grill, with a mint and cucumber raita on the side.',
        instructions: [
          'Mix half the yogurt with the olive oil, lemon juice, ginger, garlic, salt, turmeric, chilli powder, coriander and cumin. Coat the chicken in it and leave it in the fridge overnight.',
          'Heat the oven to 180 °C. Set an oiled rack over a foil-lined tray and lay the chicken on it.',
          'Bake for 30–35 minutes, turning and basting with the marinade halfway.',
          'Turn once more, baste, and put it under a hot grill for 3–4 minutes until lightly charred.',
          'For the raita, stir the rest of the yogurt with the grated cucumber, mint and salt, and finish with a pinch of cumin and chilli flakes.'
        ]
      },
      nl: {
        title: 'Tandoorikip met raita',
        subtitle: 'In yoghurt gemarineerde dijen en een frisse komkommerdip',
        description: 'Kippendijen een nacht gemarineerd in gekruide yoghurt, gebakken en dan geblakerd onder de grill, met een raita van munt en komkommer ernaast.',
        instructions: [
          'Meng de helft van de yoghurt met de olijfolie, het citroensap, gember, look, zout, kurkuma, chilipoeder, koriander en komijn. Bedek de kip ermee en zet een nacht in de koelkast.',
          'Verwarm de oven voor op 180 °C. Leg een ingevet rooster op een bakplaat met aluminiumfolie en leg de kip erop.',
          'Bak 30–35 minuten, en draai halverwege om en bestrijk met de marinade.',
          'Draai nog eens, bestrijk en zet 3–4 minuten onder een hete grill tot ze licht geblakerd zijn.',
          'Voor de raita roer je de rest van de yoghurt met de geraspte komkommer, munt en zout, en werk je af met een snuifje komijn en chilivlokken.'
        ]
      },
      fr: {
        title: 'Poulet tandoori et raïta',
        subtitle: 'Des hauts de cuisse marinés au yaourt et une sauce fraîche au concombre',
        description: 'Des hauts de cuisse marinés une nuit dans un yaourt épicé, cuits au four puis grillés, avec une raïta à la menthe et au concombre à côté.',
        instructions: [
          'Mélange la moitié du yaourt avec l\'huile d\'olive, le jus de citron, le gingembre, l\'ail, le sel, le curcuma, le piment, la coriandre et le cumin. Enrobe le poulet et laisse une nuit au frigo.',
          'Préchauffe le four à 180 °C. Pose une grille huilée sur une plaque tapissée d\'aluminium et dispose le poulet dessus.',
          'Enfourne 30–35 minutes, en retournant et en badigeonnant de marinade à mi-cuisson.',
          'Retourne encore, badigeonne et passe 3–4 minutes sous le gril bien chaud pour le marquer légèrement.',
          'Pour la raïta, mélange le reste du yaourt avec le concombre râpé, la menthe et le sel, et termine avec une pincée de cumin et de piment.'
        ]
      }
    },
    ingredients: [
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 480, 'ml'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Fresh ginger', 'Verse gember', 'Gingembre frais', 1, 'kl'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Turmeric', 'Kurkuma', 'Curcuma', 0.5, 'kl'),
      ing('Chili powder', 'Chilipoeder', 'Piment en poudre', 1, 'kl'),
      ing('Ground coriander', 'Korianderpoeder', 'Coriandre moulue', 1, 'kl'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 1, 'kl'),
      ing('Chicken thighs', 'Kippendijen', 'Hauts de cuisse de poulet', 450, 'g'),
      ing('Cucumber', 'Komkommer', 'Concombre', 0.5, 'st.'),
      ing('Mint', 'Munt', 'Menthe', 1, 'el'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 1, 'pinch')
    ]
  },

  {
    slug: 'artichoke-salad-with-coconut-balsamic-vinaigrette',
    prepTime: '20 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Artichoke & Green Bean Salad',
        subtitle: 'With a rosemary and mustard vinaigrette',
        description: 'Artichoke hearts, crisp green beans and cherry tomatoes on mixed leaves, with a vinaigrette of apple cider vinegar, coconut aminos and mustard, and toasted almonds on top.',
        instructions: [
          'Shake the olive oil, apple cider vinegar, coconut aminos, garlic and mustard powder together in a jar. Season, shake again, drop in the rosemary sprig and let it stand while you make the salad.',
          'Put the leaves, artichokes, green beans and cherry tomatoes in a large bowl.',
          'Pour over 4–6 tablespoons of the vinaigrette and toss gently.',
          'Scatter the toasted almonds over the top and serve.'
        ]
      },
      nl: {
        title: 'Salade van artisjok en boontjes',
        subtitle: 'Met een vinaigrette van rozemarijn en mosterd',
        description: 'Artisjokharten, knapperige boontjes en kerstomaatjes op gemengde sla, met een vinaigrette van appelciderazijn, kokosaminos en mosterd, en geroosterde amandelen erop.',
        instructions: [
          'Schud de olijfolie, appelciderazijn, kokosaminos, look en het mosterdpoeder samen in een potje. Kruid, schud nog eens, doe het takje rozemarijn erin en laat staan terwijl je de salade maakt.',
          'Doe de sla, artisjokken, boontjes en kerstomaatjes in een grote kom.',
          'Giet er 4–6 eetlepels vinaigrette over en meng voorzichtig.',
          'Strooi de geroosterde amandelen erover en dien op.'
        ]
      },
      fr: {
        title: 'Salade d\'artichauts et de haricots verts',
        subtitle: 'Avec une vinaigrette au romarin et à la moutarde',
        description: 'Des cœurs d\'artichaut, des haricots verts croquants et des tomates cerises sur un mélange de salades, avec une vinaigrette au vinaigre de cidre, aux aminos de coco et à la moutarde, et des amandes grillées par-dessus.',
        instructions: [
          'Secoue l\'huile d\'olive, le vinaigre de cidre, les aminos de coco, l\'ail et la moutarde en poudre dans un bocal. Assaisonne, secoue encore, ajoute le brin de romarin et laisse reposer pendant que tu fais la salade.',
          'Mets la salade, les artichauts, les haricots verts et les tomates cerises dans un grand saladier.',
          'Verse 4–6 cuillères à soupe de vinaigrette et mélange délicatement.',
          'Parsème d\'amandes grillées et sers.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 120, 'ml'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 60, 'ml'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 2, 'el'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Mustard powder', 'Mosterdpoeder', 'Moutarde en poudre', 1, 'el'),
      ing('Rosemary', 'Rozemarijn', 'Romarin', 1, 'sprig'),
      ing('Mixed salad greens', 'Gemengde sla', 'Mesclun', 120, 'g'),
      ing('Artichoke hearts', 'Artisjokharten', 'Cœurs d\'artichaut', 340, 'g'),
      ing('Green beans', 'Sperziebonen', 'Haricots verts', 200, 'g'),
      ing('Cherry tomatoes', 'Kerstomaatjes', 'Tomates cerises', 12, 'st.'),
      ing('Flaked almonds', 'Amandelschilfers', 'Amandes effilées', 25, 'g'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'sheet-pan-chicken',
    prepTime: '10 mins',
    cookTime: '45 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Sheet-Pan Chicken with Cabbage & Apple',
        subtitle: 'One tray, a mustard coconut sauce, very little washing up',
        description: 'Crisp-skinned chicken thighs roasted with wedges of cabbage, red onion and tart apple, then finished with a mustardy coconut sauce that browns the cabbage edges.',
        instructions: [
          'Heat the oven to 220 °C. Oil a baking tray, lay the chicken on it, season with half the salt and some pepper and drizzle with a tablespoon of oil. Roast for 15 minutes.',
          'Arrange the cabbage, onion and apple around the chicken, season with the rest of the salt and some pepper, drizzle with another tablespoon of oil and roast for 20 minutes.',
          'Whisk the coconut milk with the mustard powder and a pinch of salt and pepper.',
          'Toss the vegetables, pour the sauce over them only (not the chicken) and sprinkle the mustard seeds on top.',
          'Roast for 10 more minutes, until the sauce has reduced and the cabbage edges are brown. Finish with parsley.'
        ]
      },
      nl: {
        title: 'Kip van de bakplaat met kool en appel',
        subtitle: 'Eén plaat, een mosterd-kokossaus, weinig afwas',
        description: 'Kippendijen met een krokant vel, geroosterd met partjes kool, rode ui en zure appel, en afgewerkt met een kokossaus met mosterd die de randjes van de kool bruin kleurt.',
        instructions: [
          'Verwarm de oven voor op 220 °C. Vet een bakplaat in, leg de kip erop, kruid met de helft van het zout en wat peper en sprenkel er een eetlepel olie over. Rooster 15 minuten.',
          'Leg de kool, ui en appel rond de kip, kruid met de rest van het zout en wat peper, sprenkel er nog een eetlepel olie over en rooster 20 minuten.',
          'Klop de kokosmelk met het mosterdpoeder en een snuifje peper en zout.',
          'Schep de groenten om, giet de saus alleen over de groenten (niet over de kip) en strooi de mosterdzaadjes erover.',
          'Rooster nog 10 minuten, tot de saus ingedikt is en de randjes van de kool bruin zijn. Werk af met peterselie.'
        ]
      },
      fr: {
        title: 'Poulet sur plaque, chou et pomme',
        subtitle: 'Une plaque, une sauce coco-moutarde, très peu de vaisselle',
        description: 'Des hauts de cuisse à la peau croustillante rôtis avec des quartiers de chou, d\'oignon rouge et de pomme acidulée, finis avec une sauce coco à la moutarde qui fait dorer les bords du chou.',
        instructions: [
          'Préchauffe le four à 220 °C. Huile une plaque, pose le poulet dessus, assaisonne avec la moitié du sel et un peu de poivre et arrose d\'une cuillère à soupe d\'huile. Rôtis 15 minutes.',
          'Dispose le chou, l\'oignon et la pomme autour du poulet, assaisonne avec le reste du sel et du poivre, arrose d\'une autre cuillère d\'huile et rôtis 20 minutes.',
          'Fouette le lait de coco avec la moutarde en poudre et une pincée de sel et de poivre.',
          'Remue les légumes, verse la sauce uniquement sur eux (pas sur le poulet) et parsème de graines de moutarde.',
          'Rôtis encore 10 minutes, jusqu\'à ce que la sauce ait réduit et que les bords du chou soient dorés. Termine avec du persil.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 3, 'el'),
      ing('Chicken thighs', 'Kippendijen', 'Hauts de cuisse de poulet', 4, 'st.'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Cabbage', 'Witte kool', 'Chou blanc', 1, 'head'),
      ing('Red onion', 'Rode ui', 'Oignon rouge', 2, 'st.'),
      ing('Granny Smith apple', 'Granny Smith-appel', 'Pomme Granny Smith', 1, 'st.'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 240, 'ml'),
      ing('Mustard powder', 'Mosterdpoeder', 'Moutarde en poudre', 1, 'kl'),
      ing('Mustard seeds', 'Mosterdzaad', 'Graines de moutarde', 1, 'kl'),
      ing('Parsley', 'Peterselie', 'Persil', 2, 'el'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'golden-baked-chicken-and-leeks',
    prepTime: '10 mins',
    cookTime: '1 hr',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Golden Chicken with Leeks',
        subtitle: 'Thighs baked over leeks in turmeric coconut milk',
        description: 'Chicken thighs roasted on a bed of leek, red pepper and garlic in coconut milk coloured gold with turmeric. The leeks melt into the sauce underneath.',
        instructions: [
          'Heat the oven to 190 °C.',
          'Whisk the coconut milk with the coconut aminos, turmeric, salt and pepper.',
          'Spread the leeks, red pepper and garlic in a 23 × 33 cm baking dish and sit the chicken on top, skin side up.',
          'Pour the sauce over everything and bake uncovered for about an hour, basting halfway, until the skin is crisp and the juices run clear.',
          'Good with cauliflower rice or quinoa.'
        ]
      },
      nl: {
        title: 'Goudgele kip met prei',
        subtitle: 'Dijen gebakken op prei in kokosmelk met kurkuma',
        description: 'Kippendijen geroosterd op een bedje van prei, rode paprika en look in kokosmelk die goudgeel kleurt van de kurkuma. De prei smelt in de saus eronder.',
        instructions: [
          'Verwarm de oven voor op 190 °C.',
          'Klop de kokosmelk met de kokosaminos, kurkuma, zout en peper.',
          'Verdeel de prei, rode paprika en look over een ovenschaal van 23 × 33 cm en leg de kip erop, met het vel naar boven.',
          'Giet de saus over alles en bak zonder deksel ongeveer een uur, halverwege overgieten, tot het vel krokant is en het vocht helder.',
          'Lekker met bloemkoolrijst of quinoa.'
        ]
      },
      fr: {
        title: 'Poulet doré aux poireaux',
        subtitle: 'Des hauts de cuisse cuits sur des poireaux au lait de coco et curcuma',
        description: 'Des hauts de cuisse rôtis sur un lit de poireaux, de poivron rouge et d\'ail dans un lait de coco doré au curcuma. Les poireaux fondent dans la sauce en dessous.',
        instructions: [
          'Préchauffe le four à 190 °C.',
          'Fouette le lait de coco avec les aminos de coco, le curcuma, le sel et le poivre.',
          'Étale les poireaux, le poivron rouge et l\'ail dans un plat de 23 × 33 cm et pose le poulet dessus, peau vers le haut.',
          'Verse la sauce sur le tout et enfourne sans couvrir environ une heure, en arrosant à mi-cuisson, jusqu\'à ce que la peau soit croustillante et le jus clair.',
          'Délicieux avec du riz de chou-fleur ou du quinoa.'
        ]
      }
    },
    ingredients: [
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 360, 'ml'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 2, 'el'),
      ing('Turmeric', 'Kurkuma', 'Curcuma', 2, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.25, 'kl'),
      ing('Leek', 'Prei', 'Poireau', 4, 'st.'),
      ing('Red bell pepper', 'Rode paprika', 'Poivron rouge', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Chicken thighs', 'Kippendijen', 'Hauts de cuisse de poulet', 6, 'st.')
    ]
  },

  {
    slug: 'skillet-fish-pie',
    prepTime: '35 mins',
    cookTime: '40 mins',
    difficulty: diff.medium,
    servings: 6,
    category: ['main'],
    translations: {
      en: {
        title: 'Salmon Pie with Cauliflower Mash',
        subtitle: 'A one-pan fish pie, no potatoes',
        description: 'Salmon, leek, celery and spinach in a lemony herb sauce, topped with smooth cauliflower purée and baked until golden. A visschotel the whole family knows, made candida-friendly.',
        instructions: [
          'Steam the cauliflower for about 15 minutes, until very soft. Blend it with 2 tablespoons of olive oil until smooth and season.',
          'Heat the oven to 200 °C.',
          'In an ovenproof frying pan, soften the leek and celery in the rest of the oil for about 7 minutes.',
          'Stir in the quinoa flour, then the warm water. Bring to the boil and simmer for 2–3 minutes until thick. Add the lemon zest, thyme and parsley and season.',
          'Add the salmon, pour over the lemon juice, add the spinach and toss gently.',
          'Spread the cauliflower purée over the top and bake for 40 minutes, until golden. Let it rest for 10 minutes before serving.'
        ]
      },
      nl: {
        title: 'Visschotel met zalm en bloemkoolpuree',
        subtitle: 'Een visschotel uit één pan, zonder aardappel',
        description: 'Zalm, prei, selder en spinazie in een frisse kruidensaus met citroen, met gladde bloemkoolpuree erop en goudbruin gebakken. De visschotel die iedereen kent, candidaproof gemaakt.',
        instructions: [
          'Stoom de bloemkool zo\'n 15 minuten, tot hij heel zacht is. Mix hem glad met 2 eetlepels olijfolie en breng op smaak.',
          'Verwarm de oven voor op 200 °C.',
          'Stoof in een ovenvaste pan de prei en selder zo\'n 7 minuten zacht in de rest van de olie.',
          'Roer het quinoameel erdoor en dan het warme water. Breng aan de kook en laat 2–3 minuten pruttelen tot het dik is. Voeg citroenzeste, tijm en peterselie toe en kruid.',
          'Voeg de zalm toe, giet het citroensap erover, doe de spinazie erbij en schep voorzichtig om.',
          'Strijk de bloemkoolpuree over de bovenkant en bak 40 minuten, tot hij goudbruin is. Laat 10 minuten rusten voor je opdient.'
        ]
      },
      fr: {
        title: 'Parmentier de saumon au chou-fleur',
        subtitle: 'Un gratin de poisson en une poêle, sans pommes de terre',
        description: 'Saumon, poireau, céleri et épinards dans une sauce citronnée aux herbes, recouverts d\'une purée de chou-fleur lisse et gratinés. Le gratin de poisson que tout le monde connaît, version candida.',
        instructions: [
          'Cuis le chou-fleur à la vapeur une quinzaine de minutes, jusqu\'à ce qu\'il soit très tendre. Mixe-le avec 2 cuillères à soupe d\'huile d\'olive et assaisonne.',
          'Préchauffe le four à 200 °C.',
          'Dans une poêle allant au four, fais fondre le poireau et le céleri dans le reste de l\'huile environ 7 minutes.',
          'Ajoute la farine de quinoa, puis l\'eau tiède. Porte à ébullition et laisse épaissir 2–3 minutes. Ajoute le zeste de citron, le thym et le persil et assaisonne.',
          'Ajoute le saumon, arrose de jus de citron, ajoute les épinards et mélange délicatement.',
          'Étale la purée de chou-fleur sur le dessus et enfourne 40 minutes, jusqu\'à ce que ce soit doré. Laisse reposer 10 minutes avant de servir.'
        ]
      }
    },
    ingredients: [
      ing('Cauliflower', 'Bloemkool', 'Chou-fleur', 450, 'g'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 4, 'el'),
      ing('Leek', 'Prei', 'Poireau', 1, 'st.'),
      ing('Celery stalks', 'Bladselder', 'Céleri branche', 2, 'st.'),
      ing('Quinoa flour', 'Quinoameel', 'Farine de quinoa', 1, 'el'),
      ing('Water', 'Water', 'Eau', 240, 'ml'),
      ing('Lemon zest', 'Citroenzeste', 'Zeste de citron', 1, 'kl'),
      ing('Thyme', 'Tijm', 'Thym', 2, 'kl'),
      ing('Parsley', 'Peterselie', 'Persil', 15, 'g'),
      ing('Salmon fillet', 'Zalmfilet', 'Filet de saumon', 450, 'g'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 2, 'el'),
      ing('Spinach', 'Spinazie', 'Épinards', 30, 'g'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  }
];
