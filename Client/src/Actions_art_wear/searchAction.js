import {
  SEARCH_ALL,
  SEARCH_CATEGORIE,
  INPUT_SEARCH,
  SEARCH_GENDER
} from "./Const";
import axios from "axios";

export const searchAll = () => async dispatch => {
  let res = await axios.get("/artwear/products");
  console.log("we access to the Get all product route");
  dispatch({ type: SEARCH_ALL, payload: res.data });
};

export const searchCategory = obj => async dispatch => {
  let config = {
    headers: { "Content-Type": "application/json" }
  };
  let body = JSON.stringify(obj);
  let res = await axios.post("/artwear/category", body, config);
  console.log("we access to get products by category route");
  dispatch({ type: SEARCH_CATEGORIE, payload: res.data });
};

// export const searchCategory = (obj) => async dispatch => {

//   let config = {
//     headers: { "Content-Type": "application/json" }
//   };
//   let body = JSON.stringify(obj);
//   let res = await axios.post("/artwear/category", body, config);
//   console.log("we access to get products by category route");
//   dispatch({ type: SEARCH_CATEGORIE, payload: res.data });
// };

export const handelinput = payload => dispatch => {
  dispatch({ type: INPUT_SEARCH, payload: payload });
};

export const searchGender = (obj) => async dispatch => {
  let config = {
    headers: { "Content-Type": "application/json" }
  };
  let body = JSON.stringify(obj);
  let res = await axios.post("/artwear/gender", body, config);
  dispatch({ type: SEARCH_GENDER, payload: res.data });
};
