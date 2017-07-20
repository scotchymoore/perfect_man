import React from 'react';
import { connect } from 'react-redux';
import { addBucketList } from '../actions/bucketList';
import { Button, Form, Segment } from 'semantic-ui-react';

class BucketActivityForm extends React.Component {
    state = { location: '', bucket_list_item: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        let bucketActivity= this.state;
        let id = this.props.relationshipId;
        this.props.dispatch(addBucketList(bucketActivity, id));
        this.setState({ location: '', bucket_list_item: '' })
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
            <Form.Input label='Bucket List Activity'
            placeholder='Activity'
            name='bucket_list_item'
            value={this.state.bucket_list_item}
            onChange={this.handleChange}/>
            <Form.Input label='Location'
            placeholder='Location'
            name='location'
            value={this.state.location}
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
export default connect(mapStateToProps)(BucketActivityForm);
