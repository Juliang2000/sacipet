import { LoginUserRegistered, saveUserLogin } from "../../configAxios/Login";
import {
    INICIAR_SESION_ERROR,
    INICIAR_SESION_EXITO,
    INICIAR_SESION_START,
    LOGIN_DIALOG_CLOSE,
    LOGIN_DIALOG_OPEN,
    ADOPT_DIALOG_OPEN,
    ADOPT_DIALOG_CLOSE,
    ADOPTSTEPPER_DIALOG_OPEN,
    ADOPTSTEPPER_DIALOG_CLOSE,
    // REGISTER_TO_LOGIN
} from "../types";
import Swal from 'sweetalert2';

// Get Data to localStorage
export function loginNormalAction(data) {
    return async (dispatch) => {

        dispatch(loginNormalStart())

        try {
            const response = await saveUserLogin(data)
            // setTimeout(() => {
            dispatch(loginNormalSuccess(response.data.user));
            // }, 2000)
        } catch (error) {
            dispatch(loginNormalError(error))
            console.log(data)
            Swal.fire('Error', `${data.correo} o contraseña incorrectos`, 'error')
        }

    }
}

export function LoginRegisteredAction(userLog) {
    return async (dispatch) => {

        dispatch(loginNormalStart())

        try {
            const response = await LoginUserRegistered(userLog)
            // setTimeout(() => {
            dispatch(loginNormalSuccess(response.data.user));
            // }, 2000)
        } catch (error) {
            dispatch(loginNormalError(error))
            console.log(error)
        }
    }
}

const loginNormalStart = () => ({
    type: INICIAR_SESION_START
});

const loginNormalSuccess = (username) => ({
    type: INICIAR_SESION_EXITO,
    payload: username
});

const loginNormalError = (error) => ({
    type: INICIAR_SESION_ERROR,
    payload: error
});

export const login_dialog_open_action = (loginDialog) => {
    return {
        type: LOGIN_DIALOG_OPEN,
        payload: loginDialog
    }
}

export const login_dialog_close_action = (loginDialog) => {
    return {
        type: LOGIN_DIALOG_CLOSE,
        payload: loginDialog
    }
}

export const adopt_dialog_open_action = (adoptDialog) => {
    return {
        type: ADOPT_DIALOG_OPEN,
        payload: adoptDialog
    }
}

export const adopt_dialog_close_action = (adoptDialog) => {
    return {
        type: ADOPT_DIALOG_CLOSE,
        payload: adoptDialog
    }
}

export const adoptstepper_dialog_open_action = (adoptstepperDialog) => {
    return {
        type: ADOPTSTEPPER_DIALOG_OPEN,
        payload: adoptstepperDialog
    }
}

export const adoptstepper_dialog_close_action = (adoptstepperDialog) => {
    return {
        type: ADOPTSTEPPER_DIALOG_CLOSE,
        payload: adoptstepperDialog
    }
}


// export const register_to_login_action = (registerToLogin) => {
//     return {
//         type: REGISTER_TO_LOGIN,
//         payload: registerToLogin
//     }
// }

