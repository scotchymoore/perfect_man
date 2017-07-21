import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form, Table } from 'semantic-ui-react';
import FoodForm from './FoodForm';
import RelationshipSelect from './RelationshipSelect';
import { deleteFood } from '../actions/food';
import { Card, Image } from 'semantic-ui-react'
import backgroundImage from '../assets/black-diamond-plate.jpg';
import _ from 'lodash';

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

  state = {
    column: null,
    data: [],
    direction: null,
  }

  componentDidMount() {
    console.log(this.props.foods)
    this.setState({ data: this.props.foods })
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }


  render() {

    const { column, data, direction } = this.state

    const tableContent = _.map(data, ({ restaurant, location, food_type, id }, i) => {
    // const tableContent = this.props.foods.map((activity, i) => {
    console.log(id)
      let cleanedActivity = restaurant.split().join('%20')
      let cleanedLocation = location.split().join('%20')
      return(
        <Table.Row key={i} >
          <Table.Cell >
            <a
              href={`https://www.google.com/search?q=${cleanedActivity}+${cleanedLocation}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {restaurant}
            </a>
          </Table.Cell>
          <Table.Cell >{location}</Table.Cell>
          <Table.Cell >{food_type}</Table.Cell>
          <Table.Cell textAlign='right'>
            <Button
              onClick={ () => this.props.dispatch(deleteFood(this.props.relationshipID, id))}
              basic
              color='red'
            >
              Delete
            </Button>
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

          <Table celled inverted selectable sortable={true}>
            <Table.Header >
              <Table.Row>
                <Table.HeaderCell sorted={column === 'restaurant' ? direction : null} onClick={this.handleSort('restaurant')}>Restaurant</Table.HeaderCell>
                <Table.HeaderCell sorted={column === 'location' ? direction : null} onClick={this.handleSort('location')}>Location</Table.HeaderCell>
                <Table.HeaderCell sorted={column === 'food_type' ? direction : null} onClick={this.handleSort('food_type')}>Food Type</Table.HeaderCell>
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
