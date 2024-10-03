import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleData(e) {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lg:w-[60%] md:w-[80%] xl:w-[40%] sm:w-[90%] w-[100%] h-[60%] shadow-2xl rounded-3xl bg-gray-100">
        <div className="flex flex-col justify-center items-center gap-10 h-full">
          <h1 className="text-2xl underline mb-10">Login</h1>
          <form onSubmit={handleData} className="flex flex-col gap-5 w-[80%]">
            <div className="">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="•••••••••"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Login
            </button>
          </form>
          <h1>
            Don't have an account? {""}
            <NavLink to={"/signup"} className="text-blue-400 underline">
              Signup
            </NavLink>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
