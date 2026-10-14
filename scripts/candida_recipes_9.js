// Candida-diet dishes, batch 9. See candida_recipes.js for how these were made.

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });
const diff = {
  easy: { en: 'Easy', nl: 'Makkelijk', fr: 'Facile' },
  medium: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' }
};

module.exports = [
  {
    slug: 'soba-seaweed-salad',
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Soba & Seaweed Salad',
        subtitle: 'Wakame, tomato and avocado with sesame',
        description: 'Buckwheat noodles tossed with soaked wakame, tomato and avocado, dressed with nothing more than sesame oil and seeds. Use 100% buckwheat soba for candida.',
        instructions: [
          'Soak the wakame in warm water for about 10 minutes and drain it.',
          'Boil the soba for about 6 minutes, then drain and rinse under cold water.',
          'Chop the tomatoes and avocado.',
          'Mix everything in a bowl, drizzle with the sesame oil, season with salt and sprinkle with sesame seeds.'
        ]
      },
      nl: {
        title: 'Salade van soba en zeewier',
        subtitle: 'Wakame, tomaat en avocado met sesam',
        description: 'Boekweitnoedels gemengd met geweekte wakame, tomaat en avocado, met niet meer dan sesamolie en sesamzaad als dressing. Neem soba van 100% boekweit voor candida.',
        instructions: [
          'Week de wakame zo\'n 10 minuten in lauw water en laat uitlekken.',
          'Kook de soba zo\'n 6 minuten, giet af en spoel onder koud water.',
          'Snijd de tomaten en avocado.',
          'Meng alles in een kom, sprenkel de sesamolie erover, kruid met zout en strooi er sesamzaad over.'
        ]
      },
      fr: {
        title: 'Salade de soba aux algues',
        subtitle: 'Wakamé, tomate et avocat au sésame',
        description: 'Des nouilles de sarrasin mêlées à du wakamé trempé, de la tomate et de l\'avocat, assaisonnées simplement d\'huile et de graines de sésame. Prends des soba 100 % sarrasin pour le candida.',
        instructions: [
          'Fais tremper le wakamé dans de l\'eau tiède une dizaine de minutes et égoutte.',
          'Cuis les soba environ 6 minutes, égoutte et rince à l\'eau froide.',
          'Coupe les tomates et l\'avocat.',
          'Mélange le tout dans un bol, arrose d\'huile de sésame, sale et parsème de graines de sésame.'
        ]
      }
    },
    ingredients: [
      ing('Buckwheat soba noodles', 'Boekweit-sobanoedels', 'Nouilles soba au sarrasin', 55, 'g'),
      ing('Dried wakame', 'Gedroogde wakame', 'Wakamé séché', 5, 'g'),
      ing('Tomatoes', 'Tomaten', 'Tomates', 2, 'st.'),
      ing('Avocado', 'Avocado', 'Avocat', 1, 'st.'),
      ing('Sesame oil', 'Sesamolie', 'Huile de sésame', 2, 'el'),
      ing('Sesame seeds', 'Sesamzaad', 'Graines de sésame', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste')
    ]
  },

  {
    slug: 'cabbage-rolls',
    prepTime: '30 mins',
    cookTime: '1 hr',
    difficulty: diff.medium,
    servings: 4,
    category: ['main'],
    wiki: ['en:Cabbage roll'],
    translations: {
      en: {
        title: 'Stuffed Cabbage Rolls',
        subtitle: 'Gevulde koolrolletjes with buckwheat',
        description: 'Cabbage leaves wrapped around minced meat and buckwheat, baked slowly in a garlicky tomato sauce. An old-fashioned dish that suits the diet perfectly.',
        instructions: [
          'Boil or steam 6–8 large cabbage leaves until they are soft enough to fold, then let them cool.',
          'Mix the minced meat with the raw buckwheat, half the onion, the egg, half the garlic and some salt.',
          'Put a portion of filling on each leaf, roll it up tightly and lay the rolls seam side down in a baking dish.',
          'Heat the oven to 180 °C. Soften the rest of the onion and garlic in the olive oil, add the chopped tomatoes and cook for a few minutes.',
          'Spoon the sauce over the rolls, pour in 240 ml of water, cover and bake for 1 hour.'
        ]
      },
      nl: {
        title: 'Gevulde koolrolletjes',
        subtitle: 'Koolrolletjes met boekweit',
        description: 'Koolbladeren gerold rond gehakt en boekweit, langzaam gebakken in een tomatensaus met look. Een ouderwets gerecht dat perfect in het dieet past.',
        instructions: [
          'Kook of stoom 6–8 grote koolbladeren tot ze soepel genoeg zijn om te plooien en laat afkoelen.',
          'Meng het gehakt met de rauwe boekweit, de helft van de ui, het ei, de helft van de look en wat zout.',
          'Leg een portie vulling op elk blad, rol stevig op en leg de rolletjes met de naad naar onder in een ovenschaal.',
          'Verwarm de oven voor op 180 °C. Stoof de rest van de ui en look zacht in de olijfolie, voeg de gehakte tomaten toe en laat een paar minuten koken.',
          'Schep de saus over de rolletjes, giet er 240 ml water bij, dek af en bak 1 uur.'
        ]
      },
      fr: {
        title: 'Choux farcis',
        subtitle: 'Des roulés de chou au sarrasin',
        description: 'Des feuilles de chou roulées autour de viande hachée et de sarrasin, cuites lentement dans une sauce tomate à l\'ail. Un plat d\'antan qui convient parfaitement au régime.',
        instructions: [
          'Fais bouillir ou cuire à la vapeur 6–8 grandes feuilles de chou jusqu\'à ce qu\'elles soient assez souples pour être pliées, puis laisse refroidir.',
          'Mélange la viande hachée avec le sarrasin cru, la moitié de l\'oignon, l\'œuf, la moitié de l\'ail et un peu de sel.',
          'Dépose une portion de farce sur chaque feuille, roule bien serré et range les roulés soudure vers le bas dans un plat.',
          'Préchauffe le four à 180 °C. Fais fondre le reste de l\'oignon et de l\'ail dans l\'huile d\'olive, ajoute les tomates hachées et cuis quelques minutes.',
          'Nappe les roulés de sauce, verse 240 ml d\'eau, couvre et enfourne 1 heure.'
        ]
      }
    },
    ingredients: [
      ing('Ground beef', 'Rundsgehakt', 'Bœuf haché', 450, 'g'),
      ing('Buckwheat groats', 'Boekweitkorrels', 'Sarrasin en grains', 85, 'g'),
      ing('Egg', 'Ei', 'Oeuf', 1, 'st.'),
      ing('Cabbage', 'Witte kool', 'Chou blanc', 1, 'head'),
      ing('Onion', 'Ui', 'Oignon', 2, 'st.'),
      ing('Garlic', 'Look', 'Ail', 4, 'st.'),
      ing('Tomatoes', 'Tomaten', 'Tomates', 4, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Water', 'Water', 'Eau', 240, 'ml'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste')
    ]
  },

  {
    slug: 'coconut-lamb-curry',
    prepTime: '10 mins',
    cookTime: '35 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Coconut Lamb Curry',
        subtitle: 'Minced lamb simmered in spiced coconut milk',
        description: 'Lamb mince fried with onion, garlic and chilli, then simmered slowly with tomatoes, coconut milk, turmeric and curry powder. Serve it with quinoa.',
        instructions: [
          'Chop the onion, garlic and chilli.',
          'Fry them with the lamb in the coconut oil for about 5 minutes, breaking up the meat.',
          'Add the tomatoes, coconut milk, cayenne, turmeric, curry powder and salt.',
          'Simmer on low heat for 30 minutes and serve with quinoa.'
        ]
      },
      nl: {
        title: 'Lamscurry met kokos',
        subtitle: 'Lamsgehakt gesudderd in gekruide kokosmelk',
        description: 'Lamsgehakt gebakken met ui, look en chili, en dan langzaam gesudderd met tomaten, kokosmelk, kurkuma en currypoeder. Lekker met quinoa.',
        instructions: [
          'Hak de ui, look en chili fijn.',
          'Bak ze met het lamsgehakt zo\'n 5 minuten in de kokosolie en maak het vlees los.',
          'Voeg de tomaten, kokosmelk, cayenne, kurkuma, currypoeder en het zout toe.',
          'Laat 30 minuten sudderen op laag vuur en dien op met quinoa.'
        ]
      },
      fr: {
        title: 'Curry d\'agneau à la coco',
        subtitle: 'De l\'agneau haché mijoté dans un lait de coco épicé',
        description: 'De l\'agneau haché revenu avec oignon, ail et piment, puis mijoté lentement avec tomates, lait de coco, curcuma et curry. À servir avec du quinoa.',
        instructions: [
          'Hache l\'oignon, l\'ail et le piment.',
          'Fais-les revenir avec l\'agneau dans l\'huile de coco environ 5 minutes, en émiettant la viande.',
          'Ajoute les tomates, le lait de coco, le cayenne, le curcuma, le curry et le sel.',
          'Laisse mijoter à feu doux 30 minutes et sers avec du quinoa.'
        ]
      }
    },
    ingredients: [
      ing('Ground lamb', 'Lamsgehakt', 'Agneau haché', 450, 'g'),
      ing('Tomatoes', 'Tomaten', 'Tomates', 4, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 400, 'ml'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 1, 'el'),
      ing('Red chili', 'Rode chilipeper', 'Piment rouge', 1, 'st.'),
      ing('Cayenne pepper', 'Cayennepeper', 'Piment de Cayenne', 0.5, 'kl'),
      ing('Turmeric', 'Kurkuma', 'Curcuma', 0.5, 'kl'),
      ing('Curry powder', 'Currypoeder', 'Curry en poudre', 0.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste')
    ]
  },

  {
    slug: 'chicken-zucchini-burgers',
    prepTime: '10 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Chicken & Courgette Burgers',
        subtitle: 'Juicy patties straight from the food processor',
        description: 'Chicken, courgette, spring onion and parsley blitzed together with ground almonds and smoked paprika, then pan-fried until golden. Pop them in a caraway bun from this book.',
        instructions: [
          'Put everything except the oil in a food processor and blitz until it holds together.',
          'With oiled hands, shape into 4 patties.',
          'Heat the coconut oil in a large non-stick frying pan over medium heat.',
          'Fry 2 patties at a time for 3–4 minutes a side, until golden and cooked through.'
        ]
      },
      nl: {
        title: 'Burgers van kip en courgette',
        subtitle: 'Sappige burgers recht uit de keukenrobot',
        description: 'Kip, courgette, lente-ui en peterselie gemixt met gemalen amandelen en gerookte paprika, en dan goudbruin gebakken. Leg ze in een karwijbroodje uit dit boek.',
        instructions: [
          'Doe alles behalve de olie in de keukenrobot en mix tot het samenhangt.',
          'Vorm er met ingeoliede handen 4 burgers van.',
          'Verhit de kokosolie in een grote antikleefpan op middelhoog vuur.',
          'Bak telkens 2 burgers 3–4 minuten per kant, tot ze goudbruin en gaar zijn.'
        ]
      },
      fr: {
        title: 'Burgers de poulet à la courgette',
        subtitle: 'Des galettes juteuses tout droit du robot',
        description: 'Du poulet, de la courgette, de l\'oignon nouveau et du persil mixés avec de la poudre d\'amande et du paprika fumé, puis poêlés jusqu\'à être dorés. Glisse-les dans un pain au carvi de ce livre.',
        instructions: [
          'Mets tout sauf l\'huile dans le robot et mixe jusqu\'à ce que ça se tienne.',
          'Les mains huilées, forme 4 galettes.',
          'Chauffe l\'huile de coco dans une grande poêle antiadhésive à feu moyen.',
          'Cuis 2 galettes à la fois 3–4 minutes par face, jusqu\'à ce qu\'elles soient dorées et cuites.'
        ]
      }
    },
    ingredients: [
      ing('Chicken breasts', 'Kipfilets', 'Blancs de poulet', 450, 'g'),
      ing('Zucchini', 'Courgette', 'Courgette', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 2, 'st.'),
      ing('Ground almonds', 'Gemalen amandelen', 'Poudre d\'amande', 3, 'el'),
      ing('Smoked paprika', 'Gerookte paprikapoeder', 'Paprika fumé', 1, 'kl'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 2, 'kl'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'bunch'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'asparagus-anchovies-soba-noodles',
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Soba with Asparagus & Anchovies',
        subtitle: 'Garlic, chilli and butter, done in ten minutes',
        description: 'Asparagus softened in butter with anchovies, garlic and chilli, which melt into a savoury sauce, then tossed with buckwheat noodles. Few ingredients, big flavour.',
        instructions: [
          'Melt a tablespoon of butter in a frying pan. Add the chopped garlic, chilli, anchovies and asparagus, cover and cook for 8–10 minutes.',
          'Meanwhile, cook the soba in boiling water for 4–5 minutes and drain.',
          'Add the noodles and the rest of the butter to the pan, toss well, season and serve.'
        ]
      },
      nl: {
        title: 'Soba met asperges en ansjovis',
        subtitle: 'Look, chili en boter, klaar in tien minuten',
        description: 'Asperges zacht gestoofd in boter met ansjovis, look en chili, die smelten tot een hartige saus, en dan gemengd met boekweitnoedels. Weinig ingrediënten, veel smaak.',
        instructions: [
          'Smelt een eetlepel boter in een pan. Voeg de gehakte look, chili, ansjovis en asperges toe, leg het deksel erop en laat 8–10 minuten garen.',
          'Kook ondertussen de soba 4–5 minuten in kokend water en giet af.',
          'Voeg de noedels en de rest van de boter toe aan de pan, meng goed, kruid en dien op.'
        ]
      },
      fr: {
        title: 'Soba aux asperges et aux anchois',
        subtitle: 'Ail, piment et beurre, prêt en dix minutes',
        description: 'Des asperges attendries au beurre avec des anchois, de l\'ail et du piment, qui fondent en une sauce savoureuse, puis mêlées aux nouilles de sarrasin. Peu d\'ingrédients, beaucoup de goût.',
        instructions: [
          'Fais fondre une cuillère à soupe de beurre dans une poêle. Ajoute l\'ail haché, le piment, les anchois et les asperges, couvre et cuis 8–10 minutes.',
          'Pendant ce temps, cuis les soba 4–5 minutes dans l\'eau bouillante et égoutte.',
          'Ajoute les nouilles et le reste du beurre dans la poêle, mélange bien, assaisonne et sers.'
        ]
      }
    },
    ingredients: [
      ing('Buckwheat soba noodles', 'Boekweit-sobanoedels', 'Nouilles soba au sarrasin', 140, 'g'),
      ing('Asparagus', 'Groene asperges', 'Asperges vertes', 10, 'st.'),
      ing('Anchovy fillets', 'Ansjovisfilets', 'Filets d\'anchois', 50, 'g'),
      ing('Garlic', 'Look', 'Ail', 3, 'st.'),
      ing('Red chili', 'Rode chilipeper', 'Piment rouge', 1, 'st.'),
      ing('Butter', 'Boter', 'Beurre', 2, 'el')
    ]
  },

  {
    slug: 'coconut-chicken-with-spinach',
    prepTime: '10 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Coconut Chicken with Spinach',
        subtitle: 'Creamy spinach and toasted almond crumbs',
        description: 'Chicken pieces and soft onion stirred into spinach wilted in coconut milk, with golden toasted almond crumbs scattered over. On the table in 25 minutes.',
        instructions: [
          'Blitz the almonds in a food processor and toast them in a little coconut oil until lightly golden. Set aside.',
          'Put the coconut milk and spinach in a pot, cover and let it simmer gently on low heat.',
          'Soften the onion in coconut oil for 2 minutes.',
          'Cut the chicken into cubes and cook it in the pan with the rest of the oil until cooked through.',
          'Add the chicken and onion to the spinach, stir, cover for 2 minutes and serve with the almonds, salt and pepper.'
        ]
      },
      nl: {
        title: 'Kip met kokos en spinazie',
        subtitle: 'Romige spinazie en geroosterde amandelkruimels',
        description: 'Stukjes kip en zachte ui door spinazie geroerd die in kokosmelk geslonken is, met goudbruine geroosterde amandelkruimels erover. In 25 minuten op tafel.',
        instructions: [
          'Hak de amandelen fijn in de keukenrobot en rooster ze in een beetje kokosolie tot ze licht goudbruin zijn. Zet opzij.',
          'Doe de kokosmelk en spinazie in een pot, leg het deksel erop en laat zachtjes pruttelen op laag vuur.',
          'Stoof de ui 2 minuten in kokosolie.',
          'Snijd de kip in blokjes en bak ze in de pan met de rest van de olie tot ze gaar zijn.',
          'Voeg de kip en ui bij de spinazie, roer, leg het deksel er 2 minuten op en dien op met de amandelen, zout en peper.'
        ]
      },
      fr: {
        title: 'Poulet coco aux épinards',
        subtitle: 'Épinards crémeux et chapelure d\'amandes grillées',
        description: 'Des morceaux de poulet et de l\'oignon fondant ajoutés à des épinards tombés dans le lait de coco, parsemés d\'amandes grillées dorées. Sur la table en 25 minutes.',
        instructions: [
          'Mixe les amandes au robot et fais-les griller dans un peu d\'huile de coco jusqu\'à ce qu\'elles soient légèrement dorées. Réserve.',
          'Mets le lait de coco et les épinards dans une casserole, couvre et laisse frémir doucement à feu doux.',
          'Fais fondre l\'oignon dans l\'huile de coco 2 minutes.',
          'Coupe le poulet en cubes et cuis-le dans la poêle avec le reste de l\'huile jusqu\'à ce qu\'il soit cuit.',
          'Ajoute le poulet et l\'oignon aux épinards, mélange, couvre 2 minutes et sers avec les amandes, du sel et du poivre.'
        ]
      }
    },
    ingredients: [
      ing('Chicken breast', 'Kipfilet', 'Blanc de poulet', 1, 'st.'),
      ing('Baby spinach', 'Jonge spinazie', 'Pousses d\'épinards', 90, 'g'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 120, 'ml'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 3, 'el'),
      ing('Almonds', 'Amandelen', 'Amandes', 30, 'g'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'grilled-lime-chicken-salad',
    prepTime: '40 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['main'],
    translations: {
      en: {
        title: 'Chilli-Lime Grilled Chicken',
        subtitle: 'A punchy marinade and a green salad',
        description: 'Chicken marinated for half an hour in lime, garlic and fresh chilli, then grilled until charred. Serve it over a simple green salad.',
        instructions: [
          'Blend the lime juice, garlic, chillies and olive oil in a food processor.',
          'Put the chicken in a bag with the marinade and leave it in the fridge for 30 minutes.',
          'Heat a griddle pan or grill.',
          'Cook the chicken for about 5 minutes a side, until cooked through. Season and serve with a green salad.'
        ]
      },
      nl: {
        title: 'Gegrilde kip met chili en limoen',
        subtitle: 'Een pittige marinade en een groene salade',
        description: 'Kip een half uur gemarineerd in limoen, look en verse chili, en dan gegrild tot ze geblakerd is. Lekker op een eenvoudige groene salade.',
        instructions: [
          'Mix het limoensap, de look, chilipepers en olijfolie in de keukenrobot.',
          'Doe de kip met de marinade in een zakje en leg 30 minuten in de koelkast.',
          'Verwarm een grillpan of grill.',
          'Bak de kip zo\'n 5 minuten per kant, tot ze gaar is. Kruid en dien op met een groene salade.'
        ]
      },
      fr: {
        title: 'Poulet grillé piment-citron vert',
        subtitle: 'Une marinade relevée et une salade verte',
        description: 'Du poulet mariné une demi-heure dans le citron vert, l\'ail et le piment frais, puis grillé jusqu\'à être bien marqué. À servir sur une simple salade verte.',
        instructions: [
          'Mixe le jus de citron vert, l\'ail, les piments et l\'huile d\'olive au robot.',
          'Mets le poulet dans un sachet avec la marinade et laisse 30 minutes au frigo.',
          'Chauffe une poêle-gril ou un gril.',
          'Cuis le poulet environ 5 minutes par face, jusqu\'à ce qu\'il soit cuit. Assaisonne et sers avec une salade verte.'
        ]
      }
    },
    ingredients: [
      ing('Chicken breast', 'Kipfilet', 'Blanc de poulet', 1, 'st.'),
      ing('Lime juice', 'Limoensap', 'Jus de citron vert', 4, 'el'),
      ing('Garlic', 'Look', 'Ail', 3, 'st.'),
      ing('Red chilies', 'Rode chilipepers', 'Piments rouges', 2, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Mixed salad greens', 'Gemengde sla', 'Mesclun', 60, 'g'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'quinoa-meatloaf',
    prepTime: '15 mins',
    cookTime: '45 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Quinoa Meatloaf with Tomato Sauce',
        subtitle: 'Gehaktbrood, bound with quinoa instead of bread',
        description: 'A herby beef meatloaf held together with quinoa and egg, baked until browned and served sliced under a smooth homemade tomato sauce. Gehaktbrood without the breadcrumbs.',
        instructions: [
          'Cook the quinoa as the packet says. Soften the onion in the olive oil for 3–4 minutes, add the garlic and cook 1–2 minutes more.',
          'Heat the oven to 180 °C. Mix half the onion and garlic with the beef, eggs, quinoa, thyme, oregano, chilli powder, salt and pepper and press it into a greased loaf tin.',
          'Bake uncovered for 40–45 minutes, covering with foil if it browns too fast.',
          'Meanwhile, simmer the tomatoes with the rest of the onion, the oregano and basil for 15 minutes and blend until smooth.',
          'Let the meatloaf rest for 5 minutes, turn it out, pour the warm sauce over and finish with parsley.'
        ]
      },
      nl: {
        title: 'Gehaktbrood met quinoa en tomatensaus',
        subtitle: 'Gehaktbrood, gebonden met quinoa in plaats van brood',
        description: 'Een kruidig gehaktbrood van rundvlees, samengehouden met quinoa en ei, bruin gebakken en in plakken geserveerd onder een gladde zelfgemaakte tomatensaus. Gehaktbrood zonder paneermeel.',
        instructions: [
          'Kook de quinoa zoals op de verpakking staat. Stoof de ui 3–4 minuten in de olijfolie, voeg de look toe en bak nog 1–2 minuten.',
          'Verwarm de oven voor op 180 °C. Meng de helft van de ui en look met het gehakt, de eieren, quinoa, tijm, oregano, chilipoeder, zout en peper en druk aan in een ingevette cakevorm.',
          'Bak zonder afdekking 40–45 minuten, en dek af met aluminiumfolie als het te snel kleurt.',
          'Laat ondertussen de tomaten 15 minuten sudderen met de rest van de ui, de oregano en basilicum en mix glad.',
          'Laat het gehaktbrood 5 minuten rusten, stort het, giet de warme saus erover en werk af met peterselie.'
        ]
      },
      fr: {
        title: 'Pain de viande au quinoa et sauce tomate',
        subtitle: 'Un pain de viande lié au quinoa plutôt qu\'au pain',
        description: 'Un pain de viande de bœuf aux herbes tenu par le quinoa et l\'œuf, cuit jusqu\'à être doré et servi en tranches sous une sauce tomate maison bien lisse. Sans chapelure.',
        instructions: [
          'Cuis le quinoa comme indiqué sur le paquet. Fais fondre l\'oignon dans l\'huile d\'olive 3–4 minutes, ajoute l\'ail et poursuis 1–2 minutes.',
          'Préchauffe le four à 180 °C. Mélange la moitié de l\'oignon et de l\'ail avec le bœuf, les œufs, le quinoa, le thym, l\'origan, le piment, le sel et le poivre et tasse dans un moule à cake graissé.',
          'Enfourne à découvert 40–45 minutes, en couvrant d\'aluminium si ça dore trop vite.',
          'Pendant ce temps, fais mijoter les tomates avec le reste de l\'oignon, l\'origan et le basilic 15 minutes et mixe.',
          'Laisse reposer le pain de viande 5 minutes, démoule, nappe de sauce chaude et termine avec du persil.'
        ]
      }
    },
    ingredients: [
      ing('Quinoa', 'Quinoa', 'Quinoa', 60, 'g'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Ground beef', 'Rundsgehakt', 'Bœuf haché', 450, 'g'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Dried thyme', 'Gedroogde tijm', 'Thym séché', 0.5, 'kl'),
      ing('Dried oregano', 'Gedroogde oregano', 'Origan séché', 1, 'kl'),
      ing('Chili powder', 'Chilipoeder', 'Piment en poudre', 0.5, 'kl'),
      ing('Chopped tomatoes', 'Tomatenblokjes', 'Tomates concassées', 400, 'g'),
      ing('Dried basil', 'Gedroogde basilicum', 'Basilic séché', 0.5, 'kl'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'cabbage-masala',
    prepTime: '10 mins',
    cookTime: '25 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Cabbage Masala',
        subtitle: 'Popping mustard seeds, garam masala and okra',
        description: 'Plain white cabbage turned into something special: cooked down with tomato and okra in coconut oil with popped mustard seeds, cumin, turmeric and garam masala.',
        instructions: [
          'Finely slice the cabbage, onion, tomatoes, okra and garlic.',
          'Heat the coconut oil and add the mustard seeds. Wait until they pop.',
          'Add the garlic and cook until slightly soft, then the onion until soft.',
          'Stir in the turmeric, garam masala and cumin for 2–3 minutes, then add the tomatoes, cover and cook for 5 minutes.',
          'Add the cabbage, okra and salt and cook for 15 minutes, stirring now and then.'
        ]
      },
      nl: {
        title: 'Koolmasala',
        subtitle: 'Poppende mosterdzaadjes, garam masala en okra',
        description: 'Gewone witte kool omgetoverd tot iets bijzonders: zacht gestoofd met tomaat en okra in kokosolie met gepofte mosterdzaadjes, komijn, kurkuma en garam masala.',
        instructions: [
          'Snijd de kool, ui, tomaten, okra en look fijn.',
          'Verhit de kokosolie en doe de mosterdzaadjes erin. Wacht tot ze poppen.',
          'Voeg de look toe en bak tot hij een beetje zacht is, en dan de ui tot die zacht is.',
          'Roer de kurkuma, garam masala en komijn er 2–3 minuten door, voeg de tomaten toe, leg het deksel erop en laat 5 minuten garen.',
          'Voeg de kool, okra en het zout toe en laat 15 minuten garen, af en toe omroeren.'
        ]
      },
      fr: {
        title: 'Chou masala',
        subtitle: 'Graines de moutarde qui éclatent, garam masala et gombo',
        description: 'Du simple chou blanc transformé en plat de fête : fondu avec tomate et gombo dans l\'huile de coco avec des graines de moutarde éclatées, du cumin, du curcuma et du garam masala.',
        instructions: [
          'Émince finement le chou, l\'oignon, les tomates, le gombo et l\'ail.',
          'Chauffe l\'huile de coco et ajoute les graines de moutarde. Attends qu\'elles éclatent.',
          'Ajoute l\'ail et cuis jusqu\'à ce qu\'il s\'attendrisse, puis l\'oignon jusqu\'à ce qu\'il soit fondant.',
          'Ajoute le curcuma, le garam masala et le cumin 2–3 minutes, puis les tomates, couvre et cuis 5 minutes.',
          'Ajoute le chou, le gombo et le sel et cuis 15 minutes en remuant de temps en temps.'
        ]
      }
    },
    ingredients: [
      ing('Cabbage', 'Witte kool', 'Chou blanc', 0.5, 'head'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Tomatoes', 'Tomaten', 'Tomates', 2, 'st.'),
      ing('Okra', 'Okra', 'Gombo', 75, 'g'),
      ing('Garlic', 'Look', 'Ail', 5, 'st.'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 3, 'el'),
      ing('Mustard seeds', 'Mosterdzaad', 'Graines de moutarde', 1, 'kl'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 1, 'kl'),
      ing('Garam masala', 'Garam masala', 'Garam masala', 1, 'kl'),
      ing('Turmeric', 'Kurkuma', 'Curcuma', 0.25, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl')
    ]
  },

  {
    slug: 'steak-with-ginger-sauce-and-tabbouleh',
    prepTime: '20 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Steak with Ginger Sauce & Quinoa Tabbouleh',
        subtitle: 'A herb-packed tabbouleh with a punchy ginger dressing',
        description: 'Steak cooked how you like it and sliced over a tabbouleh made with quinoa instead of bulgur and heaps of parsley and mint, with a ginger, chilli and lemon sauce spooned on top.',
        instructions: [
          'Cook the quinoa as the packet says, rinse it and let it cool.',
          'Chop the tomatoes and cucumber, finely chop the parsley, mint and red onion, and mix them in a bowl.',
          'Stir the grated ginger, garlic, chilli, coconut aminos, a tablespoon of olive oil and a tablespoon of lemon juice into a sauce.',
          'Season the steak and cook it to your liking. Let it rest, then slice it.',
          'Mix the quinoa into the vegetables with the rest of the lemon juice and olive oil, season, and serve with the steak and the sauce drizzled over.'
        ]
      },
      nl: {
        title: 'Steak met gembersaus en quinoatabouleh',
        subtitle: 'Een tabouleh vol kruiden met een pittige gemberdressing',
        description: 'Steak gebakken zoals jij hem graag hebt, in plakjes op een tabouleh met quinoa in plaats van bulgur en bergen peterselie en munt, met een saus van gember, chili en citroen erover.',
        instructions: [
          'Kook de quinoa zoals op de verpakking staat, spoel en laat afkoelen.',
          'Snijd de tomaten en komkommer, hak de peterselie, munt en rode ui fijn en meng in een kom.',
          'Roer de geraspte gember, look, chili, kokosaminos, een eetlepel olijfolie en een eetlepel citroensap tot een saus.',
          'Kruid de steak en bak hem zoals je hem graag hebt. Laat rusten en snijd in plakjes.',
          'Meng de quinoa door de groenten met de rest van het citroensap en de olijfolie, kruid, en dien op met de steak en de saus erover.'
        ]
      },
      fr: {
        title: 'Steak sauce gingembre et taboulé de quinoa',
        subtitle: 'Un taboulé plein d\'herbes et une sauce au gingembre bien relevée',
        description: 'Un steak cuit à ton goût, tranché sur un taboulé au quinoa au lieu du boulgour avec des montagnes de persil et de menthe, nappé d\'une sauce gingembre, piment et citron.',
        instructions: [
          'Cuis le quinoa comme indiqué sur le paquet, rince-le et laisse refroidir.',
          'Coupe les tomates et le concombre, hache finement le persil, la menthe et l\'oignon rouge, et mélange dans un saladier.',
          'Mélange le gingembre râpé, l\'ail, le piment, les aminos de coco, une cuillère à soupe d\'huile d\'olive et une de jus de citron pour faire la sauce.',
          'Assaisonne le steak et cuis-le à ton goût. Laisse reposer, puis tranche.',
          'Incorpore le quinoa aux légumes avec le reste du jus de citron et de l\'huile, assaisonne, et sers avec le steak nappé de sauce.'
        ]
      }
    },
    ingredients: [
      ing('Beef steak', 'Rundersteak', 'Steak de bœuf', 300, 'g'),
      ing('Fresh ginger', 'Verse gember', 'Gingembre frais', 2, 'cm'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Red chili', 'Rode chilipeper', 'Piment rouge', 1, 'st.'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 2, 'el'),
      ing('Quinoa', 'Quinoa', 'Quinoa', 85, 'g'),
      ing('Parsley', 'Peterselie', 'Persil', 60, 'g'),
      ing('Mint', 'Munt', 'Menthe', 15, 'g'),
      ing('Cherry tomatoes', 'Kerstomaatjes', 'Tomates cerises', 10, 'st.'),
      ing('Cucumber', 'Komkommer', 'Concombre', 0.5, 'st.'),
      ing('Red onion', 'Rode ui', 'Oignon rouge', 1, 'st.'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 120, 'ml'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 4, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'baba-ganoush',
    prepTime: '10 mins',
    cookTime: '40 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['snack'],
    wiki: ['en:Baba ghanoush'],
    translations: {
      en: {
        title: 'Baba Ganoush',
        subtitle: 'Smoky aubergine, tahini and lemon',
        description: 'A whole aubergine roasted until it collapses, then blended with tahini, garlic and lemon into a silky, smoky dip. Keeps several days in the fridge.',
        instructions: [
          'Heat the oven to 230 °C. Prick the aubergine all over and roast it on a tray for 35–40 minutes, until collapsed and completely soft.',
          'Let it cool, then remove the stem and skin.',
          'Blend the flesh with the olive oil, garlic, lemon juice, tahini, salt and pepper for about a minute, until smooth.',
          'Add the parsley and pulse for a few seconds.',
          'Serve at room temperature with a drizzle of oil, more parsley and chilli flakes if you like.'
        ]
      },
      nl: {
        title: 'Baba ganoush',
        subtitle: 'Rokerige aubergine, tahin en citroen',
        description: 'Een hele aubergine geroosterd tot ze in elkaar zakt, en dan gemixt met tahin, look en citroen tot een zijdezachte, rokerige dip. Blijft een paar dagen goed in de koelkast.',
        instructions: [
          'Verwarm de oven voor op 230 °C. Prik de aubergine overal in en rooster ze 35–40 minuten op een bakplaat, tot ze ingezakt en helemaal zacht is.',
          'Laat afkoelen en verwijder het steeltje en het vel.',
          'Mix het vruchtvlees met de olijfolie, look, het citroensap, de tahin, zout en peper zo\'n minuut tot het glad is.',
          'Voeg de peterselie toe en mix nog een paar seconden.',
          'Dien op op kamertemperatuur met een scheutje olie, nog wat peterselie en eventueel chilivlokken.'
        ]
      },
      fr: {
        title: 'Baba ganoush',
        subtitle: 'Aubergine fumée, tahini et citron',
        description: 'Une aubergine entière rôtie jusqu\'à s\'effondrer, puis mixée avec du tahini, de l\'ail et du citron en une purée soyeuse et fumée. Se garde plusieurs jours au frigo.',
        instructions: [
          'Préchauffe le four à 230 °C. Pique l\'aubergine de partout et rôtis-la sur une plaque 35–40 minutes, jusqu\'à ce qu\'elle s\'affaisse et soit complètement tendre.',
          'Laisse refroidir, puis retire le pédoncule et la peau.',
          'Mixe la chair avec l\'huile d\'olive, l\'ail, le jus de citron, le tahini, le sel et le poivre environ une minute, jusqu\'à ce que ce soit lisse.',
          'Ajoute le persil et mixe quelques secondes.',
          'Sers à température ambiante avec un filet d\'huile, encore du persil et du piment si tu veux.'
        ]
      }
    },
    ingredients: [
      ing('Eggplant', 'Aubergine', 'Aubergine', 450, 'g'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Tahini', 'Tahin', 'Tahini', 2, 'el'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Parsley', 'Peterselie', 'Persil', 3, 'el'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 1, 'pinch'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'quinoa-buckwheat-crackers',
    prepTime: '20 mins',
    cookTime: '30 mins',
    difficulty: diff.medium,
    servings: 4,
    category: ['snack'],
    translations: {
      en: {
        title: 'Quinoa & Buckwheat Crackers',
        subtitle: 'Thin, crisp and yeast-free',
        description: 'A simple dough of quinoa and buckwheat flour rolled paper-thin and baked until crisp, with herbs if you like. Break them into shards for dips like the baba ganoush.',
        instructions: [
          'Heat the oven to 220 °C, with a pizza stone in it if you have one.',
          'Whisk the quinoa flour, buckwheat flour, psyllium and salt. Rub in the olive oil until crumbly, then add the water and mix to a dough.',
          'Knead for about a minute until smooth, then divide into 4 pieces.',
          'Flatten each piece, dust it with quinoa flour and roll it out very thin between two sheets of baking paper. Scatter over herbs if you like.',
          'Bake one at a time for 7–8 minutes, until the edges brown. Let them cool for an hour before breaking into pieces.'
        ]
      },
      nl: {
        title: 'Crackers van quinoa en boekweit',
        subtitle: 'Dun, krokant en zonder gist',
        description: 'Een eenvoudig deeg van quinoa- en boekweitmeel, flinterdun uitgerold en krokant gebakken, met kruiden als je wilt. Breek ze in stukken voor dips zoals de baba ganoush.',
        instructions: [
          'Verwarm de oven voor op 220 °C, met een pizzasteen erin als je die hebt.',
          'Klop het quinoameel, boekweitmeel, de psyllium en het zout door elkaar. Wrijf de olijfolie erdoor tot het kruimelig is, voeg het water toe en meng tot een deeg.',
          'Kneed zo\'n minuut tot het glad is en verdeel in 4 stukken.',
          'Druk elk stuk plat, bestuif met quinoameel en rol heel dun uit tussen twee vellen bakpapier. Strooi er kruiden over als je wilt.',
          'Bak ze een voor een 7–8 minuten, tot de randen bruin worden. Laat een uur afkoelen voor je ze in stukken breekt.'
        ]
      },
      fr: {
        title: 'Crackers quinoa-sarrasin',
        subtitle: 'Fins, croustillants et sans levure',
        description: 'Une pâte simple aux farines de quinoa et de sarrasin, étalée très finement et cuite jusqu\'à être croustillante, avec des herbes si tu veux. Casse-les en éclats pour les dips comme le baba ganoush.',
        instructions: [
          'Préchauffe le four à 220 °C, avec une pierre à pizza dedans si tu en as une.',
          'Fouette la farine de quinoa, la farine de sarrasin, le psyllium et le sel. Incorpore l\'huile d\'olive du bout des doigts jusqu\'à obtenir un sable, puis ajoute l\'eau et forme une pâte.',
          'Pétris environ une minute jusqu\'à ce qu\'elle soit lisse, puis divise en 4.',
          'Aplatis chaque morceau, farine-le de farine de quinoa et étale-le très finement entre deux feuilles de papier cuisson. Parsème d\'herbes si tu veux.',
          'Enfourne un à la fois 7–8 minutes, jusqu\'à ce que les bords dorent. Laisse refroidir une heure avant de casser en morceaux.'
        ]
      }
    },
    ingredients: [
      ing('Quinoa flour', 'Quinoameel', 'Farine de quinoa', 130, 'g'),
      ing('Buckwheat flour', 'Boekweitmeel', 'Farine de sarrasin', 60, 'g'),
      ing('Psyllium husk powder', 'Psylliumvezels', 'Psyllium en poudre', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Water', 'Water', 'Eau', 120, 'ml'),
      ing('Dried herbs', 'Gedroogde kruiden', 'Herbes séchées', 1, 'kl')
    ]
  }
];
