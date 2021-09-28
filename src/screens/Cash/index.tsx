import React, {useState} from 'react';
import { Button, Text, View, TouchableOpacity, TextInput, Modal, Pressable, Alert, } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card, Avatar, IconButton, Divider } from 'react-native-paper';
import { Feather, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import ExampleOne from './Table';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { cash, modal } from '../../globalStyles/styles';
import FormUser from '../Setting/User/FormUser';


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
  Cash: undefined;
  Setting: undefined;
};

interface Props {
  navigation: StackNavigationProp<TopNavProp, 'Cash'>
}

const Cash = ({ navigation }: Props) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Header
        navigation={navigation}
      />
      <View style={cash.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modal.modal}>
            <View style={modal.menuModal}>
              <View style={modal.fecharModal}>
          <Pressable
            style={modal.menuButtonFechar}
            onPress={() => setModalVisible(!modalVisible)}
          >
                {/* <Text style={modal.menuModalTitle}>Fechar</Text> */}
                <Feather name="x" color={'#000000'} size={32} />
          </Pressable>
              </View>
              <FormUser />
            </View>
        </View>

      </Modal>

        {
          menus.map(({ icon, title, path, libIcon }: menuProps) => {
            return (
              <>
              <TouchableOpacity style={cash.subBody} onPress={() => setModalVisible(true)}>
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