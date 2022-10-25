import React from "react";

function Cover(){
    return (
        <section id="coverTile">     
            <img className="coverImg" src={require('./images/Group-1.png')} alt="Logo" />
            <div className="pageTitle">
                <h1 className="name">Cristian Calo</h1>
                <p className="coverDescript">Self taught Full-Stack Developer & Equity Trader</p>
            </div>
            <div className="scrollArrow"><a id="arrowLink" href="#profileTile">&lt;</a></div>
        </section>  
    );
}

export default Cover;