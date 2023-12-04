import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import HomeScreen from './HomeScreen.js';
import LoginScreen from './LoginScreen.js';
import Registration_interface from './Registration_interface.js';
import Registration_interface2 from './Registration_interface2.js';
import Registration_interface3 from './Registration_interface3.js';
import Diet_management from './Diet_management.js';
import Settings from './Settings.js';
import Settingsdiet from './settingsdiet.js';
import Selectscreen from './Selectscreen.js';
import bloodpressure from './bloodpressure.js';
import bloodsugar from './bloodsugar.js';
import BMI_input from './BMI_input.js';
import steps from './steps.js';
import MainScreen from './MainScreen'; // MainScreen頁面
import DruginfoScreen from './DruginfoScreen';
import Ergocafe from './med/Ergocafe';
import Amiorone from './med/Amiorone';
import Digoxin from './med/Digoxin';
import Tifforly from './med/Tifforly';
import Galvus from './med/Galvus';
import SATA from './med/SATA';
import Novamin from './med/Novamin';
import Morphine from './med/Morphine';
import Dexamethasoneoxin from './med/Dexamethasoneoxin';
import Magnesium from './med/Magnesium';
import Progesterone from './med/Progesterone';
import Atropine from './med/Atropine';
import Depot from './med/Depot';
import Gipamine from './med/Gipamine';
import Pitressin from './med/Pitressin';
import Gendobu from './med/Gendobu';
import Acetaminophen from './med/Acetaminophen';
import Glycopyrodyn from './med/Glycopyrodyn';
import Vancomycin from './med/Vancomycin';
import Keto from './med/Keto';
import Anexate from './med/Anexate';
import Secorine from './med/Secorine';
import Tienam from './med/Tienam';
import Lasix from './med/Lasix';
import Curam from './med/Curam';
import Nasacort from './med/Nasacort';
import Actein from './med/Actein';
import ForLAX from './med/ForLAX';
import Levemir from './med/Levemir';
import Dilantin from './med/Dilantin';
import Ponstan from './med/Ponstan';
import Transamin from './med/Transamin';
import Negacide from './med/Negacide';
import Euglucon from './med/Euglucon';
import Asverin from './med/Asverin';
import Codeine from './med/Codeine';
import Acetaminephen from './med/Acetaminephen';





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
        <Stack.Screen
          name="健康數據紀錄"
          component={Selectscreen}
          options={{
            headerStyle: {
              backgroundColor: '#ECF5FF',
            },
          }}
        />
        <Stack.Screen
          name="血壓"
          component={bloodpressure}
        />
        <Stack.Screen
          name="血糖"
          component={bloodsugar}
        />
        <Stack.Screen
          name="BMI"
          component={BMI_input}
        />
        <Stack.Screen
          name="行走步數"
          component={steps}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={({ navigation }) => ({
            title: '藥品查詢',
            headerRight: () => (
              <Button
                title="我的最愛"
                onPress={() => navigation.navigate('DruginfoScreen')}
                color="black"
              />
            ),
          })}
        />
        <Stack.Screen name="DruginfoScreen" component={DruginfoScreen} options={{ title: '我的最愛' }} />
        <Stack.Screen name="Ergocafe" component={Ergocafe} />
        <Stack.Screen name="Amiorone" component={Amiorone} />
        <Stack.Screen name="Digoxin" component={Digoxin} />
        <Stack.Screen name="Tifforly" component={Tifforly} />
        <Stack.Screen name="Galvus" component={Galvus} />
        <Stack.Screen name="SATA" component={SATA} />
        <Stack.Screen name="Novamin" component={Novamin} />
        <Stack.Screen name="Morphine" component={Morphine} />
        <Stack.Screen name="Dexamethasoneoxin" component={Dexamethasoneoxin} />
        <Stack.Screen name="Magnesium" component={Magnesium} />
        <Stack.Screen name="Progesterone" component={Progesterone} />
        <Stack.Screen name="Atropine" component={Atropine} />
        <Stack.Screen name="Depot" component={Depot} />
        <Stack.Screen name="Gipamine" component={Gipamine} />
        <Stack.Screen name="Pitressin" component={Pitressin} />
        <Stack.Screen name="Gendobu" component={Gendobu} />
        <Stack.Screen name="Acetaminophen" component={Acetaminophen} />
        <Stack.Screen name="Glycopyrodyn" component={Glycopyrodyn} />
        <Stack.Screen name="Vancomycin" component={Vancomycin} />
        <Stack.Screen name="Keto" component={Keto} />
        <Stack.Screen name="Anexate" component={Anexate} />
        <Stack.Screen name="Secorine" component={Secorine} />
        <Stack.Screen name="Tienam" component={Tienam} />
        <Stack.Screen name="Lasix" component={Lasix} />
        <Stack.Screen name="Curam" component={Curam} />
        <Stack.Screen name="Nasacort" component={Nasacort} />
        <Stack.Screen name="Actein" component={Actein} />
        <Stack.Screen name="ForLAX" component={ForLAX} />
        <Stack.Screen name="Levemir" component={Levemir} />
        <Stack.Screen name="Dilantin" component={Dilantin} />
        <Stack.Screen name="Ponstan" component={Ponstan} />
        <Stack.Screen name="Transamin" component={Transamin} />
        <Stack.Screen name="Negacide" component={Negacide} />
        <Stack.Screen name="Euglucon" component={Euglucon} />
        <Stack.Screen name="Asverin" component={Asverin} />
        <Stack.Screen name="Codeine" component={Codeine} />
        <Stack.Screen name="Acetaminephen" component={Acetaminephen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
