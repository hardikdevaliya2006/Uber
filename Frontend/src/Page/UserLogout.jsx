import React from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../api/authApi";

const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  
  try {
    authApi
      .get("/users/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login/user")
        }
      });
  } catch (error) {
    console.log(error);
  }

  return <div>User Logout</div>;
};

export default UserLogout;
