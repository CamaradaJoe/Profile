import React from "react";


function getDate(){
    const x = new Date().getFullYear().toString();
    return(x);
}

function Footer(){
    return(
        <div id="footer">
            Cristian Calo's Page © {getDate()}
        </div>
    );
}

export default Footer;