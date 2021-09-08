import React, { useState } from 'react';
import { Text,StyleSheet,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
const Stack = createNativeStackNavigator();



const App = () => {

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App;
