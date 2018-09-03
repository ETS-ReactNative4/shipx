import React from 'react'
// import Header from '../components/Header'
import Footer from '../components/Footer'
import AboveFooter from '../components/AboveFooter';
import HowItWorks from '../components/HowItWorks.js';


class Homepage extends React.Component {

  render(){
    return(
      <div className="home">
        <div id="body">
            <div>
                <p className="fasted-way-msg">The fastest way to order or request anything from the U.S.A and get it delivered.</p>
            </div>
            <div><hr/></div>
            <div>
              <div>
                  <h1 className="how-it-works-text">HOW IT WORKS</h1>
                  <p className='anything-wherever'>Order or Request Anything From the U.S.</p>
              </div>
            </div>

            <div className="how-it-works-container">
                <HowItWorks />
            </div>
            
        </div>
        <div><hr/></div>
        <AboveFooter className="Above-footer"/>
        <Footer className="App-footer"/>
      </div>
    )
  }
}

export default Homepage