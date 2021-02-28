import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import TableList from './TableList';
import User from './User';
import Notify from './Notify';

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/user" component={User} />
        <Route path="/tables" component={TableList} />
        <Route path="/notify" component={Notify} />

      </Switch>
    );
  }
}

export default Content;