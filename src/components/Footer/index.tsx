import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Feather, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { footer } from '../../globalStyles/styles';

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

  return (
    <SafeAreaView >
      <View
        style={footer.container}>
        <View
          style={footer.footerContainer}>
          <TouchableOpacity onPress={setMenu}>
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