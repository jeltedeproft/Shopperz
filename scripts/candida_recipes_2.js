// Candida-diet dishes, batch 2. See candida_recipes.js for how these were made.

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });
const diff = {
  easy: { en: 'Easy', nl: 'Makkelijk', fr: 'Facile' },
  medium: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' }
};

module.exports = [
  {
    slug: 'avocado-pancakes-lemon-parsley-butter',
    prepTime: '10 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 3,
    category: ['breakfast'],
    translations: {
      en: {
        title: 'Avocado Pancakes with Lemon Butter',
        subtitle: 'Savoury coconut-flour pancakes, green with avocado',
        description: 'Small savoury pancakes with avocado and spring onion in the batter, finished with melted butter sharpened with lemon and parsley.',
        instructions: [
          'Sift the coconut flour, baking soda and salt together.',
          'Whisk the eggs, coconut milk, mashed avocado and spring onions, then stir in the dry mix.',
          'Melt a little butter in a frying pan over medium heat. Spoon in about 4 tablespoons of batter per pancake and cook 2–3 minutes a side, until golden.',
          'Stir the lemon juice and parsley into the melted butter and keep it warm.',
          'Serve the pancakes with avocado slices and greens, with the lemon butter spooned over.'
        ]
      },
      nl: {
        title: 'Avocadopannenkoekjes met citroenboter',
        subtitle: 'Hartige pannenkoekjes van kokosmeel, groen van de avocado',
        description: 'Kleine hartige pannenkoekjes met avocado en lente-ui in het beslag, afgewerkt met gesmolten boter met citroen en peterselie.',
        instructions: [
          'Zeef het kokosmeel, zuiveringszout en zout samen.',
          'Klop de eieren, kokosmelk, geprakte avocado en lente-uitjes los en roer het droge mengsel erdoor.',
          'Smelt wat boter in een pan op middelhoog vuur. Schep er per pannenkoekje zo\'n 4 eetlepels beslag in en bak 2–3 minuten per kant, tot ze goudbruin zijn.',
          'Roer het citroensap en de peterselie door de gesmolten boter en hou warm.',
          'Dien de pannenkoekjes op met plakjes avocado en wat groen, met de citroenboter erover.'
        ]
      },
      fr: {
        title: 'Pancakes à l\'avocat et beurre citronné',
        subtitle: 'Des pancakes salés à la farine de coco, verts d\'avocat',
        description: 'De petits pancakes salés avec de l\'avocat et de l\'oignon nouveau dans la pâte, nappés de beurre fondu relevé de citron et de persil.',
        instructions: [
          'Tamise ensemble la farine de coco, le bicarbonate et le sel.',
          'Fouette les œufs, le lait de coco, l\'avocat écrasé et les oignons nouveaux, puis ajoute le mélange sec.',
          'Fais fondre un peu de beurre dans une poêle à feu moyen. Verse environ 4 cuillères à soupe de pâte par pancake et cuis 2–3 minutes par face, jusqu\'à ce qu\'ils soient dorés.',
          'Mélange le jus de citron et le persil au beurre fondu et garde au chaud.',
          'Sers les pancakes avec des tranches d\'avocat et de la verdure, nappés de beurre citronné.'
        ]
      }
    },
    ingredients: [
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 30, 'g'),
      ing('Baking soda', 'Zuiveringszout', 'Bicarbonate de soude', 0.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 120, 'ml'),
      ing('Avocado', 'Avocado', 'Avocat', 1, 'st.'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 3, 'st.'),
      ing('Butter', 'Boter', 'Beurre', 60, 'g'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'el'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Mixed salad greens', 'Gemengde sla', 'Mesclun', 40, 'g')
    ]
  },

  {
    slug: 'gluten-free-waffles',
    prepTime: '10 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['breakfast', 'dessert'],
    translations: {
      en: {
        title: 'Coconut Flour Waffles',
        subtitle: 'Light, crisp and gluten-free',
        description: 'Whipped egg whites make these waffles airy without any wheat. A Belgian kitchen deserves a waffle you can eat on a diet too.',
        instructions: [
          'Heat your waffle iron.',
          'Whisk the egg whites to soft peaks and set them aside.',
          'Whisk the yolks with the coconut milk, melted coconut oil, vanilla and stevia. Mix the coconut flour, baking soda and salt in another bowl.',
          'Stir the dry into the wet, then gently fold in the egg whites. Let the batter rest for a minute or two — coconut flour needs a moment to drink.',
          'Bake half the batter at a time until golden. A knob of butter on top is all they need.'
        ]
      },
      nl: {
        title: 'Wafels van kokosmeel',
        subtitle: 'Luchtig, krokant en glutenvrij',
        description: 'Opgeklopt eiwit maakt deze wafels luchtig zonder één korrel tarwe. Een Belgische keuken verdient een wafel die je ook op dieet mag eten.',
        instructions: [
          'Warm je wafelijzer op.',
          'Klop de eiwitten tot zachte pieken en zet opzij.',
          'Klop de dooiers met de kokosmelk, gesmolten kokosolie, vanille en stevia. Meng het kokosmeel, zuiveringszout en zout in een andere kom.',
          'Roer het droge door het natte en spatel er dan voorzichtig het eiwit door. Laat het beslag een minuutje rusten — kokosmeel heeft even tijd nodig om te drinken.',
          'Bak telkens de helft van het beslag goudbruin. Een klontje boter erop is alles wat ze nodig hebben.'
        ]
      },
      fr: {
        title: 'Gaufres à la farine de coco',
        subtitle: 'Légères, croustillantes et sans gluten',
        description: 'Les blancs montés rendent ces gaufres aériennes sans un grain de blé. Une cuisine belge mérite une gaufre qu\'on peut manger même au régime.',
        instructions: [
          'Fais chauffer ton gaufrier.',
          'Monte les blancs en neige souple et réserve.',
          'Fouette les jaunes avec le lait de coco, l\'huile de coco fondue, la vanille et la stévia. Mélange la farine de coco, le bicarbonate et le sel dans un autre bol.',
          'Incorpore le sec au liquide, puis les blancs délicatement. Laisse reposer une minute ou deux — la farine de coco a besoin d\'un moment pour boire.',
          'Cuis la moitié de la pâte à la fois jusqu\'à ce qu\'elle soit dorée. Une noisette de beurre dessus, c\'est tout ce qu\'il faut.'
        ]
      }
    },
    ingredients: [
      ing('Eggs', 'Eieren', 'Oeufs', 4, 'st.'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 80, 'ml'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 2, 'el'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 1, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', 0.5, 'kl'),
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 60, 'g'),
      ing('Baking soda', 'Zuiveringszout', 'Bicarbonate de soude', 0.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'pinch')
    ]
  },

  {
    slug: 'coconut-granola',
    prepTime: '10 mins',
    cookTime: '40 mins',
    difficulty: diff.easy,
    servings: 8,
    category: ['breakfast', 'snack'],
    translations: {
      en: {
        title: 'Buckwheat Coconut Granola',
        subtitle: 'Toasted groats, puffed millet, nuts and coconut',
        description: 'A sugar-free granola that still crunches: cooked buckwheat toasted until crisp, then tossed with puffed millet, nuts, flax and coconut. Keeps a month in a jar.',
        instructions: [
          'Heat the oven to 160 °C. Spread the cooked buckwheat on a baking tray and toast for 20 minutes, stirring halfway.',
          'Tip it into a large bowl with the puffed millet, nuts, coconut and flax seeds.',
          'Whisk the melted coconut oil with the coconut extract, stevia, cinnamon and salt, pour it over and toss until everything is coated.',
          'Spread it back on the tray and bake for about 20 minutes more, stirring halfway, until golden.',
          'Let it cool completely, then keep it in an airtight jar. Serve with plain yogurt.'
        ]
      },
      nl: {
        title: 'Boekweit-kokosgranola',
        subtitle: 'Geroosterde boekweit, gepofte gierst, noten en kokos',
        description: 'Een granola zonder suiker die toch kraakt: gekookte boekweit krokant geroosterd en dan gemengd met gepofte gierst, noten, lijnzaad en kokos. Blijft een maand goed in een pot.',
        instructions: [
          'Verwarm de oven voor op 160 °C. Spreid de gekookte boekweit uit op een bakplaat en rooster 20 minuten, halverwege omroeren.',
          'Doe ze in een grote kom met de gepofte gierst, noten, kokos en lijnzaad.',
          'Klop de gesmolten kokosolie met het kokosextract, de stevia, kaneel en zout, giet het erover en meng tot alles bedekt is.',
          'Spreid opnieuw uit op de plaat en bak nog zo\'n 20 minuten, halverwege omroeren, tot het goudbruin is.',
          'Laat volledig afkoelen en bewaar in een luchtdichte pot. Lekker met natuuryoghurt.'
        ]
      },
      fr: {
        title: 'Granola sarrasin et coco',
        subtitle: 'Sarrasin grillé, millet soufflé, noix et coco',
        description: 'Un granola sans sucre qui croque quand même : du sarrasin cuit, grillé jusqu\'à être croustillant, puis mêlé au millet soufflé, aux noix, au lin et à la coco. Se garde un mois en bocal.',
        instructions: [
          'Préchauffe le four à 160 °C. Étale le sarrasin cuit sur une plaque et fais-le griller 20 minutes en remuant à mi-cuisson.',
          'Verse-le dans un grand bol avec le millet soufflé, les noix, la coco et les graines de lin.',
          'Fouette l\'huile de coco fondue avec l\'extrait de coco, la stévia, la cannelle et le sel, verse sur le mélange et remue pour tout enrober.',
          'Étale de nouveau sur la plaque et enfourne encore une vingtaine de minutes en remuant à mi-cuisson, jusqu\'à ce que ce soit doré.',
          'Laisse refroidir complètement et garde dans un bocal hermétique. Sers avec du yaourt nature.'
        ]
      }
    },
    ingredients: [
      ing('Cooked buckwheat groats', 'Gekookte boekweit', 'Sarrasin cuit', 170, 'g'),
      ing('Puffed millet', 'Gepofte gierst', 'Millet soufflé', 20, 'g'),
      ing('Hazelnuts', 'Hazelnoten', 'Noisettes', 130, 'g'),
      ing('Coconut flakes', 'Kokosschilfers', 'Copeaux de coco', 60, 'g'),
      ing('Flax seeds', 'Lijnzaad', 'Graines de lin', 40, 'g'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 60, 'ml'),
      ing('Alcohol-free coconut extract', 'Alcoholvrij kokosextract', 'Extrait de coco sans alcool', 1, 'el'),
      ing('Stevia', 'Stevia', 'Stévia', 1, 'kl'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'pinch'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 500, 'ml')
    ]
  },

  {
    slug: 'avocado-omelet',
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['breakfast'],
    translations: {
      en: {
        title: 'Avocado Omelette',
        subtitle: 'Shallots, garlic, olives and a lot of parsley',
        description: 'A three-egg omelette with golden shallots spread over it and avocado and black olives folded inside.',
        instructions: [
          'Whisk the eggs with most of the parsley.',
          'Melt the butter in a frying pan over medium heat. Soften the garlic, then add the shallots and cook until they just start to colour. Scoop them out.',
          'Pour the eggs into the pan and cook for 3–4 minutes, until nearly set.',
          'Spread the shallots over the eggs, lay the avocado and olives on one half, and fold the other half over.',
          'Slide it onto a plate and finish with the rest of the parsley.'
        ]
      },
      nl: {
        title: 'Omelet met avocado',
        subtitle: 'Sjalot, look, olijven en veel peterselie',
        description: 'Een omelet van drie eieren met goudgele sjalotjes erover en avocado en zwarte olijven erin gevouwen.',
        instructions: [
          'Klop de eieren los met het grootste deel van de peterselie.',
          'Smelt de boter in een pan op middelhoog vuur. Stoof de look zacht, voeg de sjalotten toe en bak tot ze net beginnen te kleuren. Schep ze eruit.',
          'Giet de eieren in de pan en bak 3–4 minuten, tot ze bijna gestold zijn.',
          'Verdeel de sjalotten over het ei, leg de avocado en olijven op één helft en vouw de andere helft erover.',
          'Schuif op een bord en werk af met de rest van de peterselie.'
        ]
      },
      fr: {
        title: 'Omelette à l\'avocat',
        subtitle: 'Échalotes, ail, olives et beaucoup de persil',
        description: 'Une omelette de trois œufs nappée d\'échalotes dorées, avec de l\'avocat et des olives noires pliés dedans.',
        instructions: [
          'Bats les œufs avec la plus grande partie du persil.',
          'Fais fondre le beurre dans une poêle à feu moyen. Fais revenir l\'ail, ajoute les échalotes et cuis jusqu\'à ce qu\'elles commencent à dorer. Retire-les.',
          'Verse les œufs dans la poêle et cuis 3–4 minutes, jusqu\'à ce qu\'ils soient presque pris.',
          'Étale les échalotes sur l\'omelette, dépose l\'avocat et les olives sur une moitié et replie l\'autre par-dessus.',
          'Glisse sur une assiette et termine avec le reste du persil.'
        ]
      }
    },
    ingredients: [
      ing('Shallots', 'Sjalotten', 'Échalotes', 2, 'st.'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Eggs', 'Eieren', 'Oeufs', 3, 'st.'),
      ing('Avocado', 'Avocado', 'Avocat', 1, 'st.'),
      ing('Black olives', 'Zwarte olijven', 'Olives noires', 7, 'st.'),
      ing('Butter', 'Boter', 'Beurre', 1, 'el'),
      ing('Parsley', 'Peterselie', 'Persil', 2, 'el')
    ]
  },

  {
    slug: 'apple-walnut-yogurt-parfait',
    prepTime: '5 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['breakfast', 'dessert'],
    translations: {
      en: {
        title: 'Apple & Walnut Yogurt Pot',
        subtitle: 'Three ingredients and some cinnamon',
        description: 'Layers of yogurt, crisp apple and walnuts with cinnamon on top. Breakfast in five minutes.',
        instructions: [
          'Chop the apple and the walnuts.',
          'Layer them in a glass with the yogurt.',
          'Dust with cinnamon and eat straight away.'
        ]
      },
      nl: {
        title: 'Yoghurtpotje met appel en walnoot',
        subtitle: 'Drie ingrediënten en wat kaneel',
        description: 'Laagjes yoghurt, frisse appel en walnoten met kaneel erop. Ontbijt in vijf minuten.',
        instructions: [
          'Snijd de appel en de walnoten fijn.',
          'Schik ze in laagjes met de yoghurt in een glas.',
          'Bestuif met kaneel en eet meteen op.'
        ]
      },
      fr: {
        title: 'Verrine yaourt, pomme et noix',
        subtitle: 'Trois ingrédients et un peu de cannelle',
        description: 'Des couches de yaourt, de pomme croquante et de noix, avec de la cannelle par-dessus. Un petit-déjeuner en cinq minutes.',
        instructions: [
          'Coupe la pomme et les noix en morceaux.',
          'Superpose-les avec le yaourt dans un verre.',
          'Saupoudre de cannelle et mange tout de suite.'
        ]
      }
    },
    ingredients: [
      ing('Apple', 'Appel', 'Pomme', 1, 'st.'),
      ing('Walnuts', 'Walnoten', 'Noix', 30, 'g'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 240, 'ml'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 1, 'pinch')
    ]
  },

  {
    slug: 'buckwheat-and-eggs',
    prepTime: '5 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['breakfast'],
    translations: {
      en: {
        title: 'Buckwheat Scrambled Eggs',
        subtitle: 'Nutty groats stirred through soft eggs',
        description: 'Cooked buckwheat scrambled with eggs, spring onion and coriander, with a spoon of yogurt on top. Filling enough to see you through to lunch.',
        instructions: [
          'Cook the buckwheat as the packet says and drain it.',
          'Heat the coconut oil in a frying pan and fry the spring onions for a minute.',
          'Add the eggs, the buckwheat and the coriander and stir until the eggs are as set as you like them.',
          'Season with salt and top with the yogurt.'
        ]
      },
      nl: {
        title: 'Roerei met boekweit',
        subtitle: 'Nootachtige boekweit door zacht roerei',
        description: 'Gekookte boekweit door roerei met lente-ui en koriander, met een lepel yoghurt erop. Vullend genoeg om tot de middag te halen.',
        instructions: [
          'Kook de boekweit zoals op de verpakking staat en giet af.',
          'Verhit de kokosolie in een pan en bak de lente-ui een minuutje.',
          'Voeg de eieren, de boekweit en de koriander toe en roer tot de eieren zo gestold zijn als jij ze graag hebt.',
          'Kruid met zout en schep de yoghurt erop.'
        ]
      },
      fr: {
        title: 'Œufs brouillés au sarrasin',
        subtitle: 'Du sarrasin au goût de noisette dans des œufs fondants',
        description: 'Du sarrasin cuit brouillé avec des œufs, de l\'oignon nouveau et de la coriandre, avec une cuillère de yaourt par-dessus. De quoi tenir jusqu\'au déjeuner.',
        instructions: [
          'Cuis le sarrasin comme indiqué sur le paquet et égoutte-le.',
          'Chauffe l\'huile de coco dans une poêle et fais revenir les oignons nouveaux une minute.',
          'Ajoute les œufs, le sarrasin et la coriandre et remue jusqu\'à ce que les œufs soient pris à ton goût.',
          'Sale et termine avec le yaourt.'
        ]
      }
    },
    ingredients: [
      ing('Buckwheat groats', 'Boekweitkorrels', 'Sarrasin en grains', 45, 'g'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 2, 'el'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 2, 'st.'),
      ing('Coriander', 'Koriander', 'Coriandre', 1, 'bunch'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste')
    ]
  },

  {
    slug: 'vegetable-omelet',
    prepTime: '5 mins',
    cookTime: '5 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['breakfast'],
    translations: {
      en: {
        title: 'Vegetable Omelette',
        subtitle: 'Onion, red pepper and spinach, folded in',
        description: 'The everyday omelette: soft vegetables tucked into a folded omelette, on the table in ten minutes.',
        instructions: [
          'Heat the olive oil in a frying pan over medium-high heat. Fry the onion and pepper for a few minutes, then add the spinach.',
          'Once the spinach has wilted, tip the vegetables into a bowl.',
          'Beat the eggs with salt and pepper and pour them into the pan, swirling to spread them out.',
          'After about a minute, spoon the vegetables over one half, fold the other half over and slide it onto a plate.'
        ]
      },
      nl: {
        title: 'Groenteomelet',
        subtitle: 'Ui, rode paprika en spinazie, erin gevouwen',
        description: 'De omelet voor elke dag: zachte groenten in een dichtgevouwen omelet, in tien minuten op tafel.',
        instructions: [
          'Verhit de olijfolie in een pan op middelhoog tot hoog vuur. Bak de ui en de paprika een paar minuten en voeg dan de spinazie toe.',
          'Als de spinazie geslonken is, schep je de groenten in een kom.',
          'Klop de eieren met peper en zout, giet ze in de pan en draai de pan zodat ze zich verspreiden.',
          'Schep na een minuutje de groenten op één helft, vouw de andere helft erover en schuif op een bord.'
        ]
      },
      fr: {
        title: 'Omelette aux légumes',
        subtitle: 'Oignon, poivron rouge et épinards, pliés dedans',
        description: 'L\'omelette de tous les jours : des légumes fondants dans une omelette pliée, sur la table en dix minutes.',
        instructions: [
          'Chauffe l\'huile d\'olive dans une poêle à feu moyen-vif. Fais revenir l\'oignon et le poivron quelques minutes, puis ajoute les épinards.',
          'Quand les épinards ont fondu, verse les légumes dans un bol.',
          'Bats les œufs avec sel et poivre, verse-les dans la poêle et fais-la tourner pour les étaler.',
          'Après environ une minute, dépose les légumes sur une moitié, replie l\'autre et glisse sur une assiette.'
        ]
      }
    },
    ingredients: [
      ing('Eggs', 'Eieren', 'Oeufs', 3, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Onion', 'Ui', 'Oignon', 0.5, 'st.'),
      ing('Red bell pepper', 'Rode paprika', 'Poivron rouge', 0.5, 'st.'),
      ing('Spinach', 'Spinazie', 'Épinards', 30, 'g'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'buckwheat-porridge',
    prepTime: '5 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['breakfast'],
    translations: {
      en: {
        title: 'Buckwheat Porridge',
        subtitle: 'Warm, creamy and cinnamon-sweet',
        description: 'Buckwheat and oat bran cooked soft and finished with coconut milk and cinnamon. A warm bowl for cold mornings, no sugar needed.',
        instructions: [
          'Cook the buckwheat in water until soft, adding the oat bran for its last few minutes.',
          'Drain off any water that\'s left.',
          'Stir in the coconut oil and coconut milk, then the cinnamon.',
          'Sweeten with a little stevia if you want it.'
        ]
      },
      nl: {
        title: 'Boekweitpap',
        subtitle: 'Warm, romig en zoet van kaneel',
        description: 'Boekweit en haverzemelen zacht gekookt en afgewerkt met kokosmelk en kaneel. Een warme kom voor koude ochtenden, zonder suiker.',
        instructions: [
          'Kook de boekweit zacht in water en voeg de haverzemelen de laatste paar minuten toe.',
          'Giet het water af dat nog over is.',
          'Roer de kokosolie en kokosmelk erdoor, en dan de kaneel.',
          'Zoet bij met wat stevia als je dat wilt.'
        ]
      },
      fr: {
        title: 'Porridge de sarrasin',
        subtitle: 'Chaud, crémeux et doux de cannelle',
        description: 'Du sarrasin et du son d\'avoine cuits tendres, finis au lait de coco et à la cannelle. Un bol chaud pour les matins froids, sans sucre.',
        instructions: [
          'Cuis le sarrasin dans l\'eau jusqu\'à ce qu\'il soit tendre, en ajoutant le son d\'avoine les dernières minutes.',
          'Égoutte l\'eau qui reste.',
          'Incorpore l\'huile de coco et le lait de coco, puis la cannelle.',
          'Sucre avec un peu de stévia si tu en as envie.'
        ]
      }
    },
    ingredients: [
      ing('Buckwheat groats', 'Boekweitkorrels', 'Sarrasin en grains', 45, 'g'),
      ing('Oat bran', 'Haverzemelen', 'Son d\'avoine', 25, 'g'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 120, 'ml'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 2, 'el'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 0.5, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', null, 'to taste')
    ]
  },

  {
    slug: 'coconut-bread',
    prepTime: '5 mins',
    cookTime: '30 mins',
    difficulty: diff.easy,
    servings: 10,
    category: ['breakfast', 'snack'],
    translations: {
      en: {
        title: 'Coconut Bread',
        subtitle: 'A yeast-free loaf for toast and sandwiches',
        description: 'Coconut and buckwheat flour with five eggs make a soft, sliceable loaf without yeast or wheat. Toast it, butter it, build a sandwich on it.',
        instructions: [
          'Heat the oven to 180 °C and grease a loaf tin with coconut oil.',
          'Blend the eggs with the coconut oil, salt and a little stevia.',
          'Add the coconut flour, coconut cream, buckwheat flour and baking powder and whisk until smooth.',
          'Pour into the tin and bake for about 30 minutes, until the top is firm and lightly golden. Let it cool before slicing.'
        ]
      },
      nl: {
        title: 'Kokosbrood',
        subtitle: 'Een brood zonder gist voor toast en boterhammen',
        description: 'Kokos- en boekweitmeel met vijf eieren maken een zacht, snijbaar brood zonder gist of tarwe. Roosteren, smeren, beleggen.',
        instructions: [
          'Verwarm de oven voor op 180 °C en vet een cakevorm in met kokosolie.',
          'Mix de eieren met de kokosolie, het zout en een beetje stevia.',
          'Voeg het kokosmeel, de kokosroom, het boekweitmeel en het bakpoeder toe en klop tot het glad is.',
          'Giet in de vorm en bak zo\'n 30 minuten, tot de bovenkant stevig en lichtjes goudbruin is. Laat afkoelen voor je snijdt.'
        ]
      },
      fr: {
        title: 'Pain à la noix de coco',
        subtitle: 'Un pain sans levure pour les toasts et les tartines',
        description: 'Les farines de coco et de sarrasin avec cinq œufs donnent un pain moelleux qui se tranche, sans levure ni blé. À griller, à beurrer, à garnir.',
        instructions: [
          'Préchauffe le four à 180 °C et graisse un moule à cake à l\'huile de coco.',
          'Mixe les œufs avec l\'huile de coco, le sel et un peu de stévia.',
          'Ajoute la farine de coco, la crème de coco, la farine de sarrasin et la levure chimique et fouette jusqu\'à ce que ce soit lisse.',
          'Verse dans le moule et enfourne environ 30 minutes, jusqu\'à ce que le dessus soit ferme et légèrement doré. Laisse refroidir avant de trancher.'
        ]
      }
    },
    ingredients: [
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 60, 'g'),
      ing('Buckwheat flour', 'Boekweitmeel', 'Farine de sarrasin', 60, 'g'),
      ing('Coconut cream', 'Kokosroom', 'Crème de coco', 120, 'ml'),
      ing('Eggs', 'Eieren', 'Oeufs', 5, 'st.'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 2, 'el'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Baking powder', 'Bakpoeder', 'Levure chimique', 1, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', null, 'to taste')
    ]
  },

  {
    slug: 'spicy-jalapeno-meatballs',
    prepTime: '15 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Spicy Jalapeño Meatballs',
        subtitle: 'Chicken, lime, coriander and a kick',
        description: 'Twenty little chicken meatballs with jalapeño, cumin and lime, baked on a tray instead of fried. Serve them over a salad dressed with more lime.',
        instructions: [
          'Heat the oven to 200 °C and brush a baking tray with the oil.',
          'Mix the chicken with the coriander, jalapeño, lime juice, salt, pepper and cumin.',
          'With wet hands, roll into 20 balls and set them a few centimetres apart on the tray.',
          'Bake for 15–20 minutes, until cooked right through.',
          'Toss the salad with the olive oil, the extra lime juice, salt and pepper, and pile the meatballs on top.'
        ]
      },
      nl: {
        title: 'Pittige jalapeñoballetjes',
        subtitle: 'Kip, limoen, koriander en een kick',
        description: 'Twintig kipballetjes met jalapeño, komijn en limoen, op een bakplaat gebakken in plaats van in de pan. Lekker op een slaatje met nog wat limoen.',
        instructions: [
          'Verwarm de oven voor op 200 °C en bestrijk een bakplaat met de olie.',
          'Meng het kipgehakt met de koriander, jalapeño, het limoensap, zout, peper en komijn.',
          'Rol er met natte handen 20 balletjes van en leg ze een paar centimeter uit elkaar op de plaat.',
          'Bak 15–20 minuten, tot ze helemaal gaar zijn.',
          'Meng de sla met de olijfolie, het extra limoensap, peper en zout, en leg de balletjes erop.'
        ]
      },
      fr: {
        title: 'Boulettes épicées au jalapeño',
        subtitle: 'Poulet, citron vert, coriandre et du piquant',
        description: 'Vingt petites boulettes de poulet au jalapeño, au cumin et au citron vert, cuites au four plutôt qu\'à la poêle. À servir sur une salade relevée de citron vert.',
        instructions: [
          'Préchauffe le four à 200 °C et badigeonne une plaque avec l\'huile.',
          'Mélange le poulet avec la coriandre, le jalapeño, le jus de citron vert, le sel, le poivre et le cumin.',
          'Les mains mouillées, forme 20 boulettes et espace-les de quelques centimètres sur la plaque.',
          'Enfourne 15–20 minutes, jusqu\'à ce qu\'elles soient cuites à cœur.',
          'Assaisonne la salade avec l\'huile d\'olive, le reste du jus de citron vert, sel et poivre, et dépose les boulettes dessus.'
        ]
      }
    },
    ingredients: [
      ing('Ground chicken', 'Kipgehakt', 'Poulet haché', 450, 'g'),
      ing('Coriander', 'Koriander', 'Coriandre', 15, 'g'),
      ing('Jalapeño', 'Jalapeño', 'Jalapeño', 1, 'st.'),
      ing('Lime juice', 'Limoensap', 'Jus de citron vert', 2, 'el'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.5, 'kl'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 0.5, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 3, 'el'),
      ing('Mixed salad greens', 'Gemengde sla', 'Mesclun', 150, 'g')
    ]
  },

  {
    slug: 'cauliflower-hummus',
    prepTime: '10 mins',
    cookTime: '25 mins',
    difficulty: diff.easy,
    servings: 6,
    category: ['snack'],
    translations: {
      en: {
        title: 'Cauliflower Hummus',
        subtitle: 'Hummus without the chickpeas',
        description: 'Roasted cauliflower blended with tahini, lemon, garlic and cumin. It tastes like hummus, with a fraction of the starch.',
        instructions: [
          'Heat the oven to 180 °C and line a baking tray.',
          'Cut the cauliflower into evenly sized florets, toss them with the olive oil and roast for 20–25 minutes, until tender and lightly browned. Let them cool.',
          'Blend the cauliflower with the tahini, salt, cumin, garlic, lemon juice and water until completely smooth.',
          'Spoon into a bowl, drizzle with a little more oil and scatter over parsley.'
        ]
      },
      nl: {
        title: 'Bloemkoolhummus',
        subtitle: 'Hummus zonder kikkererwten',
        description: 'Geroosterde bloemkool gemixt met tahin, citroen, look en komijn. Smaakt naar hummus, met een fractie van het zetmeel.',
        instructions: [
          'Verwarm de oven voor op 180 °C en bekleed een bakplaat.',
          'Snijd de bloemkool in even grote roosjes, meng ze met de olijfolie en rooster 20–25 minuten, tot ze zacht en licht gekleurd zijn. Laat afkoelen.',
          'Mix de bloemkool met de tahin, zout, komijn, look, het citroensap en het water tot alles helemaal glad is.',
          'Schep in een kom, sprenkel er nog wat olie over en strooi er peterselie op.'
        ]
      },
      fr: {
        title: 'Houmous de chou-fleur',
        subtitle: 'Du houmous sans pois chiches',
        description: 'Du chou-fleur rôti mixé avec du tahini, du citron, de l\'ail et du cumin. Le goût du houmous, avec une fraction de l\'amidon.',
        instructions: [
          'Préchauffe le four à 180 °C et garnis une plaque.',
          'Coupe le chou-fleur en bouquets de même taille, enrobe-les d\'huile d\'olive et rôtis 20–25 minutes, jusqu\'à ce qu\'ils soient tendres et légèrement dorés. Laisse refroidir.',
          'Mixe le chou-fleur avec le tahini, le sel, le cumin, l\'ail, le jus de citron et l\'eau jusqu\'à obtenir une texture parfaitement lisse.',
          'Verse dans un bol, arrose d\'un filet d\'huile et parsème de persil.'
        ]
      }
    },
    ingredients: [
      ing('Cauliflower', 'Bloemkool', 'Chou-fleur', 1, 'head'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 3, 'el'),
      ing('Tahini', 'Tahin', 'Tahini', 120, 'g'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 0.5, 'kl'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 3, 'el'),
      ing('Water', 'Water', 'Eau', 120, 'ml'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'el')
    ]
  },

  {
    slug: 'lemon-chicken',
    prepTime: '10 mins',
    cookTime: '45 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Lemon & Rosemary Chicken',
        subtitle: 'Chicken breasts roasted under lemon slices',
        description: 'Chicken breasts rubbed with paprika and oregano, covered in thin lemon rounds and rosemary, and roasted until the lemon goes soft and golden.',
        instructions: [
          'Heat the oven to 190 °C and lay the chicken in a roasting dish.',
          'Brush it with the olive oil and season with the pepper, salt, paprika, oregano and lemon thyme.',
          'Cover the chicken with the lemon slices and tuck the rosemary around it.',
          'Roast for 45–50 minutes, until cooked through and lightly browned. If the lemon or rosemary darken too fast, lay a sheet of foil over the top.'
        ]
      },
      nl: {
        title: 'Kip met citroen en rozemarijn',
        subtitle: 'Kipfilets geroosterd onder schijfjes citroen',
        description: 'Kipfilets ingewreven met paprikapoeder en oregano, bedekt met dunne schijfjes citroen en rozemarijn, en geroosterd tot de citroen zacht en goudbruin wordt.',
        instructions: [
          'Verwarm de oven voor op 190 °C en leg de kip in een ovenschaal.',
          'Bestrijk met de olijfolie en kruid met peper, zout, paprikapoeder, oregano en citroentijm.',
          'Bedek de kip met de schijfjes citroen en leg de rozemarijn eromheen.',
          'Rooster 45–50 minuten, tot ze gaar en licht gekleurd is. Als de citroen of rozemarijn te snel kleuren, leg je er een vel aluminiumfolie over.'
        ]
      },
      fr: {
        title: 'Poulet au citron et au romarin',
        subtitle: 'Des blancs de poulet rôtis sous des rondelles de citron',
        description: 'Des blancs de poulet frottés de paprika et d\'origan, couverts de fines rondelles de citron et de romarin, rôtis jusqu\'à ce que le citron devienne fondant et doré.',
        instructions: [
          'Préchauffe le four à 190 °C et dispose le poulet dans un plat à rôtir.',
          'Badigeonne-le d\'huile d\'olive et assaisonne avec le poivre, le sel, le paprika, l\'origan et le thym citron.',
          'Couvre le poulet des rondelles de citron et glisse le romarin autour.',
          'Rôtis 45–50 minutes, jusqu\'à ce qu\'il soit cuit et légèrement doré. Si le citron ou le romarin brunissent trop vite, couvre d\'une feuille d\'aluminium.'
        ]
      }
    },
    ingredients: [
      ing('Chicken breasts', 'Kipfilets', 'Blancs de poulet', 4, 'st.'),
      ing('Lemons', 'Citroenen', 'Citrons', 2, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 3, 'el'),
      ing('Pepper', 'Peper', 'Poivre', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Paprika', 'Paprikapoeder', 'Paprika', 1, 'kl'),
      ing('Dried oregano', 'Gedroogde oregano', 'Origan séché', 1, 'kl'),
      ing('Dried lemon thyme', 'Gedroogde citroentijm', 'Thym citron séché', 0.5, 'kl'),
      ing('Rosemary', 'Rozemarijn', 'Romarin', 5, 'sprig')
    ]
  }
];
