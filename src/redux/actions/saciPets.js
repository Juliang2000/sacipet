import { GET_SACI_PETS, GET_PET_PHOTOS, SAVE_PET } from "../types";
import { getPetPhotos, getSaciPets } from "../../configAxios/saciPets"


// export const get_saci_pets_action = (filters) => async (dispatch, getState) => {
//     try {
//         const response = await getSaciPets(filters)
//         console.log(filters)



//         dispatch({
//             type: GET_SACI_PETS,
//             payload: response.data.mascotas
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

export const get_saci_pets_action = (filters) => async (dispatch) => {
    try {
        const response = await getSaciPets(filters)

        console.log(filters)

        var filter = response.data.mascotas

        if (filters.id_tipo_mascota === false) {
            filter = response.data.mascotas
        }

        // filtros gatos
        if (filters.cats === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "1");
        }

        // filtros perros
        if (filters.dogs === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "2");
        }

        // filtros hamsters
        if (filters.hamsters === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "3");
        }

        // filtros gatos y perros
        if (filters.cats === true && filters.dogs === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2");
        }

        // filtros gatos y hamsters
        if (filters.cats === true && filters.hamsters === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "3");
        }

        // filtros perros y hamsters
        if (filters.dogs === true && filters.hamsters === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "2" || pets.id_tipo_mascota === "3");
        }

        // filtros gatos, perros y hamsters
        if (filters.cats === true && filters.dogs === true && filters.hamsters === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2" || pets.id_tipo_mascota === "3");
        }

        dispatch({
            type: GET_SACI_PETS,
            payload: filter
        })

    } catch (error) {
        console.log(error)
    }
}











export const get_pet_photos_action = (petPhoto) => async (dispatch) => {
    try {
        const responseData = await getPetPhotos(petPhoto)
        dispatch({
            type: GET_PET_PHOTOS,
            payload: responseData
        })
    } catch (error) {
        console.log(error)
    }
}

export const save_pet_action = (petFile) => {
    return {
        type: SAVE_PET,
        payload: petFile
    }
}