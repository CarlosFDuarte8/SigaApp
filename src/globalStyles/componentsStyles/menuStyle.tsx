import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from 'expo-constants';

const { width, height } = Dimensions.get("screen");
const superPositionOpacityFactor = '77';

const scale = width / 320;

export const menu = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "#000000" + superPositionOpacityFactor,
    width: width * 1
  },
  menuModal: {
    // margin: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    // padding: 55,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 10,
    height: '95%',
    width: width * 0.8,
    marginRight: width * 0.3
  },
  menuMenu: {
    flexDirection: "row",
    marginStart: width * 0.0,
  },
  menuModalTitle: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 28 * scale,
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