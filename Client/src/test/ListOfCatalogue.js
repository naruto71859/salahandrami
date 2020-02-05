import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import { searchAll } from "../Actions_art_wear/searchAction";

const ListOfCatalogue = ({ products = [], searchAll }) => {
  useEffect(() => {
    searchAll();
  }, []);

  return (
    <div className=" container">
      <div className="row">
        {products.map((el, i) => (
          <ProductCard product={el} key={i} />
        ))}
      </div>
    </div>
  );
};
const mapstatetoprops = state => {
  return {
    products: state.search_Reducer // state take the name of the file of reducer
  };
};

export default connect(mapstatetoprops, { searchAll })(ListOfCatalogue);

{
  /* <div className="owl-item cloned" style={{width: "1473px"}}><div className="owl-item">
<div className="background_image" style={{backgroundImage:'url(images/home.jpg)'}}></div>
<div className="container fill_height">
  <div className="row fill_height">
    <div className="col fill_height">
      <div className="home_container d-flex flex-column align-items-center justify-content-start">
        <div className="home_content">
          <div className="home_title">Popular</div>
          <div className="home_subtitle">Summer Wear</div>
          <div className="home_items">
            <div className="row">
              <div className="col-sm-3 offset-lg-1">
                <div className="home_item_side"><a href="product.html"><img src="images/home_1.jpg" alt=""//></a></div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-md-0">
                <div className="product home_item_large">
                  <div className="product_tag d-flex flex-column align-items-center justify-content-center">
                    <div>
                      <div>from</div>
                      <div>$3<span>.99</span></div>
                    </div>
                  </div>
                  <div className="product_image"><img src="images/product_1.jpg" alt=""//></div>
                  <div className="product_content">
                    <div className="product_info d-flex flex-row align-items-start justify-content-start">
                      <div>
                        <div>
                          <div className="product_name"><a href="product.html">Cool Clothing with Brown Stripes</a></div>
                          <div className="product_category">In <a href="category.html">Category</a></div>
                        </div>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
                        <div className="product_price text-right">$3<span>.99</span></div>
                      </div>
                    </div>
                    <div className="product_buttons">
                      <div className="text-right d-flex flex-row align-items-start justify-content-start">
                        <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                          <div><div><img src="images/heart.svg" alt=""//><div>+</div></div></div>
                        </div>
                        <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                          <div><div><img src="images/cart_2.svg" alt=""//><div>+</div></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="home_item_side"><a href="product.html"><img src="images/home_3.jpg" alt=""//></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div></div> */
}

// <Fragment>
//   <div className="home" >
// 		<div className="home_slider_container">
// 			<div className="owl-carousel owl-theme home_slider owl-loaded">

// 			<div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-2946px, 0px, 0px)', transition: "all 1.2s ease 0s", width: "11784px"}}><div className="owl-item cloned" style={{width: "1473px"}}><div className="owl-item">
// 					<div className="background_image" style={{backgroundImage:'url(images/home.jpg'}}></div>
// 					<div className="container fill_height">
// 						<div className="row fill_height">
// 							<div className="col fill_height">
// 								<div className="home_container d-flex flex-column align-items-center justify-content-start">
// 									<div className="home_content">
// 										<div className="home_title">Trendsetters</div>
// 										<div className="home_subtitle">Summer Wear</div>
// 										<div className="home_items">
// 											<div className="row">
// 												<div className="col-sm-3 offset-lg-1">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_1.jpg" alt=""/></a></div>
// 												</div>
// 												<div className="col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-md-0">
// 													<div className="product home_item_large">
// 														<div className="product_tag d-flex flex-column align-items-center justify-content-center">
// 															<div>
// 																<div>from</div>
// 																<div>$3<span>.99</span></div>
// 															</div>
// 														</div>
// 														<div className="product_image"><img src="images/product_2.jpg" alt=""/></div>

