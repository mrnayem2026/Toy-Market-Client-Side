import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../layouts/Main/Main";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/My Toys/MyToys";
import AddAToys from "../pages/Add A Toys/AddAToys";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Main></Main>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/all_toys",
        element: <AllToys></AllToys>
      },
      {
        path: "/my_toys",
        element: <MyToys></MyToys>
      },
      {
        path: "/add_a_toys",
        element: <AddAToys></AddAToys>
      }
    ]
  },
]);

export default router;