import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import petTypeReducer from './petTypeReducer';

export default combineReducers({
    main: mainReducer,
    login: loginReducer,
    register: registerReducer,
    petType: petTypeReducer,
})