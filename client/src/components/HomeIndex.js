import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header, Image, Divider, Segment, Grid, Menu, Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class HomeIndex extends Component {

  handleClick = () => {
    this.setState({ message: 'onClick handled' })
  }

  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Wingman</Header>
        <Button.Group size='large'>
          <Link to="/Login"><Button>Login</Button></Link>
            <Button.Or />
          <Link to="/Register"><Button>Register</Button></Link>
        </Button.Group>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
}

export default connect(mapStateToProps)(HomeIndex);
