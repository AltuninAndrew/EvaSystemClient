import classes from "./user_data_component.module.css";
import React from "react";

const UserData = props =>{

return(
    <div className='user_data'>
        <div className={classes.user_full_name}>Зубенко Михаил Петрович</div>
        <div className={classes.user_position}>Мафиозник</div>
    </div>
)
}
export default UserData;