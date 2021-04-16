import { DOG_ACTION, CAT_ACTION, HAMSTER_ACTION, RESET_ACTION } from "../actions/petTypeAction";

const default_petType = {
    petType: 0,
    dog: false,
    cat: false,
    hamster: false,
};

const petType = (state = default_petType, action) => {
    switch (action.type) {
        case DOG_ACTION: {
            return {
                ...state,
                petType: 2,
                dog: true,
                cat: false,
                hamster: false,
            }
        }
        case CAT_ACTION: {
            return {
                ...state,
                petType: 1,
                cat: true,
                dog: false,
                hamster: false
            }
        }
        case HAMSTER_ACTION: {
            return {
                ...state,
                petType: 3,
                hamster: true,
                dog: false,
                cat: false
            }
        }
        case RESET_ACTION: {
            return {
                ...state,
                petType: 0,
                dog: false,
                cat: false,
                hamster: false
            }
        }
        default: return state;
    }
}

export default petType;

