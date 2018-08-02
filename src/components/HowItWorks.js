import React from 'react'
import { Icon } from '../../node_modules/semantic-ui-react';

class Login extends React.Component {

  render(){
    return(
      <div className="how-it-works">
        <div class="laptop-icon">
            <i class="laptop icon"></i>
            <h3 className="how-to">Sign up in 37 seconds</h3>
        </div>

        <div class="add-sign-box-icon">
            <i class="add sign box icon"></i>
            <h3 className="how-to">Add a Request</h3>
        </div>

        < div className = "suitcase-icon">
            <i class="suitcase icon"></i>
            <h3 className="how-to">Receive Your Request</h3>
        </div>
      </div>
    )
  }
}

export default Login