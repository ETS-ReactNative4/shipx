import React from 'react'
import { Icon } from '../../node_modules/semantic-ui-react';

class HowItWorks extends React.Component {

  render(){
    return(
      <div className="how-it-works">
      
        <div class="how-to-icon">
            <i style={{color: "teal"}} class="laptop icon"></i>
            <h3 className="how-to">Sign up in seconds</h3>
        </div>

        <div class="how-to-icon">
            <i style={{color: "teal"}} class="add sign box icon"></i>
            <h3 className="how-to">Submit an Order or Request</h3>
        </div>

        < div className = "how-to-icon">
            <i style={{color: "teal"}} class="suitcase icon"></i>
            <h3 className="how-to">Package Gets Delivered</h3>
        </div>

      </div>
    )
  }
}

export default HowItWorks