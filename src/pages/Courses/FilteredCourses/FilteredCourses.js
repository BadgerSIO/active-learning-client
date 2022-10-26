import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../../shared/Card/Card";

const FilteredCourses = () => {
  const courses = useLoaderData();
  return (
    <div className="col-span-3 w-full">
      <div className="grid grid-cols-4 gap-5">
        {courses.map((course) => (
          <Card key={course.id} course={course}></Card>
        ))}
      </div>
    </div>
  );
};

export default FilteredCourses;
