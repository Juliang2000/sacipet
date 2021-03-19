import { GET_SACI_PETS, PAGE_SACI_PETS, SELECT_PET_DATA } from "../types"

const initialState = {

    mascotas: [],
    pageMascotas: [],
    petSelected: null

}


export default (state = initialState, action) => {
    switch (action.type) {

        case GET_SACI_PETS:
            return {
                ...state,
                mascotas: action.payload
            }

        case PAGE_SACI_PETS:
            return {
                ...state,
                pageMascotas: action.payload

            }
        case SELECT_PET_DATA:
            return {
                ...state,
                petSelected: action.payload

            }

        default: return state
    }
}