import authApi from "./authApi";

const getSuggestions = async (input) => {
  try {
    const res = await authApi.get(`/maps/get-suggetions`, {
      params: { input },
    });

    return res.data;
  } catch (err) {
    console.error("Suggestion API error:", err);
    return [];
  }
};

const getFare = async (pickup, destination) => {
  try {
    const res = await authApi.get(`/rides/getFare`, {
      params: { pickup, destination },
    });
    return res.data;
  } catch (err) {
    console.error("Fare API error:", err);
    return [];
  }
};

export default { getSuggestions, getFare };
