import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';

class Food extends Component {
  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Food Choices</Header>
      </Segment>
    )
  }
}

export default connect()(Food);
