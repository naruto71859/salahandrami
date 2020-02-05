import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  get_one_product,
  delete_Product
} from "../Actions_art_wear/ProdcutAction";
import { Link } from "react-router-dom";
const ProductCard = ({
  delete_Product,
  get_one_product,
  product: { name, price, _id, color, category }
}) => {
  return (
    <Fragment>
      <div
        className="col-sm-6 col-lg-4 mb-4 aos-init aos-animate"
        data-aos="fade-up"
      >
        <div className="block-4 text-center border">
          <Link
            to="detail"
            className="block-4-image"
            onClick={() => get_one_product(_id)}
          >
            <p>
              <img
                src="images/cloth_1.jpg"
                alt=" placeholder"
                className="img-fluid"
              />
            </p>
          </Link>
          <div to="/detail" className="block-4-text">
            <h3>{name} </h3>

            <div>
              <div className="d-flex justify-content-around align-items-center my-2">
                <Link
                  to="/modifyproduct"
                  onClick={() => get_one_product(_id)}
                  className="btn btn-success btn-sm"
                >
                  edit
                </Link>
                <button
                  onClick={() => delete_Product(_id)}
                  className="btn btn-danger btn-sm"
                >
                  X
                </button>
              </div>
            </div>
            <p className="mb-0">description: the {name} is </p>
            <p className="text-primary font-weight-bold">{price}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapstatetoprops = state => {
  return {
    products: state.search_Reducer
  };
};

export default connect(mapstatetoprops, { get_one_product, delete_Product })(
  ProductCard
);
