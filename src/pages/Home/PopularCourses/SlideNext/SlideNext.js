import React from "react";
import { useSwiper } from "swiper/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const SlideNext = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-start md:justify-end absolute top-0 md:right-0 z-50">
      <button
        onClick={() => swiper.slidePrev()}
        className=" p-3 border border-gray-300 rounded text-gray-500 font-semibold uppercase bg-white hover:bg-theme hover:text-white "
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="  ml-4 p-3 border border-gray-300 rounded text-gray-500 font-semibold uppercase bg-white hover:bg-theme hover:text-white "
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default SlideNext;
