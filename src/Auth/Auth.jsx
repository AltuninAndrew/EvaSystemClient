import React from 'react';
import classes from './Auth.module.css';
import './CanvasStyle.css';
import TextField from "@material-ui/core/TextField";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#fcb644'
            },
            secondary: {
                main: '#000000'
            }
        },
    },
);

const Auth = (props) => {
    return (
        <div className={classes.background}>
            <div className={classes.auth_container}>
                <header className={classes.auth_container_header}>
                    <h1 className={classes.auth_container_header_text}>
                        Вход
                    </h1>
                </header>
                <MuiThemeProvider theme={theme}>
                    <div className={classes.auth_input}>
                        <TextField
                            color='secondary'
                            variant="filled"
                            margin="normal"
                            required
                            id="email"
                            fullWidth
                            label="Email"
                            name="email"
                            autoComplete="email"
                        />

                        <TextField
                            color='secondary'
                            variant="filled"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </div>

                    <div className={classes.auth_enter}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            href='admin'
                        >
                            <div className={classes.auth_enter_text}>
                                Войти
                            </div>
                        </Button>
                    </div>
                </MuiThemeProvider>


            </div>

            <div className={classes.main_text}>
                <h1>
                    EvaSystem - оценка сотрудников
                </h1>
            </div>


        </div>
    );
};


export default Auth;