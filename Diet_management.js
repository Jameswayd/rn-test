import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const DietScreen = () => {
  const [chosenDate, setChosenDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(true);
  const navigation = useNavigation();

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setChosenDate(selectedDate);
    }
  };

  useEffect(() => {
    setShowDatePicker(true); // 顯示日期選擇器
  }, []); // 只在初始渲染時觸發

  const [foodItems, setFoodItems] = useState([
    { type: 'vegetables', name: '蔬菜', count: 0, dailyRecommendation: 4, goal: 5 },
    { type: 'fruits', name: '水果', count: 0, dailyRecommendation:3, goal: 4 },
    { type: 'meat', name: '肉類', count: 0, dailyRecommendation: 3, goal: 3},
    { type: 'rice', name: '米飯', count: 0, dailyRecommendation: 3, goal: 3 },
    { type: 'seafood', name: '海鮮', count: 0, dailyRecommendation: 2, goal: 1 },
    { type: 'dairy', name: '乳製品', count: 0, dailyRecommendation: 2, goal: 1 },
  ]);

  const handleAdd = (type) => {
    const updatedItems = foodItems.map((item) =>
      item.type === type ? { ...item, count: item.count + 1 } : item
    );
    setFoodItems(updatedItems);
  };

  const calculateRemaining = (consumed, recommendation) => {
    return recommendation - consumed;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.datePickerContainer}>
        <View style={styles.dateIcon}>
          <Image source={require('./assets/date.png')} style={styles.iconImage} />
        </View>
        <View style={styles.dateText}>
          <Text style={styles.dateTextContent}>選擇日期 :</Text>
        </View>
        <View style={styles.dateTimePicker}>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={chosenDate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
      </View>
      {foodItems.map((item) => (
        <View key={item.type} style={styles.foodItem}>
          {(item.type === 'vegetables' && <Image source={require('./assets/vegetables.png')} style={styles.foodImage} />) ||
            (item.type === 'fruits' && <Image source={require('./assets/fruits.png')} style={styles.foodImage} />) ||
            (item.type === 'meat' && <Image source={require('./assets/meat.png')} style={styles.foodImage} />) ||
            (item.type === 'rice' && <Image source={require('./assets/rice.png')} style={styles.foodImage} />) ||
            (item.type === 'seafood' && <Image source={require('./assets/seafood.png')} style={styles.foodImage} />) ||
            (item.type === 'dairy' && <Image source={require('./assets/dairy.png')} style={styles.foodImage} />)}
          <View style={styles.details}>
            <Text style={styles.text_title}>{item.name}</Text>
            <Text style={styles.text_content}>今日食用量: {item.count}</Text>
            <Text style={styles.text_content}>設定目標: {item.goal}</Text>
            <Text style={styles.text_content}>每日食用量建議: {item.dailyRecommendation}</Text>
            <TouchableOpacity onPress={() => handleAdd(item.type)} style={styles.addButton}>
              <Text style={styles.buttonText}>增加</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
       <TouchableOpacity onPress={() => navigation.navigate('設定飲食量')} style={styles.bottomButton}>
        <Text style={styles.buttonText2}>設定今日目標</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // 填滿可用空間
    paddingTop: 10, // 適當的頂部間距
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  dateText: {
    flex: 3,
    alignItems: 'center',
  },
  dateTextContent: {
    fontSize: 18,
  },
  dateIcon: {
    flex: 1,
    alignItems: 'center',
    marginRight:15,
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  dateText: {
    flex: 3,
    alignItems: 'center',
    fontSize: 25,
  },
  dateTimePicker: {
    flex: 6,
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#ECF5FF',
    borderRadius: 30,
    marginLeft:5,
    marginRight:5,
  },
  foodImage: {
    width: 90,
    height: 90,
    marginRight: 20,
  },
  details: {
    flex: 1,
    alignItems: 'flex-start',
  },
  text_title: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Arial',
    marginBottom: 5,
  },
  text_content: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Arial',
    marginBottom: 1,
  },
  addButton: {
    position: 'absolute',
    right: 5,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#3D3D4C',
    borderRadius: 20,
    width: '20%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  buttonText2: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  bottomButton: {
    backgroundColor: '#3D3D4C',
    borderRadius: 30,
    marginTop:10,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginRight: '10%',
    marginLeft: '10%',
    marginBottom: 10,
  },
});

export default DietScreen;
