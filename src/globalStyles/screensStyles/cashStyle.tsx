import { StyleSheet, Platform, Dimensions } from "react-native";
import Constants from 'expo-constants';

const { width, height } = Dimensions.get("screen");

export const cash = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    justifyContent: 'flex-start',
    
    marginLeft: width * 0.05
  },
  subBody: {
    // backgroundColor: 'blue',
    // flex: 1,
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