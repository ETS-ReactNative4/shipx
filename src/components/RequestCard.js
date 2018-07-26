import { Card, Button, Header, Modal, Icon, Image , Item, Label, CardMeta } from 'semantic-ui-react'
import React, { Component } from 'react'

// const paragraph = <ImageComponent src='/images/wireframe/short-paragraph.png' />


class RequestCard extends React.Component {

      state = { open: false }

        show = dimmer => () => this.setState({ dimmer, open: true })
        close = () => this.setState({ open: false })
        
    render(){
        console.log('requests',this.props)
        const { open, dimmer } = this.state
        const { item_name, description, weight, departing_city, destination_city, item_cost } = this.props.request
        return(
        <div className="request-cards">
            {/* <Card.Group itemsPerRow={5}> */}
                <Card>
                    <Card.Content>
                        {/* <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' /> */}
                        <div>
                            <Card.Header style={{color: "red"}}><strong>{item_name}</strong></Card.Header>
                            <br/>
                            <Card.Meta><strong>{description}</strong></Card.Meta>
                            <br/>
                            <Card.Meta><strong>Value: ${item_cost}</strong></Card.Meta>
                            <br/>
                            <p>From: <strong style={{color: "teal"}}>{departing_city}</strong></p>
                            <br/>
                            {/* <h4>From: </h4> */}
                            <p>To: <strong style={{color: "teal"}}>{destination_city}</strong></p>
                            {/* <h4>To: </h4> */}
                            <br/>
                            <Card.Description>
                            <p>Weight: <strong>{weight} lb</strong></p>
                            
                            </Card.Description><br/>
                            <Card.Meta>By Abdoul</Card.Meta>
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green' onClick={this.show(true)}>
                            Details
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

export default RequestCard