import React from 'react';
import 'bulma';


class Header extends React.Component {
  render() {
    return (
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
    );
  }
}