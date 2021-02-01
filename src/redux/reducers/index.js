import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

export default combineReducers({
    main: mainReducer,
    login: loginReducer,
    register: registerReducer,
})