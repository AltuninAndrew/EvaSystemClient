import React, {useState} from "react";
import classes from "./UserInfoComponent.module.css"
import Avatar from "@material-ui/core/Avatar";

const UserInfoComponent = props => {

    let [onAvatarFocus, setOnAvatarFocus] = useState(false);

    const onAvatarEnter = () => {
        setOnAvatarFocus(true);
    };

    const onAvatarLeave = () => {
        setOnAvatarFocus(false);
    };

    return (
        <div className={classes.main_wrapper}>

            <Avatar className={classes.avatar} src={`data:image/jpeg;base64,${props.avatarImage}`}
                    onMouseEnter={onAvatarEnter}
                    onMouseLeave={onAvatarLeave}
            />

            <div className={classes.user_data}>
                <div className={classes.user_full_name}>{props.fullName}</div>
                <div className={classes.user_position}>{props.position}</div>
            </div>
            <button className={classes.rate_button}>
                Оценить коллег
            </button>
        </div>
    );
};

export default UserInfoComponent;