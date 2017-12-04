/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from "./src/components/splash-screen";

export default class App extends Component<{}> {

  constructor(){
    super();
    this.state = {
        screenName: 'MASHA'
    }
  }

  componentWillMount(){
    // TODO: All initial data functions goes here
    // all data from the API/ajax/DB...
  }

  render() {
    return (
      <View style={styles.container}>
        <SplashScreen grisha={this.state.screenName} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
