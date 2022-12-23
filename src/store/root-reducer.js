import { combineReducers } from "redux";
import { weatherReducer } from "./weather/weather-reducer";

export const rootReducer = combineReducers({
  weather: weatherReducer,
});
