import React from 'react'

import { Switch, Route } from 'react-router-dom'

import HomePage from './components/pages/HomePage/HomePage';

import App from './components/templates/App';

export default (
  <main>
    <Switch>
      <App>
        <Route exact path='/' component={HomePage} />
      </App>
    </Switch>
  </main>
)
