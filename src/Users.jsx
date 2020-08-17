// const { Component } = require("react")

import React, { Component } from 'react';
import userData from './data/userData';
// import Users from './data/userData'
import './App.scss';

class Users extends Component {
  render() {
    return (
      <div>
        {userData.individuals.map((individual) => {
          return (
            <div>
              <table class='table'>
                <tbody>
                  <tr>
                    <td>{individual.name}</td>
                    <td>{individual.meetingTime}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    )
  }
}

export default Users;
