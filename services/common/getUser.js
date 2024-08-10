import { getDoc } from "../firebase/firestoreServices.js";
import config from "../../config/index.js";
export const getUser = async (uid) => {
  try {
    if (!uid || typeof uid !== "string") {
      throw new Error("Invalid uid");
    }
    const userRef = `${config.firestoreUsersCollection}/{${uid}}`;
    const user = await getDoc(userRef);
    console.log("Get User :: getUser :: user", user);

    if (!user || !user.role) {
      //Try for NGO
      const ngoRef = `${config.firestoreNGOCollection}/{${uid}}`;
      const ngo = await getDoc(ngoRef);
      if (!ngo) {
        throw new Error("User not found");
      }
      return ngo;
    }
    return user;
    w;
  } catch (error) {
    console.error("Get User :: getUser :: error ", error);
    throw new Error(error);
  }
};
