import axiosClient from './axios';


export async function saveFbUser(userData) {
    try {
        console.log(userData)
        const formData = new FormData();

        formData.append('id_rol','1')
        formData.append('correo', userData.email)
        formData.append('password', 'passwordConstante')
        formData.append('origen_cuenta','facebook')
        formData.append('userID',userData.userID)
        formData.append('token',userData.accessToken)
        

        const response = await axiosClient.post('/login', formData);
        
        return response
    } catch (e) {
        console.log(e)
    }

}