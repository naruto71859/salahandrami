import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../Actions_art_wear/signAction";
import { set_Alert } from "../Actions_art_wear/alertAction";
import Alert from "./layout/Alert";
const Register = ({ register, set_Alert, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = formData;
  const onchange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    password === password2
      ? register({ name, email, password })
      : set_Alert({ msg: "password dont match", alertType: "danger" });
  };

  if (isAuthenticated) return <Redirect to="/" />;
  return (
    <Fragment>
      <div className="site-wrap ">
        <div className="site-section ">
          <Alert />
          <form className="container" onSubmit={e => onSubmit(e)}>
            <div className="row ">
              <div className="col-md-6 mb-5 mb-md-0 m-auto">
                <h2 className="h3 mb-3 text-black">Signup Form</h2>
                <div className="p-3 p-lg-5 border">
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_fname" className="text-black">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        onChange={e => onchange(e)}
                        value={name}
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="form-control"

                        // required
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="Email" className="text-black">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        onChange={e => onchange(e)}
                        value={email}
                        autoComplete="email"
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="password" className="text-black">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        onChange={e => onchange(e)}
                        value={password}
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        name="password"
                        className="form-control"

                        // minLength="6"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      onChange={e => onchange(e)}
                      value={password2}
                      type="password"
                      autoComplete="current-password"
                      placeholder="Password"
                      name="password2"
                      className="form-control"
                      placeholder="Confirm ur password"

                      // minLength="6"
                    />
                  </div>

                  <div className=" row  justify-content-around ">
                    <input
                      type="submit"
                      className="btn btn-info btn-sm "
                      value="SignUp"
                    />

                    <Link to="/signin">
                      <button className="btn btn-sm btn-secondary">
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* ***************************************************** */}
          </form>
        </div>
      </div>
    </Fragment>
  );
};

const mapstatetoprops = state => {
  return {
    isAuthenticated: state.sign_Reducer.isAuthenticated
  };
};
export default connect(mapstatetoprops, { register, set_Alert })(Register);
