import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { add_Or_Modify_Profil } from "../Actions_art_wear/profilAction";
import { add_Order_To_Db } from "../Actions_art_wear/Cart_And_Order_Action";
import Alert from "../components/layout/Alert";
import { set_Alert } from "../Actions_art_wear/alertAction";

const CheckOut = ({
  add_Or_Modify_Profil,
  add_Order_To_Db,
  set_Alert,
  user,
  order
}) => {
  useEffect(() => {});

  const [formData, setFormData] = useState({
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    city: user.city,
    phonenumber: user.phonenumber,
    adress: user.adress,
    formIsValid: false
  });
  const {
    name,
    lastname,
    email,
    city,
    phonenumber,
    adress,
    formIsValid
  } = formData;
  console.log("name", city);
  const onchange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  let verifyForm = () => {
    if (city === "") {
      return set_Alert({
        msg: "pls enter ur city where u live",
        alertType: "danger"
      });
    } else if (phonenumber === "") {
      return set_Alert({
        msg: "pls enter ur phonenumber",
        alertType: "danger"
      });
    } else setFormData({ ...formData, formIsValid: true });
  };

  const onSubmit = e => {
    e.preventDefault();

    verifyForm();
    setFormData({ ...formData, formIsValid: true });
    if (formIsValid === true) add_Or_Modify_Profil({ ...formData });
  };

  const modify_profile_and_sending_order = () => {
    verifyForm();
    if (city && phonenumber) setFormData({ ...formData, formIsValid: true });
    else return;
    add_Or_Modify_Profil({ ...formData });
    add_Order_To_Db(order);
  };
  return (
    <Fragment>
      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <Link to="index">Home</Link>
                <span className="mx-2 mb-0">/</span> <Link to="cart">Cart</Link>
                <span className="mx-2 mb-0">/</span>
                <strong className="text-black">Checkout</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          (
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="border p-4 rounded" role="alert">
                  <Alert />
                </div>
              </div>
            </div>

            <div className="row">
              {/* --------------- startForm Profile component ---------------------------------  */}

              <div className="col-md-6">
                <form onSubmit={onSubmit}>
                  <div className="col-md-12 mb-5 mb-md-0">
                    <h2 className="h3 mb-3 text-black">Form Profile</h2>
                    <div className="p-3 p-lg-5 border">
                      <div className="form-group row">
                        {/* ----------  First Name ------  */}

                        <div className="col-md-6">
                          <label htmlFor="c_fname" className="text-black">
                            First Name <span className="text-danger">*</span>
                          </label>
                          <input
                            value={name}
                            onChange={onchange}
                            type="text"
                            className="form-control"
                            id="c_fname"
                            name="name"
                            // placeholder="..."
                          />
                        </div>

                        {/* ----------  Last Name ------  */}

                        <div className="col-md-6">
                          <label htmlFor="c_lname" className="text-black">
                            Last Name
                          </label>
                          <input
                            onChange={onchange}
                            value={lastname}
                            type="text"
                            className="form-control"
                            id="c_lname"
                            name="lastname"
                            placeholder="..."
                          />
                        </div>
                      </div>

                      {/* ----------  Email ------  */}

                      <div className="form-group row">
                        <div className="col-md-12">
                          <label htmlFor="c_companyname" className="text-black">
                            Email<span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={onchange}
                            value={email}
                            type="text"
                            className="form-control"
                            id="c_companyname"
                            name="email"
                            placeholder="@"
                          />
                        </div>
                      </div>

                      {/* ---------- State / Country ------  */}

                      <div className="form-group row">
                        <div className="col-md-6">
                          <label
                            htmlFor="c_state_country"
                            className="text-black"
                          >
                            State / Country
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={onchange}
                            value={city}
                            type="text"
                            className="form-control"
                            id="c_state_country"
                            name="city"
                            placeholder="..."
                          />
                        </div>

                        {/* ----------  Phone Number ------  */}

                        <div className="col-md-6">
                          <label htmlFor="c_postal_zip" className="text-black">
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={onchange}
                            value={phonenumber}
                            type="phone"
                            className="form-control"
                            id="c_postal_zip"
                            name="phonenumber"
                            placeholder="..."
                          />
                        </div>
                      </div>

                      {/* ----------  Address ------  */}

                      <div className="form-group row">
                        <div className="col-md-12">
                          <label htmlFor="c_address" className="text-black">
                            Address
                          </label>
                          <input
                            onChange={onchange}
                            value={adress}
                            type="text"
                            className="form-control"
                            id="c_address"
                            name="address"
                            placeholder="..."
                          />
                        </div>
                      </div>

                      {/* ----------  autre parametre ------  */}

                      {/* <div className="form-group row">
                        <div className="col-md-12">
                          <label htmlFor="c_address" className="text-black">
                            autre parametre
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="c_address"
                            name="address"
                            placeholder="Street"
                          />
                        </div>
                      </div> */}

                      <div className=" row  justify-content-around ">
                        <input
                          type="submit"
                          className="my-2 btn btn-warning btn-sm "
                          value="Create Profile"
                        />

                        <Link to="/shopping">
                          <button className="my-2 btn btn-sm btn-primary">
                            Back to shop
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* --------------- end Form Profile component ---------------------------------  */}

              {/* --------------- Confirm order component ---------------------------------  */}

              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h2 className="h3 mb-3 text-black">Your Order</h2>
                    <div className="p-3 p-lg-5 border">
                      <table className="table site-block-order-table mb-5">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.map((el, i) => (
                            <tr key={i}>
                              <td>
                                {el.name} <strong className="mx-2">x</strong>
                                {el.qte}
                              </td>
                              <td>${el.qte * el.price}.00</td>
                            </tr>
                          ))}

                          <tr>
                            <td className="text-black font-weight-bold">
                              <strong>Cart Subtotal</strong>
                            </td>
                            <td className="text-black">
                              $
                              {order
                                .map(el => el.qte * el.price)
                                .reduce((a, b) => a + b, 0)}
                              .00
                            </td>
                          </tr>
                          <tr>
                            <td className="text-black font-weight-bold">
                              <strong>Order Total</strong>
                            </td>
                            <td className="text-black font-weight-bold">
                              <strong>
                                $
                                {order
                                  .map(el => el.qte * el.price)
                                  .reduce((a, b) => a + b, 0)}
                                .00
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      {/* ******* sending the order to the DB  *******  */}
                      <div className="form-group">
                        <button
                          onClick={() => modify_profile_and_sending_order()}
                          className="btn btn-primary btn-lg py-3 btn-block"
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --------------- end Confirm order  ---------------------------------  */}
            </div>
          </div>
          )
        </div>
      </div>
    </Fragment>
  );
};
const mapstatetoprops = state => {
  return {
    user: state.sign_Reducer.user,
    order: state.panier_Reducer
  };
};
export default connect(mapstatetoprops, {
  add_Or_Modify_Profil,
  add_Order_To_Db,
  set_Alert
})(CheckOut);
