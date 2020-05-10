const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Postdata = new schema({
  image: {
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
  categeory: {
    type: String,
    required: true,
  },
  Title: { type: String, unique: true },
  Heading: { type: String, unique: true },
  Desc: { type: String, unique: true },
});

module.exports = mongoose.model("PostData", Postdata);
