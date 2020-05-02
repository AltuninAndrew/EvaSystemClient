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
        <div className={classes.rating_element_wrapper}>
            <div className={classes.rating_element_header}>
                {props.title}:
            </div>
            <BorderLinearProgress
                variant="determinate"
                value={props.value}
            />
        </div>
    );
};

const UserStatisticsComponent = props=>{
    return(
        <div>
            <div className={classes.main_header}>Накопленный рейтинг:</div>
            <div className={classes.rating_wrapper}>

                <div className={classes.general_rating}>
                    <RatingElement
                        title="Общий"
                        value={53}
                    />
                </div>


                <RatingElement
                    title="Продуктивность"
                    value={78}
                />

                <RatingElement
                    title="Ответственность"
                    value={30}
                />


            </div>
        </div>
    );
};

export default UserStatisticsComponent;