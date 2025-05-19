import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./Landing-Page";
import Dashboard from "./auth/dashboard";
import ProductsList from "./pages/ProductsList";

import ProjectsList from "./pages/ProjectLists";
import CollectionsList from "./pages/CollectionsList";
import Analytics from "./pages/Analytics";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/sign-up";
import ForgotPassword from "./auth/forgot-password";
import VerifyOtp from "./auth/verify-otp";
import ResetPassword from "./auth/reset-password";
import About from "./pages/AboutUs";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import RoomIdeas from "./components/RoomIdeas";
import Cart from "./pages/Cart";
import MyWishlist from "./pages/MyWishlist";
import CheckOut from "./pages/Checkout";
import Support from "./pages/Support";
import { ProductDetails } from "./pages/ProductDetails";
import MyAccount from "./pages/MyAccount";
import MyOrders from "./pages/MyOrders";
import Wishlist from "./pages/Wishlist";
import AccountSettings from "./pages/AccountSettings";
import PayfastRedirectForm from "./components/Test";
import PaymentSucess from "./pages/PaymentSucess";
import PaymentCancel from "./pages/PaymentCancel";
import GeminiText from "./pages/Gemini";
import Precautions from "./pages/Precautions";
import PaymentForm from "./pages/PaymentForm";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/collections",
    element: <CollectionsList />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/room-ideas",
    element: <RoomIdeas />,
  },
  {
    path: "/shopping-cart",
    element: <Cart/>,
  },
  {
    path: "/wishlist",
    element: <MyWishlist/>,
  },
  {
    path: "/test",
    element: <PayfastRedirectForm/>,
  },
  {
    path: "/payment-sucess",
    element: <PaymentSucess/>,
  },
  {
    path: "/payment-failure",
    element: <PaymentCancel/>,
  },
   {
    path: "/gemini",
    element: <GeminiText/>,
  },
  {
    path: "/precautions",
    element: <Precautions/>,
  },
  {
    path: "/payment-form",
    element: <PaymentForm/>,
  },
  {
    path: "/account",
    element: <MyAccount/>,
    children:[
      {
        path:'orders',
        element:<MyOrders/>
      },
      {
        path:'wishlist',
        element:<Wishlist/>
      },
      {
        path:'settings',
        element:<AccountSettings/>
      }
    ]
  },
  {
    path: "/checkout",
    element: <CheckOut/>,
  },
   {
    path: "/product-details",
    element: <ProductDetails/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "products",
        element: <ProductsList />,
      },
      {
        path: "collections",
        element: <CollectionsList isDashboard={true} />,
      },
      {
        path: "projects",
        element: <ProjectsList />,
      },
      {
        path: "support",
        element: <Support />,
      }
    ],
  },
]);
