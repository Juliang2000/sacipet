import axiosClient from './axios';

export async function saveAdoptMeForm(formData) {
  try {
    const response = await axiosClient.post('/formulario', formData);
    console.log(response);

    const formDataPets = new FormData();

    formDataPets.append('id_mascota', formData.id_mascota);
    formDataPets.append('id_formulario', response.data.form[0].id_formulario);

    await axiosClient.post('/formulariomascota', formDataPets);

    return response;
  } catch (e) {
    console.log(e);
  }
}

export default saveAdoptMeForm;