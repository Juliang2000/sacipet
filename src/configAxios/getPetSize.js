import axiosClient from './axios';


// export async function getPetSize() {

//     try {


//         const petData =
//         {
//             id_tipo_mascota: '2',
//             id_tamanio: '1'
//         }



//         const response = await axiosClient.get('/razasTipoTamano', {
//             params: {

//                 id_tipo_mascota: '2',
//                 id_tamanio: '1'

//             }
//         })


//         console.log(response)
//         return response

//     } catch (e) {
//         console.log(e)
//     }
// }

// export function getPetSize() {

//     axiosClient.get('/razasTipoTamano', {

//         params: {
//             id_tipo_mascota: 2,
//             id_tamanio: 1
//         }
//     })
//         .then(function (response) {
//             console.log(response);
//         })

// }

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

