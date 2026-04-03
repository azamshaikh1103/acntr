import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./components/RestaurantPage";
import StatePage from "./pages/State";
import Support from "./pages/Support";
import SupportFromApp from "./pages/SupportFromApp";
import SupportFromResto from "./pages/SupportFromResto";
import LifeCycle from "./pages/LifeCycle";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ContextPage from "./pages/ContextPage";
import Employees from "./pages/Employees";
import CakeDetails from "./pages/CakeDetails";
import AddProducts from "./pages/AddProducts";
import Cart from "./pages/Cart";
import Loader from "./pages/Loader";

const CakeGallery = lazy(() => import("./pages/CakeGallery"));

const WithSuspense = (Component) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cakes",
        element: WithSuspense(CakeGallery),
      },
      {
        path: "/increement",
        element: <StatePage />,
      },
      {
        path: "/restaurants",
        element: <RestaurantPage />,
      },
      {
        path: "/lifecycle",
        element: <LifeCycle />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/support",
        element: <Support />,
        children: [
          {
            path: "/support/supportfromapp",
            element: <SupportFromApp />,
          },
          {
            path: "/support/supportfromresto",
            element: <SupportFromResto />,
          },
        ],
      },
      {
        path: "/context",
        element: <ContextPage />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/cakedetails/:id",
        element: <CakeDetails />,
      },
      {
        path: "/add-products",
        element: <AddProducts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default Router;
