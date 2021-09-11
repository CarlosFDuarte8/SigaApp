import * as React from 'react';
import { View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';

 

const App = () => {
  return (
    <View style={{
      justifyContent: 'flex-start',
       flex: 1,
       }}>
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    </View>
  );
}

export default App;