//types
import {
    NEXT_STEP_ACTION,
    BACK_STEP_ACTION,
    GET_DEPARTMENT_DATA,
    UPDATE_ADOPT_FORM_DESCRIPTION_DATA,
    GET_CITY_DATA,
    PET_DESCRIPTION_OK,
    GET_ADOPT_FORM_DESCRIPTION_DATA,
    PUSH_DATA_ACTION,
    GET_DATA_BY_FORM_REGISTERED,
    SUCCESS_PET_IMAGE_1,
    SUCCESS_PET_IMAGE_2,
    SUCCESS_PET_IMAGE_3,
    SUCCESS_PET_IMAGE_4,
    SUCCESS_PET_IMAGE_5,
    RESET_FORM,
    SAVE_PET_IMAGE_1,
    SAVE_PET_IMAGE_2,
    SAVE_PET_IMAGE_3,
    SAVE_PET_IMAGE_4,
    SAVE_PET_IMAGE_5,
    PET_DESCRIPTION_NOT_OK,
    RESET_CITY_ACTION,
    SET_EDIT_USER_PET_DIALOG,
    SET_STEP,
    SAVE_USER_CONTACT_DATA,
    SET_CHECKBOX_CONTACT_DATA,
    UPDATE_USER_PET_FORMDATA
} from "../types";

//axios
import {
    getDepartmentData,
    getCityData,
    registryPetAdoption,
    uploadImagesAdoption,
    uploadPetImage2,
    uploadPetImage3,
    uploadPetImage4,
    uploadPetImage5,
    updateFormData
} from "../../configAxios/petFormAdoption"
import { CardActions } from "@material-ui/core";

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

export const set_step_action = (state) => async (dispatch, getState) => {
    dispatch({
        type: SET_STEP,
        payload: state
    })
}

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

export const reset_city_action = () => {
    return {
        type: RESET_CITY_ACTION,
    }
}

export const get_form_data_action = (newPet) => {
    return {
        type: GET_ADOPT_FORM_DESCRIPTION_DATA,
        payload: newPet
    }
}

export const update_form_data_action = (data) => async (dispatch, getState) => {
    dispatch({
        type: UPDATE_ADOPT_FORM_DESCRIPTION_DATA,
        payload: data
    })
}

//check the fully complete description
export const full_pet_description_action = () => {
    return {
        type: PET_DESCRIPTION_OK,
    }
}

export const not_full_pet_description_action = () => {
    return {
        type: PET_DESCRIPTION_NOT_OK,
    }
}

export const reset_form_action = () => {
    return {
        type: RESET_FORM,

    }
}

export const push_data_action = (pushData) => {
    return {
        type: PUSH_DATA_ACTION,
        payload: pushData
    }
}

// get changes to the description data 
export const registry_form_adopt = (newPet) => async (dispatch, getState) => {
    try {
        const registeredFormData = await registryPetAdoption(newPet)
        dispatch({
            type: GET_DATA_BY_FORM_REGISTERED,
            payload: registeredFormData

        })
    } catch (error) {
        console.log(error)
    }
}

export const set_edit_user_pet_dialog = (state) => async (dispatch, getState) => {
    dispatch({
        type: SET_EDIT_USER_PET_DIALOG,
        payload: state
    })
};

export const save_pet_image_1 = (petimage1) => {
    return {
        type: SAVE_PET_IMAGE_1,
        payload: petimage1,
    }
}

export const save_pet_image_2 = (petimage2) => {
    return {
        type: SAVE_PET_IMAGE_2,
        payload: petimage2,
    }
}

export const save_pet_image_3 = (petimage3) => {
    return {
        type: SAVE_PET_IMAGE_3,
        payload: petimage3,
    }
}

export const save_pet_image_4 = (petimage4) => {
    return {
        type: SAVE_PET_IMAGE_4,
        payload: petimage4,
    }
}

export const save_pet_image_5 = (petimage5) => {
    return {
        type: SAVE_PET_IMAGE_5,
        payload: petimage5,
    }
}

export const upload_pet_image_1 = (petimage1, id_mascota) => async (dispatch, getState) => {
    try {
        const responsePhotoUpload = await uploadImagesAdoption(petimage1, id_mascota)
        dispatch({
            type: SUCCESS_PET_IMAGE_1,
            payload: responsePhotoUpload
        })
    } catch (error) {
        console.log(error)
    }
}

export const upload_pet_image_2 = (petimage2, id_mascota) => async (dispatch, getState) => {
    try {
        const responsePhotoUpload = await uploadPetImage2(petimage2, id_mascota)
        dispatch({
            type: SUCCESS_PET_IMAGE_2,
            payload: responsePhotoUpload
        })
    } catch (error) {
        console.log(error)
    }
}

export const upload_pet_image_3 = (petimage3, id_mascota) => async (dispatch, getState) => {
    try {
        const responsePhotoUpload = await uploadPetImage3(petimage3, id_mascota)
        dispatch({
            type: SUCCESS_PET_IMAGE_3,
            payload: responsePhotoUpload
        })
    } catch (error) {
        console.log(error)
    }
}

export const upload_pet_image_4 = (petimage4, id_mascota) => async (dispatch, getState) => {
    try {
        const responsePhotoUpload = await uploadPetImage4(petimage4, id_mascota)
        dispatch({
            type: SUCCESS_PET_IMAGE_4,
            payload: responsePhotoUpload
        })
    } catch (error) {
        console.log(error)
    }
}

export const upload_pet_image_5 = (petimage5, id_mascota) => async (dispatch, getState) => {
    try {
        const responsePhotoUpload = await uploadPetImage5(petimage5, id_mascota)
        dispatch({
            type: SUCCESS_PET_IMAGE_5,
            payload: responsePhotoUpload
        })
    } catch (error) {
        console.log(error)
    }
}

export const save_user_contact_data_action = (data) => async (dispatch) => {
    dispatch({
        type: SAVE_USER_CONTACT_DATA,
        payload: data
    })
}

export const set_checkbox_contactData_action = (checkboxData) => async (dispatch) => {
    dispatch({
        type: SET_CHECKBOX_CONTACT_DATA,
        payload: checkboxData
    })
}

export const update_user_pet_formData_action = (descriptionData) => async (dispatch) => {
    const response = await updateFormData(descriptionData)
    dispatch({
        type: UPDATE_USER_PET_FORMDATA
    })
}








