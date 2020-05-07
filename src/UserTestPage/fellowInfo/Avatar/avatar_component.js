import classes from "./avatar_component.module.css";
import Avatar from "@material-ui/core/Avatar";
import React from "react";

const AvatarComponent= props =>{
    return(
        <Avatar className={classes.avatar}
                   src="mafioznik.png"/>
)
}
export default AvatarComponent