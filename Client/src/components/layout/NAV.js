import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { get_User_Profile, LogOut } from "../../Actions_art_wear/signAction";

const NAV = ({
  nb_articles,
  role,
  get_User_Profile,
  LogOut,
  isAuthenticated
}) => {
  useEffect(() => {
    get_User_Profile();
  }, []);
  return (
    <Fragment>
      <div className="site-wrap">
        <header className="site-navbar" role="banner">
          <div className="site-navbar-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                  <form action="" className="site-block-top-search">
                    <span className="icon icon-search2"></span>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Search"
                    />
                  </form>
                </div>

                <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                  <div className="site-logo">
                    <Link to="/" className="js-logo-clone">
                      Shoppers
                    </Link>
                  </div>
                </div>

                {/***** only addproduct + profile  for Admin  ******** */}
                {role === "Admin" ? (
                  <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                    <div className="site-top-icons">
                      <ul>
                        <li>
                          <Link to="/adminproduct">
                            <button className="btn btn-sm btn-primary mr-5">
                              Add product
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/profile"
                            onClick={() => get_User_Profile()}
                          >
                            <span className="icon icon-person"></span>
                          </Link>
                        </li>

                        <li className="d-inline-block d-md-none ml-md-0">
                          <Link
                            to="#"
                            className="site-menu-toggle js-menu-toggle"
                          >
                            <span className="icon-menu"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  //***** only profile  + favori + cart for user  ******** */}

                  <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                    <div className="site-top-icons">
                      <ul>
                        <li>
                          <Link
                            to="/profile"
                            onClick={() => get_User_Profile()}
                          >
                            <span className="icon icon-person"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon icon-heart-o"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/cart" className="site-cart">
                            <span className="icon icon-shopping_cart"></span>

                            <span type="number" className="count">
                              {nb_articles
                                .map(el => el.qte)
                                .reduce((a, b) => a + b, 0)}
                            </span>
                          </Link>
                        </li>
                        <li className="d-inline-block d-md-none ml-md-0">
                          <Link
                            to="#"
                            className="site-menu-toggle js-menu-toggle"
                          >
                            <span className="icon-menu"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* *********** start Nav Bar of User ***********************/}
          {role === "user" ? (
            <nav
              className="site-navigation text-right text-md-center"
              role="navigation"
            >
              <div className="container">
                <ul className="site-menu js-clone-nav d-none d-md-block">
                  <li>
                    <Link to="/shopping">Shop</Link>
                  </li>

                  <li>
                    <Link to="/signin">signin</Link>
                  </li>
                  <li>
                    <Link to="/signup">signup</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={LogOut}>
                      Deconnection
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          ) : (
            /* *********** start Nav Bar For Admin ***********************/
            <nav
              className="site-navigation text-right text-md-center"
              role="navigation"
            >
              <div className="container">
                <ul className="site-menu js-clone-nav d-none d-md-block">
                  <li className="has-children active">
                    <Link to="/">Home</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="#">Menu One</Link>
                      </li>
                      <li>
                        <Link to="#">Menu Two</Link>
                      </li>
                      <li>
                        <Link to="#">Menu Three</Link>
                      </li>
                    </ul>
                  </li>
                  {isAuthenticated && (
                    <li className="has-children">
                      <Link to="/">details</Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="/listofusers">List Of Users</Link>
                        </li>
                        <li>
                          <Link to="/listoforders">list Of Orders</Link>
                        </li>
                      </ul>
                    </li>
                  )}

                  <li>
                    <Link to="/shopping">Shop</Link>
                  </li>

                  <li>
                    <Link to="/signin">signin</Link>
                  </li>
                  <li>
                    <Link to="/signup">signup</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={LogOut}>
                      Deconnection
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          )}
        </header>
      </div>
    </Fragment>
  );
};

const mapstatetoprops = state => {
  return {
    nb_articles: state.panier_Reducer,
    role: state.sign_Reducer.user.role,
    isAuthenticated: state.sign_Reducer.isAuthenticated
  };
};
export default connect(mapstatetoprops, { get_User_Profile, LogOut })(NAV);
