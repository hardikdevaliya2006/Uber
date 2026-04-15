import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const LocationSearchPanel = ({
  setSuggestions,
  suggestions,
  setPickup,
  setDestination,
  activeField,
}) => {
  return (
    <div className="flex flex-col h-[90%] overflow-scroll gap-4 ">
      {suggestions.map((loc, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              const fullAddress = `${loc.text}, ${loc.subtext}`;
              if (activeField === "pickup") {
                setPickup(fullAddress);
              } else {
                setDestination(fullAddress);
              }
              setSuggestions([]);
            }}
            className="flex border active:border-black border-gray-200 p-2 rounded-xl items-center gap-4 cursor-pointer"
          >
            <div className="bg-gray-200 flex items-center justify-center rounded-full min-h-10 min-w-10">
              <HiOutlineLocationMarker className="text-2xl text-gray-700" />
            </div>
            <div>
              <p className="font-medium">{loc.text}</p>
              <p className="text-sm text-gray-500">{loc.subtext}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
