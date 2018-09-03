import { StyleSheet } from "react-native";

export const HomeScreenStyles = StyleSheet.create({
  // container: {
  //   height: "100%",
  //   backgroundColor: "#1D431C"
  // },
  // contentContainer: {
  //   alignItems: "center",
  //   paddingTop: 10
  // },
  // paddingView: {
  //   height: "20%",
  //   marginTop: 20
  // },
  // loading: {
  //   backgroundColor: "#F5FCFF88",
  //   position: "absolute",
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // error: {
  //   color: 'red',
  // },
  // loginFail: {
  //   color: "red",
  //   fontSize: 14,
  //   marginLeft: 10
  // },
  // buttonBody: {
  //   height: 50,
  //   borderRadius: 30,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: '4%',
  //   width: '100%',
  //   backgroundColor: "#19B01D"
  // },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 10
  },
  // loginFailText: {
  //   color: "red",
  //   fontSize: 12,
  //   marginLeft: 10
  // },
  // loginFailView: {
  //   marginTop: 5,
  //   display: "flex",
  //   flexDirection: "row"
  // },
  main: {
    // alignItems: "center",
    width: "60%",
    marginTop: 40,
    marginLeft: 10
    // height: "100%"
  },
  // drawer: {
  //   padding: 15
  // },
  // errorStyle: {
  //   borderColor: "red"
  // },
  // textInputStyle: {
  //   fontSize: 12
  // },
  // inputView: {
  //   marginTop: "4%",
  //   backgroundColor: "rgba(65, 96, 71, 0.6)",
  //   height: 50,
  //   borderWidth: 0,
  //   borderColor: "transparent"
  // },
  // input: {
  //   paddingTop: 0,
  //   paddingRight: 10,
  //   paddingBottom: 0,
  //   paddingLeft: 15,
  //   fontSize: 12,
  //   marginTop: 9,
  //   color:'white',
  //   fontFamily: "montserrat"
  // },
  // icon: {
  //   marginTop: 9,
  //   marginLeft: 16,
  //   width: 17,
  //   height: 17
  // },
  // icon2: {
  //   width: 17,
  //   height: 22,
  //   marginTop: 7,
  //   marginLeft: 16,
  //   overflow: "visible"
  // },
  // searchIcon: {
  //   padding: 10,
  //   fontSize: 12,
  //   color: "red"
  // },
  // buttonText: {
  //   color: "white",
  //   fontSize: 12,
  //   paddingTop: '3%'
  // },
  // logoContainer: {
  //   width: "40%",
  //   height: "21%"
  // },
  // text: {
  //   color: "#eaea00",
  //   marginBottom: "30%",
  //   fontFamily: "montserrat-bold",
  //   fontSize: 14
  // },
  // textWithoutLogo: {
  //   color: "#eaea00",
  //   marginBottom: "5%",
  //   marginTop: "20%",
  //   fontFamily: "montserrat-bold",
  //   fontSize: 14
  // },
  // getStartedButton: {
  //   marginTop: '4%',
  //   height: 60,
  //   backgroundColor: '#50AE32'
  // }
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

export const SuperHeaderStyles = StyleSheet.create({
  header: {
    height: 35,
    backgroundColor: '#00b200',
    paddingTop: '3%',
    paddingLeft: '12%',
    paddingRight: '18%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    color: 'white',
    fontSize: 13
  },
});

export const NewRateStyles = StyleSheet.create({
  scrollContainer: {
    height: "70%",
  },
  scrollContent: {
    alignItems: "center",
    paddingTop: 10
  },
  formLabel: {
    color: "#B9DEB3",
    fontSize: 13,
    fontFamily: "montserrat"
  },
  errorText: {
    color: 'red',
    fontSize: 8,
    marginTop: 5,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderRadius: 1,
    width: '80%',
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  close: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30
  },
  modalheader: {
    color: '#afd9a8'
  },
  body: {
    fontSize: 8,
  },
  contentWidth: {
    width: '40%'
  },
  currency: {
    fontSize: 10.5,
  },
  button1: {
    fontSize: 10,
    marginLeft: 11,
    color: '#afd9a8'
  },
  button2: {
    fontSize: 10,
    marginLeft: 11,
    color: '#a3a3a3'
  },
  content: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hr: {
    borderBottomColor: '#afd9a8',
    borderBottomWidth: 0.8,
    marginTop:'5%',
    marginBottom: '5%'
  },
  main: {
    height: "100%",
    width: "74%",
    marginHorizontal: "13%",
    marginTop: '10%'
  },
  mainWKeyboard: {
    height: "100%",
    width: "74%",
    marginHorizontal: "13%",
    marginTop: '1%'
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontFamily: 'montserrat-bold',
  },
  buttonBody: {
    marginTop: 60,
    height: 37,
    borderRadius: 30,
    backgroundColor: "#19B01D",
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWKeyboard: {
    borderRadius: 30,
    marginTop: 40,
    height: 37,
    backgroundColor: "#19B01D",
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawer: {
    fontFamily: 'montserrat-bold',
    padding: 3,
    color: 'white',
    fontSize: 12,
    marginLeft: '15%'
  },
  icon: {
    width: 20,
    height: 20
  },
  icon2: {
    width: 20,
    height: 18
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'white'
  },
  flex: {
    flex: 1
  },
  label: {
    flexDirection: 'row',
    paddingLeft: '13%',
    paddingRight: '13%',
    paddingTop: 15,
    paddingBottom: 15
  },
  inputField: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 13,
    height: 20,
    marginTop: 7,
    fontFamily: 'montserrat',
  },
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

export const TimeStyles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 13,
  },
});

export const PrevRateStyles = StyleSheet.create({
  body: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: '5%',
  },
  outerView: {
    flex: 1
  },
  main: {
    flexDirection: 'row',
    marginTop: 7
  },
  marginTop:{
    marginTop: 10,
  },
  text: {
    fontSize: 11,
    color: '#9c9e9f'
  },
  day: {
    fontSize: 11,
    color: '#9c9e9f',
  },
  text2: {
    fontSize: 11,
    color: '#595959'
  },
  date: {
    fontSize: 9,
    color: '#595959',
    marginTop: 7
  },
  curText: {
    fontSize: 11,
    color: '#595959'
  },
  heading: {
    fontSize: 10,
    color: '#a2d293'
  },
  heading2: {
    fontSize: 10,
    marginLeft: 3
  },
  hr: {
    flex: 1,
    borderBottomColor: '#9c9e9f',
    borderBottomWidth: 0.8,
    width: 100,
  },
  wrapper: {
    paddingLeft: '5%',
    marginTop: 15,
    flexDirection: 'row',
  },
  filter: {
    fontSize: 11,
    color: '#9c9e9f',
    marginRight: 8
  },
  buttonText: {
    width: 70,
    fontFamily: "montserrat",
    fontSize: 11,
    marginBottom: 3
  },
  dropdowntext: {
    fontFamily: "montserrat",
    fontSize: 11,
  },
  bg: {
    backgroundColor: '#f2f5f8'
  },
  modalView: {
    width: 100,
    alignItems:'center',
    flexDirection:'row',
  },
  modal: {
    flex: 1,
    width: 100,
    marginBottom: 0
  },
  dropdown: {
    width: 100,
    margin: 0,
    flexDirection:'row'
  },
  row: {
    flexDirection: 'row',
    marginTop: 10
  },
  arrow: {
    fontSize: 8,
    marginBottom: 1,
  },
  curView : {
    width: '25%'
  },
  inner: {
    width: '25%',
    flexDirection: 'row',

  },
  img: {
    width: 15,
    height: 10,
    marginRight: 2,
    marginLeft: 25
  },
  morning: {
    width: 6,
    height: 6,
    backgroundColor:'#3153ff',
    marginTop: 1
  },
  afternoon: {
    width: 6,
    height: 6,
    backgroundColor:'#ffaa31',
    marginTop: 1
  },
  evening: {
    width: 6,
    height: 6,
    backgroundColor:'#ff3131',
    marginTop: 1
  },
  errorString: {
    marginTop: '50%',
    color: 'red',
  },
  errorView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRatesText: {
    fontSize: 16,
    color: 'black'
  },
  noRatesWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200
  }
});

