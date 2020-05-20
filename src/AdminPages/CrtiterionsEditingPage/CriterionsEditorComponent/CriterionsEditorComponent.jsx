import React, {useEffect, useState} from 'react';
import classes from './CritertionsEditorComponent.module.css';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {Field, reset, reduxForm} from "redux-form";
import {addCriterions} from "../../../API/AdminAPI";
import {required} from "../../../Validators/validators";


const AddCritForm = (props) =>{
    return(
        <form className={classes.add_crit_element_wrapper} onSubmit={props.handleSubmit}>
            <Field
                className={classes.criterion_name_input_field}
                placeholder="Название"
                component={"input"}
                name={"critName"}
                validate={[required]}
            />

            <Field
                className={classes.criterion_name_input_field}
                type={"number"}
                placeholder="1.0"
                component={"input"}
                step="1" min="1" max="5"
                name={"critWeight"}
                validate={[required]}
            />

            <button style={{background:"none",color:"#373B3A",padding:0,border:"none",cursor:"pointer", outline:"none",width:0}}>
                <AddCircleIcon className={classes.add_crit_icon}/>
            </button>
        </form>
    )
};

const afterSubmit = (result, dispatch) =>{
    dispatch(reset('addCriterion'));
};

const AddCritReduxForm = reduxForm({form: 'addCriterion', onSubmitSuccess: afterSubmit})(AddCritForm);

const CriterionsEditorComponent = props => {

    let [criterionsEditorLabel, setCriterionsEditorLabel] = useState('Пожалуйста, выберите должность');
    let [initState, setInitState] = useState(true);
    let [currentCriterions, setCurrentCriterions] = useState([]);
    let [currentPositionName,setCurrentPositionName] = useState("");

    const PositionElement = props => {
        const clickAction = () => {
            let crits = props.positions.find(e => e.positionName === props.positionName).criterions
                .map((crit, index) => (
                    <CriterionElement
                        key={index}
                        critName={crit.name}
                        critWeight={crit.weight}
                        deleteCriterion={props.deleteCriterion}
                        currentPosName={props.positionName}
                        jwt={props.jwt}
                    />)
                );
            setCurrentCriterions(crits);
            setCurrentPositionName(props.positionName);
            setCriterionsEditorLabel("Настройка критериев для должности: " + props.positionName.toLowerCase());
            setInitState(false);
        };
        return (
            <div className={classes.position_element} onClick={clickAction}>
                {props.positionName}
            </div>
        );
    };

    const CriterionElement = props => {

        const onDeleteAction = ()=>{
            props.deleteCriterion(props.jwt,props.currentPosName,props.critName);
        };

        return (
            <div className={classes.criterion_element_wrapper}>
                <div className={classes.criterion_name}>
                    {props.critName}
                    <DeleteForeverRoundedIcon className={classes.delete_crit_icon} onClick={onDeleteAction}/>
                </div>
                <input className={classes.input_weight} type="number" defaultValue={props.critWeight} disabled={true} step="1" min="1" max="5"/>
            </div>
        );
    };

    const AddCriterionElement = props => {

        const onSubmitForm =(formData)=>{
            props.addCriterion(props.jwt,currentPositionName,formData.critName,formData.critWeight);
        };

        return (
            <div>
                <AddCritReduxForm onSubmit={onSubmitForm}/>
            </div>
        );
    };

    const CriterionsEditor = () => {

        useEffect(() => {
            if(props.isCritsChanged){
                let crits = props.positions.find(e => e.positionName === currentPositionName).criterions
                    .map((crit, index) => (
                        <CriterionElement
                            key={index}
                            critName={crit.name}
                            critWeight={crit.weight}
                            deleteCriterion={props.deleteCriterion}
                            currentPosName={currentPositionName}
                            jwt={props.jwt}
                        />)
                    );
                setCurrentCriterions(crits);
                props.offIsCritChange();
            }
        });


        return (
            <div>
                <div className={classes.criterions_editor_header}>
                    {criterionsEditorLabel}
                </div>
                {initState ?
                    (
                        <div>
                        </div>
                    ) : (
                        <div>
                            <div className={classes.criterion_element_help_header}>
                                <div>
                                    Название
                                </div>
                                <div>
                                    Вес
                                </div>
                            </div>
                            <div className={classes.criterions_list_wrapper}>
                                {currentCriterions}
                            </div>

                            <AddCriterionElement
                                addCriterion={props.addCriterion}
                                jwt={props.jwt}
                            />
                        </div>
                    )
                }
            </div>
        );
    };

    let PositionElements = props.positions
        .map((position, index) => (
            <PositionElement
                key={index}
                positionName={position.positionName}
                positions={props.positions}
                deleteCriterion={props.deleteCriterion}
                jwt={props.jwt}
            />)
        );

    return (
        <div className={classes.main_wrapper}>
            <div className={classes.left_column_wrapper}>
                {PositionElements}
            </div>
            <div>
                <CriterionsEditor/>
            </div>
        </div>
    );
};

export default CriterionsEditorComponent