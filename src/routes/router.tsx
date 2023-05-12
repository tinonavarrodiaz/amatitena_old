import { createBrowserRouter } from "react-router-dom"
import AppTemplate from "../components/templates/AppTemplate";
import App from "../App";
import Test from "../components/pages/Test";
import Home from "../components/pages/Home";
import History from "../components/pages/History";
import Process from "../components/pages/Process";
import WhereToBuy from "../components/pages/WhereToBuy";
import Tours from "../components/pages/Tours";
import Contact from "../components/pages/Contact";

const Router = createBrowserRouter([
  {

    path: "/",
    element: <AppTemplate />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about-us',
        element: <History />
      },
      {
        path: '/process',
        element: <Process />
      },
      {
        path: '/where-to-buy',
        element: <WhereToBuy />
      },
      {
        path: '/tours',
        element: <Tours />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  },


]);

export default Router;
