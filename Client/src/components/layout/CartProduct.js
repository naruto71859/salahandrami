import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  updateAllArticles,
  deleteOneArticle
} from "../../Actions_art_wear/Cart_And_Order_Action";

const CartProduct = ({
  product = {},

  updateAllArticles,
  deleteOneArticle
}) => {
  const [quantitiy, setquantity] = useState({
    quant: product.qte
  });

  const { quant } = quantitiy;

  let handelchange = e => {
    setquantity({ ...setquantity, quant: e.target.value });
  };

  let plusquanttocart = obj => {
    setquantity({ ...quantitiy, quant: quant + 1 });
    updateAllArticles({ ...obj });
  };

  let minusquanttocart = obj => {
    setquantity({ ...quantitiy, quant: quant - 1 });
    updateAllArticles({ ...obj });
  };

  return (
    <Fragment>
      <tr>
        <td className="product-thumbnail">
          <img src="images/cloth_1.jpg" alt="I" className="img-fluid" />
        </td>
        <td className="product-name">
          <h2 className="h5 text-black">{product.name}</h2>
        </td>
        <td>${product.price}.00</td>
        <td>
          <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
            {/* ---------------------------------------------------------------------------------------------------> */}
            <div className="input-group-prepend">
              <button
                onClick={e =>
                  product.qte === 1
                    ? null
                    : minusquanttocart({ ...product, qte: product.qte - 1 })
                }
                className="btn btn-outline-primary "
                type="button"
              >
                -
              </button>
            </div>
            {/* ----------------> */}

            <input
              type="number"
              active="false"
              className="form-control text-center"
              onChange={handelchange}
              value={quant}
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />

            {/* ----------------> */}
            <div className="input-group-append">
              <button
                onClick={e =>
                  plusquanttocart({ ...product, qte: product.qte + 1 })
                }
                className="btn btn-outline-primary "
                type="button"
              >
                +
              </button>
              {/* ---------------------------------------------------------------------------------------------------> */}
            </div>
          </div>
        </td>
        <td>${product.price * product.qte}.00</td>
        <td>
          <Link
            onClick={() => deleteOneArticle(product._id)}
            to="/Cart"
            className="btn btn-primary btn-sm"
          >
            X
          </Link>
        </td>
      </tr>
    </Fragment>
  );
};

const mapstatetoprops = state => {
  return {
    order: state.panier_Reducer
  };
};
export default connect(mapstatetoprops, {
  addToCart,
  updateAllArticles,
  deleteOneArticle
})(CartProduct);
