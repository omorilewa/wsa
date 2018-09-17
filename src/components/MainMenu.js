import React, { PureComponent } from "react";
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { MainMenuStyles as styles } from "../styles";
import ContentWrapper from "./ContentWrapper";

class MainMenu extends PureComponent {

  showCourses = () => this.props.navigate('Courses');

  goToLoginScreen = () => this.props.navigate('Main');


  render() {
    const { showCourses, goToLoginScreen } = this;

    return (
      <ContentWrapper>
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
          <TouchableHighlight onPress={showCourses}>
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
          </TouchableHighlight>
          <TouchableHighlight onPress={goToLoginScreen}>
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
          </TouchableHighlight>
        </View>
      </ContentWrapper>
    );
  }
}

export default MainMenu;
