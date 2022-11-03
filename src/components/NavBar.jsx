import React from "react";
import { BsAlarm } from "react-icons/bs";
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="shadow"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Mekrez Admin
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown
                title={
                  <BsAlarm
                    className="d-inline-block align-top"
                    width="30"
                    height="30"
                  />
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="edit-profile">
                  Edit profile
                </NavDropdown.Item>
                <NavDropdown.Item href="change-password">
                  Change Password
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="logout">Logout</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <img
                    alt=""
                    src="../logo192.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="edit-profile">
                  Edit profile
                </NavDropdown.Item>
                <NavDropdown.Item href="change-password">
                  Change Password
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
