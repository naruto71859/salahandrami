const mongoose = require("mongoose");

const UserShema = mongoose.Schema({
  role: {
    type: String,
    trim: true,
    default: "user"
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  phonenumber: {
    type: String,
    trim: true
  }
});

module.exports = User = mongoose.model("users", UserShema);
