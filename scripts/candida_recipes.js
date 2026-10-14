/**
 * Candida-diet dishes, after the recipes on thecandidadiet.com.
 *
 * Only the facts come from there: which dish, what goes in it and how much.
 * The descriptions and the method are written fresh for this book, in all
 * three languages, and every recipe links back to the original (`slug` ->
 * sourceUrl) — so the drawer can say where it came from. No photos are taken.
 *
 * Amounts are metric and raw: scripts/add_candida_recipes.js runs every line
 * through ingredients.js like every other recipe in the book.
 *
 * Split over several files purely to keep each one readable.
 */

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });
const diff = {
  easy: { en: 'Easy', nl: 'Makkelijk', fr: 'Facile' },
  medium: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' }
};

module.exports = [
  {
    slug: 'quick-and-easy-avocado-mousse',
    prepTime: '5 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['breakfast', 'dessert'],
    translations: {
      en: {
        title: 'Avocado Mousse',
        subtitle: 'Five minutes, one blender, no sugar',
        description: 'Avocado and yogurt blitzed with lime until it turns silky. Good at breakfast, just as good as a dessert.',
        instructions: [
          'Put the avocado flesh, yogurt, coconut milk, lime juice and zest in a blender or food processor.',
          'Blend until completely smooth, scraping down the sides once.',
          'Taste and sweeten with a little stevia if you like.',
          'Spoon it into a glass and scatter over the blueberries, almonds, pumpkin seeds and coconut.'
        ]
      },
      nl: {
        title: 'Avocadomousse',
        subtitle: 'Vijf minuten, één blender, geen suiker',
        description: 'Avocado en yoghurt met limoen gemixt tot het zijdezacht is. Lekker als ontbijt, even lekker als dessert.',
        instructions: [
          'Doe het vruchtvlees van de avocado, de yoghurt, de kokosmelk, het limoensap en de zeste in een blender of keukenrobot.',
          'Mix tot alles helemaal glad is en schraap de wanden één keer af.',
          'Proef en zoet naar smaak bij met wat stevia.',
          'Schep het in een glas en strooi er de blauwe bessen, amandelen, pompoenpitten en kokos over.'
        ]
      },
      fr: {
        title: 'Mousse d\'avocat',
        subtitle: 'Cinq minutes, un mixeur, pas de sucre',
        description: 'De l\'avocat et du yaourt mixés au citron vert jusqu\'à devenir soyeux. Parfait au petit-déjeuner, tout aussi bon en dessert.',
        instructions: [
          'Mets la chair de l\'avocat, le yaourt, le lait de coco, le jus et le zeste de citron vert dans un mixeur.',
          'Mixe jusqu\'à ce que ce soit parfaitement lisse, en raclant les parois une fois.',
          'Goûte et sucre avec un peu de stévia si tu veux.',
          'Verse dans un verre et parsème de myrtilles, d\'amandes, de graines de courge et de coco.'
        ]
      }
    },
    ingredients: [
      ing('Avocado', 'Avocado', 'Avocat', 1, 'st.'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 120, 'ml'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 4, 'el'),
      ing('Lime juice', 'Limoensap', 'Jus de citron vert', 2, 'el'),
      ing('Lime zest', 'Limoenzeste', 'Zeste de citron vert', 1, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', null, 'to taste'),
      ing('Blueberries', 'Blauwe bessen', 'Myrtilles', 30, 'g'),
      ing('Flaked almonds', 'Amandelschilfers', 'Amandes effilées', 1, 'el'),
      ing('Pumpkin seeds', 'Pompoenpitten', 'Graines de courge', 1, 'el'),
      ing('Coconut flakes', 'Kokosschilfers', 'Copeaux de coco', 1, 'el')
    ]
  },

  {
    slug: 'happy-gut-bowl',
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['breakfast', 'main'],
    translations: {
      en: {
        title: 'Happy Gut Bowl',
        subtitle: 'Greens, quinoa, a fried egg and sauerkraut',
        description: 'A warm bowl built in one pan: sautéed broccoli and courgette, a fried egg, quinoa and a sharp sauerkraut dressing that does the work vinegar usually does.',
        instructions: [
          'Shake the olive oil, sauerkraut juice, onion powder, dried herbs, salt, pepper and a pinch of stevia together in a jar. That\'s the dressing.',
          'Heat 1 tablespoon of oil in a frying pan over medium heat and fry the broccoli and courgette with salt and pepper for 5–6 minutes. Tip them onto a plate.',
          'Add the rest of the oil, crack in the egg, cover and fry for 2–3 minutes, until the white is set.',
          'Warm the quinoa in the same pan for a minute or two.',
          'Build the bowl: greens, quinoa, vegetables and the egg on top. Finish with avocado, sauerkraut, grated radish and spring onion, and drizzle over some dressing.'
        ]
      },
      nl: {
        title: 'Happy Gut Bowl',
        subtitle: 'Groen, quinoa, een spiegelei en zuurkool',
        description: 'Een warme bowl uit één pan: gebakken broccoli en courgette, een spiegelei, quinoa en een frisse zuurkooldressing die het werk van azijn overneemt.',
        instructions: [
          'Schud de olijfolie, het zuurkoolsap, het uienpoeder, de gedroogde kruiden, peper, zout en een snuifje stevia samen in een potje. Dat is de dressing.',
          'Verhit 1 eetlepel olie in een pan op middelhoog vuur en bak de broccoli en courgette 5–6 minuten met peper en zout. Leg ze op een bord.',
          'Doe de rest van de olie in de pan, breek het ei erin, leg er een deksel op en bak 2–3 minuten tot het wit gestold is.',
          'Warm de quinoa een minuutje of twee op in dezelfde pan.',
          'Stel de bowl samen: groen, quinoa, groenten en het ei erbovenop. Werk af met avocado, zuurkool, geraspte radijs en lente-ui, en sprenkel er wat dressing over.'
        ]
      },
      fr: {
        title: 'Bol « ventre heureux »',
        subtitle: 'Verdure, quinoa, œuf au plat et choucroute',
        description: 'Un bol chaud fait dans une seule poêle : brocoli et courgette sautés, un œuf au plat, du quinoa et une vinaigrette à la choucroute qui remplace le vinaigre.',
        instructions: [
          'Secoue l\'huile d\'olive, le jus de choucroute, la poudre d\'oignon, les herbes séchées, le sel, le poivre et une pincée de stévia dans un bocal. Voilà la vinaigrette.',
          'Chauffe 1 cuillère à soupe d\'huile à feu moyen et fais sauter le brocoli et la courgette avec sel et poivre 5–6 minutes. Réserve-les sur une assiette.',
          'Ajoute le reste de l\'huile, casse l\'œuf, couvre et cuis 2–3 minutes jusqu\'à ce que le blanc soit pris.',
          'Réchauffe le quinoa une minute ou deux dans la même poêle.',
          'Monte le bol : verdure, quinoa, légumes et l\'œuf par-dessus. Termine avec l\'avocat, la choucroute, le radis râpé et l\'oignon nouveau, et arrose d\'un peu de vinaigrette.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 4, 'el'),
      ing('Broccoli', 'Broccoli', 'Brocoli', 50, 'g'),
      ing('Zucchini', 'Courgette', 'Courgette', 60, 'g'),
      ing('Egg', 'Ei', 'Oeuf', 1, 'st.'),
      ing('Cooked quinoa', 'Gekookte quinoa', 'Quinoa cuit', 90, 'g'),
      ing('Mixed salad greens', 'Gemengde sla', 'Mesclun', 30, 'g'),
      ing('Avocado', 'Avocado', 'Avocat', 0.5, 'st.'),
      ing('Sauerkraut', 'Zuurkool', 'Choucroute', 3, 'el'),
      ing('Sauerkraut juice', 'Zuurkoolsap', 'Jus de choucroute', 2, 'el'),
      ing('Radish', 'Radijs', 'Radis', 1, 'st.'),
      ing('Spring onion', 'Lente-ui', 'Oignon nouveau', 1, 'st.'),
      ing('Onion powder', 'Uienpoeder', 'Poudre d\'oignon', 0.25, 'kl'),
      ing('Dried herbs', 'Gedroogde kruiden', 'Herbes séchées', 1, 'pinch'),
      ing('Stevia', 'Stevia', 'Stévia', 1, 'pinch'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'rhubarb-muffins',
    prepTime: '10 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 12,
    category: ['breakfast', 'dessert'],
    translations: {
      en: {
        title: 'Rhubarb Muffins',
        subtitle: 'Quinoa and buckwheat, sharp with rhubarb',
        description: 'Gluten-free muffins with tart pieces of rhubarb all through them. Psyllium holds the crumb together where wheat normally would.',
        instructions: [
          'Heat the oven to 180 °C and line a 12-hole muffin tin.',
          'Whisk the quinoa flour, buckwheat flour, psyllium, cinnamon, salt, baking powder and baking soda together in a large bowl.',
          'In another bowl, whisk the eggs, yogurt, melted oil, almond milk, vanilla and stevia.',
          'Stir the wet into the dry until just combined, then fold in the rhubarb.',
          'Divide over the tin and bake for about 20 minutes, until the tops spring back when pressed. Let them cool before you dig in.'
        ]
      },
      nl: {
        title: 'Rabarbermuffins',
        subtitle: 'Quinoa en boekweit, fris van de rabarber',
        description: 'Glutenvrije muffins vol zure stukjes rabarber. Psyllium houdt het kruim samen waar dat normaal tarwe doet.',
        instructions: [
          'Verwarm de oven voor op 180 °C en bekleed een muffinvorm met 12 holtes.',
          'Klop de quinoameel, boekweitmeel, psyllium, kaneel, zout, bakpoeder en zuiveringszout samen in een grote kom.',
          'Klop in een andere kom de eieren, yoghurt, gesmolten olie, amandelmelk, vanille en stevia los.',
          'Roer het natte door het droge tot het net gemengd is en spatel dan de rabarber erdoor.',
          'Verdeel over de vorm en bak ongeveer 20 minuten, tot de bovenkant terugveert als je erop drukt. Laat ze afkoelen voor je erin bijt.'
        ]
      },
      fr: {
        title: 'Muffins à la rhubarbe',
        subtitle: 'Quinoa et sarrasin, acidulés à la rhubarbe',
        description: 'Des muffins sans gluten pleins de morceaux de rhubarbe acidulée. Le psyllium tient la mie là où le blé le ferait d\'habitude.',
        instructions: [
          'Préchauffe le four à 180 °C et garnis un moule à 12 muffins.',
          'Fouette la farine de quinoa, la farine de sarrasin, le psyllium, la cannelle, le sel, la levure chimique et le bicarbonate dans un grand bol.',
          'Dans un autre bol, fouette les œufs, le yaourt, l\'huile fondue, le lait d\'amande, la vanille et la stévia.',
          'Mélange le liquide au sec juste assez pour l\'incorporer, puis ajoute la rhubarbe délicatement.',
          'Répartis dans le moule et enfourne environ 20 minutes, jusqu\'à ce que le dessus rebondisse sous le doigt. Laisse refroidir avant de croquer.'
        ]
      }
    },
    ingredients: [
      ing('Quinoa flour', 'Quinoameel', 'Farine de quinoa', 110, 'g'),
      ing('Buckwheat flour', 'Boekweitmeel', 'Farine de sarrasin', 120, 'g'),
      ing('Psyllium husk powder', 'Psylliumvezels', 'Psyllium en poudre', 1, 'kl'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Baking powder', 'Bakpoeder', 'Levure chimique', 1, 'kl'),
      ing('Baking soda', 'Zuiveringszout', 'Bicarbonate de soude', 1, 'kl'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 240, 'ml'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 60, 'ml'),
      ing('Almond milk', 'Amandelmelk', 'Lait d\'amande', 180, 'ml'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 1, 'el'),
      ing('Stevia', 'Stevia', 'Stévia', 1, 'el'),
      ing('Rhubarb', 'Rabarber', 'Rhubarbe', 180, 'g')
    ]
  },

  {
    slug: 'savory-zucchini-and-pesto-bread',
    prepTime: '20 mins',
    cookTime: '45 mins',
    difficulty: diff.medium,
    servings: 8,
    category: ['breakfast', 'snack'],
    translations: {
      en: {
        title: 'Courgette & Pesto Loaf',
        subtitle: 'A savoury gluten-free loaf with a green swirl',
        description: 'Millet, almond and buckwheat flour make a moist loaf, grated courgette keeps it that way, and homemade pesto runs through the middle.',
        instructions: [
          'Make the pesto: blitz the basil, nuts, garlic, salt and lemon juice in a food processor, then pour in the olive oil while it runs.',
          'Heat the oven to 180 °C. Oil a 20 × 10 cm loaf tin and line it with baking paper.',
          'Squeeze as much water as you can out of the grated courgette with your hands or a clean tea towel.',
          'Whisk the millet, almond and buckwheat flours with the psyllium, baking powder, baking soda, salt and pepper. Stir the vinegar into the almond milk.',
          'Beat the eggs until frothy, whisk in the almond milk and the light olive oil, then stir in the dry mix. Fold in the courgette and the chopped nuts.',
          'Pour into the tin, dot the pesto over the top and swirl it in with a knife.',
          'Bake for 40–45 minutes, until a skewer comes out clean. Leave it 10 minutes in the tin, then let it cool fully on a rack before slicing.'
        ]
      },
      nl: {
        title: 'Courgette-pestobrood',
        subtitle: 'Een hartig glutenvrij brood met een groene swirl',
        description: 'Gierst-, amandel- en boekweitmeel maken een smeuïg brood, geraspte courgette houdt het zo, en er loopt zelfgemaakte pesto door het midden.',
        instructions: [
          'Maak de pesto: mix basilicum, noten, look, zout en citroensap in de keukenrobot en giet de olijfolie erbij terwijl hij draait.',
          'Verwarm de oven voor op 180 °C. Vet een cakevorm van 20 × 10 cm in en bekleed hem met bakpapier.',
          'Knijp zoveel mogelijk vocht uit de geraspte courgette, met je handen of in een schone keukenhanddoek.',
          'Klop het gierst-, amandel- en boekweitmeel met de psyllium, het bakpoeder, zuiveringszout, zout en peper door elkaar. Roer de azijn door de amandelmelk.',
          'Klop de eieren schuimig, klop de amandelmelk en de lichte olijfolie erdoor en roer dan het droge mengsel erbij. Spatel de courgette en de gehakte noten erdoor.',
          'Giet in de vorm, verdeel de pesto in klodders over de bovenkant en trek er met een mes een swirl door.',
          'Bak 40–45 minuten, tot een prikker er droog uitkomt. Laat 10 minuten in de vorm staan en dan volledig afkoelen op een rooster voor je snijdt.'
        ]
      },
      fr: {
        title: 'Pain courgette et pesto',
        subtitle: 'Un pain salé sans gluten, marbré de vert',
        description: 'Les farines de millet, d\'amande et de sarrasin donnent un pain moelleux, la courgette râpée le garde ainsi, et un pesto maison le traverse.',
        instructions: [
          'Fais le pesto : mixe le basilic, les noix, l\'ail, le sel et le jus de citron, puis verse l\'huile d\'olive en filet, robot en marche.',
          'Préchauffe le four à 180 °C. Huile un moule à cake de 20 × 10 cm et chemise-le de papier cuisson.',
          'Presse la courgette râpée pour en retirer un maximum d\'eau, à la main ou dans un torchon propre.',
          'Fouette les farines de millet, d\'amande et de sarrasin avec le psyllium, la levure, le bicarbonate, le sel et le poivre. Mélange le vinaigre au lait d\'amande.',
          'Bats les œufs jusqu\'à ce qu\'ils moussent, ajoute le lait d\'amande et l\'huile d\'olive légère, puis le mélange sec. Incorpore la courgette et les noix hachées.',
          'Verse dans le moule, dépose le pesto en petits tas sur le dessus et marbre-le avec un couteau.',
          'Enfourne 40–45 minutes, jusqu\'à ce qu\'une pique ressorte sèche. Laisse 10 minutes dans le moule, puis refroidir complètement sur une grille avant de trancher.'
        ]
      }
    },
    ingredients: [
      ing('Zucchini', 'Courgette', 'Courgette', 1, 'st.'),
      ing('Millet flour', 'Gierstmeel', 'Farine de millet', 150, 'g'),
      ing('Almond flour', 'Amandelmeel', 'Farine d\'amande', 75, 'g'),
      ing('Buckwheat flour', 'Boekweitmeel', 'Farine de sarrasin', 60, 'g'),
      ing('Psyllium husk powder', 'Psylliumvezels', 'Psyllium en poudre', 1, 'el'),
      ing('Baking powder', 'Bakpoeder', 'Levure chimique', 1, 'kl'),
      ing('Baking soda', 'Zuiveringszout', 'Bicarbonate de soude', 0.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.75, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 1, 'pinch'),
      ing('Almond milk', 'Amandelmelk', 'Lait d\'amande', 120, 'ml'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 1, 'kl'),
      ing('Eggs', 'Eieren', 'Oeufs', 3, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 140, 'ml'),
      ing('Pine nuts', 'Pijnboompitten', 'Pignons de pin', 75, 'g'),
      ing('Basil', 'Basilicum', 'Basilic', 40, 'g'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el')
    ]
  },

  {
    slug: 'avocado-baked-eggs-vegetable-hash',
    prepTime: '10 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['breakfast'],
    translations: {
      en: {
        title: 'Avocado Baked Eggs',
        subtitle: 'Eggs baked in avocado on a bed of vegetables',
        description: 'Each avocado half becomes a little cup for an egg, nestled into diced vegetables that roast underneath. A weekend breakfast that cooks itself.',
        instructions: [
          'Heat the oven to 220 °C.',
          'Spread the diced tomato, courgette, pepper and onion in a small ovenproof dish, season, and drizzle with 1 tablespoon of oil.',
          'Push two hollows into the vegetables and sit an avocado half, cut side up, in each one.',
          'Crack an egg into each avocado, season, and drizzle over the rest of the oil.',
          'Bake for 15–20 minutes, until the whites are set and the yolks are just starting to firm. Scatter over parsley.'
        ]
      },
      nl: {
        title: 'Gebakken eitjes in avocado',
        subtitle: 'Eieren in avocado op een bedje groenten',
        description: 'Elke avocadohelft wordt een kommetje voor een ei, op een bed blokjes groenten die eronder mee roosteren. Een weekendontbijt dat zichzelf bakt.',
        instructions: [
          'Verwarm de oven voor op 220 °C.',
          'Verdeel de blokjes tomaat, courgette, paprika en ui over een kleine ovenschaal, kruid en besprenkel met 1 eetlepel olie.',
          'Druk twee kuiltjes in de groenten en zet in elk een avocadohelft, met de snijkant naar boven.',
          'Breek een ei in elke avocado, kruid en sprenkel de rest van de olie erover.',
          'Bak 15–20 minuten, tot het wit gestold is en de dooier net begint op te stijven. Strooi er peterselie over.'
        ]
      },
      fr: {
        title: 'Œufs cuits dans l\'avocat',
        subtitle: 'Des œufs dans l\'avocat sur un lit de légumes',
        description: 'Chaque demi-avocat devient une petite coupe pour un œuf, posé sur des légumes en dés qui rôtissent en dessous. Un petit-déjeuner du week-end qui cuit tout seul.',
        instructions: [
          'Préchauffe le four à 220 °C.',
          'Étale les dés de tomate, de courgette, de poivron et d\'oignon dans un petit plat allant au four, assaisonne et arrose d\'1 cuillère à soupe d\'huile.',
          'Creuse deux nids dans les légumes et pose un demi-avocat dans chacun, face coupée vers le haut.',
          'Casse un œuf dans chaque avocat, assaisonne et arrose du reste de l\'huile.',
          'Enfourne 15–20 minutes, jusqu\'à ce que les blancs soient pris et les jaunes commencent à épaissir. Parsème de persil.'
        ]
      }
    },
    ingredients: [
      ing('Tomato', 'Tomaat', 'Tomate', 40, 'g'),
      ing('Zucchini', 'Courgette', 'Courgette', 40, 'g'),
      ing('Yellow bell pepper', 'Gele paprika', 'Poivron jaune', 40, 'g'),
      ing('Onion', 'Ui', 'Oignon', 40, 'g'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Avocado', 'Avocado', 'Avocat', 1, 'st.'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'smoky-rutabaga-hash',
    prepTime: '10 mins',
    cookTime: '30 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['breakfast', 'main'],
    translations: {
      en: {
        title: 'Smoky Swede Hash',
        subtitle: 'The potato-free answer to hash browns',
        description: 'Swede cubes fried until golden, then tossed with onion, red pepper and smoked paprika. All the comfort of a fry-up without the potatoes.',
        instructions: [
          'Heat the oil in a large frying pan over medium heat and add the swede. Fry for about 4 minutes, stirring.',
          'Put a lid on and let it cook for about 15 minutes, stirring once or twice, until a fork goes through easily. Turn the heat down if it browns too fast.',
          'Take the lid off, add the onion, red pepper, salt, pepper and smoked paprika, and fry for another 10 minutes.',
          'Finish with chives or dill.'
        ]
      },
      nl: {
        title: 'Gerookte koolraaphash',
        subtitle: 'Het antwoord zonder aardappel op rösti',
        description: 'Blokjes koolraap goudbruin gebakken en dan omgeschept met ui, rode paprika en gerookte paprikapoeder. Al de troost van een gebakken ontbijt, zonder aardappelen.',
        instructions: [
          'Verhit de olie in een grote pan op middelhoog vuur en doe de koolraap erin. Bak ongeveer 4 minuten al roerend.',
          'Leg er een deksel op en laat zo\'n 15 minuten garen, en roer een keer of twee, tot een vork er makkelijk door gaat. Zet het vuur lager als het te snel kleurt.',
          'Haal het deksel eraf, voeg ui, rode paprika, zout, peper en gerookte paprikapoeder toe en bak nog 10 minuten.',
          'Werk af met bieslook of dille.'
        ]
      },
      fr: {
        title: 'Poêlée fumée de rutabaga',
        subtitle: 'La réponse sans pomme de terre aux galettes rissolées',
        description: 'Des dés de rutabaga dorés à la poêle, puis mêlés à l\'oignon, au poivron rouge et au paprika fumé. Tout le réconfort d\'une poêlée, sans pommes de terre.',
        instructions: [
          'Chauffe l\'huile dans une grande poêle à feu moyen et ajoute le rutabaga. Fais-le revenir environ 4 minutes en remuant.',
          'Couvre et laisse cuire une quinzaine de minutes en remuant une ou deux fois, jusqu\'à ce qu\'une fourchette le traverse facilement. Baisse le feu s\'il dore trop vite.',
          'Retire le couvercle, ajoute l\'oignon, le poivron rouge, le sel, le poivre et le paprika fumé, et poursuis 10 minutes.',
          'Termine avec de la ciboulette ou de l\'aneth.'
        ]
      }
    },
    ingredients: [
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 3, 'el'),
      ing('Rutabaga', 'Koolraap', 'Rutabaga', 700, 'g'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Red bell pepper', 'Rode paprika', 'Poivron rouge', 1, 'st.'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.25, 'kl'),
      ing('Smoked paprika', 'Gerookte paprikapoeder', 'Paprika fumé', 2, 'kl'),
      ing('Chives', 'Bieslook', 'Ciboulette', 1, 'el')
    ]
  },

  {
    slug: 'turkey-sage-breakfast-patties',
    prepTime: '10 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['breakfast'],
    translations: {
      en: {
        title: 'Turkey & Sage Patties',
        subtitle: 'Breakfast sausage, without the sausage',
        description: 'Minced turkey seasoned like a good breakfast sausage, with sage, thyme and a pinch of chilli. No fillers, no sugar, nothing cured.',
        instructions: [
          'Mix the turkey with the sage, spring onion, thyme, garlic, salt, pepper and chilli flakes until just combined. Don\'t overwork it.',
          'Shape into 8 patties, about 1 cm thick.',
          'Heat 1 tablespoon of oil in a large frying pan over medium heat and fry 4 patties at a time, 3–4 minutes a side, until browned and cooked right through.',
          'Add the rest of the oil and fry the second batch.'
        ]
      },
      nl: {
        title: 'Kalkoenburgertjes met salie',
        subtitle: 'Ontbijtworstjes, zonder worst',
        description: 'Kalkoengehakt gekruid zoals een goed ontbijtworstje, met salie, tijm en een snuifje chili. Geen vulmiddel, geen suiker, niets gepekeld.',
        instructions: [
          'Meng het kalkoengehakt met de salie, lente-ui, tijm, look, zout, peper en chilivlokken tot het net gemengd is. Niet te lang kneden.',
          'Vorm er 8 burgertjes van, zo\'n 1 cm dik.',
          'Verhit 1 eetlepel olie in een grote pan op middelhoog vuur en bak 4 burgertjes tegelijk, 3–4 minuten per kant, tot ze bruin en helemaal gaar zijn.',
          'Doe de rest van de olie erbij en bak de tweede lading.'
        ]
      },
      fr: {
        title: 'Galettes de dinde à la sauge',
        subtitle: 'De la saucisse du matin, sans saucisse',
        description: 'De la dinde hachée assaisonnée comme une bonne saucisse de petit-déjeuner, avec sauge, thym et une pincée de piment. Sans liant, sans sucre, rien de salaison.',
        instructions: [
          'Mélange la dinde avec la sauge, l\'oignon nouveau, le thym, l\'ail, le sel, le poivre et le piment juste assez pour lier. Ne travaille pas trop.',
          'Forme 8 galettes d\'environ 1 cm d\'épaisseur.',
          'Chauffe 1 cuillère à soupe d\'huile dans une grande poêle à feu moyen et cuis 4 galettes à la fois, 3–4 minutes par face, jusqu\'à ce qu\'elles soient dorées et cuites à cœur.',
          'Ajoute le reste de l\'huile et cuis la deuxième fournée.'
        ]
      }
    },
    ingredients: [
      ing('Ground turkey', 'Kalkoengehakt', 'Dinde hachée', 450, 'g'),
      ing('Sage', 'Salie', 'Sauge', 1, 'el'),
      ing('Spring onion', 'Lente-ui', 'Oignon nouveau', 1, 'el'),
      ing('Dried thyme', 'Gedroogde tijm', 'Thym séché', 0.5, 'kl'),
      ing('Garlic powder', 'Lookpoeder', 'Ail en poudre', 0.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.25, 'kl'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 1, 'pinch'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el')
    ]
  },

  {
    slug: 'cinnamon-coconut-crisp',
    prepTime: '20 mins',
    cookTime: '12 mins',
    difficulty: diff.medium,
    servings: 4,
    category: ['breakfast'],
    translations: {
      en: {
        title: 'Cinnamon Coconut Crisp',
        subtitle: 'Homemade cereal squares, no sugar',
        description: 'An almond-and-coconut dough rolled thin, baked and cut into crunchy little squares. Pour over almond or coconut milk and it tastes like the cereal you\'re not supposed to have.',
        instructions: [
          'Heat the oven to 180 °C.',
          'Whisk the almond flour, coconut, cinnamon, salt and baking soda together.',
          'In another bowl, whisk the vanilla, stevia and melted coconut oil, then whisk in the egg white until frothy.',
          'Stir the wet into the dry until it comes together as a dough.',
          'Roll it out between two sheets of baking paper to about 25 × 38 cm. Peel off the top sheet, slide it onto a tray and bake for 12 minutes.',
          'Cut straight away into 2–3 cm squares with a sharp knife and let them cool completely — they crisp up as they cool.'
        ]
      },
      nl: {
        title: 'Kaneel-kokoscrunch',
        subtitle: 'Zelfgemaakte ontbijtgranen, zonder suiker',
        description: 'Een deeg van amandel en kokos dun uitgerold, gebakken en in knapperige vierkantjes gesneden. Giet er amandel- of kokosmelk over en het smaakt naar de granen die je niet mag.',
        instructions: [
          'Verwarm de oven voor op 180 °C.',
          'Klop het amandelmeel, de kokos, kaneel, zout en het zuiveringszout door elkaar.',
          'Klop in een andere kom de vanille, stevia en gesmolten kokosolie, en klop dan het eiwit erdoor tot het schuimt.',
          'Roer het natte door het droge tot het een deeg wordt.',
          'Rol het tussen twee vellen bakpapier uit tot ongeveer 25 × 38 cm. Trek het bovenste vel eraf, schuif het op een bakplaat en bak 12 minuten.',
          'Snijd meteen in vierkantjes van 2–3 cm met een scherp mes en laat helemaal afkoelen — ze worden knapperig terwijl ze afkoelen.'
        ]
      },
      fr: {
        title: 'Croustillants cannelle-coco',
        subtitle: 'Des céréales maison, sans sucre',
        description: 'Une pâte d\'amande et de coco étalée finement, cuite et coupée en petits carrés croquants. Avec du lait d\'amande ou de coco, on dirait les céréales interdites.',
        instructions: [
          'Préchauffe le four à 180 °C.',
          'Fouette la farine d\'amande, la coco, la cannelle, le sel et le bicarbonate.',
          'Dans un autre bol, fouette la vanille, la stévia et l\'huile de coco fondue, puis ajoute le blanc d\'œuf et fouette jusqu\'à ce que ça mousse.',
          'Mélange le liquide au sec jusqu\'à obtenir une pâte.',
          'Étale-la entre deux feuilles de papier cuisson sur environ 25 × 38 cm. Retire la feuille du dessus, glisse sur une plaque et enfourne 12 minutes.',
          'Coupe aussitôt en carrés de 2–3 cm avec un couteau bien aiguisé et laisse refroidir complètement — ils deviennent croustillants en refroidissant.'
        ]
      }
    },
    ingredients: [
      ing('Almond flour', 'Amandelmeel', 'Farine d\'amande', 150, 'g'),
      ing('Desiccated coconut', 'Geraspte kokos', 'Noix de coco râpée', 40, 'g'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 1.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl'),
      ing('Baking soda', 'Zuiveringszout', 'Bicarbonate de soude', 0.25, 'kl'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 0.5, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', 0.5, 'kl'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 1, 'el'),
      ing('Egg white', 'Eiwit', 'Blanc d\'oeuf', 1, 'st.')
    ]
  },

  {
    slug: 'baked-eggs-skillet-with-red-peppers-onions',
    prepTime: '5 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['breakfast', 'main'],
    translations: {
      en: {
        title: 'Baked Eggs with Peppers & Onions',
        subtitle: 'A pan of soft peppers with eggs set on top',
        description: 'Red peppers and onion cooked down with tomato, smoked paprika and fresh chilli, then four eggs cracked into the pan and finished under the grill.',
        instructions: [
          'Heat the oil in a large ovenproof frying pan over medium heat. Cook the onion and peppers, stirring, for 6–8 minutes until soft.',
          'Stir in the smoked paprika, chilli and tomatoes and cook for another 3–4 minutes. Season with salt and pepper.',
          'Make four hollows in the mixture and crack an egg into each one.',
          'Slide the pan under a medium grill for about 5 minutes, until the eggs are cooked the way you like them. Scatter over parsley.'
        ]
      },
      nl: {
        title: 'Eieren uit de pan met paprika en ui',
        subtitle: 'Een pan zachte paprika met eieren erbovenop',
        description: 'Rode paprika en ui zacht gestoofd met tomaat, gerookte paprikapoeder en verse chili, en dan vier eieren in de pan gebroken en afgewerkt onder de grill.',
        instructions: [
          'Verhit de olie in een grote ovenvaste pan op middelhoog vuur. Bak de ui en paprika 6–8 minuten al roerend tot ze zacht zijn.',
          'Roer de gerookte paprikapoeder, chili en tomaten erdoor en bak nog 3–4 minuten. Kruid met peper en zout.',
          'Maak vier kuiltjes in het mengsel en breek in elk een ei.',
          'Schuif de pan zo\'n 5 minuten onder een middelhete grill, tot de eieren gaar zijn zoals jij ze graag hebt. Strooi er peterselie over.'
        ]
      },
      fr: {
        title: 'Œufs cocotte aux poivrons et oignons',
        subtitle: 'Une poêle de poivrons fondants, des œufs par-dessus',
        description: 'Des poivrons rouges et de l\'oignon fondus avec de la tomate, du paprika fumé et du piment frais, puis quatre œufs cassés dans la poêle et finis sous le gril.',
        instructions: [
          'Chauffe l\'huile dans une grande poêle allant au four à feu moyen. Fais fondre l\'oignon et les poivrons 6–8 minutes en remuant.',
          'Ajoute le paprika fumé, le piment et les tomates et poursuis 3–4 minutes. Sale et poivre.',
          'Creuse quatre nids dans le mélange et casse un œuf dans chacun.',
          'Glisse la poêle sous le gril à puissance moyenne environ 5 minutes, jusqu\'à ce que les œufs soient cuits à ton goût. Parsème de persil.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Red bell pepper', 'Rode paprika', 'Poivron rouge', 2, 'st.'),
      ing('White onion', 'Witte ui', 'Oignon blanc', 1, 'st.'),
      ing('Smoked paprika', 'Gerookte paprikapoeder', 'Paprika fumé', 1, 'kl'),
      ing('Tomatoes', 'Tomaten', 'Tomates', 180, 'g'),
      ing('Red chili', 'Rode chilipeper', 'Piment rouge', 1, 'st.'),
      ing('Eggs', 'Eieren', 'Oeufs', 4, 'st.'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'bircher-muesli',
    prepTime: '10 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 3,
    category: ['breakfast'],
    translations: {
      en: {
        title: 'Grain-Free Bircher Muesli',
        subtitle: 'Coconut, nuts and seeds, soaked overnight',
        description: 'No oats here: a jar of coconut flakes, nuts, chia and spices that keeps for months. Soak a portion in coconut milk the night before and breakfast is waiting for you.',
        instructions: [
          'Mix the coconut flakes, nuts, chia, pumpkin seeds, cinnamon, ginger, nutmeg and salt in an airtight jar. It\'s better after a day or two, and keeps for up to two months.',
          'For each serving, stir the coconut milk with a dash of vanilla, a few drops of stevia and a squeeze of lemon.',
          'Stir in about 45 g of the muesli. Push it under the liquid if you like it soft.',
          'Leave it in the fridge overnight and top with yogurt in the morning.'
        ]
      },
      nl: {
        title: 'Graanvrije birchermuesli',
        subtitle: 'Kokos, noten en zaden, een nacht geweekt',
        description: 'Geen havermout hier: een pot kokosschilfers, noten, chia en specerijen die maanden goed blijft. Week de avond ervoor een portie in kokosmelk en je ontbijt staat klaar.',
        instructions: [
          'Meng de kokosschilfers, noten, chia, pompoenpitten, kaneel, gember, nootmuskaat en zout in een luchtdichte pot. Na een dag of twee is het lekkerder, en het blijft tot twee maanden goed.',
          'Roer per portie de kokosmelk met een scheutje vanille, een paar druppels stevia en een kneepje citroen.',
          'Roer er zo\'n 45 g muesli door. Duw het onder het vocht als je het zacht wilt.',
          'Zet het een nacht in de koelkast en schep er \'s ochtends yoghurt op.'
        ]
      },
      fr: {
        title: 'Bircher muesli sans céréales',
        subtitle: 'Coco, noix et graines, trempés une nuit',
        description: 'Pas d\'avoine ici : un bocal de copeaux de coco, de noix, de chia et d\'épices qui se garde des mois. Fais tremper une portion dans du lait de coco la veille et le petit-déjeuner t\'attend.',
        instructions: [
          'Mélange les copeaux de coco, les noix, le chia, les graines de courge, la cannelle, le gingembre, la muscade et le sel dans un bocal hermétique. C\'est meilleur après un jour ou deux, et ça se garde jusqu\'à deux mois.',
          'Pour chaque portion, mélange le lait de coco avec un trait de vanille, quelques gouttes de stévia et un filet de citron.',
          'Ajoute environ 45 g de muesli. Enfonce-le dans le liquide si tu l\'aimes moelleux.',
          'Laisse une nuit au frigo et ajoute du yaourt le matin.'
        ]
      }
    },
    ingredients: [
      ing('Coconut flakes', 'Kokosschilfers', 'Copeaux de coco', 90, 'g'),
      ing('Hazelnuts', 'Hazelnoten', 'Noisettes', 70, 'g'),
      ing('Chia seeds', 'Chiazaad', 'Graines de chia', 2, 'el'),
      ing('Pumpkin seeds', 'Pompoenpitten', 'Graines de courge', 2, 'el'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 0.5, 'kl'),
      ing('Ground ginger', 'Gemberpoeder', 'Gingembre moulu', 0.5, 'kl'),
      ing('Nutmeg', 'Nootmuskaat', 'Muscade', 0.25, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'pinch'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 360, 'ml'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 0.5, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', null, 'to taste'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 150, 'ml')
    ]
  },

  {
    slug: 'southwestern-souffle',
    prepTime: '20 mins',
    cookTime: '35 mins',
    difficulty: diff.medium,
    servings: 4,
    category: ['breakfast', 'main'],
    translations: {
      en: {
        title: 'Southwestern Egg Bake',
        subtitle: 'Green chilli, chicken and avocado under a soft egg custard',
        description: 'Layers of roasted green chilli, avocado and chicken with an egg mixture poured over and baked until just set. Brunch for four, made ahead.',
        instructions: [
          'Heat the oven to 160 °C and oil a 20 cm baking dish.',
          'Scatter the chillies over the bottom, then layer on the avocado, chicken and spring onion.',
          'Whisk the eggs with the almond milk, coconut flour, salt and pepper until frothy.',
          'Pour it slowly over the layers so they stay in place.',
          'Bake for 30–40 minutes, until the edges are set and the middle still wobbles a little. Let it rest for 20 minutes, then serve with coriander and a spoon of yogurt.'
        ]
      },
      nl: {
        title: 'Mexicaanse eierschotel',
        subtitle: 'Groene chili, kip en avocado onder zachte eiervla',
        description: 'Laagjes geroosterde groene chili, avocado en kip, met een eiermengsel overgoten en gebakken tot het net gestold is. Brunch voor vier, op voorhand gemaakt.',
        instructions: [
          'Verwarm de oven voor op 160 °C en vet een ovenschaal van 20 cm in.',
          'Strooi de chilipepers over de bodem en leg er laagjes avocado, kip en lente-ui op.',
          'Klop de eieren met de amandelmelk, het kokosmeel, zout en peper schuimig.',
          'Giet het langzaam over de laagjes zodat ze op hun plaats blijven.',
          'Bak 30–40 minuten, tot de randen gestold zijn en het midden nog een beetje trilt. Laat 20 minuten rusten en dien op met koriander en een lepel yoghurt.'
        ]
      },
      fr: {
        title: 'Gratin d\'œufs façon Sud-Ouest américain',
        subtitle: 'Piment vert, poulet et avocat sous une crème d\'œufs',
        description: 'Des couches de piment vert grillé, d\'avocat et de poulet, nappées d\'un appareil aux œufs et cuites jusqu\'à prendre tout juste. Un brunch pour quatre, préparé à l\'avance.',
        instructions: [
          'Préchauffe le four à 160 °C et huile un plat de 20 cm.',
          'Répartis les piments au fond, puis superpose l\'avocat, le poulet et l\'oignon nouveau.',
          'Fouette les œufs avec le lait d\'amande, la farine de coco, le sel et le poivre jusqu\'à ce que ça mousse.',
          'Verse doucement sur les couches pour qu\'elles restent en place.',
          'Enfourne 30–40 minutes, jusqu\'à ce que les bords soient pris et le centre tremble encore un peu. Laisse reposer 20 minutes et sers avec de la coriandre et une cuillère de yaourt.'
        ]
      }
    },
    ingredients: [
      ing('Roasted green chilies', 'Geroosterde groene chilipepers', 'Piments verts grillés', 40, 'g'),
      ing('Avocado', 'Avocado', 'Avocat', 1, 'st.'),
      ing('Cooked chicken', 'Gebakken kip', 'Poulet cuit', 150, 'g'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 4, 'st.'),
      ing('Eggs', 'Eieren', 'Oeufs', 6, 'st.'),
      ing('Almond milk', 'Amandelmelk', 'Lait d\'amande', 160, 'ml'),
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.25, 'kl'),
      ing('Coriander', 'Koriander', 'Coriandre', 1, 'el'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 4, 'el')
    ]
  },

  {
    slug: 'buckwheat-groat-breakfast-muffins',
    prepTime: '10 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 12,
    category: ['breakfast'],
    translations: {
      en: {
        title: 'Buckwheat Breakfast Muffins',
        subtitle: 'Soaked groats, seeds and coconut, baked in a tin',
        description: 'Whole buckwheat soaked overnight and baked with nuts, seeds and almond butter into chewy, filling muffins. Breakfast you can grab on the way out.',
        instructions: [
          'The night before, cover the buckwheat with water and a pinch of salt and leave it to soak for 6–7 hours. Drain and rinse.',
          'Heat the oven to 190 °C and oil a 12-hole muffin tin.',
          'Mix the soaked buckwheat with the coconut, walnuts, pumpkin seeds, chia, flaxseed, cinnamon and salt.',
          'Whisk the eggs, almond milk, almond butter, stevia and vanilla until frothy, then stir into the dry mix.',
          'Fill each hole with about 3 tablespoons of the mix and bake for 15–20 minutes, until the edges brown and the middles feel firm. Leave in the tin for 10 minutes before turning out.'
        ]
      },
      nl: {
        title: 'Boekweitmuffins voor het ontbijt',
        subtitle: 'Geweekte boekweit, zaden en kokos, in een vorm gebakken',
        description: 'Hele boekweit een nacht geweekt en gebakken met noten, zaden en amandelpasta tot stevige, vullende muffins. Een ontbijt dat je onderweg meeneemt.',
        instructions: [
          'Zet de avond ervoor de boekweit onder water met een snuifje zout en laat 6–7 uur weken. Giet af en spoel.',
          'Verwarm de oven voor op 190 °C en vet een muffinvorm met 12 holtes in.',
          'Meng de geweekte boekweit met de kokos, walnoten, pompoenpitten, chia, lijnzaad, kaneel en zout.',
          'Klop de eieren, amandelmelk, amandelpasta, stevia en vanille schuimig en roer het door het droge mengsel.',
          'Vul elke holte met zo\'n 3 eetlepels mengsel en bak 15–20 minuten, tot de randen bruin kleuren en het midden stevig aanvoelt. Laat 10 minuten in de vorm staan voor je ze eruit haalt.'
        ]
      },
      fr: {
        title: 'Muffins du matin au sarrasin',
        subtitle: 'Sarrasin trempé, graines et coco, cuits au moule',
        description: 'Du sarrasin entier trempé une nuit et cuit avec des noix, des graines et du beurre d\'amande en muffins moelleux et rassasiants. Un petit-déjeuner à emporter.',
        instructions: [
          'La veille, couvre le sarrasin d\'eau avec une pincée de sel et laisse tremper 6–7 heures. Égoutte et rince.',
          'Préchauffe le four à 190 °C et huile un moule à 12 muffins.',
          'Mélange le sarrasin trempé avec la coco, les noix, les graines de courge, le chia, le lin, la cannelle et le sel.',
          'Fouette les œufs, le lait d\'amande, le beurre d\'amande, la stévia et la vanille jusqu\'à ce que ça mousse, puis incorpore au mélange sec.',
          'Remplis chaque empreinte d\'environ 3 cuillères à soupe de pâte et enfourne 15–20 minutes, jusqu\'à ce que les bords dorent et le centre soit ferme. Laisse 10 minutes dans le moule avant de démouler.'
        ]
      }
    },
    ingredients: [
      ing('Buckwheat groats', 'Boekweitkorrels', 'Sarrasin en grains', 170, 'g'),
      ing('Coconut flakes', 'Kokosschilfers', 'Copeaux de coco', 30, 'g'),
      ing('Walnuts', 'Walnoten', 'Noix', 30, 'g'),
      ing('Pumpkin seeds', 'Pompoenpitten', 'Graines de courge', 35, 'g'),
      ing('Chia seeds', 'Chiazaad', 'Graines de chia', 2, 'el'),
      ing('Flaxseed meal', 'Gemalen lijnzaad', 'Graines de lin moulues', 30, 'g'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Almond milk', 'Amandelmelk', 'Lait d\'amande', 360, 'ml'),
      ing('Almond butter', 'Amandelpasta', 'Beurre d\'amande', 60, 'g'),
      ing('Stevia', 'Stevia', 'Stévia', 1.5, 'kl'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 1, 'el')
    ]
  }
];
