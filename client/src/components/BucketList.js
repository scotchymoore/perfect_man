import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import BucketForm from './BucketForm';
import RelationshipSelect from './RelationshipSelect';
import { deleteBucketList } from '../actions/bucketList';
import { Card, Image } from 'semantic-ui-react'


class BucketList extends Component {

  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Bucket List</Header>
        <Segment basic textAlign='center'>
        <BucketForm />
        <Card.Group>
         
        {this.props.bucketLists.map((activity, i) => (
          <Card key={i}>
            <Card.Content>
              <Card.Header>
                {activity.bucket_list_item}
              </Card.Header>
              <Card.Meta>
                {activity.location}
              </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button onClick={ () => this.props.dispatch(deleteBucketList(this.props.relationshipID, activity.id))} basic color='red'>Delete</Button>
                </div>
            </Card.Content>
          </Card>
              ))}
     </Card.Group>

        </Segment>
      </Segment>
    )
  }
}
const mapStateToProps = (state) => {
  return{ bucketLists: state.bucketLists,
          relationshipID: state.activeRelationship.id
  }
}

export default connect(mapStateToProps)(BucketList);
