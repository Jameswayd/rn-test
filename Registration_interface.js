import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const RegisterScreen = () => {
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
    checkPasswordMatch();
  };

  const togglePassword2Visibility = () => {
    setPassword2Visible(!isPassword2Visible);
    checkPasswordMatch();
  };
  const Registercheck = () => {
    checkPasswordMatch();
  };
  

  const validateName = () => {
    if (name.trim() === '') {
      setNameValid(false);
    } else {
      setNameValid(true);
    }
  };

  const validatePhoneNumber = () => {
    if (phoneNumber.trim() === '') {
      setPhoneNumberValid(false);
    } else {
      setPhoneNumberValid(true);
    }
  };

  const validateEmail = () => {
    if (email.trim() === '') {
      setEmailValid(false);
    } else {
      setEmailValid(true);
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
          <Text style={styles.pageTitle}>Create Account</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>姓名</Text>
            <TextInput
              placeholder=""
              style={styles.input}
              value={name}
              onChangeText={(text) => {
                setName(text);
                validateName();
              }}
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
              onChangeText={(text) => {
                setPhoneNumber(text);
                validatePhoneNumber();
              }}
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
              onChangeText={(text) => {
                setEmail(text);
                validateEmail();
              }}
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
              />
            </View>
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
              />
            </View>
            {!isPasswordMatch && (
              <Text style={styles.errorText}>{errorMessage}</Text>
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={Registercheck} >下一頁</Text>
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
    marginTop:5,
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
