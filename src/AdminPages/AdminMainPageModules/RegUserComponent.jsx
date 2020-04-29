import classes from "../MainAdminPage.module.css";
import TextField from "@material-ui/core/TextField";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import React from "react";


const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#000000'
            },
        },
    },
);

const RegUserComponent = (props) => {
    return(
        <MuiThemeProvider theme={theme}>
            <div>
                <div className={classes.user_reg_element}>
                    <TextField required id="second-name" label="Фамилия"/>
                </div>
                <div className={classes.user_reg_element}>
                    <TextField required id="first-name" label="Имя"/>
                </div>
                <div className={classes.user_reg_element}>
                    <TextField required id="middle-name" label="Отчество"/>
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
                <button className={classes.user_reg_button}>
                    Зарегистрировать
                </button>
            </div>
        </MuiThemeProvider>
    );
};

export default RegUserComponent;

