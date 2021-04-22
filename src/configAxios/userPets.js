import axiosClient from "./axios";

async function getUserPets(userId) {
    try {
        const response = await axiosClient.post('/mascotasDesactivadas', userId);
        return response.data.mascotas;
    } catch (e) {
        console.log(e);
    }
}

export async function publishPet(data) {
    try {
        const response = await axiosClient.post('/PublicacionMascota', data);
        return response.data;

    } catch (e) {
        console.log(e);
    }
}

export default getUserPets;

export async function userPetRequest(userId) {
    try {
        const response = await axiosClient.post('/MacotasRegistradas', userId);
        return response.data.form;

    } catch (e) {
        console.log(e);
    }
}
