import React from "react";
import { useInView } from 'react-intersection-observer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import Table from 'react-bootstrap/Table';



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

function getAge(){
    const bday = new Date("1991/07/13");
    var cur = new Date();
    var diff = cur-bday; // This is the difference in milliseconds
    var age = Math.floor(diff/31557600000); // Divide by 1000*60*60*24*365.25
    return(age);  
}


function Profile(){

    const { ref:myRef, inView:activeSection, entry } = useInView({threshold: .70});

    
    return (
        <section id="profileTile" ref={myRef}>
            {/* {console.log(activeSection)} */}
            {activeSection ? scrollTrigger(entry.target.id.toString()) : null}
            <div className="sectionDivider"></div>
            <Container fluid className="profileContainer">
            <h1 id="sectionTitle">Profile</h1>
            <div className="profileImageHolder">
                <div className="profileImageInner">
                    <img className="profileImg" src={require('./images/Group-1.png')} alt="Logo" />
                </div>
            </div>
            
            <Row className="profileRow">
            <Col lg={4} md={12} className="profileCol">
                <Card className="profileCard">
                    <Card.Header>
                        <div className="cardText">
                            <FontAwesomeIcon icon={faAddressCard}  className="profileIcon"/>
                            <br />
                            About Me
                            <p className="cardContent">I am a self-taught Full-Stack developer learning through research, online courses, and trial and error. I also dabble in the equity and crypto markets.</p>                            
                        </div>                        
                    </Card.Header>
                </Card>
            </Col>
            <Col lg={4} md={12} className="profileCol">
                <Card className="profileCard">
                    <Card.Header>
                        <div className="cardText">
                            <FontAwesomeIcon icon={faUserCircle}  className="profileIcon"/>
                            <br />
                            Details
                            <Table>
                                <tbody className="cardContent">
                                    <tr>
                                        <td className="profileTableLeft">Name:</td>
                                        <td className="profileTableRight">Cristian Calo</td>
                                    </tr>
                                    <tr>
                                        <td className="profileTableLeft">Age:</td>
                                        <td className="profileTableRight">{getAge()}</td>
                                    </tr>
                                    <tr>
                                        <td className="profileTableLeft">Location:</td>
                                        <td className="profileTableRight">New York City & <br />Pobra do Caramiñal</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card.Header>
                </Card>
            </Col>
            <Col lg={4} md={12} className="profileCol">
                <Card className="profileCard">
                    <Card.Header>
                        <div className="cardText">
                            <FontAwesomeIcon icon={faCircleInfo}  className="profileIcon"/>
                            <br />
                            Other Stuff
                            <Table className="cardContent">
                                <tbody >
                                    <tr>
                                        <td className="profileTableLeft">Languages:</td>
                                        <td className="profileTableRight">
                                            English (Native)<br />
                                            Spanish (Native)<br />
                                            Galician (Intermediate)<br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="profileTableLeft">Hobbies:</td>
                                        <td className="profileTableRight">
                                            Working Out<br />
                                            Everything Fútbol<br />
                                            Traveling<br />
                                        </td>
                                    </tr>                                
                                </tbody>
                            </Table>
                        </div>
                    </Card.Header>
                </Card>
            </Col>
                
            </Row>
            </Container>            
        </section> 
    );
}

export default Profile;