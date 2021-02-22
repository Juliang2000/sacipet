import axiosClient from './axios';


export async function getSaciPets() {

    try {
        const pets = await axiosClient.get('/mascotas')
        return pets
    } catch (e) {
        console.log(e)
    }
}

export async function getPetPhotos(petPhotos) {

    const formData = new FormData();

    formData.append('consecutivo','1')
    formData.append('id_mascota', petPhotos)

    try {
        const petPhotos = await axiosClient.post('/files', formData)
        return petPhotos
    } catch (e) {
        console.log(e)
    }
}