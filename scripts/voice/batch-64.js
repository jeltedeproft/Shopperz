module.exports = {
  // fixes on 3 and 4: the source writes both its oven setting and its probe
  // reading as bare numbers with a degree sign and no scale — "preheat to 425°"
  // and "registers 140°". Both are Fahrenheit: a 425 °C oven does not exist on
  // a domestic dial, and pork pulled at 140 °C would be a cinder. They are
  // converted here to the Celsius the rest of the book uses.
  "mealdb-53547": {
    en: {
      fixes: [3, 4],
      subtitle: "Roast pork, ham and pickles, pressed under a second pan",
      description: "The pork is marinated in citrus and roasted, then the whole sandwich goes into a dry pan under a weight. The press is not optional — it is what melts the cheese through and thins the loaf into something you can bite.",
      instructions: [
        "Place the pork chops in a 3 litre glass baking dish. Using a fork, poke holes into the pork all over, then season all over with 1 tsp. salt. Drizzle with oil and toss to coat.",
        "In a small bowl, combine the orange zest and juice, lime zest and juice, oregano, pepper, garlic powder, cumin and onion powder. Add half of the marinade to the pork and let it rest 10 to 15 minutes.",
        "Meanwhile, arrange a rack in the centre of the oven and preheat to 220 °C. Add the mustard and mayonnaise to the remaining marinade and stir until smooth.",
        "Transfer the pork to the oven and roast until an instant-read thermometer inserted into the thickest part registers 60 °C, 15 to 20 minutes.",
        "To build the sandwiches, cut the loaf in half crosswise, then cut each piece in half lengthwise, for 4 pieces total. Spread butter on the outside of the bread, top and bottom. Spread the mustard mixture on the cut sides. On 2 of the bread pieces, layer each with 55 g. cheese and 115 g.",
        "of ham, then half the roast pork, 4 pickle slices, and the remaining 55 g. cheese. Close with the remaining bread pieces and wrap each sandwich in foil.",
        "Heat a large cast-iron skillet over medium heat. Place the foil-wrapped sandwiches in the skillet, then set another heavy skillet on top to make a sandwich press. If you have no second heavy skillet, weigh the pan down with a lighter one or a baking sheet and stack a couple of tins on top.",
        "Grill the sandwiches, turning halfway through, until toasted and the cheese has melted, 3 to 4 minutes per side. Cut each sandwich in half and serve."
      ]
    },
    nl: {
      fixes: [3, 4],
      subtitle: "Gebraden varkensvlees, ham en augurk, geperst onder een tweede pan",
      description: "Het varkensvlees marineert in citrus en gaat de oven in, en daarna gaat de hele sandwich in een droge pan onder een gewicht. Dat persen is geen extraatje — het is wat de kaas doorheen smelt en het brood dun genoeg maakt om erin te bijten.",
      instructions: [
        "Leg de varkenskoteletten in een glazen ovenschaal van 3 liter. Prik met een vork overal gaatjes in het vlees en kruid het rondom met 1 kl zout. Besprenkel met olie en schep om tot alles bedekt is.",
        "Meng in een kommetje de sinaasappelzeste en het sap, de limoenzeste en het sap, de oregano, de peper, het knoflookpoeder, de komijn en het uienpoeder. Doe de helft van de marinade bij het vlees en laat het 10 tot 15 minuten staan.",
        "Zet ondertussen een rooster in het midden van de oven en verwarm voor op 220 °C. Roer de mosterd en de mayonaise door de rest van de marinade tot alles glad is.",
        "Zet het varkensvlees in de oven en braad tot een kernthermometer in het dikste stuk 60 °C aangeeft, 15 tot 20 minuten.",
        "Snijd voor het opbouwen van de sandwiches het brood dwars doormidden, en snijd elk stuk in de lengte door, zodat je 4 stukken hebt. Bestrijk de buitenkant van het brood met boter, boven en onder. Strijk het mosterdmengsel op de snijkanten. Beleg 2 van de broodstukken elk met 55 g kaas en 115 g.",
        "ham, dan de helft van het gebraden varkensvlees, 4 schijfjes augurk, en de resterende 55 g kaas. Sluit met de overige broodstukken en wikkel elke sandwich in folie.",
        "Verhit een grote gietijzeren pan op middelhoog vuur. Leg de in folie gewikkelde sandwiches in de pan en zet er een tweede zware pan bovenop als sandwichpers. Heb je geen tweede zware pan, verzwaar de pan dan met een lichtere of een bakplaat en stapel er een paar blikken op.",
        "Gril de sandwiches en draai ze halverwege om, tot ze geroosterd zijn en de kaas gesmolten is, 3 tot 4 minuten per kant. Snijd elke sandwich doormidden en dien op."
      ]
    },
    fr: {
      fixes: [3, 4],
      subtitle: "Du porc rôti, du jambon et des cornichons, pressés sous une seconde poêle",
      description: "Le porc marine dans les agrumes puis rôtit, et le sandwich entier passe ensuite dans une poêle sèche sous un poids. Le pressage n'est pas facultatif : c'est lui qui fait fondre le fromage à cœur et affine le pain assez pour qu'on puisse mordre dedans.",
      instructions: [
        "Place les côtes de porc dans un plat en verre de 3 litres. Avec une fourchette, pique la viande partout, puis assaisonne-la de 1 cuillère à café de sel. Arrose d'huile et retourne pour bien enrober.",
        "Dans un bol, mélange le zeste et le jus d'orange, le zeste et le jus de citron vert, l'origan, le poivre, l'ail en poudre, le cumin et l'oignon en poudre. Ajoute la moitié de la marinade au porc et laisse reposer 10 à 15 minutes.",
        "Pendant ce temps, place une grille au centre du four et préchauffe à 220 °C. Ajoute la moutarde et la mayonnaise au reste de la marinade et mélange jusqu'à ce que ce soit lisse.",
        "Enfourne le porc et fais-le rôtir jusqu'à ce qu'un thermomètre planté dans la partie la plus épaisse indique 60 °C, 15 à 20 minutes.",
        "Pour monter les sandwichs, coupe le pain en deux dans la largeur, puis chaque morceau en deux dans l'épaisseur, ce qui fait 4 morceaux. Beurre l'extérieur du pain, dessus et dessous. Étale le mélange à la moutarde sur les faces coupées. Sur 2 morceaux de pain, dispose 55 g de fromage et 115 g.",
        "de jambon, puis la moitié du porc rôti, 4 rondelles de cornichon et les 55 g de fromage restants. Referme avec les autres morceaux de pain et enveloppe chaque sandwich d'aluminium.",
        "Chauffe une grande poêle en fonte à feu moyen. Pose les sandwichs emballés dans la poêle, puis une seconde poêle lourde par-dessus pour faire presse. Si tu n'as pas de seconde poêle lourde, leste-la avec une plus légère ou une plaque et empile quelques conserves dessus.",
        "Grille les sandwichs en les retournant à mi-cuisson, jusqu'à ce qu'ils soient dorés et le fromage fondu, 3 à 4 minutes par face. Coupe chaque sandwich en deux et sers."
      ]
    }
  },

  // Step 1 was the heading "Instructions" on its own. Steps 7 to 11 are the
  // source's stove-top alternative to the pressure cooker, kept as it wrote
  // them.
  "mealdb-53352": {
    dropSteps: [1],
    en: {
      subtitle: "Rice and beans in coconut milk, two ways",
      description: "The beans go on top and are not stirred in — that is deliberate, and it keeps them from clouding the rice or sinking to the bottom and catching. Pressure cooker first, stove top after.",
      instructions: [
        "Set the Instant Pot to Sauté. Once hot, add the olive oil. Then add the yellow onion and stir until softened, about 3 minutes. Add the garlic and spring onions and stir for about 30 more seconds.",
        "Press Cancel on the Instant Pot. Add the rice, coconut milk, water, salt, allspice and black pepper and stir.",
        "Pour the undrained kidney beans on top of the rice mixture. Do not stir. Lay the sprigs of thyme on top. Cover the Instant Pot, making sure the valve is set to Sealing.",
        "Press Manual or Pressure Cook on the Instant Pot and set it to High pressure for 6 minutes.",
        "Once the pressure cooking time is done, allow it to release naturally for 10 minutes, then quick release any remaining pressure by moving the valve to Venting.",
        "Open the lid and remove the thyme sprigs. Fluff the rice with a fork and enjoy.",
        "For the stove top version, heat the olive oil in a large pot over medium heat. Add the yellow onion and stir until softened, about 3 minutes. Add the garlic and spring onions and stir for about 30 more seconds.",
        "Add the rice, undrained kidney beans, coconut milk, water, salt, allspice and black pepper and stir until combined. Lay the thyme on top. Bring the mixture to a simmer.",
        "Cover with a lid and reduce the heat to low. Cook for 18 minutes over low heat, then take it off the heat. Leave the lid on for another 5 minutes — that resting steam is what finishes the rice.",
        "Open the lid and remove the thyme. Fluff the rice with a fork. Enjoy."
      ]
    },
    nl: {
      subtitle: "Rijst en bonen in kokosmelk, op twee manieren",
      description: "De bonen gaan bovenop en worden er niet doorgeroerd — dat is met opzet, en het verhindert dat ze de rijst troebel maken of naar de bodem zakken en aanbakken. Eerst de snelkookpan, daarna het gewone vuur.",
      instructions: [
        "Zet de Instant Pot op Sauté. Doe de olijfolie erin zodra hij heet is. Doe dan de gele ui erbij en roer tot ze zacht wordt, ongeveer 3 minuten. Voeg de knoflook en de lente-uitjes toe en roer nog ongeveer 30 seconden.",
        "Druk op Cancel. Doe de rijst, de kokosmelk, het water, het zout, de piment en de zwarte peper erbij en roer om.",
        "Giet de niet-afgegoten kidneybonen bovenop het rijstmengsel. Roer niet. Leg de takjes tijm erop. Sluit de Instant Pot en zorg dat het ventiel op Sealing staat.",
        "Druk op Manual of Pressure Cook en zet hem op hoge druk gedurende 6 minuten.",
        "Laat de druk na afloop 10 minuten vanzelf ontsnappen, en laat de rest dan snel ontsnappen door het ventiel op Venting te zetten.",
        "Open het deksel en haal de takjes tijm eruit. Woel de rijst los met een vork en tast toe.",
        "Verhit voor de versie op het vuur de olijfolie in een grote pot op middelhoog vuur. Doe de gele ui erbij en roer tot ze zacht wordt, ongeveer 3 minuten. Voeg de knoflook en de lente-uitjes toe en roer nog ongeveer 30 seconden.",
        "Doe de rijst, de niet-afgegoten kidneybonen, de kokosmelk, het water, het zout, de piment en de zwarte peper erbij en roer tot alles gemengd is. Leg de tijm erop. Breng het geheel tegen de kook aan.",
        "Dek af met een deksel en zet het vuur laag. Gaar 18 minuten op laag vuur en haal de pot dan van het vuur. Laat het deksel er nog 5 minuten op — die nastomende damp is wat de rijst afmaakt.",
        "Open het deksel en haal de tijm eruit. Woel de rijst los met een vork. Tast toe."
      ]
    },
    fr: {
      subtitle: "Du riz et des haricots au lait de coco, de deux façons",
      description: "Les haricots se posent dessus et ne sont pas mélangés — c'est voulu, et cela les empêche de troubler le riz ou de tomber au fond et d'attacher. L'autocuiseur d'abord, la casserole ensuite.",
      instructions: [
        "Mets l'Instant Pot sur Sauté. Une fois chaud, ajoute l'huile d'olive. Ajoute ensuite l'oignon jaune et remue jusqu'à ce qu'il fonde, environ 3 minutes. Ajoute l'ail et les ciboules et remue encore environ 30 secondes.",
        "Appuie sur Cancel. Ajoute le riz, le lait de coco, l'eau, le sel, le piment de la Jamaïque et le poivre noir et mélange.",
        "Verse les haricots rouges non égouttés sur le riz. Ne mélange pas. Pose les branches de thym dessus. Ferme l'Instant Pot en veillant à ce que la valve soit sur Sealing.",
        "Appuie sur Manual ou Pressure Cook et règle sur haute pression pendant 6 minutes.",
        "Une fois la cuisson terminée, laisse la pression retomber naturellement 10 minutes, puis libère le reste en tournant la valve sur Venting.",
        "Ouvre le couvercle et retire les branches de thym. Égrène le riz à la fourchette et régale-toi.",
        "Pour la version à la casserole, chauffe l'huile d'olive dans une grande casserole à feu moyen. Ajoute l'oignon jaune et remue jusqu'à ce qu'il fonde, environ 3 minutes. Ajoute l'ail et les ciboules et remue encore environ 30 secondes.",
        "Ajoute le riz, les haricots non égouttés, le lait de coco, l'eau, le sel, le piment de la Jamaïque et le poivre noir et mélange. Pose le thym dessus. Porte à frémissement.",
        "Couvre et baisse à feu doux. Laisse cuire 18 minutes à feu doux, puis retire du feu. Garde le couvercle encore 5 minutes — c'est cette vapeur au repos qui achève le riz.",
        "Ouvre le couvercle et retire le thym. Égrène le riz à la fourchette. Régale-toi."
      ]
    }
  },

  "mealdb-52937": {
    en: {
      subtitle: "A thick jerk paste, left on overnight",
      description: "The marinade has to be a paste, not a sauce — resist adding water when the blender struggles, because a thin marinade slides off the chicken instead of clinging to it. Taste it before it goes on: it should be assertively salty, and you can still correct it.",
      instructions: [
        "To make the jerk marinade, combine all the ingredients in a food processor along with 1 tsp salt and blend to a purée. If you are having trouble getting it to blend, keep turning off the blender, stirring the mixture and trying again. Eventually it will start to move — do not be tempted to add water, because you want a thick paste.",
        "Taste the jerk mixture for seasoning. It should taste pretty salty, but not unpleasantly, puckering salty. Throw in more chillies now if it is not spicy enough for you. If it tastes too salty and sour, add a bit more brown sugar until the mixture tastes balanced.",
        "Make a few slashes in the chicken thighs and pour the marinade over the meat, rubbing it into all the crevices and into the cuts. Cover and leave to marinate overnight in the fridge.",
        "If you want to barbecue your chicken, get the coals burning 1 hr or so before you are ready to cook. Authentic jerked meats are not grilled as we usually think of grilling — they are closer to smoke-grilled.",
        "For a more authentic jerk, add some wood chips to your barbecue and cook the chicken over slow, indirect heat for 30 mins. To cook it in the oven, heat to 180 °C / 160 °C fan. Put the chicken pieces in a roasting tin with the lime halves and cook for 45 mins, until tender and cooked through.",
        "While the chicken is cooking, prepare the rice and peas. Rinse the rice in plenty of cold water, then tip it into a large saucepan with all the remaining ingredients except the kidney beans. Season with salt, add 300ml cold water and set it over a high heat. Once the rice begins to boil, turn it down to medium, cover and cook for 10 mins.",
        "Add the beans to the rice, then cover with a lid. Leave it off the heat for 5 mins, until all the liquid is absorbed. Squeeze the roasted lime over the chicken and serve with the rice and peas, and hot sauce if you like it really spicy."
      ]
    },
    nl: {
      subtitle: "Een dikke jerkpasta, een nacht laten intrekken",
      description: "De marinade moet een pasta zijn en geen saus — hou je in als de blender het moeilijk krijgt en voeg geen water toe, want een dunne marinade glijdt van de kip in plaats van eraan te kleven. Proef ze voor ze erop gaat: ze hoort uitgesproken zout te zijn, en je kan ze dan nog bijsturen.",
      instructions: [
        "Doe voor de jerkmarinade alle ingrediënten samen met 1 kl zout in een keukenrobot en mix tot een puree. Lukt het mengen niet, zet de blender dan telkens uit, roer het geheel om en probeer opnieuw. Uiteindelijk komt het in beweging — laat je niet verleiden om water toe te voegen, want je wil een dikke pasta.",
        "Proef de jerkpasta op kruiding. Ze hoort behoorlijk zout te smaken, maar niet onaangenaam, samentrekkend zout. Gooi er nu meer pepers bij als ze niet pittig genoeg is naar jouw smaak. Smaakt ze te zout en te zuur, voeg dan wat meer bruine suiker toe tot het geheel in evenwicht is.",
        "Kerf de kippendijen een paar keer in en giet de marinade over het vlees, terwijl je ze in alle plooien en in de sneden wrijft. Dek af en laat een nacht marineren in de koelkast.",
        "Wil je de kip op de barbecue, steek de kolen dan zo'n 1 uur voor je wil bakken aan. Authentiek jerkvlees wordt niet gegrild zoals wij grillen kennen — het leunt dichter aan bij rookgrillen.",
        "Voor een authentiekere jerk doe je wat houtsnippers bij je barbecue en gaar je de kip 30 minuten op traag, indirect vuur. Wil je ze in de oven, verwarm die dan op 180 °C / 160 °C hetelucht. Leg de stukken kip in een braadslee met de gehalveerde limoen en gaar 45 minuten, tot ze mals en gaar zijn.",
        "Maak terwijl de kip gaart de rijst met bonen. Spoel de rijst in ruim koud water en doe ze dan in een grote pot met alle overige ingrediënten behalve de kidneybonen. Breng op smaak met zout, voeg 300ml koud water toe en zet de pot op hoog vuur. Zet het vuur op middelhoog zodra de rijst begint te koken, dek af en gaar 10 minuten.",
        "Doe de bonen bij de rijst en leg het deksel erop. Laat de pot 5 minuten van het vuur staan, tot al het vocht opgenomen is. Knijp de geroosterde limoen over de kip en dien op met de rijst met bonen, en met hete saus als je het echt pittig wil."
      ]
    },
    fr: {
      subtitle: "Une pâte jerk épaisse, laissée toute la nuit",
      description: "La marinade doit être une pâte, pas une sauce — résiste à l'envie d'ajouter de l'eau quand le blender peine, car une marinade liquide glisse du poulet au lieu d'y adhérer. Goûte-la avant de l'appliquer : elle doit être franchement salée, et tu peux encore la corriger.",
      instructions: [
        "Pour la marinade jerk, réunis tous les ingrédients dans un robot avec 1 cuillère à café de sel et mixe en purée. Si le mélange refuse de tourner, arrête le blender, remue et recommence. Il finira par se mettre en route — ne cède pas à la tentation d'ajouter de l'eau, car tu veux une pâte épaisse.",
        "Goûte la pâte jerk. Elle doit être bien salée, mais pas d'un salé désagréable qui râpe. Ajoute des piments maintenant si elle n'est pas assez relevée pour toi. Si elle est trop salée et trop acide, ajoute un peu de cassonade jusqu'à ce que l'ensemble soit équilibré.",
        "Entaille les hauts de cuisse à plusieurs endroits et verse la marinade sur la viande, en la faisant pénétrer dans tous les replis et dans les entailles. Couvre et laisse mariner une nuit au réfrigérateur.",
        "Si tu veux cuire le poulet au barbecue, allume les braises environ 1 heure avant de commencer. Les viandes jerk authentiques ne sont pas grillées au sens habituel — c'est plus proche d'un grillage fumé.",
        "Pour un jerk plus authentique, ajoute des copeaux de bois à ton barbecue et cuis le poulet à chaleur douce et indirecte 30 minutes. Pour une cuisson au four, chauffe-le à 180 °C / 160 °C chaleur tournante. Pose les morceaux dans un plat avec les moitiés de citron vert et cuis 45 minutes, jusqu'à ce que la viande soit tendre et cuite à cœur.",
        "Pendant la cuisson, prépare le riz aux haricots. Rince le riz à grande eau froide, puis verse-le dans une grande casserole avec tous les ingrédients restants sauf les haricots rouges. Sale, ajoute 300ml d'eau froide et mets sur feu vif. Dès que le riz bout, baisse à feu moyen, couvre et cuis 10 minutes.",
        "Ajoute les haricots au riz, puis couvre. Laisse hors du feu 5 minutes, jusqu'à absorption complète du liquide. Presse le citron vert rôti sur le poulet et sers avec le riz aux haricots, et de la sauce piquante si tu l'aimes vraiment relevé."
      ]
    }
  },

  "mealdb-52813": {
    en: {
      subtitle: "Eleven spices in the flour, and a rest before frying",
      description: "The five minutes of resting after coating is the step everyone skips. It lets the crust hydrate and grip the chicken, so it stays on the meat instead of floating off into the oil.",
      instructions: [
        "Preheat the fryer to 180 °C. Thoroughly mix together all the spice mix ingredients.",
        "Combine the spice mix with the flour, brown sugar and salt.",
        "Dip the chicken pieces in egg white to lightly coat them, then transfer them to the flour mixture. Turn them a few times and make sure the flour really sticks. Repeat with all the chicken pieces.",
        "Let the chicken pieces rest for 5 minutes, so the crust has a chance to dry a bit and hold on.",
        "Fry the chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more. The pieces are done when a meat thermometer inserted into the thickest part reads 75 °C.",
        "Let the chicken drain on a few paper towels as it comes out of the fryer. Serve hot."
      ]
    },
    nl: {
      subtitle: "Elf specerijen in de bloem, en rusten voor het bakken",
      description: "Die vijf minuten rust na het paneren is de stap die iedereen overslaat. Ze laat de korst vocht opnemen en zich vastgrijpen aan de kip, zodat hij op het vlees blijft in plaats van los te komen in de olie.",
      instructions: [
        "Verwarm de friteuse voor op 180 °C. Meng alle ingrediënten van de specerijenmix grondig door elkaar.",
        "Meng de specerijenmix met de bloem, de bruine suiker en het zout.",
        "Doop de stukken kip in eiwit tot ze licht bedekt zijn en leg ze dan in het bloemmengsel. Keer ze een paar keer om en zorg dat de bloem er echt aan blijft plakken. Herhaal met alle stukken kip.",
        "Laat de stukken kip 5 minuten rusten, zodat de korst wat kan opdrogen en zich vastzet.",
        "Bak de kip in porties. Borsten en vleugels hebben 12-14 minuten nodig, en pootjes en dijen een paar minuten meer. De stukken zijn gaar zodra een vleesthermometer in het dikste deel 75 °C aangeeft.",
        "Laat de kip uitlekken op een paar vellen keukenpapier zodra ze uit de friteuse komt. Dien warm op."
      ]
    },
    fr: {
      subtitle: "Onze épices dans la farine, et un repos avant la friture",
      description: "Les cinq minutes de repos après l'enrobage sont l'étape que tout le monde saute. Elles laissent la croûte s'hydrater et s'accrocher au poulet, pour qu'elle reste sur la viande au lieu de partir dans l'huile.",
      instructions: [
        "Préchauffe la friteuse à 180 °C. Mélange soigneusement tous les ingrédients du mélange d'épices.",
        "Mélange les épices avec la farine, la cassonade et le sel.",
        "Trempe les morceaux de poulet dans le blanc d'œuf pour les enrober légèrement, puis passe-les dans la farine. Retourne-les plusieurs fois et assure-toi que la farine adhère vraiment. Recommence avec tous les morceaux.",
        "Laisse les morceaux reposer 5 minutes, le temps que la croûte sèche un peu et se fixe.",
        "Fais frire le poulet par fournées. Les blancs et les ailes demandent 12-14 minutes, les cuisses et les hauts de cuisse quelques minutes de plus. Les morceaux sont cuits quand un thermomètre planté dans la partie la plus épaisse indique 75 °C.",
        "Laisse le poulet s'égoutter sur du papier absorbant à la sortie de la friteuse. Sers chaud."
      ]
    }
  },

  "mealdb-53051": {
    en: {
      subtitle: "Coconut rice with everything served around it",
      description: "The rice is the dish and the rest are its companions: crisp anchovies, peanuts, egg, cucumber and a sambal cooked down until it is thick and dark. The sambal takes the longest and is worth every minute.",
      instructions: [
        "In a medium saucepan over medium heat, stir together the coconut milk, water, ground ginger, ginger root, salt, bay leaf and rice. Cover and bring to a boil. Reduce the heat and simmer for 20 to 30 minutes, or until done.",
        "Place the eggs in a saucepan and cover with cold water. Bring the water to a boil and immediately take it off the heat. Cover and let the eggs stand in the hot water for 10 to 12 minutes. Remove them, cool, peel and slice in half. Slice the cucumber.",
        "Meanwhile, in a large skillet or wok, heat 240 ml vegetable oil over medium-high heat. Stir in the peanuts and cook briefly, until lightly browned. Remove them with a slotted spoon onto paper towels to soak up the excess oil. Return the skillet to the stove.",
        "Stir in the contents of one package of anchovies and cook briefly, turning, until crisp. Remove with a slotted spoon onto paper towels. Discard the oil and wipe out the skillet.",
        "Heat 2 tablespoons oil in the skillet. Stir in the onion, garlic and shallots and cook until fragrant, about 1 or 2 minutes. Mix in the chilli paste and cook for 10 minutes, stirring occasionally — add a splash of water if it gets too dry. Stir in the remaining anchovies and cook for 5 minutes. Stir in the salt, sugar and tamarind juice and simmer until the sauce is thick, about 5 minutes.",
        "Serve the onion and garlic sauce over the warm rice, and top with the peanuts, fried anchovies, cucumber and eggs."
      ]
    },
    nl: {
      subtitle: "Kokosrijst met alles eromheen geschikt",
      description: "De rijst ís het gerecht en de rest zijn haar gezelschap: krokante ansjovis, pinda's, ei, komkommer en een sambal die ingekookt wordt tot ze dik en donker is. Die sambal duurt het langst en is elke minuut waard.",
      instructions: [
        "Roer in een middelgrote pot op middelhoog vuur de kokosmelk, het water, de gemalen gember, de gemberwortel, het zout, het laurierblad en de rijst door elkaar. Dek af en breng aan de kook. Zet het vuur lager en laat 20 tot 30 minuten sudderen, of tot de rijst gaar is.",
        "Leg de eieren in een pot en zet ze onder met koud water. Breng het water aan de kook en haal de pot meteen van het vuur. Dek af en laat de eieren 10 tot 12 minuten in het hete water staan. Haal ze eruit, laat ze afkoelen, pel ze en halveer ze. Snijd de komkommer.",
        "Verhit ondertussen 240 ml plantaardige olie in een grote pan of wok op middelhoog vuur. Roer de pinda's erdoor en bak ze kort tot ze lichtbruin zijn. Schep ze met een schuimspaan op keukenpapier om het overtollige vet op te nemen. Zet de pan terug op het vuur.",
        "Roer de inhoud van één pakje ansjovis erdoor en bak ze kort, al kerend, tot ze krokant zijn. Schep ze met een schuimspaan op keukenpapier. Gooi de olie weg en veeg de pan uit.",
        "Verhit 2 eetlepels olie in de pan. Roer de ui, de knoflook en de sjalotten erdoor en bak tot alles geurt, ongeveer 1 of 2 minuten. Meng de chilipasta erdoor en gaar 10 minuten, af en toe roerend — voeg een scheutje water toe als het te droog wordt. Roer de rest van de ansjovis erdoor en gaar 5 minuten. Roer het zout, de suiker en het tamarindesap erdoor en laat sudderen tot de saus dik is, ongeveer 5 minuten.",
        "Lepel de ui-knoflooksaus over de warme rijst en werk af met de pinda's, de gebakken ansjovis, de komkommer en de eieren."
      ]
    },
    fr: {
      subtitle: "Du riz au coco avec tout le reste disposé autour",
      description: "Le riz est le plat et le reste l'accompagne : anchois croustillants, cacahuètes, œuf, concombre et un sambal réduit jusqu'à devenir épais et sombre. Le sambal est le plus long et vaut chaque minute.",
      instructions: [
        "Dans une casserole moyenne à feu moyen, mélange le lait de coco, l'eau, le gingembre moulu, le gingembre frais, le sel, la feuille de laurier et le riz. Couvre et porte à ébullition. Baisse le feu et laisse mijoter 20 à 30 minutes, jusqu'à cuisson complète.",
        "Mets les œufs dans une casserole et couvre-les d'eau froide. Porte à ébullition et retire aussitôt du feu. Couvre et laisse les œufs reposer dans l'eau chaude 10 à 12 minutes. Sors-les, refroidis-les, écale-les et coupe-les en deux. Tranche le concombre.",
        "Pendant ce temps, dans une grande poêle ou un wok, chauffe 240 ml d'huile végétale à feu moyen-vif. Ajoute les cacahuètes et fais-les revenir brièvement jusqu'à ce qu'elles dorent. Sors-les à l'écumoire sur du papier absorbant. Remets la poêle sur le feu.",
        "Ajoute le contenu d'un paquet d'anchois et fais-les revenir brièvement, en les retournant, jusqu'à ce qu'ils croustillent. Sors-les à l'écumoire sur du papier absorbant. Jette l'huile et essuie la poêle.",
        "Chauffe 2 cuillères à soupe d'huile dans la poêle. Ajoute l'oignon, l'ail et les échalotes et fais revenir jusqu'à ce que tout embaume, environ 1 ou 2 minutes. Incorpore la pâte de piment et fais cuire 10 minutes en remuant de temps en temps — ajoute un filet d'eau si cela devient trop sec. Ajoute le reste des anchois et poursuis 5 minutes. Ajoute le sel, le sucre et le jus de tamarin et laisse mijoter jusqu'à ce que la sauce épaississe, environ 5 minutes.",
        "Sers la sauce à l'oignon et à l'ail sur le riz chaud, et couronne de cacahuètes, d'anchois frits, de concombre et d'œufs."
      ]
    }
  },

  "mealdb-53520": {
    en: {
      subtitle: "A meat filling under a sweet corn crust",
      description: "Pino below — beef, chicken, olives, raisins and egg — and a corn purée cooked to a paste on top. The sugar sprinkled over the crust before baking is what gives it the caramelised lid it is known for.",
      instructions: [
        "Place the eggs in a saucepan and cover with water. Bring to a boil, remove from the heat, and let the eggs stand in the hot water for 15 minutes.",
        "Meanwhile, heat oil in a skillet over medium heat. Add the onions, garlic, 1 pinch salt, ¼ teaspoon paprika and black pepper and cook until fragrant, about 2 minutes. Add the beef, the remaining 1 teaspoon salt, the remaining ¼ teaspoon paprika and black pepper, and cook and stir until the beef is mostly browned, about 5 minutes. Add the chicken, raisins and olives.",
        "Remove the eggs from the hot water, cool them under cold running water and peel. Chop them roughly and add them to the beef mixture. Keep the pino warm.",
        "Combine the corn and basil in a blender or food processor and blend until smooth. Pour into a saucepan over medium heat. Add the butter and cook, stirring, until thickened, 7 to 10 minutes. Stir in the milk, 2 teaspoons sugar and salt, and cook until it thickens to a paste, about 15 minutes more.",
        "Preheat the oven to 175 °C.",
        "Spread the pino into a baking dish. Cover it with the corn paste and sprinkle a little sugar on top.",
        "Bake in the preheated oven until golden brown on top, about 20 minutes."
      ]
    },
    nl: {
      subtitle: "Een vleesvulling onder een korst van zoete maïs",
      description: "Pino onderaan — rundvlees, kip, olijven, rozijnen en ei — en een maïspuree die tot een pasta is ingekookt erbovenop. De suiker die voor het bakken over de korst gaat is wat het gerecht zijn befaamde gekaramelliseerde deksel geeft.",
      instructions: [
        "Leg de eieren in een pot en zet ze onder water. Breng aan de kook, haal van het vuur en laat de eieren 15 minuten in het hete water staan.",
        "Verhit ondertussen olie in een pan op middelhoog vuur. Doe de uien, de knoflook, 1 snuif zout, ¼ theelepel paprikapoeder en zwarte peper erbij en bak tot alles geurt, ongeveer 2 minuten. Voeg het rundvlees toe, de resterende 1 theelepel zout, de resterende ¼ theelepel paprikapoeder en zwarte peper, en bak al roerend tot het vlees grotendeels gekleurd is, ongeveer 5 minuten. Doe de kip, de rozijnen en de olijven erbij.",
        "Haal de eieren uit het hete water, koel ze onder stromend koud water en pel ze. Hak ze grof en doe ze bij het vleesmengsel. Hou de pino warm.",
        "Doe de maïs en de basilicum in een blender of keukenrobot en mix tot alles glad is. Giet het in een pot op middelhoog vuur. Voeg de boter toe en gaar al roerend tot het indikt, 7 tot 10 minuten. Roer de melk, 2 theelepels suiker en zout erdoor en gaar tot het tot een pasta indikt, ongeveer 15 minuten meer.",
        "Verwarm de oven voor op 175 °C.",
        "Spreid de pino uit in een ovenschaal. Bedek hem met de maïspasta en strooi er wat suiker over.",
        "Bak in de voorverwarmde oven tot de bovenkant goudbruin is, ongeveer 20 minuten."
      ]
    },
    fr: {
      subtitle: "Une farce à la viande sous une croûte de maïs doux",
      description: "Le pino en dessous — bœuf, poulet, olives, raisins secs et œuf — et une purée de maïs cuite en pâte par-dessus. Le sucre saupoudré sur la croûte avant la cuisson donne ce couvercle caramélisé qui fait sa réputation.",
      instructions: [
        "Mets les œufs dans une casserole et couvre-les d'eau. Porte à ébullition, retire du feu et laisse les œufs reposer dans l'eau chaude 15 minutes.",
        "Pendant ce temps, chauffe de l'huile dans une poêle à feu moyen. Ajoute les oignons, l'ail, 1 pincée de sel, ¼ de cuillère à café de paprika et du poivre noir et fais revenir jusqu'à ce que tout embaume, environ 2 minutes. Ajoute le bœuf, la 1 cuillère à café de sel restante, le ¼ de cuillère à café de paprika restant et du poivre noir, et fais cuire en remuant jusqu'à ce que la viande soit presque entièrement colorée, environ 5 minutes. Ajoute le poulet, les raisins secs et les olives.",
        "Sors les œufs de l'eau chaude, refroidis-les sous l'eau froide et écale-les. Hache-les grossièrement et ajoute-les au mélange à la viande. Garde le pino au chaud.",
        "Mets le maïs et le basilic dans un blender ou un robot et mixe jusqu'à obtenir une texture lisse. Verse dans une casserole à feu moyen. Ajoute le beurre et fais cuire en remuant jusqu'à épaississement, 7 à 10 minutes. Incorpore le lait, 2 cuillères à café de sucre et du sel, et cuis jusqu'à obtenir une pâte, environ 15 minutes de plus.",
        "Préchauffe le four à 175 °C.",
        "Étale le pino dans un plat allant au four. Recouvre-le de la pâte de maïs et saupoudre un peu de sucre dessus.",
        "Enfourne dans le four préchauffé jusqu'à ce que le dessus soit bien doré, environ 20 minutes."
      ]
    }
  }
};
