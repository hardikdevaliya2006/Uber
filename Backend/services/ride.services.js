import RideModel from "../models/ride.model.js";
import mapsServices from "./maps.services.js";
import crypto from "crypto";

const generateOTP = (length = 6) => {
  const digits = "0123456789";
  let otp = "";

  const randomBytes = crypto.randomBytes(length);

  for (let i = 0; i < length; i++) {
    otp += digits[randomBytes[i] % digits.length];
  }

  return otp;
};

const getFare = async (pickup, destination) => {
  if (!pickup || !destination) {
    throw new Error("Pickup and Destination are required");
  }

  const distanceAndTime = await mapsServices.getDistanceTime(
    pickup,
    destination,
  );

  const distanceInKm = distanceAndTime.distance.value / 1000;
  const durationInMin = distanceAndTime.duration.value / 60;

  const rates = {
    auto: { base: 30, perKm: 10, perMin: 1 },
    moto: { base: 20, perKm: 8, perMin: 0.5 },
    car: { base: 50, perKm: 15, perMin: 2 },
    carXL: { base: 80, perKm: 20, perMin: 3 },
  };

  const fare = {};

  for (let vehicle in rates) {
    fare[vehicle] =
      rates[vehicle].base +
      distanceInKm * rates[vehicle].perKm +
      durationInMin * rates[vehicle].perMin;

    fare[vehicle] = Math.round(fare[vehicle]);
  }

  return {
    distance: distanceInKm,
    duration: durationInMin,
    fare,
  };
};

const createRide = async ({ user, pickup, destination, vehicleType }) => {
  if (!user || !destination || !pickup || !vehicleType) {
    throw new Error("All fields are required");
  }

  const fareData = await getFare(pickup, destination);
  console.log(fareData);

  const ride = await RideModel.create({
    user,
    pickup,
    destination,
    fare: fareData.fare[vehicleType],
    distance: fareData.distance,
    duration: fareData.duration,
    otp: generateOTP()
  });

  return ride;
};

export default { createRide, getFare };
