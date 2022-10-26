import React from "react";
import { useContext } from "react";
import Card from "../Card/Card";
import { DetailsContext } from "../../pages/Courses/Courses";

const CourseCards = () => {
  const { cdetails } = useContext(DetailsContext);
  return (
    <div className="col-span-3 w-full">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {cdetails.map((course) => (
          <Card key={course.id} course={course}></Card>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
