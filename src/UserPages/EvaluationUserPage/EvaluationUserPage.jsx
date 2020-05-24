import React from 'react';
import classes from "./EvaluationUserPage.module.css";
import mainClasses from "../MainUserPage/MainUserPage.module.css"
import EvaluationFormComponent from "./EvaluationFormComponent/EvaluationFormComponent";
import FellowInfoComponent from "./FellowInfoComponent/FellowInfoComponent";


const EvaluationUserPage = props => {

    return (
        <div className={mainClasses.background}>
            <div className={classes.main_block}>
               <div className={classes.paper_1}>
                   Осталось сотрудников: 1
               </div>

               <div className={classes.paper_2}>
                    <FellowInfoComponent/>
                    <EvaluationFormComponent/>
               </div>

            </div>


        </div>
    );
};

export default EvaluationUserPage;