import React from 'react';
import classes from './Auth.module.css';
import CustomInput from './CustomInputs/CustomInput'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../Validators/validators";

const maxLength100 = maxLengthCreator(30);

const MainLoginFormElement = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.inputs_wrapper}>
                <div>
                    <Field
                        placeholder={"Email"}
                        name={"email"}
                        component={CustomInput}
                        className={classes.input}
                        validate={[required, maxLength100]}
                    />
                </div>

                <div>
                    <Field
                        placeholder={"Пароль"}
                        name={"password"}
                        component={CustomInput}
                        type={"password"}
                        className={classes.input}
                        validate={[required]}
                    />
                </div>
            </div>

            {
                props.error &&
                <div className={classes.wrong_input}>
                    {props.error}
                </div>
            }

            <div>
                <button className={classes.form_submit_btn}>Войти</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(MainLoginFormElement);

const Auth = (props) => {

    const onSubmitForm = (formData) => {
        console.log(formData);
    };

    return (
        <div className={classes.background}>
            <div className={classes.auth_container}>

                <header className={classes.auth_container_header}>
                    <h1 className={classes.auth_container_header_text}>
                        Вход
                    </h1>
                </header>

                <LoginReduxForm onSubmit={onSubmitForm}/>

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