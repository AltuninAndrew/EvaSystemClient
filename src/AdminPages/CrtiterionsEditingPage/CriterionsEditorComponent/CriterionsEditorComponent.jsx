import React, {useState} from 'react';
import classes from './CritertionsEditorComponent.module.css';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const CriterionsEditorComponent = props => {

    let [criterionsEditorLabel, setCriterionsEditorLabel] = useState('Пожалуйста, выберите должность');
    let [initState, setInitState] = useState(true);

    const PositionElement = props => {

        const clickAction = () => {
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
        return (
            <div className={classes.criterion_element_wrapper}>
                <div className={classes.criterion_name}>
                    {props.critName}
                    <DeleteForeverRoundedIcon className={classes.delete_crit_icon}/>
                </div>
                <input className={classes.input_weight} type="number" placeholder="1.0" step="1" min="1" max="5"/>
            </div>
        );
    };

    const AddCriterionElement = props => {
        return (
            <div className={classes.add_crit_element_wrapper}>
                <input className={classes.criterion_name_input_field} placeholder="Название"/>
                <input className={classes.criterion_name_input_field} type="number" placeholder="1.0" step="1" min="1" max="5"/>
                <AddCircleIcon className={classes.add_crit_icon}/>
            </div>
        );
    };

    const CriterionsEditor = () => {
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
                                <CriterionElement critName='Продуктивность'/>
                                <CriterionElement critName='Скорость работы'/>
                                <CriterionElement critName='Ответсвенность'/>
                                <CriterionElement critName='Отзывчивость'/>
                                <CriterionElement critName='Качество работы'/>
                                <CriterionElement critName='Продуктивность'/>
                            </div>

                            <AddCriterionElement/>
                        </div>
                    )
                }
            </div>
        );
    };

    return (
        <div className={classes.main_wrapper}>
            <div className={classes.left_column_wrapper}>
                <PositionElement
                    positionName='Директор'
                />
                <PositionElement
                    positionName='Художник'
                />
                <PositionElement
                    positionName='Разработчик'
                />
                <PositionElement
                    positionName='Уборщик'
                />
                <PositionElement
                    positionName='Тестировщик'
                />
                <PositionElement
                    positionName='Повар'
                />

            </div>
            <div>
                <CriterionsEditor/>
            </div>
        </div>
    );
};

export default CriterionsEditorComponent