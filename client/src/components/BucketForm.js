import React from 'react';
import { connect } from 'react-redux';
import { addBucketList } from '../actions/bucketList';
import { Button, Form } from 'semantic-ui-react';

class BucketActivityForm extends React.Component {
    state = { location: '', bucket_list_item: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        const bucketActivity= this.state;
        this.props.dispatch(addBucketList(bucketActivity));
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value });
    }

  render(){
    return(
      <Form>
          <Form.Field>
            <label>Bucket List Wish</label>
            <input
              placeholder='The Wish'
              name='bucket_list_item'
              value={this.state.bucketList}
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
          <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
      </Form>

    );
  }
}
export default connect()(BucketActivityForm);
