import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";

const NavbarAllPages = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"> <Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link"> <Link to="/about">About</Link></Nav.Link>
              <Nav.Link href="#link"> <Link to="/blog">Blog</Link></Nav.Link>
              <Nav.Link href="#link"> <Link to="/contact">Contact</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default NavbarAllPages;
