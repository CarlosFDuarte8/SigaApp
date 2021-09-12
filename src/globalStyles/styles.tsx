import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from 'expo-constants';

const { width, height } = Dimensions.get("screen");

export const home = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: width * 0.05
  },
  subBody: {
    // backgroundColor: 'blue',
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 25,
    justifyContent: 'center',
    // height: 100
  },
  buttonGrid: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: height * 0.105,
    width: width * 0.28,
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
    marginVertical: 30
  },
  buttonIcon: {
    backgroundColor: '#f4f5f8',
    alignItems: 'center',
    height: height * 0.09,
    width: width * 0.28,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonTitle: {
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.05,
    width: width * 0.28,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleGrid: {
    color: '#033d60',
    alignItems: 'center',
    textAlign: "center",
  },
  icon: {
    color: '#033d60',
    fontSize: 55,
  }
});
export const cash = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginLeft: width * 0.05
  },
  subBody: {
    // backgroundColor: 'blue',
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 25,
    justifyContent: 'center',
    // height: 100
  },
  buttonGrid: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: height * 0.105,
    width: width * 0.28,
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
    marginVertical: 30,
  },
  buttonIcon: {
    backgroundColor: '#f4f5f8',
    alignItems: 'center',
    height: height * 0.09,
    width: width * 0.28,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonTitle: {
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.05,
    width: width * 0.28,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleGrid: {
    color: '#033d60',
    alignItems: 'center',
    textAlign: "center",
  },
  icon: {
    color: '#033d60',
    fontSize: 55,
  },
  tableView: {
    backgroundColor: 'gray',
    height: 50
  }
});

export const header = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    top: '10%',
    flex: 1,
    height: 200,
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5
  },
  containerHeader2: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 21,
    width: 41
  },
});

export const footer = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#ccc',
    marginHorizontal: 20,
    borderRadius: 5,
    marginBottom: Platform.OS === 'android' ? 10 : 0,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const login = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    width: width * 0.75,
    height: height * 0.06,
    padding: 10,
    borderWidth: 2,
    borderColor: '#033d60',
    marginBottom: 20,
    borderRadius: 10,
  },
  text: {
    color: "#033d60",
    marginBottom: 30,
    textAlign: "justify",
    fontSize: 25,

  },
  login: {
    width: width * 0.75,
    height: height * 0.067,
    padding: 10,
    borderWidth: 1,
    borderColor: '#033d60',
    backgroundColor: '#033d60',
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  textLogin: {
    color: "#ccc",
    marginBottom: 30,
    textAlign: "justify",
    textTransform: "uppercase",
    fontSize: 24,
  },
  textForgot: {
    color: "#033d60",
    marginBottom: 30,
    textAlign: "justify",
    textTransform: "uppercase",
    fontSize: 14,
  },
  logo: {
    height: height * 0.15,
    width: width * 0.625,
    marginBottom: 20,
  }
});

export const menu = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    // backgroundColor: "#fff",
    width: '75%'
  },
  menuModal: {
    // margin: 20,
    backgroundColor: "#fff",
    borderRadius: 2,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    height: '95%',
    width: '100%',
    marginLeft: 10
  },
  menuMenu: {
    flexDirection: "row",
    marginStart: width * 0.2,
  },
  menuModalTitle: {
    marginBottom: 35,
    textAlign: "center",
    fontSize: 28,
    // marginRight: 60
  },
  menuButtonFechar: {
    borderRadius: 20,
    padding: 0,
    elevation: 0,
    backgroundColor: "transparent",
    marginLeft: 60
  },
});

export const itensMenu = StyleSheet.create({
  buttonItens: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 60,
    width: 270,
    justifyContent: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    flexDirection: "row",
    marginLeft: 35,
  },
  iconView: {
    alignItems: 'center',
    height: 60,
    width: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
  },
  titleView: {
    justifyContent: 'center',
    height: 60,
    width: 220,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
  },
  title: {
    color: '#033d60',
    alignItems: 'flex-start',
    fontSize: 20,
    textAlign: "left",
  },
  icon: {
    color: '#033d60',
    fontSize: 35,
  }
});

export const camera = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  icon: {
    color: 'yellow',
  }
});

export const web = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});