import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import AllFoods from "../Pages/AllFood/AllFoods";
import AddItem from "../Pages/MyProfile/AddItem";
import MyAddedList from "../Pages/MyProfile/MyAddedList/MyAddedList";
import FoodDetails from "../Pages/AllFood/FoodDetails";
import MyPurchase from "../Pages/MyProfile/MyPurchase";
import Purchase from "../Pages/Purchase Page/Purchase";
import UpdatePage from "../Pages/MyProfile/MyAddedList/UpdatePage";
import ErrorPage from "../Pages/ErrorPage";
import PrivetRoute from "../Provider/PrivetRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/gallery',
        element: <PrivetRoute><Gallery></Gallery></PrivetRoute>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/review`)
      },
      {
        path: '/allFoods',
        element: <PrivetRoute><AllFoods></AllFoods></PrivetRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/addItem',
        element: <PrivetRoute><AddItem></AddItem></PrivetRoute>
      },
      {
        path: '/myAddedList',
        element:<PrivetRoute> <MyAddedList></MyAddedList></PrivetRoute>
      },
      {
        path: '/foodDetails/:id',
        element: <PrivetRoute><FoodDetails /></PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)
      },
      {
        path: '/myPurchase',
        element: <PrivetRoute><MyPurchase></MyPurchase></PrivetRoute>
      },
      {
        path: '/purchase/:id',
        element: <Purchase></Purchase>,
        loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <UpdatePage></UpdatePage>,
        loader: ({ params }) => fetch(`http://localhost:5000/myAddedItem/${params.id}`)
      }
    ]
  },
]);