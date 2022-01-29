import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import '../Firebase.js';


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(()=>{
      const auth = getAuth();
      const unsubscripe =  onAuthStateChanged(auth,(user)=>{
          setCurrentUser(user);
          setLoading(false);
      })
      return unsubscripe;
  },[])

  //signup function
  const signUp = async (email, password, username) => {
    const auth = getAuth();
    console.log("Auth------", auth);
    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  };
  // logIn funtion
  const logIn = (email, password) => {
    const auth = getAuth();
    console.log("Auth===========", auth);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signOut function
  const logOut = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const value = {
    currentUser,
    signUp,
    logOut,
    logIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
