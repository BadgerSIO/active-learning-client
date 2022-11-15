import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle, FaPaperPlane } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import GoToTop from "../../GoToTop/GoToTop";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const [errors, setErrors] = useState("");
  useTitle("Login");
  const { googleSignIn, gitHubSignIn, loginUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        setErrors("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrors(error.message);
        console.log(error);
      });
  };
  const handleGoogle = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log("error", error));
  };

  //git hub sign in
  const handleGitHub = () => {
    gitHubSignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="min-h-[91.5vh] dark:text-darkText dark:bg-darkBg  flex justify-center items-center">
      <div className="container h-full ">
        <div className="flex justify-center">
          <form
            onSubmit={handleFormSubmit}
            className="w-full lg:w-[550px]  p-10 border border-gray-300 dark:bg-darkCardBg rounded"
          >
            <h1 className="text-2xl font-semibold mb-5">Login</h1>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full placeholder:text-gray-900 p-2 border border-gray-300 dark:text-black"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full mt-7 placeholder:text-gray-900 p-2  border border-gray-300 dark:text-black"
            />
            <p className="text-red-500">
              <small>{errors}</small>
            </p>
            <button className="bg-slate-900 w-full text-white p-3 hover:bg-theme my-5 ">
              <FaPaperPlane className="inline text-lg mr-2"></FaPaperPlane>{" "}
              Submit
            </button>
            <p>
              <small>
                Not registered?{" "}
                <Link className="text-theme ml-2" to="/register">
                  Register here
                </Link>
              </small>
            </p>
            <h6 className="text-center ">OR</h6>
            <div className="md:flex mt-5">
              <button
                onClick={handleGoogle}
                className="bg-slate-900 w-full  flex-1 text-white p-3 hover:bg-theme mb-4 md:mb-0 md:mr-1"
              >
                <FaGoogle className="inline text-lg mr-2"></FaGoogle> Sign in
                with Google
              </button>
              <button
                onClick={handleGitHub}
                className="bg-slate-900 w-full  flex-1 text-white p-3 hover:bg-theme md:ml-1"
              >
                <FaGithub className="inline text-lg mr-2"></FaGithub> Sign in
                with GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Login;
