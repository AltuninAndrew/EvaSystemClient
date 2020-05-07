import React from 'react';
import classes from './MainAdminPage.module.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RegUserComponent from "./MainAdminPageComponents/RegUserComponent";
import UserInListComponent from "./MainAdminPageComponents/UserInListComponent";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper_1: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper_2: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

const LeftColumnHeader = (props) => {
    return (
        <div className={classes.user_reg_header}>
            {props.label}
        </div>
    );
};

const MainAdminPage = (props) => {

    let usersElements = props.users
        .map((user)=>(
            <UserInListComponent
                key={user.login}
                userName={`${user.lastName} ${user.firstName} ${user.middleName}`}
                position={user.position}
                email={user.email}
                avatarLink={user.avatar}
                userId={user.login}
            />)
        );

    const material_classes = useStyles();
    return (
        <div className={classes.background}>
            <Container maxWidth="md" className={classes.main_container}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <LeftColumnHeader label="Регистрация пользователей"/>
                        <Paper className={material_classes.paper_1}>
                            <RegUserComponent regNewUser={props.regNewUser}/>
                        </Paper>
                    </Grid>

                    <Grid item xs={8}>
                        <div className={classes.right_column_header_wrapper}>
                            <div className={classes.user_list_header}>
                                Список сотрудников
                            </div>

                            <div className={classes.to_criterions_page_btn_wrapper}>
                                <NavLink to={'/admin/criterions'}>
                                    <button>Критерии</button>
                                </NavLink>
                            </div>
                        </div>

                        <Paper className={material_classes.paper_2}>
                            <div className={classes.user_list_block}>
                                {usersElements}
                            </div>
                        </Paper>
                    </Grid>

                </Grid>

            </Container>
        </div>
    );
};


export default MainAdminPage;