import React from "react";
import { useInView } from 'react-intersection-observer';
import PortfolioItem from "./PorfolioItem";
import portContent from "./portContent";

function removeActiveClass(){
    document.querySelectorAll('.navbar .nav-link').forEach(e => {
        e.classList.remove('active');
    });
}
function addActiveClass(entry){
    var selector = '#'+entry+'Link';
    document.querySelector(selector).classList.add('active')
    // console.log(document.querySelector(selector).className);
}
function scrollTrigger(entry){
    // console.log(entry);
    removeActiveClass();
    addActiveClass(entry);
}


function createPortItem(portItem){
   return(
    <PortfolioItem 
        key={portItem.id}
        title={portItem.title}
        link={portItem.link}
        img={portItem.img}
        desc={portItem.desc}
        languages={portItem.languages} />
   );
}
    




function Portfolio(){

    const { ref:myRef, inView:activeSection, entry } = useInView({threshold: .70});

return (
    <section id="portfolioTile" ref={myRef}>
        {/* {console.log(activeSection)} */}
        {activeSection ? scrollTrigger(entry.target.id.toString()) : null}
        <div className="sectionDivider">
            <div id="splitDivider">
                <hr id="splitter"/>
            </div>
        </div>
        <h1 id="sectionTitle">Portfolio</h1>
        <div className="portfolioContainer">
            <div className="portfolioRow">
                {portContent.map(createPortItem)}
            </div>
        </div>
    </section> 
);
}

export default Portfolio;