import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero min-h-[70vh]">
      <div className="container min-h-[70vh] flex items-center px-2">
        <div className="text-white">
          <h1 className="text-lg capitalize">Better Education for a</h1>
          <h2 className="text-4xl md:text-6xl uppercase font-bold mt-3 mb-10">
            Better World
          </h2>
          <Link
            to="/courses"
            className="py-3 px-3 font-semibold text-base capitalize rounded  bg-theme hover:bg-black"
          >
            Get Started
            <FaLongArrowAltRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
