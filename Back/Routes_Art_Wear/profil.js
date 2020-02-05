const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const User = require("../Models/User");
const {
  checking_create_modif_profile,
  validateCheck
} = require("../Middleware/Validation");
/*                             @route   create/modify
                               @desc    Modify user_profile
                               @access  private            */

router.post(
  "/profile",

  auth,

  checking_create_modif_profile(),

  validateCheck,

  async (req, res) => {
    let profil = await User.findById(req.user.id);
    if (profil) {
      let newprofil = await User.findByIdAndUpdate(
        req.user.id,
        { $set: { ...req.body } },
        { new: true }
      );
      return res.status(200).json(newprofil);
    }

    profil = new User({
      ...req.body
    });
    let newprofil = await profil.save();
    res.status(500).json({ newprofil });
  }
);

/*                             
                               @desc    get all users profiles
                               @access  private            */

router.get("/profils", auth, async (req, res) => {
  try {
    let profils = await User.find();
    res.json(profils);
  } catch (err) {
    console.log(err);
  }
});

/*                             
                               @desc    delete one profile
                               @access  private            */

router.delete("/delete/:id", auth, async (req, res) => {
  try {
    let id = req.params.id;
    console.log(req.body);
    let profil = await User.findByIdAndDelete(id);
    res.json(profil);
  } catch (err) {
    console.log(err);
  }
});

/*                             
                               @desc    get all users by name
                               @access  private            */

router.get("/name", auth, async (req, res) => {
  try {
    console.log(req.body);
    let profil = await User.find({ name: req.body.name });
    res.json(profil);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
