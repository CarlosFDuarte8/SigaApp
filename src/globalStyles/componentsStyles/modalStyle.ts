import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from 'expo-constants';

const { width, height } = Dimensions.get("screen");
const superPositionOpacityFactor = '77';

export const modal = StyleSheet.create({
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
    height: height * 0.7,
    width: width * 0.9,
    marginRight: 0
  },
  menuMenu: {
    flexDirection: "row",
    marginStart: width * 0.6,
    marginTop: height * 0.02,
  },
  fecharModal: {
    flexDirection: "row",
    marginStart: width * 0.6,
    marginTop: height * 0.02,
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