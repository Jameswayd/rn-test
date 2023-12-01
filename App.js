import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.js';
import LoginScreen from './LoginScreen.js';
import Registration_interface from './Registration_interface.js';
import Registration_interface2 from './Registration_interface2.js';
import Registration_interface3 from './Registration_interface3.js';
import Diet_management from './Diet_management.js';
import Settings from './Settings.js';
import Settingsdiet from './settingsdiet.js';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            color: 'black',
            fontSize: 20,
          },
          headerTintColor: 'black',
        }}
      >
        <Stack.Screen
          name="登入"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#ECF5FF',
            },
          }}
        />
        <Stack.Screen
          name="註冊"
          component={Registration_interface}
        />
        <Stack.Screen
          name="註冊二"
          component={Registration_interface2}
        />
        <Stack.Screen
          name="註冊三"
          component={Registration_interface3}
        />
        <Stack.Screen
          name="飲食管理"
          component={Diet_management}
        />
        <Stack.Screen
          name="設定"
          component={Settings}
        />
        <Stack.Screen
          name="設定飲食量"
          component={Settingsdiet}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
