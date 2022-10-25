import React from "react";


function PortfolioItem(props){
    return(
        <div className="portfolioItem">
            <img src={props.img} alt="background" />
            <a href={props.link} target="_blank" rel="noreferrer">
                <div id="portfolioItemContent">
                    <h2 id="portfolioItemDescTitle">{props.title}</h2><br/><br/><br/>
                    <p id="portfolioItemDesc"><span id="portfolioItemStyle">Description</span><br/>{props.desc}</p>   
                    <p id="portfolioItem"><br/><br/><br/><br/><span id="portfolioItemStyle">Languages Used</span><br/>{props.languages}</p>                     
                </div>
            </a>
        </div>
    );
}

export default PortfolioItem;