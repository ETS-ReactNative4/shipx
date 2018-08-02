import React from 'react'
// import Header from '../components/Header'
import Footer from '../components/Footer'
import AboveFooter from '../components/AboveFooter';
import HowItWorks from '../components/HowItWorks.js';


class Homepage extends React.Component {

  render(){
    return(
      <div className="home">
        {/* < Header className = "header" /> */}
        <div id="body">
            <div className="welcome">
                The fastest way to request anything (legal) from anywhere (on earth) and get it delivered
            </div>
            <div><hr/></div>
            <div>
              <div className="how-it-works-text">
                  HOW IT WORKS
              </div>
              <div id='anythingWherever'>Anything. From Anywhere. To wherever.</div>
            </div>

            <div className="how-it-works-container">
                <HowItWorks />
            </div>
            
        </div>
        <AboveFooter className="Above-footer"/>
        <Footer className="App-footer"/>
      </div>
    )
  }
}

export default Homepage