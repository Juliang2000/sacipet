import axiosClient from './axios';


export async function saveUserGoogle(userData) {
    try {
        console.log(userData)
        const formData = new FormData();

        formData.append('id_rol','1')
        formData.append('imageUrl', userData.profileObj.imageUrl)
        formData.append('name', userData.profileObj.name)
        formData.append('correo', userData.profileObj.email)
        formData.append('origen_cuenta','google')
        formData.append('token',userData.tokenObj.id_token)
        

        const response = await axiosClient.post('/login', formData);
    
        return response
    } catch (e) {
        console.log(e)
    }

}