import React from 'react';
import classes from "./CustomInput.module.css"

const CustomInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.form_control + " " + (hasError ? classes.error:"")}>
            {hasError && <div className={classes.error_message}>{meta.error}</div>}
            <input {...input} {...props}/>
        </div>
    );
};

export default CustomInput;