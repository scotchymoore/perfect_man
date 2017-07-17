import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import FoodForm from './FoodForm';
import RelationshipSelect from './RelationshipSelect';
import { deleteFood } from '../actions/food';
import { Card, Image } from 'semantic-ui-react'



class Food extends Component {
  // state = { restaurant: '', food_type: '', location: ''}

  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Food</Header>
        <Segment basic textAlign='center'>
        <FoodForm />
        <Card.Group>
         
        {this.props.foods.map((activity, i) => (
          <Card key={i}>
            <Card.Content>
              <Card.Header>
                {activity.restaurant}
              </Card.Header>
              <Card.Meta>
                {activity.location}
              </Card.Meta>
               <Card.Meta>
                {activity.food_type}
              </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button onClick={ () => this.props.dispatch(deleteFood(this.props.relationshipID, activity.id))} basic color='red'>Delete</Button>
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
  return{ foods: state.food,
    //.food because it says food in the reducer
          relationshipID: state.activeRelationship.id
  }
}

export default connect(mapStateToProps)(Food);

