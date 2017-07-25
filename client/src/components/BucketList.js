import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header, Button, Segment, Form, Table } from 'semantic-ui-react';
import BucketForm from './BucketForm';
import RelationshipSelect from './RelationshipSelect';
import { deleteBucketList } from '../actions/bucketList';
import { Card, Image } from 'semantic-ui-react'
import backgroundImage from '../assets/black-diamond-plate.jpg';
import _ from 'lodash';
import capitalize  from 'capitalize';

const styles = {
  main: {
    height: '100vh',
    width: null,
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '0px',
  },
}

class BucketList extends Component {

  state = {
    column: null,
    data: [],
    direction: null,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.bucketLists})
  }

  componentDidMount() {
    this.setState({ data: this.props.bucketLists })
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }


  render() {

  const { column, data, direction } = this.state

  const tableContent = _.map(data, ({ bucket_list_item, location, id }, i) => {
    let cleanedActivity = bucket_list_item.split().join('%20')
    let cleanedLocation = location.split().join('%20')
    return(
      <Table.Row key={i}>
        <Table.Cell >
          < a
            href={`https://www.google.com/search?q=${cleanedActivity}+${cleanedLocation}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            {bucket_list_item}
          </a>
        </Table.Cell>
        <Table.Cell >{location}</Table.Cell>
        <Table.Cell textAlign='right'>
          <Button onClick={ () => this.props.dispatch(deleteBucketList(this.props.relationshipID, id))} basic color='red'>Delete</Button>
        </Table.Cell>
      </Table.Row>
    )
  })

    return(
      <Segment basic style={styles.main}>
        <Header as='h1' style={{color: 'white'}} textAlign='center'>Bucket List</Header>
         <Segment basic textAlign='center'>
          <BucketForm />
         </Segment>

          <Table celled inverted selectable sortable={true} CaseInsensitive>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell sorted={column === 'bucket_list_item' ? direction : null} onClick={this.handleSort('bucket_list_item')}>Bucket List Activity</Table.HeaderCell>
                <Table.HeaderCell sorted={column === 'location' ? direction : null} onClick={this.handleSort('location')}>Location</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>Remove</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              { tableContent }
             </Table.Body>
           </Table>
       </Segment>
    )
  }
}
const mapStateToProps = (state) => {
  return{ bucketLists: state.bucketLists,
          relationshipID: state.activeRelationship.id
  }
}

export default connect(mapStateToProps)(BucketList);
