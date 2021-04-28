import saveAdoptMeForm from "../../configAxios/adoptMeForm"
import {
    NEXT_STEP_ADOPT_ME_ACTION,
    PREVIEW_STEP_ADOPT_ME_ACTION,
    GET_ADOPT_ME_FORM,
    UPDATE_ADOPT_ME_FORM,
    ENABLE_STEP_TWO,
    SAVE_ADOPT_ME_FORM
} from "../types"



export const update_adopt_me_form_action = (formData) => async (dispatch) => {

    dispatch({
        type: UPDATE_ADOPT_ME_FORM,
        payload: formData
    })

}

export const get_adopt_me_form_action = (formData) => async (dispatch) => {

    dispatch({
        type: GET_ADOPT_ME_FORM,
        payload: formData
    })

}

export const next_step_action = (step) => async (dispatch) => {

    dispatch({
        type: NEXT_STEP_ADOPT_ME_ACTION,
        payload: step
    })

}

export const preview_step_action = (step) => async (dispatch) => {

    dispatch({
        type: PREVIEW_STEP_ADOPT_ME_ACTION,
        payload: step
    })

}

export const enable_step_two_action = (step) => async (dispatch) => {

    dispatch({
        type: ENABLE_STEP_TWO,
        payload: step
    })

}

export const save_adopt_me_form_action = (formData) => async (dispatch) => {

    try {
        const responseData = await saveAdoptMeForm(formData)
        console.log(responseData)
        dispatch({
            type: SAVE_ADOPT_ME_FORM,
            payload: responseData
        })
    } catch (error) {
        console.log(error)
    }

}

