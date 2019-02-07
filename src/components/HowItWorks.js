import React from 'react'
import { Icon } from '../../node_modules/semantic-ui-react';
import { connect } from 'react-redux';
class HowItWorks extends React.Component {

  render(){
    return(
      <div>
        { this.props.currentUser.id ? null :
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
        }

        { this.props.currentUser.type === 'Expat' ?
        <div className="how-it-works">
        
          <div class="how-to-icon">
              <i style={{color: "teal"}} class="laptop icon"></i>
              <h3 className="how-to">Browse Online Stores</h3>
          </div>

          <div class="how-to-icon">
              <i style={{color: "teal"}} class="cart plus icon"></i>
              <h3 className="how-to">Submit New Order</h3>
          </div>

          <div class="how-to-icon">
              <i style={{color: "teal"}} class="envelope icon"></i>
              <h3 className="how-to">Receive Email Confirmation</h3>
          </div>

          <div class="how-to-icon">
              <i style={{color: "teal"}} class="credit card icon"></i>
              <h3 className="how-to">Submit Payment</h3>
          </div>

          < div className = "how-to-icon">
              <i style={{color: "teal"}} class="shipping fast icon"></i>
              <h3 className="how-to">We Deliver Your Package</h3>
          </div> 

        </div> : null}

        { this.props.currentUser.type === 'Traveler' ?
          <div className="how-it-works">
          
            <div class="how-to-icon">
                <i style={{color: "teal"}} class="plane icon"></i>
                <h3 className="how-to">Add Your Trip</h3>
            </div>

            <div class="how-to-icon">
                <i style={{color: "teal"}} class="boxes icon"></i>
                <h3 className="how-to">Get Matched With Packages</h3>
            </div>

            <div class="how-to-icon">
                <i style={{color: "teal"}} class="envelope open icon"></i>
                <h3 className="how-to">Receive Email and Confirm</h3>
            </div>

            <div class="how-to-icon">
                <i style={{color: "teal"}} class="dolly flatbed icon"></i>
                <h3 className="how-to">Receive Packages and Deliver</h3>
            </div>

            < div className = "how-to-icon">
                <i style={{color: "teal"}} class="money bill alternate icon"></i>
                <h3 className="how-to">Get Paid</h3>
            </div> 

          </div> : null}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.authentication.currentUser
  }
}

export default connect(mapStateToProps) (HowItWorks)