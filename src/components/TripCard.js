import { Card, Button, Header, Modal, Icon, Image , Item, Label, CardMeta } from 'semantic-ui-react'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAllRequests, fetchAllExpatsRequests, getMatchingRequests, getSelectedTrip } from '../actions/index';
import RequestCard from './RequestCard';

// const paragraph = <ImageComponent src='/images/wireframe/short-paragraph.png' />


class TripCard extends React.Component {

    state = { open: false }

        show = dimmer => () => this.setState({ dimmer, open: true })
        close = () => this.setState({ open: false })

    // componentDidMount(locations) {
    // let id = this.props.currentUser.id
    //     if (id) {
    //         if (this.props.currentUser.type === 'Traveler') {
    //         this.props.fetchAllExpatsRequests()
    //         }
    //     }
    // }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.currentUser !== this.props.currentUser) {
            if (this.props.currentUser.type === 'Traveler') {
            this.props.fetchAllExpatsRequests()
            } 
        }
    }

    handleClick = () => {
        // console.log(this.props.trip);
        this.props.getSelectedTrip(this.props.trip)
    }

        
    render(){
        console.log('PROPS',this.props)
        console.log('DATA-ID',this.props.tripNumber)


        const { open, dimmer } = this.state
        const { id, depart_date, arrival_date, airline, departure_city, destination_city, flight_num } = this.props.trip
        return(
        <div className="request-cards" id={id} >
            {/* <Card.Group itemsPerRow={5}> */}
                <Card link>
                        
                        <div>
                            <h3 style={{color: "red"}}><strong>Current Trip</strong></h3><hr/>
                            {/* <h3 style={{color: "red"}}><strong>Trip #{this.props.tripNumber}</strong></h3> */}
                            
                            <h3>From: <strong style={{color: "teal"}} className="des">{departure_city}</strong></h3>
                            
                            <h3>To: <strong style={{color: "teal"}} className="des">{destination_city}</strong></h3>
                            
                            <h6>Depart Date: <strong>{depart_date}</strong></h6>
                            
                            <h6>Arrival Date: <strong>{arrival_date}</strong></h6>
                            
                            <h5>Airline: <strong>{airline}</strong></h5>

                            <h5>Flight#: <strong>{flight_num}</strong></h5><br/>
                            
                        </div>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green' onClick={this.handleClick}>
                            Matching Requests
                        </Button>
                        {/* <Button basic color='blue' onClick={this.show(true)}>
                            Added Requests
                        </Button> */}
                        {/* <Button basic color='red'>
                            Decline
                        </Button> */}
                        </div>
                    </Card.Content>
                </Card>
            {/* </Card.Group> */}

            {/* MODAL CARD VIEW */}
            
            {this.props.allRequestsList > 0 ?
            <div>
            {/* if requestsList > 0, render this component: 
                props.requestsList is passed to component */}
                <Card.Group centered itemsPerRow={4}>
                    {this.props.allRequestsList.map(request => {
                    return <RequestCard key={request.id} request={request}/>
                    })}
                </Card.Group>
            </div> : null}
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentUser: state.authentication.currentUser
    }
}

export default connect(mapStateToProps, { getSelectedTrip })(TripCard)