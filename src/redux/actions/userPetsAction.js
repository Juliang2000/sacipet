import getUserPets from "../../configAxios/userPets";
import {
    SET_USER_PETS_MODAL,
    GET_PETS_BY_USER,
    SAVE_USER_PET_ID,
    SET_USER_PET_MODAL_DATA,
    SAVE_USER_PET_DATA,
    RESET_PETS
} from "../types"



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

export const save_user_pet_id_action = (petId) => async (dispatch) => {

    dispatch({
        type: SAVE_USER_PET_ID,
        payload: petId
    })
}

export const set_user_pet_modal_data_action = (state) => async (dispatch) => {

    dispatch({
        type: SET_USER_PET_MODAL_DATA,
        payload: state
    })
}

export const save_selected_pet_data_action = (petData) => async (dispatch) => {

    dispatch({
        type: SAVE_USER_PET_DATA,
        payload: petData
    })
}

export const reset_pets_action = () => async (dispatch) => {

    dispatch({
        type: RESET_PETS
    })
}