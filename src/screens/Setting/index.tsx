import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Login from './Users';

type TopNavProp = {
    Setting: undefined;
    Login: undefined;
};

interface Props {
    navigation: StackNavigationProp<TopNavProp, 'Setting'>
}

const Setting = ({ navigation }: Props) => {
    return (
      <>
          <Header
              navigation={navigation}
          />
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={{
                flexDirection: 'row'
            }}>
                {/* 1 */}
                <View
                    style={{
                        // backgroundColor: 'blue',
                        // flex: 1,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        marginLeft: 25,
                        justifyContent: 'center',
                        // height: 100
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: 100,
                            width: 100,
                            justifyContent: 'center',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}
                        onPress={() => navigation.navigate('ListUsers')}
                    >
                        <View style={{
                            backgroundColor: '#f4f5f8',
                            alignItems: 'center',
                            height: 85,
                            width: 120,
                            justifyContent: 'center',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}>
                            <MaterialIcons name="design-services" size={55} color="#033d60" />
                        </View>
                        <View style={{
                            backgroundColor: '#ccc',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            width: 120,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                        }}>

                            <Text style={{ color: '#033d60', alignItems: 'center', }}>
                                Preferencias
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: 100,
                            width: 100,
                            justifyContent: 'center',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            marginBottom: 10,
                            marginVertical: 50
                        }}
                        onPress={() => navigation.navigate('Cash')}
                    >
                        <View style={{
                            backgroundColor: '#f4f5f8',
                            alignItems: 'center',
                            height: 85,
                            width: 120,
                            justifyContent: 'center',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}>
                            <MaterialIcons name="money" color={'#033d60'} size={55} />
                        </View>
                        <View style={{
                            backgroundColor: '#ccc',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            width: 120,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                        }}>
                            <Text style={{ color: '#033d60', alignItems: 'center' }}>
                                Tesoraria
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: 100,
                            width: 100,
                            justifyContent: 'center',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            marginBottom: 10,
                            marginVertical: 50
                        }}
                        onPress={() => navigation.navigate('AppVersion')}
                    >
                        <View style={{
                            backgroundColor: '#f4f5f8',
                            alignItems: 'center',
                            height: 85,
                            width: 120,
                            justifyContent: 'center',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}>
                            {/* <MaterialCommunityIcons name="cash-multiple" color={'#033d60'} size={55} /> */}
                            <SimpleLineIcons name="info" color={'#033d60'} size={55} />
                        </View>
                        <View style={{
                            backgroundColor: '#ccc',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            width: 120,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                        }}>
                            <Text style={{ color: '#033d60', alignItems: 'center', textAlign: 'center' }}>
                                Informa????es
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
                {/* 2 */}
                <View
                    style={{
                        // backgroundColor: 'blue',
                        // flex: 1,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        marginLeft: 30,
                        justifyContent: 'center',
                        // height: 100
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: 100,
                            width: 100,
                            justifyContent: 'center',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <View style={{
                            backgroundColor: '#f4f5f8',
                            alignItems: 'center',
                            height: 85,
                            width: 120,
                            justifyContent: 'center',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}>
                            <MaterialCommunityIcons name="bell-off-outline" color={'#033d60'} size={55} />
                        </View>
                        <View style={{
                            backgroundColor: '#ccc',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            width: 120,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                        }}>

                            <Text style={{ color: '#033d60', alignItems: 'center', textAlign: 'center' }}>
                                Silenciar Notifica????es
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: 100,
                            width: 100,
                            justifyContent: 'center',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            marginBottom: 10,
                            marginVertical: 50
                        }}
                        onPress={() => navigation.navigate('Setting')}
                    >
                        <View style={{
                            backgroundColor: '#f4f5f8',
                            alignItems: 'center',
                            height: 85,
                            width: 120,
                            justifyContent: 'center',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}>
                            {/* <MaterialCommunityIcons name="cash-multiple" color={'#033d60'} size={55} /> */}
                            <MaterialCommunityIcons name="school-outline" color={'#033d60'} size={55} />
                        </View>
                        <View style={{
                            backgroundColor: '#ccc',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            width: 120,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                        }}>
                            <Text style={{ color: '#033d60', alignItems: 'center', textAlign: 'center' }}>
                                Ambiente de Aprendizagem
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: 100,
                            width: 100,
                            justifyContent: 'center',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            marginBottom: 10,
                            marginVertical: 50
                        }}
                        onPress={() => navigation.navigate('Setting')}
                    >
                        <View style={{
                            backgroundColor: '#f4f5f8',
                            alignItems: 'center',
                            height: 85,
                            width: 120,
                            justifyContent: 'center',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}>
                            {/* <MaterialCommunityIcons name="cash-multiple" color={'#033d60'} size={55} /> */}
                            <SimpleLineIcons name="docs" color={'#033d60'} size={55} />
                        </View>
                        <View style={{
                            backgroundColor: '#ccc',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            width: 120,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                        }}>
                            <Text style={{ color: '#033d60', alignItems: 'center', textAlign: 'center' }}>
                                Comunicados e Documentos
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
                {/* 3 */}
                <View
                    style={{
                        // backgroundColor: 'blue',
                        // flex: 1,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        marginLeft: 30,
                        justifyContent: 'center',
                        // height: 100
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: 100,
                            width: 100,
                            justifyContent: 'center',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <View style={{
                            backgroundColor: '#f4f5f8',
                            alignItems: 'center',
                            height: 85,
                            width: 120,
                            justifyContent: 'center',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}>
                            <MaterialCommunityIcons name="chat-plus-outline" color={'#033d60'} size={55} />
                        </View>
                        <View style={{
                            backgroundColor: '#ccc',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            width: 120,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                        }}>

                            <Text style={{ color: '#033d60', alignItems: 'center', }}>
                                Abrir Chamado
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: 100,
                            width: 100,
                            justifyContent: 'center',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            marginBottom: 10,
                            marginVertical: 50
                        }}
                        onPress={() => navigation.navigate('Setting')}
                    >
                        <View style={{
                            backgroundColor: '#f4f5f8',
                            alignItems: 'center',
                            height: 85,
                            width: 120,
                            justifyContent: 'center',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}>
                            {/* <MaterialCommunityIcons name="cash-multiple" color={'#033d60'} size={55} /> */}
                            <MaterialCommunityIcons name="thumbs-up-down" color={'#033d60'} size={55} />
                        </View>
                        <View style={{
                            backgroundColor: '#ccc',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            width: 120,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                        }}>
                            <Text style={{ color: '#033d60', alignItems: 'center' }}>
                                Avaliar App
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: 100,
                            width: 100,
                            justifyContent: 'center',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            marginBottom: 10,
                            marginVertical: 50
                        }}
                        onPress={() => navigation.navigate('Setting')}
                    >
                        <View style={{
                            backgroundColor: '#f4f5f8',
                            alignItems: 'center',
                            height: 85,
                            width: 120,
                            justifyContent: 'center',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}>
                            <SimpleLineIcons name="support" color={'#033d60'} size={55} />
                        </View>
                        <View style={{
                            backgroundColor: '#ccc',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            width: 120,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                        }}>
                            <Text style={{ color: '#033d60', alignItems: 'center', textAlign: 'center' }}>
                                Suporte
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
                <Footer
                    navigation={navigation}
                />
        </>
    );
};


export default Setting;