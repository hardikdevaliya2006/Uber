import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../Context/UserContext";
import authApi from "../api/authApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = { email: email, password: password };
      authApi.post("/users/login", userData).then((response) => {
        if (response.status === 201) {
          setUser(response?.data?.user);
          localStorage.setItem("token", response?.data?.token);
          setEmail("");
          setPassword("");
          navigate("/user/home");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={"h-screen"}>
      <div className={"flex flex-col h-full gap-4"}>
        <h2 className={"font-semibold text-3xl tracking-tighter p-4"}>Uber</h2>
        <form
          onSubmit={(e) => handlesubmit(e)}
          className="w-full flex h-full flex-col items-start justify-between p-4"
        >
          <div className="flex flex-col items-start justify-center w-full gap-4">
            <div className="flex flex-col w-full items-start justify-center gap-2">
              <label className="text-xl" htmlFor="email">
                What's your email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={
                  "bg-gray-100 w-full p-2 text-xl outline-0 rounded-md  pl-3"
                }
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col w-full items-start justify-center gap-2">
              <label className="text-xl" htmlFor="password">
                Enter Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={
                  "bg-gray-100 w-full p-2 text-xl outline-0 rounded-md  pl-3"
                }
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="w-full mt-2">
              <button
                type="submit"
                className="bg-black py-2 w-full text-gray-50 text-xl font-semibold rounded-md"
              >
                Login
              </button>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p>New Here? </p>
              <Link to="/singup/user" className={"text-blue-500"}>
                Create new Account
              </Link>
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="bg-green-700/95 py-2 w-full text-gray-50 text-xl font-semibold rounded-md"
            >
              <Link to="/login/captain">Login as Captain</Link>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
