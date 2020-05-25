import React from 'react';
import classes from "./FellowInfoComponent.module.css"
import Avatar from "@material-ui/core/Avatar";

const FellowInfoComponent = (props) => {
    return (
        <div className={classes.main_wrapper}>
            <Avatar className={classes.avatar} src={`data:image/jpeg;base64,${props.avatarImage}`}/>

            <div className={classes.info_wrapper}>
                <div className={classes.full_name_txt}>
                    {props.fullName}
                </div>

                <div className={classes.position_txt}>
                    {props.position}
                </div>

                <div className={classes.email_txt}>
                    {props.email}
                </div>

            </div>

        </div>
    );
};

export default FellowInfoComponent