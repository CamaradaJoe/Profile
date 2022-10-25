import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NaviBar(){
    return (
        <>
            <Navbar bg="transparent" variant="transparent">
                <Container>
                <Nav className="me-auto nav-fill">
                    <Nav.Link href="#profileTile" id='profileTileLink'>Profile</Nav.Link>
                    <Nav.Link href="#experienceTile" id='experienceTileLink'>Experience</Nav.Link>
                    <Nav.Link href="#portfolioTile" id='portfolioTileLink'>Portfolio</Nav.Link>
                    <Nav.Link href="#contactTile" id='contactTileLink'>Contact Info</Nav.Link>
                    <Nav.Link href="#sourceTile" id='sourceTileLink'>Sources</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NaviBar;
