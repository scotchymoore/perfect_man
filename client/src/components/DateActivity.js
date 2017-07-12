import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import DateActivityForm from './DateActivityForm'


class DateActivity extends Component {
  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Date Activities</Header>
        <DateActivityForm /> 
       
      </Segment>
    )
  }
}

export default connect()(DateActivity);
//todo: map over date activities that are in the redux store and display them
// date location name for that activity
// 
// 

// get dateactivity with relationship.id
