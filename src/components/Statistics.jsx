
import React, { Component } from 'react';
import userData from '../data/userData';
import './App.scss';

class Statistics extends Component {
  render() {
    return (
      <div>
        {userData.individuals.map((individual) => {
          return (
            <div>
              <table class='table'>
                <tbody>
                  <tr>
                    <td>{individual.signups}</td>
                    <td>{individual.investment}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Statistics;
