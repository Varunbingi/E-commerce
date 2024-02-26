import React from "react";
import ReactDom from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Favourite from "./components/Favourite";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ItemCard from "./components/ItemCard";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div className=" bg-gradient-to-br from-zinc-200 to-gray-600 min-h-screen max-h-full">
      <Header />
      <Outlet />
    </div>
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
        path: "/contact",
        element: <Contact />,
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
