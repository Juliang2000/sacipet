import axiosClient from './axios';

//redux selector


export async function getPetSize(petData) {

    try {
        const response = await axiosClient.post('/razasTipoTamano', petData)
        console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function getHamsterRace(hamsterData) {

    try {
        const response = await axiosClient.post('/razas', hamsterData)
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function getDepartmentData() {

    try {
        const response = await axiosClient.get('/departamentos')
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function registryPetAdoption(newPet) {
    try {

        const response = await axiosClient.post('/mascotas', newPet);
        console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }

}

export async function getCityData(depData) {

    try {
        const response = await axiosClient.post('/municipios', depData)
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function uploadImagesAdoption(petimage1, id_mascota) {
    const formData = new FormData();

    formData.append('consecutivo', 1)
    formData.append('photo', petimage1)
    formData.append('id_mascota', id_mascota)

    try {
        const response = await axiosClient.post('/upload', formData)
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function uploadPetImage2(petimage2, id_mascota) {
    const formData = new FormData();

    formData.append('consecutivo', 2)
    formData.append('photo', petimage2)
    formData.append('id_mascota', id_mascota)

    try {
        const response = await axiosClient.post('/upload', formData)
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function uploadPetImage3(petimage3, id_mascota) {
    const formData = new FormData();

    formData.append('consecutivo', 3)
    formData.append('photo', petimage3)
    formData.append('id_mascota', id_mascota)

    try {
        const response = await axiosClient.post('/upload', formData)
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function uploadPetImage4(petimage4, id_mascota) {
    const formData = new FormData();

    formData.append('consecutivo', 4)
    formData.append('photo', petimage4)
    formData.append('id_mascota', id_mascota)

    try {
        const response = await axiosClient.post('/upload', formData)
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function uploadPetImage5(petimage5, id_mascota) {
    const formData = new FormData();

    formData.append('consecutivo', 5)
    formData.append('photo', petimage5)
    formData.append('id_mascota', id_mascota)

    try {
        const response = await axiosClient.post('/upload', formData)
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function updateFormData(descriptionData) {
    try {
        const response = await axiosClient.post('/ActualizarMascota', descriptionData)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}


