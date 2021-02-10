import { GET_HAMSTER_RACE_DATA } from "../types"

const initialState = {

    hamsterRaceData: []

}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_HAMSTER_RACE_DATA:
            return {
                ...state,
                hamsterRaceData: action.payload

            }

        default: return state
    }
}