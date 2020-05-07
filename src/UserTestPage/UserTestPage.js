import React from 'react';
import classes from './UserPageTest.module.css';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import UserInfoComponent from "./fellowInfo/fellow_info_component";
import TestInfoComponent from "./test_form_user/test_form_component";
import HeaderComponent from "./tests_form_head/test_head_component";
const useStyles = makeStyles((theme) => ({

    paper_1: {
        padding: theme.spacing(3.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper_2: {
        padding: theme.spacing(2),
        background:"#373B3A",
    },
    paper_3: {

        padding: theme.spacing(1),
        marginTop:15,


    },

}));


const UserTestPage = props => {
    const material_classes = useStyles();
    return (

            <div className={classes.background}>
                <Container maxWidth="lg" className={classes.main_container}>
                    <Grid container spacing={4}>
                        <Grid item xs={4}>
                            <Paper className={material_classes.paper_1}>
                                <UserInfoComponent/>
                            </Paper>
                        </Grid>

                        {/*средняя колонка*/}
                        <Grid item xs={8} >
                            <Paper className={material_classes.paper_2}>
                                <HeaderComponent/>
                            </Paper>
                            <Paper className={material_classes.paper_3}>
                                <TestInfoComponent/>
                            </Paper>

                        </Grid>



                        {/*правая колонка*/}

                    </Grid>
                </Container>
            </div>
    );
};










export default UserTestPage;