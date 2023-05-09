import { GET_PRODUCTS } from "./actions";

const initialState = {
  allProducts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
