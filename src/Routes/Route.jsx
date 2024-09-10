import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery";
import AllFoods from "../Pages/AllFood/AllFoods";
import AddItem from "../Pages/AddItem";
import MyOrder from "../Pages/MyPurchase";
import MyAddedList from "../Pages/MyAddedList";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        path:'/',
        element:<Home></Home>
        },
        {
          path:'/gallery',
          element:<Gallery></Gallery>
        },
        {
          path:'/allFoods',
          element:<AllFoods></AllFoods>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/myPurchase',
          element:<MyOrder></MyOrder>
        },
        {
          path:'/addItem',
          element:<AddItem></AddItem>
        },
        {
          path:'/myAddedList',
          element:<MyAddedList></MyAddedList>
        }
      ]
    },
  ]);