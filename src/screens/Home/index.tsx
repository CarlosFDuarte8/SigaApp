import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

type TopNavProp = {
  Login: undefined;
  Setting: undefined;
};


interface Props {
  navigation: StackNavigationProp<TopNavProp, 'Login'>
}
const Home = ({ navigation }: Props) => {
  return (
    <View style={{
      justifyContent: 'flex-start',
      flex: 1,
      backgroundColor: 'white',
    }}>
      <Header
        navigation={navigation}
      />
      <View style={{
      justifyContent: 'flex-start',
      // flex: 1,
      // backgroundColor: 'white',
      flexDirection: 'row'
    }}>

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
            <MaterialCommunityIcons name="cash-multiple" color={'#033d60'} size={55} />
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
              Tesouraria
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
            <MaterialCommunityIcons name="account-group" color={'#033d60'} size={55} />
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
              Voluntário
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
            <SimpleLineIcons name="social-dropbox" color={'#033d60'} size={55} />
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
              Produtos Materias
            </Text>
          </View>
        </TouchableOpacity>

      </View>
      
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
            <MaterialCommunityIcons name="cash-multiple" color={'#033d60'} size={55} />
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
              Tesouraria
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
            <MaterialCommunityIcons name="account-group" color={'#033d60'} size={55} />
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
              Voluntário
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
            <SimpleLineIcons name="social-dropbox" color={'#033d60'} size={55} />
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
              Produtos Materias
            </Text>
          </View>
        </TouchableOpacity>

      </View>
      
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
            <MaterialCommunityIcons name="cash-multiple" color={'#033d60'} size={55} />
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
              Tesouraria
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
            <MaterialCommunityIcons name="account-group" color={'#033d60'} size={55} />
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
              Voluntário
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
            <SimpleLineIcons name="social-dropbox" color={'#033d60'} size={55} />
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
              Produtos Materias
            </Text>
          </View>
        </TouchableOpacity>

      </View></View>
      <View style={{ marginTop: 100, }}>

        <Footer
          navigation={navigation}
        />
      </View>
    </View>
  );
};


export default Home;