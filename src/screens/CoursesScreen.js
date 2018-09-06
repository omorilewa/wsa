import React, { Component } from 'react';
import { CourseItem, ContentWrapper } from '../components';
import { CourseItemStyles as styles } from "../styles";

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
    return (
      <ContentWrapper>
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
      </ContentWrapper>
    );
  }
}

export default CoursesScreen;
