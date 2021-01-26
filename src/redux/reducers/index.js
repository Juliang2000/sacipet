import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import loginReducer from './loginReducer';

export default combineReducers({
    main: mainReducer,
    login: loginReducer
})