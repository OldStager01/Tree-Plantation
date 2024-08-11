import { getNearbyPlaces } from "../../services/common/getNearbyPlaces.js";

export const getNearbyPlacesController = async (req, res) => {
  const { lat, lon, radius, state, country } = req.query;
  try {
    if (!lat || !lon || !radius) {
      throw new Error("Latitude, longitude, and radius are required");
    }
    if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
      throw new Error("Latitude and longitude must be within range");
    }
    if (state && !country) {
      throw new Error("Country is required when filtering by state");
    }
    const nearbyLocations = await getNearbyPlaces(lat, lon, radius, {
      state,
      country,
    });
    return res.status(200).json(nearbyLocations);
  } catch (error) {
    console.error("Error getting nearby places: ", error);
    return res.status(500).json({ error: error.message });
  }
};
