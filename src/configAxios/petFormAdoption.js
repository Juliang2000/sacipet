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

export async function savePetAdoption(petData) {
    try {
        console.log(petData)

        const formData = new FormData();

        formData.append('id_usuario', petData.id_usuario)
        formData.append('tipo_tramite', petData.tipo_tramite)
        formData.append('nombre_mascota', petData.nombre_mascota)
        formData.append('edad_mascota', petData.edad_mascota)
        formData.append('escala_edad', petData.escala_edad)
        formData.append('esterilizado', petData.esterilizado)
        formData.append('id_tamanio', petData.id_tamanio)
        formData.append('id_raza', petData.id_raza)
        formData.append('genero_mascota', petData.genero_mascota)
        formData.append('id_color', petData.id_color)
        formData.append('id_vacuna_Rabia', petData.id_vacuna_Rabia)
        formData.append('id_vacuna_Rinotraqueítis', petData.id_vacuna_Rinotraqueítis)
        formData.append('id_vacuna_Parvovirus', petData.id_vacuna_Parvovirus)
        formData.append('id_vacuna_Moquillo', petData.id_vacuna_Moquillo)
        formData.append('id_codigo', petData.id_codigo)
        formData.append('descripcion_mascota', petData.descripcion_mascota)

        const response = await axiosClient.post('/mascotas', formData);
        console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }

}