export const RateBoundariesStyles = StyleSheet.create({
  dropdown: {
    width: '18%',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    flexDirection:'row'
  },
  locationDropdown:  {
    width: '25%'
  },
  dropdownText: {
    fontFamily: "montserrat-light",
    fontSize: 13,
    color: 'black'
  },
  modal: {
    marginBottom: 0,
  },
  hr: {
    borderBottomColor: '#9c9e9f',
    borderBottomWidth: 0.9,
    width: 50,
  },
  modalView: {
    alignItems:'center',
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  formLabel: {
    color: "#3E3E3E",
    fontSize: 13,
    fontFamily: "montserrat-bold",
    marginBottom: 7,
  },
  wrapperView: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 15
  },
  contentContainer: {
    paddingLeft: 10,
    paddingRight: 10
  },
  contentCon: {
    flexGrow: 1,
    paddingBottom: 100
  },
  timePicker: {
    width: '30%',
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: 10
  },
  bg: {
    backgroundColor: 'white',
    height: '100%'
  },
  label: {
    flexDirection: 'row',
    paddingLeft: '13%',
    paddingRight: '13%',
    paddingTop: 15,
    paddingBottom: 15
  },
  main: {
    marginTop: 20,
    marginHorizontal: "6%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "montserrat-bold",
  },
  pickerButton: {
    color: "black",
    fontSize: 14,
    fontFamily: "montserrat-bold",
    textAlign: 'center',
  },
  buttonBody: {
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
    height: 40,
    backgroundColor: "#1AB21E",
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 14,
    fontFamily: "montserrat",
    color: "#1AB21E",
  },
  postScheduleText: {
    fontSize: 14,
    fontFamily: "montserrat",
    color: "#1AB21E",
    marginTop: 25,
    marginBottom: 15,
  },
  compSchedule: {
    marginTop: 50
  },
  pickersView: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  comp: {
    color: 'black',
    fontSize: 14
  },
  input: {
    marginTop: 10
  },
  fieldView: {
    marginTop: 20
  },
  blackborder: {
    borderBottomColor: 'black'
  },
  icon: {
    width: 25,
    height: 22
  },
  drawer: {
    fontFamily: 'montserrat-bold',
    padding: 3,
    color: 'white',
    fontSize: 12,
    marginLeft: '12%'
  },
  inputField: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fontSize: 14,
    height: 20,
    marginTop: 7,
    fontFamily: 'montserrat',
  },
});

