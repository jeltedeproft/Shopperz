// Candida-diet dishes, batch 12: the sweet things and the drinks. See
// candida_recipes.js for how these were made.

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });
const diff = {
  easy: { en: 'Easy', nl: 'Makkelijk', fr: 'Facile' },
  medium: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' }
};

module.exports = [
  {
    slug: 'strawberry-muffins',
    prepTime: '15 mins',
    cookTime: '30 mins',
    difficulty: diff.easy,
    servings: 6,
    category: ['dessert', 'breakfast'],
    translations: {
      en: {
        title: 'Strawberry Muffins',
        subtitle: 'Soft coconut-flour muffins with fresh strawberries',
        description: 'Light coconut-flour muffins with diced strawberries folded through and a slice on top. Six of them, gone by the afternoon.',
        instructions: [
          'Heat the oven to 180 °C and line 6 holes of a muffin tin.',
          'Sift the coconut flour and whisk it with the baking soda and salt.',
          'Whisk the coconut milk, stevia, melted coconut oil, eggs and vanilla, then stir them into the dry mix for a minute.',
          'Fold in the diced strawberries, fill the cases and lay a strawberry slice on each.',
          'Bake for 30–35 minutes, until golden, and let them cool.'
        ]
      },
      nl: {
        title: 'Aardbeienmuffins',
        subtitle: 'Zachte muffins van kokosmeel met verse aardbeien',
        description: 'Lichte muffins van kokosmeel met blokjes aardbei erdoor en een schijfje erop. Zes stuks, tegen de namiddag op.',
        instructions: [
          'Verwarm de oven voor op 180 °C en bekleed 6 holtes van een muffinvorm.',
          'Zeef het kokosmeel en klop het met het zuiveringszout en zout.',
          'Klop de kokosmelk, stevia, gesmolten kokosolie, eieren en vanille, en roer het een minuut door het droge mengsel.',
          'Spatel de blokjes aardbei erdoor, vul de vormpjes en leg op elk een schijfje aardbei.',
          'Bak 30–35 minuten, tot ze goudbruin zijn, en laat afkoelen.'
        ]
      },
      fr: {
        title: 'Muffins aux fraises',
        subtitle: 'De tendres muffins à la farine de coco et aux fraises fraîches',
        description: 'Des muffins légers à la farine de coco avec des dés de fraise incorporés et une tranche par-dessus. Six pièces, envolées avant le goûter.',
        instructions: [
          'Préchauffe le four à 180 °C et garnis 6 empreintes d\'un moule à muffins.',
          'Tamise la farine de coco et fouette-la avec le bicarbonate et le sel.',
          'Fouette le lait de coco, la stévia, l\'huile de coco fondue, les œufs et la vanille, puis incorpore au sec pendant une minute.',
          'Ajoute délicatement les dés de fraise, remplis les caissettes et pose une tranche de fraise sur chacune.',
          'Enfourne 30–35 minutes, jusqu\'à ce qu\'ils soient dorés, et laisse refroidir.'
        ]
      }
    },
    ingredients: [
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 60, 'g'),
      ing('Baking soda', 'Zuiveringszout', 'Bicarbonate de soude', 0.25, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'pinch'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 120, 'ml'),
      ing('Stevia', 'Stevia', 'Stévia', 0.5, 'kl'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 2, 'el'),
      ing('Eggs', 'Eieren', 'Oeufs', 3, 'st.'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 0.5, 'kl'),
      ing('Strawberries', 'Aardbeien', 'Fraises', 100, 'g')
    ]
  },

  {
    slug: 'vanilla-cardamom-ice-cream',
    prepTime: '15 mins',
    cookTime: '40 mins',
    difficulty: diff.medium,
    servings: 4,
    category: ['dessert'],
    translations: {
      en: {
        title: 'Vanilla Cardamom Ice Cream',
        subtitle: 'Coconut ice cream with real vanilla seeds',
        description: 'Coconut milk steeped with freshly ground cardamom and a split vanilla pod, chilled and churned into a creamy, sugar-free ice. Glycerin keeps it scoopable.',
        instructions: [
          'Crush the cardamom pods, pick out the seeds and grind them. Split the vanilla pod and scrape out the seeds.',
          'Put everything in a pan, bring it just to a simmer, then take it off the heat and leave it to steep for 30 minutes.',
          'Strain through a fine sieve and chill for 3–4 hours.',
          'Churn in an ice cream maker for about 20 minutes, until set, then freeze in a closed tub for 3–4 hours.'
        ]
      },
      nl: {
        title: 'Vanille-kardemomijs',
        subtitle: 'Kokosijs met echte vanillezaadjes',
        description: 'Kokosmelk getrokken met vers gemalen kardemom en een opengesneden vanillestokje, gekoeld en gedraaid tot een romig ijs zonder suiker. Glycerine houdt het schepbaar.',
        instructions: [
          'Kneus de kardemompeulen, haal de zaadjes eruit en maal ze. Snijd het vanillestokje open en schraap de zaadjes eruit.',
          'Doe alles in een pan, breng net aan de kook, haal van het vuur en laat 30 minuten trekken.',
          'Zeef door een fijne zeef en laat 3–4 uur afkoelen in de koelkast.',
          'Draai zo\'n 20 minuten in een ijsmachine tot het opgesteven is en zet dan 3–4 uur in een gesloten doos in de diepvries.'
        ]
      },
      fr: {
        title: 'Glace vanille-cardamome',
        subtitle: 'Une glace coco aux vraies graines de vanille',
        description: 'Du lait de coco infusé avec de la cardamome fraîchement moulue et une gousse de vanille fendue, refroidi puis turbiné en une glace crémeuse sans sucre. La glycérine la garde facile à servir.',
        instructions: [
          'Écrase les gousses de cardamome, récupère les graines et moud-les. Fends la gousse de vanille et gratte les graines.',
          'Mets le tout dans une casserole, porte juste à frémissement, retire du feu et laisse infuser 30 minutes.',
          'Filtre au tamis fin et réfrigère 3–4 heures.',
          'Turbine en sorbetière environ 20 minutes, jusqu\'à ce que ce soit pris, puis congèle 3–4 heures dans une boîte fermée.'
        ]
      }
    },
    ingredients: [
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 480, 'ml'),
      ing('Vegetable glycerin', 'Plantaardige glycerine', 'Glycérine végétale', 2, 'el'),
      ing('Stevia', 'Stevia', 'Stévia', 0.75, 'kl'),
      ing('Cardamom pods', 'Kardemompeulen', 'Gousses de cardamome', 6, 'st.'),
      ing('Vanilla bean', 'Vanillestokje', 'Gousse de vanille', 1, 'st.'),
      ing('Salt', 'Zout', 'Sel', 1, 'pinch')
    ]
  },

  {
    slug: 'cinnamon-pecan-crumb-cakes',
    prepTime: '15 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 9,
    category: ['dessert', 'breakfast'],
    translations: {
      en: {
        title: 'Cinnamon Pecan Crumb Cake',
        subtitle: 'A soft almond cake under a thick pecan crumble',
        description: 'A tender almond-flour cake heavy with cinnamon, covered in a crunchy pecan crumble. Cut it into nine squares for coffee time.',
        instructions: [
          'Heat the oven to 180 °C. Oil a 20 × 20 cm tin and line it with oiled baking paper.',
          'Mix the pecans, 50 g of the almond flour, stevia, a teaspoon of cinnamon, salt and melted coconut oil for the crumble, and chill it.',
          'Whisk the rest of the almond flour with the coconut flour, salt, baking soda and half a tablespoon of cinnamon.',
          'Whisk the eggs with the stevia and a tablespoon of cinnamon until frothy, then stir in the yogurt. Combine with the dry mix and spread it in the tin.',
          'Scatter the crumble over the top and bake for about 20 minutes, until the middle is firm. Let it cool before cutting.'
        ]
      },
      nl: {
        title: 'Kruimelcake met kaneel en pecannoten',
        subtitle: 'Een zachte amandelcake onder een dikke crumble van pecannoten',
        description: 'Een malse cake van amandelmeel vol kaneel, bedekt met een knapperige crumble van pecannoten. Snijd in negen vierkantjes voor bij de koffie.',
        instructions: [
          'Verwarm de oven voor op 180 °C. Vet een vorm van 20 × 20 cm in en bekleed met ingevet bakpapier.',
          'Meng de pecannoten, 50 g van het amandelmeel, de stevia, een theelepel kaneel, het zout en de gesmolten kokosolie voor de crumble, en zet in de koelkast.',
          'Klop de rest van het amandelmeel met het kokosmeel, zout, zuiveringszout en een halve eetlepel kaneel.',
          'Klop de eieren met de stevia en een eetlepel kaneel schuimig en roer de yoghurt erdoor. Meng met het droge en strijk uit in de vorm.',
          'Strooi de crumble erover en bak zo\'n 20 minuten, tot het midden stevig is. Laat afkoelen voor je snijdt.'
        ]
      },
      fr: {
        title: 'Gâteau crumble cannelle et pécan',
        subtitle: 'Un gâteau tendre aux amandes sous un épais crumble de pécan',
        description: 'Un gâteau moelleux à la farine d\'amande bien parfumé à la cannelle, couvert d\'un crumble croquant aux noix de pécan. Coupe-le en neuf carrés pour l\'heure du café.',
        instructions: [
          'Préchauffe le four à 180 °C. Huile un moule de 20 × 20 cm et chemise-le de papier cuisson huilé.',
          'Mélange les noix de pécan, 50 g de farine d\'amande, la stévia, une cuillère à café de cannelle, le sel et l\'huile de coco fondue pour le crumble, et mets au frais.',
          'Fouette le reste de la farine d\'amande avec la farine de coco, le sel, le bicarbonate et une demi-cuillère à soupe de cannelle.',
          'Fouette les œufs avec la stévia et une cuillère à soupe de cannelle jusqu\'à ce qu\'ils moussent, puis ajoute le yaourt. Mélange au sec et étale dans le moule.',
          'Parsème de crumble et enfourne une vingtaine de minutes, jusqu\'à ce que le centre soit ferme. Laisse refroidir avant de couper.'
        ]
      }
    },
    ingredients: [
      ing('Pecans', 'Pecannoten', 'Noix de pécan', 165, 'g'),
      ing('Almond flour', 'Amandelmeel', 'Farine d\'amande', 150, 'g'),
      ing('Stevia', 'Stevia', 'Stévia', 1.5, 'kl'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 2, 'el'),
      ing('Salt', 'Zout', 'Sel', 2, 'pinch'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 60, 'ml'),
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 2, 'kl'),
      ing('Baking soda', 'Zuiveringszout', 'Bicarbonate de soude', 0.25, 'kl'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 80, 'ml')
    ]
  },

  {
    slug: 'avocado-lime-tart',
    prepTime: '30 mins',
    cookTime: '10 mins',
    difficulty: diff.medium,
    servings: 8,
    category: ['dessert'],
    translations: {
      en: {
        title: 'Avocado Lime Tart',
        subtitle: 'A no-bake key lime filling in an almond crust',
        description: 'A smooth, tangy lime filling made from avocado and coconut, set in the fridge in a baked almond-coconut crust. Nobody guesses the avocado.',
        instructions: [
          'Bake the almond-coconut tart crust from this book and let it cool.',
          'Whisk the coconut milk, vanilla, stevia and salt until dissolved.',
          'Blend the avocado with the lime zest and juice until smooth, then blend in the coconut milk mixture.',
          'With the motor running, pour in the melted coconut oil.',
          'Spread the filling in the crust and chill for 1–2 hours. Scatter with toasted coconut flakes. Leftovers keep for 2 days in the fridge.'
        ]
      },
      nl: {
        title: 'Avocado-limoentaart',
        subtitle: 'Een limoenvulling zonder oven in een amandelbodem',
        description: 'Een gladde, frisse limoenvulling van avocado en kokos, opgesteven in de koelkast in een gebakken bodem van amandel en kokos. Niemand raadt de avocado.',
        instructions: [
          'Bak de taartbodem van amandel en kokos uit dit boek en laat afkoelen.',
          'Klop de kokosmelk, vanille, stevia en het zout tot alles opgelost is.',
          'Mix de avocado met de limoenzeste en het -sap glad en mix dan het kokosmelkmengsel erdoor.',
          'Giet de gesmolten kokosolie erbij terwijl de mixer draait.',
          'Strijk de vulling in de bodem en laat 1–2 uur opstijven in de koelkast. Strooi er geroosterde kokosschilfers over. Restjes blijven 2 dagen goed in de koelkast.'
        ]
      },
      fr: {
        title: 'Tarte avocat-citron vert',
        subtitle: 'Une crème au citron vert sans cuisson dans une pâte aux amandes',
        description: 'Une garniture lisse et acidulée au citron vert, à base d\'avocat et de coco, prise au frigo dans un fond cuit amande-coco. Personne ne devine l\'avocat.',
        instructions: [
          'Fais cuire le fond de tarte amande-coco de ce livre et laisse-le refroidir.',
          'Fouette le lait de coco, la vanille, la stévia et le sel jusqu\'à dissolution.',
          'Mixe l\'avocat avec le zeste et le jus de citron vert jusqu\'à ce que ce soit lisse, puis ajoute le mélange au lait de coco.',
          'Moteur en marche, verse l\'huile de coco fondue.',
          'Étale la garniture dans le fond et mets 1–2 heures au frais. Parsème de copeaux de coco grillés. Les restes se gardent 2 jours au frigo.'
        ]
      }
    },
    ingredients: [
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 120, 'ml'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 2, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', 1.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'pinch'),
      ing('Avocado', 'Avocado', 'Avocat', 3, 'st.'),
      ing('Lime', 'Limoen', 'Citron vert', 1, 'st.'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 60, 'ml'),
      ing('Coconut flakes', 'Kokosschilfers', 'Copeaux de coco', 2, 'el'),
      ing('Almond flour', 'Amandelmeel', 'Farine d\'amande', 150, 'g'),
      ing('Desiccated coconut', 'Geraspte kokos', 'Noix de coco râpée', 40, 'g'),
      ing('Chia seeds', 'Chiazaad', 'Graines de chia', 1, 'el'),
      ing('Egg', 'Ei', 'Oeuf', 1, 'st.')
    ]
  },

  {
    slug: 'almond-coconut-tart-crust',
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: diff.easy,
    servings: 8,
    category: ['dessert'],
    translations: {
      en: {
        title: 'Almond Coconut Tart Crust',
        subtitle: 'The base for every tart in this book',
        description: 'A press-in crust of almond flour, coconut and chia bound with egg and coconut oil, blind-baked in ten minutes. Fill it with the avocado lime filling or whatever you like.',
        instructions: [
          'Heat the oven to 180 °C. Grease a 23 cm loose-bottomed tart tin with coconut oil and line the base with baking paper.',
          'Pulse the almond flour, coconut, chia, stevia and salt in a food processor.',
          'Whisk the egg with the melted coconut oil and pour it in with the motor running until the dough holds together.',
          'Press the dough evenly over the base and up the sides of the tin.',
          'Bake for 10–12 minutes, until the edges just start to brown. Let it cool before filling.'
        ]
      },
      nl: {
        title: 'Taartbodem van amandel en kokos',
        subtitle: 'De bodem voor elke taart in dit boek',
        description: 'Een bodem van amandelmeel, kokos en chia, gebonden met ei en kokosolie, in de vorm gedrukt en in tien minuten blind gebakken. Vul hem met de avocado-limoenvulling of wat je maar wilt.',
        instructions: [
          'Verwarm de oven voor op 180 °C. Vet een taartvorm met losse bodem van 23 cm in met kokosolie en bekleed de bodem met bakpapier.',
          'Mix het amandelmeel, de kokos, chia, stevia en het zout kort in de keukenrobot.',
          'Klop het ei met de gesmolten kokosolie en giet het erbij terwijl de robot draait, tot het deeg samenhangt.',
          'Druk het deeg gelijkmatig over de bodem en tegen de randen van de vorm.',
          'Bak 10–12 minuten, tot de randen net beginnen te kleuren. Laat afkoelen voor je hem vult.'
        ]
      },
      fr: {
        title: 'Fond de tarte amande-coco',
        subtitle: 'La base de toutes les tartes de ce livre',
        description: 'Un fond à presser de farine d\'amande, de coco et de chia lié à l\'œuf et à l\'huile de coco, cuit à blanc en dix minutes. Garnis-le de crème avocat-citron vert ou de ce qui te plaît.',
        instructions: [
          'Préchauffe le four à 180 °C. Graisse un moule à tarte à fond amovible de 23 cm à l\'huile de coco et chemise le fond de papier cuisson.',
          'Mixe brièvement la farine d\'amande, la coco, le chia, la stévia et le sel au robot.',
          'Fouette l\'œuf avec l\'huile de coco fondue et verse-le moteur en marche jusqu\'à ce que la pâte se tienne.',
          'Presse la pâte uniformément sur le fond et les bords du moule.',
          'Enfourne 10–12 minutes, jusqu\'à ce que les bords commencent à dorer. Laisse refroidir avant de garnir.'
        ]
      }
    },
    ingredients: [
      ing('Almond flour', 'Amandelmeel', 'Farine d\'amande', 150, 'g'),
      ing('Desiccated coconut', 'Geraspte kokos', 'Noix de coco râpée', 40, 'g'),
      ing('Chia seeds', 'Chiazaad', 'Graines de chia', 1, 'el'),
      ing('Stevia', 'Stevia', 'Stévia', 0.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 0.25, 'kl'),
      ing('Egg', 'Ei', 'Oeuf', 1, 'st.'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 2, 'el')
    ]
  },

  {
    slug: 'pumpkin-seed-butter-energy-bars',
    prepTime: '10 mins',
    cookTime: '1 hr',
    difficulty: diff.easy,
    servings: 8,
    category: ['snack', 'dessert'],
    translations: {
      en: {
        title: 'Pumpkin Seed Energy Bars',
        subtitle: 'No-bake bars with quinoa, chia and warm spice',
        description: 'Pumpkin seed butter, cooked quinoa, coconut and chia blended with pumpkin spice and set in the freezer, topped with toasted coconut. Keep them in the fridge for a quick snack.',
        instructions: [
          'Grease a loaf tin with coconut oil and line it with baking paper.',
          'Whisk the coconut milk, vanilla and stevia and set aside.',
          'Blitz the quinoa, pumpkin seed butter, spice, shredded coconut and chia in a food processor, then blend in the coconut milk mixture and finally the melted coconut oil.',
          'Toast the coconut flakes at 180 °C for 5–6 minutes. Spread the mixture in the tin and press the flakes on top.',
          'Freeze for about an hour, until set, then lift out and slice. Keep in the fridge or freezer.'
        ]
      },
      nl: {
        title: 'Energierepen met pompoenpitten',
        subtitle: 'Repen zonder oven met quinoa, chia en warme kruiden',
        description: 'Pompoenpittenpasta, gekookte quinoa, kokos en chia gemixt met speculaaskruiden en opgesteven in de diepvries, met geroosterde kokos erop. Bewaar ze in de koelkast voor een snelle snack.',
        instructions: [
          'Vet een cakevorm in met kokosolie en bekleed met bakpapier.',
          'Klop de kokosmelk, vanille en stevia en zet opzij.',
          'Mix de quinoa, pompoenpittenpasta, kruiden, geraspte kokos en chia in de keukenrobot, mix dan het kokosmelkmengsel erdoor en ten slotte de gesmolten kokosolie.',
          'Rooster de kokosschilfers 5–6 minuten op 180 °C. Strijk het mengsel uit in de vorm en druk de schilfers erop.',
          'Zet zo\'n uur in de diepvries tot het stevig is, haal eruit en snijd in repen. Bewaar in de koelkast of diepvries.'
        ]
      },
      fr: {
        title: 'Barres énergétiques aux graines de courge',
        subtitle: 'Des barres sans cuisson au quinoa, au chia et aux épices douces',
        description: 'Du beurre de graines de courge, du quinoa cuit, de la coco et du chia mixés avec des épices à speculoos et pris au congélateur, couverts de coco grillée. Garde-les au frigo pour une collation rapide.',
        instructions: [
          'Graisse un moule à cake d\'huile de coco et chemise-le de papier cuisson.',
          'Fouette le lait de coco, la vanille et la stévia et réserve.',
          'Mixe le quinoa, le beurre de graines de courge, les épices, la coco râpée et le chia au robot, puis ajoute le mélange au lait de coco et enfin l\'huile de coco fondue.',
          'Fais griller les copeaux de coco à 180 °C 5–6 minutes. Étale le mélange dans le moule et presse les copeaux dessus.',
          'Congèle environ une heure jusqu\'à ce que ce soit pris, démoule et coupe en barres. Garde au frigo ou au congélateur.'
        ]
      }
    },
    ingredients: [
      ing('Pumpkin seed butter', 'Pompoenpittenpasta', 'Beurre de graines de courge', 125, 'g'),
      ing('Cooked quinoa', 'Gekookte quinoa', 'Quinoa cuit', 90, 'g'),
      ing('Pumpkin pie spice', 'Speculaaskruiden', 'Épices pour speculoos', 1, 'kl'),
      ing('Desiccated coconut', 'Geraspte kokos', 'Noix de coco râpée', 20, 'g'),
      ing('Chia seeds', 'Chiazaad', 'Graines de chia', 2, 'el'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 60, 'ml'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 1, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', 0.5, 'kl'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 2, 'el'),
      ing('Coconut flakes', 'Kokosschilfers', 'Copeaux de coco', 15, 'g')
    ]
  },

  {
    slug: 'easy-sugar-free-eggnog',
    prepTime: '5 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 4,
    category: ['drink'],
    wiki: ['en:Eggnog'],
    translations: {
      en: {
        title: 'Sugar-Free Eggnog',
        subtitle: 'Advocaat\'s gentler cousin, no alcohol',
        description: 'Coconut and almond milk blended with eggs, vanilla, nutmeg and cinnamon until frothy. A festive drink for December without the sugar or the rum.',
        instructions: [
          'Put the coconut milk, almond milk, eggs, vanilla, stevia, nutmeg and cinnamon in a blender.',
          'Blend on high until frothy.',
          'Chill before serving.',
          'Pour into glasses and dust with cinnamon, with a cinnamon stick in each.'
        ]
      },
      nl: {
        title: 'Eggnog zonder suiker',
        subtitle: 'Het zachtere neefje van advocaat, zonder alcohol',
        description: 'Kokos- en amandelmelk gemixt met eieren, vanille, nootmuskaat en kaneel tot het schuimt. Een feestelijk drankje voor december, zonder suiker of rum.',
        instructions: [
          'Doe de kokosmelk, amandelmelk, eieren, vanille, stevia, nootmuskaat en kaneel in een blender.',
          'Mix op hoge snelheid tot het schuimt.',
          'Laat afkoelen voor je het opdient.',
          'Schenk in glazen en bestuif met kaneel, met een kaneelstokje in elk glas.'
        ]
      },
      fr: {
        title: 'Lait de poule sans sucre',
        subtitle: 'Le cousin plus doux de l\'advocaat, sans alcool',
        description: 'Du lait de coco et d\'amande mixé avec des œufs, de la vanille, de la muscade et de la cannelle jusqu\'à ce qu\'il mousse. Une boisson de fête pour décembre, sans sucre ni rhum.',
        instructions: [
          'Mets le lait de coco, le lait d\'amande, les œufs, la vanille, la stévia, la muscade et la cannelle dans un mixeur.',
          'Mixe à pleine vitesse jusqu\'à ce que ce soit mousseux.',
          'Mets au frais avant de servir.',
          'Verse dans des verres et saupoudre de cannelle, avec un bâton de cannelle dans chacun.'
        ]
      }
    },
    ingredients: [
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 350, 'ml'),
      ing('Almond milk', 'Amandelmelk', 'Lait d\'amande', 60, 'ml'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 1, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', 0.5, 'kl'),
      ing('Nutmeg', 'Nootmuskaat', 'Muscade', 0.5, 'kl'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 0.25, 'kl'),
      ing('Cinnamon sticks', 'Kaneelstokjes', 'Bâtons de cannelle', 4, 'st.')
    ]
  },

  {
    slug: 'coconut-mint-ice-cream',
    prepTime: '5 mins',
    cookTime: '20 mins',
    difficulty: diff.easy,
    servings: 3,
    category: ['dessert'],
    translations: {
      en: {
        title: 'Coconut Mint Ice Cream',
        subtitle: 'Cool, creamy and sugar-free',
        description: 'Coconut milk whisked with mint flavouring and stevia and churned into a refreshing ice cream. No cooking, just an ice cream maker.',
        instructions: [
          'Whisk the coconut milk, glycerin, mint flavouring, stevia and salt in a bowl.',
          'Pour it into your ice cream maker and churn for 20–25 minutes, until just set.',
          'For a firmer ice, freeze it in a closed tub for about 2 hours.',
          'Serve with fresh mint leaves.'
        ]
      },
      nl: {
        title: 'Kokos-muntijs',
        subtitle: 'Fris, romig en zonder suiker',
        description: 'Kokosmelk geklopt met muntaroma en stevia en gedraaid tot een verfrissend ijs. Niet koken, alleen een ijsmachine.',
        instructions: [
          'Klop de kokosmelk, glycerine, het muntaroma, de stevia en het zout samen in een kom.',
          'Giet in je ijsmachine en draai 20–25 minuten tot het net opgesteven is.',
          'Voor steviger ijs zet je het zo\'n 2 uur in een gesloten doos in de diepvries.',
          'Dien op met verse muntblaadjes.'
        ]
      },
      fr: {
        title: 'Glace coco-menthe',
        subtitle: 'Fraîche, crémeuse et sans sucre',
        description: 'Du lait de coco fouetté avec de l\'arôme de menthe et de la stévia, turbiné en une glace rafraîchissante. Sans cuisson, juste une sorbetière.',
        instructions: [
          'Fouette le lait de coco, la glycérine, l\'arôme de menthe, la stévia et le sel dans un bol.',
          'Verse dans la sorbetière et turbine 20–25 minutes, jusqu\'à ce que ce soit juste pris.',
          'Pour une glace plus ferme, congèle environ 2 heures dans une boîte fermée.',
          'Sers avec des feuilles de menthe fraîche.'
        ]
      }
    },
    ingredients: [
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 480, 'ml'),
      ing('Vegetable glycerin', 'Plantaardige glycerine', 'Glycérine végétale', 2, 'el'),
      ing('Alcohol-free mint extract', 'Alcoholvrij muntaroma', 'Arôme de menthe sans alcool', 1, 'kl'),
      ing('Stevia', 'Stevia', 'Stévia', 0.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'pinch'),
      ing('Mint', 'Munt', 'Menthe', 3, 'sprig')
    ]
  },

  {
    slug: 'coconut-ginger-clouds',
    prepTime: '10 mins',
    cookTime: '12 mins',
    difficulty: diff.easy,
    servings: 12,
    category: ['dessert', 'snack'],
    translations: {
      en: {
        title: 'Coconut Ginger Clouds',
        subtitle: 'Macaroon-style bites with fresh ginger',
        description: 'Whipped egg white folded with two kinds of coconut, vanilla and a little fresh ginger, baked into light, chewy macaroons. A cookie made of almost nothing.',
        instructions: [
          'Heat the oven to 180 °C and line a baking tray with baking paper.',
          'Whisk the egg whites until light and foamy.',
          'Whisk in the stevia, vanilla and ginger, then fold in the shredded coconut and coconut flakes.',
          'Drop tablespoon-sized heaps onto the tray and bake for 10–12 minutes, until just starting to brown.',
          'Let them cool on the tray for 10 minutes before lifting them off.'
        ]
      },
      nl: {
        title: 'Kokoswolkjes met gember',
        subtitle: 'Hapjes zoals kokosmakronen, met verse gember',
        description: 'Opgeklopt eiwit gemengd met twee soorten kokos, vanille en een beetje verse gember, gebakken tot lichte, taaie kokosmakronen. Een koekje van bijna niets.',
        instructions: [
          'Verwarm de oven voor op 180 °C en bekleed een bakplaat met bakpapier.',
          'Klop de eiwitten licht en schuimig.',
          'Klop de stevia, vanille en gember erdoor en spatel er dan de geraspte kokos en kokosschilfers door.',
          'Schep hoopjes ter grootte van een eetlepel op de plaat en bak 10–12 minuten, tot ze net beginnen te kleuren.',
          'Laat 10 minuten afkoelen op de plaat voor je ze eraf haalt.'
        ]
      },
      fr: {
        title: 'Nuages coco-gingembre',
        subtitle: 'Des bouchées façon congolais, au gingembre frais',
        description: 'Des blancs montés mêlés à deux sortes de coco, à la vanille et à un peu de gingembre frais, cuits en congolais légers et moelleux. Un biscuit fait de presque rien.',
        instructions: [
          'Préchauffe le four à 180 °C et garnis une plaque de papier cuisson.',
          'Fouette les blancs jusqu\'à ce qu\'ils soient légers et mousseux.',
          'Ajoute la stévia, la vanille et le gingembre en fouettant, puis incorpore la coco râpée et les copeaux de coco.',
          'Dépose des tas d\'une cuillère à soupe sur la plaque et enfourne 10–12 minutes, jusqu\'à ce qu\'ils commencent à dorer.',
          'Laisse-les refroidir 10 minutes sur la plaque avant de les décoller.'
        ]
      }
    },
    ingredients: [
      ing('Egg whites', 'Eiwitten', 'Blancs d\'oeufs', 3, 'st.'),
      ing('Stevia', 'Stevia', 'Stévia', 1, 'kl'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 1, 'el'),
      ing('Fresh ginger', 'Verse gember', 'Gingembre frais', 1, 'kl'),
      ing('Desiccated coconut', 'Geraspte kokos', 'Noix de coco râpée', 80, 'g'),
      ing('Coconut flakes', 'Kokosschilfers', 'Copeaux de coco', 60, 'g')
    ]
  },

  {
    slug: 'lemon-lime-tarts',
    prepTime: '2 hrs',
    cookTime: '15 mins',
    difficulty: diff.medium,
    servings: 8,
    category: ['dessert'],
    translations: {
      en: {
        title: 'Lemon-Lime Tartlets',
        subtitle: 'Buttery hazelnut shells with a creamy citrus yogurt filling',
        description: 'Little tart cases of hazelnut, buckwheat and butter baked in a muffin tin and filled with thick Greek yogurt bright with lemon and lime zest. Make the dough ahead.',
        instructions: [
          'Whisk the egg yolks with the stevia, salt and zests. Mix the hazelnut flour, buckwheat flour and flaxseed in another bowl.',
          'Beat the butter, add the yolk mixture, then the flours. Chill the dough for 1–2 hours.',
          'Stir the yogurt with the stevia, vanilla and the rest of the zest and keep it in the fridge.',
          'Oil 8 muffin holes and line each base with a circle of baking paper. Divide the dough into 8, flatten each piece to about 5 mm and press into the holes. Freeze for 30 minutes.',
          'Bake at 180 °C for 15 minutes, cool for 15–20 minutes, then lift the shells out and let them cool completely. Fill with the yogurt and top with lemon and lime slices.'
        ]
      },
      nl: {
        title: 'Citroen-limoentaartjes',
        subtitle: 'Boterige hazelnootbakjes met een romige citrusyoghurt',
        description: 'Kleine taartbakjes van hazelnoot, boekweit en boter, gebakken in een muffinvorm en gevuld met dikke Griekse yoghurt, fris van citroen- en limoenzeste. Maak het deeg op voorhand.',
        instructions: [
          'Klop de eidooiers met de stevia, het zout en de zestes. Meng het hazelnootmeel, boekweitmeel en lijnzaad in een andere kom.',
          'Klop de boter, voeg het dooiermengsel toe en dan het meel. Laat het deeg 1–2 uur rusten in de koelkast.',
          'Roer de yoghurt met de stevia, vanille en de rest van de zestes en zet in de koelkast.',
          'Vet 8 muffinholtes in en leg in elke bodem een rondje bakpapier. Verdeel het deeg in 8, druk elk stuk plat tot zo\'n 5 mm en druk in de holtes. Zet 30 minuten in de diepvries.',
          'Bak 15 minuten op 180 °C, laat 15–20 minuten afkoelen, haal de bakjes eruit en laat helemaal afkoelen. Vul met de yoghurt en leg er schijfjes citroen en limoen op.'
        ]
      },
      fr: {
        title: 'Tartelettes citron-citron vert',
        subtitle: 'Des fonds beurrés à la noisette, une crème de yaourt aux agrumes',
        description: 'De petits fonds de tarte à la noisette, au sarrasin et au beurre cuits dans un moule à muffins et garnis de yaourt grec épais relevé de zestes de citron et de citron vert. Prépare la pâte à l\'avance.',
        instructions: [
          'Fouette les jaunes d\'œuf avec la stévia, le sel et les zestes. Mélange la farine de noisette, la farine de sarrasin et le lin dans un autre bol.',
          'Travaille le beurre, ajoute le mélange aux jaunes, puis les farines. Mets la pâte 1–2 heures au frais.',
          'Mélange le yaourt avec la stévia, la vanille et le reste des zestes et garde au frigo.',
          'Huile 8 empreintes à muffins et pose un disque de papier cuisson au fond de chacune. Divise la pâte en 8, aplatis chaque morceau à environ 5 mm et presse-le dans les empreintes. Congèle 30 minutes.',
          'Enfourne 15 minutes à 180 °C, laisse tiédir 15–20 minutes, démoule les fonds et laisse refroidir complètement. Garnis de yaourt et décore de rondelles de citron et de citron vert.'
        ]
      }
    },
    ingredients: [
      ing('Egg yolks', 'Eidooiers', 'Jaunes d\'oeufs', 3, 'st.'),
      ing('Stevia', 'Stevia', 'Stévia', 3.5, 'kl'),
      ing('Salt', 'Zout', 'Sel', 1, 'pinch'),
      ing('Lemon zest', 'Citroenzeste', 'Zeste de citron', 2.5, 'kl'),
      ing('Lime zest', 'Limoenzeste', 'Zeste de citron vert', 2.5, 'kl'),
      ing('Hazelnut flour', 'Hazelnootmeel', 'Farine de noisette', 100, 'g'),
      ing('Buckwheat flour', 'Boekweitmeel', 'Farine de sarrasin', 60, 'g'),
      ing('Flaxseed meal', 'Gemalen lijnzaad', 'Graines de lin moulues', 30, 'g'),
      ing('Butter', 'Boter', 'Beurre', 115, 'g'),
      ing('Greek yogurt', 'Griekse yoghurt', 'Yaourt grec', 360, 'ml'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 0.75, 'kl'),
      ing('Lemon', 'Citroen', 'Citron', 1, 'st.'),
      ing('Lime', 'Limoen', 'Citron vert', 1, 'st.')
    ]
  },

  {
    slug: 'coconut-vanilla-custard',
    prepTime: '15 mins',
    cookTime: '25 mins',
    difficulty: diff.medium,
    servings: 4,
    category: ['dessert'],
    translations: {
      en: {
        title: 'Coconut Vanilla Custard',
        subtitle: 'Silky baked pots with a real vanilla pod',
        description: 'Egg yolks and coconut milk infused with vanilla seeds, baked gently in a water bath until just set. Pudding the way grandma made it, without the milk or sugar.',
        instructions: [
          'Heat the oven to 180 °C. Split the vanilla pod and scrape out the seeds.',
          'Whisk the egg yolks. Set a sieve over a bowl holding half the coconut milk.',
          'Heat the other half of the coconut milk with the stevia, vanilla seeds and pod until steaming — don\'t let it simmer.',
          'Whisk the warm milk into the yolks, then strain it into the bowl with the cold coconut milk and whisk.',
          'Pour into 4 cups, set them in a deep tin, add hot water halfway up their sides and cover tightly with foil. Bake for 25–30 minutes, until the edges are firm and the middles still soft. Serve at room temperature or cold, with coconut flakes.'
        ]
      },
      nl: {
        title: 'Kokos-vanillepuddinkjes',
        subtitle: 'Zijdezachte potjes uit de oven met een echt vanillestokje',
        description: 'Eidooiers en kokosmelk met vanillezaadjes, zachtjes gegaard in een waterbad tot ze net gestold zijn. Pudding zoals bomma hem maakte, zonder melk of suiker.',
        instructions: [
          'Verwarm de oven voor op 180 °C. Snijd het vanillestokje open en schraap de zaadjes eruit.',
          'Klop de eidooiers los. Hang een zeef boven een kom met de helft van de kokosmelk.',
          'Verwarm de andere helft van de kokosmelk met de stevia, vanillezaadjes en het stokje tot het dampt — niet laten koken.',
          'Klop de warme melk door de dooiers en zeef het dan in de kom met de koude kokosmelk en klop.',
          'Giet in 4 kopjes, zet ze in een diepe vorm, giet er heet water bij tot halverwege en dek goed af met aluminiumfolie. Bak 25–30 minuten, tot de randen stevig zijn en het midden nog zacht. Dien op op kamertemperatuur of koud, met kokosschilfers.'
        ]
      },
      fr: {
        title: 'Petits pots de crème coco-vanille',
        subtitle: 'Des crèmes soyeuses au four, à la vraie gousse de vanille',
        description: 'Des jaunes d\'œuf et du lait de coco infusés aux graines de vanille, cuits doucement au bain-marie jusqu\'à être juste pris. La crème comme celle de grand-mère, sans lait ni sucre.',
        instructions: [
          'Préchauffe le four à 180 °C. Fends la gousse de vanille et gratte les graines.',
          'Fouette les jaunes d\'œuf. Pose un tamis sur un bol contenant la moitié du lait de coco.',
          'Chauffe l\'autre moitié du lait de coco avec la stévia, les graines et la gousse de vanille jusqu\'à ce qu\'il fume — sans frémir.',
          'Verse le lait chaud sur les jaunes en fouettant, puis filtre dans le bol de lait de coco froid et fouette.',
          'Verse dans 4 ramequins, pose-les dans un plat profond, ajoute de l\'eau chaude à mi-hauteur et couvre bien d\'aluminium. Enfourne 25–30 minutes, jusqu\'à ce que les bords soient fermes et le centre encore souple. Sers à température ambiante ou froid, avec des copeaux de coco.'
        ]
      }
    },
    ingredients: [
      ing('Egg yolks', 'Eidooiers', 'Jaunes d\'oeufs', 4, 'st.'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 360, 'ml'),
      ing('Vanilla bean', 'Vanillestokje', 'Gousse de vanille', 1, 'st.'),
      ing('Stevia', 'Stevia', 'Stévia', 1, 'kl'),
      ing('Coconut flakes', 'Kokosschilfers', 'Copeaux de coco', 2, 'el')
    ]
  },

  {
    slug: 'almond-sponge-cake-lemon-curd',
    prepTime: '10 mins',
    cookTime: '25 mins',
    difficulty: diff.medium,
    servings: 8,
    category: ['dessert'],
    translations: {
      en: {
        title: 'Almond Sponge with Lemon Curd',
        subtitle: 'A light birthday cake, no flour, no sugar',
        description: 'An airy almond sponge raised with whipped egg whites, served with a quick, tangy lemon curd made with coconut oil. A cake for celebrations that still fits the diet.',
        instructions: [
          'Heat the oven to 180 °C. Oil a 20–23 cm cake tin and line the base with baking paper.',
          'Whisk the whites to stiff peaks. In another bowl whisk the yolks with the yogurt, stevia, vanilla and lemon zest.',
          'Gently fold the almond flour, whites and yolk mixture together and pour into the tin. Bake for 20–25 minutes, until the top springs back and a skewer comes out clean.',
          'Cool for 10 minutes in the tin, turn out, peel off the paper and cool on a rack.',
          'For the curd, whisk the eggs, stevia, vanilla and zest off the heat, then the coconut oil and lemon juice. Whisk constantly over medium heat for 1–2 minutes, until thick and opaque. Strain, cool and serve with the cake. The curd keeps 3–4 days in the fridge.'
        ]
      },
      nl: {
        title: 'Amandelbiscuit met lemon curd',
        subtitle: 'Een lichte verjaardagstaart, zonder bloem, zonder suiker',
        description: 'Een luchtige amandelbiscuit, opgeklopt met eiwit, met een snelle, frisse lemon curd gemaakt met kokosolie. Een taart voor feestjes die toch in het dieet past.',
        instructions: [
          'Verwarm de oven voor op 180 °C. Vet een taartvorm van 20–23 cm in en bekleed de bodem met bakpapier.',
          'Klop de eiwitten stijf. Klop in een andere kom de dooiers met de yoghurt, stevia, vanille en citroenzeste.',
          'Spatel het amandelmeel, het eiwit en het dooiermengsel voorzichtig samen en giet in de vorm. Bak 20–25 minuten, tot de bovenkant terugveert en een prikker er droog uitkomt.',
          'Laat 10 minuten afkoelen in de vorm, stort, trek het papier eraf en laat afkoelen op een rooster.',
          'Voor de curd klop je buiten het vuur de eieren, stevia, vanille en zeste, en dan de kokosolie en het citroensap. Klop 1–2 minuten onafgebroken op middelhoog vuur tot het dik en ondoorzichtig is. Zeef, laat afkoelen en dien op bij de taart. De curd blijft 3–4 dagen goed in de koelkast.'
        ]
      },
      fr: {
        title: 'Génoise aux amandes et lemon curd',
        subtitle: 'Un gâteau d\'anniversaire léger, sans farine ni sucre',
        description: 'Une génoise aux amandes aérienne, gonflée aux blancs montés, servie avec un lemon curd minute et acidulé à l\'huile de coco. Un gâteau de fête qui reste dans le régime.',
        instructions: [
          'Préchauffe le four à 180 °C. Huile un moule de 20–23 cm et chemise le fond de papier cuisson.',
          'Monte les blancs en neige ferme. Dans un autre bol, fouette les jaunes avec le yaourt, la stévia, la vanille et le zeste de citron.',
          'Incorpore délicatement la farine d\'amande, les blancs et le mélange aux jaunes et verse dans le moule. Enfourne 20–25 minutes, jusqu\'à ce que le dessus rebondisse et qu\'une pique ressorte sèche.',
          'Laisse tiédir 10 minutes dans le moule, démoule, retire le papier et laisse refroidir sur une grille.',
          'Pour le curd, fouette hors du feu les œufs, la stévia, la vanille et le zeste, puis l\'huile de coco et le jus de citron. Fouette sans arrêt à feu moyen 1–2 minutes, jusqu\'à ce que ce soit épais et opaque. Filtre, laisse refroidir et sers avec le gâteau. Le curd se garde 3–4 jours au frigo.'
        ]
      }
    },
    ingredients: [
      ing('Eggs', 'Eieren', 'Oeufs', 8, 'st.'),
      ing('Plain yogurt', 'Natuuryoghurt', 'Yaourt nature', 120, 'ml'),
      ing('Stevia', 'Stevia', 'Stévia', 3.5, 'kl'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 4, 'kl'),
      ing('Lemon zest', 'Citroenzeste', 'Zeste de citron', 2, 'kl'),
      ing('Almond flour', 'Amandelmeel', 'Farine d\'amande', 175, 'g'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 60, 'ml'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 2, 'el')
    ]
  },

  {
    slug: 'coconut-ginger-cookies',
    prepTime: '10 mins',
    cookTime: '25 mins',
    difficulty: diff.easy,
    servings: 18,
    category: ['dessert', 'snack'],
    translations: {
      en: {
        title: 'Coconut Ginger Cookies',
        subtitle: 'Soft cookies with a real ginger bite',
        description: 'Coconut-flour cookies with lots of fresh grated ginger and hemp seeds, lightened with whipped egg white. Soft in the middle, golden at the edges.',
        instructions: [
          'Heat the oven to 180 °C and line a baking tray with baking paper.',
          'Mix the coconut flour, hemp seeds and salt.',
          'Whisk the egg whites to soft peaks, then fold in the coconut milk, stevia and ginger.',
          'Stir in the dry mix for a minute. If it\'s too dry, add a little more coconut milk a tablespoon at a time.',
          'Drop rounded tablespoons onto the tray, sprinkle with hemp seeds and bake for 25–30 minutes, until the edges brown. Let them cool.'
        ]
      },
      nl: {
        title: 'Kokos-gemberkoekjes',
        subtitle: 'Zachte koekjes met een echte gemberbeet',
        description: 'Koekjes van kokosmeel met veel verse geraspte gember en hennepzaad, luchtig gemaakt met opgeklopt eiwit. Zacht in het midden, goudbruin aan de randen.',
        instructions: [
          'Verwarm de oven voor op 180 °C en bekleed een bakplaat met bakpapier.',
          'Meng het kokosmeel, het hennepzaad en het zout.',
          'Klop de eiwitten tot zachte pieken en spatel er de kokosmelk, stevia en gember door.',
          'Roer er een minuut het droge mengsel door. Is het te droog, voeg dan eetlepel per eetlepel wat kokosmelk toe.',
          'Schep bolle eetlepels op de plaat, bestrooi met hennepzaad en bak 25–30 minuten, tot de randen bruin worden. Laat afkoelen.'
        ]
      },
      fr: {
        title: 'Biscuits coco-gingembre',
        subtitle: 'Des biscuits tendres avec un vrai piquant de gingembre',
        description: 'Des biscuits à la farine de coco avec beaucoup de gingembre frais râpé et des graines de chanvre, allégés aux blancs montés. Moelleux au centre, dorés sur les bords.',
        instructions: [
          'Préchauffe le four à 180 °C et garnis une plaque de papier cuisson.',
          'Mélange la farine de coco, les graines de chanvre et le sel.',
          'Monte les blancs en neige souple, puis incorpore le lait de coco, la stévia et le gingembre.',
          'Ajoute le mélange sec et remue une minute. Si c\'est trop sec, ajoute un peu de lait de coco cuillère par cuillère.',
          'Dépose des cuillerées bombées sur la plaque, parsème de graines de chanvre et enfourne 25–30 minutes, jusqu\'à ce que les bords dorent. Laisse refroidir.'
        ]
      }
    },
    ingredients: [
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 60, 'g'),
      ing('Hemp seeds', 'Hennepzaad', 'Graines de chanvre', 3, 'el'),
      ing('Salt', 'Zout', 'Sel', 1, 'pinch'),
      ing('Egg whites', 'Eiwitten', 'Blancs d\'oeufs', 2, 'st.'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 180, 'ml'),
      ing('Stevia', 'Stevia', 'Stévia', 1, 'kl'),
      ing('Fresh ginger', 'Verse gember', 'Gingembre frais', 2, 'el')
    ]
  },

  {
    slug: 'no-bake-almond-coconut-balls',
    prepTime: '10 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 15,
    category: ['snack', 'dessert'],
    translations: {
      en: {
        title: 'No-Bake Almond Coconut Balls',
        subtitle: 'Five minutes in the food processor',
        description: 'Almond butter, coconut flour and coconut blended together, rolled into bite-sized balls and coated in more coconut. The sweet snack to keep in the fridge for weak moments.',
        instructions: [
          'Set aside a heaped tablespoon of the shredded coconut.',
          'Blend the rest of the ingredients in a food processor until well mixed.',
          'Roll into bite-sized balls with your hands.',
          'Roll them in the reserved coconut and chill for 30 minutes.'
        ]
      },
      nl: {
        title: 'Amandel-kokosballetjes zonder oven',
        subtitle: 'Vijf minuten in de keukenrobot',
        description: 'Amandelpasta, kokosmeel en kokos samen gemixt, tot hapklare balletjes gerold en door nog wat kokos gehaald. De zoete snack om in de koelkast te hebben voor zwakke momenten.',
        instructions: [
          'Hou een bolle eetlepel geraspte kokos opzij.',
          'Mix de rest van de ingrediënten in de keukenrobot tot alles goed gemengd is.',
          'Rol er met je handen hapklare balletjes van.',
          'Rol ze door de opzijgehouden kokos en zet 30 minuten in de koelkast.'
        ]
      },
      fr: {
        title: 'Boules amande-coco sans cuisson',
        subtitle: 'Cinq minutes au robot',
        description: 'Du beurre d\'amande, de la farine de coco et de la coco mixés ensemble, roulés en bouchées et enrobés de coco. Le snack sucré à garder au frigo pour les moments de faiblesse.',
        instructions: [
          'Réserve une cuillère à soupe bombée de coco râpée.',
          'Mixe le reste des ingrédients au robot jusqu\'à ce que ce soit bien mélangé.',
          'Forme des bouchées à la main.',
          'Roule-les dans la coco réservée et mets 30 minutes au frais.'
        ]
      }
    },
    ingredients: [
      ing('Almond butter', 'Amandelpasta', 'Beurre d\'amande', 250, 'g'),
      ing('Coconut flour', 'Kokosmeel', 'Farine de coco', 60, 'g'),
      ing('Desiccated coconut', 'Geraspte kokos', 'Noix de coco râpée', 40, 'g'),
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 4, 'el'),
      ing('Coconut oil', 'Kokosolie', 'Huile de coco', 4, 'el'),
      ing('Stevia', 'Stevia', 'Stévia', 0.5, 'kl')
    ]
  },

  {
    slug: 'coconut-smoothie',
    prepTime: '5 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 1,
    category: ['drink', 'breakfast'],
    translations: {
      en: {
        title: 'Very Coconut Smoothie',
        subtitle: 'Thick, cold and very coconut',
        description: 'Coconut milk blended with coconut milk ice cubes, almond butter, chia and coconut extract into a thick, creamy smoothie. Freeze a tray of coconut milk the day before.',
        instructions: [
          'Put the coconut milk, coconut milk ice cubes, almond butter, chia, coconut extract and stevia in a blender.',
          'Blend until smooth.',
          'Pour into a glass and scatter with coconut flakes.'
        ]
      },
      nl: {
        title: 'Heel kokosachtige smoothie',
        subtitle: 'Dik, koud en heel veel kokos',
        description: 'Kokosmelk gemixt met ijsblokjes van kokosmelk, amandelpasta, chia en kokosextract tot een dikke, romige smoothie. Vries de dag ervoor een bakje kokosmelk in.',
        instructions: [
          'Doe de kokosmelk, de ijsblokjes van kokosmelk, de amandelpasta, chia, het kokosextract en de stevia in een blender.',
          'Mix glad.',
          'Schenk in een glas en strooi er kokosschilfers over.'
        ]
      },
      fr: {
        title: 'Smoothie très coco',
        subtitle: 'Épais, glacé et très coco',
        description: 'Du lait de coco mixé avec des glaçons de lait de coco, du beurre d\'amande, du chia et de l\'extrait de coco en un smoothie épais et crémeux. Congèle un bac de lait de coco la veille.',
        instructions: [
          'Mets le lait de coco, les glaçons de lait de coco, le beurre d\'amande, le chia, l\'extrait de coco et la stévia dans un mixeur.',
          'Mixe jusqu\'à ce que ce soit lisse.',
          'Verse dans un verre et parsème de copeaux de coco.'
        ]
      }
    },
    ingredients: [
      ing('Coconut milk', 'Kokosmelk', 'Lait de coco', 360, 'ml'),
      ing('Almond butter', 'Amandelpasta', 'Beurre d\'amande', 2, 'el'),
      ing('Chia seeds', 'Chiazaad', 'Graines de chia', 1, 'kl'),
      ing('Alcohol-free coconut extract', 'Alcoholvrij kokosextract', 'Extrait de coco sans alcool', 1, 'kl'),
      ing('Liquid stevia', 'Vloeibare stevia', 'Stévia liquide', 4, 'drops'),
      ing('Coconut flakes', 'Kokosschilfers', 'Copeaux de coco', 1, 'el')
    ]
  },

  {
    slug: 'cool-almond-mint-smoothie',
    prepTime: '5 mins',
    cookTime: '0 mins',
    difficulty: diff.easy,
    servings: 2,
    category: ['drink'],
    translations: {
      en: {
        title: 'Almond Mint Smoothie',
        subtitle: 'Frothy, cold and fresh',
        description: 'Almond milk blended with almond butter, vanilla and fresh mint leaves over almond milk ice cubes. A refreshing glass for a warm afternoon.',
        instructions: [
          'Put the almond milk, almond butter, vanilla, stevia, mint leaves and almond milk ice cubes in a blender.',
          'Blend until smooth and frothy.',
          'Serve in chilled glasses.'
        ]
      },
      nl: {
        title: 'Amandel-muntsmoothie',
        subtitle: 'Schuimig, koud en fris',
        description: 'Amandelmelk gemixt met amandelpasta, vanille en verse muntblaadjes over ijsblokjes van amandelmelk. Een verfrissend glas voor een warme namiddag.',
        instructions: [
          'Doe de amandelmelk, amandelpasta, vanille, stevia, muntblaadjes en ijsblokjes van amandelmelk in een blender.',
          'Mix tot het glad en schuimig is.',
          'Dien op in gekoelde glazen.'
        ]
      },
      fr: {
        title: 'Smoothie amande-menthe',
        subtitle: 'Mousseux, glacé et frais',
        description: 'Du lait d\'amande mixé avec du beurre d\'amande, de la vanille et des feuilles de menthe fraîche sur des glaçons de lait d\'amande. Un verre rafraîchissant pour un après-midi chaud.',
        instructions: [
          'Mets le lait d\'amande, le beurre d\'amande, la vanille, la stévia, les feuilles de menthe et les glaçons de lait d\'amande dans un mixeur.',
          'Mixe jusqu\'à ce que ce soit lisse et mousseux.',
          'Sers dans des verres bien froids.'
        ]
      }
    },
    ingredients: [
      ing('Almond milk', 'Amandelmelk', 'Lait d\'amande', 360, 'ml'),
      ing('Almond butter', 'Amandelpasta', 'Beurre d\'amande', 2, 'el'),
      ing('Alcohol-free vanilla extract', 'Alcoholvrij vanille-extract', 'Extrait de vanille sans alcool', 1.5, 'kl'),
      ing('Liquid stevia', 'Vloeibare stevia', 'Stévia liquide', 8, 'drops'),
      ing('Mint', 'Munt', 'Menthe', 10, 'st.')
    ]
  }
];
