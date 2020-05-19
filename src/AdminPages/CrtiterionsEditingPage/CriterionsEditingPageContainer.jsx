import {connect} from "react-redux";
import React, {useEffect} from "react";
import {Redirect} from "react-router-dom";
import CriterionsEditingPage from "./CriterionsEditingPage";
import {
    addCriterionOnServer,
    getPositionsFromServer, offIsCritChange,
} from "../../Redux/Reducers/criterionsEditingPageReducer";

let mapStateToProps = (state) =>{
    return {
        userRole:state.auth.role,
        jwt:state.auth.JWT,
        isAuth:state.auth.isAuth,
        positions:state.criterionsEditingPage.positions,
        isCritsChanged:state.criterionsEditingPage.isCritsChanged
    };
};

const CriterionsEditingPageContainerAPI = (props) =>{


    useEffect(() => {
        props.getPositionsFromServer(props.jwt);
    }, []);


    if(props.userRole!=="admin" && props.isAuth){
        return <Redirect to={"/user"}/>
    }

    if(props.userRole==="admin"){
        return <CriterionsEditingPage
            positions={props.positions}
            addCriterion={props.addCriterionOnServer}
            jwt={props.jwt}
            isCritsChanged={props.isCritsChanged}
            offIsCritChange={props.offIsCritChange}
        />
    }

    return <div>
    </div>
};

const CriterionsEditingPageContainer = connect(mapStateToProps, {
    getPositionsFromServer,
    addCriterionOnServer,
    offIsCritChange,
})(CriterionsEditingPageContainerAPI);

export default CriterionsEditingPageContainer;