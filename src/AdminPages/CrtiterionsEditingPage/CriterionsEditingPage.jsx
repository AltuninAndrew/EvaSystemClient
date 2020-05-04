import React from 'react';
import classes from './CriterionsEditingPage.module.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";
import CriterionsEditorComponent from "./CriterionsEditorComponent/CriterionsEditorComponent"

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }
}));

const CriterionsEditingPage = (props) => {
    const material_classes = useStyles();
    return (
        <div className={classes.background}>
            <Container maxWidth="md" className={classes.main_container}>
                <div className={classes.main_header_wrapper}>
                    <div className={classes.main_header}>
                        Настройка критериев
                    </div>

                    <div className={classes.to_admin_page_btn_wrapper}>
                        <NavLink to={'/admin'}>
                            <button>Сотрудники</button>
                        </NavLink>
                    </div>
                </div>

                <Paper className={material_classes.paper}>
                    <div className={classes.criterions_block_wrapper}>
                        <CriterionsEditorComponent/>
                    </div>
                </Paper>
            </Container>
        </div>
    );
};


export default CriterionsEditingPage;