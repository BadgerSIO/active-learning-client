import React from "react";
import { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import GoToTop from "../../GoToTop/GoToTop";
import useTitle from "../../hooks/useTitle";
import SideBar from "./SideBar/SideBar";
export const DetailsContext = createContext();
const Courses = () => {
  useTitle("Courses -");
  const cdetails = useLoaderData();
  const info = { cdetails };
  return (
    <div className="py-10 dark:bg-darkBg min-h-[91.5vh]">
      <div className="container">
        <DetailsContext.Provider value={info}>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-10">
            <SideBar></SideBar>
            <Outlet></Outlet>
          </div>
        </DetailsContext.Provider>
      </div>
      <GoToTop />
    </div>
  );
};

export default Courses;
