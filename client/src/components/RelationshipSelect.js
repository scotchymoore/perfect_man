import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelationships } from '../actions/relationActions'
import { withRouter, Link } from 'react-router-dom'



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
    this.props.history.push(`/relationship/${this.state.id}`)

  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Relationship:
          <select value={this.state.id} onChange={this.handleChange}> 
            <option>Choose a Relationship</option>
            return (
              {this.props.relationships.map((relationship, i) => (
              <option key={i} value={relationship.id} >{relationship.name} </option>
              ))}
            );
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
     <h4>Please select a relationship from the dropdown above or create a new one <Link to='/relationshipForm'>HERE</Link> </h4>
     </div>
    );
  }
  
}      
const mapStateToProps = (state) => {
  return { relationships: state.relationships }
}
export default withRouter(connect(mapStateToProps)(RelationshipSelect));   