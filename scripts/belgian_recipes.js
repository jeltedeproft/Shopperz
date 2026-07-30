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
        subtitle: 'Ghent chicken stew in a cream and egg broth',
        description: 'Ghent\'s gentlest classic: chicken poached with root vegetables, the broth finished off the heat with cream and egg yolk so it thickens without ever boiling.',
        instructions: [
          'Simmer the chicken in water with a bay leaf, thyme, a halved onion, salt and pepper for about 35 minutes, until it comes off the bone easily.',
          'Lift the chicken out and keep the broth. Pull the meat off the bones in generous pieces and discard the skin.',
          'Cut the leek, carrots, celery and potatoes into fine matchsticks.',
          'Melt the butter in a wide pot and sweat the vegetables gently for 10 minutes without letting them colour.',
          'Pour over enough of the strained broth to cover and simmer until the potatoes are just tender.',
          'Whisk the cream with the egg yolks in a bowl. Take the pot off the heat.',
          'Stir a ladle of hot broth into the cream mixture, then pour it all back into the pot. Never let it boil again or it will split.',
          'Return the chicken, warm through, and finish with parsley and a squeeze of lemon.'
        ]
      },
      nl: {
        title: 'Gentse Waterzooi',
        subtitle: 'Gentse kippenstoofpot met room en eierdooier',
        description: 'De zachtste klassieker van Gent: kip gepocheerd met wortelgroenten, waarna de bouillon buiten het vuur gebonden wordt met room en eierdooier zodat ze nooit mag koken.',
        instructions: [
          'Laat de kip met laurier, tijm, een gehalveerde ui, peper en zout ongeveer 35 minuten zachtjes trekken tot het vlees loskomt.',
          'Haal de kip eruit en houd de bouillon bij. Pluk het vlees in grove stukken van het karkas en verwijder het vel.',
          'Snijd de prei, wortelen, selder en aardappelen in fijne julienne.',
          'Smelt de boter in een brede pot en stoof de groenten 10 minuten glazig zonder ze te laten kleuren.',
          'Giet er voldoende gezeefde bouillon bij tot alles onder staat en laat sudderen tot de aardappel net gaar is.',
          'Klop de room los met de eierdooiers. Zet de pot van het vuur.',
          'Roer een pollepel hete bouillon door het roommengsel en giet dat dan bij de pot. Laat het daarna niet meer koken, anders schift het.',
          'Doe de kip erbij, warm alles door en werk af met peterselie en een scheutje citroensap.'
        ]
      },
      fr: {
        title: 'Waterzooi Gantois',
        subtitle: 'Poulet gantois à la crème et au jaune d\'oeuf',
        description: 'Le plus doux des classiques gantois : un poulet poché avec des légumes racines, le bouillon lié hors du feu à la crème et au jaune d\'oeuf, sans jamais rebouillir.',
        instructions: [
          'Faites frémir le poulet dans l\'eau avec laurier, thym, un oignon coupé en deux, sel et poivre pendant 35 minutes environ.',
          'Retirez le poulet et gardez le bouillon. Effilochez la chair en gros morceaux et jetez la peau.',
          'Taillez le poireau, les carottes, le céleri et les pommes de terre en fine julienne.',
          'Faites fondre le beurre dans une large cocotte et faites suer les légumes 10 minutes sans coloration.',
          'Mouillez avec le bouillon filtré à hauteur et laissez cuire jusqu\'à ce que la pomme de terre soit juste tendre.',
          'Fouettez la crème avec les jaunes d\'oeuf. Retirez la cocotte du feu.',
          'Détendez le mélange avec une louche de bouillon chaud, puis reversez le tout dans la cocotte. Ne faites plus jamais bouillir.',
          'Remettez le poulet, réchauffez doucement et terminez au persil et au jus de citron.'
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
        subtitle: 'Rabbit braised in brown beer with prunes',
        description: 'A Flemish Sunday dish. Prunes melt into the beer over a long braise and give the sauce its dark, sweet-sour depth.',
        instructions: [
          'Soak the prunes in a little warm beer while you get everything else going.',
          'Season the rabbit pieces with salt and pepper and brown them in butter until golden on all sides. Set aside.',
          'Cook the chopped onions in the same pot until soft and translucent.',
          'Return the rabbit, pour in the brown beer and add the bay leaves, thyme and mustard-spread bread slice.',
          'Cover and simmer very gently for an hour, turning the pieces once.',
          'Add the prunes with their soaking beer and cook another 20 to 30 minutes, until the rabbit is nearly falling off the bone.',
          'Lift out the herbs, stir the bread through to bind the sauce and finish with the Liège syrup.',
          'Season again and serve with croquettes or plain boiled potatoes.'
        ]
      },
      nl: {
        title: 'Konijn met Pruimen',
        subtitle: 'Konijn gestoofd in bruin bier met gedroogde pruimen',
        description: 'Een Vlaamse zondagse klassieker. De pruimen smelten tijdens het lange stoven weg in het bier en geven de saus haar donkere, zoetzure diepte.',
        instructions: [
          'Week de pruimen in een beetje lauw bier terwijl je de rest klaarmaakt.',
          'Kruid de konijnstukken met peper en zout en bak ze rondom goudbruin in boter. Zet opzij.',
          'Stoof de gesnipperde uien in dezelfde pot glazig.',
          'Doe het konijn terug, giet het bruin bier erbij en voeg laurier, tijm en de boterham met mosterd toe.',
          'Doe het deksel op de pot en laat een uur heel zachtjes sudderen, keer de stukken één keer.',
          'Voeg de pruimen met hun weekbier toe en laat nog 20 à 30 minuten stoven tot het konijn bijna van het bot valt.',
          'Haal de kruiden eruit, roer de boterham door de saus om te binden en werk af met de Luikse siroop.',
          'Kruid nog eens bij en serveer met kroketten of gewoon gekookte aardappelen.'
        ]
      },
      fr: {
        title: 'Lapin aux Pruneaux',
        subtitle: 'Lapin mijoté à la bière brune et aux pruneaux',
        description: 'Un plat du dimanche flamand. Les pruneaux fondent dans la bière au long du mijotage et donnent à la sauce sa profondeur sombre et aigre-douce.',
        instructions: [
          'Faites tremper les pruneaux dans un peu de bière tiède pendant la préparation.',
          'Assaisonnez les morceaux de lapin et faites-les dorer au beurre sur toutes les faces. Réservez.',
          'Faites revenir les oignons émincés dans la même cocotte jusqu\'à ce qu\'ils soient translucides.',
          'Remettez le lapin, versez la bière brune et ajoutez le laurier, le thym et la tartine de moutarde.',
          'Couvrez et laissez mijoter très doucement une heure en retournant les morceaux une fois.',
          'Ajoutez les pruneaux avec leur bière de trempage et poursuivez 20 à 30 minutes.',
          'Retirez les herbes, délayez la tartine dans la sauce pour la lier et terminez au sirop de Liège.',
          'Rectifiez l\'assaisonnement et servez avec des croquettes ou des pommes nature.'
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
        subtitle: 'Winter hotchpotch of root vegetables and pork',
        description: 'The dish that empties the winter vegetable drawer. Everything goes in one pot and cooks until the vegetables give way and thicken the broth by themselves.',
        instructions: [
          'Put the pork belly and sausages in a large pot, cover with cold water and bring slowly to a simmer. Skim the foam off the top.',
          'Add the bay leaves, thyme, cloves and peppercorns and let it tick over for 45 minutes.',
          'Meanwhile cut the carrots, turnips, leeks, celeriac and cabbage into rough chunks. Nothing needs to be neat.',
          'Add the harder vegetables first: carrots, turnip and celeriac. Cook 20 minutes.',
          'Add the potatoes, leeks and cabbage and cook another 30 minutes.',
          'Crush some of the potato against the side of the pot to thicken the broth.',
          'Taste for salt and pepper — it will need more than you think — and serve in deep bowls with mustard alongside.'
        ]
      },
      nl: {
        title: 'Vlaamse Hutsepot',
        subtitle: 'Winterse stoofpot van wortelgroenten en varkensvlees',
        description: 'Het gerecht dat de wintergroentelade leegmaakt. Alles gaat in één pot en kookt tot de groenten uit elkaar vallen en de bouillon vanzelf binden.',
        instructions: [
          'Doe het buikspek en de worsten in een grote pot, zet onder koud water en breng traag aan de kook. Schep het schuim eraf.',
          'Voeg laurier, tijm, kruidnagel en peperbolletjes toe en laat 45 minuten zachtjes trekken.',
          'Snijd ondertussen de wortelen, rapen, prei, knolselder en kool in grove stukken. Het hoeft niet netjes.',
          'Doe eerst de harde groenten erbij: wortel, raap en knolselder. Laat 20 minuten koken.',
          'Voeg dan de aardappelen, prei en kool toe en laat nog 30 minuten koken.',
          'Plet wat aardappel tegen de rand van de pot om het geheel te binden.',
          'Proef en kruid stevig bij met peper en zout, en serveer in diepe borden met mosterd apart.'
        ]
      },
      fr: {
        title: 'Hochepot Flamand',
        subtitle: 'Potée d\'hiver aux légumes racines et au porc',
        description: 'Le plat qui vide le bac à légumes d\'hiver. Tout va dans une seule marmite et cuit jusqu\'à ce que les légumes se défassent et lient le bouillon d\'eux-mêmes.',
        instructions: [
          'Mettez la poitrine de porc et les saucisses dans une grande marmite, couvrez d\'eau froide et portez doucement à frémissement. Écumez.',
          'Ajoutez laurier, thym, clous de girofle et grains de poivre, et laissez cuire 45 minutes.',
          'Pendant ce temps, coupez grossièrement carottes, navets, poireaux, céleri-rave et chou.',
          'Ajoutez d\'abord les légumes durs : carottes, navet et céleri-rave. Comptez 20 minutes.',
          'Ajoutez ensuite les pommes de terre, les poireaux et le chou, et poursuivez 30 minutes.',
          'Écrasez un peu de pomme de terre contre la paroi pour lier le bouillon.',
          'Assaisonnez généreusement et servez en assiettes creuses avec de la moutarde à part.'
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
        subtitle: 'Grey shrimp croquettes with fried parsley',
        description: 'The test of a Belgian brasserie. A thick shrimp béchamel, chilled until firm, breaded and fried so the crust shatters and the inside runs.',
        instructions: [
          'Make a stock: simmer the shrimp shells in the milk for 15 minutes, then strain and discard the shells.',
          'Melt the butter, stir in the flour and cook the roux for two minutes without colouring it.',
          'Add the warm shrimp milk a little at a time, whisking, until you have a very thick, smooth sauce.',
          'Take off the heat, beat in the egg yolk, nutmeg, lemon juice, salt and pepper, then fold in the shrimps.',
          'Spread into an oiled dish about 3 cm deep, cover and refrigerate at least four hours or overnight — it must be completely firm.',
          'Cut into blocks and roll each one in flour, then beaten egg, then breadcrumbs. Do the egg and crumb twice for a stronger crust.',
          'Fry at 180°C for about 3 minutes, until deep gold. Do not crowd the pan.',
          'Fry the parsley sprigs for a few seconds until crisp and serve on top with a lemon wedge.'
        ]
      },
      nl: {
        title: 'Garnaalkroketten',
        subtitle: 'Kroketten van grijze garnalen met gefrituurde peterselie',
        description: 'De lakmoesproef van elke Belgische brasserie. Een dikke garnalenbéchamel, koud gedraaid tot ze stevig is, gepaneerd en gefrituurd zodat het korstje breekt en de vulling loopt.',
        instructions: [
          'Maak een fond: laat de garnaalpelletjes 15 minuten trekken in de melk, zeef en gooi de pelletjes weg.',
          'Smelt de boter, roer de bloem erdoor en gaar de roux twee minuten zonder te kleuren.',
          'Voeg de warme garnaalmelk beetje bij beetje toe terwijl je klopt, tot je een zeer dikke, gladde saus hebt.',
          'Haal van het vuur, klop de eierdooier, nootmuskaat, citroensap, peper en zout erdoor en spatel de garnalen erdoor.',
          'Strijk uit in een ingevette schaal van zo\'n 3 cm dik, dek af en zet minstens vier uur of een nacht in de koelkast. Ze moet volledig opgestijfd zijn.',
          'Snijd in blokken en haal elk blok door bloem, dan losgeklopt ei, dan paneermeel. Doe ei en paneermeel twee keer voor een steviger korst.',
          'Frituur op 180°C ongeveer 3 minuten tot diep goudbruin. Bak niet te veel tegelijk.',
          'Frituur de peterselietakjes enkele seconden krokant en serveer ze erbovenop met een partje citroen.'
        ]
      },
      fr: {
        title: 'Croquettes aux Crevettes Grises',
        subtitle: 'Croquettes de crevettes grises et persil frit',
        description: 'L\'épreuve de vérité de toute brasserie belge. Une béchamel de crevettes très épaisse, refroidie jusqu\'à fermeté, panée et frite : la croûte craque, l\'intérieur coule.',
        instructions: [
          'Faites un fumet : laissez infuser les carapaces dans le lait 15 minutes, filtrez et jetez les carapaces.',
          'Faites fondre le beurre, incorporez la farine et cuisez le roux deux minutes sans coloration.',
          'Ajoutez le lait de crevettes chaud petit à petit en fouettant, jusqu\'à obtenir une sauce très épaisse et lisse.',
          'Hors du feu, incorporez le jaune d\'oeuf, la muscade, le jus de citron, sel et poivre, puis les crevettes.',
          'Étalez dans un plat huilé sur 3 cm, couvrez et réfrigérez au moins quatre heures, idéalement une nuit.',
          'Détaillez en blocs et passez chacun dans la farine, l\'oeuf battu, puis la chapelure. Doublez oeuf et chapelure.',
          'Frisez à 180°C environ 3 minutes, jusqu\'à belle couleur dorée. Ne surchargez pas le bain.',
          'Faites frire le persil quelques secondes et servez-le dessus avec un quartier de citron.'
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
        subtitle: 'Meatballs in tomato sauce, the school-canteen classic',
        description: 'Every Belgian grew up on this. Soft milk-soaked meatballs simmered in a tomato sauce that is sweetened, not spiced — served with fries or mash.',
        instructions: [
          'Tear the bread into a bowl, pour over the milk and let it soak until soft, then squeeze out the excess.',
          'Mix the minced meat with the soaked bread, egg, finely chopped onion, parsley, salt, pepper and nutmeg. Do not overwork it.',
          'Roll into balls the size of a walnut with wet hands.',
          'Brown them in butter in batches, turning so they colour all over. They do not need to be cooked through yet.',
          'In the same pot, soften the second chopped onion, then add the chopped tomatoes, tomato paste, bay leaf, a pinch of sugar and the stock.',
          'Simmer the sauce for 15 minutes, then slide the meatballs back in.',
          'Cover and simmer gently for 25 minutes, spooning sauce over them now and then.',
          'Taste and adjust the balance — a little more sugar if the tomatoes are sharp.'
        ]
      },
      nl: {
        title: 'Balletjes in Tomatensaus',
        subtitle: 'Gehaktballetjes in tomatensaus zoals in de refter',
        description: 'Elke Belg is hiermee opgegroeid. Zachte, in melk geweekte balletjes in een tomatensaus die gezoet wordt in plaats van gekruid — met frieten of puree.',
        instructions: [
          'Scheur het brood in een kom, giet de melk erover en laat weken tot het zacht is. Knijp het overtollige vocht eruit.',
          'Meng het gehakt met het geweekte brood, het ei, de fijngesnipperde ui, peterselie, peper, zout en nootmuskaat. Niet te lang kneden.',
          'Rol met natte handen balletjes ter grootte van een okkernoot.',
          'Bak ze in porties bruin in boter en keer ze zodat ze rondom kleuren. Ze hoeven nog niet gaar te zijn.',
          'Stoof in dezelfde pot de tweede ui glazig, voeg dan de tomatenblokjes, tomatenpuree, laurier, een snuf suiker en de bouillon toe.',
          'Laat de saus 15 minuten pruttelen en leg er dan de balletjes in.',
          'Doe het deksel erop en laat 25 minuten zachtjes sudderen, schep af en toe saus over de balletjes.',
          'Proef en stel bij — een beetje meer suiker als de tomaten scherp zijn.'
        ]
      },
      fr: {
        title: 'Boulettes Sauce Tomate',
        subtitle: 'Boulettes à la sauce tomate, le classique de la cantine',
        description: 'Tous les Belges ont grandi avec. Des boulettes moelleuses trempées au lait, mijotées dans une sauce tomate sucrée plutôt qu\'épicée — avec frites ou purée.',
        instructions: [
          'Émiettez le pain dans un bol, versez le lait et laissez ramollir, puis pressez pour retirer l\'excédent.',
          'Mélangez le haché avec le pain, l\'oeuf, l\'oignon finement émincé, le persil, sel, poivre et muscade. Ne travaillez pas trop la masse.',
          'Roulez des boulettes de la taille d\'une noix avec les mains humides.',
          'Faites-les dorer au beurre par petites quantités, sur toutes les faces. Elles n\'ont pas besoin d\'être cuites à coeur.',
          'Dans la même cocotte, faites revenir le second oignon, puis ajoutez les tomates concassées, le concentré, le laurier, une pincée de sucre et le bouillon.',
          'Laissez mijoter la sauce 15 minutes, puis replongez-y les boulettes.',
          'Couvrez et laissez mijoter doucement 25 minutes en les arrosant de temps en temps.',
          'Goûtez et rectifiez — un peu plus de sucre si les tomates sont acides.'
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
        subtitle: 'Light, crisp yeast waffles with deep pockets',
        description: 'Not the dense Liège waffle — this is the tall, rectangular, airy one, crisp outside and almost hollow inside. The beaten egg whites do all the work.',
        instructions: [
          'Warm the milk to body temperature and stir in the yeast with a pinch of the sugar. Leave 10 minutes until it foams.',
          'Whisk the flour, remaining sugar and salt in a large bowl.',
          'Beat in the yeast milk, the egg yolks, the melted butter and the vanilla until smooth.',
          'Cover and leave to rise somewhere warm for an hour, until visibly bubbly.',
          'Whip the egg whites to soft peaks and fold them into the batter in two goes, keeping as much air as you can.',
          'Heat the waffle iron well and butter it. Pour in just enough batter to cover the plate.',
          'Bake 4 to 5 minutes until deep golden and crisp; resist opening it early.',
          'Serve straight away with icing sugar. They lose their crunch within minutes.'
        ]
      },
      nl: {
        title: 'Brusselse Wafels',
        subtitle: 'Luchtige, krokante gistwafels met diepe vakjes',
        description: 'Niet de compacte Luikse wafel maar de hoge, rechthoekige, luchtige: krokant vanbuiten en bijna hol vanbinnen. Het opgeklopte eiwit doet al het werk.',
        instructions: [
          'Verwarm de melk tot lauw en roer er de gist met een snufje van de suiker door. Laat 10 minuten schuimen.',
          'Klop de bloem, de rest van de suiker en het zout samen in een grote kom.',
          'Klop de gistmelk, de eierdooiers, de gesmolten boter en de vanille erdoor tot een glad beslag.',
          'Dek af en laat een uur rijzen op een warme plek, tot je duidelijk belletjes ziet.',
          'Klop de eiwitten tot zachte pieken en spatel ze in twee keer door het beslag, zo luchtig mogelijk.',
          'Verwarm het wafelijzer goed en vet het in. Giet er net genoeg beslag in om de plaat te bedekken.',
          'Bak 4 à 5 minuten tot diep goudbruin en krokant; open het ijzer niet te vroeg.',
          'Dien meteen op met bloemsuiker. Ze verliezen hun krokantheid binnen enkele minuten.'
        ]
      },
      fr: {
        title: 'Gaufres de Bruxelles',
        subtitle: 'Gaufres légères et croustillantes à la levure',
        description: 'Pas la gaufre de Liège compacte, mais la grande rectangulaire et aérienne : croustillante dehors, presque creuse dedans. Les blancs montés font tout.',
        instructions: [
          'Tiédissez le lait et délayez-y la levure avec une pincée de sucre. Laissez mousser 10 minutes.',
          'Mélangez la farine, le reste du sucre et le sel dans un grand bol.',
          'Incorporez le lait de levure, les jaunes d\'oeuf, le beurre fondu et la vanille jusqu\'à obtenir une pâte lisse.',
          'Couvrez et laissez lever une heure au chaud, jusqu\'à ce que la pâte bulle.',
          'Montez les blancs en neige souple et incorporez-les en deux fois, délicatement.',
          'Chauffez bien le gaufrier et beurrez-le. Versez juste de quoi couvrir la plaque.',
          'Cuisez 4 à 5 minutes jusqu\'à belle couleur dorée ; n\'ouvrez pas trop tôt.',
          'Servez immédiatement avec du sucre impalpable. Elles ramollissent en quelques minutes.'
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
        subtitle: 'Verviers rice tart with a vanilla milk filling',
        description: 'A Walloon bakery staple from Verviers. Rice cooked slowly in vanilla milk until it collapses, then baked in a yeasted crust until the top just blisters.',
        instructions: [
          'Warm a little of the milk, stir in the yeast and a spoon of sugar, and leave to foam.',
          'Rub the butter into the flour and salt, then work in the yeast milk and one egg to a soft dough. Knead briefly and leave to rise for an hour.',
          'Meanwhile bring the rest of the milk to a simmer with the vanilla and a pinch of salt.',
          'Add the rice and cook very gently for 35 to 40 minutes, stirring often, until the grains have broken down and the mixture is thick.',
          'Stir in the sugar and let it cool to lukewarm, then beat in the remaining eggs one at a time.',
          'Roll the dough out and line a buttered 28 cm tin, pressing it up the sides. Prick the base.',
          'Pour in the rice filling and level it. Bake at 190°C for 40 to 45 minutes until set with dark golden spots on top.',
          'Cool completely in the tin — it firms as it cools and is best at room temperature.'
        ]
      },
      nl: {
        title: 'Rijsttaart',
        subtitle: 'Verviers rijsttaart met vanillemelkvulling',
        description: 'Een Waalse bakkersklassieker uit Verviers. Rijst traag gegaard in vanillemelk tot ze uit elkaar valt, gebakken in een gistdeegbodem tot de bovenkant net blaast.',
        instructions: [
          'Verwarm een deel van de melk lauw, roer er de gist en een lepel suiker door en laat schuimen.',
          'Wrijf de boter door de bloem en het zout, werk er dan de gistmelk en één ei door tot een zacht deeg. Kneed kort en laat een uur rijzen.',
          'Breng ondertussen de rest van de melk met de vanille en een snuf zout tegen de kook aan.',
          'Voeg de rijst toe en laat 35 à 40 minuten heel zachtjes gaar worden, regelmatig roeren, tot de korrels uit elkaar vallen.',
          'Roer de suiker erdoor, laat lauw worden en klop dan de overige eieren er één voor één door.',
          'Rol het deeg uit en bekleed een beboterde vorm van 28 cm, druk het tegen de rand. Prik de bodem in.',
          'Giet de rijstvulling erin en strijk glad. Bak 40 à 45 minuten op 190°C tot ze gestold is met donkere vlekjes bovenop.',
          'Laat volledig afkoelen in de vorm — ze stijft op bij het afkoelen en is het lekkerst op kamertemperatuur.'
        ]
      },
      fr: {
        title: 'Tarte au Riz',
        subtitle: 'Tarte au riz verviétoise à la crème de lait vanillé',
        description: 'Un incontournable des boulangeries wallonnes, née à Verviers. Du riz cuit lentement dans un lait vanillé jusqu\'à se défaire, cuit dans une pâte levée.',
        instructions: [
          'Tiédissez une partie du lait, délayez-y la levure et une cuillère de sucre, laissez mousser.',
          'Sablez le beurre avec la farine et le sel, puis incorporez le lait de levure et un oeuf pour obtenir une pâte souple. Pétrissez brièvement et laissez lever une heure.',
          'Pendant ce temps, portez le reste du lait à frémissement avec la vanille et une pincée de sel.',
          'Ajoutez le riz et laissez cuire très doucement 35 à 40 minutes en remuant souvent, jusqu\'à ce que les grains se défassent.',
          'Incorporez le sucre, laissez tiédir puis ajoutez les oeufs restants un à un.',
          'Abaissez la pâte et garnissez un moule beurré de 28 cm en remontant sur les bords. Piquez le fond.',
          'Versez la garniture et lissez. Enfournez à 190°C pendant 40 à 45 minutes, jusqu\'à ce que le dessus soit tacheté de brun.',
          'Laissez refroidir complètement dans le moule ; elle se raffermit en refroidissant.'
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
        subtitle: 'Brussels sprouts pan-fried with bacon',
        description: 'Sprouts get a bad name from being boiled to death. Halved, browned in bacon fat and finished with a splash of cream, they are a different vegetable entirely.',
        instructions: [
          'Trim the sprouts, pull off any tired outer leaves and halve them through the root.',
          'Blanch them in well-salted boiling water for 4 minutes, then drain and refresh under cold water so they keep their colour.',
          'Fry the bacon bits in a dry pan until the fat has rendered and they are crisp. Lift them out and leave the fat behind.',
          'Add the butter, then the sprouts cut side down. Leave them alone for 4 minutes to brown properly.',
          'Toss, add the sliced shallot and cook another 4 minutes.',
          'Return the bacon, pour in the cream and let it bubble for a minute until it clings.',
          'Grate over nutmeg, season with pepper — the bacon usually brings enough salt — and serve.'
        ]
      },
      nl: {
        title: 'Spruitjes met Spek',
        subtitle: 'Gebakken spruitjes met spekblokjes',
        description: 'Spruitjes hebben een slechte naam omdat ze doodgekookt worden. Gehalveerd, gebakken in spekvet en afgewerkt met een scheutje room zijn het plots heel andere groenten.',
        instructions: [
          'Kuis de spruitjes, verwijder de slappe buitenste blaadjes en halveer ze door de wortel.',
          'Blancheer ze 4 minuten in goed gezouten kokend water, giet af en spoel koud zodat ze hun kleur houden.',
          'Bak de spekblokjes uit in een droge pan tot het vet gesmolten is en ze krokant zijn. Schep ze eruit en laat het vet in de pan.',
          'Voeg de boter toe en leg de spruitjes met de snijkant naar beneden. Laat ze 4 minuten met rust zodat ze mooi kleuren.',
          'Schud om, voeg de gesnipperde sjalot toe en bak nog 4 minuten.',
          'Doe het spek terug, giet de room erbij en laat een minuut inkoken tot ze aanhangt.',
          'Rasp er nootmuskaat over, kruid met peper — het spek brengt meestal genoeg zout — en dien op.'
        ]
      },
      fr: {
        title: 'Choux de Bruxelles au Lard',
        subtitle: 'Choux de Bruxelles poêlés aux lardons',
        description: 'Les choux de Bruxelles ont mauvaise réputation parce qu\'on les fait bouillir à mort. Coupés en deux, saisis dans la graisse de lard et crémés, c\'est un tout autre légume.',
        instructions: [
          'Parez les choux, retirez les feuilles fatiguées et coupez-les en deux dans le sens de la racine.',
          'Blanchissez-les 4 minutes à l\'eau bouillante bien salée, égouttez et rafraîchissez pour garder la couleur.',
          'Faites rendre les lardons à sec jusqu\'à ce qu\'ils soient croustillants. Retirez-les en laissant la graisse.',
          'Ajoutez le beurre puis les choux, face coupée vers le fond. Ne touchez à rien pendant 4 minutes.',
          'Remuez, ajoutez l\'échalote émincée et poursuivez 4 minutes.',
          'Remettez les lardons, versez la crème et laissez réduire une minute.',
          'Râpez un peu de muscade, poivrez — les lardons salent déjà — et servez.'
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
        subtitle: 'Grilled ham and cheese under a béchamel blanket',
        description: 'The brasserie standard done properly: béchamel on the outside as well as the inside, so the top browns into a blistered crust instead of drying out.',
        instructions: [
          'Make a béchamel: melt the butter, stir in the flour, cook two minutes, then whisk in the milk a little at a time.',
          'Simmer until thick enough to coat a spoon, then season with salt, pepper and plenty of nutmeg. Stir in a third of the cheese.',
          'Butter four slices of bread on one side. Spread the unbuttered side of two of them with mustard.',
          'Layer on the ham, a spoon of béchamel and half the remaining cheese, then close the sandwiches.',
          'Spread the rest of the béchamel over the tops and scatter over the last of the cheese.',
          'Bake at 200°C for 10 minutes, then grill for 2 to 3 minutes until the top is bubbling and dark in patches.',
          'Rest for a minute before cutting, or the filling runs straight out.'
        ]
      },
      nl: {
        title: 'Croque Monsieur',
        subtitle: 'Gegratineerde hesp-en-kaas met bechamel',
        description: 'De brasserieklassieker zoals het hoort: bechamel zowel binnenin als bovenop, zodat de bovenkant gratineert in plaats van uit te drogen.',
        instructions: [
          'Maak een bechamel: smelt de boter, roer de bloem erdoor, gaar twee minuten en klop er dan beetje bij beetje de melk door.',
          'Laat indikken tot ze aan de lepel blijft hangen en kruid met peper, zout en flink wat nootmuskaat. Roer een derde van de kaas erdoor.',
          'Besmeer vier sneden brood aan één kant met boter. Smeer op de onbeboterde kant van twee sneden mosterd.',
          'Beleg met de hesp, een lepel bechamel en de helft van de resterende kaas en sluit de boterhammen.',
          'Strijk de rest van de bechamel over de bovenkant en strooi de laatste kaas erover.',
          'Bak 10 minuten op 200°C en gratineer daarna 2 à 3 minuten tot de bovenkant borrelt en donkere plekken krijgt.',
          'Laat een minuutje rusten voor je snijdt, anders loopt de vulling er meteen uit.'
        ]
      },
      fr: {
        title: 'Croque Monsieur',
        subtitle: 'Jambon-fromage gratiné sous une couche de béchamel',
        description: 'Le classique de brasserie bien fait : de la béchamel dessus comme dedans, pour que le dessus gratine au lieu de sécher.',
        instructions: [
          'Préparez une béchamel : faites fondre le beurre, incorporez la farine, cuisez deux minutes puis versez le lait progressivement en fouettant.',
          'Laissez épaissir jusqu\'à napper la cuillère, assaisonnez de sel, poivre et beaucoup de muscade. Incorporez un tiers du fromage.',
          'Beurrez quatre tranches de pain d\'un côté. Tartinez de moutarde la face non beurrée de deux d\'entre elles.',
          'Garnissez de jambon, d\'une cuillère de béchamel et de la moitié du fromage restant, puis refermez.',
          'Étalez le reste de béchamel sur le dessus et parsemez du dernier fromage.',
          'Enfournez 10 minutes à 200°C, puis passez 2 à 3 minutes sous le gril jusqu\'à ce que le dessus bouillonne.',
          'Laissez reposer une minute avant de couper, sinon la garniture s\'échappe.'
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
        subtitle: 'Tomato soup with tiny meatballs',
        description: 'The soup that turns up at every Belgian family gathering. Smooth, slightly sweet, with meatballs no bigger than a marble dropped in at the end.',
        instructions: [
          'Soften the chopped onion and carrot in butter for 10 minutes without letting them colour.',
          'Add the tomatoes, tomato paste, stock, bay leaf and a pinch of sugar. Simmer for 25 minutes.',
          'Meanwhile mix the minced meat with the egg, breadcrumbs, salt, pepper and nutmeg, and roll marble-sized balls.',
          'Fish out the bay leaf and blend the soup completely smooth. Pass it through a sieve if you want it silky.',
          'Bring the soup back to a gentle simmer and drop in the meatballs. They are done when they float, about 6 minutes.',
          'Taste and balance with salt, pepper and a little more sugar if the tomatoes are sharp.',
          'Serve with a spoon of cream stirred through and parsley on top.'
        ]
      },
      nl: {
        title: 'Tomatensoep met Balletjes',
        subtitle: 'Gladde tomatensoep met kleine gehaktballetjes',
        description: 'De soep die op elk Belgisch familiefeest opduikt. Glad, licht zoet, met balletjes niet groter dan een knikker die er op het einde in gaan.',
        instructions: [
          'Stoof de gesnipperde ui en wortel 10 minuten in boter zonder ze te laten kleuren.',
          'Voeg de tomaten, tomatenpuree, bouillon, laurier en een snuf suiker toe. Laat 25 minuten sudderen.',
          'Meng ondertussen het gehakt met het ei, paneermeel, peper, zout en nootmuskaat en rol balletjes ter grootte van een knikker.',
          'Haal de laurier eruit en mix de soep helemaal glad. Zeef ze als je ze fluweelzacht wil.',
          'Breng de soep terug tegen de kook en laat de balletjes erin glijden. Ze zijn gaar als ze bovendrijven, na een minuut of 6.',
          'Proef en breng op smaak met peper, zout en eventueel wat meer suiker als de tomaten scherp zijn.',
          'Serveer met een lepel room erdoor en peterselie erop.'
        ]
      },
      fr: {
        title: 'Soupe Tomate aux Boulettes',
        subtitle: 'Velouté de tomates aux petites boulettes',
        description: 'La soupe de toutes les fêtes de famille belges. Lisse, légèrement sucrée, avec des boulettes pas plus grosses qu\'une bille ajoutées à la fin.',
        instructions: [
          'Faites suer l\'oignon et la carotte émincés au beurre pendant 10 minutes sans coloration.',
          'Ajoutez les tomates, le concentré, le bouillon, le laurier et une pincée de sucre. Laissez mijoter 25 minutes.',
          'Pendant ce temps, mélangez le haché avec l\'oeuf, la chapelure, sel, poivre et muscade, et roulez des boulettes minuscules.',
          'Retirez le laurier et mixez la soupe bien lisse. Passez-la au chinois pour un résultat velouté.',
          'Remettez à frémir et laissez glisser les boulettes. Elles sont cuites lorsqu\'elles remontent, après 6 minutes.',
          'Goûtez et rectifiez en sel, poivre et un peu de sucre si les tomates sont acides.',
          'Servez avec une cuillère de crème et du persil.'
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
        subtitle: 'Warm salad of green beans, potatoes and bacon',
        description: 'Warm, not cold. Green beans and potatoes tossed with bacon and a splash of vinegar straight from the hot pan, so everything soaks up the dressing.',
        instructions: [
          'Boil the potatoes in their skins until tender, then drain and cut into thick slices while still warm.',
          'Cook the green beans in salted water for 6 to 8 minutes so they keep a little bite. Drain well.',
          'Fry the bacon bits in a large pan until crisp, then add the sliced shallot and cook another two minutes.',
          'Take the pan off the heat and pour in the vinegar — it will steam and lift everything off the bottom of the pan.',
          'Tip in the warm potatoes and beans and toss so they take up the bacon fat and vinegar.',
          'Season with pepper, add salt only if it needs it, and scatter with parsley.',
          'Serve warm, on its own or with a fried egg on top.'
        ]
      },
      nl: {
        title: 'Luikse Salade',
        subtitle: 'Warme salade van prinsessenbonen, aardappel en spek',
        description: 'Warm, niet koud. Prinsessenbonen en aardappelen door spek en een scheut azijn zo uit de hete pan, zodat alles de dressing opneemt.',
        instructions: [
          'Kook de aardappelen in de schil gaar, giet af en snijd ze nog warm in dikke schijven.',
          'Kook de bonen 6 à 8 minuten in gezouten water zodat ze nog wat beet houden. Goed laten uitlekken.',
          'Bak de spekblokjes krokant in een grote pan, voeg dan de gesnipperde sjalot toe en bak nog twee minuten.',
          'Haal de pan van het vuur en giet de azijn erbij — die stoomt meteen en maakt de aanbaksels los.',
          'Doe de warme aardappelen en bonen erbij en schud om zodat ze het spekvet en de azijn opnemen.',
          'Kruid met peper, voeg enkel zout toe als het nodig is, en strooi er peterselie over.',
          'Warm opdienen, zo of met een gebakken ei erop.'
        ]
      },
      fr: {
        title: 'Salade Liégeoise',
        subtitle: 'Salade tiède de haricots verts, pommes de terre et lard',
        description: 'Tiède, pas froide. Haricots et pommes de terre mêlés au lard et à un trait de vinaigre sorti de la poêle chaude, pour que tout s\'imprègne.',
        instructions: [
          'Cuisez les pommes de terre en robe des champs, égouttez et coupez-les en grosses rondelles encore chaudes.',
          'Cuisez les haricots 6 à 8 minutes à l\'eau salée pour qu\'ils gardent du croquant. Égouttez bien.',
          'Faites rissoler les lardons dans une grande poêle, ajoutez l\'échalote émincée et poursuivez deux minutes.',
          'Hors du feu, versez le vinaigre : il déglace immédiatement le fond de la poêle.',
          'Ajoutez les pommes de terre et les haricots tièdes et mélangez pour qu\'ils absorbent la graisse et le vinaigre.',
          'Poivrez, salez seulement si nécessaire, et parsemez de persil.',
          'Servez tiède, tel quel ou surmonté d\'un oeuf au plat.'
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
        subtitle: 'Spiced brown sugar biscuits',
        description: 'The biscuit that comes with every Belgian coffee. Brown sugar and the spice mix do the work; the dough wants a night in the fridge before it will behave.',
        instructions: [
          'Beat the soft butter with the brown sugar until light and creamy.',
          'Mix the flour, spices, baking soda and salt in a separate bowl.',
          'Work the dry mix into the butter with the milk until it just comes together as a dough. Do not knead it much.',
          'Wrap and refrigerate overnight — this is what gives speculoos their snap and their flavour.',
          'Roll out thin, about 4 mm, on a floured surface and cut out your shapes.',
          'Bake at 170°C for 12 to 15 minutes until evenly brown at the edges.',
          'They are still soft coming out of the oven; leave them on a rack to crisp up completely.'
        ]
      },
      nl: {
        title: 'Speculoos',
        subtitle: 'Kruidige koekjes van bruine suiker',
        description: 'Het koekje bij elke Belgische koffie. De bruine suiker en de speculaaskruiden doen het werk; het deeg wil een nacht in de koelkast voor het meewerkt.',
        instructions: [
          'Klop de zachte boter met de bruine suiker luchtig en romig.',
          'Meng de bloem, speculaaskruiden, zuiveringszout en zout in een aparte kom.',
          'Werk het droge mengsel met de melk door de boter tot het net samenkomt tot een deeg. Niet te lang kneden.',
          'Wikkel in folie en laat een nacht in de koelkast rusten — dat geeft speculoos zijn knapperigheid en smaak.',
          'Rol dun uit, zo\'n 4 mm, op een met bloem bestoven werkblad en steek je vormen uit.',
          'Bak 12 à 15 minuten op 170°C tot ze gelijkmatig bruin zijn aan de randen.',
          'Ze zijn nog zacht als ze uit de oven komen; laat ze op een rooster volledig hard worden.'
        ]
      },
      fr: {
        title: 'Spéculoos',
        subtitle: 'Biscuits épicés à la cassonade',
        description: 'Le biscuit de tous les cafés belges. La cassonade et le mélange d\'épices font tout ; la pâte réclame une nuit au frais avant de se laisser travailler.',
        instructions: [
          'Battez le beurre mou avec la cassonade jusqu\'à obtenir un mélange clair et crémeux.',
          'Mélangez la farine, les épices, le bicarbonate et le sel dans un autre bol.',
          'Incorporez le mélange sec et le lait au beurre jusqu\'à formation d\'une pâte. Ne pétrissez pas trop.',
          'Filmez et réservez une nuit au réfrigérateur — c\'est ce qui donne le croquant et le goût.',
          'Abaissez finement, environ 4 mm, sur un plan fariné et découpez vos formes.',
          'Enfournez 12 à 15 minutes à 170°C, jusqu\'à ce que les bords soient uniformément bruns.',
          'Ils sont encore mous à la sortie du four ; laissez-les durcir complètement sur une grille.'
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
        subtitle: 'Vanilla ice cream under hot Belgian chocolate',
        description: 'The dessert every Belgian brasserie has on the menu. It stands or falls on the sauce, so use chocolate you would happily eat on its own.',
        instructions: [
          'Chop the chocolate finely so it melts evenly.',
          'Bring the cream just to the point of simmering — small bubbles at the edge, no more.',
          'Take it off the heat, add the chocolate and leave it for a minute without stirring.',
          'Stir from the middle outwards until the sauce is glossy and completely smooth.',
          'Loosen with a spoon of milk if it is thicker than you want it to pour.',
          'Put three scoops of vanilla ice cream in each chilled bowl.',
          'Pour the warm sauce over at the table and finish with whipped cream. Serve immediately.'
        ]
      },
      nl: {
        title: 'Dame Blanche',
        subtitle: 'Vanille-ijs onder warme Belgische chocolade',
        description: 'Het dessert dat op elke Belgische brasseriekaart staat. Het valt of staat met de saus, dus gebruik chocolade die je ook zo zou opeten.',
        instructions: [
          'Hak de chocolade fijn zodat ze gelijkmatig smelt.',
          'Breng de room net tegen de kook aan — kleine belletjes aan de rand, meer niet.',
          'Haal van het vuur, voeg de chocolade toe en laat een minuut staan zonder te roeren.',
          'Roer van het midden naar buiten tot de saus glanzend en volledig glad is.',
          'Maak losser met een lepel melk als ze te dik is om te schenken.',
          'Schep drie bollen vanille-ijs in elke voorgekoelde coupe.',
          'Giet de warme saus er aan tafel over en werk af met slagroom. Meteen serveren.'
        ]
      },
      fr: {
        title: 'Dame Blanche',
        subtitle: 'Glace vanille sous chocolat belge chaud',
        description: 'Le dessert de toutes les brasseries belges. Tout repose sur la sauce : prenez un chocolat que vous mangeriez tel quel.',
        instructions: [
          'Hachez finement le chocolat pour qu\'il fonde régulièrement.',
          'Portez la crème juste au point de frémissement — de petites bulles sur le bord, pas plus.',
          'Hors du feu, ajoutez le chocolat et laissez reposer une minute sans remuer.',
          'Mélangez du centre vers l\'extérieur jusqu\'à obtenir une sauce brillante et parfaitement lisse.',
          'Détendez d\'une cuillère de lait si elle est trop épaisse pour napper.',
          'Disposez trois boules de glace vanille dans chaque coupe bien froide.',
          'Versez la sauce chaude à table et terminez à la crème fouettée. Servez aussitôt.'
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
        subtitle: 'Thick split pea soup with smoked sausage',
        description: 'Less a soup than a meal. Properly made, a spoon should stand up in it — and it is better on the second day, once it has had a night to thicken.',
        instructions: [
          'Rinse the split peas under cold water until it runs clear.',
          'Put them in a large pot with the pork belly, cover generously with water and bring to the boil. Skim off the grey foam.',
          'Turn the heat right down and simmer for an hour, stirring now and then so nothing catches on the bottom.',
          'Add the diced celeriac, carrots, leek, onion and potato and cook another 45 minutes.',
          'Lift out the pork, cut it into pieces and put it back in.',
          'Add the sliced smoked sausage and simmer 15 minutes more, until the peas have completely fallen apart.',
          'Season with salt and pepper. Loosen with water if it has gone past thick into solid.',
          'Serve with dark rye bread and mustard.'
        ]
      },
      nl: {
        title: 'Erwtensoep',
        subtitle: 'Dikke spliterwtensoep met rookworst',
        description: 'Eerder een maaltijd dan een soep. Goed gemaakt blijft de lepel rechtop staan — en ze is beter op dag twee, als ze een nacht heeft kunnen indikken.',
        instructions: [
          'Spoel de spliterwten onder koud water tot het water helder blijft.',
          'Doe ze in een grote pot met het buikspek, zet ruim onder water en breng aan de kook. Schep het grijze schuim eraf.',
          'Zet het vuur laag en laat een uur sudderen, af en toe roeren zodat er niets aanbakt.',
          'Voeg de knolselder, wortelen, prei, ui en aardappel in blokjes toe en laat nog 45 minuten koken.',
          'Haal het spek eruit, snijd het in stukken en doe het terug in de pot.',
          'Voeg de gesneden rookworst toe en laat nog 15 minuten trekken tot de erwten volledig uit elkaar gevallen zijn.',
          'Kruid met peper en zout. Verdun met wat water als ze eerder vast dan dik geworden is.',
          'Serveer met donker roggebrood en mosterd.'
        ]
      },
      fr: {
        title: 'Soupe aux Pois',
        subtitle: 'Soupe épaisse de pois cassés à la saucisse fumée',
        description: 'Plus un repas qu\'une soupe. Bien faite, la cuillère y tient debout — et elle est meilleure le lendemain, après une nuit à épaissir.',
        instructions: [
          'Rincez les pois cassés à l\'eau froide jusqu\'à ce qu\'elle reste claire.',
          'Mettez-les dans une grande marmite avec la poitrine de porc, couvrez largement d\'eau et portez à ébullition. Écumez.',
          'Baissez le feu et laissez mijoter une heure en remuant de temps en temps.',
          'Ajoutez le céleri-rave, les carottes, le poireau, l\'oignon et la pomme de terre en dés, et poursuivez 45 minutes.',
          'Retirez la poitrine, coupez-la en morceaux et remettez-la dans la marmite.',
          'Ajoutez la saucisse fumée en rondelles et laissez encore 15 minutes, jusqu\'à ce que les pois soient défaits.',
          'Salez et poivrez. Détendez à l\'eau si elle est devenue compacte.',
          'Servez avec du pain de seigle et de la moutarde.'
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
        subtitle: 'Eel in a green herb sauce',
        description: 'A dish from the Scheldt: eel poached in white wine with a mountain of green herbs, thickened only with egg yolk. Eaten warm in summer, cold the next day.',
        instructions: [
          'Ask the fishmonger to skin the eel and cut it into 5 cm pieces.',
          'Melt the butter in a wide pan and soften the chopped shallots without colouring them.',
          'Lay the eel on top, pour over the white wine and just enough water to barely cover.',
          'Poach very gently for 10 minutes — the liquid should never boil or the eel toughens.',
          'Add the sorrel, spinach, parsley, chervil, mint and tarragon, all roughly chopped. They will collapse in a couple of minutes.',
          'Take the pan off the heat. Whisk the egg yolks with the lemon juice, stir in a ladle of the hot cooking liquid, then pour it back into the pan.',
          'Swirl the pan over the lowest heat until the sauce thickens slightly. It must not boil.',
          'Season and serve warm with bread, or chill it completely and eat it cold the next day.'
        ]
      },
      nl: {
        title: 'Paling in \'t Groen',
        subtitle: 'Paling in een groene kruidensaus',
        description: 'Een Scheldegerecht: paling gepocheerd in witte wijn met een berg groene kruiden, enkel gebonden met eierdooier. Warm in de zomer, koud de dag erna.',
        instructions: [
          'Vraag de visboer om de paling te villen en in stukken van 5 cm te snijden.',
          'Smelt de boter in een brede pan en stoof de gesnipperde sjalotten glazig zonder ze te laten kleuren.',
          'Leg de paling erop, giet de witte wijn erbij en net genoeg water om alles amper onder te zetten.',
          'Pocheer 10 minuten heel zachtjes — het vocht mag nooit koken, anders wordt de paling taai.',
          'Voeg de zurkel, spinazie, peterselie, kervel, munt en dragon toe, grof gehakt. Ze slinken in een paar minuten.',
          'Haal de pan van het vuur. Klop de eierdooiers met het citroensap los, roer er een pollepel warm kookvocht door en giet dat terug in de pan.',
          'Zwenk de pan op het laagste vuur tot de saus licht bindt. Ze mag niet koken.',
          'Kruid en serveer warm met brood, of laat volledig afkoelen en eet ze de volgende dag koud.'
        ]
      },
      fr: {
        title: 'Anguilles au Vert',
        subtitle: 'Anguilles en sauce verte aux herbes',
        description: 'Un plat de l\'Escaut : anguilles pochées au vin blanc avec une montagne d\'herbes vertes, liées au seul jaune d\'oeuf. Tièdes en été, froides le lendemain.',
        instructions: [
          'Demandez au poissonnier de dépouiller les anguilles et de les couper en tronçons de 5 cm.',
          'Faites fondre le beurre dans une large sauteuse et faites suer les échalotes sans coloration.',
          'Déposez les anguilles, versez le vin blanc et juste assez d\'eau pour les couvrir à peine.',
          'Pochez très doucement 10 minutes — le liquide ne doit jamais bouillir.',
          'Ajoutez l\'oseille, les épinards, le persil, le cerfeuil, la menthe et l\'estragon grossièrement hachés. Ils tombent en deux minutes.',
          'Hors du feu, fouettez les jaunes d\'oeuf avec le jus de citron, détendez avec une louche de cuisson chaude, puis reversez dans la sauteuse.',
          'Faites tourner la sauteuse sur feu très doux jusqu\'à légère liaison. Sans ébullition.',
          'Assaisonnez et servez tiède avec du pain, ou bien froid le lendemain.'
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
        subtitle: 'Proper twice-fried Belgian fries',
        description: 'Bintje potatoes, beef fat, and two separate fryings with a rest in between. That rest is not optional — it is the entire difference between fries and chips.',
        instructions: [
          'Peel the potatoes and cut them into sticks a good centimetre thick. Belgian fries are not thin.',
          'Rinse them in cold water until it runs clear, to wash off the surface starch.',
          'Dry them completely in a tea towel. Any water left will spit in the fat.',
          'Heat the beef fat to 150°C and cook the fries in batches for 6 to 8 minutes. They should be soft and pale, not coloured.',
          'Lift them out and spread them on a rack. Let them rest at least 30 minutes — an hour is better.',
          'Heat the fat to 180°C and fry them again, in batches, for 2 to 3 minutes until deep golden and crisp.',
          'Drain briefly, tip into a bowl, salt from a height and toss.',
          'Serve at once with mayonnaise. Fries do not wait for anyone.'
        ]
      },
      nl: {
        title: 'Belgische Frieten',
        subtitle: 'Echte frieten, twee keer gebakken',
        description: 'Bintjes, ossewit en twee keer bakken met rust ertussen. Die rust is niet optioneel — het is precies het verschil tussen frieten en chips.',
        instructions: [
          'Schil de aardappelen en snijd ze in staafjes van een goede centimeter dik. Belgische frieten zijn niet dun.',
          'Spoel ze in koud water tot het helder blijft, om het zetmeel eraf te wassen.',
          'Droog ze volledig in een keukenhanddoek. Achtergebleven water spat in het vet.',
          'Verwarm het ossewit tot 150°C en bak de frieten in porties 6 à 8 minuten. Ze moeten zacht en bleek blijven.',
          'Haal ze eruit en spreid ze op een rooster. Laat minstens 30 minuten rusten, een uur is beter.',
          'Verwarm het vet tot 180°C en bak ze opnieuw, in porties, 2 à 3 minuten tot diep goudbruin en krokant.',
          'Kort laten uitlekken, in een kom kappen, van hoog zouten en omschudden.',
          'Meteen opdienen met mayonaise. Frieten wachten op niemand.'
        ]
      },
      fr: {
        title: 'Frites Belges',
        subtitle: 'Les vraies frites, cuites deux fois',
        description: 'Des bintjes, de la graisse de boeuf et deux cuissons avec un repos entre les deux. Ce repos n\'est pas facultatif : c\'est toute la différence.',
        instructions: [
          'Épluchez les pommes de terre et taillez-les en bâtonnets d\'un bon centimètre. La frite belge n\'est pas fine.',
          'Rincez-les à l\'eau froide jusqu\'à ce qu\'elle reste claire, pour éliminer l\'amidon.',
          'Séchez-les complètement dans un torchon. L\'eau restante ferait crépiter la graisse.',
          'Chauffez la graisse à 150°C et cuisez les frites par petites quantités 6 à 8 minutes : molles et pâles, sans coloration.',
          'Retirez-les et étalez-les sur une grille. Laissez reposer au moins 30 minutes, une heure de préférence.',
          'Chauffez la graisse à 180°C et refaites-les frire 2 à 3 minutes jusqu\'à belle couleur dorée.',
          'Égouttez brièvement, versez dans un saladier, salez de haut et mélangez.',
          'Servez immédiatement avec de la mayonnaise. Les frites n\'attendent personne.'
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
