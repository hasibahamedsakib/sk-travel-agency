import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";

import app from "../../Firebase/firebase.config";

const auth = getAuth(app);

const LoginFBGoogle = () => {
  const facebookProvider = new FacebookAuthProvider();

  const handleFbLogin = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => console.log(err.message));
  };
  const handleGoogleLogin = () => {
    console.log("google login");
  };
  return (
    <section className=" dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 space-y-6">
          <button
            onClick={handleFbLogin}
            className="w-full text-blue-700 bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-blue-500"
          >
            Login with Facebook
          </button>
          <button
            onClick={handleGoogleLogin}
            className="w-full text-green-500 bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-green-500"
          >
            Login with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginFBGoogle;
