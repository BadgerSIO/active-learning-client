import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DetailsContext } from "../Courses";

const SideBar = () => {
  const { cdetails } = useContext(DetailsContext);
  const navigate = useNavigate();
  let categorySide = [];
  cdetails.forEach((course) => {
    if (categorySide.indexOf(course.category) === -1) {
      categorySide.push(course.category);
    }
  });
  const handleCat = (e) => {
    const catval = e.target.innerHTML;
    navigate(catval);
  };
  return (
    <div className="mb-5 lg:mb-0">
      <div className="bg-white border border-gray-300 rounded-md p-5 dark:bg-darkCardBg dark:text-white dark:border-darkBorder">
        <h1 className="text-xl font-semibold mb-5">Course Categories</h1>
        <ul className="list-disc ml-5 space-y-5 hover:marker:text-blue-500 ">
          <li>
            <Link to="/courses">All</Link>
          </li>
          {categorySide.map((c) => (
            <li key={c}>
              <button
                className="capitalize hover:text-theme"
                onClick={handleCat}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
