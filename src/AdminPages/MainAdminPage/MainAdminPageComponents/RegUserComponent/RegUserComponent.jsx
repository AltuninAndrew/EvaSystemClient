import classes from "./RegUserComponent.module.css";
import React from "react";
import {Field, reset, reduxForm} from "redux-form";
import {
    maxLengthCreator,
    passwordPolicy,
    required,
    minLengthCreator,
    emailValidator
} from "../../../../Validators/validators";
import CustomInputForReg from "../CustomInputsForReg/CustomInputForReg";

const maxLength30 = maxLengthCreator(30);
const minLength2 = minLengthCreator(2);
const minLength7 = minLengthCreator(7);

const RegUserForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.fields_wrapper}>
                <Field
                    placeholder={"Фамилия"}
                    name={"lastName"}
                    component={CustomInputForReg}
                    validate={[required, maxLength30, minLength2]}
                />

                <Field
                    placeholder={"Имя"}
                    name={"firstName"}
                    component={CustomInputForReg}
                    validate={[required, maxLength30, minLength2]}
                />

                <Field
                    placeholder={"Отчество"}
                    name={"middleName"}
                    component={CustomInputForReg}
                    validate={[required, maxLength30, minLength2]}
                />

                <Field
                    placeholder={"Должность"}
                    name={"position"}
                    component={CustomInputForReg}
                    validate={[required, maxLength30, minLength2]}
                />

                <Field
                    placeholder={"Email"}
                    name={"email"}
                    component={CustomInputForReg}
                    validate={[required, maxLength30, minLength2, emailValidator]}
                />

                <Field
                    placeholder={"Пароль"}
                    name={"password"}
                    type={"password"}
                    component={CustomInputForReg}
                    validate={[required, passwordPolicy,minLength7]}
                />
            </div>

            {
                props.error &&
                <div className={classes.common_error_message}>
                    {props.error}
                </div>
            }

            <button className={classes.user_reg_button}>
                Зарегистрировать
            </button>
        </form>
    );
};

const afterSubmit = (result, dispatch) =>{
    dispatch(reset('regUser'));
};

const RegUserReduxForm = reduxForm({form: 'regUser', onSubmitSuccess: afterSubmit})(RegUserForm);

const RegUserComponent = (props) => {

    const onSubmitForm = (formData) => {
        props.regNewUserInServer(props.jwt,formData.email,formData.password,
            formData.firstName,formData.middleName,formData.lastName,formData.position);
    };

    return (
        <div>
            <RegUserReduxForm onSubmit={onSubmitForm}/>
        </div>
    );
};

export default RegUserComponent;

