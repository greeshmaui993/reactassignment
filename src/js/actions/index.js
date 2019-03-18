import { ADD_ARTICLE } from "../constants/action-types";

export function getData() {
  return function(dispatch) {
    return fetch(" https://04bdab1c-13a4-43d9-baab-1b575d8241ea.mock.pstmn.io/getProductData")
      .then(response => response.json())
      .then(json => {console.log(json);
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}
