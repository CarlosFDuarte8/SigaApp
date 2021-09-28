import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';



export default class Form extends Component {
  state = {
    collapsed: true,
    iconName: 'add-circle-outline'
  };
  render() {
    return (

      <ScrollView style={styles.container} >
        <StatusBar hidden={true} />
        <View style={styles.inputContainer}>
          <Ionicons name="md-person" size={25} />
          <TextInput
            style={styles.inputRow}
            placeholderTextColor="#000"
            underlineColorAndroid="#fff"
            placeholder="Nome"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="ios-globe-outline" size={25} />
          <TextInput
            style={styles.inputRow}
            placeholderTextColor="#000"
            underlineColorAndroid="#fff"
            placeholder="Empresa"
          />
          <Ionicons name="ios-clipboard" size={25} />
          <TextInput
            style={styles.inputRow}
            placeholderTextColor="#000"
            underlineColorAndroid="#fff"
            placeholder="Cargo"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="ios-call" size={25} />
          <TextInput
            style={styles.inputRow}
            placeholderTextColor="#000"
            underlineColorAndroid="#fff"
            placeholder="Telefones"
          />
          <TextInput
            style={styles.inputRow}
            placeholderTextColor="#000"
            underlineColorAndroid="#fff"
            placeholder="Tipo Telefone"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="ios-briefcase" size={25} />
          <TextInput
            style={styles.inputRow}
            placeholderTextColor="#000"
            underlineColorAndroid="#fff"
            placeholder="Departamento"
          />
        </View>
        <Collapsible collapsed={this.state.collapsed}>

          <View style={styles.inputContainer}>
            <Ionicons name="md-card" size={25} />
            <TextInput
              style={styles.inputRow}
              placeholderTextColor="#000"
              underlineColorAndroid="#fff"
              placeholder="CPF"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="ios-people" size={25} />
            <TextInput
              style={styles.inputRow}
              placeholderTextColor="#000"
              underlineColorAndroid="#fff"
              placeholder="Responsavel"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="ios-list" size={25} />
            <TextInput
              multiline={true}
              numberOfLines={5}
              style={styles.input}
              placeholderTextColor="#000"
              underlineColorAndroid="#fff"
              placeholder="Observação"
            />
          </View>


        </Collapsible>
        <TouchableOpacity
          style={{ alignSelf: 'center', marginTop: 10 }}
          onPress={() => {
            if (this.state.collapsed === true) {
              this.setState({
                collapsed: !this.state.collapsed,
                iconName: 'remove-circle-outline'

              })
            } else {
              this.setState({
                collapsed: !this.state.collapsed,
                iconName: 'add-circle-outline'
              })

            }
          }
          }>
          <Ionicons name={this.state.iconName} size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputCadastro}>
          {/* <Ionicons name="ios-list" size={25} /> */}
          <Text style={styles.inputTextCadastro}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView >

    );
  }
}

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'stretch',
    padding: 10,
    // backgroundColor: '#ecf0f1',
    width: width * 0.9
  },
  input: {
    padding: 10,
    flex: 1,
    margin: 3,
    width: 'auto',
    textAlignVertical: 'top'
  },
  inputRow: {
    padding: 10,
    flex: 1,
    margin: 3,
    // width: 'auto',
  },
  inputContainer: {

    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  inputCadastro: {
    alignSelf: 'center',
    marginTop: 10,
    borderColor: 'blue',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    width: width * 0.6,
    height: height * 0.06,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputTextCadastro: {
    color: "#fff",
    marginBottom: 0,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
  },
});
