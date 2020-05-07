import React from "react";
import RatingGroup1 from "./RatingGroup/Group1/rating_group_1";
import RatingGroup2 from "./RatingGroup/Group2/rating_group_2";
import classes from './test_form.module.css'




const TestInfoComponent = props => {
    return(
        <div className={classes.wrapper}>
            <RatingGroup1/>
            <RatingGroup2/>
            <RatingGroup1/>
            <RatingGroup2/>
            <RatingGroup1/>
            <RatingGroup2/>
            <RatingGroup1/>
            <RatingGroup2/>

        </div>
    );
}
export default TestInfoComponent

