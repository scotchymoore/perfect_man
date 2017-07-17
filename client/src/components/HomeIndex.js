import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header, Image, Divider, Segment, Grid, Menu, Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/black-diamond-plate.jpg';
import logo from '../assets/doghouselogo.jpg';

const styles = {
  main: {
    height: '100vh',
    width: null,
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '0px',
  },
}

const style = {
  loginMenu: {

    }
}

class HomeIndex extends Component {

  handleClick = () => {
    this.setState({ message: 'onClick handled' })
  }

  render() {
    return(
      <Segment basic textAlign='center' style={styles.main}>
      <Image src={logo} size='medium' />
        <Grid centered width={30}>
          <Grid.Column >
            <Segment basic textAlign='center'>
              <Menu vertical
                style={style.loginMenu}
                >

              <Button.Group inverted size='large'>
                <Link to="/Login"><Button>Login</Button></Link>
                  <Button.Or />
                <Link to="/Register"><Button>Register</Button></Link>
              </Button.Group>
            </Menu>
              </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}


const mapStateToProps = (state) => {
  return { user: state.user };
}

export default connect(mapStateToProps)(HomeIndex);
