import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from './adminReducers'
import authReducer from "./authReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
    admin: adminReducer,
    auth: authReducer,
    user: userReducer

    
})

export default rootReducer