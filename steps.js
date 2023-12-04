import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, DatePickerIOS, FlatList } from 'react-native';

function HealthDataInput() {
  const [stepCount, setStepCount] = useState(0);
  const [recordedDate, setRecordedDate] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [records, setRecords] = useState([]);
  const [showImage, setShowImage] = useState(false);

  const recordSteps = () => {
    const today = new Date().toDateString();
    setRecordedDate(today);
    const newRecord = { stepCount, recordedDate: today };
    setRecords([...records, newRecord]);
    console.log("記錄步數", stepCount, "於", today);
    setStepCount(0);
    setShowImage(true); // 設置 showImage 為 true 時記錄步數
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>記錄您的步數</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="輸入今日步數"
          keyboardType="numeric"
          value={stepCount.toString()}
          onChangeText={(value) => setStepCount(parseInt(value) || 0)}
        />
      </View>

      <Text style={styles.label}>選擇日期：</Text>
      <DatePickerIOS
        date={selectedDate}
        onDateChange={handleDateChange}
        mode="date"
        style={styles.datePicker}
      />

      <TouchableOpacity style={styles.button} onPress={recordSteps}>
        <Text style={styles.buttonText}>記錄步數</Text>
      </TouchableOpacity>

      {showImage && (
        <Image
          source={require('./assets/YS.png')}
          style={{ width: 380, height: 190, marginBottom: 10 }}
        />
      )}

      <FlatList
        data={records}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.recordItem}>
            <Text style={styles.recordText}>{`日期：${item.recordedDate}, 步數：${item.stepCount}`}</Text>
          </View>

        )}

      />
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
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  recordedDate: {
    fontSize: 25,
    marginBottom: 10,
  },
  recordItem: {
    marginTop: 5,
  },
  recordText: {
    fontSize: 18, // 設置所需的字體大小
  },
  datePicker: {
    width: '90%',
    marginBottom: 10,
  },
});

export default HealthDataInput;
