import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface homeItens {
  id: string,
  title: string,
  subTi: string,
  iconn: string
}

const DATA = [
  {
    id: '1',
    title: 'Ambiente de aprendizagem',
    subTi: 'Tutorias, Manuais...',
    iconn: 'school',
    path: 'Learnings',
  },
  {
    id: '2',
    title: 'Tesoraria',
    subTi: 'Deposito, Fechamento, Relatórios...',
    iconn: 'cash-multiple',
    path: 'Cash',
  },
  {
    id: '3',
    title: 'Mês de trabalho',
    subTi: 'Setembro de 2021',
    iconn: 'calendar',
    path: 'Works',
  },
  {
    id: '4',
    title: 'Vonluntários',
    subTi: 'Apontamentos & Cadastro',
    iconn: 'account-group-outline',
    path: 'Volunteers',
  },
  {
    id: '5',
    title: 'Materias & Produtos',
    subTi: 'Estoque & Relatórios',
    iconn: 'package-variant',
    path: 'Product',
  },
  {
    id: '6',
    title: 'Suporte',
    subTi: 'Iniciar um novo chat',
    iconn: 'chat-plus-outline',
    path: 'Suport',
  },
  {
    id: '7',
    title: 'Informações',
    subTi: 'Versão do app...',
    iconn: 'information-outline',
    path: 'Info',
  },
];

const Item = ({ title, iconn, subTi, path }) => (
  <View style={styles.item}>
    <TouchableOpacity style={styles.buttonTitle} onPress={() => console.log('Press texto', path)}>
      <Text style={styles.title}>  {title}</Text>
      <Text style={styles.subTitle}>  {subTi}</Text>
    <TouchableOpacity style={styles.iconS} onPress={() => console.log('Press icon', path)}>
      <MaterialCommunityIcons name={iconn} size={54} color="#033d60" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.dots} onPress={() => console.log('Press arrow', path)}>
      <MaterialCommunityIcons name="chevron-right" size={34} color="#033d60" />
    </TouchableOpacity>
    </TouchableOpacity>
  </View>
);

type TopNavProp = {
  Login: undefined;
  Setting: undefined;
};

interface Props {
  navigation: StackNavigationProp<TopNavProp, 'Setting'>
}

const Home = ({ navigation }: Props) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} iconn={item.iconn} subTi={item.subTi} path={item.path}/>
  );

  return (
    <>
      <Header
        navigation={navigation}
      />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        >

        </FlatList>
      </SafeAreaView>
      <Footer
        navigation={navigation}
      />
    </>
  );
}

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: height * 0.049,
    marginVertical: 2,
    marginHorizontal: 16,
    borderRadius: 5,
    flexDirection: 'row'
  },
  buttonTitle: {
    flexDirection: "column",
    position: "absolute",
    width: width * 0.925,
    height: height * 0.099,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: "red",
    borderStyle: 'solid',
    borderWidth: 1,
  },
  title: {
    fontSize: width * 0.05,
    color: "#033d60",
    marginHorizontal: width * 0.012,
    // position: "absolute",
  },
  subTitle: {
    fontSize: width * 0.04,
    color: "#033d60",
    marginHorizontal: width * 0.22,
  },
  buttons: {
    position: "absolute",
    marginHorizontal: width * 0.05,
  },
  iconS: {
    position: "absolute",
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.03,
  },
  dots: {
    position: "absolute",
    marginHorizontal: width * 0.8,
    marginVertical: height * 0.026,
  }
});

export default Home;