import React from "react";
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen  } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons';
import Card from 'react-bootstrap/Card';

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


function SourceRef(){

    const { ref:myRef, inView:activeSection, entry } = useInView({threshold: .70});

    return (
        <section id="sourceTile" ref={myRef}>
            {/* {console.log(activeSection)} */}
            {activeSection ? scrollTrigger(entry.target.id.toString()) : null}
            <div className="sectionDivider">
                <div id="splitDivider">
                    <hr id="splitter"/>
                </div>
            </div>
            <h1 id="sectionTitle">Sources</h1>
            <div id="sourceContainer">
                <div id="sourceRow">
                    <Card>
                        <Card.Body>
                            <Card.Title>Avatar</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><img id="sourceAvatarImg" src={require('./images/Group-1.png')} alt="" /></Card.Subtitle>
                            <Card.Text>
                                Penpot: Avataaars by Pablo Stanley.
                            </Card.Text>
                            <Card.Link href="www.penpot.com/">www.penpot.com/</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Font Awesome</Card.Title><br/>
                            <Card.Subtitle className="mb-2 text-muted">
                                <FontAwesomeIcon icon={faAddressCard} />&nbsp;
                                <FontAwesomeIcon icon={faCircleInfo} />&nbsp;
                                <FontAwesomeIcon icon={faUserCircle} />&nbsp;
                                <FontAwesomeIcon icon={faFilePdf} />&nbsp;
                                <FontAwesomeIcon icon={faTwitter} />&nbsp;
                                <FontAwesomeIcon icon={faGithub} />&nbsp;
                                <FontAwesomeIcon icon={faLinkedin} />&nbsp;
                                <FontAwesomeIcon icon={faMobileScreen} />&nbsp;
                                <FontAwesomeIcon icon={faEnvelope} />&nbsp;
                            </Card.Subtitle>
                            <Card.Text>
                                Icons(brand and generic) for free use
                            </Card.Text>
                            <Card.Link href="www.fontawesome.com/">www.fontawesome.com/</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Code Languages</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><br/></Card.Subtitle>
                            <Card.Text>
                                HTML5, CSS3, React 18.2.0, Bootstrap 5.2.2
                            </Card.Text>
                            <Card.Link href="https://reactjs.org/">https://reactjs.org/</Card.Link><br/>
                            <Card.Link href="https://react-bootstrap.github.io/">https://react-bootstrap.github.io/</Card.Link>
                        </Card.Body>
                    </Card>
                </div>                            
            </div>
            
        </section>  
    );
}

export default SourceRef;