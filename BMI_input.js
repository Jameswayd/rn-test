import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, DatePickerIOS } from 'react-native';

function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // State for selected date

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const calculateBmi = () => {
    const calculatedBMI = (weight / ((height / 100) * (height / 100))).toFixed(2);
    setBMI(calculatedBMI);
    setShowImage(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI 計算機</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="身高(公分)"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
        <TextInput
          style={styles.input}
          placeholder="體重(公斤)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />

        <Text style={styles.label}>選擇日期:</Text>
        <DatePickerIOS
          date={selectedDate}
          onDateChange={handleDateChange}
          mode="date"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={calculateBmi}>
        <Text style={styles.buttonText}>計算BMI</Text>
      </TouchableOpacity>

      {bmi > 0 && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>您目前的BMI為: {bmi}</Text>
        </View>
      )}

      {showImage && (
        <View style={styles.imageContainer}>
          <Image source={require('./assets/BMI.jpg')} style={styles.image} resizeMode="contain" />
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
    color: '#333',
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 5,
    borderColor:'#3D3D4C',
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 30,
  },
  button: {
    backgroundColor: '#3D3D4C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ddd', // Grey frame around the result
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
    color: '#333',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 380,
    height: 200,
    borderRadius: 0,
  },
});

export default BmiCalculator;
