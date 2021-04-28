import { GET_OUTPUT_REQ_PETS } from "../types";

const initialState = {
  outputRequestData: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_OUTPUT_REQ_PETS:
      return {
        ...state,
        outputRequestData: action.payload
      };
    default:
      return state;
  }
};
