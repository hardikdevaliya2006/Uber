import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const VehicleSelectPanel = ({
  showVehicles,
  setShowVehicles,
  setShowConfirmTrip,
}) => {
  return (
    <div
      className={`absolute bottom-0 left-0 h-0 w-full bg-white border border-gray-300 p-6 flex flex-col gap-4 rounded-t-3xl transition-all duration-500 ease-in-out
${showVehicles ? "translate-y-0 opacity-100 h-auto" : "translate-y-full opacity-0 h-0"}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl">Choose a Vehicle for ride</h2>

        <IoIosArrowDown
          onClick={() => setShowVehicles(false)}
          className="text-2xl cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <div
          onClick={() => {
            (setShowConfirmTrip(true), setShowVehicles(false));
          }}
          className="border active:border-black flex items-center justify-start gap-2 rounded-xl p-2 border-gray-200 w-full"
        >
          <img className="h-20" src="/uber_car.jpg" alt="" />
          <div className="w-full">
            <div className="flex items-center justify-start">
              <p className="font-semibold text-xl pr-2">UberGo</p>
              <FaUserAlt className="text-base"></FaUserAlt>
              <span className="font-semibold pl-1.5 text-xl">4</span>
            </div>
            <p className="font-semibold text-base">2 min away</p>
            <p className="text-sm">Affordable, compact rides</p>
          </div>
          <p className="font-semibold text-xl">₹194.20</p>
        </div>
        <div className="border active:border-black flex items-center justify-start gap-2 rounded-xl p-2 border-gray-200 w-full">
          <img className="w-20" src="/uber_moto.png" alt="" />
          <div className="w-full">
            <div className="flex items-center justify-start">
              <p className="font-semibold text-xl pr-2">Moto</p>
              <FaUserAlt className="text-base"></FaUserAlt>
              <span className="font-semibold pl-1.5 text-xl">1</span>
            </div>
            <p className="font-semibold text-base">3 min away</p>
            <p className="text-sm">Affordable, Motorcycle rides</p>
          </div>
          <p className="font-semibold text-xl pr-1">₹65</p>
        </div>
        <div className="border active:border-black flex items-center justify-start gap-2 rounded-xl p-2 border-gray-200 w-full">
          <img className="w-20" src="/uber_auto.webp" alt="" />
          <div className="w-full">
            <div className="flex items-center justify-start">
              <p className="font-semibold text-xl pr-2">UberAuto</p>
              <FaUserAlt className="text-base"></FaUserAlt>
              <span className="font-semibold pl-1.5 text-xl">3</span>
            </div>
            <p className="font-semibold text-base">1 min away</p>
            <p className="text-sm">Affordable, Auto rides</p>
          </div>
          <p className="font-semibold text-xl">₹118.86</p>
        </div>
        <div className="border active:border-black flex items-center justify-start gap-2 rounded-xl p-2 border-gray-200 w-full">
          <img className="w-20" src="/uber_car_xl.jpg" alt="" />
          <div className="w-1/2">
            <div className="flex items-center justify-start">
              <p className="font-semibold text-xl pr-2">UberXL</p>
              <FaUserAlt className="text-base"></FaUserAlt>
              <span className="font-semibold pl-1.5 text-xl">6</span>
            </div>
            <p className="font-semibold text-base">4 min away</p>
            <p className="text-sm">Affordable, Xl Car rides</p>
          </div>
          <p className="font-semibold text-xl">₹194.20</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleSelectPanel;
