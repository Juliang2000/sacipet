import { NEXT_STEP_ACTION, BACK_STEP_ACTION, GET_DEPARTMENT_DATA } from "../types"

const initialState = {
    activeStepState: 1,
    departments: []

}

export default (state = initialState, action) => {
    switch (action.type) {

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
        case GET_DEPARTMENT_DATA:
            return {
                ...state,
                departments: action.payload


            }
            
        default: return state

    }

}