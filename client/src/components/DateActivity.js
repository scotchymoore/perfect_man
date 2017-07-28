import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { Header, Modal, Button, Segment, Form, Table } from 'semantic-ui-react';
import DateActivityForm from './DateActivityForm'
import RelationshipSelect from './RelationshipSelect';
import { deleteDateActivity } from '../actions/dateActivity';
import { Card, Image } from 'semantic-ui-react'
import backgroundImage from '../assets/black-diamond-plate.jpg';
import _ from 'lodash';
import '../styles/fonts.css';
import styled from 'styled-components';

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
    overflow: 'auto',
  },
  mainTable: {
    height: '100vh',
    width: '90vw',
    display: 'flex',
    overflow: 'auto',
    margin: '10px',
  },
}

const head = styled.h1`
font-family: 'Bangers', cursive !important;
 color: orange !important;
 font-size: 500% !important;
 padding: 10px !important;
 border-color: "orange" !important;
 `;


class DateActivity extends Component {
  state = { randActivity: '',
            randFood: '',
            column: null,
            data: [],
            direction: null, }

  setRandom = () => {
    this.setState({ randActivity: this.props.dateActivities[Math.floor(Math.random() * this.props.dateActivities.length)] })
    this.setState({ randFood: this.props.foods[Math.floor(Math.random() * this.props.foods.length)] })

  }

  randomDate = () => {
    if (typeof(this.state.randActivity) !="undefined" && typeof(this.state.randFood) != "undefined") {
      return (
        <Modal trigger={<Button content="Random Date" icon="random" labelPosition='left' onClick={this.setRandom} />}>
          <Modal.Description>
            <Header>Your Random Date!</Header>
              <p>Location: {this.state.randActivity.location} </p>
              <p>Activity: {this.state.randActivity.activity}</p>
              <p>..and if you are hungry, try grabbing some {this.state.randFood.food_type} at {this.state.randFood.restaurant}</p>
          </Modal.Description>
        </Modal>
      )
    } else {
    return(
      <Modal trigger={<Button content="Random Date" icon="random" labelPosition='left' onClick={this.setRandom}  />}>
        <Modal.Description>
          <Header>Your Random Date!</Header>
                <p>To use the Random Date button, you must store the following:
                  <ul>
                    <li>Date Location</li>
                    <li>Date Activity</li>
                    <li>Favorite food at a restaurant</li>
                  </ul>
                </p>
        </Modal.Description>
      </Modal>
      )}
    }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.dateActivities })
  }

  componentDidMount() {
    this.setState({ data: this.props.dateActivities })
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

    const tableContent = _.map(data, ({ activity, location, id }, i) => {
      let cleanedActivity = activity.split().join('%20')
      let cleanedLocation = location.split().join('%20')
      return(
        <Table.Row key={i}>
          <Table.Cell >
            < a
              href={`https://www.google.com/search?q=${cleanedActivity}+${cleanedLocation}`}
              target="_blank" rel="noreferrer noopener"
            >
            {activity}
            </a>
          </Table.Cell>
          <Table.Cell >{location}</Table.Cell>
          <Table.Cell textAlign='right'>
            <Button onClick={ () => this.props.dispatch(deleteDateActivity(this.props.relationshipID, id))}
              basic color='red'
            >
              Delete
            </Button>
          </Table.Cell>
        </Table.Row>
      )
    })

    return(
      <Segment basic style={styles.main}>
        <Segment inverted>
          <Header as={head} textAlign='center'>Date Activities</Header>
        </Segment>
          <Segment basic  textAlign='center'>
            <DateActivityForm />
          {this.randomDate()}
          </Segment>
          <Segment basic style={styles.mainTable}>
            <Table celled inverted selectable sortable={true} CaseInsensitive>
              <Table.Header >
                <Table.Row>
                  <Table.HeaderCell sorted={column === 'activity' ? direction : null} onClick={this.handleSort('activity')}>Date Activity</Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'location' ? direction : null} onClick={this.handleSort('location')}>Location</Table.HeaderCell>
                  <Table.HeaderCell textAlign='right'>Remove</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body >
                {tableContent}
              </Table.Body>
            </Table>
            </Segment>
          </Segment>
        )
      }
    }



const mapStateToProps = (state) => {
  return{ dateActivities: state.dateActivities,
          relationshipID: state.activeRelationship.id,
          foods: state.foods
  }
}

export default connect(mapStateToProps)(DateActivity);
