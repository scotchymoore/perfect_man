import React from 'react';
import { connect } from 'react-redux';
//import { addRelationship } from '../actions/relationship';

class RelationForm extends React.Component {
    state = { name: '',
              dob: '',
              pob: '',
              misc: '',
              flower: '',
              annv: '',
              first_date: '',
              street: '',
              city: '',
              state: '',
              zip: '',
              top_size: '',
              bottom_size: '',
              shoe_size: '',
              bust_size: '',
              height: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const relationInfo= this.state;
      //  this.props.dispatch(addRelationship(relationInfo));
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value });
    }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
          <input 
          name = "name"
          placeholder="your relationship's full name"
          value = {this.state.name}
          onChange ={this.handleChange}
          />
          <input 
          name = "dob"
          placeholder="date of birth"
          value = {this.state.dob}
          onChange ={this.handleChange}
          />
          <input 
          name = "pob"
          placeholder="place of birth"
          value = {this.state.pob}
          onChange ={this.handleChange}
          />
          <input 
          name = "misc"
          placeholder="any other important details"
          value = {this.state.misc}
          onChange ={this.handleChange}
          />
          <input 
          name = "flower"
          placeholder="favorite type of flowers"
          value = {this.state.flower}
          onChange ={this.handleChange}
          />
          <input 
          name = "annv"
          placeholder="your Anniversary"
          value = {this.state.annv}
          onChange ={this.handleChange}
          />
          <input 
          name = "first_date"
          placeholder="your first date info"
          value = {this.state.first_date}
          onChange ={this.handleChange}
          />
          <input 
          name = "street"
          placeholder="street address"
          value = {this.state.street}
          onChange ={this.handleChange}
          />
          <input 
          name = "city"
          placeholder="city"
          value = {this.state.city}
          onChange ={this.handleChange}
          />
          <input 
          name = "state"
          placeholder="state"
          value = {this.state.state}
          onChange ={this.handleChange}
          />
          <input 
          name = "zip"
          placeholder="zip"
          value = {this.state.zip}
          onChange ={this.handleChange}
          />
          <input 
          name = "top_size"
          placeholder="top size example: sm, med, lrg"
          value = {this.state.top_size}
          onChange ={this.handleChange}
          />
            <input 
          name = "bottom_size"
          placeholder="pant size example: 4, 6, 8 10 .."
          value = {this.state.bottom_size}
          onChange ={this.handleChange}
          />
          <input 
          name = "shoe_size"
          placeholder="shoe size"
          value = {this.state.shoe_size}
          onChange ={this.handleChange}
          />
          <input 
          name = "bust_size"
          placeholder="bust size (for something special)"
          value = {this.state.bust_size}
          onChange ={this.handleChange}
          />
          <input 
          name = "height"
          placeholder="height"
          value = {this.state.height}
          onChange ={this.handleChange}
          />
        <button type="submit">Add Relationship</button>
      </form>
    );
  }
}
export default connect()(RelationForm);