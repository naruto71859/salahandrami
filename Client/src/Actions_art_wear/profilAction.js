import setAuthToken from "../Utils/setAuthToken";
import axios from "axios";
import { ALL_USERS, AUTH_ERROR } from "./Const";
import { get_User_Profile } from "./signAction";

/***** ADD/Modify Profile ************ */

export const add_Or_Modify_Profil= obj => async dispatch => {
  let config = {
    headers: { "Content-Type": "application/json" }
  };

  let body = JSON.stringify(obj);

  try {
    await axios.post("/artwear/profile", body, config);
    console.log("you modify ur profile successfull ");
  } catch (err) {
    console.log(err);
  }
};

/***** Get all  Profiles ************ */

export const Admin_get_all_Users_Profile = () => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    const res = await axios.get("/artwear/allusers");
    console.log("we access to the get all users route");

    dispatch({
      type: ALL_USERS,
      payload: res.data
    });
  } catch (err) {
    console.log("we fail to get all users ");
    dispatch({
      type: AUTH_ERROR
    });
  }
};

/***** Delete One Profile ************ */

export const Admin_delete_User_Profile = id => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    await axios.delete(`/artwear/user/${id}`);
    dispatch(Admin_get_all_Users_Profile());
  } catch (err) {
    console.log("we fail to delete the users ");
    dispatch({
      type: AUTH_ERROR
    });
  }
};

/***** Modify the role of the user ************ */

export const Admin_modify_Role_User = id => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    let config = {
      headers: { "Content-Type": "application/json" }
    };
    let body = JSON.stringify(id);
    await axios.put(`/artwear/user/${id}`, body, config);
    dispatch(Admin_get_all_Users_Profile());
  } catch (err) {
    console.log("we fail to delete the users ");
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// export const modif_My_profile = obj => async dispatch => {
//   if (localStorage.token) setAuthToken(localStorage.token);
//   try {
//     let config = {
//       headers: { "Content-Type": "application/json" }
//     };
//     let body = JSON.stringify(obj);
//     await axios.put(`/artwear/modify/`, body, config);
//     dispatch(get_User_Profile());
//   } catch (err) {
//     console.log("we fail to modift ur profile ");
//     // dispatch({
//     //   type: AUTH_ERROR
//     // });
//   }
// };
