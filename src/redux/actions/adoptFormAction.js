//types
import {
    NEXT_STEP_ACTION,
    BACK_STEP_ACTION,
    GET_DEPARTMENT_DATA,
    UPDATE_ADOPT_FORM_DESCRIPTION_DATA,
    GET_CITY_DATA,
    PET_DESCRIPTION_OK,
    GET_ADOPT_FORM_DESCRIPTION_DATA,
    PUSH_DATA_ACTION
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

// get changes to the description data 
// export const get_form_data_action = (newPet) => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: GET_ADOPT_FORM_DESCRIPTION_DATA,
//             payload: newPet

//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

export const get_form_data_action = (newPet) => {
    return {
        type: GET_ADOPT_FORM_DESCRIPTION_DATA,
        payload: newPet
    }
}


// update changes to the description data
// export const update_form_data_action = () => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: UPDATE_ADOPT_FORM_DESCRIPTION_DATA,
//             payload: updateDescriptionData
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }


export const update_form_data_action = (updateDescriptionData) => {
    return {
        type: UPDATE_ADOPT_FORM_DESCRIPTION_DATA,
        payload: updateDescriptionData
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

export const push_data_action = (pushData) => {
    return {
        type: PUSH_DATA_ACTION,
        payload: pushData
    }
}



