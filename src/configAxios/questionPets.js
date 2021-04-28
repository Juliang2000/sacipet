import axiosClient from './axios';

export async function questionPet(petdata) {
  try {
    const response = await axiosClient.post('/pregunta', petdata);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function answerPet(answerData) {
  try {
    const response = await axiosClient.post('/respuesta', answerData);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getQuestionAnswerPet(questionData) {
  try {
    const response = await axiosClient.post('/ObtenerPreguntaRespuesta', questionData);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
