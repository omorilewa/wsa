import React, { Component } from 'react';
import { Dimensions, Keyboard } from 'react-native';
import { reduxForm, destroy } from 'redux-form';
import { Home } from '../components';
import { ApiService } from '../util';
const window = Dimensions.get('window');

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    showLogo: true,
    visibleHeight: window.height,
    errored: false,
  };

  componentDidMount() {
    this.props.dispatch(destroy('login'));
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardDidShow = (e) => {
    const newSize = window.height - (e.endCoordinates.height * 1.08);
    this.setState((state) => ({
      visibleHeight: newSize,
      errored: false,
      showLogo: false,
      errorText: '',
    }));
  }

  keyboardDidHide = () => {
    this.setState((state) => ({
      visibleHeight: window.height,
      showLogo: true
    }));
  }

  showError = (error) => {
    if (JSON.stringify(error).includes('Invalid Credentials')) {
      this.setState(() => ({
        errored: true,
        errorText: 'Incorrect Username or Password'
      }));
    } else if (JSON.stringify(error).includes('status code 400')) {
      this.setState(() => ({
        errored: true,
        errorText: 'Provide Username and Password'
      }));
    } else {
      this.setState(() => ({
        errored: true,
        errorText: 'Network error, retry'
      }));
    }
  }

  removeErrorText = () => {
    this.setState(() => ({ errored: false }));
  }

  loginUser = async (data) => {
    try {
      const apiResponse = await ApiService.post('/jwt-auth/v1/token', {
        username: 'paulloyddesigns@gmail.com',
        password: 'kc9vG!485R^KF6^MxqTzq0sk'
      })
      console.log('=====================>>>>>>', apiResponse)
      const { navigate } = this.props.navigation;
      navigate('MainMenu');
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {
      state: { showLogo, visibleHeight, errored, errorText },
      props: { handleSubmit },
      removeErrorText, showError, loginUser,
    } = this;
    return (
      <Home
        error={errored}
        errorText={errorText}
        handleSubmit={handleSubmit}
        loginUser={loginUser}
        removeErrorText={removeErrorText}
        showError={showError}
        showLogo={showLogo}
        visibleHeight={visibleHeight}
      />
    );
  }
}

const LoginForm = reduxForm({
  form: 'login',
})(HomeScreen);

export default LoginForm;
