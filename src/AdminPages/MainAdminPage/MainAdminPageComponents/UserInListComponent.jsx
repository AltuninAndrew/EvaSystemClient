import classes from "./UserInListComponent.module.css"
import React from "react";
import InfoIcon from '@material-ui/icons/Info';
import {NavLink} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(9.18),
        height: theme.spacing(9.18),
    },
}));


const UserInListComponent = props => {
    const materialClasses = useStyles();
    return(
        <NavLink to={`/admin/profile_page/`+props.userId} className={classes.link_to_profile}>
        <div className={classes.main_wrapper}>
            <Avatar variant="square" src={`data:image/jpeg;base64,${props.avatarImage}`} className={materialClasses.avatar} />
            <div className={classes.text_userName}>
                {props.userName}
            </div>
            <div className={classes.pos_and_email_wrapper}>
                {props.position}
                <div className={classes.text_emailInfo}>
                    {props.email}
                </div>
            </div>
        </div>
        </NavLink>
    );
};

export  default  UserInListComponent;