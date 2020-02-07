import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Admin_get_all_Users_Profile } from "../Actions_art_wear/profilAction";
import Usercard from "./layout/Usercard";
import { set_Alert } from "../Actions_art_wear/alertAction";

const AdminListOfUsers = ({ users, orders, Admin_get_all_Users_Profile ,set_Alert}) => {
  useEffect(() => {
    Admin_get_all_Users_Profile();
  }, [Admin_get_all_Users_Profile]);

  return (
    <Fragment>
      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <Link to="index.html">Home</Link>
                <span className="mx-2 mb-0">/</span>
                <strong className="text-black">Admin of user</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            {!users || users.length === 0 ? (
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
              //***********  End Alert *************************** */
              <div className="row mb-5">
                <form className="col-md-12" method="post">
                  <div className="site-blocks-table">
                    <table className="table table-bordered table-hover">
                      <thead
                        style={{ backgroundColor: "rgba(50, 203, 241, 0.17)" }}
                      >
                        <tr>
                          <th className="product-thumbnail">Role</th>
                          <th className="product-name">Name</th>
                          <th className="product-price">Email</th>
                          <th className="product-quantity">Phone Number</th>
                          <th className="product-total">Adress</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/************************************************************************************** */}
                        {users.map((el, i) => (
                          <Usercard user={el} key={i} />
                        ))}

                        {/* ****************** */}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            )}

            <div className="row">
              <div className="col-md-6">
                <div className="row mb-5">
                  <Link
                    to="/shopping"
                    className="btn btn-outline-primary btn-sm btn-block"
                  >
                    Continue Shopping
                  </Link>
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
    users: state.sign_Reducer.users
  };
};
export default connect(mapstatetoprops, { Admin_get_all_Users_Profile , set_Alert })(
  AdminListOfUsers
);
