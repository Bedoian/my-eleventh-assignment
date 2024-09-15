import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery";
import AllFoods from "../Pages/AllFood/AllFoods";
import AddItem from "../Pages/MyProfile/AddItem";
import MyAddedList from "../Pages/MyProfile/MyAddedList";
import FoodDetails from "../Pages/AllFood/FoodDetails";
import MyPurchase from "../Pages/MyProfile/MyPurchase";
import Purchase from "../Pages/Purchase Page/Purchase";
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
          path:'/addItem',
          element:<AddItem></AddItem>
        },
        {
          path:'/myAddedList',
          element:<MyAddedList></MyAddedList>
        },
        {
          path:'/foodDetails/:id',
          element:<FoodDetails></FoodDetails>,
          loader:({params})=>fetch(`http://localhost:5000/items/${params.id}`)
        },
        {
          path:'/myPurchase',
          element:<MyPurchase></MyPurchase>
        },
        {
          path:'/purchase/:id',
          element:<Purchase></Purchase>,
          loader:({params})=>fetch(`http://localhost:5000/items/${params.id}`)
        }
      ]
    },
  ]);