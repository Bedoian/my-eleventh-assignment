import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";
import AddBooks from "../Pages/AddBooks";
import AllBooks from "../Pages/AllBooks";
import BorrowBooks from "../Pages/BorrowBooks";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        path:'/',
        element:<App></App>
        },
        {
          path:'/addBooks',
          element:<AddBooks></AddBooks>
        },
        {
          path:'/allBooks',
          element:<AllBooks></AllBooks>
        },
        {
          path:'/borrowBooks',
          element:<BorrowBooks></BorrowBooks>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);