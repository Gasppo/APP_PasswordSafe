// ./App.js

import React from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Approve from './screens/Approve';
import ManagedSystems from './screens/ManagedSystems';
import PasswordSafe from './screens/PasswordSafe';
import Requests from './screens/Requests';
import {View, Text} from 'react-native';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            cardStyle: {backgroundColor: '#E7E9E9'},
          }}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Approve" component={Approve} />
          <Stack.Screen name="ManagedSystems" component={ManagedSystems} />
          <Stack.Screen name="PasswordSafe" component={PasswordSafe} />
          <Stack.Screen name="Requests" component={Requests} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
