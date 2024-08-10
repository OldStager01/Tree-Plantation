const plantationModel = {
  treesPlanted: "array", //Array of treeModel
  plantationDate: "timestamp", //Date
  place: "string", //String (Place ID) if any
  //Only one out of following fidlds will be present
  userId: "string", //String (User ID) if any
  ngoId: "string", //String (NGO ID) if any
  campaignId: "string", //String (Campaign ID) if any
  //**//
};

const treeModel = {
  treeName: "string", //String
  treeCount: "number", //Number
};

export { plantationModel, treeModel };
