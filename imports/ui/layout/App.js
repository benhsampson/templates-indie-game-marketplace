import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import AuthNavBar from '../components/AuthNavBar';
import FeaturedGames from '../pages/FeaturedGames';
import BrowseGames from '../pages/BrowseGames';
import Login from '../pages/Login';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';
import Signup from '../pages/Signup';
import Upload from '../pages/Upload';
import GameView from '../pages/GameView';
import GameEdit from '../pages/GameEdit';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import Documentation from '../pages/Documentation'
import PageNotFound from '../pages/PageNotFound';
import GameNotFound from '../components/GameNotFound';
import UserNotFound from '../components/UserNotFound';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <NavBar /> */}
          <AuthNavBar />
          <Switch>
            <Route exact path="/" component={ FeaturedGames } />
            <Route exact path="/games" component={ BrowseGames } />
            <Route exact path="/games/new" component={ Upload } />
            <Route exact path="/games/id" component={ GameView } />
            <Route exact path="/games/id/edit" component={ GameEdit } />
            <Route path="/login" component={ Login } />
            <Route path="/recover-password" component={ RecoverPassword } />
            <Route path="/reset-password" component={ ResetPassword } />
            <Route path="/signup" component={ Signup } />
            <Route path="/profile/username" component={ Profile } />
            <Route path="/dashboard" component={ Dashboard } />
            <Route path="/user/settings" component={ Settings } />
            <Route path="/docs" component={ Documentation } />
            <Route path="/gamenotfound" component={ GameNotFound } />
            <Route path="/usernotfound" component={ UserNotFound } />
            <Route component={ PageNotFound } />
          </Switch>
        </div>
      </Router>
    );
  }
}
