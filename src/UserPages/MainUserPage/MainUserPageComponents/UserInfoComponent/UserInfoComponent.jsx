import React from "react";
import classes from "./UserInfoComponent.module.css"
import Avatar from "@material-ui/core/Avatar";

const UserInfoComponent = props=>{
    return(
        <div className={classes.main_wrapper}>
            <Avatar className={classes.avatar} src='https://avatars.mds.yandex.net/get-pdb/1058492/94e5b2e6-a03e-4655-97e9-3825bc701f05/s1200?webp=false'/>
            <div className={classes.user_data}>
                <div className={classes.user_full_name}>Ибатулин Михаил Петрович</div>
                <div className={classes.user_position}>Разработчик</div>
            </div>
            <button className={classes.rate_button}>
                Оценить коллег
            </button>
        </div>
    );
};

export default UserInfoComponent;