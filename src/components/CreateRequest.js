import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createRequest } from '../actions/index';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'


class CreateRequest extends Component {
    constructor() {
        super()

        this.state = {
            item_name: '',
            description: '',
            item_url: '',
            item_cost: '',
            departing_city: '',
            destination_city: '',
            weight: '',
            quantity: '',
            expat_id: 1,
            trip_id: 1
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newRequest = {
            item_name: this.state.item_name.substr(0, 36),
            description: this.state.description.substr(0, 36),
            item_url: this.state.item_url,
            item_cost: this.state.item_cost,
            departing_city: this.state.departing_city,
            destination_city: this.state.destination_city,
            weight: this.state.weight,
            quantity: this.state.quantity,
            expat_id: this.state.expat_id,
            trip_id: this.state.trip_id
        }

        console.log(this.props)
        console.log(newRequest)

    this.props.createRequest(newRequest)

    e.target.reset()

    this.props.history.push('/requests')
    }


    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

render() {
    return (
        <div className = "create-request request-trip-form">
            <div id="create-form-header">
                <h3>MAKE A NEW REQUEST</h3>
                <p id="receive-fast">Receive it fast for much less</p>
            </div>
            <Form id="request-form" onSubmit={this.handleSubmit}>
                <Form size="medium">
                    <Form.Field control={Input} value={this.state.item_url} label='ITEM URL' placeholder='http://...'  onChange={this.handleChange} name="item_url" />
                <Form.Field control={Input} value={this.state.item_cost} label='ITEM PRICE' placeholder='$100.00' type="number" min="0" onChange={this.handleChange} name="item_cost"/>
                <Form.Field control={Input} value={this.state.weight} label='ITEM WEIGHT' placeholder='1lb' type="number" min="0" onChange={this.handleChange} name="weight"/>
                <Form.Group>
                    <Form.Field control={Input} value={this.state.item_name} label='ITEM NAME' placeholder='MacBook charger' id="item-name" onChange={this.handleChange} name="item_name"/>
                    < Form.Field control = {
                        Input
                    }
                    value={this.state.quantity}
                    label = 'QUANTITY'
                    placeholder = '3'
                    type = "number"
                    min = "1"
                    id = "item-quantity" 
                    onChange={this.handleChange} 
                    name="quantity"/>
                </Form.Group>

                <Form.Group>
                    <Form.Field control={Input} value={this.state.departing_city} label='FROM' placeholder='New York City' id="item-create-from" onChange={this.handleChange} name="departing_city"/>
                    < Form.Field control = {Input} value={this.state.destination_city} label = 'TO' placeholder = 'London' id = "item-create-to" onChange={this.handleChange} name="destination_city"/>
                </Form.Group>
                
                
                </Form>
                <br/>
                <Form.Field control={TextArea} value={this.state.description} label='ITEM DESCRIPTION' placeholder='Please describe your item' onChange={this.handleChange} name="description"/>

                < Form.Field control = {
                    Checkbox
                }
                label = 'I agree to the Terms and Conditions'
                onChange = {
                    this.handleChange
                }
                />

                <Form.Field type="submit"><Button size="medium" className="ui color1 button" type="submit">Submit</Button></Form.Field>
            </Form>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        requests: state.requests
    }
}

export default connect(mapStateToProps, { createRequest })(CreateRequest)