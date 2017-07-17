import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import FoodForm from './FoodForm';

class Food extends Component {
  state = { restaurant: '', type: '', location: ''}

  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Food Choices</Header>
        <FoodForm />
      </Segment>

    )
  }
}

export default connect()(Food);
