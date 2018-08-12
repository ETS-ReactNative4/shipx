import { Card, Button, Header, Modal, Icon, Image , Item, Label, CardMeta } from 'semantic-ui-react'
import React, { Component } from 'react'
import { connect } from 'react-redux';

// const paragraph = <ImageComponent src='/images/wireframe/short-paragraph.png' />


class RequestCard extends React.Component {

    state = { open: false }

        show = dimmer => () => this.setState({ dimmer, open: true })
        close = () => this.setState({ open: false })
        
    render(){
        console.log('requests',this.props)
        const { open, dimmer } = this.state
        const { id, item_name, item_url, description, weight, departing_city, destination_city, item_cost, status } = this.props.request
        return(
        <div className="request-cards">
            {/* <Card.Group itemsPerRow={5}> */}
                <Card link>
                    <Card.Content>
                        {/* <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' /> */}
                        <div>
                            <h3 style={{color: "red"}}><strong>Request #{this.props.requestNumber}</strong></h3><hr/>
                            <Card.Header style={{color: "red"}}><strong><a href={item_url} target="_blank">{item_name}</a></strong></Card.Header>
                            <br/>
                            <Card.Meta><strong>Value: ${item_cost}</strong></Card.Meta>
                            <br/>
                            <p>From: <strong style={{color: "teal"}}>{departing_city}</strong></p>
                            <br/>
                            {/* <h4>From: </h4> */}
                            <p>To: <strong style={{color: "teal"}}>{destination_city}</strong></p>
                            <br/>
                            <Card.Meta><strong><small>{description}</small></strong></Card.Meta>
                            <br/>
                            <Card.Description>
                            <p>Weight: <strong>{weight} lb</strong></p>
                            </Card.Description>

                            {(this.props.currentUser.type === 'Expat') ?
                            <div>
                                <hr/>Estimated cost |  
                            <Label id="price-tag" color='green'>
                                ${(weight * 10)}
                                {/* ${((weight * 10) + (item_cost * 0.05)).toFixed(2)} */}
                            </Label><hr/></div> : null}
                        </div>
                    </Card.Content>
                    {/* <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green' onClick={this.show(true)}>
                            Details
                        </Button>
                        <Button basic color='red'>
                            Decline
                        </Button>
                        </div>
                    </Card.Content> */}
                </Card>
            {/* </Card.Group> */}

            {/* MODAL CARD VIEW GOES HERE */}

            
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.authentication.currentUser
    }
}

export default connect(mapStateToProps)(RequestCard)