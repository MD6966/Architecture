import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from './adminReducers'
import authReducer from "./authReducer";
const rootReducer = combineReducers({
    admin: adminReducer,
    auth: authReducer,

    
})

export default rootReducer