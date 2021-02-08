import { GET_PET_SIZE, SAVE_PET_FORM_ACTION } from "../types"

const initialState = {
    petSize: false,
    petForm: false

}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_PET_SIZE:
            return {
                ...state,
                petSize: true

            }
        case SAVE_PET_FORM_ACTION:
            return {
                ...state,
                petForm: true

            }


        default: return state
    }
}