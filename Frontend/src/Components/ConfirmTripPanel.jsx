import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdCenterFocusStrong } from "react-icons/md";
import { BsCash } from "react-icons/bs";

const ConfirmTripPanel = ({
  showConfirmTrip,
  setShowConfirmTrip,
  setShowWaitingForDriver,
}) => {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full bg-white border border-gray-300 p-6 flex flex-col gap-4 rounded-t-3xl transition-all duration-500 ease-in-out
${showConfirmTrip ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl">Confirm an ride</h2>

        <IoIosArrowDown
          onClick={() => setShowConfirmTrip(false)}
          className="text-2xl cursor-pointer"
        />
      </div>
      <div className="w-full flex-col flex items-start justify-center">
        <div className="flex items-center justify-center w-full pb-2">
          <img src="/uber_car_xl.jpg" className="h-24" alt="image" />
        </div>
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
          onClick={() => {
            (setShowWaitingForDriver(true), setShowConfirmTrip(false));
          }}
          className="bg-green-700/95 py-2 w-full text-gray-50 text-xl font-semibold rounded-md"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmTripPanel;
