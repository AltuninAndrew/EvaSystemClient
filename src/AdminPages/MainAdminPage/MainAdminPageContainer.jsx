import {connect} from "react-redux";
import MainAdminPage from "./MainAdminPage";
import {regNewUserCreator} from "../../Redux/adminReducer";

let mapStateToProps = (state) =>{
    return {
        users:state.mainAdminPage.users,
    };
};

let mapDispatchToProps = (dispatch)=>{
    return{
        regNewUser:(newUser)=>{
            let action = regNewUserCreator(newUser);
            dispatch(action);
        },
    };
};

const MainAdminPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainAdminPage);

export default MainAdminPageContainer;