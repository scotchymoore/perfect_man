import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';

class Relationship extends Component {
  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Important Information</Header>
      </Segment>
    )
  }
}

export default connect()(Relationship);
