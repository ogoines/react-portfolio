import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Contact from "../pages/Contact";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";

function HeaderNav() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      
      <Tab eventKey="home" title="Home">
       <About />
      </Tab>
      <Tab eventKey="about" title="About">
       <About />
      </Tab>
      <Tab eventKey="portfolio" title="Portfolio">
       <Portfolio/>
      </Tab>
      <Tab eventKey="resume" title="Resume">
        <Resume /> 
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        <Contact />
      </Tab>
    </Tabs>
  );
}

export default HeaderNav;