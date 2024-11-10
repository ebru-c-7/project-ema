import { createStore } from "redux";

const initialState = {
  data: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INITIAL":
      return {
        ...state,
        data: action.payload.map((el, i) => {
          el["First Name"] = i + 1 + el["First Name"];
          return el;
        }),
      };
    case "DELETE":
      const uptData = state.data.filter((el) => action.payload !== el._id);
      return {
        ...state,
        data: uptData,
      };
    default:
      return state;
  }
}

export const store = createStore(rootReducer);
