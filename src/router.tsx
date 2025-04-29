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
import Collections from "./pages/Collections";
import CollectionsCard from "./components/CollectionsCard";
import Products from "./pages/Products";
import MyOrders from "./pages/MyOrders";
import ContactUs from "./pages/ContactUs";
import RoomIdeas from "./components/RoomIdeas";
import Cart from "./pages/Cart";
import MyWishlist from "./pages/MyWishlist";


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
    path: "/account",
    element: <MyOrders/>,
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
    ],
  },
]);
