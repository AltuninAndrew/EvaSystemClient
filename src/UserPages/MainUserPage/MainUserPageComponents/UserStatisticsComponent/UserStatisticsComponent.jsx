import React from "react";
import classes from './UserStatisticsComponent.module.css'
import LinearProgress from '@material-ui/core/LinearProgress';
import {withStyles } from '@material-ui/core/styles'

const MAX_RATING = 10;

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


    let value = (props.value*100)/MAX_RATING;

    return(
        <div className={classes.rating_element_wrapper}>
            <div className={classes.rating_element_header}>
                {props.title}:
            </div>
            <BorderLinearProgress
                variant="determinate"
                value={value}
            />
        </div>
    );
};

const UserStatisticsComponent = props=>{

    let ratingElements = props.userRating.scorePerCriterion
        .map((rating,index) => (
            <RatingElement
                key={index}
                title={rating.criterionName}
                value={rating.score}
            />)
        );

    return(
        <div>
            <div className={classes.main_header}>Накопленный рейтинг:</div>
            <div className={classes.rating_wrapper}>

                <div className={classes.general_rating}>
                    <RatingElement
                        title="Общий"
                        value={props.userRating.commonRating}
                    />
                </div>

                {ratingElements}
            </div>
        </div>
    );
};

export default UserStatisticsComponent;