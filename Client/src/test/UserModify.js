import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { modif_My_profile, get_User_Profile } from "../Actions_art_wear/signAction";
import Spiner from "./Hoc/Spiner";

const UserModify = ({ modif_My_profile, get_User_Profile , user : { user , loading} }) => {
  useEffect(() => {
    get_User_Profile();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const onchange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    modif_My_profile({ name, email, password });
  };
  const { name, email, password } = formData;


  
  return (
    loading && user ? <Spiner/> : 
    <Fragment>
      <h1 className="large text-primary">Modify user</h1>
      <p className="lead">
        <i className="fas fa-user"></i> modify ur profile
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            onChange={e => onchange(e)}
            value={name}
            type="text"
            placeholder={user.name}
            name="name"
            // required
          />
        </div>
        <div className="form-group">
          <input
            onChange={e => onchange(e)}
            value={email}
            autoComplete="email"
            type="email"
            placeholder={user.email}
            name="email"
          />

          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            onChange={e => onchange(e)}
            value={password}
            type="password"
            autoComplete="current-password"
            placeholder={user.password}
            name="password"
            // minLength="6"
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Modify" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </Fragment>
  );
};
const mapstatetoprops = state => {
  return {
    user: state.sign_Reducer
  };
};
export default connect(mapstatetoprops, { modif_My_profile ,get_User_Profile })(UserModify);
