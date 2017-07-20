import React from 'react';
import { connect } from 'react-redux';
import { addFood } from '../actions/food';
import { Button, Form, Segment } from 'semantic-ui-react';

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
      <Segment inverted>
        <Form inverted>
          <Form.Group widths='equal'>
            <Form.Input label='Restaurant'
            placeholder='Restaurant'
            name='restaurant'
            value={this.state.restaurant}
            onChange={this.handleChange}/>
            <Form.Input label='Location'
            placeholder='Location'
            name='location'
            value={this.state.location}
            onChange={this.handleChange} />
            <Form.Input label='Food Type'
            placeholder='Food Type'
            name='food_type'
            value={this.state.food_type}
            onChange={this.handleChange} />
          </Form.Group>
        <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
      </Form>
    </Segment>

        
    );
  }
}

const mapStateToProps = (state) => {
  return { relationshipId: state.activeRelationship.id }
}
export default connect(mapStateToProps)(FoodForm);
