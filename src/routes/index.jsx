import React from 'react';
import {
  Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';

import { WelcomePage } from '../pages/Welcome';
import { PosterPage } from '../pages/Poster';
import { SearchResultsPage } from '../pages/SearchResults';
import { NavigationBar } from '../components/NavigationBar';
// import { Toaster } from '../components/Toaster/ index';

/**
 * App Routing Component
 *
 * @returns {JSX.Element} Element
 */
export function Routes() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={WelcomePage} />
        <Route exact path="/poster" component={PosterPage} />
        <Route exact path="/search-results" component={SearchResultsPage} />
      </Switch>
    </BrowserRouter>
  );
}
