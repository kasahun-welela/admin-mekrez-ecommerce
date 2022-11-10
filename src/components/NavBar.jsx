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
              <Nav.Link href="dashboard">Dashboard</Nav.Link>

              <NavDropdown title="Manage Product" id="collasible-nav-dropdown">
                <NavDropdown.Item Link to="add-product/">
                  Add Product
                </NavDropdown.Item>
                <NavDropdown.Item href="/update-product">
                  Update Product
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="add-model">Add Model</NavDropdown.Item>
                <NavDropdown.Item href="edit-model">
                  Edit Model
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Manage Category" id="collasible-nav-dropdown">
                <NavDropdown.Item href="create-category">
                  Create Category
                </NavDropdown.Item>
                <NavDropdown.Item href="update-category">
                  Update Category
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="create-subcategory">
                  Create Sub Category
                </NavDropdown.Item>
                <NavDropdown.Item href="update-subcategory">
                  update Sub Category
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Manage Shop" id="collasible-nav-dropdown">
                <NavDropdown.Item href="create-shop">
                  Create Shop
                </NavDropdown.Item>
                <NavDropdown.Item href="edit-shop">Edit Shop</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="delivery">Delivery</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                title={
                  <BsAlarm
                    className="d-inline-block align-center"
                    width="500px"
                    height="500"
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
                    src="../myPhoto.jpeg"
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
            <Navbar.Text>Admin</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
