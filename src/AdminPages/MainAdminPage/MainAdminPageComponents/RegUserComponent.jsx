import classes from "../MainAdminPage.module.css";
import TextField from "@material-ui/core/TextField";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import React, {useState} from "react";



const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#000000'
            },
        },
    },
);

const RegUserComponent = (props) => {

    /*некоторый тестовый говнокод*/

    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [middleName, setMiddleName] = useState('');

    const firstNameChanger = (e)=> {
        setFirstName(e.target.value);
    };

    const lastNameChanger = (e)=> {
        setLastName(e.target.value);
    };

    const middleNameChanger = (e)=> {
        setMiddleName(e.target.value);
    };

    const onRegNewUser=()=>{
        let someUser =  {
                firstName:firstName,
                middleName:middleName,
                lastName:lastName,
                email:"test@psina.com",
                avatar:"https://my.roomz.asia/avatar/2019/10/12/1570872461.png",
                position:"Дизайнер",
                login:'cum'
            };
        props.regNewUser(someUser);
        setFirstName('');
        setLastName('');
        setMiddleName('');
    };

    return(
        <MuiThemeProvider theme={theme}>
            <div>
                <div className={classes.user_reg_element}>
                    <TextField required id="second-name" label="Фамилия" value={lastName} onChange={lastNameChanger}/>
                </div>
                <div className={classes.user_reg_element}>
                    <TextField required id="first-name" label="Имя" value={firstName} onChange={firstNameChanger} valueL/>
                </div>
                <div className={classes.user_reg_element}>
                    <TextField required id="middle-name" label="Отчество" value={middleName} onChange={middleNameChanger}/>
                </div>

                <div className={classes.user_reg_element}>
                    <TextField required id="position" label="Должность"/>
                </div>

                <div className={classes.user_reg_element}>
                    <TextField required id="email-address" label="Email"/>
                </div>

                <div className={classes.user_reg_element}>
                    <TextField required id="password" label="Придумайте пароль"/>
                </div>
                <button className={classes.user_reg_button} onClick={onRegNewUser}>
                    Зарегистрировать
                </button>
            </div>
        </MuiThemeProvider>
    );
};

export default RegUserComponent;

