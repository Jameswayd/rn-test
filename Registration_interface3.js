import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen3 = () => {
  const [pastMedicalHistory, setPastMedicalHistory] = useState([]);
  const [otherPastMedicalHistory, setOtherPastMedicalHistory] = useState('');
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState([]);
  const [otherFamilyMedicalHistory, setOtherFamilyMedicalHistory] = useState('');
  const [lifestyleHabits, setLifestyleHabits] = useState([]);
  const [otherLifestyleHabits, setOtherLifestyleHabits] = useState('');
  const [errorPastMedicalHistory, setErrorPastMedicalHistory] = useState('');
  const [errorFamilyMedicalHistory, setErrorFamilyMedicalHistory] = useState('');
  const [errorLifestyleHabits, setErrorLifestyleHabits] = useState('');
  const navigation = useNavigation();

  const toggleMedicalHistory = (value) => {
    const updatedPastMedicalHistory = [...pastMedicalHistory];
    if (updatedPastMedicalHistory.includes(value)) {
      const index = updatedPastMedicalHistory.indexOf(value);
      updatedPastMedicalHistory.splice(index, 1);
    } else {
      updatedPastMedicalHistory.push(value);
    }
    setPastMedicalHistory(updatedPastMedicalHistory);

    if (value === '無') {
      // 如果使用者選擇了"無"，則清空其他家族病史並停用輸入框
      setOtherPastMedicalHistory('');
    }
  };

  const toggleFamilyMedicalHistory = (value) => {
    const updatedFamilyMedicalHistory = [...familyMedicalHistory];
    if (updatedFamilyMedicalHistory.includes(value)) {
      const index = updatedFamilyMedicalHistory.indexOf(value);
      updatedFamilyMedicalHistory.splice(index, 1);
    } else {
      updatedFamilyMedicalHistory.push(value);
    }
    setFamilyMedicalHistory(updatedFamilyMedicalHistory);

    if (value === '無') {
      // 如果使用者選擇了"無"，則清空其他家族病史並停用輸入框
      setOtherFamilyMedicalHistory('');
    }
  };

  const toggleLifestyleHabits = (value) => {
    const updatedLifestyleHabits = [...lifestyleHabits];
    if (updatedLifestyleHabits.includes(value)) {
      const index = updatedLifestyleHabits.indexOf(value);
      updatedLifestyleHabits.splice(index, 1);
    } else {
      updatedLifestyleHabits.push(value);
    }
    setLifestyleHabits(updatedLifestyleHabits);

    if (value === '無') {
      // 如果使用者選擇了"無"，則清空其他生活習慣並停用輸入框
      setOtherLifestyleHabits('');
    }
  };

  const Registercheck = () => {
    // 在這裡可以處理註冊檢查的邏輯，驗證輸入等等
    let isValid = true;

    if (pastMedicalHistory.length === 0) {
      setErrorPastMedicalHistory('請選擇過往病史');
      isValid = false;
    } else {
      setErrorPastMedicalHistory('');
    }

    if (familyMedicalHistory.length === 0) {
      setErrorFamilyMedicalHistory('請選擇家族病史');
      isValid = false;
    } else {
      setErrorFamilyMedicalHistory('');
    }

    if (lifestyleHabits.length === 0) {
      setErrorLifestyleHabits('請選擇生活習慣');
      isValid = false;
    } else {
      setErrorLifestyleHabits('');
    }

    if (isValid) {
      // 所有空格都經過驗證，可以弹出Alert
      Alert.alert(
        '註冊成功',
        '您已成功註冊。',
        [
          {
            text: '確認',
            onPress: () => {
              navigation.navigate('登入');
            }
          }
        ]
      );
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
          <Text style={styles.pageTitle}>建立帳號 - 3</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>過往病史</Text>
            <View style={styles.medicalHistoryButtons}>
              <TouchableOpacity
                style={[
                  styles.medicalHistoryButton,
                  pastMedicalHistory.includes('無') ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  toggleMedicalHistory('無');
                }}
              >
                <Text>無</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.medicalHistoryButton,
                  pastMedicalHistory.includes('糖尿病') ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  toggleMedicalHistory('糖尿病');
                }}
              >
                <Text>糖尿病</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.medicalHistoryButton,
                  pastMedicalHistory.includes('中風') ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  toggleMedicalHistory('中風');
                }}
              >
                <Text>中風</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.medicalHistoryButton,
                  pastMedicalHistory.includes('高血壓') ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  toggleMedicalHistory('高血壓');
                }}
              >
                <Text>高血壓</Text>
              </TouchableOpacity>
            </View>
            {errorPastMedicalHistory ? <Text style={styles.errorText}>{errorPastMedicalHistory}</Text> : null}
            <TextInput
              placeholder="其他過往病史"
              style={styles.input}
              value={otherPastMedicalHistory}
              onChangeText={(text) => setOtherPastMedicalHistory(text)}
              // 停用輸入框如果選擇了“無”
              editable={!pastMedicalHistory.includes('無')}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>家族病史</Text>
            <View style={styles.medicalHistoryButtons}>
              <TouchableOpacity
                style={[
                  styles.medicalHistoryButton,
                  familyMedicalHistory.includes('無') ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  toggleFamilyMedicalHistory('無');
                }}
              >
                <Text>無</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.medicalHistoryButton,
                  familyMedicalHistory.includes('糖尿病') ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  toggleFamilyMedicalHistory('糖尿病');
                }}
              >
                <Text>糖尿病</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.medicalHistoryButton,
                  familyMedicalHistory.includes('中風') ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  toggleFamilyMedicalHistory('中風');
                }}
              >
                <Text>中風</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.medicalHistoryButton,
                  familyMedicalHistory.includes('高血壓') ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  toggleFamilyMedicalHistory('高血壓');
                }}
              >
                <Text>高血壓</Text>
              </TouchableOpacity>
            </View>
            {errorFamilyMedicalHistory ? <Text style={styles.errorText}>{errorFamilyMedicalHistory}</Text> : null}
            <TextInput
              placeholder="其他家族病史"
              style={styles.input}
              value={otherFamilyMedicalHistory}
              onChangeText={(text) => setOtherFamilyMedicalHistory(text)}
              // 停用輸入框如果選擇了“無”
              editable={!familyMedicalHistory.includes('無')}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>生活習慣</Text>
            <View style={styles.lifestyleHabitsButtons}>
              <TouchableOpacity
                style={[
                  styles.lifestyleHabitsButton,
                  lifestyleHabits.includes('無') ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  toggleLifestyleHabits('無');
                }}
              >
                <Text>無</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.lifestyleHabitsButton,
                  lifestyleHabits.includes('吸菸') ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  toggleLifestyleHabits('吸菸');
                }}
              >
                <Text>吸菸</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.lifestyleHabitsButton,
                  lifestyleHabits.includes('喝酒') ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  toggleLifestyleHabits('喝酒');
                }}
              >
                <Text>喝酒</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.lifestyleHabitsButton,
                  lifestyleHabits.includes('嚼檳榔') ? { backgroundColor: '#7b7b8a' } : null,
                ]}
                onPress={() => {
                  toggleLifestyleHabits('嚼檳榔');
                }}
              >
                <Text>嚼檳榔</Text>
              </TouchableOpacity>
            </View>
            {errorLifestyleHabits ? <Text style={styles.errorText}>{errorLifestyleHabits}</Text> : null}
            <TextInput
              placeholder="其他生活習慣"
              style={styles.input}
              value={otherLifestyleHabits}
              onChangeText={(text) => setOtherLifestyleHabits(text)}
              // 停用輸入框如果選擇了“無”
              editable={!lifestyleHabits.includes('無')}
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
    marginBottom: 15,
    marginTop: 10,
  },
  input: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: 'gray',
    fontSize: 16,
    padding: 5,
  },
  medicalHistoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  medicalHistoryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    alignItems: 'center',
    borderRadius: 30,
  },
  lifestyleHabitsButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lifestyleHabitsButton: {
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

export default RegisterScreen3;
