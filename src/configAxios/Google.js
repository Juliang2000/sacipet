import axios from 'axios'





const baseURL = 'http://localhost:3000';


export async function saveGoogleUser(userData) {
    try {
        console.log(userData)
        const formData = new FormData();

        formData.append('id_rol','1')
        formData.append('imageUrl', userData.profileObj.imageUrl)
        formData.append('name', userData.profileObj.name)
        formData.append('correo', userData.profileObj.email)
        // formData.append('givenName', userData.profileObj.email)
        formData.append('origen_cuenta','google')
        formData.append('token',userData.tokenObj.id_token)
        

        const response = await axios({
            url: `${baseURL}/login`,
            method: 'POST',
            data: formData,
        })
        return response
    } catch (e) {
        console.log(e)
    }

}