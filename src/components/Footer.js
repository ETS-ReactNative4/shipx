import React from 'react'
import { Icon } from '../../node_modules/semantic-ui-react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render(){
    return (
      <div className="App-footer" position="bottom">

        <div>
          <div id="travelers">TRAVELERS</div>
          <div style={{color: "#a0a0a0"}} id='travelers-text'>Become a ShipX traveler and 
            earn extra money to help cover for your
            trip every time you travel, up to $500 per trip.
            We give you reasons to travel more.
          </div>
        </div>

        <div>
          <div id="company">COMPANY</div>
          <div id="terms-policy"><Link to="#" style={{color: "#a0a0a0"}}>Terms</Link></div>
          <div id="terms-policy-2"><Link to="#" style={{color: "#a0a0a0"}}>Privacy Policy</Link></div>
        </div>

        <div>
          <div id="contact">CONTACT US</div>
          <div style={{color: "#a0a0a0"}} type="email"><a href="mailto:hello@shipx.com?Subject=Hello%20TraXpaters" target="_top" style={{color: "#a0a0a0"}}>hello@shipx.com</a></div>
          <div style={{color: "#a0a0a0"}} type="tel">+1-646-504-5560</div>
          <div style={{color: "#a0a0a0"}}>81 Prospect St,</div>
          <div style={{color: "#a0a0a0"}}>Brooklyn, NY 11201</div>
          <div id="social-icons"><Icon name="twitter"/> <Icon  name="facebook" /> <Icon  name="instagram" /></div>
        </div>

        <div style={{color: "azure"}}>© ShipX Inc.</div>

      </div>
      );
  }
}

export default Footer