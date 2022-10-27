import React, { useEffect } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // google signin
  const googleSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //register with email password
  const createuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //update users profile
  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //signin with email pass
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signout
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const authinfo = {
    user,
    createuser,
    updateUser,
    loginUser,
    googleSignIn,
    loading,
    logout,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
