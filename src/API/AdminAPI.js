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