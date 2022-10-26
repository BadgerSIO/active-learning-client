import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/"),
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <Courses></Courses>,
      },
    ],
  },
]);
