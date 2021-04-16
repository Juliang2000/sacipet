import {
    GET_SACI_PETS,
    PAGE_SACI_PETS,
    SELECT_PET_DATA,
    SET_ADOPT_ME_DIALOG,
    SET_PET_DATA_DIALOG,
    SET_UNLOGGED_MODAL,
    SHOW_USER_PETS,
    RESET_PETS,
    GET_PETS_NO_FILTER
} from "../types"

const initialState = {

    mascotas: [],
    pageMascotas: [],
    petSelected: null,
    adoptMeDialog: false,
    dataDialog: false,
    unloggedModal: false,
    showUserPets: false

}


export default (state = initialState, action) => {
    switch (action.type) {

        case GET_SACI_PETS:
            return {
                ...state,
                mascotas: action.payload,
                showUserPets: false
            }

        case PAGE_SACI_PETS:
            return {
                ...state,
                pageMascotas: action.payload,

            }
        case SELECT_PET_DATA:
            return {
                ...state,
                petSelected: action.payload

            }
        case SET_ADOPT_ME_DIALOG:
            return {
                ...state,
                adoptMeDialog: action.payload

            }
        case SET_PET_DATA_DIALOG:
            return {
                ...state,
                dataDialog: action.payload

            }
        case SET_UNLOGGED_MODAL:
            return {
                ...state,
                unloggedModal: action.payload

            }
        case SHOW_USER_PETS:
            return {
                ...state,
                mascotas: action.payload,
                showUserPets: true

            }
        case RESET_PETS:
            return {
                ...state,
                pageMascotas: []

            }
        case GET_PETS_NO_FILTER:
            return {
                ...state,
                mascotas: action.payload,
                showUserPets: false

            }

        default: return state
    }
}