const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");





router.get("/name", async (req, res) => {
  try {
    let product = await Product.find({ name: req.body.name });
    res.json(product);
  } catch (error) {
    console.log(error)
  }
});

router.post("/category", async (req, res) => {
  try {
    let category = await Product.find({ category: req.body.category });
    res.json(category);
  } catch (error) {
    console.log(error)
  }
  
});

router.post("/name", async (req, res) => {
  try {
    console.log(req.body)
    let product = await Product.find({ name: req.body.name });
    res.json(product);
  } catch (error) {
    console.log(error)
  }
});
module.exports = router;
