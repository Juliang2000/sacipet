import { GET_SACI_PETS, PAGE_SACI_PETS } from "../types"

const initialState = {

    mascotas: [],
    pageMascotas: []

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

        default: return state
    }
}