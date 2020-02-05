import axios from "axios";
import { GET_ONE_PRODUCT, AUTH_ERROR } from "./Const";
import { searchAll } from "./searchAction";
import setAuthToken from "../Utils/setAuthToken";


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
  } catch (err) {
    console.log("we fail to add the product");
    console.log(err);
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

export const delete_Product = id => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    await axios.delete(`/artwear/product/${id}`);
  } catch (err) {
    console.log("we fail to delete the users ");
    dispatch({
      type: AUTH_ERROR
    });
  }
};



export const modify_product = (obj ,id)=> async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    let config = {
      headers: { "Content-Type": "application/json" }
    };
    let body = JSON.stringify(obj); // we are sending the  body(as json) + the header(type json) to the backend
    console.log('action', obj);
    await axios.put(`/artwear/product/${id}`, body, config);
    console.log("we success to modify article ");
  } catch (err) {
    console.log("we fail to add the product");
    console.log(err);
  }
};
