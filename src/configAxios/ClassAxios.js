// import Axios from "axios";

// class AxiosClient {
//     constructor() {}
//     async getAxios(identifier, hash) {
//         const { data } = await Axios.get(process.env.REACT_APP_API_URL);

//         if (Array.isArray(data)) {

//             const url = data.filter(item => item.id === identifier)
//             const response = await Axios.get(url[0].url + hash)
//             return response;

//         } else {

//             const response = await Axios.get(data[identifier] + hash)
//             return response;

//         }
//     }
//     async postAxios(identifier, hash, info) {
//         const { data } = await Axios.get(process.env.REACT_APP_API_URL);

//         if (Array.isArray(data)) {

//             const url = data.filter(item => item.id === identifier)
//             const response = await Axios.post(url[0].url + hash, info)
//             return response;

//         } else {

//             const response = await Axios.post(data[identifier] + hash, info)
//             return response;

//         }
//     }
// }

// const axiosClient = new AxiosClient();

// export default axiosClient;