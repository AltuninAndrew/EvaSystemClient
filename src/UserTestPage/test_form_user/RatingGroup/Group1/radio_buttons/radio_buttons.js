import React from "react";
import classes from "./radio_buttons.module.css";



const RadioTest = props => {
    return(
        <div className={classes.radioStyle1}>
            <div >
                <input type="radio" id="Choice1"  value="1" checked  />
                <label htmlFor="Choice1" className={classes.label_style}>1</label>
            </div>
            <div >
                <input type="radio" id="Choice2"  value="2"  />
                <label htmlFor="Choice2" className={classes.label_style}>2</label>
            </div>
            <div >
                <input type="radio" id="Choice3"  value="3"  />
                <label htmlFor="Choice1" className={classes.label_style}>3</label>
            </div>
            <div >
                <input type="radio" id="Choice4"  value="4"  />
                <label htmlFor="Choice1" className={classes.label_style}>4</label>
            </div>
            <div >
                <input type="radio" id="Choice5"  value="5"  />
                <label htmlFor="Choice1" className={classes.label_style}>5</label>
            </div>
            <div >
                <input type="radio" id="Choice6"  value="6"  />
                <label htmlFor="Choice1" className={classes.label_style}>6</label>
            </div>
            <div >
                <input type="radio" id="Choice7" value="7"  />
                <label htmlFor="Choice1" className={classes.label_style}>7</label>
            </div>
            <div >
                <input type="radio" id="Choice8"  value="8"  />
                <label htmlFor="Choice1" className={classes.label_style}>8</label>
            </div>
            <div >
                <input type="radio" id="Choice9"  value="9"  />
                <label htmlFor="Choice1" className={classes.label_style}>9</label>
            </div>
            <div >
                <input type="radio" id="Choice10"  value="10"  />
                <label htmlFor="Choice1" className={classes.label_style}>10</label>
            </div>
        </div>


    )

}
export default RadioTest;