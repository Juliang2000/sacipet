import getUserPets, { publishPet, userPetRequest } from "../../configAxios/userPets";
import {
    SET_USER_PETS_MODAL,
    GET_PETS_BY_USER,
    SAVE_USER_PET_ID,
    SET_USER_PET_MODAL_DATA,
    SAVE_USER_PET_DATA,
    RESET_PETS,
    ACTIVE_PET_STATE,
    SET_PUBLISHED_PET,
    REQUEST_PET,
    SELECTED_REQUEST
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

export const set_active_pets_action = (state) => async (dispatch) => {
    dispatch({
        type: ACTIVE_PET_STATE,
        payload: state
    })
}

export const set_published_pet_action = (data) => async (dispatch) => {
    try {
        const response = await publishPet(data);
        dispatch({
            type: SET_PUBLISHED_PET,
            payload: response
        })
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const get_user_pets_request = (data) => async (dispatch) => {
    try {
        const response = await userPetRequest(data);
        dispatch({
            type: REQUEST_PET,
            payload: response
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const set_selected_request_action = (requestData) => async (dispatch) => {
    dispatch({
        type: SELECTED_REQUEST,
        payload: requestData
    })
}
