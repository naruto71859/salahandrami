import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Log_in } from "../Actions_art_wear/signAction";

const Login = ({ Log_in }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  const onchange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    Log_in({ email, password });
  };
  return (
    <Fragment>
      <div className="site-wrap ">
        <div className="site-section ">
          <form className="container" onSubmit={e => onSubmit(e)}>
            <div className="row ">
              <div className="col-md-6 mb-5 mb-md-0 m-auto">
                <h2 className="h3 mb-3 text-black">Login Form</h2>
                <div className="p-3 p-lg-5 border">
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_fname" className="text-black">
                        Name <span className="text-danger">*</span>
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
                        minLength="6"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className=" row  justify-content-around ">
                    <button className="btn btn-primary btn-sm ">Confirm</button>
                    <Link to="/signup">
                      <button className="btn btn-sm btn-primary">Signup</button>
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
  return {};
};
export default connect(mapstatetoprops, {Log_in})(Login);
