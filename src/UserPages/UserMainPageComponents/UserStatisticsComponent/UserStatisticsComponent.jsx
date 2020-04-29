import React from "react";
import classes from './UserStatisticsComponent.module.css'
import LinearProgress from '@material-ui/core/LinearProgress';
import {withStyles } from '@material-ui/core/styles'




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
            <div className={classes.main_header}>Накопленный рейтинг:</div>
            <div className={classes.rating_wrapper}>
                <RatingElement/>
            </div>
        </div>
    );
};

export default UserStatisticsComponent;