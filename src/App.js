import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch, withRouter } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from './components/Homepage';
import CreateRequest from './components/CreateRequest';
import AddTrip from './components/AddTrip';
import Profile from './components/Profile';
import RequestCardView from './components/RequestCardView';
import MatchingRequests from './components/MatchingRequests';
import ExpatSignUp from './components/ExpatSignUp';
import TravelerSignUp from './components/TravelerSignUp';
import Login from './components/Login';
import RequestsList from './components/RequestsList';
import TripsList from './components/TripsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="header"/>
          <Switch>
            <div>
            {/* <Route component={Header} /> */}
            {/* <Header {...this.props} className="header"/> */}

            <Route exact path="/login" component={Login}/>

            <Route exact path="/home"  component={Homepage}/>
            <Route exact path="/"  component={Homepage}/>

            <Route exact path="/create" component={CreateRequest}/>

            <Route exact path="/cardview" component={RequestCardView}/>

            <Route exact path="/addtrip" component={AddTrip}/>

            <Route exact path="/expatprofile" component={Profile}/>

            <Route exact path="/trips" component={TripsList}/>

            <Route exact path="/requests" component={RequestsList}/>

            <Route exact path="/signup" component={ExpatSignUp}/>

            <Route exact path="/traveler" component={TravelerSignUp}/>

            <Route exact path="/profile" component={Profile}/>

            </div>

          </Switch>
        {/* <Footer className="App-footer"/> */}
      </div>
    );
  }
}

export default App;
