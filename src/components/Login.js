import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import { getLogin } from '../actions/index';
import { connect } from 'react-redux';

const options = [
  { key: 'e', text: 'Expat', value: 'expat' },
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
      // debugger
      // console.log(this.state.fields)
      e.preventDefault();
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.state.fields)
      }
      // console.log(options)
      fetch('http://localhost:3000/api/v1/login', options)
      .then(resp => resp.json())
      .then(user => {
          localStorage.setItem('jwt', user.jwt)
          this.props.getLogin(user)
          // this.props.history.push('/')
      })
    };


  render(){
    // console.log(this.props)
    const { fields } = this.state;
    if (!this.props.currentUser.id) {
    return(
      <div id="signup-form">
        <h1>Welcome to Peershyp</h1>
      
        <Form size="medium" className="signup-form" onSubmit={this.handleSubmit}>

            <Form.Field>
                <label style={{color: "white"}}>Email</label>
                <input type="email" placeholder='john.doe@gmail.com' onChange={this.handleChange} name="email"/>
            </Form.Field>

            <Form.Field>
                <label style={{color: "white"}}>Password</label>
                <input type="password" placeholder='******' onChange={this.handleChange} name="password"/>
            </Form.Field>

            <Form.Field required>
                <label style={{color: "white"}}>Logging in as:</label>
                <Form.Select fluid label='Category' options={options} placeholder='please select one' onChange={this.handleChange} name="category"/>
            </Form.Field>

            <Form.Field type="submit"><Button size="medium" className="ui color3 button" type="submit">Login</Button></Form.Field>
        </Form>
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