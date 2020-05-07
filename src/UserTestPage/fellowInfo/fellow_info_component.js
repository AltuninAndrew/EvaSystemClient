import React from "react";
import classes from "./fellow_info.module.css"
import UserStatisticsComponent from "./ProgressBar/progress_component";
import ButtonGroupComponent from "./ButtonGroup/button_group_component";
import AvatarComponent from "./Avatar/avatar_component";
import UserData from "./UserData/user_data_component";


const UserInfoComponent = props => {
    return (
        <div className={classes.main_wrapper}>
            <AvatarComponent/>
            <UserData/>
            <UserStatisticsComponent/>
            <ButtonGroupComponent/>
        </div>

    );
};

export default UserInfoComponent;