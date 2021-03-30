import axiosClient from './axios';

export async function saveAdoptMeForm(formData) {
    try {

        const response = await axiosClient.post('/formulario', formData);
        console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }

}

export default saveAdoptMeForm;