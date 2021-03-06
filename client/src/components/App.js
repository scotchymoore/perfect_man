import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './FetchUser';
import Food from './Food';
import BucketList from './BucketList';
import DateActivity from './DateActivity';
import Relationship from './Relationship';
import HomeIndex from './HomeIndex';
import RelationForm from './RelationForm';



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/homeIndex' component={HomeIndex} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/food' component={Food} />
            <Route exact path='/bucketList' component={BucketList} />
            <Route exact path='/dateActivity' component={DateActivity} />
            <Route exact path='/relationship/:id' component={Relationship} />
            <Route exact path='/relationshipForm' component={RelationForm} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
