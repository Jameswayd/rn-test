import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen2 = () => {
  const [emergencyContact, setEmergencyContact] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [errorGender, setErrorGender] = useState('');
  const [errorHeight, setErrorHeight] = useState('');
  const [errorWeight, setErrorWeight] = useState('');
  const [errorEmergencyContact, setErrorEmergencyContact] = useState('');
  const navigation = useNavigation();

  const Registercheck = () => {
    // 在這裡新增處理註冊檢查的邏輯
    let isValid = true;

    if (!emergencyContact) {
      setErrorEmergencyContact('請填寫緊急聯絡電話');
      isValid = false;
    } else {
      setErrorEmergencyContact('');
    }

    if (!gender) {
      setErrorGender('請選擇性別');
      isValid = false;
    } else {
      setErrorGender('');
    }

    if (!height) {
      setErrorHeight('請填寫身高');
      isValid = false;
    } else {
      setErrorHeight('');
    }

    if (!weight) {
      setErrorWeight('請填寫體重');
      isValid = false;
    } else {
      setErrorWeight('');
    }

    if (isValid) {
      // 所有空格都通過驗證，可以跳到下一個畫面
      navigation.navigate('註冊三');
    }
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
          <Text style={styles.pageTitle}>建立帳號 - 2</Text>
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
                setErrorEmergencyContact('');
              }}
            />
            {errorEmergencyContact ? <Text style={styles.errorText}>{errorEmergencyContact}</Text> : null}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>性別</Text>
            <View style={styles.genderButtons}>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  gender === '男' ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  setGender('男');
                  setErrorGender('');
                }}
              >
                <Text>男</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  gender === '女' ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  setGender('女');
                  setErrorGender('');
                }}
              >
                <Text>女</Text>
              </TouchableOpacity>
            </View>
            {errorGender ? <Text style={styles.errorText}>{errorGender}</Text> : null}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>身高 (cm)</Text>
            <TextInput
              placeholder=""
              style={styles.input}
              value={height}
              onChangeText={(text) => {
                setHeight(text);
                setErrorHeight('');
              }}
            />
            {errorHeight ? <Text style={styles.errorText}>{errorHeight}</Text> : null}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>體重 (kg)</Text>
            <TextInput
              placeholder=""
              style={styles.input}
              value={weight}
              onChangeText={(text) => {
                setWeight(text);
                setErrorWeight('');
              }}
            />
            {errorWeight ? <Text style={styles.errorText}>{errorWeight}</Text> : null}
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={Registercheck}>
          <Text style={styles.buttonText}>下一頁</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
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
  genderButtons: {
    marginTop:20,
    marginBottom:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    alignItems: 'center',
    borderRadius: 30,
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
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
});

export default RegisterScreen2;
