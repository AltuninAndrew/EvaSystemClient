import * as axios from "axios";

export const loginOnServer = (email,password)=>{
    return axios.post("https://localhost:44337/api/identity/get_all_users", {email,password},{
        headers: {
            "accept": "*/*",
            "Content-Type": "application/json",
        }
    });
};
