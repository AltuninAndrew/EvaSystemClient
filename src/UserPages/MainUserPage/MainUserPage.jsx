import React from 'react';
import classes from "./MainUserPage.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import FellowsComponent from "./MainUserPageComponents/FellowsComponent/FellowsComponent";
import UserInfoComponent from "./MainUserPageComponents/UserInfoComponent/UserInfoComponent";
import UserStatisticsComponent from "./MainUserPageComponents/UserStatisticsComponent/UserStatisticsComponent";

const useStyles = makeStyles((theme) => ({
    paper_1: {
        padding: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    paper_2: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

const MainUserPage = props => {
    const material_classes = useStyles();
    return (
        <div className={classes.background}>
            <Container maxWidth="lg" className={classes.main_container}>
                <Grid container spacing={4}>
                    {/*левая колонка*/}
                    <Grid item xs={4}>
                        <Paper className={material_classes.paper_1}>
                            <FellowsComponent interactedUsers = {props.interactedUsers}/>
                        </Paper>
                    </Grid>

                    {/*средняя колонка*/}
                    <Grid item xs={4}>
                        <Paper className={material_classes.paper_2}>
                            <UserInfoComponent
                                fullName={props.fullName}
                                position={props.position}
                                avatarImage={props.avatarImage}
                                addAvatarImage={props.addAvatarImage}
                            />
                        </Paper>
                    </Grid>

                    {/*правая колонка*/}
                    <Grid item xs={4}>
                        <Paper className={material_classes.paper_1}>
                           <UserStatisticsComponent userRating = {props.userRating}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default MainUserPage;