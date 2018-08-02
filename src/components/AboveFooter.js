import React from 'react';
import { Button } from '../../node_modules/semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class AboveFooter extends React.Component {

    render(){
    return(
        <div className="Above-footer">
            <div >

                {(!this.props.currentUser.id) ?
                <div>
                    <div id="anything-div">
                        <h1 id="anything">
                            Anything you want, from anywhere. One stop to have it all. Zero reasons to wait.
                        </h1>
                    </div>
                    <div id="button-above-footer">
                        <Link to="/signup"><Button size="massive" className="ui color1 button">SIGN UP</Button></Link>
                    </div> 
                </div> : null}

                {(this.props.currentUser.type === 'Expat') ?
                <div>
                    <div id="anything-div">
                        <h1 id="anything">
                            Anything you want, from anywhere. One stop to have it all. Zero reasons to wait.
                        </h1>
                    </div>
                    <div id="button-above-footer">
                        <Link to="/create"><Button size="massive" className="ui color1 button">SUBMIT REQUEST</Button></Link>
                    </div> 
                </div> : null }

                {(this.props.currentUser.type === "Traveler") ?
                <div>
                    <div id="anything-div">
                        <h1 id="anything">
                            Earn extra money on every trip. We give you plenty of reasons to travel more.
                        </h1>
                    </div>
                    <div id="button-above-footer">
                        <Link to="/addtrip"><Button size="massive" className="ui color1 button">ADD TRIP</Button></Link>
                    </div>
                </div> : null}

            </div>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.authentication.currentUser
    }
}

export default connect(mapStateToProps)(AboveFooter)