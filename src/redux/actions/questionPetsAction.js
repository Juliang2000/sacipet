import {
  questionPet,
  answerPet,
  getQuestionAnswerPet
} from '../../configAxios/questionPets';
import { SEND_QUESTION_PET, SEND_ANSWER_PET, GET_QUESTION_ANSWER_PET } from '../types';

export const send_question_pet_action = (petdata) => async (dispatch) => {
  try {
    const response = await questionPet(petdata);
    console.log(response);
    dispatch({
      type: SEND_QUESTION_PET,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const send_answer_pet_action = (answerData) => async (dispatch) => {
  try {
    const response = await answerPet(answerData);
    console.log(response);
    dispatch({
      type: SEND_ANSWER_PET,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const get_question_answer_pet_action = (questionData) => async (
  dispatch
) => {
  try {
    const response = await getQuestionAnswerPet(questionData);

    let question_answer;

    if (!response.data.form) {
      question_answer = response.data;
    } else {
      question_answer = response.data.form.reverse();
    }

    console.log(response);
    dispatch({
      type: GET_QUESTION_ANSWER_PET,
      payload: question_answer
    });
  } catch (error) {
    console.log(error);
  }
};
