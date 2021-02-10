import { SMALL_SIZE_PET_ACTION, MEDIUM_SIZE_PET_ACTION, BIG_SIZE_PET_ACTION, GET_PET_RACE_DATA } from "../types";
import { getPetSize } from "../../configAxios/petFormAdoption"


export const get_pet_size_data = (petData) => async (dispatch, getState) => {
    try {
        const res = await getPetSize(petData)
        dispatch({
            type: GET_PET_RACE_DATA,
            payload: res.data.razas
        })
    } catch (error) {
        console.log(error)
    }
}


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
