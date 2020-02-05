import React, { Fragment, useState, useEffect } from "react";
import { get_User_Profile } from "../Actions_art_wear/signAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { add_Or_Modify_Profil } from "../Actions_art_wear/profilAction";

const Profile = ({ get_User_Profile, add_Or_Modify_Profil, user }) => {
  useEffect(() => {
    get_User_Profile();
  }, []);
  console.log(user);
  const [formData, setFormData] = useState({
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    city: user.city,
    phonenumber: user.phonenumber,
    adress: user.adress
  });
  const { name, lastname, email, city, phonenumber, adress } = formData;
  const onchange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    add_Or_Modify_Profil({ ...formData });
  };

  return (
    <Fragment>
      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <Link to="index">Home</Link>{" "}
                <span className="mx-2 mb-0">/</span> <Link to="cart">Cart</Link>{" "}
                <span className="mx-2 mb-0">/</span>{" "}
                <strong className="text-black">Checkout</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              {/* --------------- startForm Profile  ---------------------------------  */}

              <div className="col-md-6">
                <form onSubmit={onSubmit}>
                  <div className="col-md-12 mb-5 mb-md-0">
                    <h2 className="h3 mb-3 text-black">Form Profile</h2>
                    <div className="p-3 p-lg-5 border">
                      <div className="form-group row">
                        {/* ----------  First Name ------  */}

                        <div className="col-md-6">
                          <label htmlFor="c_fname" className="text-black">
                            First Name <span className="text-danger">*</span>
                          </label>
                          <input
                            value={name}
                            onChange={onchange}
                            type="text"
                            className="form-control"
                            id="c_fname"
                            name="name"
                            placeholder="..."
                          />
                        </div>

                        {/* ----------  Last Name ------  */}

                        <div className="col-md-6">
                          <label htmlFor="c_lname" className="text-black">
                            Last Name <span className="text-danger">*</span>
                          </label>
                          <input
                           
                           onChange={onchange} 
                           value={lastname}
                            type="text"
                            className="form-control"
                            id="c_lname"
                            name="lastname"
                            placeholder="..."
                          />
                        </div>
                      </div>

                      {/* ----------  Email ------  */}

                      <div className="form-group row">
                        <div className="col-md-12">
                          <label htmlFor="c_companyname" className="text-black">
                            Email<span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={onchange}
                            value={email}
                            type="text"
                            className="form-control"
                            id="c_companyname"
                            name="email"
                            placeholder="@"
                          />
                        </div>
                      </div>

                      {/* ---------- State / Country ------  */}

                      <div className="form-group row">
                        <div className="col-md-6">
                          <label
                            htmlFor="c_state_country"
                            className="text-black"
                          >
                            State / Country{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={onchange}
                            value={city}
                            type="text"
                            className="form-control"
                            id="c_state_country"
                            name="city"
                            placeholder="..."
                          />
                        </div>

                        {/* ----------  Phone Number ------  */}

                        <div className="col-md-6">
                          <label htmlFor="c_postal_zip" className="text-black">
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={onchange}
                            value={phonenumber}
                            type="phone"
                            className="form-control"
                            id="c_postal_zip"
                            name="phonenumber"
                            placeholder="..."
                          />
                        </div>
                      </div>

                      {/* ----------  Address ------  */}

                      <div className="form-group row">
                        <div className="col-md-12">
                          <label htmlFor="c_address" className="text-black">
                            Address <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={onchange}
                            value={adress}
                            type="text"
                            className="form-control"
                            id="c_address"
                            name="address"
                            placeholder="..."
                          />
                        </div>
                      </div>

                      {/* ----------  autre parametre ------  */}

                      <div className="form-group row">
                        <div className="col-md-12">
                          <label htmlFor="c_address" className="text-black">
                            autre parametre{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="c_address"
                            name="address"
                            placeholder="Street"
                          />
                        </div>
                      </div>
                      <div className=" row  justify-content-around ">
                   
                          <input
                            type="submit"
                            className="my-2 btn btn-warning btn-sm "
                            value="Create Profile"
                          />
                     
                        <Link to="/shopping">
                          <button className="my-2 btn btn-sm btn-primary">
                            Back to shop
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* --------------- End Form Profile  ---------------------------------  */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapstatetoprops = state => {
  return {
    user: state.sign_Reducer.user
  };
};
export default connect(mapstatetoprops, {
  get_User_Profile,
  add_Or_Modify_Profil
})(Profile);
