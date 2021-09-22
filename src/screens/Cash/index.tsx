import React from 'react';
import { Button, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card, Avatar, IconButton, Divider } from 'react-native-paper';
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
    icon: 'filter-outline',
    title: 'Filtro',
    path: 'Home',
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
    <>
      <Header
        navigation={navigation}
      />
      <View style={cash.container}>

        {
          menus.map(({ icon, title, path, libIcon }: menuProps) => {
            return (
              <>
              <TouchableOpacity style={cash.subBody} onPress={() => navigation.navigate(path)}>
                <Card.Title
                  title={title}
                  left={(props) => <Avatar.Icon {...props} icon={icon} />}
                  right={(props) => <IconButton {...props} icon="chevron-right"  />}
                />
              </TouchableOpacity>
              <Divider />
              </>
            );
          })
        }
        <Divider />

        <ExampleOne />

      </View>
      <Footer
        navigation={navigation}
      />
    </>
  );
};


export default Cash;