// const { Component } = require("react")

import React, { Component } from "react";
import USERS from './data/info';

class Users extends Component {


  render() {
    
    return (
      <div>
      <h2>Latest Signups</h2>
        <div>
      
            {
            USERS.map(USER => {
              return(
                {USER.name}
              );

            })
          }
          </div>
          
          </div>  
    )

  }

}

export default Users;