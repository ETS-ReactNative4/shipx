import React from 'react'
import TripCard from './TripCard';
import RequestCard from './RequestCard';
import { connect } from 'react-redux';
import { fetchAllTrips } from '../actions/index';
import { fetchAllRequests, getSelectedTrip  } from '../actions/index';
import { Card } from 'semantic-ui-react'
import MatchingRequests from './MatchingRequests';


class Profile extends React.Component {

  componentDidMount() {
    let id = this.props.currentUser.id
    if (id) {
      if (this.props.currentUser.type === 'Traveler') {
        this.props.fetchAllTrips(id)
      } else {
        this.props.fetchAllRequests(id)
      }
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.currentUser !== this.props.currentUser) {
      if (this.props.currentUser.type === 'Traveler') {
        this.props.fetchAllTrips(this.props.currentUser.id)
      } else {
        this.props.fetchAllRequests(this.props.currentUser.id)
      }
    }
  }
  
componentWillUnmount() {
  this.props.getSelectedTrip({})
}
  

  render(){
    console.log('props', this.props.trips)
    // console.log(this.props.fetchAllRequests)

    // const requests = this.props.fetchAllTrips()
    
    return(
      <div>
        {
          (this.props.currentUser.type === 'Traveler') ?
          <div>
            <div className="requestsList">
              <Card.Group centered itemsPerRow={4}>
                {this.props.trips.tripsList.map(trip => {
                  return <TripCard key={trip.id} trip={trip}/>
                }).slice(-1)}
                {/* {this.props.trips.tripsList.map(trip => {
                  return <TripCard key={trip.id} trip={trip} tripNumber={this.props.trips.tripsList.indexOf(trip)+1}/>
                })} */}
                
              </Card.Group>
            </div>
            <br/>

            <hr/>
            <h1>MATCHING REQUESTS</h1>
            <hr/>

            {this.props.trips.selectedTrip.id ? 
                <MatchingRequests /> : "Please select a trip to see matching requests" }
            <hr/>
          </div>
          :
          <div className="requestsList">
          <Card.Group centered itemsPerRow={4}>
            {this.props.requests.requestsList.map(request => {
              return <RequestCard key={request.id} request={request} requestNumber={this.props.requests.requestsList.indexOf(request)+1}/>
            })}
          </Card.Group>
          <hr/>
          </div>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips,
    requests: state.requests,
    currentUser: state.authentication.currentUser
  }
}

export default connect(mapStateToProps, { fetchAllTrips, fetchAllRequests, getSelectedTrip })(Profile)