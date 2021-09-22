import * as React from 'react';
import { Avatar, Card, IconButton, Divider, Modal } from 'react-native-paper';
import { version } from '../../../package.json';
import { WebView } from 'react-native-webview';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { web } from '../../globalStyles/styles';

const titleVersion = "Versão do App";
const titleDev = "Desenvolvedor";
const subtitleDev = "Duarte Tecnologia da Informação";

const webdev = () => (
  <WebView 
      style={web.container}
      source={{ uri: 'https://www.congregacaocristanobrasil.org.br/' }}
    />
);

const AppVersion = () => (
  <>
    <Header />
    <Divider />
    <Card.Title
      title={titleVersion}
      subtitle={version}
      left={(props) => <Avatar.Icon {...props} icon="cellphone-information" />}
      right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => console.log('Version', version)} />}
    />
    <Divider />
    <Card.Title
      title={titleDev}
      subtitle={subtitleDev}
      left={(props) => <Avatar.Icon {...props} icon="dev-to" />}
      right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => console.log('Desenvolvedor:', subtitleDev)} />}
    />
    <Divider />
    {/* <Footer/> */}
  </>
);

export default AppVersion;