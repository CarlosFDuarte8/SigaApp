import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from 'expo-constants';

const { width, height } = Dimensions.get("screen");

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
    color: '#fff',
  }
});