import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../Context/UserContext";
import authApi from "../api/authApi";

const UserProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login/user");
    }

    const fetchProfile = async () => {
      try {
        const response = await authApi.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setUser(response.data.captain);
        }
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        navigate("/login/user");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [token, navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectedRoute;
