import { GET_SACI_PETS, PAGE_SACI_PETS, SELECT_PET_DATA } from '../types';
import { getSaciPets } from '../../configAxios/saciPets';

export const get_saci_pets_action = (filters) => async (dispatch) => {
  try {
    const response = await getSaciPets(filters);

    console.log(filters);

    var filter = response.data.mascotas;

    if (filters.id_tipo_mascota === false) {
      filter = response.data.mascotas.reverse();
    }

    /////////////////////// Filtros 1 ///////////////////////

    // filtros gatos
    if (filters.cats) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '1'
      );
    }

    // filtros perros
    if (filters.dogs) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '2'
      );
    }

    // filtros hamsters
    if (filters.hamsters) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '3'
      );
    }

    // filtros pequeño
    if (filters.smalls) {
      filter = response.data.mascotas.filter((pets) => pets.id_tamanio === '3');
    }

    // filtros mediano
    if (filters.mediums) {
      filter = response.data.mascotas.filter((pets) => pets.id_tamanio === '2');
    }

    // filtros grande
    if (filters.bigs) {
      filter = response.data.mascotas.filter((pets) => pets.id_tamanio === '1');
    }

    // filtros machos
    if (filters.males) {
      filter = response.data.mascotas.filter(
        (pets) => pets.genero_mascota === '1'
      );
    }

    // filtros hembras
    if (filters.females) {
      filter = response.data.mascotas.filter(
        (pets) => pets.genero_mascota === '2'
      );
    }

    // filtros, cachorros
    if (filters.puppies) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.edad_mascota >= 1 &&
            pets.edad_mascota <= 25 &&
            pets.escala_edad === '1') ||
          (pets.edad_mascota <= 6 && pets.escala_edad === '2')
      );
    }

    // filtros, jovenes
    if (filters.youngs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.edad_mascota >= 7 &&
            pets.edad_mascota <= 24 &&
            pets.escala_edad === '2') ||
          (pets.edad_mascota <= 2 && pets.escala_edad === '3')
      );
    }

    // filtros, adultos
    if (filters.adults) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.edad_mascota >= 3 &&
          pets.edad_mascota <= 10 &&
          pets.escala_edad === '3'
      );
    }

    // filtros, viejos
    if (filters.olds) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.edad_mascota >= 11 &&
          pets.edad_mascota <= 25 &&
          pets.escala_edad === '3'
      );
    }

    /////////////////////////////////////////////////////////

    /////////////////////// Filtros 2 ///////////////////////

    // filtros gatos, perros
    if (filters.cats && filters.dogs) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2'
      );
    }

    // filtros gatos, hamsters
    if (filters.cats && filters.hamsters) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '3'
      );
    }

    // filtros perros, hamsters
    if (filters.dogs && filters.hamsters) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '2' || pets.id_tipo_mascota === '3'
      );
    }

    // filtros pequeño y mediano
    if (filters.smalls && filters.mediums) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tamanio === '3' || pets.id_tamanio === '2'
      );
    }

    // filtros pequeño y grande
    if (filters.smalls && filters.bigs) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tamanio === '3' || pets.id_tamanio === '1'
      );
    }

    // filtros grande y mediano
    if (filters.bigs && filters.mediums) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tamanio === '1' || pets.id_tamanio === '2'
      );
    }

    // filtros gatos, pequeños
    if (filters.cats && filters.smalls) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '1' && pets.id_tamanio === '3'
      );
    }

    // filtros gatos, medianos
    if (filters.cats && filters.mediums) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '1' && pets.id_tamanio === '2'
      );
    }

    // filtros gatos, grandes
    if (filters.cats && filters.bigs) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '1' && pets.id_tamanio === '1'
      );
    }

    // filtros perros, pequeños
    if (filters.dogs && filters.smalls) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '2' && pets.id_tamanio === '3'
      );
    }

    // filtros perros, medianos
    if (filters.dogs && filters.mediums) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '2' && pets.id_tamanio === '2'
      );
    }

    // filtros perros, grandes
    if (filters.dogs && filters.bigs) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '2' && pets.id_tamanio === '1'
      );
    }

    // filtros machos, hembras
    if (filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) => pets.genero_mascota === '1' || pets.genero_mascota === '2'
      );
    }

    // filtros, gatos, machos
    if (filters.cats && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '1' && pets.genero_mascota === '1'
      );
    }

    // filtros, gatos, hembras
    if (filters.cats && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '1' && pets.genero_mascota === '2'
      );
    }

    // filtros, perros, machos
    if (filters.dogs && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '2' && pets.genero_mascota === '1'
      );
    }

    // filtros, perros, hembras
    if (filters.dogs && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '2' && pets.genero_mascota === '2'
      );
    }

    // filtros, hamsters, machos
    if (filters.hamsters && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '3' && pets.genero_mascota === '1'
      );
    }

    // filtros, hamsters, hembras
    if (filters.hamsters && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tipo_mascota === '3' && pets.genero_mascota === '2'
      );
    }

    // filtros pequeños, machos
    if (filters.smalls && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tamanio === '3' && pets.genero_mascota === '1'
      );
    }

    // filtros pequeños, hembras
    if (filters.smalls && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tamanio === '3' && pets.genero_mascota === '2'
      );
    }

    // filtros medianos, machos
    if (filters.mediums && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tamanio === '2' && pets.genero_mascota === '1'
      );
    }

    // filtros medianos, hembras
    if (filters.mediums && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tamanio === '2' && pets.genero_mascota === '2'
      );
    }

    // filtros grandes, machos
    if (filters.bigs && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tamanio === '1' && pets.genero_mascota === '1'
      );
    }

    // filtros grandes, hembras
    if (filters.bigs && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) => pets.id_tamanio === '1' && pets.genero_mascota === '2'
      );
    }

    // filtros, cachorros, gatos
    if (filters.puppies && filters.cats) {
      filter = response.data.mascotas.filter(
        (pets) =>
          ((pets.edad_mascota >= 1 &&
            pets.edad_mascota <= 25 &&
            pets.escala_edad === '1') ||
            (pets.edad_mascota <= 6 && pets.escala_edad === '2')) &&
          pets.id_tipo_mascota === '1'
      );
    }

    // filtros, cachorros, perros
    if (filters.puppies && filters.dogs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          ((pets.edad_mascota >= 1 &&
            pets.edad_mascota <= 25 &&
            pets.escala_edad === '1') ||
            (pets.edad_mascota <= 6 && pets.escala_edad === '2')) &&
          pets.id_tipo_mascota === '2'
      );
    }

    // filtros, cachorros, hamsters
    if (filters.puppies && filters.hamsters) {
      filter = response.data.mascotas.filter(
        (pets) =>
          ((pets.edad_mascota >= 1 &&
            pets.edad_mascota <= 25 &&
            pets.escala_edad === '1') ||
            (pets.edad_mascota <= 6 && pets.escala_edad === '2')) &&
          pets.id_tipo_mascota === '3'
      );
    }

    // filtros, jovenes, gatos
    if (filters.youngs && filters.cats) {
      filter = response.data.mascotas.filter(
        (pets) =>
          ((pets.edad_mascota >= 7 &&
            pets.edad_mascota <= 24 &&
            pets.escala_edad === '2') ||
            (pets.edad_mascota <= 2 && pets.escala_edad === '3')) &&
          pets.id_tipo_mascota === '1'
      );
    }

    // filtros, jovenes, perros
    if (filters.youngs && filters.dogs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          ((pets.edad_mascota >= 7 &&
            pets.edad_mascota <= 24 &&
            pets.escala_edad === '2') ||
            (pets.edad_mascota <= 2 && pets.escala_edad === '3')) &&
          pets.id_tipo_mascota === '2'
      );
    }

    // filtros, jovenes, hamsters
    if (filters.youngs && filters.hamsters) {
      filter = response.data.mascotas.filter(
        (pets) =>
          ((pets.edad_mascota >= 7 &&
            pets.edad_mascota <= 24 &&
            pets.escala_edad === '2') ||
            (pets.edad_mascota <= 2 && pets.escala_edad === '3')) &&
          pets.id_tipo_mascota === '3'
      );
    }

    // filtros, adultos, gatos
    if (filters.adults && filters.cats) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.edad_mascota >= 3 &&
          pets.edad_mascota <= 10 &&
          pets.escala_edad === '3' &&
          pets.id_tipo_mascota === '1'
      );
    }

    // filtros, adultos, perros
    if (filters.adults && filters.dogs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.edad_mascota >= 3 &&
          pets.edad_mascota <= 10 &&
          pets.escala_edad === '3' &&
          pets.id_tipo_mascota === '2'
      );
    }

    // filtros, adultos, hamsters
    if (filters.adults && filters.hamsters) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.edad_mascota >= 3 &&
          pets.edad_mascota <= 10 &&
          pets.escala_edad === '3' &&
          pets.id_tipo_mascota === '3'
      );
    }

    // filtros, viejos, gatos
    if (filters.olds && filters.cats) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.edad_mascota >= 11 &&
          pets.edad_mascota <= 25 &&
          pets.escala_edad === '3' &&
          pets.id_tipo_mascota === '1'
      );
    }

    // filtros, viejos, perros
    if (filters.olds && filters.dogs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.edad_mascota >= 11 &&
          pets.edad_mascota <= 25 &&
          pets.escala_edad === '3' &&
          pets.id_tipo_mascota === '2'
      );
    }

    // filtros, viejos, hamsters
    if (filters.olds && filters.hamsters) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.edad_mascota >= 11 &&
          pets.edad_mascota <= 25 &&
          pets.escala_edad === '3' &&
          pets.id_tipo_mascota === '3'
      );
    }

    /////////////////////////////////////////////////////////

    /////////////////////// Filtros 3 ///////////////////////

    // filtros gatos, perros, hamsters
    if (filters.cats && filters.dogs && filters.hamsters) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' ||
          pets.id_tipo_mascota === '2' ||
          pets.id_tipo_mascota === '3'
      );
    }

    // filtros pequeño, mediano y grande
    if (filters.smalls && filters.mediums && filters.bigs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tamanio === '3' ||
          pets.id_tamanio === '2' ||
          pets.id_tamanio === '1'
      );
    }

    // filtros gatos, pequeños, medianos
    if (filters.cats && filters.smalls && filters.mediums) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '2')
      );
    }

    // filtros gatos, pequeños, grandes
    if (filters.cats && filters.smalls && filters.bigs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '1')
      );
    }

    // filtros gatos, medianos, grandes
    if (filters.cats && filters.mediums && filters.bigs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.id_tamanio === '2' || pets.id_tamanio === '1')
      );
    }

    // filtros perros, pequeños, medianos
    if (filters.dogs && filters.smalls && filters.mediums) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '2')
      );
    }

    // filtros perros, pequeños, grandes
    if (filters.dogs && filters.smalls && filters.bigs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '1')
      );
    }

    // filtros perros, medianos, grandes
    if (filters.dogs && filters.mediums && filters.bigs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.id_tamanio === '2' || pets.id_tamanio === '1')
      );
    }

    // filtros gatos, perros, pequeños
    if (filters.cats && filters.dogs && filters.smalls) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.id_tamanio === '3'
      );
    }

    // filtros gatos, perros, medianos
    if (filters.cats && filters.dogs && filters.mediums) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.id_tamanio === '2'
      );
    }

    // filtros gatos, perros, grandes
    if (filters.cats && filters.dogs && filters.bigs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.id_tamanio === '1'
      );
    }

    // filtros, gatos, machos, hembras
    if (filters.cats && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros, perros, machos, hembras
    if (filters.dogs && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros, hamsters, machos, hembras
    if (filters.hamsters && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '3' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros, gatos, perros, machos
    if (filters.cats && filters.dogs && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros, gatos, perros, hembras
    if (filters.cats && filters.dogs && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros, gatos, hamsters, machos
    if (filters.cats && filters.hamsters && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '3') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros, gatos, hamsters, hembras
    if (filters.cats && filters.hamsters && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '3') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros, perros, hamsters, machos
    if (filters.dogs && filters.hamsters && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '2' || pets.id_tipo_mascota === '3') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros, perros, hamsters, hembras
    if (filters.dogs && filters.hamsters && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '2' || pets.id_tipo_mascota === '3') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros pequeños, machos, hembras
    if (filters.smalls && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tamanio === '3' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros medianos, machos, hembras
    if (filters.mediums && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tamanio === '2' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros grandes, machos, hembras
    if (filters.bigs && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tamanio === '1' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros pequeños, medianos, machos
    if (filters.smalls && filters.mediums && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tamanio === '3' || pets.id_tamanio === '2') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros pequeños, medianos, hembras
    if (filters.smalls && filters.mediums && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tamanio === '3' || pets.id_tamanio === '2') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros pequeños, grandes, machos
    if (filters.smalls && filters.bigs && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tamanio === '3' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros pequeños, grandes, hembras
    if (filters.smalls && filters.bigs && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tamanio === '3' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros, gatos, pequeños, machos
    if (filters.cats && filters.smalls && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          pets.id_tamanio === '3' &&
          pets.genero_mascota === '1'
      );
    }

    // filtros, gatos, pequeños, hembras
    if (filters.cats && filters.smalls && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          pets.id_tamanio === '3' &&
          pets.genero_mascota === '2'
      );
    }

    // filtros, perros, pequeños, machos
    if (filters.dogs && filters.smalls && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          pets.id_tamanio === '3' &&
          pets.genero_mascota === '1'
      );
    }

    // filtros, perros, pequeños, hembras
    if (filters.dogs && filters.smalls && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          pets.id_tamanio === '3' &&
          pets.genero_mascota === '2'
      );
    }

    // filtros hamsters no tienen tamaño

    // filtros, gatos, medianos, machos
    if (filters.cats && filters.mediums && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          pets.id_tamanio === '2' &&
          pets.genero_mascota === '1'
      );
    }

    // filtros, gatos, medianos, hembras
    if (filters.cats && filters.mediums && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          pets.id_tamanio === '2' &&
          pets.genero_mascota === '2'
      );
    }

    // filtros, perros, medianos, machos
    if (filters.dogs && filters.mediums && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          pets.id_tamanio === '2' &&
          pets.genero_mascota === '1'
      );
    }

    // filtros, perros, medianos, hembras
    if (filters.dogs && filters.mediums && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          pets.id_tamanio === '2' &&
          pets.genero_mascota === '2'
      );
    }

    // filtros hamsters no tienen tamaño
    // filtros hamsters no tienen tamaño

    // filtros, gatos, grandes, machos
    if (filters.cats && filters.bigs && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          pets.id_tamanio === '1' &&
          pets.genero_mascota === '1'
      );
    }

    // filtros, gatos, grandes, hembras
    if (filters.cats && filters.bigs && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          pets.id_tamanio === '1' &&
          pets.genero_mascota === '2'
      );
    }

    // filtros, perros, grandes, machos
    if (filters.dogs && filters.bigs && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          pets.id_tamanio === '1' &&
          pets.genero_mascota === '1'
      );
    }

    // filtros, perros, grandes, hembras
    if (filters.dogs && filters.bigs && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          pets.id_tamanio === '1' &&
          pets.genero_mascota === '2'
      );
    }

    // filtros hamsters no tienen tamaño

    // filtros medianos, grandes, machos
    if (filters.mediums && filters.bigs && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tamanio === '2' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros medianos, grandes, hembras
    if (filters.mediums && filters.bigs && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tamanio === '2' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '2'
      );
    }

    /////////////////////////////////////////////////////////

    /////////////////////// Filtros 4 ///////////////////////

    // filtros gatos, perros, pequeños, medianos
    if (filters.cats && filters.dogs && filters.smalls && filters.mediums) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '2')
      );
    }

    // filtros gatos, perros, pequeños, grandes
    if (filters.cats && filters.dogs && filters.smalls && filters.bigs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '1')
      );
    }

    // filtros gatos, perros, medianos, grandes
    if (filters.cats && filters.dogs && filters.mediums && filters.bigs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '2' || pets.id_tamanio === '1')
      );
    }

    // filtros gatos, pequeños, medianos, grandes
    if (filters.cats && filters.smalls && filters.mediums && filters.bigs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.id_tamanio === '3' ||
            pets.id_tamanio === '2' ||
            pets.id_tamanio === '1')
      );
    }

    // filtros perros, pequeños, medianos, grandes
    if (filters.dogs && filters.smalls && filters.mediums && filters.bigs) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.id_tamanio === '3' ||
            pets.id_tamanio === '2' ||
            pets.id_tamanio === '1')
      );
    }

    // filtros, gatos, perros, machos, hembras
    if (filters.cats && filters.dogs && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros, gatos, hamsters, machos, hembras
    if (filters.cats && filters.hamsters && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '3') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros, perros, hamsters, machos, hembras
    if (filters.dogs && filters.hamsters && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '2' || pets.id_tipo_mascota === '3') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros, gatos, perros, hamsters, machos
    if (filters.cats && filters.dogs && filters.hamsters && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' ||
            pets.id_tipo_mascota === '2' ||
            pets.id_tipo_mascota === '3') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros, gatos, perros, hamsters, hembras
    if (filters.cats && filters.dogs && filters.hamsters && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' ||
            pets.id_tipo_mascota === '2' ||
            pets.id_tipo_mascota === '3') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros pequeños, medianos, machos, hembras
    if (filters.smalls && filters.mediums && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tamanio === '3' || pets.id_tamanio === '2') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros pequeños, grandes, machos, hembras
    if (filters.smalls && filters.bigs && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tamanio === '3' || pets.id_tamanio === '1') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros gatos, pequeños, machos, hembras
    if (filters.cats && filters.smalls && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          pets.id_tamanio === '3' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros gatos, medianos, machos, hembras
    if (filters.cats && filters.mediums && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          pets.id_tamanio === '2' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros gatos, grandes, machos, hembras
    if (filters.cats && filters.bigs && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          pets.id_tamanio === '1' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros perros, pequeños, machos, hembras
    if (filters.dogs && filters.smalls && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          pets.id_tamanio === '3' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros perros, medianos, machos, hembras
    if (filters.dogs && filters.mediums && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          pets.id_tamanio === '2' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros perros, grandes, machos, hembras
    if (filters.dogs && filters.bigs && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          pets.id_tamanio === '1' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros gatos, perros, pequeños, machos
    if (filters.cats && filters.dogs && filters.smalls && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.id_tamanio === '3' &&
          pets.genero_mascota === '1'
      );
    }

    // filtros gatos, perros, pequeños, hembras
    if (filters.cats && filters.dogs && filters.smalls && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.id_tamanio === '3' &&
          pets.genero_mascota === '2'
      );
    }

    // filtros gatos, perros, medianos, machos
    if (filters.cats && filters.dogs && filters.mediums && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.id_tamanio === '2' &&
          pets.genero_mascota === '1'
      );
    }

    // filtros gatos, perros, medianos, hembras
    if (filters.cats && filters.dogs && filters.mediums && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.id_tamanio === '2' &&
          pets.genero_mascota === '2'
      );
    }

    // filtros gatos, perros, grandes, machos
    if (filters.cats && filters.dogs && filters.bigs && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.id_tamanio === '1' &&
          pets.genero_mascota === '1'
      );
    }

    // filtros gatos, perros, grandes, hembras
    if (filters.cats && filters.dogs && filters.bigs && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.id_tamanio === '1' &&
          pets.genero_mascota === '2'
      );
    }

    // filtros medianos, grandes, machos, hembras
    if (filters.mediums && filters.bigs && filters.males && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tamanio === '2' || pets.id_tamanio === '1') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros pequeños, medianos, grandes, machos
    if (filters.smalls && filters.mediums && filters.bigs && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tamanio === '3' ||
            pets.id_tamanio === '2' ||
            pets.id_tamanio === '1') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros pequeños, medianos, grandes, hembras
    if (filters.smalls && filters.mediums && filters.bigs && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tamanio === '3' ||
            pets.id_tamanio === '2' ||
            pets.id_tamanio === '1') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros gatos, pequeños, medianos, machos
    if (filters.cats && filters.smalls && filters.mediums && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '2') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros gatos, pequeños, medianos, hembras
    if (filters.cats && filters.smalls && filters.mediums && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '2') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros gatos, pequeños, grandes, machos
    if (filters.cats && filters.smalls && filters.bigs && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros gatos, pequeños, grandes, hembras
    if (filters.cats && filters.smalls && filters.bigs && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros gatos, medianos, grandes, machos
    if (filters.cats && filters.mediums && filters.bigs && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.id_tamanio === '2' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros gatos, medianos, grandes, hembras
    if (filters.cats && filters.mediums && filters.bigs && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.id_tamanio === '2' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros perros, pequeños, medianos, machos
    if (filters.dogs && filters.smalls && filters.mediums && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '2') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros perros, pequeños, medianos, hembras
    if (filters.dogs && filters.smalls && filters.mediums && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '2') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros perros, pequeños, grandes, machos
    if (filters.dogs && filters.smalls && filters.bigs && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros perros, pequeños, grandes, hembras
    if (filters.dogs && filters.smalls && filters.bigs && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros perros, medianos, grandes, machos
    if (filters.dogs && filters.mediums && filters.bigs && filters.males) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.id_tamanio === '2' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros perros, medianos, grandes, hembras
    if (filters.dogs && filters.mediums && filters.bigs && filters.females) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.id_tamanio === '2' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros, cachorros, jovenes, adultos, viejos
    if (filters.puppies && filters.youngs && filters.adults && filters.olds) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.edad_mascota >= 1 &&
            pets.edad_mascota <= 25 &&
            pets.escala_edad === '1') ||
          (pets.edad_mascota <= 6 && pets.escala_edad === '2') ||
          (pets.edad_mascota >= 7 &&
            pets.edad_mascota <= 24 &&
            pets.escala_edad === '2') ||
          (pets.edad_mascota <= 2 && pets.escala_edad === '3') ||
          (pets.edad_mascota >= 3 &&
            pets.edad_mascota <= 10 &&
            pets.escala_edad === '3') ||
          (pets.edad_mascota >= 11 &&
            pets.edad_mascota <= 25 &&
            pets.escala_edad === '3')
      );
    }

    /////////////////////////////////////////////////////////

    /////////////////////// Filtros 5 ///////////////////////

    // filtros gatos, perros, pequeños, medianos, grandes
    if (
      filters.cats &&
      filters.dogs &&
      filters.smalls &&
      filters.mediums &&
      filters.bigs
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '3' ||
            pets.id_tamanio === '2' ||
            pets.id_tamanio === '1')
      );
    }

    // filtros, gatos, perros, hamsters, machos, hembras
    if (
      filters.cats &&
      filters.dogs &&
      filters.hamsters &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' ||
            pets.id_tipo_mascota === '2' ||
            pets.id_tipo_mascota === '3') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros gatos, perros, pequeños, machos, hembras
    if (
      filters.cats &&
      filters.dogs &&
      filters.smalls &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.id_tamanio === '3' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros gatos, perros, medianos, machos, hembras
    if (
      filters.cats &&
      filters.dogs &&
      filters.mediums &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.id_tamanio === '2' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros gatos, perros, grandes, machos, hembras
    if (
      filters.cats &&
      filters.dogs &&
      filters.bigs &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          pets.id_tamanio === '1' &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros pequeños, medianos, grandes, machos, hembras
    if (
      filters.smalls &&
      filters.mediums &&
      filters.bigs &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tamanio === '3' ||
            pets.id_tamanio === '2' ||
            pets.id_tamanio === '1') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros gatos, pequeños, medianos, machos, hembras
    if (
      filters.cats &&
      filters.smalls &&
      filters.mediums &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '2') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros gatos, pequeños, gandes, machos, hembras
    if (
      filters.cats &&
      filters.smalls &&
      filters.bigs &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '1') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros gatos, medianos, grandes, machos, hembras
    if (
      filters.cats &&
      filters.mediums &&
      filters.bigs &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '1' &&
          (pets.id_tamanio === '2' || pets.id_tamanio === '1') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros perros, pequeños, medianos, machos, hembras
    if (
      filters.dogs &&
      filters.smalls &&
      filters.mediums &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '2') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros perros, pequeños, grandes, machos, hembras
    if (
      filters.dogs &&
      filters.smalls &&
      filters.bigs &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '1') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros perros, medianos, grandes, machos, hembras
    if (
      filters.dogs &&
      filters.mediums &&
      filters.bigs &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          pets.id_tipo_mascota === '2' &&
          (pets.id_tamanio === '2' || pets.id_tamanio === '1') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros gatos, perros, pequeños, medianos, machos
    if (
      filters.cats &&
      filters.dogs &&
      filters.smalls &&
      filters.mediums &&
      filters.males
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '2') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros gatos, perros, pequeños, medianos, hembras
    if (
      filters.cats &&
      filters.dogs &&
      filters.smalls &&
      filters.mediums &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '2') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros gatos, perros, pequeños, grandes, machos
    if (
      filters.cats &&
      filters.dogs &&
      filters.smalls &&
      filters.bigs &&
      filters.males
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros gatos, perros, pequeños, grandes, hembras
    if (
      filters.cats &&
      filters.dogs &&
      filters.smalls &&
      filters.bigs &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '2'
      );
    }

    // filtros gatos, perros, medianos, grandes, machos
    if (
      filters.cats &&
      filters.dogs &&
      filters.mediums &&
      filters.bigs &&
      filters.males
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '2' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros gatos, perros, medianos, grandes, hembras
    if (
      filters.cats &&
      filters.dogs &&
      filters.mediums &&
      filters.bigs &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '2' || pets.id_tamanio === '1') &&
          pets.genero_mascota === '2'
      );
    }

    /////////////////////////////////////////////////////////

    /////////////////////// Filtros 6 ///////////////////////

    // filtros gatos, perros, pequeños, medianos, machos, hembras
    if (
      filters.cats &&
      filters.dogs &&
      filters.smalls &&
      filters.mediums &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '2') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros gatos, perros, pequeños, grandes, machos, hembras
    if (
      filters.cats &&
      filters.dogs &&
      filters.smalls &&
      filters.bigs &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '3' || pets.id_tamanio === '1') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros gatos, perros, medianos, grandes, machos, hembras
    if (
      filters.cats &&
      filters.dogs &&
      filters.mediums &&
      filters.bigs &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '2' || pets.id_tamanio === '1') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    // filtros, gatos, perros, pequeños, medianos, grandes, machos
    if (
      filters.cats &&
      filters.dogs &&
      filters.smalls &&
      filters.mediums &&
      filters.bigs &&
      filters.males
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '3' ||
            pets.id_tamanio === '2' ||
            pets.id_tamanio === '1') &&
          pets.genero_mascota === '1'
      );
    }

    // filtros, gatos, perros, pequeños, medianos, grandes, hembras
    if (
      filters.cats &&
      filters.dogs &&
      filters.smalls &&
      filters.mediums &&
      filters.bigs &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '3' ||
            pets.id_tamanio === '2' ||
            pets.id_tamanio === '1') &&
          pets.genero_mascota === '2'
      );
    }

    /////////////////////////////////////////////////////////

    /////////////////////// Filtros 7 ///////////////////////

    // filtros, gatos, perros, pequeños, medianos, grandes, machos, hembras
    if (
      filters.cats &&
      filters.dogs &&
      filters.smalls &&
      filters.mediums &&
      filters.bigs &&
      filters.males &&
      filters.females
    ) {
      filter = response.data.mascotas.filter(
        (pets) =>
          (pets.id_tipo_mascota === '1' || pets.id_tipo_mascota === '2') &&
          (pets.id_tamanio === '3' ||
            pets.id_tamanio === '2' ||
            pets.id_tamanio === '1') &&
          (pets.genero_mascota === '1' || pets.genero_mascota === '2')
      );
    }

    /////////////////////////////////////////////////////////

    // // filtros ultima mascota agregada y ordenada de 1 a 3
    if (filters.id_tipo_mascota !== false) {
      filter = filter.reverse();
      filter = filter.sort((a, b) => a.id_tipo_mascota - b.id_tipo_mascota);
    }

    console.log(filter);

    dispatch({
      type: GET_SACI_PETS,
      payload: filter,
    });
  } catch (error) {
    console.log(error);
  }
};

export const page_saci_pets_action = (slicePets) => async (dispatch) => {
  dispatch({
    type: PAGE_SACI_PETS,
    payload: slicePets,
  });
};

export const select_pet_action = (id_mascota) => async (dispatch) => {
  dispatch({
    type: SELECT_PET_DATA,
    payload: id_mascota,
  });
};
