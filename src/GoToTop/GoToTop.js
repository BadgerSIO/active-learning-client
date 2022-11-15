import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoToTop = () => {
  const routerLocation = useLocation();
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    toTop();
  }, [routerLocation]);
  return null;
};

export default GoToTop;
