import { GET_SACI_PETS, GET_PET_PHOTOS, PAGE_SACI_PETS, SELECT_PET_DATA } from "../types";
import { getPetPhotos, getSaciPets } from "../../configAxios/saciPets"

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
                (pets.id_tipo_mascota === "1") && (pets.id_tamanio === "3" || pets.id_tamanio === "2"));
        }

        // filtros gatos, pequeños, grandes
        if (filters.cats === true && filters.smalls === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1") && (pets.id_tamanio === "3" || pets.id_tamanio === "1"));
        }

        // filtros gatos, medianos, grandes
        if (filters.cats === true && filters.mediums === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1") && (pets.id_tamanio === "2" || pets.id_tamanio === "1"));
        }

        // filtros perros, pequeños, medianos
        if (filters.dogs === true && filters.smalls === true && filters.mediums === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.id_tamanio === "3" || pets.id_tamanio === "2"));
        }

        // filtros perros, pequeños, grandes
        if (filters.dogs === true && filters.smalls === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.id_tamanio === "3" || pets.id_tamanio === "1"));
        }

        // filtros perros, medianos, grandes
        if (filters.dogs === true && filters.mediums === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.id_tamanio === "2" || pets.id_tamanio === "1"));
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

        // filtros gatos, perros, pequeños, medianos
        if (filters.cats === true && filters.dogs === true && filters.smalls === true && filters.mediums === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && (pets.id_tamanio === "3" || pets.id_tamanio === "2"));
        }

        // filtros gatos, perros, pequeños, grandes
        if (filters.cats === true && filters.dogs === true && filters.smalls === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && (pets.id_tamanio === "3" || pets.id_tamanio === "1"));
        }

        // filtros gatos, perros, medianos, grandes
        if (filters.cats === true && filters.dogs === true && filters.mediums === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && (pets.id_tamanio === "2" || pets.id_tamanio === "1"));
        }

        // filtros gatos, pequeños, medianos, grandes
        if (filters.cats === true && filters.smalls === true && filters.mediums === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1") && (pets.id_tamanio === "3" || pets.id_tamanio === "2" || pets.id_tamanio === "1"));
        }

        // filtros perros, pequeños, medianos, grandes
        if (filters.dogs === true && filters.smalls === true && filters.mediums === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.id_tamanio === "3" || pets.id_tamanio === "2" || pets.id_tamanio === "1"));
        }

        // filtros gatos, perros, pequeños, medianos, grandes
        if (filters.cats === true && filters.dogs === true && filters.smalls === true && filters.mediums === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") &&
                (pets.id_tamanio === "3" || pets.id_tamanio === "2" || pets.id_tamanio === "1"));
        }

        // filtros machos
        if (filters.males === true) {
            filter = response.data.mascotas.filter(pets => pets.genero_mascota === "1");
        }

        // filtros hembras
        if (filters.females === true) {
            filter = response.data.mascotas.filter(pets => pets.genero_mascota === "2");
        }
        // filtros machos, hembras
        if (filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets => pets.genero_mascota === "1" || pets.genero_mascota === "2");
        }
        // filtros, gatos, machos
        if (filters.cats === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "1" && pets.genero_mascota === "1");
        }
        // filtros, gatos, hembras
        if (filters.cats === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "1" && pets.genero_mascota === "2");
        }
        // filtros, perros, machos
        if (filters.dogs === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "2" && pets.genero_mascota === "1");
        }
        // filtros, perros, hembras
        if (filters.dogs === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "2" && pets.genero_mascota === "2");
        }

        // filtros, hamsters, machos
        if (filters.hamsters === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "3" && pets.genero_mascota === "1");
        }

        // filtros, hamsters, hembras
        if (filters.hamsters === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "3" && pets.genero_mascota === "2");
        }

        // filtros, gatos, machos, hembras
        if (filters.cats === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros, perros, machos, hembras
        if (filters.dogs === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros, hamsters, machos, hembras
        if (filters.hamsters === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "3") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros, gatos, perros, machos
        if (filters.cats === true && filters.dogs === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && (pets.genero_mascota === "1"));
        }

        // filtros, gatos, perros, hembras
        if (filters.cats === true && filters.dogs === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && (pets.genero_mascota === "2"));
        }

        // filtros, gatos, hamsters, machos
        if (filters.cats === true && filters.hamsters === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "3") && (pets.genero_mascota === "1"));
        }

        // filtros, gatos, hamsters, hembras
        if (filters.cats === true && filters.hamsters === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "3") && (pets.genero_mascota === "2"));
        }

        // filtros, perros, hamsters, machos
        if (filters.dogs === true && filters.hamsters === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2" || pets.id_tipo_mascota === "3") && (pets.genero_mascota === "1"));
        }

        // filtros, perros, hamsters, hembras
        if (filters.dogs === true && filters.hamsters === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2" || pets.id_tipo_mascota === "3") && (pets.genero_mascota === "2"));
        }

        // filtros, gatos, perros, machos, hembras
        if (filters.cats === true && filters.dogs === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") &&
                (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros, gatos, hamsters, machos, hembras
        if (filters.cats === true && filters.hamsters === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "3") &&
                (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros, perros, hamsters, machos, hembras
        if (filters.dogs === true && filters.hamsters === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2" || pets.id_tipo_mascota === "3") &&
                (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros, gatos, perros, hamsters, machos
        if (filters.cats === true && filters.dogs === true && filters.hamsters === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2" || pets.id_tipo_mascota === "3") &&
                (pets.genero_mascota === "1"));
        }

        // filtros, gatos, perros, hamsters, hembras
        if (filters.cats === true && filters.dogs === true && filters.hamsters === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2" || pets.id_tipo_mascota === "3") &&
                (pets.genero_mascota === "2"));
        }

        // filtros, gatos, perros, hamsters, machos, hembras
        if (filters.cats === true && filters.dogs === true && filters.hamsters === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2" || pets.id_tipo_mascota === "3") &&
                (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros, gatos, pequeños, machos
        if (filters.cats === true && filters.smalls === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1") && (pets.id_tamanio === "3") && (pets.genero_mascota === "1"));
        }

        // filtros, gatos, pequeños, hembras
        if (filters.cats === true && filters.smalls === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1") && (pets.id_tamanio === "3") && (pets.genero_mascota === "2"));
        }

        // filtros, perros, pequeños, machos
        if (filters.dogs === true && filters.smalls === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.id_tamanio === "3") && (pets.genero_mascota === "1"));
        }

        // filtros, perros, pequeños, hembras
        if (filters.dogs === true && filters.smalls === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.id_tamanio === "3") && (pets.genero_mascota === "2"));
        }
        // filtros hamsters no tienen tamaño
        // filtros hamsters no tienen tamaño

        // filtros, gatos, medianos, machos
        if (filters.cats === true && filters.mediums === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1") && (pets.id_tamanio === "2") && (pets.genero_mascota === "1"));
        }

        // filtros, gatos, medianos, hembras
        if (filters.cats === true && filters.mediums === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1") && (pets.id_tamanio === "2") && (pets.genero_mascota === "2"));
        }

        // filtros, perros, medianos, machos
        if (filters.dogs === true && filters.mediums === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.id_tamanio === "2") && (pets.genero_mascota === "1"));
        }

        // filtros, perros, medianos, hembras
        if (filters.dogs === true && filters.mediums === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.id_tamanio === "2") && (pets.genero_mascota === "2"));
        }
        // filtros hamsters no tienen tamaño
        // filtros hamsters no tienen tamaño


        // filtros, gatos, grandes, machos
        // filtros, gatos, grandes, hembras
        // filtros, perros, grandes, machos
        // filtros, perros, grandes, hembras


        // filtros hamsters no tienen tamaño
        // filtros hamsters no tienen tamaño






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

export const page_saci_pets_action = (slicePets) => async (dispatch) => {

    dispatch({
        type: PAGE_SACI_PETS,
        payload: slicePets
    })

}

export const select_pet_action = (id_mascota) => async (dispatch) => {

    dispatch({
        type: SELECT_PET_DATA,
        payload: id_mascota
    })

}
