// Candida-diet dishes, batch 5. See candida_recipes.js for how these were made.

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });
const diff = {
  easy: { en: 'Easy', nl: 'Makkelijk', fr: 'Facile' },
  medium: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' }
};

module.exports = [
  {
    slug: 'braised-brussels-sprouts',
    prepTime: '5 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Braised Brussels Sprouts',
        subtitle: 'Browned, then softened in stock with thyme',
        description: 'Sprouts fried until they catch a little colour, then braised in stock with shallot, garlic and thyme and topped with toasted pine nuts. Even sprout-doubters come round.',
        instructions: [
          'Heat the olive oil in a medium pan over medium heat and soften the shallots for 2–3 minutes. Add the garlic and cook for 2 minutes more.',
          'Add the sprouts and stir often until they start to brown in patches.',
          'Pour in the stock, add the thyme and season.',
          'Cover and cook on low heat for 10–15 minutes, until tender. Scatter the pine nuts on top.'
        ]
      },
      nl: {
        title: 'Gestoofde spruitjes',
        subtitle: 'Eerst gekleurd, dan zacht gestoofd in bouillon met tijm',
        description: 'Spruitjes gebakken tot ze een beetje kleur krijgen, dan gestoofd in bouillon met sjalot, look en tijm, en afgewerkt met geroosterde pijnboompitten. Zelfs spruitjestwijfelaars draaien bij.',
        instructions: [
          'Verhit de olijfolie in een middelgrote pan op middelhoog vuur en stoof de sjalotten 2–3 minuten zacht. Voeg de look toe en bak nog 2 minuten.',
          'Doe de spruitjes erbij en roer geregeld tot ze hier en daar bruin worden.',
          'Giet de bouillon erbij, voeg de tijm toe en kruid.',
          'Leg het deksel erop en laat 10–15 minuten op laag vuur garen tot ze zacht zijn. Strooi de pijnboompitten erover.'
        ]
      },
      fr: {
        title: 'Choux de Bruxelles braisés',
        subtitle: 'Dorés, puis attendris dans un bouillon au thym',
        description: 'Des choux de Bruxelles poêlés jusqu\'à prendre un peu de couleur, puis braisés au bouillon avec échalote, ail et thym, et parsemés de pignons grillés. Même les sceptiques se laissent convaincre.',
        instructions: [
          'Chauffe l\'huile d\'olive dans une casserole moyenne à feu moyen et fais fondre les échalotes 2–3 minutes. Ajoute l\'ail et poursuis 2 minutes.',
          'Ajoute les choux et remue souvent jusqu\'à ce qu\'ils dorent par endroits.',
          'Verse le bouillon, ajoute le thym et assaisonne.',
          'Couvre et cuis à feu doux 10–15 minutes, jusqu\'à ce qu\'ils soient tendres. Parsème de pignons.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Shallots', 'Sjalotten', 'Échalotes', 3, 'st.'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Brussels sprouts', 'Spruitjes', 'Choux de Bruxelles', 450, 'g'),
      ing('Chicken broth', 'Kippenbouillon', 'Bouillon de volaille', 240, 'ml'),
      ing('Thyme', 'Tijm', 'Thym', 4, 'sprig'),
      ing('Pine nuts', 'Pijnboompitten', 'Pignons de pin', 35, 'g'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'coconut-bread-stuffing',
    prepTime: '15 mins',
    cookTime: '30 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Coconut Bread Stuffing',
        subtitle: 'A festive side made from the book\'s coconut bread',
        description: 'Cubes of coconut bread baked with celery, onion, mushrooms, leek and thyme until crisp on top and soft underneath. Make the coconut bread from this book first.',
        instructions: [
          'Heat the oven to 160 °C and grease a 20 × 20 cm dish with oil.',
          'Cut the coconut bread into 2–3 cm cubes and put them in a large bowl.',
          'Fry the celery, onion, mushrooms and leek in the oil over medium heat for about 8 minutes, and season with the thyme, salt and pepper.',
          'Add the vegetables and the stock to the bread and mix well.',
          'Spoon into the dish, cover and bake for 15 minutes, then uncover and bake about 15 minutes more, until golden.'
        ]
      },
      nl: {
        title: 'Vulling van kokosbrood',
        subtitle: 'Een feestelijk bijgerecht van het kokosbrood uit dit boek',
        description: 'Blokjes kokosbrood gebakken met selder, ui, champignons, prei en tijm, tot ze bovenaan krokant zijn en eronder zacht. Bak eerst het kokosbrood uit dit boek.',
        instructions: [
          'Verwarm de oven voor op 160 °C en vet een schaal van 20 × 20 cm in.',
          'Snijd het kokosbrood in blokjes van 2–3 cm en doe ze in een grote kom.',
          'Bak de selder, ui, champignons en prei zo\'n 8 minuten in de olie op middelhoog vuur en kruid met tijm, peper en zout.',
          'Voeg de groenten en de bouillon bij het brood en meng goed.',
          'Schep in de schaal, dek af en bak 15 minuten, en dan zonder afdekking nog zo\'n 15 minuten, tot het goudbruin is.'
        ]
      },
      fr: {
        title: 'Farce au pain de coco',
        subtitle: 'Un accompagnement de fête avec le pain de coco du livre',
        description: 'Des cubes de pain de coco cuits avec du céleri, de l\'oignon, des champignons, du poireau et du thym, croustillants dessus et moelleux dessous. Prépare d\'abord le pain à la noix de coco de ce livre.',
        instructions: [
          'Préchauffe le four à 160 °C et graisse un plat de 20 × 20 cm.',
          'Coupe le pain de coco en cubes de 2–3 cm et mets-les dans un grand saladier.',
          'Fais revenir le céleri, l\'oignon, les champignons et le poireau dans l\'huile à feu moyen environ 8 minutes, et assaisonne avec le thym, le sel et le poivre.',
          'Ajoute les légumes et le bouillon au pain et mélange bien.',
          'Verse dans le plat, couvre et enfourne 15 minutes, puis découvre et poursuis une quinzaine de minutes, jusqu\'à ce que ce soit doré.'
        ]
      }
    },
    ingredients: [
      ing('Coconut bread', 'Kokosbrood', 'Pain à la noix de coco', 1, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Celery stalks', 'Bladselder', 'Céleri branche', 2, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Mushrooms', 'Champignons', 'Champignons', 50, 'g'),
      ing('Leek', 'Prei', 'Poireau', 0.5, 'st.'),
      ing('Dried thyme', 'Gedroogde tijm', 'Thym séché', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Vegetable broth', 'Groentebouillon', 'Bouillon de légumes', 240, 'ml'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'roast-turkey-with-sage-pesto',
    prepTime: '15 mins',
    cookTime: '45 mins',
    difficulty: diff.medium,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Roast Turkey Breast with Sage Pesto',
        subtitle: 'A hazelnut and sage paste tucked under the skin',
        description: 'A half turkey breast roasted with a pesto of sage, hazelnut and lemon spread underneath the skin, so the meat stays juicy and smells of autumn.',
        instructions: [
          'Blitz the sage, garlic, lemon juice, zest and hazelnuts to a paste, then blend in 3 tablespoons of oil and season.',
          'Heat the oven to 200 °C.',
          'Loosen the skin of the turkey with your fingers and spread the pesto underneath it. Rub the outside with the rest of the oil, salt and pepper.',
          'Roast for about 30 minutes, until the thickest part reaches 60 °C on a thermometer.',
          'Cover and let it rest for 15 minutes — it keeps cooking while it rests. Slice and spoon over the pan juices.'
        ]
      },
      nl: {
        title: 'Geroosterde kalkoenborst met saliepesto',
        subtitle: 'Een pasta van hazelnoot en salie onder het vel',
        description: 'Een halve kalkoenborst geroosterd met een pesto van salie, hazelnoot en citroen onder het vel gesmeerd, zodat het vlees sappig blijft en naar de herfst ruikt.',
        instructions: [
          'Mix de salie, look, het citroensap, de zeste en hazelnoten tot een pasta, mix er dan 3 eetlepels olie door en kruid.',
          'Verwarm de oven voor op 200 °C.',
          'Maak het vel van de kalkoen los met je vingers en smeer de pesto eronder. Wrijf de buitenkant in met de rest van de olie, zout en peper.',
          'Rooster zo\'n 30 minuten, tot het dikste deel 60 °C haalt op een thermometer.',
          'Dek af en laat 15 minuten rusten — tijdens het rusten gaart hij verder. Snijd in plakken en schep het braadvocht erover.'
        ]
      },
      fr: {
        title: 'Rôti de dinde au pesto de sauge',
        subtitle: 'Une pâte de noisette et de sauge glissée sous la peau',
        description: 'Une demi-poitrine de dinde rôtie avec un pesto de sauge, de noisette et de citron étalé sous la peau, pour une viande juteuse qui sent l\'automne.',
        instructions: [
          'Mixe la sauge, l\'ail, le jus et le zeste de citron et les noisettes en pâte, puis ajoute 3 cuillères à soupe d\'huile et assaisonne.',
          'Préchauffe le four à 200 °C.',
          'Décolle la peau de la dinde avec les doigts et étale le pesto dessous. Frotte l\'extérieur avec le reste de l\'huile, du sel et du poivre.',
          'Rôtis environ 30 minutes, jusqu\'à ce que la partie la plus épaisse atteigne 60 °C au thermomètre.',
          'Couvre et laisse reposer 15 minutes — la cuisson se poursuit au repos. Tranche et arrose du jus de cuisson.'
        ]
      }
    },
    ingredients: [
      ing('Sage', 'Salie', 'Sauge', 25, 'g'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'kl'),
      ing('Lemon zest', 'Citroenzeste', 'Zeste de citron', 1, 'kl'),
      ing('Hazelnuts', 'Hazelnoten', 'Noisettes', 2, 'el'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 4, 'el'),
      ing('Turkey breast', 'Kalkoenborst', 'Poitrine de dinde', 900, 'g'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.25, 'kl')
    ]
  },

  {
    slug: 'moroccan-stir-fry',
    prepTime: '15 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['main'],
    translations: {
      en: {
        title: 'Moroccan Turkey Stir-Fry',
        subtitle: 'Cumin, allspice, chard and mint',
        description: 'Minced turkey browned with cumin and allspice, then tossed with chard, cabbage and orange pepper and finished with lemon and fresh mint. Dinner in half an hour.',
        instructions: [
          'Heat a little oil in a large frying pan over medium heat and fry the onion and garlic for 1–2 minutes, until fragrant.',
          'Add the turkey, allspice, cumin, salt and pepper and fry for 7–8 minutes, breaking it up, until browned.',
          'Add the chard, cabbage and pepper and stir-fry for about 3 minutes, until wilted.',
          'Stir in the lemon juice, zest and chopped mint. Serve with a spoon of yogurt and a few mint leaves.'
        ]
      },
      nl: {
        title: 'Marokkaanse roerbak met kalkoen',
        subtitle: 'Komijn, piment, snijbiet en munt',
        description: 'Kalkoengehakt bruin gebakken met komijn en piment, dan omgeroerd met snijbiet, kool en oranje paprika, en afgewerkt met citroen en verse munt. Avondeten in een half uur.',
        instructions: [
          'Verhit wat olie in een grote pan op middelhoog vuur en bak de ui en look 1–2 minuten tot ze geuren.',
          'Voeg het gehakt, piment, komijn, zout en peper toe en bak 7–8 minuten al roerend los tot het bruin is.',
          'Voeg de snijbiet, kool en paprika toe en roerbak zo\'n 3 minuten, tot alles geslonken is.',
          'Roer het citroensap, de zeste en de gehakte munt erdoor. Dien op met een lepel yoghurt en een paar muntblaadjes.'
        ]
      },
      fr: {
        title: 'Poêlée marocaine à la dinde',
        subtitle: 'Cumin, piment de la Jamaïque, blettes et menthe',
        description: 'De la dinde hachée dorée au cumin et au piment de la Jamaïque, puis sautée avec des blettes, du chou et du poivron orange, et finie au citron et à la menthe fraîche. Le dîner en une demi-heure.',
        instructions: [
          'Chauffe un peu d\'huile dans une grande poêle à feu moyen et fais revenir l\'oignon et l\'ail 1–2 minutes, jusqu\'à ce qu\'ils embaument.',
          'Ajoute la dinde, le piment de la Jamaïque, le cumin, le sel et le poivre et fais dorer 7–8 minutes en émiettant.',
          'Ajoute les blettes, le chou et le poivron et fais sauter environ 3 minutes, jusqu\'à ce qu\'ils tombent.',
          'Incorpore le jus et le zeste de citron et la menthe hachée. Sers avec une cuillère de yaourt et quelques feuilles de menthe.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Ground turkey', 'Kalkoengehakt', 'Dinde hachée', 450, 'g'),
      ing('Allspice', 'Piment (kruid)', 'Piment de la Jamaïque', 1, 'kl'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 2, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 1, 'pinch'),
      ing('Swiss chard', 'Snijbiet', 'Blettes', 70, 'g'),
      ing('Green cabbage', 'Groene kool', 'Chou vert', 140, 'g'),
      ing('Mint', 'Munt', 'Menthe', 2, 'el'),
      ing('Orange bell pepper', 'Oranje paprika', 'Poivron orange', 1, 'st.'),
      ing('Lemon', 'Citroen', 'Citron', 1, 'st.'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 4, 'el')
    ]
  },

  {
    slug: 'celeriac-soup',
    prepTime: '10 mins',
    cookTime: '40 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['soup'],
    translations: {
      en: {
        title: 'Celeriac Soup',
        subtitle: 'Silky, gently sweet, and just six ingredients',
        description: 'Celeriac and leek simmered soft and blended into a velvety soup, with a little tart apple for lift and thyme to finish. A winter staple from the Belgian vegetable patch.',
        instructions: [
          'Heat the oil in a large pan over medium heat and cook the leek for about 5 minutes.',
          'Add the celeriac and the apple and cook for 5 minutes more.',
          'Pour in the water and add the salt. Bring to a simmer, cover and cook for about 30 minutes, until the celeriac is soft.',
          'Blend until smooth, stir in the dried thyme and season with pepper and more salt if it needs it. Serve with fresh thyme on top.'
        ]
      },
      nl: {
        title: 'Knolseldersoep',
        subtitle: 'Fluweelzacht, zacht zoet, en maar zes ingrediënten',
        description: 'Knolselder en prei zacht gekookt en gemixt tot een fluweelzachte soep, met een beetje zure appel voor frisheid en tijm om af te werken. Een wintervaste waarde uit de Belgische moestuin.',
        instructions: [
          'Verhit de olie in een grote pot op middelhoog vuur en stoof de prei zo\'n 5 minuten.',
          'Voeg de knolselder en de appel toe en stoof nog 5 minuten.',
          'Giet het water erbij en voeg het zout toe. Breng aan de kook, leg het deksel erop en laat zo\'n 30 minuten koken, tot de knolselder zacht is.',
          'Mix glad, roer de gedroogde tijm erdoor en breng op smaak met peper en eventueel wat extra zout. Dien op met verse tijm.'
        ]
      },
      fr: {
        title: 'Soupe de céleri-rave',
        subtitle: 'Veloutée, doucement sucrée, et six ingrédients à peine',
        description: 'Du céleri-rave et du poireau cuits tendres et mixés en un velouté, avec un peu de pomme acidulée pour la fraîcheur et du thym pour finir. Un classique d\'hiver du potager belge.',
        instructions: [
          'Chauffe l\'huile dans une grande casserole à feu moyen et fais fondre le poireau environ 5 minutes.',
          'Ajoute le céleri-rave et la pomme et poursuis 5 minutes.',
          'Verse l\'eau et ajoute le sel. Porte à frémissement, couvre et cuis une trentaine de minutes, jusqu\'à ce que le céleri soit tendre.',
          'Mixe jusqu\'à ce que ce soit lisse, ajoute le thym séché et rectifie avec du poivre et du sel si besoin. Sers avec du thym frais.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Leek', 'Prei', 'Poireau', 1, 'st.'),
      ing('Celeriac', 'Knolselder', 'Céleri-rave', 680, 'g'),
      ing('Granny Smith apple', 'Granny Smith-appel', 'Pomme Granny Smith', 0.5, 'st.'),
      ing('Water', 'Water', 'Eau', 1200, 'ml'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Dried thyme', 'Gedroogde tijm', 'Thym séché', 1, 'kl'),
      ing('Thyme', 'Tijm', 'Thym', 2, 'sprig'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'tarragon-chicken-with-leeks',
    prepTime: '10 mins',
    cookTime: '25 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['main'],
    translations: {
      en: {
        title: 'Tarragon Chicken with Leeks',
        subtitle: 'Braised leek halves and a creamy coconut sauce',
        description: 'A thin chicken breast browned with tarragon, served with leek halves braised until meltingly soft and a quick coconut pan sauce. Classic French flavours, no cream.',
        instructions: [
          'Flatten the chicken to about 1 cm and season it with the dried tarragon, salt and pepper.',
          'Heat 1 tablespoon of oil over medium-high heat and fry the chicken for about 2 minutes a side. Set it aside, covered.',
          'Trim the leek, split it lengthwise and rinse out any grit. Add the rest of the oil to the pan and lay the leek in, cut side down, for 5 minutes on medium heat.',
          'Add the stock, cover and cook for about 15 minutes, until tender.',
          'Pour in the coconut milk, scrape up the bits from the pan and simmer for 2 minutes. Season, pour the sauce over the chicken and leeks, and finish with fresh tarragon.'
        ]
      },
      nl: {
        title: 'Kip met dragon en prei',
        subtitle: 'Gestoofde preihelften en een romige kokossaus',
        description: 'Een dunne kipfilet gebakken met dragon, met preihelften die gestoofd worden tot ze smelten en een snelle kokossaus uit de pan. Klassieke Franse smaken, zonder room.',
        instructions: [
          'Plet de kip tot zo\'n 1 cm dik en kruid met de gedroogde dragon, zout en peper.',
          'Verhit 1 eetlepel olie op middelhoog tot hoog vuur en bak de kip zo\'n 2 minuten per kant. Zet afgedekt opzij.',
          'Maak de prei schoon, snijd hem in de lengte doormidden en spoel het zand eruit. Doe de rest van de olie in de pan en leg de prei er met de snijkant naar onder in, 5 minuten op middelhoog vuur.',
          'Voeg de bouillon toe, leg het deksel erop en laat zo\'n 15 minuten garen tot hij zacht is.',
          'Giet de kokosmelk erbij, schraap de aanbaksels los en laat 2 minuten pruttelen. Kruid, giet de saus over de kip en prei en werk af met verse dragon.'
        ]
      },
      fr: {
        title: 'Poulet à l\'estragon et aux poireaux',
        subtitle: 'Des demi-poireaux braisés et une sauce coco onctueuse',
        description: 'Un blanc de poulet aplati doré à l\'estragon, avec des demi-poireaux braisés jusqu\'à être fondants et une sauce minute au lait de coco. Des saveurs françaises classiques, sans crème.',
        instructions: [
          'Aplatis le poulet à environ 1 cm et assaisonne-le avec l\'estragon séché, le sel et le poivre.',
          'Chauffe 1 cuillère à soupe d\'huile à feu moyen-vif et saisis le poulet environ 2 minutes par face. Réserve à couvert.',
          'Pare le poireau, fends-le en deux dans la longueur et rince bien. Ajoute le reste de l\'huile dans la poêle et pose le poireau face coupée vers le bas, 5 minutes à feu moyen.',
          'Ajoute le bouillon, couvre et cuis une quinzaine de minutes, jusqu\'à ce qu\'il soit tendre.',
          'Verse le lait de coco, déglace en grattant le fond et laisse frémir 2 minutes. Assaisonne, nappe le poulet et les poireaux de sauce et termine avec de l\'estragon frais.'
        ]
      }
    },
    ingredients: [
      ing('Chicken breast', 'Kipfilet', 'Blanc de poulet', 115, 'g'),
      ing('Dried tarragon', 'Gedroogde dragon', 'Estragon séché', 0.5, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Leek', 'Prei', 'Poireau', 1, 'st.'),
      ing('Chicken broth', 'Kippenbouillon', 'Bouillon de volaille', 120, 'ml'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 60, 'ml'),
      ing('Tarragon', 'Dragon', 'Estragon', 1, 'sprig'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'buffalo-cauliflower-florets',
    prepTime: '10 mins',
    cookTime: '25 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['snack'],
    translations: {
      en: {
        title: 'Buffalo Cauliflower',
        subtitle: 'Smoky roasted florets with a kefir ranch',
        description: 'Cauliflower tossed in smoked paprika and vinegar and roasted until the edges char, then drizzled with a cool, herby kefir ranch. Bar snack, candida-proof.',
        instructions: [
          'Heat the oven to 200 °C and oil a baking tray with a tablespoon of oil.',
          'Whisk the rest of the oil with a teaspoon of vinegar, the paprika, salt, onion powder and garlic powder in a large bowl. Toss the cauliflower in it for a minute or two.',
          'Spread it on the tray and roast for about 25 minutes, turning once, until tender and browned at the edges.',
          'Whisk the kefir, yogurt, the rest of the vinegar, chives and parsley into a ranch and season.',
          'Pile the cauliflower on a plate, scatter over celery, spring onion, parsley and chilli flakes, and drizzle with the ranch.'
        ]
      },
      nl: {
        title: 'Buffalo-bloemkool',
        subtitle: 'Rokerige geroosterde roosjes met een ranch van kefir',
        description: 'Bloemkool gemengd met gerookte paprika en azijn en geroosterd tot de randjes blakeren, met een frisse kruidige ranch van kefir erover. Cafésnack, candidaproof.',
        instructions: [
          'Verwarm de oven voor op 200 °C en vet een bakplaat in met een eetlepel olie.',
          'Klop de rest van de olie met een theelepel azijn, het paprikapoeder, zout, uienpoeder en lookpoeder in een grote kom. Meng de bloemkool er een minuutje of twee door.',
          'Spreid uit op de plaat en rooster zo\'n 25 minuten, één keer omdraaien, tot hij zacht is en bruin aan de randjes.',
          'Klop de kefir, yoghurt, de rest van de azijn, bieslook en peterselie tot een ranch en kruid.',
          'Leg de bloemkool op een bord, strooi er selder, lente-ui, peterselie en chilivlokken over en sprenkel de ranch erover.'
        ]
      },
      fr: {
        title: 'Chou-fleur façon buffalo',
        subtitle: 'Des bouquets rôtis et fumés, sauce ranch au kéfir',
        description: 'Du chou-fleur enrobé de paprika fumé et de vinaigre, rôti jusqu\'à ce que les bords noircissent, puis arrosé d\'une sauce ranch fraîche aux herbes et au kéfir. Un snack de bar, compatible candida.',
        instructions: [
          'Préchauffe le four à 200 °C et huile une plaque avec une cuillère à soupe d\'huile.',
          'Fouette le reste de l\'huile avec une cuillère à café de vinaigre, le paprika, le sel, la poudre d\'oignon et l\'ail en poudre dans un grand saladier. Enrobe le chou-fleur une minute ou deux.',
          'Étale-le sur la plaque et rôtis environ 25 minutes en retournant une fois, jusqu\'à ce qu\'il soit tendre et doré sur les bords.',
          'Fouette le kéfir, le yaourt, le reste du vinaigre, la ciboulette et le persil pour faire la ranch et assaisonne.',
          'Dresse le chou-fleur, parsème de céleri, d\'oignon nouveau, de persil et de piment, et arrose de ranch.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 3, 'el'),
      ing('Cauliflower', 'Bloemkool', 'Chou-fleur', 450, 'g'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 3, 'kl'),
      ing('Smoked paprika', 'Gerookte paprikapoeder', 'Paprika fumé', 2, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Onion powder', 'Uienpoeder', 'Poudre d\'oignon', 0.5, 'kl'),
      ing('Garlic powder', 'Lookpoeder', 'Ail en poudre', 0.25, 'kl'),
      ing('Celery stalks', 'Bladselder', 'Céleri branche', 1, 'st.'),
      ing('Spring onion', 'Lente-ui', 'Oignon nouveau', 1, 'st.'),
      ing('Parsley', 'Peterselie', 'Persil', 5, 'kl'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 1, 'pinch'),
      ing('Kefir', 'Kefir', 'Kéfir', 60, 'ml'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 60, 'ml'),
      ing('Chives', 'Bieslook', 'Ciboulette', 2, 'kl')
    ]
  },

  {
    slug: 'salmon-bowl-arugula-dressing',
    prepTime: '15 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['main'],
    translations: {
      en: {
        title: 'Salmon Bowl with Rocket Dressing',
        subtitle: 'Sage salmon, quinoa and a bright green sauce',
        description: 'Roasted salmon with green beans, yellow pepper and quinoa on rocket, under a peppery dressing made by blending more rocket with garlic, lemon and olive oil.',
        instructions: [
          'Heat the oven to 200 °C. Lay the salmon skin side down on an oiled tray, season with the sage, salt and pepper and roast for about 12 minutes.',
          'Blanch the green beans in boiling salted water for 2 minutes, then cool them under cold water.',
          'For the dressing, pulse the rocket and garlic in a food processor until fine, add the lemon juice and blend, then pour in the olive oil with the motor running. Thin with a little water if needed and season.',
          'Layer rocket and quinoa in a bowl, add the salmon, beans and yellow pepper, drizzle with the dressing and finish with blueberries and pumpkin seeds.'
        ]
      },
      nl: {
        title: 'Zalmbowl met rucoladressing',
        subtitle: 'Zalm met salie, quinoa en een felgroene saus',
        description: 'Geroosterde zalm met sperziebonen, gele paprika en quinoa op rucola, onder een pittige dressing van nog meer rucola gemixt met look, citroen en olijfolie.',
        instructions: [
          'Verwarm de oven voor op 200 °C. Leg de zalm met het vel naar onder op een ingevette bakplaat, kruid met salie, zout en peper en rooster zo\'n 12 minuten.',
          'Blancheer de boontjes 2 minuten in kokend gezouten water en laat ze afkoelen onder koud water.',
          'Voor de dressing hak je de rucola en look fijn in de keukenrobot, voeg je het citroensap toe en mix je, en giet je de olijfolie erbij terwijl hij draait. Verdun met wat water als het nodig is en kruid.',
          'Leg rucola en quinoa in een kom, voeg de zalm, boontjes en gele paprika toe, sprenkel de dressing erover en werk af met blauwe bessen en pompoenpitten.'
        ]
      },
      fr: {
        title: 'Bol de saumon, sauce à la roquette',
        subtitle: 'Saumon à la sauge, quinoa et une sauce vert vif',
        description: 'Du saumon rôti avec des haricots verts, du poivron jaune et du quinoa sur de la roquette, sous une sauce poivrée faite de roquette mixée avec ail, citron et huile d\'olive.',
        instructions: [
          'Préchauffe le four à 200 °C. Pose le saumon côté peau sur une plaque huilée, assaisonne avec la sauge, le sel et le poivre et rôtis une douzaine de minutes.',
          'Blanchis les haricots 2 minutes dans de l\'eau bouillante salée, puis refroidis-les sous l\'eau froide.',
          'Pour la sauce, hache finement la roquette et l\'ail au robot, ajoute le jus de citron et mixe, puis verse l\'huile d\'olive moteur en marche. Allonge d\'un peu d\'eau si besoin et assaisonne.',
          'Dispose roquette et quinoa dans un bol, ajoute le saumon, les haricots et le poivron jaune, arrose de sauce et termine avec des myrtilles et des graines de courge.'
        ]
      }
    },
    ingredients: [
      ing('Salmon fillet', 'Zalmfilet', 'Filet de saumon', 115, 'g'),
      ing('Dried sage', 'Gedroogde salie', 'Sauge séchée', 0.25, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 5, 'el'),
      ing('Green beans', 'Sperziebonen', 'Haricots verts', 55, 'g'),
      ing('Cooked quinoa', 'Gekookte quinoa', 'Quinoa cuit', 90, 'g'),
      ing('Arugula', 'Rucola', 'Roquette', 60, 'g'),
      ing('Yellow bell pepper', 'Gele paprika', 'Poivron jaune', 55, 'g'),
      ing('Blueberries', 'Blauwe bessen', 'Myrtilles', 20, 'g'),
      ing('Pumpkin seeds', 'Pompoenpitten', 'Graines de courge', 1, 'el'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1.5, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'buckwheat-soba-noodle-bowl',
    prepTime: '15 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main'],
    translations: {
      en: {
        title: 'Soba Noodle Bowl',
        subtitle: 'Buckwheat noodles under stir-fried vegetables',
        description: 'Soba noodles with a touch of sesame oil, topped with courgette, squash, celery, pepper and shiitake fried until just browning. Check the packet: for candida you want 100% buckwheat soba.',
        instructions: [
          'Cook the soba as the packet says, drain and toss with the sesame oil.',
          'Heat the oil in a large frying pan over medium heat.',
          'Add the shallot, squash, courgette, celery, pepper, shiitake and a pinch of salt and fry for 6–8 minutes, until softened and just starting to brown.',
          'Divide the noodles over two bowls, pile the vegetables on top and finish with coriander, sesame seeds and a splash of coconut aminos.'
        ]
      },
      nl: {
        title: 'Sobanoedelbowl',
        subtitle: 'Boekweitnoedels onder geroerbakte groenten',
        description: 'Sobanoedels met een vleugje sesamolie, met courgette, gele courgette, selder, paprika en shiitake gebakken tot ze net kleuren. Kijk op de verpakking: voor candida wil je soba van 100% boekweit.',
        instructions: [
          'Kook de soba zoals op de verpakking staat, giet af en meng met de sesamolie.',
          'Verhit de olie in een grote pan op middelhoog vuur.',
          'Voeg de sjalot, gele courgette, courgette, selder, paprika, shiitake en een snuifje zout toe en bak 6–8 minuten, tot alles zacht is en net begint te kleuren.',
          'Verdeel de noedels over twee kommen, schep de groenten erop en werk af met koriander, sesamzaad en een scheutje kokosaminos.'
        ]
      },
      fr: {
        title: 'Bol de nouilles soba',
        subtitle: 'Des nouilles de sarrasin sous des légumes sautés',
        description: 'Des nouilles soba avec une touche d\'huile de sésame, garnies de courgette, de courge, de céleri, de poivron et de shiitakés sautés jusqu\'à dorer légèrement. Vérifie le paquet : pour le candida, il faut des soba 100 % sarrasin.',
        instructions: [
          'Cuis les soba comme indiqué sur le paquet, égoutte et mélange avec l\'huile de sésame.',
          'Chauffe l\'huile dans une grande poêle à feu moyen.',
          'Ajoute l\'échalote, la courge, la courgette, le céleri, le poivron, les shiitakés et une pincée de sel et fais sauter 6–8 minutes, jusqu\'à ce que ce soit tendre et commence à dorer.',
          'Répartis les nouilles dans deux bols, dépose les légumes dessus et termine avec de la coriandre, du sésame et un trait d\'aminos de coco.'
        ]
      }
    },
    ingredients: [
      ing('Buckwheat soba noodles', 'Boekweit-sobanoedels', 'Nouilles soba au sarrasin', 115, 'g'),
      ing('Sesame oil', 'Sesamolie', 'Huile de sésame', 0.5, 'kl'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 2, 'el'),
      ing('Shallot', 'Sjalot', 'Échalote', 1, 'st.'),
      ing('Yellow squash', 'Gele courgette', 'Courgette jaune', 1, 'st.'),
      ing('Zucchini', 'Courgette', 'Courgette', 1, 'st.'),
      ing('Celery stalks', 'Bladselder', 'Céleri branche', 1, 'st.'),
      ing('Yellow bell pepper', 'Gele paprika', 'Poivron jaune', 40, 'g'),
      ing('Shiitake mushrooms', 'Shiitakes', 'Champignons shiitake', 5, 'st.'),
      ing('Salt', 'Zout', 'Sel', 1, 'pinch'),
      ing('Coriander', 'Koriander', 'Coriandre', 2, 'el'),
      ing('Sesame seeds', 'Sesamzaad', 'Graines de sésame', 1, 'el'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 1, 'el')
    ]
  },

  {
    slug: 'asian-steak-kebabs',
    prepTime: '1 hr 15 mins',
    cookTime: '15 mins',
    difficulty: diff.medium,
    servings: 6,
    category: ['main'],
    translations: {
      en: {
        title: 'Asian Steak Skewers',
        subtitle: 'Coconut aminos, sesame and chilli, off the grill',
        description: 'Cubes of steak marinated in coconut aminos, sesame, garlic and chilli, grilled on skewers and served in crisp lettuce leaves. Barbecue food without the sugary sauce.',
        instructions: [
          'Whisk the coconut aminos, water, sesame oil, stevia, garlic, spring onion, sesame seeds and chilli flakes together.',
          'Toss the steak in the marinade in a dish and leave it in the fridge for at least 2 hours, or up to a day. Soak the skewers in water for 30 minutes.',
          'Heat a grill or griddle to medium-high. Thread the steak onto the skewers.',
          'Grill on an oiled grate for 3–4 minutes a side.',
          'Serve on lettuce leaves with sliced radicchio, spring onion and sesame seeds, with a little coconut aminos and chilli for dipping.'
        ]
      },
      nl: {
        title: 'Aziatische steakspiesjes',
        subtitle: 'Kokosaminos, sesam en chili, van de grill',
        description: 'Blokjes steak gemarineerd in kokosaminos, sesam, look en chili, aan spiesjes gegrild en opgediend in knapperige slablaadjes. Barbecue zonder suikerrijke saus.',
        instructions: [
          'Klop de kokosaminos, het water, de sesamolie, stevia, look, lente-ui, sesamzaad en chilivlokken samen.',
          'Meng de steak met de marinade in een schaal en laat minstens 2 uur, of tot een dag, in de koelkast staan. Week de spiesjes 30 minuten in water.',
          'Verwarm een grill of grillpan op middelhoog tot hoog vuur. Rijg de steak aan de spiesjes.',
          'Grill 3–4 minuten per kant op een ingevet rooster.',
          'Dien op in slablaadjes met fijngesneden radicchio, lente-ui en sesamzaad, met wat kokosaminos en chili om in te dippen.'
        ]
      },
      fr: {
        title: 'Brochettes de bœuf à l\'asiatique',
        subtitle: 'Aminos de coco, sésame et piment, au gril',
        description: 'Des cubes de bœuf marinés dans les aminos de coco, le sésame, l\'ail et le piment, grillés en brochettes et servis dans des feuilles de laitue croquantes. Un barbecue sans sauce sucrée.',
        instructions: [
          'Fouette ensemble les aminos de coco, l\'eau, l\'huile de sésame, la stévia, l\'ail, l\'oignon nouveau, le sésame et le piment.',
          'Mélange le bœuf avec la marinade dans un plat et laisse au frigo au moins 2 heures, ou jusqu\'à un jour. Fais tremper les brochettes 30 minutes dans l\'eau.',
          'Chauffe un gril ou une poêle-gril à feu moyen-vif. Enfile le bœuf sur les brochettes.',
          'Grille 3–4 minutes par face sur une grille huilée.',
          'Sers sur des feuilles de laitue avec du radicchio émincé, de l\'oignon nouveau et du sésame, avec un peu d\'aminos de coco et de piment pour tremper.'
        ]
      }
    },
    ingredients: [
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 80, 'ml'),
      ing('Water', 'Water', 'Eau', 2, 'el'),
      ing('Sesame oil', 'Sesamolie', 'Huile de sésame', 1, 'el'),
      ing('Liquid stevia', 'Vloeibare stevia', 'Stévia liquide', 6, 'drops'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 4, 'st.'),
      ing('Sesame seeds', 'Sesamzaad', 'Graines de sésame', 2, 'el'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 1, 'kl'),
      ing('Beef steak', 'Rundersteak', 'Steak de bœuf', 900, 'g'),
      ing('Romaine lettuce', 'Romainesla', 'Laitue romaine', 1, 'head'),
      ing('Radicchio', 'Radicchio', 'Radicchio', 0.5, 'head')
    ]
  },

  {
    slug: 'mediterranean-zucchini-dip',
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['snack'],
    translations: {
      en: {
        title: 'Courgette Yogurt Dip',
        subtitle: 'Soft courgette blended with lemon, herbs and yogurt',
        description: 'Grated courgette cooked down with onion and garlic, cooled and blended with Greek yogurt, coriander, lemon and fresh herbs. Lovely with crackers or raw vegetables.',
        instructions: [
          'Heat the oil in a large frying pan over medium heat. Add the courgette, onion and salt, cover and cook for 10 minutes, stirring halfway.',
          'Uncover, add the garlic and pepper and cook for 30 seconds more.',
          'Take it off the heat and let it cool to room temperature, about an hour.',
          'Blend the cooled vegetables with the ground coriander, lemon zest and juice, herbs and yogurt until smooth.'
        ]
      },
      nl: {
        title: 'Courgette-yoghurtdip',
        subtitle: 'Zachte courgette gemixt met citroen, kruiden en yoghurt',
        description: 'Geraspte courgette zacht gestoofd met ui en look, afgekoeld en gemixt met Griekse yoghurt, koriander, citroen en verse kruiden. Heerlijk met crackers of rauwe groenten.',
        instructions: [
          'Verhit de olie in een grote pan op middelhoog vuur. Voeg de courgette, ui en zout toe, leg het deksel erop en laat 10 minuten stoven, halverwege omroeren.',
          'Haal het deksel eraf, voeg de look en peper toe en bak nog 30 seconden.',
          'Haal van het vuur en laat afkoelen tot kamertemperatuur, zo\'n uur.',
          'Mix de afgekoelde groenten met de korianderpoeder, citroenzeste en -sap, kruiden en yoghurt tot het glad is.'
        ]
      },
      fr: {
        title: 'Dip de courgette au yaourt',
        subtitle: 'De la courgette fondante mixée avec citron, herbes et yaourt',
        description: 'De la courgette râpée fondue avec de l\'oignon et de l\'ail, refroidie et mixée avec du yaourt grec, de la coriandre, du citron et des herbes fraîches. Délicieux avec des crackers ou des crudités.',
        instructions: [
          'Chauffe l\'huile dans une grande poêle à feu moyen. Ajoute la courgette, l\'oignon et le sel, couvre et cuis 10 minutes en remuant à mi-cuisson.',
          'Découvre, ajoute l\'ail et le poivre et poursuis 30 secondes.',
          'Retire du feu et laisse refroidir à température ambiante, environ une heure.',
          'Mixe les légumes refroidis avec la coriandre moulue, le zeste et le jus de citron, les herbes et le yaourt jusqu\'à ce que ce soit lisse.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Zucchini', 'Courgette', 'Courgette', 2, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 40, 'g'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Ground coriander', 'Korianderpoeder', 'Coriandre moulue', 0.25, 'kl'),
      ing('Lemon zest', 'Citroenzeste', 'Zeste de citron', 0.5, 'kl'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Mint', 'Munt', 'Menthe', 1, 'el'),
      ing('Greek yogurt', 'Griekse yoghurt', 'Yaourt grec', 60, 'ml'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'kimchi-meatballs',
    prepTime: '10 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 6,
    category: ['snack', 'main'],
    translations: {
      en: {
        title: 'Kimchi Meatball Bites',
        subtitle: 'On cucumber and radish, with a sesame drizzle',
        description: 'Turkey meatballs with kimchi, ginger and sesame, each one perched on a slice of cucumber and radish. A party bite that happens to be good for your gut.',
        instructions: [
          'Heat the oven to 200 °C and oil a baking tray with the olive oil.',
          'Mix the turkey with the spring onion, garlic, coriander, egg yolk, a teaspoon of sesame oil, ginger, salt, pepper and kimchi.',
          'Roll into 24 meatballs and space them out on the tray. Bake for 20 minutes and let them cool a little.',
          'Whisk the coconut aminos with the rest of the sesame oil.',
          'Lay a radish slice on each cucumber slice, top with a meatball, drizzle with the sauce and finish with sesame seeds and coriander.'
        ]
      },
      nl: {
        title: 'Kimchiballetjes als hapje',
        subtitle: 'Op komkommer en radijs, met een sesamsausje',
        description: 'Kalkoenballetjes met kimchi, gember en sesam, elk op een schijfje komkommer en radijs. Een feesthapje dat toevallig goed is voor je darmen.',
        instructions: [
          'Verwarm de oven voor op 200 °C en vet een bakplaat in met de olijfolie.',
          'Meng het kalkoengehakt met de lente-ui, look, koriander, eidooier, een theelepel sesamolie, gember, zout, peper en kimchi.',
          'Rol er 24 balletjes van en leg ze verspreid op de plaat. Bak 20 minuten en laat ze een beetje afkoelen.',
          'Klop de kokosaminos los met de rest van de sesamolie.',
          'Leg een schijfje radijs op elk schijfje komkommer, zet er een balletje op, sprenkel er saus over en werk af met sesamzaad en koriander.'
        ]
      },
      fr: {
        title: 'Bouchées de boulettes au kimchi',
        subtitle: 'Sur concombre et radis, avec un filet de sésame',
        description: 'Des boulettes de dinde au kimchi, au gingembre et au sésame, posées chacune sur une rondelle de concombre et de radis. Une bouchée d\'apéro qui fait aussi du bien au ventre.',
        instructions: [
          'Préchauffe le four à 200 °C et huile une plaque avec l\'huile d\'olive.',
          'Mélange la dinde avec l\'oignon nouveau, l\'ail, la coriandre, le jaune d\'œuf, une cuillère à café d\'huile de sésame, le gingembre, le sel, le poivre et le kimchi.',
          'Forme 24 boulettes et espace-les sur la plaque. Enfourne 20 minutes et laisse tiédir.',
          'Fouette les aminos de coco avec le reste de l\'huile de sésame.',
          'Pose une rondelle de radis sur chaque rondelle de concombre, ajoute une boulette, arrose de sauce et termine avec du sésame et de la coriandre.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Ground turkey', 'Kalkoengehakt', 'Dinde hachée', 450, 'g'),
      ing('Spring onions', 'Lente-uitjes', 'Oignons nouveaux', 2, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Coriander', 'Koriander', 'Coriandre', 3, 'el'),
      ing('Egg yolk', 'Eidooier', 'Jaune d\'oeuf', 1, 'st.'),
      ing('Sesame oil', 'Sesamolie', 'Huile de sésame', 2.5, 'el'),
      ing('Fresh ginger', 'Verse gember', 'Gingembre frais', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.5, 'kl'),
      ing('Kimchi', 'Kimchi', 'Kimchi', 3, 'el'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 2, 'el'),
      ing('Cucumber', 'Komkommer', 'Concombre', 0.5, 'st.'),
      ing('Radishes', 'Radijsjes', 'Radis', 4, 'st.'),
      ing('Sesame seeds', 'Sesamzaad', 'Graines de sésame', 1, 'el')
    ]
  }
];
