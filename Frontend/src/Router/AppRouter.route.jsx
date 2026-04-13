import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Singup from "../Page/Singup";
import CaptainLogin from "../Page/CaptainLogin";
import CaptainSingup from "../Page/CaptainSingup";
import Start from "../Page/Start";
import UserLogout from "../Page/UserLogout";
import CaptainHome from "../Page/CaptainHome";
import CaptainProtectedRoute from "./CaptainProtectedRoute.route";
import UserProtectedRoute from "./UserProtectedRoute.route";
import CaptainLogout from "../Page/CaptainLogout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />}></Route>
      <Route path="/login/user" element={<Login />}></Route>
      <Route path="/login/captain" element={<CaptainLogin />}></Route>
      <Route path="/singup/user" element={<Singup />}></Route>
      <Route path="/singup/captain" element={<CaptainSingup />}></Route>
      {/* <Route
        path="/user/home"
        element={
          <UserProtectedRoute>
            <Home />
          </UserProtectedRoute>
        }
      ></Route>
      <Route
        path="/user/logout"
        element={
          <UserProtectedRoute>
            <UserLogout />
          </UserProtectedRoute>
        }
      ></Route>
      <Route
        path="/captain/home"
        element={
          <CaptainProtectedRoute>
            <CaptainHome />
          </CaptainProtectedRoute>
        }
      ></Route>
      <Route
        path="/captain/logout"
        element={
          <CaptainProtectedRoute>
            <CaptainLogout />
          </CaptainProtectedRoute>
        }
      ></Route> */}
      <Route path="/user/home" element={<Home />}></Route>
      <Route path="/user/logout" element={<UserLogout />}></Route>
      <Route path="/captain/home" element={<CaptainHome />}></Route>
      <Route path="/captain/logout" element={<CaptainLogout />}></Route>
    </Routes>
  );
};

export default AppRouter;
