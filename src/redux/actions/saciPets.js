import { GET_SACI_PETS, GET_PET_PHOTOS, SAVE_PET } from "../types";
import { getPetPhotos, getSaciPets } from "../../configAxios/saciPets"


export const get_saci_pets_action = () => async (dispatch, getState) => {
    try {
        const response = await getSaciPets()
        dispatch({
            type: GET_SACI_PETS,
            payload: response.data.mascotas
        })
    } catch (error) {
        console.log(error)
    }
}

export const get_pet_photos_action = (petPhoto) => async (dispatch) => {
    try {
        const responseData = await getPetPhotos(petPhoto)
        dispatch({
            type: GET_PET_PHOTOS,
            payload: responseData
        })
    } catch (error) {
        console.log(error)
    }
}

export const save_pet_action = (petFile) => {
    return {
        type: SAVE_PET,
        payload: petFile
    }
}