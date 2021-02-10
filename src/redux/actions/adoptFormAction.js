import { GET_PET_SIZE_DATA, NEXT_STEP_ACTION, BACK_STEP_ACTION } from "../types";
import { getPetSize } from "../../configAxios/getPetSize"

// parámetros de tamaño de mascotas que se van a solicitar en la función sizepetData

// const { activeStep } = useSelector(state => state.activeStep);

// export function sizePetData(petData) {


//     return async (dispatch) => {
//         // dispatch(loginNormalStart())
//         // try para obtener datos de getSizePet duncion del cliente de axios por metodo get
//         try {
//             const response = await getPetSize(petData)
//             dispatch(get_pet_size_data(response))
//             // dispatch({ type: GET_PET_SIZE_DATA, payload: responsePetData })
//         } catch (error) {
//         }
//     }

// }


// export const get_pet_size_data = (razas) => ({
//     type: GET_PET_SIZE_DATA,
//     payload: razas
// });

// export const small_size_action = (petSize) => ({
//     type: SMALL_SIZE_PET_ACTION,
//     payload: petSize
// });

// export const medium_size_action = (petSize) => ({
//     type: MEDIUM_SIZE_PET_ACTION,
//     payload: petSize
// });

// export const big_size_action = (petSize) => ({
//     type: BIG_SIZE_PET_ACTION,
//     payload: petSize
// });

export const next_step_action = (activeStepState) => ({
    type: NEXT_STEP_ACTION,
    payload: activeStepState
});

export const back_step_action = (activeStepState) => ({
    type: BACK_STEP_ACTION,
    payload: activeStepState
});


