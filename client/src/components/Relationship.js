import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import RelationForm from './RelationForm'
import { getBucketList } from '../actions/bucketList';
import { getFood } from '../actions/food';

class Relationship extends Component {


  componentDidMount=() => {
    const id = this.props.match.params.id 
    this.props.dispatch(getBucketList(id))
    this.props.dispatch(getFood(id))
  }



  render() {
    this.props.bucketLists
    this.props.foods
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Important Information</Header>
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

export default connect(mapStateToProps)(Relationship);
