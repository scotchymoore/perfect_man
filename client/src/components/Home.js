import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header, Image, Divider, Segment, Grid, Menu, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { handleUpload } from '../actions/photos';
import Dropzone from 'react-dropzone';
import HomeIndex from './HomeIndex';
import RelationshipSelect from './RelationshipSelect';

const styles = {
  dropzone: {
    height: 'auto',
    borderWidth: '2px',
    borderColor: 'rgb(102, 102, 102)',
    borderRadius: '5px',
    margin: '0 auto',
  }
}

const style = {
  menubox: {
      height: 'auto',
      borderWidth: '2px',
      borderRadius: '5px',
      margin: '0 auto',
    }
}

class Home extends Component {

  onDrop = (photos) => {
    this.props.dispatch(handleUpload(photos[0]));
  }

  handleClick = () => {
    this.setState({ message: 'onClick handled' })
  }

  render() {

    if(this.props.user.id) {
      return(
    <div>
      <Segment basic textAlign='center'>
          <Header as='h2'>Wingman</Header>
          <Grid centered width={16}>
            <Grid.Column stretched>
              <Dropzone
                style={styles.dropzone}
                onDrop={this.onDrop}
              >
               { this.props.user.image ?
                 <Image src={this.props.user.image} alt='wingman' /> :
                 <Header as='h4'> Click or Drop Photo</Header>
               }
              </Dropzone>
            </Grid.Column>
          </Grid>
      </Segment>

      <RelationshipSelect />
      <Segment textAlign='center'>
        <Grid centered width={30}>
          <Grid.Column streched>
          <Segment basic textAlign='center'>
          <Menu vertical
            style={style.menubox}
          >
            <Link to="/Relationship"><Menu.Item onClick={this.handleClick}>Relationship Info</Menu.Item></Link>
            <Link to="/Food"><Menu.Item onClick={this.handleClick}>Foods</Menu.Item></Link>
            <Link to="/BucketList"><Menu.Item onClick={this.handleClick}>Bucket Lists</Menu.Item></Link>
            <Link to="/DateActivity"><Menu.Item onClick={this.handleClick}>Date Activities</Menu.Item></Link>
          </Menu>
          </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
    )
  } else {
    return(
      <div>
        <HomeIndex />
      </div>
    )
  }
}
}

const mapStateToProps = (state) => {
  return { user: state.user };
}

export default connect(mapStateToProps)(Home);
