import { INICIAR_SESION_ERROR, INICIAR_SESION_EXITO, INICIAR_SESION_START, LOGIN_DIALOG_OPEN, LOGIN_DIALOG_CLOSE, /* REGISTER_TO_LOGIN */ } from "../types"

const initialState = {
    // user: 'developer',
    user: '',
    loader: false,
    error: false,
    loginDialog: null,
    // errorMessage: '',
    // registerToLogin: null,
    // success: false,
    // mensaje: '',
}

export default (state = initialState, action) => {

    switch (action.type) {

        case INICIAR_SESION_START:

            return {
                ...state,
                loader: true,
            }

        case INICIAR_SESION_EXITO:

            return {
                ...state,
                loader: false,
                error: false,
                // errorMessage: '',
                user: action.payload,
                // success: true,
                // mensaje: action.payload
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

        case LOGIN_DIALOG_OPEN:

            return {
                ...state,
                loginDialog: true,
            }
        case LOGIN_DIALOG_CLOSE:

            return {
                ...state,
                loginDialog: false,
            }
        // case REGISTER_TO_LOGIN:

        //     return {
        //         ...state,
        //         registerToLogin: true,
        //     }

        default: return state
    }
}