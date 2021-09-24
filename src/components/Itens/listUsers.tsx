import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import { List } from 'react-native-paper';
import { api } from "../../services";
import { Feather, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { itensMenu, menu } from '../../globalStyles/styles';

interface menuProps {
  icon: string,
  title: string,
  path: string,
  subTitle1: string,
  subTitle2: string,
}

const Itens = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [expanded, setExpanded] = React.useState(true);

  const [menus, setMenus] = useState<menuProps[]>([]);

  useEffect(() => {
    api.get('/api/menu/menus/').then((response) => {
      setMenus(response.data);
      console.log('API dados==>', response.data);
    })
  }, []);

  const handlePress = () => setExpanded(!expanded);
  return (
    <>
      <List.Section style={itensMenu.menuItem} >
        {
          menus.map(({ icon, title, path, subTitle1, subTitle2 }: menuProps) => {
            return (
              <List.Accordion
                style={itensMenu.titleView}
                title={title}
                left={props => <List.Icon {...props} icon={icon} />}>
                <List.Item title={subTitle1} onPress={() => console.log('Press 1', path)}/>
                <List.Item title={subTitle2} onPress={() => console.log('Press 2', path)}/>
              </List.Accordion>
            );
          })
        }
      </List.Section>

    </>
  );
};

export default Itens;