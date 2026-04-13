import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../Context/CaptainContext";
import authApi from "../api/authApi";

const CaptainSingup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const newCaptainData = {
        fullName: {
          firstName: firstName,
          lastName: lastName,
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType,
        },
      };

      await authApi
        .post("/captains/register", newCaptainData)
        .then((response) => {
          if (response.status === 201) {
            setCaptain(response.data.captain);
            localStorage.setItem("token", response.data.token);
            setEmail("");
            setPassword("");
            setFirstName("");
            setLastName("");
            setVehicleCapacity("");
            setVehicleColor("");
            setVehiclePlate("");
            setVehicleType("");
            navigate("/captain/home");
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
            <div className="flex flex-col w-full items-start justify-center gap-1">
              <label className="text-xl" htmlFor="fullName">
                What's our captain's name
              </label>
              <div className="flex w-full gap-2 items-center justify-center">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  className={
                    "bg-gray-100 w-1/2 p-2 text-xl outline-0 rounded-md pl-3"
                  }
                  id="fullName"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  className={
                    "bg-gray-100 w-1/2 p-2 text-xl outline-0 rounded-md pl-3"
                  }
                  id="fullName"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full items-start justify-center gap-1">
              <label className="text-xl" htmlFor="email">
                What's our captain's email
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
            <div className="flex flex-col w-full items-start justify-center gap-1">
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
            <div className="flex flex-col w-full items-start justify-center gap-1">
              <label className="text-xl" htmlFor="vehicleColor">
                Enter Vehicle Color
              </label>
              <input
                type="text"
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
                className={
                  "bg-gray-100 w-full p-2 text-xl outline-0 rounded-md  pl-3"
                }
                id="vehicleColor"
                placeholder="Black"
                required
              />
            </div>
            <div className="flex flex-col w-full items-start justify-center gap-1">
              <label className="text-xl" htmlFor="vehiclePlate">
                Vehicle Plate
              </label>
              <input
                type="text"
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
                className={
                  "bg-gray-100 w-full p-2 text-xl outline-0 rounded-md  pl-3"
                }
                id="vehiclePlate"
                placeholder="AB 00 XY 0000"
                required
              />
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-4">
              <div className="flex flex-col w-full items-start justify-center gap-1">
                <label className="text-xl" htmlFor="vehicleCapacity">
                  Vehicle Capacity & Type
                </label>
                <div className="flex w-full gap-2 items-center justify-center">
                  <input
                    type="number"
                    value={vehicleCapacity}
                    onChange={(e) => {
                      setVehicleCapacity(e.target.value);
                    }}
                    className={
                      "bg-gray-100 w-1/2 p-2 text-xl outline-0 rounded-md pl-3"
                    }
                    id="vehicleCapacity"
                    placeholder="4"
                    min={1}
                    max={4}
                    required
                  />
                  <select
                    name="vehicleType"
                    id="vehicleType"
                    className={
                      "bg-gray-100 w-1/2 p-2 text-xl outline-0 rounded-md "
                    }
                    required
                    value={vehicleType}
                    onChange={(e) => {
                      setVehicleType(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Select Vehicle
                    </option>
                    <option value="car">Car</option>
                    <option value="auto">Auto</option>
                    <option value="moto">Moto</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full mt-2">
              <button
                type="submit"
                className="bg-black py-2 w-full text-gray-50 text-xl font-semibold rounded-md"
              >
                Create an Captain Account
              </button>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <p>Already have a account? </p>
              <Link className={"text-blue-500"} to="/login/captain">
                Login here
              </Link>
            </div>
          </div>
          <div className="w-full text-sm">
            <p>
              This site is protected by reCAPTCHA and the{" "}
              <span className="underline">Google Privacy Policy</span> and{" "}
              <span className="underline">Term of Service</span> apply.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CaptainSingup;
