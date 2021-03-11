import axiosClient from './axios';



export async function getSaciPets() {

    try {
        const pets = await axiosClient.get('/mascotas')

        console.log(pets.data.mascotas);

        // let filterCats = pets.data.mascotas.filter(pets => pets.id_tipo_mascota === "1");
        // let filterDogs = pets.data.mascotas.filter(pets => pets.id_tipo_mascota === "2");
        // let filterHamsters = pets.data.mascotas.filter(pets => pets.id_tipo_mascota === "3");

        // console.log(filterCats);
        // console.log(filterDogs);
        // console.log(filterHamsters);


        // var filtersPetsFunction = pets.data.mascotas.filter(function (pets) {
        //     return pets.id_tipo_mascota === "1";
        // });

        // console.log(filtersPetsFunction);




        return pets
    } catch (e) {
        console.log(e)
    }
}

export async function getPetPhotos(petPhotos) {


    const formData = new FormData();

    formData.append('consecutivo', '1')
    formData.append('id_mascota', petPhotos)

    try {
        let { petPhoto } = await axiosClient.post('/files', formData)
        petPhotos = new Image();
        return petPhotos
    } catch (e) {
        console.log(e)
    }
}