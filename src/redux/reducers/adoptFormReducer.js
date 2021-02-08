import { GET_PET_SIZE_DATA, SMALL_SIZE_PET_ACTION, MEDIUM_SIZE_PET_ACTION, BIG_SIZE_PET_ACTION } from "../types"

const initialState = {
    petSize: 0,
    petSizeData: 0  

}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_PET_SIZE_DATA:
            return {
                ...state,
                petSizeData: true

            }
        case SMALL_SIZE_PET_ACTION:
            return {
                ...state,
                petSize: 1,

            }
        case MEDIUM_SIZE_PET_ACTION:
            return {
                ...state,
                petSize: 2,

            }
        case BIG_SIZE_PET_ACTION:
            return {
                ...state,
                petSize: 3,

            }


        default: return state
    }
}