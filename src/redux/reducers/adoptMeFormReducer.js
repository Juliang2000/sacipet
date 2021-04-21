import {
    NEXT_STEP_ADOPT_ME_ACTION,
    PREVIEW_STEP_ADOPT_ME_ACTION,
    GET_ADOPT_ME_FORM, UPDATE_ADOPT_ME_FORM,
    ENABLE_STEP_TWO,
    SAVE_ADOPT_ME_FORM
} from "../types"


const initialState = {

    formData: {
        nombre_adoptante: '',
        direccion_adoptante: '',
        id_unde: '',
        id_codigo: '',
        telefono: '',
        correo: '',
        estado_civil: '',
        ocupacion: '',
        id: ''
    },
    activeStepState: null,
    stepTwo: false,
    response: null

}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ADOPT_ME_FORM:
            return {
                ...state,
                formData: action.payload
            }

        case UPDATE_ADOPT_ME_FORM:
            return {
                ...state,
                formData: action.payload
            }
        case NEXT_STEP_ADOPT_ME_ACTION:
            return {
                ...state,
                activeStepState: action.payload
            }
        case PREVIEW_STEP_ADOPT_ME_ACTION:
            return {
                ...state,
                activeStepState: action.payload
            }
        case ENABLE_STEP_TWO:
            return {
                ...state,
                stepTwo: action.payload
            }
        case SAVE_ADOPT_ME_FORM:
            return {
                ...state,
                response: action.payload
            }
        default: return state
    }
}