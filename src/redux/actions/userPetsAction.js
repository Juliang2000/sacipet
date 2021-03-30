import getUserPets from "../../configAxios/userPets";
import { SET_USER_PETS_MODAL, GET_PETS_BY_USER, SAVE_SELECTED_USER_PET_DATA } from "../types"



export const user_pets_modal_action = (state) => async (dispatch) => {

    dispatch({
        type: SET_USER_PETS_MODAL,
        payload: state
    })

}

export const get_pets_by_user_action = (userId) => async (dispatch) => {
    try {
        const response = await getUserPets(userId);
        dispatch({
            type: GET_PETS_BY_USER,
            payload: response
        })
    } catch (error) {
        console.log(error)
    }
}

export const save_selected_user_pet_action = (selectedPet) => async (dispatch) => {

    dispatch({
        type: SAVE_SELECTED_USER_PET_DATA,
        payload: selectedPet
    })
}