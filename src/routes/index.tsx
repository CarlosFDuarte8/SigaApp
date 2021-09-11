import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Setting, Menu, Web, Camera} from '../screens';


const Stack = createStackNavigator();

const Routes = () => {
  return (
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Bem-vindo' }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Web" component={Web} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
  );
};

export default Routes;