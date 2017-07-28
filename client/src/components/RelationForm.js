import React from 'react';
import { connect } from 'react-redux';
import { addRelationship } from '../actions/relationActions';
import { editRelationship } from '../actions/relationActions';
import { Button, Form, Input, Radio, Select, TextArea, Label, Segment, Grid } from 'semantic-ui-react';

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
  { key: 'p4', text: '4', value: '4' },
  { key: 'p6', text: '6', value: '6' },
  { key: 'p8', text: '8', value: '8' },
  { key: 'p10', text: '10', value: '10' },
  { key: 'p12', text: '12', value: '12' },
  { key: 'p14', text: '14', value: '14' },
  { key: 'p16', text: '16', value: '16' },
  { key: 'p18', text: '18', value: '18' },
  { key: 'p20', text: '20', value: '20' },
  { key: 'p22', text: '22', value: '22' },
  { key: 'p24', text: '24', value: '24' }
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

const styles = {
  foo: {
    width: '50%',
    height: 'auto',
    borderWidth: '2px',
    borderRadius: '5px',
    margin: '0 auto',
    textAlign: 'center'
  }
}

class RelationForm extends React.Component {
  state = { }

  componentDidMount(){
    this.checkState();
  }

  checkState = () => {
      let activeRelationship = this.props.activeRelationship;
      const defaultState = {
              name: '',
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
    };

      if (activeRelationship.name !== '') {
        this.setState(activeRelationship)
      } else {
        this.setState( defaultState )
      }
    }
    handleSubmit = (e) => {
      //add in code to dispatch update relationship path
      e.preventDefault();

      if (this.state.id){
        const updatedInfo = this.state
        this.props.dispatch(editRelationship(updatedInfo, updatedInfo.id))
        this.props.history.push(`/relationship/${this.props.activeRelationship.id}`)
      } else {
        const relationInfo= this.state;
        this.props.dispatch(addRelationship(relationInfo));
        this.props.history.push(`/`)
      }


    }

    handleChange = (e) => {
      const { name, value } = e.target
      this.setState({ [name]: value });
    }



  render() {
    return(
      <Segment width={5} inverted>
      <Grid centered columns={2}>
        <Grid.Column stretched>
           <Form inverted>
              <Form.Field>
                <label style={{color: 'white'}}>Name</label>
                <input
                  placeholder='Her Name'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{color: 'white'}}>Birthday</label>
                <input
                  type='date' 
                  placeholder='Her Birthday'
                  name='dob'
                  value={this.state.dob}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{color: 'white'}}>Birth Location</label>
                <input
                  placeholder='Birth Location'
                  name='pob'
                  value={this.state.pob}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{color: 'white'}}>Favorite Flowers</label>
                <input
                  placeholder='Her Flowers'
                  name='flower'
                  value={this.state.flower}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{color: 'white'}}>Anniversary</label>
                <input
                  type='date' 
                  placeholder='Your Anniversary'
                  name='annv'
                  value={this.state.annv}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{color: 'white'}}>Day of First Date</label>
                <input
                  type='date'
                  placeholder='Day/Mo/Year'
                  name='first_date'
                  value={this.state.first_date}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{color: 'white'}}>Street Address</label>
                <input
                  placeholder='Street Address'
                  name='street'
                  value={this.state.street}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{color: 'white'}}>City</label>
                <input
                  placeholder='City'
                  name='city'
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{color: 'white'}}>State</label>
                <input
                  placeholder='State'
                  name='state'
                  value={this.state.state}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{color: 'white'}}>Zip Code</label>
                <input
                  placeholder='Zip Code'
                  name='zip'
                  value={this.state.zip}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{color: 'white'}}>Other Information</label>
                <input
                  placeholder='Other'
                  name='misc'
                  value={this.state.misc}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{color: 'white'}}>Height</label>
                <input
                  placeholder='Heigth'
                  name='height'
                  value = {this.state.height}
                  onChange ={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Bust Size</label>
                <input
                  placeholder='Bust Size'
                  name='bust_size'
                  value={this.state.bust_size}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field
                control={Select}
                label ='Shirt Size'
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
              <Button inverted color='orange' onClick={this.handleSubmit} type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { activeRelationship: state.activeRelationship }
}
export default connect(mapStateToProps)(RelationForm);
