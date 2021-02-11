import { savePetAdoption } from "../../configAxios/petFormAdoption";
import { SAVE_PET_START, SAVE_PET_SUCCESS, SAVE_PET_ERROR } from "../types";
import swal from 'sweetalert2';

// Get Data to localStorage
export function savePetFormAction(data) {
    return async (dispatch) => {
        dispatch(adoptionPetStart())

        try {
            const response = await savePetAdoption(data)
            console.log(data)
            // setTimeout(() => {
            dispatch(adoptionPetSuccess(response.data.user.nombre_mascota));
            // }, 3000);
        } catch (error) {
            dispatch(adoptionPetError(error))
        }

    }
}

const adoptionPetStart = () => ({
    type: SAVE_PET_START
});

const adoptionPetSuccess = (username) => ({
    type: SAVE_PET_SUCCESS,
    payload: username
});

const adoptionPetError = (error) => ({
    type: SAVE_PET_ERROR,
    payload: error
});