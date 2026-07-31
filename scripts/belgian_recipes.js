/**
 * Belgian classics, written by hand.
 *
 * The book had drifted: 105 of its 115 recipes were generic imports and only a
 * dozen were actually Belgian. These are the dishes a Belgian kitchen is
 * missing without them, in all three languages, with the ingredient names
 * people actually read on packaging here.
 *
 * Amounts and units are raw — scripts/add_belgian_recipes.js runs every line
 * through ingredients.js, so keys, aisles, metric units and staple flags come
 * out the same as everything else in the database.
 *
 * `wiki` lists candidate Wikipedia articles to pull a freely-licensed photo
 * from, most specific first.
 */

const ing = (en, nl, fr, amount, unit) => ({ name: { en, nl, fr }, amount, unit });

module.exports = [
  {
    id: 'gentse-waterzooi',
    prepTime: '25 mins',
    cookTime: '50 mins',
    difficulty: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' },
    servings: 4,
    category: ['soup', 'main'],
    wiki: ['en:Waterzooi', 'nl:Waterzooi'],
    translations: {
      en: {
        title: 'Gentse Waterzooi',
        subtitle: 'Ghent\'s gentlest supper',
        description: 'Chicken poached with root vegetables until it slips off the bone, and a broth finished off the heat with cream and egg yolk. The whole dish turns on one rule: after the yolks go in, it must never boil again.',
        instructions: [
          'Put the chicken on to simmer in water with a bay leaf, thyme, a halved onion, salt and pepper, about 35 minutes, until the meat comes away from the bone without argument.',
          'Lift the chicken out and keep that broth — it\'s the whole soup. Pull the meat off in generous pieces and throw the skin away.',
          'Cut the leek, carrots, celery and potatoes into fine matchsticks. Fine matters here; this is meant to be a delicate thing.',
          'Melt the butter in a wide pot and sweat the vegetables gently for 10 minutes, without letting them take any colour at all.',
          'Pour over enough of the strained broth to cover, and simmer until the potatoes are just tender.',
          'Whisk the cream with the egg yolks in a bowl and take the pot off the heat.',
          'Stir a ladle of the hot broth into the cream first, to warm it through, then pour it all back into the pot. From here on it must never boil again, or the yolks scramble and the whole thing splits.',
          'Return the chicken, warm it through, and finish with parsley and a squeeze of lemon.'
        ]
      },
      nl: {
        title: 'Gentse Waterzooi',
        subtitle: 'Het zachtste avondmaal van Gent',
        description: 'Kip gepocheerd met wortelgroenten tot ze van het bot glijdt, en een bouillon die buiten het vuur gebonden wordt met room en eierdooier. Het hele gerecht draait om één regel: eens de dooiers erin zitten, mag het nooit meer koken.',
        instructions: [
          'Zet de kip op met laurier, tijm, een gehalveerde ui, peper en zout en laat ze zo\'n 35 minuten zachtjes trekken, tot het vlees zonder tegenspraak van het bot komt.',
          'Haal de kip eruit en hou die bouillon bij — dat is de hele soep. Pluk het vlees er in grove stukken af en gooi het vel weg.',
          'Snijd de prei, de wortelen, de selder en de aardappelen in fijne julienne. Fijn is hier belangrijk; dit hoort een tenger gerecht te zijn.',
          'Smelt de boter in een brede pot en stoof de groenten 10 minuten zachtjes glazig, zonder ze ook maar een beetje te laten kleuren.',
          'Giet er genoeg gezeefde bouillon bij tot alles onderstaat en laat sudderen tot de aardappel net gaar is.',
          'Klop de room los met de eierdooiers in een kom en zet de pot van het vuur.',
          'Roer eerst een pollepel hete bouillon door de room om die op te warmen, en giet dan alles terug in de pot. Vanaf hier mag het nooit meer koken, anders schiften de dooiers en valt het hele gerecht uiteen.',
          'Doe de kip erbij, warm alles rustig door en werk af met peterselie en een scheutje citroensap.'
        ]
      },
      fr: {
        title: 'Waterzooi Gantois',
        subtitle: 'Le plus doux des soupers gantois',
        description: 'Du poulet poché avec des légumes racines jusqu\'à quitter l\'os, et un bouillon lié hors du feu à la crème et au jaune d\'œuf. Tout le plat tient à une règle : une fois les jaunes dedans, il ne doit plus jamais bouillir.',
        instructions: [
          'Mets le poulet à frémir dans l\'eau avec du laurier, du thym, un oignon coupé en deux, du sel et du poivre, environ 35 minutes, jusqu\'à ce que la chair quitte l\'os sans discuter.',
          'Retire le poulet et garde ce bouillon — c\'est toute la soupe. Effiloche la chair en gros morceaux et jette la peau.',
          'Taille le poireau, les carottes, le céleri et les pommes de terre en fine julienne. La finesse compte ici ; ce plat doit rester délicat.',
          'Fais fondre le beurre dans une large cocotte et fais suer les légumes doucement 10 minutes, sans les laisser prendre la moindre couleur.',
          'Mouille à hauteur avec le bouillon filtré et laisse cuire jusqu\'à ce que la pomme de terre soit juste tendre.',
          'Fouette la crème avec les jaunes d\'œuf dans un bol et retire la cocotte du feu.',
          'Détends d\'abord la crème avec une louche de bouillon chaud, puis reverse le tout dans la cocotte. À partir de là, plus jamais d\'ébullition, sinon les jaunes coagulent et tout se dissocie.',
          'Remets le poulet, réchauffe doucement, et termine au persil et à un filet de citron.'
        ]
      }
    },
    ingredients: [
      ing('Whole chicken', 'Hele kip', 'Poulet entier', 1, 'st.'),
      ing('Leek', 'Prei', 'Poireau', 3, 'st.'),
      ing('Carrots', 'Wortelen', 'Carottes', 3, 'st.'),
      ing('Celery stalks', 'Bladselder', 'Céleri branche', 3, 'st.'),
      ing('Potatoes', 'Aardappelen', 'Pommes de terre', 500, 'g'),
      ing('Butter', 'Boter', 'Beurre', 60, 'g'),
      ing('Heavy cream', 'Room', 'Crème épaisse', 200, 'ml'),
      ing('Egg yolk', 'Eidooier', 'Jaune d\'oeuf', 2, 'st.'),
      ing('Bay leaf', 'Laurier', 'Laurier', 2, 'st.'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'bunch'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el')
    ]
  },

  {
    id: 'konijn-met-pruimen',
    prepTime: '20 mins',
    cookTime: '1 hr 30 mins',
    difficulty: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' },
    servings: 4,
    category: ['main'],
    wiki: ['nl:Konijn met pruimen', 'en:Rabbit stew'],
    translations: {
      en: {
        title: 'Konijn met Pruimen / Lapin aux Pruneaux',
        subtitle: 'The Sunday dish that smells of the whole house',
        description: 'Rabbit braised in brown beer with prunes that melt away into the sauce over a long, slow hour. What you end up with is dark, sweet and sour all at once, and it wants nothing more than potatoes.',
        instructions: [
          'Soak the prunes in a little warm beer while you get everything else going. They\'ll be plump by the time you need them.',
          'Season the rabbit pieces with salt and pepper and brown them in butter until golden on every side. Set them aside.',
          'Cook the chopped onions in the same pot until soft and see-through, scraping up whatever the rabbit left behind.',
          'Return the rabbit, pour in the brown beer, and add the bay leaves, thyme and the slice of bread spread with mustard.',
          'Cover and simmer very gently for an hour, turning the pieces once halfway.',
          'Add the prunes with their soaking beer and cook another 20 to 30 minutes, until the rabbit is nearly falling off the bone.',
          'Lift out the herbs, stir the bread through to bind the sauce, and finish with the Liège syrup.',
          'Season again — it will want it — and serve with croquettes or plain boiled potatoes.'
        ]
      },
      nl: {
        title: 'Konijn met Pruimen',
        subtitle: 'Het zondagse gerecht waar het hele huis naar ruikt',
        description: 'Konijn gestoofd in bruin bier met pruimen die in een traag uur helemaal in de saus wegsmelten. Wat je overhoudt is donker, zoet en zuur tegelijk, en het vraagt niets meer dan aardappelen.',
        instructions: [
          'Week de pruimen in een beetje lauw bier terwijl je de rest klaarmaakt. Tegen dat je ze nodig hebt zijn ze mooi gezwollen.',
          'Kruid de konijnstukken met peper en zout en bak ze rondom goudbruin in boter. Zet ze opzij.',
          'Stoof de gesnipperde uien glazig in dezelfde pot en schraap alles los wat het konijn heeft achtergelaten.',
          'Doe het konijn terug, giet het bruin bier erbij en voeg laurier, tijm en de boterham met mosterd toe.',
          'Deksel erop en laat een uur heel zachtjes sudderen, en keer de stukken halverwege één keer.',
          'Voeg de pruimen met hun weekbier toe en laat nog 20 à 30 minuten stoven tot het konijn bijna van het bot valt.',
          'Haal de kruiden eruit, roer de boterham door de saus om te binden en werk af met de Luikse siroop.',
          'Kruid nog eens bij — dat zal nodig zijn — en serveer met kroketten of gewoon gekookte aardappelen.'
        ]
      },
      fr: {
        title: 'Lapin aux Pruneaux',
        subtitle: 'Le plat du dimanche qui embaume toute la maison',
        description: 'Du lapin mijoté à la bière brune avec des pruneaux qui fondent entièrement dans la sauce au fil d\'une heure lente. Ce qu\'il reste est sombre, sucré et acide à la fois, et ça ne demande rien de plus que des pommes de terre.',
        instructions: [
          'Fais tremper les pruneaux dans un peu de bière tiède pendant que tu prépares le reste. Ils seront bien gonflés au moment voulu.',
          'Assaisonne les morceaux de lapin de sel et de poivre et fais-les dorer au beurre sur toutes les faces. Réserve-les.',
          'Fais revenir les oignons émincés dans la même cocotte jusqu\'à ce qu\'ils soient tendres et translucides, en grattant ce que le lapin a laissé.',
          'Remets le lapin, verse la bière brune, et ajoute le laurier, le thym et la tartine de moutarde.',
          'Couvre et laisse mijoter très doucement une heure, en retournant les morceaux une fois à mi-parcours.',
          'Ajoute les pruneaux avec leur bière de trempage et poursuis 20 à 30 minutes, jusqu\'à ce que le lapin quitte presque l\'os.',
          'Retire les herbes, délaie la tartine dans la sauce pour la lier, et termine au sirop de Liège.',
          'Rectifie l\'assaisonnement — il en aura besoin — et sers avec des croquettes ou de simples pommes vapeur.'
        ]
      }
    },
    ingredients: [
      ing('Rabbit pieces', 'Konijnenbout', 'Morceaux de lapin', 1200, 'g'),
      ing('Prunes', 'Gedroogde pruimen', 'Pruneaux', 250, 'g'),
      ing('Dark abbey beer', 'Donker abdijbier', 'Bière brune d\'abbaye', 500, 'ml'),
      ing('Onion', 'Ui', 'Oignon', 2, 'st.'),
      ing('Butter', 'Boter', 'Beurre', 50, 'g'),
      ing('Belgian mustard', 'Belgische mosterd', 'Moutarde belge', 1, 'el'),
      ing('Slices of bread', 'Boterhammen', 'Tranches de pain', 1, 'st.'),
      ing('Liège syrup', 'Luikse siroop', 'Sirop de Liège', 1, 'el'),
      ing('Bay leaf', 'Laurier', 'Laurier', 2, 'st.'),
      ing('Thyme', 'Tijm', 'Thym', 2, 'sprig')
    ]
  },

  {
    id: 'vlaamse-hutsepot',
    prepTime: '25 mins',
    cookTime: '2 hrs',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 6,
    category: ['soup', 'main'],
    wiki: ['nl:Hutsepot', 'fr:Hochepot'],
    translations: {
      en: {
        title: 'Vlaamse Hutsepot',
        subtitle: 'The pot that empties the vegetable drawer',
        description: 'Pork and sausage simmered with every root vegetable in the house until the whole thing thickens itself. There is no technique to learn here — only the order things go in, and the patience to leave them.',
        instructions: [
          'Put the pork belly and sausages in a large pot, cover them with cold water and bring it slowly up to a simmer. Skim the grey foam off the top as it rises; that\'s what keeps the broth clear.',
          'Add the bay leaves, thyme, cloves and peppercorns and let it tick over for 45 minutes.',
          'Meanwhile cut the carrots, turnips, leeks, celeriac and cabbage into rough chunks. Nothing here needs to be neat — it all falls apart anyway.',
          'Add the harder vegetables first: carrots, turnip and celeriac. Cook 20 minutes.',
          'Then the potatoes, leeks and cabbage, and cook another 30 minutes.',
          'Crush some of the potato against the side of the pot. That\'s your thickening, and no flour required.',
          'Taste for salt and pepper — it will want more than you think, because there\'s a lot of water in that pot — and serve in deep bowls with mustard alongside.'
        ]
      },
      nl: {
        title: 'Vlaamse Hutsepot',
        subtitle: 'De pot die de groentelade leegmaakt',
        description: 'Varkensvlees en worst gesudderd met elke wortelgroente in huis, tot het geheel zichzelf bindt. Er valt hier geen techniek te leren — alleen de volgorde waarin de dingen erin gaan, en het geduld om ze te laten staan.',
        instructions: [
          'Doe het buikspek en de worsten in een grote pot, zet ze onder koud water en breng het traag tegen de kook aan. Schep het grijze schuim eraf naarmate het bovenkomt; dat is wat de bouillon helder houdt.',
          'Voeg laurier, tijm, kruidnagel en peperbolletjes toe en laat 45 minuten zachtjes trekken.',
          'Snijd ondertussen de wortelen, rapen, prei, knolselder en kool in grove stukken. Niets hoeft hier netjes — het valt toch allemaal uit elkaar.',
          'Doe eerst de harde groenten erbij: wortel, raap en knolselder. Laat 20 minuten koken.',
          'Dan de aardappelen, de prei en de kool, en nog eens 30 minuten koken.',
          'Plet wat aardappel tegen de rand van de pot. Dat is je binding, en er komt geen bloem aan te pas.',
          'Proef en kruid met peper en zout — het wil meer dan je denkt, want er zit veel water in die pot — en dien op in diepe borden met mosterd apart.'
        ]
      },
      fr: {
        title: 'Hochepot Flamand',
        subtitle: 'La marmite qui vide le bac à légumes',
        description: 'Du porc et des saucisses mijotés avec tous les légumes racines de la maison, jusqu\'à ce que le tout se lie de lui-même. Il n\'y a aucune technique à apprendre ici — seulement l\'ordre des choses, et la patience de les laisser faire.',
        instructions: [
          'Mets la poitrine de porc et les saucisses dans une grande marmite, couvre d\'eau froide et monte doucement à frémissement. Écume la mousse grise à mesure qu\'elle monte ; c\'est ce qui garde le bouillon clair.',
          'Ajoute le laurier, le thym, les clous de girofle et les grains de poivre, et laisse aller 45 minutes.',
          'Pendant ce temps, coupe grossièrement les carottes, navets, poireaux, céleri-rave et chou. Rien n\'a besoin d\'être régulier — tout se défait de toute façon.',
          'Ajoute d\'abord les légumes durs : carottes, navet et céleri-rave. Compte 20 minutes.',
          'Puis les pommes de terre, les poireaux et le chou, et poursuis 30 minutes.',
          'Écrase un peu de pomme de terre contre la paroi de la marmite. Voilà ta liaison, et sans une once de farine.',
          'Goûte et assaisonne de sel et de poivre — il en faudra plus que tu ne crois, car il y a beaucoup d\'eau là-dedans — et sers en assiettes creuses avec de la moutarde à part.'
        ]
      }
    },
    ingredients: [
      ing('Pork belly', 'Buikspek', 'Poitrine de porc', 600, 'g'),
      ing('Pork sausages', 'Varkensworsten', 'Saucisses de porc', 4, 'st.'),
      ing('Potatoes', 'Aardappelen', 'Pommes de terre', 800, 'g'),
      ing('Carrots', 'Wortelen', 'Carottes', 4, 'st.'),
      ing('Leek', 'Prei', 'Poireau', 2, 'st.'),
      ing('Turnip', 'Raap', 'Navet', 2, 'st.'),
      ing('Celeriac', 'Knolselder', 'Céleri-rave', 300, 'g'),
      ing('Cabbage', 'Savooikool', 'Chou frisé', 400, 'g'),
      ing('Bay leaf', 'Laurier', 'Laurier', 2, 'st.'),
      ing('Cloves', 'Kruidnagel', 'Clous de girofle', 3, 'st.')
    ]
  },

  {
    id: 'garnaalkroketten',
    prepTime: '40 mins',
    cookTime: '20 mins',
    difficulty: { en: 'Hard', nl: 'Moeilijk', fr: 'Difficile' },
    servings: 4,
    category: ['snack', 'main'],
    wiki: ['nl:Garnaalkroket', 'en:Croquette'],
    translations: {
      en: {
        title: 'Garnaalkroketten',
        subtitle: 'The croquette every brasserie is judged on',
        description: 'A shrimp béchamel made so thick it sets solid overnight, cut into blocks, breaded twice and fried until the crust shatters and the inside runs out. It takes two days and it is the test of a Belgian kitchen.',
        instructions: [
          'Make a stock first: simmer the shrimp shells in the milk for 15 minutes, then strain them out and throw the shells away. Never buy peeled shrimp for this — the shells are where the flavour lives.',
          'Melt the butter, stir in the flour and cook the roux for two minutes without letting it take colour.',
          'Add the warm shrimp milk a little at a time, whisking hard, until you have a very thick, glossy sauce. Thicker than seems sensible; it has to hold its shape cold.',
          'Off the heat, beat in the egg yolk, nutmeg, lemon juice, salt and pepper, then fold in the shrimps.',
          'Spread it into an oiled dish about 3 cm deep, cover it and refrigerate at least four hours, or overnight. It must be completely firm before you go near it with a knife.',
          'Cut into blocks and roll each one in flour, then beaten egg, then breadcrumbs. Do the egg and crumb twice — that second coat is what stops them bursting in the fryer.',
          'Fry at 180°C for about 3 minutes, until deep gold. Two or three at a time; a crowded pan drops the oil temperature and then they leak.',
          'Fry the parsley sprigs for a few seconds until crisp, and serve them on top with a wedge of lemon.'
        ]
      },
      nl: {
        title: 'Garnaalkroketten',
        subtitle: 'De kroket waarop elke brasserie beoordeeld wordt',
        description: 'Een garnalenbéchamel zo dik gedraaid dat ze een nacht lang opstijft tot een blok, in stukken gesneden, twee keer gepaneerd en gefrituurd tot het korstje breekt en de vulling naar buiten loopt. Het kost twee dagen en het is de proef op de som van een Belgische keuken.',
        instructions: [
          'Maak eerst een fond: laat de garnaalpelletjes 15 minuten trekken in de melk, zeef ze eruit en gooi de pelletjes weg. Koop hiervoor nooit gepelde garnalen — in die pelletjes zit net de smaak.',
          'Smelt de boter, roer de bloem erdoor en gaar de roux twee minuten zonder hem te laten kleuren.',
          'Voeg de warme garnaalmelk beetje bij beetje toe terwijl je stevig klopt, tot je een heel dikke, glanzende saus hebt. Dikker dan verstandig lijkt; ze moet koud haar vorm houden.',
          'Van het vuur af klop je de eierdooier, de nootmuskaat, het citroensap, peper en zout erdoor, en spatel je de garnalen erdoor.',
          'Strijk het uit in een ingevette schaal van zo\'n 3 cm dik, dek af en zet minstens vier uur, of een nacht, in de koelkast. Ze moet volledig opgestijfd zijn voor je er met een mes bij komt.',
          'Snijd in blokken en haal elk blok door bloem, dan door losgeklopt ei, dan door paneermeel. Doe ei en paneermeel twee keer — die tweede laag is wat ze in de friteuse heel houdt.',
          'Frituur op 180°C ongeveer 3 minuten tot ze diep goudbruin zijn. Twee of drie tegelijk; een volle pan laat de olie afkoelen en dan lopen ze leeg.',
          'Frituur de peterselietakjes enkele seconden krokant en serveer ze erbovenop met een partje citroen.'
        ]
      },
      fr: {
        title: 'Croquettes aux Crevettes Grises',
        subtitle: 'La croquette sur laquelle on juge une brasserie',
        description: 'Une béchamel de crevettes si épaisse qu\'elle prend en bloc toute une nuit, coupée en morceaux, panée deux fois et frite jusqu\'à ce que la croûte éclate et que l\'intérieur coule. Ça prend deux jours et c\'est l\'épreuve de vérité d\'une cuisine belge.',
        instructions: [
          'Fais d\'abord un fumet : laisse infuser les carapaces dans le lait 15 minutes, filtre et jette les carapaces. N\'achète jamais de crevettes décortiquées pour ça — c\'est dans les carapaces qu\'est le goût.',
          'Fais fondre le beurre, incorpore la farine et cuis le roux deux minutes sans le laisser colorer.',
          'Ajoute le lait de crevettes chaud petit à petit en fouettant fermement, jusqu\'à obtenir une sauce très épaisse et brillante. Plus épaisse qu\'il ne paraît raisonnable ; elle doit tenir sa forme à froid.',
          'Hors du feu, incorpore le jaune d\'œuf, la muscade, le jus de citron, sel et poivre, puis les crevettes.',
          'Étale dans un plat huilé sur 3 cm, couvre et réfrigère au moins quatre heures, idéalement une nuit. Ce doit être parfaitement ferme avant que tu t\'en approches avec un couteau.',
          'Détaille en blocs et passe chacun dans la farine, l\'œuf battu, puis la chapelure. Double l\'œuf et la chapelure — c\'est cette seconde couche qui les empêche d\'éclater dans la friture.',
          'Fais frire à 180°C environ 3 minutes, jusqu\'à une belle couleur dorée. Deux ou trois à la fois ; un bain surchargé refroidit et alors elles se vident.',
          'Fais frire les brins de persil quelques secondes jusqu\'à ce qu\'ils soient croustillants et sers-les dessus avec un quartier de citron.'
        ]
      }
    },
    ingredients: [
      ing('Grey North Sea shrimps', 'Grijze Noordzeegarnalen', 'Crevettes grises', 300, 'g'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 500, 'ml'),
      ing('Butter', 'Boter', 'Beurre', 80, 'g'),
      ing('Flour', 'Bloem', 'Farine', 90, 'g'),
      ing('Egg yolk', 'Eidooier', 'Jaune d\'oeuf', 2, 'st.'),
      ing('Eggs', 'Eieren', 'Oeufs', 2, 'st.'),
      ing('Breadcrumbs', 'Paneermeel', 'Chapelure', 200, 'g'),
      ing('Nutmeg', 'Nootmuskaat', 'Noix de muscade', 1, 'pinch'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 1, 'el'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'bunch')
    ]
  },

  {
    id: 'balletjes-tomatensaus',
    prepTime: '25 mins',
    cookTime: '45 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 4,
    category: ['main'],
    wiki: ['en:Meatball', 'nl:Gehaktbal'],
    translations: {
      en: {
        title: 'Balletjes in Tomatensaus',
        subtitle: 'What every Belgian child was raised on',
        description: 'Soft meatballs, made tender by bread soaked in milk, simmered in a tomato sauce that is sweetened rather than spiced. Serve it with fries or mash and watch grown adults go quiet.',
        instructions: [
          'Tear the bread into a bowl, pour the milk over and let it soak until soft, then squeeze the excess out. That soaked bread is the whole secret of a tender meatball.',
          'Mix the minced meat with the soaked bread, egg, finely chopped onion, parsley, salt, pepper and nutmeg. Don\'t overwork it — the more you knead, the tougher they get.',
          'Roll them into balls the size of a walnut, with wet hands so nothing sticks.',
          'Brown them in butter in batches, turning so they colour all over. They don\'t need to be cooked through yet; they\'ll finish in the sauce.',
          'In the same pot, soften the second chopped onion, then add the chopped tomatoes, tomato paste, bay leaf, a pinch of sugar and the stock.',
          'Simmer the sauce for 15 minutes, then slide the meatballs back in.',
          'Cover and simmer gently for 25 minutes, spooning sauce over them now and then.',
          'Taste and adjust the balance — a little more sugar if the tomatoes are sharp. That sweetness is not a mistake; it\'s how it\'s meant to taste.'
        ]
      },
      nl: {
        title: 'Balletjes in Tomatensaus',
        subtitle: 'Waar elk Belgisch kind mee grootgebracht is',
        description: 'Zachte balletjes, mals gemaakt door brood dat in melk geweekt is, gesudderd in een tomatensaus die gezoet wordt in plaats van gekruid. Serveer het met frieten of puree en kijk hoe volwassen mensen stil vallen.',
        instructions: [
          'Scheur het brood in een kom, giet de melk erover en laat het weken tot het zacht is, en knijp dan het overtollige vocht eruit. Dat geweekte brood is het hele geheim van een mals balletje.',
          'Meng het gehakt met het geweekte brood, het ei, de fijngesnipperde ui, peterselie, peper, zout en nootmuskaat. Kneed niet te lang — hoe meer je kneedt, hoe taaier ze worden.',
          'Rol er balletjes van ter grootte van een okkernoot, met natte handen zodat er niets plakt.',
          'Bak ze in porties bruin in boter en keer ze zodat ze rondom kleuren. Ze hoeven nog niet gaar te zijn; dat gebeurt in de saus.',
          'Stoof in dezelfde pot de tweede gesnipperde ui glazig, en voeg dan de tomatenblokjes, de tomatenpuree, de laurier, een snuf suiker en de bouillon toe.',
          'Laat de saus 15 minuten pruttelen en leg er dan de balletjes in.',
          'Deksel erop en laat 25 minuten zachtjes sudderen, en schep af en toe saus over de balletjes.',
          'Proef en stel bij — een beetje meer suiker als de tomaten scherp zijn. Die zoetheid is geen vergissing; zo hoort het te smaken.'
        ]
      },
      fr: {
        title: 'Boulettes Sauce Tomate',
        subtitle: 'Ce dont chaque enfant belge a été nourri',
        description: 'Des boulettes moelleuses, attendries par du pain trempé au lait, mijotées dans une sauce tomate sucrée plutôt qu\'épicée. Sers-les avec des frites ou de la purée et regarde des adultes se taire.',
        instructions: [
          'Émiette le pain dans un bol, verse le lait dessus et laisse ramollir, puis presse pour retirer l\'excédent. Ce pain trempé est tout le secret d\'une boulette moelleuse.',
          'Mélange le haché avec le pain trempé, l\'œuf, l\'oignon finement émincé, le persil, le sel, le poivre et la muscade. Ne travaille pas trop la masse — plus tu la pétris, plus elles deviennent fermes.',
          'Roule des boulettes de la taille d\'une noix, les mains humides pour que rien ne colle.',
          'Fais-les dorer au beurre par petites quantités, en les retournant pour qu\'elles colorent partout. Elles n\'ont pas besoin d\'être cuites à cœur ; elles finiront dans la sauce.',
          'Dans la même cocotte, fais fondre le second oignon émincé, puis ajoute les tomates concassées, le concentré, le laurier, une pincée de sucre et le bouillon.',
          'Laisse mijoter la sauce 15 minutes, puis replonge les boulettes dedans.',
          'Couvre et laisse mijoter doucement 25 minutes, en les arrosant de sauce de temps en temps.',
          'Goûte et rectifie l\'équilibre — un peu plus de sucre si les tomates sont acides. Ce sucré n\'est pas une erreur ; c\'est ainsi que ça doit avoir le goût.'
        ]
      }
    },
    ingredients: [
      ing('Minced meat', 'Gemengd gehakt', 'Haché mélangé', 700, 'g'),
      ing('Slices of bread', 'Boterhammen', 'Tranches de pain', 2, 'st.'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 100, 'ml'),
      ing('Eggs', 'Eieren', 'Oeufs', 1, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 2, 'st.'),
      ing('Canned tomatoes', 'Tomatenblokjes', 'Tomates concassées', 800, 'g'),
      ing('Tomato paste', 'Tomatenpuree', 'Concentré de tomates', 2, 'el'),
      ing('Beef broth', 'Runderbouillon', 'Bouillon de boeuf', 200, 'ml'),
      ing('Butter', 'Boter', 'Beurre', 40, 'g'),
      ing('Parsley', 'Peterselie', 'Persil', 3, 'el'),
      ing('Bay leaf', 'Laurier', 'Laurier', 1, 'st.'),
      ing('Nutmeg', 'Nootmuskaat', 'Noix de muscade', 1, 'pinch')
    ]
  },

  {
    id: 'brusselse-wafels',
    prepTime: '20 mins',
    cookTime: '20 mins',
    difficulty: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' },
    servings: 6,
    category: ['dessert', 'snack', 'breakfast'],
    wiki: ['en:Belgian waffle', 'nl:Brusselse wafel'],
    translations: {
      en: {
        title: 'Brusselse Wafels',
        subtitle: 'The tall, hollow one — not the Liège waffle',
        description: 'The airy rectangular waffle, crisp outside and almost empty inside. The beaten egg whites do all the work, so fold them in gently and get it into a hot iron before they settle.',
        instructions: [
          'Warm the milk to body temperature — dip a finger in, and if you can\'t feel it, it\'s right — and stir in the yeast with a pinch of the sugar. Leave it 10 minutes until it foams.',
          'Whisk the flour, the rest of the sugar and the salt together in a large bowl.',
          'Beat in the yeast milk, the egg yolks, the melted butter and the vanilla until the batter is smooth.',
          'Cover it and leave it to rise somewhere warm for an hour, until you can see the bubbles working.',
          'Whip the egg whites to soft peaks and fold them into the batter in two goes, keeping as much air in as you can. This is the whole recipe, really — everything else is just batter.',
          'Heat the waffle iron properly and butter it. Pour in just enough batter to cover the plate; it will spread on its own.',
          'Bake 4 to 5 minutes until deep golden and crisp. Resist opening it early — you\'ll tear the waffle in half and learn nothing.',
          'Serve them straight away with icing sugar. They lose their crunch within minutes, so this is not a dish to keep anybody waiting for.'
        ]
      },
      nl: {
        title: 'Brusselse Wafels',
        subtitle: 'De hoge, holle — niet de Luikse wafel',
        description: 'De luchtige rechthoekige wafel, krokant vanbuiten en bijna leeg vanbinnen. Het opgeklopte eiwit doet al het werk, dus spatel het voorzichtig door en zorg dat het in een heet ijzer belandt voor het inzakt.',
        instructions: [
          'Verwarm de melk tot lichaamstemperatuur — steek er een vinger in, en voel je niets, dan klopt het — en roer er de gist met een snufje van de suiker door. Laat 10 minuten schuimen.',
          'Klop de bloem, de rest van de suiker en het zout samen in een grote kom.',
          'Klop de gistmelk, de eierdooiers, de gesmolten boter en de vanille erdoor tot het beslag glad is.',
          'Dek af en laat een uur rijzen op een warme plek, tot je de belletjes ziet werken.',
          'Klop de eiwitten tot zachte pieken en spatel ze in twee keer door het beslag, met zoveel lucht als je erin kan houden. Dat is eigenlijk het hele recept — de rest is gewoon beslag.',
          'Verwarm het wafelijzer goed en vet het in. Giet er net genoeg beslag in om de plaat te bedekken; het loopt vanzelf uit.',
          'Bak 4 à 5 minuten tot ze diep goudbruin en krokant zijn. Open het ijzer niet te vroeg — je trekt de wafel doormidden en je leert er niets uit.',
          'Meteen opdienen met bloemsuiker. Ze verliezen hun krokantheid binnen enkele minuten, dus laat hier niemand op wachten.'
        ]
      },
      fr: {
        title: 'Gaufres de Bruxelles',
        subtitle: 'La grande, la creuse — pas la gaufre de Liège',
        description: 'La gaufre rectangulaire aérienne, croustillante dehors et presque vide dedans. Les blancs montés font tout le travail, alors incorpore-les délicatement et mets-la dans un gaufrier brûlant avant qu\'ils ne retombent.',
        instructions: [
          'Tiédis le lait à température du corps — plonges-y un doigt, et si tu ne sens rien, c\'est bon — et délaie-y la levure avec une pincée de sucre. Laisse mousser 10 minutes.',
          'Mélange au fouet la farine, le reste du sucre et le sel dans un grand bol.',
          'Incorpore le lait à la levure, les jaunes d\'œuf, le beurre fondu et la vanille jusqu\'à obtenir une pâte lisse.',
          'Couvre et laisse lever une heure au chaud, jusqu\'à voir les bulles travailler.',
          'Monte les blancs en neige souple et incorpore-les en deux fois, en gardant le plus d\'air possible. C\'est là toute la recette — le reste n\'est que de la pâte.',
          'Chauffe bien le gaufrier et beurre-le. Verse juste de quoi couvrir la plaque ; ça s\'étale tout seul.',
          'Cuis 4 à 5 minutes jusqu\'à ce que ce soit bien doré et croustillant. Ne l\'ouvre pas trop tôt — tu déchireras la gaufre en deux sans rien apprendre.',
          'Sers-les tout de suite avec du sucre impalpable. Elles ramollissent en quelques minutes, alors ne fais attendre personne.'
        ]
      }
    },
    ingredients: [
      ing('Flour', 'Bloem', 'Farine', 300, 'g'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 400, 'ml'),
      ing('Dry yeast', 'Droge gist', 'Levure sèche', 7, 'g'),
      ing('Eggs', 'Eieren', 'Oeufs', 3, 'st.'),
      ing('Butter', 'Boter', 'Beurre', 125, 'g'),
      ing('Sugar', 'Suiker', 'Sucre', 30, 'g'),
      ing('Vanilla extract', 'Vanille-extract', 'Extrait de vanille', 1, 'kl'),
      ing('Powdered sugar', 'Bloemsuiker', 'Sucre impalpable', 2, 'el')
    ]
  },

  {
    id: 'rijsttaart',
    prepTime: '30 mins',
    cookTime: '45 mins',
    difficulty: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' },
    servings: 8,
    category: ['dessert'],
    wiki: ['nl:Rijsttaart', 'fr:Tarte au riz'],
    translations: {
      en: {
        title: 'Rijsttaart / Tarte au Riz',
        subtitle: 'The tart Verviers built its reputation on',
        description: 'Rice cooked so slowly in vanilla milk that the grains give up and collapse, then baked in a yeasted crust until the top blisters dark. It\'s a bakery tart, and it takes a bakery\'s patience.',
        instructions: [
          'Warm a little of the milk, stir in the yeast and a spoon of sugar, and leave it to foam.',
          'Rub the butter into the flour and salt, then work in the yeast milk and one egg to make a soft dough. Knead it briefly and leave it to rise for an hour.',
          'Meanwhile bring the rest of the milk to a simmer with the vanilla and a pinch of salt.',
          'Add the rice and cook it very gently for 35 to 40 minutes, stirring often, until the grains have broken down and the mixture is thick. Stir often and keep the heat low — rice sticks and scorches the moment you turn your back.',
          'Stir in the sugar and let it cool to lukewarm, then beat in the remaining eggs one at a time. Add them to hot rice and you\'ll have sweet scrambled egg.',
          'Roll the dough out and line a buttered 28 cm tin, pressing it up the sides. Prick the base all over.',
          'Pour in the rice filling and level it. Bake at 190°C for 40 to 45 minutes, until set with dark golden spots on top. Those spots are wanted, not a mistake.',
          'Cool it completely in the tin. It firms as it cools, and it\'s at its best at room temperature — never straight from the oven.'
        ]
      },
      nl: {
        title: 'Rijsttaart',
        subtitle: 'De taart waar Verviers zijn naam aan dankt',
        description: 'Rijst zo traag gegaard in vanillemelk dat de korrels het opgeven en uit elkaar vallen, en dan gebakken in een gistdeegbodem tot de bovenkant donker blaast. Het is een bakkerstaart, en ze vraagt het geduld van een bakker.',
        instructions: [
          'Verwarm een deel van de melk lauw, roer er de gist en een lepel suiker door en laat schuimen.',
          'Wrijf de boter door de bloem en het zout, en werk er dan de gistmelk en één ei door tot een zacht deeg. Kneed kort en laat een uur rijzen.',
          'Breng ondertussen de rest van de melk met de vanille en een snuf zout tegen de kook aan.',
          'Voeg de rijst toe en laat 35 à 40 minuten heel zachtjes garen, regelmatig roerend, tot de korrels uit elkaar vallen en het mengsel dik is. Roer vaak en hou het vuur laag — rijst hecht en brandt aan op het moment dat je je omdraait.',
          'Roer de suiker erdoor, laat het lauw worden en klop dan de overige eieren er één voor één door. Doe je ze bij hete rijst, dan heb je zoet roerei.',
          'Rol het deeg uit en bekleed een beboterde vorm van 28 cm, en druk het tegen de rand op. Prik de bodem overal in.',
          'Giet de rijstvulling erin en strijk ze glad. Bak 40 à 45 minuten op 190°C, tot ze gestold is met donkergouden vlekjes bovenop. Die vlekjes horen erbij, het is geen fout.',
          'Laat haar volledig afkoelen in de vorm. Ze stijft op tijdens het afkoelen en is op haar best op kamertemperatuur — nooit recht uit de oven.'
        ]
      },
      fr: {
        title: 'Tarte au Riz',
        subtitle: 'La tarte qui a fait la réputation de Verviers',
        description: 'Du riz cuit si lentement dans un lait vanillé que les grains abandonnent et se défont, puis cuit dans une pâte levée jusqu\'à ce que le dessus se tache de brun. C\'est une tarte de boulangerie, et elle demande la patience d\'un boulanger.',
        instructions: [
          'Tiédis une partie du lait, délaie-y la levure et une cuillère de sucre, et laisse mousser.',
          'Sable le beurre avec la farine et le sel, puis incorpore le lait à la levure et un œuf pour obtenir une pâte souple. Pétris brièvement et laisse lever une heure.',
          'Pendant ce temps, porte le reste du lait à frémissement avec la vanille et une pincée de sel.',
          'Ajoute le riz et laisse cuire très doucement 35 à 40 minutes en remuant souvent, jusqu\'à ce que les grains se défassent et que le mélange épaississe. Remue souvent et garde le feu bas — le riz accroche et brûle dès qu\'on a le dos tourné.',
          'Incorpore le sucre, laisse tiédir, puis ajoute les œufs restants un à un. Sur du riz brûlant, tu obtiendrais des œufs brouillés sucrés.',
          'Abaisse la pâte et garnis un moule beurré de 28 cm en remontant sur les bords. Pique le fond partout.',
          'Verse la garniture au riz et lisse. Enfourne à 190°C pendant 40 à 45 minutes, jusqu\'à ce que ce soit pris et tacheté de brun doré. Ces taches sont voulues, pas une erreur.',
          'Laisse refroidir complètement dans le moule. Elle se raffermit en refroidissant et se mange au mieux à température ambiante — jamais à la sortie du four.'
        ]
      }
    },
    ingredients: [
      ing('Rice', 'Rijst', 'Riz', 150, 'g'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 1000, 'ml'),
      ing('Sugar', 'Suiker', 'Sucre', 150, 'g'),
      ing('Eggs', 'Eieren', 'Oeufs', 4, 'st.'),
      ing('Flour', 'Bloem', 'Farine', 250, 'g'),
      ing('Butter', 'Boter', 'Beurre', 100, 'g'),
      ing('Dry yeast', 'Droge gist', 'Levure sèche', 7, 'g'),
      ing('Vanilla extract', 'Vanille-extract', 'Extrait de vanille', 2, 'kl')
    ]
  },

  {
    id: 'spruitjes-met-spek',
    prepTime: '15 mins',
    cookTime: '20 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 4,
    category: ['main', 'snack'],
    wiki: ['en:Brussels sprout', 'nl:Spruitje'],
    translations: {
      en: {
        title: 'Spruitjes met Spek',
        subtitle: 'Sprouts, finally treated properly',
        description: 'Sprouts get their bad name from being boiled to death. Halved, browned cut-side down in bacon fat and finished with cream, they become something people ask for again.',
        instructions: [
          'Trim the sprouts, pull off any tired outer leaves and halve them through the root, so they hold together.',
          'Blanch them in well-salted boiling water for 4 minutes, then drain and refresh under cold water. That cold water stops them cooking and keeps them green.',
          'Fry the bacon bits in a dry pan until the fat has rendered out and they\'re crisp. Lift them out and leave every drop of that fat behind.',
          'Add the butter, then lay the sprouts in cut side down. Leave them completely alone for 4 minutes — that untouched face is where all the browning happens.',
          'Toss them, add the sliced shallot and cook another 4 minutes.',
          'Return the bacon, pour in the cream and let it bubble for a minute until it clings to everything.',
          'Grate nutmeg over, season with pepper — the bacon usually brings enough salt — and serve.'
        ]
      },
      nl: {
        title: 'Spruitjes met Spek',
        subtitle: 'Spruitjes, eindelijk fatsoenlijk behandeld',
        description: 'Spruitjes hebben hun slechte naam te danken aan doodkoken. Gehalveerd, met de snijkant in spekvet gebruind en met room afgewerkt, worden ze iets waar mensen opnieuw naar vragen.',
        instructions: [
          'Kuis de spruitjes, haal de slappe buitenste blaadjes eraf en halveer ze door de wortel, zodat ze samenhouden.',
          'Blancheer ze 4 minuten in goed gezouten kokend water, giet ze af en spoel ze koud. Dat koude water stopt het garen en houdt ze groen.',
          'Bak de spekblokjes uit in een droge pan tot het vet gesmolten is en ze krokant zijn. Schep ze eruit en laat elke druppel van dat vet in de pan.',
          'Voeg de boter toe en leg de spruitjes met de snijkant naar beneden. Laat ze 4 minuten volledig met rust — op dat onaangeroerde vlak gebeurt al het bruinen.',
          'Schud ze om, voeg de gesnipperde sjalot toe en bak nog 4 minuten.',
          'Doe het spek terug, giet de room erbij en laat een minuut borrelen tot ze overal aan hangt.',
          'Rasp er nootmuskaat over, kruid met peper — het spek brengt meestal genoeg zout mee — en dien op.'
        ]
      },
      fr: {
        title: 'Choux de Bruxelles au Lard',
        subtitle: 'Des choux de Bruxelles enfin bien traités',
        description: 'Les choux de Bruxelles doivent leur mauvaise réputation à la surcuisson. Coupés en deux, colorés face coupée dans la graisse de lard et crémés, ils deviennent quelque chose qu\'on redemande.',
        instructions: [
          'Pare les choux, retire les feuilles fatiguées et coupe-les en deux dans le sens de la racine, pour qu\'ils tiennent.',
          'Blanchis-les 4 minutes à l\'eau bouillante bien salée, égoutte et rafraîchis à l\'eau froide. Cette eau froide arrête la cuisson et garde la couleur.',
          'Fais rendre les lardons à sec jusqu\'à ce que la graisse ait fondu et qu\'ils soient croustillants. Retire-les en laissant chaque goutte de graisse.',
          'Ajoute le beurre, puis pose les choux face coupée vers le fond. Ne les touche absolument pas pendant 4 minutes — c\'est sur cette face immobile que tout se colore.',
          'Remue-les, ajoute l\'échalote émincée et poursuis 4 minutes.',
          'Remets les lardons, verse la crème et laisse bouillonner une minute jusqu\'à ce qu\'elle enrobe tout.',
          'Râpe de la muscade dessus, poivre — les lardons apportent en général assez de sel — et sers.'
        ]
      }
    },
    ingredients: [
      ing('Brussels sprouts', 'Spruitjes', 'Choux de Bruxelles', 700, 'g'),
      ing('Bacon bits', 'Spekblokjes', 'Lardons', 200, 'g'),
      ing('Shallot', 'Sjalot', 'Échalote', 2, 'st.'),
      ing('Butter', 'Boter', 'Beurre', 30, 'g'),
      ing('Heavy cream', 'Room', 'Crème épaisse', 100, 'ml'),
      ing('Nutmeg', 'Nootmuskaat', 'Noix de muscade', 1, 'pinch')
    ]
  },

  {
    id: 'croque-monsieur',
    prepTime: '15 mins',
    cookTime: '15 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 2,
    category: ['snack', 'main'],
    wiki: ['en:Croque monsieur', 'fr:Croque-monsieur'],
    translations: {
      en: {
        title: 'Croque Monsieur',
        subtitle: 'Béchamel on the outside as well as in',
        description: 'The brasserie standard done properly. Putting béchamel on top as well as inside is what gives you a blistered brown crust instead of dry toasted bread.',
        instructions: [
          'Make a béchamel: melt the butter, stir in the flour, cook it two minutes, then whisk in the milk a little at a time.',
          'Simmer until it\'s thick enough to coat a spoon, then season with salt, pepper and plenty of nutmeg — more than you think. Stir in a third of the cheese.',
          'Butter four slices of bread on one side. Spread the unbuttered side of two of them with mustard.',
          'Layer on the ham, a spoon of béchamel and half the remaining cheese, then close the sandwiches.',
          'Spread the rest of the béchamel over the tops, right to the crusts, and scatter the last of the cheese over.',
          'Bake at 200°C for 10 minutes, then grill for 2 to 3 minutes until the top is bubbling and dark in patches. Stay and watch it under the grill.',
          'Rest it a minute before cutting, or the filling runs straight out onto the board.'
        ]
      },
      nl: {
        title: 'Croque Monsieur',
        subtitle: 'Bechamel vanbuiten net zo goed als vanbinnen',
        description: 'De brasserieklassieker zoals het hoort. Bechamel ook bovenop leggen is wat je een gebobbelde bruine korst geeft in plaats van droog geroosterd brood.',
        instructions: [
          'Maak een bechamel: smelt de boter, roer de bloem erdoor, gaar twee minuten en klop er dan beetje bij beetje de melk door.',
          'Laat indikken tot ze aan de lepel blijft hangen en kruid met peper, zout en flink wat nootmuskaat — meer dan je denkt. Roer een derde van de kaas erdoor.',
          'Besmeer vier sneden brood aan één kant met boter. Smeer mosterd op de onbeboterde kant van twee ervan.',
          'Beleg met de hesp, een lepel bechamel en de helft van de resterende kaas, en sluit de boterhammen.',
          'Strijk de rest van de bechamel over de bovenkanten, tot aan de korstjes, en strooi de laatste kaas erover.',
          'Bak 10 minuten op 200°C en gratineer dan 2 à 3 minuten tot de bovenkant borrelt en donkere plekken krijgt. Blijf erbij onder de grill.',
          'Laat het een minuutje rusten voor je snijdt, anders loopt de vulling er meteen uit op je plank.'
        ]
      },
      fr: {
        title: 'Croque Monsieur',
        subtitle: 'De la béchamel dessus autant que dedans',
        description: 'Le classique de brasserie bien fait. Mettre de la béchamel sur le dessus aussi, c\'est ce qui donne une croûte brune et boursouflée au lieu d\'un pain grillé sec.',
        instructions: [
          'Prépare une béchamel : fais fondre le beurre, incorpore la farine, cuis deux minutes, puis verse le lait progressivement en fouettant.',
          'Laisse épaissir jusqu\'à ce que ça nappe la cuillère, assaisonne de sel, de poivre et de beaucoup de muscade — plus que tu ne crois. Incorpore un tiers du fromage.',
          'Beurre quatre tranches de pain d\'un côté. Tartine de moutarde la face non beurrée de deux d\'entre elles.',
          'Garnis de jambon, d\'une cuillère de béchamel et de la moitié du fromage restant, puis referme.',
          'Étale le reste de la béchamel sur le dessus, jusqu\'aux croûtes, et parsème du dernier fromage.',
          'Enfourne 10 minutes à 200°C, puis passe 2 à 3 minutes sous le gril jusqu\'à ce que le dessus bouillonne et se tache de brun. Reste devant pendant le gril.',
          'Laisse reposer une minute avant de couper, sinon la garniture file droit sur la planche.'
        ]
      }
    },
    ingredients: [
      ing('Slices of bread', 'Boterhammen', 'Tranches de pain', 4, 'st.'),
      ing('Cooked ham', 'Gekookte hesp', 'Jambon cuit', 4, 'slices'),
      ing('Grated cheese', 'Geraspte kaas', 'Fromage râpé', 150, 'g'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 250, 'ml'),
      ing('Butter', 'Boter', 'Beurre', 30, 'g'),
      ing('Flour', 'Bloem', 'Farine', 25, 'g'),
      ing('Belgian mustard', 'Belgische mosterd', 'Moutarde belge', 1, 'kl'),
      ing('Nutmeg', 'Nootmuskaat', 'Noix de muscade', 1, 'pinch')
    ]
  },

  {
    id: 'tomatensoep-balletjes',
    prepTime: '20 mins',
    cookTime: '40 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 6,
    category: ['soup'],
    wiki: ['en:Tomato soup', 'nl:Tomatensoep'],
    translations: {
      en: {
        title: 'Tomatensoep met Balletjes',
        subtitle: 'The soup at every family gathering',
        description: 'Smooth, slightly sweet tomato soup with meatballs no bigger than a marble dropped in at the end. Every Belgian family has an opinion about the right size of the balls.',
        instructions: [
          'Soften the chopped onion and carrot in butter for 10 minutes, without letting them take colour.',
          'Add the tomatoes, tomato paste, stock, bay leaf and a pinch of sugar. Simmer for 25 minutes.',
          'Meanwhile mix the minced meat with the egg, breadcrumbs, salt, pepper and nutmeg, and roll marble-sized balls. Small — they should fit on a spoon with the soup.',
          'Fish out the bay leaf and blend the soup completely smooth. Pass it through a sieve as well if you want it properly silky.',
          'Bring the soup back to a gentle simmer and drop the meatballs in. They\'re done when they float, about 6 minutes.',
          'Taste and balance it with salt, pepper and a little more sugar if the tomatoes are sharp.',
          'Serve with a spoon of cream stirred through and parsley on top.'
        ]
      },
      nl: {
        title: 'Tomatensoep met Balletjes',
        subtitle: 'De soep van elk familiefeest',
        description: 'Gladde, licht zoete tomatensoep met balletjes niet groter dan een knikker die er op het eind in gaan. Elke Belgische familie heeft een mening over de juiste grootte van die balletjes.',
        instructions: [
          'Stoof de gesnipperde ui en wortel 10 minuten in boter, zonder ze te laten kleuren.',
          'Voeg de tomaten, de tomatenpuree, de bouillon, de laurier en een snuf suiker toe. Laat 25 minuten sudderen.',
          'Meng ondertussen het gehakt met het ei, het paneermeel, peper, zout en nootmuskaat en rol balletjes ter grootte van een knikker. Klein — ze moeten samen met de soep op een lepel passen.',
          'Haal de laurier eruit en mix de soep helemaal glad. Zeef ze er nog eens door als je ze echt fluweelzacht wil.',
          'Breng de soep terug tegen de kook aan en laat de balletjes erin glijden. Ze zijn gaar als ze bovendrijven, na een minuut of 6.',
          'Proef en breng in evenwicht met peper, zout en eventueel wat meer suiker als de tomaten scherp zijn.',
          'Serveer met een lepel room erdoor geroerd en peterselie erbovenop.'
        ]
      },
      fr: {
        title: 'Soupe Tomate aux Boulettes',
        subtitle: 'La soupe de toutes les fêtes de famille',
        description: 'Un velouté de tomates lisse et légèrement sucré avec des boulettes pas plus grosses qu\'une bille ajoutées à la fin. Chaque famille belge a un avis sur la bonne taille des boulettes.',
        instructions: [
          'Fais suer l\'oignon et la carotte émincés au beurre pendant 10 minutes, sans les laisser colorer.',
          'Ajoute les tomates, le concentré, le bouillon, le laurier et une pincée de sucre. Laisse mijoter 25 minutes.',
          'Pendant ce temps, mélange le haché avec l\'œuf, la chapelure, le sel, le poivre et la muscade, et roule des boulettes de la taille d\'une bille. Petites — elles doivent tenir sur une cuillère avec la soupe.',
          'Retire le laurier et mixe la soupe bien lisse. Passe-la aussi au chinois si tu la veux vraiment veloutée.',
          'Ramène la soupe à frémissement et laisse glisser les boulettes dedans. Elles sont cuites quand elles remontent, après 6 minutes environ.',
          'Goûte et équilibre avec du sel, du poivre et un peu plus de sucre si les tomates sont acides.',
          'Sers avec une cuillère de crème mélangée dedans et du persil dessus.'
        ]
      }
    },
    ingredients: [
      ing('Canned tomatoes', 'Tomatenblokjes', 'Tomates concassées', 1200, 'g'),
      ing('Minced meat', 'Gemengd gehakt', 'Haché mélangé', 300, 'g'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Carrots', 'Wortelen', 'Carottes', 2, 'st.'),
      ing('Vegetable broth', 'Groentebouillon', 'Bouillon de légumes', 1000, 'ml'),
      ing('Tomato paste', 'Tomatenpuree', 'Concentré de tomates', 2, 'el'),
      ing('Butter', 'Boter', 'Beurre', 30, 'g'),
      ing('Eggs', 'Eieren', 'Oeufs', 1, 'st.'),
      ing('Breadcrumbs', 'Paneermeel', 'Chapelure', 3, 'el'),
      ing('Heavy cream', 'Room', 'Crème épaisse', 100, 'ml'),
      ing('Bay leaf', 'Laurier', 'Laurier', 1, 'st.')
    ]
  },

  {
    id: 'luikse-salade',
    prepTime: '15 mins',
    cookTime: '20 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 4,
    category: ['main', 'snack'],
    wiki: ['fr:Salade liégeoise', 'nl:Luikse salade'],
    translations: {
      en: {
        title: 'Luikse Salade / Salade Liégeoise',
        subtitle: 'A salad served warm, on purpose',
        description: 'Green beans and potatoes tossed with bacon and vinegar straight from the hot pan, so everything drinks up the dressing. Serve it cold and you\'ve made a different, worse dish.',
        instructions: [
          'Boil the potatoes in their skins until tender, then drain and cut them into thick slices while they\'re still warm. Warm potato takes on dressing; cold potato refuses it.',
          'Cook the green beans in salted water for 6 to 8 minutes, so they keep a little bite. Drain them well.',
          'Fry the bacon bits in a large pan until crisp, then add the sliced shallot and cook another two minutes.',
          'Take the pan off the heat and pour in the vinegar. It will steam up at once and lift everything off the bottom of the pan — that\'s the dressing making itself.',
          'Tip in the warm potatoes and beans and toss them so they take up the bacon fat and vinegar.',
          'Season with pepper, add salt only if it actually needs it, and scatter parsley over.',
          'Serve it warm, on its own or with a fried egg on top.'
        ]
      },
      nl: {
        title: 'Luikse Salade',
        subtitle: 'Een salade die met opzet warm wordt opgediend',
        description: 'Prinsessenbonen en aardappelen door spek en azijn zo uit de hete pan, zodat alles de dressing opdrinkt. Dien je ze koud op, dan heb je een ander en minder goed gerecht gemaakt.',
        instructions: [
          'Kook de aardappelen in hun schil gaar, giet ze af en snijd ze nog warm in dikke schijven. Warme aardappel neemt dressing op; koude aardappel weigert.',
          'Kook de bonen 6 à 8 minuten in gezouten water, zodat ze nog wat beet houden. Laat ze goed uitlekken.',
          'Bak de spekblokjes krokant in een grote pan, voeg dan de gesnipperde sjalot toe en bak nog twee minuten.',
          'Haal de pan van het vuur en giet de azijn erbij. Die stoomt meteen op en maakt alles van de bodem los — dat is je dressing die zichzelf maakt.',
          'Doe de warme aardappelen en de bonen erbij en schud om zodat ze het spekvet en de azijn opnemen.',
          'Kruid met peper, voeg alleen zout toe als het echt nodig is, en strooi er peterselie over.',
          'Warm opdienen, zo of met een gebakken ei erbovenop.'
        ]
      },
      fr: {
        title: 'Salade Liégeoise',
        subtitle: 'Une salade servie tiède, exprès',
        description: 'Des haricots verts et des pommes de terre mêlés au lard et au vinaigre sortis de la poêle brûlante, pour que tout boive la vinaigrette. Sers-la froide et tu auras fait un autre plat, moins bon.',
        instructions: [
          'Cuis les pommes de terre en robe des champs jusqu\'à tendreté, égoutte-les et coupe-les en grosses rondelles encore chaudes. Une pomme de terre tiède prend la vinaigrette ; froide, elle la refuse.',
          'Cuis les haricots 6 à 8 minutes à l\'eau salée, pour qu\'ils gardent du croquant. Égoutte-les bien.',
          'Fais rissoler les lardons dans une grande poêle jusqu\'à ce qu\'ils croustillent, puis ajoute l\'échalote émincée et poursuis deux minutes.',
          'Retire la poêle du feu et verse le vinaigre. Il va fumer aussitôt et décoller tout ce qui est au fond — c\'est ta vinaigrette qui se fait toute seule.',
          'Ajoute les pommes de terre et les haricots tièdes et remue pour qu\'ils absorbent la graisse de lard et le vinaigre.',
          'Poivre, ne sale que si c\'est vraiment nécessaire, et parsème de persil.',
          'Sers tiède, tel quel ou surmonté d\'un œuf au plat.'
        ]
      }
    },
    ingredients: [
      ing('Green beans', 'Prinsessenbonen', 'Haricots verts', 600, 'g'),
      ing('Potatoes', 'Aardappelen', 'Pommes de terre', 700, 'g'),
      ing('Bacon bits', 'Spekblokjes', 'Lardons', 200, 'g'),
      ing('Shallot', 'Sjalot', 'Échalote', 2, 'st.'),
      ing('Vinegar', 'Azijn', 'Vinaigre', 3, 'el'),
      ing('Parsley', 'Peterselie', 'Persil', 2, 'el')
    ]
  },

  {
    id: 'speculoos',
    prepTime: '20 mins',
    cookTime: '15 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 8,
    category: ['dessert', 'snack'],
    wiki: ['en:Speculaas', 'nl:Speculaas'],
    translations: {
      en: {
        title: 'Speculoos',
        subtitle: 'The biscuit in every Belgian saucer',
        description: 'Brown sugar and spice do all the work here, but the dough wants a night in the fridge before it will behave. Try to roll it the same day and it sticks to everything you own.',
        instructions: [
          'Beat the soft butter with the brown sugar until light and creamy.',
          'Mix the flour, spices, baking soda and salt in a separate bowl.',
          'Work the dry mix into the butter with the milk until it just comes together as a dough. Don\'t knead it much — the less you handle it, the shorter the biscuit.',
          'Wrap it and refrigerate overnight. This is what gives speculoos their snap and lets the spices spread through the dough.',
          'Roll it out thin, about 4 mm, on a floured surface and cut out your shapes.',
          'Bake at 170°C for 12 to 15 minutes, until evenly brown at the edges.',
          'They\'re still soft coming out of the oven — that\'s normal. Leave them on a rack to crisp up completely before you judge them.'
        ]
      },
      nl: {
        title: 'Speculoos',
        subtitle: 'Het koekje bij elk Belgisch koffieschoteltje',
        description: 'De bruine suiker en de speculaaskruiden doen hier al het werk, maar het deeg wil een nacht in de koelkast voor het meewerkt. Probeer het dezelfde dag uit te rollen en het plakt aan alles wat je bezit.',
        instructions: [
          'Klop de zachte boter met de bruine suiker luchtig en romig.',
          'Meng de bloem, de speculaaskruiden, het zuiveringszout en het zout in een aparte kom.',
          'Werk het droge mengsel met de melk door de boter tot het net tot een deeg samenkomt. Kneed niet te lang — hoe minder je eraan zit, hoe brozer het koekje.',
          'Wikkel het in en laat het een nacht in de koelkast rusten. Dat geeft speculoos zijn knapperigheid en laat de kruiden zich door het deeg verspreiden.',
          'Rol het dun uit, zo\'n 4 mm, op een met bloem bestoven werkblad en steek je vormen uit.',
          'Bak 12 à 15 minuten op 170°C, tot ze aan de randen gelijkmatig bruin zijn.',
          'Ze zijn nog zacht als ze uit de oven komen — dat hoort. Laat ze op een rooster volledig hard worden voor je erover oordeelt.'
        ]
      },
      fr: {
        title: 'Spéculoos',
        subtitle: 'Le biscuit de chaque soucoupe belge',
        description: 'La cassonade et les épices font tout le travail ici, mais la pâte réclame une nuit au frais avant de se laisser faire. Essaie de l\'étaler le jour même et elle colle à tout ce que tu possèdes.',
        instructions: [
          'Bats le beurre mou avec la cassonade jusqu\'à obtenir un mélange clair et crémeux.',
          'Mélange la farine, les épices, le bicarbonate et le sel dans un autre bol.',
          'Incorpore le mélange sec et le lait au beurre jusqu\'à ce que ça forme tout juste une pâte. Ne pétris pas trop — moins tu la travailles, plus le biscuit sera sablé.',
          'Filme-la et réserve une nuit au réfrigérateur. C\'est ce qui donne le croquant et laisse les épices se diffuser dans la pâte.',
          'Abaisse-la finement, environ 4 mm, sur un plan fariné et découpe tes formes.',
          'Enfourne 12 à 15 minutes à 170°C, jusqu\'à ce que les bords soient uniformément bruns.',
          'Ils sont encore mous à la sortie du four — c\'est normal. Laisse-les durcir complètement sur une grille avant de les juger.'
        ]
      }
    },
    ingredients: [
      ing('Flour', 'Bloem', 'Farine', 300, 'g'),
      ing('Brown sugar', 'Bruine suiker', 'Cassonade', 200, 'g'),
      ing('Butter', 'Boter', 'Beurre', 150, 'g'),
      ing('Cinnamon', 'Kaneel', 'Cannelle', 2, 'kl'),
      ing('Nutmeg', 'Nootmuskaat', 'Noix de muscade', 0.5, 'kl'),
      ing('Cloves', 'Kruidnagelpoeder', 'Girofle en poudre', 0.5, 'kl'),
      ing('Baking soda', 'Zuiveringszout', 'Bicarbonate de soude', 1, 'kl'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 2, 'el')
    ]
  },

  {
    id: 'dame-blanche',
    prepTime: '10 mins',
    cookTime: '10 mins',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 4,
    category: ['dessert'],
    wiki: ['fr:Dame blanche (dessert)', 'nl:Dame blanche'],
    translations: {
      en: {
        title: 'Dame Blanche',
        subtitle: 'Cold ice cream, hot chocolate, nothing else',
        description: 'It stands or falls entirely on the sauce, so use chocolate you would happily eat on its own. Everything else about it is just assembly.',
        instructions: [
          'Chop the chocolate finely so it melts evenly. Big chunks melt at different speeds and leave you with lumps.',
          'Bring the cream just to the point of simmering — small bubbles at the edge, no more than that.',
          'Take it off the heat, add the chocolate and leave it a full minute without stirring. Let the heat do the work.',
          'Then stir from the middle outwards, until the sauce is glossy and completely smooth.',
          'Loosen it with a spoon of milk if it\'s thicker than you want it to pour.',
          'Put three scoops of vanilla ice cream in each chilled bowl. Chilled bowls — the ice cream has enough to contend with already.',
          'Pour the warm sauce over at the table, so everybody sees it happen, and finish with whipped cream. Serve immediately.'
        ]
      },
      nl: {
        title: 'Dame Blanche',
        subtitle: 'Koud ijs, warme chocolade, verder niets',
        description: 'Het valt of staat volledig met de saus, dus gebruik chocolade die je ook zo zou opeten. Al de rest is enkel opbouwen.',
        instructions: [
          'Hak de chocolade fijn zodat ze gelijkmatig smelt. Grote brokken smelten aan verschillende snelheden en laten je met klontjes achter.',
          'Breng de room net tegen de kook aan — kleine belletjes aan de rand, niet meer dan dat.',
          'Haal ze van het vuur, voeg de chocolade toe en laat het een volle minuut staan zonder te roeren. Laat de warmte het werk doen.',
          'Roer dan van het midden naar buiten, tot de saus glanzend en volledig glad is.',
          'Maak ze losser met een lepel melk als ze te dik is om te schenken.',
          'Schep drie bollen vanille-ijs in elke voorgekoelde coupe. Voorgekoeld — het ijs heeft het al zwaar genoeg.',
          'Giet de warme saus er aan tafel over, zodat iedereen het ziet gebeuren, en werk af met slagroom. Meteen opdienen.'
        ]
      },
      fr: {
        title: 'Dame Blanche',
        subtitle: 'Glace froide, chocolat chaud, rien d\'autre',
        description: 'Tout repose entièrement sur la sauce, alors prends un chocolat que tu mangerais tel quel. Le reste n\'est que du montage.',
        instructions: [
          'Hache finement le chocolat pour qu\'il fonde régulièrement. De gros morceaux fondent à des vitesses différentes et te laissent des grumeaux.',
          'Porte la crème juste au point de frémissement — de petites bulles sur le bord, pas plus.',
          'Retire du feu, ajoute le chocolat et laisse reposer une minute entière sans remuer. Laisse la chaleur travailler.',
          'Mélange ensuite du centre vers l\'extérieur, jusqu\'à obtenir une sauce brillante et parfaitement lisse.',
          'Détends-la d\'une cuillère de lait si elle est trop épaisse pour napper.',
          'Dispose trois boules de glace vanille dans chaque coupe bien froide. Bien froide — la glace a déjà assez à faire.',
          'Verse la sauce chaude à table, pour que tout le monde le voie, et termine à la crème fouettée. Sers aussitôt.'
        ]
      }
    },
    ingredients: [
      ing('Vanilla ice cream', 'Vanille-ijs', 'Glace vanille', 1000, 'ml'),
      ing('Dark chocolate', 'Pure chocolade', 'Chocolat noir', 200, 'g'),
      ing('Heavy cream', 'Room', 'Crème épaisse', 200, 'ml'),
      ing('Whipping cream', 'Slagroom', 'Crème fouettée', 200, 'ml'),
      ing('Whole milk', 'Volle melk', 'Lait entier', 2, 'el')
    ]
  },

  {
    id: 'erwtensoep',
    prepTime: '20 mins',
    cookTime: '2 hrs',
    difficulty: { en: 'Easy', nl: 'Gemakkelijk', fr: 'Facile' },
    servings: 6,
    category: ['soup', 'main'],
    wiki: ['en:Pea soup', 'nl:Erwtensoep'],
    translations: {
      en: {
        title: 'Erwtensoep',
        subtitle: 'A soup you could stand a spoon in',
        description: 'Less a soup than a meal in a bowl. Properly made, a spoon stands up in it, and it is better on the second day once it has had a night to thicken.',
        instructions: [
          'Rinse the split peas under cold water until it runs clear.',
          'Put them in a large pot with the pork belly, cover generously with water and bring to the boil. Skim the grey foam off as it rises.',
          'Turn the heat right down and simmer for an hour, stirring now and then so nothing catches on the bottom. Peas sink and stick, and burnt peas ruin the whole pot.',
          'Add the diced celeriac, carrots, leek, onion and potato and cook another 45 minutes.',
          'Lift out the pork, cut it into pieces and put it back in.',
          'Add the sliced smoked sausage and simmer 15 minutes more, until the peas have completely fallen apart. They should not be recognisable as peas any more.',
          'Season with salt and pepper. Loosen it with water if it has gone past thick and into solid.',
          'Serve with dark rye bread and mustard.'
        ]
      },
      nl: {
        title: 'Erwtensoep',
        subtitle: 'Een soep waar de lepel in blijft staan',
        description: 'Eerder een maaltijd in een kom dan een soep. Goed gemaakt blijft de lepel rechtop staan, en ze is beter op dag twee, als ze een nacht heeft kunnen indikken.',
        instructions: [
          'Spoel de spliterwten onder koud water tot het water helder blijft.',
          'Doe ze in een grote pot met het buikspek, zet ze ruim onder water en breng aan de kook. Schep het grijze schuim eraf naarmate het bovenkomt.',
          'Zet het vuur helemaal laag en laat een uur sudderen, af en toe roerend zodat er niets aanbakt. Erwten zakken en hechten, en aangebrande erwten verpesten de hele pot.',
          'Voeg de knolselder, wortelen, prei, ui en aardappel in blokjes toe en laat nog 45 minuten koken.',
          'Haal het spek eruit, snijd het in stukken en doe het terug in de pot.',
          'Voeg de gesneden rookworst toe en laat nog 15 minuten trekken, tot de erwten volledig uit elkaar gevallen zijn. Je hoort ze niet meer als erwten te herkennen.',
          'Kruid met peper en zout. Verdun met wat water als ze van dik naar vast is doorgeschoten.',
          'Serveer met donker roggebrood en mosterd.'
        ]
      },
      fr: {
        title: 'Soupe aux Pois',
        subtitle: 'Une soupe où la cuillère tient debout',
        description: 'Plus un repas dans un bol qu\'une soupe. Bien faite, la cuillère y tient debout, et elle est meilleure le lendemain, après une nuit à épaissir.',
        instructions: [
          'Rince les pois cassés à l\'eau froide jusqu\'à ce qu\'elle reste claire.',
          'Mets-les dans une grande marmite avec la poitrine de porc, couvre largement d\'eau et porte à ébullition. Écume la mousse grise à mesure qu\'elle monte.',
          'Baisse le feu au minimum et laisse mijoter une heure en remuant de temps en temps pour que rien n\'attache. Les pois tombent au fond et collent, et des pois brûlés gâchent toute la marmite.',
          'Ajoute le céleri-rave, les carottes, le poireau, l\'oignon et la pomme de terre en dés, et poursuis 45 minutes.',
          'Retire la poitrine, coupe-la en morceaux et remets-la dedans.',
          'Ajoute la saucisse fumée en rondelles et laisse encore 15 minutes, jusqu\'à ce que les pois soient complètement défaits. On ne doit plus les reconnaître.',
          'Sale et poivre. Détends à l\'eau si elle est passée d\'épaisse à compacte.',
          'Sers avec du pain de seigle noir et de la moutarde.'
        ]
      }
    },
    ingredients: [
      ing('Split peas', 'Spliterwten', 'Pois cassés', 500, 'g'),
      ing('Pork belly', 'Buikspek', 'Poitrine de porc', 400, 'g'),
      ing('Smoked sausage', 'Rookworst', 'Saucisse fumée', 300, 'g'),
      ing('Celeriac', 'Knolselder', 'Céleri-rave', 300, 'g'),
      ing('Carrots', 'Wortelen', 'Carottes', 3, 'st.'),
      ing('Leek', 'Prei', 'Poireau', 2, 'st.'),
      ing('Onion', 'Ui', 'Oignon', 1, 'st.'),
      ing('Potatoes', 'Aardappelen', 'Pommes de terre', 300, 'g')
    ]
  },

  {
    id: 'paling-in-het-groen',
    prepTime: '25 mins',
    cookTime: '25 mins',
    difficulty: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' },
    servings: 4,
    category: ['main'],
    wiki: ['nl:Paling in het groen', 'fr:Anguilles au vert'],
    translations: {
      en: {
        title: 'Paling in \'t Groen',
        subtitle: 'Eel buried under a mountain of green herbs',
        description: 'Eel poached in white wine with more herbs than seems reasonable, thickened with nothing but egg yolk. Warm in summer, and cold from the fridge the next day, which is how many people prefer it.',
        instructions: [
          'Ask the fishmonger to skin the eel and cut it into 5 cm pieces. There is no shame in this; skinning an eel is a job for someone with the right knife.',
          'Melt the butter in a wide pan and soften the chopped shallots without letting them colour.',
          'Lay the eel on top, pour over the white wine and just enough water to barely cover it.',
          'Poach very gently for 10 minutes. The liquid should tremble and never boil — boiled eel goes tough and there\'s no fixing it.',
          'Add the sorrel, spinach, parsley, chervil, mint and tarragon, all roughly chopped. They collapse into almost nothing in a couple of minutes, which is why there has to be so much.',
          'Take the pan off the heat. Whisk the egg yolks with the lemon juice, stir a ladle of the hot cooking liquid into them, then pour it all back into the pan.',
          'Swirl the pan over the lowest heat until the sauce thickens slightly. It must not boil, or you\'ll have scrambled egg in your herbs.',
          'Season and serve warm with bread, or chill it completely and eat it cold the next day.'
        ]
      },
      nl: {
        title: 'Paling in \'t Groen',
        subtitle: 'Paling bedolven onder een berg groene kruiden',
        description: 'Paling gepocheerd in witte wijn met meer kruiden dan redelijk lijkt, gebonden met niets dan eierdooier. Warm in de zomer, en koud uit de koelkast de dag erna, zoals velen ze het liefst hebben.',
        instructions: [
          'Vraag de visboer om de paling te villen en in stukken van 5 cm te snijden. Daar is niets beschamends aan; een paling villen is werk voor iemand met het juiste mes.',
          'Smelt de boter in een brede pan en stoof de gesnipperde sjalotten zacht zonder ze te laten kleuren.',
          'Leg de paling erop, giet de witte wijn erbij en net genoeg water om alles amper onder te zetten.',
          'Pocheer 10 minuten heel zachtjes. Het vocht moet trillen en nooit koken — gekookte paling wordt taai en daar valt niets meer aan te doen.',
          'Voeg de zurkel, spinazie, peterselie, kervel, munt en dragon toe, grof gehakt. Ze slinken in een paar minuten tot bijna niets, en daarom moet het er zoveel zijn.',
          'Haal de pan van het vuur. Klop de eierdooiers met het citroensap los, roer er een pollepel warm kookvocht door en giet dat dan terug in de pan.',
          'Zwenk de pan op het laagste vuur tot de saus lichtjes bindt. Ze mag niet koken, anders zit er roerei tussen je kruiden.',
          'Kruid en serveer warm met brood, of laat volledig afkoelen en eet ze de volgende dag koud.'
        ]
      },
      fr: {
        title: 'Anguilles au Vert',
        subtitle: 'De l\'anguille ensevelie sous une montagne d\'herbes',
        description: 'De l\'anguille pochée au vin blanc avec plus d\'herbes qu\'il ne paraît raisonnable, liée par le seul jaune d\'œuf. Tiède en été, et froide au sortir du frigo le lendemain, comme beaucoup la préfèrent.',
        instructions: [
          'Demande au poissonnier de dépouiller les anguilles et de les couper en tronçons de 5 cm. Il n\'y a là aucune honte ; dépouiller une anguille est un travail pour qui a le bon couteau.',
          'Fais fondre le beurre dans une large sauteuse et fais suer les échalotes émincées sans les laisser colorer.',
          'Dépose les anguilles dessus, verse le vin blanc et juste assez d\'eau pour les couvrir à peine.',
          'Poche très doucement 10 minutes. Le liquide doit frémir et jamais bouillir — une anguille bouillie devient coriace et rien ne la rattrape.',
          'Ajoute l\'oseille, les épinards, le persil, le cerfeuil, la menthe et l\'estragon, grossièrement hachés. Ils tombent à presque rien en deux minutes, et c\'est pour ça qu\'il en faut autant.',
          'Retire la sauteuse du feu. Fouette les jaunes d\'œuf avec le jus de citron, détends-les d\'une louche de cuisson chaude, puis reverse le tout dans la sauteuse.',
          'Fais tourner la sauteuse sur le feu le plus doux jusqu\'à ce que la sauce lie légèrement. Pas d\'ébullition, sinon tu auras des œufs brouillés dans tes herbes.',
          'Assaisonne et sers tiède avec du pain, ou laisse refroidir complètement et mange-les froides le lendemain.'
        ]
      }
    },
    ingredients: [
      ing('Eel', 'Paling', 'Anguille', 1000, 'g'),
      ing('Sorrel', 'Zurkel', 'Oseille', 200, 'g'),
      ing('Spinach', 'Spinazie', 'Épinards', 200, 'g'),
      ing('Parsley', 'Peterselie', 'Persil', 1, 'bunch'),
      ing('Chervil', 'Kervel', 'Cerfeuil', 1, 'bunch'),
      ing('Mint', 'Munt', 'Menthe', 4, 'sprig'),
      ing('Tarragon', 'Dragon', 'Estragon', 4, 'sprig'),
      ing('White wine', 'Witte wijn', 'Vin blanc', 300, 'ml'),
      ing('Shallot', 'Sjalot', 'Échalote', 3, 'st.'),
      ing('Butter', 'Boter', 'Beurre', 60, 'g'),
      ing('Egg yolk', 'Eidooier', 'Jaune d\'oeuf', 3, 'st.'),
      ing('Lemon juice', 'Citroensap', 'Jus de citron', 2, 'el')
    ]
  },

  {
    id: 'belgische-frieten',
    prepTime: '20 mins',
    cookTime: '25 mins',
    difficulty: { en: 'Medium', nl: 'Gemiddeld', fr: 'Moyen' },
    servings: 4,
    category: ['snack', 'main'],
    wiki: ['en:French fries', 'nl:Friet'],
    translations: {
      en: {
        title: 'Belgische Frieten',
        subtitle: 'Two fryings, and a rest in between',
        description: 'Bintje potatoes, beef fat, and two separate fryings with a proper rest between them. That rest is not optional — it is the entire difference between a Belgian fry and a chip.',
        instructions: [
          'Peel the potatoes and cut them into sticks a good centimetre thick. Belgian fries are not thin, and thin ones will not survive being fried twice.',
          'Rinse them in cold water until it runs clear, to wash the surface starch away.',
          'Dry them completely in a tea towel. Any water left on them will spit in the fat, and hot fat spits a long way.',
          'Heat the beef fat to 150°C and cook the fries in batches for 6 to 8 minutes. They should come out soft and pale, with no colour at all — that\'s cooking the inside, not browning the outside.',
          'Lift them out and spread them on a rack. Let them rest at least 30 minutes; an hour is better. This is where the outside dries and gets ready to crisp.',
          'Heat the fat to 180°C and fry them again, in batches, for 2 to 3 minutes, until deep golden and crisp.',
          'Drain them briefly, tip them into a bowl, salt from a height so it spreads, and toss.',
          'Serve at once with mayonnaise. Fries do not wait for anyone, and they will not forgive you for making them.'
        ]
      },
      nl: {
        title: 'Belgische Frieten',
        subtitle: 'Twee keer bakken, met rust ertussen',
        description: 'Bintjes, ossewit en twee keer bakken met een echte rust ertussen. Die rust is niet optioneel — het is precies het verschil tussen een Belgische friet en een chip.',
        instructions: [
          'Schil de aardappelen en snijd ze in staafjes van een goede centimeter dik. Belgische frieten zijn niet dun, en dunne overleven het dubbel bakken niet.',
          'Spoel ze in koud water tot het helder blijft, om het zetmeel eraf te wassen.',
          'Droog ze volledig in een keukenhanddoek. Water dat erop blijft, spat in het vet, en heet vet spat ver.',
          'Verwarm het ossewit tot 150°C en bak de frieten in porties 6 à 8 minuten. Ze moeten er zacht en bleek uitkomen, zonder enige kleur — dit gaart de binnenkant, het bruint niets.',
          'Haal ze eruit en spreid ze op een rooster. Laat ze minstens 30 minuten rusten; een uur is beter. Hier droogt de buitenkant en maakt hij zich klaar om krokant te worden.',
          'Verwarm het vet tot 180°C en bak ze opnieuw, in porties, 2 à 3 minuten, tot ze diep goudbruin en krokant zijn.',
          'Laat ze kort uitlekken, kap ze in een kom, zout van hoog zodat het zich verdeelt, en schud om.',
          'Meteen opdienen met mayonaise. Frieten wachten op niemand, en ze vergeven het je niet als je ze laat wachten.'
        ]
      },
      fr: {
        title: 'Frites Belges',
        subtitle: 'Deux cuissons, et un repos entre les deux',
        description: 'Des bintjes, de la graisse de bœuf et deux cuissons séparées par un vrai repos. Ce repos n\'est pas facultatif — c\'est toute la différence entre une frite belge et une chips.',
        instructions: [
          'Épluche les pommes de terre et taille-les en bâtonnets d\'un bon centimètre d\'épaisseur. La frite belge n\'est pas fine, et une frite fine ne survit pas à deux cuissons.',
          'Rince-les à l\'eau froide jusqu\'à ce qu\'elle reste claire, pour éliminer l\'amidon de surface.',
          'Sèche-les complètement dans un torchon. L\'eau qui reste dessus fera crépiter la graisse, et la graisse chaude projette loin.',
          'Chauffe la graisse de bœuf à 150°C et cuis les frites par petites quantités 6 à 8 minutes. Elles doivent ressortir molles et pâles, sans la moindre coloration — on cuit l\'intérieur, on ne dore rien.',
          'Retire-les et étale-les sur une grille. Laisse-les reposer au moins 30 minutes ; une heure vaut mieux. C\'est là que l\'extérieur sèche et se prépare à croustiller.',
          'Chauffe la graisse à 180°C et refais-les frire, par petites quantités, 2 à 3 minutes, jusqu\'à ce qu\'elles soient bien dorées et croustillantes.',
          'Égoutte brièvement, verse dans un saladier, sale de haut pour que ça se répartisse, et mélange.',
          'Sers immédiatement avec de la mayonnaise. Les frites n\'attendent personne, et elles ne te pardonneront pas de les avoir fait attendre.'
        ]
      }
    },
    ingredients: [
      ing('Bintje potatoes', 'Bintje aardappelen', 'Pommes de terre bintje', 1200, 'g'),
      ing('Beef fat', 'Ossewit', 'Graisse de boeuf', 1000, 'g'),
      ing('Mayonnaise', 'Mayonaise', 'Mayonnaise', 4, 'el')
    ]
  }
];
