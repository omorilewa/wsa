import React, { PureComponent } from "react";
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { func, bool, number, string } from "prop-types";
import { Field } from "redux-form";
import { HomeScreenStyles as styles } from "../styles";
import { RenderInput } from "../components";
// import Loader from "./Loader";

class Home extends PureComponent {
  static propTypes = {
    error: bool,
    errorText: string,
    handleSubmit: func,
    loginUser: func,
    removeErrorText: func,
    showLogo: bool,
    showError: func,
    visibleHeight: number,
  };

  toggleTextStyle = (styleObject) => {
    return this.props.showLogo ? styleObject.text : styleObject.textWithoutLogo;
  }

  render() {
    const {
      error,
      errorText,
      handleSubmit,
      loginUser,
      removeErrorText,
      showError,
      showLogo,
      visibleHeight,
    } = this.props;

    return (
      <ImageBackground
        source={require("../assets/images/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            height: visibleHeight
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/logo.png")}
          />
          <View style={styles.main}>
            {error && <Text style={styles.error}>{errorText}</Text>}
            <Field
              name="usernameOrEmail"
              component={RenderInput}
              placeholder="Username or email"
              username
            />
            <Field
              name="password"
              component={RenderInput}
              placeholder="Password"
              icon-name="icon_password.png"
              secureTextEntry
              password
            />
            <TouchableHighlight
              underlayColor="#00008b"
              style={styles.buttonBody}
              onPress={loginUser}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.buttonText}>LOGIN NOW</Text>
              </View>
            </TouchableHighlight>
          </View>
            <View style={styles.flexBottom}>
              <Image
                style={styles.fb}
                source={require("../assets/images/fb.png")}
              />
              <Image
                style={styles.twitter}
                source={require("../assets/images/twitter.png")}
              />
            </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Home;
