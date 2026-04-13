import React from "react";
import { PiUserBold } from "react-icons/pi";
import { BsCash } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdCenterFocusStrong } from "react-icons/md";
import { Link } from "react-router-dom";

const FinishRide = ({ showFinishRide, setShowFinsidhRide }) => {
  return (
    <div
      className={`absolute bottom-0 left-0 h-0 w-full bg-white border border-gray-300 p-6 flex flex-col gap-4 rounded-t-3xl transition-all duration-1000 ease-in-out
    ${showFinishRide ? "translate-y-0 opacity-100 h-auto" : "translate-y-full opacity-0 h-0"}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl">Finish this ride</h2>

        <IoIosArrowDown
          onClick={() => setShowFinsidhRide(false)}
          className="text-2xl cursor-pointer"
        />
      </div>
      <div className="w-full flex-col gap-2 flex items-start justify-center">
        <div className="flex items-center bg-yellow-400 p-4 mb-2 rounded-xl justify-between w-full">
          <div className="flex items-center justify-start gap-2">
            <div className="bg-gray-200 border border-gray-300 flex items-center justify-center rounded-full h-10 w-10">
              <PiUserBold className="text-gray-800 text-2xl"></PiUserBold>
            </div>
            <p className="text-2xl font-semibold">Scott M.</p>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <p className="font-semibold text-2xl">2.2KM </p>
          </div>
        </div>
        <span className="border rounded-full border-gray-200 w-full"></span>
        <div className="flex flex-col pb-6 items-start gap-2 w-full justify-center">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 flex items-center justify-center rounded-full min-h-10 min-w-10">
              <MdCenterFocusStrong className="text-2xl"></MdCenterFocusStrong>
            </div>
            <div>
              <p className="font-semibold text-xl">562/11A</p>
              <p>Kankariya Talab, Refer Fornt</p>
            </div>
          </div>
          <span className="border rounded-full border-gray-200 w-full"></span>
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
        <button
          onClick={() => setShowFinsidhRide(false)}
          className="bg-green-700/95 py-2 w-full text-gray-50 text-xl font-semibold rounded-md"
        >
          <Link to={"/captain/home"}>Complete Ride</Link>
        </button>
        <p className="text-sm pt-1 text-gray-500">*Click on Complete ride if you have complete the payment from the user</p>
      </div>
    </div>
  );
};

export default FinishRide;
