// Candida-diet dishes, batch 10. See candida_recipes.js for how these were made.

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });
const diff = {
  easy: { en: 'Easy', nl: 'Makkelijk', fr: 'Facile' },
  medium: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' }
};

module.exports = [
  {
    slug: 'artichoke-hummus',
    prepTime: '10 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['snack'],
    translations: {
      en: {
        title: 'Artichoke Hummus',
        subtitle: 'Ten minutes, one food processor',
        description: 'Artichoke hearts blended with tahini, lemon, garlic and cumin into a creamy, chickpea-free hummus. Finish it with good olive oil and fresh herbs.',
        instructions: [
          'Pulse the artichokes and garlic in a food processor until roughly chopped.',
          'Add 2 tablespoons of olive oil, the lemon juice, tahini and cumin and blend until smooth.',
          'Season with salt and pepper.',
          'Just before serving, drizzle over the last tablespoon of oil and scatter with herbs.'
        ]
      },
      nl: {
        title: 'Artisjokhummus',
        subtitle: 'Tien minuten, één keukenrobot',
        description: 'Artisjokharten gemixt met tahin, citroen, look en komijn tot een romige hummus zonder kikkererwten. Werk af met goede olijfolie en verse kruiden.',
        instructions: [
          'Hak de artisjokken en look grof in de keukenrobot.',
          'Voeg 2 eetlepels olijfolie, het citroensap, de tahin en komijn toe en mix glad.',
          'Breng op smaak met zout en peper.',
          'Sprenkel vlak voor het opdienen de laatste eetlepel olie erover en strooi er kruiden op.'
        ]
      },
      fr: {
        title: 'Houmous d\'artichaut',
        subtitle: 'Dix minutes, un robot',
        description: 'Des cœurs d\'artichaut mixés avec du tahini, du citron, de l\'ail et du cumin en un houmous crémeux sans pois chiches. À finir avec une bonne huile d\'olive et des herbes fraîches.',
        instructions: [
          'Hache grossièrement les artichauts et l\'ail au robot.',
          'Ajoute 2 cuillères à soupe d\'huile d\'olive, le jus de citron, le tahini et le cumin et mixe jusqu\'à ce que ce soit lisse.',
          'Sale et poivre.',
          'Juste avant de servir, arrose de la dernière cuillère d\'huile et parsème d\'herbes.'
        ]
      }
    },
    ingredients: [
      ing('Artichoke hearts', 'Artisjokharten', 'Cœurs d\'artichaut', 400, 'g'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 3, 'el'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Tahini', 'Tahin', 'Tahini', 60, 'g'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 0.25, 'kl'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'coconut-flour-crackers-grissini',
    prepTime: '20 mins',
    cookTime: '20 mins',
    difficulty: diff.medium,
    servings: 8,
    category: ['snack'],
    translations: {
      en: {
        title: 'Coconut Flour Crackers & Grissini',
        subtitle: 'Five ingredients, seventy crackers',
        description: 'A coconut and flax dough rolled out, cut into little squares and baked crisp, with the offcuts rolled into breadsticks so nothing goes to waste.',
        instructions: [
          'Heat the oven to 180 °C.',
          'Sift the coconut flour and whisk in the flaxseed and salt. Whisk the melted coconut oil with the coconut milk and stir it into the dry mix until it forms a dough.',
          'Roll it out between two sheets of baking paper to about 5 mm thick and 33–35 cm square.',
          'Cut into 4 cm squares and roll the scraps into thin grissini.',
          'Bake for 10 minutes and take out the outer crackers that have browned. Bake about 10 minutes more, picking out the rest as they turn golden. Let them cool completely.'
        ]
      },
      nl: {
        title: 'Crackers en grissini van kokosmeel',
        subtitle: 'Vijf ingrediënten, zeventig crackers',
        description: 'Een deeg van kokos en lijnzaad uitgerold, in vierkantjes gesneden en krokant gebakken, met de restjes opgerold tot soepstengels zodat er niets verloren gaat.',
        instructions: [
          'Verwarm de oven voor op 180 °C.',
          'Zeef het kokosmeel en klop het lijnzaad en zout erdoor. Klop de gesmolten kokosolie met de kokosmelk en roer door het droge mengsel tot het een deeg wordt.',
          'Rol uit tussen twee vellen bakpapier tot zo\'n 5 mm dik en 33–35 cm in het vierkant.',
          'Snijd in vierkantjes van 4 cm en rol de restjes tot dunne grissini.',
          'Bak 10 minuten en haal de buitenste crackers eruit die al gekleurd zijn. Bak nog zo\'n 10 minuten en haal de rest eruit zodra ze goudbruin worden. Laat volledig afkoelen.'
        ]
      },
      fr: {
        title: 'Crackers et gressins à la farine de coco',
        subtitle: 'Cinq ingrédients, soixante-dix crackers',
        description: 'Une pâte à la coco et au lin étalée, découpée en petits carrés et cuite croustillante, avec les chutes roulées en gressins pour ne rien perdre.',
        instructions: [
          'Préchauffe le four à 180 °C.',
          'Tamise la farine de coco et ajoute le lin et le sel en fouettant. Fouette l\'huile de coco fondue avec le lait de coco et incorpore au sec jusqu\'à obtenir une pâte.',
          'Étale-la entre deux feuilles de papier cuisson sur environ 5 mm d\'épaisseur et un carré de 33–35 cm.',
          'Découpe en carrés de 4 cm et roule les chutes en fins gressins.',
          'Enfourne 10 minutes et retire les crackers extérieurs déjà dorés. Poursuis une dizaine de minutes en retirant les autres au fur et à mesure qu\'ils dorent. Laisse refroidir complètement.'
        ]
      }
    },
    ingredients: [
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 60, 'g'),
      ing('Flaxseed meal', 'Gemalen lijnzaad', 'Graines de lin moulues', 30, 'g'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 60, 'ml'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 120, 'ml')
    ]
  },

  {
    slug: 'pumpkin-seed-oat-biscuits',
    prepTime: '15 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 6,
    category: ['snack'],
    translations: {
      en: {
        title: 'Pumpkin Seed & Oat Bran Biscuits',
        subtitle: 'Savoury, with thyme and a pinch of cayenne',
        description: 'Crumbly savoury biscuits of oat bran, ground pumpkin seeds and almond flour, seasoned with thyme and cayenne. Good with cheese, soup or just a cup of tea.',
        instructions: [
          'Heat the oven to 200 °C and line a baking tray with baking paper.',
          'Blitz the oat bran and all but a tablespoon of the pumpkin seeds in a food processor for about 30 seconds. Add the almond flour, arrowroot, salt, cayenne and thyme and blitz for 10 seconds more.',
          'Rub in the cold butter until it looks like crumbs, then add the almond milk to make a dough. Mix in the last tablespoon of pumpkin seeds.',
          'Roll it out between two sheets of baking paper to about 5 mm and cut out rounds.',
          'Bake for about 15 minutes, until the edges just start to brown. Let them cool completely and keep them in an airtight tin.'
        ]
      },
      nl: {
        title: 'Hartige koekjes van haverzemelen en pompoenpitten',
        subtitle: 'Hartig, met tijm en een snuifje cayenne',
        description: 'Kruimelige hartige koekjes van haverzemelen, gemalen pompoenpitten en amandelmeel, gekruid met tijm en cayenne. Lekker bij kaas, soep of gewoon een kopje thee.',
        instructions: [
          'Verwarm de oven voor op 200 °C en bekleed een bakplaat met bakpapier.',
          'Mix de haverzemelen en alle pompoenpitten op een eetlepel na zo\'n 30 seconden in de keukenrobot. Voeg het amandelmeel, de pijlwortel, het zout, de cayenne en tijm toe en mix nog 10 seconden.',
          'Wrijf de koude boter erdoor tot het op kruimels lijkt en voeg dan de amandelmelk toe voor een deeg. Meng de laatste eetlepel pompoenpitten erdoor.',
          'Rol uit tussen twee vellen bakpapier tot zo\'n 5 mm en steek er rondjes uit.',
          'Bak zo\'n 15 minuten, tot de randjes net beginnen te kleuren. Laat helemaal afkoelen en bewaar in een luchtdichte doos.'
        ]
      },
      fr: {
        title: 'Biscuits au son d\'avoine et aux graines de courge',
        subtitle: 'Salés, au thym et à une pincée de cayenne',
        description: 'Des biscuits salés et friables au son d\'avoine, aux graines de courge moulues et à la farine d\'amande, assaisonnés de thym et de cayenne. Parfaits avec du fromage, une soupe ou simplement un thé.',
        instructions: [
          'Préchauffe le four à 200 °C et garnis une plaque de papier cuisson.',
          'Mixe le son d\'avoine et les graines de courge, sauf une cuillère à soupe, environ 30 secondes. Ajoute la farine d\'amande, l\'arrow-root, le sel, le cayenne et le thym et mixe encore 10 secondes.',
          'Incorpore le beurre froid du bout des doigts jusqu\'à obtenir un sable, puis ajoute le lait d\'amande pour former une pâte. Ajoute la dernière cuillère de graines de courge.',
          'Étale entre deux feuilles de papier cuisson sur environ 5 mm et découpe des ronds.',
          'Enfourne environ 15 minutes, jusqu\'à ce que les bords commencent à dorer. Laisse refroidir complètement et garde dans une boîte hermétique.'
        ]
      }
    },
    ingredients: [
      ing('Oat bran', 'Haverzemelen', 'Son d\'avoine', 65, 'g'),
      ing('Pumpkin seeds', 'Pompoenpitten', 'Graines de courge', 45, 'g'),
      ing('Almond flour', 'Amandelmeel', 'Farine d\'amande', 35, 'g'),
      ing('Arrowroot powder', 'Pijlwortelpoeder', 'Arrow-root', 40, 'g'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl'),
      ing('Cayenne pepper', 'Cayennepeper', 'Piment de Cayenne', 1, 'pinch'),
      ing('Dried thyme', 'Gedroogde tijm', 'Thym séché', 0.5, 'kl'),
      ing('Butter', 'Boter', 'Beurre', 55, 'g'),
      ing('Almond milk', 'Amandelmelk', 'Lait d\'amande', 60, 'ml')
    ]
  },

  {
    slug: 'hazelnut-butter-bars',
    prepTime: '30 mins',
    cookTime: '20 mins',
    difficulty: diff.medium,
    servings: 9,
    category: ['dessert', 'snack'],
    translations: {
      en: {
        title: 'Hazelnut Butter Bars',
        subtitle: 'Fudgy, nutty and flourless',
        description: 'Dense, moist bars made from homemade hazelnut butter, avocado and a little applesauce, sweetened with stevia and topped with toasted hazelnuts.',
        instructions: [
          'For the hazelnut butter, roast the hazelnuts at 180 °C for 10–15 minutes, rub off the skins in a tea towel and blend for 6–8 minutes until smooth. You need about 250 g; keep the rest for toast.',
          'Let all the ingredients come to room temperature. Heat the oven to 180 °C and oil and line a 20 × 20 cm tin.',
          'Whisk the eggs with the stevia and vanilla until pale and frothy.',
          'Blend the hazelnut butter, avocado, applesauce, coconut oil, baking soda and salt until smooth, then briefly blend in the egg mixture.',
          'Pour into the tin, scatter with the chopped hazelnuts and bake for 20 minutes. Let it cool completely before cutting into 9 bars.'
        ]
      },
      nl: {
        title: 'Hazelnootrepen',
        subtitle: 'Smeuïg, nootachtig en zonder bloem',
        description: 'Dichte, smeuïge repen van zelfgemaakte hazelnootpasta, avocado en een beetje appelmoes, gezoet met stevia en met geroosterde hazelnoten erop.',
        instructions: [
          'Voor de hazelnootpasta rooster je de hazelnoten 10–15 minuten op 180 °C, wrijf je de velletjes eraf in een keukenhanddoek en mix je 6–8 minuten tot het glad is. Je hebt er zo\'n 250 g van nodig; de rest is voor op je boterham.',
          'Laat alle ingrediënten op kamertemperatuur komen. Verwarm de oven voor op 180 °C en vet een vorm van 20 × 20 cm in en bekleed hem.',
          'Klop de eieren met de stevia en vanille bleek en schuimig.',
          'Mix de hazelnootpasta, avocado, appelmoes, kokosolie, het zuiveringszout en zout glad en mix er kort het eiermengsel door.',
          'Giet in de vorm, strooi er de gehakte hazelnoten over en bak 20 minuten. Laat helemaal afkoelen voor je in 9 repen snijdt.'
        ]
      },
      fr: {
        title: 'Barres à la pâte de noisette',
        subtitle: 'Fondantes, gourmandes et sans farine',
        description: 'Des barres denses et moelleuses à base de purée de noisette maison, d\'avocat et d\'un peu de compote, sucrées à la stévia et couvertes de noisettes grillées.',
        instructions: [
          'Pour la purée de noisette, grille les noisettes à 180 °C 10–15 minutes, frotte-les dans un torchon pour retirer les peaux et mixe 6–8 minutes jusqu\'à ce que ce soit lisse. Il t\'en faut environ 250 g ; garde le reste pour tes tartines.',
          'Laisse tous les ingrédients venir à température ambiante. Préchauffe le four à 180 °C et huile et chemise un moule de 20 × 20 cm.',
          'Fouette les œufs avec la stévia et la vanille jusqu\'à ce qu\'ils pâlissent et moussent.',
          'Mixe la purée de noisette, l\'avocat, la compote, l\'huile de coco, le bicarbonate et le sel jusqu\'à ce que ce soit lisse, puis ajoute brièvement le mélange aux œufs.',
          'Verse dans le moule, parsème de noisettes hachées et enfourne 20 minutes. Laisse refroidir complètement avant de couper 9 barres.'
        ]
      }
    },
    ingredients: [
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Stevia', 'Stevia', 'Stévia', 1, 'kl'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 1, 'kl'),
      ing('Hazelnuts', 'Hazelnoten', 'Noisettes', 400, 'g'),
      ing('Avocado', 'Avocado', 'Avocat', 1, 'st.'),
      ing('Unsweetened applesauce', 'Appelmoes zonder suiker', 'Compote de pommes sans sucre', 80, 'ml'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 60, 'ml'),
      ing('Baking soda', 'Zuiveringszout', 'Bicarbonate de soude', 0.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl')
    ]
  },

  {
    slug: 'sesame-cauliflower-rounds',
    prepTime: '15 mins',
    cookTime: '1 hr',
    difficulty: diff.medium,
    servings: 10,
    category: ['snack'],
    translations: {
      en: {
        title: 'Sesame Cauliflower Crisps',
        subtitle: 'Slow-baked rounds coated in sesame',
        description: 'A dough of riced cauliflower, flax, chia and sesame, chilled, rolled in sesame seeds and slow-baked into crunchy little rounds. Plan ahead: the dough needs a few hours in the fridge.',
        instructions: [
          'Pulse the cauliflower in a food processor until it looks like rice.',
          'Add the flaxseed, chia, 50 g of the sesame seeds, salt, coconut oil and water and blend into a ball of dough. Chill it for 3–4 hours until firm.',
          'Heat the oven to 150 °C and line a baking tray with baking paper.',
          'Roll rounded teaspoons of dough into balls, roll them in the rest of the sesame seeds and space them well apart. Flatten each one to 5–8 cm.',
          'Bake for 30 minutes, flip, and bake 30 minutes more, until dry in the middle. Let them cool completely.'
        ]
      },
      nl: {
        title: 'Krokante bloemkoolrondjes met sesam',
        subtitle: 'Langzaam gebakken rondjes in een jasje van sesam',
        description: 'Een deeg van fijngehakte bloemkool, lijnzaad, chia en sesam, opgesteven in de koelkast, door sesamzaad gerold en langzaam krokant gebakken. Plan op voorhand: het deeg moet een paar uur in de koelkast.',
        instructions: [
          'Hak de bloemkool in de keukenrobot tot hij op rijst lijkt.',
          'Voeg het lijnzaad, de chia, 50 g van het sesamzaad, het zout, de kokosolie en het water toe en mix tot een deegbal. Laat 3–4 uur opstijven in de koelkast.',
          'Verwarm de oven voor op 150 °C en bekleed een bakplaat met bakpapier.',
          'Rol bolle theelepels deeg tot balletjes, rol ze door de rest van het sesamzaad en leg ze ver uit elkaar. Druk elk balletje plat tot 5–8 cm.',
          'Bak 30 minuten, draai om en bak nog 30 minuten, tot ze in het midden droog zijn. Laat helemaal afkoelen.'
        ]
      },
      fr: {
        title: 'Galettes croustillantes chou-fleur et sésame',
        subtitle: 'Des ronds cuits lentement, enrobés de sésame',
        description: 'Une pâte de chou-fleur haché, de lin, de chia et de sésame, raffermie au frais, roulée dans le sésame et cuite lentement en petits ronds croquants. Prévois à l\'avance : la pâte doit passer quelques heures au frigo.',
        instructions: [
          'Mixe le chou-fleur par à-coups jusqu\'à ce qu\'il ressemble à du riz.',
          'Ajoute le lin, le chia, 50 g de sésame, le sel, l\'huile de coco et l\'eau et mixe en boule de pâte. Mets-la 3–4 heures au frais pour qu\'elle raffermisse.',
          'Préchauffe le four à 150 °C et garnis une plaque de papier cuisson.',
          'Forme des boules d\'une cuillère à café bombée, roule-les dans le reste du sésame et espace-les bien. Aplatis chacune à 5–8 cm.',
          'Enfourne 30 minutes, retourne et poursuis 30 minutes, jusqu\'à ce que le centre soit sec. Laisse refroidir complètement.'
        ]
      }
    },
    ingredients: [
      ing('Cauliflower', 'Bloemkool', 'Chou-fleur', 400, 'g'),
      ing('Flaxseed meal', 'Gemalen lijnzaad', 'Graines de lin moulues', 30, 'g'),
      ing('Chia seeds', 'Chiazaad', 'Graines de chia', 2, 'el'),
      ing('Sesame seeds', 'Sesamzaad', 'Graines de sésame', 190, 'g'),
      ing('Salt', 'Zout', 'Sel', 1, 'kl'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 3, 'el'),
      ing('Water', 'Water', 'Eau', 80, 'ml')
    ]
  },

  {
    slug: 'cauliflower-salmon-bites',
    prepTime: '20 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 6,
    category: ['snack'],
    translations: {
      en: {
        title: 'Cauliflower Salmon Bites',
        subtitle: 'Little baked mouthfuls for a party',
        description: 'Mini bites of roasted cauliflower purée, flaked salmon, fennel and shallot set with egg and baked in a mini-muffin tin. Serve them with a dot of yogurt and a fennel frond.',
        instructions: [
          'Heat the oven to 180 °C and brush a mini-muffin tin with oil.',
          'Soften the fennel and shallot in the oil with the salt and pepper over medium heat for 2–3 minutes.',
          'Mix the cauliflower purée with the salmon, fennel fronds, the softened fennel and shallot, nutmeg and eggs.',
          'Spoon a rounded tablespoon into each hole and bake for about 20 minutes, until golden.',
          'Let them cool and serve with a little yogurt and a fennel frond on each.'
        ]
      },
      nl: {
        title: 'Hapjes van bloemkool en zalm',
        subtitle: 'Kleine gebakken hapjes voor een feestje',
        description: 'Mini-hapjes van geroosterde bloemkoolpuree, gevlokte zalm, venkel en sjalot, gebonden met ei en gebakken in een minimuffinvorm. Lekker met een toefje yoghurt en een sprietje venkelgroen.',
        instructions: [
          'Verwarm de oven voor op 180 °C en bestrijk een minimuffinvorm met olie.',
          'Stoof de venkel en sjalot 2–3 minuten in de olie met het zout en de peper op middelhoog vuur.',
          'Meng de bloemkoolpuree met de zalm, het venkelgroen, de gestoofde venkel en sjalot, nootmuskaat en eieren.',
          'Schep een bolle eetlepel in elke holte en bak zo\'n 20 minuten, tot ze goudbruin zijn.',
          'Laat afkoelen en dien op met een beetje yoghurt en een sprietje venkelgroen op elk.'
        ]
      },
      fr: {
        title: 'Bouchées chou-fleur et saumon',
        subtitle: 'De petites bouchées au four pour l\'apéro',
        description: 'Des mini-bouchées de purée de chou-fleur rôti, de saumon émietté, de fenouil et d\'échalote, liées à l\'œuf et cuites dans un moule à mini-muffins. À servir avec un point de yaourt et une pluche de fenouil.',
        instructions: [
          'Préchauffe le four à 180 °C et badigeonne un moule à mini-muffins d\'huile.',
          'Fais fondre le fenouil et l\'échalote dans l\'huile avec le sel et le poivre à feu moyen 2–3 minutes.',
          'Mélange la purée de chou-fleur avec le saumon, les pluches de fenouil, le fenouil et l\'échalote fondus, la muscade et les œufs.',
          'Dépose une cuillère à soupe bombée dans chaque empreinte et enfourne environ 20 minutes, jusqu\'à ce que ce soit doré.',
          'Laisse refroidir et sers avec un peu de yaourt et une pluche de fenouil sur chacune.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Fennel', 'Venkel', 'Fenouil', 40, 'g'),
      ing('Shallot', 'Sjalot', 'Échalote', 1, 'st.'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', 0.25, 'kl'),
      ing('Cauliflower', 'Bloemkool', 'Chou-fleur', 400, 'g'),
      ing('Salmon fillet', 'Zalmfilet', 'Filet de saumon', 115, 'g'),
      ing('Nutmeg', 'Nootmuskaat', 'Muscade', 1, 'pinch'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Greek yogurt', 'Griekse yoghurt', 'Yaourt grec', 4, 'el')
    ]
  },

  {
    slug: 'chicken-liver-pate',
    prepTime: '5 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 8,
    category: ['snack'],
    translations: {
      en: {
        title: 'Chicken Liver Pâté',
        subtitle: 'Smooth, buttery and ready in fifteen minutes',
        description: 'Chicken livers fried with onion, shallot and thyme and blended with butter and a splash of coconut milk into a silky pâté. Keeps five days in the fridge.',
        instructions: [
          'Melt half the butter in a frying pan over medium heat and soften the onion and shallot for about 5 minutes. Tip them out.',
          'Heat the pan again and fry the chicken livers until just barely pink inside.',
          'Put the livers, onion and shallot, salt, pepper, thyme, coconut milk and the rest of the butter in a food processor.',
          'Blend until smooth, spoon into a dish and chill. It keeps for up to 5 days.'
        ]
      },
      nl: {
        title: 'Kippenleverpaté',
        subtitle: 'Glad, boterig en klaar in een kwartier',
        description: 'Kippenlevertjes gebakken met ui, sjalot en tijm en gemixt met boter en een scheutje kokosmelk tot een zijdezachte paté. Blijft vijf dagen goed in de koelkast.',
        instructions: [
          'Smelt de helft van de boter in een pan op middelhoog vuur en stoof de ui en sjalot zo\'n 5 minuten zacht. Schep ze eruit.',
          'Verhit de pan opnieuw en bak de levertjes tot ze vanbinnen nog net een beetje roze zijn.',
          'Doe de levertjes, ui en sjalot, het zout, de peper, tijm, kokosmelk en de rest van de boter in de keukenrobot.',
          'Mix glad, schep in een schaaltje en laat opstijven in de koelkast. Blijft tot 5 dagen goed.'
        ]
      },
      fr: {
        title: 'Pâté de foies de volaille',
        subtitle: 'Lisse, beurré et prêt en un quart d\'heure',
        description: 'Des foies de volaille poêlés avec oignon, échalote et thym, mixés avec du beurre et un trait de lait de coco en un pâté soyeux. Se garde cinq jours au frigo.',
        instructions: [
          'Fais fondre la moitié du beurre dans une poêle à feu moyen et fais fondre l\'oignon et l\'échalote environ 5 minutes. Retire-les.',
          'Réchauffe la poêle et saisis les foies jusqu\'à ce qu\'ils soient à peine rosés à cœur.',
          'Mets les foies, l\'oignon et l\'échalote, le sel, le poivre, le thym, le lait de coco et le reste du beurre dans le robot.',
          'Mixe jusqu\'à ce que ce soit lisse, verse dans une terrine et mets au frais. Se garde jusqu\'à 5 jours.'
        ]
      }
    },
    ingredients: [
      ing('Butter', 'Boter', 'Beurre', 55, 'g'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Shallots', 'Sjalotten', 'Échalotes', 2, 'st.'),
      ing('Chicken livers', 'Kippenlevertjes', 'Foies de volaille', 450, 'g'),
      ing('Pepper', 'Peper', 'Poivre', 0.25, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Thyme', 'Tijm', 'Thym', 1, 'el'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 80, 'ml')
    ]
  },

  {
    slug: 'roasted-cauliflower-radicchio-salsa',
    prepTime: '10 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['main', 'snack'],
    translations: {
      en: {
        title: 'Cauliflower Steaks with Radicchio Salsa',
        subtitle: 'Thick roasted slices under a bitter-sweet relish',
        description: 'Cauliflower cut into thick slices and roasted until golden on both sides, topped with a chunky salsa of radicchio, shallot, parsley and almonds.',
        instructions: [
          'Heat the oven to 200 °C.',
          'Brush the cauliflower slices with oil on both sides and season with salt.',
          'Roast for 10–15 minutes, until the undersides brown, then flip and roast 10 minutes more.',
          'Pulse the radicchio, shallot, parsley, almonds, coconut aminos, salt, pepper and a pinch of stevia in a food processor until combined but still chunky.',
          'Spoon the salsa over the cauliflower and serve.'
        ]
      },
      nl: {
        title: 'Bloemkoolsteaks met radicchiosalsa',
        subtitle: 'Dikke geroosterde plakken onder een bitterzoete salsa',
        description: 'Bloemkool in dikke plakken gesneden en aan beide kanten goudbruin geroosterd, met een grove salsa van radicchio, sjalot, peterselie en amandelen erop.',
        instructions: [
          'Verwarm de oven voor op 200 °C.',
          'Bestrijk de plakken bloemkool aan beide kanten met olie en bestrooi met zout.',
          'Rooster 10–15 minuten, tot de onderkant bruin is, draai om en rooster nog 10 minuten.',
          'Hak de radicchio, sjalot, peterselie, amandelen, kokosaminos, het zout, de peper en een snuifje stevia in de keukenrobot tot het gemengd maar nog grof is.',
          'Schep de salsa over de bloemkool en dien op.'
        ]
      },
      fr: {
        title: 'Steaks de chou-fleur, salsa de radicchio',
        subtitle: 'D\'épaisses tranches rôties sous une salsa douce-amère',
        description: 'Du chou-fleur coupé en tranches épaisses et rôti jusqu\'à être doré des deux côtés, garni d\'une salsa rustique de radicchio, d\'échalote, de persil et d\'amandes.',
        instructions: [
          'Préchauffe le four à 200 °C.',
          'Badigeonne les tranches de chou-fleur d\'huile des deux côtés et sale.',
          'Rôtis 10–15 minutes, jusqu\'à ce que le dessous dore, puis retourne et poursuis 10 minutes.',
          'Mixe par à-coups le radicchio, l\'échalote, le persil, les amandes, les aminos de coco, le sel, le poivre et une pincée de stévia, jusqu\'à ce que ce soit mélangé mais encore rustique.',
          'Nappe le chou-fleur de salsa et sers.'
        ]
      }
    },
    ingredients: [
      ing('Cauliflower', 'Bloemkool', 'Chou-fleur', 1, 'head'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Radicchio', 'Radicchio', 'Radicchio', 70, 'g'),
      ing('Shallot', 'Sjalot', 'Échalote', 1, 'st.'),
      ing('Parsley', 'Peterselie', 'Persil', 15, 'g'),
      ing('Flaked almonds', 'Amandelschilfers', 'Amandes effilées', 25, 'g'),
      ing('Coconut aminos', 'Kokosaminos', 'Aminos de coco', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', 1, 'pinch'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'leek-roasted-garlic-focaccia-bread',
    prepTime: '1 hr 15 mins',
    cookTime: '25 mins',
    difficulty: diff.medium,
    servings: 8,
    category: ['snack'],
    translations: {
      en: {
        title: 'Leek & Roasted Garlic Flatbread',
        subtitle: 'A yeast-free focaccia with herbes de Provence',
        description: 'A light coconut-flour flatbread raised with whipped egg whites, topped with soft leek and sweet roasted garlic and baked until golden. Roast the garlic ahead of time.',
        instructions: [
          'Roast the garlic: wrap the cloves in foil and bake at 200 °C for about an hour, then mash them.',
          'Soften the leek in a tablespoon of oil over medium-low heat for about 5 minutes and mix in the garlic.',
          'Heat the oven to 180 °C and oil and line a 23 × 33 cm tin.',
          'Whisk the egg whites to soft peaks. Whisk the yolks with the kefir. Mix the coconut flour, flaxseed, salt and baking soda, then fold in the yolks and the whites.',
          'Spread the batter in the tin and bake for 10 minutes. Top with the leek and garlic, the rest of the oil, the herbs, salt and pepper, and bake 10 minutes more. Let it cool before slicing.'
        ]
      },
      nl: {
        title: 'Platbrood met prei en geroosterde look',
        subtitle: 'Een focaccia zonder gist met Provençaalse kruiden',
        description: 'Een licht platbrood van kokosmeel, luchtig door opgeklopt eiwit, met zachte prei en zoete geroosterde look erop en goudbruin gebakken. Rooster de look op voorhand.',
        instructions: [
          'Rooster de look: wikkel de teentjes in aluminiumfolie, bak ze zo\'n uur op 200 °C en prak ze fijn.',
          'Stoof de prei zo\'n 5 minuten zacht in een eetlepel olie op middellaag vuur en meng de look erdoor.',
          'Verwarm de oven voor op 180 °C en vet een vorm van 23 × 33 cm in en bekleed hem.',
          'Klop de eiwitten tot zachte pieken. Klop de dooiers met de kefir. Meng het kokosmeel, lijnzaad, zout en zuiveringszout en spatel er de dooiers en het eiwit door.',
          'Strijk het beslag uit in de vorm en bak 10 minuten. Leg de prei en look erop met de rest van de olie, de kruiden, zout en peper, en bak nog 10 minuten. Laat afkoelen voor je snijdt.'
        ]
      },
      fr: {
        title: 'Pain plat poireau et ail rôti',
        subtitle: 'Une focaccia sans levure aux herbes de Provence',
        description: 'Un pain plat léger à la farine de coco, gonflé aux blancs montés, garni de poireau fondant et d\'ail rôti tout doux et cuit jusqu\'à être doré. Rôtis l\'ail à l\'avance.',
        instructions: [
          'Rôtis l\'ail : enveloppe les gousses dans de l\'aluminium, enfourne à 200 °C environ une heure, puis écrase-les.',
          'Fais fondre le poireau dans une cuillère à soupe d\'huile à feu moyen-doux environ 5 minutes et ajoute l\'ail.',
          'Préchauffe le four à 180 °C et huile et chemise un moule de 23 × 33 cm.',
          'Monte les blancs en neige souple. Fouette les jaunes avec le kéfir. Mélange la farine de coco, le lin, le sel et le bicarbonate, puis incorpore les jaunes et les blancs.',
          'Étale la pâte dans le moule et enfourne 10 minutes. Garnis de poireau et d\'ail, du reste de l\'huile, des herbes, de sel et de poivre, et poursuis 10 minutes. Laisse refroidir avant de trancher.'
        ]
      }
    },
    ingredients: [
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Leek', 'Prei', 'Poireau', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 3, 'st.'),
      ing('Eggs', 'Eieren', 'Oeufs', 4, 'st.'),
      ing('Kefir', 'Kefir', 'Kéfir', 80, 'ml'),
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 40, 'g'),
      ing('Flaxseed meal', 'Gemalen lijnzaad', 'Graines de lin moulues', 40, 'g'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Baking soda', 'Zuiveringszout', 'Bicarbonate de soude', 0.25, 'kl'),
      ing('Herbes de Provence', 'Provençaalse kruiden', 'Herbes de Provence', 1, 'kl'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'red-pepper-dip-muhammara',
    prepTime: '10 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['snack'],
    wiki: ['en:Muhammara'],
    translations: {
      en: {
        title: 'Muhammara',
        subtitle: 'Roasted red pepper and walnut dip',
        description: 'Charred red peppers blended with toasted walnuts, softened red onion, garlic, cumin and lemon into a smoky, nutty dip from Syria. Serve with crackers or raw vegetables.',
        instructions: [
          'Char the whole peppers over a gas flame, turning with tongs, until blackened. Or roast them at 180 °C for 10–12 minutes on an oiled tray, turning every few minutes.',
          'Peel the peppers and remove the stems and seeds.',
          'Chop the onion and soften it in a little of the olive oil for 3–5 minutes.',
          'Blend everything together until smooth and season with salt.'
        ]
      },
      nl: {
        title: 'Muhammara',
        subtitle: 'Dip van geroosterde rode paprika en walnoot',
        description: 'Geblakerde rode paprika\'s gemixt met geroosterde walnoten, gestoofde rode ui, look, komijn en citroen tot een rokerige, nootachtige dip uit Syrië. Lekker met crackers of rauwe groenten.',
        instructions: [
          'Blaker de hele paprika\'s boven een gasvlam en draai ze met een tang tot ze zwart zijn. Of rooster ze 10–12 minuten op 180 °C op een ingevette bakplaat en draai ze om de paar minuten.',
          'Pel de paprika\'s en verwijder de steeltjes en zaadjes.',
          'Hak de ui fijn en stoof hem 3–5 minuten zacht in een beetje van de olijfolie.',
          'Mix alles glad en breng op smaak met zout.'
        ]
      },
      fr: {
        title: 'Mouhammara',
        subtitle: 'Dip de poivron rouge rôti et de noix',
        description: 'Des poivrons rouges noircis mixés avec des noix grillées, de l\'oignon rouge fondu, de l\'ail, du cumin et du citron en un dip fumé et gourmand venu de Syrie. À servir avec des crackers ou des crudités.',
        instructions: [
          'Noircis les poivrons entiers sur la flamme du gaz en les tournant avec une pince. Ou rôtis-les à 180 °C 10–12 minutes sur une plaque huilée en les retournant toutes les quelques minutes.',
          'Pèle les poivrons et retire les pédoncules et les graines.',
          'Hache l\'oignon et fais-le fondre dans un peu d\'huile d\'olive 3–5 minutes.',
          'Mixe le tout jusqu\'à ce que ce soit lisse et sale.'
        ]
      }
    },
    ingredients: [
      ing('Red bell pepper', 'Rode paprika', 'Poivron rouge', 3, 'st.'),
      ing('Red onion', 'Rode ui', 'Oignon rouge', 1, 'st.'),
      ing('Walnuts', 'Walnoten', 'Noix', 90, 'g'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 60, 'ml'),
      ing('Cayenne pepper', 'Cayennepeper', 'Piment de Cayenne', 0.25, 'kl'),
      ing('Ground cumin', 'Komijnpoeder', 'Cumin moulu', 0.25, 'kl'),
      ing('Lemon', 'Citroen', 'Citron', 0.5, 'st.'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste')
    ]
  },

  {
    slug: 'gazpacho-soup',
    prepTime: '10 mins',
    cookTime: '5 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['soup'],
    wiki: ['en:Gazpacho'],
    translations: {
      en: {
        title: 'Gazpacho',
        subtitle: 'Cold tomato soup with lime and chilli',
        description: 'Peeled tomatoes blended with cucumber, pepper, shallot, garlic, coriander and lime into a cold soup for hot days, with crunchy diced vegetables stirred through at the end.',
        instructions: [
          'Core the tomatoes, blanch them in boiling water for a minute and plunge them into iced water. Slip off the skins and dice them.',
          'Set aside a third of the pepper and cucumber.',
          'Blend the tomatoes with the rest of the pepper and cucumber, the shallot, garlic, coriander, lime juice, vinegar, olive oil, water and chilli flakes until smooth. Season.',
          'Chop the reserved pepper and cucumber finely, stir them in and finish with a few more chilli flakes. Serve cold.'
        ]
      },
      nl: {
        title: 'Gazpacho',
        subtitle: 'Koude tomatensoep met limoen en chili',
        description: 'Gepelde tomaten gemixt met komkommer, paprika, sjalot, look, koriander en limoen tot een koude soep voor warme dagen, met knapperige blokjes groente erdoor op het einde.',
        instructions: [
          'Verwijder het kroontje van de tomaten, blancheer ze een minuut in kokend water en dompel ze in ijswater. Trek het vel eraf en snijd ze in blokjes.',
          'Hou een derde van de paprika en komkommer opzij.',
          'Mix de tomaten met de rest van de paprika en komkommer, de sjalot, look, koriander, het limoensap, de azijn, olijfolie, het water en de chilivlokken glad. Kruid.',
          'Snijd de opzijgehouden paprika en komkommer fijn, roer ze erdoor en werk af met nog wat chilivlokken. Koud opdienen.'
        ]
      },
      fr: {
        title: 'Gaspacho',
        subtitle: 'Soupe froide de tomate au citron vert et au piment',
        description: 'Des tomates pelées mixées avec du concombre, du poivron, de l\'échalote, de l\'ail, de la coriandre et du citron vert en une soupe froide pour les jours chauds, avec des dés de légumes croquants ajoutés à la fin.',
        instructions: [
          'Retire le pédoncule des tomates, plonge-les une minute dans l\'eau bouillante puis dans l\'eau glacée. Pèle-les et coupe-les en dés.',
          'Réserve un tiers du poivron et du concombre.',
          'Mixe les tomates avec le reste du poivron et du concombre, l\'échalote, l\'ail, la coriandre, le jus de citron vert, le vinaigre, l\'huile d\'olive, l\'eau et le piment jusqu\'à ce que ce soit lisse. Assaisonne.',
          'Coupe finement le poivron et le concombre réservés, ajoute-les et termine avec un peu de piment. Sers froid.'
        ]
      }
    },
    ingredients: [
      ing('Tomatoes', 'Tomaten', 'Tomates', 4, 'st.'),
      ing('Cucumber', 'Komkommer', 'Concombre', 0.5, 'st.'),
      ing('Bell pepper', 'Paprika', 'Poivron', 1, 'st.'),
      ing('Shallot', 'Sjalot', 'Échalote', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Coriander', 'Koriander', 'Coriandre', 15, 'g'),
      ing('Lime juice', 'Limoensap', 'Jus de citron vert', 4, 'el'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 1, 'el'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Water', 'Water', 'Eau', 240, 'ml'),
      ing('Chili flakes', 'Chilivlokken', 'Piment en flocons', 0.5, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'tomato-onion-salsa',
    prepTime: '10 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['snack'],
    translations: {
      en: {
        title: 'Fresh Tomato Salsa',
        subtitle: 'Chopped as small as you have patience for',
        description: 'Roma tomatoes, red onion, cucumber, coriander and garlic chopped very fine and brightened with lime. Scoop it up with quinoa crackers.',
        instructions: [
          'Peel the cucumber and scrape out the seeds.',
          'Chop the tomatoes, onion, cucumber, coriander and garlic as small as you can.',
          'Mix together with the lime juice and season with salt.',
          'Serve with quinoa crackers.'
        ]
      },
      nl: {
        title: 'Verse tomatensalsa',
        subtitle: 'Zo fijn gehakt als je geduld toelaat',
        description: 'Romatomaten, rode ui, komkommer, koriander en look heel fijn gehakt en opgefrist met limoen. Schep het op met quinoacrackers.',
        instructions: [
          'Schil de komkommer en schraap de zaadjes eruit.',
          'Hak de tomaten, ui, komkommer, koriander en look zo fijn als je kunt.',
          'Meng met het limoensap en breng op smaak met zout.',
          'Dien op met quinoacrackers.'
        ]
      },
      fr: {
        title: 'Salsa fraîche à la tomate',
        subtitle: 'Hachée aussi finement que ta patience le permet',
        description: 'Des tomates Roma, de l\'oignon rouge, du concombre, de la coriandre et de l\'ail hachés très fin et relevés de citron vert. À ramasser avec des crackers au quinoa.',
        instructions: [
          'Pèle le concombre et retire les graines.',
          'Hache les tomates, l\'oignon, le concombre, la coriandre et l\'ail aussi finement que possible.',
          'Mélange avec le jus de citron vert et sale.',
          'Sers avec des crackers au quinoa.'
        ]
      }
    },
    ingredients: [
      ing('Roma tomatoes', 'Romatomaten', 'Tomates Roma', 4, 'st.'),
      ing('Red onion', 'Rode ui', 'Oignon rouge', 0.5, 'st.'),
      ing('Cucumber', 'Komkommer', 'Concombre', 0.5, 'st.'),
      ing('Coriander', 'Koriander', 'Coriandre', 15, 'g'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Lime juice', 'Limoensap', 'Jus de citron vert', 2, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste')
    ]
  }
];
