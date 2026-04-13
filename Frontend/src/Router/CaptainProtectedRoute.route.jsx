import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../Context/CaptainContext";
import authApi from "../api/authApi";

const CaptainProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login/captain");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await authApi.get("/captains/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setCaptain(response.data.captain);
        }
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        navigate("/login/captain");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedRoute;