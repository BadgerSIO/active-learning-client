import React from "react";
import { useContext } from "react";
import { CoursesContext } from "../../pages/Home/Home";

const Card = ({ course }) => {
  const { courses } = useContext(CoursesContext);
  const {
    courseName,
    courseBannerUrl,
    duration,
    id,
    instructorName,
    price,
    category,
  } = course;
  return (
    <div className="card card-compact w-full bg-base-100 border border-gray-300 rounded ">
      <figure>
        <img
          src={courseBannerUrl}
          alt="Shoes"
          className="h-48 object-cover w-full"
        />
      </figure>
      <div className="card-body bg-white">
        <h2 className="card-title">Shoes!{courses.length}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
