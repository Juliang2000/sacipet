import { REGISTRO_USUARIO_ERROR, REGISTRO_USUARIO_EXITO, REGISTRO_USUARIO_START, REGISTER_DIALOG_OPEN, REGISTER_DIALOG_CLOSE, SAVE_REGISTER_TO_LOGIN } from "../types";

const initialState = {
    user: 'true',
    loader: false,
    error: false,
    errorMessage: '',
    ok: false,
    registerDialog: null,
    errorData: '',

    registerLoginData: {
        password: null,
        correo: '',
        origen_cuenta: 'Registro_normal'
    }
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
                errorData: action.payload
            }
        case REGISTER_DIALOG_OPEN:
            return {
                ...state,
                registerDialog: true,
            }
        case REGISTER_DIALOG_CLOSE:
            return {
                ...state,
                registerDialog: false,
            }
        case SAVE_REGISTER_TO_LOGIN:
            return {
                ...state,
                registerLoginData: action.payload
            }

        default: return state
    }
}