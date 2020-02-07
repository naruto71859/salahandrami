import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  delete_Order,
  admin_delete_Article_from_order
} from "../../Actions_art_wear/Cart_And_Order_Action";
const OrderCard = ({
  order,
  updatedorder,
  delete_Order,
  admin_delete_Article_from_order
}) => {
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
        <td>
          {Articles.map((article, i) => (
            <table key={i} className="table site-block-order-table ">
              <thead>
                <tr>
                  <th className="p-1 col">Product</th>
                  <th className="p-1">total</th>
                  <td
                    className="p-1 bg-info"
                    onClick={() =>
                      admin_delete_Article_from_order(order._id, article._id)
                    }
                  >
                    delete
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1">
                    {article.name || ""} <strong className="mx-2">x</strong>
                    {article.qte || ""}
                  </td>
                  <td className="p-1">
                    ${article.price * article.qte || ""}.00
                  </td>
                </tr>
              </tbody>
            </table>
          ))}

          <table className="table site-block-order-table ">
            <thead>
              <tr>
                <th className="p-1 col"> ..</th>
                <th className="p-1">total Sum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-1"></td>
                <td className="p-1">
                  $
                  {Articles.map(el => el.qte * el.price).reduce(
                    (a, b) => a + b,
                    0
                  )}
                  .00
                </td>
              </tr>
            </tbody>
          </table>
        </td>

        <td
          onClick={() => delete_Order(order._id)}
          className="btn btn-danger btn-sm"
        >
          X
        </td>
      </tr>
    </Fragment>
  );
};

const mapstatetoprops = state => {
  return {};
};
export default connect(mapstatetoprops, {
  delete_Order,
  admin_delete_Article_from_order
})(OrderCard);
