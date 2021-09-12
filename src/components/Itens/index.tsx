import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { itensMenu } from '../../globalStyles/styles';

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
  return (
    <Pressable>
      {
        menus.map(({ icon, title, path, libIcon }: menuProps) => {
          return (
            <TouchableOpacity
              style={itensMenu.buttonItens}
              // onPress={() => navigation.navigate(path)}
            >
              <View style={itensMenu.iconView}>
                {/* {libIcon} */}
                <MaterialCommunityIcons name={icon} style={itensMenu.icon} />
              </View>
              <View style={itensMenu.titleView}>
                <Text style={itensMenu.title}>
                  {title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })
      }
    </Pressable>
  );
};

export default Itens;