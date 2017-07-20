import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form, Table } from 'semantic-ui-react';
import FoodForm from './FoodForm';
import RelationshipSelect from './RelationshipSelect';
import { deleteFood } from '../actions/food';
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




class Food extends Component {

  render() {

  const tableContent = this.props.foods.map((activity, i) => {
    let cleanedActivity = activity.restaurant.split().join('%20')
    let cleanedLocation = activity.location.split().join('%20')
    return(
      <Table.Row key={i}>
        <Table.Cell >< a href={`https://www.google.com/search?q=${cleanedActivity}+${cleanedLocation}`} target="_blank" rel="noreferrer noopener">{activity.restaurant}</a></Table.Cell>
        <Table.Cell >{activity.location}</Table.Cell>
        <Table.Cell >{activity.food_type}</Table.Cell>
        <Table.Cell textAlign='right'>
          <Button onClick={ () => this.props.dispatch(deleteFood(this.props.relationshipID, activity.id))} basic color='red'>Delete</Button>
        </Table.Cell>
      </Table.Row>
    )
  })

    return(
      <Segment basic style={styles.main}>
        <Header as='h1' style={{color: 'white'}} textAlign='center'>Food</Header>
         <Segment basic textAlign='center'>
          <FoodForm />
         </Segment>

          <Table celled inverted selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Restaurant</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Food Type</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>Remove</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              { tableContent }
            </Table.Body>
          </Table>
        </Segment>
      )
    }
  }


const mapStateToProps = (state) => {
  return{ foods: state.foods,
    //.food because it says food in the reducer
          relationshipID: state.activeRelationship.id
  }
}

export default connect(mapStateToProps)(Food);
