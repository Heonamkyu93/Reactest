import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  height: 12vh;
  width: 100vw;
  background-color: tomato;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Navi(){
    return(
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

const Header = () => {
  return <StyledHeader>
    <Navi/>
  </StyledHeader>;
};

export default Header;
