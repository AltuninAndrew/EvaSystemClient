import React, {useEffect, useState} from 'react';
import classes from "./EvaluationFormComponent.module.css";
import {Field, reduxForm, reset} from "redux-form";
import {required} from "../../../Validators/validators";
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';


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


const EvaluationFormComponent = (props) => {

    let [criterions,setCriterions] = useState([]);

    useEffect(() => {
       setCriterions(props.criterions);
       console.log("asd");
    },[props.criterions]);

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

    const EvaluationReduxForm = reduxForm({form: 'rateForm'})(EvaluationForm);

    const onSubmitForm = (formData) => {
        let raw = JSON.stringify(formData).split(/"(.*?)"/).filter(e=>e!=="{" && e!=="}" && e!=="," && e!==":");
        let objs=[];
        for(let i =0; i<raw.length;i++){
            if(i%2===0) {
                objs.push({
                    criterionName:raw[i],
                    score:parseInt(raw[i+1]),
                })
            }
        }
        props.rateUser(props.evaUserName,props.jwt,objs);
    };

    return (
        <EvaluationReduxForm onSubmit={onSubmitForm}/>
    );
};

export default EvaluationFormComponent