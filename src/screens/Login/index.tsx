import React, { Component } from 'react';
import { Alert, TextInput, View, Text, Image, TouchableOpacity, } from 'react-native';
import { login } from '../../globalStyles/styles';

export default class Login extends Component {
  constructor(props: any) {
    super(props);
  }

  state = {
    login: '',
    password: '',
  };

  onLogin = () => {
    const { login } = this.state;
    const { password } = this.state;
    const usuario = 'Carlos';
    const senha = '123';

    if (password == senha && login == usuario) {

      Alert.alert(
        "Login aprovado! ",
        `Bem- vindo ${login}`,
        [
          {
            text: "Cancelar",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "SEGUIR",
            onPress: () => this.props.navigation.navigate('Home')
          },
        ],
        { cancelable: false }
      );
    }
    else {
      Alert.alert('Credenciais', `Credenciais invalidas ${login}`);
    }

  }

  onForgot = () =>{
    const email = 'carlosf.duarte8@gmail.com';

    Alert.alert(
      "Senha provisória envia para seu e-mail  ",
      `E-mail: ${email}`,
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => console.log("Cancel Pressed"),
        },
      ],
      { cancelable: false }
    );
  }

  render() {
    const urllogo = 'https://www.congregacaocristanobrasil.org.br/assets/images/logo-ccb-light.png';
    const title = 'Entre com suas Credencias!';
    const titleUser = 'Usuário';
    const titlePassword = 'Senha';
    const titleButton = "entrar";
    const titleForgotpassword = 'Esqueceu a senha?';

    return (
      <View style={login.container}>
        <Image
          style={login.logo}
          source={{
            uri: urllogo,
          }}
        />
        <Text style={login.text}>{title}</Text>
        <TextInput
          value={this.state.login}
          onChangeText={(login) => this.setState({ login })}
          placeholder={titleUser}
          secureTextEntry={false}
          style={login.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={titlePassword}
          secureTextEntry={true}
          style={login.input}
        />
        <TouchableOpacity style={login.login} onPress={this.onLogin} >
          <Text style={login.textLogin}>{titleButton}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onForgot} >
        <Text style={login.textForgot}>{titleForgotpassword}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}