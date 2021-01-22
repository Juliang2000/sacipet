import axios from 'axios'





const baseURL = 'http://localhost:3000';


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
        
        
        // formData.append('givenName', userData.profileObj.email)
        // formData.append('origen_cuenta','google')
        
        

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