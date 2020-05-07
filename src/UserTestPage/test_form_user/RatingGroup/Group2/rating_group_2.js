import React from "react";
import Rating from '@material-ui/lab/Rating'
import classes from './rating_group_2.module.css'
import RadioTest_2 from "./radio_buttons_2/radio_buttons_2";

const RatingGroup2 = props =>{
    return(
        <div className={classes.grid}>
            <div className={classes.text_style}>критерий:</div>
            <RadioTest_2/>
        </div>
    )


}
export default RatingGroup2;