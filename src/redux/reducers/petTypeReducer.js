import { DOG_ACTION, CAT_ACTION, HAMSTER_ACTION, RESET_ACTION } from "../actions/petTypeAction";

const default_petType = {
    petType: 0,
};

const petType = (state = default_petType, action) => {
    switch(action.type) {
        case DOG_ACTION: {
            return {
                ...state,
                petType: 1,
            }
        }
        case CAT_ACTION: {
            return {
                ...state,
                petType: 2,
            }
        }
        case HAMSTER_ACTION: {
            return {
                ...state,
                petType: 3,
            }
        }
        case RESET_ACTION: {
            return {
                ...state,
                petType: 0,
            }
        }
        default: return state;
    }
}

export default petType;

