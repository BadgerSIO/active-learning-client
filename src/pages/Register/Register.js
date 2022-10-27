import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle, FaPaperPlane } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const { googleSignIn, createuser, updateUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const username = form.name.value;
    const userphotourl = form.photourl.value;
    console.log(email, password, username, userphotourl);
    createuser(email, password)
      .then((result) => {
        handleUpdatingUserProfile(username, userphotourl);
      })
      .catch((error) => console.log(error));
  };
  const handleUpdatingUserProfile = (username, userphotourl) => {
    const profile = {
      displayName: username,
      photoURL: userphotourl,
    };
    updateUser(profile)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const handleGoogle = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="min-h-[91.5vh] dark:bg-darkBg flex justify-center items-center">
      <div className="container h-full ">
        <div className="flex justify-center">
          <form
            onSubmit={handleFormSubmit}
            className="w-[550px]  p-10 border border-gray-300 dark:bg-slate-900 rounded"
          >
            <h1 className="text-2xl font-semibold mb-5">Register</h1>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full placeholder:text-gray-900 mb-5 p-2 border border-gray-300"
            />
            <input
              type="text"
              name="photourl"
              placeholder="Enter Photo URL"
              className="w-full placeholder:text-gray-900 mb-5 p-2 border border-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full placeholder:text-gray-900 mb-5 p-2 border border-gray-300"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full placeholder:text-gray-900 mb-5 p-2  border border-gray-300"
              required
            />
            <button
              type="submit"
              className="bg-slate-900 w-full text-white p-3 hover:bg-theme my-5 "
            >
              <FaPaperPlane className="inline text-lg mr-2"></FaPaperPlane>{" "}
              Submit
            </button>
            <p>
              <small>
                Already registered?
                <Link className="text-theme ml-2" to="/login">
                  Login Here
                </Link>
              </small>
            </p>
            <h6 className="text-center ">OR</h6>
            <div className="flex mt-5">
              <button
                onClick={handleGoogle}
                className="bg-slate-900 flex-1 text-white p-3 hover:bg-theme mr-1"
              >
                <FaGoogle className="inline text-lg mr-2"></FaGoogle> Sign in
                with Google
              </button>
              <button className="bg-slate-900 flex-1 text-white p-3 hover:bg-theme ml-1">
                <FaGithub className="inline text-lg mr-2"></FaGithub> Sign in
                with GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
