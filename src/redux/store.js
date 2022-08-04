import { combineReducers, configureStore } from "@reduxjs/toolkit";
import teamReducer from "./team/teamSlice";

const rootReducer = combineReducers({
  teams: teamReducer,
});

export const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState
});

export const store = configureStore({
  reducer: rootReducer
});
