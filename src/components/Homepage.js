import React from 'react'
// import Header from '../components/Header'
import Footer from '../components/Footer'
import AboveFooter from '../components/AboveFooter';
import HowItWorks from '../components/HowItWorks.js';


class Homepage extends React.Component {

  render(){
    return(
      <div>
        {/* < Header className = "header" /> */}
        <div>
            <div className="welcome">
                The fastest way to shop from your home country and get it delivered
            </div>

            <div className="how-it-works">
                HOW IT WORKS
            </div>

            <div>
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