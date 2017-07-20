import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form, Table } from 'semantic-ui-react';
import BucketForm from './BucketForm';
import RelationshipSelect from './RelationshipSelect';
import { deleteBucketList } from '../actions/bucketList';
import { Card, Image } from 'semantic-ui-react'
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

class BucketList extends Component {

  render() {
    return(
      <Segment basic style={styles.main}>
        <Header as='h1' style={{color: 'white'}} textAlign='center'>Bucket List</Header>
        <Segment basic textAlign='center'>
        <BucketForm />
        </Segment>
        <Table celled inverted selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Bucket List Activity</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell textAlign='right'>Remove</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.bucketLists.map((activity, i) => (
                <Table.Row key={i}>
                    <Table.Cell >{activity.bucket_list_item}</Table.Cell>
                    <Table.Cell >{activity.location}</Table.Cell>
                    <Table.Cell textAlign='right'>
                        <Button onClick={ () => this.props.dispatch(deleteBucketList(this.props.relationshipID, activity.id))} basic color='red'>Delete</Button>
                    </Table.Cell>
                </Table.Row>
          ))}
          </Table.Body>
        </Table>

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
