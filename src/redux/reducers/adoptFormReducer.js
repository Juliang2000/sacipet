import {
    NEXT_STEP_ACTION,
    BACK_STEP_ACTION,
    GET_DEPARTMENT_DATA,
    UPDATE_ADOPT_FORM_DESCRIPTION_DATA,
    GET_CITY_DATA,
    PET_DESCRIPTION_OK,
    GET_ADOPT_FORM_DESCRIPTION_DATA,
    PUSH_DATA_ACTION,
    GET_DATA_BY_FORM_REGISTERED,
    SUCCESS_PET_IMAGE_1,
    SUCCESS_PET_IMAGE_2,
    SUCCESS_PET_IMAGE_3,
    SUCCESS_PET_IMAGE_4,
    SUCCESS_PET_IMAGE_5,
    RESET_FORM,
    SAVE_PET_IMAGE_1,
    SAVE_PET_IMAGE_2,
    SAVE_PET_IMAGE_3,
    SAVE_PET_IMAGE_4,
    SAVE_PET_IMAGE_5,
    PET_DESCRIPTION_NOT_OK,
    RESET_CITY_ACTION

} from "../types"

const initialState = {

    activeStepState: 1,

    departments: [],

    descriptionData: {
        id_usuario: '',
        tipo_tramite: 1,
        nombre_mascota: '',
        edad_mascota: '',
        escala_edad: '',
        esterilizado: '',
        id_tamanio: '',
        id_raza: '',
        genero_mascota: '',
        id_color: '',
        id_vacuna_Rabia: false,
        id_vacuna_Rinotraqueítis: false,
        id_vacuna_Parvovirus: false,
        id_vacuna_Moquillo: false,
        id_codigo: '',
        id_unde: '',
        descripcion_mascota: ''
    },
    cities: [],

    petDescription: false,

    updateDescriptionData: {
        id_usuario: '',
        tipo_tramite: 1,
        nombre_mascota: '',
        edad_mascota: '',
        escala_edad: '',
        esterilizado: '',
        id_tamanio: '',
        id_raza: '',
        genero_mascota: '',
        id_color: '',
        id_vacuna_Rabia: false,
        id_vacuna_Rinotraqueítis: false,
        id_vacuna_Parvovirus: false,
        id_vacuna_Moquillo: false,
        id_codigo: '',
        id_unde: '',
        descripcion_mascota: ''
    },

    PushData: false,

    petimage1: null,
    petimage2: null,
    petimage3: null,
    petimage4: null,
    petimage5: null,

    savePetImage1: false,
    savePetImage2: false,
    savePetImage3: false,
    savePetImage4: false,
    savePetImage5: false,

    successPetImage1: {
        data: {
            sucess: false,
        }
    },

    successPetImage2: {
        data: {
            sucess: false,
        }
    },
    successPetImage3: {
        data: {
            sucess: false,
        }
    },
    successPetImage4: {
        data: {
            sucess: false,
        }
    },
    successPetImage5: {
        data: {
            sucess: false,
        }
    },

    registeredFormData: {
        data: {
            mascota: {
                id_mascota: 0,
            },
            ok: false,
        }
    }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case NEXT_STEP_ACTION:
            return {
                ...state,
                activeStepState: state.activeStepState + 1
            }
        case BACK_STEP_ACTION:
            return {
                ...state,
                activeStepState: state.activeStepState - 1
            }
        case GET_DEPARTMENT_DATA:
            return {
                ...state,
                departments: action.payload
            }
        case GET_CITY_DATA:
            return {
                ...state,
                cities: action.payload
            }
        case GET_ADOPT_FORM_DESCRIPTION_DATA:
            return {
                ...state,
                descriptionData: action.payload,
            }
        case UPDATE_ADOPT_FORM_DESCRIPTION_DATA:
            return {
                ...state,
                updateDescriptionData: state.descriptionData
            }
        case PET_DESCRIPTION_OK:
            return {
                ...state,
                petDescription: true,
            }
        case PET_DESCRIPTION_NOT_OK:
            return {
                ...state,
                petDescription: false,
            }
        case PUSH_DATA_ACTION:
            return {
                ...state,
                pushData: true,
            }
        case GET_DATA_BY_FORM_REGISTERED:
            return {
                ...state,
                // registeredFormData: action.payload,
                registeredFormData: action.payload
            }
        case SAVE_PET_IMAGE_1:
            return {
                ...state,
                petimage1: action.payload,
                savePetImage1: true,
            }
        case SAVE_PET_IMAGE_2:
            return {
                ...state,
                petimage2: action.payload,
                savePetImage2: true,
            }
        case SAVE_PET_IMAGE_3:
            return {
                ...state,
                petimage3: action.payload,
                savePetImage3: true,
            }
        case SAVE_PET_IMAGE_4:
            return {
                ...state,
                petimage4: action.payload,
                savePetImage4: true,
            }
        case SAVE_PET_IMAGE_5:
            return {
                ...state,
                petimage5: action.payload,
                savePetImage5: true,
            }
        case SUCCESS_PET_IMAGE_1:
            return {
                ...state,
                successPetImage1: action.payload,
            }
        case SUCCESS_PET_IMAGE_2:
            return {
                ...state,
                successPetImage2: action.payload,
            }
        case SUCCESS_PET_IMAGE_3:
            return {
                ...state,
                successPetImage3: action.payload,
            }
        case SUCCESS_PET_IMAGE_4:
            return {
                ...state,
                successPetImage4: action.payload,
            }
        case SUCCESS_PET_IMAGE_5:
            return {
                ...state,
                successPetImage5: action.payload,
            }
        case RESET_FORM:
            return {
                ...state,
                updateDescriptionData: {
                    id_usuario: '',
                    tipo_tramite: 1,
                    nombre_mascota: '',
                    edad_mascota: '',
                    escala_edad: '',
                    esterilizado: '',
                    id_tamanio: '',
                    id_raza: '',
                    genero_mascota: '',
                    id_color: '',
                    id_vacuna_Rabia: false,
                    id_vacuna_Rinotraqueítis: false,
                    id_vacuna_Parvovirus: false,
                    id_vacuna_Moquillo: false,
                    id_codigo: '',
                    id_unde: '',
                    descripcion_mascota: '',
                },
                activeStepState: 1,
            }
        case RESET_CITY_ACTION:
            return {
                ...state,
                updateDescriptionData: {
                    id_codigo: '',
                }
            }
        default: return state
    }
}

