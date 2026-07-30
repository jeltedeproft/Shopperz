/**
 * Belgian classics, batch two.
 *
 * Weighted towards soups, lunch dishes and desserts: after the first batch the
 * book held 83 mains against 8 soups, which is not what a week of cooking
 * actually looks like.
 *
 * Same rules as batch one — see belgian_recipes.js. Amounts are raw and get
 * canonicalised by ingredients.js on the way in.
 */

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });

module.exports = [
  {
    id: 'boulets-liegeois',
    prepTime: '25 mins',
    cookTime: '50 mins',
    difficulty: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' },
    servings: 4,
    category: ['main'],
    wiki: ['fr:Boulets à la liégeoise', 'nl:Luikse balletjes'],
    translations: {
      en: {
        title: 'Boulets à la Liégeoise',
        subtitle: 'Liège meatballs in a dark sirop de Liège sauce',
        description: 'Liège\'s own meatball, and nothing like the tomato version. The sauce is built on onions, vinegar and a heavy spoon of Liège syrup, so it lands sweet, sour and dark all at once.',
        instructions: [
          'Soak the torn bread in the milk until soft, then squeeze it out.',
          'Mix the minced meat with the bread, egg, half the chopped onion, parsley, salt, pepper and nutmeg, and shape four large balls — these are meant to be a fist-sized meal, not a garnish.',
          'Brown them all over in butter, then lift them out.',
          'Cook the remaining onions in the same pot over low heat for 15 minutes, until properly soft and beginning to caramelise.',
          'Add the vinegar and let it cook away almost completely — this is what stops the sauce being merely sweet.',
          'Stir in the Liège syrup, the stock, the bay leaf and the thyme, then return the meatballs.',
          'Cover and simmer gently for 40 minutes, turning them twice so they glaze all over.',
          'If the sauce is still thin, lift the meatballs out and let it reduce. Serve with fries and apple compote.'
        ]
      },
      nl: {
        title: 'Luikse Balletjes',
        subtitle: 'Boulets met een donkere saus van Luikse siroop',
        description: 'De Luikse balletjes, en niets zoals de versie in tomatensaus. De saus is gebouwd op uien, azijn en een flinke lepel Luikse siroop: zoet, zuur en donker tegelijk.',
        instructions: [
          'Week het gescheurde brood in de melk tot het zacht is en knijp het uit.',
          'Meng het gehakt met het brood, het ei, de helft van de gesnipperde ui, peterselie, peper, zout en nootmuskaat en vorm vier grote ballen — dit zijn maaltijdballen, geen garnituur.',
          'Bak ze rondom bruin in boter en haal ze uit de pot.',
          'Stoof de rest van de uien 15 minuten op een zacht vuur, tot ze echt zacht zijn en beginnen te karamelliseren.',
          'Voeg de azijn toe en laat die bijna volledig verdampen — dat is wat de saus behoedt voor louter zoet zijn.',
          'Roer de Luikse siroop, de bouillon, het laurierblad en de tijm erdoor en leg de balletjes terug.',
          'Doe het deksel op de pot en laat 40 minuten zachtjes sudderen, keer ze twee keer zodat ze rondom glazuren.',
          'Is de saus nog te dun, haal de balletjes eruit en laat ze inkoken. Serveer met frieten en appelmoes.'
        ]
      },
      fr: {
        title: 'Boulets à la Liégeoise',
        subtitle: 'Boulets liégeois en sauce au sirop de Liège',
        description: 'Le boulet liégeois n\'a rien à voir avec la version tomate. La sauce se construit sur l\'oignon, le vinaigre et une bonne cuillère de sirop de Liège : sucré, acide et sombre à la fois.',
        instructions: [
          'Faites tremper le pain émietté dans le lait jusqu\'à ramollissement, puis pressez-le.',
          'Mélangez le haché avec le pain, l\'oeuf, la moitié de l\'oignon émincé, le persil, sel, poivre et muscade, et façonnez quatre gros boulets — c\'est un plat, pas une garniture.',
          'Faites-les dorer de tous côtés au beurre, puis retirez-les.',
          'Faites fondre le reste des oignons à feu doux pendant 15 minutes, jusqu\'à ce qu\'ils commencent à caraméliser.',
          'Ajoutez le vinaigre et laissez-le s\'évaporer presque entièrement : c\'est ce qui empêche la sauce d\'être seulement sucrée.',
          'Incorporez le sirop de Liège, le bouillon, le laurier et le thym, puis remettez les boulets.',
          'Couvrez et laissez mijoter 40 minutes en les retournant deux fois pour qu\'ils se glacent.',
          'Si la sauce reste liquide, retirez les boulets et faites-la réduire. Servez avec frites et compote de pommes.'
        ]
      }
    },
    ingredients: [
      ing('Minced meat', 'Gemengd gehakt', 'Haché mélangé', 800, 'g'),
      ing('Onion', 'Ui', 'Oignon', 4, 'st.'),
      ing('Liège syrup', 'Luikse siroop', 'Sirop de Liège', 3, 'el'),
      ing('Vinegar', 'Azijn', 'Vinaigre', 3, 'el'),
      ing('Beef broth', 'Runderbouillon', 'Bouillon de boeuf', 400, 'ml'),
      ing('Slices of bread', 'Boterhammen', 'Tranches de pain', 2, 'st.'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 100, 'ml'),
      ing('Eggs', 'Eieren', 'Oeufs', 1, 'st.'),
      ing('Butter', 'Boter', 'Beurre', 50, 'g'),
      ing('Parsley', 'Peterselie', 'Persil', 2, 'el'),
      ing('Bay leaf', 'Laurier', 'Laurier', 1, 'st.'),
      ing('Thyme', 'Tijm', 'Thym', 2, 'sprig')
    ]
  },

  {
    id: 'kaaskroketten',
    prepTime: '40 mins',
    cookTime: '15 mins',
    difficulty: { en: 'Hard', nl: 'Moeilijk', fr: 'Difficile' },
    servings: 4,
    category: ['snack', 'main'],
    wiki: ['nl:Kaaskroket', 'fr:Croquette au fromage'],
    translations: {
      en: {
        title: 'Kaaskroketten',
        subtitle: 'Cheese croquettes with a molten middle',
        description: 'The vegetarian half of the brasserie croquette pair. Old Gruyère and a hard cheese for bite, set into a very thick béchamel and chilled overnight.',
        instructions: [
          'Melt the butter, stir in the flour and cook the roux for two minutes without letting it colour.',
          'Whisk in the warm milk a little at a time until you have a very thick, glossy sauce.',
          'Take it off the heat and stir in both cheeses until they melt completely.',
          'Beat in the egg yolks, season hard with nutmeg, pepper and only a little salt — the cheese brings plenty.',
          'Spread into an oiled dish about 3 cm deep, press cling film onto the surface and refrigerate overnight.',
          'Cut into blocks and coat each in flour, beaten egg and breadcrumbs. Repeat the egg and crumb for a crust that will hold.',
          'Fry at 180°C for 3 minutes until deep gold. If one bursts, the coating was too thin or the fat too cool.',
          'Serve with fried parsley and a wedge of lemon.'
        ]
      },
      nl: {
        title: 'Kaaskroketten',
        subtitle: 'Kaaskroketten met een lopend hart',
        description: 'De vegetarische helft van het brasserieduo. Oude gruyère en een harde kaas voor pit, vastgezet in een zeer dikke bechamel en een nacht koud gedraaid.',
        instructions: [
          'Smelt de boter, roer de bloem erdoor en gaar de roux twee minuten zonder te kleuren.',
          'Klop er beetje bij beetje de warme melk door tot je een zeer dikke, glanzende saus hebt.',
          'Haal van het vuur en roer beide kazen erdoor tot ze volledig gesmolten zijn.',
          'Klop de eierdooiers erdoor en kruid stevig met nootmuskaat, peper en slechts weinig zout — de kaas brengt genoeg.',
          'Strijk uit in een ingevette schaal van zo\'n 3 cm dik, druk folie op het oppervlak en zet een nacht in de koelkast.',
          'Snijd in blokken en haal ze door bloem, losgeklopt ei en paneermeel. Herhaal ei en paneermeel voor een korst die houdt.',
          'Frituur 3 minuten op 180°C tot diep goudbruin. Barst er een open, dan was de panering te dun of het vet te koud.',
          'Serveer met gefrituurde peterselie en een partje citroen.'
        ]
      },
      fr: {
        title: 'Croquettes au Fromage',
        subtitle: 'Croquettes au fromage au coeur coulant',
        description: 'La moitié végétarienne du duo de brasserie. Du vieux gruyère et un fromage à pâte dure pour le caractère, pris dans une béchamel très épaisse refroidie une nuit.',
        instructions: [
          'Faites fondre le beurre, incorporez la farine et cuisez le roux deux minutes sans coloration.',
          'Versez le lait chaud progressivement en fouettant jusqu\'à obtenir une sauce très épaisse et brillante.',
          'Hors du feu, incorporez les deux fromages jusqu\'à fonte complète.',
          'Ajoutez les jaunes d\'oeuf, assaisonnez fortement de muscade, de poivre et de très peu de sel.',
          'Étalez dans un plat huilé sur 3 cm, filmez au contact et réfrigérez une nuit.',
          'Détaillez en blocs et passez-les dans la farine, l\'oeuf battu puis la chapelure. Doublez l\'opération.',
          'Frisez 3 minutes à 180°C jusqu\'à belle couleur. Si une croquette éclate, la panure était trop fine ou le bain trop froid.',
          'Servez avec du persil frit et un quartier de citron.'
        ]
      }
    },
    ingredients: [
      ing('Gruyère cheese', 'Gruyère', 'Gruyère', 200, 'g'),
      ing('Grated cheese', 'Geraspte kaas', 'Fromage râpé', 100, 'g'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 500, 'ml'),
      ing('Butter', 'Boter', 'Beurre', 80, 'g'),
      ing('Flour', 'Bloem', 'Farine', 90, 'g'),
      ing('Egg yolk', 'Eidooier', 'Jaune d\'oeuf', 2, 'st.'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Breadcrumbs', 'Paneermeel', 'Chapelure', 200, 'g'),
      ing('Nutmeg', 'Nootmuskaat', 'Noix de muscade', 1, 'pinch'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'bunch')
    ]
  },

  {
    id: 'blinde-vinken',
    prepTime: '30 mins',
    cookTime: '1 hr',
    difficulty: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' },
    servings: 4,
    category: ['main'],
    wiki: ['nl:Blinde vink', 'en:Beef olive'],
    translations: {
      en: {
        title: 'Blinde Vinken',
        subtitle: 'Veal rolls stuffed with minced meat',
        description: 'Thin escalopes wrapped around a seasoned mince stuffing and braised slowly. The name means "blind finches" — nobody agrees why, and it has never mattered.',
        instructions: [
          'Soak the bread in the milk, squeeze it out and mix it with the minced meat, egg, parsley, salt, pepper and nutmeg.',
          'Lay the escalopes out and beat them thin between two sheets of cling film if the butcher has not already.',
          'Put a line of stuffing along one edge of each, roll them up and tie with kitchen string, or pin them with a cocktail stick.',
          'Season the rolls and brown them in butter on all sides. Take them out.',
          'Soften the chopped onion in the same pot, then pour in the stock and add the bay leaf and thyme.',
          'Return the rolls, cover, and simmer very gently for 45 minutes, turning once.',
          'Lift them out and keep warm. Reduce the sauce until it coats a spoon, then whisk in the cold butter off the heat.',
          'Remove the string before serving, with mash or stoemp.'
        ]
      },
      nl: {
        title: 'Blinde Vinken',
        subtitle: 'Kalfslapjes gevuld met gehakt',
        description: 'Dunne lapjes gerold rond een gekruide gehaktvulling en traag gestoofd. De naam betekent letterlijk blinde vinken — niemand is het eens over waarom, en dat heeft nooit uitgemaakt.',
        instructions: [
          'Week het brood in de melk, knijp het uit en meng het met het gehakt, het ei, peterselie, peper, zout en nootmuskaat.',
          'Leg de lapjes open en klop ze dun tussen twee vellen folie als de slager dat nog niet deed.',
          'Leg een streep vulling langs één rand, rol ze op en bind ze met keukentouw of zet ze vast met een prikker.',
          'Kruid de rolletjes en bak ze rondom bruin in boter. Haal ze uit de pan.',
          'Stoof de gesnipperde ui in dezelfde pot, giet de bouillon erbij en voeg laurier en tijm toe.',
          'Leg de rolletjes terug, doe het deksel erop en laat 45 minuten heel zachtjes sudderen, keer ze één keer.',
          'Haal ze eruit en houd ze warm. Kook de saus in tot ze aan de lepel blijft hangen en klop er buiten het vuur de koude boter door.',
          'Verwijder het touw voor je opdient, met puree of stoemp.'
        ]
      },
      fr: {
        title: 'Oiseaux sans Tête',
        subtitle: 'Paupiettes de veau farcies au haché',
        description: 'De fines escalopes roulées autour d\'une farce de haché et braisées lentement. En néerlandais on les appelle « pinsons aveugles » ; personne ne sait pourquoi.',
        instructions: [
          'Faites tremper le pain dans le lait, pressez-le et mélangez-le au haché, à l\'oeuf, au persil, sel, poivre et muscade.',
          'Étalez les escalopes et aplatissez-les entre deux films si le boucher ne l\'a pas fait.',
          'Déposez un boudin de farce sur un bord, roulez et ficelez, ou fixez avec un pique-olive.',
          'Assaisonnez les paupiettes et faites-les dorer au beurre sur toutes les faces. Retirez-les.',
          'Faites revenir l\'oignon dans la même cocotte, versez le bouillon et ajoutez laurier et thym.',
          'Remettez les paupiettes, couvrez et laissez mijoter très doucement 45 minutes en les retournant une fois.',
          'Retirez-les et réservez au chaud. Faites réduire la sauce puis montez-la au beurre froid hors du feu.',
          'Retirez la ficelle avant de servir, avec une purée ou un stoemp.'
        ]
      }
    },
    ingredients: [
      ing('Veal escalopes', 'Kalfslapjes', 'Escalopes de veau', 8, 'st.'),
      ing('Minced meat', 'Gemengd gehakt', 'Haché mélangé', 400, 'g'),
      ing('Slices of bread', 'Boterhammen', 'Tranches de pain', 1, 'st.'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 60, 'ml'),
      ing('Eggs', 'Eieren', 'Oeufs', 1, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Beef broth', 'Runderbouillon', 'Bouillon de boeuf', 400, 'ml'),
      ing('Butter', 'Boter', 'Beurre', 70, 'g'),
      ing('Parsley', 'Peterselie', 'Persil', 2, 'el'),
      ing('Bay leaf', 'Laurier', 'Laurier', 1, 'st.'),
      ing('Thyme', 'Tijm', 'Thym', 2, 'sprig')
    ]
  },

  {
    id: 'coq-a-la-biere',
    prepTime: '25 mins',
    cookTime: '1 hr 15 mins',
    difficulty: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' },
    servings: 4,
    category: ['main'],
    wiki: ['fr:Coq à la bière', 'en:Coq au vin'],
    translations: {
      en: {
        title: 'Coq à la Bière',
        subtitle: 'Chicken braised in Belgian ale with mushrooms',
        description: 'The Walloon answer to coq au vin, made with a blond abbey ale instead of red wine. Lighter, faintly bitter, finished with cream.',
        instructions: [
          'Season the chicken pieces and brown them hard in butter, skin side first, until properly golden. Do this in batches.',
          'Set the chicken aside and cook the bacon bits in the same pot until their fat runs.',
          'Add the chopped shallots and the mushrooms and cook until any liquid has evaporated and the mushrooms start to colour.',
          'Pour in the beer, scraping the bottom of the pot, and let it bubble for two minutes to cook off the raw edge.',
          'Return the chicken with the bay leaf, thyme and a spoon of mustard. Cover and simmer for 45 minutes.',
          'Lift out the chicken and keep it warm.',
          'Reduce the sauce by about a third, then stir in the cream and let it thicken for a few minutes.',
          'Put the chicken back to warm through, season, and serve with croquettes or boiled potatoes.'
        ]
      },
      nl: {
        title: 'Kip in Bier',
        subtitle: 'Kip gestoofd in blond abdijbier met champignons',
        description: 'Het Waalse antwoord op coq au vin, met blond abdijbier in plaats van rode wijn. Lichter, licht bitter, afgewerkt met room.',
        instructions: [
          'Kruid de kipstukken en bak ze goed bruin in boter, eerst op het vel. Doe dat in porties.',
          'Zet de kip opzij en bak de spekblokjes uit in dezelfde pot.',
          'Voeg de gesnipperde sjalotten en de champignons toe en bak tot het vocht verdampt is en de champignons kleuren.',
          'Giet het bier erbij, schraap de bodem los en laat twee minuten doorkoken om de scherpte eraf te halen.',
          'Doe de kip terug met laurier, tijm en een lepel mosterd. Deksel erop en 45 minuten laten sudderen.',
          'Haal de kip eruit en houd ze warm.',
          'Kook de saus met ongeveer een derde in, roer er dan de room door en laat enkele minuten binden.',
          'Leg de kip terug om door te warmen, kruid bij en serveer met kroketten of gekookte aardappelen.'
        ]
      },
      fr: {
        title: 'Coq à la Bière',
        subtitle: 'Poulet mijoté à la bière blonde d\'abbaye et aux champignons',
        description: 'La réponse wallonne au coq au vin, à la bière blonde d\'abbaye plutôt qu\'au vin rouge. Plus léger, légèrement amer, terminé à la crème.',
        instructions: [
          'Assaisonnez les morceaux de poulet et faites-les bien dorer au beurre, côté peau d\'abord, par petites quantités.',
          'Réservez le poulet et faites rendre les lardons dans la même cocotte.',
          'Ajoutez les échalotes émincées et les champignons, et cuisez jusqu\'à évaporation du liquide et coloration.',
          'Versez la bière en grattant le fond et laissez bouillonner deux minutes.',
          'Remettez le poulet avec le laurier, le thym et une cuillère de moutarde. Couvrez et laissez mijoter 45 minutes.',
          'Retirez le poulet et réservez-le au chaud.',
          'Faites réduire la sauce d\'un tiers, incorporez la crème et laissez épaissir quelques minutes.',
          'Remettez le poulet à réchauffer, rectifiez et servez avec des croquettes ou des pommes nature.'
        ]
      }
    },
    ingredients: [
      ing('Chicken', 'Kip', 'Poulet', 1400, 'g'),
      ing('Blond abbey beer', 'Blond abdijbier', 'Bière blonde d\'abbaye', 500, 'ml'),
      ing('Mushroom', 'Champignons', 'Champignons', 400, 'g'),
      ing('Bacon bits', 'Spekblokjes', 'Lardons', 150, 'g'),
      ing('Shallot', 'Sjalot', 'Échalote', 4, 'st.'),
      ing('Heavy cream', 'Room', 'Crème épaisse', 200, 'ml'),
      ing('Butter', 'Boter', 'Beurre', 50, 'g'),
      ing('Belgian mustard', 'Belgische mosterd', 'Moutarde belge', 1, 'el'),
      ing('Bay leaf', 'Laurier', 'Laurier', 2, 'st.'),
      ing('Thyme', 'Tijm', 'Thym', 3, 'sprig')
    ]
  },

  {
    id: 'boudin-appelmoes',
    prepTime: '15 mins',
    cookTime: '30 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 4,
    category: ['main'],
    wiki: ['fr:Boudin noir', 'nl:Bloedworst'],
    translations: {
      en: {
        title: 'Boudin met Appelmoes',
        subtitle: 'Black and white pudding with apple compote and mash',
        description: 'A winter market dish. The sweetness of the apple is not a garnish here — it is the point, cutting straight through the richness of the sausage.',
        instructions: [
          'Peel and core the apples, cut them into chunks and put them in a pot with a splash of water, the sugar and the cinnamon.',
          'Cover and cook on low for 20 minutes until they collapse. Stir to a rough compote and leave it slightly chunky.',
          'Boil the potatoes in salted water until they give way to a knife, then drain and let the steam escape.',
          'Mash them with the warm milk and most of the butter. Season well with salt and nutmeg.',
          'Prick the sausages once or twice so they do not split, and fry them gently in the rest of the butter, about 6 minutes a side.',
          'Do not rush them on a high heat — black pudding turns grainy if it is fried hard.',
          'Serve each plate with sausage, a mound of mash and a generous spoon of warm apple compote.'
        ]
      },
      nl: {
        title: 'Boudin met Appelmoes',
        subtitle: 'Bloed- en witte pens met appelmoes en puree',
        description: 'Een winters marktgerecht. Het zoet van de appel is hier geen garnituur maar de kern van de zaak: het snijdt dwars door het vette van de worst.',
        instructions: [
          'Schil de appels, verwijder de klokhuizen, snijd ze in stukken en doe ze in een pot met een scheutje water, de suiker en de kaneel.',
          'Deksel erop en 20 minuten op een zacht vuur tot ze uit elkaar vallen. Roer tot een grove moes en laat er wat stukjes in.',
          'Kook de aardappelen gaar in gezouten water, giet af en laat de stoom ontsnappen.',
          'Stamp ze met de warme melk en het grootste deel van de boter. Kruid goed met zout en nootmuskaat.',
          'Prik de worsten één of twee keer in zodat ze niet barsten en bak ze zachtjes in de rest van de boter, zo\'n 6 minuten per kant.',
          'Jaag ze niet op een hoog vuur — bloedworst wordt korrelig als je hem hard bakt.',
          'Serveer per bord een worst, een berg puree en een royale lepel warme appelmoes.'
        ]
      },
      fr: {
        title: 'Boudin Compote de Pommes',
        subtitle: 'Boudin noir et blanc, compote de pommes et purée',
        description: 'Un plat de marché d\'hiver. Le sucré de la pomme n\'est pas une garniture mais le coeur du plat : il tranche net dans le gras du boudin.',
        instructions: [
          'Épluchez et évidez les pommes, coupez-les en morceaux et mettez-les dans une casserole avec un peu d\'eau, le sucre et la cannelle.',
          'Couvrez et cuisez 20 minutes à feu doux jusqu\'à ce qu\'elles se défassent. Mélangez en gardant des morceaux.',
          'Cuisez les pommes de terre à l\'eau salée, égouttez et laissez la vapeur s\'échapper.',
          'Écrasez-les avec le lait chaud et la majeure partie du beurre. Salez et muscadez généreusement.',
          'Piquez les boudins une ou deux fois et faites-les cuire doucement dans le reste du beurre, environ 6 minutes par face.',
          'Ne montez pas le feu : le boudin noir devient granuleux s\'il cuit trop fort.',
          'Servez un boudin par assiette, avec la purée et une bonne cuillère de compote tiède.'
        ]
      }
    },
    ingredients: [
      ing('Black pudding', 'Bloedworst', 'Boudin noir', 2, 'st.'),
      ing('White pudding', 'Witte pens', 'Boudin blanc', 2, 'st.'),
      ing('Apple', 'Appels', 'Pommes', 6, 'st.'),
      ing('Potatoes', 'Aardappelen', 'Pommes de terre', 1000, 'g'),
      ing('Butter', 'Boter', 'Beurre', 80, 'g'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 150, 'ml'),
      ing('Sugar', 'Suiker', 'Sucre', 2, 'el'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 1, 'kl'),
      ing('Nutmeg', 'Nootmuskaat', 'Noix de muscade', 1, 'pinch')
    ]
  },

  {
    id: 'bloemkool-gratin',
    prepTime: '20 mins',
    cookTime: '35 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 4,
    category: ['main'],
    wiki: ['en:Cauliflower cheese', 'fr:Gratin'],
    translations: {
      en: {
        title: 'Bloemkool met Hesp in de Oven',
        subtitle: 'Cauliflower and ham gratin',
        description: 'The same trick as chicons au gratin, done with cauliflower. Wrap, sauce, bake — a Wednesday dinner that behaves like a Sunday one.',
        instructions: [
          'Break the cauliflower into large florets and boil them in salted water for 8 minutes. They should still hold together.',
          'Drain very well and leave them in the colander to steam dry — wet cauliflower makes a watery gratin.',
          'Make the béchamel: melt the butter, stir in the flour, cook two minutes, then whisk in the milk a little at a time.',
          'Simmer until thick, then season with nutmeg, pepper and salt and stir in two thirds of the cheese.',
          'Wrap each floret in half a slice of ham and lay them in a buttered dish.',
          'Pour over the sauce so everything is covered and scatter the rest of the cheese on top.',
          'Bake at 200°C for 25 minutes, until it bubbles at the edges and browns in patches.',
          'Let it settle for five minutes before serving with boiled potatoes.'
        ]
      },
      nl: {
        title: 'Bloemkool met Hesp in de Oven',
        subtitle: 'Gegratineerde bloemkool met hesp',
        description: 'Dezelfde truc als witloof in de oven, maar met bloemkool. Rollen, sausen, bakken — een woensdagavond die zich gedraagt als een zondag.',
        instructions: [
          'Verdeel de bloemkool in grote roosjes en kook ze 8 minuten in gezouten water. Ze moeten nog samenhangen.',
          'Laat heel goed uitlekken en droog nastomen in de vergiet — natte bloemkool geeft een waterige gratin.',
          'Maak de bechamel: smelt de boter, roer de bloem erdoor, gaar twee minuten en klop er beetje bij beetje de melk door.',
          'Laat indikken, kruid met nootmuskaat, peper en zout en roer twee derde van de kaas erdoor.',
          'Rol elk roosje in een half sneetje hesp en leg ze in een beboterde schaal.',
          'Giet de saus erover tot alles bedekt is en strooi de rest van de kaas erop.',
          'Bak 25 minuten op 200°C tot de randen borrelen en de bovenkant plaatselijk kleurt.',
          'Laat vijf minuten rusten en serveer met gekookte aardappelen.'
        ]
      },
      fr: {
        title: 'Gratin de Chou-fleur au Jambon',
        subtitle: 'Chou-fleur et jambon gratinés',
        description: 'Le même principe que les chicons au gratin, avec du chou-fleur. Rouler, napper, enfourner : un mercredi soir qui se prend pour un dimanche.',
        instructions: [
          'Détaillez le chou-fleur en gros bouquets et cuisez-les 8 minutes à l\'eau salée. Ils doivent rester entiers.',
          'Égouttez très soigneusement et laissez sécher dans la passoire : un chou-fleur mouillé donne un gratin aqueux.',
          'Préparez la béchamel : beurre fondu, farine, deux minutes de cuisson, puis le lait progressivement en fouettant.',
          'Laissez épaissir, assaisonnez de muscade, poivre et sel, et incorporez deux tiers du fromage.',
          'Enroulez chaque bouquet dans une demi-tranche de jambon et disposez-les dans un plat beurré.',
          'Nappez de sauce jusqu\'à recouvrement et parsemez du reste de fromage.',
          'Enfournez 25 minutes à 200°C, jusqu\'à ce que les bords bouillonnent et que le dessus se tache de brun.',
          'Laissez reposer cinq minutes et servez avec des pommes nature.'
        ]
      }
    },
    ingredients: [
      ing('Cauliflower', 'Bloemkool', 'Chou-fleur', 1, 'head'),
      ing('Cooked ham', 'Gekookte hesp', 'Jambon cuit', 8, 'slices'),
      ing('Grated cheese', 'Geraspte kaas', 'Fromage râpé', 200, 'g'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 600, 'ml'),
      ing('Butter', 'Boter', 'Beurre', 60, 'g'),
      ing('Flour', 'Bloem', 'Farine', 50, 'g'),
      ing('Nutmeg', 'Nootmuskaat', 'Noix de muscade', 1, 'pinch')
    ]
  },

  {
    id: 'filet-americain',
    prepTime: '20 mins',
    cookTime: '0 mins',
    difficulty: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' },
    servings: 4,
    category: ['snack', 'main'],
    wiki: ['nl:Filet américain', 'fr:Filet américain'],
    translations: {
      en: {
        title: 'Filet Américain',
        subtitle: 'Belgian steak tartare on toast',
        description: 'A lunch counter fixture. Buy the beef from a butcher you trust and eat it the same day — everything else here is seasoning.',
        instructions: [
          'Chill a mixing bowl in the freezer for ten minutes. The mixture should never get warm.',
          'Chop the beef by hand with a very sharp knife, or have the butcher mince it fresh while you wait.',
          'Finely chop the shallot, capers, gherkins and parsley.',
          'Mix the egg yolk with the mustard, Worcestershire sauce, a few drops of Tabasco, salt and pepper.',
          'Fold the mayonnaise into that, then combine everything with the beef using a fork rather than your hands.',
          'Taste and adjust — it should be sharper than you expect, since the bread will soften it.',
          'Pile onto toasted bread, add a twist of pepper and serve straight away with fries if you are making a meal of it.'
        ]
      },
      nl: {
        title: 'Filet Américain',
        subtitle: 'Belgische steak tartare op toast',
        description: 'Een vaste waarde aan de broodjestoog. Koop het rundvlees bij een slager die je vertrouwt en eet het dezelfde dag — al de rest is kruiding.',
        instructions: [
          'Zet een mengkom tien minuten in de diepvries. Het mengsel mag nooit warm worden.',
          'Hak het rundvlees met een scherp mes met de hand fijn, of laat de slager het vers malen terwijl je wacht.',
          'Snipper de sjalot, kappertjes, augurken en peterselie heel fijn.',
          'Meng de eierdooier met de mosterd, worcestersaus, enkele druppels tabasco, peper en zout.',
          'Spatel de mayonaise erdoor en meng alles met het vlees met een vork in plaats van met je handen.',
          'Proef en stel bij — het mag scherper smaken dan je verwacht, want het brood vlakt af.',
          'Schep op geroosterd brood, draai er peper over en dien meteen op, met frieten als je er een maaltijd van maakt.'
        ]
      },
      fr: {
        title: 'Filet Américain',
        subtitle: 'Steak tartare à la belge sur toast',
        description: 'Une institution des sandwicheries. Achetez le boeuf chez un boucher de confiance et mangez-le le jour même : tout le reste n\'est qu\'assaisonnement.',
        instructions: [
          'Placez un saladier dix minutes au congélateur. Le mélange ne doit jamais tiédir.',
          'Hachez le boeuf au couteau bien aiguisé, ou faites-le hacher minute par le boucher.',
          'Ciselez très finement l\'échalote, les câpres, les cornichons et le persil.',
          'Mélangez le jaune d\'oeuf avec la moutarde, la sauce Worcestershire, quelques gouttes de tabasco, sel et poivre.',
          'Incorporez la mayonnaise, puis mélangez le tout à la viande à la fourchette plutôt qu\'à la main.',
          'Goûtez et rectifiez : cela doit être plus relevé qu\'on ne le croit, le pain adoucira.',
          'Dressez sur du pain grillé, poivrez et servez aussitôt, avec des frites pour en faire un repas.'
        ]
      }
    },
    ingredients: [
      ing('Beef steak', 'Rundvlees', 'Boeuf', 500, 'g'),
      ing('Egg yolk', 'Eidooier', 'Jaune d\'oeuf', 1, 'st.'),
      ing('Mayonnaise', 'Mayonaise', 'Mayonnaise', 3, 'el'),
      ing('Belgian mustard', 'Belgische mosterd', 'Moutarde belge', 1, 'el'),
      ing('Shallot', 'Sjalot', 'Échalote', 1, 'st.'),
      ing('Capers', 'Kappertjes', 'Câpres', 1, 'el'),
      ing('Gherkins', 'Augurken', 'Cornichons', 3, 'st.'),
      ing('Worcestershire sauce', 'Worcestersaus', 'Sauce Worcestershire', 1, 'kl'),
      ing('Parsley', 'Peterselie', 'Persil', 2, 'el'),
      ing('Slices of bread', 'Boterhammen', 'Tranches de pain', 4, 'st.')
    ]
  },

  {
    id: 'ostendse-vissoep',
    prepTime: '30 mins',
    cookTime: '45 mins',
    difficulty: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' },
    servings: 6,
    category: ['soup', 'main'],
    wiki: ['en:Fish soup', 'fr:Soupe de poisson'],
    translations: {
      en: {
        title: 'Oostendse Vissoep',
        subtitle: 'Ostend fish soup with North Sea fish',
        description: 'Coastal soup built on a stock made from the bones. Ask the fishmonger for the carcasses when you buy the fillets — that is where all of this comes from.',
        instructions: [
          'Rinse the fish bones under cold water until it runs clear, to get rid of any blood.',
          'Put them in a pot with cold water, the halved onion, a carrot, bay leaf and peppercorns. Simmer 25 minutes and never let it boil hard, or the stock turns cloudy.',
          'Strain the stock through a fine sieve and throw the bones away.',
          'In a clean pot, soften the chopped leek, remaining carrots and celery in butter for 10 minutes.',
          'Add the tomato paste and cook it out for a minute, then pour in the white wine and let it reduce by half.',
          'Add the strained stock and the diced potato and simmer until the potato is tender, about 15 minutes.',
          'Cut the fish fillets into large cubes and slide them in with the shrimps. They need 4 minutes at most.',
          'Take the pot off the heat, stir in the cream and the parsley, and check the seasoning before serving with bread.'
        ]
      },
      nl: {
        title: 'Oostendse Vissoep',
        subtitle: 'Vissoep van de Noordzee met room en garnalen',
        description: 'Kustsoep op een fond van de graten. Vraag de visboer om de karkassen als je de filets koopt — daar komt alles vandaan.',
        instructions: [
          'Spoel de visgraten onder koud water tot het helder blijft, om het bloed eraf te halen.',
          'Doe ze in een pot met koud water, de gehalveerde ui, een wortel, laurier en peperbolletjes. Laat 25 minuten trekken en nooit hard koken, anders wordt de fond troebel.',
          'Zeef de fond door een fijne zeef en gooi de graten weg.',
          'Stoof in een propere pot de gesnipperde prei, de rest van de wortelen en de selder 10 minuten in boter.',
          'Voeg de tomatenpuree toe en bak ze een minuut door, giet dan de witte wijn erbij en laat tot de helft inkoken.',
          'Doe de gezeefde fond en de aardappelblokjes erbij en laat sudderen tot de aardappel gaar is, zo\'n 15 minuten.',
          'Snijd de visfilets in grote blokken en laat ze met de garnalen in de soep glijden. Ze hebben hooguit 4 minuten nodig.',
          'Haal de pot van het vuur, roer de room en de peterselie erdoor en proef na voor je opdient met brood.'
        ]
      },
      fr: {
        title: 'Soupe de Poisson Ostendaise',
        subtitle: 'Soupe de poissons de la mer du Nord',
        description: 'Une soupe de la côte, bâtie sur un fumet d\'arêtes. Demandez les carcasses au poissonnier en achetant les filets : tout part de là.',
        instructions: [
          'Rincez les arêtes à l\'eau froide jusqu\'à ce qu\'elle reste claire, pour éliminer le sang.',
          'Mettez-les dans une marmite d\'eau froide avec l\'oignon coupé, une carotte, le laurier et les grains de poivre. Laissez frémir 25 minutes sans jamais bouillir fort.',
          'Passez le fumet au chinois fin et jetez les arêtes.',
          'Dans une marmite propre, faites suer 10 minutes au beurre le poireau, le reste des carottes et le céleri.',
          'Ajoutez le concentré de tomates, laissez cuire une minute, puis versez le vin blanc et faites réduire de moitié.',
          'Ajoutez le fumet et les pommes de terre en dés, et laissez cuire environ 15 minutes.',
          'Coupez les filets en gros cubes et faites-les glisser avec les crevettes. Quatre minutes suffisent.',
          'Hors du feu, incorporez la crème et le persil, rectifiez l\'assaisonnement et servez avec du pain.'
        ]
      }
    },
    ingredients: [
      ing('Cod', 'Kabeljauw', 'Cabillaud', 400, 'g'),
      ing('Fish bones', 'Visgraten', 'Arêtes de poisson', 800, 'g'),
      ing('Grey North Sea shrimps', 'Grijze Noordzeegarnalen', 'Crevettes grises', 150, 'g'),
      ing('Leek', 'Prei', 'Poireau', 2, 'st.'),
      ing('Carrots', 'Wortelen', 'Carottes', 3, 'st.'),
      ing('Celery stalks', 'Bladselder', 'Céleri branche', 2, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Potatoes', 'Aardappelen', 'Pommes de terre', 300, 'g'),
      ing('White wine', 'Witte wijn', 'Vin blanc', 200, 'ml'),
      ing('Heavy cream', 'Room', 'Crème épaisse', 150, 'ml'),
      ing('Tomato paste', 'Tomatenpuree', 'Concentré de tomates', 1, 'el'),
      ing('Butter', 'Boter', 'Beurre', 40, 'g'),
      ing('Parsley', 'Peterselie', 'Persil', 3, 'el'),
      ing('Bay leaf', 'Laurier', 'Laurier', 2, 'st.')
    ]
  },

  {
    id: 'preisoep',
    prepTime: '15 mins',
    cookTime: '30 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 4,
    category: ['soup'],
    wiki: ['en:Leek soup', 'fr:Vichyssoise'],
    translations: {
      en: {
        title: 'Preisoep',
        subtitle: 'Velvety leek and potato soup',
        description: 'Three ingredients and a technique. Sweat the leeks slowly without letting them brown and the soup stays pale green and sweet; rush it and it turns grey.',
        instructions: [
          'Trim the leeks, split them lengthways and wash them thoroughly — grit hides in the layers.',
          'Slice them finely, white and pale green parts alike.',
          'Melt the butter over a low heat, add the leeks and a pinch of salt, cover, and let them sweat for 12 minutes. Stir now and then and do not let them colour.',
          'Add the diced potato and the stock, bring to a simmer and cook for 15 minutes until the potato is soft.',
          'Blend until completely smooth. A blender gives a finer result than a stick.',
          'Stir in the cream off the heat, then season with salt, pepper and nutmeg.',
          'Serve with a swirl of cream and chives, or chill it completely and eat it cold in summer.'
        ]
      },
      nl: {
        title: 'Preisoep',
        subtitle: 'Fluweelzachte soep van prei en aardappel',
        description: 'Drie ingrediënten en een techniek. Stoof de prei traag zonder ze te laten kleuren en de soep blijft lichtgroen en zoet; jaag ze op en ze wordt grijs.',
        instructions: [
          'Kuis de prei, snijd ze in de lengte door en was ze grondig — zand verstopt zich tussen de bladeren.',
          'Snijd ze fijn, het witte en het lichtgroene deel samen.',
          'Smelt de boter op een zacht vuur, doe de prei en een snuf zout erbij, deksel erop, en laat 12 minuten stoven. Roer af en toe en laat ze niet kleuren.',
          'Voeg de aardappelblokjes en de bouillon toe, breng tegen de kook en laat 15 minuten koken tot de aardappel zacht is.',
          'Mix volledig glad. Een blender geeft een fijner resultaat dan een staafmixer.',
          'Roer buiten het vuur de room erdoor en kruid met peper, zout en nootmuskaat.',
          'Serveer met een streep room en bieslook, of laat volledig afkoelen en eet ze koud in de zomer.'
        ]
      },
      fr: {
        title: 'Velouté de Poireaux',
        subtitle: 'Velouté de poireaux et pommes de terre',
        description: 'Trois ingrédients et une technique. Faites suer les poireaux lentement sans coloration et le velouté reste vert pâle et doux ; brusquez-les et il vire au gris.',
        instructions: [
          'Parez les poireaux, fendez-les en deux et lavez-les soigneusement : le sable se cache entre les feuilles.',
          'Émincez-les finement, le blanc comme le vert tendre.',
          'Faites fondre le beurre à feu doux, ajoutez les poireaux et une pincée de sel, couvrez et laissez suer 12 minutes sans coloration.',
          'Ajoutez la pomme de terre en dés et le bouillon, portez à frémissement et cuisez 15 minutes.',
          'Mixez jusqu\'à parfaite onctuosité. Un blender donne un résultat plus fin qu\'un mixeur plongeant.',
          'Hors du feu, incorporez la crème puis assaisonnez de sel, poivre et muscade.',
          'Servez avec un trait de crème et de la ciboulette, ou bien froid en été.'
        ]
      }
    },
    ingredients: [
      ing('Leek', 'Prei', 'Poireau', 5, 'st.'),
      ing('Potatoes', 'Aardappelen', 'Pommes de terre', 400, 'g'),
      ing('Vegetable broth', 'Groentebouillon', 'Bouillon de légumes', 1000, 'ml'),
      ing('Butter', 'Boter', 'Beurre', 50, 'g'),
      ing('Heavy cream', 'Room', 'Crème épaisse', 150, 'ml'),
      ing('Chives', 'Bieslook', 'Ciboulette', 2, 'el'),
      ing('Nutmeg', 'Nootmuskaat', 'Noix de muscade', 1, 'pinch')
    ]
  },

  {
    id: 'witloofsoep',
    prepTime: '15 mins',
    cookTime: '30 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 4,
    category: ['soup'],
    wiki: ['nl:Witloof', 'fr:Endive'],
    translations: {
      en: {
        title: 'Witloofsoep',
        subtitle: 'Chicory soup, bitter and creamy',
        description: 'Uses the vegetable Belgium invented. The bitterness is the whole appeal, softened by potato and cream rather than hidden.',
        instructions: [
          'Trim the chicory and cut out the hard cone at the base of each — that is where most of the bitterness sits.',
          'Slice them roughly, keeping a few leaves aside to fry as a garnish later.',
          'Sweat the chopped onion in butter until translucent, then add the chicory and cook for 5 minutes.',
          'Add the diced potato and the stock, and simmer for 20 minutes.',
          'Blend smooth and pass through a sieve if you want it very fine.',
          'Off the heat, stir in the cream and a teaspoon of the Liège syrup — it rounds the bitterness without making the soup sweet.',
          'Fry the reserved leaves in a little butter until they colour at the edges, and float them on top.'
        ]
      },
      nl: {
        title: 'Witloofsoep',
        subtitle: 'Bittere, romige soep van witloof',
        description: 'Met de groente die België heeft uitgevonden. Het bittere is net de charme, verzacht door aardappel en room in plaats van weggemoffeld.',
        instructions: [
          'Kuis het witloof en snijd het harde kegeltje aan de onderkant weg — daar zit het meeste bitter.',
          'Snijd de stronken grof en houd een paar blaadjes apart om later te bakken als garnituur.',
          'Stoof de gesnipperde ui glazig in boter, voeg dan het witloof toe en bak 5 minuten mee.',
          'Doe de aardappelblokjes en de bouillon erbij en laat 20 minuten sudderen.',
          'Mix glad en zeef eventueel voor een heel fijne soep.',
          'Roer buiten het vuur de room en een koffielepel Luikse siroop erdoor — die rondt het bittere af zonder de soep zoet te maken.',
          'Bak de achtergehouden blaadjes in wat boter tot ze aan de randen kleuren en laat ze bovenop drijven.'
        ]
      },
      fr: {
        title: 'Velouté de Chicons',
        subtitle: 'Velouté de chicons, amer et crémeux',
        description: 'Fait avec le légume que la Belgique a inventé. L\'amertume est tout l\'intérêt : adoucie par la pomme de terre et la crème, pas masquée.',
        instructions: [
          'Parez les chicons et retirez le cône dur à la base : c\'est là que se concentre l\'amertume.',
          'Émincez-les grossièrement en réservant quelques feuilles pour la garniture.',
          'Faites suer l\'oignon au beurre jusqu\'à translucidité, ajoutez les chicons et cuisez 5 minutes.',
          'Ajoutez la pomme de terre en dés et le bouillon, et laissez mijoter 20 minutes.',
          'Mixez et passez au chinois pour un velouté très fin.',
          'Hors du feu, incorporez la crème et une cuillère à café de sirop de Liège : il arrondit l\'amertume sans sucrer.',
          'Faites colorer les feuilles réservées au beurre et déposez-les sur le velouté.'
        ]
      }
    },
    ingredients: [
      ing('Belgian endives', 'Witloof', 'Chicons', 6, 'st.'),
      ing('Potatoes', 'Aardappelen', 'Pommes de terre', 300, 'g'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Vegetable broth', 'Groentebouillon', 'Bouillon de légumes', 900, 'ml'),
      ing('Butter', 'Boter', 'Beurre', 40, 'g'),
      ing('Heavy cream', 'Room', 'Crème épaisse', 150, 'ml'),
      ing('Liège syrup', 'Luikse siroop', 'Sirop de Liège', 1, 'kl')
    ]
  },

  {
    id: 'kervelsoep',
    prepTime: '15 mins',
    cookTime: '25 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 4,
    category: ['soup'],
    wiki: ['en:Chervil', 'fr:Cerfeuil'],
    translations: {
      en: {
        title: 'Kervelsoep',
        subtitle: 'Spring chervil soup',
        description: 'A soup with a season. Chervil loses everything if it is cooked, so it goes in at the very end, off the heat, and the soup is served immediately.',
        instructions: [
          'Sweat the chopped onion and the sliced leek in butter for 8 minutes without colouring them.',
          'Add the diced potato and the stock, and simmer for 15 minutes until the potato falls apart at the touch of a spoon.',
          'Chop the chervil coarsely, stalks included — there is as much flavour in the stalks as the leaves.',
          'Take the pot off the heat completely. Add the chervil and blend straight away.',
          'The soup should turn bright green. If it goes dull, it was too hot.',
          'Stir in the cream, season with salt, pepper and a little lemon juice.',
          'Serve at once, with a few whole chervil leaves on top. This one does not reheat well.'
        ]
      },
      nl: {
        title: 'Kervelsoep',
        subtitle: 'Lentesoep van verse kervel',
        description: 'Een soep met een seizoen. Kervel verliest alles als je hem meekookt, dus gaat hij er helemaal op het einde in, buiten het vuur, en de soep gaat meteen op tafel.',
        instructions: [
          'Stoof de gesnipperde ui en de gesneden prei 8 minuten in boter zonder ze te laten kleuren.',
          'Voeg de aardappelblokjes en de bouillon toe en laat 15 minuten koken tot de aardappel uit elkaar valt.',
          'Hak de kervel grof, de steeltjes mee — daar zit evenveel smaak in als in de blaadjes.',
          'Haal de pot volledig van het vuur. Doe de kervel erbij en mix meteen.',
          'De soep hoort felgroen te worden. Wordt ze dof, dan was ze te heet.',
          'Roer de room erdoor en kruid met peper, zout en een scheutje citroensap.',
          'Serveer onmiddellijk, met enkele hele kervelblaadjes erop. Deze soep laat zich niet opwarmen.'
        ]
      },
      fr: {
        title: 'Velouté de Cerfeuil',
        subtitle: 'Velouté de cerfeuil de printemps',
        description: 'Une soupe de saison. Le cerfeuil perd tout à la cuisson : il arrive donc en toute fin, hors du feu, et la soupe part aussitôt à table.',
        instructions: [
          'Faites suer l\'oignon et le poireau émincés au beurre pendant 8 minutes sans coloration.',
          'Ajoutez la pomme de terre en dés et le bouillon, et laissez cuire 15 minutes.',
          'Hachez grossièrement le cerfeuil, tiges comprises : elles ont autant de goût que les feuilles.',
          'Retirez complètement la casserole du feu. Ajoutez le cerfeuil et mixez immédiatement.',
          'Le velouté doit devenir vert vif. S\'il ternit, c\'est qu\'il était trop chaud.',
          'Incorporez la crème et assaisonnez de sel, poivre et un filet de jus de citron.',
          'Servez aussitôt, avec quelques feuilles entières. Ce velouté ne se réchauffe pas.'
        ]
      }
    },
    ingredients: [
      ing('Chervil', 'Kervel', 'Cerfeuil', 3, 'bunch'),
      ing('Potatoes', 'Aardappelen', 'Pommes de terre', 300, 'g'),
      ing('Leek', 'Prei', 'Poireau', 1, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Vegetable broth', 'Groentebouillon', 'Bouillon de légumes', 900, 'ml'),
      ing('Butter', 'Boter', 'Beurre', 40, 'g'),
      ing('Heavy cream', 'Room', 'Crème épaisse', 150, 'ml'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'kl')
    ]
  },

  {
    id: 'rijstpap',
    prepTime: '10 mins',
    cookTime: '45 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 4,
    category: ['dessert', 'breakfast'],
    wiki: ['en:Rice pudding', 'nl:Rijstpap'],
    translations: {
      en: {
        title: 'Rijstpap',
        subtitle: 'Rice pudding with brown sugar',
        description: 'Eaten warm from the pot in winter and cold from the fridge in summer. The only rule is patience: low heat, frequent stirring, no shortcuts.',
        instructions: [
          'Rinse the rice briefly and drain it.',
          'Bring the milk to a gentle simmer with the split vanilla pod, the cinnamon stick and a pinch of salt.',
          'Add the rice and turn the heat right down. It should barely move.',
          'Cook for 40 minutes, stirring every few minutes and scraping the bottom so nothing catches. Add more milk if it thickens too fast.',
          'When the grains are soft and suspended in a thick, creamy liquid, take it off the heat.',
          'Stir in the sugar and the butter. Adding sugar earlier makes the rice take longer to soften.',
          'Fish out the vanilla pod and cinnamon stick.',
          'Serve warm in bowls with brown sugar on top, and let it melt for a minute before eating.'
        ]
      },
      nl: {
        title: 'Rijstpap',
        subtitle: 'Rijstpap met bruine suiker',
        description: 'Warm uit de pot in de winter, koud uit de koelkast in de zomer. De enige regel is geduld: zacht vuur, vaak roeren, geen kortere weg.',
        instructions: [
          'Spoel de rijst kort af en laat uitlekken.',
          'Breng de melk zachtjes tegen de kook met het opengesneden vanillestokje, de kaneelstok en een snuf zout.',
          'Voeg de rijst toe en zet het vuur zo laag mogelijk. De pap mag amper bewegen.',
          'Laat 40 minuten koken, roer om de paar minuten en schraap de bodem zodat er niets aanbakt. Voeg melk toe als ze te snel indikt.',
          'Als de korrels zacht zijn en in een dikke, romige massa zweven, haal je de pot van het vuur.',
          'Roer de suiker en de boter erdoor. Suiker eerder toevoegen maakt dat de rijst trager gaart.',
          'Vis het vanillestokje en de kaneelstok eruit.',
          'Serveer warm in kommen met bruine suiker erover en laat die een minuutje smelten voor je begint.'
        ]
      },
      fr: {
        title: 'Riz au Lait',
        subtitle: 'Riz au lait à la cassonade',
        description: 'Chaud sorti de la casserole en hiver, froid du frigo en été. La seule règle est la patience : feu doux, remuer souvent, aucun raccourci.',
        instructions: [
          'Rincez brièvement le riz et égouttez-le.',
          'Portez le lait à frémissement avec la gousse de vanille fendue, le bâton de cannelle et une pincée de sel.',
          'Ajoutez le riz et baissez le feu au minimum. Le mélange doit à peine bouger.',
          'Cuisez 40 minutes en remuant régulièrement et en raclant le fond. Ajoutez du lait si cela épaissit trop vite.',
          'Quand les grains sont tendres et en suspension dans un liquide crémeux, retirez du feu.',
          'Incorporez le sucre et le beurre. Sucrer plus tôt ralentirait la cuisson du riz.',
          'Retirez la gousse de vanille et le bâton de cannelle.',
          'Servez chaud, saupoudré de cassonade, et laissez-la fondre une minute.'
        ]
      }
    },
    ingredients: [
      ing('Rice', 'Rijst', 'Riz', 200, 'g'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 1200, 'ml'),
      ing('Brown sugar', 'Bruine suiker', 'Cassonade', 100, 'g'),
      ing('Butter', 'Boter', 'Beurre', 20, 'g'),
      ing('Vanilla extract', 'Vanillestok', 'Gousse de vanille', 1, 'st.'),
      ing('Cinnamon', 'Kaneelstok', 'Bâton de cannelle', 1, 'st.')
    ]
  },

  {
    id: 'verloren-brood',
    prepTime: '10 mins',
    cookTime: '15 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 4,
    category: ['dessert', 'breakfast'],
    wiki: ['fr:Pain perdu', 'en:French toast'],
    translations: {
      en: {
        title: 'Verloren Brood / Pain Perdu',
        subtitle: 'Stale bread soaked in egg and milk, fried in butter',
        description: 'Literally "lost bread" — the dish invented to rescue it. Yesterday\'s loaf works far better than fresh, which turns to mush in the custard.',
        instructions: [
          'Whisk the eggs with the milk, sugar, vanilla and cinnamon in a wide, shallow dish.',
          'Lay the bread slices in and leave them 30 seconds a side. Thick, dry slices can take a minute.',
          'Lift each slice out and let the excess drip off — soaked, not swimming.',
          'Melt butter in a pan over medium heat. Too hot and the outside burns before the middle sets.',
          'Fry the slices for 3 minutes a side, until deep golden and slightly puffed.',
          'Wipe the pan and use fresh butter between batches, or the burnt bits from the first round will speckle the rest.',
          'Serve dusted with icing sugar, or with brown sugar and a spoon of apple compote.'
        ]
      },
      nl: {
        title: 'Verloren Brood',
        subtitle: 'Oud brood geweekt in ei en melk, gebakken in boter',
        description: 'Letterlijk verloren brood — het gerecht dat werd bedacht om het te redden. Brood van gisteren werkt veel beter dan vers, dat in het beslag uiteenvalt.',
        instructions: [
          'Klop de eieren los met de melk, suiker, vanille en kaneel in een brede, ondiepe schaal.',
          'Leg de sneden brood erin en laat ze 30 seconden per kant weken. Dikke, droge sneden mogen een minuut.',
          'Haal elke snee eruit en laat het overtollige beslag eraf lopen — doordrenkt, niet zwemmend.',
          'Smelt boter in een pan op middelhoog vuur. Te heet en de buitenkant verbrandt voor het midden gestold is.',
          'Bak de sneden 3 minuten per kant tot ze diep goudbruin zijn en licht gerezen.',
          'Veeg de pan uit en gebruik verse boter tussen de porties, anders spikkelen de aangebrande restjes de rest.',
          'Serveer bestrooid met bloemsuiker, of met bruine suiker en een lepel appelmoes.'
        ]
      },
      fr: {
        title: 'Pain Perdu',
        subtitle: 'Pain rassis trempé dans l\'oeuf et le lait, doré au beurre',
        description: 'Littéralement le pain perdu, et le plat inventé pour le sauver. Le pain de la veille fonctionne bien mieux que le frais, qui se délite dans l\'appareil.',
        instructions: [
          'Fouettez les oeufs avec le lait, le sucre, la vanille et la cannelle dans un plat large et peu profond.',
          'Déposez les tranches et laissez-les tremper 30 secondes par face, une minute si elles sont épaisses et sèches.',
          'Retirez chaque tranche en laissant l\'excédent s\'égoutter : imbibée, pas noyée.',
          'Faites fondre du beurre à feu moyen. Trop chaud, l\'extérieur brûle avant que le coeur ne prenne.',
          'Dorez les tranches 3 minutes par face, jusqu\'à belle couleur et léger gonflement.',
          'Essuyez la poêle et remettez du beurre frais entre les fournées.',
          'Servez saupoudré de sucre impalpable, ou avec de la cassonade et une cuillère de compote.'
        ]
      }
    },
    ingredients: [
      ing('Slices of bread', 'Boterhammen', 'Tranches de pain', 8, 'st.'),
      ing('Eggs', 'Eieren', 'Oeufs', 4, 'st.'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 300, 'ml'),
      ing('Sugar', 'Suiker', 'Sucre', 3, 'el'),
      ing('Butter', 'Boter', 'Beurre', 60, 'g'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 1, 'kl'),
      ing('Vanilla extract', 'Vanille-extract', 'Extrait de vanille', 1, 'kl'),
      ing('Powdered sugar', 'Bloemsuiker', 'Sucre impalpable', 2, 'el')
    ]
  },

  {
    id: 'suikertaart',
    prepTime: '30 mins',
    cookTime: '30 mins',
    difficulty: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' },
    servings: 8,
    category: ['dessert'],
    wiki: ['fr:Tarte au sucre', 'nl:Suikertaart'],
    translations: {
      en: {
        title: 'Suikertaart / Tarte au Sucre',
        subtitle: 'Brown sugar tart on a yeasted base',
        description: 'Wallonian bakery sugar tart. Brown sugar and cream sink into a yeasted base and caramelise into a dark, cracked top.',
        instructions: [
          'Warm the milk to body temperature, stir in the yeast and a spoon of the sugar, and leave 10 minutes to foam.',
          'Mix the flour and salt, then work in the yeast milk, the egg and the soft butter until you have a soft, slightly sticky dough.',
          'Knead for five minutes, cover, and leave to rise for an hour until doubled.',
          'Knock it back and press it into a buttered 26 cm tin, pushing it a little up the sides. Leave to rise 30 minutes more.',
          'Dimple the surface all over with your fingertips — those hollows hold the filling.',
          'Mix the brown sugar with the cream and the egg yolks and pour it over, letting it settle into the dimples.',
          'Dot with butter and bake at 200°C for 25 to 30 minutes, until the top is dark and bubbling.',
          'Cool in the tin for 15 minutes. It is best barely warm, when the topping has set but is still soft.'
        ]
      },
      nl: {
        title: 'Suikertaart',
        subtitle: 'Taart van bruine suiker op een gistdeegbodem',
        description: 'Waalse bakkerssuikertaart. Bruine suiker en room zakken in een gistdeegbodem en karamelliseren tot een donkere, gebarsten bovenkant.',
        instructions: [
          'Verwarm de melk lauw, roer er de gist en een lepel van de suiker door en laat 10 minuten schuimen.',
          'Meng de bloem en het zout en werk er de gistmelk, het ei en de zachte boter door tot een zacht, licht plakkerig deeg.',
          'Kneed vijf minuten, dek af en laat een uur rijzen tot het verdubbeld is.',
          'Sla het deeg door en druk het in een beboterde vorm van 26 cm, met een randje omhoog. Laat nog 30 minuten rijzen.',
          'Maak met je vingertoppen kuiltjes over het hele oppervlak — die houden de vulling vast.',
          'Meng de bruine suiker met de room en de eierdooiers en giet dat erover, zodat het in de kuiltjes zakt.',
          'Verdeel er klontjes boter over en bak 25 à 30 minuten op 200°C tot de bovenkant donker is en borrelt.',
          'Laat 15 minuten afkoelen in de vorm. Ze is op haar best lauw, als de bovenlaag net gestold maar nog zacht is.'
        ]
      },
      fr: {
        title: 'Tarte au Sucre',
        subtitle: 'Tarte à la cassonade sur pâte levée',
        description: 'La tarte au sucre des boulangeries wallonnes. La cassonade et la crème s\'enfoncent dans la pâte levée et caramélisent en une croûte sombre et craquelée.',
        instructions: [
          'Tiédissez le lait, délayez-y la levure et une cuillère de sucre, et laissez mousser 10 minutes.',
          'Mélangez la farine et le sel, puis incorporez le lait de levure, l\'oeuf et le beurre mou pour obtenir une pâte souple et légèrement collante.',
          'Pétrissez cinq minutes, couvrez et laissez lever une heure jusqu\'à doublement.',
          'Dégazez et étalez la pâte dans un moule beurré de 26 cm en remontant légèrement les bords. Laissez lever 30 minutes.',
          'Creusez toute la surface du bout des doigts : ces cavités retiennent la garniture.',
          'Mélangez la cassonade avec la crème et les jaunes d\'oeuf, et versez sur la pâte.',
          'Parsemez de noisettes de beurre et enfournez 25 à 30 minutes à 200°C, jusqu\'à ce que le dessus soit foncé et bouillonnant.',
          'Laissez tiédir 15 minutes dans le moule. Elle est meilleure à peine tiède.'
        ]
      }
    },
    ingredients: [
      ing('Flour', 'Bloem', 'Farine', 300, 'g'),
      ing('Brown sugar', 'Bruine suiker', 'Cassonade', 200, 'g'),
      ing('Heavy cream', 'Room', 'Crème épaisse', 200, 'ml'),
      ing('Butter', 'Boter', 'Beurre', 120, 'g'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 150, 'ml'),
      ing('Dry yeast', 'Droge gist', 'Levure sèche', 7, 'g'),
      ing('Eggs', 'Eieren', 'Oeufs', 1, 'st.'),
      ing('Egg yolk', 'Eidooier', 'Jaune d\'oeuf', 2, 'st.')
    ]
  },

  {
    id: 'peperkoek',
    prepTime: '15 mins',
    cookTime: '1 hr',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 10,
    category: ['breakfast', 'snack'],
    wiki: ['fr:Pain d\'épices', 'nl:Peperkoek'],
    translations: {
      en: {
        title: 'Peperkoek',
        subtitle: 'Dense honey and rye spice loaf',
        description: 'Belgian gingerbread: no butter, no eggs, just honey, rye and spice. It improves for days wrapped in a cloth, and is eaten in thin slices with butter.',
        instructions: [
          'Warm the honey with the milk until it loosens and pours easily. Do not let it boil.',
          'Mix the rye flour, plain flour, spices, baking soda and salt in a large bowl.',
          'Pour in the warm honey milk and stir until you have a thick, sticky batter with no dry pockets.',
          'Add the candied orange peel if you are using it, and mix through.',
          'Scrape into a lined loaf tin — the batter is too stiff to pour, so push it into the corners and level the top.',
          'Bake at 160°C for an hour. It is done when a skewer comes out with a few moist crumbs, not clean.',
          'Leave it in the tin for 15 minutes, then turn it out onto a rack.',
          'Wrap it in a cloth once completely cold and leave it a day before cutting. It is much better on day two.'
        ]
      },
      nl: {
        title: 'Peperkoek',
        subtitle: 'Compacte koek van honing, rogge en kruiden',
        description: 'Belgische peperkoek: geen boter, geen eieren, alleen honing, rogge en kruiden. Hij wordt beter na een paar dagen in een doek en gaat in dunne sneetjes met boter.',
        instructions: [
          'Verwarm de honing met de melk tot ze vloeibaar is en makkelijk schenkt. Laat ze niet koken.',
          'Meng de roggebloem, de bloem, de speculaaskruiden, het zuiveringszout en het zout in een grote kom.',
          'Giet de warme honingmelk erbij en roer tot een dik, plakkerig beslag zonder droge plekken.',
          'Voeg eventueel het gekonfijte sinaasappelschil toe en meng het erdoor.',
          'Schep in een bekleed cakevorm — het beslag is te stijf om te gieten, dus duw het in de hoeken en strijk glad.',
          'Bak een uur op 160°C. Hij is klaar als een satéprikker er met enkele vochtige kruimels uitkomt, niet proper.',
          'Laat 15 minuten in de vorm staan en stort hem dan op een rooster.',
          'Wikkel hem volledig afgekoeld in een doek en laat hem een dag rusten voor je snijdt. Op dag twee is hij veel beter.'
        ]
      },
      fr: {
        title: 'Pain d\'Épices',
        subtitle: 'Pain d\'épices dense au miel et au seigle',
        description: 'Le pain d\'épices belge : ni beurre ni oeufs, seulement du miel, du seigle et des épices. Il gagne à attendre quelques jours dans un linge, et se mange en fines tranches beurrées.',
        instructions: [
          'Faites tiédir le miel avec le lait jusqu\'à ce qu\'il coule facilement, sans le faire bouillir.',
          'Mélangez la farine de seigle, la farine, les épices, le bicarbonate et le sel dans un grand bol.',
          'Versez le mélange miel-lait chaud et remuez jusqu\'à obtenir une pâte épaisse et collante, sans grumeaux secs.',
          'Ajoutez les écorces d\'orange confites si vous en utilisez.',
          'Versez dans un moule à cake chemisé : la pâte est trop épaisse pour couler, poussez-la dans les angles et lissez.',
          'Enfournez une heure à 160°C. Il est cuit quand la pointe ressort avec quelques miettes humides.',
          'Laissez 15 minutes dans le moule puis démoulez sur une grille.',
          'Emballez-le dans un linge une fois froid et attendez un jour avant de le trancher.'
        ]
      }
    },
    ingredients: [
      ing('Rye flour', 'Roggebloem', 'Farine de seigle', 250, 'g'),
      ing('Flour', 'Bloem', 'Farine', 100, 'g'),
      ing('Honey', 'Honing', 'Miel', 350, 'g'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 150, 'ml'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 2, 'kl'),
      ing('Cloves', 'Kruidnagelpoeder', 'Girofle en poudre', 1, 'kl'),
      ing('Nutmeg', 'Nootmuskaat', 'Noix de muscade', 1, 'kl'),
      ing('Baking soda', 'Zuiveringszout', 'Bicarbonate de soude', 2, 'kl'),
      ing('Orange zest', 'Gekonfijte sinaasappelschil', 'Écorces d\'orange confites', 60, 'g')
    ]
  },

  {
    id: 'ardense-pastei',
    prepTime: '25 mins',
    cookTime: '1 hr 15 mins',
    difficulty: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' },
    servings: 10,
    category: ['snack'],
    wiki: ['fr:Pâté', 'en:Pâté'],
    translations: {
      en: {
        title: 'Ardense Pastei',
        subtitle: 'Coarse Ardennes pork terrine with juniper',
        description: 'The terrine every Ardennes butcher makes their own version of. Juniper and a splash of jenever are what separate it from an ordinary pâté.',
        instructions: [
          'Cut the pork shoulder and the liver into cubes and mince them coarsely, or ask the butcher to mince them once through a wide plate.',
          'Crush the juniper berries and the peppercorns roughly in a mortar. They should stay gritty, not powdered.',
          'Mix the meat with the crushed spices, the chopped shallots, the thyme, the jenever, the salt and the egg.',
          'Fry a teaspoon of the mixture in a pan and taste it. This is the only chance to correct the seasoning.',
          'Line a terrine mould with the strips of bacon, letting them overhang the sides.',
          'Pack the mixture in firmly, pressing out air pockets, then fold the bacon over the top and lay on the bay leaves.',
          'Cover with foil and bake in a water bath at 160°C for about 75 minutes, until the centre reads 72°C.',
          'Cool, then weigh it down with a tin in the fridge overnight. Eat within four days, with bread and pickles.'
        ]
      },
      nl: {
        title: 'Ardense Pastei',
        subtitle: 'Grove varkenspastei uit de Ardennen met jeneverbes',
        description: 'De pastei waarvan elke Ardense slager zijn eigen versie maakt. Jeneverbes en een scheut jenever zijn wat haar onderscheidt van een gewone paté.',
        instructions: [
          'Snijd het varkensschouder en de lever in blokjes en maal ze grof, of laat de slager ze één keer door een grove plaat draaien.',
          'Kneus de jeneverbessen en de peperbolletjes grof in een vijzel. Ze mogen korrelig blijven, niet tot poeder.',
          'Meng het vlees met de gekneusde specerijen, de gesnipperde sjalotten, de tijm, de jenever, het zout en het ei.',
          'Bak een koffielepel van het mengsel in een pannetje en proef. Dit is je enige kans om bij te kruiden.',
          'Bekleed een terrinevorm met de repen spek en laat ze over de rand hangen.',
          'Duw het mengsel stevig aan zodat er geen luchtholtes blijven, vouw het spek eroverheen en leg de laurierblaadjes bovenop.',
          'Dek af met folie en bak au bain-marie 75 minuten op 160°C, tot de kern 72°C aangeeft.',
          'Laat afkoelen en zet ze een nacht verzwaard in de koelkast. Binnen vier dagen opeten, met brood en zuur.'
        ]
      },
      fr: {
        title: 'Pâté Ardennais',
        subtitle: 'Terrine de porc ardennaise au genièvre',
        description: 'La terrine dont chaque boucher ardennais a sa version. Les baies de genièvre et un trait de genièvre la distinguent d\'un pâté ordinaire.',
        instructions: [
          'Coupez l\'épaule de porc et le foie en cubes et hachez-les gros, ou faites-les passer une fois à la grosse grille chez le boucher.',
          'Concassez grossièrement les baies de genièvre et les grains de poivre au mortier : gardez du grain.',
          'Mélangez la viande avec les épices concassées, les échalotes ciselées, le thym, le genièvre, le sel et l\'oeuf.',
          'Faites cuire une cuillère du mélange à la poêle et goûtez : c\'est la seule occasion de rectifier.',
          'Chemisez une terrine de bardes de lard en les laissant déborder.',
          'Tassez fermement le mélange pour chasser les poches d\'air, rabattez le lard et posez les feuilles de laurier.',
          'Couvrez d\'aluminium et cuisez au bain-marie 75 minutes à 160°C, jusqu\'à 72°C à coeur.',
          'Laissez refroidir puis pressez une nuit au réfrigérateur. À consommer sous quatre jours, avec pain et pickles.'
        ]
      }
    },
    ingredients: [
      ing('Pork shoulder', 'Varkensschouder', 'Épaule de porc', 800, 'g'),
      ing('Pork liver', 'Varkenslever', 'Foie de porc', 300, 'g'),
      ing('Bacon', 'Ontbijtspek', 'Lard fumé', 200, 'g'),
      ing('Shallot', 'Sjalot', 'Échalote', 3, 'st.'),
      ing('Juniper berries', 'Jeneverbessen', 'Baies de genièvre', 12, 'st.'),
      ing('Jenever', 'Jenever', 'Genièvre', 3, 'el'),
      ing('Eggs', 'Eieren', 'Oeufs', 1, 'st.'),
      ing('Thyme', 'Tijm', 'Thym', 4, 'sprig'),
      ing('Bay leaf', 'Laurier', 'Laurier', 3, 'st.')
    ]
  }
];
