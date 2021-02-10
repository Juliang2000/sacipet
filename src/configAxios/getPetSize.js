import axiosClient from './axios';

//redux selector




export async function getPetSize(petData) {

    try {
        console.log()
        const response = await axiosClient.post('/razasTipoTamano', petData)
        console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }
}

