import { INICIAR_SESION_ERROR, INICIAR_SESION_EXITO, INICIAR_SESION_START } from "../types"

const initialState = {
    user: '',
    loader: false,
    error: false,
    errorMessage: '',
    msg: '',
}

export default (state = initialState, action) => {

    switch (action.type) {

        case INICIAR_SESION_START:

            return {
                ...state,
                loader: true,
                msg: '',
            }

        case INICIAR_SESION_EXITO:

            return {
                ...state,
                loader: false,
                error: false,
                errorMessage: '',
                user: action.payload,
                msg: action.payload
            }

        case INICIAR_SESION_ERROR:

            return {
                ...state,
                loader: false,
                error: true,
                errorMessage: action.payload.error,
                user: '',
                ok: false,
            }

        default: return state
    }
}