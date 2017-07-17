import React from 'react';
import { connect } from 'react-redux';
import { addDateActivities } from '../actions/dateActivity';


class DateActivityForm extends React.Component {
    state = { location: '', activity: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        let dateActivity= this.state;
        let id = this.props.relationshipId;
        this.props.dispatch(addDateActivities(dateActivity, id));
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value });
    }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name = "location"
          placeholder="date location"
          value = {this.state.location}
          onChange ={this.handleChange}
          />
        <input
          name = "activity"
          placeholder = "date activity"
          value = {this.state.activity}
          onChange ={this.handleChange}
          />
        <button type="submit">Add Activity</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { relationshipId: state.activeRelationship.id }
}
export default connect(mapStateToProps)(DateActivityForm);
