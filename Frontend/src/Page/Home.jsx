import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import VehicleSelectPanel from "../Components/VehicleSelectPanel";
import ConfirmTripPanel from "../Components/ConfirmTripPanel";
import WaitingForDriver from "../Components/WaitingForDriver";
import mapApi from "../api/mapApi";
import { debounce } from "../utils/debounce";
import { useMemo } from "react";
import authApi from "../api/authApi";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVehicles, setShowVehicles] = useState(false);
  const [showConfirmTrip, setShowConfirmTrip] = useState(false);
  const [showWaitingForDriver, setShowWaitingForDriver] = useState(false);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [activeField, setActiveField] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [fare, setFare] = useState({});
  const [fareLoading, setFareLoading] = useState(false);

  const fetchSuggetions = useMemo(() => {
    return debounce(async (value) => {
      if (value.length < 3) {
        setSuggestions([]);
        return;
      }
      const data = await mapApi.getSuggestions(value);
      setSuggestions(data);
    }, 1500);
  }, []);

  const handelChange = (e, type) => {
    const value = e.target.value;

    if (type === "pickup") {
      setPickup(value);
    } else {
      setDestination(value);
    }

    setActiveField(type);
    fetchSuggetions(value);
  };

  const findTrip = async () => {
    setIsExpanded(false);
    setSuggestions([]);
    setShowVehicles(false);

    try {
      setFareLoading(true);

      const response = await mapApi.getFare(pickup, destination);
      setFare(response.fare);
      setShowVehicles(true);
    } catch (error) {
      console.error("Fare API error:", error);
    } finally {
      setFareLoading(false);
    }
  };

  async function createRide(vehicleType) {
    const response = await authApi.post("/rides/create", {
      pickup,
      destination,
      vehicleType,
    });

    setPickup("");
    setDestination("");
    console.log(response.data);
  }

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
              onFocus={() => {
                (setIsExpanded(true), setActiveField("pickup"));
              }}
              type="text"
              value={pickup}
              onChange={(e) => handelChange(e, "pickup")}
              className={
                "bg-gray-100 w-full p-2 text-xl outline-0 rounded-md  pl-10"
              }
              id="pickup"
              placeholder="Pickup Point"
              required
            />
            <input
              onFocus={() => setActiveField("drop")}
              type="text"
              value={destination}
              onChange={(e) => handelChange(e, "destination")}
              className={
                "bg-gray-100 w-full p-2 text-xl outline-0 rounded-md  pl-10"
              }
              id="drop"
              placeholder="Drop Point"
              required
            />
            {isExpanded && (
              <button
                onClick={() => findTrip()}
                type="submit"
                className="bg-black py-2 mb-8 w-full text-gray-50 text-xl font-semibold rounded-md"
              >
                Find a Trip
              </button>
            )}

            {suggestions.length > 0 && activeField && (
              <LocationSearchPanel
                suggestions={suggestions}
                setSuggestions={setSuggestions}
                setPickup={setPickup}
                setDestination={setDestination}
                activeField={activeField}
                setShowVehicles={setShowVehicles}
                setIsExpanded={setIsExpanded}
              />
            )}
          </div>
        </div>

        <VehicleSelectPanel
          createRide={createRide}
          fareLoading={fareLoading}
          fare={fare}
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
