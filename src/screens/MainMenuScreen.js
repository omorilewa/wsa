import React, { Component } from 'react';
import { MainMenu } from '../components';

class MainMenuScreen extends Component {
  static displayName = 'MainMenuScreen';
  static navigationOptions = {
    title: 'Historic Rates',
    headerTitleStyle: {
      fontFamily: 'OpenSans-Regular',
      color: '#FFFC00'
    },
  };

  render() {
    return (
      <MainMenu />
    );
  }
}

export default MainMenuScreen;
