import React, { Component } from 'react'
import { Menu, Button, Dropdown, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import '../styles/navbar.css'

class NavBar extends Component {

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if(user.id) {
      return(
        <Menu inverted>
        <Menu.Menu position='left'>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
        </Menu.Menu>
          <Menu.Menu position='right'>
            <Dropdown item text='Categories'>
              <Dropdown.Menu>
                <Link to="/Relationship"><Dropdown.Item style={{color: 'black'}}>Relationship Info</Dropdown.Item></Link>
                <Link to="/Food"><Dropdown.Item style={{color: 'black'}}>Foods</Dropdown.Item></Link>
                <Link to="/BucketList"><Dropdown.Item style={{color: 'black'}}>Bucket Lists</Dropdown.Item></Link>
                <Link to="/DateActivity"><Dropdown.Item style={{color: 'black'}}>Date Activities</Dropdown.Item></Link>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
              name='Logout'
              onClick={() => dispatch(handleLogout(history))}
            />
          </Menu.Menu>

        </Menu>
      );
    } else {
      return(
        <Menu.Menu position='left'>
          <Link to='/HomeIndex'>
            <Menu.Item name='home' />
          </Link>
        </Menu.Menu>
      );
    }
  }

  render() {
    return (
      <Segment inverted className='zero-margin'>
        <Menu inverted pointing secondary>
          { this.rightNavs() }
        </Menu>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));
