const REG_NEW_USER = 'REG-NEW-USER';

let initialState = {
    users:[
        {
            firstName:"Иван",
            middleName:"Иванович",
            lastName:"Иванов",
            email:"sobaka@psina.com",
            avatar:"https://my.roomz.asia/avatar/2019/10/12/1570872461.png",
            position:"Разработчик",
            login:"ivanov"
        },
        {
            firstName:"Евгений",
            middleName:"Иванович",
            lastName:"Кшиштовский",
            email:"psina@psina.com",
            avatar:"https://my.roomz.asia/avatar/2019/10/12/1570872461.png",
            position:"Художник",
            login:"kshish"
        },
        {
            firstName:"Антон",
            middleName:"Антонович",
            lastName:"Суворов",
            email:"psina@psina.com",
            avatar:"https://my.roomz.asia/avatar/2019/10/12/1570872461.png",
            position:"Редактор",
            login:'suvorov'
        },
    ]
};

const adminReducer = (state = initialState, action)=>{
    if(action.type===REG_NEW_USER){
        let newUser = {
            firstName:action.newUser.firstName,
            middleName:action.newUser.middleName,
            lastName:action.newUser.lastName,
            email:action.newUser.email,
            avatar:action.newUser.avatar,
            position:action.newUser.position,
            login:action.newUser.login
        };

        return {
            ...state,
            users:[...state.users, newUser],
        };

    } else {
        return state;
    }

};

export const regNewUserCreator = (newUser) =>({type:REG_NEW_USER, newUser:newUser});

export default adminReducer;

