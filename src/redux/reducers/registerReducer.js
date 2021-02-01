import { REGISTRO_USUARIO_ERROR, REGISTRO_USUARIO_EXITO, REGISTRO_USUARIO_START } from "../types";

const initialState = {
    user: '',
    loader: false,
    error: false,
    errorMessage: '',
    ok: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTRO_USUARIO_START:
            return {
                ...state,
                loader: true
            }
        case REGISTRO_USUARIO_EXITO:
            return {
                ...state,
                loader: false,
                error: false,
                errorMessage: '',
                user: action.payload,
                ok: action.payload
            }
        case REGISTRO_USUARIO_ERROR:
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