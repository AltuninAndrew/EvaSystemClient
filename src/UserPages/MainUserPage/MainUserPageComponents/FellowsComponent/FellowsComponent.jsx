import React from "react";
import classes from "./FellowsComponent.module.css"
import Avatar from "@material-ui/core/Avatar";

const UserInListElement = props => {
    return (
        <div className={classes.user_in_list_wrapper}>
            <Avatar className={classes.avatar} src={props.userAvatar}/>
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
    return (
        <div>
            <div className={classes.main_header}>Ваши коллеги:</div>
            <div className={classes.fellows_list_wrapper}>
                <UserInListElement
                    userFullName='Васильев Сергей Петрович'
                    userPosition='Дизайнер'
                    userAvatar='http://pm1.narvii.com/5866/45cc61eb9e3eaefdc26be045e9f9fbfdf916f45b_hq.jpg'
                />

                <UserInListElement
                    userFullName='Соловьев Дмитрий Иванович'
                    userPosition='Арт-директор'
                    userAvatar='https://yt3.ggpht.com/a/AATXAJx4VSO85Q6WYtOXl2uR1f9YkDzDoqFVcr8e=s900-c-k-c0xffffffff-no-rj-mo'
                />


            </div>
        </div>
    );
};

export default FellowsComponent;