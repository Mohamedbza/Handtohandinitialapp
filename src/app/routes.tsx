import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Splash } from "./pages/Splash";
import { Onboarding } from "./pages/Onboarding";
import { Welcome } from "./pages/Welcome";
import { Auth } from "./pages/Auth";
import { OTPVerification } from "./pages/OTPVerification";
import { KYCVerification } from "./pages/KYCVerification";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { ProductDetail } from "./pages/ProductDetail";
import { AuctionDetail } from "./pages/AuctionDetail";
import { SellFlow } from "./pages/SellFlow";
import { LiveShopping } from "./pages/LiveShopping";
import { Messages } from "./pages/Messages";
import { ChatDetail } from "./pages/ChatDetail";
import { Checkout } from "./pages/Checkout";
import { OrderTracking } from "./pages/OrderTracking";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { Notifications } from "./pages/Notifications";
import { BoostFeature } from "./pages/BoostFeature";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Splash },
      { path: "onboarding", Component: Onboarding },
      { path: "welcome", Component: Welcome },
      { path: "auth", Component: Auth },
      { path: "otp", Component: OTPVerification },
      { path: "kyc", Component: KYCVerification },
      { path: "home", Component: Home },
      { path: "search", Component: Search },
      { path: "product/:id", Component: ProductDetail },
      { path: "auction/:id", Component: AuctionDetail },
      { path: "sell", Component: SellFlow },
      { path: "live/:id?", Component: LiveShopping },
      { path: "messages", Component: Messages },
      { path: "chat/:id", Component: ChatDetail },
      { path: "checkout/:id", Component: Checkout },
      { path: "order/:id", Component: OrderTracking },
      { path: "profile/:userId?", Component: Profile },
      { path: "settings", Component: Settings },
      { path: "notifications", Component: Notifications },
      { path: "boost/:listingId?", Component: BoostFeature },
      { path: "*", Component: NotFound },
    ],
  },
]);