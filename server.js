import express from "express";
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.json());
import dotenv from "dotenv";
dotenv.config();
import { testRouter } from "./routes/testRoute.js";
import registerRouter from "./routes/authRoute.js";
import ngoRouter from "./routes/ngoRoute.js";
import isAuthenticated from "./middleware/isAuth.js";

app.use(isAuthenticated);
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/auth", registerRouter);
app.use("/ngo", ngoRouter);
//!!!TESTING!!!
app.use("/test", testRouter);

app.listen(5100, () => {
  console.log(`Server started at http://localhost:5100`);
});
