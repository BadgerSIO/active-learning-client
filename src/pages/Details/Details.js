import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaBook,
  FaClock,
  FaCrown,
  FaDownload,
  FaRegBookmark,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { SiSpeedtest } from "react-icons/si";
const Details = () => {
  const details = useLoaderData();
  const {
    courseName,
    courseBannerUrl,
    duration,
    id,
    instructorName,
    instructorImage,
    price,
    enrolled,
    lectures,
    ratings,
    category,
    level,
    descripton,
    overview,
  } = details;
  return (
    <div className="py-10">
      <div className="container">
        <div className="grid grid-cols-4 pt-10 gap-10">
          <div className="col-span-3">
            <div className="grid grid-cols-3">
              <div className="flex">
                <div>
                  <FaRegBookmark className="inline-block text-4xl text-theme" />
                </div>
                <div className="ml-3">
                  <h1 className="text-xs text-gray-400">Category</h1>
                  <h2 className="text-lg capitalize">{category}</h2>
                </div>
              </div>
              <div className="flex justify-self-center">
                <div>
                  <img
                    src={instructorImage}
                    alt={instructorName}
                    className="w-20  object-cover rounded"
                  />
                </div>
                <div className="ml-3">
                  <h1 className="text-xs text-gray-400 capitalize">
                    instructor
                  </h1>
                  <h2 className="text-lg capitalize">{instructorName}</h2>
                </div>
              </div>
              <div className="justify-self-end">
                <button className="p-3 bg-theme rounded text-white text-xl hover:bg-slate-900 ">
                  <FaDownload className="inline-block text-xl mr-3 -mt-1" />
                  <span>Download Pdf</span>
                </button>
              </div>
            </div>
            <h1 className="text-5xl leading-snug font-semibold text-slate-900 mt-5 pt-5 border-t-2">
              {courseName}
            </h1>
            <h2 className="py-5 text-xl text-gray-600">{descripton}</h2>
            <img
              src={courseBannerUrl}
              className="w-full h-96 object-cover bg-center border-4 border-slate-200"
              alt={courseName}
            />
            <div className="p-5 border border-gray-300 rounded-lg mt-8">
              <h6 className="text-xl  mb-5 font-semibold">Course Overview</h6>
              <ul className="list-disc list-inside space-y-5">
                {overview.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="flex items-end">
                <div className="flex-1">
                  <Link
                    to={`/checkout/${id}`}
                    className="mt-5 p-3 bg-theme inline-block text-white rounded hover:bg-slate-900"
                  >
                    <FaCrown className="inline-block mr-1 -mt-1 text-yellow-400 text-xl" />{" "}
                    Get Premium Access
                  </Link>
                </div>
                <h5 className="flex-1 text-end text-2xl">Price: {price}</h5>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white border border-gray-300 rounded-md p-5 sticky top-5">
              <ul className="space-y-10">
                <li className="text-lg">
                  <FaUsers className="inline text-4xl mr-2 text-theme" />{" "}
                  Enrolled:
                  <span className="mx-1">{enrolled}</span>
                  Students
                </li>
                <li className="text-lg">
                  <FaClock className="inline text-4xl mr-2 text-theme" />{" "}
                  Duration:
                  <span className="mx-1">{duration}</span>
                  Hours
                </li>
                <li className="text-lg">
                  <FaBook className="inline text-4xl mr-2 text-theme" />{" "}
                  Lectures:
                  <span className="mx-1">{lectures}</span>
                </li>
                <li className="text-lg">
                  <SiSpeedtest className="inline text-4xl mr-2 text-theme" />{" "}
                  Level:
                  <span className="mx-1 capitalize">{level}</span>
                </li>
                <li className="text-lg">
                  <FaStar className="inline text-4xl mr-2 text-theme" /> Rating:
                  <span className="ml-1 capitalize">{ratings}</span>/5
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
