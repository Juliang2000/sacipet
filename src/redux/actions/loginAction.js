import { LoginUserRegistered, saveUserLogin } from "../../configAxios/Login";
import {
    INICIAR_SESION_ERROR,
    INICIAR_SESION_EXITO,
    INICIAR_SESION_START,
    LOGIN_DIALOG_CLOSE,
    LOGIN_DIALOG_OPEN,
    REGISTER_TO_LOGIN,
    PASSWORD_ERROR
} from "../types";
import swal from 'sweetalert2';

// Get Data to localStorage
export function loginNormalAction(data) {
    return async (dispatch) => {
        dispatch(loginNormalStart())

        try {
            const response = await saveUserLogin(data)

            // setTimeout(() => {
                dispatch(loginNormalSuccess(response.data.user));
                // dispatch(loginPasswordError(response));
            // }, 2000)

        } catch (error) {
            dispatch(loginNormalError(error))
            console.log(data.msg)
            swal.fire('Error', `${data.correo} o contraseña incorrectos`, 'error')
        }

    }
}

export function LoginRegisteredAction(userLog) {
    return async (dispatch) => {
        dispatch(loginNormalStart())

        try {
            const response = await LoginUserRegistered(userLog)

            setTimeout(() => {
                dispatch(loginNormalSuccess(response));

            }, 2000)
        } catch (error) {
            dispatch(loginNormalError(error))
            console.log(error)
            // swal.fire('Error', `${userLog.correo} o contraseña incorrectos`, 'error').then((result) => {
            //     if (result.isConfirmed) {
            //         // setOpenLogin(false)
            //         setCheckLogin(false);
            //         dispatch(login_dialog_close_action())
            //         Swal.close()
            //     }
            // })
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

const loginPasswordError = (password) => ({
    type: PASSWORD_ERROR,
    payload: password
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

export const register_to_login_action = (registerToLogin) => {
    return {
        type: REGISTER_TO_LOGIN,
        payload: registerToLogin
    }
}

