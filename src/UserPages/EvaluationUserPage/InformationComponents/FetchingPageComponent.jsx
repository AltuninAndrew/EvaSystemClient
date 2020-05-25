import React from "react";
import fetchIcon from "./icons/fetch_icon.svg"

const FetchingPageComponent = ()=>{
    return(
        <div style={{textAlign:"center",marginLeft:"auto",marginRight:"auto", marginTop:"20vw"}}>
            <img src={fetchIcon} alt="идет загрузка"/>
        </div>
    );
};

export default FetchingPageComponent