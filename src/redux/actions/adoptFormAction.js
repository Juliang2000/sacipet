import { GET_PET_SIZE, SAVE_PET_FORM_ACTION } from "../types";
import { getPetSize, petFormAdoption } from "../../configAxios/petFormAdoption"

// parámetros de tamaño de mascotas que se van a solicitar en la función sizepetData
export function sizePetData(petData) {
    return async (dispatch) => {

        // dispatch(loginNormalStart())
// try para obtener datos de getSizePet duncion del cliente de axios por metodo get
        try {
            const response = await getPetSize(petData)
            const responseForm = await petFormAdoption()
            // console.log(response)

            // setTimeout(() => {

            // dispatch que trae los datos del api de tamaños, repuesta de axios
            // dispatch(put_pet_size_data(response));
            // console.log(response)
            // }, 3000);


            } catch (error) {

            }
        }

    }

export const get_size_pet_data = (petSize) => ({
    type: GET_PET_SIZE,
    payload: petSize
});

export const save_pet_form_action = (petForm) => ({
    type: SAVE_PET_FORM_ACTION,
    payload: petForm
});

