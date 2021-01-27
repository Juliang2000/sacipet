import { saveFbUser } from '../../configAxios/Facebook';
import { INICIAR_SESION_ERROR, INICIAR_SESION_EXITO, INICIAR_SESION_START } from "../types";

// Get Data to localStorage
export function loginFacebookAction(data) {
    return async(dispatch) => {
        dispatch(loginFacebookStart())

        try {
            const response = await saveFbUser(data)

            dispatch(loginFacebookSuccess(response.data.user.nombres));
                   
        } catch (error) {
           dispatch(loginFacebookError(error))
        }
    }
}

const loginFacebookStart = () => ({
    type: INICIAR_SESION_START
});

const loginFacebookSuccess = (username) => ({
    type: INICIAR_SESION_EXITO,
    payload: username
});

const loginFacebookError = (error) => ({
    type: INICIAR_SESION_ERROR,
    payload: error
});