# Mijn Kookpot (My Cooking Pot) 🍳
### Premium Belgian Mobile Recipe & Smart Grocery Companion

**Mijn Kookpot** is a high-fidelity, mobile-responsive single-page web application custom-tailored for home cooks living in Belgium. It helps you collect recipes, dynamically scale ingredient lists using Belgian metric systems, and compiles checklists sorted by the actual walk-through aisles of major Belgian supermarket chains (Colruyt, Delhaize, Carrefour, and Albert Heijn).

---

## Key Features

1. **Belgian Cuisine & Metric Units**:
   - Prepopulated with 5 high-fidelity classic recipes (*Stoofvlees / Carbonnade*, *Witloof in de oven*, *Vol-au-vent*, *Stoemp met worst*, and *Moules-Frites*).
   - Ingredients use standard Belgian measurements: grams (g), kilograms (kg), milliliters (ml), tablespoons (*eetlepel* - el), and teaspoons (*koffielepel* - kl).
   - Local ingredients are listed with terms commonly found on packaging in Belgium (e.g. *Witloof / Chicon*, *Luikse Siroop / Sirop de Liège*, *Bintje potatoes*, *Mosterd Bister*, and *Belgian Abbey Beers*).

2. **Dynamic Servings Scale**:
   - Increase or decrease recipe servings inside the bottom sheet drawer. Quantities scale instantly so you know exactly how much to buy.

3. **Smart Supermarket Aisle Checklist**:
   - When you add a recipe's ingredients to your checklist, the app groups them by store aisles (Produce, Butcher, Dairy, Bakery, Pantry, Seafood, and Beverages).
   - In **Settings**, you can select your preferred store: **Colruyt**, **Delhaize**, **Carrefour**, or **Albert Heijn**. The checklist will sort categories in the typical chronological order you encounter them when walking through the store, avoiding unnecessary back-and-forth travel!
   - Shows store-specific helpful shopping tips on the Home tab (e.g., reminding you of the cold-room temperature inside Colruyt).

4. **"In-Store" Shopping Mode**:
   - Toggle to **In-Store Mode** to hide add-forms and increase the touch-target size of checklists. Perfect for ticking off items with one hand while holding a basket or steering a shopping trolley.
   - Includes a visual progress bar indicating what percentage of your grocery run is completed.

5. **Custom Recipe Builder**:
   - Collect your own secret family dishes! Add titles, descriptions, prep/cook times, difficulty levels, and build an ingredient list complete with local metric units.

6. **Offline Persistency**:
   - Utilizes `localStorage` to save your customized recipe book and grocery list items. Your checklist is safely stored even if you close the browser while in the supermarket.

---

## How to Run the App

Since it is built with vanilla HTML5, CSS3, and JavaScript (ES Modules), there are no complex build chains, compilers, or installation packages required!

### Option A: Quick Open (No Setup)
1. Navigate to the project directory `/Users/INTIX/personal/foodapp`.
2. Double-click [index.html](file:///Users/INTIX/personal/foodapp/index.html) to open it directly in Safari, Chrome, Edge, or Firefox.

### Option B: Local Web Server (Recommended for mobile preview)
Running a local server lets you easily access the app on your actual smartphone (connected to the same Wi-Fi network).
1. Open a terminal inside the project directory.
2. Spin up a lightweight server:
   ```bash
   npx http-server -p 8080
   ```
3. Open your browser on your computer at `http://localhost:8080`.
4. Scan the QR code or go to `http://<your-local-ip>:8080` on your mobile phone to use it as a native web app!

---

## Technical Specifications
- **Core Stack**: HTML5, Vanilla CSS3 (with CSS Custom Variables), JavaScript (ES6 Modules).
- **Typography**: Imported Google Fonts (Outfit for headers, Inter for readable checklists).
- **Aesthetics**: Dark forest green kitchen theme with warm honey gold accent highlights, glassmorphic bottom-sheets, smooth card transitions, and micro-checked animations.
