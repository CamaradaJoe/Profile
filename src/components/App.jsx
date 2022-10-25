import React from "react";
import Cover from "./Cover";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Profile from "./Profile";
import Contact from "./Contact";
import SourceRef from "./SourceRef";
import Experience from "./Experience";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
   
    return (
        <div>
            <Navigation />
            <Cover />
            <Profile />
            <Experience />
            <Portfolio />  
            <Contact />
            <SourceRef />
            <Footer/>
        </div>
        
    );
    
}

export default App;