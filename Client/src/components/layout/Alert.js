import React from "react";
import { connect } from "react-redux";

const Alert = ({ alerts = [] }) =>
  alert !== null &&
  alerts.length > 0 &&
  alerts.map((el,i) => (
    <div key={i}
      className={`alert alert-${el.alertType} alert-dismissable col fade show m-1`}
      role="alert"
    >
      <h4 className="alert-heading text-center mb-0 ">{el.msg}</h4>
    </div>
  ));
const mapstatetoprops = state => {
  return {
    alerts: state.alert_Reducer
  };
};
export default connect(mapstatetoprops)(Alert);
