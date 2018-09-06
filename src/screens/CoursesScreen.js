import React, { Component } from 'react';
import { ScrollView, View } from "react-native";
import { CourseItem, ContentWrapper, CoursesHeader } from '../components';
import { CourseStyles as styles } from "../styles";

class CoursesScreen extends Component {
  static displayName = 'CoursesScreen';
  static navigationOptions = {
    title: 'Courses',
    headerTitleStyle: {
      fontFamily: 'OpenSans-Regular',
      color: '#FFFC00'
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ContentWrapper>
        <CoursesHeader navigate={navigate} />
        <ScrollView contentContainerStyle={styles.scroll}>
          <CourseItem
            courseTitle="Introduction"
            courseCount={1}
            courseIcon={require("../assets/images/forexIcon.png")}
            courseIconStyle={styles.forexIcon}
          />

          <CourseItem
            courseTitle="Getting Started"
            courseCount={7}
            courseIcon={require("../assets/images/gettingStarted.png")}
            courseIconStyle={styles.gettingStartedIcon}
          />

          <CourseItem
            courseTitle="Psychology"
            courseCount={8}
            courseIcon={require("../assets/images/brainGears.png")}
            courseIconStyle={styles.forexIcon}
          />

          <CourseItem
            courseTitle="Phase One"
            courseCount={6}
            courseIcon={require("../assets/images/phaseOne.png")}
            courseIconStyle={styles.phaseOneIcon}
          />

          <CourseItem
            courseTitle="Phase Two"
            courseCount={4}
            courseIcon={require("../assets/images/phaseTwo.png")}
            courseIconStyle={styles.phaseTwoIcon}
          />

          <CourseItem
            courseTitle="Phase Three"
            courseCount={7}
            courseIcon={require("../assets/images/phaseThree.png")}
            courseIconStyle={styles.phaseThreeIcon}
          />

          <CourseItem
            courseTitle="Phase Four"
            courseCount={5}
            courseIcon={require("../assets/images/phaseFourIcon.png")}
            courseIconStyle={styles.phaseFourIcon}
          />

          <CourseItem
            courseTitle="Major Market Patterns"
            courseCount={13}
            courseIcon={require("../assets/images/marketPattern.png")}
            courseIconStyle={styles.forexIcon}
          />

          <CourseItem
            courseTitle={"Q & A Webinars"}
            courseCount={49}
            courseIcon={require("../assets/images/webinarIcon.png")}
            courseIconStyle={styles.gettingStartedIcon}
          />

        </ScrollView>
      </ContentWrapper>
    );
  }
}

export default CoursesScreen;
