import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome'
import MachineConnect from './screens/MachineConnect'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import ItemsScreen from './screens/ItemsScreen'
import ItemDetail from './screens/ItemDetail'
import Success from './screens/Success'
import Fail from './screens/Fail'
import FindMachine from './screens/FindMachine'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
  <Stack.Navigator initialRouteName="itemsscreen"   screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="welcome" component={Welcome} ></Stack.Screen>
    <Stack.Screen name="login" component={LoginScreen} ></Stack.Screen>
    <Stack.Screen name="signup" component={SignupScreen}></Stack.Screen>
    <Stack.Screen name="machineconnect" component={MachineConnect} ></Stack.Screen>
    <Stack.Screen name="itemsscreen" component={ItemsScreen} ></Stack.Screen>
    <Stack.Screen name="itemdetail" component={ItemDetail} ></Stack.Screen>
    <Stack.Screen name="success" component={Success} ></Stack.Screen>
    <Stack.Screen name="fail" component={Fail} ></Stack.Screen>
    <Stack.Screen name="findmachine" component={FindMachine} ></Stack.Screen>

  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
