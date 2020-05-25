import React, {useState} from "react";
import classes from "./UserInfoComponent.module.css"
import Avatar from "@material-ui/core/Avatar";
import {NavLink} from "react-router-dom";


const UserInfoComponent = props => {

    let [onAvatarFocus, setOnAvatarFocus] = useState(false);

    const onAvatarEnter = () => {
        setOnAvatarFocus(true);
    };

    const onAvatarLeave = () => {
        setOnAvatarFocus(false);
    };

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            props.addAvatarImage(e.target.files[0]);
        }
    };

    return (
        <div className={classes.main_wrapper}>

            <label>
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={onAvatarSelected}
                    className={classes.input_field}
                />
                <Avatar className={classes.avatar} src={`data:image/jpeg;base64,${props.avatarImage}`}
                        onMouseEnter={onAvatarEnter}
                        onMouseLeave={onAvatarLeave}
                />
            </label>

            {onAvatarFocus&&
            <div className={classes.hint_for_change_avatar}>
                Кликните по аватару для изменения
            </div>
            }


            <div className={classes.user_data}>
                <div className={classes.user_full_name}>{props.fullName}</div>
                <div className={classes.user_position}>{props.position}</div>
            </div>
            <NavLink to={"/user/evaluation"}>
                <button className={classes.rate_button}>
                    Оценить коллег
                </button>
            </NavLink>

        </div>
    );
};

export default UserInfoComponent;