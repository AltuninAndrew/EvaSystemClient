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
        <div className={classes.main_wrapper}>
            <Avatar variant="square" src={props.avatarLink} className={materialClasses.avatar} />
            <div className={classes.text_userName}>
                {props.userName}
            </div>
            <div className={classes.text_posInfo}>
                {props.position}
                <div className={classes.text_emailInfo}>
                    {props.email}
                </div>
            </div>
            <div className={classes.block_info_icon}>
                <NavLink to={`/admin/profile_page/`+props.userId} className={classes.link_to_profile}>
                    <InfoIcon fontSize="default" className={classes.info_icon}/>
                </NavLink>
            </div>
        </div>
    );
};

export  default  UserInListComponent;