import React from "react";
import { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "./Hero/Hero";
import PopularCourses from "./PopularCourses/PopularCourses";
export const CoursesContext = createContext();
const Home = () => {
  const courses = useLoaderData();
  const courseinfo = { courses };
  console.log(courses);
  return (
    <div>
      <Hero></Hero>
      <CoursesContext.Provider value={courseinfo}>
        <PopularCourses></PopularCourses>
      </CoursesContext.Provider>
    </div>
  );
};

export default Home;
