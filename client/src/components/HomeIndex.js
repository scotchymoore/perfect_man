import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header, Image, Divider, Segment, Grid, Menu, Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/black-diamond-plate.jpg';




class HomeIndex extends Component {

  handleClick = () => {
    this.setState({ message: 'onClick handled' })
  }

  render() {
    return(

      <Segment basic style={styles.main}>
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

const styles = {
  main: {
    height: 640,
    width: null,
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
}

const mapStateToProps = (state) => {
  return { user: state.user };
}

export default connect(mapStateToProps)(HomeIndex);
