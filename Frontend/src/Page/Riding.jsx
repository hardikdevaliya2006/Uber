import React from "react";
import { BsCash } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Riding = () => {
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
            <button className="bg-green-700/95 py-2 w-full text-gray-50 text-xl font-semibold rounded-md">
              Make a Payment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Riding;
