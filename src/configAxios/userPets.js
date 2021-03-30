import axiosClient from "./axios";

async function getUserPets(userId) {
    try {
        const response = await axiosClient.post('/obtenermascotasporusuario', userId);
        return response.data.form;
    } catch (e) {
        console.log(e);
    }
}

export default getUserPets;