import React from "react";
import classes from './progress_component.module.css'
import LinearProgress from '@material-ui/core/LinearProgress';
import {withStyles} from '@material-ui/core/styles'



const RatingElement = props =>{

    const BorderLinearProgress = withStyles({
        root: {
            height: 15,
            backgroundColor: '#373B3A'
        },
        bar: {
            backgroundColor: '#F2AE30',
        },
    })(LinearProgress);

    return(
        <BorderLinearProgress
            variant="determinate"
            value={50}
        />
    );
};

const UserStatisticsComponent = props=>{
    return(
        <div>
            <div className={classes.skills_logo}>Накопленный рейтинг:</div>
            <div className={classes.skills_text_style}>Общий:</div>
            <RatingElement/>
            <div className={classes.skills_text_style}>Профессиональные навыки:</div>
            <RatingElement/>
            <div className={classes.skills_text_style}>Личные навыки:</div>
            <RatingElement/>
        </div>
    );
};

export default UserStatisticsComponent;