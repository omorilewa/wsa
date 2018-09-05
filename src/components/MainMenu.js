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
import { MainMenuStyles as styles } from "../styles";
import { RenderInput } from "../components";
// import Loader from "./Loader";

class MainMenu extends PureComponent {
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
    } = this.props
    return (
      <ImageBackground
        source={require("../assets/images/mainMenuBg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.menuHeaderView}>
          <Image
            style={styles.menuHeaderImage}
            source={require("../assets/images/menu.png")}
          />
          <Image
            style={styles.logoHeaderImage}
            source={require("../assets/images/logo.png")}
          />
          <Image
            style={styles.dumbellHeaderImage}
            source={require("../assets/images/dumbell.png")}
          />
        </View>
        <View style={styles.boxWrapper}>
          <ImageBackground
            style={styles.welcomeBox}
            source={require("../assets/images/welcomeBox.png")}
          >
            <Text style={styles.wboxText}>WELCOME TO</Text>
            <Text style={styles.wboxText}>WALL STREET ACADEMY</Text>
            <View style={styles.underline}></View>
          </ImageBackground>
        </View>
        <View style={styles.subBoxWrapper}>
          <ImageBackground
            style={styles.subBox}
            source={require("../assets/images/subBox.png")}
          >
            <Image
              style={styles.subBoxCourseIcon}
              source={require("../assets/images/coursesIcon.png")}
            />
            <Text style={styles.subBoxText}>Courses</Text>

          </ImageBackground>
          <ImageBackground
            style={styles.subBox}
            source={require("../assets/images/subBox.png")}
          >
            <Image
              style={styles.subBoxForumIcon}
              source={require("../assets/images/forumIcon.png")}
            />
            <Text style={styles.subBoxText}>Forum</Text>
          </ImageBackground>
        </View>
      </ImageBackground>
    );
  }
}

export default MainMenu;
