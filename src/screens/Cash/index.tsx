import React from 'react';
import { Button, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Table, Row, Rows } from 'react-native-table-component';
import ExampleOne from './Table';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { cash } from '../../globalStyles/styles';


interface menuProps {
  icon: string,
  title: string,
  path: string,
  libIcon: any,
}

interface tableHeadProps {
  nome: string,
  sobre: string,
  option: string,
}

interface tableDataProps {
  nome: string,
  sobre: string,
  option: string,
}

const tableHead: tableHeadProps[] = [
  {
    nome: 'Nome',
    sobre: 'Sobrenome',
    option: 'Status',
  },
];

const tableData: tableDataProps[] = [
  {
    nome: 'Carlos',
    sobre: 'Duarte',
    option: 'ativo',
  },
  {
    nome: 'Abigail',
    sobre: 'Duarte',
    option: 'ativo',
  },
];

const menus: menuProps[] = [
  {
    icon: 'newspaper-plus',
    title: 'Novo',
    path: 'Login',
    libIcon: <MaterialCommunityIcons name='cash-multiple' color={'#033d60'} size={35} />,
  },
  {
    icon: 'newspaper-plus',
    title: 'Filtro',
    path: 'Login',
    libIcon: <MaterialCommunityIcons name='cash-multiple' color={'#033d60'} size={35} />,
  },

];

type TopNavProp = {
  Login: undefined;
  Setting: undefined;
};

interface Props {
  navigation: StackNavigationProp<TopNavProp, 'Login'>
}

const Cash = ({ navigation }: Props) => {

  return (
    <View style={cash.container}>
      <Header
        navigation={navigation}
      />
      <ExampleOne />

      {
        menus.map(({ icon, title, path, libIcon }: menuProps) => {
          return (
            <View style={cash.subBody}>
              <TouchableOpacity
                style={cash.buttonGrid}
                // onPress={() => navigation.navigate('Login')}
                onPress={() => navigation.navigate(path)}
              >
                <View
                  style={cash.body}
                >
                  <View style={cash.buttonIcon}>
                    <MaterialCommunityIcons name={icon} style={cash.icon} />
                  </View>
                  <View style={cash.buttonTitle}>
                    <Text style={cash.titleGrid}>
                      {title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

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


export default Cash;