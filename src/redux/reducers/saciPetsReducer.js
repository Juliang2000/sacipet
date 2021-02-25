import { GET_SACI_PETS, GET_PET_PHOTOS, SAVE_PET } from "../types"

const initialState = {

    mascotas: [],
    photos: '',
    file: {},

}
    

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_SACI_PETS:
            return {
                ...state,
                mascotas: action.payload

            }
        case GET_PET_PHOTOS:
            return {
                ...state,
                photos: action.payload

            }
        case SAVE_PET:
            return {
                ...state,
                file: action.payload

            }


        default: return state
    }
}