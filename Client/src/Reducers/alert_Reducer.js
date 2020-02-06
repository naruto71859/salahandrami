import { SET_ALERT, DISPLAY_ALERT } from "../Actions_art_wear/Const";

const initialstate = [];

export default function(state = initialstate, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case DISPLAY_ALERT:
      return state.filter(el => el.id !== payload); // id
    default:
      return state;
  }
}
