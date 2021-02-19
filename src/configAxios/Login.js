import axiosClient from './axios';


export async function saveUserLogin(userData) {
    try {
        console.log(userData)
        const formData = new FormData();

        formData.append('password', userData.password)
        formData.append('correo', userData.correo)
        formData.append('origen_cuenta', userData.origen_cuenta)
        

        const response = await axiosClient.post('/login', formData);
        console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }

}

export async function LoginUserRegistered(userLog) {
    try {
        const formData = new FormData();

        formData.append('password', userLog.password)
        formData.append('correo', userLog.correo)
        formData.append('origen_cuenta', 'Registro_normal')
        

        const response = await axiosClient.post('/login', formData);
        console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }

}

// export async function saveGoogleUser(userData) {
//     try {
//         console.log(userData)
//         const formData = new FormData();

//         formData.append('googleId', userData.googleId)
//         formData.append('imageUrl', userData.imageUrl)
//         formData.append('name', userData.name)
//         formData.append('email', userData.email)
//         formData.append('givenName', userData.email)
        

//         const response = await axios({
//             url: `${baseURL}/login`,
//             method: 'POST',
//             data: formData,
//         })
//         return response
//     } catch (e) {
//         console.log(e)
//     }

// }