// Candida-diet dishes, batch 6. See candida_recipes.js for how these were made.

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });
const diff = {
  easy: { en: 'Easy', nl: 'Makkelijk', fr: 'Facile' },
  medium: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' }
};

module.exports = [
  {
    slug: 'buckwheat-brussels-sprout-salad',
    prepTime: '10 mins',
    cookTime: '30 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Buckwheat with Brussels Sprouts',
        subtitle: 'Warm as a side, cold as a salad',
        description: 'Nutty buckwheat stirred through browned sprouts, shallot, celery and chard braised with thyme, with toasted nuts on top. Eat it warm, or let it cool and dress it as a salad.',
        instructions: [
          'Bring the water and a pinch of salt to the boil, add the buckwheat, cover and simmer for 15–20 minutes. Leave it off the heat for 5 minutes and fluff it with a fork.',
          'Heat the oil in a large frying pan over medium heat and fry the shallots, celery, garlic and sprouts for about 5 minutes, until softened and browned.',
          'Add the thyme and stock, season, cover and simmer on medium-low for about 10 minutes.',
          'Stir in the chard and let it wilt for a minute or two, then fold in the buckwheat.',
          'Serve with fresh herbs and crushed toasted nuts. For a salad, let it cool and toss with olive oil and lemon juice.'
        ]
      },
      nl: {
        title: 'Boekweit met spruitjes',
        subtitle: 'Warm als bijgerecht, koud als salade',
        description: 'Nootachtige boekweit door gekleurde spruitjes, sjalot, selder en snijbiet gestoofd met tijm, met geroosterde noten erop. Eet het warm, of laat het afkoelen en maak er een salade van.',
        instructions: [
          'Breng het water met een snuifje zout aan de kook, doe de boekweit erbij, leg het deksel erop en laat 15–20 minuten zachtjes koken. Laat 5 minuten van het vuur staan en maak los met een vork.',
          'Verhit de olie in een grote pan op middelhoog vuur en bak de sjalotten, selder, look en spruitjes zo\'n 5 minuten, tot ze zacht en gekleurd zijn.',
          'Voeg de tijm en bouillon toe, kruid, leg het deksel erop en laat zo\'n 10 minuten sudderen op middellaag vuur.',
          'Roer de snijbiet erdoor en laat een minuutje of twee slinken, en schep dan de boekweit erdoor.',
          'Dien op met verse kruiden en gekneusde geroosterde noten. Voor een salade laat je het afkoelen en meng je het met olijfolie en citroensap.'
        ]
      },
      fr: {
        title: 'Sarrasin aux choux de Bruxelles',
        subtitle: 'Chaud en accompagnement, froid en salade',
        description: 'Du sarrasin au goût de noisette mêlé à des choux de Bruxelles dorés, de l\'échalote, du céleri et des blettes braisés au thym, avec des noix grillées par-dessus. À manger chaud, ou froid en salade.',
        instructions: [
          'Porte l\'eau et une pincée de sel à ébullition, ajoute le sarrasin, couvre et laisse frémir 15–20 minutes. Laisse 5 minutes hors du feu et égrène à la fourchette.',
          'Chauffe l\'huile dans une grande poêle à feu moyen et fais revenir les échalotes, le céleri, l\'ail et les choux environ 5 minutes, jusqu\'à ce qu\'ils soient tendres et dorés.',
          'Ajoute le thym et le bouillon, assaisonne, couvre et laisse mijoter à feu moyen-doux une dizaine de minutes.',
          'Ajoute les blettes et laisse-les tomber une minute ou deux, puis incorpore le sarrasin.',
          'Sers avec des herbes fraîches et des noix grillées concassées. En salade, laisse refroidir et assaisonne d\'huile d\'olive et de jus de citron.'
        ]
      }
    },
    ingredients: [
      ing('Water', 'Water', 'Eau', 480, 'ml'),
      ing('Buckwheat groats', 'Boekweitkorrels', 'Sarrasin en grains', 170, 'g'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Shallots', 'Sjalotten', 'Échalotes', 2, 'st.'),
      ing('Celery stalks', 'Bladselder', 'Céleri branche', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Brussels sprouts', 'Spruitjes', 'Choux de Bruxelles', 8, 'st.'),
      ing('Thyme', 'Tijm', 'Thym', 1, 'el'),
      ing('Vegetable broth', 'Groentebouillon', 'Bouillon de légumes', 240, 'ml'),
      ing('Swiss chard', 'Snijbiet', 'Blettes', 3, 'st.'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'el'),
      ing('Hazelnuts', 'Hazelnoten', 'Noisettes', 30, 'g'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'satay-chicken-bowl',
    prepTime: '20 mins',
    cookTime: '10 mins',
    difficulty: diff.medium,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Satay Chicken Bowl',
        subtitle: 'An almond satay sauce instead of peanut',
        description: 'Lime and ginger marinated chicken seared until golden, served in a bowl with quinoa and crunchy vegetables and a warm satay sauce made with almond butter — no peanuts, no sugar.',
        instructions: [
          'Mix the chicken with the lime zest and juice, coconut aminos, garlic, ginger and turmeric. Leave it in the fridge for 8 hours or overnight.',
          'Heat the olive oil in a frying pan over medium-high heat and sear the chicken for 7–10 minutes, until browned and cooked through. Season with salt.',
          'Toss the red cabbage, spring onion, celery, cucumber, yellow pepper and almonds together.',
          'For the sauce, whisk the almond butter, coconut milk, lime juice, coconut aminos, garlic, stevia and chilli flakes in a small pan over medium heat for 2–3 minutes until smooth. Thin with a spoon or two of water if needed.',
          'Arrange the chicken, quinoa, greens and vegetable mix side by side in two bowls, add coriander, Thai basil and lime wedges, and serve the sauce alongside.'
        ]
      },
      nl: {
        title: 'Saté-kipbowl',
        subtitle: 'Een satésaus van amandel in plaats van pinda',
        description: 'Kip gemarineerd in limoen en gember en goudbruin gebakken, in een bowl met quinoa en knapperige groenten en een warme satésaus van amandelpasta — geen pinda\'s, geen suiker.',
        instructions: [
          'Meng de kip met de limoenzeste en het -sap, de kokosaminos, look, gember en kurkuma. Laat 8 uur of een nacht in de koelkast staan.',
          'Verhit de olijfolie in een pan op middelhoog tot hoog vuur en bak de kip 7–10 minuten, tot ze bruin en gaar is. Kruid met zout.',
          'Meng de rode kool, lente-ui, selder, komkommer, gele paprika en amandelen.',
          'Voor de saus klop je de amandelpasta, kokosmelk, het limoensap, de kokosaminos, look, stevia en chilivlokken 2–3 minuten in een pannetje op middelhoog vuur tot het glad is. Verdun met een lepel of twee water als het nodig is.',
          'Schik de kip, quinoa, het groen en het groentemengsel naast elkaar in twee kommen, leg er koriander, Thaise basilicum en partjes limoen bij, en zet de saus erbij.'
        ]
      },
      fr: {
        title: 'Bol de poulet satay',
        subtitle: 'Une sauce satay à l\'amande au lieu de la cacahuète',
        description: 'Du poulet mariné au citron vert et au gingembre, saisi jusqu\'à être doré, servi dans un bol avec du quinoa et des légumes croquants et une sauce satay chaude au beurre d\'amande — sans cacahuètes, sans sucre.',
        instructions: [
          'Mélange le poulet avec le zeste et le jus de citron vert, les aminos de coco, l\'ail, le gingembre et le curcuma. Laisse 8 heures ou une nuit au frigo.',
          'Chauffe l\'huile d\'olive dans une poêle à feu moyen-vif et saisis le poulet 7–10 minutes, jusqu\'à ce qu\'il soit doré et cuit. Sale.',
          'Mélange le chou rouge, l\'oignon nouveau, le céleri, le concombre, le poivron jaune et les amandes.',
          'Pour la sauce, fouette le beurre d\'amande, le lait de coco, le jus de citron vert, les aminos de coco, l\'ail, la stévia et le piment dans une petite casserole à feu moyen 2–3 minutes, jusqu\'à ce que ce soit lisse. Allonge d\'une cuillère ou deux d\'eau si besoin.',
          'Dispose le poulet, le quinoa, la verdure et les légumes côte à côte dans deux bols, ajoute coriandre, basilic thaï et quartiers de citron vert, et sers la sauce à côté.'
        ]
      }
    },
    ingredients: [
      ing('Chicken breast', 'Kipfilet', 'Blanc de poulet', 225, 'g'),
      ing('Lime', 'Limoen', 'Citron vert', 2, 'st.'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 3, 'el'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Fresh ginger', 'Verse gember', 'Gingembre frais', 1, 'kl'),
      ing('Turmeric', 'Kurkuma', 'Curcuma', 0.25, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Cooked quinoa', 'Gekookte quinoa', 'Quinoa cuit', 185, 'g'),
      ing('Mixed salad greens', 'Gemengde sla', 'Mesclun', 60, 'g'),
      ing('Red cabbage', 'Rode kool', 'Chou rouge', 45, 'g'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 2, 'st.'),
      ing('Celery stalks', 'Bladselder', 'Céleri branche', 1, 'st.'),
      ing('Cucumber', 'Komkommer', 'Concombre', 0.25, 'st.'),
      ing('Yellow bell pepper', 'Gele paprika', 'Poivron jaune', 40, 'g'),
      ing('Flaked almonds', 'Amandelschilfers', 'Amandes effilées', 2, 'el'),
      ing('Coriander', 'Koriander', 'Coriandre', 1, 'el'),
      ing('Thai basil', 'Thaise basilicum', 'Basilic thaï', 1, 'el'),
      ing('Almond butter', 'Amandelpasta', 'Beurre d\'amande', 65, 'g'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 60, 'ml'),
      ing('Stevia', 'Stevia', 'Stévia', 0.25, 'kl'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 1, 'pinch'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste')
    ]
  },

  {
    slug: 'thai-quinoa',
    prepTime: '15 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Thai Coconut Quinoa',
        subtitle: 'Cooked in coconut milk, dressed with lime and ginger',
        description: 'Quinoa simmered in coconut milk, tossed with a ginger and lime dressing and piled with red onion, herbs, crushed macadamias and pink peppercorns. A side that steals the show.',
        instructions: [
          'Bring the quinoa, coconut milk, water and a pinch of salt to the boil. Turn the heat to low, cover and cook for 15 minutes.',
          'Leave it covered off the heat for 5 minutes, then fluff it up and let it cool a little.',
          'Squeeze the juice from the grated ginger and whisk it with the coconut aminos and lime juice. Season.',
          'Toss the quinoa with the dressing and spread it on a platter. Top with red onion, coriander, Thai basil, macadamias and crushed pink peppercorns, and serve with lime wedges.'
        ]
      },
      nl: {
        title: 'Thaise kokosquinoa',
        subtitle: 'Gegaard in kokosmelk, met een dressing van limoen en gember',
        description: 'Quinoa gegaard in kokosmelk, gemengd met een dressing van gember en limoen, met rode ui, kruiden, gekneusde macadamia\'s en roze peperbollen erop. Een bijgerecht dat de show steelt.',
        instructions: [
          'Breng de quinoa, kokosmelk, het water en een snuifje zout aan de kook. Zet het vuur laag, leg het deksel erop en laat 15 minuten garen.',
          'Laat 5 minuten afgedekt van het vuur staan, maak los en laat een beetje afkoelen.',
          'Knijp het sap uit de geraspte gember en klop het met de kokosaminos en het limoensap. Kruid.',
          'Meng de quinoa met de dressing en spreid uit op een schotel. Leg er rode ui, koriander, Thaise basilicum, macadamia\'s en gekneusde roze peper op, en dien op met partjes limoen.'
        ]
      },
      fr: {
        title: 'Quinoa thaï à la coco',
        subtitle: 'Cuit au lait de coco, assaisonné citron vert et gingembre',
        description: 'Du quinoa cuit au lait de coco, mêlé à une sauce gingembre-citron vert et garni d\'oignon rouge, d\'herbes, de noix de macadamia concassées et de baies roses. Un accompagnement qui vole la vedette.',
        instructions: [
          'Porte à ébullition le quinoa, le lait de coco, l\'eau et une pincée de sel. Baisse à feu doux, couvre et cuis 15 minutes.',
          'Laisse 5 minutes à couvert hors du feu, égrène et laisse tiédir.',
          'Presse le jus du gingembre râpé et fouette-le avec les aminos de coco et le jus de citron vert. Assaisonne.',
          'Mélange le quinoa avec la sauce et étale-le sur un plat. Garnis d\'oignon rouge, de coriandre, de basilic thaï, de macadamias et de baies roses concassées, et sers avec des quartiers de citron vert.'
        ]
      }
    },
    ingredients: [
      ing('Quinoa', 'Quinoa', 'Quinoa', 170, 'g'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 120, 'ml'),
      ing('Water', 'Water', 'Eau', 120, 'ml'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 2, 'el'),
      ing('Lime juice', 'Limoensap', 'Jus de citron vert', 1, 'el'),
      ing('Fresh ginger', 'Verse gember', 'Gingembre frais', 3, 'cm'),
      ing('Red onion', 'Rode ui', 'Oignon rouge', 0.5, 'st.'),
      ing('Coriander', 'Koriander', 'Coriandre', 2, 'el'),
      ing('Thai basil', 'Thaise basilicum', 'Basilic thaï', 1, 'el'),
      ing('Macadamia nuts', 'Macadamianoten', 'Noix de macadamia', 30, 'g'),
      ing('Pink peppercorns', 'Roze peperbollen', 'Baies roses', 1, 'kl'),
      ing('Lime', 'Limoen', 'Citron vert', 1, 'st.'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste')
    ]
  },

  {
    slug: 'yellow-squash-noodles-with-meatballs',
    prepTime: '20 mins',
    cookTime: '20 mins',
    difficulty: diff.medium,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Squash Noodles with Meatballs & Tapenade',
        subtitle: 'Spaghetti and meatballs, without the spaghetti',
        description: 'Little beef meatballs browned in a pan, served on yellow courgette noodles tossed with a quick black olive tapenade. Everything you love about the original, lighter.',
        instructions: [
          'Make the tapenade: pulse the olives, olive oil, lemon juice, garlic and a pinch of salt to a coarse paste.',
          'Heat the oven to 120 °C to keep things warm. Soften the onion in a little oil for 3 minutes, add the garlic for 1 minute, then let it cool.',
          'Mix the beef with the onion and garlic, parsley, egg yolk, salt and pepper and roll into 8–10 balls.',
          'Brown the meatballs in 2 tablespoons of oil for 8–10 minutes, turning, then keep them warm in the oven.',
          'Wipe out the pan, heat a tablespoon of oil and cook the squash noodles for 2–3 minutes. Toss them with 2 tablespoons of tapenade, top with the meatballs and more tapenade, and finish with parsley or basil.'
        ]
      },
      nl: {
        title: 'Courgettinoedels met balletjes en tapenade',
        subtitle: 'Spaghetti met balletjes, zonder de spaghetti',
        description: 'Kleine rundsballetjes gebakken in de pan, op noedels van gele courgette gemengd met een snelle tapenade van zwarte olijven. Alles wat je aan het origineel lekker vindt, maar lichter.',
        instructions: [
          'Maak de tapenade: hak de olijven, olijfolie, het citroensap, de look en een snuifje zout grof in de keukenrobot.',
          'Verwarm de oven voor op 120 °C om alles warm te houden. Stoof de ui 3 minuten in wat olie, voeg de look toe voor 1 minuut en laat afkoelen.',
          'Meng het rundsgehakt met de ui en look, peterselie, eidooier, zout en peper en rol er 8–10 balletjes van.',
          'Bak de balletjes 8–10 minuten rondom bruin in 2 eetlepels olie en hou ze warm in de oven.',
          'Veeg de pan uit, verhit een eetlepel olie en bak de courgettinoedels 2–3 minuten. Meng ze met 2 eetlepels tapenade, leg de balletjes en nog wat tapenade erop en werk af met peterselie of basilicum.'
        ]
      },
      fr: {
        title: 'Nouilles de courge, boulettes et tapenade',
        subtitle: 'Des spaghettis aux boulettes, sans les spaghettis',
        description: 'De petites boulettes de bœuf dorées à la poêle, servies sur des nouilles de courgette jaune mêlées à une tapenade minute d\'olives noires. Tout ce qu\'on aime dans l\'original, en plus léger.',
        instructions: [
          'Fais la tapenade : mixe grossièrement les olives, l\'huile d\'olive, le jus de citron, l\'ail et une pincée de sel.',
          'Préchauffe le four à 120 °C pour garder au chaud. Fais fondre l\'oignon dans un peu d\'huile 3 minutes, ajoute l\'ail 1 minute, puis laisse refroidir.',
          'Mélange le bœuf avec l\'oignon et l\'ail, le persil, le jaune d\'œuf, le sel et le poivre et forme 8–10 boulettes.',
          'Dore les boulettes dans 2 cuillères à soupe d\'huile 8–10 minutes en les retournant, puis garde-les au chaud dans le four.',
          'Essuie la poêle, chauffe une cuillère d\'huile et cuis les nouilles de courge 2–3 minutes. Mélange-les avec 2 cuillères à soupe de tapenade, dépose les boulettes et encore un peu de tapenade, et termine avec du persil ou du basilic.'
        ]
      }
    },
    ingredients: [
      ing('Ground beef', 'Rundsgehakt', 'Bœuf haché', 225, 'g'),
      ing('Onion', 'Ui', 'Oignon', 2, 'el'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Parsley', 'Peterselie', 'Persil', 2, 'el'),
      ing('Egg yolk', 'Eidooier', 'Jaune d\'oeuf', 1, 'st.'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.25, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 6, 'el'),
      ing('Yellow squash', 'Gele courgette', 'Courgette jaune', 2, 'st.'),
      ing('Black olives', 'Zwarte olijven', 'Olives noires', 140, 'g'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 2, 'kl')
    ]
  },

  {
    slug: 'sardine-nicoise-salad',
    prepTime: '20 mins',
    cookTime: '5 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['main'],
    translations: {
      en: {
        title: 'Sardine Niçoise',
        subtitle: 'The classic salad with sardines instead of tuna',
        description: 'Green beans, egg, tomato, cucumber and olives arranged around a tin of sardines, with an anchovy and lemon vinaigrette. Tuna is off the candida menu; sardines are better anyway.',
        instructions: [
          'Bring a small pan of salted water to the boil and blanch the green beans for about 2 minutes. Drain and cool under cold water.',
          'Shake the lemon juice, olive oil and minced anchovy together and season.',
          'Arrange the lettuce, tomato, beans, egg, cucumber and olives in separate heaps on a plate, with the sardines in the middle.',
          'Scatter over the herbs, drizzle with the vinaigrette and season.'
        ]
      },
      nl: {
        title: 'Niçoise met sardines',
        subtitle: 'De klassieke salade met sardines in plaats van tonijn',
        description: 'Boontjes, ei, tomaat, komkommer en olijven rond een blikje sardines geschikt, met een vinaigrette van ansjovis en citroen. Tonijn staat niet op het candidamenu; sardines zijn trouwens lekkerder.',
        instructions: [
          'Breng een pannetje gezouten water aan de kook en blancheer de boontjes zo\'n 2 minuten. Giet af en laat afkoelen onder koud water.',
          'Schud het citroensap, de olijfolie en de fijngehakte ansjovis samen en kruid.',
          'Schik de sla, tomaat, boontjes, het ei, de komkommer en olijven in aparte hoopjes op een bord, met de sardines in het midden.',
          'Strooi de kruiden erover, sprenkel de vinaigrette erover en kruid.'
        ]
      },
      fr: {
        title: 'Niçoise aux sardines',
        subtitle: 'La salade classique, avec des sardines au lieu du thon',
        description: 'Haricots verts, œuf, tomate, concombre et olives disposés autour d\'une boîte de sardines, avec une vinaigrette aux anchois et au citron. Le thon n\'est pas au menu candida ; les sardines sont meilleures de toute façon.',
        instructions: [
          'Porte une petite casserole d\'eau salée à ébullition et blanchis les haricots environ 2 minutes. Égoutte et refroidis sous l\'eau froide.',
          'Secoue le jus de citron, l\'huile d\'olive et l\'anchois haché ensemble et assaisonne.',
          'Dispose la laitue, la tomate, les haricots, l\'œuf, le concombre et les olives en petits tas sur une assiette, avec les sardines au centre.',
          'Parsème d\'herbes, arrose de vinaigrette et assaisonne.'
        ]
      }
    },
    ingredients: [
      ing('Green beans', 'Sperziebonen', 'Haricots verts', 55, 'g'),
      ing('Sardines', 'Sardines', 'Sardines', 115, 'g'),
      ing('Romaine lettuce', 'Romainesla', 'Laitue romaine', 3, 'st.'),
      ing('Tomato', 'Tomaat', 'Tomate', 0.5, 'st.'),
      ing('Hard-boiled egg', 'Hardgekookt ei', 'Oeuf dur', 1, 'st.'),
      ing('Black olives', 'Zwarte olijven', 'Olives noires', 35, 'g'),
      ing('Cucumber', 'Komkommer', 'Concombre', 0.25, 'st.'),
      ing('Chives', 'Bieslook', 'Ciboulette', 1, 'el'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 2, 'el'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 6, 'el'),
      ing('Anchovy fillets', 'Ansjovisfilets', 'Filets d\'anchois', 2, 'st.'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'oven-roasted-artichokes',
    prepTime: '15 mins',
    cookTime: '35 mins',
    difficulty: diff.medium,
    servings: 6,
    category: ['snack'],
    translations: {
      en: {
        title: 'Oven-Roasted Artichokes',
        subtitle: 'With a lemon and olive oil dip',
        description: 'Halved artichokes roasted face down with garlic and herbs until the hearts are tender. Pull the leaves off one by one and dip them in lemony olive oil.',
        instructions: [
          'Heat the oven to 200 °C and line a baking tray with baking paper.',
          'Trim the artichokes: cut 2–3 cm off the top and a little off the stem, peel the stem and pull off the tough dark outer leaves.',
          'Halve them lengthwise, scoop out the hairy choke and dip the cut sides in the lemon juice straight away so they don\'t brown.',
          'Lay them cut side up, drizzle each half with a teaspoon of oil and add salt, pepper, garlic and herbs. Turn them cut side down and roast for 30–35 minutes.',
          'Whisk the leftover lemon juice with 3 tablespoons of oil, season, and serve it alongside for dipping.'
        ]
      },
      nl: {
        title: 'Artisjokken uit de oven',
        subtitle: 'Met een dip van citroen en olijfolie',
        description: 'Gehalveerde artisjokken met de snijkant naar onder geroosterd met look en kruiden tot het hart zacht is. Trek de blaadjes er een voor een af en dip ze in olijfolie met citroen.',
        instructions: [
          'Verwarm de oven voor op 200 °C en bekleed een bakplaat met bakpapier.',
          'Maak de artisjokken schoon: snijd er 2–3 cm van de top en een stukje van de steel af, schil de steel en trek de harde donkere buitenste blaadjes eraf.',
          'Halveer ze in de lengte, schep het harige hooi eruit en dop de snijkanten meteen in het citroensap zodat ze niet bruin worden.',
          'Leg ze met de snijkant naar boven, sprenkel op elke helft een theelepel olie en voeg zout, peper, look en kruiden toe. Draai ze om met de snijkant naar onder en rooster 30–35 minuten.',
          'Klop het overgebleven citroensap met 3 eetlepels olie, kruid en dien op als dip.'
        ]
      },
      fr: {
        title: 'Artichauts rôtis au four',
        subtitle: 'Avec une sauce citron et huile d\'olive',
        description: 'Des artichauts coupés en deux, rôtis face contre la plaque avec de l\'ail et des herbes jusqu\'à ce que le cœur soit tendre. Effeuille-les un à un et trempe les feuilles dans une huile d\'olive citronnée.',
        instructions: [
          'Préchauffe le four à 200 °C et garnis une plaque de papier cuisson.',
          'Pare les artichauts : coupe 2–3 cm du haut et un peu de la tige, pèle la tige et retire les feuilles extérieures dures et foncées.',
          'Coupe-les en deux dans la longueur, retire le foin et trempe aussitôt les faces coupées dans le jus de citron pour qu\'elles ne noircissent pas.',
          'Pose-les face coupée vers le haut, arrose chaque moitié d\'une cuillère à café d\'huile et ajoute sel, poivre, ail et herbes. Retourne-les face coupée vers le bas et rôtis 30–35 minutes.',
          'Fouette le reste du jus de citron avec 3 cuillères à soupe d\'huile, assaisonne et sers à côté pour tremper.'
        ]
      }
    },
    ingredients: [
      ing('Lemon', 'Citroen', 'Citron', 1, 'st.'),
      ing('Artichokes', 'Artisjokken', 'Artichauts', 3, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 5, 'el'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Thyme', 'Tijm', 'Thym', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'cool-sardine-salad',
    prepTime: '10 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main', 'snack'],
    translations: {
      en: {
        title: 'Sardine, Fennel & Avocado Salad',
        subtitle: 'Ten minutes from tin to table',
        description: 'Sardines broken up with crisp fennel, cucumber, red onion and avocado in a dill vinaigrette. A lunch that needs no cooking at all.',
        instructions: [
          'Shake the olive oil, apple cider vinegar and dill together in a jar and season. Keep what you don\'t use in the fridge.',
          'Break the drained sardines into pieces with a fork in a bowl.',
          'Add the fennel, cucumber, red onion, avocado and 2 tablespoons of the vinaigrette and toss.',
          'Season and finish with chopped dill.'
        ]
      },
      nl: {
        title: 'Salade van sardines, venkel en avocado',
        subtitle: 'Tien minuten van blik tot bord',
        description: 'Sardines in stukjes met knapperige venkel, komkommer, rode ui en avocado in een dillevinaigrette. Een lunch die helemaal niet gekookt hoeft te worden.',
        instructions: [
          'Schud de olijfolie, appelciderazijn en dille samen in een potje en kruid. Bewaar wat je niet gebruikt in de koelkast.',
          'Breek de uitgelekte sardines met een vork in stukjes in een kom.',
          'Voeg de venkel, komkommer, rode ui, avocado en 2 eetlepels vinaigrette toe en meng.',
          'Kruid en werk af met gehakte dille.'
        ]
      },
      fr: {
        title: 'Salade sardines, fenouil et avocat',
        subtitle: 'Dix minutes de la boîte à l\'assiette',
        description: 'Des sardines émiettées avec du fenouil croquant, du concombre, de l\'oignon rouge et de l\'avocat dans une vinaigrette à l\'aneth. Un déjeuner sans aucune cuisson.',
        instructions: [
          'Secoue l\'huile d\'olive, le vinaigre de cidre et l\'aneth dans un bocal et assaisonne. Garde le reste au frigo.',
          'Émiette les sardines égouttées à la fourchette dans un bol.',
          'Ajoute le fenouil, le concombre, l\'oignon rouge, l\'avocat et 2 cuillères à soupe de vinaigrette, et mélange.',
          'Assaisonne et termine avec de l\'aneth haché.'
        ]
      }
    },
    ingredients: [
      ing('Sardines', 'Sardines', 'Sardines', 115, 'g'),
      ing('Fennel', 'Venkel', 'Fenouil', 45, 'g'),
      ing('Cucumber', 'Komkommer', 'Concombre', 0.25, 'st.'),
      ing('Red onion', 'Rode ui', 'Oignon rouge', 0.25, 'st.'),
      ing('Avocado', 'Avocado', 'Avocat', 0.5, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 6, 'el'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 2, 'el'),
      ing('Dill', 'Dille', 'Aneth', 2, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'ajvar-dip',
    prepTime: '10 mins',
    cookTime: '30 mins',
    difficulty: diff.easy,
    servings: 6,
    category: ['snack'],
    wiki: ['en:Ajvar'],
    translations: {
      en: {
        title: 'Ajvar',
        subtitle: 'Smoky roasted pepper and aubergine spread',
        description: 'The Balkan relish: peppers and aubergine roasted until their skins blacken, peeled and blended with garlic, parsley, lemon and olive oil. Keeps a week in the fridge.',
        instructions: [
          'Heat the oven to 240 °C. Roast the aubergine and peppers on a tray for about 30 minutes, until the skins blacken.',
          'Put them in a covered bowl for 10–15 minutes — the steam loosens the skins — then peel them.',
          'Blend the flesh with the garlic, parsley, lemon juice and olive oil until smooth and season.',
          'Finish with a little more parsley. It keeps in a closed jar in the fridge for up to a week.'
        ]
      },
      nl: {
        title: 'Ajvar',
        subtitle: 'Rokerige spread van geroosterde paprika en aubergine',
        description: 'De Balkanspread: paprika en aubergine geroosterd tot het vel zwart wordt, gepeld en gemixt met look, peterselie, citroen en olijfolie. Blijft een week goed in de koelkast.',
        instructions: [
          'Verwarm de oven voor op 240 °C. Rooster de aubergine en paprika\'s zo\'n 30 minuten op een bakplaat, tot het vel zwart wordt.',
          'Doe ze 10–15 minuten in een afgedekte kom — de stoom maakt het vel los — en pel ze.',
          'Mix het vruchtvlees met de look, peterselie, het citroensap en de olijfolie glad en kruid.',
          'Werk af met nog wat peterselie. In een gesloten pot blijft het tot een week goed in de koelkast.'
        ]
      },
      fr: {
        title: 'Ajvar',
        subtitle: 'Une tartinade fumée de poivron et d\'aubergine rôtis',
        description: 'Le condiment des Balkans : poivrons et aubergine rôtis jusqu\'à ce que la peau noircisse, pelés et mixés avec ail, persil, citron et huile d\'olive. Se garde une semaine au frigo.',
        instructions: [
          'Préchauffe le four à 240 °C. Rôtis l\'aubergine et les poivrons sur une plaque environ 30 minutes, jusqu\'à ce que la peau noircisse.',
          'Mets-les 10–15 minutes dans un bol couvert — la vapeur décolle la peau — puis pèle-les.',
          'Mixe la chair avec l\'ail, le persil, le jus de citron et l\'huile d\'olive jusqu\'à ce que ce soit lisse et assaisonne.',
          'Termine avec un peu de persil. Se garde jusqu\'à une semaine au frigo dans un bocal fermé.'
        ]
      }
    },
    ingredients: [
      ing('Eggplant', 'Aubergine', 'Aubergine', 1, 'st.'),
      ing('Red bell pepper', 'Rode paprika', 'Poivron rouge', 2, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Parsley', 'Peterselie', 'Persil', 15, 'g'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 2, 'el'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 60, 'ml'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'buckwheat-ravioli',
    prepTime: '35 mins',
    cookTime: '30 mins',
    difficulty: diff.medium,
    servings: 6,
    category: ['main'],
    translations: {
      en: {
        title: 'Buckwheat Ravioli',
        subtitle: 'Homemade, filled with meat and greens',
        description: 'Ravioli made from a buckwheat and egg dough, filled with minced meat, chard and a little nutmeg. A weekend project, served with ajvar from this book.',
        instructions: [
          'For the filling, soften the onion and garlic in the oil over medium heat for about 4 minutes. Brown the minced meat for 5 minutes, add the greens and cook until wilted. Season with nutmeg, salt and pepper and let it cool.',
          'Whisk the buckwheat flour and salt, then work in the yolks, egg and oil with a fork, adding water a tablespoon at a time until it comes together. Knead briefly and let it rest for 30 minutes.',
          'Roll the dough out to about 3 mm and cut out 7–8 cm circles. Put a spoon of filling on each, fold over and press the edges firmly to seal.',
          'Cook in batches in boiling salted water for 5–7 minutes, until tender. Lift them out with a slotted spoon and serve with ajvar.'
        ]
      },
      nl: {
        title: 'Boekweitravioli',
        subtitle: 'Zelfgemaakt, gevuld met vlees en groen',
        description: 'Ravioli van een deeg van boekweit en ei, gevuld met gehakt, snijbiet en een beetje nootmuskaat. Een weekendproject, lekker met de ajvar uit dit boek.',
        instructions: [
          'Voor de vulling stoof je de ui en look zo\'n 4 minuten zacht in de olie op middelhoog vuur. Bak het gehakt 5 minuten bruin, voeg het groen toe en laat slinken. Kruid met nootmuskaat, zout en peper en laat afkoelen.',
          'Klop het boekweitmeel en zout door elkaar en werk er met een vork de dooiers, het ei en de olie door, en voeg eetlepel per eetlepel water toe tot het samenkomt. Kneed kort en laat 30 minuten rusten.',
          'Rol het deeg uit tot zo\'n 3 mm en steek er rondjes van 7–8 cm uit. Leg op elk een lepel vulling, vouw dicht en druk de randen stevig aan.',
          'Kook ze in porties 5–7 minuten in kokend gezouten water, tot ze zacht zijn. Schep ze eruit met een schuimspaan en dien op met ajvar.'
        ]
      },
      fr: {
        title: 'Raviolis au sarrasin',
        subtitle: 'Faits maison, farcis de viande et de verdure',
        description: 'Des raviolis à la pâte de sarrasin et d\'œuf, farcis de viande hachée, de blettes et d\'un soupçon de muscade. Un projet du week-end, à servir avec l\'ajvar de ce livre.',
        instructions: [
          'Pour la farce, fais fondre l\'oignon et l\'ail dans l\'huile à feu moyen environ 4 minutes. Dore la viande hachée 5 minutes, ajoute la verdure et laisse-la tomber. Assaisonne de muscade, de sel et de poivre et laisse refroidir.',
          'Fouette la farine de sarrasin et le sel, puis incorpore à la fourchette les jaunes, l\'œuf et l\'huile, en ajoutant de l\'eau cuillère par cuillère jusqu\'à ce que la pâte se forme. Pétris brièvement et laisse reposer 30 minutes.',
          'Étale la pâte à environ 3 mm et découpe des disques de 7–8 cm. Dépose une cuillère de farce sur chacun, replie et presse fermement les bords.',
          'Cuis-les par fournées 5–7 minutes dans de l\'eau bouillante salée, jusqu\'à ce qu\'ils soient tendres. Retire-les à l\'écumoire et sers avec de l\'ajvar.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Ground chicken', 'Kipgehakt', 'Poulet haché', 450, 'g'),
      ing('Swiss chard', 'Snijbiet', 'Blettes', 225, 'g'),
      ing('Nutmeg', 'Nootmuskaat', 'Muscade', 1, 'pinch'),
      ing('Buckwheat flour', 'Boekweitmeel', 'Farine de sarrasin', 240, 'g'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl'),
      ing('Egg yolk', 'Eidooier', 'Jaune d\'oeuf', 2, 'st.'),
      ing('Egg', 'Ei', 'Oeuf', 1, 'st.'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'rutabaga-nachos',
    prepTime: '10 mins',
    cookTime: '30 mins',
    difficulty: diff.medium,
    servings: 4,
    category: ['main', 'snack'],
    translations: {
      en: {
        title: 'Swede Nachos',
        subtitle: 'Baked swede chips under spiced mince and guacamole',
        description: 'Thin slices of swede baked into crisp chips, piled with taco-spiced mince, guacamole, yogurt and fresh toppings. A sharing plate for a film night.',
        instructions: [
          'Heat the oven to 200 °C. Toss the swede slices with the oil, lay them in a single layer on oiled trays and salt them.',
          'Bake for 25–30 minutes, turning halfway, in batches if needed. Drain on kitchen paper — they crisp up as they cool.',
          'Brown the mince in half a tablespoon of oil over medium heat for about 5 minutes.',
          'Add the chilli powder, onion powder, cumin, garlic powder, paprika, oregano and salt, pour in the water and simmer uncovered for 15–20 minutes, until the liquid has gone.',
          'Layer the chips with the meat, guacamole and yogurt, and scatter over red pepper, red onion, spring onion and coriander.'
        ]
      },
      nl: {
        title: 'Koolraapnacho\'s',
        subtitle: 'Gebakken koolraapchips onder gekruid gehakt en guacamole',
        description: 'Dunne plakjes koolraap gebakken tot krokante chips, met taco-gekruid gehakt, guacamole, yoghurt en frisse toppings erop. Een deelschotel voor een filmavond.',
        instructions: [
          'Verwarm de oven voor op 200 °C. Meng de plakjes koolraap met de olie, leg ze in één laag op ingevette bakplaten en bestrooi met zout.',
          'Bak 25–30 minuten, halverwege omdraaien, in porties als het nodig is. Laat uitlekken op keukenpapier — ze worden krokant terwijl ze afkoelen.',
          'Bak het gehakt zo\'n 5 minuten bruin in een halve eetlepel olie op middelhoog vuur.',
          'Voeg het chilipoeder, uienpoeder, de komijn, het lookpoeder, paprikapoeder, de oregano en het zout toe, giet het water erbij en laat 15–20 minuten zonder deksel pruttelen tot het vocht weg is.',
          'Leg de chips in lagen met het vlees, guacamole en yoghurt, en strooi er rode paprika, rode ui, lente-ui en koriander over.'
        ]
      },
      fr: {
        title: 'Nachos de rutabaga',
        subtitle: 'Des chips de rutabaga sous de la viande épicée et du guacamole',
        description: 'De fines tranches de rutabaga cuites en chips croustillantes, garnies de viande hachée épicée façon taco, de guacamole, de yaourt et de garnitures fraîches. Un plat à partager pour une soirée film.',
        instructions: [
          'Préchauffe le four à 200 °C. Enrobe les tranches de rutabaga d\'huile, dispose-les en une couche sur des plaques huilées et sale-les.',
          'Enfourne 25–30 minutes en retournant à mi-cuisson, par fournées si besoin. Égoutte sur du papier absorbant — elles croustillent en refroidissant.',
          'Dore la viande hachée dans une demi-cuillère à soupe d\'huile à feu moyen environ 5 minutes.',
          'Ajoute le piment, la poudre d\'oignon, le cumin, l\'ail en poudre, le paprika, l\'origan et le sel, verse l\'eau et laisse mijoter à découvert 15–20 minutes, jusqu\'à ce que le liquide ait disparu.',
          'Superpose les chips, la viande, le guacamole et le yaourt, et parsème de poivron rouge, d\'oignon rouge, d\'oignon nouveau et de coriandre.'
        ]
      }
    },
    ingredients: [
      ing('Rutabaga', 'Koolraap', 'Rutabaga', 3, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 3.5, 'el'),
      ing('Salt', 'Zout', 'Sel', 2, 'kl'),
      ing('Ground beef', 'Rundsgehakt', 'Bœuf haché', 450, 'g'),
      ing('Chili powder', 'Chilipoeder', 'Piment en poudre', 1, 'el'),
      ing('Onion powder', 'Uienpoeder', 'Poudre d\'oignon', 2, 'kl'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 1, 'kl'),
      ing('Garlic powder', 'Lookpoeder', 'Ail en poudre', 1, 'kl'),
      ing('Paprika', 'Paprikapoeder', 'Paprika', 1, 'kl'),
      ing('Dried oregano', 'Gedroogde oregano', 'Origan séché', 1, 'kl'),
      ing('Water', 'Water', 'Eau', 240, 'ml'),
      ing('Red bell pepper', 'Rode paprika', 'Poivron rouge', 1, 'st.'),
      ing('Red onion', 'Rode ui', 'Oignon rouge', 0.5, 'st.'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 2, 'st.'),
      ing('Coriander', 'Koriander', 'Coriandre', 2, 'el'),
      ing('Avocado', 'Avocado', 'Avocat', 2, 'st.'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 120, 'ml')
    ]
  },

  {
    slug: 'chicken-piccata',
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    wiki: ['en:Piccata'],
    translations: {
      en: {
        title: 'Chicken Piccata',
        subtitle: 'Thin chicken in a lemon, butter and olive sauce',
        description: 'Flattened chicken seared in a minute, then sauced with stock, lemon, a knob of butter and green olives standing in for capers. Twenty minutes, start to finish.',
        instructions: [
          'Heat the oven to 120 °C if you want to keep the chicken warm. Flatten the chicken to about 5 mm and season.',
          'Sear it in a tablespoon of oil over medium-high heat, 1–2 minutes a side, in batches. Keep it warm.',
          'In the same pan, heat another tablespoon of oil over medium heat and fry the onion and garlic for a minute.',
          'Whisk in the stock and coconut flour and simmer for 2–3 minutes, until it thickens.',
          'Off the heat, stir in the butter, lemon juice and olives. Pour the sauce over the chicken and finish with parsley and lemon slices.'
        ]
      },
      nl: {
        title: 'Kippiccata',
        subtitle: 'Dunne kip in een saus van citroen, boter en olijven',
        description: 'Platgeslagen kip in een minuutje dichtgeschroeid, en dan in een saus van bouillon, citroen, een klontje boter en groene olijven in plaats van kappertjes. Twintig minuten, van begin tot eind.',
        instructions: [
          'Verwarm de oven voor op 120 °C als je de kip warm wilt houden. Plet de kip tot zo\'n 5 mm en kruid.',
          'Schroei ze in porties dicht in een eetlepel olie op middelhoog tot hoog vuur, 1–2 minuten per kant. Hou warm.',
          'Verhit in dezelfde pan nog een eetlepel olie op middelhoog vuur en bak de ui en look een minuutje.',
          'Klop de bouillon en het kokosmeel erdoor en laat 2–3 minuten pruttelen tot het indikt.',
          'Roer van het vuur de boter, het citroensap en de olijven erdoor. Giet de saus over de kip en werk af met peterselie en schijfjes citroen.'
        ]
      },
      fr: {
        title: 'Poulet piccata',
        subtitle: 'Du poulet fin dans une sauce citron, beurre et olives',
        description: 'Du poulet aplati saisi en une minute, puis nappé d\'une sauce au bouillon, au citron, d\'une noisette de beurre et d\'olives vertes à la place des câpres. Vingt minutes, du début à la fin.',
        instructions: [
          'Préchauffe le four à 120 °C si tu veux garder le poulet au chaud. Aplatis le poulet à environ 5 mm et assaisonne.',
          'Saisis-le dans une cuillère à soupe d\'huile à feu moyen-vif, 1–2 minutes par face, en plusieurs fois. Garde au chaud.',
          'Dans la même poêle, chauffe une autre cuillère d\'huile à feu moyen et fais revenir l\'oignon et l\'ail une minute.',
          'Fouette le bouillon et la farine de coco et laisse frémir 2–3 minutes, jusqu\'à ce que ça épaississe.',
          'Hors du feu, ajoute le beurre, le jus de citron et les olives. Nappe le poulet de sauce et termine avec du persil et des rondelles de citron.'
        ]
      }
    },
    ingredients: [
      ing('Chicken tenders', 'Kipreepjes', 'Aiguillettes de poulet', 450, 'g'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 3, 'el'),
      ing('Onion', 'Ui', 'Oignon', 40, 'g'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Chicken broth', 'Kippenbouillon', 'Bouillon de volaille', 360, 'ml'),
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 1, 'kl'),
      ing('Butter', 'Boter', 'Beurre', 1, 'el'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 2, 'el'),
      ing('Green olives', 'Groene olijven', 'Olives vertes', 35, 'g'),
      ing('Parsley', 'Peterselie', 'Persil', 2, 'el'),
      ing('Lemon', 'Citroen', 'Citron', 1, 'st.'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'green-chili-chicken-stew',
    prepTime: '20 mins',
    cookTime: '30 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['soup', 'main'],
    translations: {
      en: {
        title: 'Green Chilli Chicken Stew',
        subtitle: 'A brothy pot with courgette, squash and lime',
        description: 'Courgette, squash, onion and celery simmered in chicken broth with shredded chicken, green chillies and oregano, finished with lime. Good for using up leftover roast chicken.',
        instructions: [
          'Heat the oil in a large pot over medium heat and fry the courgette, squash, onion, celery and garlic for about 5 minutes, until they start to soften.',
          'Pour in the broth and bring it to the boil.',
          'Turn the heat down, add the chicken, chillies, oregano, salt and pepper, and simmer covered on medium-low for 15–20 minutes.',
          'Stir in the lime juice just before serving and top with avocado, coriander and lime wedges.'
        ]
      },
      nl: {
        title: 'Kipstoofpot met groene chili',
        subtitle: 'Een bouillonrijke pot met courgette, pompoen en limoen',
        description: 'Courgette, gele courgette, ui en selder gesudderd in kippenbouillon met geplukte kip, groene chilipepers en oregano, afgewerkt met limoen. Ideaal voor restjes gebraden kip.',
        instructions: [
          'Verhit de olie in een grote pot op middelhoog vuur en bak de courgette, gele courgette, ui, selder en look zo\'n 5 minuten, tot ze beginnen te verzachten.',
          'Giet de bouillon erbij en breng aan de kook.',
          'Zet het vuur lager, voeg de kip, chilipepers, oregano, zout en peper toe en laat met deksel 15–20 minuten sudderen op middellaag vuur.',
          'Roer vlak voor het opdienen het limoensap erdoor en werk af met avocado, koriander en partjes limoen.'
        ]
      },
      fr: {
        title: 'Mijoté de poulet au piment vert',
        subtitle: 'Une marmite bien bouillonnante, courgette, courge et citron vert',
        description: 'Courgette, courge, oignon et céleri mijotés dans un bouillon de volaille avec du poulet effiloché, des piments verts et de l\'origan, fini au citron vert. Parfait pour un reste de poulet rôti.',
        instructions: [
          'Chauffe l\'huile dans une grande cocotte à feu moyen et fais revenir la courgette, la courge, l\'oignon, le céleri et l\'ail environ 5 minutes, jusqu\'à ce qu\'ils commencent à s\'attendrir.',
          'Verse le bouillon et porte à ébullition.',
          'Baisse le feu, ajoute le poulet, les piments, l\'origan, le sel et le poivre, et laisse mijoter à couvert à feu moyen-doux 15–20 minutes.',
          'Ajoute le jus de citron vert juste avant de servir et garnis d\'avocat, de coriandre et de quartiers de citron vert.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Zucchini', 'Courgette', 'Courgette', 60, 'g'),
      ing('Yellow squash', 'Gele courgette', 'Courgette jaune', 60, 'g'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Celery stalks', 'Bladselder', 'Céleri branche', 2, 'st.'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Chicken broth', 'Kippenbouillon', 'Bouillon de volaille', 960, 'ml'),
      ing('Cooked chicken', 'Gebakken kip', 'Poulet cuit', 225, 'g'),
      ing('Green chilies', 'Groene chilipepers', 'Piments verts', 70, 'g'),
      ing('Dried oregano', 'Gedroogde oregano', 'Origan séché', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.25, 'kl'),
      ing('Lime juice', 'Limoensap', 'Jus de citron vert', 2, 'el'),
      ing('Avocado', 'Avocado', 'Avocat', 1, 'st.'),
      ing('Coriander', 'Koriander', 'Coriandre', 1, 'el')
    ]
  }
];
