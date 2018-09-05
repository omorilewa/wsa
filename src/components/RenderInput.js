import React from "react";
import PropTypes from "prop-types";
import { Input, Item, Icon } from "native-base";
import { Image, Text } from "react-native";
import { HomeScreenStyles as styles } from "../styles";

const RenderInput = ({
  placeholder,
  username,
  password,
  meta: { touched, error },
  secureTextEntry,
  input: { onChange, ...restInput }
}) => (
  <Item
    style={
      touched && error
        ? [styles.inputView, styles.errorStyle]
        : styles.inputView
    }
  >
    {touched && error && <Icon style={styles.searchIcon} name="alert" />}
    {username && <Image style={styles.imageStyle} source={require("../assets/images/username.png")}/>}
    {password && <Image style={styles.pwdImage} source={require("../assets/images/password.png")}/>}
    <Input
      style={styles.input}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      {...restInput}
      placeholder={placeholder}
      placeholderTextColor="#00008b"
    />

  </Item>
);

RenderInput.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool
};

export default RenderInput;
