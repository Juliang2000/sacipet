import axiosClient from './axios';


export async function saveUserRegister(userData) {
    try {
        console.log(userData)
        const formData = new FormData();

        formData.append('nombres', userData.nombres)
        formData.append('apellidos', userData.apellidos)
        formData.append('telefono', userData.telefono)
        formData.append('correo', userData.correo)
        formData.append('documento', userData.documento)
        formData.append('password', userData.password)
        formData.append('passwordCheck', userData.passwordCheck)
        formData.append('origen_cuenta', userData.origen_cuenta)
        formData.append('id_rol', userData.id_rol)

        const response = await axiosClient.post('/registro', formData);
        
        return response
    } catch (e) {
        console.log(e)
    }

}