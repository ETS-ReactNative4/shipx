import React from 'react'
import TripCard from './TripCard';
import { connect } from 'react-redux';
import { fetchAllTrips } from '../actions/index';
import { Card } from 'semantic-ui-react'


class Profile extends React.Component {

  componentDidMount() {
    let id = this.props.currentUser.id
    if (id) {
      this.props.fetchAllTrips(id)
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.props.fetchAllTrips(this.props.currentUser.id)
    }
  }
  
  

  render(){
    console.log('props', this.props)
    // console.log(this.props.fetchAllRequests)

    // const requests = this.props.fetchAllTrips()

    return(
      <div className="requestsList">
        <Card.Group centered itemsPerRow={4}>
      {this.props.trips.tripsList.map(trip => {
        return <TripCard key={trip.id} trip={trip}/>
      })}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips,
    currentUser: state.authentication.currentUser
  }
}

export default connect(mapStateToProps, { fetchAllTrips })(Profile)