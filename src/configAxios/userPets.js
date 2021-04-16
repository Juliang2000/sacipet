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