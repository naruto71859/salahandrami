import axios from "axios";
import { GET_ONE_PRODUCT, AUTH_ERROR } from "./Const";
import { searchAll, searchCategory, searchGender } from "./searchAction";
import setAuthToken from "../Utils/setAuthToken";
import { set_Alert } from "./alertAction";

export const add_product_to_db = obj => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    let config = {
      headers: { "Content-Type": "application/json" }
    };
    let body = JSON.stringify(obj); // we are sending the  body(as json) + the header(type json) to the backend
    console.log(body);
    await axios.post("/artwear/product", body, config);
    console.log("we success to post an article ");
    dispatch(
      set_Alert({
        msg: "you just created a new product ",
        alertType: "success"
      })
    );
  } catch (err) {
    console.log("we fail to add the product");

    let errors = err.response.data.errors;

    if (errors)
      errors.map(el =>
        dispatch(set_Alert({ msg: el.msg, alertType: "danger" }))
      );
  }
};

export const get_one_product = id => async dispatch => {
  try {
    let product = await axios.get(`/artwear/product/${id}`);
    console.log("we succes to get one product");

    dispatch({ type: GET_ONE_PRODUCT, payload: product.data });
  } catch (err) {
    console.log(err);
  }
};

export const delete_Product = (
  id,
  obj_category,
  obj_gender
) => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    await axios.delete(`/artwear/product/${id}`);
    console.log("product deleted");
    if (obj_category.iscategory) {
      return dispatch(searchCategory(obj_category));
    }
    dispatch(searchGender(obj_gender));
  } catch (err) {
    console.log("we fail to delete the users ");
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const modify_product = (obj, id) => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    let config = {
      headers: { "Content-Type": "application/json" }
    };
    let body = JSON.stringify(obj); // we are sending the  body(as json) + the header(type json) to the backend
    await axios.put(`/artwear/product/${id}`, body, config);
    console.log("we success to modify article ");
    dispatch(
      set_Alert({
        msg: "you just modified the  product ",
        alertType: "success"
      })
    );
  } catch (err) {
    console.log("we fail to add the product");
    let errors = err.response.data.errors;

    if (errors)
      errors.map(el =>
        dispatch(set_Alert({ msg: el.msg, alertType: "danger" }))
      );
  }
};
