export const required = (value) =>{
    if(value) return undefined;
    return "Поле необходимо заполнить";
};

export const maxLengthCreator = (maxLength) => (value) =>{
    if(value.length>maxLength) return `Длина должна быть меньше ${maxLength}`;
    return undefined;
};

export const minLengthCreator = (minLength) => (value) =>{
    if(value.length<minLength) return `Длина должна быть больше или равна ${minLength}`;
    return undefined;
};

export const passwordPolicy = (value) =>{
    if(!(value.toString().match(/\d+/g)))
        return "В пароле должна быть хотя бы одна цифра";
    return undefined;
};

export const emailValidator = (value) =>{
    let policy = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!policy.test(value.toString().toLowerCase()))
        return "Адресс email указан некорректно";
    return undefined;
};