import React from "react";
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css'
import expContent from "./expContent";
import ExpCard from "./ExpCard";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';




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
function createCard(expItem){
    return(
        <ExpCard
            key={expItem.id}
            id={expItem.id}
            title={expItem.title} 
            subTitle={expItem.subTitle}
            items={expItem.items}
        />
    );
}

function getLI(items){
    var x=[];
    for(var i = 0; i < items.length; i++){        
        x.push(<li id="skillLI">
            {items[i]}
        </li>)
    }

     return(x);
}


function Experience(){

    const { ref:myRef, inView:activeSection, entry } = useInView({threshold: .70});
    const breakpoints = {
        default: 3,
        1750:2,
        1400:1
    };
    return (
        <div>
            <section id="experienceTile" ref={myRef}>
                {activeSection ? scrollTrigger(entry.target.id.toString()) : null}
                <div className="sectionDivider">
                    <div id="splitDivider">
                        <hr id="splitter"/>
                    </div>
                </div>
                <h1 id="sectionTitle">Experience</h1>
            </section>
            <div className="expContainer" >
                <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {expContent.slice(1, expContent.length).map(createCard)}
                        {<Card id="skillCard" >
                            <Card.Header id="skillCardHead">{expContent[0].title}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item id="expCardItem">
                                    <ul id="skillUL">                                        
                                        {getLI(expContent[0].items)}                                                                          
                                    </ul> 
                                </ListGroup.Item>                            
                            </ListGroup>
                            <Card.Header id="skillCardHead">My Resume</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item id="expCardItem">                                       
                                        <OverlayTrigger
                                            key='right'
                                            placement='right'
                                            trigger="hover"
                                            overlay={
                                                <Tooltip className={`tooltip`} >
                                                    Cristian Calo Resume
                                                </Tooltip>
                                            }
                                            >
                                            <a id="resume" href="./files/cristian calo resume.pdf" download>
                                            <FontAwesomeIcon icon={faFilePdf}  id="resumeIcon"/></a>
                                        </OverlayTrigger>                                                                          
                            
                                    
                                </ListGroup.Item>                            
                            </ListGroup>
                        </Card>
                        }                   
                    </Masonry>
            </div>   
        </div>
    );
}

export default Experience;

