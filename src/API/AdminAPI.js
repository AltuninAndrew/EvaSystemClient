import * as axios from "axios";

export const getUsers = (jwt)=>{
    return axios.get("https://localhost:44337/api/identity/get_all_users", {
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
        }
    }).then( response =>{
       return response.data;
    });
};

export const regUser = (jwt,email,password,firstName,middleName,lastName,position) => {
    return axios.post("https://localhost:44337/api/identity/client_register", {email, password,firstName,middleName,lastName,position},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};