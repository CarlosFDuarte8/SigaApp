import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from 'expo-constants';

const { width, height } = Dimensions.get("screen");

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