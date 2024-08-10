import express from "express";
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.json());
import dotenv from "dotenv";
dotenv.config();
import { testRouter } from "./routes/testRoute.js";
import authRouter from "./routes/authRoute.js";
import commonRouter from "./routes/commonRoute.js";
import ngoRouter from "./routes/ngoRoute.js";
import isAuthenticated from "./middleware/isAuth.js";

app.use(isAuthenticated);
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/auth", authRouter);
app.use("/common", commonRouter);
app.use("/ngo", ngoRouter);
//!!!TESTING!!!
app.use("/test", testRouter);

app.listen(5100, () => {
  console.log(`Server started at http://localhost:5100`);
});
