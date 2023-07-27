import './App.css';
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Route, Routes ,BrowserRouter } from 'react-router-dom';
import Test from './component/Test';
import Test2 from './component/Test2';
import FirstPage from './screen/FirstPage';


function App() {
  return (
    <div>
        <Header/>
        
        <Routes>
          <Route path="/" element={<FirstPage/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
					<Route path="/test2" element={<Test2/>}></Route>
				</Routes>
        <Footer/>
    </div>
  );
}

export default App;
