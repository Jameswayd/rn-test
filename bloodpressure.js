import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, DatePickerIOS, TouchableOpacity } from 'react-native';

function HealthDataInput() {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showImage, setShowImage] = useState(false); // New state for image visibility

  const handleSystolicChange = (value) => {
    setSystolic(value);
  };

  const handleDiastolicChange = (value) => {
    setDiastolic(value);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const recordBloodPressure = () => {
    console.log("記錄血壓");
    console.log("收縮壓:", systolic);
    console.log("舒張壓:", diastolic);
    console.log("日期:", selectedDate);
    setSystolic('');
    setDiastolic('');
    setShowImage(true); // Set showImage to true after recording
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>記錄你的血壓</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="收縮壓"
          keyboardType="numeric"
          value={systolic}
          onChangeText={handleSystolicChange}
        />
        <TextInput
          style={styles.input}
          placeholder="舒張壓"
          keyboardType="numeric"
          value={diastolic}
          onChangeText={handleDiastolicChange}
        />
        <Text style={styles.label}>選擇日期：</Text>
        <DatePickerIOS
          date={selectedDate}
          onDateChange={handleDateChange}
          mode="date"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={recordBloodPressure}>
        <Text style={styles.buttonText}>記錄血壓</Text>
      </TouchableOpacity>

      {showImage && (
        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/BP.png')}
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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  imageContainer: {
    margintop: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 500,
    height: 240,
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
    marginBottom:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HealthDataInput;
