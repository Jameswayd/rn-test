import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, DatePickerIOS, TouchableOpacity, Alert } from 'react-native';

function HealthDataInput() {
    const [bloodSugar, setBloodSugar] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showImage, setShowImage] = useState(false);
  
    const handleBloodSugarChange = (value) => {
      // Check if the entered value is a valid integer between 1 and 200
      const intValue = parseInt(value, 10);
  
      if (!isNaN(intValue) && intValue >= 1 && intValue <= 200) {
        // If it's a valid integer, update the state
        setBloodSugar(String(intValue));
      } else {
        // If not a valid integer, do not update the state
        setBloodSugar('');
      }
    };
  
    const handleDateChange = (newDate) => {
      setSelectedDate(newDate);
    };
  
    const recordBloodSugar = () => {
      console.log("記錄血糖:");
      console.log("血糖指數:", bloodSugar);
      console.log("日期:", selectedDate);
      setBloodSugar('');
      setShowImage(true);
  
      // Call the function to check blood sugar level
      checkBloodSugar(parseInt(bloodSugar, 10));
    };
  
    const checkBloodSugar = (value) => {
      const lowerLimit = 80;
      const upperLimit = 110;
  
      if (value >= upperLimit) {
        Alert.alert(
          '高血糖',
          '您的血糖高於正常範圍,尋求醫生建議加以改善.'
        );
      } else if (value <= lowerLimit) {
        Alert.alert(
          '低血糖',
          '您的血糖低於正常範圍,尋求醫生建議加以改善.',
        );
      }
      // You can add additional conditions or actions based on your requirements
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>紀錄你的血糖</Text>
  
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="血糖指數"
            keyboardType="numeric"
            value={bloodSugar}
            onChangeText={handleBloodSugarChange}
          />
  
          <Text style={styles.label}>選擇日期:</Text>
          <DatePickerIOS
            date={selectedDate}
            onDateChange={handleDateChange}
            mode="date"
          />
        </View>
  
        <TouchableOpacity style={styles.button} onPress={recordBloodSugar}>
          <Text style={styles.buttonText}>Record Blood Sugar</Text>
        </TouchableOpacity>
  
        {showImage && (
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/BS.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
    );
  }
  
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 20,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    image: {
      width: 500,
      height: 250,
    },
    inputContainer: {
      width: '90%',
    },
    input: {
      backgroundColor: '#F2F2F2',
      padding: 10,
      borderRadius: 5,
      borderColor: '#3D3D4C',
      marginBottom: 20,
      fontSize: 16,
      borderRadius: 30,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    button: {
      backgroundColor: '#3D3D4C',
      padding: 15,
      borderRadius: 10,
      marginBottom:30,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
  });
  
  export default HealthDataInput;
