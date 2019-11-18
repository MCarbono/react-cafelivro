import React,{Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer'

export default props => 
    <BrowserRouter>
        <div className="app">
            <Header />
            <Nav />
            <Routes />
            
        </div>
    </BrowserRouter>
       
        
  
