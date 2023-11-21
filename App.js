import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.js';
import LoginScreen from './LoginScreen.js';
import Registration_interface from './Registration_interface.js';
import Registration_interface2 from './Registration_interface2.js';
import Registration_interface3 from './Registration_interface3.js';
import Diet_management from './Diet_management.js'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

