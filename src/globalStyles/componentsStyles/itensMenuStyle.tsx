import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from 'expo-constants';

const { width, height } = Dimensions.get("screen");

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
    flexDirection: "column",
    marginLeft: 35,
  },
  menuItem: {
    marginBottom: 5,
    textAlign: "center",
    fontSize: 28,
    width: width * 0.75,
    // marginRight: 60
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
    width: width * 0.75,
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