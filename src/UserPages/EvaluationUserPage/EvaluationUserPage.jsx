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
                   Осталось сотрудников: {props.numOfUsers}
               </div>

               <div className={classes.paper_2}>
                    <FellowInfoComponent
                        fullName={props.fullName}
                        position={props.position}
                        email={props.email}
                        avatarImage={props.avatarImage}
                    />
                    <EvaluationFormComponent
                        criterions={props.criterions}
                        rateUser={props.rateUser}
                        jwt={props.jwt}
                        evaUserName={props.evaUserName}
                    />
               </div>

            </div>


        </div>
    );
};

export default EvaluationUserPage;