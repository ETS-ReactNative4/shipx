import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { createTrip } from '../actions/index';

// const options = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
// ]

class AddTrip extends Component {
    constructor() {
        super()

        this.state = {
            departure_city: '',
            destination_city: '',
            depart_date: '',
            arrival_date: '',
            airline: '',
            flight_num: '',
            traveler_id: ''
        }
    }

    componentWillReceiveProps = (nextProps) => {
        // debugger
        if (this.props.currentUser !== nextProps.currentUser) {
            this.setState({
                ...this.state,
                traveler_id: nextProps.currentUser.id
            })
        }
    }

    comp
    

    handleSubmit = (e) => {
        e.preventDefault();
            if (this.props.currentUser.type === "Traveler") {
            const newTrip = {
                departure_city: this.state.departure_city,
                destination_city: this.state.destination_city,
                depart_date: this.state.depart_date,
                arrival_date: this.state.arrival_date,
                airline: this.state.airline,
                flight_num: this.state.flight_num,
                traveler_id: this.state.traveler_id
            }

            // console.log(this.props)
            // console.log(newTrip)

            this.props.createTrip(newTrip, this.props.currentUser.id)

            e.target.reset()

            this.props.history.push('/profile')
        } else {
            this.props.history.push('/login')
        }
    }


    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    canBeSubmitted() {
    const { departure_city, destination_city, depart_date, arrival_date, airline, flight_num } = this.state;
    return (
        departure_city.length > 0 &&
        destination_city.length > 0 &&
        depart_date.length > 0 &&
        arrival_date.length > 0 &&
        airline.length > 0 &&
        flight_num.length > 0);
    }

render() {
    // const { value } = this.state
    console.log(this.state.traveler_id);

    const isEnabled = this.canBeSubmitted();
    
    return (
        <div id="add-trip-form">
            <div className="create-request request-trip-form">
                <div id="create-form-header">
                    <h3>ADD A TRIP</h3>
                    <p id="receive-fast">Earn extra money on every trip, upt to $500</p>
                </div>
                <Form id="request-form" onSubmit={this.handleSubmit}>
                    <Form size="medium">
                    {/* <Form.Field control={Input} label='DEPARTURE CITY' placeholder='New York City' />
                    <Form.Field control={Input} label='DESTINATION CITY' placeholder='Dubai' />
                    */}
                    <Form.Group>
                        <Form.Field control={Input} value={this.state.departure_city} label='DEPARTURE CITY' name="departure_city" onChange={this.handleChange} placeholder='New York City' id="add-trip"/>
                        < Form.Field control = {
                            Input
                        }
                        value={this.state.depart_date}
                        label = 'DEPART DATE'
                        name="depart_date"
                        onChange={this.handleChange}
                        placeholder = '08/06/2018'
                        type = "date"
                        id = "date-filler" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Field control={Input} value={this.state.destination_city} label='DESTINATION CITY' name="destination_city" onChange={this.handleChange} placeholder='Dubai' id="add-trip2"/>
                        < Form.Field control = {
                            Input
                        }
                        value={this.state.arrival_date}
                        label = 'ARRIVAL DATE'
                        name="arrival_date"
                        onChange={this.handleChange}
                        placeholder = '08/07/2018'
                        type = "date"
                        id = "date-filler2" />
                    </Form.Group>

                    <Form.Field control={Input} value={this.state.airline} label='AIRLINE' name="airline" onChange={this.handleChange} placeholder='British Airways' />

                    <Form.Field control={Input} value={this.state.flight_num} label='FLIGHT NUMBER' name="flight_num" onChange={this.handleChange} placeholder='BA347' />
                    
                    </Form>
                    <br/>
                    {/* <Form.Field control={TextArea} label='TRIP INFORMATION' placeholder='Please give additional info about your trip' /> */}

                    <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />

                    <Form.Field type="submit"><Button disabled={!isEnabled} size="medium" className="ui color2 button" type="submit">Submit</Button></Form.Field>
                </Form>
            </div>
            <hr/>
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

export default connect(mapStateToProps, { createTrip })(AddTrip)