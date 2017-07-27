import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelationships } from '../actions/relationActions'
import { withRouter, Link } from 'react-router-dom'
import { getBucketList } from '../actions/bucketList';
import { getFood } from '../actions/food';
import { getDateActivities } from '../actions/dateActivity';
import { Header, Segment, Form, Button, Card, Image } from 'semantic-ui-react';
import backgroundImage from '../assets/black-diamond-plate.jpg';
import logo from '../assets/logoandtag.jpg';

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


class RelationshipSelect extends Component {
  state = { id: '' }

  componentDidMount() {
    this.props.dispatch(getRelationships());
  }
   handleChange = (event) => {
    this.setState({id: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
      if (this.state.id !== '') {
            let activeRelationship = this.props.relationships.find( (r) => r.id == this.state.id );
            this.props.dispatch({ type: 'SET_ACTIVE_RELATIONSHIP', relationship: activeRelationship } );
            this.props.dispatch(getBucketList(this.state.id))
            this.props.dispatch(getFood(this.state.id))
            this.props.dispatch(getDateActivities(this.state.id))
            this.props.history.push(`/relationship/${this.state.id}`)
      } else {
          return (
            {}
          )
      }
  }

  render() {
    return (
      <Segment basic style={styles.main}>
        <Image src={logo} size='massive' />
        <Segment inverted>
        </Segment>
        <Segment inverted>
          <Form onSubmit={this.handleSubmit}>
            <label>
              Relationship:

              <select value={this.state.id} onChange={this.handleChange}>
                <option disabled>Choose a Relationship</option>
                return (
                  {this.props.relationships.map((relationship, i) => (
                  <option key={i} value={relationship.id} >{relationship.name} </option>
                  ))}
                );
              </select>
            </label>
            <input type="submit" value="Submit" />
          </Form>
        <h4>Please select a relationship from the dropdown above or create a new one <Link to='/relationshipForm'>
        <strong style={{color: 'blue'}} onClick={ () => this.props.dispatch({ type: 'SET_ACTIVE_RELATIONSHIP', relationship: {} }) }>HERE</strong></Link></h4>
       </Segment>
     </Segment>
    );
  }

}
const mapStateToProps = (state) => {
  return { relationships: state.relationships }
}
export default withRouter(connect(mapStateToProps)(RelationshipSelect));   
