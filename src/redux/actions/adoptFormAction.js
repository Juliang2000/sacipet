//types
import {
    NEXT_STEP_ACTION,
    BACK_STEP_ACTION,
    GET_DEPARTMENT_DATA,
    UPDATE_FORM_DATA,
    GET_CITY_DATA,
    PET_DESCRIPTION_OK
} from "../types";

//axios
import { getDepartmentData, getCityData } from "../../configAxios/petFormAdoption"

///////////////redux actions///////////

// adoptform steps
export const next_step_action = (activeStepState) => ({
    type: NEXT_STEP_ACTION,
    payload: activeStepState
});

export const back_step_action = (activeStepState) => ({
    type: BACK_STEP_ACTION,
    payload: activeStepState
});

// get departments to the db
export const get_department_data_action = () => async (dispatch, getState) => {
    try {
        const res = await getDepartmentData()
        dispatch({
            type: GET_DEPARTMENT_DATA,
            payload: res.data.departamentos
        })
    } catch (error) {
        console.log(error)
    }
}

//get cities to the db
export const get_city_data_action = (depData) => async (dispatch, getState) => {
    try {
        const res = await getCityData(depData)
        dispatch({
            type: GET_CITY_DATA,
            payload: res.data.municipios
        })
    } catch (error) {
        console.log(error)
    }
}

//save changes in the description step 2
export const update_form_data_action = (newPet) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_FORM_DATA,
            payload: newPet

        })
    } catch (error) {
        console.log(error)
    }
}

//check the fully complete description
export const full_pet_description_action = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PET_DESCRIPTION_OK,
            payload: true,

        })
    } catch (error) {
        console.log(error)
    }
}

///////////////redux actions///////////

