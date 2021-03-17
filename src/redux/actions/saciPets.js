import { GET_SACI_PETS, GET_PET_PHOTOS, SAVE_PET } from "../types";
import { getPetPhotos, getSaciPets } from "../../configAxios/saciPets"

export const get_saci_pets_action = (filters) => async (dispatch) => {
    try {
        const response = await getSaciPets(filters)

        console.log(filters)

        var filter = response.data.mascotas

        if (filters.id_tipo_mascota === false) {
            filter = response.data.mascotas.reverse();
        }
        /////////////////////// Filtros 1 ///////////////////////

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

        // filtros pequeño
        if (filters.smalls === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "3");
        }

        // filtros mediano
        if (filters.mediums === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "2");
        }

        // filtros grande
        if (filters.bigs === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "1");
        }

        // filtros machos
        if (filters.males === true) {
            filter = response.data.mascotas.filter(pets => pets.genero_mascota === "1");
        }

        // filtros hembras
        if (filters.females === true) {
            filter = response.data.mascotas.filter(pets => pets.genero_mascota === "2");
        }

        /////////////////////////////////////////////////////////


        /////////////////////// Filtros 2 ///////////////////////

        // filtros gatos, perros
        if (filters.cats === true && filters.dogs === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2");
        }

        // filtros gatos, hamsters
        if (filters.cats === true && filters.hamsters === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "3");
        }

        // filtros perros, hamsters
        if (filters.dogs === true && filters.hamsters === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "2" || pets.id_tipo_mascota === "3");
        }

        // filtros pequeño y mediano
        if (filters.smalls === true && filters.mediums === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "3" || pets.id_tamanio === "2");
        }

        // filtros pequeño y grande
        if (filters.smalls === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "3" || pets.id_tamanio === "1");
        }

        // filtros grande y mediano
        if (filters.bigs === true && filters.mediums === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "1" || pets.id_tamanio === "2");
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

        // filtros pequeños, machos
        if (filters.smalls === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "3") && (pets.genero_mascota === "1"));
        }

        // filtros pequeños, hembras
        if (filters.smalls === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "3") && (pets.genero_mascota === "2"));
        }

        // filtros medianos, machos
        if (filters.mediums === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "2") && (pets.genero_mascota === "1"));
        }

        // filtros medianos, hembras
        if (filters.mediums === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "2") && (pets.genero_mascota === "2"));
        }

        // filtros grandes, machos
        if (filters.bigs === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "1") && (pets.genero_mascota === "1"));
        }

        // filtros grandes, hembras
        if (filters.bigs === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "1") && (pets.genero_mascota === "2"));
        }

        /////////////////////////////////////////////////////////

        /////////////////////// Filtros 3 ///////////////////////

        // filtros gatos, perros, hamsters
        if (filters.cats === true && filters.dogs === true && filters.hamsters === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2" || pets.id_tipo_mascota === "3");
        }

        // filtros pequeño, mediano y grande
        if (filters.smalls === true && filters.mediums === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets => pets.id_tamanio === "3" || pets.id_tamanio === "2" || pets.id_tamanio === "1");
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

        // filtros pequeños, machos, hembras
        if (filters.smalls === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "3") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros medianos, machos, hembras
        if (filters.mediums === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "2") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros grandes, machos, hembras
        if (filters.bigs === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "1") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros pequeños, medianos, machos
        if (filters.smalls === true && filters.mediums === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "3" || pets.id_tamanio === "2") && (pets.genero_mascota === "1"));
        }

        // filtros pequeños, medianos, hembras
        if (filters.smalls === true && filters.mediums === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "3" || pets.id_tamanio === "2") && (pets.genero_mascota === "2"));
        }

        // filtros pequeños, grandes, machos
        if (filters.smalls === true && filters.bigs === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "3" || pets.id_tamanio === "1") && (pets.genero_mascota === "1"));
        }

        // filtros pequeños, grandes, hembras
        if (filters.smalls === true && filters.bigs === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "3" || pets.id_tamanio === "1") && (pets.genero_mascota === "2"));
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
        if (filters.cats === true && filters.bigs === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1") && (pets.id_tamanio === "1") && (pets.genero_mascota === "1"));
        }

        // filtros, gatos, grandes, hembras
        if (filters.cats === true && filters.bigs === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1") && (pets.id_tamanio === "1") && (pets.genero_mascota === "2"));
        }

        // filtros, perros, grandes, machos
        if (filters.dogs === true && filters.bigs === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.id_tamanio === "1") && (pets.genero_mascota === "1"));
        }

        // filtros, perros, grandes, hembras
        if (filters.dogs === true && filters.bigs === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.id_tamanio === "1") && (pets.genero_mascota === "2"));
        }

        // filtros hamsters no tienen tamaño

        /////////////////////////////////////////////////////////

        /////////////////////// Filtros 4 ///////////////////////

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

        // filtros pequeños, medianos, machos, hembras
        if (filters.smalls === true && filters.mediums === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "3" || pets.id_tamanio === "2") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros pequeños, grandes, machos, hembras
        if (filters.smalls === true && filters.bigs === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tamanio === "3" || pets.id_tamanio === "1") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros gatos, pequeños, machos, hembras
        if (filters.cats === true && filters.smalls === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1") && (pets.id_tamanio === "3") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros gatos, medianos, machos, hembras
        if (filters.cats === true && filters.mediums === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1") && (pets.id_tamanio === "2") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros gatos, grandes, machos, hembras
        if (filters.cats === true && filters.bigs === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1") && (pets.id_tamanio === "1") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros perros, pequeños, machos, hembras
        if (filters.dogs === true && filters.smalls === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.id_tamanio === "3") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros perros, medianos, machos, hembras
        if (filters.dogs === true && filters.mediums === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.id_tamanio === "2") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros perros, grandes, machos, hembras
        if (filters.dogs === true && filters.bigs === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "2") && (pets.id_tamanio === "1") && (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros gatos, perros, pequeños, machos
        if (filters.cats === true && filters.dogs === true && filters.smalls === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && (pets.id_tamanio === "3") && (pets.genero_mascota === "1"));
        }

        // filtros gatos, perros, pequeños, hembras
        if (filters.cats === true && filters.dogs === true && filters.smalls === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && (pets.id_tamanio === "3") && (pets.genero_mascota === "2"));
        }

        // filtros gatos, perros, medianos, machos
        if (filters.cats === true && filters.dogs === true && filters.mediums === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && (pets.id_tamanio === "2") && (pets.genero_mascota === "1"));
        }

        // filtros gatos, perros, medianos, hembras
        if (filters.cats === true && filters.dogs === true && filters.mediums === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && (pets.id_tamanio === "2") && (pets.genero_mascota === "2"));
        }

        // filtros gatos, perros, grandes, machos
        if (filters.cats === true && filters.dogs === true && filters.bigs === true && filters.males === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && (pets.id_tamanio === "1") && (pets.genero_mascota === "1"));
        }

        // filtros gatos, perros, grandes, hembras
        if (filters.cats === true && filters.dogs === true && filters.bigs === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") && (pets.id_tamanio === "1") && (pets.genero_mascota === "2"));
        }


        /////////////////////////////////////////////////////////

        /////////////////////// Filtros 5 ///////////////////////

        // filtros gatos, perros, pequeños, medianos, grandes
        if (filters.cats === true && filters.dogs === true && filters.smalls === true && filters.mediums === true && filters.bigs === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") &&
                (pets.id_tamanio === "3" || pets.id_tamanio === "2" || pets.id_tamanio === "1"));
        }

        // filtros, gatos, perros, hamsters, machos, hembras
        if (filters.cats === true && filters.dogs === true && filters.hamsters === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2" || pets.id_tipo_mascota === "3") &&
                (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros gatos, perros, pequeños, machos, hembras
        if (filters.cats === true && filters.dogs === true && filters.smalls === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") &&
                (pets.id_tamanio === "3") &&
                (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros gatos, perros, medianos, machos, hembras
        if (filters.cats === true && filters.dogs === true && filters.mediums === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") &&
                (pets.id_tamanio === "2") &&
                (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        // filtros gatos, perros, grandes, machos, hembras
        if (filters.cats === true && filters.dogs === true && filters.bigs === true && filters.males === true && filters.females === true) {
            filter = response.data.mascotas.filter(pets =>
                (pets.id_tipo_mascota === "1" || pets.id_tipo_mascota === "2") &&
                (pets.id_tamanio === "1") &&
                (pets.genero_mascota === "1" || pets.genero_mascota === "2"));
        }

        /////////////////////////////////////////////////////////

        // medianos, gandes, machos
        // medianos, gandes, hembras
        // medianos, gandes, machos, hembras


        // filtros pequeños, medianos, grandes, machos
        // filtros pequeños, medianos, grandes, hembras
        // filtros pequeños, medianos, grandes, machos, hembras



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