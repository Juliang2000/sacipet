import { GET_PET_RACE_DATA, SMALL_SIZE_PET_ACTION, MEDIUM_SIZE_PET_ACTION, BIG_SIZE_PET_ACTION } from "../types"

const initialState = {

    raceData: []
    
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_PET_RACE_DATA:
            return {
                ...state,
                raceData: action.payload

            }
        case SMALL_SIZE_PET_ACTION:
            return {
                ...state,
                petSize: 3,

            }
        case MEDIUM_SIZE_PET_ACTION:
            return {
                ...state,
                petSize: 2,

            }
        case BIG_SIZE_PET_ACTION:
            return {
                ...state,
                petSize: 1,

            }

        default: return state
    }
}