import React, { Fragment } from "react";
import { connect } from "react-redux";
import { get_one_product } from "../Actions_art_wear/ProdcutAction";
import { Link } from "react-router-dom";
const ProductCard = ({
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
            to="/detail"
            className="block-4-image"
            onClick={() => get_one_product(_id)}
          >
            <p href="shop-single.html">
              <img
                src="images/cloth_1.jpg"
                alt=" placeholder"
                className="img-fluid"
              />
            </p>
          </Link>
          <Link to="/detail" className="block-4-text p-4">
            <h3 onClick={() => get_one_product(_id)}>
              <p href="shop-single.html">{name} </p>
            </h3>
            <p className="mb-0">description: the {name} is </p>
            <p className="text-primary font-weight-bold">{price}</p>
          </Link>
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

export default connect(mapstatetoprops, { get_one_product })(ProductCard);
