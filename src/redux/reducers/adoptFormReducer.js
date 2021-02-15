import {
    NEXT_STEP_ACTION,
    BACK_STEP_ACTION,
    GET_DEPARTMENT_DATA,
    UPDATE_ADOPT_FORM_DESCRIPTION_DATA,
    GET_CITY_DATA,
    PET_DESCRIPTION_OK,
    GET_ADOPT_FORM_DESCRIPTION_DATA,
    PUSH_DATA_ACTION

} from "../types"

const initialState = {

    activeStepState: 1,

    departments: [],

    descriptionData: {
        id_usuario: '',
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

    PushData: false

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

        case PUSH_DATA_ACTION:
            return {
                ...state,
                pushData: true,
            }

        default: return state

    }

}