import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import CameraApp from "../../components/Camera";

const Menu = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
{/* <CameraApp /> */}
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2
        }}>
          <View style={{
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
          }}>
            
            <Text style={{
              marginBottom: 15,
              textAlign: "center"
            }}>Hello World!</Text>
            <Pressable
              style={[{
                borderRadius: 20,
                padding: 10,
                elevation: 2
              }, {
                backgroundColor: "#2196F3",
              }]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center"
              }}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[{
          borderRadius: 20,
          padding: 10,
          elevation: 2
        }, {
          backgroundColor: "#F194FF",
        }]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        }}>Abrir Menu</Text>
      </Pressable>
    </View>
  );
};

export default Menu;