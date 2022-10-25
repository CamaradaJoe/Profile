import React from "react";
import NaviBar from "./NaviBar";

function Navigation(){
    return (
        <section id="navigation">
            <div className="brand"><a id="brandLogo" href="/">Cristian Calo</a></div>
            <div className="navBorder"></div>
            <NaviBar />    
        </section>  
    );
}

export default Navigation;