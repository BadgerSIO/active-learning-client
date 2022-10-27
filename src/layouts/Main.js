import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import { setValue, getValue } from "../utilities/localStorage";
const Main = () => {
  const [mode, setMode] = useState();
  useEffect(() => {
    const storedValue = getValue();
    if (storedValue) {
      setMode(storedValue);
    }
  }, []);
  const handleDarkmode = () => {
    setMode(!mode);
    setValue(!mode);
  };

  return (
    <div className={`${mode ? "dark" : ""}`}>
      <Header handleDarkmode={handleDarkmode} mode={mode}></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
