import React, { Component } from "react";
import "zingchart/es6";
import ZingChart from "zingchart-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import TotalSignups from './TotalSignups.jsx';
import {Users} from './Users';
import logo from './logo.svg';
import './App.scss';
import 'bulma';

class App extends Component {
  render() {
    return (
      
      //Main navbar code starts 
      <div class="flex-wrap">
      <Router>
        {/* <Switch>
        <Route path="/">
          <TotalSignups />
        </Route>
        </Switch>
      </Router>  */}
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a href='/' className='navbar-item'>
            <img src='logo.png' alt='Logo' width='112' height='42' />
          </a>
          <a
            href='/'
            role='button'
            className={'navbar-burger burger'}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <a href='/' className='navbar-item'>
                Account
              </a>
              <a href='/' className='navbar-item'>
                Charts
              </a>
              <a href='/' className='navbar-item'>
                Help
              </a>
              <a href='/' className='navbar-item'>
                Avatar
              </a>
            </div>
          </div>
        </div>
      </nav> 
      {/* level code starts */}
      {/* <section class="section"> */}
         {/* <div class="container"> */}
      {/* <nav class="level"> */}
        {/* <div class="level-left">   */}

          {/* <div class="level-item has-text-centered">   */}
          <section class="data-overview">
          <div class="columns">
          <div class="column has-text-centered">
          <div class="box">
          <div class="navbar-item has-dropdown is-hoverable">
            <a href='/' class="navbar-link level-item">
              Overview
            </a>
            <div class="navbar-dropdown">
              <a href='/' class="navbar-item">
                Overview
              </a>
              <a href="./" class="navbar-item">
                Elements
              </a>
              <a href="./" class="navbar-item">
                Components
              </a>
            </div>
          </div>
        </div> 
        </div> 
    
        {/* <div class="level-item has-text-centered"> */}
        <div class="column has-text-centered">
        <div class="box">
          <div>
            <p class="heading">Total signups</p>
            <p class="title">648</p>
          </div>
        </div>
        </div>
        {/* <div class="level-item has-text-centered">  */}
        <div class="column has-text-centered">
        <div class="box">
          <div>
            <p class="heading">Last weeks</p>
            <p class="title">12</p>
          </div>
        </div>
        </div>
        {/* <div class="level-item has-text-centered">  */}
        <div class="column has-text-centered">
        <div class="box">
          <div>
            <p class="heading">Total investments</p>
            <p class="title">102</p>
          </div>
        </div>
        </div>
        {/* <div class="level-item has-text-centered">  */} 
        <div class="column has-text-centered">
        <div class="box">
          <div>
            <p class="heading">Average investment</p>
            <p class="title">NOK 345,565</p>
          </div>
        </div>
        </div>
        {/* <div class="level-item has-text-centered">  */}
        <div class="column has-text-centered">
        <div class="box">
          <div>
            <p class="heading">Total exits</p>
            <p class="title">23</p>
          </div>
        </div>
        </div>
        </div>
      </section>  
      {/* </div> */}
      {/* </nav> */}
      {/* </div> */}
      {/* </section> */}
      <section class="company-details">
      {/* <div id="navbarBasicExample" class="navbar-menu"> */}
    <div class="navbar-start">
    {/* <Link to="/" className="button">Simple</Link> */}
      
      <a href="/total-signups" class="navbar-item" name="button">
        signups
      </a>
      <a href="/investment" class="navbar-item" name="button">
        investments
      </a>
      <a href="/revenue" class="navbar-item" name="button">
        revenue
      </a>
      <a href="/exits" class="navbar-item" name="button">
        exits
      </a>
      <a href="/trades" class="navbar-item" name="button">
        trades
      </a>
      </div>
    {/* </div> */}
    </section>
    <aside class="side-nav">
    <div class="columns">
      <div class="column is-one-fourth">
        <p class="buttons">
          <a href='/' class="button is-medium">
            <span class="icon is-medium">
            <img src="Group 174.svg" alt='Logo' width='25' height='25' />
            </span>
          </a>
        </p>
        <p class="buttons">
          <a href='/' class="button is-medium">
            <span class="icon is-medium">
              <img src="funds.svg"alt='Logo' width='25' height='25' />
            
              {/* <i class="fas fa-heading"></i> */}
            </span>
          </a>
        </p>
        <p class="buttons">
          <a href='/' class="button is-medium">
            <span class="icon is-medium">
            <img src="Path 188.svg" alt='Logo' width='25' height='25' />
            
            </span>
          </a>
        </p>
        <p class="buttons">
          <a href='/' class="button is-medium">
            <span class="icon is-medium">
            <img src="history.svg" alt='Logo' width='25' height='25' />
            </span>
          </a>
        </p>
        <p class="buttons">
          <a href='/' class="button is-medium">
            <span class="icon is-medium">
            <img src="verification.svg" alt='Logo' width='25' height='25' />
            </span>
          </a>
        </p>
        <p class="buttons">
          <a href='/'  class="button is-medium">
            <span class="icon is-medium">
            <img src="locked.svg" alt='Logo' width='25' height='25' />
            </span>
          </a>
        </p>
      </div>
      <div class="column">
        <h1>Individuals</h1>
        <canvas id="myCanvas" width="100%" height="100">  
        </canvas>
      </div>
      <div class="column">
        <h1>Total Signups</h1>
        {/* <canvas id="myCanvas" width="100%" height="100"> */}
        {/* <Switch> */}
        <Route path="/total-signups">  
          <TotalSignups />
        </Route> 
        {/* </Switch> */}
        {/* </canvas> */}
      </div>
      <div class="column">
        <h1>Companies</h1>
        <canvas id="myCanvas" width="100%" height="100">  
        </canvas>
      </div>
      <div class="column">
        <h1>Latest Signups</h1>
        <Route path="/ ">  
          <Users />
        </Route> 
      </div>
      </div>
      </aside> 
      </Router>   
  </div> 
   
    );
  }
}

export default App;
