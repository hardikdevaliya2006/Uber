import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const locations = [
  "8A, Near Central Avenue, Downtown district, New York",
  "42C, Maple Street, Brooklyn Heights, New York",
  "77B, Sunset Boulevard, Queens area, New York",
  "9D, Riverside Drive, Upper West Side, New York",
  "56A, Park Lane, Midtown Manhattan, New York",
  "24B, At the street of new york, clean road area at burmigum",
];

const LocationSearchPanel = ({ setShowVehicles, setIsExpanded }) => {
  return (
    <div className="pt-2 flex flex-col gap-4 justify-center">
      {locations.map((loc, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              (setShowVehicles(true), setIsExpanded(false));
            }}
            className="flex border active:border-black border-gray-200 p-2 rounded-xl items-center gap-4 cursor-pointer"
          >
            <div className="bg-gray-200 flex items-center justify-center rounded-full min-h-10 min-w-10">
              <HiOutlineLocationMarker className="text-2xl text-gray-700" />
            </div>
            <p>{loc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
