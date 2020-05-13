import React from 'react';
import classes from "./CustomInputForReg.module.css"

const CustomInputForReg = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.input_control + " " + (hasError ? classes.error:"")}>
            {hasError && <div className={classes.error_message}>{meta.error}</div>}
            <input {...input} {...props}/>
        </div>
    );
};

export default CustomInputForReg;