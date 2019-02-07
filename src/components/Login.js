import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import {Redirect, Link} from 'react-router-dom';
import { getLogin } from '../actions/index';
import { connect } from 'react-redux';

const options = [
  { key: 'e', text: 'Customer', value: 'customer' },
  { key: 't', text: 'Traveler', value: 'traveler' },
]

class Login extends React.Component {
    state = {
      fields: {
        email: '',
        password: '',
        category:''
      }
    };

    handleChange = (e) => {
      if (e.target.value) {
      const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
      this.setState({ fields: newFields });
      } else {
        const newFields = { ...this.state.fields, category: e.target.innerText };
        this.setState({
          fields: newFields
        })
      }
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.state.fields)
      }
      fetch('https://shipxapi.herokuapp.com/api/v1/login', options)
      .then(resp => resp.json())
      .then(user => {
          localStorage.setItem('jwt', user.jwt)
          this.props.getLogin(user)
          // this.props.history.push('/')
      })
    };


  render(){
    const { fields } = this.state;
    if (!this.props.currentUser.id) {
    return(
      <div id="signup-form">
        
        <div id="welcome-to-shipx">
          <hr/>
            <br/>
              <div>Welcome to ShipX</div>
            <br/>
          <hr/>
        </div>
        {/* <hr/> */}
        <h1>Log in</h1>
        <br/>
          <Form size="medium" className="signup-form" onSubmit={this.handleSubmit}>

              <Form.Field>
                  <label style={{color: "black"}}>Email</label>
                  <input type="email" placeholder='john.doe@gmail.com' onChange={this.handleChange} name="email"/>
              </Form.Field>

              <Form.Field>
                  <label style={{color: "black"}}>Password</label>
                  <input type="password" placeholder='******' onChange={this.handleChange} name="password"/>
              </Form.Field>

              <Form.Field required>
                  <label style={{color: "black"}}>Log in as:</label>
                  <Form.Select fluid label='' options={options} placeholder='please select one' onChange={this.handleChange} name="category"/>
              </Form.Field>

              <Form.Field type="submit"><Button size="medium" className="ui color1 button" type="submit">Login</Button></Form.Field>
          </Form>

          <h3> Don't have an account yet?</h3>
          <h4>Sign up as a <Link to="/signup">Customer</Link> or <Link to="/traveler">Traveler</Link></h4>
          <div><hr/></div>
      </div>
    ); } else {
          return <Redirect to='/' />
        }
    }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.authentication.currentUser
  }
}

export default connect(mapStateToProps, { getLogin })(Login)