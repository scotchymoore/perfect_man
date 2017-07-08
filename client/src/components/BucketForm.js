import React from 'react';
import { connect } from 'react-redux';
import {  addBucketList } from '../actions/bucketList';

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
      <form onSubmit={this.handleSubmit}>
        <input 
          name = "location"
          placeholder="location"
          value = {this.state.location}
          onChange ={this.handleChange}
          />
        <input
          name = "bucket_list_item"
          placeholder = "bucket list activity"
          value = {this.state.bucket_list_item}
          onChange ={this.handleChange}
          />
        <button type="submit">Add to the Bucket List!</button>
      </form>
    );
  }
}
export default connect()(BucketActivityForm);