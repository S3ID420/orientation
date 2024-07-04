'use client'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button, 
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarComponent.css'; 
import Link from 'next/link';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggle = () => setIsOpen(!isOpen);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <div>
      <Navbar color="light" light expand="md" className="custom-navbar">
        <NavbarBrand href="/">
        <img className='px-3 '
        alt="logo"
        src="Vector.png"
       ></img>Orientini
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto my-auto d-flex " navbar> 
            <NavItem>
              <Link
                href="#AboutUs"
                onClick={() => handleNavLinkClick('AboutUs')}
                className={`nav-link ${activeLink === 'AboutUs' ? 'active' : ''}`}
              >
                About Us
              </Link>
            </NavItem>
            <NavItem>
              <Link
                href="#services"
                onClick={() => handleNavLinkClick('services')}
                className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
              >
                Services
              </Link>
            </NavItem>
            <NavItem>
              <Link
                href="#actualites"
                onClick={() => handleNavLinkClick('actualites')}
                className={`nav-link ${activeLink === 'actualites' ? 'active' : ''}`}
              >
                Actualités
              </Link>
            </NavItem>
            <NavItem>
              <Link
                href="#feedback"
                onClick={() => handleNavLinkClick('feedback')}
                className={`nav-link ${activeLink === 'feedback' ? 'active' : ''}`}
              >
                Feedback
              </Link>
            </NavItem>
            <NavItem>
              <Link
                href="#contact"
                onClick={() => handleNavLinkClick('contact')}
                className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              >
                Contact Us
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <Link href="Signup"><Button  className="me-2">Se connecter</Button></Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
