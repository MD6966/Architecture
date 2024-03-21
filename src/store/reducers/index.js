import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from "./adminReducers";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import tabChangeReducer from "./tabChangeReducer";
import toogle_theme from "./themeReducer";
const rootReducer = combineReducers({
  admin: adminReducer,
  auth: authReducer,
  user: userReducer,
  tab: tabChangeReducer,
  theme: toogle_theme,
});

export default rootReducer;
