import * as axios from "axios";

export const loginOnServer = (email, password) => {
    return axios.post("https://evasystemstankin.azurewebsites.net/api/identity/login", {email, password}, {
        headers: {
            "accept": "*/*",
            "Content-Type": "application/json",
        }
    });
};

export const checkJWT = (jwt) => {
    return axios.get("https://evasystemstankin.azurewebsites.net/api/identity/check_jwt", {
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
        }
    });
};

export const getUserInfo = (username,jwt) =>{
    return axios.get(`https://evasystemstankin.azurewebsites.net/api/identity/get_user_info/${username}`, {
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
        }
    });
};