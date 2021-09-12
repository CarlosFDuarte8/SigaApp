import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar, Alert, Modal, Pressable, } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Appbar, } from 'react-native-paper'; // 1.0.1
import { FontAwesome } from '@expo/vector-icons';
import { header } from '../../globalStyles/styles';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
  }
};
// npm i save-dev @types/react-native-paper
const Menu = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22
        }}>
          <View style={{
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
          }}>
            <Text style={{
              marginBottom: 15,
              textAlign: "center"
            }}>Hello World!</Text>
            <Pressable
              style={[{
                borderRadius: 20,
                padding: 10,
                elevation: 2
              }, {
                backgroundColor: "#2196F3",
              }]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center"
              }}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[{
          borderRadius: 20,
          padding: 10,
          elevation: 2
        }, {
          backgroundColor: "#F194FF",
        }]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        }}>Show Modal</Text>
      </Pressable>
    </View>
  );
};



const Header = ({
  navigation,
  components = () => null,
  title = '',
  typeList = false,
  setTypeList = () => null,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <PaperProvider theme={theme}>
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
            <TouchableOpacity onPress={() => setModalVisible(true)} >
              <FontAwesome name="bell" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={header.containerHeader2}>
            <TouchableOpacity onPress={() => Menu} >
              <FontAwesome name="calendar" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={header.containerHeader2}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
              <FontAwesome name="user-circle-o" size={24} color="black" />
            </TouchableOpacity>
          </View>

        </Appbar>
      </View>
    </PaperProvider>
  );
}
export default Header;