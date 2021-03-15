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
            // filter = response.data.mascotas
            filter = response.data.mascotas.reverse();
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

        // filtros tamaño pequeño
        if (filters.smalls === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "3");
        }

        // filtros tamaño mediano
        if (filters.mediums === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "2");
        }

        // filtros tamaño grande
        if (filters.bigs === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "1");
        }

        // filtros tamaño pequeño y mediano
        if (filters.smalls === true && filters.mediums === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "3" || pets.id_tamanio === "2");
        }

        // filtros tamaño pequeño y grande
        if (filters.smalls === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "3" || pets.id_tamanio === "1");
        }

        // filtros tamaño grande y mediano
        if (filters.bigs === true && filters.mediums === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "1" || pets.id_tamanio === "2");
        }

        // filtros tamaño pequeño, mediano y grande
        if (filters.smalls === true && filters.mediums === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "3" || pets.id_tamanio === "2" || pets.id_tamanio === "1");
        }

        // filtros gatos, pequeños
        if (filters.cats === true && filters.smalls === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "1" && pets.id_tamanio === "3");
        }

        // filtros gatos, medianos
        if (filters.cats === true && filters.mediums === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "1" && pets.id_tamanio === "2");
        }

        // filtros gatos, grandes
        if (filters.cats === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "1" && pets.id_tamanio === "1");
        }

        // filtros perros, pequeños
        if (filters.dogs === true && filters.smalls === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "2" && pets.id_tamanio === "3");
        }

        // filtros perros, medianos
        if (filters.dogs === true && filters.mediums === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "2" && pets.id_tamanio === "2");
        }

        // filtros perros, grandes
        if (filters.dogs === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "2" && pets.id_tamanio === "1");
        }

        // filtros gatos, pequeños, medianos
        if (filters.cats === true && filters.smalls === true && filters.mediums === true) {
            filter = response.data.mascotas.filter(pets =>
                pets.id_tipo_mascota === "1" && (pets.id_tamanio === "3" || pets.id_tamanio === "2"));
        }

        // filtros gatos, pequeños, grandes
        if (filters.cats === true && filters.smalls === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                pets.id_tipo_mascota === "1" && (pets.id_tamanio === "3" || pets.id_tamanio === "1"));
        }

        // filtros gatos, medianos, grandes
        if (filters.cats === true && filters.mediums === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                pets.id_tipo_mascota === "1" && (pets.id_tamanio === "2" || pets.id_tamanio === "1"));
        }

        // filtros perros, pequeños, medianos
        if (filters.dogs === true && filters.smalls === true && filters.mediums === true) {
            filter = response.data.mascotas.filter(pets =>
                pets.id_tipo_mascota === "2" && (pets.id_tamanio === "3" || pets.id_tamanio === "2"));
        }

        // filtros perros, pequeños, grandes
        if (filters.dogs === true && filters.smalls === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                pets.id_tipo_mascota === "2" && (pets.id_tamanio === "3" || pets.id_tamanio === "1"));
        }

        // filtros perros, medianos, grandes
        if (filters.dogs === true && filters.mediums === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                pets.id_tipo_mascota === "2" && (pets.id_tamanio === "2" || pets.id_tamanio === "1"));
        }

        // filtros gatos, perros, pequeños
        if (filters.cats === true && filters.dogs === true && filters.smalls === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && pets.id_tamanio === "3");
        }

        // filtros gatos, perros, medianos
        if (filters.cats === true && filters.dogs === true && filters.mediums === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && pets.id_tamanio === "2");
        }

        // filtros gatos, perros, grandes
        if (filters.cats === true && filters.dogs === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && pets.id_tamanio === "1");
        }

        // filtros gatos, pequeños, medianos, grandes
        if (filters.cats === true && filters.smalls === true && filters.mediums === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                pets.id_tipo_mascota === "1" && (pets.id_tamanio === "3" || pets.id_tamanio === "2" || pets.id_tamanio === "1"));
        }

        // filtros perros, pequeños, medianos, grandes
        if (filters.dogs === true && filters.smalls === true && filters.mediums === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                pets.id_tipo_mascota === "2" && (pets.id_tamanio === "3" || pets.id_tamanio === "2" || pets.id_tamanio === "1"));
        }






        // filtros ultima mascota agregada y ordenada de 1 a 3
        if (filters.id_tipo_mascota !== false) {
            filter = filter.reverse();
            filter = filter.sort(((a, b) => a.id_tipo_mascota - b.id_tipo_mascota));
        }

        console.log(filter)

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