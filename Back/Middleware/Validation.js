const { check, validationResult } = require("express-validator");

exports.checkingregister = () => [
  check("name", "name is required").notEmpty(),
  check("email", "please enter a valid email").isEmail(),
  check("password", "pls enter a valid password").isLength({ min: 6 })
];

exports.checkingmodify = () => [
  check("name", "this name is the same ").exists({ checkFalsy: true }),
  check("email", "this email is used").isEmail(),
  check("password", "pls enter a valid password").isLength({ min: 6 })
];

exports.chekingCreatingProduct = () => [
  check("name", "the Name of the product is required ").notEmpty(),
  check("price", "the price of the product is required ")
    .notEmpty()
    .isNumeric(),
  check("gender", "the gender of the product is required ").notEmpty(),
  // check("age", "the Age of the user of the product is required ").notEmpty(),
  // check("saison", "the Saison of the product is required ").notEmpty(),
  check("category", "the Category of the product is required ").notEmpty()
  // check("color", "the Color of the product is required ").notEmpty(),
];

exports.checking_create_modif_profile = () => [
  check("city", "the City where u live is required ").notEmpty(),
  check("phonenumber", "please enter ur phone number ")
    .notEmpty()
    .isNumeric()
];

exports.validateCheck = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  return next();
};
