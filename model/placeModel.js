const placeModel = {
  name: "string",
  address: "string",
  description: "string",
  coordinates: "geopoint", //(Lat, Long)
  images: "array",
  caretaker: "map",
  ngoIds: "array", //Array of Ngos under which the place is taken care of
  //   createdAt: "", // auto added by database
};

export { placeModel };
