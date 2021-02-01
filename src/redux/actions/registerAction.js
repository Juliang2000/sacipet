import { saveUserRegister } from "../../configAxios/Register";
import { REGISTRO_USUARIO_ERROR, REGISTRO_USUARIO_EXITO, REGISTRO_USUARIO_START } from "../types";

// Get Data to localStorage
export function registerAction(data) {
    return async(dispatch) => {
        dispatch(registerStart())

        try {
            const response = await saveUserRegister(data)


            dispatch(registerSuccess(response.data));
            console.log(response.data)
                   
        } catch (error) {

            
           dispatch(registerError(error))
        }
    }
}

const registerStart = () => ({
    type: REGISTRO_USUARIO_START
});

const registerSuccess = (username) => ({
    type: REGISTRO_USUARIO_EXITO,
    payload: username
});

const registerError = (error) => ({
    type: REGISTRO_USUARIO_ERROR,
    payload: error
});