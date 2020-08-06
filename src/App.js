import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bulma';

class App extends Component {
  render() {
    return (
      // Main navbar code starts
      <div>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a href='/' className='navbar-item'>
            <img src='logo.png' alt='Logo' width='112' height='32' />
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
      <nav class="level">
        <div class="level-left">
          <div class="level-item has-text-centered"> 
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Overview
            </a>
            <div class="navbar-dropdown">
              <a href="./" class="navbar-item">
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
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Total signups</p>
            <p class="title">648</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Last weeks</p>
            <p class="title">12</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Total investments</p>
            <p class="title">102</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Average investment</p>
            <p class="title">NOK 345,565</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Total exits</p>
            <p class="title">23</p>
          </div>
        </div>
        </div>
      </nav> 
      </div>  
    );
  }
}

export default App;
