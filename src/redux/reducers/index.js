import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import petTypeReducer from './petTypeReducer';
import adoptFormReducer from "./adoptFormReducer";
import petSizeReducer from "./petSizeReducer";

export default combineReducers({
    main: mainReducer,
    login: loginReducer,
    register: registerReducer,
    petType: petTypeReducer,
    petSize: petSizeReducer,
    adoptForm: adoptFormReducer,
    activeStepState: adoptFormReducer,
    raceData: petSizeReducer,

})