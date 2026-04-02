# Hand to Hand — Figma Make Prompt

## 🎯 Project Overview

Design a complete mobile marketplace app called **"Hand to Hand"** — a French-language peer-to-peer marketplace for used goods (clothing, vehicles, electronics, furniture, and more), launching in the **Côte d'Azur region of France**. The app combines classic marketplace listings with **timed auctions**, **live shopping**, **seller boost features**, and a unique **deal scoring system** inspired by the automotive platform "La Centrale." Think Vinted meets La Centrale, with an auction layer.

The app uses **escrow-based payments** (like Vinted's buyer protection) and **shipping-only** delivery.

---

## 🎨 Design System

### Color Palette
| Role | Hex | Usage |
|---|---|---|
| **Primary (Main)** | `#14248A` | CTA buttons, nav active states, headers, primary actions, links |
| **Dark / Text** | `#28262C` | Body text, dark backgrounds, overlays |
| **Accent Purple** | `#998FC7` | Secondary actions, tags, category pills, deal metric accents |
| **Light Purple** | `#D4C2FC` | Hover states, selected filters, subtle highlights, card accents |
| **Surface / Background** | `#F9F5FF` | App background, card backgrounds, input fields |
| **White** | `#FFFFFF` | Card surfaces, modals, bottom sheets |
| **Success Green** | Designer's choice | "Bonne affaire" badge, verified badge |
| **Warning Orange** | Designer's choice | "Prix moyen" badge |
| **Error Red** | Designer's choice | "Au-dessus du marché" badge, alerts, destructive actions |

### Typography
- **Font family:** Inter or Poppins (modern, geometric, highly legible)
- **Headings:** Bold / SemiBold
- **Body text:** Regular / Medium
- **Small labels / captions:** Medium, slightly reduced opacity or lighter color
- **All UI text is in French**

### Design Style
- **Modern minimal** aesthetic
- **Rounded corners** on all cards, buttons, inputs (border-radius: 12–16px)
- Soft **drop shadows** on cards (subtle elevation)
- **Generous whitespace** and padding
- **Bottom navigation bar** with 5 tabs
- iOS-style status bar and safe areas respected
- **Dark mode support**: design every screen in both light and dark variants. In dark mode, surface becomes `#28262C`, background becomes `#1A1A1E`, text becomes `#F9F5FF`, and primary blue remains `#14248A`

### Iconography
- Outlined icon style (Phosphor Icons or Lucide style)
- Consistent 24px touch targets

---

## 📱 Screen-by-Screen Specification

Design each screen listed below as a **separate frame at 390×844px (iPhone 14)**.

---

### 1. SPLASH SCREEN
- App logo centered (placeholder: the user will import their own logo)
- Background: gradient from `#14248A` to `#998FC7`
- Subtle animated loading indicator at the bottom

---

### 2. ONBOARDING (3 slides + CTA)
- **Slide 1:** Illustration showing two hands exchanging an item. Title: "Achetez et vendez en toute confiance" / Subtitle: "Des milliers d'articles à portée de main sur la Côte d'Azur"
- **Slide 2:** Illustration showing a deal meter/gauge. Title: "Des bonnes affaires garanties" / Subtitle: "Notre système de notation vous indique si le prix est juste"
- **Slide 3:** Illustration showing a live video icon. Title: "Shopping en direct & enchères" / Subtitle: "Participez aux ventes live et enchérissez en temps réel"
- Pagination dots at bottom
- "Commencer" primary CTA button at the bottom
- "Passer" skip link top-right

---

### 3. SIGN UP / LOGIN SCREEN
- Tab toggle at top: **"Connexion"** | **"Inscription"**
- **Sign Up tab:**
  - Input: Nom complet
  - Input: Adresse e-mail
  - Input: Numéro de téléphone (with 🇫🇷 +33 prefix selector)
  - Input: Mot de passe (with show/hide toggle)
  - Primary button: "Créer mon compte"
  - Divider: "ou continuer avec"
  - Social login row: Google button | Apple button
  - Bottom text: "Déjà un compte ? Se connecter"
- **Login tab:**
  - Input: E-mail ou téléphone
  - Input: Mot de passe
  - "Mot de passe oublié ?" link
  - Primary button: "Se connecter"
  - Social login row: Google | Apple
  - Bottom text: "Pas encore de compte ? S'inscrire"

---

### 4. OTP VERIFICATION SCREEN
- Title: "Vérifiez votre numéro"
- Subtitle: "Un code a été envoyé au +33 6 •• •• ••42"
- 6-digit OTP input boxes (large, auto-focus advancing)
- "Renvoyer le code" link with countdown timer (60s)
- Primary button: "Vérifier"

---

### 5. KYC VERIFICATION FLOW (3 steps)

**Step 1 — Introduction**
- Title: "Vérification d'identité"
- Subtitle: "Pour la sécurité de tous, vérifiez votre identité pour vendre et acheter"
- Illustration of an ID card + shield icon
- Bullet points: "Protège contre les arnaques" / "Badge vérifié ✓ sur votre profil" / "Obligatoire pour effectuer des transactions"
- Primary button: "Commencer la vérification"
- Ghost button: "Plus tard" (skip, but limited features)

**Step 2 — ID Upload**
- Title: "Pièce d'identité"
- Subtitle: "Prenez en photo le recto et le verso de votre pièce d'identité"
- Two upload zones: "Recto" and "Verso" — each showing a camera icon and dashed border placeholder
- Tips: "Assurez-vous que la photo est nette et bien éclairée"
- Primary button: "Continuer"

**Step 3 — Selfie Verification**
- Title: "Prenez un selfie"
- Subtitle: "Nous comparons votre visage avec votre pièce d'identité"
- Camera viewfinder frame (oval face outline guide)
- Primary button (shutter): "Prendre la photo"
- Progress indicator at top: step 2 of 3

**Step 4 — Pending Review**
- Title: "Vérification en cours"
- Illustration: hourglass or document being reviewed
- Subtitle: "Nous vérifions vos documents. Cela prend généralement moins de 24h."
- "Retour à l'accueil" button

---

### 6. HOME SCREEN (Main Browse Page)
This is the core screen of the app.

**Top section:**
- Status bar
- Search bar with placeholder: "Rechercher sur Hand to Hand..." (with microphone icon and filter icon)
- Location chip showing "📍 Côte d'Azur" (tappable to change)

**Category carousels (horizontal scroll):**
- Row of circular or rounded-square category icons with labels below:
  - Vêtements, Chaussures, Véhicules, Électronique, Maison, Sport, Luxe, Enfants, Autre
- Each category icon uses the light purple `#D4C2FC` background with a colored icon

**Section: "🔥 Enchères en cours" (Live Auctions)**
- Horizontal carousel of auction cards:
  - Product image with countdown timer badge overlay (e.g., "2h 34min")
  - Product title, current bid price in bold
  - Number of bidders icon
  - "Enchérir" small CTA

**Section: "📺 Live Shopping"**
- Horizontal carousel of upcoming/active live sessions:
  - Seller profile picture (small circle) + "EN DIRECT" red badge if live
  - Preview thumbnail
  - Seller name, number of viewers

**Section: "Près de chez vous" or main feed**
- Vertical scrolling **2-column grid** of product cards
- Each **product card** contains:
  - Product photo (square, rounded corners)
  - **Deal score badge** in top-left corner of image (see below)
  - Heart/favorite icon in top-right corner of image
  - Below image: Product title (1 line, truncated)
  - Price in bold (e.g., "45 €")
  - Condition tag: "Très bon état" in a small pill
  - Seller location: "Nice" in small gray text
  - If boosted: subtle golden/highlighted border + small "⚡ Boost" tag

**Deal Score Badge System (critical feature):**
- Circular or pill-shaped badge overlaid on the product image (top-left)
- 5 levels with distinct colors and labels:
  - 🟢 **"Excellente affaire"** — bright green badge — price is significantly below market
  - 🟢 **"Bonne affaire"** — green badge — price is below market average
  - 🟡 **"Prix juste"** — yellow/amber badge — price matches market average
  - 🟠 **"Légèrement au-dessus"** — orange badge — slightly overpriced
  - 🔴 **"Au-dessus du marché"** — red badge — above market price
- Small info icon (ⓘ) next to badge that opens a tooltip explaining the scoring methodology

**Bottom Navigation Bar (5 tabs):**
1. 🏠 **Accueil** (Home — current)
2. 🔍 **Rechercher** (Search/Explore)
3. ➕ **Vendre** (Sell — centered, prominent, slightly raised)
4. 💬 **Messages**
5. 👤 **Profil**

---

### 7. SEARCH & FILTER SCREEN

**Search page:**
- Large search input auto-focused
- Recent searches list
- Trending searches / popular categories

**Filter bottom sheet (slides up):**
- Category multi-select chips
- Price range slider (min–max in €)
- Condition: Neuf, Très bon état, Bon état, État correct
- Deal score filter: show only "Bonne affaire" and above
- Sort by: Pertinence, Prix croissant, Prix décroissant, Plus récent
- Distance/location radius slider
- Brand/Marque search input
- "Afficher X résultats" primary button
- "Réinitialiser" ghost button

---

### 8. PRODUCT DETAIL SCREEN

**Image carousel** at top (swipeable, with dot pagination and photo count "1/6")

**Deal Score Section** (prominent, right below images):
- Large deal score badge with label (e.g., 🟢 "Bonne affaire")
- Expandable explanation: "Ce prix est 18% en dessous de la moyenne du marché pour des articles similaires"
- Mini comparison chart showing: this item's price vs. market average (simple bar chart or gauge)

**Product Info:**
- Title (large, bold)
- Price: "85 €" in primary blue, large
- Condition pill: "Très bon état"
- Posted time: "Publié il y a 3 heures"
- Description text (expandable "Voir plus")

**Specifications (dynamic based on category):**
- For **clothing**: Taille, Marque, Couleur, Matière, État
- For **vehicles**: Marque, Modèle, Année, Kilométrage, Carburant, Boîte (auto/manuelle), Contrôle technique
- For **electronics**: Marque, Modèle, Stockage, État de la batterie
- Displayed as a clean label-value list or 2-column grid

**Seller Section:**
- Seller avatar + name + verified badge (✓)
- Star rating + number of reviews
- "Membre depuis [date]"
- "Voir le profil" link
- Response time: "Répond en ~2h"

**Action Buttons (sticky bottom bar):**
- "💬 Contacter" secondary button
- "💰 Faire une offre" secondary button
- "🛒 Acheter — 85 €" primary button
- If auction item: "Enchérir" replaces "Acheter"

**Additional:**
- "❤️ Ajouter aux favoris" icon button
- "🔗 Partager" icon button
- "⚠️ Signaler" link
- Section: "Articles similaires" horizontal carousel at bottom

---

### 9. MAKE AN OFFER BOTTOM SHEET
- Title: "Faire une offre"
- Current price displayed: "Prix affiché : 85 €"
- Deal score shown for context
- Input field for offer amount (€) with numeric keyboard
- Suggested offer chips: "-10%", "-15%", "-20%"
- "L'offre est engageante pendant 24h" disclaimer
- Primary button: "Envoyer l'offre"
- "Annuler" link

---

### 10. AUCTION DETAIL SCREEN (variant of product detail)
- Same layout as product detail but with auction-specific elements:
- **Countdown timer** (large, prominent): "Se termine dans 1j 4h 23min"
- **Current bid**: "Enchère actuelle : 320 €" (large, bold)
- **Number of enchères**: "14 enchères"
- **Bid history** expandable list (last 5 bids shown: username, amount, time)
- **Bid input**: amount field with "Enchère minimum : 330 €" helper
- Quick bid chips: "+10 €", "+20 €", "+50 €"
- Primary button: "Enchérir — 330 €"
- "🔔 Suivre cette enchère" toggle (notification when outbid or ending soon)

---

### 11. POST A PRODUCT — SELL FLOW (Multi-step)

**Step 1 — Photos**
- Title: "Ajouter des photos"
- Grid of photo upload slots (up to 5 for free, up to 10 with boost)
- First slot: camera icon + "Ajouter" — opens camera/gallery picker
- Tip: "La première photo sera la photo de couverture"
- Greyed-out slots 6–10 with lock icon + "Débloquez avec Boost ⚡"
- "Continuer" button

**Step 2 — Details**
- Title: "Décrivez votre article"
- Category selector (opens full-screen picker)
- Input: Titre de l'annonce
- Input: Description (multiline)
- Condition picker: Neuf avec étiquette / Très bon état / Bon état / État correct
- Dynamic fields based on selected category (see product detail specs)
- "Continuer" button

**Step 3 — Price & Sale Type**
- Title: "Fixez votre prix"
- Toggle: **"Vente classique"** | **"Enchère"**
- If vente classique:
  - Input: Prix (€)
  - Toggle: "Autoriser les offres" (on/off)
  - Deal score preview: "Votre prix sera évalué comme : 🟢 Bonne affaire" (dynamic based on input)
- If enchère:
  - Input: Prix de départ (€)
  - Input: Prix de réserve (optionnel)
  - Duration picker: 1 jour, 3 jours, 5 jours, 7 jours
- "Continuer" button

**Step 4 — Shipping**
- Title: "Expédition"
- Poids estimé selector (affects shipping cost)
- Package size: Petit / Moyen / Grand / Très grand
- "Frais de port payés par l'acheteur" info text
- "Continuer" button

**Step 5 — Review & Publish**
- Title: "Récapitulatif"
- Preview card showing exactly how the listing will appear in the feed
- Summary of all entered info
- "Booster mon annonce ⚡" upsell card:
  - Benefits listed: "Apparaissez en tête des résultats", "Jusqu'à 10 photos", "Badge Boost visible"
  - Price shown (e.g., "4,99 € / 7 jours")
  - "Ajouter le Boost" secondary button
- Primary button: "Publier l'annonce"
- "Enregistrer en brouillon" ghost button

---

### 12. BOOST FEATURE SCREEN (Upsell / Management)
- Title: "Boost ⚡"
- Hero section: visual showing a boosted product card vs. normal one
- **Benefits list:**
  - ✅ Mise en avant en tête des résultats
  - ✅ Jusqu'à 10 photos (au lieu de 5)
  - ✅ Badge "Boost ⚡" visible sur l'annonce
  - ✅ Statistiques détaillées (vues, favoris)
- **Pricing tiers:**
  - 24h — 1,99 €
  - 3 jours — 3,49 €
  - 7 jours — 4,99 € (Populaire badge)
- Primary button: "Booster cette annonce"

---

### 13. LIVE SHOPPING SCREEN

**Live Session Viewer (for buyers):**
- Full-screen video view
- Top bar: Seller avatar + name + live duration + viewer count
- Red "EN DIRECT" badge
- Floating product card at bottom (currently featured product):
  - Mini image, title, price
  - "Acheter" CTA or "Enchérir" if auction
- Live chat overlay (scrolling comments on left side)
- Reaction buttons (❤️, 🔥, 👏) floating
- "Partager" and "Signaler" icons

**Live Schedule Screen:**
- Title: "Prochains lives"
- List of upcoming live sessions with:
  - Seller avatar, name, scheduled time
  - Preview/teaser text: "Collection vintage Chanel"
  - "🔔 Me rappeler" button
  - Number of people interested

---

### 14. MESSAGES / INBOX SCREEN

**Inbox list:**
- Tab toggle: **"Achats"** | **"Ventes"**
- Each conversation row:
  - Seller/buyer avatar (with verified badge if applicable)
  - Username + last message preview (truncated)
  - Timestamp
  - Unread indicator (blue dot)
  - Product thumbnail on the right

**Chat Detail Screen:**
- Standard messaging UI with:
  - Message bubbles (sent = primary blue, received = light gray)
  - Product card pinned at top of chat (tappable to view listing)
  - **Offer system integrated into chat:**
    - Offer sent appears as a special card: "Offre envoyée : 75 €" with Accept / Decline / Counter buttons
    - Counter-offer card: "Contre-offre : 80 €" with Accept / Decline
    - Accepted offer card: "Offre acceptée ✓ — 80 €" with "Procéder au paiement" button
  - Photo sharing capability
  - Input bar with: text input + 📎 attachment + 📷 camera + send button

---

### 15. CHECKOUT / PAYMENT SCREEN
- Title: "Paiement sécurisé"
- Order summary:
  - Product image + title + price
  - Frais de port
  - Frais de protection acheteur
  - **Total** in bold
- Shipping address section (add/edit address)
- Payment method section:
  - Saved cards (Visa •••• 4242)
  - "Ajouter une carte" option
  - Apple Pay / Google Pay options
- "Protection acheteur Hand to Hand" info banner:
  - Shield icon + "Vous êtes protégé : remboursement si l'article ne correspond pas"
- Primary button: "Payer — 93,50 €"
- Security badges at bottom (SSL, escrow, etc.)

---

### 16. ORDER TRACKING SCREEN
- Title: "Suivi de commande"
- Product image + title at top
- **Stepper/timeline showing order status:**
  1. ✅ Commande confirmée — [date]
  2. ✅ Paiement sécurisé — [date]
  3. 🔄 En attente d'expédition (current step, pulsing)
  4. ⬜ Expédié
  5. ⬜ Livré
  6. ⬜ Confirmé par l'acheteur (triggers payment release to seller)
- Tracking number + carrier info (when shipped)
- "Contacter le vendeur" button
- "Signaler un problème" link

---

### 17. PROFILE SCREEN

**My Profile (own view):**
- Cover photo area (subtle gradient if no photo)
- Avatar (large, centered) + verified badge ✓
- Name, @username
- Member since + location
- Stats row: "X ventes" | "X achats" | "⭐ 4.8 (23 avis)"
- Edit profile button

**Tab sections below:**
- **"En vente"** — grid of active listings
- **"Vendus"** — grid of sold items with "Vendu" overlay
- **"Avis"** — reviews from buyers/sellers (star rating + comment + date)
- **"Favoris"** — saved/liked items

**Other user's profile (public view):**
- Same layout but with "Contacter" and "Suivre" buttons instead of "Modifier"
- "Signaler" option in more menu

---

### 18. SETTINGS SCREEN
- Profile section: Photo + name + "Modifier le profil"
- **Sections:**
  - Mon compte: Email, Téléphone, Mot de passe, Vérification d'identité (status)
  - Paiements: Moyens de paiement, Historique des transactions, Coordonnées bancaires (for seller payouts)
  - Adresses: Adresse de livraison
  - Notifications: toggle switches for each notification type
  - Mes Boosts: active boosts and history
  - Aide & Support
  - Conditions générales / Politique de confidentialité
  - Se déconnecter (red text)
  - Supprimer mon compte

---

### 19. NOTIFICATIONS SCREEN
- Title: "Notifications"
- Grouped by type with icons:
  - 💬 "Nouveau message de @marie_06"
  - 💰 "Votre offre de 75 € a été acceptée"
  - 🔨 "Vous avez été surenchéri sur [article]"
  - ⏰ "L'enchère se termine dans 1h"
  - 📦 "Votre colis a été expédié"
  - ⚡ "Votre Boost expire dans 24h"
  - 📺 "Le live de @vintage_nice commence dans 15min"
  - ✅ "Votre identité a été vérifiée"
- Each notification: icon + text + timestamp + unread dot
- Tappable (navigates to relevant screen)

---

### 20. EMPTY STATES & EDGE CASES
Design empty states for:
- No search results: illustration + "Aucun résultat pour '[query]'" + "Essayez avec d'autres mots-clés"
- Empty favorites: illustration + "Pas encore de favoris" + "Explorez les annonces"
- Empty inbox: illustration + "Pas de messages" + "Commencez par acheter ou vendre"
- No active listings (profile): "Vous n'avez pas encore d'annonces" + "Vendre un article" CTA
- KYC required for action: bottom sheet explaining why verification is needed

---

## 📐 Component Library (Design System Page)

Create a separate Figma page with reusable components:
- **Buttons:** Primary (filled `#14248A`), Secondary (outlined), Ghost, Destructive (red), Disabled states — all with rounded corners
- **Input fields:** Default, Focused (`#14248A` border), Error (red border + message), Disabled
- **Product card:** Standard and Boosted variants
- **Deal score badges:** All 5 levels
- **Category pills / chips:** Selected and unselected states
- **Navigation bar:** All 5 tabs with active/inactive states
- **Offer cards:** Sent, Received, Accepted, Declined states
- **Auction countdown:** Active and ending-soon (red) variants
- **Seller info row:** With and without verified badge
- **Bottom sheets:** Template with handle, title, content area
- **Toast notifications:** Success, Error, Info variants
- **Avatar:** Small (32px), Medium (48px), Large (80px) — with verified badge overlay
- **Stepper / Timeline:** For order tracking and multi-step flows

---

## 🌙 Dark Mode

Generate a **dark mode variant** for every screen. Rules:
- Background: `#1A1A1E`
- Surface/Cards: `#28262C`
- Text primary: `#F9F5FF`
- Text secondary: `#998FC7`
- Primary blue `#14248A` may need slight lightening to `#2A3FAA` for contrast on dark surfaces
- Deal score badge colors remain the same (green/yellow/orange/red)
- Maintain the same hierarchy, spacing, and component structure

---

## 🗂️ Figma File Structure

Organize the Figma file as follows:
1. **Cover page** — project title, color palette, fonts
2. **Design System** — component library
3. **Light Mode Screens** — all screens listed above
4. **Dark Mode Screens** — dark variants of all screens
5. **User Flows** — connect screens with arrows showing:
   - Onboarding → Sign Up → OTP → KYC → Home
   - Home → Product Detail → Buy / Make Offer / Chat → Checkout → Order Tracking
   - Home → Auction Detail → Bid → Won → Checkout
   - Sell button → Post Flow → Boost Upsell → Published
   - Home → Live Shopping → Watch → Buy during live
   - Profile → Settings → Edit info

---

## ✏️ Additional Notes
- All text must be in **French**
- Use realistic placeholder content (French names, French cities from Côte d'Azur: Nice, Cannes, Antibes, Menton, Monaco area)
- Product photos should use realistic placeholder images
- The user has their own **logo ready** — leave a clearly marked placeholder for logo insertion
- Design for **iOS first** (390×844) with notes on Android adaptation
- Respect safe areas (notch, home indicator)
- All interactive elements must have minimum 44px touch targets
- Use subtle micro-interaction annotations where relevant (e.g., pull-to-refresh, swipe actions, bottom sheet animations)