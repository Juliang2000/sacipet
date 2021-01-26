import axios from "axios";
import { INICIAR_SESION_ERROR, INICIAR_SESION_EXITO, INICIAR_SESION_START } from "../types";

// Get Data to localStorage
export function iniciarSesionAction(data) {
    return async(dispatch) => {
        dispatch(iniciarSesionStart())

        try {
            setTimeout(() => {
                dispatch(iniciarSesionSuccess(data));
            }, 5000);
            
        } catch (error) {
           dispatch(iniciarSesionError(error))
        }

    }
}

const iniciarSesionStart = () => ({
    type: INICIAR_SESION_START
});

const iniciarSesionSuccess = (data) => ({
    type: INICIAR_SESION_EXITO,
    payload: data
});

const iniciarSesionError = (error) => ({
    type: INICIAR_SESION_ERROR,
    payload: error
});