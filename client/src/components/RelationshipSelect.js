import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelationships } from '../actions/relationActions'
import { withRouter } from 'react-router-dom'



class RelationshipSelect extends Component {
  state = { id: '' } 

  componentDidMount() {
    this.props.dispatch(getRelationships());
  }
   handleChange = (event) => {
     debugger
    this.setState({id: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(`/relationship/${this.state.id}`)

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select a relationship:
          <select value={this.state.id} onChange={this.handleChange}>
            return (
              {this.props.relationships.map((relationship, i) => (
              <option key={i} value={relationship.id} >{relationship.name} </option>
              ))}
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
export default withRouter(connect(mapStateToProps)(RelationshipSelect));   