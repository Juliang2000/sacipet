import axiosClient from './axios';

//redux selector


export async function getPetSize(petData) {

    try {
        const response = await axiosClient.post('/razasTipoTamano', petData)
        console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function getHamsterRace(hamsterData) {

    try {
        const response = await axiosClient.post('/razas', hamsterData)
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function getDepartmentData() {

    try {
        const response = await axiosClient.get('/departamentos')
        return response
    } catch (e) {
        console.log(e)
    }
}

