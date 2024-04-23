import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";

// const reducer = combineReducers({
//   auth:authReducer,
// });

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
