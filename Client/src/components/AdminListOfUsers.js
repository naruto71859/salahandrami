import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Admin_get_all_Users_Profile } from "../Actions_art_wear/profilAction";
import Usercard from "./layout/Usercard";

const AdminListOfUsers = ({ users, Admin_get_all_Users_Profile }) => {
  useEffect(() => {
    Admin_get_all_Users_Profile();
  }, []);
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
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
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
export default connect(mapstatetoprops, { Admin_get_all_Users_Profile })(
  AdminListOfUsers
);
