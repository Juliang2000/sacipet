import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import petTypeReducer from './petTypeReducer';
import adoptFormReducer from "./adoptFormReducer";
import adoptFormReducer2 from './adoptFormReducer2';

export default combineReducers({
    main: mainReducer,
    login: loginReducer,
    register: registerReducer,
    petType: petTypeReducer,
    petSize: adoptFormReducer,
    petForm: adoptFormReducer2,
})