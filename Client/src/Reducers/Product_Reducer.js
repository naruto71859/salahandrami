import { GET_ONE_PRODUCT } from "../Actions_art_wear/Const";

const initialstate = {
  product: {}
};

const Product_Reducer = (state = initialstate,action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ONE_PRODUCT:
      return { ...state, product: payload };

    default:
      return state;
  }
};

export default Product_Reducer;
