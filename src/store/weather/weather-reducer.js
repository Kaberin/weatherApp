import { ADD_WEATHER, LOAD_WEATHER, SET_ERROR } from "./weather-actions";

const initialState = {
  weather: null,
  error: null,
  status: "idle",
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WEATHER: {
      return {
        ...state,
        weather: action.payload,
        status: "fulfilled",
        error: null,
      };
    }
    case LOAD_WEATHER: {
      return {
        ...state,
        status: "loading",
        error: null,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        weather: null,
        status: "error",
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
