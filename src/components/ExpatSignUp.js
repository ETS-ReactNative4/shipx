import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { createExpat } from '../actions/index';

class ExpatSignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            password: '',
            phone_number: '',
            street: '',
            city: '',
            zip_code: '',
            identification_num: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newExpat = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            phone_number: this.state.phone_number,
            street: this.state.street,
            city: this.state.city,
            zip_code: this.state.zip_code,
            identification_num: this.state.identification_num
        }

        console.log(this.props)
        console.log(newExpat)

    this.props.createExpat(newExpat)

    e.target.reset()

    this.props.history.push('/login')
    }


    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }


render(){
return(
    <div>
        <div>
            <h1>SIGN UP TODAY</h1>
            <h3>To start requesting all the things you love, from anywhere</h3>
        </div>
        <br/>
        <div id="signup-form">
            <Form size="medium" className="signup-form" onSubmit={this.handleSubmit}>
            
                <Form.Field>
                    <label style={{color: "black"}}>Full Name</label>
                    <input type="text" placeholder='John Doe' onChange={this.handleChange} name="name"/>
                </Form.Field>

                <Form.Field>
                    <label style={{color: "black"}}>Email</label>
                    <input type="email" placeholder='john.doe@gmail.com' onChange={this.handleChange} name="email"/>
                </Form.Field>

                <Form.Field>
                    <label style={{color: "black"}}>Password</label>
                    <input type="password" placeholder='******' onChange={this.handleChange} name="password"/>
                </Form.Field>

                <Form.Field>
                    <label style={{color: "black"}}>Phone Number</label>
                    <input type="tel" placeholder='+1 212-555-5555' onChange={this.handleChange} name="phone_number"/>
                </Form.Field>

                <Form.Field>
                    <label style={{color: "black"}}>Passport #</label>
                    <input type="number" placeholder='31195855' onChange={this.handleChange} name="identification_num"/>
                </Form.Field>

                <Form.Field>
                    <label style={{color: "black"}}>Street Address</label>
                    <input placeholder='1600 Virginia ave' onChange={this.handleChange} name="street"/>
                </Form.Field>

                <Form.Field>
                    <label style={{color: "black"}}>City</label>
                    <input type="text" placeholder='New York' onChange={this.handleChange} name="city"/>
                </Form.Field>

                <Form.Field>
                    <label style={{color: "black"}}>Country</label>
                    <input placeholder='United States' onChange={this.handleChange} name="zip_code"/>
                </Form.Field>

                <Form.Field>
                    <Checkbox style={{color: "black"}} label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Form.Field type="submit"><Button size="medium" className="ui color2 button" type="submit">Submit</Button></Form.Field>
            </Form>
            <hr/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        expats: state.expats
    }
}

export default connect(mapStateToProps, { createExpat })(ExpatSignUp)