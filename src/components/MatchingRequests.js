import React from 'react'
import RequestCard from './RequestCard'
import { Label } from '../../node_modules/semantic-ui-react';

class MatchingRequests extends React.Component {

  render(){
    return(
      <div>

        <div id="matches-main">
          <div id="from-matches">
            <label>FROM</label> <h3>NEW YORK</h3>
          </div>
          <div id="to-matches">
            <label>TO</label> <h3>LONDON</h3>
          </div>
        </div>

        <div className="card-in-matches">
          <RequestCard />
        </div>
      </div>
    )
  }
}

export default MatchingRequests