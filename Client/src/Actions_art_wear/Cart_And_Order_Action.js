import {
  ADD_TO_CART,
  ADD_ORDER_TO_DB,
  GET_ALL_ORDERS,
  AUTH_ERROR,
  UPDATE_ONE_PRODUCT,
  DELETE_ONE_PRODUCT
} from "./Const";
import axios from "axios";
import setAuthToken from "../Utils/setAuthToken";

/* **************  Cart ACTION  ******************  */

export const addToCart = obj => dispatch => {
  dispatch({ type: ADD_TO_CART, payload: obj });
};
export const updateAllArticles = obj => dispatch => {
  dispatch({ type: UPDATE_ONE_PRODUCT, payload: obj });
};
export const deleteOneArticle = id => dispatch => {
  dispatch({ type: DELETE_ONE_PRODUCT, payload: id });
};
/* **************  Order ACTION  ******************  */

export const add_Order_To_Db = array => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  let config = {
    headers: { "Content-Type": "application/json" }
  };
  let body = JSON.stringify(array);
  try {
    await axios.post("/artwear/order", body, config);
    console.log("we access post order route ");

    dispatch({ type: ADD_ORDER_TO_DB, payload: array });
  } catch (err) {
    console.log("we fail to post the order");
    console.log(err);
  }
};

export const get_All_Orders = () => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);

  try {
    let orders = await axios.get("/artwear/orders");
    console.log("we access all orders route ");
    // console.log("Action : ", orders.data);
    dispatch({ type: GET_ALL_ORDERS, payload: orders.data });
  } catch (err) {
    console.log("we fail to get all orders ");
    console.log(err);
  }
};

export const delete_Order = id => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    await axios.delete(`/artwear/order/${id}`);
    console.log("we access delete order route ");
    dispatch(get_All_Orders());
  } catch (err) {
    console.log("we fail to delete the users ");
    dispatch({
      type: AUTH_ERROR
    });
  }
};
