import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const databaseURL = process.env.MONGO_URL;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect(databaseURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error.message);
  });

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
