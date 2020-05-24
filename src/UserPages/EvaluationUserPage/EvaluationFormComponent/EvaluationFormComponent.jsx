import React from 'react';
import classes from "./EvaluationFormComponent.module.css";
import {Field} from "redux-form";

const CriterionElement = () => {
    return (
        <div className={classes.crit_element_wrapper}>
            <div className={classes.crit_name_txt}>
                Качество работы
            </div>
            <input
                className={classes.input_score}
                placeholder="1"
                step="1" min="1" max="10"
                type="number"
            />

        </div>
    );
};

const EvaluationFormComponent = () => {
    return (
        <div className={classes.main_wrapper}>
            <div className={classes.criterions_wrapper}>
                <CriterionElement/>
                <CriterionElement/>
                <CriterionElement/>
            </div>
            <div>
                <button>Следующий</button>
            </div>
        </div>
    );
};

export default EvaluationFormComponent