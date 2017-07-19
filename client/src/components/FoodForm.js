import React from 'react';
import { connect } from 'react-redux';
import { addFood } from '../actions/food';
import { Button, Form } from 'semantic-ui-react';

class FoodForm extends React.Component {
    state = { location: '', food_type: '', restaurant: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        let foodInfo= this.state;
        let id = this.props.relationshipId;
        this.props.dispatch(addFood(foodInfo, id));
        this.setState({ location: '', restaurant: '', food_type: ''})
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value });
    }

  render(){
    return(
      <Form>
          <Form.Field>
            <label>Restaurant</label>
            <input
              placeholder='Restaurant'
              name='restaurant'
              value={this.state.restaurant}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input
              placeholder='The Location'
              name='location'
              value={this.state.location}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Food Type</label>
            <input
              placeholder='Food Type'
              name='food_type'
              value={this.state.food_type}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return { relationshipId: state.activeRelationship.id }
}
export default connect(mapStateToProps)(FoodForm);
