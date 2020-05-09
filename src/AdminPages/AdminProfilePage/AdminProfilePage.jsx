import React, {useState} from 'react';
import classes from './AdminProfilePage.module.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {withRouter} from "react-router-dom"
import {Rating} from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar';
import {withStyles} from "@material-ui/styles";
import UserConnectionsEditComponent from "./UserEditConnectionsComponent/UserEditConntectionsComponent";

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
            <Avatar variant="square" className={materialClasses.avatar} src={props.avatarLink}/>
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

const EditDataElement = props => {

    const EditDataInput = props => {
        return (
            <div className={classes.editing_data_element}>
                <div className={classes.header_edit_input}>
                    {props.headerLabel}
                </div>
                <input className={classes.input_data}/>
            </div>
        );
    };

    return (
        <div>
            <div className={classes.header_editing_block}>Редактирование пользователя</div>

            <div className={classes.edit_data_wrapper}>
                <div className={classes.editing_personal_data}>
                    <div className={classes.editing_data_header_txt}>Изменение личных данных</div>
                    <EditDataInput
                        headerLabel="Изменить имя"
                    />
                    <EditDataInput
                        headerLabel="Изменить фамилию"
                    />
                    <EditDataInput
                        headerLabel="Изменить отчество"
                    />
                    <EditDataInput
                        headerLabel="Изменить должность"
                    />
                    <EditDataInput
                        headerLabel="Изменить email"
                    />
                </div>
                <div className={classes.editing_pass_data}>
                    <div className={classes.editing_data_header_txt}>Изменение пароля</div>
                    <EditDataInput
                        headerLabel="Старый пароль"
                    />
                    <EditDataInput
                        headerLabel="Новый пароль"
                    />
                    <button>Сохранить изменения</button>
                    <button>Удалить аккаунт</button>
                </div>
            </div>

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
                {dataEditingModeEnabled ? (<EditDataElement/>):(<UserConnectionsEditComponent userFirstName="Иван"/>)}
            </div>
        </div>
    );
};

const AdminProfilePage = props => {
    const material_classes = useStyles();
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

                            <RatingElement
                                currValue={6.5}
                                title='Продуктивность'
                            />

                            <RatingElement
                                currValue={4.5}
                                title='Креативность'
                            />

                            <RatingElement
                                currValue={8}
                                title='Скорость работы'
                            />

                            <RatingElement
                                currValue={10}
                                title='Коммуникативные навыки'
                            />

                        </Paper>
                    </Grid>

                    {/*правая колонка*/}
                    <Grid item xs={8}>
                        <div className={classes.right_column_header}>
                            Сотрудник
                        </div>
                        <Paper className={material_classes.paper_2}>
                            <ProfileElement
                                userFullName="Иванов Иван Иванович"
                                avatarLink="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                                position="Разработчик"
                                email="ivanov@mail.ru"
                                defRating="8.1"
                            />
                            <ManagerPanel/>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

let WT = withRouter(AdminProfilePage);

export default WT;