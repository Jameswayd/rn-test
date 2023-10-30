import React, { useState } from 'react';
import RadioButtons from 'react-native-radio-buttons';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const RegisterScreen2 = () => {
  const [emergencyContact, setEmergencyContact] = useState('');
  const [gender, setGender] = useState(''); // 'Male' or 'Female'
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const Registercheck = () => {
    // 在这里添加处理注册检查的逻辑
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require('./assets/Login-medicine.png')}
              style={styles.logo}
            />
            <Text style={styles.logoText}>
              藥你健康
            </Text>
          </View>
          <Text style={styles.pageTitle}>Create Account</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>緊急聯絡電話</Text>
            <TextInput
              placeholder=""
              style={styles.input}
              value={emergencyContact}
              onChangeText={(text) => {
                setEmergencyContact(text);
              }}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>性別</Text>
            <RadioButtons
              options={['男', '女']}
              onSelectionChange={(option) => {
                setGender(option);
              }}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>身高 (cm)</Text>
            <TextInput
              placeholder=""
              style={styles.input}
              value={height}
              onChangeText={(text) => {
                setHeight(text);
              }}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>體重 (kg)</Text>
            <TextInput
              placeholder=""
              style={styles.input}
              value={weight}
              onChangeText={(text) => {
                setWeight(text);
              }}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={Registercheck}>
          <Text style={styles.buttonText}>下一頁</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
// Styles remain the same
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  logo: {
    width: 46,
    height: 36,
    marginTop: 2,
  },
  logoText: {
    fontSize: 32,
    marginLeft: 10,
  },
  pageTitle: {
    fontSize: 28,
    marginTop: 30,
  },
  formContainer: {
    margin: 20,
  },
  formGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 5,
  },
  passwordIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 0,
  },
  button: {
    backgroundColor: '#3D3D4C',
    borderRadius: 30,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginRight: '10%',
    marginLeft: '10%',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
};
export default RegisterScreen2;
