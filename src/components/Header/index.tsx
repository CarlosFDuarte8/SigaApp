import React from 'react';
import { DefaultTheme, Appbar, } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
  }
};

const Header = ({ }) => {

  const name = "SIGA";
  const nameuser = "Carlos Duarte";

  return (
    <Appbar.Header theme={theme}>
      <Appbar.Content title={name} subtitle={nameuser} />
      <Appbar.Action icon="bell" onPress={() => console.log('Pressed bell')} />
      <Appbar.Action icon="calendar" onPress={() => console.log('Pressed calendar')} />
      <Appbar.Action icon="logout" onPress={() => console.log('Pressed logout')} />
    </Appbar.Header>
  );
}
export default Header;