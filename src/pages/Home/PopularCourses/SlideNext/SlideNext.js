import React from "react";
import { useSwiper } from "swiper/react";

const SlideNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        onClick={() => swiper.slideNext()}
        className="m-4 py-2 px-3 bg-slate-400 rounded text-white font-semibold uppercase hover:bg-black "
      >
        {children}
      </button>
    </div>
  );
};

export default SlideNext;
