import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import { getBucketList } from '../actions/bucketList'



class BucketList extends Component {

  // state that return or false
  // function to run when button is clicked to update state
  //
componentDidMount() {
  this.props.dispatch(getBucketList());
}


  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Bucket List</Header>
        <Segment basic textAlign='center'>
        <
        </Segment>
      </Segment>
    )
  }
}
const mapStateToProps = (state) => {
  const bucketLists = state.bucketLists
  return{ bucketLists }
}

export default connect(mapStateToProps)(BucketList);
