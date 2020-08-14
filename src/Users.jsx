// const { Component } = require("react")

import React, { Component } from "react";
import USERS from './data/users'
import './App.scss';

class Users extends Component {
  render () {
  return (
      <div>
      
        {

          USERS.map(USER => {
            return (

            
            <table class = "table">
               <tbody>
                  <tr>
                     <td>{USER.name}</td>
                     <td>{USER.meetingTime}</td>
                     
                  </tr>
                  
               </tbody>
            </table>
            
            
           );

          })
        }

    </div>
   ) 
  }
}

export default Users;