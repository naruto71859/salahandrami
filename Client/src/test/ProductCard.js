import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../Actions_art_wear/Cart_And_Order_Action";
import { Link } from "react-router-dom";
import { get_one_product } from "../Actions_art_wear/ProdcutAction";

const ProductCard = ({ product, addToCart, get_one_product }) => {
  /* ***********  Local State To handel Shopping Card  ***************** */
  const [CardData, setCardData] = useState({
    qte: 0
  });
  const { qte } = CardData;
  const onchange = e => setCardData({ ...CardData, qte: e.target.value });

  return (

<div className="card mx-auto my-2" style={{ width: "18rem" }}>
{/* <img src="..." className="card-img-top" alt="..." /> */}
<div className="card-body">
  <h1 className="card-title">{product.name}</h1>
  <p className="card-text">
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </p>
  <Link
    onClick={() => get_one_product(product._id)}
    to="/artwear/details"
    className="btn btn-primary"
  >
    Go somewhere
  </Link>

  <button
    className=" m-1 btn btn-success"
    onClick={qte > 0 ? () => addToCart({ ...product, qte }) : () => {}} // we are adding the qte to the payload
  >
    ajouter au panier
  </button>
  <div className="btn-group" role="group" aria-label="Basic example">
    <button
      onClick={() =>
        setCardData(
          qte > 1
            ? { ...CardData, qte: qte - 1 }
            : { ...CardData, qte: 1 }
        )
      }
      type="button"
      className="btn btn-secondary"
    >
      -
    </button>
    <input
      onChange={onchange}
      value={qte}
      type="text"
      className="btn btn-secondary"
    />

    <button
      onClick={() => setCardData({ ...CardData, qte: qte + 1 })}
      type="button"
      className="btn btn-secondary"
    >
      +
    </button>
  </div>
</div>
</div>


  );
};
const mapstatetoprops = state => {
  return {
    commande: state.panier_Reducer // state take the name of the file of reducer
  };
};
export default connect(mapstatetoprops, { addToCart, get_one_product })(
  ProductCard
);





// <div className="col-xl-4 col-md-6">
// <div className="product">
//   <div className="product_image">
//     <img src="images/product_1.jpg" alt=""   />
//   </div>
//   <div className="product_content">
//     <div className="product_info d-flex flex-row align-items-start justify-content-start">
//       <div>
//         <div>
//           <div className="product_name">
//             <a href="product.html">Cool Clothing with Brown Stripes</a>
//           </div>
//           <div className="product_category">
//             In <a href="category.html">Category</a>
//           </div>
//         </div>
//       </div>
//       <div className="ml-auto text-right">
//         <div className="rating_r rating_r_4 home_item_rating">
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//         </div>
//         <div className="product_price text-right">
//           $3<span>.99</span>
//         </div>
//       </div>
//     </div>
//     <div className="product_buttons">
//       <div className="text-right d-flex flex-row align-items-start justify-content-start">
//         <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
//           <div>
//             <div>
//               <img src="images/heart_2.svg" className="svg" alt="" />
//               <div>+</div>
//             </div>
//           </div>
//         </div>
//         <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
//           <div>
//             <div>
//               <img src="images/cart.svg" className="svg" alt="" />
//               <div>+</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>