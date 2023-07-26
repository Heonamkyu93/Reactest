import './App.css';
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';


const StyledHeader = styled.header`
  background-color: blue;
  color: white;
  padding: 10px;
`;







function App() {
  return (
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
