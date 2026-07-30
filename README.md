# Mijn Kookpot 🍳

**Belgian recipe book + smart grocery list.** Pick the dishes you want to cook, and the app turns them into one merged shopping list, sorted by the aisles you actually walk through. Installable on your phone and fully usable offline — including inside a shop with no signal.

Vanilla HTML/CSS/JS. No build step, no framework, no runtime dependencies.

---

## What it does

**Recipes**
- 115 recipes in three languages (EN / NL / FR), all the way down to ingredient names and units.
- Search by title, subtitle or ingredient. Accents are folded, so "gaufres de liege" finds *Gaufres de Liège*.
- Filter by category, by diet (vegetarian, vegan, candida, keto), by allergen (gluten, nuts, dairy, eggs) and by **favourites** — the pills stack, so "my favourite desserts" works.
- Adjust servings in the recipe drawer and every quantity rescales. Countable things stay whole — you get 5 onions, never 4.3 — and "to taste" never scales.
- **Cook Mode**: full-screen, one step at a time, for when your hands are covered in flour. Arrow keys page through it.
- Create, **edit** and **delete** your own recipes. They are stored separately from the shipped ones, so updating the app can never wipe them.
- Diet and allergen flags are **derived from the ingredient list**, not asserted. They are a shopping aid, not a medical guarantee — an ingredient the dictionary does not recognise is assumed harmless.

**Grocery list**
- Select several recipes and generate one merged list, with a **servings stepper per recipe**.
- Merging happens on a canonical ingredient key, so "garlic" and "garlic cloves" become one line and the amounts add up. An ingredient that shows up in an incompatible unit gets its own line instead of being dropped.
- Sorted by supermarket aisle, in an order **you can rearrange in Settings** to match the route you actually walk.
- Each line remembers which recipes it came from ("2 onions — from Stoofvlees, Waterzooi").
- **Pantry staples are skipped by default.** Salt, pepper, oil, flour and spices don't clutter your list; they appear as one-tap chips at the top in case you actually ran out. Toggle the behaviour off in Settings.
- Tap any quantity to change it — "1,5 kg" becomes 1500 g, free text like "a handful" is kept as typed.
- Share the list as plain text (share sheet on mobile, clipboard on desktop).
- Progress bar and "clear checked" for shopping in the store.

**Your data**
- Everything lives in this browser's `localStorage`, so Settings has **Download a backup** and **Restore a backup** — one JSON file with your recipes, list, favourites and settings.
- The app works fully offline and installs to the home screen. When a new version is cached, a banner offers a reload rather than swapping files under a running session.
- Keyboard and screen-reader usable throughout: real buttons, focus trapping in dialogs, Escape to close, visible focus rings, and `prefers-reduced-motion` honoured.

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
| `ingredients.js` | Canonical ingredient dictionary: names, aisles, units, staples, diet flags. Shared by the browser and the node scripts |
| `scripts/recipe_db.js` | Shared load/save for `recipes.js` plus duplicate detection, used by all three importers |
| `recipes.js` | The recipe database (`window.initialRecipes`) |
| `style.css` | Vintage Belgian bistro theme |
| `sw.js` / `manifest.json` | Offline caching + home screen installation |
| `images/` | Recipe photos and app icons, all local |

### Scripts

```bash
node scripts/smoke_test.js        # app flows — run this before committing
node scripts/test_ingredients.js  # the ingredient dictionary, table-driven
node scripts/normalize_recipes.js # re-canonicalise every ingredient in recipes.js
node scripts/download_images.js   # pull any remote recipe image into images/
pwsh scripts/resize_images.ps1    # downscale photos to the size actually shown
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
2. **Run both test suites.** `node scripts/smoke_test.js` boots the real
   `app.js` against a DOM built from `index.html` and checks the flows that are
   easy to break: merging, scaling, staples, backup/restore, custom-recipe
   persistence, accessibility markup, translation coverage and data integrity.
   `node scripts/test_ingredients.js` pins down the dictionary itself.

3. **Diet flags are generated.** Don't hand-edit them in `recipes.js` — change
   the patterns in `ingredients.js` and re-run `scripts/normalize_recipes.js`,
   which is idempotent.

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
