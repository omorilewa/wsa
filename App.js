/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, View } from 'react-native';
import { PrimaryNavigator } from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/util";



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <PrimaryNavigator />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  flash: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flashText: {
    fontFamily: 'montserrat'
  }
});
