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
        subtitle: 'Liège\'s meatball, and nothing like the tomato one',
        description: 'The sauce is built on onions, vinegar and a heavy spoon of Liège syrup, so it lands sweet, sour and dark all at once. The balls are fist-sized on purpose — this is dinner, not a garnish.',
        instructions: [
          'Soak the torn bread in the milk until soft, then squeeze it out.',
          'Mix the minced meat with the bread, egg, half the chopped onion, parsley, salt, pepper and nutmeg, and shape four large balls. Four, not twenty — these are meant to be a meal each.',
          'Brown them all over in butter, then lift them out.',
          'Cook the remaining onions in the same pot over low heat for 15 minutes, until properly soft and starting to caramelise. Give them the full fifteen; this is the base of everything.',
          'Add the vinegar and let it cook away almost completely. This is what stops the sauce being merely sweet.',
          'Stir in the Liège syrup, the stock, the bay leaf and the thyme, then return the meatballs to the pot.',
          'Cover and simmer gently for 40 minutes, turning them twice so they glaze all over.',
          'If the sauce is still thin at the end, lift the meatballs out and let it reduce on its own. Serve with fries and apple compote — all three together, that\'s the whole point.'
        ]
      },
      nl: {
        title: 'Luikse Balletjes',
        subtitle: 'De Luikse bal, en niets zoals die in tomatensaus',
        description: 'De saus is gebouwd op uien, azijn en een flinke lepel Luikse siroop: zoet, zuur en donker tegelijk. De ballen zijn met opzet vuistgroot — dit is het avondeten, geen garnituur.',
        instructions: [
          'Week het gescheurde brood in de melk tot het zacht is en knijp het uit.',
          'Meng het gehakt met het brood, het ei, de helft van de gesnipperde ui, peterselie, peper, zout en nootmuskaat en vorm er vier grote ballen van. Vier, geen twintig — dit is er één per persoon.',
          'Bak ze rondom bruin in boter en haal ze uit de pot.',
          'Stoof de rest van de uien 15 minuten op een zacht vuur, tot ze echt zacht zijn en beginnen te karamelliseren. Geef ze die volle vijftien minuten; dit is de basis van alles.',
          'Voeg de azijn toe en laat die bijna volledig verdampen. Dat is wat de saus behoedt voor louter zoet zijn.',
          'Roer de Luikse siroop, de bouillon, het laurierblad en de tijm erdoor en leg de balletjes terug in de pot.',
          'Deksel erop en laat 40 minuten zachtjes sudderen, en keer ze twee keer zodat ze rondom glazuren.',
          'Is de saus op het eind nog te dun, haal de ballen er dan uit en laat ze vanzelf inkoken. Serveer met frieten en appelmoes — met alle drie samen, dat is het hele punt.'
        ]
      },
      fr: {
        title: 'Boulets à la Liégeoise',
        subtitle: 'Le boulet liégeois, rien à voir avec celui à la tomate',
        description: 'La sauce se construit sur l\'oignon, le vinaigre et une bonne cuillère de sirop de Liège : sucrée, acide et sombre à la fois. Les boulets font la taille d\'un poing exprès — c\'est le dîner, pas une garniture.',
        instructions: [
          'Fais tremper le pain émietté dans le lait jusqu\'à ce qu\'il soit mou, puis presse-le.',
          'Mélange le haché avec le pain, l\'œuf, la moitié de l\'oignon émincé, le persil, le sel, le poivre et la muscade, et façonne quatre gros boulets. Quatre, pas vingt — c\'est un par personne.',
          'Fais-les dorer de tous les côtés au beurre, puis retire-les.',
          'Fais fondre le reste des oignons dans la même cocotte à feu doux pendant 15 minutes, jusqu\'à ce qu\'ils soient bien tendres et commencent à caraméliser. Donne-leur les quinze minutes entières ; c\'est la base de tout.',
          'Ajoute le vinaigre et laisse-le s\'évaporer presque entièrement. C\'est ce qui empêche la sauce d\'être seulement sucrée.',
          'Incorpore le sirop de Liège, le bouillon, le laurier et le thym, puis remets les boulets dans la cocotte.',
          'Couvre et laisse mijoter doucement 40 minutes, en les retournant deux fois pour qu\'ils se glacent partout.',
          'Si la sauce reste liquide à la fin, retire les boulets et laisse-la réduire seule. Sers avec des frites et de la compote de pommes — les trois ensemble, c\'est tout l\'intérêt.'
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
        subtitle: 'The other half of the brasserie pair',
        description: 'Old Gruyère and a hard cheese for bite, set into a very thick béchamel and chilled overnight. If one bursts in the fryer, it will be because you hurried the chilling.',
        instructions: [
          'Melt the butter, stir in the flour and cook the roux for two minutes without letting it colour.',
          'Whisk in the warm milk a little at a time until you have a very thick, glossy sauce.',
          'Take it off the heat and stir in both cheeses until they melt completely. Off the heat, mind — cheese boiled in a sauce goes stringy and oily.',
          'Beat in the egg yolks and season hard with nutmeg, pepper and only a little salt. The cheese brings plenty of its own.',
          'Spread it into an oiled dish about 3 cm deep, press cling film onto the surface so no skin forms, and refrigerate overnight.',
          'Cut into blocks and coat each in flour, then beaten egg, then breadcrumbs. Repeat the egg and crumb for a crust that will actually hold.',
          'Fry at 180°C for 3 minutes until deep gold. If one bursts, the coating was too thin or the fat too cool — those are the only two reasons.',
          'Serve with fried parsley and a wedge of lemon.'
        ]
      },
      nl: {
        title: 'Kaaskroketten',
        subtitle: 'De andere helft van het brasserieduo',
        description: 'Oude gruyère en een harde kaas voor pit, vastgezet in een heel dikke bechamel en een nacht koud gedraaid. Barst er eentje open in de friteuse, dan komt dat omdat je het koelen hebt afgeraffeld.',
        instructions: [
          'Smelt de boter, roer de bloem erdoor en gaar de roux twee minuten zonder hem te laten kleuren.',
          'Klop er beetje bij beetje de warme melk door tot je een heel dikke, glanzende saus hebt.',
          'Haal van het vuur en roer beide kazen erdoor tot ze helemaal gesmolten zijn. Van het vuur af, let op — kaas die meekookt in een saus wordt draderig en vettig.',
          'Klop de eierdooiers erdoor en kruid stevig met nootmuskaat, peper en maar weinig zout. De kaas brengt zelf al genoeg mee.',
          'Strijk het uit in een ingevette schaal van zo\'n 3 cm dik, druk folie op het oppervlak zodat er geen vel op komt, en zet een nacht in de koelkast.',
          'Snijd in blokken en haal ze door bloem, dan door losgeklopt ei, dan door paneermeel. Herhaal ei en paneermeel voor een korst die het echt houdt.',
          'Frituur 3 minuten op 180°C tot ze diep goudbruin zijn. Barst er een open, dan was de panering te dun of het vet te koud — dat zijn de enige twee redenen.',
          'Serveer met gefrituurde peterselie en een partje citroen.'
        ]
      },
      fr: {
        title: 'Croquettes au Fromage',
        subtitle: 'L\'autre moitié du duo de brasserie',
        description: 'Du vieux gruyère et un fromage à pâte dure pour le caractère, pris dans une béchamel très épaisse et refroidis une nuit. Si l\'une éclate dans la friture, c\'est que tu as bâclé le refroidissement.',
        instructions: [
          'Fais fondre le beurre, incorpore la farine et cuis le roux deux minutes sans le laisser colorer.',
          'Verse le lait chaud petit à petit en fouettant jusqu\'à obtenir une sauce très épaisse et brillante.',
          'Hors du feu, incorpore les deux fromages jusqu\'à fonte complète. Hors du feu, attention — un fromage bouilli dans une sauce devient filandreux et gras.',
          'Ajoute les jaunes d\'œuf et assaisonne fermement de muscade, de poivre et de très peu de sel. Le fromage en apporte déjà beaucoup.',
          'Étale dans un plat huilé sur 3 cm, filme au contact pour qu\'aucune peau ne se forme, et réfrigère une nuit.',
          'Détaille en blocs et passe chacun dans la farine, l\'œuf battu, puis la chapelure. Double l\'œuf et la chapelure pour une croûte qui tienne vraiment.',
          'Fais frire 3 minutes à 180°C jusqu\'à belle couleur dorée. Si une croquette éclate, la panure était trop fine ou le bain trop froid — ce sont les deux seules raisons.',
          'Sers avec du persil frit et un quartier de citron.'
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
        subtitle: 'Veal rolled round a good handful of mince',
        description: 'Thin escalopes wrapped around seasoned mince and braised slowly until the whole thing gives. The name means "blind finches" — nobody agrees why, and it has never mattered to anyone eating them.',
        instructions: [
          'Soak the bread in the milk, squeeze it out and mix it with the minced meat, egg, parsley, salt, pepper and nutmeg.',
          'Lay the escalopes out and beat them thin between two sheets of cling film, if the butcher hasn\'t already done it for you.',
          'Put a line of stuffing along one edge of each, roll them up and tie them with kitchen string, or pin them shut with a cocktail stick.',
          'Season the rolls and brown them in butter on all sides. Take them out.',
          'Soften the chopped onion in the same pot, then pour in the stock and add the bay leaf and thyme.',
          'Return the rolls, cover, and simmer very gently for 45 minutes, turning them once halfway.',
          'Lift them out and keep them warm. Reduce the sauce until it coats a spoon, then whisk in the cold butter off the heat — cold butter into a hot sauce off the flame is what makes it glossy.',
          'Take the string off before serving, and serve with mash or stoemp.'
        ]
      },
      nl: {
        title: 'Blinde Vinken',
        subtitle: 'Kalfsvlees gerold rond een goede hand gehakt',
        description: 'Dunne lapjes gerold rond gekruid gehakt en traag gestoofd tot alles meegeeft. De naam betekent blinde vinken — niemand is het eens over waarom, en dat heeft nog nooit iemand die ze at iets kunnen schelen.',
        instructions: [
          'Week het brood in de melk, knijp het uit en meng het met het gehakt, het ei, peterselie, peper, zout en nootmuskaat.',
          'Leg de lapjes open en klop ze dun tussen twee vellen folie, als de slager dat nog niet voor je gedaan heeft.',
          'Leg een streep vulling langs één rand, rol ze op en bind ze met keukentouw, of zet ze dicht met een prikker.',
          'Kruid de rolletjes en bak ze rondom bruin in boter. Haal ze uit de pan.',
          'Stoof de gesnipperde ui in dezelfde pot, giet er dan de bouillon bij en voeg laurier en tijm toe.',
          'Leg de rolletjes terug, deksel erop, en laat 45 minuten heel zachtjes sudderen, en keer ze halverwege één keer.',
          'Haal ze eruit en hou ze warm. Kook de saus in tot ze aan de lepel blijft hangen en klop er buiten het vuur de koude boter door — koude boter in een hete saus van het vuur af, dat is wat haar doet glanzen.',
          'Haal het touw eraf voor je opdient, en serveer met puree of stoemp.'
        ]
      },
      fr: {
        title: 'Oiseaux sans Tête',
        subtitle: 'Du veau roulé autour d\'une bonne poignée de haché',
        description: 'De fines escalopes roulées autour d\'un haché assaisonné et braisées lentement jusqu\'à ce que tout cède. En néerlandais on les appelle « pinsons aveugles » ; personne ne sait pourquoi, et personne qui en mange ne s\'en soucie.',
        instructions: [
          'Fais tremper le pain dans le lait, presse-le et mélange-le au haché, à l\'œuf, au persil, au sel, au poivre et à la muscade.',
          'Étale les escalopes et aplatis-les entre deux films, si le boucher ne l\'a pas déjà fait pour toi.',
          'Dépose un boudin de farce le long d\'un bord, roule et ficelle, ou ferme avec un pique-olive.',
          'Assaisonne les paupiettes et fais-les dorer au beurre sur toutes les faces. Retire-les.',
          'Fais revenir l\'oignon émincé dans la même cocotte, puis verse le bouillon et ajoute le laurier et le thym.',
          'Remets les paupiettes, couvre, et laisse mijoter très doucement 45 minutes, en les retournant une fois à mi-cuisson.',
          'Retire-les et garde-les au chaud. Fais réduire la sauce jusqu\'à ce qu\'elle nappe la cuillère, puis monte-la au beurre froid hors du feu — du beurre froid dans une sauce chaude hors du feu, c\'est ce qui la rend brillante.',
          'Retire la ficelle avant de servir, avec une purée ou un stoemp.'
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
        subtitle: 'Coq au vin, with beer instead',
        description: 'The Walloon answer to coq au vin, made with a blond abbey ale rather than red wine. Lighter, faintly bitter, and finished with cream to round the bitterness off.',
        instructions: [
          'Season the chicken pieces and brown them hard in butter, skin side first, until properly golden. Do it in batches — crowd the pot and they steam.',
          'Set the chicken aside and cook the bacon bits in the same pot until their fat runs.',
          'Add the chopped shallots and the mushrooms and cook until all the liquid has evaporated and the mushrooms start to colour. Wait for that colour; mushrooms taste of nothing until they get it.',
          'Pour in the beer, scraping the bottom of the pot as you go, and let it bubble for two minutes to cook off the raw edge.',
          'Return the chicken with the bay leaf, thyme and a spoon of mustard. Cover and simmer for 45 minutes.',
          'Lift out the chicken and keep it warm.',
          'Reduce the sauce by about a third, then stir in the cream and let it thicken for a few minutes.',
          'Put the chicken back to warm through, season, and serve with croquettes or plain boiled potatoes.'
        ]
      },
      nl: {
        title: 'Kip in Bier',
        subtitle: 'Coq au vin, maar dan met bier',
        description: 'Het Waalse antwoord op coq au vin, met blond abdijbier in plaats van rode wijn. Lichter, licht bitter, en afgewerkt met room om die bitterheid af te ronden.',
        instructions: [
          'Kruid de kipstukken en bak ze goed bruin in boter, eerst op het vel, tot ze echt goudbruin zijn. Doe het in porties — een volle pot en ze stoven.',
          'Zet de kip opzij en bak de spekblokjes uit in dezelfde pot.',
          'Voeg de gesnipperde sjalotten en de champignons toe en bak tot al het vocht verdampt is en de champignons beginnen te kleuren. Wacht op die kleur; champignons smaken naar niets tot ze die hebben.',
          'Giet het bier erbij, schraap ondertussen de bodem los, en laat twee minuten doorkoken om de scherpte eraf te halen.',
          'Doe de kip terug met laurier, tijm en een lepel mosterd. Deksel erop en 45 minuten laten sudderen.',
          'Haal de kip eruit en hou ze warm.',
          'Kook de saus met ongeveer een derde in, roer er dan de room door en laat enkele minuten binden.',
          'Leg de kip terug om door te warmen, kruid bij, en serveer met kroketten of gewoon gekookte aardappelen.'
        ]
      },
      fr: {
        title: 'Coq à la Bière',
        subtitle: 'Le coq au vin, mais à la bière',
        description: 'La réponse wallonne au coq au vin, faite à la bière blonde d\'abbaye plutôt qu\'au vin rouge. Plus léger, légèrement amer, et terminé à la crème pour arrondir cette amertume.',
        instructions: [
          'Assaisonne les morceaux de poulet et fais-les bien dorer au beurre, côté peau d\'abord, jusqu\'à belle couleur. Par petites quantités — une cocotte chargée les fait cuire à l\'étouffée.',
          'Réserve le poulet et fais rendre les lardons dans la même cocotte.',
          'Ajoute les échalotes émincées et les champignons, et cuis jusqu\'à évaporation complète du liquide et début de coloration. Attends cette couleur ; les champignons n\'ont aucun goût avant.',
          'Verse la bière en grattant le fond de la cocotte, et laisse bouillonner deux minutes pour en ôter l\'âpreté.',
          'Remets le poulet avec le laurier, le thym et une cuillère de moutarde. Couvre et laisse mijoter 45 minutes.',
          'Retire le poulet et garde-le au chaud.',
          'Fais réduire la sauce d\'environ un tiers, puis incorpore la crème et laisse épaissir quelques minutes.',
          'Remets le poulet à réchauffer, rectifie l\'assaisonnement, et sers avec des croquettes ou de simples pommes vapeur.'
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
        subtitle: 'Sausage, mash, and apple that earns its place',
        description: 'A winter market plate. The sweetness of the apple is not a garnish here — it\'s the point, cutting straight through the richness of the sausage.',
        instructions: [
          'Peel and core the apples, cut them into chunks and put them in a pot with a splash of water, the sugar and the cinnamon.',
          'Cover and cook on low for 20 minutes until they collapse. Stir them to a rough compote and leave it slightly chunky — smooth apple sauce belongs on a different plate.',
          'Boil the potatoes in salted water until they give way to a knife, then drain them and let the steam escape properly.',
          'Mash them with the warm milk and most of the butter. Warm milk, not cold; cold milk makes a gluey mash. Season well with salt and nutmeg.',
          'Prick the sausages once or twice so they don\'t split, and fry them gently in the rest of the butter, about 6 minutes a side.',
          'Don\'t rush them on a high heat — black pudding turns grainy if it\'s fried hard, and there\'s no way back from that.',
          'Serve each plate with a sausage, a mound of mash and a generous spoon of warm apple compote.'
        ]
      },
      nl: {
        title: 'Boudin met Appelmoes',
        subtitle: 'Worst, puree, en appel die zijn plaats verdient',
        description: 'Een winters marktbord. Het zoet van de appel is hier geen garnituur — het is de kern van de zaak, en het snijdt dwars door het vette van de worst.',
        instructions: [
          'Schil de appels, verwijder de klokhuizen, snijd ze in stukken en doe ze in een pot met een scheutje water, de suiker en de kaneel.',
          'Deksel erop en 20 minuten op een zacht vuur tot ze uit elkaar vallen. Roer ze tot een grove moes en laat er stukjes in — gladde appelmoes hoort op een ander bord.',
          'Kook de aardappelen gaar in gezouten water tot ze voor een mes wijken, giet ze af en laat de stoom goed ontsnappen.',
          'Stamp ze met de warme melk en het grootste deel van de boter. Warme melk, niet koude; koude melk maakt er lijm van. Kruid goed met zout en nootmuskaat.',
          'Prik de worsten één of twee keer in zodat ze niet barsten, en bak ze zachtjes in de rest van de boter, zo\'n 6 minuten per kant.',
          'Jaag ze niet op een hoog vuur — bloedworst wordt korrelig als je hem hard bakt, en daar kom je niet meer van terug.',
          'Serveer per bord een worst, een berg puree en een royale lepel warme appelmoes.'
        ]
      },
      fr: {
        title: 'Boudin Compote de Pommes',
        subtitle: 'Boudin, purée, et une pomme qui mérite sa place',
        description: 'Une assiette de marché d\'hiver. Le sucré de la pomme n\'est pas une garniture ici — c\'est le cœur du plat, et il tranche net dans le gras du boudin.',
        instructions: [
          'Épluche et évide les pommes, coupe-les en morceaux et mets-les dans une casserole avec un peu d\'eau, le sucre et la cannelle.',
          'Couvre et cuis 20 minutes à feu doux jusqu\'à ce qu\'elles se défassent. Mélange en compote grossière en gardant des morceaux — une compote lisse appartient à une autre assiette.',
          'Cuis les pommes de terre à l\'eau salée jusqu\'à ce qu\'elles cèdent au couteau, égoutte-les et laisse bien la vapeur s\'échapper.',
          'Écrase-les avec le lait chaud et la majeure partie du beurre. Du lait chaud, pas froid ; le lait froid donne une purée collante. Sale et muscade généreusement.',
          'Pique les boudins une ou deux fois pour qu\'ils n\'éclatent pas, et cuis-les doucement dans le reste du beurre, environ 6 minutes par face.',
          'Ne les brusque pas à feu vif — le boudin noir devient granuleux s\'il cuit trop fort, et il n\'y a pas de retour en arrière.',
          'Sers un boudin par assiette, avec un dôme de purée et une bonne cuillère de compote tiède.'
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
        subtitle: 'Chicons au gratin, done with cauliflower',
        description: 'Wrap, sauce, bake. A Wednesday dinner that behaves like a Sunday one, provided you get the cauliflower properly dry first.',
        instructions: [
          'Break the cauliflower into large florets and boil them in salted water for 8 minutes. They should still hold together when you lift them.',
          'Drain them very well and leave them in the colander to steam dry. Wet cauliflower makes a watery gratin, and there is no rescuing one.',
          'Make the béchamel: melt the butter, stir in the flour, cook it two minutes, then whisk in the milk a little at a time.',
          'Simmer until thick, then season with nutmeg, pepper and salt and stir in two thirds of the cheese.',
          'Wrap each floret in half a slice of ham and lay them in a buttered dish, packed close together.',
          'Pour the sauce over so everything is covered and scatter the rest of the cheese on top.',
          'Bake at 200°C for 25 minutes, until it bubbles at the edges and browns in patches.',
          'Let it settle for five minutes before serving with boiled potatoes.'
        ]
      },
      nl: {
        title: 'Bloemkool met Hesp in de Oven',
        subtitle: 'Witloof in de oven, maar met bloemkool',
        description: 'Rollen, sausen, bakken. Een woensdagavond die zich gedraagt als een zondag, op voorwaarde dat je de bloemkool eerst goed droog krijgt.',
        instructions: [
          'Verdeel de bloemkool in grote roosjes en kook ze 8 minuten in gezouten water. Ze moeten nog samenhangen als je ze optilt.',
          'Laat ze heel goed uitlekken en laat ze in de vergiet droog nastomen. Natte bloemkool geeft een waterige gratin, en die valt niet meer te redden.',
          'Maak de bechamel: smelt de boter, roer de bloem erdoor, gaar twee minuten en klop er dan beetje bij beetje de melk door.',
          'Laat indikken, kruid met nootmuskaat, peper en zout en roer twee derde van de kaas erdoor.',
          'Rol elk roosje in een half sneetje hesp en leg ze dicht tegen elkaar in een beboterde schaal.',
          'Giet de saus eroverheen tot alles bedekt is en strooi de rest van de kaas erop.',
          'Bak 25 minuten op 200°C, tot de randen borrelen en de bovenkant plaatselijk bruint.',
          'Laat het vijf minuten zakken voor je opdient, met gekookte aardappelen.'
        ]
      },
      fr: {
        title: 'Gratin de Chou-fleur au Jambon',
        subtitle: 'Les chicons au gratin, version chou-fleur',
        description: 'Rouler, napper, enfourner. Un mercredi soir qui se prend pour un dimanche, à condition de bien sécher le chou-fleur d\'abord.',
        instructions: [
          'Détaille le chou-fleur en gros bouquets et cuis-les 8 minutes à l\'eau salée. Ils doivent encore tenir quand tu les soulèves.',
          'Égoutte-les très soigneusement et laisse-les sécher dans la passoire. Un chou-fleur mouillé donne un gratin aqueux, et on ne rattrape pas ça.',
          'Prépare la béchamel : fais fondre le beurre, incorpore la farine, cuis deux minutes, puis verse le lait petit à petit en fouettant.',
          'Laisse épaissir, assaisonne de muscade, poivre et sel, et incorpore deux tiers du fromage.',
          'Enroule chaque bouquet dans une demi-tranche de jambon et range-les serrés dans un plat beurré.',
          'Nappe de sauce jusqu\'à tout recouvrir et parsème du reste de fromage.',
          'Enfourne 25 minutes à 200°C, jusqu\'à ce que les bords bouillonnent et que le dessus se tache de brun.',
          'Laisse reposer cinq minutes avant de servir avec des pommes vapeur.'
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
        subtitle: 'Raw beef, and the seasoning is everything',
        description: 'A lunch counter fixture. Buy the beef from a butcher you trust and eat it the same day — everything else here is seasoning, and it should taste sharper than you expect.',
        instructions: [
          'Chill a mixing bowl in the freezer for ten minutes. The mixture should never get warm at any point.',
          'Chop the beef by hand with a very sharp knife, or have the butcher mince it fresh while you wait.',
          'Finely chop the shallot, capers, gherkins and parsley.',
          'Mix the egg yolk with the mustard, Worcestershire sauce, a few drops of Tabasco, salt and pepper.',
          'Fold the mayonnaise into that, then combine everything with the beef using a fork rather than your hands. Warm hands are the enemy here.',
          'Taste and adjust. It should be sharper than seems right in the bowl, because the bread will soften all of it.',
          'Pile it onto toasted bread, add a twist of pepper and serve straight away — with fries, if you\'re making a meal of it.'
        ]
      },
      nl: {
        title: 'Filet Américain',
        subtitle: 'Rauw rundvlees, en de kruiding is alles',
        description: 'Een vaste waarde aan de broodjestoog. Koop het rundvlees bij een slager die je vertrouwt en eet het dezelfde dag — al de rest is kruiding, en het hoort scherper te smaken dan je verwacht.',
        instructions: [
          'Zet een mengkom tien minuten in de diepvries. Het mengsel mag op geen enkel moment warm worden.',
          'Hak het rundvlees met een heel scherp mes met de hand fijn, of laat de slager het vers malen terwijl je wacht.',
          'Snipper de sjalot, de kappertjes, de augurken en de peterselie heel fijn.',
          'Meng de eierdooier met de mosterd, de worcestersaus, enkele druppels tabasco, peper en zout.',
          'Spatel de mayonaise erdoor en meng dan alles met het vlees met een vork in plaats van met je handen. Warme handen zijn hier de vijand.',
          'Proef en stel bij. Het mag in de kom scherper smaken dan juist lijkt, want het brood vlakt alles af.',
          'Schep het op geroosterd brood, draai er peper over en dien meteen op — met frieten, als je er een maaltijd van maakt.'
        ]
      },
      fr: {
        title: 'Filet Américain',
        subtitle: 'Du bœuf cru, et l\'assaisonnement fait tout',
        description: 'Une institution des sandwicheries. Achète le bœuf chez un boucher de confiance et mange-le le jour même — tout le reste n\'est qu\'assaisonnement, et ça doit être plus relevé que tu ne crois.',
        instructions: [
          'Mets un saladier dix minutes au congélateur. Le mélange ne doit jamais tiédir, à aucun moment.',
          'Hache le bœuf au couteau bien aiguisé, ou fais-le hacher minute par le boucher pendant que tu attends.',
          'Cisèle très finement l\'échalote, les câpres, les cornichons et le persil.',
          'Mélange le jaune d\'œuf avec la moutarde, la sauce Worcestershire, quelques gouttes de tabasco, du sel et du poivre.',
          'Incorpore la mayonnaise, puis mélange le tout à la viande à la fourchette plutôt qu\'à la main. Les mains chaudes sont l\'ennemi ici.',
          'Goûte et rectifie. Dans le saladier, ça doit paraître plus relevé qu\'il ne faudrait, car le pain adoucira tout.',
          'Dresse sur du pain grillé, donne un tour de poivre et sers aussitôt — avec des frites, si tu en fais un repas.'
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
        subtitle: 'Everything starts with the bones',
        description: 'Coastal soup built on a stock made from the carcasses. Ask the fishmonger for them when you buy the fillets — they cost nothing and the whole soup comes out of them.',
        instructions: [
          'Rinse the fish bones under cold water until it runs clear, to get rid of any blood. Blood left in makes the stock bitter.',
          'Put them in a pot with cold water, the halved onion, a carrot, bay leaf and peppercorns. Simmer 25 minutes and never let it boil hard, or the stock turns cloudy and stays that way.',
          'Strain the stock through a fine sieve and throw the bones away.',
          'In a clean pot, soften the chopped leek, the remaining carrots and the celery in butter for 10 minutes.',
          'Add the tomato paste and cook it out for a minute — that minute takes away the tinny taste — then pour in the white wine and let it reduce by half.',
          'Add the strained stock and the diced potato and simmer until the potato is tender, about 15 minutes.',
          'Cut the fish fillets into large cubes and slide them in with the shrimps. They need 4 minutes at most; any longer and they fall apart into threads.',
          'Take the pot off the heat, stir in the cream and the parsley, and taste it before serving with bread.'
        ]
      },
      nl: {
        title: 'Oostendse Vissoep',
        subtitle: 'Alles begint bij de graten',
        description: 'Kustsoep gebouwd op een fond van de karkassen. Vraag ze aan de visboer als je de filets koopt — ze kosten niets en de hele soep komt eruit voort.',
        instructions: [
          'Spoel de visgraten onder koud water tot het helder blijft, om al het bloed eraf te halen. Bloed dat erin blijft maakt de fond bitter.',
          'Doe ze in een pot met koud water, de gehalveerde ui, een wortel, laurier en peperbolletjes. Laat 25 minuten trekken en nooit hard koken, anders wordt de fond troebel en blijft ze dat.',
          'Zeef de fond door een fijne zeef en gooi de graten weg.',
          'Stoof in een propere pot de gesnipperde prei, de rest van de wortelen en de selder 10 minuten in boter.',
          'Voeg de tomatenpuree toe en bak ze een minuut door — die minuut haalt de blikkerige smaak eraf — giet dan de witte wijn erbij en laat tot de helft inkoken.',
          'Doe de gezeefde fond en de aardappelblokjes erbij en laat sudderen tot de aardappel gaar is, zo\'n 15 minuten.',
          'Snijd de visfilets in grote blokken en laat ze samen met de garnalen in de soep glijden. Ze hebben hooguit 4 minuten nodig; langer en ze vallen uiteen in draadjes.',
          'Haal de pot van het vuur, roer de room en de peterselie erdoor, en proef na voor je opdient met brood.'
        ]
      },
      fr: {
        title: 'Soupe de Poisson Ostendaise',
        subtitle: 'Tout part des arêtes',
        description: 'Une soupe de la côte bâtie sur un fumet d\'arêtes. Demande-les au poissonnier en achetant les filets — elles ne coûtent rien et toute la soupe en sort.',
        instructions: [
          'Rince les arêtes à l\'eau froide jusqu\'à ce qu\'elle reste claire, pour éliminer tout le sang. Le sang qui reste rend le fumet amer.',
          'Mets-les dans une marmite d\'eau froide avec l\'oignon coupé en deux, une carotte, le laurier et les grains de poivre. Laisse frémir 25 minutes sans jamais bouillir fort, sinon le fumet se trouble et le reste.',
          'Passe le fumet au chinois fin et jette les arêtes.',
          'Dans une marmite propre, fais suer 10 minutes au beurre le poireau émincé, le reste des carottes et le céleri.',
          'Ajoute le concentré de tomates et laisse-le cuire une minute — cette minute ôte le goût de boîte — puis verse le vin blanc et fais réduire de moitié.',
          'Ajoute le fumet filtré et les pommes de terre en dés, et laisse mijoter jusqu\'à ce que la pomme de terre soit tendre, environ 15 minutes.',
          'Coupe les filets en gros cubes et fais-les glisser avec les crevettes. Quatre minutes au maximum ; au-delà, ils se défont en filaments.',
          'Retire la marmite du feu, incorpore la crème et le persil, et goûte avant de servir avec du pain.'
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
        subtitle: 'Three ingredients and one technique',
        description: 'Sweat the leeks slowly without letting them brown and the soup stays pale green and sweet. Rush that one step and it turns grey, and no amount of cream will bring it back.',
        instructions: [
          'Trim the leeks, split them lengthways and wash them thoroughly. Grit hides deep between the layers and there\'s no getting it out later.',
          'Slice them finely, the white and the pale green parts alike.',
          'Melt the butter over a low heat, add the leeks and a pinch of salt, put the lid on, and let them sweat for 12 minutes. Stir now and then and don\'t let them take any colour at all.',
          'Add the diced potato and the stock, bring it to a simmer and cook for 15 minutes, until the potato is soft.',
          'Blend until completely smooth. A jug blender gives a finer result than a stick one, if you have the choice.',
          'Stir in the cream off the heat, then season with salt, pepper and nutmeg.',
          'Serve with a swirl of cream and chives — or chill it completely and eat it cold in summer, which is just as good.'
        ]
      },
      nl: {
        title: 'Preisoep',
        subtitle: 'Drie ingrediënten en één techniek',
        description: 'Stoof de prei traag zonder ze te laten bruinen en de soep blijft lichtgroen en zoet. Jaag je die ene stap op, dan wordt ze grijs, en geen hoeveelheid room haalt haar nog terug.',
        instructions: [
          'Kuis de prei, snijd ze in de lengte door en was ze grondig. Zand verstopt zich diep tussen de bladeren en achteraf krijg je het er niet meer uit.',
          'Snijd ze fijn, het witte en het lichtgroene deel evengoed.',
          'Smelt de boter op een zacht vuur, doe de prei en een snuf zout erbij, deksel erop, en laat 12 minuten stoven. Roer af en toe en laat ze absoluut geen kleur krijgen.',
          'Voeg de aardappelblokjes en de bouillon toe, breng tegen de kook en laat 15 minuten koken tot de aardappel zacht is.',
          'Mix volledig glad. Een blenderkan geeft een fijner resultaat dan een staafmixer, als je de keuze hebt.',
          'Roer buiten het vuur de room erdoor en kruid met peper, zout en nootmuskaat.',
          'Serveer met een streep room en bieslook — of laat ze volledig afkoelen en eet ze koud in de zomer, wat even lekker is.'
        ]
      },
      fr: {
        title: 'Velouté de Poireaux',
        subtitle: 'Trois ingrédients et une technique',
        description: 'Fais suer les poireaux lentement sans les laisser colorer et le velouté reste vert pâle et doux. Brusque cette seule étape et il vire au gris, et aucune quantité de crème ne le ramènera.',
        instructions: [
          'Pare les poireaux, fends-les en deux et lave-les soigneusement. Le sable se cache profondément entre les feuilles et on ne l\'enlève plus après.',
          'Émince-les finement, le blanc comme le vert tendre.',
          'Fais fondre le beurre à feu doux, ajoute les poireaux et une pincée de sel, couvre, et laisse suer 12 minutes. Remue de temps en temps et ne les laisse prendre aucune couleur.',
          'Ajoute la pomme de terre en dés et le bouillon, porte à frémissement et cuis 15 minutes, jusqu\'à ce que la pomme de terre soit fondante.',
          'Mixe jusqu\'à parfaite onctuosité. Un blender en bol donne un résultat plus fin qu\'un mixeur plongeant, si tu as le choix.',
          'Hors du feu, incorpore la crème, puis assaisonne de sel, de poivre et de muscade.',
          'Sers avec un trait de crème et de la ciboulette — ou laisse-le refroidir complètement et mange-le froid en été, c\'est tout aussi bon.'
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
        subtitle: 'Bitterness, softened rather than hidden',
        description: 'Made with the vegetable Belgium invented. The bitterness is the whole appeal here — the potato and cream round it off, they don\'t cover it up.',
        instructions: [
          'Trim the chicory and cut out the hard cone at the base of each one. That\'s where most of the bitterness sits, and you want some of it but not all of it.',
          'Slice them roughly, keeping a few leaves aside to fry as a garnish later.',
          'Sweat the chopped onion in butter until translucent, then add the chicory and cook it for 5 minutes.',
          'Add the diced potato and the stock, and simmer for 20 minutes.',
          'Blend it smooth, and pass it through a sieve as well if you want it very fine.',
          'Off the heat, stir in the cream and a teaspoon of Liège syrup. That spoonful rounds the bitterness off without making the soup sweet — leave it out and the whole thing is sharper than most people want.',
          'Fry the leaves you kept back in a little butter until they colour at the edges, and float them on top.'
        ]
      },
      nl: {
        title: 'Witloofsoep',
        subtitle: 'Bitterheid, verzacht in plaats van verstopt',
        description: 'Gemaakt met de groente die België heeft uitgevonden. Dat bittere is hier net de charme — de aardappel en de room ronden het af, ze moffelen het niet weg.',
        instructions: [
          'Kuis het witloof en snijd het harde kegeltje aan de onderkant van elke stronk weg. Daar zit het meeste bitter, en je wil er wat van maar niet alles.',
          'Snijd de stronken grof en hou een paar blaadjes apart om later te bakken als garnituur.',
          'Stoof de gesnipperde ui glazig in boter, voeg dan het witloof toe en bak het 5 minuten mee.',
          'Doe de aardappelblokjes en de bouillon erbij en laat 20 minuten sudderen.',
          'Mix de soep glad, en zeef ze er nog eens door als je ze heel fijn wil.',
          'Roer buiten het vuur de room en een koffielepel Luikse siroop erdoor. Dat lepeltje rondt het bittere af zonder de soep zoet te maken — laat je het weg, dan is het geheel scherper dan de meeste mensen willen.',
          'Bak de blaadjes die je apart hield in wat boter tot ze aan de randen kleuren, en laat ze bovenop drijven.'
        ]
      },
      fr: {
        title: 'Velouté de Chicons',
        subtitle: 'L\'amertume, adoucie plutôt que cachée',
        description: 'Fait avec le légume que la Belgique a inventé. L\'amertume est ici tout l\'intérêt — la pomme de terre et la crème l\'arrondissent, elles ne la masquent pas.',
        instructions: [
          'Pare les chicons et retire le cône dur à la base de chacun. C\'est là que se concentre l\'amertume, et tu en veux un peu mais pas toute.',
          'Émince-les grossièrement en réservant quelques feuilles à faire dorer plus tard en garniture.',
          'Fais suer l\'oignon émincé au beurre jusqu\'à translucidité, puis ajoute les chicons et cuis 5 minutes.',
          'Ajoute la pomme de terre en dés et le bouillon, et laisse mijoter 20 minutes.',
          'Mixe bien lisse, et passe au chinois en plus si tu le veux très fin.',
          'Hors du feu, incorpore la crème et une cuillère à café de sirop de Liège. Cette cuillère arrondit l\'amertume sans sucrer la soupe — sans elle, l\'ensemble est plus âpre que la plupart des gens ne le souhaitent.',
          'Fais dorer au beurre les feuilles réservées jusqu\'à ce qu\'elles colorent sur les bords, et laisse-les flotter dessus.'
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
        subtitle: 'A soup with a season and no patience',
        description: 'Chervil loses everything the moment it is cooked, so it goes in at the very end, off the heat, and the soup goes to the table immediately. It does not reheat, and it does not wait.',
        instructions: [
          'Sweat the chopped onion and the sliced leek in butter for 8 minutes, without letting them colour.',
          'Add the diced potato and the stock, and simmer for 15 minutes until the potato falls apart at the touch of a spoon.',
          'Chop the chervil coarsely, stalks and all — there\'s as much flavour in the stalks as in the leaves.',
          'Take the pot off the heat completely. Then add the chervil and blend straight away.',
          'The soup should turn bright green. If it comes out dull, the pot was still too hot when the chervil went in.',
          'Stir in the cream and season with salt, pepper and a little lemon juice.',
          'Serve at once, with a few whole chervil leaves on top. This one really does not reheat, so make only what you\'ll eat.'
        ]
      },
      nl: {
        title: 'Kervelsoep',
        subtitle: 'Een soep met een seizoen en geen geduld',
        description: 'Kervel verliest alles op het moment dat je hem meekookt, dus gaat hij er helemaal op het einde in, buiten het vuur, en de soep gaat meteen op tafel. Ze warmt niet op, en ze wacht niet.',
        instructions: [
          'Stoof de gesnipperde ui en de gesneden prei 8 minuten in boter, zonder ze te laten kleuren.',
          'Voeg de aardappelblokjes en de bouillon toe en laat 15 minuten koken tot de aardappel bij het minste lepeltje uit elkaar valt.',
          'Hak de kervel grof, de steeltjes mee — daar zit evenveel smaak in als in de blaadjes.',
          'Haal de pot volledig van het vuur. Doe dan pas de kervel erbij en mix meteen.',
          'De soep hoort felgroen te worden. Komt ze dof uit de mixer, dan was de pot nog te heet toen de kervel erin ging.',
          'Roer de room erdoor en kruid met peper, zout en een scheutje citroensap.',
          'Serveer onmiddellijk, met enkele hele kervelblaadjes erop. Deze soep laat zich echt niet opwarmen, dus maak alleen wat je opeet.'
        ]
      },
      fr: {
        title: 'Velouté de Cerfeuil',
        subtitle: 'Un velouté qui a une saison et aucune patience',
        description: 'Le cerfeuil perd tout dès qu\'on le cuit : il arrive donc tout à la fin, hors du feu, et la soupe part aussitôt à table. Elle ne se réchauffe pas, et elle n\'attend pas.',
        instructions: [
          'Fais suer l\'oignon émincé et le poireau tranché au beurre pendant 8 minutes, sans les laisser colorer.',
          'Ajoute la pomme de terre en dés et le bouillon, et laisse cuire 15 minutes, jusqu\'à ce que la pomme de terre se défasse au moindre coup de cuillère.',
          'Hache grossièrement le cerfeuil, tiges comprises — elles ont autant de goût que les feuilles.',
          'Retire complètement la casserole du feu. Ajoute alors le cerfeuil et mixe immédiatement.',
          'Le velouté doit devenir vert vif. S\'il ressort terne, c\'est que la casserole était encore trop chaude au moment d\'ajouter le cerfeuil.',
          'Incorpore la crème et assaisonne de sel, de poivre et d\'un filet de jus de citron.',
          'Sers aussitôt, avec quelques feuilles entières dessus. Celui-ci ne se réchauffe vraiment pas, alors n\'en fais que ce que tu mangeras.'
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
        subtitle: 'Forty minutes of stirring, and worth every one',
        description: 'Eaten warm from the pot in winter and cold from the fridge in summer. The only rule is patience: low heat, frequent stirring, and no shortcuts whatsoever.',
        instructions: [
          'Rinse the rice briefly and drain it.',
          'Bring the milk to a gentle simmer with the split vanilla pod, the cinnamon stick and a pinch of salt.',
          'Add the rice and turn the heat right down. The surface should barely move.',
          'Cook for 40 minutes, stirring every few minutes and scraping the bottom so nothing catches. Add more milk if it thickens too fast. Milk on a low heat catches without warning, and burnt milk is the end of the pot.',
          'When the grains are soft and suspended in a thick, creamy liquid, take it off the heat.',
          'Now stir in the sugar and the butter. Adding sugar earlier makes the rice take much longer to soften — that\'s why it waits until here.',
          'Fish out the vanilla pod and the cinnamon stick.',
          'Serve warm in bowls with brown sugar over the top, and let it melt for a minute before anybody starts.'
        ]
      },
      nl: {
        title: 'Rijstpap',
        subtitle: 'Veertig minuten roeren, en elke minuut waard',
        description: 'Warm uit de pot in de winter, koud uit de koelkast in de zomer. De enige regel is geduld: zacht vuur, vaak roeren, en geen enkele kortere weg.',
        instructions: [
          'Spoel de rijst kort af en laat hem uitlekken.',
          'Breng de melk zachtjes tegen de kook met het opengesneden vanillestokje, de kaneelstok en een snuf zout.',
          'Voeg de rijst toe en zet het vuur zo laag mogelijk. Het oppervlak mag amper bewegen.',
          'Laat 40 minuten koken, roer om de paar minuten en schraap de bodem zodat er niets aanbakt. Voeg melk toe als het te snel indikt. Melk op een laag vuur hecht zonder waarschuwing, en aangebrande melk is het einde van de pot.',
          'Als de korrels zacht zijn en in een dikke, romige massa zweven, haal je de pot van het vuur.',
          'Nu pas roer je de suiker en de boter erdoor. Suiker eerder toevoegen maakt dat de rijst veel trager gaart — daarom wacht hij tot hier.',
          'Vis het vanillestokje en de kaneelstok eruit.',
          'Serveer warm in kommen met bruine suiker erover, en laat die een minuutje smelten voor iemand begint.'
        ]
      },
      fr: {
        title: 'Riz au Lait',
        subtitle: 'Quarante minutes à remuer, et chacune mérite d\'être faite',
        description: 'Chaud sorti de la casserole en hiver, froid du frigo en été. La seule règle est la patience : feu doux, remuer souvent, et pas le moindre raccourci.',
        instructions: [
          'Rince brièvement le riz et égoutte-le.',
          'Porte le lait à léger frémissement avec la gousse de vanille fendue, le bâton de cannelle et une pincée de sel.',
          'Ajoute le riz et baisse le feu au minimum. La surface doit à peine bouger.',
          'Cuis 40 minutes en remuant toutes les quelques minutes et en raclant le fond pour que rien n\'attache. Ajoute du lait si ça épaissit trop vite. Le lait à feu doux accroche sans prévenir, et un lait brûlé, c\'est la fin de la casserole.',
          'Quand les grains sont tendres et en suspension dans un liquide épais et crémeux, retire du feu.',
          'C\'est maintenant que tu incorpores le sucre et le beurre. Sucrer plus tôt ralentit beaucoup la cuisson du riz — voilà pourquoi il attend jusqu\'ici.',
          'Repêche la gousse de vanille et le bâton de cannelle.',
          'Sers chaud dans des bols avec de la cassonade dessus, et laisse-la fondre une minute avant que quiconque commence.'
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
        subtitle: 'The dish invented to rescue stale bread',
        description: 'Literally "lost bread", and the recipe that finds it again. Yesterday\'s loaf works far better than fresh, which simply turns to mush in the custard.',
        instructions: [
          'Whisk the eggs with the milk, sugar, vanilla and cinnamon in a wide, shallow dish.',
          'Lay the bread slices in and leave them 30 seconds a side. Thick, dry slices can take a minute — the drier the bread, the longer it drinks.',
          'Lift each slice out and let the excess drip off. Soaked, not swimming.',
          'Melt butter in a pan over medium heat. Too hot and the outside burns before the middle has set.',
          'Fry the slices for 3 minutes a side, until deep golden and slightly puffed.',
          'Wipe the pan out and use fresh butter between batches, or the burnt specks from the first round will freckle everything that follows.',
          'Serve dusted with icing sugar, or with brown sugar and a spoon of apple compote.'
        ]
      },
      nl: {
        title: 'Verloren Brood',
        subtitle: 'Het gerecht dat bedacht is om oud brood te redden',
        description: 'Letterlijk verloren brood, en het recept dat het terugvindt. Brood van gisteren werkt veel beter dan vers, dat gewoon uiteenvalt in het beslag.',
        instructions: [
          'Klop de eieren los met de melk, de suiker, de vanille en de kaneel in een brede, ondiepe schaal.',
          'Leg de sneden brood erin en laat ze 30 seconden per kant weken. Dikke, droge sneden mogen een minuut — hoe droger het brood, hoe langer het drinkt.',
          'Haal elke snee eruit en laat het overtollige beslag eraf lopen. Doordrenkt, niet zwemmend.',
          'Smelt boter in een pan op middelhoog vuur. Te heet en de buitenkant verbrandt voor het midden gestold is.',
          'Bak de sneden 3 minuten per kant, tot ze diep goudbruin zijn en licht gerezen.',
          'Veeg de pan uit en gebruik verse boter tussen de porties, anders spikkelen de aangebrande kruimels van de eerste ronde alles wat erna komt.',
          'Serveer bestrooid met bloemsuiker, of met bruine suiker en een lepel appelmoes.'
        ]
      },
      fr: {
        title: 'Pain Perdu',
        subtitle: 'Le plat inventé pour sauver le pain rassis',
        description: 'Littéralement du pain perdu, et la recette qui le retrouve. Le pain de la veille marche bien mieux que le frais, qui se délite tout simplement dans l\'appareil.',
        instructions: [
          'Fouette les œufs avec le lait, le sucre, la vanille et la cannelle dans un plat large et peu profond.',
          'Dépose les tranches et laisse-les tremper 30 secondes par face. Des tranches épaisses et sèches peuvent prendre une minute — plus le pain est sec, plus il boit longtemps.',
          'Retire chaque tranche et laisse l\'excédent s\'égoutter. Imbibée, pas noyée.',
          'Fais fondre du beurre dans une poêle à feu moyen. Trop chaud, l\'extérieur brûle avant que le cœur n\'ait pris.',
          'Dore les tranches 3 minutes par face, jusqu\'à belle couleur et léger gonflement.',
          'Essuie la poêle et remets du beurre frais entre les fournées, sinon les miettes brûlées de la première tachetteront tout ce qui suit.',
          'Sers saupoudré de sucre impalpable, ou avec de la cassonade et une cuillère de compote de pommes.'
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
        subtitle: 'Brown sugar sunk into a yeasted base',
        description: 'Brown sugar and cream poured into dimples in a risen dough, where they caramelise into a dark, cracked top. A Walloon bakery tart, and it wants eating barely warm.',
        instructions: [
          'Warm the milk to body temperature, stir in the yeast and a spoon of the sugar, and leave it 10 minutes to foam.',
          'Mix the flour and salt, then work in the yeast milk, the egg and the soft butter until you have a soft, slightly sticky dough. It should stick a little; resist adding flour.',
          'Knead for five minutes, cover it, and leave it to rise for an hour, until doubled.',
          'Knock it back and press it into a buttered 26 cm tin, pushing it a little way up the sides. Leave it to rise another 30 minutes.',
          'Dimple the surface all over with your fingertips, pressing right down. Those hollows are what hold the filling — a flat top just lets it run off the edge.',
          'Mix the brown sugar with the cream and the egg yolks and pour it over, letting it settle into the dimples.',
          'Dot with butter and bake at 200°C for 25 to 30 minutes, until the top is dark and bubbling.',
          'Cool it in the tin for 15 minutes. It\'s at its best barely warm, when the topping has set but is still soft.'
        ]
      },
      nl: {
        title: 'Suikertaart',
        subtitle: 'Bruine suiker weggezakt in een gistdeegbodem',
        description: 'Bruine suiker en room gegoten in kuiltjes in een gerezen deeg, waar ze karamelliseren tot een donkere, gebarsten bovenkant. Een Waalse bakkerstaart, en ze wil lauw gegeten worden.',
        instructions: [
          'Verwarm de melk tot lichaamstemperatuur, roer er de gist en een lepel van de suiker door en laat het 10 minuten schuimen.',
          'Meng de bloem en het zout en werk er de gistmelk, het ei en de zachte boter door tot een zacht, licht plakkerig deeg. Het hóórt een beetje te plakken; hou je in met extra bloem.',
          'Kneed vijf minuten, dek af, en laat een uur rijzen tot het verdubbeld is.',
          'Sla het deeg door en druk het in een beboterde vorm van 26 cm, met een randje omhoog. Laat nog 30 minuten rijzen.',
          'Maak met je vingertoppen kuiltjes over het hele oppervlak, en druk stevig door. Die kuiltjes houden de vulling vast — op een vlakke bovenkant loopt ze gewoon over de rand.',
          'Meng de bruine suiker met de room en de eierdooiers en giet dat erover, zodat het in de kuiltjes zakt.',
          'Verdeel er klontjes boter over en bak 25 à 30 minuten op 200°C, tot de bovenkant donker is en borrelt.',
          'Laat haar 15 minuten afkoelen in de vorm. Ze is op haar best lauw, als de bovenlaag net gestold maar nog zacht is.'
        ]
      },
      fr: {
        title: 'Tarte au Sucre',
        subtitle: 'De la cassonade enfoncée dans une pâte levée',
        description: 'De la cassonade et de la crème versées dans les creux d\'une pâte levée, où elles caramélisent en une croûte sombre et craquelée. Une tarte de boulangerie wallonne, et elle veut se manger à peine tiède.',
        instructions: [
          'Tiédis le lait à température du corps, délaie-y la levure et une cuillère de sucre, et laisse mousser 10 minutes.',
          'Mélange la farine et le sel, puis incorpore le lait à la levure, l\'œuf et le beurre mou jusqu\'à obtenir une pâte souple et légèrement collante. Elle doit coller un peu ; résiste à l\'envie d\'ajouter de la farine.',
          'Pétris cinq minutes, couvre, et laisse lever une heure, jusqu\'à ce qu\'elle double.',
          'Dégaze-la et étale-la dans un moule beurré de 26 cm en remontant un peu sur les bords. Laisse lever encore 30 minutes.',
          'Creuse toute la surface du bout des doigts, en appuyant bien. Ces cavités retiennent la garniture — sur une surface plate, elle file simplement par-dessus bord.',
          'Mélange la cassonade avec la crème et les jaunes d\'œuf, et verse sur la pâte en laissant descendre dans les creux.',
          'Parsème de noisettes de beurre et enfourne 25 à 30 minutes à 200°C, jusqu\'à ce que le dessus soit foncé et bouillonnant.',
          'Laisse refroidir 15 minutes dans le moule. Elle est à son meilleur à peine tiède, quand la garniture a pris mais reste souple.'
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
        subtitle: 'No butter, no eggs, and better on day two',
        description: 'Belgian gingerbread: just honey, rye and spice. It improves for days wrapped in a cloth, and it\'s eaten in thin slices with butter, never in wedges.',
        instructions: [
          'Warm the honey with the milk until it loosens and pours easily. Don\'t let it boil — boiled honey turns bitter.',
          'Mix the rye flour, plain flour, spices, baking soda and salt in a large bowl.',
          'Pour in the warm honey milk and stir until you have a thick, sticky batter with no dry pockets hiding at the bottom.',
          'Add the candied orange peel if you\'re using it, and mix it through.',
          'Scrape it into a lined loaf tin. The batter is far too stiff to pour, so push it into the corners and level the top with the back of a wet spoon.',
          'Bake at 160°C for an hour. It\'s done when a skewer comes out with a few moist crumbs on it, not clean — clean means you\'ve dried it out.',
          'Leave it in the tin for 15 minutes, then turn it out onto a rack.',
          'Once it\'s completely cold, wrap it in a cloth and leave it a day before cutting. It really is much better on day two, and better still on day three.'
        ]
      },
      nl: {
        title: 'Peperkoek',
        subtitle: 'Geen boter, geen eieren, en beter op dag twee',
        description: 'Belgische peperkoek: alleen honing, rogge en kruiden. Hij wordt beter na dagen in een doek, en gaat in dunne sneetjes met boter, nooit in punten.',
        instructions: [
          'Verwarm de honing met de melk tot ze vloeibaar wordt en makkelijk schenkt. Laat ze niet koken — gekookte honing wordt bitter.',
          'Meng de roggebloem, de bloem, de speculaaskruiden, het zuiveringszout en het zout in een grote kom.',
          'Giet de warme honingmelk erbij en roer tot een dik, plakkerig beslag zonder droge plekken die zich onderaan verstoppen.',
          'Voeg de gekonfijte sinaasappelschil toe als je die gebruikt, en meng ze erdoor.',
          'Schep het in een bekleed cakevorm. Het beslag is veel te stijf om te gieten, dus duw het in de hoeken en strijk de bovenkant glad met de bolle kant van een natte lepel.',
          'Bak een uur op 160°C. Hij is klaar als een satéprikker er met enkele vochtige kruimels uitkomt, niet proper — proper betekent dat je hem hebt uitgedroogd.',
          'Laat hem 15 minuten in de vorm staan en stort hem dan op een rooster.',
          'Wikkel hem, helemaal afgekoeld, in een doek en laat hem een dag rusten voor je snijdt. Hij is écht veel beter op dag twee, en nog beter op dag drie.'
        ]
      },
      fr: {
        title: 'Pain d\'Épices',
        subtitle: 'Ni beurre ni œufs, et meilleur le lendemain',
        description: 'Le pain d\'épices belge : rien que du miel, du seigle et des épices. Il gagne à attendre des jours dans un linge, et se mange en fines tranches beurrées, jamais en parts.',
        instructions: [
          'Fais tiédir le miel avec le lait jusqu\'à ce qu\'il se détende et coule facilement. Ne le fais pas bouillir — un miel bouilli devient amer.',
          'Mélange la farine de seigle, la farine ordinaire, les épices, le bicarbonate et le sel dans un grand bol.',
          'Verse le mélange miel-lait chaud et remue jusqu\'à obtenir une pâte épaisse et collante, sans poches sèches cachées au fond.',
          'Ajoute les écorces d\'orange confites si tu en utilises, et mélange-les.',
          'Verse dans un moule à cake chemisé. La pâte est bien trop épaisse pour couler, alors pousse-la dans les angles et lisse le dessus avec le dos d\'une cuillère mouillée.',
          'Enfourne une heure à 160°C. Il est cuit quand une pointe ressort avec quelques miettes humides, pas propre — propre veut dire que tu l\'as desséché.',
          'Laisse-le 15 minutes dans le moule, puis démoule-le sur une grille.',
          'Une fois complètement froid, emballe-le dans un linge et attends un jour avant de le trancher. Il est vraiment bien meilleur le deuxième jour, et meilleur encore le troisième.'
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
        subtitle: 'The terrine every Ardennes butcher argues about',
        description: 'Coarse pork and liver with juniper and a splash of jenever, which is what separates it from an ordinary pâté. It needs a night pressed under a weight before it\'s ready.',
        instructions: [
          'Cut the pork shoulder and the liver into cubes and mince them coarsely, or ask the butcher to put them once through a wide plate. Coarse is the point — a fine mince makes a different, smoother thing.',
          'Crush the juniper berries and the peppercorns roughly in a mortar. They should stay gritty, not powdered; you want to meet them in the slice.',
          'Mix the meat with the crushed spices, the chopped shallots, the thyme, the jenever, the salt and the egg.',
          'Fry a teaspoon of the mixture in a pan and taste it. This is your only chance to correct the seasoning — once it\'s in the mould, that\'s what you\'re eating.',
          'Line a terrine mould with the strips of bacon, letting them overhang the sides.',
          'Pack the mixture in firmly, pressing out any air pockets as you go, then fold the bacon over the top and lay the bay leaves on.',
          'Cover with foil and bake in a water bath at 160°C for about 75 minutes, until the centre reads 72°C.',
          'Let it cool, then weigh it down with a tin in the fridge overnight. That pressing is what gives it a sliceable texture. Eat it within four days, with bread and pickles.'
        ]
      },
      nl: {
        title: 'Ardense Pastei',
        subtitle: 'De pastei waar elke Ardense slager over ruziet',
        description: 'Grof varkensvlees en lever met jeneverbes en een scheut jenever, en dat is wat haar van een gewone paté onderscheidt. Ze moet een nacht onder een gewicht voor ze klaar is.',
        instructions: [
          'Snijd de varkensschouder en de lever in blokjes en maal ze grof, of laat de slager ze één keer door een grove plaat draaien. Grof is de bedoeling — fijn gemalen wordt het een ander, gladder ding.',
          'Kneus de jeneverbessen en de peperbolletjes grof in een vijzel. Ze mogen korrelig blijven, niet tot poeder; je wil ze tegenkomen in de snee.',
          'Meng het vlees met de gekneusde specerijen, de gesnipperde sjalotten, de tijm, de jenever, het zout en het ei.',
          'Bak een koffielepel van het mengsel in een pannetje en proef. Dit is je enige kans om bij te kruiden — eens het in de vorm zit, is dat wat je eet.',
          'Bekleed een terrinevorm met de repen spek en laat ze over de rand hangen.',
          'Duw het mengsel er stevig in en pers de luchtholtes er onderweg uit, vouw dan het spek eroverheen en leg de laurierblaadjes erbovenop.',
          'Dek af met folie en bak au bain-marie 75 minuten op 160°C, tot de kern 72°C aangeeft.',
          'Laat haar afkoelen en zet ze dan een nacht verzwaard met een blik in de koelkast. Dat persen is wat haar snijdbaar maakt. Binnen vier dagen opeten, met brood en zuur.'
        ]
      },
      fr: {
        title: 'Pâté Ardennais',
        subtitle: 'La terrine dont chaque boucher ardennais débat',
        description: 'Du porc et du foie hachés gros avec du genièvre et un trait de genièvre, et c\'est ce qui la distingue d\'un pâté ordinaire. Il lui faut une nuit sous un poids avant d\'être prête.',
        instructions: [
          'Coupe l\'épaule de porc et le foie en cubes et hache-les gros, ou fais-les passer une fois à la grosse grille chez le boucher. Le gros grain est le but — haché fin, ça devient autre chose, de plus lisse.',
          'Concasse grossièrement les baies de genièvre et les grains de poivre au mortier. Garde du grain, pas de poudre ; tu veux les rencontrer dans la tranche.',
          'Mélange la viande avec les épices concassées, les échalotes ciselées, le thym, le genièvre, le sel et l\'œuf.',
          'Fais cuire une cuillère à café du mélange à la poêle et goûte. C\'est ta seule occasion de rectifier l\'assaisonnement — une fois en terrine, c\'est ce que tu mangeras.',
          'Chemise une terrine de bardes de lard en les laissant déborder sur les côtés.',
          'Tasse fermement le mélange en chassant les poches d\'air au fur et à mesure, puis rabats le lard et pose les feuilles de laurier dessus.',
          'Couvre d\'aluminium et cuis au bain-marie à 160°C pendant environ 75 minutes, jusqu\'à 72°C à cœur.',
          'Laisse refroidir, puis presse-la sous une boîte de conserve au réfrigérateur toute la nuit. C\'est ce pressage qui lui donne une texture qui se tranche. À manger dans les quatre jours, avec du pain et des pickles.'
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
