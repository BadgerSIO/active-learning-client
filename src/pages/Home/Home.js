import React from "react";
import { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import GoToTop from "../../GoToTop/GoToTop";
import useTitle from "../../hooks/useTitle";
import Hero from "./Hero/Hero";
import PopularCourses from "./PopularCourses/PopularCourses";
export const CoursesContext = createContext();
const Home = () => {
  useTitle("");
  const courses = useLoaderData();
  const courseinfo = { courses };
  return (
    <div>
      <Hero></Hero>
      <CoursesContext.Provider value={courseinfo}>
        <PopularCourses></PopularCourses>
      </CoursesContext.Provider>
      <GoToTop />
    </div>
  );
};

export default Home;
