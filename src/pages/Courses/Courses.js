import React from "react";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const cdetails = useLoaderData();
  return (
    <div>
      <h1>This is courses{cdetails.length}</h1>
    </div>
  );
};

export default Courses;
