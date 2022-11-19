//server connection
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/airbnb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("not connected to database");
  });

// const DB = process.env.DATABASE;

// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((err) => {
//     console.log(`not connected to database ${err}`);
//   });
