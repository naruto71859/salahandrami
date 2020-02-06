import {
  SEARCH_ALL,
  SEARCH_CATEGORIE,
  INPUT_SEARCH,
  SEARCH_GENDER
} from "../Actions_art_wear/Const";

const initialstate = {
  input: "",
  isgender: false,
  iscategory: false,
  catalogue: []
};

const SearchReducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_ALL:
      return { ...state, catalogue: payload }; // res.data
    case SEARCH_CATEGORIE:
      return { ...state, catalogue: payload, iscategory: true };
    case INPUT_SEARCH:
      return { ...state, input: payload, isgender: true };
    case SEARCH_GENDER:
      return { ...state, catalogue: payload };
    default:
      return state;
  }
};
export default SearchReducer;
