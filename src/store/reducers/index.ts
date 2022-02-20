import { combineReducers } from "@reduxjs/toolkit";
import { errorReducer } from "./errorReducer";
import { loaderReducer } from "./loaderReducer";
import { positionReducer } from "./positionReducer";
import { weatherReducer } from "./weatherReducer";

export const rootReducer = combineReducers({
  weather: weatherReducer,
  position: positionReducer,
  loader: loaderReducer,
  error: errorReducer,
});
