const mongoose = require("mongoose");

let year = new Date().getFullYear();

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    // required: true
  },
  category: {
    type: String,
    trim: true,
    // required: true
  },
  price: {
    type: Number,
    trim: true,
    // required: true
  },
  img: {
    type: String,
    trim: true
  },
  promotion: {
    type: String,
    default: false,
    trim: true,
    // required: true
  },
  year_of_release: {
    type: Number,
    trim: true,
    default: year
  },
  reduction: {
    type: String,
    default: false,
    trim: true,
    // required: true
  },
  gender: {
    type: String,
    trim: true,
    // required: true
  },
  age: {
    type: Number,
    trim: true,
    // required: true
  },
  saison: {
    type: String,
    trim: true,
    // required: true
  },
  color: {
    type: String,
    trim: true,
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Product = mongoose.model("product", ProductSchema);
