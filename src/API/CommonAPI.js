import * as axios from "axios";

export const getUserRating = (username,jwt) =>{
    return axios.get(`https://evasystemstankin.azurewebsites.net/api/Evaluation/get_user_rating/${username}`, {
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
        }
    });
};

export const getInterectedUsers = (username,jwt) =>{
    return axios.get(`https://evasystemstankin.azurewebsites.net/api/ClientData/get_interected_users/${username}`, {
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
        }
    });
};

export const addUserAvatar = (jwt,username,file) =>{
    const formData = new FormData();
    formData.append("userAvatarImage",file);
    return axios.post(`https://evasystemstankin.azurewebsites.net/api/ClientData/add_user_avatar/${username}`,formData,{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "multipart/form-data",
        }
    });
};