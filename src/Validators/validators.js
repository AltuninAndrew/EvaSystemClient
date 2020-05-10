export const required = (value) =>{
    if(value) return undefined;
    return "Поле необходимо заполнить";
};

export const maxLengthCreator = (maxLength) => (value) =>{
    if(value.length>maxLength) return `Длина должна быть меньше ${maxLength}`;
    return undefined;
};