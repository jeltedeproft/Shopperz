/**
 * Canonical ingredient dictionary.
 *
 * One source of truth for: what an ingredient is called, which supermarket
 * aisle it belongs to, which unit it is measured in, and whether it is a
 * pantry staple you almost certainly already own.
 *
 * Used by the browser app (window.Ingredients) and by the node import /
 * normalisation scripts (module.exports), so imported recipes and hand-written
 * ones end up with exactly the same shape.
 */
(function (root) {
  'use strict';

  // ---------------------------------------------------------------------------
  // Aisles, in the order you walk a Belgian supermarket
  // ---------------------------------------------------------------------------
  var AISLES = [
    'Groenten & Fruit',       // produce
    'Visafdeling',            // fish counter
    'Slagerij & Gevogelte',   // butcher
    'Zuivel & Eieren',        // dairy & eggs
    'Bakkerij',               // bread counter
    'Diepvries',              // frozen
    'Kruiden & Specerijen',   // herbs & spices
    'Kruidenier',             // dry grocery
    'Bieren & Dranken'        // drinks
  ];

  var DEFAULT_AISLE = 'Kruidenier';

  // ---------------------------------------------------------------------------
  // Units
  //
  // Everything is converted into this closed set so amounts can be merged.
  // Countable units hold whole things (2 onions, not 1.3 onions).
  // ---------------------------------------------------------------------------
  var COUNTABLE_UNITS = [
    'st.', 'slices', 'can', 'bottle', 'package', 'bunch', 'sprig',
    'head', 'handful', 'stalk', 'loaf', 'leaf', 'clove'
  ];

  // Units that describe a vague quantity: never scaled, never summed.
  var VAGUE_UNITS = ['to taste', 'pinch', 'dash', 'drop'];

  // Simple renames: raw unit -> canonical unit (no amount change).
  var UNIT_ALIASES = {
    'gram': 'g', 'grams': 'g', 'gr': 'g', 'gramme': 'g', 'grammes': 'g',
    'kilogram': 'kg', 'kilograms': 'kg', 'kilo': 'kg',
    'milliliter': 'ml', 'milliliters': 'ml', 'millilitre': 'ml', 'ml.': 'ml',
    'tablespoon': 'el', 'tablespoons': 'el', 'tbsp': 'el', 'tbsps': 'el',
    'tbs': 'el', 'tb': 'el', 'eetlepel': 'el', 'eetlepels': 'el',
    'teaspoon': 'kl', 'teaspoons': 'kl', 'tsp': 'kl', 'tsps': 'kl',
    't': 'kl', 'koffielepel': 'kl',
    'piece': 'st.', 'pieces': 'st.', 'pcs': 'st.', 'stuk': 'st.',
    'stuks': 'st.', 'st': 'st.', 'x': 'st.',
    'large': 'st.', 'medium': 'st.', 'small': 'st.', 'jumbo': 'st.',
    'medium size': 'st.', 'large size': 'st.', 'extra large': 'st.',
    'clove': 'st.', 'cloves': 'st.', 'large clove': 'st.', 'large cloves': 'st.',
    'slice': 'slices', 'sneetje': 'slices', 'rashers': 'slices', 'rasher': 'slices',
    'cans': 'can', 'large can': 'can', 'tin': 'can', 'tins': 'can',
    'bottles': 'bottle', 'fles': 'bottle',
    'pkg': 'package', 'pkgs': 'package', 'packages': 'package',
    'box': 'package', 'boxes': 'package', 'packet': 'package', 'pak': 'package',
    'bundle': 'bunch', 'bunches': 'bunch', 'bos': 'bunch',
    'sprigs': 'sprig', 'takje': 'sprig',
    'heads': 'head',
    'small handful': 'handful', 'handfuls': 'handful',
    'stalks': 'stalk', 'stengel': 'stalk',
    'loaves': 'loaf',
    'leaves': 'leaf',
    'pinches': 'pinch', 'snuifje': 'pinch',
    'drops': 'drop',
    'dashes': 'dash',
    'naar smaak': 'to taste', 'au gout': 'to taste', 'au goût': 'to taste',
    'serving': 'to taste', 'servings': 'to taste'
  };

  // Conversions: raw unit -> { unit, factor }. amount is multiplied by factor.
  var UNIT_CONVERSIONS = {
    'oz': { unit: 'g', factor: 28.35 },
    'ounce': { unit: 'g', factor: 28.35 },
    'ounces': { unit: 'g', factor: 28.35 },
    'lb': { unit: 'g', factor: 453.6 },
    'lbs': { unit: 'g', factor: 453.6 },
    'pound': { unit: 'g', factor: 453.6 },
    'pounds': { unit: 'g', factor: 453.6 },
    'fl oz': { unit: 'ml', factor: 29.57 },
    'fluid ounce': { unit: 'ml', factor: 29.57 },
    'fluid ounces': { unit: 'ml', factor: 29.57 },
    'pint': { unit: 'ml', factor: 473 },
    'pints': { unit: 'ml', factor: 473 },
    'quart': { unit: 'ml', factor: 946 },
    'quarts': { unit: 'ml', factor: 946 },
    'gallon': { unit: 'ml', factor: 3785 },
    'liter': { unit: 'ml', factor: 1000 },
    'liters': { unit: 'ml', factor: 1000 },
    'litre': { unit: 'ml', factor: 1000 },
    'l': { unit: 'ml', factor: 1000 },
    'dl': { unit: 'ml', factor: 100 },
    'cl': { unit: 'ml', factor: 10 },
    'stick': { unit: 'g', factor: 113 },   // stick of butter
    'sticks': { unit: 'g', factor: 113 },
    '(12 oz.)': { unit: 'g', factor: 340 }
  };

  // Ingredients measured by volume in cups that are actually liquids.
  var LIQUID_RE = /water|milk|melk|lait|cream|room|cr[eè]me|oil|olie|huile|juice|sap|jus|vinegar|azijn|vinaigre|broth|stock|bouillon|beer|bier|wine|wijn|vin|syrup|siroop|sirop|sauce|saus|yog|buttermilk/i;

  // ---------------------------------------------------------------------------
  // Aisle rules
  //
  // EXCEPTIONS win over KEYWORDS ("eggplant" is not dairy, "peanut butter" is
  // not dairy, "red wine vinegar" is not a drink). Matched on the whole name.
  // ---------------------------------------------------------------------------
  var AISLE_EXCEPTIONS = [
    [/eggplant|aubergine/i, 'Groenten & Fruit'],
    [/egg noodle/i, 'Kruidenier'],
    [/nutmeg|muskaat|noix de muscade/i, 'Kruiden & Specerijen'],
    [/peanut butter|pindakaas|cocoa butter|butter bean|apple butter/i, 'Kruidenier'],
    [/coconut milk|coconut cream|kokosmelk/i, 'Kruidenier'],
    [/cream of tartar|creamer/i, 'Kruidenier'],
    [/ice cream|roomijs|cr[eè]me glac|sorbet/i, 'Diepvries'],
    [/vegetable oil|plantaardige olie|huile v[eé]g[eé]tale|sunflower oil|zonnebloemolie/i, 'Kruidenier'],
    [/(orange|apple|pineapple|pomegranate|grape|multivitamin) juice|sinaasappelsap|appelsap/i, 'Bieren & Dranken'],
    [/milk chocolate|chocolate milk powder|malt powder/i, 'Kruidenier'],
    [/vinegar|azijn|vinaigre/i, 'Kruidenier'],
    [/wine gum|cooking wine/i, 'Kruidenier'],
    [/(chicken|beef|vegetable|fish|bone|veal) (broth|stock)|stock cube|bouillon|fond de/i, 'Kruidenier'],
    [/breadcrumb|paneermeel|chapelure|bread flour/i, 'Kruidenier'],
    [/lemon juice|lime juice|citroensap|limoensap|jus de citron|juice of/i, 'Groenten & Fruit'],
    [/green bean|haricot vert|sperzieboon|snijboon|prinsessenboon/i, 'Groenten & Fruit'],
    [/split pea|spliterwt|pois cass|lentil|linze|lentille|dried bean|droge boon|chickpea|kikkererwt|pois chiche/i, 'Kruidenier'],
    [/frozen|diepvries|surgel/i, 'Diepvries'],
    [/dried (herb|oregano|thyme|basil|parsley|rosemary|sage|mint|dill)/i, 'Kruiden & Specerijen'],
    [/vanilla extract|almond extract|lemon extract|vanille-extract|extrait/i, 'Kruidenier'],
    [/baking powder|baking soda|bakpoeder|zuiveringszout|levure/i, 'Kruidenier'],
    [/(garlic|onion|chili|curry|cumin|paprika|ginger|mustard) powder/i, 'Kruiden & Specerijen'],
    [/tomato (sauce|paste|puree)|tomatenpuree|passata|canned tomato/i, 'Kruidenier'],
    [/pearl sugar|parelsuiker|sucre perl/i, 'Kruidenier'],
    [/puff pastry|bladerdeeg|videekop|p[aâ]te feuillet/i, 'Diepvries']
  ];

  var AISLE_KEYWORDS = [
    ['Visafdeling', [
      'mussel', 'mossel', 'moule', 'shrimp', 'prawn', 'garnaal', 'garnalen',
      'crevette', 'fish', 'vis', 'poisson', 'salmon', 'zalm', 'saumon',
      'tuna', 'tonijn', 'thon', 'cod', 'kabeljauw', 'crab', 'krab', 'lobster',
      'kreeft', 'squid', 'calamari', 'inktvis', 'anchovy', 'ansjovis',
      'sardine', 'scallop', 'sint-jakobs', 'herring', 'haring', 'trout',
      'forel', 'mackerel', 'makreel', 'seafood', 'zeevruchten', 'oyster',
      'oester', 'clam', 'mosselen', 'eel', 'paling', 'anguille', 'pike',
      'snoek', 'brochet', 'sole', 'tongschar', 'turbot', 'tarbot'
    ]],
    ['Slagerij & Gevogelte', [
      'beef', 'rund', 'boeuf', 'chuck', 'steak', 'stoofvlees', 'carbonnade',
      'pork', 'varken', 'porc', 'lamb', 'lam', 'agneau', 'chicken', 'kip',
      'poulet', 'turkey', 'kalkoen', 'dinde', 'duck', 'eend', 'canard',
      'veal', 'kalf', 'veau', 'bacon', 'spek', 'lardon', 'ham', 'hesp',
      'jambon', 'sausage', 'worst', 'saucisse', 'salami', 'chorizo',
      'prosciutto', 'mince', 'gehakt', 'hach', 'oxtail', 'ossenstaart',
      'ribs', 'spare rib', 'loin', 'brisket', 'meat', 'vlees', 'viande',
      'poultry', 'gevogelte', 'breast', 'filet', 'thigh', 'drumstick',
      'cutlet', 'kotelet', 'escalope', 'rasher', 'pancetta', 'rabbit',
      'konijn', 'lapin', 'venison', 'hert', 'goose', 'gans', 'pheasant',
      'fazant', 'liver', 'lever', 'kidney', 'beef fat', 'ossewit'
    ]],
    ['Zuivel & Eieren', [
      'milk', 'melk', 'lait', 'butter', 'boter', 'beurre', 'cream', 'room',
      'crème', 'creme', 'slagroom', 'cheese', 'kaas', 'fromage', 'parmesan',
      'parmigiano', 'mozzarella', 'cheddar', 'gruyère', 'gruyere', 'emmental',
      'feta', 'gouda', 'brie', 'ricotta', 'mascarpone', 'yogurt', 'yoghurt',
      'yaourt', 'egg', 'eieren', 'eidooier', 'oeuf', 'buttermilk',
      'karnemelk', 'babeurre', 'quark', 'platte kaas', 'margarine',
      'sour cream', 'zure room', 'custard', 'pudding'
    ]],
    ['Bakkerij', [
      'bread', 'brood', 'boterham', 'pain', 'baguette', 'stokbrood', 'bun',
      'broodje', 'croissant', 'pistolet', 'sandwich', 'tortilla', 'pita',
      'naan', 'brioche', 'ciabatta', 'toast', 'crouton', 'pie crust',
      'taartbodem', 'waffle', 'wafel', 'gaufre'
    ]],
    ['Kruiden & Specerijen', [
      'salt', 'zout', 'sel', 'pepper', 'peper', 'poivre', 'paprika', 'cumin',
      'komijn', 'cinnamon', 'kaneel', 'cannelle', 'cardamom', 'turmeric',
      'kurkuma', 'curry', 'oregano', 'thyme', 'tijm', 'thym', 'rosemary',
      'rozemarijn', 'romarin', 'sage', 'salie', 'bay leaf', 'laurier',
      'garam masala', 'five spice', 'seasoning', 'kruiden', 'spice',
      'specerij', 'épice', 'epice', 'cayenne', 'chili flake', 'pepper flake',
      'pepervlok', 'nutmeg', 'clove', 'kruidnagel', 'anise', 'anijs',
      'fennel seed', 'coriander seed', 'cumin seed', 'mustard seed',
      'sesame seed', 'sesamzaad', 'poppy seed', 'saffron', 'saffraan',
      'vanilla bean', 'vanillestok', 'herbes de provence', 'bouquet garni'
    ]],
    ['Groenten & Fruit', [
      'onion', 'ui', 'uien', 'oignon', 'garlic', 'knoflook', 'look', 'ail',
      'shallot', 'sjalot', 'échalote', 'echalote', 'leek', 'prei', 'poireau',
      'carrot', 'wortel', 'carotte', 'potato', 'aardappel', 'pomme de terre',
      'bintje', 'tomato', 'tomaat', 'tomaten', 'tomate', 'lettuce', 'sla',
      'laitue', 'salad', 'spinach', 'spinazie', 'épinard', 'epinard',
      'celery', 'selder', 'céleri', 'celeri', 'endive', 'witloof', 'chicon',
      'chicorée', 'chicoree', 'mushroom', 'champignon', 'paddenstoel',
      'bell pepper', 'paprika pepper', 'courgette', 'zucchini', 'cabbage',
      'kool', 'chou', 'cauliflower', 'bloemkool', 'broccoli', 'asparagus',
      'asperge', 'avocado', 'cucumber', 'komkommer', 'concombre', 'pea',
      'erwt', 'petit pois', 'corn', 'maïs', 'mais', 'lemon', 'citroen',
      'citron', 'lime', 'limoen', 'orange', 'sinaasappel', 'apple', 'appel',
      'pomme', 'banana', 'banaan', 'banane', 'pear', 'peer', 'poire',
      'berry', 'bes', 'strawberry', 'aardbei', 'fraise', 'raspberry',
      'framboos', 'blueberry', 'bosbes', 'cherry', 'kers', 'cerise', 'grape',
      'druif', 'raisin frais', 'pineapple', 'ananas', 'mango', 'peach',
      'perzik', 'pêche', 'peche', 'plum', 'pruim', 'prune', 'melon', 'kiwi',
      'ginger', 'gember', 'gingembre', 'scallion', 'spring onion',
      'green onion', 'lente-ui', 'parsley', 'peterselie', 'persil',
      'cilantro', 'coriander', 'koriander', 'basil', 'basilicum', 'basilic',
      'mint', 'munt', 'menthe', 'dill', 'dille', 'aneth', 'chive',
      'bieslook', 'ciboulette', 'zest', 'rasp', 'zeste', 'radish', 'radijs',
      'beet', 'biet', 'betterave', 'pumpkin', 'pompoen', 'turnip', 'raap',
      'artichoke', 'artisjok', 'artichaut', 'aubergine', 'chili pepper',
      'sprout', 'spruit', 'fennel', 'venkel', 'watercress', 'rucola',
      'arugula', 'herb', 'kruid vers', 'vegetable', 'groente', 'légume',
      'sorrel', 'zurkel', 'oseille', 'chervil', 'kervel', 'cerfeuil',
      'tarragon', 'dragon', 'estragon', 'lovage', 'lavas',
      'legume', 'fruit'
    ]],
    ['Bieren & Dranken', [
      'beer', 'bier', 'bière', 'biere', 'abbey', 'abdij', 'trappist',
      'lambic', 'geuze', 'wine', 'wijn', 'vin', 'champagne', 'prosecco',
      'cava', 'cider', 'cidre', 'juice', 'sap', 'jus', 'soda', 'cola',
      'tonic', 'lemonade', 'limonade', 'coffee', 'koffie', 'café', 'cafe',
      'espresso', 'tea', 'thee', 'thé', 'the', 'rum', 'whisky', 'whiskey',
      'vodka', 'gin', 'liqueur', 'likeur', 'cognac', 'brandy', 'sherry',
      'port', 'vermouth', 'frangelico', 'baileys', 'amaretto', 'kirsch',
      'water', 'eau'
    ]],
    ['Diepvries', [
      'ice cream', 'roomijs', 'glace', 'sorbet', 'frozen', 'diepvries',
      'fries', 'frieten', 'frites'
    ]]
  ];

  // ---------------------------------------------------------------------------
  // Name aliases: many spellings -> one canonical key
  // ---------------------------------------------------------------------------
  var NAME_ALIASES = {
    'garlic cloves': 'garlic', 'garlic clove': 'garlic', 'minced garlic': 'garlic',
    'cloves of garlic': 'garlic', 'fresh garlic': 'garlic',
    'onions': 'onion', 'yellow onion': 'onion', 'white onion': 'onion',
    'shallots': 'shallot',
    'egg': 'eggs', 'egg yolks': 'egg yolk', 'egg white': 'egg whites',
    'potatoes': 'potato', 'carrots': 'carrot', 'tomatoes': 'tomato',
    'apples': 'apple', 'bananas': 'banana', 'lemons': 'lemon', 'limes': 'lime',
    'bell peppers': 'bell pepper', 'red bell pepper': 'bell pepper',
    'green bell pepper': 'bell pepper', 'leeks': 'leek', 'mushrooms': 'mushroom',
    'juice of lemon': 'lemon juice', 'juice of lime': 'lime juice',
    'fresh lemon juice': 'lemon juice',
    'extra virgin olive oil': 'olive oil', 'olive oil extra virgin': 'olive oil',
    'virgin olive oil': 'olive oil',
    'sea salt': 'salt', 'kosher salt': 'salt', 'table salt': 'salt',
    'fine salt': 'salt', 'coarse salt': 'salt',
    'ground pepper': 'pepper', 'black pepper': 'pepper',
    'ground black pepper': 'pepper', 'freshly ground pepper': 'pepper',
    'granulated sugar': 'sugar', 'white sugar': 'sugar', 'caster sugar': 'sugar',
    "confectioner's sugar": 'powdered sugar', 'icing sugar': 'powdered sugar',
    'vanilla': 'vanilla extract', 'pure vanilla extract': 'vanilla extract',
    'ground cinnamon': 'cinnamon', 'ground cumin': 'cumin',
    'ground ginger': 'ginger', 'ground coriander': 'coriander',
    'all purpose flour': 'flour', 'all-purpose flour': 'flour',
    'plain flour': 'flour', 'unbleached flour': 'flour', 'white flour': 'flour',
    'parmesan cheese': 'parmesan', 'grated parmesan': 'parmesan',
    'parmigiano reggiano': 'parmesan',
    'mozzarella cheese': 'mozzarella', 'cheddar cheese': 'cheddar',
    'feta cheese': 'feta',
    'chicken breast': 'chicken breasts', 'boneless chicken breasts': 'chicken breasts',
    'skinless chicken breasts': 'chicken breasts',
    'flat leaf parsley': 'parsley', 'fresh parsley': 'parsley',
    'italian parsley': 'parsley',
    'fresh basil': 'basil', 'fresh thyme': 'thyme', 'fresh rosemary': 'rosemary',
    'fresh cilantro': 'cilantro', 'fresh coriander': 'cilantro',
    'scallions': 'scallion', 'green onions': 'scallion', 'spring onions': 'scallion',
    'canola oil': 'vegetable oil', 'sunflower oil': 'vegetable oil',
    'rolled oats': 'oats', 'old fashioned oats': 'oats',
    'whole milk': 'milk', 'non-fat milk': 'milk', 'skim milk': 'milk',
    'semi-skimmed milk': 'milk', 'full fat milk': 'milk',
    'heavy cream': 'cream', 'whipping cream': 'cream', 'double cream': 'cream',
    'bay leaves': 'bay leaf', 'walnut': 'walnuts', 'pecan': 'pecans',
    'almond': 'almonds', 'peanut': 'peanuts',
    'pepper flakes': 'chili flakes', 'red pepper flakes': 'chili flakes',
    'crushed red pepper': 'chili flakes',
    'canned tomatoes': 'tomato passata', 'chopped tomatoes': 'tomato passata',
    'salt and pepper': 'salt', // split first; alias is the fallback
    'seasoning': 'salt',
    // Fragments the importer left behind, mapped to what they actually mean.
    'half': 'cream',                                  // "half and half"
    'dsh pepper sauce': 'pepper sauce',               // "dsh" was "dash"
    'tiny drop of almond extract': 'almond extract',
    'chocolate of at least cocoa parts': 'dark chocolate',
    'bittersweet chocolate': 'dark chocolate',
    'semisweet chocolate': 'dark chocolate',
    'almond meal': 'almond flour',
    'lump crab meat': 'crab meat',
    'water-packed tuna': 'canned tuna',
    'tubular pasta': 'pasta',
    'unbleached flour': 'flour',
    'granulated white sugar': 'sugar',
    'olive oil extra virgin': 'olive oil'
  };

  // Canonical translations for the ingredients that show up most often.
  // Anything not listed here keeps the translations already present in the data.
  var NAME_TRANSLATIONS = {
    'salt': { en: 'salt', nl: 'zout', fr: 'sel' },
    'pepper': { en: 'pepper', nl: 'peper', fr: 'poivre' },
    'water': { en: 'water', nl: 'water', fr: 'eau' },
    'butter': { en: 'butter', nl: 'boter', fr: 'beurre' },
    'olive oil': { en: 'olive oil', nl: 'olijfolie', fr: "huile d'olive" },
    'vegetable oil': { en: 'vegetable oil', nl: 'plantaardige olie', fr: 'huile végétale' },
    'sugar': { en: 'sugar', nl: 'suiker', fr: 'sucre' },
    'brown sugar': { en: 'brown sugar', nl: 'bruine suiker', fr: 'cassonade' },
    'powdered sugar': { en: 'powdered sugar', nl: 'bloemsuiker', fr: 'sucre impalpable' },
    'flour': { en: 'flour', nl: 'bloem', fr: 'farine' },
    'garlic': { en: 'garlic', nl: 'knoflook', fr: 'ail' },
    'onion': { en: 'onion', nl: 'ui', fr: 'oignon' },
    'shallot': { en: 'shallot', nl: 'sjalot', fr: 'échalote' },
    'eggs': { en: 'eggs', nl: 'eieren', fr: 'oeufs' },
    'egg yolk': { en: 'egg yolk', nl: 'eidooier', fr: "jaune d'oeuf" },
    'egg whites': { en: 'egg whites', nl: 'eiwitten', fr: "blancs d'oeuf" },
    'milk': { en: 'milk', nl: 'melk', fr: 'lait' },
    'cream': { en: 'cream', nl: 'room', fr: 'crème' },
    'buttermilk': { en: 'buttermilk', nl: 'karnemelk', fr: 'babeurre' },
    'potato': { en: 'potato', nl: 'aardappel', fr: 'pomme de terre' },
    'carrot': { en: 'carrot', nl: 'wortel', fr: 'carotte' },
    'leek': { en: 'leek', nl: 'prei', fr: 'poireau' },
    'celery': { en: 'celery', nl: 'selder', fr: 'céleri' },
    'tomato': { en: 'tomato', nl: 'tomaat', fr: 'tomate' },
    'tomato passata': { en: 'chopped tomatoes', nl: 'tomatenblokjes', fr: 'tomates concassées' },
    'tomato paste': { en: 'tomato paste', nl: 'tomatenpuree', fr: 'concentré de tomates' },
    'mushroom': { en: 'mushroom', nl: 'champignon', fr: 'champignon' },
    'bell pepper': { en: 'bell pepper', nl: 'paprika', fr: 'poivron' },
    'spinach': { en: 'spinach', nl: 'spinazie', fr: 'épinards' },
    'cabbage': { en: 'cabbage', nl: 'kool', fr: 'chou' },
    'cauliflower': { en: 'cauliflower', nl: 'bloemkool', fr: 'chou-fleur' },
    'zucchini': { en: 'zucchini', nl: 'courgette', fr: 'courgette' },
    'eggplant': { en: 'eggplant', nl: 'aubergine', fr: 'aubergine' },
    'lemon': { en: 'lemon', nl: 'citroen', fr: 'citron' },
    'lemon juice': { en: 'lemon juice', nl: 'citroensap', fr: 'jus de citron' },
    'lemon zest': { en: 'lemon zest', nl: 'citroenrasp', fr: 'zeste de citron' },
    'lime': { en: 'lime', nl: 'limoen', fr: 'citron vert' },
    'lime juice': { en: 'lime juice', nl: 'limoensap', fr: 'jus de citron vert' },
    'apple': { en: 'apple', nl: 'appel', fr: 'pomme' },
    'banana': { en: 'banana', nl: 'banaan', fr: 'banane' },
    'parsley': { en: 'parsley', nl: 'peterselie', fr: 'persil' },
    'basil': { en: 'basil', nl: 'basilicum', fr: 'basilic' },
    'thyme': { en: 'thyme', nl: 'tijm', fr: 'thym' },
    'rosemary': { en: 'rosemary', nl: 'rozemarijn', fr: 'romarin' },
    'cilantro': { en: 'cilantro', nl: 'koriander', fr: 'coriandre' },
    'scallion': { en: 'spring onion', nl: 'lente-ui', fr: 'oignon de printemps' },
    'ginger': { en: 'ginger', nl: 'gember', fr: 'gingembre' },
    'bay leaf': { en: 'bay leaf', nl: 'laurierblad', fr: 'feuille de laurier' },
    'cinnamon': { en: 'cinnamon', nl: 'kaneel', fr: 'cannelle' },
    'cumin': { en: 'cumin', nl: 'komijn', fr: 'cumin' },
    'paprika': { en: 'paprika powder', nl: 'paprikapoeder', fr: 'paprika' },
    'chili flakes': { en: 'chili flakes', nl: 'chilivlokken', fr: 'flocons de piment' },
    'nutmeg': { en: 'nutmeg', nl: 'nootmuskaat', fr: 'noix de muscade' },
    'vanilla extract': { en: 'vanilla extract', nl: 'vanille-extract', fr: 'extrait de vanille' },
    'baking powder': { en: 'baking powder', nl: 'bakpoeder', fr: 'levure chimique' },
    'baking soda': { en: 'baking soda', nl: 'zuiveringszout', fr: 'bicarbonate de soude' },
    'vinegar': { en: 'vinegar', nl: 'azijn', fr: 'vinaigre' },
    'mustard': { en: 'mustard', nl: 'mosterd', fr: 'moutarde' },
    'honey': { en: 'honey', nl: 'honing', fr: 'miel' },
    'chicken broth': { en: 'chicken stock', nl: 'kippenbouillon', fr: 'bouillon de poule' },
    'chicken breasts': { en: 'chicken breasts', nl: 'kipfilet', fr: 'filet de poulet' },
    'bacon': { en: 'bacon', nl: 'spek', fr: 'lard' },
    'ground beef': { en: 'ground beef', nl: 'rundsgehakt', fr: 'haché de boeuf' },
    'bread': { en: 'bread', nl: 'brood', fr: 'pain' },
    'rice': { en: 'rice', nl: 'rijst', fr: 'riz' },
    'oats': { en: 'oats', nl: 'havermout', fr: 'flocons d’avoine' },
    'parmesan': { en: 'parmesan', nl: 'parmezaan', fr: 'parmesan' },
    'mozzarella': { en: 'mozzarella', nl: 'mozzarella', fr: 'mozzarella' },
    'cheddar': { en: 'cheddar', nl: 'cheddar', fr: 'cheddar' },
    'feta': { en: 'feta', nl: 'feta', fr: 'feta' },
    'walnuts': { en: 'walnuts', nl: 'walnoten', fr: 'noix' },
    'almonds': { en: 'almonds', nl: 'amandelen', fr: 'amandes' },
    'peanuts': { en: 'peanuts', nl: 'pinda’s', fr: 'cacahuètes' },
    'pecans': { en: 'pecans', nl: 'pecannoten', fr: 'noix de pécan' },
    'chocolate': { en: 'chocolate', nl: 'chocolade', fr: 'chocolat' },
    'soy sauce': { en: 'soy sauce', nl: 'sojasaus', fr: 'sauce soja' },
    // Second pass: the ingredients that turn up most often across the database,
    // plus the ones the machine translator got wrong. "Shortening" had become
    // "verkorting"/"raccourcissement" (the abstract noun), "almond meal" was
    // "amandel maaltijd" (a meal you sit down to) and "lump crab meat" was
    // "forfaitair krabvlees" (a lump-sum payment).
    'shortening': { en: 'shortening', nl: 'bakvet', fr: 'graisse végétale' },
    'almond flour': { en: 'almond flour', nl: 'amandelmeel', fr: "poudre d'amandes" },
    'crab meat': { en: 'crab meat', nl: 'krabvlees', fr: 'chair de crabe' },
    'canned tuna': { en: 'canned tuna', nl: 'tonijn uit blik', fr: 'thon en boîte' },
    'pepper sauce': { en: 'pepper sauce', nl: 'pepersaus', fr: 'sauce au poivre' },
    'dark chocolate': { en: 'dark chocolate', nl: 'pure chocolade', fr: 'chocolat noir' },
    'worcestershire sauce': { en: 'Worcestershire sauce', nl: 'worcestersaus', fr: 'sauce Worcestershire' },
    'cream cheese': { en: 'cream cheese', nl: 'roomkaas', fr: 'fromage frais' },
    'sour cream': { en: 'sour cream', nl: 'zure room', fr: 'crème aigre' },
    'yogurt': { en: 'yogurt', nl: 'yoghurt', fr: 'yaourt' },
    'grated cheese': { en: 'grated cheese', nl: 'geraspte kaas', fr: 'fromage râpé' },
    'orange juice': { en: 'orange juice', nl: 'sinaasappelsap', fr: "jus d'orange" },
    'maple syrup': { en: 'maple syrup', nl: 'ahornsiroop', fr: "sirop d'érable" },
    'mayonnaise': { en: 'mayonnaise', nl: 'mayonaise', fr: 'mayonnaise' },
    'ketchup': { en: 'ketchup', nl: 'ketchup', fr: 'ketchup' },
    'peas': { en: 'peas', nl: 'erwten', fr: 'petits pois' },
    'green beans': { en: 'green beans', nl: 'prinsessenbonen', fr: 'haricots verts' },
    'corn': { en: 'corn', nl: 'maïs', fr: 'maïs' },
    'strawberries': { en: 'strawberries', nl: 'aardbeien', fr: 'fraises' },
    'cherries': { en: 'cherries', nl: 'kersen', fr: 'cerises' },
    'raisins': { en: 'raisins', nl: 'rozijnen', fr: 'raisins secs' },
    'figs': { en: 'figs', nl: 'vijgen', fr: 'figues' },
    'pineapple': { en: 'pineapple', nl: 'ananas', fr: 'ananas' },
    'avocado': { en: 'avocado', nl: 'avocado', fr: 'avocat' },
    'artichokes': { en: 'artichokes', nl: 'artisjokken', fr: 'artichauts' },
    'cocoa powder': { en: 'cocoa powder', nl: 'cacaopoeder', fr: 'poudre de cacao' },
    'chocolate chips': { en: 'chocolate chips', nl: 'chocoladestukjes', fr: 'pépites de chocolat' },
    'garlic powder': { en: 'garlic powder', nl: 'knoflookpoeder', fr: "poudre d'ail" },
    'onion powder': { en: 'onion powder', nl: 'uienpoeder', fr: "poudre d'oignon" },
    'chili powder': { en: 'chili powder', nl: 'chilipoeder', fr: 'poudre de chili' },
    'curry powder': { en: 'curry powder', nl: 'kerriepoeder', fr: 'poudre de curry' },
    'cayenne pepper': { en: 'cayenne pepper', nl: 'cayennepeper', fr: 'poivre de Cayenne' },
    'oregano': { en: 'oregano', nl: 'oregano', fr: 'origan' },
    'sesame seeds': { en: 'sesame seeds', nl: 'sesamzaad', fr: 'graines de sésame' },
    'cumin seeds': { en: 'cumin seeds', nl: 'komijnzaad', fr: 'graines de cumin' },
    'almond extract': { en: 'almond extract', nl: 'amandelextract', fr: "extrait d'amande" },
    'lemon extract': { en: 'lemon extract', nl: 'citroenextract', fr: 'extrait de citron' },
    'cornstarch': { en: 'cornflour', nl: 'maïzena', fr: 'maïzena' },
    'dry yeast': { en: 'dry yeast', nl: 'droge gist', fr: 'levure sèche' },
    'oil': { en: 'oil', nl: 'olie', fr: 'huile' },
    'sesame oil': { en: 'sesame oil', nl: 'sesamolie', fr: 'huile de sésame' },
    'coconut oil': { en: 'coconut oil', nl: 'kokosolie', fr: 'huile de coco' },
    'apple cider vinegar': { en: 'cider vinegar', nl: 'appelazijn', fr: 'vinaigre de cidre' },
    'red wine vinegar': { en: 'red wine vinegar', nl: 'rode wijnazijn', fr: 'vinaigre de vin rouge' },
    'spaghetti': { en: 'spaghetti', nl: 'spaghetti', fr: 'spaghetti' },
    'pasta': { en: 'pasta', nl: 'pasta', fr: 'pâtes' },
    'couscous': { en: 'couscous', nl: 'couscous', fr: 'couscous' },
    'brown rice': { en: 'brown rice', nl: 'zilvervliesrijst', fr: 'riz complet' },
    'cake flour': { en: 'cake flour', nl: 'patisseriebloem', fr: 'farine à gâteau' },
    'pastry flour': { en: 'pastry flour', nl: 'patisseriebloem', fr: 'farine à pâtisserie' },
    'tapioca flour': { en: 'tapioca flour', nl: 'tapiocazetmeel', fr: 'farine de tapioca' },
    'turbinado sugar': { en: 'raw cane sugar', nl: 'ruwe rietsuiker', fr: 'sucre de canne roux' },
    'wine': { en: 'wine', nl: 'wijn', fr: 'vin' },
    'rum': { en: 'rum', nl: 'rum', fr: 'rhum' },
    'chicken': { en: 'chicken', nl: 'kip', fr: 'poulet' },
    'chicken drumsticks': { en: 'chicken drumsticks', nl: 'kippenbouten', fr: 'pilons de poulet' },
    'ground turkey': { en: 'ground turkey', nl: 'kalkoengehakt', fr: 'dinde hachée' },
    'leg of lamb': { en: 'leg of lamb', nl: 'lamsbout', fr: "gigot d'agneau" },
    'pork loin chops': { en: 'pork chops', nl: 'varkenskoteletten', fr: 'côtes de porc' },
    'shrimp': { en: 'shrimp', nl: 'garnalen', fr: 'crevettes' },
    'mussels': { en: 'mussels', nl: 'mosselen', fr: 'moules' },
    'almond milk': { en: 'almond milk', nl: 'amandelmelk', fr: "lait d'amande" },
    'soy milk': { en: 'soy milk', nl: 'sojamelk', fr: 'lait de soja' },
    'oat cream': { en: 'oat cream', nl: 'haverroom', fr: "crème d'avoine" },
    'vegetable broth': { en: 'vegetable stock', nl: 'groentebouillon', fr: 'bouillon de légumes' },
    'tomato sauce': { en: 'tomato sauce', nl: 'tomatensaus', fr: 'sauce tomate' },
    'barbecue sauce': { en: 'barbecue sauce', nl: 'barbecuesaus', fr: 'sauce barbecue' },
    'stir-fry vegetables': { en: 'stir-fry vegetables', nl: 'roerbakgroenten', fr: 'légumes à sauter' },
    'mint leaves': { en: 'mint leaves', nl: 'muntblaadjes', fr: 'feuilles de menthe' },
    'orange zest': { en: 'orange zest', nl: 'sinaasappelrasp', fr: "zeste d'orange" },
    'tortilla chips': { en: 'tortilla chips', nl: 'tortillachips', fr: 'chips tortilla' },
    'corn tortillas': { en: 'corn tortillas', nl: 'maïstortillas', fr: 'tortillas de maïs' },
    'belgian endives': { en: 'Belgian endives', nl: 'witloof', fr: 'chicons' },
    'beef chuck': { en: 'stewing beef', nl: 'rundstoofvlees', fr: 'carbonnades de boeuf' },
    'liège syrup': { en: 'Liège syrup', nl: 'Luikse siroop', fr: 'sirop de Liège' },
    'belgian pearl sugar': { en: 'pearl sugar', nl: 'parelsuiker', fr: 'sucre perlé' }
  };

  // ---------------------------------------------------------------------------
  // Pantry staples: things you keep in the cupboard and rarely need to buy.
  // Everything in the herbs & spices aisle counts as a staple too.
  // ---------------------------------------------------------------------------
  var STAPLE_KEYS = [
    'salt', 'pepper', 'water', 'olive oil', 'vegetable oil', 'oil',
    'sunflower oil', 'sesame oil', 'sugar', 'brown sugar', 'powdered sugar',
    'flour', 'baking powder', 'baking soda', 'vanilla extract', 'vinegar',
    'apple cider vinegar', 'red wine vinegar', 'balsamic vinegar',
    'cornstarch', 'mustard', 'honey', 'soy sauce', 'worcestershire sauce',
    'mayonnaise', 'ketchup', 'chicken broth', 'vegetable broth', 'beef broth',
    'stock cube', 'shortening', 'yeast', 'dry yeast'
  ];

  // ---------------------------------------------------------------------------
  // Allergen & diet detection
  //
  // Diet flags used to be guessed at import time (isNutFree was hardcoded to
  // true, which made the "Nut-Free" filter show cakes full of walnuts). They
  // are now read off the ingredient list instead.
  //
  // Caveat worth knowing: an ingredient nobody recognises is assumed harmless,
  // so these flags are a shopping aid, not a medical guarantee.
  // ---------------------------------------------------------------------------

  // Plant milks and creams must not count as dairy. Global flag matters: an
  // ingredient carries its English, Dutch and French name in one string, so
  // every one of them has to be neutralised, not just the first.
  var NON_DAIRY_RE = /coconut milk|coconut cream|almond milk|almond cream|soy milk|soya milk|soy cream|oat milk|oat cream|rice milk|plant milk|plant cream|kokosmelk|kokosroom|amandelmelk|sojamelk|sojaroom|havermelk|haverroom|plantaardige room|lait de coco|cr[eè]me de coco|lait d'amande|cr[eè]me d'amande|lait de soja|cr[eè]me de soja|lait d'avoine|cr[eè]me d'avoine/gi;

  var ALLERGEN_PATTERNS = {
    nuts: /walnut|almond|peanut|pecan|hazelnut|cashew|pistachio|macadamia|brazil nut|pine nut|praline|marzipan|nougat|amaretto|frangelico|nutella|noten|noot|amandel|pinda|hazelnoot|cashew|walnoot|pecannoot|noix|noisette|amande|cacahu|pralin/i,
    gluten: /wheat|\bflour\b|bread|breadcrumb|panko|pasta|spaghetti|macaroni|lasagn|noodle|couscous|barley|\brye\b|semolina|cracker|cookie|biscuit|\bcake\b|pastry|tortilla|\bbeer\b|abbey|\boats?\b|rolled oats|bulgur|farro|spelt|seitan|soy sauce|\bbloem\b|brood|beschuit|deeg|koekje|\bbier\b|havermout|farine|\bpain\b|p[aâ]tes|bi[eè]re|chapelure/i,
    dairy: /\bmilk\b|butter|cheese|\bcream\b|yog|yaourt|ghee|custard|\bcurd\b|whey|casein|mascarpone|ricotta|parmesan|parmigiano|mozzarella|cheddar|feta|gouda|\bbrie\b|gruy[eè]re|emmental|buttermilk|\bmelk\b|boter|\bkaas\b|\broom\b|karnemelk|slagroom|\blait\b|beurre|fromage|cr[eè]me|babeurre/i,
    eggs: /\beggs?\b|egg yolk|egg white|mayonnaise|mayo\b|meringue|aioli|custard|eieren|eidooier|eiwit|\boeufs?\b|jaune d'oeuf|blanc d'oeuf/i,
    meat: /\bbeef\b|\bpork\b|\blamb\b|chicken|turkey|\bduck\b|\bveal\b|bacon|\bham\b|sausage|salami|chorizo|prosciutto|pancetta|\bmince\b|minced|ground (beef|pork|turkey|lamb)|gehakt|oxtail|\bribs\b|brisket|lardon|gelatin|gelatine|\brund\b|varken|\bkip\b|kalkoen|worst|\bspek\b|\bhesp\b|\bvlees\b|stoofvlees|carbonnade|\bboeuf\b|\bporc\b|poulet|jambon|saucisse|viande|agneau|rasher|chuck|\bloin\b|cutlet|rabbit|konijn|lapin|venison|hert|gibier|game bird|goose|gans|\boie\b|pheasant|fazant|liver|lever|foie|kidney|nier|\brognon/i,
    fish: /\bfish\b|salmon|\btuna\b|\bcod\b|anchov|sardine|herring|mackerel|trout|shrimp|prawn|\bcrab\b|lobster|mussel|\bclam\b|oyster|squid|calamari|scallop|seafood|\bvis\b|\bzalm\b|tonijn|garnaal|garnalen|mossel|\bkrab\b|kabeljauw|haring|poisson|saumon|\bthon\b|crevette|moule|hu[iî]tre|\beel\b|\bpaling\b|anguille|pike|snoek|brochet|perch|baars|sole\b|tongschar|turbot|tarbot|whelk|wulk|shrimps/i,
    honey: /\bhoney\b|honing|\bmiel\b/i,
    sugar: /sugar|syrup|molasses|maple|suiker|siroop|\bsucre\b|sirop|\bjam\b|jelly|confiture|chocolate|chocolade|chocolat|honey|honing|\bmiel\b/i,
    highCarb: /\bflour\b|bread|pasta|spaghetti|macaroni|noodle|\brice\b|potato|\bcorn\b|maize|sugar|\boats?\b|couscous|quinoa|tortilla|banana|\bbloem\b|brood|rijst|aardappel|suiker|\bma[iï]s\b|farine|\bpain\b|\briz\b|pomme de terre|\bsucre\b/i,
    fermented: /\byeast\b|vinegar|\bbeer\b|\bwine\b|mushroom|soy sauce|\bgist\b|azijn|\bbier\b|\bwijn\b|champignon|paddenstoel|levure|vinaigre|\bvin\b|\brum\b|whisk|vodka|liqueur|likeur/i
  };

  /** Which allergen/diet groups appear in this ingredient list? */
  function detectGroups(ingredients) {
    var found = {};
    Object.keys(ALLERGEN_PATTERNS).forEach(function (group) { found[group] = false; });

    (ingredients || []).forEach(function (ing) {
      var names = [];
      if (ing && typeof ing.name === 'object' && ing.name) {
        ['en', 'nl', 'fr'].forEach(function (l) { if (ing.name[l]) names.push(ing.name[l]); });
      } else if (ing && ing.name) {
        names.push(ing.name);
      }
      if (ing && ing.key) names.push(ing.key);

      var text = names.join(' ');
      if (!text) return;

      // "eggplant" is a vegetable, "almond milk" is not dairy.
      var eggSafe = text.replace(/eggplant|aubergine/gi, '');
      var dairySafe = text.replace(NON_DAIRY_RE, '');

      Object.keys(ALLERGEN_PATTERNS).forEach(function (group) {
        if (found[group]) return;
        var subject = group === 'eggs' ? eggSafe : (group === 'dairy' ? dairySafe : text);
        if (ALLERGEN_PATTERNS[group].test(subject)) found[group] = true;
      });
    });

    return found;
  }

  /**
   * Work out the eight diet flags from the ingredients.
   *
   * `hints` are flags from the original source (Spoonacular knows whether a
   * recipe is vegetarian). They can only make a claim stricter, never looser:
   * if either the source or the ingredients say "not vegan", it is not vegan.
   */
  function deriveDietFlags(ingredients, hints) {
    var g = detectGroups(ingredients);
    var h = hints || {};

    var nutFree = !g.nuts;
    var glutenFree = !g.gluten;
    var dairyFree = !g.dairy;
    var eggFree = !g.eggs;

    var vegetarian = !g.meat && !g.fish;
    if (h.isVegetarian === false) vegetarian = false;

    var vegan = vegetarian && dairyFree && eggFree && !g.honey;
    if (h.isVegan === false) vegan = false;

    return {
      isNutFree: nutFree,
      isGlutenFree: glutenFree,
      isDairyFree: dairyFree,
      isEggFree: eggFree,
      isVegetarian: vegetarian,
      isVegan: vegan,
      // Heuristics, deliberately conservative.
      isCandidaFriendly: glutenFree && dairyFree && !g.sugar && !g.fermented && !g.highCarb,
      isKeto: !g.highCarb && !g.sugar
    };
  }

  // Rows that are import noise rather than ingredients.
  var JUNK_NAME_RE = /^(reserved|gereserveerd|réservé|reserve|serves?|servings?|porties?|portions?|for serving|garnish|optional|to taste|naar smaak|au go[uû]t|and|en|et)$/i;

  // Compound names worth splitting into separate shopping items.
  var SPLIT_RE = /\s*(?:&|\band\b|\ben\b|\bet\b)\s*/i;

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  function stripParenthetical(name) {
    // "Butter (Boter / Beurre)" -> "Butter"
    return String(name || '').replace(/\s*\([^)]*\)\s*/g, ' ').trim();
  }

  function cleanName(name) {
    var out = stripParenthetical(name)
      .replace(/^\s*(optional|optioneel|facultatif)\s*:\s*/i, '')
      .replace(/\s*:\s*serves?\b.*$/i, '')
      // stray leading amount, e.g. "2 rashers bacon" -> "bacon"
      .replace(/^\d+(\.\d+)?\s*(g|kg|ml|l|el|kl|st\.?|x|rashers?|slices?|cloves?|sprigs?|stalks?|cups?|tbsp?|tsp?|large|medium|small|cans?|packages?|bunch(?:es)?|pieces?|stuks?|loa(?:f|ves)|heads?|bottles?|handfuls?|pinch(?:es)?|dash(?:es)?|drops?|leaves|leaf)?\s+/i, '')
      .replace(/\s+/g, ' ')
      .replace(/^[\s,;.-]+|[\s,;.-]+$/g, '')
      .trim();
    return out;
  }

  // Some canonical keys display under a different English name ("paprika" is
  // shown as "paprika powder"). Without this reverse index, normalising an
  // already-normalised database would turn the display name into a new key and
  // the merge would stop recognising it.
  var KEY_BY_DISPLAY = null;
  function keyByDisplay() {
    if (!KEY_BY_DISPLAY) {
      KEY_BY_DISPLAY = {};
      Object.keys(NAME_TRANSLATIONS).forEach(function (key) {
        var display = String(NAME_TRANSLATIONS[key].en || '').toLowerCase();
        if (display && display !== key) KEY_BY_DISPLAY[display] = key;
      });
    }
    return KEY_BY_DISPLAY;
  }

  function keyOf(name) {
    var base = cleanName(name).toLowerCase();
    if (NAME_ALIASES[base]) base = NAME_ALIASES[base];
    var canonical = keyByDisplay()[base];
    return canonical || base;
  }

  function isJunkName(name) {
    var clean = cleanName(name);
    return !clean || clean.length < 2 || JUNK_NAME_RE.test(clean);
  }

  function isCountable(unit) {
    return COUNTABLE_UNITS.indexOf(unit) > -1;
  }

  function isVague(unit) {
    return VAGUE_UNITS.indexOf(unit) > -1;
  }

  /** Amounts of countables stay whole; vague units carry no amount at all. */
  function roundAmount(amount, unit) {
    if (amount === null || amount === undefined || isNaN(amount)) return null;
    if (isVague(unit)) return null;
    if (isCountable(unit)) return Math.max(1, Math.ceil(amount - 0.001));
    if (unit === 'g' || unit === 'ml') {
      return amount >= 10 ? Math.round(amount) : Math.round(amount * 10) / 10;
    }
    return Math.round(amount * 100) / 100;
  }

  /**
   * Convert any raw unit into the canonical set.
   * Returns { amount, unit }.
   */
  function normalizeUnit(amount, unit, name) {
    var raw = String(unit === null || unit === undefined ? '' : unit).toLowerCase().trim();
    var amt = (amount === null || amount === undefined || amount === '') ? null : parseFloat(amount);
    if (isNaN(amt)) amt = null;

    if (!raw) return { amount: roundAmount(amt, 'st.'), unit: amt === null ? 'to taste' : 'st.' };

    // Mangled fractions from the importer: "3" + "/4 cup" means 3/4 cup.
    var frac = raw.match(/^\/(\d+)\s*(.*)$/);
    if (frac) {
      var denom = parseFloat(frac[1]) || 1;
      var rest = frac[2] || 'st.';
      return normalizeUnit(amt === null ? null : amt / denom, rest, name);
    }

    // Cups depend on what is being measured.
    if (/^(cup|cups|c|kop|kopje)$/.test(raw)) {
      if (LIQUID_RE.test(String(name || ''))) {
        return { amount: roundAmount(amt === null ? null : amt * 240, 'ml'), unit: 'ml' };
      }
      return { amount: roundAmount(amt === null ? null : amt * 125, 'g'), unit: 'g' };
    }

    if (UNIT_CONVERSIONS[raw]) {
      var conv = UNIT_CONVERSIONS[raw];
      // A "stick" only means butter; otherwise treat it as a piece.
      if ((raw === 'stick' || raw === 'sticks') && !/butter|boter|beurre|margarine/i.test(String(name || ''))) {
        return { amount: roundAmount(amt, 'st.'), unit: 'st.' };
      }
      return { amount: roundAmount(amt === null ? null : amt * conv.factor, conv.unit), unit: conv.unit };
    }

    if (UNIT_ALIASES[raw]) raw = UNIT_ALIASES[raw];

    if (raw === 'kg') return { amount: roundAmount(amt === null ? null : amt * 1000, 'g'), unit: 'g' };

    if (isVague(raw)) return { amount: null, unit: raw };

    // Unknown leftovers ("dsh", "bunch of something") degrade to pieces.
    var known = ['g', 'ml', 'el', 'kl'].concat(COUNTABLE_UNITS).concat(VAGUE_UNITS);
    if (known.indexOf(raw) === -1) raw = 'st.';

    return { amount: roundAmount(amt, raw), unit: raw };
  }

  /** Which aisle does this belong in? */
  function aisleFor(name) {
    var text = cleanName(name).toLowerCase();
    if (!text) return DEFAULT_AISLE;

    for (var i = 0; i < AISLE_EXCEPTIONS.length; i++) {
      if (AISLE_EXCEPTIONS[i][0].test(text)) return AISLE_EXCEPTIONS[i][1];
    }

    var best = null;
    var bestLen = 0;
    for (var a = 0; a < AISLE_KEYWORDS.length; a++) {
      var aisle = AISLE_KEYWORDS[a][0];
      var words = AISLE_KEYWORDS[a][1];
      for (var w = 0; w < words.length; w++) {
        var kw = words[w];
        if (text.indexOf(kw) > -1 && kw.length > bestLen) {
          // Prefer the longest keyword match so "bell pepper" beats "pepper".
          best = aisle;
          bestLen = kw.length;
        }
      }
    }
    return best || DEFAULT_AISLE;
  }

  function isStaple(name, aisle) {
    var key = keyOf(name);
    if (STAPLE_KEYS.indexOf(key) > -1) return true;
    if (aisle === 'Kruiden & Specerijen') return true;
    return false;
  }

  function translationsFor(key, fallback) {
    if (NAME_TRANSLATIONS[key]) {
      return {
        en: NAME_TRANSLATIONS[key].en,
        nl: NAME_TRANSLATIONS[key].nl,
        fr: NAME_TRANSLATIONS[key].fr
      };
    }
    var f = fallback || {};
    var en = cleanName(f.en || key);
    return {
      en: en || key,
      nl: cleanName(f.nl) || en || key,
      fr: cleanName(f.fr) || en || key
    };
  }

  /**
   * Turn one raw ingredient row into zero, one or more canonical ingredients.
   *
   * Input:  { name: string|{en,nl,fr}, amount, unit, category? }
   * Output: [{ key, name:{en,nl,fr}, amount, unit, category, staple }]
   */
  function resolve(raw) {
    if (!raw) return [];

    var nameObj = (typeof raw.name === 'object' && raw.name) ? raw.name : { en: raw.name, nl: raw.name, fr: raw.name };
    var enName = cleanName(nameObj.en || nameObj.nl || nameObj.fr || '');

    if (isJunkName(enName)) return [];

    // "salt and pepper" / "Lemon juice & Parsley" become separate items.
    var parts = enName.split(SPLIT_RE).map(cleanName).filter(Boolean);
    var splittable = parts.length > 1 && parts.length <= 3 &&
      parts.every(function (p) { return p.split(' ').length <= 3 && !isJunkName(p); });

    if (splittable) {
      var out = [];
      parts.forEach(function (part) {
        var sub = resolve({
          name: { en: part, nl: part, fr: part },
          // A split row has no meaningful per-part amount.
          amount: null,
          unit: 'to taste',
          category: raw.category
        });
        sub.forEach(function (s) { out.push(s); });
      });
      if (out.length) return dedupe(out);
    }

    var key = keyOf(enName);
    var unitInfo = normalizeUnit(raw.amount, raw.unit, enName);
    var aisle = aisleFor(enName);

    return [{
      key: key,
      name: translationsFor(key, nameObj),
      amount: unitInfo.amount,
      unit: unitInfo.unit,
      category: aisle,
      staple: isStaple(enName, aisle)
    }];
  }

  /** Merge rows that are the same ingredient in the same unit. */
  function dedupe(items) {
    var out = [];
    items.forEach(function (item) {
      var match = null;
      for (var i = 0; i < out.length; i++) {
        if (out[i].key === item.key && out[i].unit === item.unit) { match = out[i]; break; }
      }
      if (!match) {
        out.push(item);
        return;
      }
      if (typeof match.amount === 'number' && typeof item.amount === 'number') {
        match.amount = roundAmount(match.amount + item.amount, match.unit);
      } else if (match.amount === null && typeof item.amount === 'number') {
        match.amount = item.amount;
      }
    });
    return out;
  }

  /**
   * Scale an amount for a different number of servings.
   * Countables round up to whole units, vague amounts never scale.
   */
  function scaleAmount(amount, unit, ratio) {
    // "a pinch" and "to taste" carry no number at any scale.
    if (isVague(unit)) return null;
    if (typeof amount !== 'number') return amount === undefined ? null : amount;
    if (ratio === 1) return amount;
    return roundAmount(amount * ratio, unit);
  }

  var api = {
    AISLES: AISLES,
    DEFAULT_AISLE: DEFAULT_AISLE,
    COUNTABLE_UNITS: COUNTABLE_UNITS,
    VAGUE_UNITS: VAGUE_UNITS,
    NAME_TRANSLATIONS: NAME_TRANSLATIONS,
    STAPLE_KEYS: STAPLE_KEYS,
    cleanName: cleanName,
    keyOf: keyOf,
    isJunkName: isJunkName,
    isCountable: isCountable,
    isVague: isVague,
    roundAmount: roundAmount,
    normalizeUnit: normalizeUnit,
    aisleFor: aisleFor,
    isStaple: isStaple,
    resolve: resolve,
    dedupe: dedupe,
    scaleAmount: scaleAmount,
    detectGroups: detectGroups,
    deriveDietFlags: deriveDietFlags,
    DIET_FLAGS: ['isVegetarian', 'isVegan', 'isCandidaFriendly', 'isKeto',
      'isGlutenFree', 'isNutFree', 'isDairyFree', 'isEggFree']
  };

  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  } else {
    root.Ingredients = api;
  }
})(typeof window !== 'undefined' ? window : this);
