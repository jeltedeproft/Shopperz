// Candida-diet dishes, batch 7. See candida_recipes.js for how these were made.

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });
const diff = {
  easy: { en: 'Easy', nl: 'Makkelijk', fr: 'Facile' },
  medium: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' }
};

module.exports = [
  {
    slug: 'chicken-pot-pie',
    prepTime: '20 mins',
    cookTime: '25 mins',
    difficulty: diff.medium,
    servings: 6,
    category: ['main'],
    translations: {
      en: {
        title: 'Chicken Pot Pie',
        subtitle: 'A creamy filling under coconut-flour biscuits',
        description: 'Chicken, leek, squash and asparagus in a creamy herb sauce, topped with spoonfuls of coconut-flour batter that bake into golden biscuits. Kippenpasteitje\'s country cousin.',
        instructions: [
          'Fry the onion, leek, squash and asparagus in the oil over medium heat for 5–6 minutes.',
          'Add the stock and coconut milk and bring to a gentle boil. Mix the arrowroot with a tablespoon of cold water and stir it in bit by bit until the sauce thickens.',
          'Season, stir in the chicken, parsley and tarragon, and pour into a 23 × 33 cm dish.',
          'Heat the oven to 200 °C. Whisk the coconut flour, baking soda, salt and pepper. In another bowl whisk the eggs, melted coconut oil, coconut milk, vinegar and 2 teaspoons of water, then stir the two together.',
          'Spoon the batter over the filling in 8 heaps and bake for 20–25 minutes, until bubbling and golden. Scatter over parsley.'
        ]
      },
      nl: {
        title: 'Kippenpastei uit de oven',
        subtitle: 'Een romige vulling onder koekjes van kokosmeel',
        description: 'Kip, prei, pompoen en asperges in een romige kruidensaus, met lepels beslag van kokosmeel erop die goudbruin bakken. Het landelijke neefje van het kippenpasteitje.',
        instructions: [
          'Bak de ui, prei, gele courgette en asperges 5–6 minuten in de olie op middelhoog vuur.',
          'Voeg de bouillon en kokosmelk toe en breng zachtjes aan de kook. Meng de pijlwortel met een eetlepel koud water en roer het beetje bij beetje erdoor tot de saus indikt.',
          'Kruid, roer de kip, peterselie en dragon erdoor en giet in een ovenschaal van 23 × 33 cm.',
          'Verwarm de oven voor op 200 °C. Klop het kokosmeel, zuiveringszout, zout en peper door elkaar. Klop in een andere kom de eieren, gesmolten kokosolie, kokosmelk, azijn en 2 theelepels water en meng beide.',
          'Schep het beslag in 8 hoopjes over de vulling en bak 20–25 minuten, tot het borrelt en goudbruin is. Strooi er peterselie over.'
        ]
      },
      fr: {
        title: 'Tourte au poulet',
        subtitle: 'Une garniture crémeuse sous des biscuits à la farine de coco',
        description: 'Poulet, poireau, courge et asperges dans une sauce crémeuse aux herbes, couverts de cuillerées de pâte à la farine de coco qui dorent en biscuits. La cousine campagnarde du vol-au-vent.',
        instructions: [
          'Fais revenir l\'oignon, le poireau, la courge et les asperges dans l\'huile à feu moyen 5–6 minutes.',
          'Ajoute le bouillon et le lait de coco et porte doucement à ébullition. Délaye l\'arrow-root dans une cuillère à soupe d\'eau froide et ajoute-le petit à petit jusqu\'à ce que la sauce épaississe.',
          'Assaisonne, ajoute le poulet, le persil et l\'estragon, et verse dans un plat de 23 × 33 cm.',
          'Préchauffe le four à 200 °C. Fouette la farine de coco, le bicarbonate, le sel et le poivre. Dans un autre bol, fouette les œufs, l\'huile de coco fondue, le lait de coco, le vinaigre et 2 cuillères à café d\'eau, puis mélange les deux.',
          'Dépose la pâte en 8 tas sur la garniture et enfourne 20–25 minutes, jusqu\'à ce que ça bouillonne et soit doré. Parsème de persil.'
        ]
      }
    },
    ingredients: [
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 140, 'ml'),
      ing('Onion', 'Ui', 'Oignon', 40, 'g'),
      ing('Leek', 'Prei', 'Poireau', 1, 'st.'),
      ing('Yellow squash', 'Gele courgette', 'Courgette jaune', 1, 'st.'),
      ing('Asparagus', 'Groene asperges', 'Asperges vertes', 8, 'st.'),
      ing('Chicken broth', 'Kippenbouillon', 'Bouillon de volaille', 480, 'ml'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 120, 'ml'),
      ing('Arrowroot powder', 'Pijlwortelpoeder', 'Arrow-root', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 1, 'kl'),
      ing('Cooked chicken', 'Gebakken kip', 'Poulet cuit', 400, 'g'),
      ing('Parsley', 'Peterselie', 'Persil', 2, 'el'),
      ing('Tarragon', 'Dragon', 'Estragon', 1, 'kl'),
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 60, 'g'),
      ing('Baking soda', 'Zuiveringszout', 'Bicarbonate de soude', 0.5, 'kl'),
      ing('Eggs', 'Eieren', 'Oeufs', 4, 'st.'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 2, 'kl')
    ]
  },

  {
    slug: 'quinoa-falafel-with-tzatziki-sauce',
    prepTime: '15 mins',
    cookTime: '20 mins',
    difficulty: diff.medium,
    servings: 4,
    category: ['main', 'snack'],
    translations: {
      en: {
        title: 'Quinoa Falafel with Tzatziki',
        subtitle: 'Crisp herby balls, no chickpeas needed',
        description: 'Falafel made from quinoa, onion, parsley and warm spices, bound with almond and coconut flour and fried until golden, with a cool homemade tzatziki.',
        instructions: [
          'Mix the quinoa, onion, parsley, garlic, cumin, coriander, almond flour, coconut flour, salt, pepper and eggs in a large bowl.',
          'Shape into 24 small balls.',
          'Heat about 1 cm of olive oil in a frying pan and fry the falafel in batches, turning often, until browned all over. Drain on kitchen paper.',
          'For the tzatziki, squeeze the grated cucumber dry and mix it with the yogurt, garlic, mint, salt, lemon juice and olive oil. It keeps 2–3 days in the fridge.',
          'Serve the falafel warm with the tzatziki.'
        ]
      },
      nl: {
        title: 'Quinoafalafel met tzatziki',
        subtitle: 'Krokante kruidige balletjes, zonder kikkererwten',
        description: 'Falafel van quinoa, ui, peterselie en warme specerijen, gebonden met amandel- en kokosmeel en goudbruin gebakken, met een frisse zelfgemaakte tzatziki.',
        instructions: [
          'Meng de quinoa, ui, peterselie, look, komijn, koriander, het amandelmeel, kokosmeel, zout, peper en de eieren in een grote kom.',
          'Vorm er 24 kleine balletjes van.',
          'Verhit zo\'n 1 cm olijfolie in een pan en bak de falafel in porties, vaak keren, tot ze rondom bruin zijn. Laat uitlekken op keukenpapier.',
          'Voor de tzatziki knijp je de geraspte komkommer droog en meng je hem met de yoghurt, look, munt, zout, het citroensap en de olijfolie. Blijft 2–3 dagen goed in de koelkast.',
          'Dien de falafel warm op met de tzatziki.'
        ]
      },
      fr: {
        title: 'Falafels de quinoa et tzatziki',
        subtitle: 'Des boulettes croustillantes aux herbes, sans pois chiches',
        description: 'Des falafels de quinoa, d\'oignon, de persil et d\'épices chaudes, liés aux farines d\'amande et de coco et frits jusqu\'à être dorés, avec un tzatziki maison bien frais.',
        instructions: [
          'Mélange le quinoa, l\'oignon, le persil, l\'ail, le cumin, la coriandre, la farine d\'amande, la farine de coco, le sel, le poivre et les œufs dans un grand bol.',
          'Forme 24 petites boulettes.',
          'Chauffe environ 1 cm d\'huile d\'olive dans une poêle et fais frire les falafels par fournées, en les retournant souvent, jusqu\'à ce qu\'ils soient dorés partout. Égoutte sur du papier absorbant.',
          'Pour le tzatziki, presse le concombre râpé et mélange-le avec le yaourt, l\'ail, la menthe, le sel, le jus de citron et l\'huile d\'olive. Se garde 2–3 jours au frigo.',
          'Sers les falafels chauds avec le tzatziki.'
        ]
      }
    },
    ingredients: [
      ing('Cooked quinoa', 'Gekookte quinoa', 'Quinoa cuit', 370, 'g'),
      ing('Onion', 'Ui', 'Oignon', 80, 'g'),
      ing('Parsley', 'Peterselie', 'Persil', 15, 'g'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 0.5, 'kl'),
      ing('Ground coriander', 'Korianderpoeder', 'Coriandre moulue', 0.5, 'kl'),
      ing('Almond flour', 'Amandelmeel', 'Farine d\'amande', 25, 'g'),
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 3, 'el'),
      ing('Salt', 'Zout', 'Sel', 2, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.25, 'kl'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 200, 'ml'),
      ing('Greek yogurt', 'Griekse yoghurt', 'Yaourt grec', 480, 'ml'),
      ing('Cucumber', 'Komkommer', 'Concombre', 1, 'st.'),
      ing('Mint', 'Munt', 'Menthe', 1, 'el'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el')
    ]
  },

  {
    slug: 'rutabaga-latkes',
    prepTime: '10 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['snack', 'main'],
    wiki: ['en:Latke'],
    translations: {
      en: {
        title: 'Swede Latkes',
        subtitle: 'Crisp grated fritters, no potato',
        description: 'Grated swede bound with egg, coconut flour and hemp seeds and fried into lacy golden fritters with a hint of nutmeg. Ten of them disappear fast.',
        instructions: [
          'Mix the swede, spring onion, egg, coconut flour, hemp seeds, salt, pepper and a little grated nutmeg.',
          'Heat a good tablespoon of olive oil in a frying pan over medium-low to medium heat.',
          'Drop in about 2 tablespoons of the mix per latke, three at a time, and flatten them to 8–10 cm rounds.',
          'Fry until the edges brown, flip, and fry until golden. Add another tablespoon of oil for each batch.',
          'Keep the cooked latkes warm on a rack in a low oven while you fry the rest.'
        ]
      },
      nl: {
        title: 'Koolraaplatkes',
        subtitle: 'Krokante geraspte koekjes, zonder aardappel',
        description: 'Geraspte koolraap gebonden met ei, kokosmeel en hennepzaad en gebakken tot kanten goudbruine koekjes met een vleugje nootmuskaat. Tien stuks verdwijnen snel.',
        instructions: [
          'Meng de koolraap, lente-ui, het ei, kokosmeel, hennepzaad, zout, peper en een beetje geraspte nootmuskaat.',
          'Verhit een flinke eetlepel olijfolie in een pan op middellaag tot middelhoog vuur.',
          'Schep er per latke zo\'n 2 eetlepels mengsel in, drie tegelijk, en druk ze plat tot rondjes van 8–10 cm.',
          'Bak tot de randjes bruin worden, draai om en bak goudbruin. Voeg voor elke lading een extra eetlepel olie toe.',
          'Hou de gebakken latkes warm op een rooster in een lauwe oven terwijl je de rest bakt.'
        ]
      },
      fr: {
        title: 'Latkes de rutabaga',
        subtitle: 'Des galettes râpées croustillantes, sans pomme de terre',
        description: 'Du rutabaga râpé lié à l\'œuf, à la farine de coco et aux graines de chanvre, frit en galettes dorées et dentelées avec une pointe de muscade. Les dix disparaissent vite.',
        instructions: [
          'Mélange le rutabaga, l\'oignon nouveau, l\'œuf, la farine de coco, les graines de chanvre, le sel, le poivre et un peu de muscade râpée.',
          'Chauffe une bonne cuillère à soupe d\'huile d\'olive dans une poêle à feu moyen-doux à moyen.',
          'Dépose environ 2 cuillères à soupe de mélange par latke, trois à la fois, et aplatis-les en disques de 8–10 cm.',
          'Fais frire jusqu\'à ce que les bords dorent, retourne et dore l\'autre face. Ajoute une cuillère d\'huile à chaque fournée.',
          'Garde les latkes cuits au chaud sur une grille dans un four doux pendant que tu fais le reste.'
        ]
      }
    },
    ingredients: [
      ing('Rutabaga', 'Koolraap', 'Rutabaga', 450, 'g'),
      ing('Spring onion', 'Lente-ui', 'Oignon nouveau', 1, 'st.'),
      ing('Egg', 'Ei', 'Oeuf', 1, 'st.'),
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 1, 'el'),
      ing('Hemp seeds', 'Hennepzaad', 'Graines de chanvre', 3, 'el'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Nutmeg', 'Nootmuskaat', 'Muscade', 1, 'pinch'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 4, 'el'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'chia-seed-fennel-crusted-salmon',
    prepTime: '15 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['main'],
    translations: {
      en: {
        title: 'Chia & Fennel-Crusted Salmon',
        subtitle: 'With soft fennel, red onion and lemon',
        description: 'Salmon under a crunchy crust of ground chia, fennel seed and lemon zest, grilled in minutes, with a pan of softened fennel, onion and pepper alongside.',
        instructions: [
          'Heat the grill.',
          'Grind the chia and fennel seeds, then mix with the fennel fronds, lemon zest, salt, pepper and a teaspoon of oil.',
          'Dip the salmon in the egg white, set it on an oiled tray and press the seed mix onto the top.',
          'Grill about 15 cm under the heat for 6–8 minutes.',
          'Meanwhile, fry the sliced fennel, red onion, yellow pepper and lemon slices in the rest of the oil over medium heat for 8–10 minutes, until soft and just browning. Serve with the salmon and lemon wedges.'
        ]
      },
      nl: {
        title: 'Zalm in een korst van chia en venkel',
        subtitle: 'Met zachte venkel, rode ui en citroen',
        description: 'Zalm onder een knapperige korst van gemalen chia, venkelzaad en citroenzeste, in een paar minuten gegrild, met een pan zachte venkel, ui en paprika ernaast.',
        instructions: [
          'Verwarm de grill voor.',
          'Maal de chia- en venkelzaadjes en meng ze met het venkelgroen, de citroenzeste, zout, peper en een theelepel olie.',
          'Haal de zalm door het eiwit, leg hem op een ingevette bakplaat en druk het zadenmengsel op de bovenkant.',
          'Grill zo\'n 15 cm onder de warmtebron, 6–8 minuten.',
          'Bak ondertussen de gesneden venkel, rode ui, gele paprika en schijfjes citroen 8–10 minuten in de rest van de olie op middelhoog vuur, tot ze zacht zijn en net kleuren. Dien op met de zalm en partjes citroen.'
        ]
      },
      fr: {
        title: 'Saumon en croûte de chia et fenouil',
        subtitle: 'Avec fenouil fondant, oignon rouge et citron',
        description: 'Du saumon sous une croûte croquante de chia moulu, de graines de fenouil et de zeste de citron, grillé en quelques minutes, avec une poêlée de fenouil, d\'oignon et de poivron fondants.',
        instructions: [
          'Préchauffe le gril.',
          'Moud les graines de chia et de fenouil, puis mélange-les avec les pluches de fenouil, le zeste de citron, le sel, le poivre et une cuillère à café d\'huile.',
          'Trempe le saumon dans le blanc d\'œuf, pose-le sur une plaque huilée et presse le mélange de graines sur le dessus.',
          'Grille à environ 15 cm de la source de chaleur 6–8 minutes.',
          'Pendant ce temps, fais revenir le fenouil émincé, l\'oignon rouge, le poivron jaune et les rondelles de citron dans le reste de l\'huile à feu moyen 8–10 minutes, jusqu\'à ce qu\'ils soient tendres et commencent à dorer. Sers avec le saumon et des quartiers de citron.'
        ]
      }
    },
    ingredients: [
      ing('Chia seeds', 'Chiazaad', 'Graines de chia', 1, 'kl'),
      ing('Fennel seeds', 'Venkelzaad', 'Graines de fenouil', 0.25, 'kl'),
      ing('Lemon zest', 'Citroenzeste', 'Zeste de citron', 0.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.5, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 4, 'kl'),
      ing('Egg white', 'Eiwit', 'Blanc d\'oeuf', 1, 'st.'),
      ing('Salmon fillet', 'Zalmfilet', 'Filet de saumon', 115, 'g'),
      ing('Fennel', 'Venkel', 'Fenouil', 0.25, 'st.'),
      ing('Red onion', 'Rode ui', 'Oignon rouge', 0.25, 'st.'),
      ing('Yellow bell pepper', 'Gele paprika', 'Poivron jaune', 0.25, 'st.'),
      ing('Lemon', 'Citroen', 'Citron', 1, 'st.')
    ]
  },

  {
    slug: 'thai-red-curry-chicken',
    prepTime: '10 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 3,
    category: ['main'],
    translations: {
      en: {
        title: 'Thai Red Curry Chicken',
        subtitle: 'A weeknight curry in half an hour',
        description: 'Chicken and sweet peppers simmered in coconut milk with red curry paste and finished with a handful of basil. Check the label: pick a curry paste without sugar or shrimp.',
        instructions: [
          'Heat the coconut oil in a large frying pan over medium heat and fry the onion and peppers for about 5 minutes, until softening.',
          'Stir in the curry paste for a minute, then add the chicken and fry for another minute.',
          'Pour in the coconut milk and bring it to the boil.',
          'Lower the heat and simmer for about 10 minutes, until the vegetables are tender and the chicken is cooked.',
          'Stir in most of the basil and serve over quinoa with the rest on top. Lovely with the Thai cucumber salad.'
        ]
      },
      nl: {
        title: 'Thaise rode curry met kip',
        subtitle: 'Een curry voor doordeweeks, in een half uur',
        description: 'Kip en zoete paprika gesudderd in kokosmelk met rode currypasta en afgewerkt met een handvol basilicum. Kijk op het etiket: kies een currypasta zonder suiker of garnalen.',
        instructions: [
          'Verhit de kokosolie in een grote pan op middelhoog vuur en bak de ui en paprika zo\'n 5 minuten, tot ze zacht beginnen te worden.',
          'Roer de currypasta er een minuutje door, voeg de kip toe en bak nog een minuut.',
          'Giet de kokosmelk erbij en breng aan de kook.',
          'Zet het vuur lager en laat zo\'n 10 minuten sudderen, tot de groenten zacht zijn en de kip gaar.',
          'Roer het grootste deel van de basilicum erdoor en dien op met quinoa, met de rest erbovenop. Heerlijk met de Thaise komkommersalade.'
        ]
      },
      fr: {
        title: 'Curry rouge thaï au poulet',
        subtitle: 'Un curry de semaine en une demi-heure',
        description: 'Du poulet et des poivrons mijotés dans le lait de coco avec de la pâte de curry rouge, finis d\'une poignée de basilic. Vérifie l\'étiquette : choisis une pâte de curry sans sucre ni crevette.',
        instructions: [
          'Chauffe l\'huile de coco dans une grande poêle à feu moyen et fais revenir l\'oignon et les poivrons environ 5 minutes, jusqu\'à ce qu\'ils s\'attendrissent.',
          'Ajoute la pâte de curry une minute, puis le poulet et poursuis une minute.',
          'Verse le lait de coco et porte à ébullition.',
          'Baisse le feu et laisse mijoter une dizaine de minutes, jusqu\'à ce que les légumes soient tendres et le poulet cuit.',
          'Ajoute la majeure partie du basilic et sers sur du quinoa avec le reste par-dessus. Délicieux avec la salade de concombre thaïe.'
        ]
      }
    },
    ingredients: [
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 1, 'el'),
      ing('Onion', 'Ui', 'Oignon', 0.25, 'st.'),
      ing('Red bell pepper', 'Rode paprika', 'Poivron rouge', 0.5, 'st.'),
      ing('Yellow bell pepper', 'Gele paprika', 'Poivron jaune', 0.5, 'st.'),
      ing('Red curry paste', 'Rode currypasta', 'Pâte de curry rouge', 2.5, 'el'),
      ing('Chicken breasts', 'Kipfilets', 'Blancs de poulet', 2, 'st.'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 480, 'ml'),
      ing('Basil', 'Basilicum', 'Basilic', 10, 'g'),
      ing('Cooked quinoa', 'Gekookte quinoa', 'Quinoa cuit', 370, 'g')
    ]
  },

  {
    slug: 'thai-cucumber-salad',
    prepTime: '10 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['snack'],
    translations: {
      en: {
        title: 'Thai Cucumber Salad',
        subtitle: 'Sweet, sour and a little hot',
        description: 'Thin cucumber and red onion in a quick sweet-sour dressing of apple cider vinegar and stevia, with chilli flakes on top. The cooling side for any curry.',
        instructions: [
          'Slice the cucumber and red onion thinly and put them in a bowl.',
          'Whisk the vinegar, stevia, salt and white pepper until dissolved.',
          'Pour it over the vegetables and stir.',
          'Sprinkle with chilli flakes. Serve straight away, or let it sit in the fridge for an hour or two.'
        ]
      },
      nl: {
        title: 'Thaise komkommersalade',
        subtitle: 'Zoet, zuur en een beetje pittig',
        description: 'Dunne komkommer en rode ui in een snelle zoetzure dressing van appelciderazijn en stevia, met chilivlokken erover. Het frisse bijgerecht bij elke curry.',
        instructions: [
          'Snijd de komkommer en rode ui in dunne plakjes en doe ze in een kom.',
          'Klop de azijn, stevia, zout en witte peper tot alles opgelost is.',
          'Giet over de groenten en roer.',
          'Strooi er chilivlokken over. Meteen opdienen, of een uurtje of twee in de koelkast laten trekken.'
        ]
      },
      fr: {
        title: 'Salade de concombre thaïe',
        subtitle: 'Sucrée, acidulée et un peu piquante',
        description: 'Du concombre et de l\'oignon rouge émincés dans une sauce aigre-douce minute au vinaigre de cidre et à la stévia, avec du piment par-dessus. L\'accompagnement rafraîchissant de tout curry.',
        instructions: [
          'Émince finement le concombre et l\'oignon rouge et mets-les dans un bol.',
          'Fouette le vinaigre, la stévia, le sel et le poivre blanc jusqu\'à dissolution.',
          'Verse sur les légumes et mélange.',
          'Parsème de piment. Sers aussitôt, ou laisse reposer une heure ou deux au frigo.'
        ]
      }
    },
    ingredients: [
      ing('Cucumber', 'Komkommer', 'Concombre', 1, 'st.'),
      ing('Red onion', 'Rode ui', 'Oignon rouge', 0.25, 'st.'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 1, 'el'),
      ing('Stevia', 'Stevia', 'Stévia', 0.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl'),
      ing('White pepper', 'Witte peper', 'Poivre blanc', 0.25, 'kl'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 1, 'pinch')
    ]
  },

  {
    slug: 'chicken-fajita-bowl',
    prepTime: '10 mins',
    cookTime: '25 mins',
    difficulty: diff.easy,
    servings: 3,
    category: ['main'],
    translations: {
      en: {
        title: 'Chicken Fajita Bowl',
        subtitle: 'Homemade fajita spice and an avocado crema',
        description: 'Spiced chicken and charred peppers and onion over greens and quinoa, with avocado and a green crema blended from avocado, coriander and lemon. Mix a jar of the spice for next time.',
        instructions: [
          'Shake the chilli powder, onion powder, cumin, garlic powder, paprika, oregano and salt together in a jar.',
          'Heat a tablespoon of oil in a large frying pan over medium-high heat and fry the peppers and onion for about 5 minutes. Add the garlic for a minute, then the coconut aminos, salt and pepper. Tip out of the pan.',
          'Toss the chicken in 1–2 tablespoons of the spice mix, add another tablespoon of oil to the pan and cook until no pink remains. Slice it.',
          'Blend the avocado, coriander and lemon juice for the crema, thinning with water and seasoning with salt.',
          'Build the bowls on the greens: chicken, peppers, quinoa and avocado, topped with spring onion, coriander and the crema.'
        ]
      },
      nl: {
        title: 'Kipfajitabowl',
        subtitle: 'Zelfgemaakte fajitakruiden en een avocadocrème',
        description: 'Gekruide kip en geblakerde paprika en ui op sla en quinoa, met avocado en een groene crème van avocado, koriander en citroen. Maak meteen een potje kruiden voor de volgende keer.',
        instructions: [
          'Schud het chilipoeder, uienpoeder, de komijn, het lookpoeder, paprikapoeder, de oregano en het zout samen in een potje.',
          'Verhit een eetlepel olie in een grote pan op middelhoog tot hoog vuur en bak de paprika en ui zo\'n 5 minuten. Voeg de look toe voor een minuut, dan de kokosaminos, zout en peper. Schep uit de pan.',
          'Wentel de kip in 1–2 eetlepels kruidenmix, doe nog een eetlepel olie in de pan en bak tot er geen roze meer te zien is. Snijd in reepjes.',
          'Mix de avocado, koriander en het citroensap voor de crème, verdun met water en kruid met zout.',
          'Bouw de bowls op het groen: kip, paprika, quinoa en avocado, met lente-ui, koriander en de crème erop.'
        ]
      },
      fr: {
        title: 'Bol fajitas au poulet',
        subtitle: 'Épices fajitas maison et crème d\'avocat',
        description: 'Du poulet épicé, des poivrons et de l\'oignon saisis sur de la verdure et du quinoa, avec de l\'avocat et une crème verte mixée d\'avocat, de coriandre et de citron. Prépare un bocal d\'épices pour la prochaine fois.',
        instructions: [
          'Secoue le piment, la poudre d\'oignon, le cumin, l\'ail en poudre, le paprika, l\'origan et le sel dans un bocal.',
          'Chauffe une cuillère à soupe d\'huile dans une grande poêle à feu moyen-vif et fais sauter les poivrons et l\'oignon environ 5 minutes. Ajoute l\'ail une minute, puis les aminos de coco, le sel et le poivre. Réserve.',
          'Enrobe le poulet d\'1–2 cuillères à soupe d\'épices, ajoute une autre cuillère d\'huile dans la poêle et cuis jusqu\'à ce qu\'il n\'y ait plus de rose. Tranche-le.',
          'Mixe l\'avocat, la coriandre et le jus de citron pour la crème, allonge d\'eau et sale.',
          'Monte les bols sur la verdure : poulet, poivrons, quinoa et avocat, garnis d\'oignon nouveau, de coriandre et de crème.'
        ]
      }
    },
    ingredients: [
      ing('Chicken breasts', 'Kipfilets', 'Blancs de poulet', 450, 'g'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Red bell pepper', 'Rode paprika', 'Poivron rouge', 1, 'st.'),
      ing('Yellow bell pepper', 'Gele paprika', 'Poivron jaune', 1, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 1, 'el'),
      ing('Chili powder', 'Chilipoeder', 'Piment en poudre', 1, 'el'),
      ing('Onion powder', 'Uienpoeder', 'Poudre d\'oignon', 2, 'kl'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 1, 'kl'),
      ing('Garlic powder', 'Lookpoeder', 'Ail en poudre', 1, 'kl'),
      ing('Paprika', 'Paprikapoeder', 'Paprika', 1, 'kl'),
      ing('Dried oregano', 'Gedroogde oregano', 'Origan séché', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Mixed salad greens', 'Gemengde sla', 'Mesclun', 60, 'g'),
      ing('Cooked quinoa', 'Gekookte quinoa', 'Quinoa cuit', 370, 'g'),
      ing('Avocado', 'Avocado', 'Avocat', 2, 'st.'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 4, 'st.'),
      ing('Coriander', 'Koriander', 'Coriandre', 30, 'g'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'quinoa-rutabaga-patties',
    prepTime: '10 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main', 'snack'],
    translations: {
      en: {
        title: 'Quinoa & Swede Patties',
        subtitle: 'Golden turmeric patties baked, not fried',
        description: 'Quinoa and grated swede with shallot, garlic, herbs and turmeric, baked on a tray until golden on both sides. Eat them plain or with a dollop of yogurt.',
        instructions: [
          'Heat the oven to 200 °C and brush a baking tray with the oil.',
          'Mix the quinoa, swede, shallot, garlic, chives, parsley, eggs, turmeric, salt and pepper in a large bowl.',
          'Scoop heaps of about 3 tablespoons onto the tray and flatten them with a fork to about 2–3 cm.',
          'Bake for 10 minutes, flip carefully and bake 10 minutes more.',
          'Serve with yogurt and fresh herbs.'
        ]
      },
      nl: {
        title: 'Burgertjes van quinoa en koolraap',
        subtitle: 'Goudgele burgertjes met kurkuma, gebakken in de oven',
        description: 'Quinoa en geraspte koolraap met sjalot, look, kruiden en kurkuma, op een bakplaat gebakken tot ze aan beide kanten goudbruin zijn. Lekker zo, of met een lepel yoghurt.',
        instructions: [
          'Verwarm de oven voor op 200 °C en bestrijk een bakplaat met de olie.',
          'Meng de quinoa, koolraap, sjalot, look, bieslook, peterselie, eieren, kurkuma, zout en peper in een grote kom.',
          'Schep er hoopjes van zo\'n 3 eetlepels op de plaat en druk ze met een vork plat tot 2–3 cm.',
          'Bak 10 minuten, draai voorzichtig om en bak nog 10 minuten.',
          'Dien op met yoghurt en verse kruiden.'
        ]
      },
      fr: {
        title: 'Galettes de quinoa et rutabaga',
        subtitle: 'Des galettes dorées au curcuma, cuites au four',
        description: 'Du quinoa et du rutabaga râpé avec échalote, ail, herbes et curcuma, cuits sur une plaque jusqu\'à être dorés des deux côtés. À manger nature ou avec une cuillère de yaourt.',
        instructions: [
          'Préchauffe le four à 200 °C et badigeonne une plaque d\'huile.',
          'Mélange le quinoa, le rutabaga, l\'échalote, l\'ail, la ciboulette, le persil, les œufs, le curcuma, le sel et le poivre dans un grand bol.',
          'Dépose des tas d\'environ 3 cuillères à soupe sur la plaque et aplatis-les à la fourchette à 2–3 cm.',
          'Enfourne 10 minutes, retourne délicatement et poursuis 10 minutes.',
          'Sers avec du yaourt et des herbes fraîches.'
        ]
      }
    },
    ingredients: [
      ing('Cooked quinoa', 'Gekookte quinoa', 'Quinoa cuit', 185, 'g'),
      ing('Rutabaga', 'Koolraap', 'Rutabaga', 140, 'g'),
      ing('Shallot', 'Sjalot', 'Échalote', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Chives', 'Bieslook', 'Ciboulette', 10, 'g'),
      ing('Parsley', 'Peterselie', 'Persil', 15, 'g'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Turmeric', 'Kurkuma', 'Curcuma', 0.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.25, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 120, 'ml')
    ]
  },

  {
    slug: 'candida-coleslaw',
    prepTime: '10 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 3,
    category: ['snack'],
    wiki: ['en:Coleslaw'],
    translations: {
      en: {
        title: 'Sugar-Free Coleslaw',
        subtitle: 'A yogurt dressing instead of mayonnaise',
        description: 'Red and green cabbage with grated radish and celery seed in a tangy yogurt dressing. All the crunch of coleslaw, none of the sugar or mayonnaise.',
        instructions: [
          'Put the cabbage, radish and celery seed in a bowl.',
          'Whisk the yogurt, vinegar, lemon juice, stevia, salt and pepper together.',
          'Pour the dressing over the cabbage and toss well.'
        ]
      },
      nl: {
        title: 'Koolsla zonder suiker',
        subtitle: 'Een yoghurtdressing in plaats van mayonaise',
        description: 'Rode en groene kool met geraspte radijs en selderzaad in een frisse yoghurtdressing. Al het knapperige van koolsla, zonder de suiker of mayonaise.',
        instructions: [
          'Doe de kool, radijs en het selderzaad in een kom.',
          'Klop de yoghurt, azijn, het citroensap, stevia, zout en peper samen.',
          'Giet de dressing over de kool en meng goed.'
        ]
      },
      fr: {
        title: 'Coleslaw sans sucre',
        subtitle: 'Une sauce au yaourt au lieu de la mayonnaise',
        description: 'Du chou rouge et vert avec du radis râpé et des graines de céleri dans une sauce acidulée au yaourt. Tout le croquant du coleslaw, sans sucre ni mayonnaise.',
        instructions: [
          'Mets le chou, le radis et les graines de céleri dans un bol.',
          'Fouette ensemble le yaourt, le vinaigre, le jus de citron, la stévia, le sel et le poivre.',
          'Verse la sauce sur le chou et mélange bien.'
        ]
      }
    },
    ingredients: [
      ing('Green cabbage', 'Groene kool', 'Chou vert', 100, 'g'),
      ing('Red cabbage', 'Rode kool', 'Chou rouge', 100, 'g'),
      ing('Radish', 'Radijs', 'Radis', 1, 'st.'),
      ing('Celery seed', 'Selderzaad', 'Graines de céleri', 0.5, 'kl'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 60, 'ml'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 2, 'kl'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', 0.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'caraway-seed-hamburger-buns',
    prepTime: '10 mins',
    cookTime: '25 mins',
    difficulty: diff.medium,
    servings: 3,
    category: ['snack'],
    translations: {
      en: {
        title: 'Caraway Burger Buns',
        subtitle: 'Grain-light buns that hold a burger',
        description: 'Light buns of almond and buckwheat flour lifted with whipped egg white and topped with caraway. Bake them in pastry rings so they keep a proper bun shape.',
        instructions: [
          'Heat the oven to 180 °C. Oil three pastry rings and set them on a tray lined with baking paper.',
          'Whisk the egg whites to soft peaks.',
          'Whisk the yolks with the olive oil.',
          'Mix the almond flour, buckwheat flour, flaxseed and salt, then fold in the yolk mixture and the whites until just combined.',
          'Fill the rings, sprinkle with caraway and bake for 15–18 minutes, until firm. Let them cool, run a knife around the rings to release them, and slice in half.'
        ]
      },
      nl: {
        title: 'Hamburgerbroodjes met karwij',
        subtitle: 'Broodjes met weinig graan die een burger houden',
        description: 'Lichte broodjes van amandel- en boekweitmeel, luchtig door opgeklopt eiwit en met karwijzaad erop. Bak ze in bakringen, dan houden ze een echte broodjesvorm.',
        instructions: [
          'Verwarm de oven voor op 180 °C. Vet drie bakringen in en zet ze op een bakplaat met bakpapier.',
          'Klop de eiwitten tot zachte pieken.',
          'Klop de dooiers met de olijfolie.',
          'Meng het amandelmeel, boekweitmeel, lijnzaad en zout, en spatel er dan het dooiermengsel en het eiwit door tot het net gemengd is.',
          'Vul de ringen, bestrooi met karwijzaad en bak 15–18 minuten, tot ze stevig zijn. Laat afkoelen, ga met een mes langs de ringen om ze los te maken en snijd doormidden.'
        ]
      },
      fr: {
        title: 'Pains à burger au carvi',
        subtitle: 'Des pains pauvres en céréales qui tiennent un burger',
        description: 'Des pains légers aux farines d\'amande et de sarrasin, gonflés aux blancs montés et parsemés de carvi. Cuis-les dans des cercles à pâtisserie pour qu\'ils gardent une vraie forme de pain.',
        instructions: [
          'Préchauffe le four à 180 °C. Huile trois cercles à pâtisserie et pose-les sur une plaque garnie de papier cuisson.',
          'Monte les blancs en neige souple.',
          'Fouette les jaunes avec l\'huile d\'olive.',
          'Mélange la farine d\'amande, la farine de sarrasin, le lin et le sel, puis incorpore délicatement le mélange aux jaunes et les blancs.',
          'Remplis les cercles, parsème de carvi et enfourne 15–18 minutes, jusqu\'à ce qu\'ils soient fermes. Laisse refroidir, passe un couteau le long des cercles pour démouler et coupe en deux.'
        ]
      }
    },
    ingredients: [
      ing('Eggs', 'Eieren', 'Oeufs', 3, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 3, 'el'),
      ing('Almond flour', 'Amandelmeel', 'Farine d\'amande', 100, 'g'),
      ing('Buckwheat flour', 'Boekweitmeel', 'Farine de sarrasin', 30, 'g'),
      ing('Flaxseed meal', 'Gemalen lijnzaad', 'Graines de lin moulues', 30, 'g'),
      ing('Caraway seeds', 'Karwijzaad', 'Graines de carvi', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl')
    ]
  },

  {
    slug: 'walnut-sauce-grilled-chicken',
    prepTime: '20 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Chicken with Saffron Walnut Sauce',
        subtitle: 'A Georgian-style nut sauce with warm spices',
        description: 'Browned chicken sliced and spooned over with a rich sauce of ground walnuts simmered in stock with saffron, paprika, coriander and fenugreek and sharpened with vinegar.',
        instructions: [
          'Grind the walnuts, garlic, chilli flakes, coriander leaves and salt coarsely in a food processor.',
          'Heat the stock in a saucepan over medium heat, add the walnut mix, saffron, paprika, ground coriander and fenugreek and bring to a simmer.',
          'Turn the heat to medium-low and simmer for 5 minutes. Take it off the heat and stir in the vinegar.',
          'Heat a little oil in a frying pan over medium-high heat and cook the chicken for 7–10 minutes, until browned all over and cooked through.',
          'Slice the chicken and spoon the sauce over. Leftover sauce keeps covered in the fridge.'
        ]
      },
      nl: {
        title: 'Kip met walnotensaus en saffraan',
        subtitle: 'Een notensaus op Georgische wijze, met warme specerijen',
        description: 'Gebakken kip in plakjes met een rijke saus van gemalen walnoten gesudderd in bouillon met saffraan, paprika, koriander en fenegriek en opgefrist met azijn.',
        instructions: [
          'Maal de walnoten, look, chilivlokken, korianderblaadjes en het zout grof in de keukenrobot.',
          'Verwarm de bouillon in een steelpan op middelhoog vuur, voeg het notenmengsel, de saffraan, het paprikapoeder, de gemalen koriander en fenegriek toe en breng aan de kook.',
          'Zet het vuur middellaag en laat 5 minuten sudderen. Haal van het vuur en roer de azijn erdoor.',
          'Verhit wat olie in een pan op middelhoog tot hoog vuur en bak de kip 7–10 minuten, tot ze rondom bruin en gaar is.',
          'Snijd de kip in plakjes en schep de saus erover. Overgebleven saus blijft afgedekt goed in de koelkast.'
        ]
      },
      fr: {
        title: 'Poulet sauce aux noix et au safran',
        subtitle: 'Une sauce aux noix à la géorgienne, aux épices chaudes',
        description: 'Du poulet doré tranché et nappé d\'une sauce riche de noix moulues mijotées dans le bouillon avec safran, paprika, coriandre et fenugrec, relevée de vinaigre.',
        instructions: [
          'Moud grossièrement les noix, l\'ail, le piment, les feuilles de coriandre et le sel au robot.',
          'Chauffe le bouillon dans une casserole à feu moyen, ajoute le mélange aux noix, le safran, le paprika, la coriandre moulue et le fenugrec et porte à frémissement.',
          'Baisse à feu moyen-doux et laisse mijoter 5 minutes. Retire du feu et ajoute le vinaigre.',
          'Chauffe un peu d\'huile dans une poêle à feu moyen-vif et cuis le poulet 7–10 minutes, jusqu\'à ce qu\'il soit doré de tous côtés et cuit.',
          'Tranche le poulet et nappe-le de sauce. Le reste de sauce se garde couvert au frigo.'
        ]
      }
    },
    ingredients: [
      ing('Chicken breast', 'Kipfilet', 'Blanc de poulet', 225, 'g'),
      ing('Walnuts', 'Walnoten', 'Noix', 90, 'g'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 0.25, 'kl'),
      ing('Coriander', 'Koriander', 'Coriandre', 4, 'sprig'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl'),
      ing('Chicken broth', 'Kippenbouillon', 'Bouillon de volaille', 300, 'ml'),
      ing('Saffron', 'Saffraan', 'Safran', 1, 'pinch'),
      ing('Paprika', 'Paprikapoeder', 'Paprika', 0.25, 'kl'),
      ing('Ground coriander', 'Korianderpoeder', 'Coriandre moulue', 0.25, 'kl'),
      ing('Ground fenugreek', 'Fenegriekpoeder', 'Fenugrec moulu', 0.25, 'kl'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 1, 'el'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el')
    ]
  },

  {
    slug: 'mindful-veggie-bowl',
    prepTime: '10 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Roasted Vegetable Bowl',
        subtitle: 'Whatever\'s in the fridge, with a turmeric spice mix',
        description: 'A tray of roasted vegetables seasoned with turmeric, cayenne and curry, tossed with fresh chard and almonds. The simplest dinner in the book, and endlessly variable.',
        instructions: [
          'Heat the oven to 200 °C. Shake the salt, turmeric, cayenne and curry powder together in a jar.',
          'Spread the vegetables and garlic on a baking tray, drizzle with the oil and sprinkle over a teaspoon of the spice mix.',
          'Roast for 10–15 minutes, until the edges brown.',
          'Toss with the chard and almonds and serve in deep bowls, with a drizzle of oil, coconut aminos or lemon juice and some chilli flakes.'
        ]
      },
      nl: {
        title: 'Bowl met geroosterde groenten',
        subtitle: 'Wat er in de koelkast ligt, met een kruidenmix met kurkuma',
        description: 'Een plaat geroosterde groenten gekruid met kurkuma, cayenne en curry, gemengd met verse snijbiet en amandelen. Het eenvoudigste avondeten uit het boek, en eindeloos te variëren.',
        instructions: [
          'Verwarm de oven voor op 200 °C. Schud het zout, de kurkuma, cayenne en currypoeder samen in een potje.',
          'Spreid de groenten en look uit op een bakplaat, sprenkel er de olie over en strooi er een theelepel kruidenmix over.',
          'Rooster 10–15 minuten, tot de randjes bruin worden.',
          'Meng met de snijbiet en amandelen en dien op in diepe kommen, met een scheutje olie, kokosaminos of citroensap en wat chilivlokken.'
        ]
      },
      fr: {
        title: 'Bol de légumes rôtis',
        subtitle: 'Ce qu\'il y a au frigo, avec un mélange d\'épices au curcuma',
        description: 'Une plaque de légumes rôtis assaisonnés de curcuma, de cayenne et de curry, mêlés à des blettes fraîches et des amandes. Le dîner le plus simple du livre, et infiniment variable.',
        instructions: [
          'Préchauffe le four à 200 °C. Secoue le sel, le curcuma, le cayenne et le curry dans un bocal.',
          'Étale les légumes et l\'ail sur une plaque, arrose d\'huile et saupoudre d\'une cuillère à café du mélange d\'épices.',
          'Rôtis 10–15 minutes, jusqu\'à ce que les bords dorent.',
          'Mélange avec les blettes et les amandes et sers dans des bols creux, avec un filet d\'huile, d\'aminos de coco ou de jus de citron et un peu de piment.'
        ]
      }
    },
    ingredients: [
      ing('Cauliflower', 'Bloemkool', 'Chou-fleur', 200, 'g'),
      ing('Broccoli', 'Broccoli', 'Brocoli', 150, 'g'),
      ing('Celery stalks', 'Bladselder', 'Céleri branche', 2, 'st.'),
      ing('Zucchini', 'Courgette', 'Courgette', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Turmeric', 'Kurkuma', 'Curcuma', 0.5, 'kl'),
      ing('Cayenne pepper', 'Cayennepeper', 'Piment de Cayenne', 0.25, 'kl'),
      ing('Curry powder', 'Currypoeder', 'Curry en poudre', 1, 'pinch'),
      ing('Swiss chard', 'Snijbiet', 'Blettes', 1, 'st.'),
      ing('Flaked almonds', 'Amandelschilfers', 'Amandes effilées', 2, 'el'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 1, 'el'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 1, 'pinch')
    ]
  }
];
