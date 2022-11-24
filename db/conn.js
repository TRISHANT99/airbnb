//server connection
const mongoose = require("mongoose");
// const path = require("path");
// const dotenv = require("dotenv");

// mongoose
//   .connect("mongodb://localhost:27017/airbnb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((err) => {
//     console.log("not connected to database");
//   });

// dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(`not connected to database ${err}`);
  });
