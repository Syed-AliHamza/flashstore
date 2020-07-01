const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const Getdata = require("./models/getpostdata");
app.use(cors());
// app.use(express.static(path.resolve(__dirname, "../dist")));
mongoose
  .connect(
    "mongodb://Flash:1234@flash-shard-00-00-tkc35.mongodb.net:27017,flash-shard-00-01-tkc35.mongodb.net:27017,flash-shard-00-02-tkc35.mongodb.net:27017/flash?ssl=true&replicaSet=Flash-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("db run");
  });

app.get("/postdata", (req, res) => {
  Getdata.find().then((resp) => {
    res.json(resp);
  });
});

let port = process.env.PORT || 6000;

// app.get("*", (req, res) => {
//   // res.send("<h1>Heeloo</h1>")
//   res.sendFile(path.resolve(__dirname, "../dist/index.html"));
// });

app.listen(2000, () => {
  console.log("Server run");
});
