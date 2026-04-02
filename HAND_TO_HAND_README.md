# Hand to Hand - Marketplace Mobile App

A complete mobile marketplace application for the Côte d'Azur region of France, featuring peer-to-peer sales, timed auctions, live shopping, and a unique deal scoring system.

## Features Implemented

### ✅ Complete Screens (20+ screens)
1. **Splash Screen** - Animated loading with gradient background
2. **Onboarding** - 3-slide carousel introducing app features
3. **Authentication** - Login/Signup with social login options
4. **OTP Verification** - 6-digit code verification
5. **KYC Verification** - Multi-step identity verification flow
6. **Home Screen** - Main feed with categories, auctions, live shopping, and product grid
7. **Search** - Search interface with filters
8. **Product Detail** - Complete product view with deal score, specifications, and seller info
9. **Auction Detail** - Live auction bidding interface with countdown timer
10. **Sell Flow** - Multi-step product listing creation
11. **Live Shopping** - Live streaming marketplace interface
12. **Messages** - Inbox with conversation list
13. **Chat Detail** - Real-time messaging interface
14. **Checkout** - Secure payment flow with buyer protection
15. **Order Tracking** - Visual order status timeline
16. **Profile** - User profile with tabs for listings, sales, and reviews
17. **Settings** - Account settings and preferences
18. **Notifications** - Notification center with various alert types
19. **Boost Feature** - Product promotion upsell page

### 🎨 Design System
- **Color Palette**: Custom brand colors with primary blue (#14248A), accent purple (#998FC7), and light purple (#D4C2FC)
- **Dark Mode**: Full dark mode support across all screens
- **Typography**: Inter font family
- **Mobile-First**: Optimized for 390×844px (iPhone 14) with responsive design
- **Components**: Reusable product cards, bottom navigation, deal score badges

### 🌟 Key Features

#### Deal Score System
5-level price evaluation system:
- 🟢 Excellente affaire - Significantly below market
- 🟢 Bonne affaire - Below market average
- 🟡 Prix juste - Market average
- 🟠 Légèrement au-dessus - Slightly above market
- 🔴 Au-dessus du marché - Above market price

#### Categories
9 product categories: Vêtements, Chaussures, Véhicules, Électronique, Maison, Sport, Luxe, Enfants, Autre

#### Special Features
- **Live Auctions** with countdown timers and bid tracking
- **Live Shopping** video sessions with viewer counts
- **Boost System** to promote listings (3 pricing tiers)
- **Buyer Protection** with escrow-based payments
- **Verified Badges** for KYC-verified users
- **Make Offer** functionality in product detail
- **Order Tracking** with visual timeline

### 🗂️ File Structure
```
/src/app/
  ├── components/
  │   ├── BottomNav.tsx
  │   └── ProductCard.tsx
  ├── data/
  │   └── mockData.ts
  ├── pages/
  │   ├── Splash.tsx
  │   ├── Onboarding.tsx
  │   ├── Auth.tsx
  │   ├── OTPVerification.tsx
  │   ├── KYCVerification.tsx
  │   ├── Home.tsx
  │   ├── Search.tsx
  │   ├── ProductDetail.tsx
  │   ├── AuctionDetail.tsx
  │   ├── SellFlow.tsx
  │   ├── LiveShopping.tsx
  │   ├── Messages.tsx
  │   ├── ChatDetail.tsx
  │   ├── Checkout.tsx
  │   ├── OrderTracking.tsx
  │   ├── Profile.tsx
  │   ├── Settings.tsx
  │   ├── Notifications.tsx
  │   ├── BoostFeature.tsx
  │   └── Root.tsx
  ├── routes.tsx
  └── App.tsx
```

### 🚀 Navigation Flow
- Splash → Onboarding → Auth → OTP → KYC → Home
- Bottom navigation with 5 tabs: Accueil, Rechercher, Vendre, Messages, Profil
- Deep linking support for products, auctions, chats, profiles

### 🇫🇷 French Language
All text throughout the app is in French, tailored for the Côte d'Azur market with locations like Nice, Cannes, Antibes, Monaco, and Menton.

### 📱 Mobile Optimizations
- Centered container (max-width: 480px) on desktop
- Full-width on mobile devices
- iOS safe area support
- Touch-optimized interactions
- Smooth animations with Motion/React
- Horizontal scroll carousels
- Pull-to-refresh ready

## Tech Stack
- React + TypeScript
- React Router (Data Mode)
- Tailwind CSS v4
- Motion (Framer Motion)
- Lucide Icons
- Mock data for realistic demo

## Next Steps
To complete the full design specification, you could add:
- Additional empty states
- Loading states and skeleton screens
- Error handling UI
- Toast notifications
- Pull-to-refresh animations
- Advanced filters bottom sheet
- Image zoom/gallery functionality
- User reviews and ratings detail
- More auction and live shopping screens
