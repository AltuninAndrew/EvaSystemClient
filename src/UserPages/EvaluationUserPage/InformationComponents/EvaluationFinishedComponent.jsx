import React from "react";
import fetchIcon from "./icons/fetch_icon.svg"
import {NavLink} from "react-router-dom";

let mainWrapperStyle = {
    textAlign:"center",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:"20vw",
};

let returnButtonStyle = {
    background:"#F2AE30",
    outline:"none",
    fontFamily:"Segoe UI,Arial,sans-serif",
    padding: "5pt",
    cursor:"pointer",
    fontSize:"12pt",
    borderRadius:"3pt",
    color:"white",
    fontWeight:"bold",
};

const EvaluationFinishedComponent = ()=>{
    return(
        <div style={mainWrapperStyle}>
            <h1>
                Опрос закончен, спасибо!
            </h1>
            <NavLink to={"/user"}>
                <button style={returnButtonStyle}>Перейти в профиль</button>
            </NavLink>
        </div>
    );
};

export default EvaluationFinishedComponent