export const PeriodPickerStyles = StyleSheet.create({
  pickerLabel: {
    color: "#3E3E3E",
    fontSize: 14,
    fontFamily: "montserrat-bold",
  },
  timeDisplay: {
    fontSize: 16
  },
  textView: {
    height: 25,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: '100%',
  },
  timePicker: {
    width: '30%'
  },
  pickerIcon: {
    fontSize: 25,
    color: '#1AB21E',
    marginTop: 12,
    marginRight: 6
  },
  picker: {
    width: '80%',
  },
  pickerSection: {
    flexDirection: 'row',
    width: '100%',
  }
});

export const SubHeaderStyles = StyleSheet.create({
  subSection: {
    flexDirection: "row",
    backgroundColor: '#00b200',
    height: 40,
    paddingTop: '2%',
    paddingLeft: '12%',
    paddingRight: '10%',
  },
  superSection: {
    height: 35,
    backgroundColor: '#00b200',
    paddingTop: '3%',
    paddingLeft: '12%',
    paddingRight: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subHeaderText: {
    color: 'white',
    fontSize: 13,
    fontFamily: "montserrat-bold",
    paddingLeft: '5%',
    paddingTop: '1%',
  },
  superHeaderText: {
    color: 'white',
    fontSize: 11,
    fontFamily: "montserrat",
    paddingLeft: '5%',
  },
  imageIcon: {
    width: 25,
    height: 22,
  },
  helpIcon: {
    width: 20,
    height: 20,

  }
});

export const FAQStyles = StyleSheet.create({
  dropdownView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  wrapperView: {
    backgroundColor: "white"
  },
  label: {
    flexDirection: 'row',
    paddingLeft: '13%',
    paddingRight: '13%',
    paddingTop: 15,
    paddingBottom: 15
  },
  icon: {
    width: 22,
    height: 22
  },
  drawer: {
    fontFamily: 'montserrat-bold',
    padding: 3,
    color: 'white',
    fontSize: 12,
    marginLeft: '22%'
  },
  text: {
    fontSize: 12,
    fontFamily: "montserrat",
    color: '#c3c3c3',
    width: '90%'
  },
  subText: {
    fontSize: 12,
    fontFamily: "montserrat",
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
    lineHeight: 15
  },
  subView: {
    backgroundColor: '#282828',
    paddingLeft: 15,
    paddingRight: 15,
  },
  black: {
    color: 'black'
  },
  textHeader: {
    backgroundColor: '#f4f4f4',
    height: 35,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection: 'row',
    borderBottomWidth: 0.8,
    borderBottomColor: '#c3c3c3'
  },
  show : {
    fontSize: 14,
  },
  hide: {
    color: '#c3c3c3',
    fontSize: 14
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  faqText: {
    fontFamily: "montserrat-light",
    fontSize: 17,
    color: '#c3c3c3',
  },
  footer: {
    fontFamily: "montserrat-bold",
    fontSize: 12,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontFamily: 'montserrat-bold',
  },
  buttonBody: {
    height: 42,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    backgroundColor: "#19B01D"
  },
  questionsView: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'red',
    backgroundColor: 'red'
  },
  modalButtons: {
    marginLeft: 25
  },
  sendText: {
    color: '#19B01D',
    fontSize: 11,
  },
  backText: {
    color: 'grey',
    fontSize: 11,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '95%',
    marginTop: 10,
    marginBottom: 15
  },
  modalContent: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTextHeading: {
    fontFamily: "montserrat",
    color: "#afd9a8",
  },
  modalHeadingView: {
    width: '100%',
    marginBottom: 10,
    justifyContent: 'flex-start'
  },
  hr: {
    borderBottomColor: '#afd9a8',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 5,
    width: '100%'
  },

});

export const FAQModalFormStyles = StyleSheet.create({
  formView: {
    width: "100%"
  },
  formLabel: {
    color: "black",
    fontSize: 11,
    fontFamily: "montserrat",
    paddingBottom: 0,
    marginBottom: 0,
  },
  fieldView: {
    marginBottom: 15
  },
  inputField: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fontSize: 13,
    height: 15,
    marginTop: 3,
    fontFamily: 'montserrat',
  },
});

