import React from "react";
import { useContext } from "react";
import Card from "../../../shared/Card/Card";
import { DetailsContext } from "../Courses";

const CourseCards = () => {
  const { cdetails } = useContext(DetailsContext);
  return (
    <div className="col-span-3 w-full">
      <div className="grid grid-cols-4 gap-5">
        {cdetails.map((course) => (
          <Card key={course.id} course={course}></Card>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
