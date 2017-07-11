import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header, Image, Divider, Segment, Grid, Menu, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class HomeIndex extends Component {
  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Home</Header>
        {/*<TopPlayers />*/}
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
}

export default connect(mapStateToProps)(HomeIndex);
