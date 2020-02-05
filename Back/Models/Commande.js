const mongoose = require("mongoose");

const CommandeSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  Userinformation: {
    status: {
      type: String,
      default: "En cours"
    },
    name: {
      type: String
    },
    moneyToPay: {
      type: Number
    },
    email: {
      type: String
    }
  },
  Articles: {}
});
module.exports = Commande = mongoose.model("commande", CommandeSchema);
