import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartProduct from "./layout/CartProduct";
import { get_User_Profile } from "../Actions_art_wear/signAction";

const Cart = ({ order, get_User_Profile }) => {
  let [quantity, setquantity] = useState({ qte: 1 });
  let { qte } = quantity;

  return (
    <Fragment>
      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <Link to="index.html">Home</Link>{" "}
                <span className="mx-2 mb-0">/</span>{" "}
                <strong className="text-black">Cart</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-total">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/************************************************************************************** */}
                      {order.map((el, i) => (
                        <CartProduct product={el} key={i} />
                      ))}

                      {/* ****************** */}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row mb-5">
                  <Link
                    to="/shopping"
                    className="btn btn-outline-primary btn-sm btn-block"
                  >
                    Continue Shopping
                  </Link>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label className="text-black h4" htmlFor="coupon">
                      Coupon
                    </label>
                    <p>Enter your coupon code if you have one.</p>
                  </div>
                  <div className="col-md-8 mb-3 mb-md-0">
                    <input
                      type="text"
                      className="form-control py-3"
                      id="coupon"
                      placeholder="Coupon Code"
                    />
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-primary btn-sm">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-5">
                <div className="row justify-content-end">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">
                          Cart Totals
                        </h3>
                      </div>
                    </div>
                    <div className="row mb-3"></div>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        {/*----------------------------------------------------------  total  -----------------> */}
                        <strong className="text-black">
                          $
                          {order
                            .map(el => el.qte * el.price)
                            .reduce((a, b) => a + b, 0)}
                          .00
                        </strong>
                        {/*---------------------------------------------------------------------------> */}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        {/*----------------------------------------------------------  Checkout  -----------------> */}
                        <Link to="checkout"
                          onClick={get_User_Profile}
                          className="btn btn-primary btn-lg py-3 btn-block"
                        >
                          Proceed To Checkout
                        </Link>
                        {/*---------------------------------------------------------------------------> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapstatetoprops = state => {
  return {
    order: state.panier_Reducer
  };
};
export default connect(mapstatetoprops, { get_User_Profile })(Cart);
