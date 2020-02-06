import uuid from "uuid";
import { SET_ALERT, DISPLAY_ALERT } from "./Const";

export const set_Alert = obj => dispatch => {
  const id = uuid.v4();

  dispatch({ type: SET_ALERT, payload: { ...obj, id } });
  setTimeout(() => {
    dispatch({ type: DISPLAY_ALERT, payload: id });
  }, 5000);
};
