import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form, Grid, Icon } from 'semantic-ui-react';
import RelationForm from './RelationForm'

class Relationship extends Component {

  render() {
    return(
      <div>
      <Header as='h1' textAlign='center'>Relationship Info</Header>
      <Grid columns='equal'>
        <Grid.Row>
         <Grid.Column>
           <Segment>
             Personal

           </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Clothes</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>Important Dates</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Address</Segment>
        </Grid.Column>
      </Grid.Row>
     </Grid>
     </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { activeRelationship: state.activeRelationship }
}

export default connect(mapStateToProps)(Relationship);
