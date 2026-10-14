// Candida-diet dishes, batch 11. See candida_recipes.js for how these were made.

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });
const diff = {
  easy: { en: 'Easy', nl: 'Makkelijk', fr: 'Facile' },
  medium: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' }
};

module.exports = [
  {
    slug: 'macadamia-nut-dip',
    prepTime: '2 hrs 5 mins',
    cookTime: '5 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['snack'],
    translations: {
      en: {
        title: 'Macadamia & Tomato Dip',
        subtitle: 'Creamy without a drop of dairy',
        description: 'Soaked macadamias blended with a softened tomato, basil, garlic, lemon and a little cayenne into a rich, creamy dip. Soak the nuts a couple of hours ahead.',
        instructions: [
          'Soak the macadamias in water for about 2 hours and drain them.',
          'Steam or roast the tomato until slightly soft.',
          'Blend the tomato and nuts with the basil, garlic, cayenne, lemon juice and salt until smooth.',
          'Serve with quinoa crackers or sliced peppers.'
        ]
      },
      nl: {
        title: 'Dip van macadamia en tomaat',
        subtitle: 'Romig zonder een druppel zuivel',
        description: 'Geweekte macadamianoten gemixt met een zachte tomaat, basilicum, look, citroen en een beetje cayenne tot een rijke, romige dip. Week de noten een paar uur op voorhand.',
        instructions: [
          'Week de macadamianoten zo\'n 2 uur in water en laat uitlekken.',
          'Stoom of rooster de tomaat tot hij een beetje zacht is.',
          'Mix de tomaat en noten met de basilicum, look, cayenne, het citroensap en zout tot het glad is.',
          'Dien op met quinoacrackers of reepjes paprika.'
        ]
      },
      fr: {
        title: 'Dip macadamia et tomate',
        subtitle: 'Crémeux sans une goutte de produit laitier',
        description: 'Des noix de macadamia trempées mixées avec une tomate attendrie, du basilic, de l\'ail, du citron et un peu de cayenne en un dip riche et crémeux. Fais tremper les noix quelques heures avant.',
        instructions: [
          'Fais tremper les macadamias environ 2 heures dans l\'eau et égoutte.',
          'Cuis la tomate à la vapeur ou rôtis-la jusqu\'à ce qu\'elle s\'attendrisse.',
          'Mixe la tomate et les noix avec le basilic, l\'ail, le cayenne, le jus de citron et le sel jusqu\'à ce que ce soit lisse.',
          'Sers avec des crackers au quinoa ou des lanières de poivron.'
        ]
      }
    },
    ingredients: [
      ing('Macadamia nuts', 'Macadamianoten', 'Noix de macadamia', 135, 'g'),
      ing('Tomato', 'Tomaat', 'Tomate', 1, 'st.'),
      ing('Basil', 'Basilicum', 'Basilic', 10, 'g'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Cayenne pepper', 'Cayennepeper', 'Piment de Cayenne', 0.5, 'kl'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste')
    ]
  },

  {
    slug: 'mozzarella-tomato-salad',
    prepTime: '10 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['snack'],
    translations: {
      en: {
        title: 'Goat Mozzarella & Tomato Salad',
        subtitle: 'A caprese that fits the diet',
        description: 'Cherry tomatoes and little balls of goat\'s milk mozzarella with basil and good olive oil. Goat\'s cheese is gentler on a candida diet than cow\'s.',
        instructions: [
          'Halve the cherry tomatoes.',
          'Toss them with the mozzarella and basil leaves.',
          'Drizzle with the olive oil and season with salt and pepper.'
        ]
      },
      nl: {
        title: 'Salade van tomaat en geitenmozzarella',
        subtitle: 'Een caprese die in het dieet past',
        description: 'Kerstomaatjes en bolletjes mozzarella van geitenmelk met basilicum en goede olijfolie. Geitenkaas is milder voor een candidadieet dan koeienkaas.',
        instructions: [
          'Halveer de kerstomaatjes.',
          'Meng ze met de mozzarella en de basilicumblaadjes.',
          'Sprenkel de olijfolie erover en kruid met zout en peper.'
        ]
      },
      fr: {
        title: 'Salade tomate et mozzarella de chèvre',
        subtitle: 'Une caprese qui convient au régime',
        description: 'Des tomates cerises et des billes de mozzarella au lait de chèvre avec du basilic et une bonne huile d\'olive. Le chèvre est plus doux que la vache pour un régime candida.',
        instructions: [
          'Coupe les tomates cerises en deux.',
          'Mélange-les avec la mozzarella et les feuilles de basilic.',
          'Arrose d\'huile d\'olive, sale et poivre.'
        ]
      }
    },
    ingredients: [
      ing('Cherry tomatoes', 'Kerstomaatjes', 'Tomates cerises', 10, 'st.'),
      ing('Goat mozzarella', 'Geitenmozzarella', 'Mozzarella de chèvre', 10, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Basil', 'Basilicum', 'Basilic', 1, 'bunch'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'sardine-pate',
    prepTime: '5 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['snack'],
    translations: {
      en: {
        title: 'Sardine Pâté',
        subtitle: 'Five minutes and a food processor',
        description: 'A tin of sardines blended with butter, garlic, parsley and lemon into a quick, savoury spread. Spread it on quinoa crackers.',
        instructions: [
          'Put the sardines, garlic, butter, parsley, lemon juice and a dash of pepper in a food processor.',
          'Blend until smooth.',
          'Serve with quinoa crackers.'
        ]
      },
      nl: {
        title: 'Sardinepaté',
        subtitle: 'Vijf minuten en een keukenrobot',
        description: 'Een blikje sardines gemixt met boter, look, peterselie en citroen tot een snelle, hartige smeersel. Smeer het op quinoacrackers.',
        instructions: [
          'Doe de sardines, look, boter, peterselie, het citroensap en een snuifje peper in de keukenrobot.',
          'Mix glad.',
          'Dien op met quinoacrackers.'
        ]
      },
      fr: {
        title: 'Pâté de sardines',
        subtitle: 'Cinq minutes et un robot',
        description: 'Une boîte de sardines mixée avec du beurre, de l\'ail, du persil et du citron en une tartinade rapide et savoureuse. À tartiner sur des crackers au quinoa.',
        instructions: [
          'Mets les sardines, l\'ail, le beurre, le persil, le jus de citron et une pointe de poivre dans le robot.',
          'Mixe jusqu\'à ce que ce soit lisse.',
          'Sers avec des crackers au quinoa.'
        ]
      }
    },
    ingredients: [
      ing('Sardines', 'Sardines', 'Sardines', 120, 'g'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Butter', 'Boter', 'Beurre', 1, 'el'),
      ing('Parsley', 'Peterselie', 'Persil', 2, 'el'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Pepper', 'Peper', 'Poivre', 1, 'pinch')
    ]
  },

  {
    slug: 'tzatziki-dip',
    prepTime: '5 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['snack'],
    wiki: ['en:Tzatziki'],
    translations: {
      en: {
        title: 'Tzatziki',
        subtitle: 'Cool yogurt, cucumber, garlic and dill',
        description: 'The Greek classic: yogurt with diced cucumber, garlic, dill and olive oil. An hour in the fridge lets the flavours come together.',
        instructions: [
          'Mix the yogurt, cucumber, garlic, vinegar, dill and olive oil in a bowl.',
          'Season with salt and pepper and stir well.',
          'Chill for an hour before serving with quinoa crackers.'
        ]
      },
      nl: {
        title: 'Tzatziki',
        subtitle: 'Frisse yoghurt, komkommer, look en dille',
        description: 'De Griekse klassieker: yoghurt met blokjes komkommer, look, dille en olijfolie. Een uur in de koelkast laat de smaken samenkomen.',
        instructions: [
          'Meng de yoghurt, komkommer, look, azijn, dille en olijfolie in een kom.',
          'Kruid met zout en peper en roer goed.',
          'Zet een uur in de koelkast voor je het opdient met quinoacrackers.'
        ]
      },
      fr: {
        title: 'Tzatziki',
        subtitle: 'Yaourt frais, concombre, ail et aneth',
        description: 'Le classique grec : du yaourt avec des dés de concombre, de l\'ail, de l\'aneth et de l\'huile d\'olive. Une heure au frigo laisse les saveurs se marier.',
        instructions: [
          'Mélange le yaourt, le concombre, l\'ail, le vinaigre, l\'aneth et l\'huile d\'olive dans un bol.',
          'Sale, poivre et mélange bien.',
          'Mets une heure au frais avant de servir avec des crackers au quinoa.'
        ]
      }
    },
    ingredients: [
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 240, 'ml'),
      ing('Cucumber', 'Komkommer', 'Concombre', 0.5, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Apple cider vinegar', 'Appelciderazijn', 'Vinaigre de cidre', 1, 'kl'),
      ing('Dill', 'Dille', 'Aneth', 1, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'deviled-eggs',
    prepTime: '5 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['snack'],
    wiki: ['en:Deviled egg'],
    translations: {
      en: {
        title: 'Deviled Eggs',
        subtitle: 'Gevulde eitjes, made with yogurt',
        description: 'Hard-boiled eggs filled with their yolks whipped up with Greek yogurt, lemon, mustard and tarragon instead of mayonnaise. A party favourite that needs no compromise.',
        instructions: [
          'Boil the eggs, cool them in cold water, peel them and halve them lengthwise.',
          'Scoop out the yolks.',
          'Mash the yolks with the yogurt, lemon juice, mustard powder, tarragon, salt and pepper until smooth.',
          'Spoon or pipe the filling back into the whites, dust with paprika and chill before serving.'
        ]
      },
      nl: {
        title: 'Gevulde eitjes',
        subtitle: 'Met yoghurt in plaats van mayonaise',
        description: 'Hardgekookte eitjes gevuld met hun dooiers, opgeklopt met Griekse yoghurt, citroen, mosterd en dragon in plaats van mayonaise. Een feestklassieker zonder compromis.',
        instructions: [
          'Kook de eieren hard, laat ze afkoelen in koud water, pel ze en halveer ze in de lengte.',
          'Schep de dooiers eruit.',
          'Prak de dooiers met de yoghurt, het citroensap, mosterdpoeder, dragon, zout en peper tot het glad is.',
          'Schep of spuit de vulling terug in de eiwitten, bestuif met paprikapoeder en laat afkoelen voor je opdient.'
        ]
      },
      fr: {
        title: 'Œufs mimosa',
        subtitle: 'Au yaourt plutôt qu\'à la mayonnaise',
        description: 'Des œufs durs farcis de leurs jaunes fouettés avec du yaourt grec, du citron, de la moutarde et de l\'estragon à la place de la mayonnaise. Un incontournable de fête, sans compromis.',
        instructions: [
          'Fais durcir les œufs, refroidis-les dans l\'eau froide, écale-les et coupe-les en deux dans la longueur.',
          'Retire les jaunes.',
          'Écrase les jaunes avec le yaourt, le jus de citron, la moutarde en poudre, l\'estragon, le sel et le poivre jusqu\'à ce que ce soit lisse.',
          'Remplis les blancs à la cuillère ou à la poche, saupoudre de paprika et mets au frais avant de servir.'
        ]
      }
    },
    ingredients: [
      ing('Eggs', 'Eieren', 'Oeufs', 4, 'st.'),
      ing('Greek yogurt', 'Griekse yoghurt', 'Yaourt grec', 3, 'el'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Mustard powder', 'Mosterdpoeder', 'Moutarde en poudre', 0.5, 'kl'),
      ing('Dried tarragon', 'Gedroogde dragon', 'Estragon séché', 0.5, 'kl'),
      ing('Paprika', 'Paprikapoeder', 'Paprika', 1, 'pinch'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'zucchini-onion-soup',
    prepTime: '5 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['soup'],
    translations: {
      en: {
        title: 'Courgette & Onion Soup',
        subtitle: 'Five ingredients, fifteen minutes',
        description: 'Steamed courgette and onion blended with raw garlic and olive oil into a light, green soup. Thin it with water until it\'s just how you like it.',
        instructions: [
          'Steam the courgette and onion until soft.',
          'Blend them with the garlic, olive oil and sea salt.',
          'Add water until it\'s as thick or thin as you like, and serve.'
        ]
      },
      nl: {
        title: 'Courgette-uiensoep',
        subtitle: 'Vijf ingrediënten, een kwartier',
        description: 'Gestoomde courgette en ui gemixt met rauwe look en olijfolie tot een lichte, groene soep. Verdun met water tot hij precies is zoals jij hem wilt.',
        instructions: [
          'Stoom de courgette en ui tot ze zacht zijn.',
          'Mix ze met de look, olijfolie en zeezout.',
          'Voeg water toe tot hij zo dik of dun is als je wilt en dien op.'
        ]
      },
      fr: {
        title: 'Soupe courgette et oignon',
        subtitle: 'Cinq ingrédients, un quart d\'heure',
        description: 'De la courgette et de l\'oignon cuits à la vapeur, mixés avec de l\'ail cru et de l\'huile d\'olive en une soupe verte et légère. Allonge-la d\'eau jusqu\'à la consistance qui te plaît.',
        instructions: [
          'Cuis la courgette et l\'oignon à la vapeur jusqu\'à ce qu\'ils soient tendres.',
          'Mixe-les avec l\'ail, l\'huile d\'olive et le sel de mer.',
          'Ajoute de l\'eau jusqu\'à l\'épaisseur voulue et sers.'
        ]
      }
    },
    ingredients: [
      ing('Zucchini', 'Courgette', 'Courgette', 2, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 2, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste')
    ]
  },

  {
    slug: 'avocado-cucumber-soup',
    prepTime: '5 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['soup'],
    translations: {
      en: {
        title: 'Chilled Avocado & Cucumber Soup',
        subtitle: 'No cooking, one blender',
        description: 'Avocado, cucumber, onion, garlic and yogurt blended with cold water into a velvety raw soup. Just right for a warm summer evening.',
        instructions: [
          'Scoop out the avocado and cut the cucumber and onion into large pieces.',
          'Put everything in a blender.',
          'Blend until smooth, season and serve cold.'
        ]
      },
      nl: {
        title: 'Koude avocado-komkommersoep',
        subtitle: 'Niet koken, één blender',
        description: 'Avocado, komkommer, ui, look en yoghurt gemixt met koud water tot een fluweelzachte rauwe soep. Precies goed voor een warme zomeravond.',
        instructions: [
          'Schep de avocado uit en snijd de komkommer en ui in grote stukken.',
          'Doe alles in een blender.',
          'Mix glad, breng op smaak en dien koud op.'
        ]
      },
      fr: {
        title: 'Soupe froide avocat-concombre',
        subtitle: 'Sans cuisson, un mixeur',
        description: 'De l\'avocat, du concombre, de l\'oignon, de l\'ail et du yaourt mixés avec de l\'eau froide en une soupe crue veloutée. Parfaite pour une chaude soirée d\'été.',
        instructions: [
          'Récupère la chair des avocats et coupe le concombre et l\'oignon en gros morceaux.',
          'Mets le tout dans un mixeur.',
          'Mixe jusqu\'à ce que ce soit lisse, assaisonne et sers froid.'
        ]
      }
    },
    ingredients: [
      ing('Avocado', 'Avocado', 'Avocat', 2, 'st.'),
      ing('Cucumber', 'Komkommer', 'Concombre', 0.5, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 0.25, 'st.'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 120, 'ml'),
      ing('Garlic', 'Look', 'Ail', 2, 'st.'),
      ing('Water', 'Water', 'Eau', 360, 'ml'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste'),
      ing('Pepper', 'Peper', 'Poivre', null, 'to taste')
    ]
  },

  {
    slug: 'delicious-guacamole',
    prepTime: '5 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['snack'],
    wiki: ['en:Guacamole'],
    translations: {
      en: {
        title: 'Guacamole',
        subtitle: 'Mashed by hand, the way it should be',
        description: 'Ripe avocado mashed with onion, grated garlic, lemon, coriander and sea salt. The topping for the swede nachos, or a dip all by itself.',
        instructions: [
          'Chop the onion and coriander and grate the garlic.',
          'Put everything in a bowl with the avocado flesh and lemon juice and mash it thoroughly.',
          'Season with sea salt and garnish with more coriander.'
        ]
      },
      nl: {
        title: 'Guacamole',
        subtitle: 'Met de hand geprakt, zoals het hoort',
        description: 'Rijpe avocado geprakt met ui, geraspte look, citroen, koriander en zeezout. De topping voor de koolraapnacho\'s, of gewoon een dip op zich.',
        instructions: [
          'Hak de ui en koriander fijn en rasp de look.',
          'Doe alles in een kom met het vruchtvlees van de avocado en het citroensap en prak het goed fijn.',
          'Breng op smaak met zeezout en werk af met nog wat koriander.'
        ]
      },
      fr: {
        title: 'Guacamole',
        subtitle: 'Écrasé à la main, comme il se doit',
        description: 'De l\'avocat bien mûr écrasé avec de l\'oignon, de l\'ail râpé, du citron, de la coriandre et du sel de mer. La garniture des nachos de rutabaga, ou un dip à lui seul.',
        instructions: [
          'Hache l\'oignon et la coriandre et râpe l\'ail.',
          'Mets le tout dans un bol avec la chair des avocats et le jus de citron et écrase bien.',
          'Sale au sel de mer et garnis d\'encore un peu de coriandre.'
        ]
      }
    },
    ingredients: [
      ing('Avocado', 'Avocado', 'Avocat', 2, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 0.5, 'st.'),
      ing('Garlic', 'Look', 'Ail', 1, 'st.'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Coriander', 'Koriander', 'Coriandre', 2, 'el'),
      ing('Salt', 'Zout', 'Sel', null, 'to taste')
    ]
  },

  {
    slug: 'salmon-on-endive-spears',
    prepTime: '10 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 3,
    category: ['snack'],
    translations: {
      en: {
        title: 'Salmon on Witloof Leaves',
        subtitle: 'A Belgian aperitif bite',
        description: 'Crisp witloof leaves filled with salmon mixed with Greek yogurt, lemon and tarragon, topped with spring onion. Belgian endive the way it was born to be eaten: as a little boat.',
        instructions: [
          'Mix the salmon, yogurt, lemon juice, tarragon and a pinch of salt in a bowl.',
          'Spoon the mixture onto the witloof leaves.',
          'Scatter with spring onion and serve.'
        ]
      },
      nl: {
        title: 'Zalm op witloofblaadjes',
        subtitle: 'Een Belgisch aperitiefhapje',
        description: 'Knapperige witloofblaadjes gevuld met zalm gemengd met Griekse yoghurt, citroen en dragon, met lente-ui erop. Witloof zoals het geboren is om gegeten te worden: als scheepje.',
        instructions: [
          'Meng de zalm, yoghurt, het citroensap, de dragon en een snuifje zout in een kom.',
          'Schep het mengsel op de witloofblaadjes.',
          'Strooi er lente-ui over en dien op.'
        ]
      },
      fr: {
        title: 'Saumon sur feuilles de chicon',
        subtitle: 'Une bouchée apéritive belge',
        description: 'Des feuilles de chicon croquantes garnies de saumon mélangé à du yaourt grec, du citron et de l\'estragon, parsemées d\'oignon nouveau. Le chicon comme il est né pour être mangé : en petite barque.',
        instructions: [
          'Mélange le saumon, le yaourt, le jus de citron, l\'estragon et une pincée de sel dans un bol.',
          'Dépose le mélange à la cuillère sur les feuilles de chicon.',
          'Parsème d\'oignon nouveau et sers.'
        ]
      }
    },
    ingredients: [
      ing('Canned salmon', 'Zalm uit blik', 'Saumon en conserve', 170, 'g'),
      ing('Belgian endive', 'Witloof', 'Chicon', 2, 'st.'),
      ing('Greek yogurt', 'Griekse yoghurt', 'Yaourt grec', 120, 'ml'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Tarragon', 'Dragon', 'Estragon', 1, 'el'),
      ing('Spring onion', 'Lente-ui', 'Oignon nouveau', 1, 'el'),
      ing('Salt', 'Zout', 'Sel', 1, 'pinch')
    ]
  },

  {
    slug: 'blueberry-panna-cotta',
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: diff.medium,
    servings: 4,
    category: ['dessert'],
    translations: {
      en: {
        title: 'Blueberry Panna Cotta',
        subtitle: 'Dairy-free, set with agar',
        description: 'A soft, wobbly almond milk cream set with agar instead of gelatine, under a layer of blueberry jelly. Make it in the morning for the evening.',
        instructions: [
          'Heat the almond milk with the stevia, agar and vanilla in a pan over medium heat, stirring, until it boils. Take it off the heat straight away.',
          'Pour into four glasses or ramekins and chill for 2–4 hours, until firm.',
          'Heat the blueberries with the water, stevia and agar, stirring, until it boils. Take it off the heat and let it cool for 10–15 minutes.',
          'Spoon the blueberry mix over the set creams and chill for about an hour more.',
          'Top with fresh blueberries and mint.'
        ]
      },
      nl: {
        title: 'Panna cotta met blauwe bessen',
        subtitle: 'Zonder zuivel, opgesteven met agar',
        description: 'Een zachte, trillende crème van amandelmelk, opgesteven met agar in plaats van gelatine, onder een laagje blauwebessengelei. Maak \'s ochtends, eet \'s avonds.',
        instructions: [
          'Verwarm de amandelmelk met de stevia, agar en vanille al roerend in een pan op middelhoog vuur tot het kookt. Haal meteen van het vuur.',
          'Giet in vier glaasjes of potjes en laat 2–4 uur opstijven in de koelkast.',
          'Verwarm de blauwe bessen met het water, de stevia en agar al roerend tot het kookt. Haal van het vuur en laat 10–15 minuten afkoelen.',
          'Schep het bessenmengsel over de opgesteven crèmes en zet nog zo\'n uur in de koelkast.',
          'Werk af met verse blauwe bessen en munt.'
        ]
      },
      fr: {
        title: 'Panna cotta aux myrtilles',
        subtitle: 'Sans lactose, prise à l\'agar-agar',
        description: 'Une crème au lait d\'amande douce et tremblotante, prise à l\'agar-agar au lieu de la gélatine, sous une couche de gelée de myrtilles. Prépare-la le matin pour le soir.',
        instructions: [
          'Chauffe le lait d\'amande avec la stévia, l\'agar-agar et la vanille dans une casserole à feu moyen, en remuant, jusqu\'à ébullition. Retire aussitôt du feu.',
          'Verse dans quatre verres ou ramequins et mets au frais 2–4 heures, jusqu\'à ce que ce soit pris.',
          'Chauffe les myrtilles avec l\'eau, la stévia et l\'agar-agar en remuant jusqu\'à ébullition. Retire du feu et laisse tiédir 10–15 minutes.',
          'Verse le mélange aux myrtilles sur les crèmes prises et remets au frais environ une heure.',
          'Garnis de myrtilles fraîches et de menthe.'
        ]
      }
    },
    ingredients: [
      ing('Almond milk', 'Amandelmelk', 'Lait d\'amande', 720, 'ml'),
      ing('Stevia', 'Stevia', 'Stévia', 0.75, 'kl'),
      ing('Agar agar', 'Agar-agar', 'Agar-agar', 1.5, 'kl'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 0.5, 'kl'),
      ing('Frozen blueberries', 'Diepvries blauwe bessen', 'Myrtilles surgelées', 150, 'g'),
      ing('Water', 'Water', 'Eau', 60, 'ml'),
      ing('Blueberries', 'Blauwe bessen', 'Myrtilles', 50, 'g'),
      ing('Mint', 'Munt', 'Menthe', 4, 'sprig')
    ]
  },

  {
    slug: 'apple-galette',
    prepTime: '20 mins',
    cookTime: '20 mins',
    difficulty: diff.medium,
    servings: 4,
    category: ['dessert'],
    translations: {
      en: {
        title: 'Apple Galette',
        subtitle: 'A rustic free-form tart with a gluten-free crust',
        description: 'Tart Granny Smith slices softened with lemon, folded inside a buckwheat, millet and quinoa pastry and baked until golden. Dust with cinnamon and it smells like the appeltaart it replaces.',
        instructions: [
          'Fry the apple slices in the oil over medium heat with the lemon juice and stevia for 4–5 minutes. Set aside.',
          'Whisk one egg with a tablespoon of water for the egg wash.',
          'Blitz the flours, psyllium and salt in a food processor. Add the olive oil, then the other egg, then the cold water a little at a time until the dough forms a ball.',
          'Heat the oven to 200 °C. Roll the dough between two sheets of baking paper into a 35–38 cm round and slide it onto a tray.',
          'Spread the apples over it, leaving a 5 cm border, fold and pleat the edges over the fruit and brush with egg wash. Bake for 15–20 minutes, until golden. Let it cool and dust with cinnamon.'
        ]
      },
      nl: {
        title: 'Appelgalette',
        subtitle: 'Een rustieke taart in vrije vorm met een glutenvrije bodem',
        description: 'Zure Granny Smith-schijfjes zacht gemaakt met citroen, ingevouwen in een deeg van boekweit, gierst en quinoa en goudbruin gebakken. Bestuif met kaneel en het ruikt naar de appeltaart die het vervangt.',
        instructions: [
          'Bak de appelschijfjes 4–5 minuten in de olie op middelhoog vuur met het citroensap en de stevia. Zet opzij.',
          'Klop één ei los met een eetlepel water om te bestrijken.',
          'Mix het meel, de psyllium en het zout in de keukenrobot. Voeg de olijfolie toe, dan het andere ei, en dan beetje bij beetje het koude water tot het deeg een bal vormt.',
          'Verwarm de oven voor op 200 °C. Rol het deeg tussen twee vellen bakpapier uit tot een cirkel van 35–38 cm en schuif het op een bakplaat.',
          'Verdeel de appels erover met een rand van 5 cm vrij, vouw en plooi de randen over het fruit en bestrijk met ei. Bak 15–20 minuten, tot hij goudbruin is. Laat afkoelen en bestuif met kaneel.'
        ]
      },
      fr: {
        title: 'Galette aux pommes',
        subtitle: 'Une tarte rustique sans moule, à la pâte sans gluten',
        description: 'Des lamelles de Granny Smith acidulées attendries au citron, repliées dans une pâte au sarrasin, au millet et au quinoa et cuites jusqu\'à être dorées. Saupoudrée de cannelle, elle sent la tarte aux pommes qu\'elle remplace.',
        instructions: [
          'Fais revenir les lamelles de pomme dans l\'huile à feu moyen avec le jus de citron et la stévia 4–5 minutes. Réserve.',
          'Bats un œuf avec une cuillère à soupe d\'eau pour la dorure.',
          'Mixe les farines, le psyllium et le sel au robot. Ajoute l\'huile d\'olive, puis l\'autre œuf, puis l\'eau froide petit à petit jusqu\'à ce que la pâte forme une boule.',
          'Préchauffe le four à 200 °C. Étale la pâte entre deux feuilles de papier cuisson en un disque de 35–38 cm et glisse-la sur une plaque.',
          'Répartis les pommes en laissant une bordure de 5 cm, replie et plisse les bords sur les fruits et dore à l\'œuf. Enfourne 15–20 minutes, jusqu\'à ce que ce soit doré. Laisse refroidir et saupoudre de cannelle.'
        ]
      }
    },
    ingredients: [
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 2, 'el'),
      ing('Granny Smith apple', 'Granny Smith-appel', 'Pomme Granny Smith', 3, 'st.'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Stevia', 'Stevia', 'Stévia', 0.25, 'kl'),
      ing('Water', 'Water', 'Eau', 90, 'ml'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Buckwheat flour', 'Boekweitmeel', 'Farine de sarrasin', 60, 'g'),
      ing('Millet flour', 'Gierstmeel', 'Farine de millet', 60, 'g'),
      ing('Quinoa flour', 'Quinoameel', 'Farine de quinoa', 55, 'g'),
      ing('Psyllium husk powder', 'Psylliumvezels', 'Psyllium en poudre', 2, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.5, 'kl'),
      ing('Olive oil', 'Olijfolie', 'Huile d\'olive', 5, 'el'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 1, 'pinch')
    ]
  },

  {
    slug: 'lemon-coconut-cookies',
    prepTime: '15 mins',
    cookTime: '15 mins',
    difficulty: diff.easy,
    servings: 18,
    category: ['dessert', 'snack'],
    translations: {
      en: {
        title: 'Lemon Coconut Cookies',
        subtitle: 'Soft almond cookies with a snowy coconut dusting',
        description: 'Little almond and coconut cookies bright with lemon zest and juice, finished with a dusting of finely ground coconut that looks like icing sugar but isn\'t.',
        instructions: [
          'Heat the oven to 180 °C and line a baking tray with baking paper.',
          'Whisk the coconut milk, vanilla, stevia and lemon juice.',
          'Mix the almond meal, coconut, chia, lemon zest and salt, then stir in the wet ingredients.',
          'Roll tablespoons of dough into balls, space them 5 cm apart and flatten them to about 1 cm. Bake for about 15 minutes.',
          'Blitz the coconut for the dusting with the stevia for 10–15 seconds into a fine powder and sprinkle it over the cookies. Let them cool before eating.'
        ]
      },
      nl: {
        title: 'Citroen-kokoskoekjes',
        subtitle: 'Zachte amandelkoekjes met een sneeuwlaagje kokos',
        description: 'Kleine koekjes van amandel en kokos, fris van citroenzeste en -sap, afgewerkt met een laagje fijngemalen kokos dat op bloemsuiker lijkt maar het niet is.',
        instructions: [
          'Verwarm de oven voor op 180 °C en bekleed een bakplaat met bakpapier.',
          'Klop de kokosmelk, vanille, stevia en het citroensap samen.',
          'Meng het amandelmeel, de kokos, chia, citroenzeste en het zout, en roer de natte ingrediënten erdoor.',
          'Rol eetlepels deeg tot balletjes, leg ze 5 cm uit elkaar en druk ze plat tot zo\'n 1 cm. Bak zo\'n 15 minuten.',
          'Maal de kokos voor de toplaag 10–15 seconden met de stevia tot een fijn poeder en strooi het over de koekjes. Laat afkoelen voor je ze eet.'
        ]
      },
      fr: {
        title: 'Biscuits citron-coco',
        subtitle: 'De tendres biscuits aux amandes sous une neige de coco',
        description: 'De petits biscuits amande-coco pleins de zeste et de jus de citron, finis d\'une poudre de coco très fine qui ressemble à du sucre glace sans en être.',
        instructions: [
          'Préchauffe le four à 180 °C et garnis une plaque de papier cuisson.',
          'Fouette le lait de coco, la vanille, la stévia et le jus de citron.',
          'Mélange la poudre d\'amande, la coco, le chia, le zeste et le sel, puis incorpore le liquide.',
          'Forme des boules d\'une cuillère à soupe, espace-les de 5 cm et aplatis-les à environ 1 cm. Enfourne une quinzaine de minutes.',
          'Mixe la coco de la finition avec la stévia 10–15 secondes en poudre fine et saupoudre-la sur les biscuits. Laisse refroidir avant de déguster.'
        ]
      }
    },
    ingredients: [
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 60, 'ml'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 1, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', 1.5, 'kl'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Ground almonds', 'Gemalen amandelen', 'Poudre d\'amande', 100, 'g'),
      ing('Desiccated coconut', 'Geraspte kokos', 'Noix de coco râpée', 60, 'g'),
      ing('Chia seeds', 'Chiazaad', 'Graines de chia', 1, 'el'),
      ing('Lemon zest', 'Citroenzeste', 'Zeste de citron', 1, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'pinch')
    ]
  }
];
