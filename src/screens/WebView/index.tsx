import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StackNavigationProp } from '@react-navigation/stack';
import { web } from '../../globalStyles/styles';
import Footer from '../../components/Footer';

type TopNavProp = {
  Login: undefined;
  Setting: undefined;
};

interface Props {
  navigation: StackNavigationProp<TopNavProp, 'Login'>
}

const Web = ({ navigation }: Props) =>{
  return (
    <>
    <WebView 
      style={web.container}
      source={{ uri: 'https://www.congregacaocristanobrasil.org.br/' }}
    />
    <Footer 
    navigation={navigation}
    />
    </>
  );
}

 export default Web;