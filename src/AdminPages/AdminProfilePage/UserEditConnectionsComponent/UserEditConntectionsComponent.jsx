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
    return (
        <div className={classes.user_in_list_element}>
            <Avatar variant="square" className={materialClasses.small} src={props.userAvatar}/>
            <div className={classes.user_in_list_data_wrapper}>
                <div className={classes.user_in_list_full_name}>
                    {props.userFullName}
                </div>

                <div className={classes.user_in_list_pos}>
                    {props.userPosition}
                </div>

                <div className={classes.action_with_user}>
                    {props.elementForAdd ? (
                        <AddCircleIcon className={classes.add_icon}/>
                    ) : (
                        <RemoveCircleIcon className={classes.remove_icon}/>
                    )}
                </div>
            </div>
        </div>
    );
};


const UserConnectionsEditComponent = props => {
    return (
        <div className={props.className}>
            <div className={classes.main_header}>Редактирование связей</div>

            <div className={classes.main_block_wrapper}>

                <div className={classes.left_column_wrapper}>
                    <div className={classes.column_header}>
                        Все сотрудники
                    </div>

                    <div className={classes.user_list_block_wrapper}>
                        <UserElementInList
                            userFullName="Петров Алексей Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={true}
                        />
                        <UserElementInList
                            userFullName="Петров Алексей Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={true}
                        />
                        <UserElementInList
                            userFullName="Петров Алексей Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={true}
                        />
                        <UserElementInList
                            userFullName="Петров Алексей Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={true}
                        />
                        <UserElementInList
                            userFullName="Петров Алексей Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={true}
                        />
                        <UserElementInList
                            userFullName="Петров Алексей Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={true}
                        />
                        <UserElementInList
                            userFullName="Петров Алексей Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={true}
                        />
                        <UserElementInList
                            userFullName="Петров Алексей Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={true}
                        />
                        <UserElementInList
                            userFullName="Петров Алексей Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={true}
                        />
                        <UserElementInList
                            userFullName="Петров Алексей Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={true}
                        />

                    </div>

                </div>

                <div className={classes.right_column_wrapper}>
                    <div className={classes.column_header}>
                        С кем работает {props.userFirstName}
                    </div>

                    <div className={classes.user_list_block_wrapper}>
                        <UserElementInList
                            userFullName="Иванов Антон Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={false}
                        />
                        <UserElementInList
                            userFullName="Иванов Антон Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={false}
                        />
                        <UserElementInList
                            userFullName="Иванов Антон Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={false}
                        />
                        <UserElementInList
                            userFullName="Иванов Антон Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={false}
                        />
                        <UserElementInList
                            userFullName="Иванов Антон Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={false}
                        />
                        <UserElementInList
                            userFullName="Иванов Антон Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={false}
                        />
                        <UserElementInList
                            userFullName="Иванов Антон Петрович"
                            userPosition="Разработчик"
                            userAvatar="https://my.roomz.asia/avatar/2019/10/12/1570872461.png"
                            elementForAdd={false}
                        />

                    </div>

                </div>

            </div>

        </div>
    );
};

export default UserConnectionsEditComponent