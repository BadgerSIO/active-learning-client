import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <h1>Hi! Total number of courses is {courses.length}</h1>
    </div>
  );
};

export default Home;
