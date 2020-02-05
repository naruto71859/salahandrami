const express = require("express");
const router = express.Router();
const Order = require("../Models/Commande");
const auth = require("../Middleware/auth");
const User = require("../Models/User");

/*                          desc:    post/update order
                            @access  Private           */

router.post("/order", auth, async (req, res) => {
  /* **************  we search if the user has already a order  ***************** */
  let user = await User.findById(req.user.id, "-password");
  let verifOrder = await Order.findOne({ user: req.user.id });
  console.log(verifOrder);
  console.log("req.user.id", req.user.id);
  try {
    if (verifOrder) {
      verifOrder = await Order.findOneAndUpdate(
        { user: req.user.id },
        {
          $set: {
            user: req.user.id,
            Userinformation: { name: user.name, email: user.email },
            Articles: req.body
          }
        },
        { new: true }
      );

      return res.status(200).json( { msg : " u have updatedur Order"});
    }

    /* **************  if the first time we save the order  ***************** */

    let order = new Order({
      user: req.user.id,
      Userinformation: { name: user.name, email: user.email },
      Articles: req.body

    });

    await order.save();

    res.status(200).json({ msg : " ur order has been sent"});
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "some this wrong with server " });
  }
});

/*                          desc:    get all order for Admin
                            @access  Private           */

router.get("/orders", auth, async (req, res) => {
  try {
    let allOrders = await Order.find();
    console.log(allOrders);
    res.status(200).json(allOrders);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "some thing happen " });
  }
});

/*                          desc:    delete order for Admin
                            @access  Private           */

router.delete("/order/:id", auth, async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Order.findById(id);
    if (!result)
      return res.status(404).json({ msg: " this Order does not exist" });
    let order = await Order.findByIdAndRemove(id);
    console.log(order);
    res.status(200).json({ msg: `the Order of " ${order.name} " is deleted` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: " we failed to delete the order" });
  }
});
module.exports = router;
