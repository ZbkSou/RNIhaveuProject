/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Navigator
} from 'react-native';
import NaviApp from './js/route/index'

export default class App extends React.Component {
  render() {
    return <NaviApp />;
  }

  componentWillMount() {
    // if (this.props.user != null) {
    //   userManager.setUser(this.props.user)
    // }
  }
}

