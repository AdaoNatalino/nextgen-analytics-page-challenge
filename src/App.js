import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bulma';

class App extends Component {
  render() {
    return (
      // Main navbar code starts
      <div class="flex-wrap">
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
            <a class="navbar-link level-item">
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
    <div class="columns is-mobile">
      <div class="column is-one-fifth">
        <p class="bd-notification">
        <p class="buttons">
          <a class="button is-medium">
            <span class="icon is-medium">
            <img src="Group 174.svg" alt='Logo' width='25' height='25' />
            </span>
          </a>
        </p>
        <p class="buttons">
          <a class="button is-medium">
            <span class="icon is-medium">
              <img src="funds.svg"alt='Logo' width='25' height='25' />
            
              {/* <i class="fas fa-heading"></i> */}
            </span>
          </a>
        </p>
        <p class="buttons">
          <a class="button is-medium">
            <span class="icon is-medium">
            <img src="Path 188.svg" alt='Logo' width='25' height='25' />
            
            </span>
          </a>
        </p>
        <p class="buttons">
          <a class="button is-medium">
            <span class="icon is-medium">
            <img src="history.svg" alt='Logo' width='25' height='25' />
            </span>
          </a>
        </p>
        <p class="buttons">
          <a class="button is-medium">
            <span class="icon is-medium">
            <img src="verification.svg" alt='Logo' width='25' height='25' />
            </span>
          </a>
        </p>
        <p class="buttons">
          <a class="button is-medium">
            <span class="icon is-medium">
            <img src="locked.svg" alt='Logo' width='25' height='25' />
            </span>
          </a>
        </p>

        </p>
      </div>
      <div class="column is-four-fifths">
      <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Signups
      </a>
      <a class="navbar-item">
        Investments
      </a>
      <a class="navbar-item">
        Revenue
      </a>
      <a class="navbar-item">
        Exits
      </a>
      <a class="navbar-item">
        Trades
      </a>
      </div>
      <div class="navbar-end">
      <div class="navbar-item">
        
        </div>
      </div>
    </div>
      </div>
      </div> 
      <div class="column is-two-fifths"> 
        <p class="bd-notification">40%</p>
      </div>
      <div class="column is-two-fifths">
        <p class="bd-notification">40%</p>
      </div>
    </div> 
    
    );
  }
}

export default App;
