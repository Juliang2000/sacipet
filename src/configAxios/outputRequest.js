import axiosClient from './axios';

async function getOutputReqPetsData(id) {
  try {
    const response = await axiosClient.post('/solicitudes', id);
    return response.data.form;
  } catch (error) {
    console.log(error);
  }
}

export default getOutputReqPetsData;
