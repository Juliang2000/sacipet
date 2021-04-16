import { LoginUserRegistered, saveUserLogin } from '../../configAxios/Login';
import {
  saveUserEdit,
  savePhoneEdit,
  saveEmailEdit,
  savePasswordEdit,
  validatePasswordEdit,
  uploadPhotoEdit,
} from '../../configAxios/userProfile';
import {
  INICIAR_SESION_ERROR,
  INICIAR_SESION_EXITO,
  INICIAR_SESION_EXITO_PHOTO,
  INICIAR_SESION_START,
  LOGIN_DIALOG_CLOSE,
  LOGIN_DIALOG_OPEN,
  ADOPT_DIALOG_OPEN,
  ADOPT_DIALOG_CLOSE,
  ADOPTSTEPPER_DIALOG_OPEN,
  ADOPTSTEPPER_DIALOG_CLOSE,
  SACI_USER_PROFILE,
  SACI_PHONE_PROFILE,
  SACI_EMAIL_PROFILE_VALIDATE,
  SACI_EMAIL_PROFILE,
  SACI_PASSWORD_VALIDATE_PROFILE,
  SACI_PASSWORD_PROFILE,
  SACI_PHOTO_PROFILE,
} from '../types';
import Swal from 'sweetalert2';

// Get Data to localStorage
export function loginNormalAction(data) {
  return async (dispatch) => {
    dispatch(loginNormalStart());

    try {
      const response = await saveUserLogin(data);
      dispatch(loginNormalSuccess(response.data.user));
      dispatch(loginNormalSuccessPhoto(response.data.foto))
    } catch (error) {
      dispatch(loginNormalError(error));
      console.log(data);
      Swal.fire('Error', `${data.correo} o contraseña incorrectos`, 'error');
    }
  };
}

export function LoginRegisteredAction(userLog) {
  return async (dispatch) => {
    dispatch(loginNormalStart());

    try {
      const response = await LoginUserRegistered(userLog);
      dispatch(loginNormalSuccess(response.data.user));
    } catch (error) {
      dispatch(loginNormalError(error));
      console.log(error);
    }
  };
}

const loginNormalStart = () => ({
  type: INICIAR_SESION_START,
});

const loginNormalSuccess = (username) => ({
  type: INICIAR_SESION_EXITO,
  payload: username,
});

const loginNormalSuccessPhoto = (userPhoto) => ({
  type: INICIAR_SESION_EXITO_PHOTO,
  payload: userPhoto,
});

const loginNormalError = (error) => ({
  type: INICIAR_SESION_ERROR,
  payload: error,
});

export const login_dialog_open_action = (loginDialog) => {
  return {
    type: LOGIN_DIALOG_OPEN,
    payload: loginDialog,
  };
};

export const login_dialog_close_action = (loginDialog) => {
  return {
    type: LOGIN_DIALOG_CLOSE,
    payload: loginDialog,
  };
};

export const adopt_dialog_open_action = (adoptDialog) => {
  console.log(adoptDialog);
  let procedure_type = adoptDialog.tipo_tramite;
  console.log(procedure_type);

  return {
    type: ADOPT_DIALOG_OPEN,
    payload: procedure_type,
  };
};

export const adopt_dialog_close_action = (adoptDialog) => {
  return {
    type: ADOPT_DIALOG_CLOSE,
    payload: adoptDialog,
  };
};

export const adoptstepper_dialog_open_action = (adoptstepperDialog) => {
  return {
    type: ADOPTSTEPPER_DIALOG_OPEN,
    payload: adoptstepperDialog,
  };
};

export const adoptstepper_dialog_close_action = (adoptstepperDialog) => {
  return {
    type: ADOPTSTEPPER_DIALOG_CLOSE,
    payload: adoptstepperDialog,
  };
};

export const saci_user_profile_action = (editName) => async (dispatch) => {
  try {
    await saveUserEdit(editName);
    console.log(editName);
    dispatch({
      type: SACI_USER_PROFILE,
      payload: editName,
    });
  } catch (error) {
    console.log(error);
  }
};

export const saci_phone_profile_action = (editPhone) => async (dispatch) => {
  try {
    await savePhoneEdit(editPhone);
    console.log(editPhone);
    dispatch({
      type: SACI_PHONE_PROFILE,
      payload: editPhone,
    });
  } catch (error) {
    console.log(error);
  }
};

export const saci_email_validate_profile_action = (editEmail) => async (
  dispatch
) => {
  try {
    const response = await saveEmailEdit(editEmail);
    console.log(response);
    dispatch({
      type: SACI_EMAIL_PROFILE_VALIDATE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const saci_email_profile_action = (editEmail) => async (dispatch) => {
  try {
    // const response = await saveEmailEdit(editEmail);
    // console.log(response);

    // await saveEmailEdit(editEmail);
    console.log(editEmail);

    dispatch({
      type: SACI_EMAIL_PROFILE,
      payload: editEmail,
    });
    // dispatch({
    //   type: SACI_EMAIL_PROFILE_VALIDATE,
    //   payload: response.data,
    // });
  } catch (error) {
    console.log(error);
  }
};

export const saci_password_validate_profile_action = (
  editPasswordCurrent
) => async (dispatch) => {
  try {
    const response = await validatePasswordEdit(editPasswordCurrent);

    console.log(editPasswordCurrent);
    dispatch({
      type: SACI_PASSWORD_VALIDATE_PROFILE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const saci_password_profile_action = (editPassword) => async (
  dispatch
) => {
  try {
    await savePasswordEdit(editPassword);
    console.log(editPassword);
    dispatch({
      type: SACI_PASSWORD_PROFILE,
      payload: editPassword,
    });
  } catch (error) {
    console.log(error);
  }
};

export const saci_photo_profile_action = (userimage, id) => async (
  dispatch
) => {
  try {
    const responsePhotoProfile = await uploadPhotoEdit(userimage, id);
    console.log(responsePhotoProfile);
    dispatch({
      type: SACI_PHOTO_PROFILE,
      payload: responsePhotoProfile.data,
    });
  } catch (error) {
    console.log(error);
  }
};
