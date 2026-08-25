module.exports = {
  // fixes on 1: the source wrote "450°" with no scale after it. At 450 °C an
  // oven would be at its cleaning cycle, so it is Fahrenheit, converted here
  // the way the book converts every other American oven. convert_measures
  // leaves a bare degree sign with no letter after it alone.
  "mealdb-53548": {
    en: {
      fixes: [1],
      subtitle: "Boiled first, then roasted hot — yuca will not go crisp otherwise",
      description: "Cassava is too dense to roast from raw. Boil it until a fork slides in, dry it thoroughly, then give it a very hot oven. The fibrous cord down the middle of each piece is inedible and has to come out.",
      instructions: [
        "Preheat the oven to 230 °C. Bring a large pot of water to a boil. Trim the ends off the yuca and cut each one in half widthwise. Stand the pieces on their ends and use a sharp knife to cut the waxy peel off. Cut each piece in half lengthwise, then in half lengthwise once more, to give you 16 pieces in all. Trim the fibrous centre out of each piece — it never softens.",
        "Place the cut yuca into the boiling water and let it boil until fork tender, 8 to 10 minutes. Lift it out with a slotted spoon onto a paper-towel-lined cutting board. Pat it dry with another paper towel; wet yuca steams instead of crisping.",
        "Place the dried yuca in a large bowl and toss it with the oil. Season with chilli powder, salt and pepper and toss again to coat evenly. Spread it on a large baking sheet in an even layer.",
        "Bake until golden and crispy, about 25 minutes, tossing halfway through.",
        "Meanwhile make the dipping sauce: in a small food processor or blender, combine the avocado, sour cream, lime juice and coriander and blend until smooth. Season with salt and pepper.",
        "Serve the fries immediately, with the dipping sauce."
      ]
    },
    nl: {
      fixes: [1],
      subtitle: "Eerst koken, dan heet roosteren — anders wordt yuca nooit krokant",
      description: "Cassave is te compact om rauw te roosteren. Kook ze tot een vork er zo in glijdt, dep ze grondig droog en geef ze dan een hete oven. De vezelige streng in het midden van elk stuk is oneetbaar en moet eruit.",
      instructions: [
        "Verwarm de oven voor op 230 °C. Breng een grote pot water aan de kook. Snijd de uiteinden van de yuca af en snijd elke wortel dwars doormidden. Zet de stukken rechtop en snijd met een scherp mes de wasachtige schil eraf. Snijd elk stuk in de lengte doormidden, en dan nog eens, zodat je 16 stukken hebt. Snijd uit elk stuk de vezelige kern weg — die wordt nooit zacht.",
        "Doe de gesneden yuca in het kokende water en kook tot een vork er makkelijk in gaat, 8 tot 10 minuten. Schep ze eruit met een schuimspaan op een snijplank met keukenpapier. Dep ze droog met nog een vel; natte yuca stoomt in plaats van krokant te worden.",
        "Doe de droge yuca in een grote kom en schep ze om met de olie. Kruid met chilipoeder, zout en peper en schep nog eens om zodat alles bedekt is. Spreid ze in één laag uit op een grote bakplaat.",
        "Bak tot ze goudbruin en krokant zijn, ongeveer 25 minuten, en schud ze halverwege om.",
        "Maak ondertussen de dipsaus: doe de avocado, de zure room, het limoensap en de koriander in een kleine keukenrobot of blender en mix tot alles glad is. Breng op smaak met peper en zout.",
        "Dien de frietjes meteen op, met de dipsaus erbij."
      ]
    },
    fr: {
      fixes: [1],
      subtitle: "D'abord bouillies, puis rôties très chaud — sinon le manioc ne croustille pas",
      description: "Le manioc est trop dense pour être rôti cru. Fais-le bouillir jusqu'à ce qu'une fourchette y entre, sèche-le soigneusement, puis donne-lui un four très chaud. Le cordon fibreux au centre de chaque morceau est immangeable et doit sortir.",
      instructions: [
        "Préchauffe le four à 230 °C. Porte une grande casserole d'eau à ébullition. Coupe les extrémités du manioc et tranche chaque racine en deux dans la largeur. Pose les morceaux debout et retire la peau cireuse au couteau bien aiguisé. Coupe chaque morceau en deux dans la longueur, puis encore en deux, pour obtenir 16 morceaux en tout. Retire le cœur fibreux de chacun — il ne s'attendrit jamais.",
        "Plonge le manioc coupé dans l'eau bouillante et laisse cuire jusqu'à ce qu'une fourchette y entre sans effort, 8 à 10 minutes. Sors-le à l'écumoire sur une planche garnie de papier absorbant. Sèche-le avec une autre feuille ; humide, il cuit à la vapeur au lieu de croustiller.",
        "Mets le manioc séché dans un grand saladier et enrobe-le d'huile. Assaisonne de poudre de chili, de sel et de poivre et mélange à nouveau pour bien enrober. Étale sur une grande plaque en une seule couche.",
        "Enfourne jusqu'à ce que ce soit doré et croustillant, environ 25 minutes, en remuant à mi-cuisson.",
        "Pendant ce temps, prépare la sauce : dans un petit robot ou un blender, mixe l'avocat, la crème aigre, le jus de citron vert et la coriandre jusqu'à obtenir une texture lisse. Assaisonne de sel et de poivre.",
        "Sers les frites aussitôt, avec la sauce."
      ]
    }
  },

  // fixes on 5: the source restates its frying temperature as "300 to 320
  // grades F". It is the same range step 3 already gives in Celsius, and it is
  // put into Celsius here so the recipe does not quote two scales at once.
  "mealdb-53523": {
    en: {
      fixes: [5],
      subtitle: "Cheese dough fried in warm oil, not hot",
      description: "A ball of fresh cheese and cornflour that has to fry slowly: too hot and the outside browns before the middle has puffed, leaving a raw centre. Warm oil, and they turn themselves over when they are ready.",
      instructions: [
        "Place all the ingredients except the oil in a medium bowl and mix well with your hands, until you have a soft, smooth dough.",
        "Form small balls with your hands.",
        "In a deep pot, heat the vegetable oil to 150 °C — warm, not very hot. Carefully drop the balls into the warm oil and fry for about 3 to 4 minutes, or until golden brown.",
        "Remove them from the oil and drain on a plate lined with paper towels. Serve.",
        "Frying Colombian buñuelos at the right temperature is the whole thing. The oil must be neither very hot nor very cold: keep it between 150 and 160 °C."
      ]
    },
    nl: {
      fixes: [5],
      subtitle: "Kaasdeeg gefrituurd in warme olie, niet in hete",
      description: "Een balletje verse kaas en maïsmeel dat traag moet bakken: te heet en de buitenkant kleurt voor het midden is opgepoft, met een rauwe kern tot gevolg. Warme olie, en ze draaien zichzelf om als ze klaar zijn.",
      instructions: [
        "Doe alle ingrediënten behalve de olie in een middelgrote kom en meng alles goed met je handen, tot je een zacht, glad deeg hebt.",
        "Vorm er met je handen kleine balletjes van.",
        "Verhit de plantaardige olie in een diepe pot tot 150 °C — warm, niet erg heet. Laat de balletjes er voorzichtig in zakken en bak ze ongeveer 3 tot 4 minuten, of tot ze goudbruin zijn.",
        "Schep ze uit de olie en laat ze uitlekken op een bord met keukenpapier. Dien op.",
        "Colombiaanse buñuelos op de juiste temperatuur bakken is de hele kunst. De olie mag niet erg heet en niet te koud zijn: hou ze tussen 150 en 160 °C."
      ]
    },
    fr: {
      fixes: [5],
      subtitle: "Une pâte au fromage frite dans une huile tiède, pas brûlante",
      description: "Une boule de fromage frais et de farine de maïs qui doit frire lentement : trop chaude, la surface dore avant que le cœur ait gonflé, et l'intérieur reste cru. Huile tiède, et elles se retournent seules quand elles sont prêtes.",
      instructions: [
        "Mets tous les ingrédients sauf l'huile dans un saladier moyen et mélange bien à la main, jusqu'à obtenir une pâte souple et lisse.",
        "Forme de petites boules avec les mains.",
        "Dans une casserole profonde, chauffe l'huile végétale à 150 °C — tiède, pas très chaude. Dépose délicatement les boules dans l'huile et fais-les frire environ 3 à 4 minutes, jusqu'à ce qu'elles soient dorées.",
        "Sors-les de l'huile et égoutte-les sur une assiette garnie de papier absorbant. Sers.",
        "Frire les buñuelos colombiens à la bonne température, c'est tout le sujet. L'huile ne doit être ni très chaude ni trop froide : maintiens-la entre 150 et 160 °C."
      ]
    }
  },

  "mealdb-52779": {
    en: {
      subtitle: "A savoury cheese tart, with the tomatoes dressed and added cold",
      description: "The tomatoes never go in the oven — they are sliced, dressed in a warm honey vinaigrette and spooned over the baked tart. Lift them out of the dressing with a slotted spoon, or the liquid soaks the pastry.",
      instructions: [
        "For the crust, make a dough from 250g flour — a mix of plain and wholegrain spelt is good — with 125g butter, 1 egg and a pinch of salt. Press it into a tart form and put it in the fridge.",
        "For the filling, stir 300g cream cheese and 100ml milk until smooth, then add 3 eggs and 100g grated parmesan and season with salt, pepper and nutmeg. Take the crust out of the fridge and prick the bottom with a fork. Pour in the filling and bake at 175 degrees C for about 25 minutes.",
        "Cover the tart with aluminium foil after half the time, so the top does not colour too far. Meanwhile, slice about 350g mini tomatoes. In a small pan, warm 3tbsp olive oil, 3tbsp white vinegar, 1 tbsp honey, salt and pepper and combine well. Pour it over the tomato slices and mix.",
        "With a spoon, lay the tomato slices over the tart, leaving as much of the liquid behind as you can. Decorate with basil leaves and enjoy."
      ]
    },
    nl: {
      subtitle: "Een hartige kaastaart, met de tomaten koud en aangemaakt erop",
      description: "De tomaten gaan nooit de oven in — ze worden gesneden, aangemaakt met een lauwe honingvinaigrette en op de gebakken taart gelepeld. Schep ze met een schuimlepel uit de dressing, anders weekt het vocht het deeg.",
      instructions: [
        "Maak voor de bodem een deeg van 250g bloem — een mengeling van gewone bloem en volkoren speltmeel is lekker — met 125g boter, 1 ei en een snuif zout. Druk het in een taartvorm en zet die in de koelkast.",
        "Roer voor de vulling 300g roomkaas en 100ml melk glad, voeg dan 3 eieren en 100g geraspte parmezaan toe en breng op smaak met peper, zout en nootmuskaat. Haal de bodem uit de koelkast en prik hem in met een vork. Giet de vulling erin en bak op 175 degrees C gedurende ongeveer 25 minuten.",
        "Dek de taart na de helft van de tijd af met aluminiumfolie, zodat de bovenkant niet te ver kleurt. Snijd ondertussen ongeveer 350g kerstomaten. Verwarm in een pannetje 3tbsp olijfolie, 3tbsp witte azijn, 1 el honing, peper en zout en meng alles goed. Giet dat over de tomatenschijfjes en meng om.",
        "Leg de tomatenschijfjes met een lepel op de taart en laat zoveel mogelijk vocht achter. Werk af met blaadjes basilicum en geniet."
      ]
    },
    fr: {
      subtitle: "Une tarte salée au fromage, avec les tomates assaisonnées et ajoutées froides",
      description: "Les tomates ne vont jamais au four — elles sont tranchées, assaisonnées d'une vinaigrette tiède au miel et déposées sur la tarte cuite. Sors-les de la vinaigrette à l'écumoire, sinon le liquide détrempe la pâte.",
      instructions: [
        "Pour la pâte, fais une pâte avec 250g de farine — un mélange de farine ordinaire et d'épeautre complet est agréable — 125g de beurre, 1 œuf et une pincée de sel. Presse-la dans un moule à tarte et mets-la au réfrigérateur.",
        "Pour la garniture, travaille 300g de fromage frais et 100ml de lait jusqu'à ce que ce soit lisse, ajoute 3 œufs et 100g de parmesan râpé et assaisonne de sel, de poivre et de muscade. Sors le fond de tarte du réfrigérateur et pique-le à la fourchette. Verse la garniture et enfourne à 175 degrees C environ 25 minutes.",
        "Couvre la tarte d'une feuille d'aluminium à mi-cuisson, pour que le dessus ne colore pas trop. Pendant ce temps, tranche environ 350g de tomates cerises. Dans une petite poêle, fais tiédir 3tbsp d'huile d'olive, 3tbsp de vinaigre blanc, 1 cuillère à soupe de miel, du sel et du poivre et mélange bien. Verse sur les tranches de tomates et mélange.",
        "À la cuillère, dispose les tranches de tomates sur la tarte en laissant le plus de liquide possible derrière. Décore de feuilles de basilic et régale-toi."
      ]
    }
  },

  "mealdb-53494": {
    en: {
      subtitle: "Banitsa without the pastry, which is the whole trick",
      description: "Bulgarian cheese pie rebuilt without filo: eggs, butter and three cheeses baked into a set slab. It firms up as it cools, so let it sit in the tin before cutting or it falls apart.",
      instructions: [
        "Preheat the oven to 180 °C.",
        "Beat the eggs in a bowl with a whisk — no mixer needed.",
        "Slowly add the melted butter, whisking to incorporate it.",
        "Add the cheeses — mozzarella, feta and cream cheese — and stir to combine. Then add the baking powder and whisk again.",
        "Grease a 20x20 cm square baking dish with butter and pour the mixture in. Top with sesame seeds if you like.",
        "Bake for 20 minutes, until golden.",
        "Let it cool for 5-10 minutes in the pan, then cut it into pieces and serve.",
        "Keep it in the fridge for up to 3 days."
      ]
    },
    nl: {
      subtitle: "Banitsa zonder deeg, en dat is de hele truc",
      description: "Bulgaarse kaastaart heropgebouwd zonder filodeeg: eieren, boter en drie kazen gebakken tot een stevige plaat. Ze wordt vaster terwijl ze afkoelt, dus laat ze in de vorm staan voor je snijdt, anders valt ze uit elkaar.",
      instructions: [
        "Verwarm de oven voor op 180 °C.",
        "Klop de eieren los in een kom met een garde — geen mixer nodig.",
        "Voeg de gesmolten boter traag toe terwijl je blijft kloppen.",
        "Doe de kazen erbij — mozzarella, feta en roomkaas — en roer alles door elkaar. Voeg dan het bakpoeder toe en klop opnieuw.",
        "Vet een vierkante ovenschaal van 20x20 cm in met boter en giet het mengsel erin. Bestrooi met sesamzaad als je wil.",
        "Bak 20 minuten, tot alles goudbruin is.",
        "Laat het 5-10 minuten afkoelen in de vorm, snijd het dan in stukken en dien op.",
        "Bewaar tot 3 dagen in de koelkast."
      ]
    },
    fr: {
      subtitle: "Une banitsa sans pâte, et c'est là tout le tour de main",
      description: "La tourte au fromage bulgare reconstruite sans filo : des œufs, du beurre et trois fromages cuits en une plaque ferme. Elle raffermit en refroidissant, alors laisse-la dans le moule avant de couper, sinon elle se défait.",
      instructions: [
        "Préchauffe le four à 180 °C.",
        "Bats les œufs dans un saladier au fouet — pas besoin de batteur.",
        "Ajoute lentement le beurre fondu, en fouettant pour l'incorporer.",
        "Ajoute les fromages — mozzarella, feta et fromage frais — et mélange. Ajoute ensuite la levure et fouette à nouveau.",
        "Beurre un plat carré de 20x20 cm et verse le mélange dedans. Parsème de graines de sésame si tu veux.",
        "Enfourne 20 minutes, jusqu'à ce que ce soit doré.",
        "Laisse tiédir 5-10 minutes dans le plat, puis coupe en parts et sers.",
        "Conserve au réfrigérateur jusqu'à 3 jours."
      ]
    }
  },

  // Step 1 was the heading "Prepare" on its own.
  "mealdb-53408": {
    dropSteps: [1],
    en: {
      subtitle: "Turkish soda bread, flattened by hand and marked with a fork",
      description: "Flour and yogurt and nothing else to raise it but soda. The fork marks are not decoration — they let the heat into a thick round that would otherwise stay raw in the middle.",
      instructions: [
        "On a large baking tray or a clean work surface, mix together the dry ingredients — flour, baking soda and salt.",
        "Make a well in the middle and add the yogurt. Using your hands, slowly bring the ingredients together to start forming a dough.",
        "Knead the dough on a floured surface, adding extra flour if the texture is too sticky. It is ready when it has the texture of pizza dough and is still very slightly sticky; this should only take a few minutes.",
        "Add a little oil to a baking tray and put the dough on top. Shape and flatten it into a circle, keeping the height of the dough at about 5cm.",
        "Cover the dough with a little olive oil, making sure it is fully covered.",
        "You can bake the kulaç as it is, or make patterns in it, which also helps it cook evenly. The commonest are pressing the back of a fork all over to leave lines of dents, or spiking the dough with the fork.",
        "Place it on the bottom shelf of a preheated oven. Bake for 40 minutes, or until the dough is golden and firm to the touch.",
        "Once out of the oven, stand it upright or put it on a cooling rack so the kulaç can cool without going soggy underneath.",
        "Cut the kulaç the way you would a cake, into 8 slices. If you are serving it warm, you may prefer to snap and pull the bread apart with your hands."
      ]
    },
    nl: {
      subtitle: "Turks sodabrood, met de hand platgedrukt en met een vork getekend",
      description: "Bloem en yoghurt, en niets anders dan soda om het te doen rijzen. De vorkafdrukken zijn geen versiering — ze laten de hitte binnen in een dikke koek die anders vanbinnen rauw blijft.",
      instructions: [
        "Meng de droge ingrediënten — bloem, baksoda en zout — op een grote bakplaat of een schoon werkblad.",
        "Maak een kuiltje in het midden en doe de yoghurt erin. Breng de ingrediënten met je handen traag samen tot er een deeg begint te ontstaan.",
        "Kneed het deeg op een bebloemd werkblad en voeg extra bloem toe als het te plakkerig aanvoelt. Het is klaar wanneer het de structuur van pizzadeeg heeft en nog heel licht plakt; dat duurt maar een paar minuten.",
        "Doe wat olie op een bakplaat en leg het deeg erop. Vorm en druk het plat tot een cirkel, met een deeghoogte van ongeveer 5cm.",
        "Bedek het deeg met wat olijfolie en zorg dat het helemaal bedekt is.",
        "Je kan de kulaç zo bakken, of er patronen in maken, wat ook helpt om hem gelijkmatig te garen. De meest voorkomende zijn met de rug van een vork lijnen in het deeg drukken, of het deeg overal met de vork inprikken.",
        "Zet hem op het onderste rooster van een voorverwarmde oven. Bak 40 minuten, of tot het deeg goudbruin is en stevig aanvoelt.",
        "Zet hem zodra hij uit de oven komt rechtop of op een rooster, zodat de kulaç kan afkoelen zonder aan de onderkant klam te worden.",
        "Snijd de kulaç zoals je een taart zou snijden, in 8 punten. Dien je hem warm op, dan wil je hem misschien liever met de handen breken en uit elkaar trekken."
      ]
    },
    fr: {
      subtitle: "Un pain turc au bicarbonate, aplati à la main et marqué à la fourchette",
      description: "De la farine et du yaourt, et rien d'autre que du bicarbonate pour le lever. Les marques de fourchette ne sont pas un décor : elles laissent entrer la chaleur dans une galette épaisse qui resterait crue au centre.",
      instructions: [
        "Sur une grande plaque ou un plan de travail propre, mélange les ingrédients secs — farine, bicarbonate et sel.",
        "Creuse un puits au centre et ajoute le yaourt. Avec les mains, rassemble lentement les ingrédients pour commencer à former une pâte.",
        "Pétris la pâte sur un plan fariné, en ajoutant de la farine si elle colle trop. Elle est prête quand elle a la texture d'une pâte à pizza et colle encore très légèrement ; cela ne prend que quelques minutes.",
        "Verse un peu d'huile sur une plaque et pose la pâte dessus. Façonne-la et aplatis-la en cercle, en gardant une épaisseur d'environ 5cm.",
        "Couvre la pâte d'un peu d'huile d'olive, en veillant à ce qu'elle soit entièrement enrobée.",
        "Tu peux cuire le kulaç tel quel, ou y dessiner des motifs, ce qui aide aussi à une cuisson uniforme. Les plus courants sont de presser le dos d'une fourchette partout pour laisser des lignes, ou de piquer la pâte à la fourchette.",
        "Place-le sur la grille du bas d'un four préchauffé. Cuis 40 minutes, ou jusqu'à ce que la pâte soit dorée et ferme au toucher.",
        "À la sortie du four, pose-le debout ou sur une grille pour que le kulaç refroidisse sans ramollir en dessous.",
        "Coupe le kulaç comme un gâteau, en 8 parts. Si tu le sers tiède, tu préféreras peut-être le rompre et le partager à la main."
      ]
    }
  },

  "mealdb-52922": {
    en: {
      subtitle: "The shells are the stock, and the sieve is the texture",
      description: "Prawn shells fried hard for their flavour, then the whole soup pushed through a sieve. That pressing is not a formality — it is the only thing standing between a gritty soup and a velvety one.",
      instructions: [
        "Shell the prawns, then fry the shells in the oil in a large pan for about 5 mins — they should turn deep pink and smell sweet. Add the onion, fennel and carrots and cook for about 10 mins until the veg start to soften. Pour in the wine and brandy, bubble hard for about 1 min to drive off the alcohol, then add the tomatoes, stock and paprika. Cover and simmer for 30 mins. Meanwhile, chop the prawns.",
        "Blitz the soup as finely as you can with a stick blender or food processor, then press it through a sieve into a bowl. Spend real time working the mixture through — this is what gives the soup its velvety texture.",
        "Tip it back into a clean pan, add the prawns and cook for 10 mins, then blitz again until smooth. You can make and chill this a day ahead, or freeze it for 1 month and thaw it overnight in the fridge. To serve, gently reheat it in a pan with the cream. If you are garnishing, cook the 8 prawns in a little butter. Spoon into small bowls and top with the prawns and snipped fennel fronds."
      ]
    },
    nl: {
      subtitle: "De pantsers zijn de bouillon, en de zeef is de textuur",
      description: "Garnalenpantsers stevig gebakken voor hun smaak, en dan de hele soep door een zeef geduwd. Dat duwen is geen formaliteit — het is het enige wat een korrelige soep van een fluweelzachte scheidt.",
      instructions: [
        "Pel de garnalen en bak de pantsers ongeveer 5 minuten in de olie in een grote pot — ze moeten diep roze kleuren en zoet ruiken. Doe de ui, de venkel en de wortelen erbij en gaar ongeveer 10 minuten tot de groenten zacht beginnen te worden. Giet de wijn en de brandy erbij, laat ongeveer 1 minuut stevig doorkoken om de alcohol te verdrijven, en voeg dan de tomaten, de bouillon en de paprikapoeder toe. Dek af en laat 30 minuten sudderen. Snijd ondertussen de garnalen.",
        "Mix de soep zo fijn als je kan met een staafmixer of keukenrobot, en duw ze daarna door een zeef in een kom. Neem er echt de tijd voor — dat is wat de soep haar fluwelen textuur geeft.",
        "Giet ze terug in een schone pot, doe de garnalen erbij en gaar 10 minuten, en mix daarna opnieuw glad. Je kan dit een dag vooraf maken en koud zetten, of 1 maand invriezen en een nacht in de koelkast laten ontdooien. Warm de soep om op te dienen zachtjes op in een pot met de room. Bak voor de garnering de 8 garnalen in wat boter. Schep in kleine kommen en werk af met de garnalen en wat geknipt venkelgroen."
      ]
    },
    fr: {
      subtitle: "Les carapaces font le bouillon, et le tamis fait la texture",
      description: "Des carapaces de gambas bien saisies pour leur goût, puis toute la soupe poussée au tamis. Ce passage n'est pas une formalité : c'est la seule chose qui sépare une soupe granuleuse d'une soupe veloutée.",
      instructions: [
        "Décortique les gambas, puis fais revenir les carapaces dans l'huile dans une grande casserole environ 5 minutes — elles doivent virer au rose foncé et sentir bon. Ajoute l'oignon, le fenouil et les carottes et fais cuire environ 10 minutes jusqu'à ce que les légumes commencent à fondre. Verse le vin et le brandy, laisse bouillonner fort environ 1 minute pour évaporer l'alcool, puis ajoute les tomates, le bouillon et le paprika. Couvre et laisse mijoter 30 minutes. Pendant ce temps, coupe les gambas.",
        "Mixe la soupe aussi finement que possible au mixeur plongeant ou au robot, puis passe-la au tamis dans un saladier. Prends vraiment le temps de la pousser à travers — c'est ce qui donne à la soupe sa texture veloutée.",
        "Reverse-la dans une casserole propre, ajoute les gambas et fais cuire 10 minutes, puis mixe à nouveau jusqu'à ce que ce soit lisse. Tu peux la préparer et la réfrigérer la veille, ou la congeler 1 mois et la décongeler une nuit au réfrigérateur. Pour servir, réchauffe-la doucement dans une casserole avec la crème. Pour la garniture, fais cuire les 8 gambas dans un peu de beurre. Répartis dans de petits bols et couronne des gambas et de pluches de fenouil ciselées."
      ]
    }
  }
};
