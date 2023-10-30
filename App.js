import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.js';
import LoginScreen from './LoginScreen.js';
import Registration_interface from './Registration_interface.js';
import Registration_interface2 from './Registration_interface2.js';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

