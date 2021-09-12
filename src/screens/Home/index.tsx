import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { home } from '../../globalStyles/styles';

interface menuProps {
  icon: string,
  title: string,
  path: string,
  libIcon: any,
}

const menus: menuProps[] = [
  {
    icon: 'cash-multiple',
    title: 'Tesouraria',
    path: 'Login',
    libIcon: <MaterialCommunityIcons name='cash-multiple' color={'#033d60'} size={35} />,
  },
  {
    icon: 'account-group',
    title: 'Voluntário',
    path: 'Login',
    libIcon: <MaterialCommunityIcons name="account-group" color={'#033d60'} size={35} />,
  },
  {
    icon: 'package-variant',
    title: 'Produtos/Matérias',
    path: 'Login',
    libIcon: <MaterialCommunityIcons name="package-variant" color={'#033d60'} size={35} />,
  },
];

type TopNavProp = {
  Login: undefined;
  Setting: undefined;
};

interface Props {
  navigation: StackNavigationProp<TopNavProp, 'Login'>
}

const Home = ({ navigation }: Props) => {
  return (
    <View style={home.container}>
      <Header
        navigation={navigation}
      />
      <View style={home.body}>

        <View
        // style={home.subBody}
        >
          <TouchableOpacity
            style={home.buttonGrid}
            onPress={() => navigation.navigate('Login')}
          >
            <View style={home.buttonIcon}>
              <MaterialCommunityIcons name="cash-multiple" style={home.icon} />
            </View>
            <View style={home.buttonTitle}>

              <Text style={home.titleGrid}>
                Tesouraria
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={home.buttonGrid}
            onPress={() => navigation.navigate('Setting')}
          >
            <View style={home.buttonIcon}>
              <MaterialCommunityIcons name="account-group" style={home.icon} />
            </View>
            <View style={home.buttonTitle}>
              <Text style={home.titleGrid}>
                Voluntário
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={home.buttonGrid}
            onPress={() => navigation.navigate('Setting')}
          >
            <View style={home.buttonIcon}>
              <MaterialCommunityIcons name="package-variant" style={home.icon} />
            </View>
            <View style={home.buttonTitle}>
              <Text style={home.titleGrid}>
                Produtos Materias
              </Text>
            </View>
          </TouchableOpacity>
        </View>


      </View>

      <View style={{ marginTop: 100, }}>

        <Footer
          navigation={navigation}
        />
      </View>
    </View>
  );
};


export default Home;