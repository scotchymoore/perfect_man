import React, { Component } from 'react';
import { connect } from 'react-redux';
import getRelationships from '../actions/relationActions'
import Redirect from 'react-router-dom'
ß

class RelationshipSelect extends Component {
  state = { id: '' } 

  componentDidMount() {
    this.props.dispatch(getRelationships());
  }
   handleChange(event) {
    this.setState({id: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
   <Redirect to={{
        pathname: `/relationship/{this.state.id}`,
      }}/>
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select a relationship:
          <select value={this.state.id} onChange={this.handleChange}>
            return (
              {this.props.relationships.map((relationship, i) => (
              <option key={i}> {relationship.id} </option>
              ))}ß
            );
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  
}      
const mapStateToProps = (state) => {
  return { relationships: state.relationships }
}
export default RelationshipSelect;   