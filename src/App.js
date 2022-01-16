// import logo from './logo.svg';
import './App.css';
import NavBar from  './components/NavBar'
import News from './components/News';
 

import React, { Component } from 'react'
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=5;
  
  
  render() {
    return (
      <div>
        <Router>
        <NavBar></NavBar>
        <LoadingBar
        color='#f11946'
        progress={10}
        
      />
       
        <Switch>
          <Route exact path="/">
          <News key="general" pageSize={5} country="in" category=""></News>
           
          </Route>
          <Route exact path="/sports">
          <News key="sports" pageSize={5} country="in" category="sports"></News>
           
          </Route>
          <Route exact path="/bussiness">
          <News key="bussiness" pageSize={5} country="in" category="bussines"></News>
           
          </Route>
          <Route exact path="/entertainment">
          <News key="entertainment" pageSize={5} country="in" category="entertainment"></News>
           
          </Route>
          <Route exact path="/health">
          <News key="health" pageSize={5} country="in" category="health"></News>
           
          </Route>
          <Route exact path="/science">
          <News key="science" pageSize={5} country="in" category="science"></News>
           
          </Route>
          <Route exact path="/technology">
          <News key="technology" pageSize={5} country="in" category="technology"></News>
           
          </Route>
          
          
        </Switch>
        </Router>

     
        
      </div>
    )
  }
}




