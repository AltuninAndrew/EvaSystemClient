import React from "react";
import classes from "./UserEditConnectionsComponent.module.css"
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';


const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
}));

const UserElementInList = props => {
    const materialClasses = useStyles();

    const onAddCommunication = ()=>{
        props.addCommunication(props.userName,props.jwt,props.interactUserName);
    };


    const onDeleteCommunication = ()=>{
        props.deleteCommunication(props.userName,props.jwt,props.interactUserName);
    };

    return (
        <div className={classes.user_in_list_element}>
            <Avatar variant="square" className={materialClasses.small} src={`data:image/jpeg;base64,${props.avatarImage}`}/>
            <div className={classes.user_in_list_data_wrapper}>
                <div className={classes.user_in_list_full_name}>
                    {props.userFullName}
                </div>

                <div className={classes.user_in_list_pos}>
                    {props.userPosition}
                </div>

                <div className={classes.action_with_user}>
                    {props.elementForAdd ? (
                        <AddCircleIcon className={classes.add_icon} onClick={onAddCommunication}/>
                    ) : (
                        <RemoveCircleIcon className={classes.remove_icon} onClick={onDeleteCommunication}/>
                    )}
                </div>
            </div>
        </div>
    );
};


const UserConnectionsEditComponent = props => {

    let usersForInteractElements = props.usersForInteract
        .map((user,index) => (
            <UserElementInList
                key={index}
                userFullName={`${user.lastName} ${user.firstName} ${user.middleName}`}
                userPosition={user.position}
                avatarImage={user.avatarImage}
                interactUserName={user.username}
                userName={props.username}
                addCommunication={props.addCommunication}
                jwt={props.jwt}
                elementForAdd={true}
            />)
        );

    let interactedUsersElements = props.interectedUsers
        .map((user,index) => (
            <UserElementInList
                key={index}
                userFullName={`${user.lastName} ${user.firstName} ${user.middleName}`}
                userPosition={user.position}
                avatarImage={user.avatarImage}
                interactUserName={user.username}
                userName={props.username}
                deleteCommunication={props.deleteCommunication}
                jwt={props.jwt}
                elementForAdd={false}
            />)
        );

    return (
        <div className={props.className}>
            <div className={classes.main_header}>Редактирование связей</div>

            <div className={classes.main_block_wrapper}>

                <div className={classes.left_column_wrapper}>
                    <div className={classes.column_header}>
                        Все сотрудники
                    </div>

                    <div className={classes.user_list_block_wrapper}>
                        {usersForInteractElements}
                    </div>

                </div>

                <div className={classes.right_column_wrapper}>
                    <div className={classes.column_header}>
                        С кем работает {props.userFirstName}
                    </div>

                    <div className={classes.user_list_block_wrapper}>
                        {interactedUsersElements}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default UserConnectionsEditComponent