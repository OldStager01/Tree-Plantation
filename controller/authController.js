//Import config
import config from "../config/index.js";
//Import Firestore Services
import { addDoc } from "../services/firebase/firestoreServices.js";
//Import Models
import { userModel } from "../model/user/index.js";
import { ngoModel } from "../model/ngo/index.js";
import createModel from "../model/createModel.js";

//Register Controller
const registerController = async (req, res) => {
  //TESTING AUTHENTICATION
  // const { uid } = req.user;
  const uid = req?.user?.id;
  const role = req?.user?.role;
  const body = req.body;

  if (
    uid === undefined ||
    uid === null ||
    role === undefined ||
    role === null
  ) {
    return res.status(401).json({
      status: "error",
      message: "Unauthorized",
    });
  }

  if (!body) {
    return res.status(400).json({
      status: "error",
      message: "Invalid body",
    });
  }

  if (role === "user") {
    //Extract data and parse it to firestore format according to model
    const registerData = createModel(body, userModel);
    //Append the role and add the user to db
    await addDoc(
      config.firestoreUsersCollection,
      {
        role: "user",
        ...registerData,
      },
      uid
    );
    res.status(200).json({
      staus: "success",
      message: "User registered",
    });
  } else if (role === "ngo") {
    //Extract data and parse it to firestore format according to model
    const registerData = createModel(body, ngoModel);
    //Append the role and add the user to db
    await addDoc(
      config.firestoreNGOCollection,
      {
        role: "ngo",
        ...registerData,
      },
      uid
    );
    res.status(200).json({
      staus: "success",
      message: "NGO registered",
    });
  } //...ADD OTHER ROLE
  else {
    res.status(400).json({
      staus: "error",
      message: "Invalid role",
    });
  }
};

export { registerController };
