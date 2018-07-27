import { Card, Button, Header, Modal, Icon, Image , Item, Label, CardMeta } from 'semantic-ui-react'
import React, { Component } from 'react'

// const paragraph = <ImageComponent src='/images/wireframe/short-paragraph.png' />


class TripCard extends React.Component {

      state = { open: false }

        show = dimmer => () => this.setState({ dimmer, open: true })
        close = () => this.setState({ open: false })
        
    render(){
        // console.log('trips',this.props.trip)
        const { open, dimmer } = this.state
        const { depart_date, arrival_date, airline, departure_city, destination_city, flight_num } = this.props.trip
        return(
        <div className="request-cards">
            {/* <Card.Group itemsPerRow={5}> */}
                <Card>
                    <Card.Content>
                        {/* <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' /> */}
                        <div>
                            <Card.Header style={{color: "red"}}><strong>Trip</strong></Card.Header>
                            <br/>
                            {/* <Card.Meta><strong>{description}</strong></Card.Meta>
                            <br/>
                            <Card.Meta><strong>Value: ${item_cost}</strong></Card.Meta>
                            <br/> */}
                            <p>From: <strong style={{color: "teal"}}>{departure_city}</strong></p>
                            <br/>
                            {/* <h4>From: </h4> */}
                            <p>To: <strong style={{color: "teal"}}>{destination_city}</strong></p>
                            {/* <h4>To: </h4> */}
                            <br/>
                            <Card.Meta>Depart Date: <strong>{depart_date}</strong></Card.Meta>
                            <br/>
                            <Card.Meta>Arrival Date: <strong>{arrival_date}</strong></Card.Meta>
                            <br/>
                            <Card.Description>
                            <p>Airline: <strong>{airline}</strong></p>
                            <p>Flight#: <strong>{flight_num}</strong></p>
                            </Card.Description><br/>
                            <Card.Meta>By Abdoul</Card.Meta>
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green' onClick={this.show(true)}>
                            See Matching Requests
                        </Button>
                        {/* <Button basic color='red'>
                            Decline
                        </Button> */}
                        </div>
                    </Card.Content>
                </Card>
            {/* </Card.Group> */}

            {/* MODAL CARD VIEW */}

            <div>
                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                <Modal.Header>Item Name</Modal.Header>
                <Modal.Content image>
                    {/* <Image wrapped size='medium' src='/images/avatar/large/rachel.png' /> */}
                    <Modal.Description>
                    <Header>From: New York City - To: London</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                    <h5>Weight: </h5>
                    <h5>Status: </h5>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={this.close}>
                    Nope
                    </Button>
                    <Button
                    positive
                    icon='checkmark'
                    labelPosition='right'
                    content="Add"
                    onClick={this.close}
                    />
                </Modal.Actions>
                </Modal>
            </div>
        </div>
        )
    }
}

export default TripCard