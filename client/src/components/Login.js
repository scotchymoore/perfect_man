import React, { Component } from 'react';
import { Header, Segment, Form, Button, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import backgroundImage from '../assets/black-diamond-plate.jpg';

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


class Login extends Component {
  state = { email: '', password: '' };

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;

    dispatch(handleLogin(email, password, history));
  }



  render() {
    const { email, password } = this.state;

    return(
      <Segment basic style={styles.main}>
        <Card style={{background:'grey', borderColor:'black'}}>
        <Header as='h1' style={{color:'black'}} textAlign='center'>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field >
            <label style={{color:'black'}}>Email</label>
            <input
              autoFocus
              required
              id='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label style={{color:'black'}}>Email</label>
            <input
              required
              id='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment textAlign='center' basic>
            <Button basic inverted color='orange' type='submit'>Submit</Button>
          </Segment>
        </Form>
        </Card>
      </Segment>
    );
  }
}

export default connect()(Login);
