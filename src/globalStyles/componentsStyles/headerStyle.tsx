import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from 'expo-constants';

const { width, height } = Dimensions.get("screen");

export const header = StyleSheet.create({
  container: {
    // justifyContent: 'space-between',
    top: '10%',
    flex: 1,
    // height: 10,
    width: width * 1,
    position: "absolute"
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 5
  },
  containerHeader2: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: height * 0.05,
    width: width * 0.2
  },
  menuUser: {
    backgroundColor: '#fff',
    padding: 30,
    position: "absolute",
    right: 0,
    bottom: 2,
    margin: 5,
    top: -2
  }
});