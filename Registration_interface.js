import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const RegisterScreen = () => {
  const [isValid, setIsValid] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isPassword2Visible, setPassword2Visible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatch, setPasswordMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isNameValid, setNameValid] = useState(true);
  const [isPhoneNumberValid, setPhoneNumberValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const navigation = useNavigation();

  const validateName = () => {
    setNameValid(name.trim() !== '');
    setIsValid(name.trim() !== '');
  };

  const validatePhoneNumber = () => {
    setPhoneNumberValid(phoneNumber.trim() !== '');
    setIsValid(phoneNumber.trim() !== '');
  };

  const validateEmail = () => {
    setEmailValid(email.trim() !== '');
    setIsValid(email.trim() !== '');
  };

  const checkPasswordMatch = () => {
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      setErrorMessage('密碼和確認密碼不一樣');
    } else {
      setPasswordMatch(true);
      setErrorMessage('');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const togglePassword2Visibility = () => {
    setPassword2Visible(!isPassword2Visible);
  };

  const Registercheck = () => {
    validateName();
    validatePhoneNumber();
    validateEmail();
  
    setPasswordValid(password.trim() !== '');
    checkPasswordMatch();
  
    // Update isValid
    const isValidated =
      isNameValid && isPhoneNumberValid && isEmailValid && isPasswordValid && isPasswordMatch &&
      name.trim() !== '' && phoneNumber.trim() !== '' && email.trim() !== '';
  
    if (isValidated) {
      // Clear error message
      setErrorMessage('');
      navigation.navigate('註冊二');
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
            <Text style={styles.logoText}>藥你健康</Text>
          </View>
          <Text style={styles.pageTitle}>建立帳號</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>姓名</Text>
            <TextInput
              placeholder=""
              style={styles.input}
              value={name}
              onChangeText={(text) => setName(text)}
              onBlur={validateName}
            />
            {!isNameValid && (
              <Text style={styles.errorText}>姓名不能是空白</Text>
            )}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>電話號碼</Text>
            <TextInput
              placeholder=""
              style={styles.input}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              onBlur={validatePhoneNumber}
            />
            {!isPhoneNumberValid && (
              <Text style={styles.errorText}>電話號碼不能是空白</Text>
            )}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder=""
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              onBlur={validateEmail}
            />
            {!isEmailValid && (
              <Text style={styles.errorText}>Email不能是空白</Text>
            )}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>密碼
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Image
                source={
                  isPasswordVisible
                    ? require('./assets/fluent_eye-off-16-filled.png')
                    : require('./assets/fluent_eye-24-filled.png')
                }
                style={styles.passwordIcon}
              />
            </TouchableOpacity>
            </Text>
            <View>
            <TextInput
              placeholder=""
              secureTextEntry={!isPasswordVisible}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              onBlur={() => setPasswordValid(true)} // 清除密碼錯誤訊息
            />
            </View>
            {!isPasswordValid && (
              <Text style={styles.errorText}>密碼不能是空白</Text>
            )}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>再次確認密碼
            <TouchableOpacity onPress={togglePassword2Visibility}>
              <Image
                source={
                  isPassword2Visible
                    ? require('./assets/fluent_eye-off-16-filled.png')
                    : require('./assets/fluent_eye-24-filled.png')
                }
                style={styles.passwordIcon}
              />
            </TouchableOpacity>
            </Text>
            <View>
            <TextInput
              placeholder=""
              secureTextEntry={!isPassword2Visible}
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              onBlur={checkPasswordMatch} // 驗證密碼匹配並設定錯誤訊息
            />
            </View>
            {!isPasswordValid && (
              <Text style={styles.errorText}>密碼不能是空白</Text>
            )}
            {!isPasswordMatch && (
              <Text style={styles.errorText}>{errorMessage}</Text>
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={Registercheck}>
          <Text style={styles.buttonText}>下一頁</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
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
    marginTop: 10,
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

export default RegisterScreen;
