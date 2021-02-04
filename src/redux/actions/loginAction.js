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
            dispatch(loginNormalSuccess(response.data));
            console.log(response.data)

            // }, 3000);


        } catch (error) {
            const response = await saveUserLogin(data)
            dispatch(loginNormalError())
            swal.fire('Error', `Correo o Contraseña incorrectos`, 'error')
            console.log(response.msg)
            // console.log(error);

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