import React from "react";

const Blog = () => {
  return (
    <div className="pb-10 dark:bg-darkBg">
      <div className="bg-darkCardBg py-10">
        <div className="container">
          <h1 className="text-2xl text-white font-semibold uppercase">Blog</h1>
        </div>
      </div>
      <div className="container">
        <div className=" p-10 lg:w-3/4 mx-auto border border-gray-300 dark:border-darkBorder dark:text-darkText dark:bg-darkCardBg my-7">
          <h1 className="text-4xl mb-7 capitalize">what is cors?</h1>
          <p className="text-xl">
            Cross-origin resource sharing is a mechanism that allows restricted
            resources on a web page to be requested from another domain outside
            the domain from which the first resource was served. A web page may
            freely embed cross-origin images, stylesheets, scripts, iframes, and
            videos.
          </p>
        </div>
        <div className=" p-10 lg:w-3/4 mx-auto border border-gray-300 dark:border-darkBorder dark:text-darkText dark:bg-darkCardBg my-7">
          <h1 className="text-4xl mb-7 capitalize">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <p className="text-xl">
            I am using firebase because it's is developer friendly and it is
            developed by google which is best in the market. There are severel
            alternative in the market. Here is a list below.
          </p>
          <ul className="list-disc marker:text-blue-300 list-inside">
            <li>
              <a href="https://www.okta.com/products/authentication/">okta</a>
            </li>
            <li>
              <a href="https://supabase.com/auth">Supabase</a>
            </li>
            <li>
              <a href="https://www.ory.sh/">Ory</a>
            </li>
            <li>
              <a href="https://stytch.com/">STYTCH</a>
            </li>
            <li>
              <a href="https://www.pingidentity.com/en/platform/capabilities/authentication-authority.html">
                PingIdentity
              </a>
            </li>
          </ul>
        </div>
        <div className=" p-10 lg:w-3/4 mx-auto border border-gray-300 dark:border-darkBorder dark:text-darkText dark:bg-darkCardBg my-7">
          <h1 className="text-4xl mb-7 capitalize">
            {" "}
            How does the private route work?
          </h1>
          <p className="text-xl">
            The react private route component renders child components children
            if the user is logged in. If not logged in the user is redirected to
            the /login page with the return url passed in the location state
            property.
          </p>
        </div>
        <div className=" p-10 lg:w-3/4 mx-auto border border-gray-300 dark:border-darkBorder dark:text-darkText dark:bg-darkCardBg my-7">
          <h1 className="text-4xl mb-7 capitalize">
            What is Node? How does Node work?
          </h1>
          <p className="text-xl">
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
