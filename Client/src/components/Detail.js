import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../Actions_art_wear/Cart_And_Order_Action";

const Detail = ({
  product,
  addToCart,
  product: { name, price, description, color, category, saison }
}) => {
  let [quantity, setquantity] = useState({
    qte: 1
  });
  let { qte } = quantity;
  let handelchange = e => {
    setquantity({ ...quantity, qte: e.target.value });
  };
  console.log(qte);
  return (
    <Fragment>
      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <Link to="index.html">Home</Link>{" "}
                <span className="mx-2 mb-0">/</span>
                <strong className="text-black">Tank Top T-Shirt</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="images/cloth_1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h2 className="text-black">{name}</h2>
                <p>
                  {description}
                  Pariatur, vitae, explicabo? Incidunt facere, natus soluta
                  dolores iusto! Molestiae expedita veritatis nesciunt
                  doloremque sint asperiores fuga voluptas, distinctio, aperiam,
                  ratione dolore.
                </p>
                <p className="mb-4">saison: {saison}</p>
                <p className="mb-4">color: {color}</p>
                <p className="mb-4">category: {category}</p>
                <p>
                  <strong className="text-primary h4">${price}.00</strong>
                </p>
                <div className="mb-1 d-flex">
                  <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                    <span
                      className="d-inline-block mr-2"
                      style={{ top: "-2px", position: "relative" }}
                    >
                      <input type="radio" id="option-sm" name="shop-sizes" />
                    </span>
                    <span className="d-inline-block text-black">Small</span>
                  </label>
                  <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                    <span
                      className="d-inline-block mr-2"
                      style={{ top: "-2px", position: "relative" }}
                    >
                      <input type="radio" id="option-md" name="shop-sizes" />
                    </span>
                    <span className="d-inline-block text-black">Medium</span>
                  </label>
                  <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                    <span
                      className="d-inline-block mr-2"
                      style={{ top: "-2px", position: "relative" }}
                    >
                      <input type="radio" id="option-lg" name="shop-sizes" />
                    </span>
                    <span className="d-inline-block text-black">Large</span>
                  </label>
                  <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                    <span
                      className="d-inline-block mr-2"
                      style={{ top: "-2px", position: "relative" }}
                    >
                      <input type="radio" id="option-xl" name="shop-sizes" />
                    </span>
                    <span className="d-inline-block text-black">
                      {" "}
                      Extra Large
                    </span>
                  </label>
                </div>
                <div className="mb-5">
                  <div
                    className="input-group mb-3"
                    style={{ maxWidth: "120px" }}
                  >
                    <div className="input-group-prepend">
                      <button
                        onClick={
                          qte === 1 ? null : () => setquantity({ qte: qte - 1 })
                        }
                        className="btn btn-outline-primary "
                        type="button"
                      >
                        -
                      </button>
                    </div>
                    <input
                      onChange={handelchange}
                      type="text"
                      className="form-control text-center"
                      value={qte}
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                    />
                    <div className="input-group-append">
                      <button
                        onClick={() => setquantity({ qte: qte + 1 })}
                        className="btn btn-outline-primary "
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <p>
                  <Link
                    onClick={() => addToCart({ ...product, qte: qte })}
                    to="cart"
                    className="buy-now btn btn-sm btn-primary"
                  >
                    Add To Cart
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section block-3 site-blocks-2 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>Featured Products</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="nonloop-block-3 owl-carousel">
                  <div className="item">
                    <div className="block-4 text-center">
                      <figure className="block-4-image">
                        <img
                          src="images/cloth_1.jpg"
                          alt=" placeholder"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="block-4-text p-4">
                        <h3>
                          <Link to="#">Tank Top</Link>
                        </h3>
                        <p className="mb-0">Finding perfect t-shirt</p>
                        <p className="text-primary font-weight-bold">$50</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="block-4 text-center">
                      <figure className="block-4-image">
                        <img
                          src="images/shoe_1.jpg"
                          alt=" placeholder"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="block-4-text p-4">
                        <h3>
                          <Link to="#">Corater</Link>
                        </h3>
                        <p className="mb-0">Finding perfect products</p>
                        <p className="text-primary font-weight-bold">$50</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="block-4 text-center">
                      <figure className="block-4-image">
                        <img
                          src="images/cloth_2.jpg"
                          alt=" placeholder"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="block-4-text p-4">
                        <h3>
                          <Link to="#">Polo Shirt</Link>
                        </h3>
                        <p className="mb-0">Finding perfect products</p>
                        <p className="text-primary font-weight-bold">$50</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="block-4 text-center">
                      <figure className="block-4-image">
                        <img
                          src="images/cloth_3.jpg"
                          alt=" placeholder"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="block-4-text p-4">
                        <h3>
                          <Link to="#">T-Shirt Mockup</Link>
                        </h3>
                        <p className="mb-0">Finding perfect products</p>
                        <p className="text-primary font-weight-bold">$50</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="block-4 text-center">
                      <figure className="block-4-image">
                        <img
                          src="images/shoe_1.jpg"
                          alt=" placeholder"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="block-4-text p-4">
                        <h3>
                          <Link to="#">Corater</Link>
                        </h3>
                        <p className="mb-0">Finding perfect products</p>
                        <p className="text-primary font-weight-bold">$50</p>
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
    product: state.Product_Reducer.product
  };
};
export default connect(mapstatetoprops, { addToCart })(Detail);
