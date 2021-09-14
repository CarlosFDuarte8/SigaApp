import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar, Alert, Pressable, } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Appbar, Modal, IconButton, Colors, FAB } from 'react-native-paper'; // 1.0.1
import { FontAwesome, Feather } from '@expo/vector-icons';
import { header, menu } from '../../globalStyles/styles';
import Itens from '../Itens';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
  }
};


const Header = ({
  navigation,
  components = () => null,
  title = '',
  typeList = false,
  setTypeList = () => null,
}) => {
  const [visible, setVisible] = React.useState(false);

  const showModalUser = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const name = "Carlos Duarte";
  return (
    <PaperProvider theme={theme}>

      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={header.menuUser}>
        <Text>{name}</Text>
        <View >
          {/* <IconButton
            icon="logout"
            color={Colors.blue500}
            size={35}
            onPress={() => console.log('Pressed1')}
            animated={false}
          /> */}
          {/* <Text>Example Modal.  </Text> */}
          {/* <Text>Example Modal.  </Text>
          <Text>Example Modal.  </Text> */}

        </View>
        <FAB
          style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
          }}
          small
          icon="logout"
          onPress={() =>
            navigation.navigate('Login')
          }
        />
      </Modal>

      <View style={header.container}>
        <Appbar>
          <StatusBar
            animated
            barStyle="dark-content"
            backgroundColor='#fff'
            translucent
          />
          <View style={header.containerHeader}>
            <TouchableOpacity onPress={() => navigation.navigate('Web')}>
              <Image
                style={header.logo}
                source={{
                  uri: 'https://www.congregacaocristanobrasil.org.br/assets/images/logo-ccb-light.png',
                }} />
            </TouchableOpacity>
          </View>

          <View style={header.containerHeader}>
            <Appbar.Content title='' />
          </View>

          <View style={header.containerHeader2}>
            <TouchableOpacity onPress={() => showModal(true)} >
              <FontAwesome name="bell" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={header.containerHeader2}>
            <TouchableOpacity onPress={() => Menu} >
              <FontAwesome name="calendar" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={header.containerHeader2}>
            <TouchableOpacity onPress={() => showModalUser(true)} >
              <FontAwesome name="user-circle-o" size={24} color="black" />
            </TouchableOpacity>
          </View>

        </Appbar>
      </View>
    </PaperProvider>
  );
}
export default Header;