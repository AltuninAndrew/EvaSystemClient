import React, {useState} from 'react';
import classes from './AdminProfilePage.module.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Rating} from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar';
import {withStyles} from "@material-ui/styles";
import UserConnectionsEditComponent from "./UserEditConnectionsComponent/UserEditConntectionsComponent";
import {Field, reduxForm, reset} from "redux-form";
import CustomInputForReg from "../MainAdminPage/MainAdminPageComponents/CustomInputsForReg/CustomInputForReg";

const useStyles = makeStyles((theme) => ({
    paper_1: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    paper_2: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    avatar:{
        width: theme.spacing(24),
        height: theme.spacing(24),
    },
}));

const StyledRating = withStyles({
    iconFilled: {
        color: '#ffc000',
    },
})(Rating);

const ProfileElement = props => {
    const materialClasses = useStyles();
    return (
        <div>
            <Avatar variant="square" className={materialClasses.avatar} src={`data:image/jpeg;base64,${props.avatarImage}`}/>
            <div className={classes.user_info_wrapper}>
                <div className={classes.user_name_txt}>{props.userFullName}</div>
                <div className={classes.user_info_txt}>Должность: {props.position}</div>
                <div className={classes.user_info_txt}>Email: {props.email}</div>
                <div className={classes.user_rating_txt}>Средний рейтинг: {props.defRating}</div>
            </div>
        </div>
    );
};

const RatingElement = props => {
    return (
        <div>
            <Box component="fieldset" mb={2} mt={2} display="flex" borderColor="primary">
                <Typography component="legend">{props.title}</Typography>
                <StyledRating value={props.currValue} precision={0.5} max={10} readOnly/>
            </Box>
        </div>
    );
};

const EditDataInput = ({input, meta, ...props}) => {
    return (
        <div className={classes.editing_data_element}>
            <div className={classes.header_edit_input}>
                {props.headerLabel}
            </div>
            <input {...input} type={props.type} className={classes.input_data}/>
        </div>
    );
};

const EditDataForm = props =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={classes.edit_data_wrapper}>
                <div>
                    <div className={classes.editing_data_header_txt}>Изменение личных данных</div>
                    <Field
                        name={"newFirstName"}
                        component={EditDataInput}
                        headerLabel="Изменить имя"
                    />
                    <Field
                        name={"newLastName"}
                        component={EditDataInput}
                        headerLabel="Изменить фамилию"
                    />
                    <Field
                        name={"newMiddleName"}
                        component={EditDataInput}
                        headerLabel="Изменить отчество"
                    />
                    <Field
                        name={"newPosition"}
                        component={EditDataInput}
                        headerLabel="Изменить должность"
                    />
                    <Field
                        name={"newEmail"}
                        component={EditDataInput}
                        headerLabel="Изменить email"
                    />
                </div>
                <div>
                    <div className={classes.editing_data_header_txt}>Изменение пароля</div>
                    <Field
                        name={"oldPassword"}
                        component={EditDataInput}
                        headerLabel="Старый пароль"
                        type={"password"}
                    />
                    <Field
                        name={"newPassword"}
                        component={EditDataInput}
                        headerLabel="Новый пароль"
                        type={"password"}
                    />
                    <button className={classes.editing_pass_data_btn}>Сохранить изменения</button>
                </div>
            </div>
        </form>
    )
};

const afterSubmitForm = (result, dispatch) =>{
    dispatch(reset('editDataUser'));
};

const EditDataUserReduxForm = reduxForm({form: 'editDataUser', onSubmitSuccess: afterSubmitForm})(EditDataForm);

const EditDataElement = props => {

     const isEmpty = (object) => {
        return JSON.stringify(object) === "{}";
     };


    const onSubmitEditData = (formData) =>{
        if(!isEmpty(formData)){
            let changeRequest = {
                firstName:formData.newFirstName,
                lastName:formData.newLastName,
                middleName:formData.newMiddleName,
                position:formData.newPosition,
                email:formData.newEmail,
                oldPassword:formData.oldPassword,
                newPassword:formData.newPassword
            };
            props.changeUserData(props.username,props.jwt,changeRequest);
        }
    };

    const onUserDelete = () =>{

    };

    return (
        <div>
            <div className={classes.header_editing_block}>Редактирование пользователя</div>
            <EditDataUserReduxForm onSubmit={onSubmitEditData}/>
            <button onClick={onUserDelete} className={classes.delete_user_btn}>Удалить аккаунт</button>
        </div>
    );
};

const ManagerPanel = props => {
    let [labelState, setLabelState] = useState("Редактирование связей");
    let [dataEditingModeEnabled, setDataEditingModeEnabled] = useState(true);

    const stateChanger = () => {
        if (dataEditingModeEnabled === true) {
            setDataEditingModeEnabled(false);
            setLabelState("Редактирование пользователя")
        } else {
            setDataEditingModeEnabled(true);
            setLabelState("Редактирование связей");
        }
    };

    return (
        <div>
            <button className={classes.edit_state_btn} onClick={stateChanger}>
                {labelState}
            </button>
            <div className={classes.manager_panel_wrapper}>
                {dataEditingModeEnabled ? (<EditDataElement
                    changeUserData={props.changeUserData}
                    jwt={props.jwt}
                    username={props.username}
                />):(<UserConnectionsEditComponent userFirstName="Иван"/>)}
            </div>
        </div>
    );
};

const AdminProfilePage = props => {
    const material_classes = useStyles();

    let ratingElements = props.scorePerCriterion
        .map((rating,index) => (
            <RatingElement
                key={index}
                title={rating.criterionName}
                currValue={rating.score}
            />)
        );

    return (
        <div className={classes.background}>
            <Container maxWidth="md" className={classes.main_container}>
                <Grid container spacing={3}>
                    {/*левая колонка*/}
                    <Grid item xs={4}>
                        <div className={classes.left_column_header}>
                            Рейтинг сотрудника
                        </div>
                        <Paper className={material_classes.paper_1}>
                            {ratingElements}
                        </Paper>
                    </Grid>

                    {/*правая колонка*/}
                    <Grid item xs={8}>
                        <div className={classes.right_column_header}>
                            Сотрудник
                        </div>
                        <Paper className={material_classes.paper_2}>
                            <ProfileElement
                                userFullName={`${props.lastName} ${props.firstName} ${props.middleName}`}
                                avatarImage={props.avatarImage}
                                position={props.position}
                                email={props.email}
                                defRating={props.currentRating}
                            />
                            <ManagerPanel
                                changeUserData={props.changeUserData}
                                jwt={props.jwt}
                                username={props.username}
                            />
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default AdminProfilePage;