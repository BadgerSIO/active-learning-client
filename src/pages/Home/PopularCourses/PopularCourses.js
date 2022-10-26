import React from "react";
import Card from "../../../shared/Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./PopularCourses.css";
// import required modules
import { Autoplay, Pagination, FreeMode } from "swiper";
import { useContext } from "react";
import { CoursesContext } from "../Home";
import SlideNext from "./SlideNext/SlideNext";
const PopularCourses = () => {
  const { courses } = useContext(CoursesContext);
  return (
    <div className="py-20">
      <div className="container">
        <div className="-mb-12">
          <h1 className="text-3xl font-semibold capitalize">Popular Courses</h1>
          <h2 className="text-gray-600 text-base capitalize mt-5">
            Limitless learning, more possibilities
          </h2>
        </div>
        <div className="py-3 px-1 relative">
          <Swiper
            slidesPerView={5}
            loop
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
          >
            <SlideNext></SlideNext>
            {courses.map((course) => (
              <SwiperSlide>
                <Card key={course.id} course={course}></Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
