import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import BucketForm from './BucketForm';
import RelationshipSelect from './RelationshipSelect';




class BucketList extends Component {

  // state that return or false
  // function to run when button is clicked to update state
  //
// componentDidMount() {
//   this.props.dispatch(getBucketList());
// }


  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Bucket List</Header>
        <Segment basic textAlign='center'>
        <BucketForm />
        <ul>
         
        {this.props.bucketLists.map((activity, i) => (
              <li key={i} >{activity.location}, {activity.bucket_list_item} </li>
              ))}
        </ul>
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
