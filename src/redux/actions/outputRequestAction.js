import getOutputReqPetsData from '../../configAxios/outputRequest';
import { GET_OUTPUT_REQ_PETS } from '../types';

export const get_output_request_pets_action = (id) => async (dispatch) => {
  try {
    const response = await getOutputReqPetsData(id);
    dispatch({
      type: GET_OUTPUT_REQ_PETS,
      payload: response
    });
  } catch (error) {
    console.log(error);
  }
};