// 													</div>
// 												</div>
// 												<div className="col-sm-3">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_3.jpg" alt=""/></a></div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div></div><div className="owl-item cloned" style={{width: "1473px"}}><div className="owl-item">
// 					<div className="background_image" style={{backgroundImage:'url(images/home.jpg'}}></div>
// 					<div className="container fill_height">
// 						<div className="row fill_height">
// 							<div className="col fill_height">
// 								<div className="home_container d-flex flex-column align-items-center justify-content-start">
// 									<div className="home_content">
// 										<div className="home_title">Premium Items</div>
// 										<div className="home_subtitle">Summer Wear</div>
// 										<div className="home_items">
// 											<div className="row">
// 												<div className="col-sm-3 offset-lg-1">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_1.jpg" alt=""/></a></div>
// 												</div>
// 												<div className="col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-md-0">
// 													<div className="product home_item_large">
// 														<div className="product_tag d-flex flex-column align-items-center justify-content-center">
// 															<div>
// 																<div>from</div>
// 																<div>$3<span>.99</span></div>
// 															</div>
// 														</div>
// 														<div className="product_image"><img src="images/product_3.jpg" alt=""/></div>
// 														<div className="product_content">
// 															<div className="product_info d-flex flex-row align-items-start justify-content-start">
// 																<div>
// 																	<div>
// 																		<div className="product_name"><a href="product.html">Cool Clothing with Brown Stripes</a></div>
// 																		<div className="product_category">In <a href="category.html">Category</a></div>
// 																	</div>
// 																</div>
// 																<div className="ml-auto text-right">
// 																	<div className="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
// 																	<div className="product_price text-right">$3<span>.99</span></div>
// 																</div>
// 															</div>
// 															<div className="product_buttons">
// 																<div className="text-right d-flex flex-row align-items-start justify-content-start">
// 																	<div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/heart.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																	<div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/cart_2.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-3">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_3.jpg" alt=""/></a></div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div></div><div className="owl-item active" style={{width: "1473px"}}><div className="owl-item">
// 					<div className="background_image" style={{backgroundImage:'url(images/home.jpg'}}></div>
// 					<div className="container fill_height">
// 						<div className="row fill_height">
// 							<div className="col fill_height">
// 								<div className="home_container d-flex flex-column align-items-center justify-content-start">
// 									<div className="home_content">
// 										<div className="home_title">New Arrivals</div>
// 										<div className="home_subtitle">Summer Wear</div>
// 										<div className="home_items">
// 											<div className="row">
// 												<div className="col-sm-3 offset-lg-1">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_1.jpg" alt=""/></a></div>
// 												</div>
// 												<div className="col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-md-0">
// 													<div className="product home_item_large">
// 														<div className="product_tag d-flex flex-column align-items-center justify-content-center">
// 															<div>
// 																<div>from</div>
// 																<div>$3<span>.99</span></div>
// 															</div>
// 														</div>
// 														<div className="product_image"><img src="images/home_2.jpg" alt=""/></div>
// 														<div className="product_content">
// 															<div className="product_info d-flex flex-row align-items-start justify-content-start">
// 																<div>
// 																	<div>
// 																		<div className="product_name"><a href="product.html">Cool Clothing with Brown Stripes</a></div>
// 																		<div className="product_category">In <a href="category.html">Category</a></div>
// 																	</div>
// 																</div>
// 																<div className="ml-auto text-right">
// 																	<div className="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
// 																	<div className="product_price text-right">$3<span>.99</span></div>
// 																</div>
// 															</div>
// 															<div className="product_buttons">
// 																<div className="text-right d-flex flex-row align-items-start justify-content-start">
// 																	<div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/heart.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																	<div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/cart_2.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-3">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_3.jpg" alt=""/></a></div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div></div><div className="owl-item" style={{width: "1473px"}}><div className="owl-item">
// 					<div className="background_image" style={{backgroundImage:'url(images/home.jpg'}}></div>
// 					<div className="container fill_height">
// 						<div className="row fill_height">
// 							<div className="col fill_height">
// 								<div className="home_container d-flex flex-column align-items-center justify-content-start">
// 									<div className="home_content">
// 										<div className="home_title">Popular</div>
// 										<div className="home_subtitle">Summer Wear</div>
// 										<div className="home_items">
// 											<div className="row">
// 												<div className="col-sm-3 offset-lg-1">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_1.jpg" alt=""/></a></div>
// 												</div>
// 												<div className="col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-md-0">
// 													<div className="product home_item_large">
// 														<div className="product_tag d-flex flex-column align-items-center justify-content-center">
// 															<div>
// 																<div>from</div>
// 																<div>$3<span>.99</span></div>
// 															</div>
// 														</div>
// 														<div className="product_image"><img src="images/product_1.jpg" alt=""/></div>
// 														<div className="product_content">
// 															<div className="product_info d-flex flex-row align-items-start justify-content-start">
// 																<div>
// 																	<div>
// 																		<div className="product_name"><a href="product.html">Cool Clothing with Brown Stripes</a></div>
// 																		<div className="product_category">In <a href="category.html">Category</a></div>
// 																	</div>
// 																</div>
// 																<div className="ml-auto text-right">
// 																	<div className="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
// 																	<div className="product_price text-right">$3<span>.99</span></div>
// 																</div>
// 															</div>
// 															<div className="product_buttons">
// 																<div className="text-right d-flex flex-row align-items-start justify-content-start">
// 																	<div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/heart.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																	<div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/cart_2.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-3">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_3.jpg" alt=""/></a></div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div></div><div className="owl-item" style={{width: "1473px"}}><div className="owl-item">
// 					<div className="background_image" style={{backgroundImage:'url(images/home.jpg'}}></div>
// 					<div className="container fill_height">
// 						<div className="row fill_height">
// 							<div className="col fill_height">
// 								<div className="home_container d-flex flex-column align-items-center justify-content-start">
// 									<div className="home_content">
// 										<div className="home_title">Trendsetters</div>
// 										<div className="home_subtitle">Summer Wear</div>
// 										<div className="home_items">
// 											<div className="row">
// 												<div className="col-sm-3 offset-lg-1">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_1.jpg" alt=""/></a></div>
// 												</div>
// 												<div className="col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-md-0">
// 													<div className="product home_item_large">
// 														<div className="product_tag d-flex flex-column align-items-center justify-content-center">
// 															<div>
// 																<div>from</div>
// 																<div>$3<span>.99</span></div>
// 															</div>
// 														</div>
// 														<div className="product_image"><img src="images/product_2.jpg" alt=""/></div>
// 														<div className="product_content">
// 															<div className="product_info d-flex flex-row align-items-start justify-content-start">
// 																<div>
// 																	<div>
// 																		<div className="product_name"><a href="product.html">Cool Clothing with Brown Stripes</a></div>
// 																		<div className="product_category">In <a href="category.html">Category</a></div>
// 																	</div>
// 																</div>
// 																<div className="ml-auto text-right">
// 																	<div className="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
// 																	<div className="product_price text-right">$3<span>.99</span></div>
// 																</div>
// 															</div>
// 															<div className="product_buttons">
// 																<div className="text-right d-flex flex-row align-items-start justify-content-start">
// 																	<div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/heart.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																	<div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/cart_2.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-3">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_3.jpg" alt=""/></a></div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div></div><div className="owl-item" style={{width: "1473px"}}><div className="owl-item">
// 					<div className="background_image" style={{backgroundImage:'url(images/home.jpg'}}></div>
// 					<div className="container fill_height">
// 						<div className="row fill_height">
// 							<div className="col fill_height">
// 								<div className="home_container d-flex flex-column align-items-center justify-content-start">
// 									<div className="home_content">
// 										<div className="home_title">Premium Items</div>
// 										<div className="home_subtitle">Summer Wear</div>
// 										<div className="home_items">
// 											<div className="row">
// 												<div className="col-sm-3 offset-lg-1">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_1.jpg" alt=""/></a></div>
// 												</div>
// 												<div className="col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-md-0">
// 													<div className="product home_item_large">
// 														<div className="product_tag d-flex flex-column align-items-center justify-content-center">
// 															<div>
// 																<div>from</div>
// 																<div>$3<span>.99</span></div>
// 															</div>
// 														</div>
// 														<div className="product_image"><img src="images/product_3.jpg" alt=""/></div>
// 														<div className="product_content">
// 															<div className="product_info d-flex flex-row align-items-start justify-content-start">
// 																<div>
// 																	<div>
// 																		<div className="product_name"><a href="product.html">Cool Clothing with Brown Stripes</a></div>
// 																		<div className="product_category">In <a href="category.html">Category</a></div>
// 																	</div>
// 																</div>
// 																<div className="ml-auto text-right">
// 																	<div className="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
// 																	<div className="product_price text-right">$3<span>.99</span></div>
// 																</div>
// 															</div>
// 															<div className="product_buttons">
// 																<div className="text-right d-flex flex-row align-items-start justify-content-start">
// 																	<div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/heart.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																	<div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/cart_2.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-3">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_3.jpg" alt=""/></a></div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div></div><div className="owl-item cloned" style={{width: "1473px"}}><div className="owl-item">
// 					<div className="background_image" style={{backgroundImage:'url(images/home.jpg'}}></div>
// 					<div className="container fill_height">
// 						<div className="row fill_height">
// 							<div className="col fill_height">
// 								<div className="home_container d-flex flex-column align-items-center justify-content-start">
// 									<div className="home_content">
// 										<div className="home_title">New Arrivals</div>
// 										<div className="home_subtitle">Summer Wear</div>
// 										<div className="home_items">
// 											<div className="row">
// 												<div className="col-sm-3 offset-lg-1">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_1.jpg" alt=""/></a></div>
// 												</div>
// 												<div className="col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-md-0">
// 													<div className="product home_item_large">
// 														<div className="product_tag d-flex flex-column align-items-center justify-content-center">
// 															<div>
// 																<div>from</div>
// 																<div>$3<span>.99</span></div>
// 															</div>
// 														</div>
// 														<div className="product_image"><img src="images/home_2.jpg" alt=""/></div>
// 														<div className="product_content">
// 															<div className="product_info d-flex flex-row align-items-start justify-content-start">
// 																<div>
// 																	<div>
// 																		<div className="product_name"><a href="product.html">Cool Clothing with Brown Stripes</a></div>
// 																		<div className="product_category">In <a href="category.html">Category</a></div>
// 																	</div>
// 																</div>
// 																<div className="ml-auto text-right">
// 																	<div className="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
// 																	<div className="product_price text-right">$3<span>.99</span></div>
// 																</div>
// 															</div>
// 															<div className="product_buttons">
// 																<div className="text-right d-flex flex-row align-items-start justify-content-start">
// 																	<div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/heart.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																	<div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/cart_2.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-3">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_3.jpg" alt=""/></a></div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div></div><div className="owl-item cloned" style={{width: "1473px"}}><div className="owl-item">
// 					<div className="background_image" style={{backgroundImage:'url(images/home.jpg'}}></div>
// 					<div className="container fill_height">
// 						<div className="row fill_height">
// 							<div className="col fill_height">
// 								<div className="home_container d-flex flex-column align-items-center justify-content-start">
// 									<div className="home_content">
// 										<div className="home_title">Popular</div>
// 										<div className="home_subtitle">Summer Wear</div>
// 										<div className="home_items">
// 											<div className="row">
// 												<div className="col-sm-3 offset-lg-1">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_1.jpg" alt=""/></a></div>
// 												</div>
// 												<div className="col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-md-0">
// 													<div className="product home_item_large">
// 														<div className="product_tag d-flex flex-column align-items-center justify-content-center">
// 															<div>
// 																<div>from</div>
// 																<div>$3<span>.99</span></div>
// 															</div>
// 														</div>
// 														<div className="product_image"><img src="images/product_1.jpg" alt=""/></div>
// 														<div className="product_content">
// 															<div className="product_info d-flex flex-row align-items-start justify-content-start">
// 																<div>
// 																	<div>
// 																		<div className="product_name"><a href="product.html">Cool Clothing with Brown Stripes</a></div>
// 																		<div className="product_category">In <a href="category.html">Category</a></div>
// 																	</div>
// 																</div>
// 																<div className="ml-auto text-right">
// 																	<div className="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
// 																	<div className="product_price text-right">$3<span>.99</span></div>
// 																</div>
// 															</div>
// 															<div className="product_buttons">
// 																<div className="text-right d-flex flex-row align-items-start justify-content-start">
// 																	<div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/heart.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																	<div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
// 																		<div><div><img src="images/cart_2.svg" alt=""/><div>+</div></div></div>
// 																	</div>
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-3">
// 													<div className="home_item_side"><a href="product.html"><img src="images/home_3.jpg" alt=""/></a></div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div></div></div></div><div className="owl-nav disabled"><div className="owl-prev">prev</div><div className="owl-next">next</div></div><div className="owl-dots disabled"></div></div>
// 			<div className="home_slider_nav home_slider_nav_prev"><i className="fa fa-chevron-left" aria-hidden="true"></i></div>
// 			<div className="home_slider_nav home_slider_nav_next"><i className="fa fa-chevron-right" aria-hidden="true"></i></div>

