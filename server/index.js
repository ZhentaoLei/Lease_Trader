import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "50mb", extend: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extend: true }));
app.use(cors());
app.use("/posts", postRoutes);
app.get("/", (req, res) => {
  res.send("API ROOT PAGE");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server at port ${PORT}`)))
  .catch((error) => console.log(error.message));
