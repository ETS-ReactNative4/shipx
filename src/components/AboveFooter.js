import React from 'react';
import { Button } from '../../node_modules/semantic-ui-react';
import { Link } from 'react-router-dom';


class AboveFooter extends React.Component {

  render(){
    return(
        <div className="Above-footer">
            <div >
                <div id="anything-div">
                    <h1 id="anything">
                        Anything you want, from anywhere. One stop to have it all. Zero reasons to wait.
                    </h1>
                </div>
                <div id="button-above-footer">
                    <Link to="/create"><Button size="massive" className="ui color1 button">SUBMIT REQUEST</Button></Link>
                </div>
            </div>
        </div>
    )
  }
}

export default AboveFooter