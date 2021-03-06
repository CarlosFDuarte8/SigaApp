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
    icon: 'book-cross',
    title: 'Fundo Biblico',
    path: 'Login',
    libIcon: <MaterialCommunityIcons name='cash-multiple' color={'#033d60'} size={35} />,
  },
  {
    icon: 'file-chart',
    title: 'Relatório',
    path: 'Setting',
    libIcon: <MaterialCommunityIcons name="account-group" color={'#033d60'} size={35} />,
  },
  
];

type TopNavProp = {
  Login: undefined;
  Setting: undefined;
};

interface Props {
  navigation: StackNavigationProp<TopNavProp, 'Login'>
}

const Product = ({ navigation }: Props) => {
  return (
    <View style={home.container}>
      <Header
        navigation={navigation}
      />
      {
        menus.map(({ icon, title, path, libIcon }: menuProps) => {
          return (

            <View style={home.body}>

              <View
              // style={home.subBody}
              >

                <TouchableOpacity
                  style={home.buttonGrid}
                  // onPress={() => navigation.navigate('Login')}
                  onPress={() => navigation.navigate(path)}
                >
                  <View style={home.buttonIcon}>
                    <MaterialCommunityIcons name={icon} style={home.icon} />
                  </View>
                  <View style={home.buttonTitle}>

                    <Text style={home.titleGrid}>
                      {title}
                    </Text>
                  </View>
                </TouchableOpacity>

              </View>

            </View>
          );
        })
      }

      <View style={{ marginTop: 100, }}>

        <Footer
          navigation={navigation}
        />
      </View>
    </View>
  );
};


export default Product;