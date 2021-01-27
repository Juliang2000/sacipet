import { saveUserGoogle } from '../../configAxios/Google';
import { INICIAR_SESION_ERROR, INICIAR_SESION_EXITO, INICIAR_SESION_START } from "../types";

// Get Data to localStorage
export function loginGoogleAction(data) {
    return async(dispatch) => {
        dispatch(loginGoogleStart())

        try {
            const response = await saveUserGoogle(data)

            dispatch(loginGoogleSuccess(response.data.user.nombres));
            //dispatch(loginGoogleSuccess(response.data.user.correo));
                   
        } catch (error) {
           dispatch(loginGoogleError(error))
        }
    }
}

const loginGoogleStart = () => ({
    type: INICIAR_SESION_START
});

const loginGoogleSuccess = (username) => ({
    type: INICIAR_SESION_EXITO,
    payload: username
});

const loginGoogleError = (error) => ({
    type: INICIAR_SESION_ERROR,
    payload: error
});