/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Route from './app/route';
import { Provider } from 'mobx-react';
import store from './app/model';

export default class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <Route />
      </Provider>
    );
  }
}
