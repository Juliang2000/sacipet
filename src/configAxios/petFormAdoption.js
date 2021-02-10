import axiosClient from './axios';


export async function petFormAdoption(formAdoptionData) {
    try {
        console.log(formAdoptionData)

       
        

        const response = await axiosClient.post('/mascotas', formAdoptionData);

        return response
    } catch (e) {
        console.log(e)
    }

}

export async function getPetSize(petData) {
    console.log(petData)

    //     try {


    //         const formData = new FormData();
    //         formData.append('id_tipo_mascota', petData.id_tipo_mascota)
    //         formData.append('id_tamanio', petData.id_tamanio)

    //         const response = await axiosClient.post('/razasTipoTamano', formData)
    //         // const response = await data.json()
    //         // console.log(response)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    try {
        console.log()
        // const formData = new FormData();

        // formData.append("id_tipo_mascota", "1")
        // formData.append("id_tamanio", "2")
        // formData.append('id_tipo_mascota', '1')
        // formData.append('id_tamanio', '2')



        const response = await axiosClient.post('/razasTipoTamano', petData)
        console.log(response)
        return response
        
    } catch (e) {
        console.log(e)
    }
}