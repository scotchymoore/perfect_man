import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { Header, Modal, Button, Segment, Container, Form, Table } from 'semantic-ui-react';
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
  popupb: {
    border: 'solid',
    borderColor: 'orange',
    borderWidth: '4px',
    padding: '20px',

  }
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
            direction: null, 
            isVertical: true,
            isDesktop: true, }

  dropHeader = (screenHeight) => {
    if (screenHeight > '700' ) {
      return (
       <Segment inverted>
          <Header as={head} textAlign='center'>Date Activities</Header>
        </Segment>
      )
    } else {
      {}
    }
  }

  renderForm = (screenHeight) => {
    if (screenHeight > '400' ) {
        return (
          <DateActivityForm />
        )
      } else {
        return (
          <Container style={{color: 'white'}} >
            Please turn your device vertical to add items.
          </Container>
        )
      }
  }

  screenChange = () => {
    console.log('hit this');
    if(window.screen.height > 700) {
      this.setState({ isDesktop: true, isVertical: true });
    } else if(window.screen.height > 400) {
      this.setState({ isDesktop: false, isVertical: true });
    } else if (window.screen.height < 400) {
      this.setState({ isDesktop: false, isVertical: false })
    }
  };

  setRandom = () => {
    this.setState({ randActivity: this.props.dateActivities[Math.floor(Math.random() * this.props.dateActivities.length)] })
    this.setState({ randFood: this.props.foods[Math.floor(Math.random() * this.props.foods.length)] })

  }

  randomDate = () => {
    if (typeof(this.state.randActivity) !="undefined" && typeof(this.state.randFood) != "undefined") {
      return (
        <Modal trigger={<Button content="Random Date" icon="random" labelPosition='left' onClick={this.setRandom} />}>
          <Modal.Description style={styles.popupb} >
            <Header>Your Random Date!</Header>
            <Modal.Content>
              <p>Location: {this.state.randActivity.location} </p>
              <p>Activity: {this.state.randActivity.activity}</p>
              <p>..and if you are hungry, try grabbing some {this.state.randFood.food_type} at {this.state.randFood.restaurant}</p>
            </Modal.Content>
          </Modal.Description>
        </Modal>
      )
    } else {
    return(
      <Modal trigger={<Button content="Random Date" icon="random" labelPosition='left' onClick={this.setRandom} />} >
        <Modal.Description style={styles.popupb}>
          <Header>Your Random Date!</Header>
            <Modal.Content>
                <p>To use the Random Date button, you must store the following:
                  <ul>
                    <li>Date Location</li>
                    <li>Date Activity</li>
                    <li>Favorite food at a restaurant</li>
                  </ul>
                </p>
            </Modal.Content>
        </Modal.Description>
      </Modal>
      )}
    }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.dateActivities })
  }

  componentDidMount() {
    this.setState({ data: this.props.dateActivities });
    window.addEventListener('resize', this.screenChange);
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
              style={{color: 'orange'}}
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
         { this.state.isDesktop ? this.dropHeader(window.screen.height) : null }
        {/* <Segment inverted>
          <Header as={head} textAlign='center'>Date Activities</Header>
        </Segment> */}
          <Segment basic  textAlign='center'>
            { this.state.isVertical ? this.renderForm(window.screen.height) : <p style={{color: 'white'}}>Please turn your device vertical to add items.</p> }
            {/* <DateActivityForm /> */}
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
