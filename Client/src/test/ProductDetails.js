import React, { Fragment } from "react";
import { connect } from "react-redux";
import { delete_Product } from "../Actions_art_wear/ProdcutAction";
import "../Css/details.css";
const DetailProduct = ({
  get_one_product,
  product: { name, category, price, color, saison, promotion, year, _id }
}) => {
  return (
    <div className="row">
      <div className=" product ">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className=" imageanddetails ">
          <div className="image_container"></div>
          <div className=" details-container">fdsfs
            <h2 className="details">{name}fdfds </h2>
            <h5 className="price">{_id}</h5>
            <p className="color">{color}</p>
            <p className="price">{price}</p>
            <span></span>
          </div>
        </div>
        <div className="list-group list-group-flush">
          <button className="btn btn-primary ">edit</button>
          <button
            onClick={() => delete_Product(_id)}
            className="btn btn-danger "
          >
            delete
          </button>
          <button className="btn btn-success">ajouter</button>
        </div>
        <div className="card-body">
          <a href="#!" className="card-link">
            Card link
          </a>
          <a href="#!" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};
const mapstatetoprops = state => {
  return {
    product: state.Product_Reducer.product
  };
};
export default connect(mapstatetoprops)(DetailProduct);
