import React from 'react'
import TripCard from './TripCard';
import RequestCard from './RequestCard';
import { connect } from 'react-redux';
import { fetchAllTrips } from '../actions/index';
import { fetchAllExpatsRequests } from '../actions/index';
import { Card } from 'semantic-ui-react';



class MatchingRequests extends React.Component {

  // handleClick(e) {
  //     console.log(e.target)
  //     let departure_city = e.target.departure_city
  //     let destination_city = e.target.destination_city
  //       this.props.fetchAllRequests().filter(request => {
  //         return request.departing_city.toLowerCase() === 
  //         || deal.title.toLowerCase().includes(this.state.searchTerm)
  //       })
  //     }
  //   }
  // }

  componentDidMount() {
    this.props.fetchAllExpatsRequests()
  }
  
  
  render(){
    // console.log('props', this.props.requests)
    // console.log(this.props.fetchAllRequests)
    // const requests = this.props.fetchAllTrips()

    const filteredRequests = this.props.requests.allRequestsList.filter(request => {
      return ((this.props.selectedTrip.departure_city).toLowerCase().trim()).includes((request.departing_city).toLowerCase().trim()) &&
      ((this.props.selectedTrip.destination_city).toLowerCase().trim()).includes((request.destination_city).toLowerCase().trim())
    })

    console.log(filteredRequests);
    
    return(
      <div>
          <div className="requestsList">
            <Card.Group centered itemsPerRow={4}>
              {filteredRequests.map(request => {
                return <RequestCard key={request.id} request={request}/>
              })}
            </Card.Group>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    requests: state.requests,
    selectedTrip: state.trips.selectedTrip,
    currentUser: state.authentication.currentUser
  }
}

export default connect(mapStateToProps, { fetchAllExpatsRequests })(MatchingRequests)