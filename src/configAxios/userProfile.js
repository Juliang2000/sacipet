import axiosClient from './axios';

export async function saveUserEdit(editName) {
  try {
    const response = await axiosClient.post('/CambiarNombre', editName);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function savePhoneEdit(editPhone) {
  try {
    const response = await axiosClient.post('/CambiarTelefono', editPhone);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function saveEmailEdit(editEmail) {
  try {
    const response = await axiosClient.post('/CambiarEmail', editEmail);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function savePasswordEdit(editPassword) {
  try {
    const response = await axiosClient.post('/CambiarContrasena', editPassword);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function validatePasswordEdit(editPasswordCurrent) {

  console.log(editPasswordCurrent)
  const formData = new FormData();

formData.append('password', editPasswordCurrent.passwordCurrent);
formData.append('id', editPasswordCurrent.id);

  try {
    const response = await axiosClient.post(
      '/CompararContra',
      formData
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadPhotoEdit(userimage, id) {
  const formData = new FormData();

  formData.append('consecutivo', 1);
  formData.append('photo', userimage);
  formData.append('id_usuario', id);

  try {
    const response = await axiosClient.post('/upload2', formData);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
