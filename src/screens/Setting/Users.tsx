import React, { Component, useState, useEffect } from 'react';
import { Alert, TextInput, View, Text, Image, TouchableOpacity, } from 'react-native';
import { DataTable, Switch, FAB, Searchbar } from 'react-native-paper';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { api } from '../../services';
import { listUsers } from '../../globalStyles/styles';

interface UserProps {
  id: number;
  name: string;
  login: string;
  password: string;
  situation: boolean;
}

interface UserTitleProps {
  id: number;
  name: string;
  login: string;
  password: string;
  profile: string;
  situation: boolean;
}

const UserTitles: UserTitleProps[] = [
  {
    id: "ID",
    name: "Nome",
    login: "Usuário",
    password: "Senha",
    profile: "Perfil",
    situation: "Status"
  }
]

const optionsPerPage = [2, 3];

const ListUsers = ({ navigation }) => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    api.get('/api/user/users/').then((response) => {
      setUsers(response.data);
      console.log('API dados==>', response.data);
    })
  }, []);
  console.clear();

  const [page, setPage] = React.useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={listUsers.container} >
      <Header
        navigation={navigation}
      /><View style={listUsers.containers} >

      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <DataTable style={{ flex: 1, marginTop: 0,  }}>
        {
          UserTitles.map(({ id, name, login, password, situation, profile }: menuProps) => {
            return (
              <DataTable.Header key={id}>
                <DataTable.Title >{id}</DataTable.Title>
                <DataTable.Title>{name}</DataTable.Title>
                <DataTable.Title>{login}</DataTable.Title>
                <DataTable.Title>{profile}</DataTable.Title>
                <DataTable.Title >{situation}</DataTable.Title>
                <DataTable.Title >Opções</DataTable.Title>
              </DataTable.Header>
            );
          })
        }
        {
          users.map(({ id, name, login, password, situation, profile }: UserProps) => {
            const Ativo = situation;
            return (
              <DataTable.Row key={id}>
                <DataTable.Cell centered={true}>{id}</DataTable.Cell>
                <DataTable.Cell>{name}</DataTable.Cell>
                <DataTable.Cell>{login}</DataTable.Cell>
                <DataTable.Cell>{profile}</DataTable.Cell>
                <DataTable.Cell disabled>
                  <Switch value={situation} onValueChange={onToggleSwitch} />
                </DataTable.Cell>
                <DataTable.Cell >
                  <FAB
                    style={{
                      position: 'absolute',
                      margin: 6,
                      right: 2,
                      bottom: 0,
                    }}
                    small
                    icon="plus"
                  // onPress={opts}
                  />
                </DataTable.Cell>
              </DataTable.Row>
            );
          })
        }
        <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={(page) => setPage(page)}
          label="1-1 of 1"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={'Rows per page'}
        />
      </DataTable>
      </View>
      <Footer navigation={navigation} />
    </View>
  );

}

export default ListUsers;