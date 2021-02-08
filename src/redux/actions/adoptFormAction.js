import { SMALL_SIZE_PET_ACTION, MEDIUM_SIZE_PET_ACTION, BIG_SIZE_PET_ACTION, GET_PET_SIZE_DATA } from "../types";
import { getPetSize } from "../../configAxios/getPetSize"

// parámetros de tamaño de mascotas que se van a solicitar en la función sizepetData
export function sizePetData(petData) {
    return async (dispatch) => {

        // dispatch(loginNormalStart())
        // try para obtener datos de getSizePet duncion del cliente de axios por metodo get
        try {
            const response = await getPetSize(petData)
            return response
        } catch (error) {

        }
    }

}

export const get_size_pet_data = (petSizeData) => ({
    type: GET_PET_SIZE_DATA,
    payload: petSizeData
});

export const small_size_action = (petSize) => ({
    type: SMALL_SIZE_PET_ACTION,
    payload: petSize
});

export const medium_size_action = (petSize) => ({
    type: MEDIUM_SIZE_PET_ACTION,
    payload: petSize
});

export const big_size_action = (petSize) => ({
    type: BIG_SIZE_PET_ACTION,
    payload: petSize
});


