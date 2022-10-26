import React from "react";
import { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
export const DetailsContext = createContext();
const Courses = () => {
  const cdetails = useLoaderData();
  const info = { cdetails };
  return (
    <div className="container py-10">
      <DetailsContext.Provider value={info}>
        <div className="grid grid-cols-4 gap-10">
          <SideBar></SideBar>
          <Outlet></Outlet>
        </div>
      </DetailsContext.Provider>
    </div>
  );
};

export default Courses;
