import React from "react";
import ReactDom from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Favourite from "./components/Favourite";
import Header from "./components/Header";
import Error from "./components/Error";
import ItemCard from "./components/ItemCard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Categories from "./components/Categories";
import CategoryCard from "./components/CategoryCard";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
    <div className=" bg-gradient-to-br from-zinc-200 to-gray-600 min-h-screen max-h-full max-w-screen-2xl  ">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/favourite",
        element: <Favourite />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/categories",
        element: <Categories />,
        
      },
      {
        path:'/category/:id',
        element:<CategoryCard/>,
      
      },
      {
        path: "/:id",
        element: <ItemCard />,
      },
      
     
    ],
    errorElement: <Error />,
  },
  {
    path:"/login",
    element:<Login/>,
  
  },
  {
    path:'/signup',
    element:<Signup/>,
  }
  
]);

const root = ReactDom.createRoot(document.getElementById("app"));
root.render(<RouterProvider router={appRouter} />);
