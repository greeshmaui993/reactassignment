import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
  pricingData: {}
};

function rootReducer(state = initialState, action) {
 
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      pricingData: action.payload
    });
  }
  return state;
}

export default rootReducer;
