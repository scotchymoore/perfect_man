import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header, Image, Divider, Segment, Grid, Menu, Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const style = {
  loginMenu: {
      height: 'auto',
      borderWidth: '2px',
      borderRadius: '5px',
      margin: '0 auto',
    }
}

class HomeIndex extends Component {

  handleClick = () => {
    this.setState({ message: 'onClick handled' })
  }

  render() {
    return(
      <Segment basic textAlign='center'>
      <Header as='h1' textAlign='center'>Wingman</Header>
        <Grid centered width={30}>
          <Grid.Column streched>
            <Segment basic textAlign='center'>
              <Menu vertical
                style={style.loginMenu}
                >

              <Button.Group size='large'>
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
