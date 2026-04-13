import React, { useState } from "react";
import FinishRide from "../Components/FinishRide";


const CaptainRiding = () => {
  const [showFinishRide, setShowFinsidhRide] = useState(false);
  return (
    <main className={"h-screen"}>
      <div className={"relative h-full overflow-hidden"}>
        <h2 className={"absolute font-semibold text-3xl tracking-tighter p-4"}>
          Uber
        </h2>
        <div className="bg-[url(/public/uber_map.png)] h-full bg-cover"></div>
        <div
          className={
            "w-full absolute bottom-0 bg-yellow-400 p-7 flex flex-col gap-4 border-gray-200 border rounded-t-3xl"
          }
        >
          <div className="w-full flex-col gap-2 flex items-start justify-center">
            <div className="flex items-center justify-between w-full">
              <p className="text-2xl font-semibold">4KM Away</p>
              <button onClick={() => setShowFinsidhRide(true)} className="bg-green-700/95 p-2 w-fit text-gray-50 text-xl font-semibold rounded-md">
                Complete Ride
              </button>
            </div>
          </div>
        </div>
        <FinishRide
          showFinishRide={showFinishRide}
          setShowFinsidhRide={setShowFinsidhRide}
        ></FinishRide>
      </div>
    </main>
  );
};

export default CaptainRiding;
