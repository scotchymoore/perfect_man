import React, { Component } from 'react'
import { Menu, Button, Dropdown, Segment, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import '../styles/navbar.css'
import logo from '../assets/logo.jpg';

class NavBar extends Component {

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if(user.id) {
      return(
        <Menu inverted fixed='top'>
        <Menu.Menu position='left'>
          <Link to='/'>
            <Image src={logo} size='small' />
          </Link>
        </Menu.Menu>
          <Menu.Menu position='right'>
            <Dropdown item text='Categories'>
              <Dropdown.Menu>
                <Link to={`/relationship/${this.props.relationshipId}`}><Dropdown.Item style={{color: 'black'}}>Relationship Info</Dropdown.Item></Link>
                <Link to="/food"><Dropdown.Item style={{color: 'black'}}>Foods</Dropdown.Item></Link>
                <Link to="/bucketList"><Dropdown.Item style={{color: 'black'}}>Bucket Lists</Dropdown.Item></Link>
                <Link to="/dateActivity"><Dropdown.Item style={{color: 'black'}}>Date Activities</Dropdown.Item></Link>
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
            <Image src={logo} size='small' />
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
  return { user: state.user,
           relationshipId: state.activeRelationship.id }
}

export default withRouter(connect(mapStateToProps)(NavBar));
