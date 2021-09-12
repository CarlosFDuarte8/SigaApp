import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

const Menu = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 2,
            backgroundColor: "transparent",
            width: '75%'
        }}>

            {/* <Pressable
                        style={[{
                            borderRadius: 20,
                            padding: 0,
                            elevation: 0
                        }, {
                            backgroundColor: "transparent",
                        }]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Feather name="arrow-left" color={'#000'} size={32} />
                    </Pressable> */}

            <View style={{
                // margin: 20,
                backgroundColor: "#fff",
                borderRadius: 2,
                padding: 35,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.5,
                shadowRadius: 1,
                elevation: 5,
                height: '95%',
                width: '100%',
                marginLeft: 10
            }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{
                        marginBottom: 35,
                        textAlign: "center",
                        fontSize: 28,
                    }}>Menu</Text>
                    <Pressable
                        style={[{
                            borderRadius: 20,
                            padding: 0,
                            elevation: 0
                        }, {
                            backgroundColor: "transparent",
                        }]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Feather name="arrow-left" color={'#000'} size={32} />
                    </Pressable></View>
                <Pressable>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: 60,
                            width: 270,
                            justifyContent: 'center',
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            flexDirection: "row",
                            marginLeft: 35,
                        }}
                    // onPress={() => navigation.navigate('Login')}
                    >
                        <View style={{
                            // backgroundColor: '#f4f5f8',
                            alignItems: 'center',
                            height: 60,
                            width: 40,
                            justifyContent: 'center',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 0,
                        }}>
                            <MaterialCommunityIcons name="cash-multiple" color={'#033d60'} size={35} />
                        </View>
                        <View style={{
                            // backgroundColor: '#ccc',
                            justifyContent: 'center',
                            // alignItems: 'center',
                            height: 60,
                            width: 220,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 20,
                        }}>

                            <Text style={{ color: '#033d60', alignItems: 'flex-start', fontSize: 28, textAlign: "left" }}>
                                Tesouraria
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: 60,
                            width: 270,
                            justifyContent: 'center',
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            flexDirection: "row",
                            marginLeft: 35,
                            // marginBottom:5
                        }}
                    // onPress={() => navigation.navigate('Login')}
                    >
                        <View style={{
                            // backgroundColor: '#f4f5f8',
                            alignItems: 'center',
                            height: 60,
                            width: 40,
                            justifyContent: 'center',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 0,
                        }}>
                            <MaterialCommunityIcons name="account-group" color={'#033d60'} size={35} />
                        </View>
                        <View style={{
                            // backgroundColor: '#ccc',
                            justifyContent: 'center',
                            // alignItems: 'center',/
                            height: 60,
                            width: 220,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 20,
                        }}>

                            <Text style={{ color: '#033d60', alignItems: 'center', fontSize: 28 }}>
                                Tesouraria
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: 60,
                            width: 270,
                            justifyContent: 'center',
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            flexDirection: "row",
                            marginLeft: 35,
                            // marginBottom:5
                        }}
                    // onPress={() => navigation.navigate('Login')}
                    >
                        <View style={{
                            // backgroundColor: '#fff',
                            alignItems: 'center',
                            height: 60,
                            width: 40,
                            justifyContent: 'center',
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                        }}>
                            <SimpleLineIcons name="social-dropbox" color={'#033d60'} size={35} />
                        </View>
                        <View style={{
                            // backgroundColor: '#ccc',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 60,
                            width: 220,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 20,
                        }}>

                            <Text style={{ color: '#033d60', alignItems: 'center', fontSize: 25 }}>
                                Produtos Materias
                            </Text>
                        </View>
                    </TouchableOpacity>

                </Pressable>

            </View>
        </View>

    );
};

export default Menu;