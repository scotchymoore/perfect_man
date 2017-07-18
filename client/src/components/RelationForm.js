import React from 'react';
import { connect } from 'react-redux';
import { addRelationship } from '../actions/relationActions';
import { Button, Form, Input, Radio, Select, TextArea, Label } from 'semantic-ui-react';

const topOptions = [
  { key: 'xxs', text: 'XXS', value: 'xxs' },
  { key: 'xs', text: 'XS', value: 'xs' },
  { key: 's', text: 'Small', value: 's' },
  { key: 'm', text: 'Medium', value: 'm' },
  { key: 'l', text: 'Large', value: 'l' },
  { key: 'xl', text: 'XL', value: 'xl' },
  { key: 'xxl', text: 'XXL', value: 'xxl' }
]

const bottomOptions = [
  { key: 'p4', text: '4', value: 'p4' },
  { key: 'p6', text: '6', value: 'p6' },
  { key: 'p8', text: '8', value: 'p8' },
  { key: 'p10', text: '10', value: 'p10' },
  { key: 'p12', text: '12', value: 'p12' },
  { key: 'p14', text: '14', value: 'p14' },
  { key: 'p16', text: '16', value: 'p16' },
  { key: 'p18', text: '18', value: 'p18' },
  { key: 'p20', text: '20', value: 'p20' },
  { key: 'p22', text: '22', value: 'p22' },
  { key: 'p24', text: '24', value: 'p24' }
]

const braOptions = [
  { key: 'A', text: 'A', value: 'A' },
  { key: 'AA', text: 'AA', value: 'AA' },
  { key: 'B', text: 'B', value: 'B' },
  { key: 'C', text: 'C', value: 'C' },
  { key: 'D', text: 'D', value: 'D' },
  { key: 'DD', text: 'DD', value: 'DD' },
  { key: 'E', text: 'E', value: 'E' },
  { key: 'F', text: 'F', value: 'E' }

]

const shoeOptions = [
  { key: '4', text: '4', value: '4' },
  { key: '5', text: '5', value: '5' },
  { key: '6', text: '6', value: '6' },
  { key: '7', text: '7', value: '7' },
  { key: '8', text: '8', value: '8' },
  { key: '9', text: '9', value: '9' },
  { key: '10', text: '10', value: '10' },
  { key: '11', text: '11', value: '11' },
  { key: '12', text: '12', value: '12' },

]

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
      this.props.dispatch(addRelationship(relationInfo));
    }

    handleChange = (e) => {
      const { name, value } = e.target
      this.setState({ [name]: value });
    }

  render(){
    return(
      <Form>
          <Form.Field>
            <label>Name</label>
            <input
              placeholder='Her Name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Birthday</label>
            <input
              placeholder='Her Birthday'
              name='dob'
              value={this.state.dob}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Birth Location</label>
            <input
              placeholder='Birth Location'
              name='pob'
              value={this.state.pob}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Favorite Flowers</label>
            <input
              placeholder='Her Flowers'
              name='flower'
              value={this.state.flower}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Anniversary</label>
            <input
              placeholder='Your Anniversary'
              name='annv'
              value={this.state.annv}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>First Date</label>
            <input
              placeholder='Your First Date'
              name='first_date'
              value={this.state.first_date}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Street Address</label>
            <input
              placeholder='Street Address'
              name='street'
              value={this.state.street}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              placeholder='City'
              name='city'
              value={this.state.city}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>State</label>
            <input
              placeholder='State'
              name='state'
              value={this.state.state}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Zip Code</label>
            <input
              placeholder='Zip Code'
              name='zip'
              value={this.state.zip}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Other Information</label>
            <input
              placeholder='Other'
              name='misc'
              value={this.state.msc}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field >
            <label>Height</label>
            <input
              placeholder='Heigth'
              name='Height'
              value = {this.state.height}
              onChange ={this.handleChange}
            />
          </Form.Field>
          <Form.Field
            control={Select}
            label='Shirt Size'
            name='top_size'
            options={topOptions}
            placeholder='Shirt Size'
            value = {this.state.top_size}
            onChange ={ (e, data) => this.setState({ [data.name]: data.value }) }
          />
          <Form.Field
            control={Select}
            label='Waist Size'
            name='bottom_size'
            options={bottomOptions}
            placeholder='Waist Size'
            value = {this.state.bottom_size}
            onChange ={ (e, data) => this.setState({ [data.name]: data.value }) }
          />
          <Form.Field
            control={Select}
            label='Shoe Size'
            name='shoe_size'
            options={shoeOptions}
            placeholder='Shoe Size'
            value = {this.state.shoe_size}
            onChange ={ (e, data) => this.setState({ [data.name]: data.value }) }
          />
          <Form.Field
            control={Select}
            label='Bra size'
            name='bust_size'
            options={braOptions}
            placeholder='Bra size'
            value = {this.state.bust_size}
            onChange ={ (e, data) => this.setState({ [data.name]: data.value }) }
          />
          <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
      </Form>
    );
  }
}
export default connect()(RelationForm);
