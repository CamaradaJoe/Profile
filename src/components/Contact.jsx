import React, {useState} from "react";
import { useInView } from 'react-intersection-observer';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen  } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons';
import {Modal, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import emailjs from "emailjs-com"




function Contact(){
  
    
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

    const { ref:myRef, inView:activeSection, entry } = useInView({threshold: .70});
    


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
            
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
            +1-917-557-2012
            </Popover.Body>
        </Popover>
    );
    
    function sendEmailJS(e){
        e.preventDefault();

        emailjs.sendForm('service_9495qpk', 'template_0wus1d9', e.target, 'dmg8WEpOg8zw5qy6M')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setShow(false);
    }

    function openTwitLink(){
        window.open('https://twitter.com/CristianCalo13');
    }
    function openLinInLink(){
        window.open('https://www.linkedin.com/in/cristiancalo/');
    }
    function openGitLink(){
        window.open('https://github.com/CamaradaJoe');
    }

    return (
        <section id="contactTile" ref={myRef}>
            {/* {console.log(activeSection)} */}
            {activeSection ? scrollTrigger(entry.target.id.toString()) : null}
            <div className="sectionDivider">
            <div id="splitDivider">
                <hr id="splitter"/>
            </div>
            </div>
            <h1 id="sectionTitle">Contact Info</h1>
            <div className="contactContainer">
                <Table id="bTable">
                    <tr>
                        <button className="btn-background-slide" style={{"--c":'#00B6F1'}} onClick={openTwitLink}>                                
                            <Table id="contactInfo">
                                <tr>
                                    <td id="contactInfoLeft">Twitter</td>
                                    <td id="contactInfoRight"><FontAwesomeIcon icon={faTwitter} id="contactIcon"/></td>
                                </tr>
                            </Table>                           
                        </button>
                    </tr>
                    <tr>
                        <button className="btn-background-slide" style={{"--c":'#04669A'}} onClick={openLinInLink}>                              
                            <Table id="contactInfo">
                                <tr>
                                    <td id='contactInfoLeft'>LinkedIn</td>
                                    <td id='contactInfoRight'><FontAwesomeIcon icon={faLinkedin} id="contactIcon"/></td>
                                </tr>
                            </Table>                           
                        </button>
                    </tr>
                    <tr>
                        <button className="btn-background-slide" style={{"--c":'#040204'}} onClick={openGitLink}>                              
                            <Table id="contactInfo">
                                <tr>
                                    <td id='contactInfoLeft'>Github</td>
                                    <td id='contactInfoRight'><FontAwesomeIcon icon={faGithub} id="contactIcon"/></td>
                                </tr>
                            </Table>                           
                        </button> 
                    </tr>
                    <tr>
                        
                        <OverlayTrigger trigger="click" placement="right" overlay={popover} rootClose >
                            <button className="btn-background-slide" style={{"--c":'green'}}>                            
                                <Table id="contactInfo">
                                    <tr>
                                        <td id='contactInfoLeft'>Phone #</td>
                                        <td id='contactInfoRight'><FontAwesomeIcon icon={faMobileScreen} id="contactIcon"/></td>
                                    </tr>
                                </Table>                           
                            </button>
                        </OverlayTrigger>                        
                    </tr>
                    <tr>
                        <button className="btn-background-slide" style={{"--c":'GoldenRod'}} onClick={handleShow}>                          
                            <Table id="contactInfo">
                                <tr>
                                    <td id='contactInfoLeft'>Email</td>
                                    <td id='contactInfoRight'><FontAwesomeIcon icon={faEnvelope} id="contactIcon"/></td>
                                </tr>
                            </Table>                           
                        </button>
                        <Modal show={show} onHide={handleClose} backdrop="static" centered size="lg">
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Email
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={sendEmailJS}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Your Email:</Form.Label>
                                        <Form.Control
                                            type="email"
                                            required="required"
                                            placeholder="name@example.com"
                                            autoFocus
                                            name="email"
                                        />
                                        <Form.Label>Subject:</Form.Label>
                                        <Form.Control
                                            type="text"                                            
                                            placeholder="Subject"
                                            name="subject"                                            
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="contactEmailMessage"
                                    >
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" name="message"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" id="emailButtonsGroup">
                                        <Button className="emailButtons" variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button className="emailButtons" variant="primary" type="submit">
                                            Send
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                        </Modal>   
                    </tr>
                </Table>
            </div>
        </section> 
    );
}

export default Contact;