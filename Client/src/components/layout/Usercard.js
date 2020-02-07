import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Admin_delete_User_Profile,
  Admin_modify_Role_User
} from "../../Actions_art_wear/profilAction";

const Usercard = ({
  user,
  Admin_delete_User_Profile,
  Admin_modify_Role_User
}) => {
  const {
    name = "",
    lastname = "",
    email = "",
    phonenumber = "",
    city = "",
    adress = "",
    _id,
    role
  } = user;
  return (
    <Fragment>
      <tr>
        <td>
          {/******  Selecting Role ****************** */}
          <select
            style={role === "user" ? { color: "green" } : { color: "red" }}
            defaultValue={role}
            onChange={e =>
              Admin_modify_Role_User({ role: e.target.value }, _id)
            }
            className="custom-select custom-select-lg mb-3"
          >
            <option value={role === "user" ? "Admin" : "user"}>
              {role === "user" ? "Admin" : "user"}
            </option>
            <option value={role}>{role}</option>
          </select>

          {/****** End Selecting Role ****************** */}
        </td>
        <td className="product-name">
          <h2 className="h5 text-black">
            <strong> {name}</strong> {`,${lastname}`}
          </h2>
        </td>
        <td>{email} </td>
        <td>
          <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
            {phonenumber}
          </div>
        </td>
        <td>{`${city}: ${adress}`} </td>
        <td>
          <Link
            to="/listofusers"
            onClick={() => Admin_delete_User_Profile(user._id)}
            className="btn btn-danger btn-sm"
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
  Admin_delete_User_Profile,
  Admin_modify_Role_User
})(Usercard);
