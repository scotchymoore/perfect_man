import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import DateActivityForm from './DateActivityForm'

import RelationshipSelect from './RelationshipSelect';
import { deleteDateActivity } from '../actions/dateActivity';
import { Card, Image } from 'semantic-ui-react'


class DateActivity extends Component {

  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Date Activity</Header>
        <Segment basic textAlign='center'>
        <DateActivityForm />
        <Card.Group>
         
        {this.props.dateActivities.map((activity, i) => (
          <Card key={i}>
            <Card.Content>
              <Card.Header>
                {activity.date_activity_item}
              </Card.Header>
              <Card.Meta>
                {activity.location}
              </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button onClick={ () => this.props.dispatch(deleteDateActivity(this.props.relationshipID, activity.id))} basic color='red'>Delete</Button>
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
  return{ dateActivities: state.dateActivity,
          relationshipID: state.activeRelationship.id
  }
}

export default connect(mapStateToProps)(DateActivity);


/*class DateActivity extends Component {

  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Date Activities</Header>
        <DateActivityForm /> 
       
      </Segment>
    )
  }
}

export default connect()(DateActivity);*/
//todo: map over date activities that are in the redux store and display them
// date location name for that activity
// 
// 

// get dateactivity with relationship.id
