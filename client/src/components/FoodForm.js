import React from 'react';
import { connect } from 'react-redux';
import { addFood } from '../actions/food';

class FoodForm extends React.Component {
    state = { location: '', type: '', restaurant: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        const foodInfo= this.state;
        this.props.dispatch(addFood(foodInfo));
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
          placeholder="location"
          value = {this.state.location}
          onChange ={this.handleChange}
          />
        <input
          name = "type"
          placeholder = "food type"
          value = {this.state.type}
          onChange ={this.handleChange}
          />
          <input
          name = "restaurant"
          placeholder = "name of restaurant"
          value = {this.state.restaurant}
          onChange ={this.handleChange}
          />
        <button type="submit">Add Activity</button>
      </form>
    );
  }
}
export default connect()(FoodForm);