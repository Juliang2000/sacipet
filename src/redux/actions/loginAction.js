import { saveUserLogin } from "../../configAxios/Login";
import { INICIAR_SESION_ERROR, INICIAR_SESION_EXITO, INICIAR_SESION_START } from "../types";
import swal from 'sweetalert2';

// Get Data to localStorage
export function loginNormalAction(data) {
    return async (dispatch) => {
        dispatch(loginNormalStart())

        try {
            const response = await saveUserLogin(data)
            
            // setTimeout(() => {
                dispatch(loginNormalSuccess(response.data.user.nombres));
            // }, 3000);
           

        } catch (error) {
            dispatch(loginNormalError(error))
            swal.fire('Error', `Correo o Contraseña incorrectos`, 'error')
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