import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import VehicleSelectPanel from "../Components/VehicleSelectPanel";
import ConfirmTripPanel from "../Components/ConfirmTripPanel";
import WaitingForDriver from "../Components/WaitingForDriver";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVehicles, setShowVehicles] = useState(false);
  const [showConfirmTrip, setShowConfirmTrip] = useState(false);
  const [showWaitingForDriver, setShowWaitingForDriver] = useState(false);

  return (
    <main className={"h-screen"}>
      <div className={"relative h-full overflow-hidden"}>
        <h2 className={"absolute font-semibold text-3xl tracking-tighter p-4"}>
          Uber
        </h2>
        <div className="bg-[url(/public/uber_map.png)] h-full bg-cover"></div>
        <div
          className={`absolute overflow-hidden bottom-0 w-full bg-white p-7 flex flex-col gap-4 transition-all duration-500 ease-in-out ${isExpanded ? "h-full rounded-none border-0 border-transparent" : "h-[25%] border-gray-200 border rounded-t-3xl"}`}
        >
          <div className="flex items-center justify-between">
            <h2 className={"font-semibold text-2xl"}>Find a Trip</h2>
            <IoIosArrowDown
              onClick={() => setIsExpanded(!isExpanded)}
              className={`text-2xl transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
            />
          </div>
          <div className="flex-col relative flex gap-4">
            <span className="absolute top-5 left-4.75 border-2 border-gray-500 h-15 rounded-full"></span>
            <span className="absolute top-5 left-4 border-5 border-gray-500 h-1 rounded-full"></span>
            <span className="absolute top-19 left-4 border-5 border-gray-500 h-1 rounded-full"></span>
            <input
              onFocus={() => setIsExpanded(true)}
              type="text"
              className={
                "bg-gray-100 w-full p-2 text-xl outline-0 rounded-md  pl-10"
              }
              id="picup"
              placeholder="Pickup Point"
              required
            />
            <input
              type="text"
              className={
                "bg-gray-100 w-full p-2 text-xl outline-0 rounded-md  pl-10"
              }
              id="drop"
              placeholder="Drop Point"
              required
            />
            <LocationSearchPanel
              setShowVehicles={setShowVehicles}
              setIsExpanded={setIsExpanded}
            ></LocationSearchPanel>
          </div>
        </div>
        <VehicleSelectPanel
          showVehicles={showVehicles}
          setShowVehicles={setShowVehicles}
          setShowConfirmTrip={setShowConfirmTrip}
        ></VehicleSelectPanel>
        <ConfirmTripPanel
          showConfirmTrip={showConfirmTrip}
          setShowConfirmTrip={setShowConfirmTrip}
          setShowWaitingForDriver={setShowWaitingForDriver}
        ></ConfirmTripPanel>
        <WaitingForDriver
          setShowWaitingForDriver={setShowWaitingForDriver}
          showWaitingForDriver={showWaitingForDriver}
        ></WaitingForDriver>
      </div>
    </main>
  );
};

export default Home;
