import React, { Component } from 'react'
import { Menu, Button, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if(user.id) {
      return(
        <Menu>
        <Menu.Menu position='left'>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
        </Menu.Menu>
          <Menu.Menu position='right'>
            <Dropdown item text='Categories'>
              <Dropdown.Menu>
                <Link to="/Relationship"><Dropdown.Item>Relationship Info</Dropdown.Item></Link>
                <Link to="/Food"><Dropdown.Item>Foods</Dropdown.Item></Link>
                <Link to="/BucketList"><Dropdown.Item>Bucket Lists</Dropdown.Item></Link>
                <Link to="/DateActivity"><Dropdown.Item>Date Activities</Dropdown.Item></Link>
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
      <div>
        <Menu pointing secondary>
          { this.rightNavs() }
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));
