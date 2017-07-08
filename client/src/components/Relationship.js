import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import RelationForm from './RelationForm'

class Relationship extends Component {

  componentDidMount() {
    //TODO dispatch action to get all users relationship
    this.props.dispatch(getRelationships())

  }

  setRelationship = (id) => {
    let { relationships, dispatch } = this.props;
    let relationship = relationships.find( r => r.id === id )
    dispatch({ type: 'SET_ACTIVE_RELATIONSHIP', relationship })
  }

  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Important Information</Header>
        <RelationForm />
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { relationships: state.relationships}
}

export default connect(mapStateToProps)(Relationship);
