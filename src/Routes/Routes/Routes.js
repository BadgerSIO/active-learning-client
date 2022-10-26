import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import CourseCards from "../../shared/CourseCards/CourseCards";
import Courses from "../../pages/Courses/Courses";
import FilteredCourses from "../../pages/Courses/FilteredCourses/FilteredCourses";
import Home from "../../pages/Home/Home";
import Details from "../../pages/Details/Details";

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
        children: [
          {
            path: "/courses",
            element: <CourseCards></CourseCards>,
          },
          {
            path: ":value",
            loader: async ({ params }) => {
              return fetch(`http://localhost:5000/courses/${params.value}`);
            },
            element: <FilteredCourses></FilteredCourses>,
          },
        ],
      },
      {
        path: "/details/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/details/${params.id}`);
        },
        element: <Details></Details>,
      },
    ],
  },
]);
