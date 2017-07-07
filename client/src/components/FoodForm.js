import React from 'react';
import { connect } from 'react-redux';
import { addFood? } from '../actions/foodActions?';

class FoodForm extends React.Component {
    state = { location: '', activity: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        const dateActivity= this.state;
        this.props.dispatch(addDateActivity?(dateActivity));
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
export default connect()(FormForm);