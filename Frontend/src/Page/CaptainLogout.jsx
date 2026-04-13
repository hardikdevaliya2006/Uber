import React from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../api/authApi";

const CaptainLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  
  try {
    authApi
      .get("/captains/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login/captain")
        }
      });
  } catch (error) {
    console.log(error);
  }

  return <div>Captain Logout</div>;
};

export default CaptainLogout;
