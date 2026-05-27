import React, { useContext, useState } from "react";
import { PiUserBold } from "react-icons/pi";
import RidePopUp from "../Components/RidePopUp";
import ConfirmRidePopUp from "../Components/ConfirmRidePopUp";
import { CaptainDataContext } from "../Context/CaptainContext";

const CaptainHome = () => {
  const [showRidePopUp, setShowRidePopUp] = useState(true);
  const [showConfirmRidePopUp, setShowConfirmRidePopUp] = useState(false);

  const { captain } = useContext(CaptainDataContext);

  return (
    <main className={"h-screen"}>
      <div className={"relative h-full overflow-hidden"}>
        <h2 className={"absolute font-semibold text-3xl tracking-tighter p-4"}>
          Uber
        </h2>
        <div className="bg-[url(/public/uber_map.png)] h-full bg-cover"></div>
        <div
          className={
            "w-full absolute bottom-0 bg-white p-7 flex flex-col gap-4 border-gray-200 border rounded-t-3xl"
          }
        >
          <div className="w-full flex-col gap-2 flex items-start justify-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start gap-2">
                <div className="bg-gray-200 border border-gray-300 flex items-center justify-center rounded-full h-10 w-10">
                  <PiUserBold className="text-gray-800 text-2xl"></PiUserBold>
                </div>
                <p className="text-2xl font-semibold">
                  {captain?.fullName?.firstName +
                    " " +
                    captain?.fullName?.lastName}
                </p>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <p className="font-semibold text-xl">₹296.50</p>
                <p className="text-gray-600">Eraned</p>
              </div>
            </div>
            <span className="border rounded-full border-gray-200 w-full"></span>
          </div>
        </div>
        <RidePopUp
          showRidePopUp={showRidePopUp}
          setShowRidePopUp={setShowRidePopUp}
          setShowConfirmRidePopUp={setShowConfirmRidePopUp}
        ></RidePopUp>
        <ConfirmRidePopUp
          showConfirmRidePopUp={showConfirmRidePopUp}
          setShowConfirmRidePopUp={setShowConfirmRidePopUp}
        ></ConfirmRidePopUp>
      </div>
    </main>
  );
};

export default CaptainHome;
