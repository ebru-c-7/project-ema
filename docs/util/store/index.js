import { createStore } from "redux";

const initialState = {
  data: [],
  router: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INITIAL":
      return {
        ...state,
        data: [...action.payload],
      };
    case "DELETE":
      const uptData = state.data.filter((el) => action.payload !== el._id);
      return {
        ...state,
        data: uptData,
      };
    case "ADD_NEW":
      const addedData = [action.payload, ...state.data];
      return {
        ...state,
        data: addedData,
      };
    case "EDIT_DATA":
      const index = state.data.findIndex((el) => el._id === action.payload._id);
      if (index < 0) return state;

      const updData = [...state.data];
      updData[index] = { ...action.payload };

      return {
        ...state,
        data: updData,
      };

    case "SET_ROUTER":
      return {
        ...state,
        router: action.payload,
      };

    default:
      return state;
  }
}

export const store = createStore(rootReducer);
