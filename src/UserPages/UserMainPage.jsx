import React from 'react';
import classes from "./UserMainPage.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import FellowsComponent from "./UserMainPageComponents/FellowsComponent/FellowsComponent";
import UserInfoComponent from "./UserMainPageComponents/UserInfoComponent/UserInfoComponent";
import UserStatisticsComponent from "./UserMainPageComponents/UserStatisticsComponent/UserStatisticsComponent";

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

const UserMainPage = props => {
    const material_classes = useStyles();
    return (
        <div className={classes.background}>
            <Container maxWidth="lg" className={classes.main_container}>
                <Grid container spacing={4}>
                    {/*левая колонка*/}
                    <Grid item xs={4}>
                        <Paper className={material_classes.paper_1}>
                            <FellowsComponent/>
                        </Paper>
                    </Grid>

                    {/*средняя колонка*/}
                    <Grid item xs={4}>
                        <Paper className={material_classes.paper_2}>
                            <UserInfoComponent/>
                        </Paper>
                    </Grid>

                    {/*правая колонка*/}
                    <Grid item xs={4}>
                        <Paper className={material_classes.paper_1}>
                           <UserStatisticsComponent/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default UserMainPage;