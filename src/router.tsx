import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import LandingPage from "./Landing-Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
]);
