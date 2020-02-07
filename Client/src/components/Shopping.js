import React, { Fragment, useEffect } from "react";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import {
  searchAll,
  searchCategory,
  searchGender
} from "../Actions_art_wear/searchAction";
import AdminProductCard from "./AdminProductCard";
import { Link } from "react-router-dom";

const Shopping = ({
  isAuthenticated,
  products = [],
  role,
  searchAll,
  searchCategory,
  searchGender
}) => {
  useEffect(() => {
    searchAll();
  }, [searchAll]);

  return (
    <Fragment>
      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <Link to="/index.html">Home</Link>{" "}
                <span className="mx-2 mb-0">/</span>
                <strong className="text-black">Shop</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-9 order-2">
                <div className="row">
                  <div className="col-md-12 mb-5">
                    <div className="float-md-left mb-4">
                      <h2 className="text-black h5">Shop All</h2>
                    </div>
                    <div className="d-flex">
                      <div className="dropdown mr-1 ml-md-auto">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          id="dropdownMenuOffset"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Latest
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuOffset"
                        >
                          <Link className="dropdown-item" to="/#!">
                            Men
                          </Link>
                          <Link className="dropdown-item" to="/#!">
                            Women
                          </Link>
                          <Link className="dropdown-item" to="/#!">
                            Children
                          </Link>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          id="dropdownMenuReference"
                          data-toggle="dropdown"
                        >
                          Reference
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuReference"
                        >
                          <Link className="dropdown-item" to="/#!">
                            Relevance
                          </Link>
                          <Link className="dropdown-item" to="/#!">
                            Name, A to Z
                          </Link>
                          <Link className="dropdown-item" to="/#!">
                            Name, Z to A
                          </Link>
                          <div className="dropdown-divider"></div>
                          <Link className="dropdown-item" to="/#!">
                            Price, low to high
                          </Link>
                          <Link className="dropdown-item" to="/#!">
                            Price, high to low
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*********** Alert *************************** */}

                {!products || products.length === 0 ? (
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div
                          className="alert alert-success alert-dismissable fade show"
                          role="alert"
                        >
                          <h2 className="alert-heading text-center ">
                            There is no Orders Yet
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  //{/*********** End Alert *************************** */}
                  <div className="row mb-5">
                    {products.map((el, i) =>
                      role === "Admin" && isAuthenticated ? (
                        <AdminProductCard product={el} key={i} />
                      ) : (
                        <ProductCard product={el} key={i} />
                      )
                    )}
                  </div>
                )}
              </div>

              <div className="col-md-3 order-1 mb-5 mb-md-0">
                {/* ********** SEARCH BY CATEGORY  ********* */}

                <div className="border p-4 rounded mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Categories
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <Link to="#pull" className="d-flex">
                        <span
                          onClick={() => searchCategory({ category: "pull" })}
                        >
                          pull
                        </span>
                        <span className="text-black ml-auto">(2,220)</span>
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="#jean" className="d-flex">
                        <span
                          onClick={() => searchCategory({ category: "jean" })}
                        >
                          jean
                        </span>
                        <span className="text-black ml-auto">(2,550)</span>
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="#casquette" className="d-flex">
                        <span
                          onClick={() =>
                            searchCategory({ category: "casquette" })
                          }
                        >
                          casquette
                        </span>
                        <span className="text-black ml-auto">(2,124)</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* ********** END OF SEARCH BY CATEGORY  ********* */}

                {/* ********** SEARCH BY GENDER  ********* */}
                <div className="border p-4 rounded mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Genders
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <Link to="#Men" className="d-flex">
                        <span onClick={() => searchGender({ gender: "men" })}>
                          Men
                        </span>
                        <span className="text-black ml-auto">(2,220)</span>
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="#women" className="d-flex">
                        <span onClick={() => searchGender({ gender: "women" })}>
                          Women
                        </span>
                        <span className="text-black ml-auto">(2,550)</span>
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="#children" className="d-flex">
                        <span
                          onClick={() => searchGender({ gender: "children" })}
                        >
                          Children
                        </span>
                        <span className="text-black ml-auto">(2,124)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* ********** END OF  SEARCH BY CATEGORY  ********* */}

                <div className="border p-4 rounded mb-4">
                  <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">
                      Filter by Price
                    </h3>
                    <div id="slider-range" className="border-primary"></div>
                    <input
                      type="text"
                      name="text"
                      id="amount"
                      className="form-control border-0 pl-0 bg-white"
                      disabled=""
                    />
                  </div>

                  <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">
                      Size
                    </h3>
                    <label htmlFor="s_sm" className="d-flex">
                      <input type="checkbox" id="s_sm" className="mr-2 mt-1" />
                      <span className="text-black">Small (2,319)</span>
                    </label>
                    <label htmlFor="s_md" className="d-flex">
                      <input type="checkbox" id="s_md" className="mr-2 mt-1" />
                      <span className="text-black">Medium (1,282)</span>
                    </label>
                    <label htmlFor="s_lg" className="d-flex">
                      <input type="checkbox" id="s_lg" className="mr-2 mt-1" />
                      <span className="text-black">Large (1,392)</span>
                    </label>
                  </div>

                  <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">
                      Color
                    </h3>
                    <Link
                      to="/#!"
                      className="d-flex color-item align-items-center"
                    >
                      <span className="bg-danger color d-inline-block rounded-circle mr-2"></span>
                      <span className="text-black">Red (2,429)</span>
                    </Link>
                    <Link
                      to="/#!"
                      className="d-flex color-item align-items-center"
                    >
                      <span className="bg-success color d-inline-block rounded-circle mr-2"></span>
                      <span className="text-black">Green (2,298)</span>
                    </Link>
                    <Link
                      to="/#!"
                      className="d-flex color-item align-items-center"
                    >
                      <span className="bg-info color d-inline-block rounded-circle mr-2"></span>
                      <span className="text-black">Blue (1,075)</span>
                    </Link>
                    <Link
                      to="/#!"
                      className="d-flex color-item align-items-center"
                    >
                      <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>
                      <span className="text-black">Purple (1,075)</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="site-section site-blocks-2">
                  <div className="row justify-content-center text-center mb-5">
                    <div className="col-md-7 site-section-heading pt-4">
                      <h2>Categories</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0"
                      data-aos="fade"
                      data-aos-delay=""
                    >
                      <Link className="block-2-item" to="/#!">
                        <figure className="image">
                          <img
                            src="images/women.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </figure>
                        <div className="text">
                          <span className="text-uppercase">Collections</span>
                          <h3>Women</h3>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <Link className="block-2-item" to="/#!">
                        <figure className="image">
                          <img
                            src="images/children.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </figure>
                        <div className="text">
                          <span className="text-uppercase">Collections</span>
                          <h3>Children</h3>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
                      data-aos="fade"
                      data-aos-delay="200"
                    >
                      <Link className="block-2-item" to="/#!">
                        <figure className="image">
                          <img
                            src="images/men.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </figure>
                        <div className="text">
                          <span className="text-uppercase">Collections</span>
                          <h3>Men</h3>
                        </div>
                      </Link>
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
    products: state.search_Reducer.catalogue,
    role: state.sign_Reducer.user.role,
    isAuthenticated: state.sign_Reducer.isAuthenticated
  };
};
export default connect(mapstatetoprops, {
  searchAll,
  searchCategory,
  searchGender
})(Shopping);
