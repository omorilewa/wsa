import React, { PureComponent, Fragment } from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import { CourseStyles as styles } from "../styles";

class CoursesHeader extends PureComponent {

  render() {

    return (
      <Fragment>
        <View style={styles.iconWithHome}>
          <Image
            style={styles.homeNavIcon}
            source={require("../assets/images/backArrow.png")}
          />
          <Text style={styles.homeText}>Home</Text>
        </View>
        <Text style={styles.courseHeaderText}>Courses</Text>
      </Fragment>
    );
  }
}

export default CoursesHeader;
