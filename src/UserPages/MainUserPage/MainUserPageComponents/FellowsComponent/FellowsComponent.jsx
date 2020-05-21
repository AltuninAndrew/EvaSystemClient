import React from "react";
import classes from "./FellowsComponent.module.css"
import Avatar from "@material-ui/core/Avatar";

const UserInListElement = props => {
    return (
        <div className={classes.user_in_list_wrapper}>
            <Avatar className={classes.avatar} src={`data:image/jpeg;base64,${props.userAvatar}`}/>
            <div className={classes.user_in_list_data_wrapper}>

                <div className={classes.user_in_list_full_name}>
                    {props.userFullName}
                </div>

                <div className={classes.user_in_list_position}>
                    {props.userPosition}
                </div>

            </div>
        </div>
    );
};


const FellowsComponent = props => {

    let userInListElements = props.interactedUsers
        .map((user,index) => (
            <UserInListElement
                key={index}
                userFullName={`${user.lastName} ${user.firstName} ${user.middleName}`}
                userPosition={user.position}
                userAvatar={user.avatarImage}
            />)
        );

    return (
        <div>
            <div className={classes.main_header}>Ваши коллеги:</div>
            <div className={classes.fellows_list_wrapper}>
                {userInListElements}
            </div>
        </div>
    );
};

export default FellowsComponent;