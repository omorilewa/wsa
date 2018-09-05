import React, { PureComponent } from "react";
import {
  View,
  ImageBackground,
  Image,
} from "react-native";
import { ContentWrapperStyles as styles } from "../styles";

class ContentWrapper extends PureComponent {

  render() {
    const { children } = this.props

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
        {children}
      </ImageBackground>
    );
  }
}

export default ContentWrapper;
