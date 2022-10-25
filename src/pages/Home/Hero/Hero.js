import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero min-h-[60vh]">
      <div className="container min-h-[60vh] flex items-center ">
        <div className="text-white">
          <h1 className="text-lg capitalize">Better Education for a</h1>
          <h2 className="text-6xl uppercase font-bold mt-3 mb-5">
            Better World
          </h2>
          <button className="py-2 px-3 font-semibold text-base capitalize rounded  bg-theme hover:bg-black">
            <Link>Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
