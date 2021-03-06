import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from 'expo-constants';

const { width, height } = Dimensions.get("screen");
const scale = width / 320;

export const loginStyle = StyleSheet.create({
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
    fontSize: 18 * scale,

  },
  login: {
    width: width * 0.75,
    height: height * 0.07,
    padding: 10,
    borderWidth: 1,
    borderColor: '#033d60',
    backgroundColor: '#033d60',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  textLogin: {
    color: "#ccc",
    marginBottom: 0,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18 * scale,
  },
  textForgot: {
    color: "#033d60",
    marginBottom: 30,
    textAlign: "justify",
    textTransform: "uppercase",
    fontSize: 14 * scale,
  },
  versao: {
    color: "#033d60",
    // marginBottom: 20,
    textAlign: "justify",
    // textTransform: "uppercase",
    fontSize: 12,
    // margin: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  logo: {
    height: height * 0.15,
    width: width * 0.625,
    marginBottom: 20,
  }
});