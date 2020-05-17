import * as axios from "axios";

export const getUserRating = (username,jwt) =>{
    return axios.get(`https://localhost:44337/api/Evaluation/get_user_rating/${username}`, {
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
        }
    });
};

export const getInterectedUsers = (username,jwt) =>{
    return axios.get(`https://localhost:44337/api/ClientData/get_interected_users/${username}`, {
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
        }
    });
};
