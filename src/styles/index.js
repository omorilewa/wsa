import { StyleSheet } from "react-native";

export const HomeScreenStyles = StyleSheet.create({
  buttonBody: {
    height: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: '58%',
    backgroundColor: "#00008b"
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 10
  },
  main: {
    width: "60%",
    marginTop: 40,
    marginLeft: 10
  },
  button: {
    width: 830,
    height: 90,
    marginTop: 100
  },
  imageStyle: {
    width: 19,
    height: 19,
    marginTop: 10,
    marginRight: 10
  },
  flexDrawer: {
    flex: 1
  },
  resize: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  bgImageView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  pwdImage: {
    width: 19,
    height: 24,
    marginTop: 10,
    marginRight: 10
  },
  inputView: {
    borderColor: "#00008b",
    padding: 0
  },
  input: {
    paddingLeft: 0,
    fontSize: 15,
    height: 40,
    marginTop: 7,
    paddingBottom: 0,
    fontFamily: 'Roboto-Light',
    borderColor:'red'
  },
  inputl: {
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 15,
    fontSize: 15,
    marginTop: 9,
    color:'#00008b',
    fontFamily: "Roboto-Light"
  },
  fb: {
    width: 40,
    height: 40,
    marginBottom: 10,
    marginRight: 5
  },
  twitter: {
    width: 40,
    height: 40,
    marginRight: 5,
    marginBottom: 5,
  },
  flexBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignSelf: 'flex-end'
  }
});

export const LoaderStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000044"
  },
  activityIndicatorWrapper: {
    backgroundColor: "#afd9a8",
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around"
  },
  spinner: {
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});

export const ButtonStyles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontSize: 12
  }
});

export const LineInputStyles = StyleSheet.create({
  input: {
    paddingLeft: 0,
    fontSize: 11,
    height: 20,
    marginTop: 7,
    fontFamily: 'montserrat',
  },
  errorInput: {
    borderColor: 'red',
  },
  validInput: {
    borderColor: 'green',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});

export const NavigationStyles = StyleSheet.create({
  text: {
    color: '#eaea00',
    fontFamily: 'montserrat',
    fontSize: 12,
  },
  icon: {
    fontSize: 30,
    color: 'white'
  },
  headerTitleStyle: {
    flex: 1, flexDirection:
    'row', marginLeft:'20%'
  },
  imageStyle: {
    width: 30,
    height: 30
  },
  bdcView: {
    marginLeft: 5
  }
});


export const SideMenuStyles = StyleSheet.create({
  flex: {
    flex: 1
  },
  icon: {
    width: 25,
    height: 25,
  },
  logoutIcon: {
    marginTop: 5
  },
  newRateIcon: {
    width: 20,
    height: 20
  },
  configIcon: {
    width: 25,
    height: 22,
  },
  prevRateIcon: {
    width: 20,
    height: 18
  },
  bottomTxt: {
    marginTop: 7,
    fontSize: 9,
    color: '#C0C7C4'
  },
  icons: {
    fontSize: 30,
    color: 'white'
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: '13%',
    paddingRight: '13%',
    justifyContent: 'space-between',
    paddingTop: '3%',
    paddingBottom: '6%'
  },
  logoutText: {
    color: "white",
    fontSize: 14,
    fontFamily: "montserrat-bold"
  },
  label: {
    flexDirection: 'row',
    paddingLeft: '13%',
    paddingRight: '13%',
    paddingTop: 15,
    paddingBottom: 15
  },
  userLabel: {
    alignItems: 'center'
  },
  menuItemsText: {
    fontFamily: 'montserrat-bold',
    color: 'white',
    fontSize: 14,
    marginTop: 10,
    marginLeft: '12%'
  },
  menuItems: {
    fontFamily: 'montserrat-bold',
    color: 'white',
    fontSize: 14,
    marginTop: 5,
    marginLeft: '12%'
  },
  helpText: {
    marginLeft: '10%'
  },
  usersText: {
    marginLeft: '13%',
    marginTop: 7
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width:'100%',
    marginBottom: '3%'
  },
  hr: {
    borderBottomColor: '#9F9595',
    borderBottomWidth: 0.3,
    marginLeft: '13%',
    marginRight: '13%',
    marginTop:'5%',
    marginBottom: '5%'
  },
});

