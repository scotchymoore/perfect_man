import React from 'react';
import { connect } from 'react-redux';
import { addDateActivities } from '../actions/dateActivity';
import { Button, Form , Segment} from 'semantic-ui-react';

class DateActivityForm extends React.Component {
    state = { location: '', activity: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        let dateActivity= this.state;
        let id = this.props.relationshipId;
        this.props.dispatch(addDateActivities(dateActivity, id));
        this.setState({ location: '', activity: '' })
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
        <Form.Input label='Date Activity'
        placeholder='Activity'
        name='activity'
        value={this.state.activity}
        onChange={this.handleChange}/>
        <Form.Input label='Date Location'
        placeholder='Location'
        name='location'
        value={this.state.location}
        onChange={this.handleChange} />
      </Form.Group>
      <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
    </Form>
  </Segment>

      // <form onSubmit={this.handleSubmit}>
      //   <input
      //     name = "location"
      //     placeholder="date location"
      //     value = {this.state.location}
      //     onChange ={this.handleChange}
      //     />
      //   <input
      //     name = "activity"
      //     placeholder = "date activity"
      //     value = {this.state.activity}
      //     onChange ={this.handleChange}
      //     />
      //   <button type="submit">Add Activity</button>
      // </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { relationshipId: state.activeRelationship.id }
}
export default connect(mapStateToProps)(DateActivityForm);