// 			<div className="home_slider_dots_container">
// 				<div className="container">
// 					<div className="row">
// 						<div className="col">
// 							<div className="home_slider_dots">
// 								<ul id="home_slider_custom_dots" className="home_slider_custom_dots d-flex flex-row align-items-center justify-content-center">
// 									<li className="home_slider_custom_dot">01</li>
// 									<li className="home_slider_custom_dot">02</li>
// 									<li className="home_slider_custom_dot">03</li>
// 									<li className="home_slider_custom_dot active">04</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 		</div>
// 	</div>

// <div classNameName="products">
//   <div classNameName="container">
//     <div classNameName="row">
//       <div classNameName="col-lg-6 offset-lg-3">
//         <div classNameName="section_title text-center">
//           Popular on Little Closet
//         </div>
//       </div>
//     </div>
//     <div classNameName="row page_nav_row">
//       <div classNameName="col">
//         <div classNameName="page_nav">
//           <ul classNameName="d-flex flex-row align-items-start justify-content-center">
//             <li classNameName="active">
//               <a href="category.html">Women</a>
//             </li>
//             <li>
//               <a href="category.html">Men</a>
//             </li>
//             <li>
//               <a href="category.html">Kids</a>
//             </li>
//             <li>
//               <a href="category.html">Home Deco</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div classNameName="row products_row">
//       {products.map((el, i) => (
//         <ProductCard product={el} key={i} />
//       ))}
//     </div>
//     <div classNameName="row load_more_row">
//       <div classNameName="col">
//         <div classNameName="button load_more ml-auto mr-auto">
//           <a href="#">load more</a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// </Fragment>
