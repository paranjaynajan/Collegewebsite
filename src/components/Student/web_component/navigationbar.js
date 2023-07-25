import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Form, Button, Dropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap"


function Navigationbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Student Section</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to='/'><Nav.Link >Home</Nav.Link></LinkContainer>
            <LinkContainer to='/Department'><Nav.Link >Department</Nav.Link></LinkContainer>
            <LinkContainer to='/Students'><Nav.Link >Students</Nav.Link></LinkContainer>
            <LinkContainer to='/Records'><Nav.Link >Records</Nav.Link></LinkContainer>
            <LinkContainer to='/Forms'><Nav.Link >Form</Nav.Link></LinkContainer>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Paranjay Najan
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-2">Change Password</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>

      </Navbar>



    </>
  );
}

export default Navigationbar;
{/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Employee "
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form> */}