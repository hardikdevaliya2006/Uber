import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const getAddressCoordinate = async (address) => {
  const apiKey = process.env.SERPAPI_MAPS_API;

  const url = `https://serpapi.com/search.json?engine=google_maps&q=${encodeURIComponent(address)}&type=search&api_key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const data = response.data;

      const place = data?.place_results?.gps_coordinates;

      if (!place || !data?.place_results?.gps_coordinates) {
        throw new Error("No coordinates found");
      }

      return place;
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error("SerpApi Error:", error.message);
    throw error;
  }
};

const getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and Destination are required");
  }

  try {
    const apiKey = process.env.SERPAPI_MAPS_API;

    const response = await axios.get("https://serpapi.com/search", {
      params: {
        engine: "google_maps_directions",
        start_addr: origin,
        end_addr: destination,
        api_key: apiKey,
      },
    });

    const data = response?.data?.directions[0];
    return {
      distance: {
        text: data.formatted_distance,
        value: data.distance,
      },
      duration: {
        text: data.formatted_duration,
        value: data.duration,
      },
    };
  } catch (error) {
    console.error("SerpAPI Error:", error.response?.data || error.message);
    throw new Error("Failed to fetch distance and time");
  }
};

const getAutoCompleteSuggetions = async (query) => {
  if (!query) {
    throw new Error("Query is required");
  }

  try {
    console.log(query);
    const apiKey = process.env.SERPAPI_MAPS_API;
    const response = await axios.get("https://serpapi.com/search.json", {
      params: {
        engine: "google_maps_autocomplete",
        q: query,
        ll: "@40.7455096,-74.0083012,14z",
        api_key: apiKey,
      },
    });

    const suggestions = response?.data?.suggestions;

    if (!suggestions || suggestions.length === 0) {
      return [];
    }

    return suggestions.map((item) => ({
      text: item.value,
      subtext: item.subtext || "",
    }));
  } catch (error) {
    console.error("Autocomplete Error:", error.message);
    throw new Error("Failed to fetch suggestions");
  }
};

export default {
  getAddressCoordinate,
  getDistanceTime,
  getAutoCompleteSuggetions,
};
