import {
  ADD_TO_CART,
  ADD_ORDER_TO_DB,
  GET_ALL_ORDERS,
  UPDATE_ONE_PRODUCT,
  DELETE_ONE_PRODUCT
} from "../Actions_art_wear/Const";

/* *************   Cart Reducer  ************************* */

const panier = [
 
];

export const panier_Reducer = (state = panier, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return state.map(el => el.name).includes(payload.name)
        ? state.map(el =>
            el.name === payload.name
              ? { ...el, qte: (el.qte += payload.qte) }
              : el
          )
        : [...state, payload];

    case ADD_ORDER_TO_DB:
      return state;

    case UPDATE_ONE_PRODUCT:
      return state.map(el =>
        el._id === payload._id ? { ...el, qte: payload.qte } : el
      );
    case DELETE_ONE_PRODUCT:
      return state.filter(el => el._id !== payload);
    default:
      return state;
  }
};

/* *************   Orders Reducer  ************************* */

const orders = [];

export const order_Reducer = (state = orders, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_ORDERS:
      return payload;

    default:
      return state;
  }
};
