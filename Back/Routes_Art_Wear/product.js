const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");
const auth = require("../Middleware/auth");

const {
  chekingCreatingProduct,
  validateCheck
} = require("../Middleware/Validation");

router.get("/products", async (req, res) => {
  try {
    let products = await Product.find();

    res.json(products);
  } catch (err) {
    console.log(err);
  }
});

router.post(
  "/product",

  auth,

  chekingCreatingProduct(),

  validateCheck,

  async (req, res) => {
    try {
      let {
        name,
        price,
        promotion,
        year_of_release,
        reduction,
        gender,
        age,
        saison,
        category,
        color
      } = req.body;

      let product = new Product({
        name,
        price,
        promotion,
        year_of_release,
        reduction,
        gender,
        age,
        saison,
        category,
        color
      });

      let newproduct = await product.save();
      res.json({ newproduct });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: " we fail to save ur product try again " });
    }
  }
);

router.put(
  "/product/:id",

  // auth,

  // chekingCreatingProduct(),

  // validateCheck,

  async (req, res) => {
    try {
      let id = req.params.id;


      let modifproduct = await Product.findByIdAndUpdate(
        id,
        { $set: { ...req.body } },
        { new: true }
      );
      console.log("object");
      res.status(200).json(modifproduct);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: " we fail to modify ur product try again " });
    }
  }
);

router.delete("/product/:id", auth, async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Product.findById(id);

    if (!product)
      return res
        .status(404)
        .json({ msg: "this Product is no  longer in the data base" });

    await Product.findByIdAndDelete(id);
    res.status(200).json({ msg: "product deleted " });
  } catch (err) {
    console.log(err);
    res.status(200).json({ msg: "we fail to delet it ... try again " });
  }
});

router.get("/product/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Product.findById(id);

    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(200).json({ msg: "we fail to geet the product ... try again " });
  }
});
module.exports = router;
