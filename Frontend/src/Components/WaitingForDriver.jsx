import React from "react";
import { BsCash } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const WaitingForDriver = ({showWaitingForDriver, setShowWaitingForDriver}) => {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full bg-white border border-gray-300 p-6 flex flex-col gap-4 rounded-t-3xl transition-all duration-500 ease-in-out
    ${showWaitingForDriver ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <div className="flex items-center justify-end">
        <IoIosArrowDown
          onClick={() => setShowWaitingForDriver(false)}
          className="text-2xl cursor-pointer"
        />
      </div>
      <div className="w-full flex-col flex items-start justify-center">
        <div className="flex items-center justify-between w-full pb-2">
          <img src="/uber_car_xl.jpg" className="h-24" alt="image" />
          <div className="flex flex-col items-end gap-0.5">
            <p className="font-semibold text-xl">Suresh</p>
            <p className="text-2xl font-">AB 04 XY 5488</p>
            <p className="text-gray-600">Maruti Suzuki Ecco</p>
          </div>
        </div>
        <div className="flex flex-col pb-6 items-start gap-2 w-full justify-center">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 flex items-center justify-center rounded-full min-h-10 min-w-10">
              <HiOutlineLocationMarker className="text-2xl"></HiOutlineLocationMarker>
            </div>
            <div>
              <p className="font-semibold text-xl">1254/32C</p>
              <p>SSIT Krushan Nagar, Nikol</p>
            </div>
          </div>
          <span className="border rounded-full border-gray-200 w-full"></span>
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 flex items-center justify-center rounded-full min-h-10 min-w-10">
              <BsCash className="text-2xl"></BsCash>
            </div>
            <div>
              <p className="font-semibold text-xl">₹65</p>
              <p>Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
