import React from 'react';
import classes from "./EvaluationFormComponent.module.css";
import {Field, reduxForm, reset} from "redux-form";
import {required} from "../../../Validators/validators";
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

let criterions = ["Качество работы", "Ловкость","Чутьё","Желание жить", "Продуктивность","Чутьё","Желание жить", "Продуктивность"];

const CriterionElement = (props) => {
    return (
        <div className={classes.crit_element_wrapper}>
            <div className={classes.crit_name_txt}>
                {props.name}
            </div>

            <Field
                component={"input"}
                type={"number"}
                className={classes.input_score}
                placeholder="1"
                step="1" min="1" max="10"
                validate={[required]}
                name={props.name}
            />
        </div>
    );
};

const EvaluationForm = (props) =>{
    let criterionElements = criterions.map((crit, index) => (<CriterionElement name={crit} key={index}/>));
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={classes.main_wrapper}>
                <div className={classes.criterions_wrapper}>
                    {criterionElements}
                </div>
                <div>
                    <button className={classes.next_btn}><ArrowForwardRoundedIcon/></button>
                </div>
            </div>
        </form>
    );
};

const afterSubmit = (result, dispatch) =>{

};

const EvaluationReduxForm = reduxForm({form: 'rateForm', onSubmitSuccess: afterSubmit})(EvaluationForm);


const EvaluationFormComponent = () => {
    const onSubmitForm = (formData) => {
        let raw = JSON.stringify(formData).split(/"(.*?)"/).filter(e=>e!=="{" && e!=="}" && e!=="," && e!==":");
        let objs=[];
        for(let i =0; i<raw.length;i++){
            if(i%2===0) {
                objs.push({
                    name:raw[i],
                    score:raw[i+1],
                })
            }
        }
        console.log(objs);
    };

    return (
        <EvaluationReduxForm onSubmit={onSubmitForm}/>
    );
};

export default EvaluationFormComponent