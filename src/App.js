import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Doughnut from './Doughnut.jsx';
// import Companies from './Companies.jsx';
import Users from './Users.jsx';
import GreenChart from './GreenChart.jsx';
import VioletChart from './VioletChart.jsx';
// import { render } from "react-dom";
//import $ from "jquery";
import './App.scss';
import 'bulma';

class App extends Component {
  render() {
    return (
      //Main navbar code starts
      <div class='flex-wrap'>
        <Router>
          <nav
            className='navbar'
            role='navigation'
            aria-label='main navigation'
          >
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
                    <img src='avatar.png' alt='Logo' width='40' height='40' />
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <section class='data-overview'>
            <div class='columns'>
              <div class='column has-text-centered'>
                <div class='box'>
                  <div class='navbar-item has-dropdown is-hoverable'>
                    <a href='/' class='navbar-link level-item'>
                      Overview
                    </a>
                    <div class='navbar-dropdown'>
                      <a href='/' class='navbar-item'></a>
                      <a href='./' class='navbar-item'></a>
                      <a href='./' class='navbar-item'></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div class="level-item has-text-centered"> */}
              <div class='column has-text-centered'>
                <div class='box'>
                  <div>
                    <p class='heading'>Total signups</p>
                    <p class='title'>648</p>
                  </div>
                </div>
              </div>
              {/* <div class="level-item has-text-centered">  */}
              <div class='column has-text-centered'>
                <div class='box'>
                  <div>
                    <p class='heading'>Last weeks</p>
                    <p class='title'>12</p>
                  </div>
                </div>
              </div>
              {/* <div class="level-item has-text-centered">  */}
              <div class='column has-text-centered'>
                <div class='box'>
                  <div>
                    <p class='heading'>Total investments</p>
                    <p class='title'>102</p>
                  </div>
                </div>
              </div>
              {/* <div class="level-item has-text-centered">  */}
              <div class='column has-text-centered'>
                <div class='box'>
                  <div>
                    <p class='heading'>Average investment</p>
                    <p class='title'>NOK 345,565</p>
                  </div>
                </div>
              </div>
              {/* <div class="level-item has-text-centered">  */}
              <div class='column has-text-centered'>
                <div class='box'>
                  <div>
                    <p class='heading'>Total exits</p>
                    <p class='title'>23</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class='company-details'>
            {/* <div id="navbarBasicExample" class="navbar-menu"> */}
            <div class='navbar-start'>
              {/* <Link to="/" className="button">Simple</Link> */}

              <a href='/latest-signups' class='navbar-item' name='button'>
                signups
              </a>
              <a href='/investment' class='navbar-item' name='button'>
                investments
              </a>
              <a href='/revenue' class='navbar-item' name='button'>
                revenue
              </a>
              <a href='/exits' class='navbar-item' name='button'>
                exits
              </a>
              <a href='/trades' class='navbar-item' name='button'>
                trades
              </a>
            </div>
            {/* </div> */}
          </section>
          <aside class='side-nav'>
            <div class='columns'>
              <div class='column is-one-fourth'>
                <p class='buttons'>
                  <a href='/btn-line' class='button is-medium'>
                    <span class='icon is-medium'>
                      <img
                        src='Group 174.svg'
                        alt='Logo'
                        width='25'
                        height='25'
                      />
                    </span>
                  </a>
                </p>
                <p class='buttons'>
                  <a href='/' class='button is-medium'>
                    <span class='icon is-medium'>
                      <img src='funds.svg' alt='Logo' width='25' height='25' />

                      {/* <i class="fas fa-heading"></i> */}
                    </span>
                  </a>
                </p>
                <p class='buttons'>
                  <a href='/' class='button is-medium'>
                    <span class='icon is-medium'>
                      <img
                        src='Path 188.svg'
                        alt='Logo'
                        width='25'
                        height='25'
                      />
                    </span>
                  </a>
                </p>
                <p class='buttons'>
                  <a href='/' class='button is-medium'>
                    <span class='icon is-medium'>
                      <img
                        src='history.svg'
                        alt='Logo'
                        width='25'
                        height='25'
                      />
                    </span>
                  </a>
                </p>
                <p class='buttons'>
                  <a href='/' class='button is-medium'>
                    <span class='icon is-medium'>
                      <img
                        src='verification.svg'
                        alt='Logo'
                        width='25'
                        height='25'
                      />
                    </span>
                  </a>
                </p>
                <p class='buttons'>
                  <a href='/' class='button is-medium'>
                    <span class='icon is-medium'>
                      <img src='locked.svg' alt='Logo' width='25' height='25' />
                    </span>
                  </a>
                </p>
              </div>
              <section className='line-chart'>
                <div class='column'>
                  <h1></h1>
                  <div>
                  <Route path='/btn-line'>
                    <GreenChart />
                  </Route>
                  </div>
                </div>
                <div class='column'>
                  <h1></h1>
                  <div>
                  <Route path='/btn-line'>
                    <VioletChart />
                  </Route>
                  </div>

                </div>
              </section>
              <section className='signup-info'>
                <div class='column has-text-centered'>
                  <h1 className='total-signups'>Total Signups</h1>
                  {/* <Route path="/total-signups">  
          <Users />
        </Route>  */}
                </div>
                <div class='nav-filter'>
                  <ul>
                    <span className='filter-banner'>By Gender</span>
                    <li class='dropdown'>
                      <div class='dropdown-trigger'>
                        <button
                          class='button'
                          aria-haspopup='true'
                          aria-controls='dropdown-menu3'
                        >
                          <span>Female</span>
                          <span class='icon is-small'>
                            <i class='fas fa-angle-down' aria-hidden='true'></i>
                          </span>
                        </button>
                      </div>
                      <div
                        class='dropdown-menu'
                        id='dropdown-menu3'
                        role='menu'
                      >
                        <div class='dropdown-content'>
                          <a href='/' class='dropdown-item'>
                            Male
                          </a>
                        </div>
                      </div>
                    </li>
                    <li class='dropdown'>
                      <div class='dropdown-trigger'>
                        <button
                          class='button'
                          aria-haspopup='true'
                          aria-controls='dropdown-menu3'
                        >
                          <span>Individual</span>
                          <span class='icon is-small'>
                            <i class='fas fa-angle-down' aria-hidden='true'></i>
                          </span>
                        </button>
                      </div>
                      <div
                        class='dropdown-menu'
                        id='dropdown-menu3'
                        role='menu'
                      >
                        <div class='dropdown-content'>
                          <a href='/' class='dropdown-item'>
                            Company
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class='column has-text-centered'>
                  <h1 className='latest-signups'>Latest Signups</h1>
                  <thead>
                    <tr>
                      <th className='title-name'>Name</th>
                      <th className='title-meeting'>Scheduled Meeting</th>
                    </tr>
                  </thead>

                  <Route path='/btn-line'>
                    <Users />
                  </Route>
                </div>
              </section>
            </div>
          </aside>
        </Router>
      </div>
    );
  }
}

export default App;
