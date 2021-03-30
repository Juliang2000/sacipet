import { GET_PETS_BY_USER, SAVE_SELECTED_USER_PET_DATA, SET_USER_PETS_MODAL } from "../types"


const initialState = {

    userPetsModal: false,
    userPetsRegistered: [],
    selectedUserPet: null,

}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_PETS_MODAL:
            return {
                ...state,
                userPetsModal: action.payload
            }
        case GET_PETS_BY_USER:
            return {
                ...state,
                userPetsRegistered: action.payload
            }
        case SAVE_SELECTED_USER_PET_DATA:
            return {
                ...state,
                selectedUserPet: action.payload
            }

        default: return state
    }
}