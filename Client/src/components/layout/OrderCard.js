import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { delete_Order } from "../../Actions_art_wear/Cart_And_Order_Action";
const OrderCard = ({ order, delete_Order }) => {
  const { Userinformation = {}, Articles = [] } = order;
  return (
    <Fragment>
      <tr>
        <td className="user-name">
          <h2 className="h5 text-black">
            <strong> {Userinformation.name}</strong>
            <p>{Userinformation.lastname}</p>
          </h2>
        </td>
        <td className="user-phone">{Userinformation.phonenumber}</td>
        <td className="user-emai">{Userinformation.email} </td>

        {!Articles || [] ? (
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  className="alert alert-success alert-dismissable fade show"
                  role="alert"
                >
                  <h2 className="alert-heading text-center ">No Order Added</h2>
                </div>
              </div>
            </div>
          </div>
        ) : (
          Articles.map((article, i) => (
            <span key={i}>
              --------------------------------------------------
              <p className=" text-center text-primary">
                name: {article.name || ""}
              </p>
              <p className=" text-center text-info">
                price: {article.price || ""}
              </p>
              <p className=" text-center text-body">
                quantity: {article.qte || ""}
              </p>
            </span>
          ))
        )}
        <td>
          <button
            onClick={() => delete_Order(order._id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

const mapstatetoprops = state => {
  return {};
};
export default connect(mapstatetoprops, { delete_Order })(OrderCard);
