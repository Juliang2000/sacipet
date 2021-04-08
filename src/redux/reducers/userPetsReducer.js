import {
    GET_PETS_BY_USER,
    SAVE_USER_PET_ID,
    SET_USER_PETS_MODAL,
    SET_USER_PET_MODAL_DATA,
    SAVE_USER_PET_DATA,
} from "../types"


const initialState = {

    userPetsModal: false,
    userPetsRegistered: [],
    userPetId: null,
    userPetModalData: false,
    userPetData: {
        id_mascota: "",
        nombre_mascota: "",
        edad_mascota: "",
        escala_edad: "",
        descripcion_mascota: "",
        tipo_tramite: "",
        esterilizado: "",
        id_codigo: "",
        id_municipio: "",
        municipio: "",
        id_departamento: "",
        departameto: "",
        id_pais: "",
        pais: "",
        id_color: "",
        color: "",
        id_raza: "",
        raza: "",
        id_tipo_mascota: "",
        id_tamanio: "",
        tamanio: "",
        genero_mascota: "",
        tipo: "",
        id_usuario: "",
        nombres: "",
        id_mascotaa: "",
        fotos: "",
        vacunas: ""
    }

}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_PETS_MODAL:
            return {
                ...state,
                userPetsModal: action.payload
            }
        case GET_PETS_BY_USER:
            return {
                ...state,
                userPetsRegistered: action.payload
            }
        case SAVE_USER_PET_ID:
            return {
                ...state,
                userPetId: action.payload
            }
        case SET_USER_PET_MODAL_DATA:
            return {
                ...state,
                userPetModalData: action.payload
            }
        case SAVE_USER_PET_DATA:
            return {
                ...state,
                userPetData: action.payload
            }


        default: return state
    }
}