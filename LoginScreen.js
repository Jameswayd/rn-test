import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
//import Svg, { Path } from 'react-native-svg';
//import googleIcon from './assets/icons8-google.svg';

export function Login_Screen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    // 假設 email 和 password 都是 "admin"，就會成功登入，否則顯示錯誤訊息
    if (email === 'admin' && password === 'admin') {
      console.log('Login success!');
      setError(false);
      navigation.navigate('Home');
    } else {
      console.log('Login failed!');
      setError(true);
    }
  };

  const handleForgotPassword = () => {
    // 處理忘記密碼邏輯
  };

  const handleCreateAccount = () => {
    // 處理創建帳號邏輯
    navigation.navigate('註冊');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={require('./assets/login-logo.jpg')} style={styles.logo} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder=" Email-ID"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="密碼"
            secureTextEntry
          />
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe ? (
                <Text style={styles.checkboxText}>✓</Text>
              ) : null}
            </TouchableOpacity>
            <Text style={styles.checkboxText}>保持登入</Text>
            <Text
              style={styles.forgotPassword}
              onPress={handleForgotPassword}
            >
              忘記密碼
            </Text>
          </View>
          {error && (
            <Text style={styles.errorText}>錯誤的帳號或是密碼</Text>
          )}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>登入</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>建立帳號</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('./assets/Facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('./assets/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: '100%', // 設定寬度為螢幕寬度
    height: '100%', // 設定高度為螢幕高度
  },
  logo: {
    width: 250,
    height: 250,
    marginTop: 20,
    marginLeft: '19%',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 30,
    marginRight: '10%',
    marginLeft: '10%'
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxText: {
    fontSize: 16,
    color: '#333333',
  },
  forgotPassword: {
    marginLeft: 'auto',
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#333333',
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
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCCCCC',
    marginBottom: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // 將 justify-content 設為 center
    alignItems: 'center',
    width: '100%', // 設定寬度為螢幕寬度
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFF',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1%',
    marginRight: '10%',
    marginLeft: '10%',
  },
  socialIcon: {
    width: 60,
    height: 60,
  },
});
export default Login_Screen;