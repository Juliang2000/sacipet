import { GET_HAMSTER_RACE_DATA } from "../types";
import { getHamsterRace } from "../../configAxios/petFormAdoption"


export const get_hamster_race_action = (hamsterData) => async (dispatch, getState) => {
    try {
        const res = await getHamsterRace(hamsterData)
        dispatch({
            type: GET_HAMSTER_RACE_DATA,
            payload: res.data.razas
        })
    } catch (error) {
        console.log(error)
    }
}