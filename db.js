const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://Mridul:Mridul@99@cluster0.zavea.mongodb.net/mern-3am";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

db.on("error", () => {
  console.log(`Mongo DB Connection failed`);
});

module.exports = mongoose;
