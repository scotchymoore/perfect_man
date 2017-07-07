import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';

class BucketList extends Component {
  state = { bucketList: '' };
  // state that return or false
  // function to run when button is clicked to update state
  //
  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Bucket List</Header>
        <Segment basic textAlign='center'>
          <button className="ui huge button, teal button" color='teal'>Add Desire</button>
            <Form.Field>
              <label>Language</label>
              <input
                required
                placeholder='Enter Wish list'
                value={this.state.bucketList}
              />
            </Form.Field>
        </Segment>
      </Segment>
    )
  }
}

export default connect()(BucketList);
