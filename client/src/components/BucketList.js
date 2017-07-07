import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';

class BucketList extends Component {
  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Bucket List</Header>
      </Segment>
    )
  }
}

export default connect()(BucketList);
