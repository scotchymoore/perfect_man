import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header, Image, Divider, Segment, Grid, Menu, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { handleUpload, fetchPhotos } from '../actions/photos';
import Dropzone from 'react-dropzone';

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

  componentDidMount() {
    this.props.dispatch(fetchPhotos());
  }

  onDrop = (photos) => {
    this.props.dispatch(handleUpload(photos[0]));
  }

  handleClick = () => {
    this.setState({ message: 'onClick handled' })
  }

  render() {
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
               { this.props.photos[0] ?
                 <Image src={this.props.photos[0].url} alt='wingman' /> :
                 <Header as='h4'> Click or Drop Photo</Header>
               }
              </Dropzone>
            </Grid.Column>
          </Grid>
      </Segment>
      <Segment textAlign='center'>
        <Grid centered width={30}>
          <Grid.Column streched>
          <Segment basic textAlign='center'>
          <Menu vertical
            style={style.menubox}
          >
            <Menu.Item onClick={this.handleClick}>Javascript Link</Menu.Item>
            <Menu.Item onClick={this.handleClick}>Javascript Link</Menu.Item>
            <Menu.Item onClick={this.handleClick}>Javascript Link</Menu.Item>
          </Menu>
          </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>

    );
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos };
}

export default connect(mapStateToProps)(Home);
