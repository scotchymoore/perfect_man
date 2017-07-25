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
      {/* <Segment basic textAlign='center'>
          <Header as='h2'>Doghouse Dodger</Header>
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
      </Segment> */}

      <RelationshipSelect />
      
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
  return { user: state.user,
    relationshipID: state.activeRelationship.id
  }
}

export default connect(mapStateToProps)(Home);
