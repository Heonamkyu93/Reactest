import React from 'react';
import styled from 'styled-components';


const StyleFooter=styled.footer`
height: 10vh;
  width: 100%;
  border-top: gray solid 1px;
  bottom: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
  color: gray;
  font-size: small;

`; 
const Footer = () => {
    return (
        <StyleFooter>
            <small>풋터</small>
        </StyleFooter>
    );
};

export default Footer;