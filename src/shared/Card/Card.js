import React from "react";
import { useContext } from "react";
import { CoursesContext } from "../../pages/Home/Home";
import {
  FaRegClock,
  FaUsers,
  FaStar,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ course }) => {
  const { courses } = useContext(CoursesContext);
  const {
    courseName,
    courseBannerUrl,
    duration,
    id,
    instructorName,
    price,
    enrolled,
    ratings,
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
        <p className="text-xs font-semibold text-gray-500">
          Category: <span className="text-theme capitalize">{category}</span>
        </p>
        <h2 className="card-title text-base">
          {courseName.length >= 40
            ? courseName.slice(0, 40) + "..."
            : courseName}
        </h2>
        <div className="grid grid-cols-3">
          <div className="flex items-center">
            <FaRegClock className="inline-block text-base mr-1" />{" "}
            <span className="inline-block">{duration} H</span>
          </div>
          <div className="flex items-center place-self-center">
            <FaUsers className="inline-block text-base mr-1" />{" "}
            <span className="inline-block">{enrolled}</span>
          </div>
          <div className="flex items-center place-self-end">
            <FaStar className="inline-block text-base mr-1" />{" "}
            <span className="inline-block">{ratings}/5</span>
          </div>
        </div>
        <p>
          <small>By: {instructorName}</small>
        </p>
        <div className="card-actions justify-between items-end">
          <h6 className="text-lg font-semibold text-theme">{price}</h6>
          <button className="text-xs capitalize p-3 bg-theme text-white rounded hover:bg-gray-900">
            <Link>
              Show Details <FaLongArrowAltRight className="inline-block ml-1" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
