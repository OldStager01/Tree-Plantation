import { admin } from "../config/firebase.js";

const isAuthenticated = async (req, res, next) => {
  // const token = req.headers.authorization?.split("Bearer ")[1];
  // if (!token) {
  //   return res.status(401).json({ message: "Unauthorized" });
  // }

  try {
    // const decodedToken = await admin.auth().verifyIdToken(token);
    // req.user = decodedToken;
    req.user = {
      // id: "Zyv9Tuqeb6SCACGqrrw20JHysxR2", //USER !!!TESTING!!!
      // role: "user",
      id: "PdBnQoyy7hSzuiltpZTBUzB7DWp2", //NGO !!!TESTING!!!
      role: "ngo",
    };
    // console.log(decodedToken);
    next();
  } catch (error) {
    console.error("isAuthenticated :: error", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default isAuthenticated;
