import React from 'react'
import TripCard from './TripCard';
import { connect } from 'react-redux';
import { fetchAllTrips } from '../actions/index';
import { Card } from 'semantic-ui-react'


class TripsList extends React.Component {

  componentDidMount() {
    this.props.fetchAllTrips()
  }

  // componentDidUpdate = (prevProps, prevState) => {
    
  // }
  
  

  render(){
    // const requests = this.props.fetchAllTrips(id)



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
    trips: state.trips
  }
}

export default connect(mapStateToProps, { fetchAllTrips })(TripsList)