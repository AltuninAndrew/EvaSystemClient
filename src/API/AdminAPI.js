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

export const deleteUser = (username,jwt) =>{
   return axios.delete(`https://localhost:44337/api/ClientData/delete_user/${username}`,{
       headers: {
           "accept": "*/*",
           "Authorization": `bearer ${jwt}`,
       }
   })
};

export const changeUserFirstName = (username,jwt,newFirstName) =>{
    return axios.put(`https://localhost:44337/api/ClientData/change_first_name/${username}`,{newFirstName},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const changeUserMiddleName = (username,jwt,newMiddleName) =>{
    return axios.put(`https://localhost:44337/api/ClientData/change_middle_name/${username}`, {newMiddleName},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const changeUserLastName = (username,jwt,newLastName) =>{
    return axios.put(`https://localhost:44337/api/ClientData/change_last_name/${username}`, {newLastName},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const changeUserEmail = (username,jwt,newEmail) =>{
    return axios.put(`https://localhost:44337/api/ClientData/change_email/${username}`, {newEmail},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const changeUserPosition = (username,jwt,newPosition) =>{
    return axios.put(`https://localhost:44337/api/ClientData/change_position/${username}`,{newPosition},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const changeUserPassword = (username,jwt,oldPassword,newPassword) =>{
    return axios.put(`https://localhost:44337/api/ClientData/change_password/${username}`,{oldPassword,newPassword},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const getUsersForInteract = (username,jwt,) => {
    return axios.get(`https://localhost:44337/api/ClientData/get_users_for_interact/${username}`,{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
        }
    });
};

export const addCommunicationBtwUsers = (username,jwt,interectedUsersName) =>{
    return axios.post(`https://localhost:44337/api/ClientData/add_interected_users/${username}`,interectedUsersName,{
        "accept": "*/*",
        "Authorization": `bearer ${jwt}`,
    })
};

export const deleteCommunicationBtwUsers = (username,jwt,interectedUserName) =>{
    return axios.delete(`https://localhost:44337/api/ClientData/delete_interected_users/${username}`,{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
        },
        data: {interectedUserName}
    });
};
