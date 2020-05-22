import * as axios from "axios";

export const getUsers = (jwt)=>{
    return axios.get("https://evasystemstankin.azurewebsites.net/api/identity/get_all_users", {
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
        }
    }).then( response =>{
       return response.data;
    });
};

export const regUser = (jwt,email,password,firstName,middleName,lastName,position) => {
    return axios.post("https://evasystemstankin.azurewebsites.net/api/identity/client_register", {email, password,firstName,middleName,lastName,position},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const deleteUser = (username,jwt) =>{
   return axios.delete(`https://evasystemstankin.azurewebsites.net/api/ClientData/delete_user/${username}`,{
       headers: {
           "accept": "*/*",
           "Authorization": `bearer ${jwt}`,
       }
   })
};

export const changeUserFirstName = (username,jwt,newFirstName) =>{
    return axios.put(`https://evasystemstankin.azurewebsites.net/api/ClientData/change_first_name/${username}`,{newFirstName},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const changeUserMiddleName = (username,jwt,newMiddleName) =>{
    return axios.put(`https://evasystemstankin.azurewebsites.net/api/ClientData/change_middle_name/${username}`, {newMiddleName},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const changeUserLastName = (username,jwt,newLastName) =>{
    return axios.put(`https://evasystemstankin.azurewebsites.net/api/ClientData/change_last_name/${username}`, {newLastName},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const changeUserEmail = (username,jwt,newEmail) =>{
    return axios.put(`https://evasystemstankin.azurewebsites.net/api/ClientData/change_email/${username}`, {newEmail},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const changeUserPosition = (username,jwt,newPosition) =>{
    return axios.put(`https://evasystemstankin.azurewebsites.net/api/ClientData/change_position/${username}`,{newPosition},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const changeUserPassword = (username,jwt,oldPassword,newPassword) =>{
    return axios.put(`https://evasystemstankin.azurewebsites.net/api/ClientData/change_password/${username}`,{oldPassword,newPassword},{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const getUsersForInteract = (username,jwt,) => {
    return axios.get(`https://evasystemstankin.azurewebsites.net/api/ClientData/get_users_for_interact/${username}`,{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
        }
    });
};

export const addCommunicationBtwUsers = (username,jwt,interectedUsersName) =>{
    return axios.post(`https://evasystemstankin.azurewebsites.net/api/ClientData/add_interected_users/${username}`, interectedUsersName,{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const deleteCommunicationBtwUsers = (username,jwt,interactedUserName) =>{
    return axios.delete(`https://evasystemstankin.azurewebsites.net/api/ClientData/delete_interected_users/${username}`,{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
        },
        data:{interactedUserName}
    });
};

export const getPositions = (jwt)=>{
    return axios.get(`https://evasystemstankin.azurewebsites.net/api/Evaluation/get_all_positions`,{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
        }
    });
};

export const addCriterions = (jwt,positionName,name,weight) =>{
    return axios.post(`https://evasystemstankin.azurewebsites.net/api/Evaluation/add_criterions/?positionName=${positionName}`,[{name,weight}],{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    });
};

export const deleteCriterions = (jwt,positionName,criterionName) =>{
    return axios.delete(`https://evasystemstankin.azurewebsites.net/api/Evaluation/delete_criterions/${positionName}`,{
        headers: {
            "accept": "*/*",
            "Authorization": `bearer ${jwt}`,
            "Content-Type": "application/json",
        },
        data:{criterionsName:[criterionName]}
    });
};
