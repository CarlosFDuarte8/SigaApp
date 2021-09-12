import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import { List } from 'react-native-paper';
import { Feather, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { itensMenu, menu } from '../../globalStyles/styles';

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

const Itens = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <>
      <List.Section  style={itensMenu.menuItem} >
    {
        menus.map(({ icon, title, path, libIcon }: menuProps) => {
          return (
      <List.Accordion
      style={itensMenu.titleView}
        title={title}
        left={props => <List.Icon {...props} icon={icon} />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
      );
    })
  }
  </List.Section>
  
    </>
  );
};

export default Itens;