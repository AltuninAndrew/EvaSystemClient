import React, {useState} from 'react';
import classes from './CritertionsEditorComponent.module.css';


const CriterionsEditorComponent = props => {

    let [criterionsEditorLabel, setCriterionsEditorLabel] = useState('Пожалуйста, выберите должность');
    let [initState, setInitState] = useState(true);

    const PositionElement = props => {

        const clickAction = () => {
            setCriterionsEditorLabel("Настройка критериев для должности: " + props.positionName.toLowerCase())
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
                    Продуктивность
                </div>

                <input className={classes.input_weight} type="number" placeholder="1.0" step="1" min="1" max="5"/>
            </div>
        );
    };

    const CriterionsEditor = () => {
        return (
            <div>
                <div className={classes.criterions_editor_header}>
                    {criterionsEditorLabel}
                </div>

                {initState?
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
                                <CriterionElement/>
                                <CriterionElement/>
                            </div>
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
            </div>

            <div>
                <CriterionsEditor/>
            </div>

        </div>
    );
};

export default CriterionsEditorComponent