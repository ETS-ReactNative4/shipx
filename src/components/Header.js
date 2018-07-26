import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Button } from '../../node_modules/semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className="App-header">
        {/* <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        /> */}
        <Menu.Menu position='right'>
          {/* <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item> */}
          <div id="request-button-header">
            <Link to="/create"><Button size="medium" className="ui color1 button">SUBMIT A REQUEST</Button></Link>
          </div>

          <div id="traveler-button-header">
            <Link to="/traveler"><Button size="medium" className="ui color2 button">BECOME A TRAVELER</Button></Link>
          </div>
          <Link to="#">
            <Menu.Item
              className = "menuItem"
              name='Help'
              active={activeItem === 'Help'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/login">
            <Menu.Item
              name='Login'
              active={activeItem === 'Login'}
              onClick={this.handleItemClick}
            />
          </Link>
          
          <Link to="/signup">
            <Menu.Item
              name='Sign Up'
              active={activeItem === 'Sign Up'}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header