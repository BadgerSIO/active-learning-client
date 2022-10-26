import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";

const Main = () => {
  const [mode, setMode] = useState(false);
  const handleDarkmode = () => {
    setMode(!mode);
  };
  return (
    <div className={`${mode ? "dark" : ""}`}>
      <Header handleDarkmode={handleDarkmode} mode={mode}></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