export const UserStyles = StyleSheet.create({
  arrow: {
    fontSize: 11,
    marginBottom: 4,
    marginLeft: 70
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderRadius: 1,
    width: '80%',
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  button1: {
    fontSize: 12,
    marginLeft: 11,
    color: '#afd9a8'
  },
  button2: {
    fontSize: 12,
    marginLeft: 11,
    color: '#a3a3a3'
  },
  modalheader: {
    fontSize: 15,
    color: '#afd9a8'
  },
  close: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30
  },
  modalhr: {
    borderBottomColor: '#afd9a8',
    borderBottomWidth: 0.8,
    marginTop:10,
    marginBottom: 10,
    width: '100%'
  },
  content: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  body: {
    fontSize: 12,
  },
  currency: {
    fontSize: 12,
    color: 'black'
  },
  picker: {
    width: '100%',
    marginTop: 5
  },
  pickerItem: {
    width: '100%'
  },
  errorMsg: {
    color: 'red',
    fontSize: 10,
    marginTop: 5
  },
  buttonBody: {
    height: 42,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: '80%',
    paddingLeft: 0,
    backgroundColor: "#19B01D"
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontFamily: 'montserrat',
  },
  dropdown: {
    width: '45%',
    margin: 0,
    padding: 0,
    flexDirection:'row'
  },
  dropdowntext: {
    fontFamily: "montserrat",
    fontSize: 12,
  },
  formLabel: {
    fontSize: 14,
    fontFamily: "montserrat",
    color: '#000000',
    marginTop: 8,
    paddingBottom: 0,
    marginBottom: 0,
  },
  fieldView: {
    marginBottom: 10,
    width: '100%'
  },
  hr: {
    borderBottomColor: '#9c9e9f',
    borderBottomWidth: 0.5,
    width: 100,
  },
  modalView: {
    alignItems:'center',
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  modal: {
    flex: 1,
    marginBottom: 0
  },
  mainWKeyboard: {
    width: "100%",
    marginTop: '1%',
    alignItems: "center",
    justifyContent: "center",
  },
  userForm: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },
  scrollContainer: {
    height: "70%",
  },
  scrollContent: {
    alignItems: "center",
  },
  inputField: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fontSize: 12,
    height: 18,
    marginTop: 6,
    fontFamily: 'montserrat',
  },
  passwordField: {
    width: "48%"
  },
  passwordSection: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 10
  },
  pickerText: {
    fontFamily: "montserrat",
    fontSize: 9,
    marginBottom: 3,
    color: 'black'
  },
  pickerUnderline: {
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 0.8,
    width: "50%",
  },
  wrapperView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 15
  },
});

export const UserListStyles = StyleSheet.create({
  listItem: {
    fontSize: 11,
    fontFamily: "montserrat-light",
  },
  outerView: {
    flex: 1
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 6,
    paddingTop: 6
  },
  statusButton: {
    borderRadius: 6,
    minWidth: 52,
    backgroundColor: "#e4ca6c",
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  tableHeader: {
    backgroundColor: "#054004",
    paddingLeft: 10,
    paddingRight: 10,
    height: 35,
  },
  usersView: {
    paddingLeft: 10,
  },
  headerText: {
    fontSize: 10,
    color: 'white'
  },
  numTextView: {
    width: '5%',
    paddingRight: 0,
  },
  noGaps: {
    paddingLeft: 4,
    paddingRight: 0,
    width: '14%',
  },
  actionView: {
    alignItems: 'center'
  },
  status: {
    width: '16%'
  },
  button: {
    paddingLeft: 0,
    paddingRight: 0,
    width: '18%'
  },
  nameColumn: {
    width: '27%'
  },
  usernameColumn: {
    width: '20%'
  },
  inActiveUserColor: {
    backgroundColor: "#1bb01d",
  },
  listBGColor: {
    backgroundColor: '#e5ece5',
  },
  spinner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

export const UpdateApkStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  spinner: {
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  listBGColor: {
    backgroundColor: '#e5ece5',
  },
  usersView: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  wrapperView: {
    backgroundColor: "white",
  },
  text: {
    fontSize: 15,
    color: 'black',
    fontFamily: "montserrat"
  },
  wordingView: {
    marginBottom: 10
  },
  wording: {
    fontSize: 13,
  }
})
