import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// HOC   used to see if u have access to the page u do else u are automaticly redirected to signin page 
const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? (
        <Redirect to="/signin" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapstatetoprops = state => {
  return {
    auth: state.sign_Reducer
  };
};
export default connect(mapstatetoprops)(PrivateRoute);
