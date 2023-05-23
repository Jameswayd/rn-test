import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen.js';
import Login_Screen from './Login_Screen.js';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="登入" component={Login_Screen} />
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          headerStyle: {
            backgroundColor: '#ECF5FF',
          },
          tabBarStyle: { 
            backgroundColor: '#ECF5FF'  
          }
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
