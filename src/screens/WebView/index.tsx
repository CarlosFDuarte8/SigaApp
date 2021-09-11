import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Web = () =>{
  return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://www.congregacaocristanobrasil.org.br/' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
 export default Web;