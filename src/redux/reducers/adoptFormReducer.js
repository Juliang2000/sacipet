import {
    NEXT_STEP_ACTION,
    BACK_STEP_ACTION,
    GET_DEPARTMENT_DATA,
    UPDATE_FORM_DATA,
    GET_CITY_DATA,
    PET_DESCRIPTION_OK
} from "../types"

const initialState = {
    activeStepState: 1,
    departments: [],
    descriptionData: {
        nombre_mascota: '',
        edad_mascota: '',
        escala_edad: '',
        id_tamanio: '',
        id_raza: '',
        genero_mascota: '',
        id_color: '',
        id_codigo: '',
        descripcion_mascota: ''
    },
    cities: [],
    petDescription: false,

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

        case UPDATE_FORM_DATA:
            return {
                ...state,
                descriptionData: action.payload,


            }

        case PET_DESCRIPTION_OK:
            return {
                ...state,
                petDescription: true,


            }

        default: return state

    }

}