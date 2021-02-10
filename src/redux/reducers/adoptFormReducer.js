import {  NEXT_STEP_ACTION, BACK_STEP_ACTION } from "../types"

const initialState = {
    petSize: 0,
    petSizeData: 0,
    activeStepState: 1,
    
}

export default (state = initialState, action) => {
    switch (action.type) {

        // case GET_PET_SIZE_DATA:
        //     return {
        //         ...state,
        //         razas: action.payload

        //     }
        // case SMALL_SIZE_PET_ACTION:
        //     return {
        //         ...state,
        //         petSize: 3,

        //     }
        // case MEDIUM_SIZE_PET_ACTION:
        //     return {
        //         ...state,
        //         petSize: 2,

        //     }
        // case BIG_SIZE_PET_ACTION:
        //     return {
        //         ...state,
        //         petSize: 1,

        //     }
        case NEXT_STEP_ACTION:
            return {
                ...state,
                activeStepState: state.activeStepState + 1

            }
        case BACK_STEP_ACTION:
            return {
                ...state,
                activeStepState: state.activeStepState - 1

            }


        default: return state
    }
}