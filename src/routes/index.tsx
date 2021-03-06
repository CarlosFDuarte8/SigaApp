import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Setting, ListUsers, Menu, Web, Camera, Product, Cash, AppVersion} from '../screens';


const Stack = createStackNavigator();

const Routes = () => {
  return (
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Bem-vindo' }} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="ListUsers" component={ListUsers} />
        <Stack.Screen name="Web" component={Web} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cash" component={Cash} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="AppVersion" component={AppVersion} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
  );
};

export default Routes;