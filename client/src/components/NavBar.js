import React, { Component } from 'react'
import { Menu, Button, Dropdown, Segment, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import '../styles/navbar.css'
import logo from '../assets/logo.jpg';


class NavBar extends Component {
  logEmOut = () => {
    const { dispatch, history } = this.props;
    const clearActiveRelationship = {}
    dispatch({ type: 'SET_ACTIVE_RELATIONSHIP', relationship: clearActiveRelationship} );
    dispatch(handleLogout(history));
  }

  determineSize = (height) => {
    if (height < 700) {
      return this.smallNavs();
    } else {
      return this.rightNavs();
    }
  }
  rightNavs = () => {
    const { user, dispatch, history, relationshipId } = this.props;

    if(user.id) {
      return(
        <Menu  inverted fixed='top'>
          <Menu.Menu position='left'>
            <Link to='/'>
              <Image src={logo} size='small' />
            </Link>
          </Menu.Menu>
          { relationshipId ?
            <Menu.Menu position='right'>
              <Menu.Item >
                <Link to='/relationship/${this.props.relationshipId}' style={{color:'orange'}}>
                Relationship Info
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/food' style={{color:'orange'}}>
                Food
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/bucketList' style={{color:'orange'}}>
                Bucket List
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/dateActivity' style={{color:'orange'}}>
                Date Activities
                </Link>
              </Menu.Item>
              <Menu.Item
                name='Logout'
                onClick={() => {this.logEmOut()} }
              />
            </Menu.Menu>
          :
          <Menu.Item
            name='Logout'
            onClick={ () => {this.logEmOut()} }
          />
          }
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

  smallNavs = () => {
    const { user, dispatch, history, relationshipId } = this.props;

    if(user.id) {
      return(
        <Dropdown item text='Menu'>
        <Dropdown.Menu>
        <Link to='/'>
        <Dropdown.Item style={{color: 'black'}}>
        Home
        </Dropdown.Item>
        </Link>
        <Link to={`/relationship/${this.props.relationshipId}`}>
        <Dropdown.Item style={{color: 'black'}}>
        Relationship Info
        </Dropdown.Item>
        </Link>
        <Link to="/food">
        <Dropdown.Item style={{color: 'black'}}>
        Foods
        </Dropdown.Item>
        </Link>
        <Link to="/bucketList">
        <Dropdown.Item style={{color: 'black'}} >
        Bucket Lists
        </Dropdown.Item>
        </Link>
        <Link to="/dateActivity">
        <Dropdown.Item style={{color: 'black'}} >
        Date Activities
        </Dropdown.Item>
        </Link>
        <Dropdown.Item style={{color: 'black'}} onClick={ () => {this.logEmOut()}}>
        Logout
        </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
      )
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
          { this.determineSize(window.screen.height) }
        </Menu>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    relationshipId: state.activeRelationship.id
  }
}

export default withRouter(connect(mapStateToProps)(NavBar));
