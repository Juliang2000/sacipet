import { SAVE_PET_START, SAVE_PET_SUCCESS, SAVE_PET_ERROR } from "../types";

const initialState = {
    pet: '',
    loader: false,
    error: false,
    errorMessage: '',
    msg: '',
}

export default (state = initialState, action) => {

    switch (action.type) {

        case SAVE_PET_START:

            return {
                ...state,
                loader: true,
                msg: '',
            }

        case SAVE_PET_SUCCESS:

            return {
                ...state,
                loader: false,
                error: false,
                errorMessage: '',
                pet: action.payload,
                msg: action.payload
            }

        case SAVE_PET_ERROR:

            return {
                ...state,
                loader: false,
                error: true,
                errorMessage: action.payload.error,
                pet: '',
                ok: false,
            }

        default: return state
    }
}