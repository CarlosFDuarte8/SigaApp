import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from 'expo-constants';

const { width, height } = Dimensions.get("screen");

export const listUsers = StyleSheet.create({
  container: {
    flex: 1,
  },
  containers: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 2,
    position: "relative"
  },
})