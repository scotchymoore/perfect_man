import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form, Grid, Icon, List } from 'semantic-ui-react';
import RelationForm from './RelationForm'
import { deleteRelationship } from '../actions/relationActions'
import backgroundImage from '../assets/black-diamond-plate.jpg';
import '../styles/fonts.css';
import styled from 'styled-components';


const styles = {
  main: {
    minHeight: '100vh',
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

const head = styled.h1`
font-family: 'Bangers', cursive !important;
 color: orange !important;
 font-size: 500% !important;
 padding: 10px !important;
 border-color: "orange" !important;
 `;


class Relationship extends Component {
  burnItWithFire =(id) => {
    let clearRelationship = {}
    let clearRelationshipChildren = []
    const { dispatch, history } = this.props;
    
    dispatch(deleteRelationship(id, history));
    dispatch({ type: 'SET_ACTIVE_RELATIONSHIP', relationship: clearRelationship } );
    dispatch({ type: 'SET_FOODS', foods: clearRelationshipChildren } );
    dispatch({ type: 'SET_DATEACTIVITIES', dateActivities: clearRelationshipChildren } );
    dispatch({ type: 'SET_BUCKETLIST', bucketLists: clearRelationshipChildren } );
  }

  render() {
    let {name, dob, pob, misc, flower,
         annv, first_date: firstDate, street, city, state,
         zip, top_size: topSize, bottom_size: bottomSize,
         bust_size: bustSize, shoe_size: shoeSize, height }
    = this.props.activeRelationship;

    return(
      <Segment basic style={styles.main}>
        <Segment inverted>
          <Header as={head} textAlign='center'>Relationship Info</Header>
        </Segment>
      <Grid centered stackable='true' >
        <Grid.Row stretched='true'>
         <Grid.Column width={6} >
           <Segment inverted style={{color: 'orange'}}>
              <Header as='h2'>
                <Icon name='id card outline'/>
                  <Header.Content>
                    Personal
                  </Header.Content>
              </Header>
               <List>
                <List.Item>
                  <List.Header style={{color: 'white'}}>Name</List.Header>
                  {name}
                </List.Item>
                <List.Item>
                  <List.Header style={{color: 'white'}}>Place of Birth</List.Header>
                  {pob}
                </List.Item>
                <List.Item>
                  <List.Header style={{color: 'white'}}>Favorite Flower</List.Header>
                  {flower}
                </List.Item>
                <List.Item>
                  <List.Header style={{color: 'white'}}>Misc important things</List.Header>
                  {misc}
                </List.Item>
              </List>
           </Segment>
          </Grid.Column>
          <Grid.Column width={6} >
            <Segment inverted style={{color: 'orange'}}>
                <Header as='h2'>
                <Icon name='female' />
                  <Header.Content>
                    Clothes
                  </Header.Content>
              </Header>
              <List>
                <List.Item>
                  <List.Header style={{color: 'white'}}>Top Size</List.Header>
                  {topSize}
                </List.Item>
                <List.Item>
                  <List.Header style={{color: 'white'}}>Dress/Pant Size</List.Header>
                  {bottomSize}
                </List.Item>
                <List.Item>
                  <List.Header style={{color: 'white'}}>Shoe Size</List.Header>
                  {shoeSize}
                </List.Item>
                <List.Item>
                  <List.Header style={{color: 'white'}}>Bust Size</List.Header>
                  {bustSize}
                </List.Item>
                <List.Item>
                  <List.Header style={{color: 'white'}}>Height</List.Header>
                  {height}
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched='true'>
          <Grid.Column width={6} >
            <Segment inverted style={{color: 'orange'}}>
              <Header as='h2'>
                <Icon name='calendar' />
                  <Header.Content>
                    Important Dates
                  </Header.Content>
              </Header>
              <List>
                <List.Item>
                  <List.Header style={{color: 'white'}}>Birthday</List.Header>
                  {dob}
                </List.Item>
                <List.Item>
                  <List.Header style={{color: 'white'}}>Anniversary</List.Header>
                  {annv}
                </List.Item>
                <List.Item>
                  <List.Header style={{color: 'white'}}>First Date</List.Header>
                  {firstDate}
                </List.Item>
              </List>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6} >
          <Segment inverted style={{color: 'orange'}}>
              <Header as='h2'>
                <Icon name='home' />
                  <Header.Content>
                    Address
                  </Header.Content>
              </Header>
              <List>
                <List.Item>
                  <List.Header style={{color: 'white'}}>Street</List.Header>
                  {street}
                </List.Item>
                <List.Item>
                  <List.Header style={{color: 'white'}}>City</List.Header>
                  {city}
                </List.Item>
                <List.Item>
                  <List.Header style={{color: 'white'}}>State</List.Header>
                  {state}
                </List.Item>
                <List.Item>
                  <List.Header style={{color: 'white'}}>Zip</List.Header>
                  {zip}
                </List.Item>
              </List>
          </Segment>
        </Grid.Column>
      </Grid.Row>

     <Grid.Row centered>
     <Segment inverted>
     <Button onClick={ () => this.burnItWithFire(this.props.activeRelationship.id)} color='red'>Delete</Button>
     <Link to='/relationshipForm'><Button inverted color='orange'>Edit Relationship</Button></Link>

     </Segment>
     </Grid.Row>
     </Grid>
    </Segment>
    )
  }
}
const mapStateToProps = (state) => {
  return { activeRelationship: state.activeRelationship }
}

export default connect(mapStateToProps)(Relationship);
