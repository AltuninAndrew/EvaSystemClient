import React from "react";
import classes from './button_group_component.module.css'


const ButtonGroupComponent = props => {
    return (
        <div className={classes.button_container}>
            <button className={classes.prev_button}>
                предыдущий
            </button>
            <button className={classes.next_button}>
                следующий
            </button>
        </div>
)
}
export default ButtonGroupComponent;