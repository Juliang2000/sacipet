import {
  INICIAR_SESION_ERROR,
  INICIAR_SESION_EXITO,
  INICIAR_SESION_EXITO_PHOTO,
  INICIAR_SESION_START,
  LOGIN_DIALOG_OPEN,
  LOGIN_DIALOG_CLOSE,
  ADOPT_DIALOG_OPEN,
  ADOPT_DIALOG_CLOSE,
  ADOPTSTEPPER_DIALOG_OPEN,
  ADOPTSTEPPER_DIALOG_CLOSE,
  SACI_USER_PROFILE,
  SACI_PHONE_PROFILE,
  SACI_EMAIL_PROFILE_VALIDATE,
  SACI_EMAIL_PROFILE,
  SACI_PASSWORD_PROFILE,
  SACI_PASSWORD_VALIDATE_PROFILE,
  SACI_PHOTO_PROFILE,
  CHECK_LOGIN
  // GET_SACI_USER_MESSAGE,
  /* REGISTER_TO_LOGIN */
} from '../types';

const initialState = {
  // user: 'developer',
  user: {
    nombres: '',
    correo: '',
    telefono: '',
  },
  loader: false,
  error: false,
  loginDialog: null,
  adoptDialog: null,
  adoptstepperDialog: null,
  procedure: null,
  photoProfile: '',
  passwordValidate: '',
  emailValidate: '',
  userPhoto: '',
  checkLogin: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INICIAR_SESION_START:
      return {
        ...state,
        loader: true,
      };

    case INICIAR_SESION_EXITO:
      return {
        ...state,
        loader: false,
        error: false,
        user: action.payload,
      };

    case INICIAR_SESION_EXITO_PHOTO:
      return {
        ...state,
        userPhoto: action.payload,
      };

    case INICIAR_SESION_ERROR:
      return {
        ...state,
        loader: false,
        error: true,
        errorMessage: action.payload.error,
        user: {
          nombres: '',
          correo: '',
          telefono: '',
        },
        ok: false,
      };

    case LOGIN_DIALOG_OPEN:
      return {
        ...state,
        loginDialog: true,
      };

    case LOGIN_DIALOG_CLOSE:
      return {
        ...state,
        loginDialog: false,
      };

    case ADOPT_DIALOG_OPEN:
      return {
        ...state,
        adoptDialog: true,
        procedure: action.payload,
      };

    case ADOPT_DIALOG_CLOSE:
      return {
        ...state,
        adoptDialog: false,
      };

    case ADOPTSTEPPER_DIALOG_OPEN:
      return {
        ...state,
        adoptstepperDialog: true,
      };

    case ADOPTSTEPPER_DIALOG_CLOSE:
      return {
        ...state,
        adoptstepperDialog: false,
      };

    case SACI_USER_PROFILE:
      return {
        ...state,
        user: action.payload,
      };

    case SACI_PHONE_PROFILE:
      return {
        ...state,
        user: action.payload,
      };

    case SACI_EMAIL_PROFILE:
      return {
        ...state,
        user: action.payload,
      };

    case SACI_EMAIL_PROFILE_VALIDATE:
      return {
        ...state,
        emailValidate: action.payload,
      };

    case SACI_PASSWORD_VALIDATE_PROFILE:
      return {
        ...state,
        passwordValidate: action.payload,
      };

    case SACI_PASSWORD_PROFILE:
      return {
        ...state,
        user: action.payload,
      };

    case SACI_PHOTO_PROFILE:
      return {
        ...state,
        photoProfile: action.payload,
      };
    case CHECK_LOGIN:
      return {
        ...state,
        checkLogin: true
      }
    default:
      return state;
  }
};
