import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import LoginFBGoogle from "./loginFBGoogle";

const Login = () => {
  const [error, setError] = useState("");
  const emailRef = useRef(null);

  const { loginUser, resetPassword } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();
  const from = location?.state?.from?.pathname;

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    const email = event.target.email.value;
    const password = event.target.password.value;

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from || "/");
      })
      .catch((err) => setError(err.message));
  };

  const handleReset = () => {
    const email = emailRef.current.value;
    if (email) {
      resetPassword(email)
        .then(() => {
          alert("password reset email has been send");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      alert("enter your email address");
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleLogin}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={emailRef}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 focus:outline-none"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 focus:outline-none"
                  required
                />
                <p className="text-red-500">{error}</p>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Login
              </button>

              <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet ?
                <Link
                  to="/register"
                  className="font-medium text-blue-600 hover:underline ml-2"
                >
                  Sign up
                </Link>
              </p>
              <p className="text-sm font-light text-gray-500 ">
                forgot your password ?
                <span
                  onClick={() => handleReset()}
                  className="font-medium text-blue-600 hover:underline ml-2 cursor-pointer"
                >
                  Reset Now
                </span>
              </p>
            </form>
            <LoginFBGoogle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
