# Mijn Kookpot 🍳

**Belgian recipe book + smart grocery list.** Pick the dishes you want to cook, and the app turns them into one merged shopping list, sorted by the aisles you actually walk through. Installable on your phone and fully usable offline — including inside a shop with no signal.

Vanilla HTML/CSS/JS. No build step, no framework, no runtime dependencies.

---

## What it does

**Recipes**
- 115 recipes in three languages (EN / NL / FR), all the way down to ingredient names and units.
- Search by title, subtitle or ingredient; filter by category (breakfast, main, soup, snack, dessert), by diet (vegetarian, vegan, candida, keto) and by allergen (gluten, nuts, dairy, eggs).
- Adjust servings in the recipe drawer and every quantity rescales. Countable things stay whole — you get 5 onions, never 4.3 — and "to taste" never scales.
- **Cook Mode**: full-screen, one step at a time, for when your hands are covered in flour.
- Create, **edit** and **delete** your own recipes. They are stored separately from the shipped ones, so updating the app can never wipe them.

**Grocery list**
- Select several recipes and generate one merged list.
- Merging happens on a canonical ingredient key, so "garlic" and "garlic cloves" become one line and the amounts add up. An ingredient that shows up in an incompatible unit gets its own line instead of being dropped.
- Sorted by supermarket aisle: produce → fish → butcher → dairy → bakery → frozen → herbs & spices → grocery → drinks.
- Each line remembers which recipes it came from ("2 onions — from Stoofvlees, Waterzooi").
- **Pantry staples are skipped by default.** Salt, pepper, oil, flour and spices don't clutter your list; they appear as one-tap chips at the top in case you actually ran out. Toggle the behaviour off in Settings.
- Share the list as plain text (share sheet on mobile, clipboard on desktop).
- Progress bar and "clear checked" for shopping in the store.

---

## Running it

Any static file server works. The service worker and the manifest need a real
`http://` origin, so opening `index.html` straight off disk gives you the app
but not offline mode or installation.

```bash
npx http-server -p 8080
# then open http://localhost:8080
```

To use it on your phone, open `http://<your-computer-ip>:8080` on the same
Wi-Fi, then "Add to home screen".

---

## Project layout

| File | What it is |
| --- | --- |
| `index.html` | The whole UI — four tabs, recipe drawer, cook mode, recipe editor |
| `app.js` | State, rendering, grocery logic, translations |
| `ingredients.js` | Canonical ingredient dictionary: names, aisles, units, staples. Shared by the browser and the node scripts |
| `recipes.js` | The recipe database (`window.initialRecipes`) |
| `style.css` | Vintage Belgian bistro theme |
| `sw.js` / `manifest.json` | Offline caching + home screen installation |
| `images/` | Recipe photos and app icons, all local |

### Scripts

```bash
node scripts/smoke_test.js        # run this before committing
node scripts/normalize_recipes.js # re-canonicalise every ingredient in recipes.js
node scripts/download_images.js   # pull any remote recipe image into images/
node scripts/make_icons.js        # regenerate the PWA icons
```

Importers (need `SPOONACULAR_API_KEY` in the environment for the Spoonacular
sources — never hardcode a key):

```bash
export SPOONACULAR_API_KEY=...
node scripts/import_recipes.js --mealdb 52772
node scripts/import_recipes.js --url https://example.com/some-recipe
node scripts/bulk_import.js --query soup --count 20
node scripts/import_random.js --count 50
```

Everything imported goes through `ingredients.js`, so imported recipes get the
same canonical names, metric units, aisles and staple flags as the hand-written
Belgian ones.

---

## Two things to remember when changing the app

1. **Bump the version in three places at once**: the `?v=` query strings in
   `index.html` and `ASSET_VERSION` in `sw.js`. If they disagree, the service
   worker serves a stale mix of old and new files.
2. **Run the smoke test.** `node scripts/smoke_test.js` boots the real `app.js`
   against a minimal DOM and checks the flows that are easy to break: merging,
   scaling, staples, custom-recipe persistence, translation coverage and recipe
   data integrity.

---

## Data model

A recipe:

```js
{
  id: "carbonnade-flamande",
  prepTime: "25 mins", cookTime: "2 hrs 30 mins",
  difficulty: { en: "Medium", nl: "Gemiddeld", fr: "Moyen" },
  servings: 4,
  category: ["main"],                       // array — a dish can be both soup and main
  image: "images/carbonnade_flamande.jpg",  // always local
  isVegetarian: false, isVegan: false, isGlutenFree: false, /* …8 flags */
  translations: {
    en: { title, subtitle, description, instructions: [...] },
    nl: { ... }, fr: { ... }
  },
  ingredients: [{
    key: "onion",                           // canonical key — merging is done on this
    name: { en: "onion", nl: "ui", fr: "oignon" },
    amount: 3,
    unit: "st.",                            // from a closed set, see ingredients.js
    category: "Groenten & Fruit",           // aisle
    staple: false                           // pantry staple → skipped by default
  }]
}
```

Storage keys in `localStorage`: `belgian_user_recipes` (yours), `belgian_grocery_list`,
`belgian_skipped_staples`, `belgian_favorites`, `belgian_app_settings`. The shipped
recipe database is never copied into `localStorage`.
