import { INICIAR_SESION_ERROR, INICIAR_SESION_EXITO, INICIAR_SESION_START } from "../types"

const initialState = {
    user: '',
    loader: false,
    error: false,
    errorMessage: '',
    log: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INICIAR_SESION_START:
            return {
                ...state,
                loader: true
            }
        case INICIAR_SESION_EXITO:
            return {
                ...state,
                loader: false,
                error: false,
                errorMessage: '',
                user: action.payload,
                log: true,
            }
        case INICIAR_SESION_ERROR:
            return {
                ...state,
                loader: false,
                error: true,
                errorMessage: action.payload.error,
                user: '',
                log: false,
            }

        default: return state
    }
}