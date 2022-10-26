import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero min-h-[70vh]">
      <div className="container min-h-[70vh] flex items-center ">
        <div className="text-white">
          <h1 className="text-lg capitalize">Better Education for a</h1>
          <h2 className="text-6xl uppercase font-bold mt-3 mb-5">
            Better World
          </h2>
          <button className="py-3 px-3 font-semibold text-base capitalize rounded  bg-theme hover:bg-black">
            <Link to="/courses">Get Started</Link>
            <FaLongArrowAltRight className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
