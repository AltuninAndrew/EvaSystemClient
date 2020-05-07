import React from "react";

import classes from './rating_group_1.module.css'

import RadioTest from "./radio_buttons/radio_buttons";
const RatingGroup1 = props =>{
    return(
            <div className={classes.grid}>
                <div className={classes.text_style}>критерий:</div>
                <RadioTest/>

            </div>
    )


}
export default RatingGroup1;