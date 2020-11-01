import React from 'react';
import logo from './logo.svg';
import './App.css';
import './props.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomePage from './comps/home';
import Header from './comps/header';
import Footer from './comps/footer';

function App() {
  return (
    
    <BrowserRouter>
    <Header />
    <Route path='/' component={HomePage} />
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
