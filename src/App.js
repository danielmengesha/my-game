import React, { Component } from 'react';
import Header from './components/Header';

import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login'

import './css/main.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter >
      <div className="App">
       
          <Navbar />
          <Header  />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component ={Login} />
         
          
      </div>
          
      
       
       
      </BrowserRouter>
    );
  }
}

export default App;
