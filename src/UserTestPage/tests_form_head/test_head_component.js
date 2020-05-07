import React from "react";
import classes from './test_head_component.module.css'
const HeaderComponent = props =>{

    return(
        <div className={classes.grid}>
            <div className={classes.text_style}  >
                <text >Осталось сотрудников: {2}</text>
            </div>

            <div className={classes.text_style}  >
                    Осталось вопросов: {8}
            </div>

        </div>



    );


}

export default HeaderComponent;