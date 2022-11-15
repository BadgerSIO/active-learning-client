import React from "react";
import { useContext } from "react";
import {
  FaLongArrowAltRight,
  FaPaypal,
  FaRegClock,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Checkout = () => {
  const course = useLoaderData();
  const {
    courseBannerUrl,
    category,
    courseName,
    duration,
    enrolled,
    ratings,
    instructorName,
    id,
    price,
  } = course;
  const { user } = useContext(AuthContext);
  useTitle("Checkout -");
  return (
    <div className="py-10 min-h-[91.5vh] flex items-center dark:bg-darkBg dark:text-white">
      <div className="container grid md:grid-cols-2 gap-10 min-h-full content-center">
        <div>
          <h1 className="text-5xl font-semibold mb-10">Checkout</h1>
          <form className="w-full p-10 border border-gray-300 dark:bg-darkCardBg dark:border-[#21262d] rounded">
            <input
              type="text"
              name="name"
              readOnly
              defaultValue={user?.displayName}
              className="w-full placeholder:text-gray-900 mb-5 p-2 border border-gray-300 dark:text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              defaultValue={user?.email}
              className="w-full placeholder:text-gray-900 mb-5 p-2 border border-gray-300 dark:text-black"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full placeholder:text-gray-900 mb-5 p-2 border border-gray-300 dark:text-black"
            />
            <button className="bg-slate-900 flex-1 text-white p-3 hover:bg-theme ml-1">
              <FaPaypal className="inline text-lg mr-2"></FaPaypal> Continue
              with PayPal
            </button>
          </form>
        </div>
        <div>
          <div className="card card-compact w-full bg-base-100 border border-gray-300 rounded dark:border-darkBorder ">
            <figure>
              <img
                src={courseBannerUrl}
                alt="Shoes"
                className="h-48 object-cover w-full"
              />
            </figure>
            <div className="card-body bg-white dark:bg-darkCardBg dark:text-white">
              <p className="text-xs font-semibold text-gray-500">
                Category:{" "}
                <span className="text-theme capitalize">{category}</span>
              </p>
              <h2 className="card-title text-base ">{courseName}</h2>
              <div className="grid grid-cols-3">
                <div className="flex items-center">
                  <FaRegClock className="inline-block text-base mr-1" />{" "}
                  <span className="inline-block">{duration} H</span>
                </div>
                <div className="flex items-center place-self-center">
                  <FaUsers className="inline-block text-base mr-1" />{" "}
                  <span className="inline-block">{enrolled}</span>
                </div>
                <div className="flex items-center place-self-end">
                  <FaStar className="inline-block text-base mr-1" />{" "}
                  <span className="inline-block">{ratings}/5</span>
                </div>
              </div>
              <p>
                <small>By: {instructorName}</small>
              </p>
              <div className="card-actions justify-between items-end">
                <h6 className="text-4xl font-semibold text-theme">{price}</h6>
                <Link
                  className="text-xs capitalize p-3 bg-theme text-white rounded hover:bg-gray-900"
                  to={`/details/${id}`}
                >
                  Show Details{" "}
                  <FaLongArrowAltRight className="inline-block ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
