import { SEND_QUESTION_PET, SEND_ANSWER_PET, GET_QUESTION_ANSWER_PET } from '../types';

const initialState = {
  question: null,
  answer: null,
  questionAnswerData: {
    form: null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_QUESTION_PET:
      return {
        ...state,
        question: action.payload
      };

    case SEND_ANSWER_PET:
      return {
        ...state,
        answer: action.payload
      }


    case GET_QUESTION_ANSWER_PET:
      return {
        ...state,
        questionAnswerData: action.payload
      };

    default:
      return state;
  }
};
