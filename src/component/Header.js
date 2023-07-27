import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from 'styled-components';
import { Navbar, Nav, Container,Button,NavDropdown,Form,Offcanvas } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const StyleHeader = styled.header`
 background-color: white;
 position: fixed;
 top: 0;
 width: 100%;
 height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const StyledUL = styled.ul`
  list-style-type: none;
`;

const StyledLI = styled.li`
  display: inline;
  margin-right: 10px;
`;
const Header = () => {
  return (
   <StyleHeader>
    <Link to='/'>dsa</Link>
    <Link to='/test'>dsa</Link>
    <StyledUL><StyledLI><Link to='/'>dsa</Link></StyledLI>
    <StyledLI><Link to='/'>dsa</Link></StyledLI>
    </StyledUL> 
   </StyleHeader>
  );
};

export default Header;