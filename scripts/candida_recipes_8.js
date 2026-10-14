// Candida-diet dishes, batch 8. See candida_recipes.js for how these were made.

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });
const diff = {
  easy: { en: 'Easy', nl: 'Makkelijk', fr: 'Facile' },
  medium: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' }
};

module.exports = [
  {
    slug: 'zucchini-noodle-salad-grilled-steak',
    prepTime: '15 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Courgette Noodle Salad with Steak',
        subtitle: 'Cool noodles, warm steak, lots of herbs',
        description: 'Raw courgette noodles tossed with spring onion and a handful of mint, coriander and parsley, dressed with olive oil and coconut aminos and topped with slices of grilled steak.',
        instructions: [
          'Grill or pan-fry the steak to your liking, let it rest and slice it thinly.',
          'Mix the courgette noodles, spring onions and most of the herbs in a large bowl. Cover and keep in the fridge until you eat.',
          'Shake the olive oil, coconut aminos, salt and pepper together in a jar.',
          'Just before serving, pour the dressing over the noodles and toss. Lay the steak on top and finish with the rest of the herbs.'
        ]
      },
      nl: {
        title: 'Courgettinoedelsalade met steak',
        subtitle: 'Frisse noedels, warme steak, veel kruiden',
        description: 'Rauwe courgettinoedels gemengd met lente-ui en een handvol munt, koriander en peterselie, aangemaakt met olijfolie en kokosaminos en met reepjes gegrilde steak erop.',
        instructions: [
          'Grill of bak de steak zoals je hem graag hebt, laat rusten en snijd in dunne reepjes.',
          'Meng de courgettinoedels, lente-ui en het grootste deel van de kruiden in een grote kom. Dek af en zet in de koelkast tot je eet.',
          'Schud de olijfolie, kokosaminos, zout en peper samen in een potje.',
          'Giet de dressing vlak voor het opdienen over de noedels en meng. Leg de steak erop en werk af met de rest van de kruiden.'
        ]
      },
      fr: {
        title: 'Salade de nouilles de courgette au steak',
        subtitle: 'Nouilles fraîches, steak chaud, beaucoup d\'herbes',
        description: 'Des nouilles de courgette crue mêlées à l\'oignon nouveau et à une poignée de menthe, de coriandre et de persil, assaisonnées d\'huile d\'olive et d\'aminos de coco et garnies de tranches de steak grillé.',
        instructions: [
          'Grille ou poêle le steak à ton goût, laisse-le reposer et tranche-le finement.',
          'Mélange les nouilles de courgette, les oignons nouveaux et la plupart des herbes dans un grand saladier. Couvre et garde au frigo jusqu\'au repas.',
          'Secoue l\'huile d\'olive, les aminos de coco, le sel et le poivre dans un bocal.',
          'Juste avant de servir, verse la sauce sur les nouilles et mélange. Pose le steak dessus et termine avec le reste des herbes.'
        ]
      }
    },
    ingredients: [
      ing('Beef steak', 'Rundersteak', 'Steak de bœuf', 250, 'g'),
      ing('Zucchini', 'Courgette', 'Courgette', 2, 'st.'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 2, 'st.'),
      ing('Mint', 'Munt', 'Menthe', 1, 'el'),
      ing('Coriander', 'Koriander', 'Coriandre', 1, 'el'),
      ing('Parsley', 'Peterselie', 'Persil', 2, 'el'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'spanish-cucumber-rolls',
    prepTime: '15 mins',
    cookTime: '15 mins',
    difficulty: diff.medium,
    servings: 2,
    category: ['snack'],
    translations: {
      en: {
        title: 'Spanish Cucumber Rolls',
        subtitle: 'Saffron yogurt, roasted pepper and olives, tied with chives',
        description: 'Thin ribbons of cucumber rolled around a saffron-scented yogurt filling with roasted pepper, olives and toasted almonds, each one tied with a chive. An elegant little starter.',
        instructions: [
          'Slice the cucumber lengthwise into thin strips with a mandoline and lay them on kitchen paper to drain.',
          'Stir the yogurt with the roasted garlic, red pepper, olives, almonds, parsley, salt and a tiny pinch of saffron. Season with pepper.',
          'Put a rounded teaspoon of filling at one end of each strip and roll it up.',
          'Tie each roll with a chive and chill before serving.'
        ]
      },
      nl: {
        title: 'Spaanse komkommerrolletjes',
        subtitle: 'Saffraanyoghurt, geroosterde paprika en olijven, dichtgebonden met bieslook',
        description: 'Dunne linten komkommer opgerold rond een vulling van yoghurt met saffraan, geroosterde paprika, olijven en geroosterde amandelen, elk dichtgebonden met een sprietje bieslook. Een elegant voorgerechtje.',
        instructions: [
          'Snijd de komkommer met een mandoline in de lengte in dunne linten en laat ze uitlekken op keukenpapier.',
          'Roer de yoghurt met de geroosterde look, rode paprika, olijven, amandelen, peterselie, zout en een heel klein snuifje saffraan. Kruid met peper.',
          'Leg een bolle theelepel vulling aan het ene uiteinde van elk lint en rol op.',
          'Bind elk rolletje dicht met een sprietje bieslook en laat opstijven in de koelkast.'
        ]
      },
      fr: {
        title: 'Roulés de concombre à l\'espagnole',
        subtitle: 'Yaourt au safran, poivron rôti et olives, noués à la ciboulette',
        description: 'De fins rubans de concombre roulés autour d\'une farce au yaourt parfumée au safran, avec poivron rôti, olives et amandes grillées, chacun noué d\'un brin de ciboulette. Une petite entrée élégante.',
        instructions: [
          'Taille le concombre en fines lanières dans la longueur à la mandoline et égoutte-les sur du papier absorbant.',
          'Mélange le yaourt avec l\'ail rôti, le poivron rouge, les olives, les amandes, le persil, le sel et une toute petite pincée de safran. Poivre.',
          'Dépose une cuillère à café bombée de farce au bout de chaque lanière et roule.',
          'Noue chaque roulé avec un brin de ciboulette et mets au frais avant de servir.'
        ]
      }
    },
    ingredients: [
      ing('Cucumber', 'Komkommer', 'Concombre', 1, 'st.'),
      ing('Greek yogurt', 'Griekse yoghurt', 'Yaourt grec', 60, 'ml'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Roasted red pepper', 'Geroosterde rode paprika', 'Poivron rouge grillé', 2, 'el'),
      ing('Black olives', 'Zwarte olijven', 'Olives noires', 2, 'el'),
      ing('Flaked almonds', 'Amandelschilfers', 'Amandes effilées', 2, 'el'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl'),
      ing('Saffron', 'Saffraan', 'Safran', 1, 'pinch'),
      ing('Chives', 'Bieslook', 'Ciboulette', 1, 'bunch'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'spring-salad-mustard-tarragon-dressing',
    prepTime: '15 mins',
    cookTime: '5 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Spring Salad with Mustard-Tarragon Dressing',
        subtitle: 'Asparagus, radish and pumpkin seeds',
        description: 'Tender asparagus, peppery radishes and young leaves in a sharp mustard and tarragon dressing, with toasted pumpkin seeds for crunch. Made for asparagus season.',
        instructions: [
          'Peel the asparagus below the tips and cut it diagonally into 5 cm pieces.',
          'Simmer them in salted water until a fork goes in easily, then let them cool.',
          'Shake the mustard powder, shallot, tarragon, vinegar, olive oil, salt and pepper together in a jar.',
          'Pour some dressing into a bowl, add the asparagus, leaves and sliced radishes and toss. Scatter over the pumpkin seeds.'
        ]
      },
      nl: {
        title: 'Lentesalade met mosterd-dragondressing',
        subtitle: 'Asperges, radijsjes en pompoenpitten',
        description: 'Malse asperges, pittige radijsjes en jonge blaadjes in een frisse dressing van mosterd en dragon, met geroosterde pompoenpitten voor de knapperigheid. Gemaakt voor het aspergeseizoen.',
        instructions: [
          'Schil de asperges onder de kopjes en snijd ze schuin in stukken van 5 cm.',
          'Laat ze zachtjes koken in gezouten water tot een vork er makkelijk in gaat en laat afkoelen.',
          'Schud het mosterdpoeder, de sjalot, dragon, azijn, olijfolie, zout en peper samen in een potje.',
          'Giet wat dressing in een kom, voeg de asperges, blaadjes en gesneden radijsjes toe en meng. Strooi de pompoenpitten erover.'
        ]
      },
      fr: {
        title: 'Salade de printemps, sauce moutarde-estragon',
        subtitle: 'Asperges, radis et graines de courge',
        description: 'Des asperges tendres, des radis piquants et de jeunes pousses dans une sauce vive à la moutarde et à l\'estragon, avec des graines de courge grillées pour le croquant. Faite pour la saison des asperges.',
        instructions: [
          'Pèle les asperges sous les pointes et coupe-les en biais en tronçons de 5 cm.',
          'Fais-les frémir dans de l\'eau salée jusqu\'à ce qu\'une fourchette s\'y enfonce facilement, puis laisse refroidir.',
          'Secoue la moutarde en poudre, l\'échalote, l\'estragon, le vinaigre, l\'huile d\'olive, le sel et le poivre dans un bocal.',
          'Verse un peu de sauce dans un saladier, ajoute les asperges, les pousses et les radis émincés et mélange. Parsème de graines de courge.'
        ]
      }
    },
    ingredients: [
      ing('Asparagus', 'Groene asperges', 'Asperges vertes', 12, 'st.'),
      ing('Mixed salad greens', 'Gemengde sla', 'Mesclun', 90, 'g'),
      ing('Radishes', 'Radijsjes', 'Radis', 2, 'st.'),
      ing('Pumpkin seeds', 'Pompoenpitten', 'Graines de courge', 35, 'g'),
      ing('Mustard powder', 'Mosterdpoeder', 'Moutarde en poudre', 1, 'kl'),
      ing('Shallot', 'Sjalot', 'Échalote', 1, 'el'),
      ing('Tarragon', 'Dragon', 'Estragon', 1, 'el'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 3, 'el'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 60, 'ml'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'roasted-chicken-with-vegetables',
    prepTime: '15 mins',
    cookTime: '1 hr 15 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Roast Chicken with Fennel & Swede',
        subtitle: 'A whole chicken in pieces, on a bed of vegetables',
        description: 'Chicken pieces rubbed with a paprika herb mix and roasted on onion, fennel, pepper and swede with lemon, garlic, olives and thyme. Sunday dinner in one tin.',
        instructions: [
          'Shake the paprika, garlic powder, onion powder, salt, pepper, rosemary, oregano and cayenne together in a jar.',
          'Heat the oven to 220 °C. Spread the onion, fennel, pepper and swede in a roasting tin.',
          'Lay the chicken on top and add 2 tablespoons of the spice mix, the olive oil, lemon, garlic, olives, thyme and stock.',
          'Roast for 15 minutes and baste with the juices. Turn the oven down to 190 °C and roast for about an hour more, until the juices run clear (74 °C inside).',
          'Let it rest for 10 minutes and finish with fresh thyme.'
        ]
      },
      nl: {
        title: 'Gebraden kip met venkel en koolraap',
        subtitle: 'Een hele kip in stukken, op een bedje groenten',
        description: 'Kippenstukken ingewreven met een kruidenmix van paprika en geroosterd op ui, venkel, paprika en koolraap met citroen, look, olijven en tijm. Zondagsmaal in één ovenschaal.',
        instructions: [
          'Schud het paprikapoeder, lookpoeder, uienpoeder, zout, peper, rozemarijn, oregano en cayenne samen in een potje.',
          'Verwarm de oven voor op 220 °C. Verdeel de ui, venkel, paprika en koolraap over een braadslede.',
          'Leg de kip erop en voeg 2 eetlepels kruidenmix, de olijfolie, citroen, look, olijven, tijm en bouillon toe.',
          'Rooster 15 minuten en overgiet met het braadvocht. Zet de oven lager op 190 °C en rooster nog zo\'n uur, tot het vocht helder is (74 °C vanbinnen).',
          'Laat 10 minuten rusten en werk af met verse tijm.'
        ]
      },
      fr: {
        title: 'Poulet rôti au fenouil et au rutabaga',
        subtitle: 'Un poulet entier découpé, sur un lit de légumes',
        description: 'Des morceaux de poulet frottés d\'un mélange paprika-herbes et rôtis sur oignon, fenouil, poivron et rutabaga avec citron, ail, olives et thym. Le repas du dimanche dans un seul plat.',
        instructions: [
          'Secoue le paprika, l\'ail en poudre, la poudre d\'oignon, le sel, le poivre, le romarin, l\'origan et le cayenne dans un bocal.',
          'Préchauffe le four à 220 °C. Étale l\'oignon, le fenouil, le poivron et le rutabaga dans un plat à rôtir.',
          'Pose le poulet dessus et ajoute 2 cuillères à soupe du mélange d\'épices, l\'huile d\'olive, le citron, l\'ail, les olives, le thym et le bouillon.',
          'Rôtis 15 minutes et arrose avec le jus. Baisse le four à 190 °C et rôtis encore environ une heure, jusqu\'à ce que le jus soit clair (74 °C à cœur).',
          'Laisse reposer 10 minutes et termine avec du thym frais.'
        ]
      }
    },
    ingredients: [
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Fennel', 'Venkel', 'Fenouil', 1, 'st.'),
      ing('Yellow bell pepper', 'Gele paprika', 'Poivron jaune', 1, 'st.'),
      ing('Rutabaga', 'Koolraap', 'Rutabaga', 1, 'st.'),
      ing('Whole chicken', 'Hele kip', 'Poulet entier', 1, 'st.'),
      ing('Paprika', 'Paprikapoeder', 'Paprika', 1, 'el'),
      ing('Garlic powder', 'Lookpoeder', 'Ail en poudre', 1, 'kl'),
      ing('Onion powder', 'Uienpoeder', 'Poudre d\'oignon', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1.5, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.5, 'kl'),
      ing('Dried rosemary', 'Gedroogde rozemarijn', 'Romarin séché', 1, 'kl'),
      ing('Dried oregano', 'Gedroogde oregano', 'Origan séché', 1, 'kl'),
      ing('Cayenne pepper', 'Cayennepeper', 'Piment de Cayenne', 0.5, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Lemon', 'Citroen', 'Citron', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 6, 'st.'),
      ing('Black olives', 'Zwarte olijven', 'Olives noires', 70, 'g'),
      ing('Thyme', 'Tijm', 'Thym', 1, 'bunch'),
      ing('Chicken broth', 'Kippenbouillon', 'Bouillon de volaille', 240, 'ml')
    ]
  },

  {
    slug: 'grilled-chicken-with-bok-choy-in-coconut-milk',
    prepTime: '10 mins',
    cookTime: '25 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Grilled Chicken with Bok Choy in Coconut Milk',
        subtitle: 'Turmeric broth, tender greens, charred chicken',
        description: 'Baby bok choy and spring onions poached in coconut milk with ginger, garlic and turmeric, with sliced grilled chicken laid on top. Serve with quinoa to soak up the sauce.',
        instructions: [
          'Heat the coconut oil in a large frying pan over medium heat and fry the garlic and ginger for 30 seconds.',
          'Whisk in the coconut milk, turmeric and salt and bring to a gentle boil. Add the bok choy and spring onions, cover and simmer on medium-low for 5 minutes.',
          'Stir in the coconut aminos and chilli flakes, add the basil and keep warm.',
          'Cook the chicken in a hot griddle pan for about 5 minutes a side, until cooked through. Season and slice.',
          'Lay the chicken over the bok choy and serve with quinoa.'
        ]
      },
      nl: {
        title: 'Gegrilde kip met paksoi in kokosmelk',
        subtitle: 'Bouillon met kurkuma, zacht groen, geblakerde kip',
        description: 'Mini-paksoi en lente-ui gepocheerd in kokosmelk met gember, look en kurkuma, met reepjes gegrilde kip erop. Lekker met quinoa om de saus op te nemen.',
        instructions: [
          'Verhit de kokosolie in een grote pan op middelhoog vuur en bak de look en gember 30 seconden.',
          'Klop de kokosmelk, kurkuma en het zout erdoor en breng zachtjes aan de kook. Voeg de paksoi en lente-ui toe, leg het deksel erop en laat 5 minuten sudderen op middellaag vuur.',
          'Roer de kokosaminos en chilivlokken erdoor, voeg de basilicum toe en hou warm.',
          'Bak de kip in een hete grillpan zo\'n 5 minuten per kant, tot ze gaar is. Kruid en snijd in reepjes.',
          'Leg de kip op de paksoi en dien op met quinoa.'
        ]
      },
      fr: {
        title: 'Poulet grillé et bok choy au lait de coco',
        subtitle: 'Bouillon au curcuma, verdure tendre, poulet grillé',
        description: 'Des mini bok choy et des oignons nouveaux pochés dans le lait de coco avec gingembre, ail et curcuma, avec du poulet grillé tranché par-dessus. Sers avec du quinoa pour saucer.',
        instructions: [
          'Chauffe l\'huile de coco dans une grande poêle à feu moyen et fais revenir l\'ail et le gingembre 30 secondes.',
          'Ajoute le lait de coco, le curcuma et le sel en fouettant et porte doucement à ébullition. Ajoute les bok choy et les oignons nouveaux, couvre et laisse mijoter à feu moyen-doux 5 minutes.',
          'Ajoute les aminos de coco et le piment, puis le basilic, et garde au chaud.',
          'Cuis le poulet dans une poêle-gril bien chaude environ 5 minutes par face, jusqu\'à ce qu\'il soit cuit. Assaisonne et tranche.',
          'Pose le poulet sur les bok choy et sers avec du quinoa.'
        ]
      }
    },
    ingredients: [
      ing('Chicken breasts', 'Kipfilets', 'Blancs de poulet', 2, 'st.'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 1, 'kl'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Fresh ginger', 'Verse gember', 'Gingembre frais', 3, 'slices'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 350, 'ml'),
      ing('Turmeric', 'Kurkuma', 'Curcuma', 2, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl'),
      ing('Baby bok choy', 'Mini-paksoi', 'Mini bok choy', 3, 'st.'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 4, 'st.'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 1, 'el'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 1, 'pinch'),
      ing('Basil', 'Basilicum', 'Basilic', 1, 'el'),
      ing('Cooked quinoa', 'Gekookte quinoa', 'Quinoa cuit', 185, 'g')
    ]
  },

  {
    slug: 'lamb-pasticcio',
    prepTime: '10 mins',
    cookTime: '1 hr',
    difficulty: diff.medium,
    servings: 6,
    category: ['main'],
    wiki: ['en:Pastitsio'],
    translations: {
      en: {
        title: 'Lamb Pasticcio',
        subtitle: 'A Greek-style bake with buckwheat pasta and a yogurt top',
        description: 'Lamb mince with spinach and cinnamon baked with buckwheat pasta under sliced tomato and a golden yogurt and egg topping. Comfort food that still fits the diet.',
        instructions: [
          'Heat the oven to 190 °C. Soften the onion and garlic in a little olive oil for about 5 minutes.',
          'Add the lamb and spinach and cook until the lamb has browned.',
          'Tip it into a pot with the stock, cinnamon, salt and pepper. Bring to the boil, cover and simmer for 15 minutes.',
          'Stir in the dry pasta and the buckwheat flour and spoon it all into an ovenproof dish. Lay the tomato slices on top.',
          'Beat the eggs with the yogurt, spread it over the top and bake for 45 minutes, until set and golden.'
        ]
      },
      nl: {
        title: 'Pasticcio met lamsvlees',
        subtitle: 'Een Griekse ovenschotel met boekweitpasta en een yoghurtlaag',
        description: 'Lamsgehakt met spinazie en kaneel, gebakken met boekweitpasta onder plakjes tomaat en een goudbruine laag van yoghurt en ei. Troostvoer dat toch in het dieet past.',
        instructions: [
          'Verwarm de oven voor op 190 °C. Stoof de ui en look zo\'n 5 minuten zacht in wat olijfolie.',
          'Voeg het lamsgehakt en de spinazie toe en bak tot het vlees bruin is.',
          'Doe alles in een pot met de bouillon, kaneel, zout en peper. Breng aan de kook, leg het deksel erop en laat 15 minuten sudderen.',
          'Roer de droge pasta en het boekweitmeel erdoor en schep alles in een ovenschaal. Leg de plakjes tomaat erop.',
          'Klop de eieren met de yoghurt, strijk het over de bovenkant en bak 45 minuten, tot het gestold en goudbruin is.'
        ]
      },
      fr: {
        title: 'Pastitsio d\'agneau',
        subtitle: 'Un gratin à la grecque, pâtes de sarrasin et nappage au yaourt',
        description: 'De l\'agneau haché aux épinards et à la cannelle, cuit avec des pâtes de sarrasin sous des tranches de tomate et un nappage doré au yaourt et à l\'œuf. Un plat réconfortant qui reste dans le régime.',
        instructions: [
          'Préchauffe le four à 190 °C. Fais fondre l\'oignon et l\'ail dans un peu d\'huile d\'olive environ 5 minutes.',
          'Ajoute l\'agneau et les épinards et cuis jusqu\'à ce que la viande soit dorée.',
          'Verse dans une cocotte avec le bouillon, la cannelle, le sel et le poivre. Porte à ébullition, couvre et laisse mijoter 15 minutes.',
          'Ajoute les pâtes crues et la farine de sarrasin et verse le tout dans un plat allant au four. Dispose les tranches de tomate dessus.',
          'Bats les œufs avec le yaourt, étale sur le dessus et enfourne 45 minutes, jusqu\'à ce que ce soit pris et doré.'
        ]
      }
    },
    ingredients: [
      ing('Ground lamb', 'Lamsgehakt', 'Agneau haché', 450, 'g'),
      ing('Buckwheat pasta', 'Boekweitpasta', 'Pâtes de sarrasin', 115, 'g'),
      ing('Vegetable broth', 'Groentebouillon', 'Bouillon de légumes', 180, 'ml'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Baby spinach', 'Jonge spinazie', 'Pousses d\'épinards', 60, 'g'),
      ing('Tomatoes', 'Tomaten', 'Tomates', 2, 'st.'),
      ing('Greek yogurt', 'Griekse yoghurt', 'Yaourt grec', 360, 'ml'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Buckwheat flour', 'Boekweitmeel', 'Farine de sarrasin', 1, 'el'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 1.5, 'kl'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'veggie-nasi-goreng',
    prepTime: '10 mins',
    cookTime: '45 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    wiki: ['en:Nasi goreng'],
    translations: {
      en: {
        title: 'Vegetable Nasi Goreng',
        subtitle: 'Brown rice fried with a homemade chilli paste',
        description: 'Brown or wild rice stir-fried with a fresh paste of onion, chilli and garlic, then tossed with peppers, carrot, scrambled egg and coriander. A family favourite, made without the sweet soy sauce.',
        instructions: [
          'Cook the rice and set it aside.',
          'Scramble the eggs in a wok or large frying pan and set them aside.',
          'Blend one onion with half a chilli and the garlic into a paste, and fry it in the sesame oil for 3 minutes.',
          'Add the other onion, sliced, the rest of the chillies, the yellow pepper and the carrot and stir-fry for 3 minutes.',
          'Add the rice for 2 minutes, then the egg, spring onions and coriander for one more. Season with salt and serve.'
        ]
      },
      nl: {
        title: 'Vegetarische nasi goreng',
        subtitle: 'Zilvervliesrijst gebakken met een zelfgemaakte chilipasta',
        description: 'Zilvervlies- of wilde rijst geroerbakt met een verse pasta van ui, chili en look, en dan gemengd met paprika, wortel, roerei en koriander. Een gezinsfavoriet, zonder de zoete sojasaus.',
        instructions: [
          'Kook de rijst en zet opzij.',
          'Maak roerei van de eieren in een wok of grote pan en zet opzij.',
          'Mix één ui met een halve chili en de look tot een pasta en bak die 3 minuten in de sesamolie.',
          'Voeg de andere ui in ringen, de rest van de chilipepers, de gele paprika en de wortel toe en roerbak 3 minuten.',
          'Voeg de rijst toe voor 2 minuten, en dan het ei, de lente-ui en koriander voor nog een minuut. Kruid met zout en dien op.'
        ]
      },
      fr: {
        title: 'Nasi goreng aux légumes',
        subtitle: 'Du riz complet sauté avec une pâte de piment maison',
        description: 'Du riz complet ou sauvage sauté avec une pâte fraîche d\'oignon, de piment et d\'ail, puis mêlé aux poivrons, à la carotte, aux œufs brouillés et à la coriandre. Un favori de la famille, sans la sauce soja sucrée.',
        instructions: [
          'Cuis le riz et réserve.',
          'Brouille les œufs dans un wok ou une grande poêle et réserve.',
          'Mixe un oignon avec un demi-piment et l\'ail en pâte, et fais-la revenir 3 minutes dans l\'huile de sésame.',
          'Ajoute l\'autre oignon émincé, le reste des piments, le poivron jaune et la carotte et fais sauter 3 minutes.',
          'Ajoute le riz 2 minutes, puis l\'œuf, les oignons nouveaux et la coriandre une minute de plus. Sale et sers.'
        ]
      }
    },
    ingredients: [
      ing('Brown rice', 'Zilvervliesrijst', 'Riz complet', 95, 'g'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Yellow bell pepper', 'Gele paprika', 'Poivron jaune', 1, 'st.'),
      ing('Red onions', 'Rode uien', 'Oignons rouges', 2, 'st.'),
      ing('Carrot', 'Wortel', 'Carotte', 1, 'st.'),
      ing('Red chilies', 'Rode chilipepers', 'Piments rouges', 2, 'st.'),
      ing('Garlic', 'Look', 'Ail', 3, 'st.'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 2, 'st.'),
      ing('Coriander', 'Koriander', 'Coriandre', 1, 'bunch'),
      ing('Sesame oil', 'Sesamolie', 'Huile de sésame', 4, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste')
    ]
  },

  {
    slug: 'stuffed-peppers-beef-millet',
    prepTime: '15 mins',
    cookTime: '45 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Peppers Stuffed with Beef & Millet',
        subtitle: 'Gevulde paprika, the millet way',
        description: 'Red pepper halves packed with minced beef, millet, tomato, chilli and herbs and baked until soft. The stuffed peppers every Belgian knows, with millet standing in for rice.',
        instructions: [
          'Cook the millet as the packet says.',
          'Heat the oven to 180 °C.',
          'Fry the onion, garlic, chilli and tomato in a tablespoon of olive oil for 3 minutes, then add the beef and cook until it is no longer pink.',
          'Mix in the millet, egg, basil, parsley, salt and pepper and pack the filling into the pepper halves.',
          'Set them in an oiled dish, drizzle with the rest of the oil and bake for about 30 minutes, until the peppers are tender.'
        ]
      },
      nl: {
        title: 'Gevulde paprika met rundsgehakt en gierst',
        subtitle: 'Gevulde paprika, op de gierstmanier',
        description: 'Halve rode paprika\'s gevuld met rundsgehakt, gierst, tomaat, chili en kruiden en zacht gebakken. De gevulde paprika die elke Belg kent, met gierst in plaats van rijst.',
        instructions: [
          'Kook de gierst zoals op de verpakking staat.',
          'Verwarm de oven voor op 180 °C.',
          'Bak de ui, look, chili en tomaat 3 minuten in een eetlepel olijfolie, voeg dan het gehakt toe en bak tot het niet meer roze is.',
          'Meng de gierst, het ei, basilicum, peterselie, zout en peper erdoor en vul de paprikahelften.',
          'Zet ze in een ingevette schaal, sprenkel de rest van de olie erover en bak zo\'n 30 minuten, tot de paprika zacht is.'
        ]
      },
      fr: {
        title: 'Poivrons farcis au bœuf et au millet',
        subtitle: 'Les poivrons farcis, version millet',
        description: 'Des demi-poivrons rouges garnis de bœuf haché, de millet, de tomate, de piment et d\'herbes, cuits jusqu\'à être fondants. Les poivrons farcis que tout Belge connaît, avec du millet à la place du riz.',
        instructions: [
          'Cuis le millet comme indiqué sur le paquet.',
          'Préchauffe le four à 180 °C.',
          'Fais revenir l\'oignon, l\'ail, le piment et la tomate dans une cuillère à soupe d\'huile d\'olive 3 minutes, puis ajoute le bœuf et cuis jusqu\'à ce qu\'il ne soit plus rose.',
          'Incorpore le millet, l\'œuf, le basilic, le persil, le sel et le poivre et farcis les demi-poivrons.',
          'Dispose-les dans un plat huilé, arrose du reste de l\'huile et enfourne environ 30 minutes, jusqu\'à ce que les poivrons soient tendres.'
        ]
      }
    },
    ingredients: [
      ing('Ground beef', 'Rundsgehakt', 'Bœuf haché', 225, 'g'),
      ing('Millet', 'Gierst', 'Millet', 40, 'g'),
      ing('Red bell pepper', 'Rode paprika', 'Poivron rouge', 2, 'st.'),
      ing('Tomato', 'Tomaat', 'Tomate', 1, 'st.'),
      ing('Egg', 'Ei', 'Oeuf', 1, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 3, 'st.'),
      ing('Red chili', 'Rode chilipeper', 'Piment rouge', 1, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 3, 'el'),
      ing('Dried basil', 'Gedroogde basilicum', 'Basilic séché', 1, 'el'),
      ing('Dried parsley', 'Gedroogde peterselie', 'Persil séché', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.25, 'kl')
    ]
  },

  {
    slug: 'grilled-asparagus-beef-rolls',
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main', 'snack'],
    translations: {
      en: {
        title: 'Beef & Asparagus Rolls',
        subtitle: 'With goat\'s cheese, sun-dried tomato and basil',
        description: 'Thin slices of beef spread with goat\'s cheese, rolled around asparagus spears with sun-dried tomato and basil, and seared in a hot pan. Ten minutes and very little effort.',
        instructions: [
          'Steam or boil the asparagus until just soft and set aside.',
          'Spread each slice of beef with 2 tablespoons of goat\'s cheese and top with a sun-dried tomato and a basil leaf or two.',
          'Lay 2–3 asparagus spears on each slice, roll it up and secure with a cocktail stick.',
          'Grill or pan-fry in the olive oil on a hot surface for 3–4 minutes a side.'
        ]
      },
      nl: {
        title: 'Rundsrolletjes met asperges',
        subtitle: 'Met geitenkaas, zongedroogde tomaat en basilicum',
        description: 'Dunne plakjes rundvlees besmeerd met geitenkaas, opgerold rond groene asperges met zongedroogde tomaat en basilicum, en dichtgeschroeid in een hete pan. Tien minuten en weinig moeite.',
        instructions: [
          'Stoom of kook de asperges tot ze net zacht zijn en zet opzij.',
          'Besmeer elk plakje vlees met 2 eetlepels geitenkaas en leg er een zongedroogde tomaat en een blaadje of twee basilicum op.',
          'Leg 2–3 asperges op elk plakje, rol op en zet vast met een cocktailprikker.',
          'Grill of bak 3–4 minuten per kant in de olijfolie op een hete plaat of pan.'
        ]
      },
      fr: {
        title: 'Roulés de bœuf aux asperges',
        subtitle: 'Au chèvre, aux tomates séchées et au basilic',
        description: 'De fines tranches de bœuf tartinées de chèvre, roulées autour d\'asperges vertes avec tomate séchée et basilic, et saisies dans une poêle bien chaude. Dix minutes et très peu d\'effort.',
        instructions: [
          'Cuis les asperges à la vapeur ou à l\'eau jusqu\'à ce qu\'elles soient juste tendres et réserve.',
          'Tartine chaque tranche de bœuf de 2 cuillères à soupe de chèvre et ajoute une tomate séchée et une ou deux feuilles de basilic.',
          'Pose 2–3 asperges sur chaque tranche, roule et fixe avec un pique.',
          'Grille ou poêle dans l\'huile d\'olive sur une surface bien chaude 3–4 minutes par face.'
        ]
      }
    },
    ingredients: [
      ing('Asparagus', 'Groene asperges', 'Asperges vertes', 10, 'st.'),
      ing('Thinly sliced beef', 'Dungesneden rundvlees', 'Bœuf en fines tranches', 4, 'slices'),
      ing('Sun-dried tomatoes', 'Zongedroogde tomaten', 'Tomates séchées', 4, 'st.'),
      ing('Goat cheese', 'Geitenkaas', 'Fromage de chèvre', 120, 'g'),
      ing('Basil', 'Basilicum', 'Basilic', 6, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el')
    ]
  },

  {
    slug: 'vegetables-goat-cheese-quinoa',
    prepTime: '10 mins',
    cookTime: '30 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Roasted Vegetables, Goat\'s Cheese & Quinoa',
        subtitle: 'Sweet roasted peppers, shallots and whole garlic',
        description: 'Peppers, cherry tomatoes, whole shallots and garlic cloves roasted until sweet and soft, tossed with quinoa, lemon and a splash of vinegar, with goat\'s cheese crumbled on top.',
        instructions: [
          'Heat the oven to 230 °C. Chop the peppers and peel the shallots and garlic.',
          'Toss all the vegetables with olive oil, salt and pepper and spread them in a single layer in a roasting tin.',
          'Roast for about 30 minutes, stirring now and then, until lightly browned and tender.',
          'Meanwhile, cook the quinoa as the packet says.',
          'Toss the quinoa with the vegetables, lemon juice, vinegar and torn basil, and crumble the goat\'s cheese over the top.'
        ]
      },
      nl: {
        title: 'Geroosterde groenten met geitenkaas en quinoa',
        subtitle: 'Zoete geroosterde paprika, sjalotjes en hele look',
        description: 'Paprika, kerstomaatjes, hele sjalotjes en teentjes look geroosterd tot ze zoet en zacht zijn, gemengd met quinoa, citroen en een scheutje azijn, met verkruimelde geitenkaas erop.',
        instructions: [
          'Verwarm de oven voor op 230 °C. Snijd de paprika\'s en pel de sjalotjes en look.',
          'Meng alle groenten met olijfolie, zout en peper en spreid ze in één laag uit in een braadslede.',
          'Rooster zo\'n 30 minuten, af en toe omroeren, tot ze licht gekleurd en zacht zijn.',
          'Kook ondertussen de quinoa zoals op de verpakking staat.',
          'Meng de quinoa met de groenten, het citroensap, de azijn en gescheurde basilicum, en verkruimel de geitenkaas erover.'
        ]
      },
      fr: {
        title: 'Légumes rôtis, chèvre et quinoa',
        subtitle: 'Poivrons doux rôtis, échalotes et ail entier',
        description: 'Des poivrons, des tomates cerises, des échalotes et des gousses d\'ail entières rôtis jusqu\'à être doux et fondants, mêlés au quinoa, au citron et à un trait de vinaigre, avec du chèvre émietté par-dessus.',
        instructions: [
          'Préchauffe le four à 230 °C. Coupe les poivrons et épluche les échalotes et l\'ail.',
          'Enrobe tous les légumes d\'huile d\'olive, de sel et de poivre et étale-les en une couche dans un plat à rôtir.',
          'Rôtis une trentaine de minutes en remuant de temps en temps, jusqu\'à ce qu\'ils soient légèrement dorés et tendres.',
          'Pendant ce temps, cuis le quinoa comme indiqué sur le paquet.',
          'Mélange le quinoa avec les légumes, le jus de citron, le vinaigre et le basilic déchiré, et émiette le chèvre par-dessus.'
        ]
      }
    },
    ingredients: [
      ing('Quinoa', 'Quinoa', 'Quinoa', 85, 'g'),
      ing('Bell peppers', 'Paprika\'s', 'Poivrons', 3, 'st.'),
      ing('Cherry tomatoes', 'Kerstomaatjes', 'Tomates cerises', 8, 'st.'),
      ing('Shallots', 'Sjalotten', 'Échalotes', 8, 'st.'),
      ing('Garlic', 'Look', 'Ail', 8, 'st.'),
      ing('Basil', 'Basilicum', 'Basilic', 1, 'bunch'),
      ing('Goat cheese', 'Geitenkaas', 'Fromage de chèvre', 50, 'g'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 1, 'el'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 3, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'beef-and-okra-stew',
    prepTime: '5 mins',
    cookTime: '40 mins',
    difficulty: diff.easy,
    servings: 3,
    category: ['soup', 'main'],
    translations: {
      en: {
        title: 'Beef & Okra Stew',
        subtitle: 'Cumin, cinnamon and a little heat',
        description: 'Diced beef browned and simmered with tomato, onion and warm spices until tender, then thickened naturally with fresh okra. A Middle Eastern-style stoofpot.',
        instructions: [
          'Heat half the oil in a large pan over medium heat and brown the beef on all sides. Lift it out.',
          'Add the rest of the oil and cook the onion over medium-low heat for 3–4 minutes. Add the garlic, cumin, cayenne and cinnamon and stir for 1–2 minutes.',
          'Add the tomatoes and 480 ml of stock, then put the beef back in.',
          'Cover and simmer for about 20 minutes, until the beef is tender, adding more stock if it gets dry.',
          'Take the lid off, add the okra and cook for 15 minutes more, until the stew thickens. Season and finish with parsley.'
        ]
      },
      nl: {
        title: 'Stoofpot van rundvlees en okra',
        subtitle: 'Komijn, kaneel en een beetje pit',
        description: 'Blokjes rundvlees bruin gebakken en met tomaat, ui en warme specerijen gestoofd tot ze mals zijn, en dan op natuurlijke wijze gebonden met verse okra. Een stoofpot op zijn Midden-Oosters.',
        instructions: [
          'Verhit de helft van de olie in een grote pan op middelhoog vuur en bak het vlees rondom bruin. Schep het eruit.',
          'Voeg de rest van de olie toe en stoof de ui 3–4 minuten op middellaag vuur. Voeg de look, komijn, cayenne en kaneel toe en roer 1–2 minuten.',
          'Voeg de tomaten en 480 ml bouillon toe en doe het vlees terug in de pan.',
          'Leg het deksel erop en laat zo\'n 20 minuten sudderen tot het vlees mals is, en voeg wat bouillon toe als het te droog wordt.',
          'Haal het deksel eraf, voeg de okra toe en laat nog 15 minuten koken tot de stoofpot indikt. Breng op smaak en werk af met peterselie.'
        ]
      },
      fr: {
        title: 'Ragoût de bœuf au gombo',
        subtitle: 'Cumin, cannelle et un peu de piquant',
        description: 'Des dés de bœuf dorés puis mijotés avec tomate, oignon et épices chaudes jusqu\'à être tendres, liés naturellement par du gombo frais. Un mijoté à la mode du Moyen-Orient.',
        instructions: [
          'Chauffe la moitié de l\'huile dans une grande cocotte à feu moyen et dore le bœuf de tous côtés. Retire-le.',
          'Ajoute le reste de l\'huile et fais fondre l\'oignon à feu moyen-doux 3–4 minutes. Ajoute l\'ail, le cumin, le cayenne et la cannelle et remue 1–2 minutes.',
          'Ajoute les tomates et 480 ml de bouillon, puis remets le bœuf.',
          'Couvre et laisse mijoter une vingtaine de minutes, jusqu\'à ce que le bœuf soit tendre, en ajoutant du bouillon si ça sèche.',
          'Retire le couvercle, ajoute le gombo et poursuis 15 minutes, jusqu\'à ce que le ragoût épaississe. Rectifie l\'assaisonnement et termine avec du persil.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Stewing beef', 'Rundsstoofvlees', 'Bœuf à braiser', 450, 'g'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 1, 'kl'),
      ing('Cayenne pepper', 'Cayennepeper', 'Piment de Cayenne', 0.5, 'kl'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 0.25, 'kl'),
      ing('Tomatoes', 'Tomaten', 'Tomates', 180, 'g'),
      ing('Chicken broth', 'Kippenbouillon', 'Bouillon de volaille', 600, 'ml'),
      ing('Okra', 'Okra', 'Gombo', 100, 'g'),
      ing('Parsley', 'Peterselie', 'Persil', 2, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'chicken-quinoa-salad',
    prepTime: '10 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Chicken Quinoa Salad',
        subtitle: 'Garlic chicken, avocado, tomato and spinach',
        description: 'Warm garlicky chicken tossed with quinoa, spinach, tomato, cucumber, avocado and shallot in lemon and olive oil. A filling salad for a packed lunch.',
        instructions: [
          'Cook the quinoa as the packet says.',
          'Cut the chicken into pieces and fry it with the garlic for about 5 minutes, until cooked through.',
          'Chop the tomatoes, cucumber, avocado and shallots.',
          'Toss everything in a bowl with the spinach, lemon juice, olive oil and sea salt.'
        ]
      },
      nl: {
        title: 'Quinoasalade met kip',
        subtitle: 'Kip met look, avocado, tomaat en spinazie',
        description: 'Warme kip met look gemengd met quinoa, spinazie, tomaat, komkommer, avocado en sjalot in citroen en olijfolie. Een vullende salade voor in de lunchbox.',
        instructions: [
          'Kook de quinoa zoals op de verpakking staat.',
          'Snijd de kip in stukjes en bak ze zo\'n 5 minuten met de look tot ze gaar zijn.',
          'Snijd de tomaten, komkommer, avocado en sjalotten.',
          'Meng alles in een kom met de spinazie, het citroensap, de olijfolie en zeezout.'
        ]
      },
      fr: {
        title: 'Salade de quinoa au poulet',
        subtitle: 'Poulet à l\'ail, avocat, tomate et épinards',
        description: 'Du poulet chaud à l\'ail mêlé au quinoa, aux épinards, à la tomate, au concombre, à l\'avocat et à l\'échalote, au citron et à l\'huile d\'olive. Une salade rassasiante pour la boîte à lunch.',
        instructions: [
          'Cuis le quinoa comme indiqué sur le paquet.',
          'Coupe le poulet en morceaux et fais-le revenir avec l\'ail environ 5 minutes, jusqu\'à ce qu\'il soit cuit.',
          'Coupe les tomates, le concombre, l\'avocat et les échalotes.',
          'Mélange le tout dans un saladier avec les épinards, le jus de citron, l\'huile d\'olive et du sel de mer.'
        ]
      }
    },
    ingredients: [
      ing('Chicken breast', 'Kipfilet', 'Blanc de poulet', 1, 'st.'),
      ing('Quinoa', 'Quinoa', 'Quinoa', 45, 'g'),
      ing('Spinach', 'Spinazie', 'Épinards', 60, 'g'),
      ing('Tomatoes', 'Tomaten', 'Tomates', 2, 'st.'),
      ing('Cucumber', 'Komkommer', 'Concombre', 0.5, 'st.'),
      ing('Avocado', 'Avocado', 'Avocat', 1, 'st.'),
      ing('Shallots', 'Sjalotten', 'Échalotes', 2, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 2, 'el'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste')
    ]
  }
];
