import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './components/Menu';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewToDo from './components/NewToDo';

const Stack = createStackNavigator();

export default function App() {
  return (
    
      
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Menu' component={Menu} />
        <Stack.Screen name='NewToDo' component={NewToDo} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
