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
    const { navigate } = this.props.navigation;

    return (
      <MainMenu navigate={navigate} />
    );
  }
}

export default MainMenuScreen;
