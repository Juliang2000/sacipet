import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import petTypeReducer from './petTypeReducer';
import adoptFormReducer from "./adoptFormReducer";
import adoptFormReducer2 from './adoptFormReducer2';
import petSizeReducer from "./petSizeReducer";
import getHamsterRaceReducer from "./getHamsterRaceReducer";
import saciPetsReducer from "./saciPetsReducer";
import adoptMeFormReducer from "./adoptMeFormReducer";
import userPetsReducer from "./userPetsReducer";
import outputRequestReducer from "./outputRequestReducer";
import questionPetsReducer from "./questionPetsReducer";

export default combineReducers({
    main: mainReducer,
    login: loginReducer,
    register: registerReducer,
    petType: petTypeReducer,
    petForm: adoptFormReducer2,
    petSize: petSizeReducer,
    raceData: petSizeReducer,
    hamsterRaceData: getHamsterRaceReducer,
    adoptFormData: adoptFormReducer,
    saciPets: saciPetsReducer,
    adoptMeForm: adoptMeFormReducer,
    userPets: userPetsReducer,
    outputRequest: outputRequestReducer,
    questionPets: questionPetsReducer
})