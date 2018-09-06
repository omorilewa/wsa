import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  View,
  ImageBackground,
  Text,
  Image,
} from "react-native";
import { CourseStyles as styles } from "../styles";

class CourseItem extends PureComponent {
  static propTypes = {
    courseTitle: PropTypes.string.isRequired,
    courseCount: PropTypes.number.isRequired,
    courseIconStyle: PropTypes.object.isRequired,
  }
  render() {
    const {
      courseTitle,
      courseCount,
      courseIcon,
      courseIconStyle
    } = this.props;

    const countSuffix = courseCount === 1 ? 'lesson' : 'lessons';

    return (
      <ImageBackground
        style={styles.courseBox}
        source={require("../assets/images/courseEllipse.png")}
      >
        <ImageBackground
          style={styles.courseIconWrapper}
          source={require("../assets/images/courseIconHolder.png")}
          >
          <Image
            style={courseIconStyle}
            source={courseIcon}
            />
        </ImageBackground>
        <View style={styles.courseTextWrapper}>
          <Text style={styles.courseTitleText}>{courseTitle}</Text>
          <ImageBackground
            style={styles.lessonCountHolder}
            source={require("../assets/images/roundedRectangle.png")}
          >
            <Text style={styles.lessonCountText}>{`${courseCount} ${countSuffix}`}</Text>
          </ImageBackground>
        </View>
      </ImageBackground>
    );
  }
}

export default CourseItem;
