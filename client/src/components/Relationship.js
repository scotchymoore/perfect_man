import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import RelationForm from './RelationForm'
import { getBucketList } from '../actions/bucketList';
import { getFood } from '../actions/food';

class Relationship extends Component {

<<<<<<< HEAD
  componentDidMount=() => {
    this.props.dispatch(getBucketList(this.props.match.params.id))
    this.props.dispatch(getFood(this.props.match.params.id))
    // this.props.dispatch()
=======
  componentDidMount() {
    //TODO dispatch action to get all users relationship
    this.props.dispatch(getRelationships())

  }

  setRelationship = (id) => {
    let { relationships, dispatch } = this.props;
    let relationship = relationships.find( r => r.id === id )
    dispatch({ type: 'SET_ACTIVE_RELATIONSHIP', relationship })
>>>>>>> cdc58877321e66f3814cf1905e2040e6d7b27225
  }

  render() {
    this.props.bucketLists
    this.props.foods
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Important Information</Header>
        <RelationForm />
      </Segment>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    relationship: state.relationships.filter( relationship => relationship.id == props.match.params.id),
    bucketlists: state.bucketlists,
    foods: state.foods
  }
}

<<<<<<< HEAD
=======
const mapStateToProps = (state) => {
  return { relationships: state.relationships}
}

>>>>>>> cdc58877321e66f3814cf1905e2040e6d7b27225
export default connect(mapStateToProps)(Relationship);
