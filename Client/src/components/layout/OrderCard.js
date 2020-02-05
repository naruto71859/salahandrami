import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
  const { Userinformation = {}, Articles = [] } = order;
  console.log("order.Articles", Userinformation);
  return (
    <Fragment>
      <tr>
        <td className="user-name">
          <h2 className="h5 text-black">
            <strong> {Userinformation.name}</strong>{" "}
            <p>{Userinformation.lastname}</p>
          </h2>{" "}
        </td>
        <td className="user-phone">{Userinformation.phonenumber}</td>
        <td className="user-emai">{Userinformation.email} </td>

        {Articles.map((article, i) => (
          <span key={i} >
            --------------------------------------------------
            <p className=" text-center text-primary"> name: {article.name} </p>
            <p className=" text-center text-info"> price: {article.price}</p>
            <p className=" text-center text-body">quantity: {article.qte} </p>
          </span>
        ))}
        <td>
          <Link
            to="/listofusers"
            onClick={() => () => {}}
            className="btn btn-danger btn-sm"
          >
            X
          </Link>
        </td>
      </tr>
    </Fragment>
  );
};

const mapstatetoprops = state => {
  return {};
};
export default connect(mapstatetoprops, {})(OrderCard);
