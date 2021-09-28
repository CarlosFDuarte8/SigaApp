import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Modal, Pressable, Alert, Text, } from 'react-native';
import { Feather, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { footer, menu } from '../../globalStyles/styles';
import Itens from '../Itens';

const Footer = ({
  navigation,
  components = () => null,
  title = '',
  typeList = false,
  setTypeList = () => null,
}) => {
  const { colors } = useTheme();

  const setMenu = () => {
    navigation.navigate('Menu')
  }
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView >
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={menu.modal}>
          <Pressable
            style={menu.menuButtonFechar}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View style={menu.menuModal}>
              <View style={menu.menuMenu}>
                <Text style={menu.menuModalTitle}>Menu</Text>
                {/* <Feather name="x" color={'#000'} size={32} /> */}
              </View>
              {/* <ActivityIndicator size="large" color="#00ff00" /> */}
              <Itens />
            </View>
          </Pressable>
        </View>

      </Modal>

      <View
        style={footer.container}>
        <View
          style={footer.footerContainer}>
          <TouchableOpacity
            // onPress={setMenu}
            onPress={() => setModalVisible(true)}
          >
            <SimpleLineIcons name="menu" color={'#033d60'} size={24} />
          </TouchableOpacity>
        </View>

        <View
          style={footer.buttons}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" color={'#033d60'} size={32} />
          </TouchableOpacity>
        </View>

        <View
          style={footer.buttons}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <SimpleLineIcons name="home" color={'#033d60'} size={24} />
          </TouchableOpacity>
        </View>

        <View
          style={footer.buttons}>
          <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
            <SimpleLineIcons name="camera" color={'#033d60'} size={24} />
          </TouchableOpacity>
        </View>

        <View
          style={footer.buttons}>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <SimpleLineIcons name="settings" color={'#033d60'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Footer;