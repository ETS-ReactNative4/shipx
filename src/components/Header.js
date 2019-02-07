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
              <img src='shipX-2.svg' />
            </Link>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>

          {
            (!this.props.currentUser.id || this.props.currentUser.type === 'Traveler') ? null:
            <div>
              <div id="request-button-header">
                <Link to="/create"><Button size="tiny" name='Request' active={activeItem === 'Request'} className="ui color1 button">Submit Order</Button></Link>
              </div>
            </div>}
          {

            (!this.props.currentUser.id || this.props.currentUser.type === 'Expat') ? null:
            <div>
              <div id="request-button-header">
                <Link to="/addtrip"><Button size="tiny" name='Request' active={activeItem === 'Request'} className="ui color1 button">Add Trip</Button></Link>
              </div>
            </div>}
          
          {
            (this.props.currentUser.type === 'Traveler' || this.props.currentUser.type === 'Expat') ? null:
          <div id="traveler-button-header">
            <Link to="/traveler"><Button size="mini" name='Traveler' active={activeItem === 'Traveler'} className="ui color2 button">Traveler Signup</Button></Link>
          </div>}

          {
            (this.props.currentUser.type === 'Traveler' || this.props.currentUser.type === 'Expat') ? null:
          <div id="traveler-button-header">
            <Link to="/signup"><Button size="mini" name='Traveler' active={activeItem === 'Traveler'} className="ui color1 button">Customer Signup</Button></Link>
          </div>}
          
          

          { !this.props.currentUser.id ?
          
          <Link to="#">
            <Menu.Item
              className = "menuItem"
              name='FAQ'
              active={activeItem === 'Help'}
              onClick={this.handleItemClick}
            />
          </Link> : null }
          
          { this.props.currentUser.type === 'Expat' ?
          <Link to="/profile">
            <Menu.Item
              name='My Orders'
              active={activeItem === 'Profile'}
              onClick={this.handleItemClick}
            />
          </Link> : null }

          { this.props.currentUser.type === 'Traveler' ?
          <Link to="/profile">
          <Menu.Item
            name='My Trips'
            active={activeItem === 'Profile'}
            onClick={this.handleItemClick}
          />
        </Link> : null}


          { !this.props.currentUser.id ?
          <Link to="/login">
            <Menu.Item
              name='Login'
              active={activeItem === 'Login'}
              onClick={this.handleItemClick}
            />
          </Link> :
          <Link to="/">
            <Menu.Item
              name='Logout'
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