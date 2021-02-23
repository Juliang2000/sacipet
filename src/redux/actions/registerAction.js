import { saveUserRegister } from "../../configAxios/Register";
import { REGISTRO_USUARIO_ERROR, REGISTRO_USUARIO_EXITO, REGISTRO_USUARIO_START, REGISTER_DIALOG_OPEN, REGISTER_DIALOG_CLOSE, SAVE_REGISTER_TO_LOGIN } from "../types";

// Get Data to localStorage
export function registerAction(data) {
    return async(dispatch) => {
        dispatch(registerStart())

        try {
            const response = await saveUserRegister(data)


            dispatch(registerSuccess(response.data));
            // console.log(response.user.data)
                   
        } catch (error) {

            
           dispatch(registerError(error))
        }
    }
}

const registerStart = () => ({
    type: REGISTRO_USUARIO_START
});

const registerSuccess = (registerData) => ({
    type: REGISTRO_USUARIO_EXITO,
    payload: registerData
});

const registerError = (errorData) => ({
    type: REGISTRO_USUARIO_ERROR,
    payload: errorData
});

export const register_dialog_open_action = (registerDialog) => {
    return {
        type: REGISTER_DIALOG_OPEN,
        payload: registerDialog
    }
}

export const register_dialog_close_action = (registerDialog) => {
    return {
        type: REGISTER_DIALOG_CLOSE,
        payload: registerDialog
    }
}

export const save_register_to_login = (registerLoginData) => {
    return {
        type: SAVE_REGISTER_TO_LOGIN,
        payload: registerLoginData
    }
}