import React, { Component } from 'react'
import { Input, Menu, MenuMenu } from 'semantic-ui-react'
import { Button } from '../../node_modules/semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/index';



class Header extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout = () => {
    this.props.logout()

    localStorage.clear()
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu className="App-header">

        <Menu.Menu id='center-logo' position='left'>
          <Menu.Item>
            <Link to='/'>
              <img src='shipX.png' />
            </Link>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>

          {
            (!this.props.currentUser.id || this.props.currentUser.type === 'Traveler') ? null:
            <div>
              <div id="request-button-header">
                <Link to="/create"><Button size="medium" name='Request' active={activeItem === 'Request'} className="ui color1 button">SUBMIT A REQUEST</Button></Link>
              </div>
            </div>}
          {

            (!this.props.currentUser.id || this.props.currentUser.type === 'Expat') ? null:
            <div>
              <div id="request-button-header">
                <Link to="/addtrip"><Button size="medium" name='Request' active={activeItem === 'Request'} className="ui color1 button">ADD TRIP</Button></Link>
              </div>
            </div>}
          
          {
            (this.props.currentUser.type === 'Traveler' || this.props.currentUser.type === 'Expat') ? null:
          <div id="traveler-button-header">
            <Link to="/traveler"><Button size="medium" name='Traveler' active={activeItem === 'Traveler'} className="ui color2 button">BECOME A TRAVELER</Button></Link>
          </div>}
          
          <Link to="#">
            <Menu.Item
              className = "menuItem"
              name='Help'
              active={activeItem === 'Help'}
              onClick={this.handleItemClick}
            />
          </Link>

          { !this.props.currentUser.id ?
          <Link to="/login">
            <Menu.Item
              name='Login'
              active={activeItem === 'Login'}
              onClick={this.handleItemClick}
            />
          </Link> : 

          <Link to="/profile">
            <Menu.Item
              name='Profile'
              active={activeItem === 'Profile'}
              onClick={this.handleItemClick}
            />
          </Link> }


          { !this.props.currentUser.id ?
          <Link to="/signup">
            <Menu.Item
              name='Sign Up'
              active={activeItem === 'Sign Up'}
              onClick={this.handleItemClick}
            />
          </Link> :
          <Link to="/">
            <Menu.Item
              name='Logout'
              // active={activeItem === ''}
              onClick={this.handleLogout}
            />
          </Link> }

        </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.authentication.currentUser
  }
}

export default connect(mapStateToProps, { logout }) (Header)